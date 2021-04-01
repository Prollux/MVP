import React from 'react';
import { getRecipeDetails } from '../../requests/requests.js';

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const id = event.target.id;
    const { self } = this.props;
    debugger;7
    getRecipeDetails(self, id);
  }

  render() {
    const { favorites } = this.props;
    let favoritesList = favorites.map(favorite =>
      <div key ={`${favorite.id}-fav`} id={favorite.id} className='favorites-title' onClick={this.handleClick}>{favorite.title}</div>
    );
    return (
      favorites.length ?
        <div className='favorites-container'>Favorites
          <div className='favorites-list'>{favoritesList}</div>
        </div>
      :
        <div className='favorites-container'>Favorites
          <div className='favorites-list'>None yet!</div>
        </div>
    )
  }
}

export default Favorites;
