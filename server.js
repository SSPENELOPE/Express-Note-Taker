const { application } = require('express');
const notes = require('./Develop/public/assets/js/index');
const fs = require('fs');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));


app.get('/*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
)

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

/* app.post('/api/notes', (req, res) => 

) */

app.listen(PORT, () => console.log(`App Listening on http://localhost:${PORT} `))