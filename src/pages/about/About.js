import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import GenericCarousel from '../../component/carousel/carousel';
import { Projects, completedProjects,Projectabout } from '../../constant/MockData';
import './About.css';

const About = () => {
  return (
    <>
      <Header />
      <div className="aboutC">      <GenericCarousel carouselSlidesData={Projectabout} />
      </div>
      {/* <div  className="image-text">Building trust, dedication and perfection for 2+ decades.</div> */}

      <div className='tab-detail'>
        <div className="experience-tab">
          <div className='num'>20+</div>
          <div className='num-detail'>Years of experience</div>
        </div>
        <div className="completed-projects">
          <div className='num'>13</div>
          <div className='num-detail'>Completed Projects</div>
        </div>
      </div>
      <div className="journey-detail">
        <div className="journey-content">
          <div className="image amr">
            <img src="assets/images/founder.jpg" alt="founder" />
          </div>

          <div className="content">
            <h3>Our Journey</h3>
            <div className="journey-description">Sri Ram Construction was founded in the year 1995 by Sri Sanjay Kumar. He foresaw the development of Ranchi from a budding city to a hub of development, and even before many had thought of it, he put his dreams into action, and laid the foundation of Sri Ram Construction.With over 24 years of experience in construction and real estate development, Sanjay Kumar, as proprietor of Sri Ram Construction has been at the forefront of the real estate industry, through building world class residential and commercial projects. <br /><br /> As a construction and contracting company, Sri Ram Construction successfully executed many commercial and residential project as well as Civil and Electrical work in Jharkhand and Bihar.To undertake this ever expanding work, Sri Ram Construction today, is backed by a professional and competent team constantly growing workforce of currently over fifty, experienced Engineers, Skilled Supervisor, Civil Foreman, Architects, Chartered Accountant, MBA, etc.</div>
          </div>
        </div>
      </div>
      <div className="journey-detail">
        <div className="journey-content-2">
          <div className="content">
            <h3>Current operations</h3>
            <div className="journey-description">Today, the name Shri Ram Construction brings with it a sense of familiarity in Jharkhand. That’s because we have spent 24 years actively studying, reacting to and shaping the industry, influencing trends and ensuring we foresee future ones. <br /><br /> As a multi-segmented, family-owned company, we have grown outwards into diverse fields over the years. We have been involved in operations ranging from hotels, travel and tourism to properties & investments and property management services – all fields where we now command a reputable market share.</div>
          </div>

          <div className="image2 amr1">
            <img src="assets/images/operations.jpg" alt="founder" />
          </div>
        </div>
      </div>
      <div className="customer-speak">
        <div className='customer'>
          <div className='heading-cspeak'> <h3 className='text-center csh1'>Customer's Speak</h3></div>
          <Carousel variant="dark">
            <Carousel.Item>
              {/* <img
                className="d-block w-100"
                src="assets/images/cro1.jpg"
                alt="First slide"
                height="300px"
                width="400px"
              /> */}
              <div className='cs-text'> <h5 className='text-center'>“Very proud to be a part of Sri Ram Constructions family. I had a very courteous and professional relationship with the staff of Sri Ram Construction”</h5></div>
              
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              {/* <img
                className="d-block w-100"
                src="assets/images/slide11.jpeg"
                alt="First slide"
                height="300px"
                width="400px"
              /> */}
              <div className='cs-text'> <h5 className='text-center'>“We are happy and pleased to be owning a flat at Sri Ram Constructions. Staff were friendly and helpful through out the journey”</h5></div>
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              {/* <img
                className="d-block w-100"
                src="assets/images/cro1.jpg"
                alt="First slide"
                height="300px"
                width="400px"
              /> */}
              <div className='cs-text'> <h5 className='text-center'>“Its been a great experience with co-operative staff. Great services!”</h5></div>
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              {/* <img
                className="d-block w-100"
                src="assets/images/cro1.jpg"
                alt="First slide"
                height="300px"
                width="400px"
              /> */}
              <div className='cs-text'> <h5 className='text-center'>“Thank you for being co-operative and understanding throughout.”</h5></div>
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              {/* <img
                className="d-block w-100"
                src="assets/images/cro1.jpg"
                alt="First slide"
                height="300px"
                width="400px"
              /> */}
              <div className='cs-text'> <h5 className='text-center'>“They are very helpful and co-ordinating till registration.”</h5></div>
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </div>


      </div>
      <div className="af"><Footer /></div>
    </>
  )
}

export default About
