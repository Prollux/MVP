import React from 'react';

class  App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
    render() {
      return (
        <div>
          <div>hungry.io</div>
          <label> what do you have on hand?
            <input type='text' placeholder='list ingredients here' />
          </label>
        </div>
    )
  }
}

export default App;