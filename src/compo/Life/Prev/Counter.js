import React, { Component } from 'react';
const ErrorComponent = (props) => <h2>{props.errors}</h2>;

class Counter extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = { count: 0 };
    this.set = (xyz) => this.setState({ xyz });
  }
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('getDerivedStateFromProps');
    console.log('nextProps', nextProps);
    console.log('prevState', nextState);
    // console.log('this.state.count', this.state.count);
    // console.log('this.props', this.props);
    // set(nextProps.ignoreProp);
    console.log('---------------------');
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
    console.log('this.state.count', this.state.count);
    console.log('this.props', this.props);
    console.log('-------------------');
    if (
      this.props.ignoreProp &&
      nextProps.ignoreProp &&
      this.props.ignoreProp === nextProps.ignoreProp
    )
      return false;
    return nextState.count <= 5 ? true : false;
  }
  render() {
    console.log('render');
    if (this.state.error || this.state.info) {
      return <div>Helooooooooooooooooooo</div>;
    }

    return (
      <div>
        <button
          onClick={() => this.setState((prev) => ({ count: prev.count + 1 }))}
        >
          Inc
        </button>
        Counter:-{this.state.count}
        <br />
        Ignore Props:-{this.state.xyz}
        <hr />
        <ErrorComponent />
      </div>
    );
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log('-----------------');
    return true;
  }
  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log('this.state.count', this.state);
    console.log('this.props', this.props);

    console.log('snapshot', snapshot);
    console.log('------------------');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  componentDidCatch(error, info) {
    console.log('componentDidCatch');
    console.log('Error', error);
    console.log('info', info);
    console.log('--------------------');
    this.setState({ error, info });
  }
}

export default Counter;
