import logo from "../assets/png-images/white-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="brand-logo" />

      <ul className="nav-items">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
        <li>
          <a href="">Testimonials</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
      </ul>

      <button className="free-trial-btn">Free Trial</button>
    </nav>
  );
}

export default Navbar;
