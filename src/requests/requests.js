const axios = require('axios');

const getRecipes = (obj) => {
  debugger;
  axios.get('/recipes', {
    params: obj
  })
  .then(console.log('tada! it works'))
  .catch(err => {
    console.log(err);
  });
};

export default getRecipes;