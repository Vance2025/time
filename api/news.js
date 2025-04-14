export default async (req, res) => {
    const API_KEY = process.env.GNEWS_API_KEY;
    const GNEWS_API_URL = ` https://gnews.io/api/v4/search?q=technology%20OR%20AI&lang=en&country=us&max=9&apikey=${API_KEY}`;

    // 设置 CORS 头，允许跨域请求
    res.setHeader('Access-Control-Allow-Origin', 'https://vance2025.github.io/');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    try {
        const response = await fetch(GNEWS_API_URL);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch news');
        }

        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ error: 'Failed to fetch news' });
    }
};
