// Extrai o ID do vídeo do YouTube da URL
function getYouTubeId(url) {
    if (!url) return null;
    if (url.includes('v=')) {
        return url.split('v=')[1].split('&')[0];
    }
    return url.split('/').pop().split('?')[0];
}

// Quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Recupera os dados do filme/série do localStorage
    const dados = JSON.parse(localStorage.getItem('detalhesFilme'));

    if (!dados) {
        // Se não houver dados, volta para o catálogo
        window.location.href = 'catalogo.html';
        return;
    }

    // Preenche o hero
    const backdrop = document.getElementById('hero-backdrop');
    const title = document.getElementById('hero-title');
    const year = document.getElementById('hero-year');
    const duration = document.getElementById('hero-duration');
    const desc = document.getElementById('hero-desc');
    const infoDesc = document.getElementById('info-desc');
    const tag = document.getElementById('hero-tag');
    const match = document.getElementById('hero-match');

    // Usa heroImg se existir, senão usa img
    const heroImage = dados.heroImg || dados.img;
    backdrop.style.backgroundImage = `url('${heroImage}')`;
    title.textContent = dados.name || 'Título';
    year.textContent = dados.year || '2024';
    duration.textContent = dados.duration || '1 Temporada';
    desc.textContent = dados.desc || '';
    infoDesc.textContent = dados.desc || '';

    if (dados.badge) {
        tag.textContent = dados.badge.toUpperCase();
    }

    if (dados.match) {
        match.textContent = dados.match;
    }

    if (dados.elenco) {
        document.getElementById('info-elenco').textContent = dados.elenco;
    }

    if (dados.generos) {
        document.getElementById('info-generos').textContent = dados.generos;
    }

    if (dados.tags) {
        const tagsContainer = document.getElementById('hero-tags');
        tagsContainer.innerHTML = '';
        dados.tags.forEach(t => {
            const span = document.createElement('span');
            span.textContent = t;
            tagsContainer.appendChild(span);
        });
    }

    // Atualiza o título da página
    document.title = `Netflix - ${dados.name || 'Detalhes'}`;

    // Botão Assistir - abre o player de vídeo
    const btnPlay = document.getElementById('btn-play');
    const videoPlayer = document.getElementById('video-player');
    const videoIframe = document.getElementById('video-iframe');
    const btnCloseVideo = document.getElementById('btn-close-video');

    if (dados.youtube) {
        const videoId = getYouTubeId(dados.youtube);

        btnPlay.addEventListener('click', () => {
            videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1`;
            videoPlayer.style.display = 'flex';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        btnCloseVideo.addEventListener('click', () => {
            videoIframe.src = '';
            videoPlayer.style.display = 'none';
        });
    } else {
        btnPlay.style.opacity = '0.5';
        btnPlay.style.cursor = 'default';
    }

    // Gera títulos semelhantes
    const similarGrid = document.getElementById('similar-grid');
    const allItems = JSON.parse(localStorage.getItem('continuarItems')) || [];

    allItems.forEach(item => {
        if (item.img === dados.img) return; // Não mostra o mesmo
        const card = document.createElement('div');
        card.className = 'similar-card';
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name || 'Título'}">
            <div class="similar-info">
                <p class="similar-name">${item.name || ''}</p>
            </div>
        `;
        similarGrid.appendChild(card);
    });
});
