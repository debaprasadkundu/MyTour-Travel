import { render, screen } from "@testing-library/react";
import Cars from "../src/components/Cars/Cars";
import "@testing-library/jest-dom";
import React from "react";

test("renders Cars components", () => {
  render(<Cars />);
  expect(screen.getByText("Cars")).toBeInTheDocument();
});
