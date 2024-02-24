import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
        <h2>Explore recommended services for you</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis feugiat elementum. Sed sem ante, tempor a imperdiet vel, mattis vel tortor. Vestibulum nisi turpis, tempor vitae laoreet et, gravida at erat. Vestibulum</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ marginRight: '10px' }}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Questions</Card.Title>
                <Card.Text>
                  Learn about our services through
                </Card.Text>
                <Button variant="primary">View FAQS</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
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
    </div>
  );
}

export default BasicExample;