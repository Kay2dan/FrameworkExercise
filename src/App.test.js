import { render, screen } from "@testing-library/react";
import App from "./App";

test("total starts at zero", () => {
  render(<App />);

  expect(screen.getByTestId("total")).toHaveTextContent("0");
});
