const axios = require('axios');

const getRecipes = (req, res) => {
  console.log(req.query);
  res.end();
}

module.exports = {
  getRecipes,
}