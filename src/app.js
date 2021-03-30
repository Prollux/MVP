import React from 'react';
import getRecipes from './requests/requests.js';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    event.preventDefault();
    const id = event.target.id;
    const text = event.target.value;
    this.setState({[id]: text});
  }

  handleSubmit(event) {
    event.preventDefault();
    getRecipes(this.state)
  }

  render() {
    return (
      <div>
        <div>hungry.io</div>
        <label> what do you have on hand?
          <form onSubmit={this.handleSubmit}>
          <input id='ingredients'type='text' placeholder='list ingredients here' onChange={this.handleChange} />
          <button type="submit">submit</button>
          </form>
        </label>
      </div>
    )
  }
}

export default App;