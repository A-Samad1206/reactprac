import React from 'react';
import './AppTwo.css';

let cardDetails = {
  bankName: 'Big Bank, Inc.',
  cardNumber: '1234 5678 8765 4321',
  cardHolder: 'madabattula sai yerni akhil',
  validThru: '08/2024',
};

function Card({ card }) {
  return (
    <div>
      <div className="card-div">
        <div className="bank-name">
          <Bank bank={card.bankName} />{' '}
        </div>
        <div className="card-number">
          {' '}
          <CardNumber number={card.cardNumber} />{' '}
        </div>
        <Validity valid={card.validThru} />
        <br />
        <Customer name={card.cardHolder} />
      </div>
    </div>
  );
}

let Customer = ({ name }) => {
  return (
    <div>
      <h2>{name.toUpperCase()}</h2>
    </div>
  );
};

let Validity = ({ valid }) => {
  return (
    <div>
      <div className="valid-date">
        <div className="valid-thru">
          {' '}
          <p>VALID THRU</p>{' '}
        </div>
        <div className="date">{valid}</div>
      </div>
    </div>
  );
};

let Bank = ({ bank }) => {
  return (
    <div>
      <h1>{bank}</h1>
    </div>
  );
};

let CardNumber = ({ number }) => {
  return (
    <div>
      <h1>{number}</h1>
    </div>
  );
};
const App = () => <Card card={cardDetails} />;
export default App;
