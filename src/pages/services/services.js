import React , {useState} from "react";
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import Cards from '../../component/cards/Cards';
import { providesData } from '../../constant/MockData';
import Modals from '../../component/modal/Modal';
import Tables from '../../component/table/table';
import Axios from "axios";
import GeneralTabs from '../../component/tabs/Tabs';
import './services.css';

const Services = () =>{

    

    
    

    const [openModal, setOpenModal] = useState(false)
    return(
        <>
      <Header />
      <div>
        <h1 className="text-center serviceTitle">We have got all you need</h1>
      </div>
      <div className="form-control service_page">
        <tr>
        <td>
            <div className=" form-group  simg col">
            <img src="assets/images/service.jpg" alt="founder" height="300px" />
              
            </div>
            </td>
            <td>
            <div className=" sm col">
                <h2>EPC Service</h2>
                <p>
                We provide services like Bulk Material Handling System, Civil Construction, HVAC, Electrical , Building Management System(BMS) and other Electro-Mechanical work.
                EPC stands for engineering, procurement, and construction. It is a prominent form of contracting agreement in the construction industry, according to EPC Engineer. Companies that provide EPC services are often called the EPC contractors. They are in charge of designing the an energy solution to help a particular facility to solve its energy problems and then move on to the construction of that specific project. </p>
            </div>
            </td>
        </tr>

        <tr>
        <td>
            <div className=" form-group simg col">
              
              <img src="assets/images/projectmanagement.jpg" alt="founder" height="300px" />
              
            </div>
            </td>
            <td>
            <div className=" sm  col">
                <h2>Project Management</h2>
                <p>
                We provide services like Bulk Material Handling System, Civil Construction, HVAC, Electrical , Building Management System(BMS) and other Electro-Mechanical work.
                Project Management involves planning, organizing and managing project activities required to complete an individual project with predetermined parameters. Momentum applies the necessary skills, tools and proven best practice strategies to help ensure your organization’s projects are completed on time and within budget. </p>
            </div>
            </td>
        </tr>
        <tr>
        <td>
            <div className=" form-group simg col">
             
              <img src="assets/images/construction.jpg" alt="founder" height="300px" />
            </div>
            </td>
            <td>
            <div className=" sm  col">
                <h2>Construction</h2>
                <p>
                We provide services like Bulk Material Handling System, Civil Construction, HVAC, Electrical , Building Management System(BMS) and other Electro-Mechanical work.
                Construction and related engineering services includes construction work for buildings and civil engineering, installation and assembly work, building completion and finishing work. Architectural and engineering services are classified as part of “professional services”.</p>
            </div>
            </td>
        </tr>
            
          
        </div>
      
      
       
      <Footer />
    </>

    )
}
export default Services
