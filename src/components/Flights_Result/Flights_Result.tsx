import React, { useEffect, useState } from "react";
import "./flights_result.scss";
import { IoMdArrowBack } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRootContext } from "../../context/context";
import result from "../../mock/flight_result.json";
import { Flight } from "../../models/flight";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function Flights_Result() {
  const { data, setIsFlightResult } = useRootContext();
  const [routeResult, setRouteResult] = useState<Flight[]>([]);

  useEffect(() => {
    console.log(result);
    console.log("data", data);
    setRouteResult(result?.route);
  }, []);

  const back = () => {
    setIsFlightResult(false);
  };

  return (
    <div className="flight_result">
      <header className="header flex">
        <div className="back-icon" onClick={back}>
          <IoMdArrowBack className="icon" />
        </div>

        <div className="selected-route">
          <div className="route">
            <div>{data.from}</div>
            <div>
              <FaArrowRightLong className="icon" />
            </div>
            <div>{data.to}</div>
          </div>
          <div className="selected-date">
            <div>
              {months[new Date(data.depDate).getMonth()] +
                " " +
                new Date(data.depDate).getDate()}
              {data.returnDate && (
                <>
                  {" "}
                  -{" "}
                  {months[new Date(data.returnDate).getMonth()] +
                    " " +
                    new Date(data.returnDate).getDate()}
                </>
              )}
            </div>
            <div>| {data.noOfTraveller} adult</div>
          </div>
        </div>
      </header>
      {routeResult?.map((item: Flight) => {
        return (
          <div className="card" key={item.depertureTime}>
            <div className="card-container">
              <div className="item1">
                <img src={item.img} alt={item.airline} />
                {item.airline}
              </div>
              <div className="item2 deperture">
                <div className="time">{item.depertureTime}</div>
                <div className="from">{item.fromCode}</div>
              </div>
              <div className="route">
                <p>{item.duration}</p>
                <p className="line"></p>
                <span className="stop"></span>
                {item.noOfStop > 0 && (
                  <p>
                    {item.noOfStop} stop ({item.stops})
                  </p>
                )}
              </div>
              <div className="destination">
                <div className="time">{item.arrivalTime}</div>
                <div className="to">{item.toCode}</div>
              </div>

              <div className="price-card-container item1">
                <div className="price-card">
                  <p className="price">{item.basicPrice}</p>
                  <p>Basic economy</p>
                </div>
                <div className="price-card">
                  <p className="price">{item.mainPrice}</p>
                  <p>Main economy</p>
                </div>
                <div className="price-card">
                  <p className="price">{item.economyPrice}</p>
                  <p>Economy</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="search-options">
        <div>Filter</div>
        <div>Sort</div>
      </div>
    </div>
  );
}

export default Flights_Result;
