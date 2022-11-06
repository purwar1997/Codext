import Navbar from "./Navbar";
import Hero from "./Hero";

function Header() {
  return (
    <div className="top-section">
      <div className="container">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default Header;
