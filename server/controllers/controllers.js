const axios = require('axios');
const data = require('../dummydata.js');
const { apiKey } = require('../../apiKey.js');
const functions = require('../functions/functions.js');

const getRecipes = (req, res) => {
  console.log(req.query);
  //axios request to API
  let params = req.query;
  params.apiKey = apiKey;
  params.ranking = 2;
  debugger;
  //https://api.spoonacular.com/recipes/findByIngredients/?apiKey=${apiKey}&ingredients=
  let result = functions.refineRecipes(data.dummydata);
  res.status(201).send(result);
}

const getRecipeInfo = (req, res) => {
  console.log(req.query);
  //axios request to API
  //https://api.spoonacular.com/recipes/${req.query.id}/information?apiKey=${apiKey}
  const { extendedIngredients, title, image, instructions, summary } = data.recipeData;
  const recipeInfo = {
    ingredients: extendedIngredients,
    title: title,
    image: image,
    instructions: instructions,
  };
  res.send(recipeInfo);
}

module.exports = {
  getRecipes,
  getRecipeInfo,
}