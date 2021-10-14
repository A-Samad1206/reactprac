import React, { useState, Fragment } from 'react';
import './App.css';
const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <Fragment>
      <nav className={colorChange ? 'navbar colorChange nav' : 'navbar nav'}>
        <div className="NavContainer">
          <a className="NavLogo" href="#">
            GeeksForGeeks
          </a>
          <div className="MobileIcon">LOGO</div>
          <div className="NavMenu">
            <li>
              <a className="NavLinks" href="#">
                About
              </a>
            </li>
            <li>
              <a className="NavLinks" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="NavLinks" href="#">
                Events
              </a>
            </li>
            <li>
              <a className="NavLinks" href="#">
                Contact
              </a>
            </li>
            <li>
              <a className="NavLinks" href="#">
                Sign In
              </a>
            </li>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
