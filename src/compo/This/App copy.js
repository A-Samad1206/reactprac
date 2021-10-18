import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props);
    this.inc = this.inc.bind(this);
  }
  state = { count: 0 };
  inc = () => {
    this.setState((pre) => {
      console.log('Pre', pre);
      return { count: pre.count + 1 };
    });
  };
  render() {
    const inc = () => this.setState((pre) => ({ count: pre.count + 1 }));

    return (
      <div>
        <h4>Count:-{this.state.count}</h4>
        <h4>
          <button
            onClick={inc}
            style={{ padding: 10, border: 'none', outline: 'none' }}
          >
            Increment
          </button>
        </h4>
      </div>
    );
  }
}

export default App;
