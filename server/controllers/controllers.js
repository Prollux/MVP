const axios = require('axios');
const data = require('../dummydata.js');
const { apiKey } = require('../../apiKey.js');
const functions = require('../functions/functions.js');

const getRecipes = (req, res) => {;
  //axios request to API
  let paramsObj = req.query;
  paramsObj.apiKey = apiKey;
  paramsObj.ranking = 2;
  //https://api.spoonacular.com/recipes/findByIngredients/
  axios.get(`https://api.spoonacular.com/recipes/findByIngredients/`,{
    params: paramsObj
  })
  .then(data => {
    let result = functions.refineRecipes(data.data);
    res.status(201).send(result);
  })
  .catch(err => {
    res.status(501).end()
  });
}

const getRecipeInfo = (req, res) => {
  //axios request to API
  //https://api.spoonacular.com/recipes/${req.query.id}/information?apiKey=${apiKey}
  axios.get(`https://api.spoonacular.com/recipes/${req.query.id}/information?apiKey=${apiKey}`)
  .then(data => {
    debugger;
    const { extendedIngredients, title, image, instructions, summary, id } = data.data;
    const recipeInfo = {
      id: id,
      ingredients: extendedIngredients,
      title: title,
      image: image,
      instructions: instructions,
    };
    debugger;
    res.send(recipeInfo);
  });
}

module.exports = {
  getRecipes,
  getRecipeInfo,
}