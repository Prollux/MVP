const axios = require('axios');

const getRecipes = (self, obj) => {
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

export default getRecipes;