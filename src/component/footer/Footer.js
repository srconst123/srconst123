import React, { useState } from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Axios from 'axios';
import emailjs from '@emailjs/browser';

import { useRef } from 'react';
const Footer = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const submitEnquiry = () => {

    Axios.post('http://localhost:3001/api/create', {
      userName: userName,
      userEmail: userEmail,
      userMobile: userMobile,
      userMessage: userMessage
    })
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    //   alert('Message Sent Successfully !!!')

    emailjs.sendForm('service_dj0iwui', 'template_zb5t432', form.current, '58iU9kgT6iY3Hgiuz')
      .then((result) => {
        console.log(result.text);
        console.log('Request Sent Successfully !!! We will get in touch with you')
        alert('Message sent successfully')
        // Router.reload()
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className='foot'>
      <div className="cdiv bg-white">
        <div className="cld text-center"><h4 className="headc">Some of our esteemed Clients</h4>
        </div>
        <div className="imgcl">
          <img src="assets/images/client.png" alt="email" />
        </div>
      </div>


      <div className="footer-content ">
        <div className="left-footer">
          <div className="sub-heading">

            <h4>QUICKLINKS</h4>
            <div className="sub-heading-items">
              {/* <ul className='liks'>
                <a href="/projects"><li><div>PROJECTS</div></li></a>
                <a href="/services"><li>SERVICES</li></a>
                <a href="/about"><li>ABOUT</li></a>
                
              </ul> */}
              <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Linkedln</li>
              <li>Pinterest</li>
              <li>YouTube</li>


            </ul>
              <ul>
                <li><img src="assets/images/phone.svg" alt="phone" /> <a href="tel:+919234681459"></a>+919234681459</li>
                <li className='e-mail'><img src="assets/images/email.svg" alt="email" /><a href="mailTo:enquiry@sriramconstruction.com"></a>enquiry@sriramconstruction.com</li>
              </ul>
            </div>
          </div>
          <div className="social-links">

          </div>
          <div className="text">
            Privacy Policy <br /> SRI RAM CONSTRUCTION 2022.  <br /> All Rights Reserved
          </div>
        </div>
        <div className="right-footer">
          <div  className="sub-heading">GET IN TOUCH WITH US</div>
          <div className="get-details">
            <form className='ff' ref={form} onSubmit={sendEmail}>
              <input type="text" className='form1' name='name' onChange={(e) => { setUserName(e.target.value) }} placeholder='NAME' />
              <input type="text" className='form1' name='email' onChange={(e) => { setUserEmail(e.target.value) }} placeholder='YOUR EMAIL' />
              <input type="text" className='form1' name='mobile' onChange={(e) => { setUserMobile(e.target.value) }} placeholder='MOBILE NUMBER' />

              <input type="text" name='message' onChange={(e) => { setUserMessage(e.target.value) }} placeholder='MESSAGE' />
              <button type='submit' className='btn btn-default' onClick={submitEnquiry}>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Footer