function Service({ cardClass, iconURL, iconClass, iconText, heading }) {
  return (
    <div className={cardClass}>
      <div className={iconClass}>
        <img src={iconURL} alt={iconText} />
      </div>

      <div className="content">
        <h3>{heading}</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
}

export default Service;
