import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ingredients: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    const id = e.target.id;
    const text = e.target.value;
    this.setState({[id]: text});
  }

  render() {
    return (
      <div>
        <div>hungry.io</div>
        <label> what do you have on hand?
          <input id='ingredients'type='text' placeholder='list ingredients here' onChange={this.handleChange} />
        </label>
      </div>
    )
  }
}

export default App;