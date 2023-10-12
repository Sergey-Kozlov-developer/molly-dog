import logoImg from "../assets/img/logo/mollyLogo.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navigation() {
  const [menuActive, setMenuActive] = useState(false);
  const routes = [
    {
      to: "/",
      page: "Главная",
    },
    {
      to: "/blog",
      page: "Блог",
    },
    {
      to: "/contacts",
      page: "Инфо",
    },
  ];
  return (
    <div className="header__top-row">
      <Link to="/">
        <img
          className={menuActive ? "header__nav" : ""}
          src={logoImg}
          alt="Logo"
        />
      </Link>
      <div className={menuActive ? "nav-icon-btn" : "header__nav"}>
        <div className="nav">
          <ul className="nav__list">
            {routes.map((route, index) => (
              <NavLink
                key={index}
                to={route.to}
                className={({ isActive }) =>
                  isActive ? "link-active" : "nav__list"
                }
              >
                {route.page}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
      {/*кнопка под мобильную и планшетную версию*/}
      <div className="header__nav-btn">
        <button
          onClick={() => setMenuActive(!menuActive)}
          className="nav-icon-btn"
        >
          <div className="nav-icon"></div>
        </button>
      </div>
    </div>
  );
}

export default Navigation;
