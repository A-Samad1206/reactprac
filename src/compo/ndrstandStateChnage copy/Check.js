import React from 'react';
class Check extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Abdus',
      count: 0,
    };
  }

  increment = () => {
    for (let i = 0; i <= 100; i++) {
      // this.setState({ count: this.state.count });
      if (i % 2 === 0) {
        console.log('Before', this.state.count);
        // this.setState((prev) => ({ count: prev.count + 1 })); //All three below work same and right
        // this.setState({ count: ++this.state.count });
        // this.setState({ count: this.state.count++ });
        this.setState({ count: this.state.count + 1 }); //This does not work quite right.
        console.log('After', this.state.count);
      }
    }
  };
  render() {
    return (
      <div>
        <h2>Check Class:-{this.state.name}</h2>

        <h3>{this.state.count}</h3>

        <button onClick={this.increment}>Inc</button>
      </div>
    );
  }
}

export default Check;
