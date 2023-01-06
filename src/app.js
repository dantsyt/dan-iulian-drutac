const path = require('node:path');
const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

const app = express();

// Paths
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
const publicPath = path.join(__dirname, '../public');

// Handlebars engine and views setup
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Set public dir
app.use(express.static(publicPath));

// Pages setup
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Dan-Iulian Druțac'
    });
});

app.get('/bio', (req, res) => {
    res.render('bio', {
        title: 'Bio'
    });
});

app.get('/audio', (req, res) => {
    res.render('audio', {
        title: 'Audio recordings'
    });
});

app.get('/video', (req, res) => {
    res.render('video', {
        title: 'Video recordings'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        message: 'Page not found :('
    });
});

app.listen(port, () => {
    console.log(`LISTENING on ${port}:`);
});