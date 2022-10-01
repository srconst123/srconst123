import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';

import GenericCarousel from '../../component/carousel/carousel';
import { Projects, completedProjects } from '../../constant/MockData';
import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';
import Cards from '../../component/cards/Cards';

const Home = () => {
  return (
    <>

      <Header />
      <GenericCarousel carouselSlidesData={Projects} />
 
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
        <div className="projects-content w-100">
          <div className="project-title">Completed Projects</div>
          <Cards data={completedProjects} />
        </div>
      </div>
      <div className="project-detail">
        <div className="project-carousel">
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