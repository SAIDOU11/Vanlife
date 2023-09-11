import heroImg from '../assets/about-hero.png';
import { Link } from 'react-router-dom';

const AboutMenu = () => {
  return (
    <div className="about-menu">
      <img src={heroImg} />
      <div className="about-menu-text">
        <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="about-menu-destination">
          <h3>
            Your destination is waiting.
            <br /> Your van is ready.
          </h3>
          <Link className="link-explore link" to="/vans">
            Explore our vans
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMenu;
