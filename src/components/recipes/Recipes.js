import React from 'react';
import RecipeIngredients from './RecipeIngredients.js';

class Recipes extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { recipes } = this.props;
    return recipes.map(recipe =>
      <div className='recipe'key={recipe.id}>
        <div className='title'>{recipe.title}</div>
        <img className='recipe-img' src={recipe.image} />
        <RecipeIngredients ingredients={recipe.otherIngredients} />
      </div>
      )
  }
};

export default Recipes;
