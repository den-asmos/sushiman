import './Footer.css';
import { facebook, instagram, twitter } from '../assets';

export const Footer = () => {
  return (
    <footer className="footer flex-between">
      <h3 className="footer__logo">
        <span>Sushi</span>man
      </h3>

      <ul className="footer__nav">
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#food">Food</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
      </ul>

      <ul className="footer__social">
        <li>
          <img className="flex-center" src={facebook} alt="facebook" />
        </li>
        <li>
          <img className="flex-center" src={instagram} alt="instagram" />
        </li>
        <li>
          <img className="flex-center" src={twitter} alt="twitter" />
        </li>
      </ul>
    </footer>
  );
};
