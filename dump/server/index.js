const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = require('./routes.js');
const db = require('./db/index.js');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/', router)

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}`)
})