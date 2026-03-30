// ========== BUSCA COM OMDB API ==========

const searchToggle = document.getElementById('search-toggle');
const searchInput = document.getElementById('search-input');
const searchContainer = document.getElementById('search-container');
const searchOverlay = document.getElementById('search-overlay');
const searchResults = document.getElementById('search-results');
const searchClose = document.getElementById('search-close');

// Abre/fecha a barra de busca ao clicar no ícone
searchToggle.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
        searchInput.focus();
    } else {
        searchInput.value = '';
        searchOverlay.style.display = 'none';
    }
});

// Fecha a busca ao clicar no X
searchClose.addEventListener('click', () => {
    searchOverlay.style.display = 'none';
    searchContainer.classList.remove('active');
    searchInput.value = '';
});

// Timer para debounce
let searchTimer;

// Busca ao digitar (com debounce de 500ms)
searchInput.addEventListener('input', () => {
    clearTimeout(searchTimer);
    const query = searchInput.value.trim();

    if (query.length < 2) {
        searchOverlay.style.display = 'none';
        return;
    }

    searchTimer = setTimeout(() => {
        buscarFilmes(query);
    }, 500);
});

// Busca ao pressionar Enter
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        clearTimeout(searchTimer);
        const query = searchInput.value.trim();
        if (query.length >= 2) {
            buscarFilmes(query);
        }
    }
});

// Fecha com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchOverlay.style.display = 'none';
        searchContainer.classList.remove('active');
        searchInput.value = '';
    }
});

// Função de busca
async function buscarFilmes(query) {
    searchResults.innerHTML = '<div class="search-loading"><div class="spinner"></div><p>Buscando...</p></div>';
    searchOverlay.style.display = 'block';

    try {
        const response = await fetch(`/api/buscar?q=${encodeURIComponent(query)}`);
        const data = await response.json();

        if (data.error) {
            searchResults.innerHTML = `<div class="search-empty"><p>${data.error}</p></div>`;
            return;
        }

        if (!data.results || data.results.length === 0) {
            searchResults.innerHTML = '<div class="search-empty"><p>Nenhum resultado encontrado</p></div>';
            return;
        }

        renderResults(data.results);
    } catch (error) {
        searchResults.innerHTML = '<div class="search-empty"><p>Erro de conexão. Verifique se o servidor está rodando.</p></div>';
    }
}

// Renderiza os resultados
function renderResults(results) {
    searchResults.innerHTML = '';

    results.forEach(item => {
        const card = document.createElement('div');
        card.className = 'search-card';

        const poster = item.Poster !== 'N/A' ? item.Poster : 'https://via.placeholder.com/300x450/141414/808080?text=Sem+Imagem';

        card.innerHTML = `
            <img src="${poster}" alt="${item.Title}" onerror="this.src='https://via.placeholder.com/300x450/141414/808080?text=Sem+Imagem'">
            <div class="search-card-info">
                <h3>${item.Title}</h3>
                <div class="search-card-meta">
                    <span class="search-year">${item.Year}</span>
                    <span class="search-type">${item.Type === 'movie' ? 'Filme' : 'Série'}</span>
                </div>
            </div>
        `;

        // Ao clicar, busca detalhes completos
        card.addEventListener('click', () => {
            buscarDetalhes(item.imdbID);
        });

        searchResults.appendChild(card);
    });
}

// Busca detalhes e abre a página
async function buscarDetalhes(imdbID) {
    try {
        const response = await fetch(`/api/detalhes/${imdbID}`);
        const data = await response.json();

        if (data.Response === 'False') return;

        // Salva os dados no localStorage para a página de detalhes
        const detalhes = {
            img: data.Poster !== 'N/A' ? data.Poster : '',
            heroImg: data.Poster !== 'N/A' ? data.Poster : '',
            name: data.Title,
            desc: data.Plot,
            year: data.Year,
            duration: data.Type === 'series' ? data.totalSeasons + ' Temporadas' : data.Runtime,
            generos: data.Genre,
            elenco: data.Actors,
            tags: data.Genre ? data.Genre.split(', ').slice(0, 3) : [],
            badge: data.Type === 'series' ? 'SÉRIE' : 'FILME',
            match: data.imdbRating ? data.imdbRating + '/10 IMDb' : '96% relevante'
        };

        localStorage.setItem('detalhesFilme', JSON.stringify(detalhes));
        window.location.href = 'detalhes.html';
    } catch (error) {
        console.error('Erro ao buscar detalhes:', error);
    }
}
