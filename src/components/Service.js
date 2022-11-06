function Service(props) {
  return (
    <div className={props.serviceClass}>
      <div className={props.iconClass}>
        <img src={props.icon} alt={props.iconText} />
      </div>

      <div className="content">
        <h3>{props.heading}</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
}

export default Service;
