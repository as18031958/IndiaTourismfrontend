import React from 'react'
import Layout from '../Layoutpage/Layout'
import "../App.css"

const Contact = () => {
  return (
    <Layout>
       
    <div className="contact-us-page">
      <h1>Contact Us</h1>
      <p>Get in touch! We'd love to hear from you.</p>
     
      <h2>Send us a message</h2>
   
    </div>


    <form >
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  

    </Layout>
  )
}

export default Contact