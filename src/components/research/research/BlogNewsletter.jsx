import React from 'react'

const BlogNewsletter = () => {
  return (
    <div className='blog-newsletter'>
        <div className='blog-newsletter-container'>
            <div className='blog-newsletter-heading'>
                <h2>Stay Informed, Stay Ahead</h2>
                <p>Subscribe to our newsletter for expert insights, industry updates, and in-depth analyses delivered straight to your inbox.</p>
            </div>
            <form className='blog-newsletter-form'>
                <input type="text" placeholder='Email'/>
                <button>Submit</button>
            </form>
        </div>    
    </div>
  )
}

export default BlogNewsletter