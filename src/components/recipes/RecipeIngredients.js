import React from 'react';

class RecipeIngredients extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { ingredients } = this.props;
    let ingredientList = ingredients.map(ingredient =>
      <div className="ingredient" key={ingredient.id}>{ingredient.name}</div>
      );
      if (ingredients.length) {
        return (
          <div className='ingredient-container'> other ingredients
            {ingredientList}
          </div>
        )
      }
      return null;
  }
}

export default RecipeIngredients;
