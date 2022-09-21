const express = require('express');
/* const { fstat } = require('fs'); */
const fs = require('fs');
const path = require('path');
const db = require('./db/db.json');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));


app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) => 
    fs.readFile('/db/db.json', 'utf8', function(err, data){
        res.json(JSON.parse(data));
   })
);

app.post('/api/notes', (req, res) => 
    fs.writeFile('/db/db.json', 'utf8', function(err, data){
        res.json(JSON.stringify(data));
})
)


app.listen(PORT, () => console.log(`App Listening on http://localhost:${PORT} `))