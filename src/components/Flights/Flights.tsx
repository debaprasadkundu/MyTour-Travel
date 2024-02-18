import React, { useEffect, useState } from "react";
import "./flights.scss";
import { useRootContext } from "../../context/context";
import { SearchCriteria } from "../../models/flight";
import { compareDates, formatDate } from "../../utilities/utilities_func";
import Autocomplete from "../../shared/AutoComplete/AutoComplete";

function Flights() {
  const { data, setData, setIsFlightResult } = useRootContext();
  const [searchCriteria, setSearchCriteria] = useState({} as SearchCriteria);
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    console.log("data in flight", data);
    setSearchCriteria(data);
    console.log(formatDate(new Date()));
  }, []);

  const search = () => {
    if (
      validationPass(new Date(), searchCriteria.depDate) &&
      validationPass(searchCriteria.depDate, searchCriteria.returnDate)
    ) {
      setData(searchCriteria);
      setIsFlightResult(true);
      setIsWarning(false);
    } else {
      setIsWarning(true);
    }
  };

  const validationPass = (d1: Date, d2: Date) => {
    if (compareDates(d1, d2) !== "greater") return true;
    else return false;
    // return true;
  };

  const handleChange = ({ target }: any) => {
    setSearchCriteria({
      ...searchCriteria,
      [target.id]: target.value,
    });
  };

  useEffect(() => {
    console.log(searchCriteria);
  }, [searchCriteria]);

  return (
    <div className="flight">
      <div className="flight-container grid-container">
        <div className=" item1 departure-input">
          <div className="p-relative">
            <Autocomplete
              placeholder="Enter City"
              id="from"
              selectedValue={searchCriteria.from}
              onValueSelect={handleChange}
              label="Departure"
              selectedCity={searchCriteria.to}
            />
          </div>
        </div>

        <div className="item1 destination-input">
          <div className="p-relative">
            <Autocomplete
              placeholder="Enter City"
              id="to"
              selectedValue={searchCriteria.to}
              onValueSelect={handleChange}
              label="Destination"
              selectedCity={searchCriteria.from}
            />
          </div>
        </div>

        <div className="departure-date">
          <div className="p-relative">
            <input
              type="date"
              id="depDate"
              min={formatDate(new Date())}
              value={searchCriteria.depDate?.toString()}
              onChange={handleChange}
            />
            <label htmlFor="departure date">Depart Date</label>
          </div>
        </div>

        <div className="return-date">
          <div className="p-relative">
            <input
              type="date"
              id="returnDate"
              min={formatDate(searchCriteria.depDate)}
              value={searchCriteria.returnDate?.toString()}
              onChange={handleChange}
              disabled={!searchCriteria.depDate}
            />
            <label htmlFor="return date">Return Date</label>
          </div>
        </div>

        <div className="travelers">
          <div className="p-relative">
            <input
              type="number"
              id="noOfTraveller"
              value={searchCriteria.noOfTraveller}
              onChange={handleChange}
              min="1"
            />
            <label htmlFor="travelers">Travelers</label>
          </div>
        </div>

        <div className="select">
          <select
            className="select-text"
            required
            id="class"
            onChange={handleChange}
            value={searchCriteria.class}
          >
            <option value="basic">Basic</option>
            <option value="main">Main</option>
            <option value="economy">Economy</option>
          </select>
          <label htmlFor="Class" className="select-label">
            Class
          </label>
        </div>

        {isWarning && <p className="warning">Something went wrong</p>}

        <div className="item1 search-button-div">
          <button
            className="search-button"
            onClick={search}
            disabled={
              !searchCriteria.from ||
              !searchCriteria.to ||
              !searchCriteria.depDate ||
              searchCriteria.noOfTraveller <= 0 ||
              !searchCriteria.class
            }
          >
            Search Flight
          </button>
        </div>
      </div>
    </div>
  );
}

export default Flights;
