// ========== DROPDOWN DE PERFIS ==========
document.addEventListener('DOMContentLoaded', () => {
    // Lista de perfis (mesmo do index.html)
    const listaPerfis = [
        { nome: 'Silva', img: '../assets/perfil_1.png' },
        { nome: 'Guilherme', img: '../assets/perfil_2.png' },
        { nome: 'Vick', img: '../assets/perfil_3.png' },
        { nome: 'Tissiany', img: '../assets/perfil_4.png' },
    ];

    const dropdown = document.getElementById('profile-dropdown');
    const profileMenuEl = document.getElementById('profile-menu');
    const profileCaret = document.getElementById('profile-caret');
    const dropdownProfiles = document.getElementById('dropdown-profiles');

    if (!dropdown || !profileMenuEl || !dropdownProfiles) return;

    // Perfil ativo atual
    const perfilAtivoNome = localStorage.getItem('perfilAtivoNome');

    // Preenche o dropdown com os perfis (exceto o ativo)
    listaPerfis.forEach(perfil => {
        if (perfil.nome === perfilAtivoNome) return;

        const item = document.createElement('div');
        item.className = 'dropdown-profile-item';
        item.innerHTML = `
            <img src="${perfil.img}" alt="${perfil.nome}">
            <span>${perfil.nome}</span>
        `;

        item.addEventListener('click', (e) => {
            e.stopPropagation();
            localStorage.setItem('perfilAtivoNome', perfil.nome);
            localStorage.setItem('perfilAtivoImagem', perfil.img);
            window.location.reload();
        });

        dropdownProfiles.appendChild(item);
    });

    // Abre/fecha o dropdown ao clicar
    profileMenuEl.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle('active');
        profileCaret.classList.toggle('rotated');
    });

    // Fecha ao clicar fora
    document.addEventListener('click', () => {
        dropdown.classList.remove('active');
        profileCaret.classList.remove('rotated');
    });

    // Fecha com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            dropdown.classList.remove('active');
            profileCaret.classList.remove('rotated');
        }
    });
});
