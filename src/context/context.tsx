import React from "react";
import { createContext, useContext, useState } from "react";
import { SearchCriteria } from "../models/flight";

const RootContext = createContext({} as any);

interface Props {
  children: React.ReactNode;
}

export const RootContextProvider = ({ children }: Props) => {
  const [isFlightResult, setIsFlightResult] = useState(false);
  const [data, setData] = useState<SearchCriteria>({
    from: "",
    to: "",
    noOfTraveller: 1,
    depDate: "",
    returnDate: "",
    class: "basic",
  });

  return (
    <RootContext.Provider
      value={{ data, setData, isFlightResult, setIsFlightResult }}
    >
      {children}
    </RootContext.Provider>
  );
};

export const useRootContext = () => useContext(RootContext);
