import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function CardElement() {
  const [cardTitles, setCardTitles] = useState([]);

  useEffect(() => {
    const fetchNumberFact = async () => {
      const promises = Array.from({ length: 3 }, (_, index) =>
        axios.get(`http://numbersapi.com/random?min=10&max=100`)
      );

      try {
        const results = await Promise.all(promises);
        const newCardTitles = results.map((response) => {
          const number = parseInt(response.data.split(' ')[0], 10);
          return number;
        });
        setCardTitles(newCardTitles);
      } catch (error) {
        console.error('Error fetching number facts', error);
      }
    };

    fetchNumberFact();
  }, []);

  const cardContainerStyle = {
    textAlign: 'center',
    backgroundColor: '#f0e5f5',
    padding: '20px',
  };

  const cardStyle = {
    width: '18rem',
    display: 'inline-block',
    margin: '10px',
    border: 'none',
  };

  const titleStyle = {
    color: '#9300e8',
    textAlign: 'left',
    fontSize: '3.5rem',
    paddingBottom: '10px',
  };

  const subtitleStyle = {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: '1rem',
  };

  const textStyle = {
    textAlign: 'left',
  };

  return (
    <div style={cardContainerStyle}>
      {cardTitles.map((title, index) => (
        <Card key={index} style={cardStyle}>
          <Card.Body>
            <Card.Title style={titleStyle}>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-left" style={subtitleStyle}>
              Sample Handling
            </Card.Subtitle>
            <Card.Text className="text-left" style={textStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin in lectus vitae sollicitudin.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardElement;
