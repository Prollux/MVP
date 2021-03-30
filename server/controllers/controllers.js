const axios = require('axios');
const data = require('../dummydata.js');
const { apiKey } = require('../../apiKey.js');
const functions = require('../functions/functions.js');

const getRecipes = (req, res) => {
  //console.log(req.query);
  //axios request to API

  let result = functions.refineRecipes(data.dummydata);
  res.status(201).send(result);
}

const getRecipeInfo = (req, res) => {
  console.log(req.query);
  //axios request to API
  //https://api.spoonacular.com/recipes/${req.query.id}/information?apiKey=${apiKey}
}

module.exports = {
  getRecipes,
}