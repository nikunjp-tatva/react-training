import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders login page", () => {
  render(<App />);

  const demoEmailEl = screen.getByText(/admin@test.com/i);
  expect(demoEmailEl).toBeInTheDocument();
  const demoPasswordEl = screen.getByText(/Admin@123/i);
  expect(demoPasswordEl).toBeInTheDocument();

  const nameInput = screen.getByPlaceholderText("Enter your name");
  expect(nameInput).toBeInTheDocument();

  const emailInput = screen.getByPlaceholderText("Enter above email");
  expect(emailInput).toBeInTheDocument();
});
