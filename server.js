//requiring express, path, and file system packages
const express = require('express');
const path = require('path');
const fs = require('fs');


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

//get route to serve notes.html
app.get('/notes', (req,res) =>
    res.sendFile(path.join(__dirname,'/public/notes.html'))
);

//get route to serve index.html 
app.get('/',(req,res) =>
res.sendFile(path.join(__dirname,'/public/index.html'))
);

//declaring notes variable
fs.readFile('db/db.json','utf8', (err, data) => {
    var notes = JSON.parse(data);

    //post route to add notes to db
    app.post('/api/notes', function(req, res) {
    var createNote = req.body;
    notes.push(createNote);
    editDb();
    return createNote;
    });
    
})

function editDb () {
    fs.writeFile('db/db.json', JSON.stringify(notes),)
}


//one time function to have app start listening to previously indicated port options.
app.listen(PORT, () =>    
    console.log('Note Taker listening at http://localhost:3001')
    );