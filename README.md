# 🎬 Netflix Clone - Imersão Alura

<div align="center">

![Netflix Clone](https://img.shields.io/badge/Netflix-Clone-E50914?style=for-the-badge&logo=netflix&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**Uma reprodução fiel da interface da Netflix, desenvolvida como projeto educacional durante a Imersão Alura.**

[Ver Demo](https://imersao-netflix-mcpzqo5bt-tissianydelmiros-projects.vercel.app/index.html) · [Reportar Bug](https://github.com/TissianyDelmiro/Imersao-netflix-/issues)

</div>

---

## 📌 Sobre o Projeto

Este é um clone da interface da Netflix desenvolvido com HTML, CSS e JavaScript puro, sem frameworks. O projeto foi criado durante a **Imersão Alura** com o objetivo de praticar e aprofundar conhecimentos em desenvolvimento web front-end.

> **Nota:** Este projeto é exclusivamente para fins educacionais e não possui qualquer afiliação com a Netflix.
<img width="1920" height="945" alt="image" src="https://github.com/user-attachments/assets/a4487e51-7801-40cd-be4b-c785072acd8f" />
<img width="1920" height="1815" alt="image" src="https://github.com/user-attachments/assets/5c18957c-211f-4c16-a0ff-1a880cfe11e0" />
<img width="1920" height="1815" alt="image" src="https://github.com/user-attachments/assets/09d3c4ae-7b3a-496f-b258-f4e49ab58f62" />
<img width="1920" height="1333" alt="image" src="https://github.com/user-attachments/assets/d3eabc66-3edb-4dbd-b988-cf1634636f0f" />





---

## ✨ Funcionalidades

### 🎭 Sistema de Perfis
- Seleção de perfis com avatares personalizados
- Cada perfil possui seu próprio "Continuar assistindo"
- Troca de perfil sem voltar à tela inicial (dropdown na navbar)
- Dados salvos no localStorage

### 🎬 Catálogo
- Carrosséis de filmes e séries com navegação por setas
- **Top 10** com numeração estilizada ao lado dos posters
- **Só na Netflix** com hero banner ao clicar
- Cards com hover interativo e reprodução de trailer

### 🔍 Sistema de Busca
- Busca integrada com a **OMDB API**
- Backend Node.js protegendo a API key
- Resultados com poster, título, ano e tipo
- Clique no resultado abre página de detalhes

### 📄 Página de Detalhes
- Hero banner com imagem de fundo
- Informações completas (sinopse, elenco, gênero, classificação)
- Botão "Assistir" com player de vídeo
- Títulos semelhantes
- Botões de interação (Minha Lista, Like, Compartilhar)

### 🎨 Design
- Interface fiel à Netflix original
- Background com gradientes e texturas personalizadas
- Animações e transições suaves
- Dark/Light mode na tela de perfis
- Totalmente responsivo (Desktop, Tablet, Mobile)

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica |
| **CSS3** | Estilização, gradientes, animações, responsividade |
| **JavaScript** | Lógica, manipulação do DOM, localStorage |
| **Node.js** | Backend para proxy da API |
| **Express** | Servidor local de desenvolvimento |
| **OMDB API** | Busca de filmes e séries |
| **Vercel** | Deploy e serverless functions |
| **Font Awesome** | Ícones |
| **Google Fonts** | Tipografia |

---

## 📁 Estrutura do Projeto

```
Imersao-netflix/
├── index.html              # Página de seleção de perfis
├── style.css               # Estilos da página de perfis
├── script.js               # Dark/Light mode
├── js/
│   └── index.js            # Lógica de seleção de perfil
├── assets/                 # Avatares dos perfis
├── catalogo/
│   ├── catalogo.html       # Página do catálogo
│   ├── catalogo.css        # Estilos do catálogo
│   ├── detalhes.html       # Página de detalhes do filme
│   ├── detalhes.css        # Estilos da página de detalhes
│   └── js/
│       ├── app.js          # Dados e lógica principal
│       ├── busca.js        # Sistema de busca (OMDB API)
│       ├── perfis.js       # Dropdown de troca de perfis
│       └── detalhes.js     # Lógica da página de detalhes
├── api/                    # Serverless functions (Vercel)
│   ├── buscar.js           # Endpoint de busca
│   └── detalhes/[id].js    # Endpoint de detalhes
├── server.js               # Servidor Express (desenvolvimento local)
├── vercel.json             # Configuração da Vercel
├── .env                    # Variáveis de ambiente (não commitado)
└── .gitignore              # Arquivos ignorados pelo Git
```

---

## 🚀 Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado
- Chave da [OMDB API](https://www.omdbapi.com/apikey.aspx) (gratuita)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/TissianyDelmiro/Imersao-netflix-.git

# Entre na pasta
cd Imersao-netflix-

# Instale as dependências
npm install

# Crie o arquivo .env
echo "OMDB_API_KEY=sua_chave_aqui" > .env

# Inicie o servidor
npm start
```

### Acesse
```
http://localhost:3000
```

---

## 🌐 Deploy

O projeto está hospedado na **Vercel** com serverless functions para proteger a API key.

### Variáveis de Ambiente (Vercel)

| Variável | Descrição |
|---|---|
| `OMDB_API_KEY` | Chave da OMDB API |

---

## 👩‍💻 Autora

<div align="center">

**Tissiany Delmiro**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/TissianyDelmiro)

</div>

---

## 📝 Licença

Este projeto é apenas para **fins educacionais**. Todos os direitos das marcas, logotipos e conteúdos pertencem aos seus respectivos proprietários.

Desenvolvido com ❤️ durante a [Imersão Alura](https://www.alura.com.br/imersao) · 2026
