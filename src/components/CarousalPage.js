import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const TextCarousel = () => {
  const carouselStyle = {
    backgroundImage: 'url("../assets/images/stock-3.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '50vh',
    marginTop: '10%',
    marginLeft: '10%',
    padding: '50px',
    borderRadius: '0 0 15px 15px',
    color: 'white', // Set text color to white
  };

  const titleStyle = {
    fontWeight: 'bold', // Make title bold
  };

  const buttonStyle = {
    backgroundColor: '#9300e8', // Set button color to purple
    border: 'none',
  };

  return (
    <Carousel>
      <Carousel.Item>
        <div style={carouselStyle}>
          <h2 style={titleStyle}>Carousel 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Nunc tincidunt, purus vel eleifend laoreet</p>
          <button className="btn btn-primary" style={buttonStyle}>Explore More</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={carouselStyle}>
          <h2 style={titleStyle}>Carousel 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Nunc tincidunt, purus vel eleifend laoreet</p>
          <button className="btn btn-primary" style={buttonStyle}>Explore More</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={carouselStyle}>
          <h2 style={titleStyle}>Carousel 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Nunc tincidunt, purus vel eleifend laoreet</p>
          <button className="btn btn-primary" style={buttonStyle}>Explore More</button>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default TextCarousel;
