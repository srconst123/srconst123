import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import "./Cards.css";


const Cards = ({ data}) => {
  return (
    <Container className='parent-card-container'>
      <div className='parent-card-group'>
        {
          data && data.map(obj => {
            const { url, title, description, imgHeight } = obj;
            return (
              <Card key={title} >
                <Card.Img variant="top" src={url} height={imgHeight} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}<a href="/bookshreedham" >Book Now</a></Card.Text> 
                </Card.Body>
              </Card>
            );
          })
        }
      </div>
    </Container>
  )
}

export default Cards