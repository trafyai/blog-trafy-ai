'use client'
import React from 'react';
import '@styles/beta-form/BetaForm.css';
const BetaForm = () => {
  return (
    <div className='beta-form'>
      <div className='beta-form-container'>
        <div className='beta-form-headline'>
          <h2>Join Our AI Beta Community</h2>
          <p>Subscribe to receive newsletters, research papers, and blogs about our AI innovations.</p>
        </div>
          <form action="" onSubmit={(e) => {e.preventDefault();console.log("Form submitted");}} className='beta-form-user-contents'>
            <div className='beta-form-fullname'>
              <input type="text" placeholder='First Name' name='firstName' required />
              <input type="text" placeholder='Last Name' name='lastName' required />
            </div>
            <div className='beta-form-credentials'>
              <input type="email" placeholder='Email ID' name='email' required />
              <input type="text" placeholder='Phone Number' name='email' required />
              <input type="text" placeholder='Country' name='country' required />
              <input type="text" placeholder='Profession' name='profession' />
              <input type="text" placeholder='Organisation / Institute' name='organization' />
            </div>
            <button type="submit">Join Beta</button>
          </form>
          <div className='beta-form-contents'>
          <p>By joining, you’ll get exclusive access to our latest updates, cutting-edge research, and expert insights into AI advancements.</p>
          <p>Your information will remain private and secure as per our <a href="/privacy-policy">Privacy Policy</a>.</p>
        </div>
        </div>

      </div>
  );
};

export default BetaForm;


