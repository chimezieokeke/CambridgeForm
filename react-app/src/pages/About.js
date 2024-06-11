import React, { useState } from 'react';
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

const handleSubmit = (event, details, setDetails, setSelectedCard, setFormData) => {
  event.preventDefault();

  const form = event.target;
  const visaChecked = form.querySelector('input[name="Visa"]').checked;
  const masterChecked = form.querySelector('input[name="Master"]').checked;
  const discoverChecked = form.querySelector('input[name="Discover"]').checked;
  const expressChecked = form.querySelector('input[name="Express"]').checked;

  const cardType = visaChecked ? 'Visa' : masterChecked ? 'Master' : discoverChecked ? 'Discover' : 'Express';

  const cardNumber = form.querySelector('input[name="CardNumber"]').value;
  const amount = form.querySelector('input[name="Amount"]').value;

  const newEntry = {
    firstName: form.querySelector('input[name="FPFirstName"]').value,
    lastName: form.querySelector('input[name="FPLastName"]').value,
    code: form.querySelector('input[name="FPCode"]').value,
    email: form.querySelector('input[name="FPEmail"]').value,
    number: form.querySelector('input[name="FPNumber"]').value,
    amount: amount,
    last4: cardNumber.slice(-4)
  };

  setDetails([...details, newEntry]);
  setSelectedCard(null);
  setFormData({
    FPFirstName: '',
    FPLastName: '',
    FPCode: '',
    FPEmail: '',
    FPNumber: '',
    CardNumber: '',
    ExpirationDate: '',
    CVV: '',
    Amount: '',
    BillingAddress: '',
    City: '',
    State: '',
    ZipCode: ''
  });

  form.reset();
};

const formatCardNumber = (value) => {
  return value.replace(/\W/gi, '').replace(/(.{4})/g, '$1-').trim();
};

