import Card from 'react-atm-cards';
import './AppThree.css';
function App() {
  const cardDetails = (card) => {
    console.log(card);
    /*
    {
        cardName: "Richard Igbiriki"
        cardNumber: "5312 2145 7687 8854"
        cardType: "mc"
        cvv: "222"
        expiryDate: "01/23"
    }

    */
  };

  return (
    <>
      <Card cardStyles={{ backgroundImage: '' }} onChange={cardDetails} />
    </>
  );
}
export default App;
