'use strict';

const express = require('express');
const app = express();

app.use('/', express.static('public'));
app.get(/.*/, function root(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log(`App start on port ${port}`);
});
