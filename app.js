const express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session'),
    passport = require('passport'),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    keys = require('./config/keys'),
    cors = require('cors'),
    bodyParser = require('body-parser');


require('./models/UserModel');
require('./services/passport');

const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept"
  };


const usersRouter = require('./routes/users'),
    scoreRouter = require('./routes/score');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
 
const app = express();

app.use(
    cookieSession({
        // max duration of cookie life before auto expiration - must be expressed in ms 
        // 30 days * 24 hours * 60 minutes * 60 seconds * 1000 ms
        maxAge: 30 * 24 * 60 * 60 * 1000,
        // key to encrypt cookie to prevent manual user takeover/override
        // set as an array to house all cookie keys to randomize and encrypt
        keys: [keys.cookieKey]
    })
);

// Tells passport to make use of the cookies
app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', usersRouter);
app.use('/', scoreRouter);
module.exports = app;