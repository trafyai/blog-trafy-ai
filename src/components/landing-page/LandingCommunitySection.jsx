'use client';
import React, { useState } from 'react';

const LandingCommunitySection = () => {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add a timestamp and the email to Firebase
    const dataWithTimestamp = {
      email,
      timestamp: new Date().toISOString(),
    };

    // Send the data to Firebase Realtime Database (community.json)
    fetch(`https://apitesting-6694b-default-rtdb.firebaseio.com/community.json`, {
      method: 'POST', // Using POST to add a new entry under community.json
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataWithTimestamp),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data saved successfully:', data);
        setShowPopup(true); // Show the popup
        setTimeout(() => {
          setShowPopup(false); // Hide the popup after 3 seconds
        }, 3000);
        setEmail(''); // Clear the input field
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };

  return (
    <div className='landing-community'>
      <div className='landing-community-container'>
        <h2>Join the Community</h2>
        <p>Get notified on the latest researches, publications, take part in the interactions</p>
        <form onSubmit={handleSubmit}>
          <div className='landing-community-input'>
            <input
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={handleChange}
              required
            />
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className='popup'>
          Thanks for Submission!
        </div>
      )}
    </div>
  );
};

export default LandingCommunitySection;
