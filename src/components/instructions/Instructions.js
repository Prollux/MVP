import React from 'react';
import Ingredients from './Ingredients.js';

class Instructions extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {isFavorite: Boolean(localStorage.getItem(props.recipe.id))};
    debugger;
    this.addFavorite=this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
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
      this.setState({isFavorite: true});
    } else {
      localStorage.setItem('favorites', JSON.stringify([insert]));
      self.setState({favorites: insert});
      this.setState({isFavorite: true});
    }
  }

  removeFavorite(event) {
    event.preventDefault();
    const { id } = this.props.recipe;
    const { favorites, self } = this.props;
    const newFavs = favorites.map(favorite => {
      if (favorite.id !== id) {
        return favorite;
      }
    });
    localStorage.setItem('favorites', newFavs);
    localStorage.removeItem(`${id}`);
    this.setState({isFavorite: false });
    self.setState({favorites: newFavs});
  }

  render() {
    const { instructions, title, image, ingredients } = this.props.recipe;
    const { isFavorite } = this.state;
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
        {isFavorite ?
          <button id='btn-remove' type='submit' onClick={this.removeFavorite}>Remove from favorites</button>
        :
          <button id='btn-add' type='submit' onClick={this.addFavorite}>Add to Favorites</button>
        }
      </div>
    )
  }
}

export default Instructions;
