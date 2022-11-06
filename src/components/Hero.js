import illustration from "../assets/svg-images/saas-illustration-1.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <h1>Codext is one of the best system in SAAS</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non voluptas
          ipsam sunt voluptatibus dolorum neque doloremque autem delectus ipsum
          ut.
        </p>
      </div>

      <div className="image">
        <img src={illustration} alt="illustration-1" />
      </div>
    </div>
  );
}

export default Hero;
