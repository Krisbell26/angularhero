
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/weblanjut'));

app.all('*', (req, res) => {
  res.status(200).sendFile(__dirname + '/weblanjut/index.html');
});

app.listen(process.env.PORT || 8080);