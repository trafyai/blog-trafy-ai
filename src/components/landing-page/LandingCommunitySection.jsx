import React from 'react'

const LandingCommunitySection = () => {
  return (
    <div className='landing-community'>
        <div className='landing-community-container'>
            <h2>Join the Community</h2>
            <p>Get notified on the latest researches, publications, take part in the interactions</p>
            <form action="">
                <div className='landing-community-input'>
                <input type="email" placeholder="Enter your email" />
                <button>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LandingCommunitySection