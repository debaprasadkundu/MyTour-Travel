import "./home.scss";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useRootContext } from "../../context/context";
import FlightsResult from "../FlightsResult/FlightsResult";

function Home() {
  const { isFlightResult } = useRootContext();
  const { pathname } = useLocation();

  return (
    <>
      {isFlightResult && window.innerWidth <= 992 ? (
        <FlightsResult />
      ) : isFlightResult ? (
        <div>
          <Navbar />
          <div className="outlet-body">
            <Outlet />
            {pathname === "/" && <FlightsResult />}
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
