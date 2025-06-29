import React from 'react'
import './NewsLetter.css';
import { FaEnvelope } from 'react-icons/fa';

const NewsLetter = () => {
  return (
    <section className="newsletter-section">
      <h2>Stay Connected: Join Our Newsletter!</h2>
      <p>
        Get the latest pet care tips, community updates, and exclusive offers delivered
        straight to your inbox.
      </p>
      <div className="newsletter-form">
        <input type="email" placeholder="Enter your email address" />
        <button>
          Subscribe <FaEnvelope style={{ marginLeft: '5px' }} />
        </button>
      </div>
    </section>
  )
}

export default NewsLetter