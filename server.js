const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;
const notes = require('./db/db.json');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

 app.get('/api/notes', (req, res) => 
    fs.readFile('/db/db.json', 'utf8', function(err, data){
        if(err) {
            console.log(err);
            return;
        } else {
            res.json(notes);
        }
   })
);

app.post('/api/notes', (req, res) => 
    fs.appendFile('/db/db.json', 'utf8', function(err, data){
        console.log(data)
        res.json(JSON.stringify(data));
})
)


app.listen(PORT, () => console.log(`App Listening on http://localhost:${PORT} `))