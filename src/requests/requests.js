const axios = require('axios');

export const getRecipes = (self, obj) => {
  axios.get('/recipes', {
    params: obj
  })
  .then(data => {
    self.setState({recipes: data.data});
  })
  .catch(err => {
    console.log(err);
  });
};

export const getRecipeDetails = (self, id) => {
  axios.get('/recipes/details', {
    params: {
      id: id
    }
  })
  .then(data => {
    self.setState({currentRecipe: data})
  })
}
