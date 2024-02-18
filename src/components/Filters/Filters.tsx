import { useEffect } from "react";
import "./filters.scss";

interface Props {
  sentValue(from: string, value: {}): void;
  // back(): void;
}

const Filters = ({ sentValue }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className="filter-container"></div>;
};

export default Filters;
