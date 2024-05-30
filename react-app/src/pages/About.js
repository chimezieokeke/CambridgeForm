
const handleSubmit = event => {
  event.preventDefault();
  alert('You have submitted the form.')


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
          <input type="checkbox" name="Visa" />
          Visa
          </label>
          <label>
          <input type="checkbox" name="master" />
          Mastercard
          </label>
          <label>
          <input type="checkbox" name="discover" />
          Discover
          </label>
          <label>
          <input type="checkbox" name="express" />
          American Express
          </label>
       </fieldset>
       <button type="submit">Submit</button>

      </form>
      </div>
    )
  }