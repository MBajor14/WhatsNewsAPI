require('dotenv').config();

const
    express = require('express'),
    NewsApiKit = require('./libs/newsApiKit');
    app = express(),
    PORT = 4200;


app.get('/', (req, res) => res.send('WhatsNewsAPI root test'));

app.get('/api/news/:query', (req, res) => {
    console.log(`News API Route hit: ${new Date().toString()}`)
    const { params: { query }} = req;

    // todo: security-> need to clean query

    NewsApiKit.getEverythingNews(query)
        .then(response => JSON.parse(response.text))
        .then(data => {
            // console.log(data);
            res.send(data);
        })
        .catch(err => console.error(err));
});

app.listen(PORT, () => console.log(`Whats News API listening on port ${PORT} @ ${new Date().toString()}`));