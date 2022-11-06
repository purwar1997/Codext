import illustration from "../assets/svg-images/saas-illustration-2.svg";
import Feature from "./Feature";

function Features() {
  return (
    <div className="mid-section">
      <div className="container">
        <div className="image">
          <img src={illustration} alt="illustration-2" />
        </div>

        <div className="content">
          <h2>It's helpful for operating system</h2>

          <div className="features">
            <Feature />
            <Feature />
            <Feature />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
