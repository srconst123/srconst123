import React,{ useState } from "react";
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import Cards from '../../component/cards/Cards';
import { providesData } from '../../constant/MockData';
import Modals from '../../component/modal/Modal';
import Tables from '../../component/table/table';
import Axios from "axios";
import GeneralTabs from '../../component/tabs/Tabs';
import "./team.css";

const Team = () => {

  return (
    <div id="test">
      <Header />

      <div >
        <h1 className="text-center serviceTitle">Our Passionate Team </h1>
      </div>

      <div className="welcome-quote-container tc">
      <div className='team-img'>          <div style={{ width: '264px' }} className="tab timg "><img src="assets/images/founder.jpg" alt="founder" height="30px" />

<div style={{ padding: '0px'}} className='ndiv'> Sanjay Kumar
  <br/>Company CEO
  {/* <p>Contact No: 99999999</p>
  <p>Email: abc@abc.com</p> */}


</div>

</div></div>
        <div className="team-img">


          <div style={{ width: '264px' }} className="tab timg "><img src="assets/images/2nd.jpeg" alt="founder" height="30px" />

<div className='ndiv'> Kunal Kumar
  {/* <p>Company CEO</p> */}
  {/* <p>Contact No: 99999999</p>
  <p>Email: abc@abc.com</p> */}


</div>

</div>

<div style={{ width: '264px' }} className="tab timg "><img src="assets/images/3rd.jpeg" alt="founder" height="30px" />

<div className='ndiv'> Soni Mahapatra
  {/* <p>Company CEO</p> */}
  {/* <p>Contact No: 99999999</p>
  <p>Email: abc@abc.com</p> */}


</div>

</div>

<div style={{ width: '264px' }} className="tab timg "><img src="assets/images/4th.jpeg" alt="founder" height="30px" />

<div className='ndiv'> Loknath Tiwari
  {/* <p>Company CEO</p> */}
  {/* <p>Contact No: 99999999</p>
  <p>Email: abc@abc.com</p> */}


</div>

</div>

          <div style={{ width: '264px', height: '274px' }} className="tab timg "> <img src="assets/images/pankaj.jpg" alt="sales" height="300px" />

            <div className='ndiv' > Pankaj Choudhary
              {/* <p>Sales Executive </p> */}
              {/* <p>Contact No : 99999999</p>
              <p>Email: abc@abc.com</p> */}
            </div>

          </div>

          <table style={{display:'none'}}>

            <tr>
              <td style={{ width: '264px', height: '274px' }} className="tab timg "><img src="assets/images/founder.jpg" alt="founder" height="30px" /></td>

              <td style={{ width: '264px', height: '274px' }} className="tab timg "> <img src="assets/images/pankaj.jpg" alt="sales" height="300px" /></td>


            </tr>


            <tr>
              <td className="tab"><ul> Sanjay Kumar
                <p>Company CEO</p>
                <p><b>Contact No: 99999999</b></p>
                <p>Email: abc@abc.com</p>


              </ul>

              </td>
              <td>
                <ul> Pankaj Choudhary
                  <p>Sales Executive </p>
                  <p>Contact No : 99999999</p>
                  <p>Email: abc@abc.com</p>
                </ul>
              </td>
              {/*<td className="tab"><ul>
             <p></p>
             <ul>pankaj mishra </ul>
             <p>Contact No : 99999999</p>
             <p>Email: abc@abc.com</p>
             </ul>
             </td>*/}
            </tr>

            <tr>
              <td><hr /></td>
              <td><hr /></td>
              <td><hr /></td>
              <hr />
            </tr>


            {/* <tr>
              <td className="tab"><img src="assets/images/founder.jpg" alt="founder" height="300px" /></td>
               
             <td className="tab"> <img src="assets/images/founder.jpg" alt="founder" height="300px" /></td>
            
             <td className="tab"> <img src="assets/images/founder.jpg" alt="founder" height="300px" /></td>
             
            </tr>
            
            
            <tr>
             <td className="tab"><ul> Sanjay Kumar
             <p>Company CEO</p>
             </ul>
             
             </td> 
             <td>         
             <ul> Sanjay Kumar
             <p>Company CEO</p>
             </ul> 
             </td> 
             <td className="tab"><ul> Sanjay Kumar
             <p>Company CEO</p>
             </ul>
             </td>
            </tr> */}

          </table>
          {/* 
          <div className="newTable">
            <div className="para" >
              <p><img src="assets/images/founder.jpg" alt="founder" height="300px" /></p>
              <p><ul> Sanjay Kumar
             <p>Company CEO</p>
             </ul></p>
            </div>

            <div className="para">
            <p><img src="assets/images/founder.jpg" alt="founder" height="300px" /></p>
            <p><ul> Sanjay Kumar
             <p>Company CEO</p>
             </ul></p>
            </div>
            <div className="para"><p><img src="assets/images/founder.jpg" alt="founder" height="300px" /></p>
            <p><ul> Sanjay Kumar
             <p>Company CEO</p>
             </ul></p>
            </div>
            
            <div className="para">
            <p><img src="assets/images/founder.jpg" alt="founder" height="300px" /></p>
            <p><ul> Sanjay Kumar
             <p>Company CEO</p>
             </ul></p>
            </div>

          </div>  */}
          {/* <hr/> */}
          {/* <hr/> */}




        </div>
      </div>





      <Footer />
    </div>

  )
}
export default Team
