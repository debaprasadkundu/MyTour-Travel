import { useEffect, useReducer, useState } from "react";
import "./flightsresult.scss";
import { useRootContext } from "../../context/context";
import result from "../../mock/flight_result.json";
import { Flight } from "../../models/flight";
import { getDateFormat } from "../../utilities/utilities_func";
import Sorting from "../Sorting/Sorting";
import Filters from "../Filters/Filters";
import CommonHeader from "../../shared/CommonHeader/CommonHeader";
import { arrow } from "../../assets";
import { reducer } from "../../reducers/FlightReducer";

function FlightsResult() {
  const { data, isFlightResult, setIsFlightResult } = useRootContext();
  const [routeResult, setRouteResult] = useState<Flight[]>([]);
  const [isSort, setIsSort] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState<string[]>([]);

  const [state, dispatch] = useReducer(reducer, { result: [] });

  useEffect(() => {
    const localData = localStorage.getItem("flight_data");
    if (!localData) {
      setRouteResult(result?.route);
      dispatch({
        type: "InitialState",
        data: result?.route,
      });
      localStorage.setItem("flight_data", JSON.stringify(result?.route));
    } else {
      setRouteResult(JSON.parse(localData));
      dispatch({
        type: "InitialState",
        data: JSON.parse(localData),
      });
    }
  }, []);

  const back = () => {
    if (isFlightResult && !isSort && !isFilter) {
      setIsFlightResult(false);
    }
    isSort && setIsSort(false);
    isFilter && setIsFilter(false);
  };

  const getValue = (type: string, value: any) => {
    back();
    if (type === "sortBy") {
      setSortBy(value.sortBy);
      dispatch({
        type: "condition",
        data: routeResult,
        sortBy: value.sortBy,
        filterBy: filterBy,
      });
    } else {
      setFilterBy(value.filterBy);
      value.filterBy?.length &&
        dispatch({
          type: "condition",
          data: routeResult,
          sortBy: sortBy,
          filterBy: value.filterBy,
        });
    }
  };

  return (
    <div className="flight_result">
      {window.innerWidth > 992 && !isSort && !isFilter && (
        <>
          <Sorting sentValue={getValue} selectedSortBy={sortBy} />
          <Filters
            sentValue={getValue}
            result={routeResult}
            selectedFiltered={filterBy}
          />
        </>
      )}

      {window.innerWidth <= 992 && (
        <CommonHeader back={back}>
          <div className="selected-route">
            {isFlightResult && !isSort && !isFilter ? (
              <>
                <div className="route">
                  <div>{data.from}</div>
                  <div>
                    <img src={arrow} alt="Arrow Logo" />
                  </div>
                  <div>{data.to}</div>
                </div>
                <div className="selected-date">
                  <div>
                    {getDateFormat(data.depDate)}
                    {data.returnDate && (
                      <> - {getDateFormat(data.returnDate)}</>
                    )}
                  </div>
                  <div>| {data.noOfTraveller} passenger</div>
                </div>
              </>
            ) : (
              <div className="route">{isSort ? "Sort By" : "FIlter By"}</div>
            )}
          </div>
        </CommonHeader>
      )}
      {isFlightResult && !isSort && !isFilter && (
        <>
          {state?.result?.map((item: Flight) => {
            return (
              <div className="card" key={item.id}>
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
                        {item.noOfStop} stop ({item.stops.join(", ")})
                      </p>
                    )}
                  </div>
                  <div className="destination">
                    <div className="time">{item.arrivalTime}</div>
                    <div className="to">{item.toCode}</div>
                  </div>

                  <div className="price-card-container item1">
                    <div className="price-card">
                      <p className="price">{item.currency + item.basicPrice}</p>
                      <p>Basic economy</p>
                    </div>
                    <div className="price-card">
                      <p className="price">{item.currency + item.mainPrice}</p>
                      <p>Main economy</p>
                    </div>
                    <div className="price-card">
                      <p className="price">
                        {item.currency + item.economyPrice}
                      </p>
                      <p>Economy</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {window.innerWidth <= 992 && (
            <div className="search-options">
              <div onClick={() => setIsFilter(true)}>Filter</div>
              <div onClick={() => setIsSort(true)}>Sort</div>
            </div>
          )}
        </>
      )}
      {isSort && <Sorting sentValue={getValue} selectedSortBy={sortBy} />}
      {isFilter && (
        <Filters
          sentValue={getValue}
          result={routeResult}
          selectedFiltered={filterBy}
        />
      )}
    </div>
  );
}

export default FlightsResult;
