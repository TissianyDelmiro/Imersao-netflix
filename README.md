# 🎬 Netflix Clone - Projeto de Estudo

<div align="center">

![Status](https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge)
![Netflix Clone](https://img.shields.io/badge/Netflix-Clone-E50914?style=for-the-badge&logo=netflix&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

### Uma reprodução da interface da Netflix desenvolvida como projeto de estudo e portfólio durante a Imersão Alura - Front-End na Era da IA.

[Ver Demo](https://imersao-netflix-git-main-tissianydelmiros-projects.vercel.app) · [Reportar Bug](https://github.com/TissianyDelmiro/Imersao-netflix-/issues)

</div>

---

## 📌 Sobre o Projeto

> **Disclaimer:** Este projeto foi desenvolvido exclusivamente para **fins educacionais e de portfólio**. Não possui qualquer afiliação, vínculo ou endosso da Netflix Inc. Todas as marcas, logotipos e conteúdos pertencem aos seus respectivos proprietários.

Este projeto nasceu na **[Imersão Alura - Front-End na Era da IA](https://www.alura.com.br/imersao)**, uma imersão voltada para entender como páginas web são criadas e dar os primeiros passos no desenvolvimento front-end com apoio da Inteligência Artificial.

A proposta original da imersão era construir uma página inspirada na Netflix utilizando HTML, CSS e JavaScript. A partir dessa base, expandi o projeto significativamente, adicionando novas páginas, funcionalidades e integrações.

### 🤖 Ferramentas de IA utilizadas no desenvolvimento

Este projeto foi construído com o apoio de ferramentas de Inteligência Artificial, dentro da proposta da imersão de aprender a programar com auxílio de IA:

| Ferramenta | Como foi utilizada |
|---|---|
| **GitHub Copilot** | Autocompletar e sugestões de código durante a escrita do HTML/CSS/JS |
| **Claude Code (Anthropic)** | Apoio no desenvolvimento do front-end, estruturação de componentes, CSS avançado, lógica JavaScript e configuração do deploy |
| **Google Gemini** | Geração das imagens de avatar dos perfis |

> A utilização de IA como ferramenta de apoio ao desenvolvimento é uma habilidade cada vez mais valorizada no mercado. Neste projeto, a IA foi usada como assistente, enquanto as decisões de design, estrutura e funcionalidades foram tomadas pela desenvolvedora.

### Habilidades praticadas neste projeto:

- Desenvolvimento front-end responsivo
- Manipulação do DOM com JavaScript vanilla
- Integração com APIs externas (OMDB API)
- Deploy e configuração de serverless functions
- Versionamento de código com Git/GitHub
- Gerenciamento de estado com localStorage
- Uso de IA como ferramenta de produtividade

<img width="1920" height="945" alt="Tela de Perfis" src="https://github.com/user-attachments/assets/a4487e51-7801-40cd-be4b-c785072acd8f" />
<img width="1920" height="1815" alt="Catálogo" src="https://github.com/user-attachments/assets/5c18957c-211f-4c16-a0ff-1a880cfe11e0" />
<img width="1920" height="2485" alt="Catálogo Completo" src="https://github.com/user-attachments/assets/c2e413c5-fd57-4aab-afcc-347083e03d58" />
<img width="1920" height="1333" alt="Detalhes do Filme" src="https://github.com/user-attachments/assets/d3eabc66-3edb-4dbd-b988-cf1634636f0f" />

---

## ✨ Funcionalidades Implementadas

### 🎭 Sistema de Perfis
- Seleção de perfis com avatares personalizados
- Cada perfil possui seu próprio "Continuar assistindo"
- Troca de perfil via dropdown na navbar (sem recarregar página inicial)
- Persistência de dados com localStorage

### 🎬 Catálogo de Filmes e Séries
- Carrosséis horizontais com navegação por setas
- **Top 10** com numeração estilizada ao lado dos posters
- **Originais Netflix** com hero banner interativo ao clicar
- Cards com hover animado e reprodução de trailer via YouTube

### 🔍 Sistema de Busca com API
- Busca em tempo real integrada com a **OMDB API**
- Backend Node.js (serverless functions) protegendo a API key
- Resultados exibidos com poster, título, ano e tipo
- Navegação direta para página de detalhes

### 📄 Página de Detalhes
- Hero banner com imagem de fundo e efeito parallax
- Informações completas: sinopse, elenco, gênero, classificação
- Player de vídeo integrado (YouTube)
- Seção de títulos semelhantes
- Botões de interação (Assistir, Minha Lista, Like, Compartilhar)

### 🎨 Design e UX
- Interface fiel à Netflix original
- Backgrounds com gradientes e texturas customizadas (CSS puro)
- Animações e transições suaves
- Dark/Light mode na tela de perfis
- Totalmente responsivo (Desktop, Tablet e Mobile)
- Scrollbar personalizada e seleção de texto estilizada

**Paleta de Cores:**

<img width="740" height="493" alt="Paleta de Cores" src="https://github.com/user-attachments/assets/a5987b67-ea79-4c68-a9d0-64ba5046778c" />
<img width="740" height="423" alt="Paleta de Cores 2" src="https://github.com/user-attachments/assets/6dca976c-ad9f-4f1b-aac5-93101be67b4c" />

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Aplicação |
|---|---|
| **HTML5** | Estrutura semântica e acessibilidade |
| **CSS3** | Estilização avançada, gradientes, animações, Flexbox, Grid, media queries |
| **JavaScript (ES6+)** | Lógica de negócio, manipulação do DOM, localStorage, fetch API |
| **Node.js** | Backend para proxy seguro da API |
| **Express.js** | Servidor de desenvolvimento local |
| **OMDB API** | Dados de filmes e séries (busca e detalhes) |
| **Vercel** | Hospedagem com serverless functions |
| **Font Awesome** | Biblioteca de ícones |
| **Google Fonts** | Tipografia personalizada |
| **Git/GitHub** | Controle de versão |

---

## 📁 Estrutura do Projeto

```
Imersao-netflix/
├── index.html                  # Página de seleção de perfis
├── style.css                   # Estilos da página de perfis
├── script.js                   # Funcionalidade Dark/Light mode
├── server.js                   # Servidor Express (dev local)
├── js/
│   └── index.js                # Lógica de seleção e persistência de perfil
├── assets/
│   ├── perfil_1.png ... 4.png  # Avatares dos perfis (gerados por IA)
│   └── imagens/                # Imagens locais do projeto
│       ├── silva/              # Imagens do perfil Silva
│       ├── guilherme/          # Imagens do perfil Guilherme
│       ├── vick/               # Imagens do perfil Vick
│       ├── tissiany/           # Imagens do perfil Tissiany
│       ├── top10/              # Posters do Top 10
│       ├── netflix/            # Posters Originais Netflix
│       └── padrao/             # Imagens padrão (fallback)
├── catalogo/
│   ├── catalogo.html           # Página principal do catálogo
│   ├── catalogo.css            # Estilos do catálogo
│   ├── detalhes.html           # Página de detalhes do título
│   ├── detalhes.css            # Estilos da página de detalhes
│   └── js/
│       ├── app.js              # Dados, componentes e lógica principal
│       ├── busca.js            # Sistema de busca (OMDB API)
│       ├── perfis.js           # Dropdown de troca de perfis
│       └── detalhes.js         # Lógica da página de detalhes
├── api/                        # Serverless functions (Vercel)
│   ├── buscar.js               # GET /api/buscar?q=titulo
│   └── detalhes/[id].js        # GET /api/detalhes/:imdbID
├── vercel.json                 # Configuração de rotas da Vercel
├── package.json                # Dependências do projeto
├── .env                        # Variáveis de ambiente (não versionado)
└── .gitignore                  # Arquivos ignorados pelo Git
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (v18+)
- Chave gratuita da [OMDB API](https://www.omdbapi.com/apikey.aspx)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/TissianyDelmiro/Imersao-netflix-.git

# 2. Entre na pasta do projeto
cd Imersao-netflix-

# 3. Instale as dependências
npm install

# 4. Configure a variável de ambiente
echo "OMDB_API_KEY=sua_chave_aqui" > .env

# 5. Inicie o servidor de desenvolvimento
npm start
```

### Acesse no navegador
```
http://localhost:3000
```

> **Nota:** Sem o servidor, o projeto funciona normalmente abrindo o `index.html` direto no navegador. Apenas a funcionalidade de busca requer o servidor (ou o deploy na Vercel).

---

## 🌐 Deploy (Vercel)

O projeto está hospedado na **Vercel** com serverless functions para proteger a chave da API.

| Variável de Ambiente | Descrição |
|---|---|
| `OMDB_API_KEY` | Chave de acesso da OMDB API |

Para fazer seu próprio deploy:
1. Faça fork deste repositório
2. Importe o projeto na [Vercel](https://vercel.com)
3. Configure a variável `OMDB_API_KEY` em Environment Variables
4. Deploy automático

---

## 📚 Aprendizados

Este projeto permitiu praticar e consolidar conhecimentos em:

- **HTML Semântico** - Uso correto de tags para acessibilidade
- **CSS Avançado** - Gradientes complexos, animações, pseudo-elementos, responsividade
- **JavaScript Vanilla** - Sem dependência de frameworks, manipulação do DOM puro
- **Integração com APIs** - Consumo de API REST com fetch
- **Segurança** - Proteção de chaves de API com backend proxy
- **Deploy** - Configuração de CI/CD com Vercel e serverless functions
- **Git** - Versionamento, commits semânticos, .gitignore
- **IA como ferramenta** - Uso de Copilot e Claude Code como assistentes de desenvolvimento

---

## 👩‍💻 Autora

<div align="center">

**Tissiany Delmiro**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/TissianyDelmiro)

Projeto desenvolvido durante a [Imersão Alura - Front-End na Era da IA](https://www.alura.com.br/imersao), com funcionalidades expandidas além do escopo original.

</div>

---

## 🖼️ Créditos e Recursos

### Imagens

| Recurso | Fonte |
|---|---|
| Avatares dos perfis | Gerados por IA com **Google Gemini** |
| Posters de filmes e séries | Baixados de fontes públicas (TMDB, Wikipedia, IMDb) e salvos localmente |
| Logo Netflix | Wikimedia Commons |
| Ícones | Font Awesome |

### 🎨 Processo de criação dos Backgrounds

Os backgrounds customizados das páginas (catálogo e detalhes) foram criados inteiramente com **CSS puro** (gradientes, pseudo-elementos e texturas), sem uso de imagens de fundo externas. O processo criativo seguiu estas etapas:

1. **Pesquisa de referências** - Busca de imagens no Google com estilos visuais de interesse (gradientes neon, texturas de seda, faixas diagonais)
2. **Análise visual** - Identificação das cores, direções e efeitos presentes nas referências
3. **Tradução para CSS** - Reprodução dos efeitos usando `linear-gradient`, `radial-gradient`, `repeating-linear-gradient` e pseudo-elementos (`::before`, `::after`)
4. **Iteração e refinamento** - Ajustes de cores, opacidades e posições até alcançar o resultado desejado

> Os backgrounds não utilizam nenhuma imagem externa - são 100% código CSS, o que garante carregamento rápido e total controle sobre o visual.

### 🤖 Ferramentas de IA

| Ferramenta | Uso |
|---|---|
| [GitHub Copilot](https://github.com/features/copilot) | Autocompletar código |
| [Claude Code (Anthropic)](https://claude.ai/claude-code) | Assistente de desenvolvimento |
| [Google Gemini](https://gemini.google.com) | Geração de imagens dos avatares |

---

## 📝 Licença e Disclaimer

Este projeto é **exclusivamente para fins educacionais e de portfólio**. Não possui fins comerciais.

- A marca Netflix e seu logotipo são propriedade da **Netflix Inc.**
- Os posters e imagens dos filmes/séries pertencem aos seus respectivos estúdios e distribuidoras
- Este projeto não coleta dados pessoais nem realiza streaming de conteúdo

---

<div align="center">

Desenvolvido com ❤️ e IA por **Tissiany Delmiro** · 2026

*Projeto de estudo - Imersão Alura: Front-End na Era da IA*

</div>
