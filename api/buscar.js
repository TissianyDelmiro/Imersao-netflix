export default async function handler(req, res) {
    const query = req.query.q;
    const API_KEY = process.env.OMDB_API_KEY;

    if (!query) {
        return res.json({ error: 'Digite algo para buscar' });
    }

    if (!API_KEY) {
        return res.json({ error: 'API key não configurada' });
    }

    try {
        // Busca filmes
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === 'False') {
            // Tenta séries
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
}
