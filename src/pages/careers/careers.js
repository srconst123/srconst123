import  {useRef,useState} from "react";
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import Axios from "axios";
import "./careers.css";
import emailjs from '@emailjs/browser';


const Careers = () =>{
    const [openModal, setOpenModal] = useState(false)
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMobile, setUserMobile] = useState("");
    const [userResume, setUserResume] = useState();
    
    
     const data = {
            userName:userName,
            userEmail:userEmail, 
            userMobile:userMobile, 
            userResume:userResume,
        }
     
        const formData = new FormData();
        formData.append("name", userName);
        formData.append("email", userEmail);
        formData.append('mobile_number', userMobile);
        formData.append("resume", userResume);


    const submitEnquiry = () => {
        
     
      if (userName==""||userEmail==""||userMobile=="") {
             alert('Please fill all the required fields !!!')
         }
        else
         {
        let response = fetch('https://srconst.000webhostapp.com/career.php', {
            method: 'POST',
            mode:'cors',
            body:formData,
        });
             alert('Request Sent Successfully !!! We will get in touch with you')
         }
    }

    const form = useRef();

//     const sendEmail = (e) => {
//       e.preventDefault();
//         if (userName==""||userEmail==""||userMobile=="") {
//             alert('Please fill all the required fields !!!')
//         } else {
//             emailjs.sendForm('service_1ljk3ms', 'template_3zmbxhm', form.current, '2Wdzn5AwiUWjOCwbD')
//             .then((result) => {
//                 console.log(result.text);
//                 console.log('Request Sent Successfully !!! We will get in touch with you')
//                 alert('Request Sent Successfully !!! We will get in touch with you')
//                 // Router.reload()
//             }, (error) => {
//                 console.log(error.text);
//                 alert('Allowed file size is 50kb Please remove resume ')
//             });
//         }

//     };
    

    return(
        <>
      <Header />
     
      <div className="form-group booking-form root">
            <div className="heading box">
            <form ref={form} >
                <div className="form-group"><h2 style={{paddingBottom:30 ,marginLeft:40}}>Enter Your Details</h2>
                    <label className="form-label"  >NAME :</label>
                    <input className="form-control form-control-lg" type="text" name='name' onChange={(e) => {setUserName(e.target.value)}} placeholder='Enter Your Name' />
                </div>
                <div className="form-group ">
                    <label className="form-label"  >EMAIL ID :</label>
                    <input className="form-control form-control-lg" type="text" name='email' onChange={(e) => {setUserEmail(e.target.value)}} placeholder='Enter your Email' />
                </div>
                <div className="form-group ">
                    <label className="form-label"  >MOBILE NO :</label>
                    <input className="form-control form-control-lg" type="text" name='mobile' onChange={(e) => {setUserMobile(e.target.value)}} placeholder='Enter your Mobile' />
                </div>
                <div className="form-group ">
                    <label className="form-label"  >UPLOAD RESUME :</label>
                    <input className="form-control form-control-lg" type="file" name='resume' placeholder='Resume' onChange={(e) => {setUserResume(e.target.files[0])}}  />
                </div>
                
                <div className="form-group text-center ">
                    <button type="button" className="btn btn-primary form-control form-control-lg" onClick={submitEnquiry}>SUBMIT</button>
                </div>
                
                </form>
            </div>
      
      </div>
      
      <Footer />
    </>

    )
}
export default Careers
