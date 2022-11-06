import icon from "../assets/svg-images/data-analytics.svg";

function Service() {
  return (
    <div className="service">
      <div className="icon analytics">
        <img src={icon} alt="data-analytics" />
      </div>

      <div className="content">
        <h3>Data Analytics</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
}

export default Service;
