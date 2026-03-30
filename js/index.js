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
});
