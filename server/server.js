const express = require('express');
const path = require('path');
const port = 3080;
const server = express()
const requests = require('./controllers/controllers.js');

server.use(express.json());
server.use(express.static(path.join(__dirname, '../public')));

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

server.get('/recipes', requests.getRecipes);





