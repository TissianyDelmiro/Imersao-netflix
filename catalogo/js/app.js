// ========== UTILS ==========
// Extrai o ID do vídeo do YouTube da URL
function getYouTubeId(url) {
    if (!url) return "7RUA0IOfar8"; // ID padrão se não houver URL
    if (url.includes('v=')) {
        return url.split('v=')[1].split('&')[0]; // Formato: youtube.com/watch?v=ID
    }
    // Formato: youtu.be/ID?si=xxx - remove parâmetros extras
    return url.split('/').pop().split('?')[0];
}

// Gera uma pontuação aleatória de relevância entre 80-99%
function getRandomMatchScore() {
    return Math.floor(Math.random() * 20 + 80);
}

// Gera duração aleatória para filmes ou mostra temporadas para séries
function getRandomDuration(hasProgress) {
    return hasProgress ? '10 temporadas' : '2h ' + Math.floor(Math.random() * 59) + 'm';
}

// Gera classificação etária aleatória
function getRandomAgeBadge() {
    return Math.random() > 0.5 ? { text: 'A16', class: 'red-accent' } : { text: '16', class: '' };
}

// ========== DATA ==========

// "Continuar assistindo" diferente para cada perfil
const continuarAssistindoPorPerfil = {
    // Perfil Silva
    "Silva": [
        { img: "../assets/imagens/silva/vikings.jpg", heroImg: "../assets/imagens/silva/vikings-hero.jpg", progress: 65, badge: "Drama", badgeColor: "red", youtube: "https://youtu.be/x6rLjCrA5QQ?si=arIWigUFHdUwhzRv", name: "Vikings", desc: "A saga de Ragnar Lothbrok, um fazendeiro nórdico que se torna um grande líder viking, explorando novas terras e enfrentando batalhas épicas.", year: "2013", duration: "6 Temporadas", generos: "Ação, Drama, Aventura", tags: ["Épico", "Violento", "Histórico"] },
        { img: "../assets/imagens/silva/bridgerton.jpg", heroImg: "../assets/imagens/silva/bridgerton-hero.jpg", progress: 40, youtube: "https://youtu.be/_5OH1J3uKYE?si=e1EiXYP-wfotlfa-", name: "Bridgerton", desc: "Oito irmãos inseparáveis buscam amor e felicidade na alta sociedade de Londres.", year: "2020", duration: "4 temporadas", generos: "Romance", tags: ["Romance", "Drama"] },
        { img: "../assets/imagens/silva/voce.jpg", heroImg: "../assets/imagens/silva/voce-hero.jpg", progress: 20, youtube: "https://youtu.be/kAg80yxx3Pg?si=2RWvt5l9-CayKJ6h", name: "Você", desc: "Joe Goldberg é um homem charmoso e obsessivo que faz de tudo para se inserir na vida das pessoas que o fascinam.", year: "2023", duration: "5 Temporadas", generos: "Suspense, Drama, Thriller", tags: ["Perturbador", "Suspense", "Psicológico"] },
        { img: "../assets/imagens/silva/trigger.jpg", heroImg: "../assets/imagens/silva/trigger-hero.jpg", progress: 90, youtube: "https://youtu.be/xXot0mCGHnw?si=Lo4ipUgAr_8A_Z2-", name: "Trigger", desc: "Um ex-agente é forçado a voltar à ação quando descobre uma conspiração internacional que ameaça milhões de vidas.", year: "2025", duration: "1h 48m", generos: "Ação, Thriller", tags: ["Explosivo", "Ação", "Adrenalina"] },
    ],
    // Perfil Guilherme
    "Guilherme": [
        { img: "../assets/imagens/guilherme/transformers1.jpg", heroImg: "../assets/imagens/guilherme/transformers1-hero.jpg", progress: 75, badge: "Suspense", badgeColor: "red", youtube: "https://youtu.be/CbX_SIz_9fk?si=hGCMhi0hp-yHhSA7", name: "Transformers", desc: "Uma guerra épica entre robôs alienígenas traz o caos à Terra, e um jovem comum se torna a chave para a sobrevivência da humanidade.", year: "2007", duration: "2h 24m", generos: "Ação, Ficção Científica", tags: ["Explosivo", "Ficção", "Épico"] },
        { img: "../assets/imagens/guilherme/transformers2.jpg", heroImg: "../assets/imagens/guilherme/transformers2-hero.jpg", progress: 30, youtube: "https://youtu.be/fnXzKwUgDhg?si=3QJW5yHRV1nHhUfB", name: "Transformers: A Vingança dos Derrotados", desc: "Sam Witwicky descobre antigos segredos Cybertronianos enquanto os Decepticons planejam sua vingança contra a Terra.", year: "2009", duration: "2h 30m", generos: "Ação, Ficção Científica", tags: ["Ação", "Aventura", "Robôs"] },
        { img: "../assets/imagens/guilherme/transformers3.jpg", heroImg: "../assets/imagens/guilherme/transformers3-hero.jpg", progress: 55, youtube: "https://youtu.be/XeUtb5L9iNE?si=ORWQvMVbXGfgjEEt", name: "Transformers: O Lado Oculto da Lua", desc: "Os Autobots descobrem uma nave Cybertroniana escondida na Lua, desencadeando uma batalha final pelo destino da Terra.", year: "2011", duration: "2h 34m", generos: "Ação, Ficção Científica", tags: ["Épico", "Intenso", "Ficção"] },
        { img: "../assets/imagens/guilherme/transformers4.jpg", heroImg: "../assets/imagens/guilherme/transformers4-hero.jpg", progress: 10, youtube: "https://youtu.be/T9bQCAWahLk?si=aFXe5yCaQzPE1W3W", name: "Transformers: A Era da Extinção", desc: "Um inventor encontra Optimus Prime em estado crítico enquanto uma nova ameaça tenta exterminar tanto humanos quanto Transformers.", year: "2014", duration: "2h 45m", generos: "Ação, Ficção Científica", tags: ["Explosivo", "Ação", "Aventura"] },
    ],
    // Perfil Vick
    "Vick": [
        { img: "../assets/imagens/vick/legalmente-loira.jpg", heroImg: "../assets/imagens/vick/legalmente-loira-hero.jpg", progress: 80, badge: "Comédia", badgeColor: "red", youtube: "https://youtu.be/qAB9dJI7c3U?si=DY5cXBgPb3qJDDC2", name: "Legalmente Loira 2", desc: "Elle Woods vai a Washington D.C. para lutar pelos direitos dos animais, provando mais uma vez que ninguém deve subestimá-la.", year: "2003", duration: "1h 35m", generos: "Comédia, Romance", tags: ["Divertido", "Comédia", "Empoderamento"] },
        { img: "../assets/imagens/vick/crepusculo.jpg", heroImg: "../assets/imagens/vick/crepusculo-hero.jpg", progress: 45, youtube: "https://youtu.be/1lxy7HMBc7s?si=_9bDaged4lLw3ICY", name: "A Saga Crepúsculo: Lua Nova", desc: "Depois da partida de Edward, Jacob se transforma no melhor amigo de Bella. Mas o que ela não imagina é que Jacob também tem um segredo que mudará suas vidas repentinamente.", year: "2021", duration: "2h 10m", generos: "Romance/Fantasia", tags: ["Drama", "Romântico", "Fantasia"] },
        { img: "../assets/imagens/vick/diarios-vampiro.jpg", heroImg: "../assets/imagens/vick/diarios-vampiro-hero.jpg", progress: 60, youtube: "https://youtu.be/BmVmhjjkN4E?si=EgmiwhG1yoKGzeCl", name: "Diários de um Vampiro", desc: "Elena Gilbert se vê atraída por um novo estudante misterioso, Stefan, sem saber que o jovem é um vampiro centenário. Seu irmão Damon, porém, é o típico estereótipo de vampiro, incluindo a violência e a brutalidade.", year: "2009", duration: "8 temporadas", generos: "Drama", tags: ["Romance", "Fantasia", "Drama"] },
        { img: "../assets/imagens/vick/brooklyn99.jpg", heroImg: "../assets/imagens/vick/brooklyn99-hero.jpg", progress: 15, youtube: "https://youtu.be/sEOuJ4z5aTc?si=8jrnNxBj0CjRXaZP", name: "Brooklyn Nine-Nine", desc: "Detetives excêntricos da delegacia 99 do Brooklyn resolvem crimes enquanto lidam com situações absurdas e hilariantes.", year: "2021", duration: "8 Temporadas", generos: "Comédia, Policial", tags: ["Divertido", "Leve", "Policial"] },
    ],
    // Perfil Tissiany
    "Tissiany": [
        { img: "../assets/imagens/tissiany/all-of-us-are-dead.jpg", heroImg: "../assets/imagens/tissiany/all-of-us-are-dead-hero.jpg", progress: 50, badge: "Drama", badgeColor: "red", youtube: "https://youtu.be/IN5TD4VRcSM?si=a140dTqfOiEBvplB", name: "All of Us Are Dead", desc: "Um grupo de estudantes presos em uma escola precisa lutar para sobreviver quando um surto de zumbis toma conta da cidade.", year: "2022", duration: "1 Temporada", generos: "Terror, Ação, Drama", tags: ["Tenso", "Terror", "Zumbis"] },
        { img: "../assets/imagens/tissiany/my-name.jpg", heroImg: "../assets/imagens/tissiany/my-name-hero.jpg", progress: 35, youtube: "https://youtu.be/miw-wW6ka14?si=P0QLRIrYkmjoQM-u", name: "My Name", desc: "Para vingar a morte do pai, uma jovem se infiltra na polícia sob as ordens de um poderoso chefe do crime.", year: "2021", duration: "1 Temporada", generos: "Ação, Thriller, K-Drama", tags: ["Vingança", "Ação", "Intenso"] },
        { img: "../assets/imagens/tissiany/desencanto.jpg", heroImg: "../assets/imagens/tissiany/desencanto-hero.jpg", progress: 70, youtube: "https://youtu.be/Dkgw8A-XiO0?si=zCUuxRwLzD4KAKXU", name: "Desencanto", desc: "Toda princesa tem seus deveres, mas ela quer mesmo é encher a cara. E com um elfo e um demônio como parceiros, levar o rei à loucura será uma tarefa fácil.", year: "2018", duration: "5 Temporada", generos: "Animação, Aventura, Fantasia", tags: ["Mistério", "Sátira", "Comédia"] },
        { img: "../assets/imagens/tissiany/sweet-home.jpg", heroImg: "../assets/imagens/tissiany/sweet-home-hero.jpg", progress: 25, youtube: "https://youtu.be/7rI56NmD33Y?si=MHuTperZBtmoSPmP", name: "Sweet Home", desc: "Moradores de um conjunto habitacional lutam para sobreviver quando humanos começam a se transformar em monstros baseados em seus desejos.", year: "2023", duration: "3 Temporadas", generos: "Terror, Drama, Ficção", tags: ["Assustador", "Intenso", "Sobrenatural"] },
    ]
};

