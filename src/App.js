import React from 'react';
import HeaderContainer from './components/HeaderContainer';
import DiscoverAvailableServicesContainer from './components/DiscoverAvailableServicesContainer';
import Footer from './components/FooterContainer';
import RecommendedServicesContainer from './components/RecommendedServicesContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <RecommendedServicesContainer/>
      <Footer/>
    </div>
  );
}

export default App;