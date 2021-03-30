const axios = require('axios');

const getRecipes = (obj) => {
  axios.get('/recipes', {
    params: obj
  })
  .then(data => {
    console.log(data.data);
  })
  .catch(err => {
    console.log(err);
  });
};

export default getRecipes;