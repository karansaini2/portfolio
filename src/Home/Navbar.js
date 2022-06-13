import "./Navbar.css";
const Navbar = () => {
  const handleopen = () => {
    document.querySelector(".nav-list").classList.add("slider-down");
    document.querySelector(".nav-list").classList.remove("slider-up");
    document.querySelector(".burger-close").classList.add("add");
    document.querySelector(".burger-icon").classList.remove("add");
  };
  const handlehide = () => {
    document.querySelector(".nav-list").classList.remove("slider-down");
    document.querySelector(".nav-list").classList.add("slider-up");
    document.querySelector(".burger-icon").classList.add("add");
    document.querySelector(".burger-close").classList.remove("add");
  };

  const scroll = () => {
    document.querySelector(".nav-list").classList.remove("slider-down");
  };

  return (
    <nav className="navbar">
      <h1>Portfolio</h1>

      <div className="links">
        <ul className="nav-list">
          <li className="list">
            <a onClick={scroll} href="#profile-container">
              <i class="fas fa-home"></i>Home
            </a>
          </li>
          <li className="list">
            <a onClick={scroll} href="#About">
              <i class="far fa-address-card"></i>About
            </a>
          </li>
          <li className="list">
            <a onClick={scroll} href="#container">
              <i class="fas fa-project-diagram"></i>Projects
            </a>
          </li>
          <li className="list">
            <a onClick={scroll} href="#contact-container">
              <i class="fas fa-id-badge"></i>Contact
            </a>
          </li>
        </ul>

        <div className="burger-icon" onClick={handleopen}>
          <i className="fas fa-bars"></i>
        </div>
        <div className="burger-close" onClick={handlehide}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
