import React, { useRef,useState} from "react";
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import Axios from 'axios';
import './flatEnquiry.css';
import emailjs from '@emailjs/browser';


const FlatEnquiry = ({ closemodal }) =>{
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMobile, setUserMobile] = useState("");
    const [userBlock, setUserBlock] = useState("");
    const [userFloor, setUserFloor] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [userUnit, setUserUnit] = useState("");
    const [openModal, setOpenModal] = useState(false)

    const submitEnquiry = () => {
    
        Axios.post('/api/booking.php', {
            userName:userName,
            userEmail:userEmail, 
            userMobile:userMobile, 
            userMessage:userMessage,
            userBlock: userBlock,
            userFloor: userFloor,
            userUnit: userUnit,

        })


    }


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
        if (userName==""||userEmail==""||userMobile==""||userMessage==""||userBlock==""||userFloor==""||userUnit=="") {
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

    return(
        <>
        <Header/>
        <div className="form-grosup mxf  booking-form">
            <div className="heading "><h2>Enter Your Details For Booking:</h2></div>
            <form ref={form} onSubmit={sendEmail}>
                <div className="form-groups">
                    <label className="form-label"  >Enter Your Name :</label>
                    <input className="form-control form-control-lg" type="text" name='name' onChange={(e) => {setUserName(e.target.value)}} placeholder='NAME' />
                </div>
                <div className="form-grousp ">
                    <label className="form-label"  >Email :</label>
                    <input className="form-control form-control-lg" type="text" name='email' onChange={(e) => {setUserEmail(e.target.value)}} placeholder='YOUR EMAIL' />
                </div>
                <div className="form-groups ">
                    <label className="form-label"  >Mobile :</label>
                    <input className="form-control form-control-lg" type="text" name='mobile' onChange={(e) => {setUserMobile(e.target.value)}} placeholder='MOBILE NUMBER' />
                </div>
                <div className="form-groups ">
                    <label className="form-label"  >Block :</label>
                    <input className="form-control form-control-lg" type="text" name='block' onChange={(e) => {setUserBlock(e.target.value)}} placeholder='BLOCK' />
                </div>
                <div className="form-groups ">
                    <label className="form-label"  >Floor No :</label>
                    <input className="form-control form-control-lg" type="text" name='floor' onChange={(e) => {setUserFloor(e.target.value)}} placeholder='FLOOR' />
                </div>
                <div className="form-groups ">
                    <label className="form-label"  >Enter Unit :</label>
                    <input className="form-control form-control-lg" type="text" name='unit' onChange={(e) => {setUserUnit(e.target.value)}} placeholder='UNIT' />
                </div>
                <div className="form-grousp ">
                    <label className="form-label"  >Your message to us :</label>
                    <input className="form-control form-control-lg" type="text" name='message' onChange={(e) => {setUserMessage(e.target.value)}} placeholder='MESSAGE' />
                </div>
                <div className="form-grsoup sb text-center ">
                    <button type="submit" className="btn btn-primary form-control form-control-lg" onClick={submitEnquiry}>SUBMIT</button>
                </div>
                
                    
            </form>

              
        </div>
        <Footer/>
        
        </>
    )
}
export default FlatEnquiry
