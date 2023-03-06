import Title from "./Title";
import { useState } from "react";
import {Link} from 'react-router-dom';
const loggedInUser = () => {
  // API call for authentication.
  return true;
} 
const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
    return (
      <header className="header">
        <div className="header-container">
          <Title/>
          <nav className="header-nav">
            <Link className="header-nav-link" to="/">
              Home
            </Link>
            <Link className="header-nav-link" href="/menu">
              Menu
            </Link>
            <Link className="header-nav-link " to='/about'>
              About
            </Link>
            <Link className="header-nav-link" href="/contact">
              Contact
            </Link>
          </nav>
        </div>
        {isLoggedIn ?  <button className="button-62" onClick={()=>{
          setLoggedIn(false)
        }}>Log Out</button> :  <button className="button-62" onClick={()=>{
          setLoggedIn(true)
        }}>Log In</button> }
       
      </header>
    );
  };

  export default Header;