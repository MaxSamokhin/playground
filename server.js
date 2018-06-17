'use strict';

const express = require('express');
const app = express();

app.use('/', express.static('public'));
app.use('/login', express.static('public'));
app.use('/news', express.static('public'));
app.use('/profile', express.static('public'));
app.use('/list', express.static('public'));

const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log(`App start on port ${port}`);
});