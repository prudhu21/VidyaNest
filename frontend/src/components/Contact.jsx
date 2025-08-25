import React from 'react'
import './Contact.css'

const Contact = ({baseUrl}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: e.target.email.value,
      name: e.target.name.value,
      number: e.target.number.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("✅ Message sent & saved to MongoDB Atlas!");
        e.target.reset(); // clear form
      } else {
        alert("❌ Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Server error. Please try again later.");
    }
  };

    return (
      <div className='d-flex'>
        <div>
          <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?uid=R163686062&ga=GA1.1.761964938.1707574847&semt=ais_hybrid&w=740"
            className='contact-img'/>
        </div>
        <div className='contact-container'>
            <p className="pt-3 text-center ">Email Me 🚀</p>
            <form className="mt-4" onSubmit={handleSubmit}>
              <input type="email"id="email" placeholder="Your Email" required/><br/><br/>

              <input type="text" id="name" placeholder="Your Name" required/><br/><br/>

              <input id="number" type="tel" placeholder="Your Number" required/><br/><br/>
              
              <input type="text" id="subject" placeholder="Subject" required/><br/><br/>

              <textarea type="text" placeholder="Message" id="message" required></textarea><br/><br/>

              <button className="submit-btn btn-outline-primary" type='submit'>Submit</button>
            </form>
        </div>
      </div>
    )
}

export default Contact