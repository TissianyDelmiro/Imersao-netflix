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

    // ========== Gerenciar Perfis - modo edição ==========
    const manageBtn = document.querySelector('.manage-profiles');
    let modoEdicao = false;

    if (manageBtn) {
        manageBtn.addEventListener('click', () => {
            modoEdicao = !modoEdicao;
            document.body.classList.toggle('modo-edicao', modoEdicao);
            manageBtn.textContent = modoEdicao ? 'Concluir' : 'Gerenciar perfis';
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
            const novoPerfil = { nome: nome, img: avatarSelecionado };
            perfisCustom.push(novoPerfil);
            localStorage.setItem('perfisCustom', JSON.stringify(perfisCustom));

            fecharModalCriar();
            // Adiciona só o novo, sem re-renderizar tudo
            adicionarPerfilNaTela(novoPerfil);
        });
    }

    // ESC fecha modal ou sai do modo edição
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modalCriar) fecharModalCriar();
            if (modoEdicao) {
                modoEdicao = false;
                document.body.classList.remove('modo-edicao');
                manageBtn.textContent = 'Gerenciar perfis';
            }
        }
    });

    // ========== Adicionar um perfil customizado na tela ==========
    function adicionarPerfilNaTela(perfil) {
        const nav = document.querySelector('.profiles');
        const addProfileEl = document.querySelector('.add-profile');

        const wrapper = document.createElement('div');
        wrapper.className = 'profile profile-custom';
        wrapper.style.position = 'relative';

        const link = document.createElement('a');
        link.href = 'catalogo/catalogo.html';
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

        const btnExcluir = document.createElement('button');
        btnExcluir.className = 'btn-excluir-perfil';
        btnExcluir.innerHTML = '<i class="fas fa-times"></i>';
        btnExcluir.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const lista = JSON.parse(localStorage.getItem('perfisCustom') || '[]');
            const novaLista = lista.filter(p => p.nome !== perfil.nome);
            localStorage.setItem('perfisCustom', JSON.stringify(novaLista));
            wrapper.style.transition = 'opacity 0.3s, transform 0.3s';
            wrapper.style.opacity = '0';
            wrapper.style.transform = 'scale(0.8)';
            wrapper.addEventListener('transitionend', () => {
                wrapper.remove();
            }, { once: true });
        });

        wrapper.appendChild(link);
        wrapper.appendChild(btnExcluir);
        nav.insertBefore(wrapper, addProfileEl);
    }

    // Renderiza perfis salvos ao carregar (só no load inicial)
    const perfisIniciais = JSON.parse(localStorage.getItem('perfisCustom') || '[]');
    perfisIniciais.forEach(perfil => adicionarPerfilNaTela(perfil));
});
