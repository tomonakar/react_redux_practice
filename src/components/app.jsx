import React, { Component } from 'react';

import Greeting from './greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'bob',
    };
  }

  handleNameChange(name) {
    this.setState({ name });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.handleNameChange(e.target.value)}
        />
        <button onClick={() => this.handleNameChange('Taro')}>I am Taro Button!!!</button>
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

export default App;
