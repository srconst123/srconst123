import React, { useRef, useState } from "react";
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import Axios from 'axios';
import './flatEnquiry.css';
import emailjs from '@emailjs/browser';


const FlatEnquiry = ({ closemodal }) => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMobile, setUserMobile] = useState("");
    const [userBhk, setUserBhk] = useState("");
    const [userArea, setUserArea] = useState("");
    const [userMessage, setUserMessage] = useState("");

    const submitEnquiry = () => {

        const data = {
            userName: userName,
            userEmail: userEmail,
            userMobile: userMobile,
            userMessage: userMessage,
            userBhk: userBhk,
            userArea: userArea,

        }
       let response = fetch('https://srconst.000webhostapp.com/booking.php', {
            method: 'POST',
            mode:'cors',
            body: JSON.stringify(data)

        });


    }


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if (userName == "" || userEmail == "" || userMobile == "" || userMessage == "" || userBhk == "" || userArea == "") {
            alert('Please fill all the required fields !!!')
        } else {
            emailjs.sendForm('service_1ljk3ms', 'template_o8z978x', form.current, '2Wdzn5AwiUWjOCwbD')
                .then((result) => {
                    console.log(result.text);
                    console.log('Request Sent Successfully !!! We will get in touch with you')
                    alert('Request Sent Successfully !!! We will get in touch with you')
                    // Router.reload()
                }, (error) => {
                    console.log(error.text);
                });
        }

    };

    return (
        <>
            <Header />
            <div className="form-grosup mxf  booking-form">
                <div className="heading "><h2>Enter Your Details For Booking:</h2></div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-groups">
                        <label className="form-label"  >Enter Your Name :</label>
                        <input className="form-control form-control-lg" type="text" name='name' onChange={(e) => { setUserName(e.target.value) }} placeholder='Your Name' />
                    </div>
                    <div className="form-grousp ">
                        <label className="form-label"  >Email :</label>
                        <input className="form-control form-control-lg" type="text" name='email' onChange={(e) => { setUserEmail(e.target.value) }} placeholder='Your Email' />
                    </div>
                    <div className="form-groups ">
                        <label className="form-label"  >Mobile :</label>
                        <input className="form-control form-control-lg" type="text" name='mobile' onChange={(e) => { setUserMobile(e.target.value) }} placeholder='Your Mobile Number' />
                    </div>
                    <div className="form-groups ">
                        <label className="form-label"  >Flat : </label>
                        <select name="bhk" class="form-select form-control form-control-lg" onChange={(e) => { setUserBhk(e.target.value) }} aria-label="Default select example">
                            <option value="609.99 Sqft">Select Flats</option>
                            <option value="1BHK">1BHK</option>
                            <option value="2BHK">2BHK</option>
                            <option value="3BHK">3BHK</option>
                        </select>
                    </div>
                    <div className="form-groups ">
                        <label className="form-label"  >Area :</label>
                        <select name="area" class="form-select form-control form-control-lg" onChange={(e) => { setUserArea(e.target.value) }} aria-label="Default select example">
                            <option value="609.99 Sqft">Select Flats Area</option>
                            <option value="609.99 Sqft">1BHK 609.99 Sqft</option>
                            <option value="616.99 Sqft">1BHK 616.99 Sqft</option>
                            <option value="1071.31 Sqft">2BHK 1071.31 Sqft</option>
                            <option value="1441.31 Sqft">3BHK 1441.31 Sqft</option>
                            <option value="1497.74 Sqft">3BHK 1497.74 Sqft</option>
                            <option value="1509.97 Sqft">3BHK 1509.97 Sqft</option>
                            <option value="1516.94 Sqft">3BHK 1516.94 Sqft</option>
                            <option value="1612.31 Sqft">3BHK 1612.31 Sqft</option>

                        </select>
                    </div>
                    <div className="form-groups ">
                        <label className="form-label"  >Message :</label>
                        <input className="form-control form-control-lg" type="text" name='message' onChange={(e) => { setUserMessage(e.target.value) }} placeholder='Your Message' />
                    </div>
                    <div className="form-grsoup sb text-center ">
                        <button type="submit" className="btn btn-primary form-control form-control-lg" onClick={submitEnquiry}>SUBMIT</button>
                    </div>


                </form>


            </div>
            <Footer />

        </>
    )
}
export default FlatEnquiry
