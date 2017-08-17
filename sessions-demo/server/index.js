const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    middleware = require('./middleware'),
    app = express(),
    port = 3000;


app.use(bodyParser.json())
app.use(cors())


app.post('/api/login', middleware.authenticate, (req, res) => {
    console.log('Success!')
})

app.listen(port, () => console.log(`Now listening on port ${port}.`));