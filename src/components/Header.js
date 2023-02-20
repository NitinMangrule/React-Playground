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
            <a className="header-nav-link" href="#">
              About
            </a>
            <a className="header-nav-link" href="#">
              Contact
            </a>
          </nav>
        </div>
      </header>
    );
  };

  export default Header;