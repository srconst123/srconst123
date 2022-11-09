import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import "./Cards.css";
import Carousel from 'react-bootstrap/Carousel';



const Cards = ({ data}) => {
  return (
        {
          data.map(obj => {
            const { url, title, description, imgHeight } = obj;
            return (
    <Carousel.Item>
        <Container className='parent-card-container'>
          <div className='parent-card-group'>
              <Card key={title} >
                <Card.Img variant="top" src={url} height={imgHeight} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text> 
                </Card.Body>
              </Card>
           </div>
        </Container>
  </Carousel.Item>
            );
          })
        }

  )
}

export default Cards
