import { useState } from "react";
import "./nav.css";
import { ShoppingCart, Menu, CircleX, Bell } from "lucide-react";
const Nav = () => {
  const [open, setOpen] = useState(false);
  function handleOpenUL() {
    setOpen(true);
  }
  function handleCloseUL() {
    setOpen(false);
  }
  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <a href="#" className="logo">
            Ice<span>World</span>
          </a>
        </div>
        <div className="nav__menu__btn" id="menu-btn">
          {open ? (
            <CircleX
              className="icon"
              onClick={() => {
                handleCloseUL();
              }}
            />
          ) : (
            <Menu
              className="icon"
              onClick={() => {
                handleOpenUL();
              }}
            ></Menu>
          )}
        </div>
      </div>

      <ul
        className="nav__links"
        id="nav__links"
        style={{ transform: open ? "translateY(100%)" : "translateY(0)" }}
      >
        <li>
          <a
            href="#home"
            onClick={() => {
              handleCloseUL();
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#menu"
            onClick={() => {
              handleCloseUL();
            }}
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="#categories"
            onClick={() => {
              handleCloseUL();
            }}
          >
            Categories
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => {
              handleCloseUL();
            }}
          >
            Contact Us
          </a>
        </li>
      </ul>

      <div className="nav__btns">
        <a href="" className="btn">
          <ShoppingCart />
        </a>
        <a href="" className="btn">
          {" "}
          <Bell />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
