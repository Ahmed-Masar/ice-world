import { Facebook, Twitter, Phone } from "lucide-react";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="header__image">
        <img src="/assets/header.png" alt="header" />
      </div>
      <div className="header__content">
        <h1>
          WELCOME TO OUR <span>ICE CREAM</span> WORLD
        </h1>
        <p className="section__subheader">
          Indulge in a delightful journey of flavors! Discover creamy, delicious
          ice creams crafted to bring joy to every scoop. Welcome to your sweet
          escape!
        </p>
        <div className="header__btn">
          <button className="btn">Buy Now</button>
        </div>
        <ul>
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
    </header>
  );
};

export default Header;
