import { render, fireEvent, screen } from "@testing-library/react";
import PassState from "./PassState";

describe("PassState component in RTL", () => {
  test("Buttons should render", () => {
    render(<PassState />);

    const incrementButton = screen.getByText("Increment");
    const decrementButton = screen.getByText("Decrement");

    // Check if buttons render
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();

    // Simulate button clicks
    fireEvent.click(incrementButton);
    expect(screen.getByText("Counter: 2")).toBeInTheDocument();

    fireEvent.click(decrementButton);
    expect(screen.getByText("Counter: 1")).toBeInTheDocument();
  });
});
