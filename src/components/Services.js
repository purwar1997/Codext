import Service from "./Service";
import icon1 from "../assets/svg-images/clean-code.svg";
import icon2 from "../assets/svg-images/data-analytics.svg";
import icon3 from "../assets/svg-images/secured-profile.svg";
import icon4 from "../assets/svg-images/support.svg";

function Services() {
  return (
    <div className="bottom-section">
      <div className="container">
        <h2>We provide best features to our customers</h2>

        <div className="services">
          <Service
            serviceClass="service active"
            icon={icon1}
            iconClass="icon clean-code"
            iconText="clean-code"
            heading="clean-code"
          />
          <Service
            serviceClass="service"
            icon={icon2}
            iconClass="icon analytics"
            iconText="data-analytics"
            heading="Data Analytics"
          />
          <Service
            serviceClass="service"
            icon={icon3}
            iconClass="icon secured"
            iconText="secured"
            heading="Fully Secured"
          />
          <Service
            serviceClass="service"
            icon={icon4}
            iconClass="icon support"
            iconText="support"
            heading="24/7 Support"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
