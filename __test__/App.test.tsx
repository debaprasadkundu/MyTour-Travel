import { render, screen, waitFor } from "@testing-library/react";
import App from "../src/App";

test("renders learn react link", async () => {
  render(<App />);
  // const linkElement = await screen.getByText(/Home/i);
  // expect(linkElement).toBeInTheDocument();
  await waitFor(() => expect(screen.getByText("Home")).toBeInTheDocument());
});
