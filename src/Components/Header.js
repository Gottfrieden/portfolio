import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import Navigation from './Navigation';

function Header() {

    const [isOpened, setIsOpened] = useState(false);

    const handleBurgerMenu = () => {
        setIsOpened(!isOpened)
    }


    return (
        <div className='header-container'>
            <Link to='/'>
                <div className='logo-container' />
            </Link>
            <Navigation />


            <div className={isOpened ? 'mobile-nav-container open' : 'mobile-nav-container closed'}>
                <Navigation hideBurgerMenuContainer={handleBurgerMenu} />
            </div>
            <div className={isOpened ? 'burger-menu open' : 'burger-menu closed'} onClick={handleBurgerMenu}>
                <span className={isOpened ? 'burger-menu-line crossed' : 'burger-menu-line horizontal'} />
                <span className={isOpened ? 'burger-menu-line crossed' : 'burger-menu-line horizontal'} />
            </div>
        </div>
    )
}

export default Header;