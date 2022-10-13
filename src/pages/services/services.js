import React, { useState } from "react";
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import Cards from '../../component/cards/Cards';
import { providesData } from '../../constant/MockData';
import Modals from '../../component/modal/Modal';
import Tables from '../../component/table/table';
import Axios from "axios";
import GeneralTabs from '../../component/tabs/Tabs';
import './services.css';

const Services = () => {
  return (
    <>
      <Header />
      <div className="text-center stitle ">
        <p className="text-center stu">Our Range of Services</p>
        <h3 className="text-center stb servicseTitle">We've got all you need</h3>
      </div>
      <div className="form-control service_page">
        <div className="sc">
          <div className=" mtc  simg scol">
            <img src="assets/images/service.jpg" alt="founder" height="300px" />
          </div>
          <div className=" services sm cosl">
            <h2 className="mtc">EPC Service</h2>
            <p>
              We provide services like Bulk Material Handling System, Civil Construction, HVAC, Electrical , Building Management System(BMS) and other Electro-Mechanical work.
              EPC stands for engineering, procurement, and construction. It is a prominent form of contracting agreement in the construction industry, according to EPC Engineer. Companies that provide EPC services are often called the EPC contractors. They are in charge of designing the an energy solution to help a particular facility to solve its energy problems and then move on to the construction of that specific project. </p>
          </div>
        </div>
        <div className="sc">

          <div className=" mtc simg col">

            <img src="assets/images/projectManagement.jpg" alt="founder" height="300px" />

          </div>
          <div className=" services sm  cosl">
            <h2 className="mtc" >Project Management</h2>
            <p>
              We provide services like Bulk Material Handling System, Civil Construction, HVAC, Electrical , Building Management System(BMS) and other Electro-Mechanical work.
              Project Management involves planning, organizing and managing project activities required to complete an individual project with predetermined parameters. Momentum applies the necessary skills, tools and proven best practice strategies to help ensure your organization’s projects are completed on time and within budget. </p>
          </div>
        </div>
        <div className="sc">

            <div className=" mtc  simg scol">

              <img src="assets/images/construction.jpg" alt="founder" height="300px" />
            </div>

            <div className=" services sm  csol">
              <h2 className="mtc" >Construction</h2>
              <p>
                We provide services like Bulk Material Handling System, Civil Construction, HVAC, Electrical , Building Management System(BMS) and other Electro-Mechanical work.
                Construction and related engineering services includes construction work for buildings and civil engineering, installation and assembly work, building completion and finishing work. Architectural and engineering services are classified as part of “professional services”.</p>
            </div>
          </div>


      </div>



      <Footer />
    </>

  )
}
export default Services
