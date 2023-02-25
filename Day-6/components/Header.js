import Title from "./Title";
import { useState } from "react";

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
            <a className="header-nav-link" href="#">
              Home
            </a>
            <a className="header-nav-link" href="#">
              Menu
            </a>
            <a className="header-nav-link " href="#">
              About
            </a>
            <a className="header-nav-link" href="#">
              Contact
            </a>
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