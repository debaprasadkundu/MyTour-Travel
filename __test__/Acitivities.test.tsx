import { render, screen } from "@testing-library/react";
import Activities from "../src/components/Activities/Activities";
import "@testing-library/jest-dom";
import React from "react";

test("renders Activities components", () => {
  render(<Activities />);
  expect(screen.getByText("Activities")).toBeInTheDocument();
});
