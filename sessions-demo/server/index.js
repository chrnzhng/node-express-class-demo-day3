const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    session = require('express-session'),
    middleware = require('./middleware'),
    config = require('./config'),
    app = express(),
    port = 3000;


app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: config.secret,
    saveUninitialized: false,
    resave: false
}));


app.post('/api/login', middleware.authenticate, (req, res) => {
    req.session.user = req.body.username;
    console.log(req.session.user);
    res.status(200).send('Logged in!');
})

app.get('/api/user', (req, res) => {
    let user = req.session.user ? req.session.user : ''
    res.status(200).send({ user })
})

app.listen(port, () => console.log(`Now listening on port ${port}.`));