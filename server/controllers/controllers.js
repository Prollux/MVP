const axios = require('axios');
const data = require('../dummydata.js');
const functions = require('../functions/functions.js');

const getRecipes = (req, res) => {
  //console.log(req.query);
  //axios request to API
  let result = functions.refineRecipes(data.dummydata);
  res.status(201).send(result);
}

module.exports = {
  getRecipes,
}