function Feature(props) {
  return (
    <div className="feature">
      <h3>
        <i className={props.arrowClass}></i> {props.heading}
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        praesentium eos possimus.
      </p>
    </div>
  );
}

export default Feature;
