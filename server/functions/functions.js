const refineRecipes = (arr) => {
  let results = arr.map(recipe => {
    return {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      otherIngredients: (recipe.missedIngredients ? recipe.missedIngredients.map(obj => obj.name) : [])
    }
  });
  return results;
}

module.exports = {
  refineRecipes,
}