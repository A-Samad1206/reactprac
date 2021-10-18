import React from 'react';
export default class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
      isEating: 'one',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log('Evanet', event.target.value);
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <form>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Is going: <br />
            <label style={{ border: '1px solid red', display: 'flex' }}>
              One
              <input
                name="isEating"
                type="radio"
                style={{
                  border: '4px solid red',
                  color: 'aqua',
                  backgroundColor: 'green',
                }}
                value="one"
                checked={this.state.isEating === 'one'}
                onChange={this.handleInputChange}
              />
            </label>
            <input
              name="isEating"
              type="radio"
              value="two"
              checked={this.state.isEating === 'two'}
              onChange={this.handleInputChange}
            />
            <input
              name="isEating"
              type="radio"
              value="three"
              checked={this.state.isEating === 'three'}
              onChange={this.handleInputChange}
            />
            <input
              name="isEating"
              type="radio"
              value="four"
              checked={this.state.isEating === 'four'}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
      </fieldset>
    );
  }
}
