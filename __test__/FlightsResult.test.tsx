import { render, screen } from "@testing-library/react";
import Flight_Result from "../src/components/Flights_Result/Flights_Result";
import "@testing-library/jest-dom";
import React, { useState } from "react";

test("renders Flight_Result components", () => {
  render(<Flight_Result />);
  expect(screen.getByText("Price (Lowest to Highest)")).toBeInTheDocument();
});
