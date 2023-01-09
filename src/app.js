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
        headTitle: 'Dan-Iulian Druțac – Violinist',
        title: ''
    });
});

app.get('/bio', (req, res) => {
    res.render('bio', {
        headTitle: 'Bio – Dan-Iulian Druțac',
        title: 'Bio',
        message: 'Full Biography'
    });
});

app.get('/audio', (req, res) => {
    res.render('audio', {
        headTitle: 'Audio – Dan-Iulian Druțac',
        title: 'Audio recordings',
        message: 'Audio content here'
    });
});

app.get('/video', (req, res) => {
    res.render('video', {
        headTitle: 'Video – Dan-Iulian Druțac',
        title: 'Video recordings',
        message: 'Video content here'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        headTitle: 'Contact – Dan-Iulian Druțac',
        title: 'Contact',
        message: 'Contact here'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        headTitle: '404 – Dan-Iulian Druțac',
        title: '404',
        message: 'Page not found :('
    });
});

app.listen(port, () => {
    console.log(`LISTENING on ${port}: `);
});