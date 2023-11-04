//requiring express and path packages
const express = require('express');
const path = require('path');

//initializing express app
const app = express();

//giving option of using env port info from Heroku or my hardcoded port at 3001
const port = process.envPORT || 3001;

//Setting up static middleware to allow access to public forled to deliver static files
app.use(express.static('public'));





//one time function to have app start lietneing to previously indicated port.
app.listen(PORT, () =>    
    console.log('Note Taker listening at http://localhost:${PORT}')
    );