// Lista padrão caso o perfil não seja encontrado
const continuarAssistindoPadrao = [
    { img: "../assets/imagens/padrao/forrest-gump.jpg", progress: 50, badge: "Clássico", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=bLvqoHBptjg" },
    { img: "../assets/imagens/padrao/gladiador.jpg", progress: 80, youtube: "https://www.youtube.com/watch?v=cXg62-t8BWs" },
    { img: "../assets/imagens/padrao/interstellar.jpg", progress: 30, youtube: "https://www.youtube.com/watch?v=zckJCxYxn1g" },
    { img: "../assets/imagens/padrao/intocaveis.jpg", progress: 10, youtube: "https://www.youtube.com/watch?v=a06zxOyQrAs" },
];

// Pega o perfil ativo do localStorage
const perfilAtivo = localStorage.getItem('perfilAtivoNome');

// Seleciona os items do "Continuar assistindo" baseado no perfil
const itemsContinuar = continuarAssistindoPorPerfil[perfilAtivo] || continuarAssistindoPadrao;

// Array com todas as categorias e filmes/séries
const categories = [
    {
        title: "Continuar assistindo",
        items: itemsContinuar
    },
    {
        title: "Top 10 em filmes no Brasil",
        isTop10Numbered: true, // Flag para renderizar com número grande
        items: [
            { img: "../assets/imagens/top10/peaky.jpg", rank: 1 },
            { img: "../assets/imagens/top10/maquina.jpg", rank: 2 },
            { img: "../assets/imagens/top10/stratton.jpg", rank: 3 },
            { img: "../assets/imagens/top10/firebreak.jpg", rank: 4 },
            { img: "../assets/imagens/top10/salverosa.jpg", rank: 5 },
            { img: "../assets/imagens/top10/animais.jpg", rank: 6 },
            { img: "../assets/imagens/top10/vestida.jpg", rank: 7 },
            { img: "../assets/imagens/top10/made-korea.jpg", rank: 8 },
            { img: "../assets/imagens/top10/shark.jpg", rank: 9 },
            { img: "../assets/imagens/top10/risco.jpg", rank: 10 },
        ]

    },
    {
        title: "Só na Netflix",
        isNetflixOriginal: true,
        items: [
            { img: "../assets/imagens/netflix/peaky-filme.jpg", name: "Peaky Blinders: O Homem Imortal", desc: "Após o filho se envolver em um complô nazista, o gângster Tommy Shelby precisa deixar o exílio e voltar a Birmingham para salvar a família e a nação.", year: "2026", seasons: "1h 52m" },
            { img: "../assets/imagens/netflix/frankenstein.jpg", name: "Frankenstein", desc: "Um cientista brilhante, mas egoísta, traz uma criatura monstruosa à vida em um experimento ousado que, em última análise, leva à ruína tanto do criador quanto de sua trágica criação.", year: "2025", seasons: "2h 30m", badge: "Novidade" },
            { img: "../assets/imagens/netflix/onepiece.jpg", name: "One Piece", desc: "O pirata Monkey D. Luffy e sua tripulação exploram um mundo fantástico de oceanos infinitos e ilhas exóticas em busca do maior tesouro do mundo. Luffy tem apenas um objetivo: se tornar o próximo Rei dos Piratas.", year: "2023", seasons: "2 Temporada", badge: "Nova temporada" },
            { img: "../assets/imagens/netflix/kpop.jpg", name: "Guerreiras do K-Pop", desc: "Quando não estão lotando estádios, as estrelas do K-pop Rumi, Mira e Zoey usam seus poderes secretos para proteger os fãs de ameaças sobrenaturais..", year: "2025", seasons: "1h 36m", badge: "Novidade" },
            { img: "../assets/imagens/netflix/wandinha.jpg", name: "Wandinha", desc: "Inteligente, sarcástica e apática, Wandinha Addams pode estar meio morta por dentro, mas na Escola Nunca Mais ela vai fazer amigos, inimigos e investigar assassinatos.", year: "2022", seasons: "2 Temporadas" },
            { img: "../assets/imagens/netflix/arcane.jpg", name: "Arcane", desc: "Em meio ao conflito entre as cidades-gêmeas de Piltover e Zaun, duas irmãs lutam em lados opostos de uma guerra entre tecnologias mágicas e convicções incompatíveis.", year: "2021", seasons: "2 Temporada" },
            { img: "../assets/imagens/netflix/round6.jpg", name: "Round 6", desc: "Um grupo de pessoas passando por dificuldades financeiras aceita um estranho convite para um jogo de sobrevivência. Um prêmio bilionário os aguarda, mas as apostas são altas e mortais.", year: "2021", seasons: "3 Temporadas" },
            { img: "../assets/imagens/netflix/stranger-things.jpg", name: "Stranger Things", desc: "Quando um garoto desaparece, uma pequena cidade descobre um mistério envolvendo experiências secretas e forças sobrenaturais.", year: "2022", seasons: "4 Temporadas", badge: "Novo episódio" },
            { img: "../assets/imagens/netflix/joe-viagem.jpg", name: "Joe e a Viagem de Carro", desc: "Joe, o irmão desajustado de Madea, leva seu neto tímido e certinho em uma viagem pelo país para que o garoto conheça o mundo real. Os dois embarcam em uma jornada de amadurecimento e autoconhecimento em meio a prostitutas e perseguição policial.", year: "2026", seasons: "1h 51", badge: "Comédia" },
            { img: "../assets/imagens/netflix/dinheiro-suspeito.jpg", name: "Dinheiro Suspeito", desc: "Um grupo de policiais de Miami descobre um esconderijo com milhões em dinheiro vivo, gerando desconfiança à medida que pessoas de fora ficam sabendo da apreensão, fazendo-os questionar em quem podem confiar..", year: "2026", seasons: "1h 52m", badge: "Filme" },
        ]
    }
];

// ========== CARD COMPONENT ==========
// Cria um card Top 10 com número grande + imagem
function createTop10Card(item) {
    const card = document.createElement('div');
    card.className = 'top10-card';

    // Número grande
    const number = document.createElement('span');
    number.className = 'top10-number';
    number.textContent = item.rank;
    card.appendChild(number);

    // Container da imagem
    const imgContainer = document.createElement('div');
    imgContainer.className = 'top10-img-container';

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = `Top ${item.rank}`;
    imgContainer.appendChild(img);

    card.appendChild(imgContainer);

    return card;
}

// Cria um card individual de filme/série
function createCard(item) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    if (item.progress) {
        card.classList.add('has-progress');
    }

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = `Movie cover`;

    const iframe = document.createElement('iframe');
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; encrypted-media";

    const videoId = getYouTubeId(item.youtube);

    card.appendChild(iframe);
    card.appendChild(img);

    const ageBadge = getRandomAgeBadge();

    const details = document.createElement('div');
    details.className = 'card-details';
    details.innerHTML = `
        <div class="details-buttons">
            <div class="left-buttons">
                <button class="btn-icon btn-play-icon"><i class="fas fa-play" style="margin-left:2px;"></i></button>
                ${item.progress ? '<button class="btn-icon"><i class="fas fa-check"></i></button>' : '<button class="btn-icon"><i class="fas fa-plus"></i></button>'}
                <button class="btn-icon"><i class="fas fa-thumbs-up"></i></button>
            </div>
            <div class="right-buttons">
                <button class="btn-icon"><i class="fas fa-chevron-down"></i></button>
            </div>
        </div>
        <div class="details-info">
            <span class="match-score">${getRandomMatchScore()}% relevante</span>
            <span class="age-badge ${ageBadge.class}">${ageBadge.text}</span>
            <span class="duration">${getRandomDuration(item.progress)}</span>
            <span class="resolution">HD</span>
        </div>
        <div class="details-tags">
            <span>Empolgante</span>
            <span>Animação</span>
            <span>Ficção</span>
        </div>
    `;
    card.appendChild(details);

    // Adiciona barra de progresso se o item tiver progresso
    if (item.progress) {
        const pbContainer = document.createElement('div');
        pbContainer.className = 'progress-bar-container';
        const pbValue = document.createElement('div');
        pbValue.className = 'progress-value';
        pbValue.style.width = `${item.progress}%`;
        pbContainer.appendChild(pbValue);
        card.appendChild(pbContainer);
    }

    // Eventos de hover para reproduzir trailer
    let playTimeout;
    card.addEventListener('mouseenter', () => {
        const rect = card.getBoundingClientRect();
        const windowWidth = window.innerWidth;

        // Define a origem da escala baseado na posição do card
        if (rect.left < 100) {
            card.classList.add('origin-left');
        } else if (rect.right > windowWidth - 100) {
            card.classList.add('origin-right');
        }

        // Aguarda 600ms antes de começar a reproduzir o vídeo
        playTimeout = setTimeout(() => {
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videoId}`;
            iframe.classList.add('playing');
            img.classList.add('playing-video');
        }, 600);
    });

    card.addEventListener('mouseleave', () => {
        clearTimeout(playTimeout);
        iframe.classList.remove('playing');
        img.classList.remove('playing-video');
        iframe.src = "";
        card.classList.remove('origin-left');
        card.classList.remove('origin-right');
    });

    // Clique no card abre a página de detalhes
    if (item.name) {
        card.addEventListener('click', () => {
            localStorage.setItem('detalhesFilme', JSON.stringify(item));
            localStorage.setItem('continuarItems', JSON.stringify(
                (continuarAssistindoPorPerfil[perfilAtivo] || continuarAssistindoPadrao)
            ));
            window.location.href = 'detalhes.html';
        });
    }

    return card;
}

// ========== CAROUSEL COMPONENT ==========
// Cria um carrossel completo de filmes/séries
function createCarousel(category) {
    const section = document.createElement('div');
    section.className = 'slider-section';

    // Cabeçalho com título e indicadores
    const header = document.createElement('div');
    header.className = 'slider-header';

    const title = document.createElement('h2');
    title.className = 'slider-title';
    title.innerText = category.title;

    const indicators = document.createElement('div');
    indicators.className = 'slider-indicators';

    header.appendChild(title);
    header.appendChild(indicators);
    section.appendChild(header);

    // Verifica se a seção deve ter setas de navegação
    const hasArrows = category.title === "Top 10 em filmes no Brasil" ||
                      category.title === "Só na Netflix";

    // Container que vai segurar a row e as setas
    const rowWrapper = document.createElement('div');
    rowWrapper.className = 'row-wrapper';
    rowWrapper.style.position = 'relative';

    // Linha com todos os cards
    const row = document.createElement('div');
    row.className = 'movie-row';
    if (hasArrows) {
        row.style.overflowX = 'scroll'; // Ativa scroll para seções com setas
    }

    category.items.forEach(item => {
        let card;

        if (category.isTop10Numbered) {
            // Card com número grande
            card = createTop10Card(item);
        } else if (category.isNetflixOriginal) {
            // Card simples (sem vídeo) - apenas imagem clicável
            card = document.createElement('div');
            card.className = 'movie-card netflix-card';
            const img = document.createElement('img');
            img.src = item.img;
            img.alt = item.name || 'Netflix Original';
            card.appendChild(img);
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                showHero(item);
            });
        } else {
            // Card normal com vídeo
            card = createCard(item);
        }

        row.appendChild(card);
    });

    // Adiciona setas para seções selecionadas
    if (hasArrows) {
        // Seta Esquerda
        const leftBtn = document.createElement('button');
        leftBtn.className = 'nav-arrow nav-arrow-left';
        leftBtn.innerHTML = '❮';
        leftBtn.onclick = () => {
            row.scrollBy({ left: -600, behavior: 'smooth' });
        };

        // Seta Direita
        const rightBtn = document.createElement('button');
        rightBtn.className = 'nav-arrow nav-arrow-right';
        rightBtn.innerHTML = '❯';
        rightBtn.onclick = () => {
            row.scrollBy({ left: 600, behavior: 'smooth' });
        };

        // Controla visibilidade das setas
        const updateArrows = () => {
            leftBtn.style.display = row.scrollLeft > 10 ? 'flex' : 'none';
            rightBtn.style.display =
                row.scrollLeft < row.scrollWidth - row.clientWidth - 10 ? 'flex' : 'none';
        };

        row.addEventListener('scroll', updateArrows);
        setTimeout(updateArrows, 100); // Verifica após carregar

        rowWrapper.appendChild(leftBtn);
        rowWrapper.appendChild(row);
        rowWrapper.appendChild(rightBtn);
    } else {
        rowWrapper.appendChild(row);
    }

    section.appendChild(rowWrapper);
    return section;
}

// ========== HERO BANNER ==========
// Cria o banner hero no topo da página
function createHeroBanner() {
    const hero = document.createElement('div');
    hero.id = 'hero-banner';
    hero.className = 'hero-banner';
    hero.style.display = 'none'; // Escondido por padrão

    hero.innerHTML = `
        <div class="hero-backdrop" id="hero-backdrop"></div>
        <div class="hero-gradient"></div>
        <div class="hero-content">
            <span class="hero-tag">ORIGINAL NETFLIX</span>
            <h1 class="hero-title" id="hero-title"></h1>
            <div class="hero-info">
                <span class="hero-match">97% relevante</span>
                <span class="hero-year" id="hero-year"></span>
                <span class="hero-seasons" id="hero-seasons"></span>
                <span class="hero-quality">HD</span>
                <span class="hero-quality">5.1</span>
            </div>
            <p class="hero-desc" id="hero-desc"></p>
        </div>
        <button class="hero-close" id="hero-close">✕</button>
    `;

    return hero;
}

// Atualiza o hero banner com os dados do item clicado
function showHero(item) {
    const hero = document.getElementById('hero-banner');
    const backdrop = document.getElementById('hero-backdrop');
    const title = document.getElementById('hero-title');
    const year = document.getElementById('hero-year');
    const seasons = document.getElementById('hero-seasons');
    const desc = document.getElementById('hero-desc');

    backdrop.style.backgroundImage = `url('${item.img}')`;
    title.textContent = item.name || 'Netflix Original';
    year.textContent = item.year || '2024';
    seasons.textContent = item.seasons || '1 Temporada';
    desc.textContent = item.desc || '';

    hero.style.display = 'block';

    // Scroll suave para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== MAIN ==========
// Quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Recupera dados do perfil do localStorage
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    // Atualiza o nome e imagem do perfil na navbar
    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');

        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    // Busca o container principal
    const container = document.getElementById('main-content');

    if (container) {
        // Cria e adiciona o hero banner no topo
        const hero = createHeroBanner();
        container.insertBefore(hero, container.firstChild);

        // Botão de fechar o hero
        document.getElementById('hero-close').addEventListener('click', () => {
            document.getElementById('hero-banner').style.display = 'none';
        });

        // Cria e adiciona todos os carrosséis
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
