import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./carousel.css"


const GenericCarousel = ({ carouselSlidesData, height = "100%", width = "100%" }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }
  return (

    <div className='crousel_container about'>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={5000} pause={false} >
        {
          carouselSlidesData && carouselSlidesData.map(obj => {
            const { url, alt, label, description } = obj;
            return (
              <Carousel.Item>
                <img
                  // className="d-block w-100"  
                  src={url}
                  alt={alt}
                  height={height}
                  width={width}
                />

                <Carousel.Caption>
                  {label && <h3>{label}</h3>}
                  {description && <p>{description}</p>}
                </Carousel.Caption>
              </Carousel.Item>
            );
          })
        }

      </Carousel>
      <div className="carousel-text">
        {/* <div className=" hidden text-center">
          <h4 className="heading">AQUA</h4>
          <p className="sub-text">LAKEFRONT RESIDENENCES</p>
        </div> */}
        <div className="text-center ctext wh sh"><span className="chead">SHREE DHAM</span>  </div>
        <div  className="text-center subhead ct2 wh sh "><span className="suhead">Sri Ram Construction Brings You</span><span className="sh1">1, 2 and 3 bedroom apartments located on Adalhatu Road , Morabadi , Ranchi</span></div>
        
        <div className="text-center ct2 sh wh mb-24">starting from 3200sqft</div>
        <div className="project-image-button text-center  "><a className='btn btn-lg btn-light min-btn' href='/Bookshreedham'>Book Now</a></div>
      </div>
    </div>
  )
}

export default GenericCarousel;