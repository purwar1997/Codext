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
            <Feature
              heading="Ultra Fast & Secure"
              arrowClass="fa-solid fa-share one"
            />
            <Feature
              heading="Allow Customization"
              arrowClass="fa-solid fa-share two"
            />
            <Feature
              heading="Smart Contracts"
              arrowClass="fa-solid fa-share three"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
