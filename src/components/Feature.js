function Feature({ heading, arrowClass }) {
  return (
    <div className="feature">
      <h3>
        <i className={arrowClass}></i> {heading}
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        praesentium eos possimus.
      </p>
    </div>
  );
}

export default Feature;
