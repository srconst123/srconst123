
import React from 'react';
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import './Contact.css';


const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact-us-container">
        <div className="contact-us-content">
          <div className="map-location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.9843924134166!2d85.31580301477672!3d23.3887818847688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e190959f9d79%3A0xcf79884909aa1e6!2sSri%20Ram%20Construction!5e0!3m2!1sen!2sin!4v1660980989176!5m2!1sen!2sin" width="600" height="450" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="contact-us-content-description ddd">
            <div className="contact-us-title mh ">CONTACT US</div>
            <div className="contact-us-details">
              <div className="contact-us-description">If you would like to get in touch with our team, we are available from 9am to 6pm, Monday to Saturday.</div>
              <div className="address">2nd Floor, Ganpati Complex, Ranchi College Rd, opp. Sidhu Kanhu Park, Ranchi, Jharkhand</div>
              <div className="email"><a href="mailTo:enquiry@sriramconstruction.com">enquiry@sriramconstruction.com</a></div>
              <div className="phone">+91 9234681459</div>
            </div>
          </div>
        </div>
      </div>
      <div className="cfooter"><Footer /></div>
      
    </>
  )
}
export default Contact