import { useState } from "react";
import "./navbar.scss";
import { plane, car, flag, menu, hotel } from "../../assets";
import { Link, useLocation } from "react-router-dom";
import { tabs } from "../../utilities/tabs";

function Navbar() {
  const [active, setActive] = useState("menu-bar");
  const { pathname } = useLocation();

  const openNav = () => {
    active === "menu-bar"
      ? setActive("menu-bar active-menu-bar")
      : setActive("menu-bar");
  };

  const renderSwitch = (param: string) => {
    switch (param) {
      case "MdFlight":
        return <img src={plane} alt="plane Logo" />;

      case "RiHotelFill":
        return <img src={hotel} alt="hotel Logo" />;

      case "IoCarSharp":
        return <img src={car} alt="car Logo" />;

      case "CiFlag1":
        return <img src={flag} alt="activity Logo" />;

      default:
        return;
    }
  };

  return (
    <section className="navbar-section">
      <header className="header flex">
        <div onClick={openNav} className="toggle-nav-bar">
          <img src={menu} alt="Menu" className="menu-icon" />
        </div>

        <div className="logo-div">
          <a href="#" className="logo flex">
            cxLoyalty
          </a>
        </div>

        <nav className="nav-bar">
          <ul className="nav-list flex">
            {tabs.map((item) => {
              return (
                <li
                  className={
                    item.to === pathname ? "nav-item active" : "nav-item"
                  }
                  key={item.name}
                >
                  <Link
                    to={item.to}
                    className={
                      item.to === pathname ? "nav-link active" : "nav-link"
                    }
                  >
                    {renderSwitch(item.icon)}
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={active}></div>
      </header>
    </section>
  );
}

export default Navbar;
