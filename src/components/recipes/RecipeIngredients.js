import React from 'react';

class RecipeIngredients extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { ingredients } = this.props;
    return ingredients.map(ingredient =>
      <div className="ingredient" key={ingredient.id}>{ingredient.name}</div>
      )
  }
}

export default RecipeIngredients;
