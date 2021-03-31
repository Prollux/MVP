import React from 'react';

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { favorites } = this.props;
    let favoritesList = favorites.map(favorite =>
      <div key ={`${favorite.id}-fav`} id={`${favorite.id}-fav`} className='favorites-title' onClick={this.handleClick}>{favorite.title}</div>
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
