export default async function handler(req, res) {
    const { id } = req.query;
    const API_KEY = process.env.OMDB_API_KEY;

    if (!API_KEY) {
        return res.json({ error: 'API key não configurada' });
    }

    try {
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`;
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.json({ error: 'Erro ao buscar detalhes' });
    }
}
