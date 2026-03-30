// ========== LOADING SCREEN ==========

// Cria o loading screen dinamicamente
(function () {
    // Força o scroll para o topo imediatamente
    window.scrollTo(0, 0);

    const loading = document.createElement('div');
    loading.id = 'loading-screen';
    loading.className = 'loading-screen';
    loading.innerHTML = `
        <div class="loading-logo">TISSYFLIX</div>
        <div class="loading-bar">
            <div class="loading-bar-progress"></div>
        </div>
    `;
    document.body.prepend(loading);

    // Esconde o conteúdo enquanto carrega
    document.body.style.overflow = 'hidden';

    // Quando a página carregar completamente
    window.addEventListener('load', () => {
        // Garante scroll no topo
        window.scrollTo(0, 0);

        setTimeout(() => {
            loading.classList.add('hidden');
            document.body.style.overflow = '';

            // Anima os elementos da página
            animatePageContent();
        }, 800);
    });

    // Fallback: esconde após 4 segundos
    setTimeout(() => {
        loading.classList.add('hidden');
        document.body.style.overflow = '';
        animatePageContent();
    }, 4000);
})();

// Anima os elementos da página ao carregar
function animatePageContent() {
    // Anima seções do catálogo
    const sections = document.querySelectorAll('.slider-section, .cta-banner, footer, .hero, .info-section, .similar-section, .trailer-section');
    sections.forEach((section, i) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 100 + (i * 150));
    });

    // Anima a navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.opacity = '0';
        navbar.style.transform = 'translateY(-20px)';
        navbar.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        setTimeout(() => {
            navbar.style.opacity = '1';
            navbar.style.transform = 'translateY(0)';
        }, 100);
    }

    // Anima perfis na página inicial
    const profiles = document.querySelectorAll('.profile');
    profiles.forEach((profile, i) => {
        profile.style.opacity = '0';
        profile.style.transform = 'translateY(20px) scale(0.95)';
        profile.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        setTimeout(() => {
            profile.style.opacity = '1';
            profile.style.transform = 'translateY(0) scale(1)';
        }, 200 + (i * 120));
    });

    // Anima botão gerenciar perfis
    const manageBtn = document.querySelector('.manage-profiles');
    if (manageBtn) {
        manageBtn.style.opacity = '0';
        manageBtn.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            manageBtn.style.opacity = '1';
        }, 800);
    }

    // Anima header da página inicial
    const header = document.querySelector('header');
    if (header) {
        header.style.opacity = '0';
        header.style.transform = 'translateY(-15px)';
        header.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        setTimeout(() => {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 100);
    }

    // Anima hero da página de detalhes
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
}

// Função global para mostrar loading
function showLoading(duration) {
    const loading = document.getElementById('loading-screen');
    if (loading) {
        loading.classList.remove('hidden');
        setTimeout(() => {
            loading.classList.add('hidden');
        }, duration || 600);
    }
}

// Mostra loading ao navegar para outra página
document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && link.href && !link.href.startsWith('#') && !link.target) {
        const loading = document.getElementById('loading-screen');
        if (loading) {
            document.body.style.overflow = 'hidden';
            loading.classList.remove('hidden');
        }
    }
});

// Loading nas ações internas do catálogo
document.addEventListener('DOMContentLoaded', () => {

    // Setas do carrossel
    document.addEventListener('click', (e) => {
        const arrow = e.target.closest('.nav-arrow');
        if (arrow) {
            showLoading(400);
        }
    });

    // Cards "Só na Netflix" (hero banner)
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.netflix-card');
        if (card) {
            showLoading(500);
        }
    });

    // Dropdown de perfis (troca de perfil)
    document.addEventListener('click', (e) => {
        const profileItem = e.target.closest('.dropdown-profile-item');
        if (profileItem) {
            showLoading(800);
        }
    });

    // Busca (ao digitar e buscar)
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && searchInput.value.trim().length >= 2) {
                showLoading(500);
            }
        });
    }

    // Cards "Continuar assistindo" (ir para detalhes)
    document.addEventListener('click', (e) => {
        const movieCard = e.target.closest('.movie-card:not(.netflix-card)');
        if (movieCard) {
            showLoading(600);
        }
    });

    // Botão "Assistir" na página de detalhes
    const btnPlay = document.getElementById('btn-play');
    if (btnPlay) {
        btnPlay.addEventListener('click', () => {
            showLoading(400);
        });
    }
});
