import React, { useState } from "react";
import "./navbar.scss";
import { IoIosMenu } from "react-icons/io";
import { MdFlight } from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";
import { IoCarSharp } from "react-icons/io5";
import { CiFlag1 } from "react-icons/ci";
import { Link, Outlet } from "react-router-dom";
import { tabs } from "../../utilities/tabs";

function Navbar() {
  const [active, setActive] = useState("menu-bar");
  const [activeTab, steActiveTab] = useState("Flight");

  const openNav = () => {
    active === "menu-bar"
      ? setActive("menu-bar active-menu-bar")
      : setActive("menu-bar");
  };

  const renderSwitch = (param: string) => {
    switch (param) {
      case "MdFlight":
        return <MdFlight className="icon" />;

      case "RiHotelFill":
        return <RiHotelFill className="icon" />;

      case "IoCarSharp":
        return <IoCarSharp className="icon" />;

      case "CiFlag1":
        return <CiFlag1 className="icon" />;

      default:
        return;
    }
  };

  return (
    <section className="navbar-section">
      <header className="header flex">
        <div onClick={openNav} className="toggle-nav-bar">
          <IoIosMenu className="icon" />
        </div>

        <div className="logo-div">
          <a href="#" className="logo flex">
            <h1>cxLoyalty</h1>
          </a>
        </div>

        <div className="nav-bar">
          <ul className="nav-list flex">
            {tabs.map((item) => {
              return (
                <li className="nav-item" key={item.name}>
                  <Link to={item.to} className="nav-link">
                    {renderSwitch(item.icon)}
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={active}></div>
      </header>
    </section>
  );
}

export default Navbar;
