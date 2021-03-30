import React from 'react';

class Ingredients extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { ingredients } = this.props;
    const ingredientList = ingredients.map(ingredient =>
      <div key={ingredient.id} className='ingredient'>{ingredient.original}</div>
      )
    return (
      <div className='ingredient-container'>
        <div className='ingredient-header'>Ingredients</div>
        {ingredientList}
      </div>
    )
  }
}

export default Ingredients;
