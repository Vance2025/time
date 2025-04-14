export default async (req, res) => {
    const API_KEY = process.env.GNEWS_API_KEY; // 环境变量存储密钥
    const GNEWS_API_URL = `https://gnews.io/api/v4/search?q=technology%20OR%20AI&lang=en&country=us&max=9&apikey=${API_KEY}`;
    
    try {
        const response = await fetch(GNEWS_API_URL);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch news' });
    }
};
