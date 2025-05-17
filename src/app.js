const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

//Middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: "supersecret",
    resave: false,
    saveUninitialized: true
}));

//Template Engine
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

//Locals Middleware
app.use((req, res, next) => {
    res.locals.session = req.session;
    res.locals.query = req.query;
    next();

});

//Rotas
app.use(authRoutes);
app.use(taskRoutes);

module.exports = app;
