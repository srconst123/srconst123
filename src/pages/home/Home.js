import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';

import GenericCarousel from '../../component/carousel/carousel';
import { Projects, completedProjects ,cardslide,cardslide1,cardslide2 } from '../../constant/MockData';
import { ccp1,ccp2,ccp3,ccp4,ccp5,ccp6,ccp7,ccp8,ccp9,ccp10,ccp11} from '../../constant/MockData1';

import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';
import Cards from '../../component/cards/Cards';
import Cardsmin from '../../component/cards/ccard';


const Home = () => {
  return (
    <>

      <Header />
    <div className="hp">
      <GenericCarousel  carouselSlidesData={Projects} />
    </div>
      <div className="about-us-container">
        <div className="about-us-content">
          <div className="left-description">        <div className="about-us-title">About Us</div>
            We put heart and soul into reshaping Ranchi.</div>
          <div className="right-description">Sri Ram Construction was founded in the year 1995 by Sri Sanjay Kumar. He foresaw the development of Ranchi from a budding city to a hub of development, and even before many had thought of it, he put his dreams into action, and laid the foundation of Sri Ram Construction.With over 24 years of experience in construction and real estate development, Sanjay Kumar, as proprietor of Sri Ram Construction has been at the forefront of the real estate industry, through building world class residential and commercial projects.</div>
        </div>
      </div>
      <div className="mission-container">
        <div className="mission-content">
          <div className="inner-sqaure">
            <div className="quote">
              <p><i>"Our vision gives us a sense of direction and destination to be respectable building contractors delivering beyond expectations, always. It captures our aspiration of being the best at everything we do. Our mission is to procure projects at competitive pricing, provide safe working conditions and deliver quality work within reasonable time."</i></p>
              <div className="name">Sanjay Kumar</div>
              <div className="role">Managing Director, Sri Ram Constructions</div>
            </div>
          </div>
        </div>
      </div>
      <div className="completed-projects">
        <div className="projects-content hcpmin w-100">
          <div className="project-title">Completed Projects</div>
          <Carousel variant="dark" interval={3000} className="maxview">

          <Carousel.Item>
          <Cards data={cardslide} />
          </Carousel.Item>
          
          <Carousel.Item>
          <Cards data={cardslide1} />
          </Carousel.Item>
          
          <Carousel.Item>
          <Cards data={cardslide2} />
          </Carousel.Item>

          
          </Carousel>
          <Carousel interval={3000} variant="dark" className="minview mhc">
          <Carousel.Item>
              <Cards data={ccp1} />
          </Carousel.Item>
          <Carousel.Item>
              <Cards data={ccp2} />
          </Carousel.Item>
          <Carousel.Item>
              <Cards data={ccp3} />
          </Carousel.Item>
          <Carousel.Item>
              <Cards data={ccp4} />
          </Carousel.Item>
          <Carousel.Item>
              <Cards data={ccp5} />
          </Carousel.Item>
          <Carousel.Item>
              <Cards data={ccp6} />
          </Carousel.Item>
          <Carousel.Item>
              <Cards data={ccp7} />
          </Carousel.Item>
          <Carousel.Item>
              <Cards data={ccp8} />
          </Carousel.Item>
          <Carousel.Item>
              <Cards data={ccp9} />
          </Carousel.Item>
          <Carousel.Item>
              <Cards data={ccp10} />
          </Carousel.Item>
          <Carousel.Item>
              <Cards data={ccp11} />
          </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="project-detail hcm">
        <div  className="project-carousel mts">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/images/cro1.jpg"
                alt="First slide"
                height="300px"
                width="400px"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/images/slide11.jpeg"
                alt="First slide"
                height="300px"
                width="400px"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/images/cro1.jpg"
                alt="First slide"
                height="300px"
                width="400px"
              />
            </Carousel.Item>

          </Carousel>
        </div>
        <div className="project-content">
          <h3><b>SHEE DHAM</b></h3>
          <div className="project-description">

            <p>
              <h5> Time, Tranquility & Elegance</h5></p>

            Shree Dham  is located right across the road from  Adalhatu Morabadi,Ranchi. The entire property is open on three sides, giving you access to daylight. It ensures that though you have accessibility to the best of the city, you can also enjoy peace, quiet and privacy.

            At Shree Dham, we want every family to enjoy a wholesome lifestyle. Be it entertainment or sport, health or relaxation, business conveniences or socialising, security or privacy, elder care or children’s activities, everything is available on the property.

          </div>
        </div>
      </div>
      <Footer />

    </>
  )
}

export default Home
