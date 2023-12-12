import { render, fireEvent, screen } from "@testing-library/react";
import LifeCycle1 from "./LifeCycle1";

test("toggle visibility of Counter component", () => {
  render(<LifeCycle1 />);

  // Initially, Counter component should not be rendered
  expect(screen.queryByText("Count Value:")).toBeNull();

  // Click on the button to show Counter
  fireEvent.click(screen.getByText("Show Counter"));

  // Counter component should be rendered now
  expect(screen.getByText("Count Value: 1")).toBeInTheDocument();

  // Click on the button to hide Counter
  fireEvent.click(screen.getByText("Hide Counter"));

  // Counter component should not be rendered again
  expect(screen.queryByText("Count Value:")).toBeNull();
});

test("increment and decrement count in Counter component", () => {
  render(<LifeCycle1 />);

  // Click on the button to show Counter
  fireEvent.click(screen.getByText("Show Counter"));

  // Increment button test
  fireEvent.click(screen.getByText("Increment"));
  expect(screen.getByText("Count Value: 2")).toBeInTheDocument();

  // Decrement button test
  fireEvent.click(screen.getByText("Decrement"));
  expect(screen.getByText("Count Value: 1")).toBeInTheDocument();
});
