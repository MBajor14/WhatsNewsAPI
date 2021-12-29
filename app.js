const
    express = require('express'),,
    app = express(),
    PORT = 8080;

app.get('/', (req, res) => {
    res.send('WhatsNewsAPI root test');
});

app.listen(PORT, () => console.log(`Whats News API listening on port ${PORT}`));