export default function About() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [details, setDetails] = useState([]);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    FPFirstName: '',
    FPLastName: '',
    FPCode: '',
    FPEmail: '',
    FPNumber: '',
    CardNumber: '',
    ExpirationDate: '',
    CVV: '',
    Amount: '',
    BillingAddress: '',
    City: '',
    State: '',
    ZipCode: ''
  });

  const validateForm = () => {
    const errors = {};
    if (!formData.FPFirstName) errors.FPFirstName = 'First Name is required';
    if (!formData.FPLastName) errors.FPLastName = 'Last Name is required';
    if (!formData.FPCode) errors.FPCode = 'Code is required';
    if (!formData.FPEmail) {
      errors.FPEmail = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.FPEmail)) {
      errors.FPEmail = 'Email is invalid';
    }
    if (!formData.FPNumber) errors.FPNumber = 'Number is required';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "CardNumber") {
      setFormData({ ...formData, [name]: formatCardNumber(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    setSelectedCard(selectedCard === name ? null : name);
  };

  return (
    <div className="wrapper">
      <h2>Financial Professional Credit Card Authorization Form</h2>
      <h3>Enter Credit Card Info Below</h3>
      <form
        onSubmit={(event) => {
          if (validateForm()) {
            handleSubmit(event, details, setDetails, setSelectedCard, setFormData);
          } else {
            event.preventDefault();
          }
        }}
      >
        <fieldset class="name-fields">
          <label>
            <p>FP First Name</p>
            <input
              className="name"
              name="FPFirstName"
              placeholder="Enter FP first name"
              value={formData.FPFirstName}
              onChange={handleInputChange}
            />
            {errors.FPFirstName && <div style={{ color: 'red', fontSize: '14px' }}>{errors.FPFirstName}</div>}
          </label>
          <label>
            <p>FP Last Name</p>
            <input
              className="name"
              name="FPLastName"
              placeholder="Enter FP last Name"
              value={formData.FPLastName}
              onChange={handleInputChange}
            />
            {errors.FPLastName && <div style={{ color: 'red', fontSize: '14px' }}>{errors.FPLastName}</div>}   
          </label>
          </fieldset>
          <fieldset class="name-fields">
          <label>
            <p>FP Code</p>
            <input
              className="name"
              name="FPCode"
              placeholder="Enter FP Code"
              value={formData.FPCode}
              onChange={handleInputChange}
            />
            {errors.FPCode && <div style={{ color: 'red', fontSize: '14px' }}>{errors.FPCode}</div>}
          </label>
          <label>
            <p>FP Email</p>
            <input
              className="name"
              name="FPEmail"
              placeholder="Enter FP email"
              value={formData.FPEmail}
              onChange={handleInputChange}
            />
            {errors.FPEmail && <div style={{ color: 'red', fontSize: '14px' }}>{errors.FPEmail}</div>}
          </label>
          <label>
            <p>FP Number</p>
            <input
              className="name"
              name="FPNumber"
              placeholder="Enter FP number"
              value={formData.FPNumber}
              onChange={handleInputChange}
            />
            {errors.FPNumber && <div style={{ color: 'red', fontSize: '14px' }}>{errors.FPNumber}</div>}
          </label>
        </fieldset>
        <fieldset className="checkboxes">
          <label>
            <input
              type="checkbox"
              name="Visa"
              onChange={handleCheckboxChange}
              checked={selectedCard === "Visa"}
            />
            Visa
          </label>
          <label>
            <input
              type="checkbox"
              name="Master"
              onChange={handleCheckboxChange}
              checked={selectedCard === "Master"}
            />
            Mastercard
          </label>
          <label>
            <input
              type="checkbox"
              name="Discover"
              onChange={handleCheckboxChange}
              checked={selectedCard === "Discover"}
            />
            Discover
          </label>
          <label>
            <input
              type="checkbox"
              name="Express"
              onChange={handleCheckboxChange}
              checked={selectedCard === "Express"}
            />
            American Express
          </label>
        </fieldset>
        {selectedCard && (
          <fieldset className="card-details">
            <div className="card-info">
              <img
                src={cardImages[selectedCard]}
                alt={selectedCard}
                style={{ width: '100px', height: 'auto' }}
              />
              <label class="">
              <fieldset name="name-fields">
                <p>Card Number</p>
                <input
                  type="text"
                  name="CardNumber"
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  value={formData.CardNumber}
                  onChange={handleInputChange}               
                />
                </fieldset>


              </label>
              <label>
              <fieldset name="name-fields">

                <p>Expiration Date</p>
                <input
                  type="text"
                  name="ExpirationDate"
                  placeholder="MM/YY"
                  value={formData.ExpirationDate}
                  onChange={handleInputChange}
                />
                </fieldset>
              </label>
              
              <label>
                <p>CVV</p>
                <input
                  type="text"
                  name="CVV"
                  placeholder="XXX"
                  value={formData.CVV}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <p>Amount</p>
                <input
                  type="text"
                  name="Amount"
                  placeholder="Enter the Dollar Amount"
                  value={formData.Amount}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <p>Billing Address</p>
                <input
                  type="text"
                  name="BillingAddress"
                  placeholder="Enter Billing Address"
                  value={formData.BillingAddress}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <p>City</p>
                <input
                  type="text"
                  name="City"
                  placeholder="Enter City"
                  value={formData.City}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <p>State</p>
                <input
                  type="text"
                  name="State"
                  placeholder="Enter State"
                  value={formData.State}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <p>Zip Code</p>
                <input
                  type="text"
                  name="ZipCode"
                  placeholder="Enter Zip Code"
                  value={formData.ZipCode}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </fieldset>
        )}
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Submitted Entries</h3>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {details.map((entry, i) => (
            <li key={i} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
              <div>Name: {entry.firstName} {entry.lastName}</div>
              <div>Code: {entry.code}</div>
              <div>Email: {entry.email}</div>
              <div>Number: {entry.number}</div>
              <div>Amount Paid: ${entry.amount}</div>
              <div>Last 4 Digits of Card: {entry.last4}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
