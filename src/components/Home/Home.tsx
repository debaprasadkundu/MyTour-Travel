import "./home.scss";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useRootContext } from "../../context/context";
import Flights_Result from "../Flights_Result/Flights_Result";

function Home() {
  const { isFlightResult } = useRootContext();
  const { pathname } = useLocation();

  return (
    <>
      {isFlightResult && window.innerWidth <= 992 ? (
        <Flights_Result />
      ) : isFlightResult ? (
        <div>
          <Navbar />
          <div className="outlet-body">
            <Outlet />
            {pathname === "/" && <Flights_Result />}
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="outlet-body">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
