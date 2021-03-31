import React from 'react';
import { getRecipes } from './requests/requests.js';
import Recipes from './components/recipes/Recipes.js';
import Instructions from './components/instructions/Instructions.js';
import Favorites from './components/favorites/Favorites.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      params: {},
      recipes: [],
      favorites: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.backToList = this.backToList.bind(this);
  }

  componentDidMount() {
    const self = this;
    if (localStorage.getItem('favorites')) {
      let results = localStorage.getItem('favorites');
        self.setState({favorites: JSON.parse(results)})
    }
  }

  handleChange(event) {
    event.preventDefault();
    const id = event.target.id;
    const text = event.target.value;
    let newParams = this.state.params;
    newParams[id] = text;
    this.setState({params: newParams});
  }

  handleSubmit(event) {
    event.preventDefault();
    const { params } = this.state;
    if (params.ingredients) {
      getRecipes(this, params);
    }
  }

  backToList(event) {
    event.preventDefault();
    this.setState({currentRecipe: null});
  }

  render() {
    const { recipes, currentRecipe, favorites } = this.state;
    return (
      <>
      <div>
        <div>hungry.io</div>
        {this.state.currentRecipe ?
          <button type="submit" onClick={this.backToList}>Back to List</button>
        :
          <label> what do you have on hand?
            <form onSubmit={this.handleSubmit}>
            <input id='ingredients'type='text' placeholder='list ingredients here' onChange={this.handleChange} />
            <button type="submit">submit</button>
            </form>
          </label>
        }
        <div className='favorites'>
          <Favorites favorites={favorites} />
        </div>
      </div>
      <div className='recipes-container'>
        {currentRecipe ? <Instructions recipe={currentRecipe} self={this} /> : <Recipes recipes={recipes} self={this} />}
      </div>
      </>
    )
  }
}

export default App;