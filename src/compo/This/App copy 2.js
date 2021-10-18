import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    // this.handleClick=this.handleClick.bind(this)
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClickArr = () => {
    console.log('handleClickArr', this);
  };
  handleClick() {
    console.log('HandleClick', this);
  }
  handleClickFunExp = function () {
    console.log('handleClickFunExp', this);
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()}>handleClcik</button>
        <h2>
          <button onClick={this.handleClickArr}>handleClickArr</button>
        </h2>
        <h2>
          <button onClick={() => this.handleClickFunExp()}>
            handleClickFunExp
          </button>
        </h2>
      </div>
    );
  }
}
