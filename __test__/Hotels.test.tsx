import { render, screen } from "@testing-library/react";
import Hotels from "../src/components/Hotels/Hotels";
import "@testing-library/jest-dom";
import React from "react";

test("renders hotels components", () => {
  render(<Hotels />);
  expect(screen.getByText("Hotels")).toBeInTheDocument();
});
