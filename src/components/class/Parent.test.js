import React from "react";
import { render, screen } from "@testing-library/react";
import Parent from "./Parent";
import Child from "./Child";

describe("Parent and Child components", () => {
  test("Renders Child component with props", () => {
    render(<Child name="Test3" age="22" city="Vadodara" />);

    expect(screen.getByText("Name: Test3")).toBeInTheDocument();
    expect(screen.getByText("Age: 22")).toBeInTheDocument();
    expect(screen.getByText("City: Vadodara")).toBeInTheDocument();
  });

  test("Passes props from Parent to Child component", () => {
    render(<Parent name="Test11" age="30" city="New York" />);

    expect(screen.getByText("Name: Test3")).toBeInTheDocument();
    expect(screen.getByText("Age: 22")).toBeInTheDocument();
    expect(screen.getByText("City: Vadodara")).toBeInTheDocument();

    expect(screen.getByText("Name: Test11")).toBeInTheDocument();
    expect(screen.getByText("Age: 30")).toBeInTheDocument();
    expect(screen.getByText("City: New York")).toBeInTheDocument();
  });
});
