import React from 'react';
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import Cards from '../../component/cards/Cards';
import { featuresData } from '../../constant/MockData';
import './Projects.css';
import GeneralTabs from '../../component/tabs/Tabs';
import Carousel from 'react-bootstrap/Carousel';





const Projects = () => {
  return (
    <>
      <Header />
      <div className="top-image projectc protop">
        <Carousel >
          <Carousel.Item >
            <img
              className="d-block w-100"
              src="assets/images/1-hd.jpg"
              alt="First s slide"
              height="300px"
              width="400px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/images/2-hd.jpeg"
              alt="First s slide"
              height="300px"
              width="400px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/images/3-hd.jpeg"
              alt="First s slide"
              height="300px"
              width="400px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/images/4-hd.jpg"
              alt="First s slide"
              height="300px"
              width="400px"
            />
          </Carousel.Item>
        </Carousel>

        <div className="project-image-text text-center w-100"><span className="ct">Sri Ram brings you 1, 2 and 3 bedroom <br /> apartments in Ranchi.</span>        <div className="project-image-button w-100 text-center  "><a className='btn btn-lg btn-light' href='/Bookshreedham'>Book Now</a></div>
        </div>

      </div>
      <div className="welcome-quote-container">
        <div className="welcome-quote-content">
          <div className="quote-title">Welcome to Shree Dham</div>
          <div className="quote-description">A luxurious lakefront development, Shree Dham is a haven of beauty with abundant space and modern comforts. All apartments at Shree Dham are surrounded by scenic views of Lake. We took great care to craft this luxury project with a contemporary design that ensures a fine balance between urban comforts and eco-friendly surroundings. The property includes rainwater harvesting, and was built using environmentally friendly building materials with roof gardens, high-quality indoor air, plenty of natural lighting, and energy-efficient, water-saving fixtures to make it a “green” project through-and-through. Shree Dham is designed by renowned architects.</div>
          <a className=" btn btn-primary btn-lg " href='/Bookshreedham'>Book Now</a>
        </div>
        <div className="welcome-quote-image proq">
          <img src="assets/images/shreeDham-hd.jpg" alt="welcome" height="auto" width="442px" />
        </div>
      </div>
      <div className="features">
        <div className="features-content fc">
          <div className="features-title"><h1>Features</h1></div>
          <Cards data={featuresData} />
        </div>
      </div>
      <div className='mainProject-container'>
        <div className='mainProject-content'>
          <GeneralTabs />
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Projects