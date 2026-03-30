// Seleciona o botão de toggle do modo
const themeToggle = document.getElementById('theme-toggle');

// Seleciona o ícone dentro do botão
const themeIcon = document.getElementById('theme-icon');

// Função para aplicar o tema
function applyTheme(theme) {
    // Adiciona ou remove a classe 'light-mode' no body
    if (theme === 'light') {
        document.body.classList.add('light-mode'); // Ativa light mode
        themeIcon.textContent = '🌙'; // Muda ícone para lua
        themeIcon.setAttribute('aria-label', 'Ativar modo escuro'); // Acessibilidade
    } else {
        document.body.classList.remove('light-mode'); // Ativa dark mode
        themeIcon.textContent = '☀️'; // Muda ícone para sol
        themeIcon.setAttribute('aria-label', 'Ativar modo claro'); // Acessibilidade
    }
}

// Verifica se existe preferência salva no localStorage
const savedTheme = localStorage.getItem('theme');

// Aplica o tema salvo ou usa dark mode como padrão
if (savedTheme) {
    applyTheme(savedTheme); // Aplica tema salvo
} else {
    applyTheme('dark'); // Tema padrão é dark (Netflix style)
}

// Adiciona evento de clique no botão
themeToggle.addEventListener('click', () => {
    // Verifica qual tema está ativo
    const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';

    // Alterna para o tema oposto
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Aplica o novo tema
    applyTheme(newTheme);

    // Salva a preferência no localStorage
    localStorage.setItem('theme', newTheme);
});

// Detecta preferência do sistema operacional (opcional)
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Se não houver tema salvo, usa a preferência do sistema
if (!savedTheme) {
    if (prefersDarkScheme.matches) {
        applyTheme('dark'); // Sistema prefere dark mode
    } else {
        applyTheme('light'); // Sistema prefere light mode
    }
}
