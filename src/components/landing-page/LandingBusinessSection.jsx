import React from 'react'
import Link from 'next/link'
import '@styles/landing-page/LandingPage.css'
const LandingBusinessSection = () => {
  return (
    <div className='landing-business'>
        <div className='landing-business-container'>
            <h2>Grow you busines with trafy AI</h2>
            <p>Supercharge your business growth with AI-powered insights and automation from Trafy AI.</p>
            <div className='landing-business-badges'>
                <span>Marketing</span>
                <span>Sales</span>
                <span>Operations</span>
                <span>Management</span>
            </div>
            <Link href='/talk-to-sales' >Talk to Sales</Link>
        </div>
    </div>
  )
}

export default LandingBusinessSection