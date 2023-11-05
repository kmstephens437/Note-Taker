//requiring express and path packages
const express = require('express');
const api = require('./routes/notes');
const path = require('path');

require('./routes/routes')

//initializing express app
const app = express();

//giving option of using env port info from Heroku or my hardcoded port at 3001
const PORT = process.env.PORT || 3001;

//Setting up static middleware to allow access to public forled to deliver static files
app.use(express.static('public'));
//Setting up URL middleware
app.use(express.urlencoded({extended:true}));
//Setting up Middleware to allow JS objects to be passed
app.use(express.json());
//Setting up Middleware to use API
app.use('/api',api);


//one time function to have app start listening to previously indicated port options.
app.listen(PORT, () =>    
    console.log('Note Taker listening at http://localhost:3001')
    );