import React , {useState} from "react";
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import Cards from '../../component/cards/Cards';
import { providesData } from '../../constant/MockData';
// import Modals from '../../component/modal/Modals';
import Lgmodal from '../../component/modal/LgModal';

import Tables from '../../component/table/table';
import './Bookshreedham.css';
import GeneralTabs from '../../component/tabs/Tabs';
import Carousel from 'react-bootstrap/Carousel';
import GenericCarousel from '../../component/carousel/carousel';
import { Projects, completedProjects } from '../../constant/MockData';




const Bookshreedham = () =>{
    

    const [openModal, setOpenModal] = useState(false)
    return(
        <>
      <Header />
      <div className="booknowdiv"><GenericCarousel carouselSlidesData={Projects} /></div>

      <div className="welcome-quote-container mr">
        <div className="welcome-quote-content">
          <div className="quote-title text-center">Shree Dham Residential Complex</div>
          <div className="quote-description w-100 text-center"><p>It is an upcoming project of Sri Ram Construction near Morabadi Ground. The Project is situated at a walking distance approx. 500 meter from Morabadi Football Ground, Ranchi.</p></div>
        </div>
      </div>
      
      <div className="features bs">
        <div className="features-content ffs">
          <div className="features-title">We Provides</div>
          <Cards data={providesData} />
        </div>
      </div>
      <div className="unit-selector-container">
        
        {/* <Modals/> */}
        <Lgmodal/>
       </div>
       
      <Footer />
    </>

    )
}
export default Bookshreedham