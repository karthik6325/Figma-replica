import React from 'react';
import HeaderContainer from './HeaderContainer';
import DiscoverAvailableServicesContainer from './DiscoverAvailableServicesContainer';
import RecommendedServicesContainer from './RecommendedServicesContainer';
import FooterContainer from './FooterContainer';

const HomePage = () => {
  return (
    <div>
      <HeaderContainer />
      <DiscoverAvailableServicesContainer />
      <RecommendedServicesContainer />
      <FooterContainer />
    </div>
  );
}

export default HomePage;