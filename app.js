//jshint esversion:6
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const connexion = require('./database/db');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	session({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: false,
		// cookie: { secure: true },
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/login', (req, res) => {
	res.render('login');
});

app.post('/login', (req, res) => {});

app.get('/register', (req, res) => {
	res.render('register');
});

app.post('/register', (req, res) => {});

const PORT = 8080;
app.listen(PORT, () => {
	console.log(`Server started on PORT ${PORT}`);
});
