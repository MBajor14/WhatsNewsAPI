require('dotenv').config();

const
    express = require('express'),
    cors = require('cors'),
    NewsApiKit = require('./libs/newsApiKit'),
    app = express(),
    PORT = 4200;

app.use(cors());

app.get('/', (req, res) => res.send('WhatsNewsAPI root test'));

app.get('/api/news/:query', (req, res) => {
    const { params: { query }} = req;
    console.log(`News API Route hit:    [${query}]      ${new Date().toString()}`);

    if(!query) {
        res.status((500)).send('no query');
    }
    // todo: security-> need to clean query

    NewsApiKit.getEverythingNews(query)
        .then(data => {
            // console.log(data);
            res.send(data.text);
        })
        .catch(error => {
            console.error(error);
            res.status(500).end(error)
        });
});

app.listen(PORT, () => console.log(`Whats News API listening on port ${PORT} @ ${new Date().toString()}`));