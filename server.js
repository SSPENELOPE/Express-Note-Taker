const express = require('express');
/* const fs = require('fs'); */
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));


app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/Develop/public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/Develop/public/notes.html'))
   /*  console.log(res) */
);

app.get('/api/notes', (req, res) =>
    req('./db/db.json').then((data) => res.json(JSON.parse(data)))
 /*  console.log(res) */
    // req.somestuff.readfromfile
);

/* app.post('/api/notes', (req, res) => {
    // readAndAppend(notes,)   .('./db/db.json')
}) */


app.listen(PORT, () => console.log(`App Listening on http://localhost:${PORT} `))