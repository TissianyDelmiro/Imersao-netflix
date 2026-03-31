// Quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links de perfil
    const profiles = document.querySelectorAll('.profile');

    // Adiciona evento de clique em cada perfil
    profiles.forEach(profile => {
        profile.addEventListener('click', () => {
            // Pega o nome do perfil (texto do figcaption)
            const nome = profile.querySelector('figcaption').textContent;

            // Pega a imagem do perfil (src da img)
            const imagem = profile.querySelector('img').src;

            // Armazena no localStorage
            localStorage.setItem('perfilAtivoNome', nome);
            localStorage.setItem('perfilAtivoImagem', imagem);

            // O link vai navegar normalmente para catalogo.html
            console.log(`✅ Perfil salvo: ${nome}`);
        });
    });

    // ========== Modal Imersão Alura - botão Gerenciar Perfis ==========
    const manageBtn = document.querySelector('.manage-profiles');
    const modalImersao = document.getElementById('modal-imersao');
    const modalImersaoClose = document.getElementById('modal-imersao-close');
    const modalImersaoX = document.getElementById('modal-imersao-x');

    if (manageBtn && modalImersao) {
        manageBtn.addEventListener('click', () => {
            modalImersao.classList.add('active');
        });

        modalImersaoClose.addEventListener('click', () => {
            modalImersao.classList.remove('active');
        });

        modalImersaoX.addEventListener('click', () => {
            modalImersao.classList.remove('active');
        });
    }

    // ========== Modal Criar Perfil - botão + ==========
    const addProfile = document.querySelector('.add-profile');
    const modalCriar = document.getElementById('modal-criar-perfil');
    const modalCriarClose = document.getElementById('modal-criar-close');
    const modalCriarX = document.getElementById('modal-criar-x');
    const btnSalvar = document.getElementById('btn-salvar-perfil');
    const btnCancelar = document.getElementById('btn-cancelar-perfil');
    const inputNome = document.getElementById('input-nome-perfil');
    const avatarGrid = document.getElementById('modal-avatar-grid');
    const erroMsg = document.getElementById('modal-criar-erro');
    let avatarSelecionado = null;

    function fecharModalCriar() {
        modalCriar.classList.remove('active');
        inputNome.value = '';
        avatarSelecionado = null;
        erroMsg.textContent = '';
        document.querySelectorAll('.modal-avatar').forEach(a => a.classList.remove('selected'));
    }

    if (addProfile && modalCriar) {
        addProfile.addEventListener('click', () => {
            modalCriar.classList.add('active');
            setTimeout(() => inputNome.focus(), 300);
        });

        modalCriarClose.addEventListener('click', fecharModalCriar);
        modalCriarX.addEventListener('click', fecharModalCriar);
        btnCancelar.addEventListener('click', fecharModalCriar);

        // Seleção de avatar
        avatarGrid.addEventListener('click', (e) => {
            const avatar = e.target.closest('.modal-avatar');
            if (!avatar) return;

            document.querySelectorAll('.modal-avatar').forEach(a => a.classList.remove('selected'));
            avatar.classList.add('selected');
            avatarSelecionado = avatar.dataset.avatar;
        });

        // Salvar perfil
        btnSalvar.addEventListener('click', () => {
            const nome = inputNome.value.trim();

            if (!nome) {
                erroMsg.textContent = 'Digite um nome para o perfil.';
                return;
            }

            if (!avatarSelecionado) {
                erroMsg.textContent = 'Escolha um avatar.';
                return;
            }

            // Busca perfis salvos ou cria array vazio
            const perfisCustom = JSON.parse(localStorage.getItem('perfisCustom') || '[]');

            // Verifica se já existe
            if (perfisCustom.some(p => p.nome === nome)) {
                erroMsg.textContent = 'Ja existe um perfil com esse nome.';
                return;
            }

            // Limite de perfis
            if (perfisCustom.length >= 3) {
                erroMsg.textContent = 'Limite de perfis atingido (maximo 3).';
                return;
            }

            // Salva o novo perfil
            perfisCustom.push({ nome: nome, img: avatarSelecionado });
            localStorage.setItem('perfisCustom', JSON.stringify(perfisCustom));

            fecharModalCriar();
            renderizarPerfisCustom();
        });
    }

    // ESC fecha qualquer modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modalImersao) modalImersao.classList.remove('active');
            if (modalCriar) fecharModalCriar();
        }
    });

    // ========== Renderizar perfis customizados ==========
    function renderizarPerfisCustom() {
        const nav = document.querySelector('.profiles');
        const addProfileEl = document.querySelector('.add-profile');

        // Remove perfis custom anteriores
        document.querySelectorAll('.profile-custom').forEach(el => el.remove());

        const perfisCustom = JSON.parse(localStorage.getItem('perfisCustom') || '[]');

        perfisCustom.forEach(perfil => {
            const link = document.createElement('a');
            link.href = 'catalogo/catalogo.html';
            link.className = 'profile profile-custom';
            link.innerHTML = `
                <figure>
                    <img src="${perfil.img}" alt="${perfil.nome}" width="150" height="150">
                    <figcaption>${perfil.nome}</figcaption>
                </figure>
            `;

            link.addEventListener('click', () => {
                localStorage.setItem('perfilAtivoNome', perfil.nome);
                localStorage.setItem('perfilAtivoImagem', perfil.img);
            });

            nav.insertBefore(link, addProfileEl);
        });
    }

    // Renderiza perfis salvos ao carregar
    renderizarPerfisCustom();
});
