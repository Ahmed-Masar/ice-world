import "./footer.css";
import { Facebook, Twitter, Phone } from "lucide-react";
const Footer = () => {
  return (
    <footer>
      <div className="section__container footer__container">
        <div className="footer__col">
          <a href="#" className="logo">
            Ice<span>World</span>
          </a>
        </div>
        <div className="footer__col">
          <ul className="footer__links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#categories">Categories</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <ul className="socials">
            <li>
              <a href="#">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="#">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="#">
                <Phone />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bar">Copyright © 2025 Ahmed Masar.</div>
    </footer>
  );
};

export default Footer;
