import React from 'react';
import Ingredients from './Ingredients.js';

class Instructions extends React.Component {
  constructor() {
    super();
    this.state = {isFavorite: Boolean(localStorage.getItem(this.props.recipe.id))};
    this.addFavorite=this.addFavorite.bind(this);
  }

  addFavorite(event) {
    event.preventDefault()
    const { id, title } = this.props.recipe;
    const { self } = this.props;
    const insert = {
      id: id,
      title: title,
    }
    if (localStorage.getItem('favorites')) {
      let currentFavorites = JSON.parse(localStorage.getItem('favorites'))
      currentFavorites.push(insert);
      localStorage.setItem('favorites', JSON.stringify(currentFavorites));
      localStorage.setItem(`${id}`, 'true');
      self.setState({favorites: currentFavorites});
    } else {
      localStorage.setItem('favorites', JSON.stringify([insert]));
      self.setState({favorites: insert});
    }
  }

  removeFavorite(event) {
    event.preventDefault
  }

  render() {
    const { instructions, title, image, ingredients } = this.props.recipe;
    return (
      <div className='instructions-container'>
        <div className='instructions-title'>
          {title}
        </div>
        <img className='instructions-img' src={image} />
        <Ingredients ingredients={ingredients} />
        <div className='instructions-txt'>
          {instructions}
        </div>
        <button id='btn-favorite' type='submit' onClick={this.addFavorite}>Add to Favorites</button>
      </div>
    )
  }
}

export default Instructions;
