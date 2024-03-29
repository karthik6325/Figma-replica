import React from 'react';
import CardElement from './CardElement';

function DiscoverAvailableServicesContainer () {
  const headerStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '3%',
  };

  return (
    <div>
        <div>
            <h4 style={headerStyle}>Discover available services</h4>
        </div>
        <CardElement/>
    </div>
  );
}

export default DiscoverAvailableServicesContainer;
