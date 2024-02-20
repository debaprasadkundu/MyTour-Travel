import { useEffect, useState } from "react";
import "./sorting.scss";
import sort_res from "../../mock/sort.json";

interface Props {
  selectedSortBy: string;
  sentValue(from: string, value: {}): void;
}

const Sorting = ({ selectedSortBy, sentValue }: Props) => {
  const [sortArr, setSortArr] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>();

  useEffect(() => {
    setSortArr(sort_res.sort);
    window.innerWidth <= 992 && window.scrollTo(0, 0);
    setSortBy(selectedSortBy);
  }, [selectedSortBy]);

  const onSelect = (e: any) => {
    setSortBy(e.target.value);
  };

  const onDone = () => {
    sentValue("sortBy", { sortBy: sortBy });
  };

  return (
    <div className="sort-container">
      {sortArr.map((item, index) => (
        <div key={index}>
          <input
            type="radio"
            id={item}
            name="sorting"
            value={item}
            defaultChecked={item === sortBy}
            onClick={onSelect}
          />
          <label htmlFor={item}>{item}</label>
        </div>
      ))}

      <div className="item1 search-button-div">
        <button className="search-button" onClick={onDone} disabled={!sortBy}>
          Done
        </button>
      </div>
    </div>
  );
};

export default Sorting;
