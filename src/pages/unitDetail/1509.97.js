import React, { useState } from "react";
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import Cards from '../../component/cards/Cards';
import { providesData } from '../../constant/MockData';
import Modals from '../../component/modal/Modal';
import './unitDetail.css';
import GeneralTabs from '../../component/tabs/Tabs';
import { useLocation } from "react-router-dom";



const A1A = (props) => {

  const location = useLocation();
  const data = location.state;

  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <Header />
      <div className="unit-detail-container">
        <div className="unit-blueprint">

        </div>
        <div className="unit-detail ">
          <td>
            <div className=" form-groups">
              <img className="col" src="https://www.sriramconstruction.com/_next/static/images/ABDE1-0d4db84f2f9f0891e629a69e2128240a.png" alt="block" height="400px"></img>

            </div>
          </td>
          <td>
            <div className=" form-groups">

              <div className="col text-center ">
                <h2>3BHK</h2>
                <h3>Area : 1509.97 Sqft</h3>
                <a className=" btn btn-primary btn-lg " href='/flatEnquiry'>Book Now</a>
              </div>
            </div>
          </td>
          <td className="">

          </td>
        </div>

      </div>
      <div className="features mrff">
        <div className="features-content ud">
          <div style={{ margin: '64px 12px' }} className="features-title">Quality Features</div>
          <Cards data={providesData} />
        </div>
      </div>

      <Footer />
    </>

  )
}
export default A1A
