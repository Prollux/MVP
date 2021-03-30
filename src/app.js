import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ingredients: '',
    };
  }
  render() {
    return (
      <div>
        <div>hungry.io</div>
        <label> what do you have on hand?
          <input id='ingredients'type='text' placeholder='list ingredients here' />
        </label>
      </div>
    )
  }
}

export default App;