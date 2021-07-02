import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    // Switch menu item
    const handleClick = () => setClick(!click)

    // Close MobileMeanu
    const closeMobileMenu = () => setClick(false)

    // Show button
    const showButton = () => {
        if (window.innerWidth <= 968) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    // Call show Button when re-render
    useEffect(() => showButton(), [])

    // Add listener when window resize to show button
    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        HISTORY LIB <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/timeline" className="nav-links" onClick={closeMobileMenu}>
                                Timeline
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/search" className="nav-links" onClick={closeMobileMenu}>
                                Search
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar

