import { useEffect, useState } from "react";
import "./filters.scss";
import { Flight } from "../../models/flight";

interface Props {
  sentValue(from: string, value: {}): void;
  result: Flight[];
  selectedFiltered: string[];
  // back(): void;
}

const Filters = ({ sentValue, result, selectedFiltered }: Props) => {
  // const [sortArr, setSortArr] = useState<string[]>([]);
  const [filterBy, setFilterBy] = useState<string[]>([]);
  const [airlineFilter, setAirlineFilter] = useState<string[]>([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const arr: string[] = [];
    result.forEach((item: Flight) => {
      arr.push(item.airline);
    });
    setAirlineFilter(arr);
  }, [result]);

  useEffect(() => {
    setFilterBy(selectedFiltered);
  }, [selectedFiltered]);

  const onSelect = ({ target }: any) => {
    const currValue = target.value;
    if (target.checked) {
      !filterBy.includes(currValue) && setFilterBy([...filterBy, currValue]);
    } else {
      setFilterBy((item) => {
        return item.filter((item) => item !== currValue);
      });
    }
  };

  const onApply = () => {
    sentValue("filterBy", { filterBy: filterBy });
  };

  return (
    <section className="filter-container">
      {airlineFilter.map((item) => (
        <div key={item}>
          <input
            type="checkbox"
            id={item}
            name={item}
            value={item}
            defaultChecked={filterBy.includes(item)}
            onChange={onSelect}
          />
          <label htmlFor={item}>{item}</label>
        </div>
      ))}
      <div className="item1 search-button-div">
        <button
          className="search-button"
          onClick={onApply}
          // disabled={!filterBy.length}
        >
          Apply
        </button>
      </div>
    </section>
  );
};

export default Filters;
