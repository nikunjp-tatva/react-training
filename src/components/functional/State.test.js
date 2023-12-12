import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import State from "./State";

describe("State component", () => {
  test("Increment and Decrement buttons work correctly", () => {
    render(<State />);

    const counterElement = screen.getByText("Counter: 0");
    const incrementButton = screen.getByText("Increment");
    const decrementButton = screen.getByText("Decrement");

    expect(counterElement).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();

    fireEvent.click(incrementButton); // Increment by 1
    fireEvent.click(incrementButton); // Increment by 1
    fireEvent.click(incrementButton); // Increment by 1
    fireEvent.click(incrementButton); // Increment by 1
    fireEvent.click(incrementButton); // Increment by 1
    expect(screen.getByText("Counter: 5")).toBeInTheDocument();

    fireEvent.click(decrementButton); // Decrement by 1
    fireEvent.click(decrementButton); // Decrement by 1
    expect(screen.getByText("Counter: 3")).toBeInTheDocument();
  });
});
