const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.OMDB_API_KEY;

// Permite requisições do frontend
app.use(cors());

// Serve os arquivos estáticos (HTML, CSS, JS, imagens)
app.use(express.static(path.join(__dirname)));

// Rota de busca - protege a API key
app.get('/api/buscar', async (req, res) => {
    const query = req.query.q;

    if (!query) {
        return res.json({ error: 'Digite algo para buscar' });
    }

    if (!API_KEY || API_KEY === 'COLOQUE_SUA_CHAVE_AQUI') {
        return res.json({ error: 'Configure sua API key no arquivo .env' });
    }

    try {
        // Busca por título (lista de resultados)
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === 'False') {
            // Tenta buscar séries se não encontrar filmes
            const urlSeries = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=series`;
            const responseSeries = await fetch(urlSeries);
            const dataSeries = await responseSeries.json();

            if (dataSeries.Response === 'False') {
                return res.json({ results: [], message: 'Nenhum resultado encontrado' });
            }
            return res.json({ results: dataSeries.Search || [] });
        }

        res.json({ results: data.Search || [] });
    } catch (error) {
        res.json({ error: 'Erro ao buscar. Tente novamente.' });
    }
});

// Rota de detalhes de um filme/série específico
app.get('/api/detalhes/:id', async (req, res) => {
    const imdbID = req.params.id;

    try {
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`;
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.json({ error: 'Erro ao buscar detalhes' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`Abra http://localhost:${PORT}/catalogo/catalogo.html`);
});
