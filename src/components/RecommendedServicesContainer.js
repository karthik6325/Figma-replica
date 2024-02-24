import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./RecommendedServicesContainer.css"

function BasicExample() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h2 className="text-center">Explore recommended services for you</h2>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis feugiat elementum. Sed sem ante, tempor a imperdiet vel, mattis vel tortor. Vestibulum nisi turpis, tempor vitae laoreet et, gravida at erat. Vestibulum</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <Card className="card-image1">
            <Card.Body>
              <Card.Title>Questions</Card.Title>
              <Card.Text>
                Learn about our services through
              </Card.Text>
              <Button variant="primary">View FAQS</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Card className="card-image2">
            <Card.Body>
              <Card.Title>Stay up to date</Card.Title>
              <Card.Text>
                Learn about our product updates
              </Card.Text>
              <Button variant="primary">View FAQS</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default BasicExample;