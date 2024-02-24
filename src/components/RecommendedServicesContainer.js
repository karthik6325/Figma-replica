import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./RecommendedServicesContainer.css"

function BasicExample() {
  const buttonStyle = {
    backgroundColor: '#9300e8',
    borderColor: '#9300e8',
  };

  return (
    <div className="container-fluid mb-5 mt-4" style={{ margin: '0 auto' }}> {/* Add margin-top and center the component */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h2 className="text-center">Explore recommended services for you</h2>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis feugiat elementum. Sed sem ante, tempor a imperdiet vel, mattis vel tortor. Vestibulum nisi turpis, tempor vitae laoreet et, gravida at erat. Vestibulum</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4 mb-3">
          <Card className="card-image1" style={{ width: '25rem' }}>
            <Card.Body className="text-center d-flex flex-column justify-content-between" style={{ height: '20rem' }}>
              <div>
                <Card.Title className="text-center font-weight-bold">Questions</Card.Title>
                <Card.Text>
                  Learn about our services through
                </Card.Text>
              </div>
              <div className="text-center mt-auto">
                <Button variant="primary" style={buttonStyle}>View FAQS</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-3">
          <Card className="card-image2" style={{ width: '25rem' }}>
            <Card.Body className="text-center d-flex flex-column justify-content-between" style={{ height: '20rem' }}>
              <div>
                <Card.Title className="text-center font-weight-bold">Stay up to date</Card.Title>
                <Card.Text>
                  Learn about our product updates
                </Card.Text>
              </div>
              <div className="text-center mt-auto">
                <Button variant="primary" style={buttonStyle}>View FAQS</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default BasicExample;
