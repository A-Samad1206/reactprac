import React, { Component } from 'react';
import Counter from './Counter';
import './index.css';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { mount: true, ignoreProp: 0, seed: 0 };
    this.toggleMount = () => {
      this.setState({ mount: !this.state.mount });
    };
    this.ignorePropGen = () => this.setState({ ignoreProp: Math.random() });
    this.seedGen = () =>
      this.setState({ seed: parseInt(Math.random() * 100, 10) });
  }
  render() {
    const {
      toggleMount,
      ignorePropGen,
      seedGen,
      state: { mount, ignoreProp, seed },
    } = this;
    return (
      <div>
        <button onClick={toggleMount} disabled={mount}>
          Mount
        </button>
        <button onClick={toggleMount} disabled={!mount}>
          UnMount
        </button>
        <button onClick={ignorePropGen}>ignoreProp</button>
        <button onClick={seedGen}>Seed</button>
        <hr />
        {mount && <Counter ignoreProp={ignoreProp} seed={seed} />}
      </div>
    );
  }
}
