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

    Axios.post('https://srconst.herokuapp.com/api/create', {
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
    <hr/>
      <div className="cdiv bg-white">
        <div className="cld text-center"><h4 className="headc">Some of our esteemed Clients</h4>
        </div>
        <div className='mnaincldiv'>
        <div className="cldiv">
          <div className='clc'><img src="assets/images/1c.jpg" alt="email" /></div>
          <div className='clc'><img src="assets/images/2c.jpeg" alt="email" /></div>
          <div className='clc'><img src="assets/images/3c.png" alt="email" /></div>
          <div className='clc'><img src="assets/images/4c.jpg" alt="email" /></div>
          <div className='clc'><img src="assets/images/5c.png" alt="email" /></div>
          <div className='clc'><img src="assets/images/6c.png" alt="email" /></div>
          <div className='clc'><img src="assets/images/7c.jpg" alt="email" /></div>
          <div className='clc'><img src="assets/images/8c.png" alt="email" /></div>
          <div className='clc'><img src="assets/images/9c.png" alt="email" /></div>
          <div className='clc'><img src="assets/images/10c.png" alt="email" /></div>
        </div>
        <div className="cld moct text-center"><h4 className="headc">and many other satisfied clients</h4></div>

         
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
                <li className='phone'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> <a href="tel:+919234681459"></a>+919234681459</li>
                <li className='e-mail'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg><a href="mailTo:enquiry@sriramconstruction.com"></a>enquiry@sriramconstruction.com</li>
              </ul>
            </div>
          </div>
          <div className="social-links">

          </div>
          <div className="text">
            Privacy Policy <br /> SRI RAM CONSTRUCTION 2022.  <br /> &#169; All Rights Reserved
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
              <button type='submit' className='btn btn-secondary bgcc' onClick={submitEnquiry}>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Footer
