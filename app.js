const express = require('express');
const path = require('path');
const fs = require('fs');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'public'));

app.use(bodyParser.urlencoded({ extended: true }));


app.use(session({
    secret: 'key', 
    resave: false,
    saveUninitialized: true
}));

app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/riviera', (req, res) => {
    res.render('riviera');
});

app.get('/alpii', (req, res) => {
    res.render('alpii');
});

app.get('/paris', (req, res) => {
    res.render('paris');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'horia' && password === 'horia') {
        req.session.user = username;
        res.redirect('/');
    } else {
        res.redirect('/');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/');
        }
        res.redirect('/');
    });
});

app.use((req, res, next) => {
    res.status(404).render('404');
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/check-subscription', (req, res) => {
    const email = req.body.email;

    fs.readFile('subscribers.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: 'A apărut o eroare la citirea listei de abonați.' });
            return;
        }

        const subscribers = JSON.parse(data);

        if (subscribers.includes(email)) {
            res.send({ subscribed: true });
        } else {
            res.send({ subscribed: false });
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
