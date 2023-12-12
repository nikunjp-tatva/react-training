import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import LoginForm from "./LoginForm";

it("displays error message on invalid credentials", async () => {
  const mockLoginHandler = jest.fn();

  render(<LoginForm loginHandler={mockLoginHandler} />);
  const emailInput = screen.getByPlaceholderText("Enter your name");
  const passwordInput = screen.getByPlaceholderText("Enter above email");
  const submitButton = screen.getByPlaceholderText("Enter above password");

  fireEvent.change(emailInput, { target: { value: "invalid@test.com" } });
  fireEvent.change(passwordInput, { target: { value: "invalidPassword" } });
  await act(async () => {
    fireEvent.click(submitButton);
  });
  expect(mockLoginHandler).not.toHaveBeenCalled();
  expect(screen.queryByText("Invalid email or password")).toBeNull();
});
