require('dotenv').config();

const
    express = require('express'),
    cors = require('cors'),
    NewsApiKit = require('./libs/newsApiKit'),
    WeatherApiKit = require('./libs/weatherApiKit'),
    app = express(),
    PORT = process.env.PORT || 7200;

app.use(cors());
app.get('/', (req, res) => res.send('WhatsNewsAPI root test'));

///=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\\\
///---+++][      News API Route      ][+++---\\\
///=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\\\
app.get('/api/news/:query', (req, res) => {
    const { params: { query }} = req;
    console.log(`News API Route hit:    query=[${query}]      ${new Date().toString()}`);

    if(!query) res.status((500)).send('no query');
    // todo: security-> check for security risk

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

///=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\\\
///---+++][      Weather API Route      ][+++---\\\
///=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\\\
app.get('/api/weather/:query', (req, res) => {
    const { params: { query }} = req;
    console.log(`Weather API Route hit:    query=[${query}]      ${new Date().toString()}`);

    if(!query) res.status((500)).send('no query');
    // todo: security-> check for security risk

    WeatherApiKit.getCurrentWeather(query)
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