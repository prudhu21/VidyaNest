import React from 'react'
import './Contact.css'

const Contact = ({baseUrl}) => {
    return (
      <div className='d-flex'>
        <div>
          <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?uid=R163686062&ga=GA1.1.761964938.1707574847&semt=ais_hybrid&w=740"
            className='contact-img'/>
        </div>
        <div className='contact-container'>
            <p class="pt-3 text-center ">Email Me 🚀</p>
            <form class="mt-4">
              <input type="email"id="email" placeholder="Your Email" required/><br/><br/>

              <input type="text" id="name" placeholder="Your Name" required/><br/><br/>

              <input id="number" type="tel" placeholder="Your Number" required/><br/><br/>
              
              <input type="text" id="subject" placeholder="Subject" required/><br/><br/>

              <textarea type="text" placeholder="Message" id="message" required></textarea><br/><br/>

              <button class="submit-btn btn-outline-primary">Submit</button>
            </form>

        </div>
      </div>
    )
}

export default Contact