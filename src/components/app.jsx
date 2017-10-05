import React, { Component } from 'react';

import Greeting from './greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'bob',
    };
  }

  handleMouseOver() {
    this.setState({ name: 'john' });
  }

  handleMouseOut() {
    this.setState({ name: 'pike' });
  }

  render() {
    return (
      <div
        onMouseOver={() => this.handleMouseOver()}
        onMouseOut={() => this.handleMouseOut()}
      >
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

export default App;
