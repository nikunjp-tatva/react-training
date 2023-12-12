import { render, fireEvent, screen } from "@testing-library/react";
import PassState2 from "./PassState2";

describe("PassState2 component in RTL", () => {
  test("Buttons render", () => {
    render(<PassState2 />);

    const incrementButton = screen.getByText("Increment");
    const decrementButton = screen.getByText("Decrement");

    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();

    fireEvent.click(incrementButton); // Increment by 1
    fireEvent.click(incrementButton); // Increment by 1
    expect(screen.getByText("Counter: 3")).toBeInTheDocument();

    fireEvent.click(decrementButton); // Decrement by 1
    fireEvent.click(decrementButton); // Decrement by 1
    fireEvent.click(decrementButton); // Decrement by 1
    expect(screen.getByText("Counter: 0")).toBeInTheDocument();
  });
});
