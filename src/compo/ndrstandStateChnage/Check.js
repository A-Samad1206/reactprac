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
    let count = this.state.count;
    for (let i = 0; i <= 100; i++) {
      count++;
      // this.setState({ count: this.state.count });
      // console.log('Run', this.state.count);
      // this.setState((prev) => ({ count: prev.count + 1 })); //This does not work quite right.
      if (i % 2 === 0 && false) {
        console.log('Before', this.state.count);
        // this.setState((prev) => ({ count: prev.count + 1 }))
        // this.setState({ count: ++this.state.count });
        // this.setState({ count: this.state.count++ });
        //All above three work same and perfect.
        this.setState({ count: this.state.count + 1 }); //This does not work quite right.
        console.log('After', this.state.count);
      }
    }
    this.setState({ count: count }); //This
  };
  render() {
    console.log('Render');
    return (
      <div>
        <h2>Check Class:-{this.state.name}</h2>

        <h3>{this.state.count}</h3>

        <button
          className="py-4 px-8 bg-red-400 rounded-md text-white border-none outline-none focus:border-none focus:outline-none shadow-lg"
          onClick={this.increment}
        >
          Inc
        </button>
      </div>
    );
  }
}

export default Check;
