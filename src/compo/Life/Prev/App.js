import React, { Component } from 'react';
import Counter from './Counter';
import './index.css';
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { mount: true };
    this.unmount = () => this.setState({ mount: false });
    this.mount = () => this.setState({ mount: true });
    this.ignoreProp = () => this.setState({ ignoreProp: Math.random() });
  }
  // console.log("APP outer");
  render() {
    console.log('App');

    return (
      <div>
        <button onClick={this.mount}>Monunt</button>
        <button onClick={this.unmount}>UnMount</button>
        <button onClick={this.ignoreProp}>ignoreProp</button>
        {this.state.mount && <Counter ignoreProp={this.state.ignoreProp} />}
        {/* <Counter ignoreProp={this.state.ignoreProp} /> */}
      </div>
    );
  }
}

export default App;
