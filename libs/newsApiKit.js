const 
    API_KEY = process.env.NEWS_API_KEY,
    BASE_URL = 'https://newsapi.org/v2',
    superagent = require('superagent');

module.exports = class NewsApiKit {
    static get(url) {
        return superagent.get(url);
    }

    static getEverythingNews(query) {
        return this.get(`${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`);
    }

    static getTopHeadlines(query, country = 'us') {
        return this.get(`${BASE_URL}/top-headlines?country=${country}&page=1&apiKey=${API_KEY}`);
    }
}