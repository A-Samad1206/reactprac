import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, temp: 'chk', seed: 0 };
    this.inc = () =>
      this.setState((prev) => {
        return { counter: prev.counter + 1 };
      });
    console.log('#######');
    console.log('Constructor');
    console.log('-------');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('#######');
    console.log('getDerivedStateFromProps');
    console.log('props', props);
    console.log('state', state);
    console.log('this', this && this);
    // console.log('this.props', this.props);
    // console.log('this.state', this.state);
    console.log('-------');
    if (props.seed !== 0) {
      return {
        seed: props.seed,
      };
    }
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('#######');
    console.log('shouldComponentUpdate');
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
    console.log('this.props', this.props);
    console.log('this.state', this.state);
    console.log('-------');
    return this.state.counter !== nextState.counter ? true : false;
  }
  getSnapshotBeforeUpdate(prevProps, prevStates) {
    console.log('#######');
    console.log('getSnapshotBeforeUpdate');
    console.log('prevProps', prevProps);
    console.log('prevStates', prevStates);
    console.log('this.props', this.props);
    console.log('this.state', this.state);
    console.log('-------');
    return null;
  }
  render() {
    console.log('#######');
    console.log('Render');
    console.log('-------');
    return (
      <div>
        <h5>Counter :- {this.state.counter}</h5>{' '}
        <h5>Seed :- {this.state.seed}</h5>
        <button onClick={this.inc}>Inc</button>
      </div>
    );
  }
  componentDidMount() {
    console.log('#######');
    console.log('componentDidMount');
    console.log('-------');
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('#######');
    console.log('componentDidUpdate');
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log('this.props', this.props);
    console.log('this.state', this.state);
    console.log('snapshot', snapshot);
    console.log('-------');
  }
  componentWillUnmount(prop) {
    console.log('#######');
    console.log('componentWillUnmount');
    console.log('prop', prop);
    console.log('-------');
  }
  componentDidCatch(error, info) {
    console.log('componentDidCatch');
    console.log('Error', error);
    console.log('info', info);
    console.log('--------------------');
    this.setState({ error, info });
  }
}
