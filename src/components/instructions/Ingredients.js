import React from 'react';

class Ingredients extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { ingredients } = this.props;
    return (
      <div key={recipeStep.id}>
        {recipeStep.original}
      </div>
    )
  }
}