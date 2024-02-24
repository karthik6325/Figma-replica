import React from 'react';
import NavbarScroll from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarousalPage from './CarousalPage';
import "./HeaderContainer.css"

const HeaderContainer = () => {
    return (
        <div className='container'>
            <div>
                <NavbarScroll />
            </div>
            <div className='carousal-container'>
                <CarousalPage />
            </div>
        </div>
    );
}

export default HeaderContainer;