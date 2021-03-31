import React from 'react';
import RecipeIngredients from './RecipeIngredients.js';
import { getRecipeDetails } from '../../requests/requests.js';

class Recipes extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { self } = this.props;
    const id = event.target.id;
    getRecipeDetails(self, id);
  }

  render() {
    const { recipes } = this.props;
    return recipes.map(recipe =>
      <div className='recipe-container'key={recipe.id}>
        <div className='recipe-title'>{recipe.title}</div>
        <img className='recipe-img' id={recipe.id} src={recipe.image} alt={recipe.title} onClick={this.handleClick} />
        <RecipeIngredients ingredients={recipe.otherIngredients} />
      </div>
      )
  }
};

export default Recipes;
