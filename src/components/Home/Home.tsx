import "./home.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useRootContext } from "../../context/context";
import Flights_Result from "../Flights_Result/Flights_Result";

function Home() {
  const { isFlightResult } = useRootContext();

  return (
    <>
      {isFlightResult ? (
        <Flights_Result />
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
