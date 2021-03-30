const express = require('express');
const path = require('path');
const port = 3080;
const server = express()

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

server.use(express.static(path.join(__dirname, '../public')));