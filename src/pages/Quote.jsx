import { Link } from 'react-router';
import {useState} from 'react';
import './quote.css';
export function Quote() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "405c532b-8ceb-4c13-a004-9a707fdd3b0c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>


      <div className="quote-container">
        <Link to='/' className='quote-logo'>
          <img className='logo' src='/logo.webp' ></img>
        </Link>
        <div>Appointment Request</div>
        <div>Fill out the form below to request an appointment 
          with us. We will contact you to confirm the appointment.
        </div>

        <form className='form-container' onSubmit={onSubmit}>
          <div>First Name</div>
          <input type="text" name="first-name" required/>
          <div>Last Name</div>
          <input type="text" name="last-name" required/>
          <div>Email</div>
          <input type="email" name="email" required/>
          <div>Phone number</div>
          <input type="text" name="phone-number" required/>
          <div>Comment</div>
          <textarea className='comment-box' name="message" required></textarea>

          <button className='submit-button' type="submit">Submit Form</button>

        </form>
      <span>{result}</span>
        {/*<div className="quote-box-1" >
          <div className="quote-box-text-input">
            <div>First Name</div>
            <input placeholder="First Name"></input>
          </div>

          <div className="quote-box-text-input">
            <div>Last Name</div>
            <input placeholder="Last Name"></input>
          </div>

          <div className="quote-box-text-input">
            <div>Email Address</div>
            <input placeholder="Your Email Address"></input>
          </div>

          <div className="quote-box-text-input">
            <div>Phone Number</div>
            <input placeholder="Your Phone"></input>
          </div>
        </div>

        <div className="quote-box-text-input address-part">
          <div>Address</div>
          <input placeholder="Street" className='address-input'></input>
        </div>

        <div className="quote-box-2">
          <div className="quote-box-text-input">
            <div>City</div>
            <input placeholder="City"></input>
          </div>

          <div className="quote-box-text-input">
            <div>State/Province</div>
            <input placeholder="State"></input>
          </div>

          <div className="quote-box-text-input">
            <div>Postal Code</div>
            <input placeholder="Zip"></input>
          </div>
        </div>

        <button className='quote-submit'>Submit</button>
        */}
      </div>
    </>
  );
}