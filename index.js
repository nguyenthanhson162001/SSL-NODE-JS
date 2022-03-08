const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
const port = 3000;
const options = {
    key: fs.readFileSync('ssl/key.pem'),
    cert: fs.readFileSync('ssl/cert.pem')
};

app.get('/', (req, res) => res.send('Hello this is server!'));

https.createServer(options, app).listen(port, () => console.log(`Server app listening on port https://localhost:${port}`));