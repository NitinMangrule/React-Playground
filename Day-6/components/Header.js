import Title from "./Title";

const Header = () => {
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
        <button className="button-62">Login</button>
        <button className="button-62">Log Out</button>
      </header>
    );
  };

  export default Header;