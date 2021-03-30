import React from 'react';
import Ingredients from './Ingredients.js';

class Instructions extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { instructions, title, image } = this.props.recipe;
    return (
      <div className='instructions-container'>
        <div className='instructions-title'>
          {title}
        </div>
        <img className='instructions-img' src={image} />
      </div>
    )
  }
}

export default Instructions;
