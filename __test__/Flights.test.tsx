import { render, screen } from "@testing-library/react";
import Flights from "../src/components/Flights/Flights";
import "@testing-library/jest-dom";
import React from "react";

test("renders Flights components", () => {
  // const search = new SearchCriteria
  render(<Flights />);
  expect(screen.getByText("Depart Date")).toBeInTheDocument();
  expect(screen.getByText("Departure")).toBeInTheDocument();
  expect(screen.getByText("Destination")).toBeInTheDocument();
  expect(screen.getByText("Return Date")).toBeInTheDocument();
  expect(screen.getByText("Travelers")).toBeInTheDocument();
  expect(screen.getByText("Class")).toBeInTheDocument();
  expect(screen.getByText("Search Flight")).toBeInTheDocument();
});
