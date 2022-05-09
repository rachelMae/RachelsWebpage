const express = require('express');
const app = express();
const port = 3000;

// Static files (pictures, css, etc)
app.use(express.static(__dirname + '/Public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.get('/pictures', (req, res) => {
    res.sendFile(__dirname + '/pictures.html')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})