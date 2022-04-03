# SSL for Node-JS
## Create basic app 
    npm init -y
    npm i express https fs
    
## Install Openssl IF NOT

    1. Window
        - Dowload openssl at https://code.google.com/archive/p/openssl-for-windows/downloads
        - Unzip
        - Copy path ${path un zip }\openssl...\bin to environment
        - Set config in CMD (Run as administrator)
           $ set OPENSSL_CONF=  ${path un zip }\openssl...\openssl.cnf
        - restart computer 
  
## Config SSL - HTTPS
    mkdir ssl
    openssl genrsa -out ssl//key.pem 2048
    openssl req -new -key ssl//key.pem -out ssl//csr.pem
    openssl x509 -req -days 9999 -in ssl//csr.pem -signkey ssl//key.pem -out ssl//cert.pem
    rm ssl//csr.pem
    
### index.js
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

