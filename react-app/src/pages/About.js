import { useState } from 'react';
import visaImage from '../visa.jpg';
import mastercardImage from '../mastercard.jpg';
import discoverImage from '../discover.jpg';
import expressImage from '../Americanexpress.jpg';

const cardImages = {
  Visa: visaImage,
  Master: mastercardImage,
  Discover: discoverImage,
  Express: expressImage
};

const handleSubmit = event => {
  event.preventDefault();
  alert('You have submitted the form.');

  const visaChecked = event.target.querySelector('input[name="Visa"]').checked;
  const masterChecked = event.target.querySelector('input[name="Master"]').checked;
  const discoverChecked = event.target.querySelector('input[name="Discover"]').checked;
  const expressChecked = event.target.querySelector('input[name="Express"]').checked;

  if (visaChecked) {
     alert('Visa Card Credentials:\n\nCard Number: XXXX XXXX XXXX XXXX\nExpiration Date: MM/YY\nCVV: XXX'); 
  } 
  else if (masterChecked) {
     alert('Mastercard Credentials:\n\nCard Number: XXXX XXXX XXXX XXXX\nExpiration Date: MM/YY\nCVV: XXX');
  }
  else if (discoverChecked) {
    alert('Discover Card Credentials:\n\nCard Number: XXXX XXXX XXXX XXXX\nExpiration Date: MM/YY\nCVV: XXX');
  }
  else if (expressChecked) {
    alert('American Express Card Credentials:\n\nCard Number: XXXX XXXX XXXX XXXX\nExpiration Date: MM/YY\nCVV: XXX'); 
  }
}

export default function About() {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCheckboxChange = event => {
        const { name } = event.target;
        setSelectedCard(name);
        if (selectedCard === name) {
          setSelectedCard(null);
      } else {
          setSelectedCard(name);
      }
    };


    return (
      <div className="wrapper">
        <h2>Financial Professional Credit Card Authorization Form</h2>

        <h3>Enter Credit Card Info Below</h3>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>FP First Name</p>
              <input className="name" placeholder="Enter FP first name" color="red" />
            </label>
            <label>
              <p>FP Last Name</p>
              <input className="name" placeholder="Enter FP last Name"/>
            </label>
            <label>
              <p>FP Code</p>
              <input className="name" placeholder="Enter FP Code"/>
            </label>
            <label>
              <p>FP Email</p>
              <input className="name" placeholder="Enter FP email" />
            </label>
            <label>
              <p>FP Number</p>
              <input className="name"  placeholder="Enter FP number"/>
            </label>
          </fieldset>
          <fieldset className="checkboxes">
          <label>
              <input type="checkbox" name="Visa" onChange={handleCheckboxChange} checked={selectedCard === "Visa"} />
              Visa
            </label>
            <label>
              <input type="checkbox" name="Master" onChange={handleCheckboxChange} checked={selectedCard === "Master"} />
              Mastercard
            </label>
            <label>
              <input type="checkbox" name="Discover" onChange={handleCheckboxChange} checked={selectedCard === "Discover"} />
              Discover
            </label>
            <label>
              <input type="checkbox" name="Express" onChange={handleCheckboxChange} checked={selectedCard === "Express"} />
              American Express
            </label>
          </fieldset>
          {selectedCard && (
           <fieldset>
           <img src={cardImages[selectedCard]} alt={selectedCard} style={{ width: '100px', height: 'auto' }} />
           <label>
             <p>Card Number</p>
             <input type="text" placeholder="XXXX XXXX XXXX XXXX" />
           </label>
           <label>
             <p>Expiration Date</p>
             <input type="text" placeholder="MM/YY" />
           </label>
           <label>
             <p>CVV</p>
             <input type="text" placeholder="XXX" />
           </label>
         </fieldset>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    )
}