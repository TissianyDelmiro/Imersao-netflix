// ========== LOADING SCREEN ==========

// Cria o loading screen dinamicamente
(function () {
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

    // Esconde o loading quando a página carregar completamente
    window.addEventListener('load', () => {
        setTimeout(() => {
            loading.classList.add('hidden');
        }, 800);
    });

    // Fallback: esconde após 4 segundos caso algo trave
    setTimeout(() => {
        loading.classList.add('hidden');
    }, 4000);
})();

// Mostra loading ao navegar para outra página
document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && link.href && !link.href.startsWith('#') && !link.target) {
        const loading = document.getElementById('loading-screen');
        if (loading) {
            loading.classList.remove('hidden');
        }
    }
});
