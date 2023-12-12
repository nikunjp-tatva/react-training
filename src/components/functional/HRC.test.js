import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import HRC from "./HRC";

// Mocking the axios get function
jest.mock("axios");

describe("HRC Component", () => {
  it("performs throttled API calls", async () => {
    const mockProducts = [
      { id: 1, title: "Product 1", category: "a", price: 10 },
      { id: 2, title: "Product 2", category: "b", price: 22 },
    ];

    axios.get.mockResolvedValueOnce({ data: { products: mockProducts } });

    render(<HRC />);

    const throttleInput = screen.getByPlaceholderText(
      "Type for throttled API call"
    );

    // Simulate user typing
    fireEvent.change(throttleInput, { target: { value: "Prod" } });

    // Wait for the throttle time to pass
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1); // Ensure API called only once
    });

    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
    });
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });

  it("performs debounced API calls", async () => {
    const mockProducts = [
      { id: 3, title: "Product 3", category: "c", price: 21 },
      { id: 4, title: "Product 4", category: "d", price: 55 },
    ];

    axios.get.mockResolvedValueOnce({ data: { products: mockProducts } });

    render(<HRC />);

    const debounceInput = screen.getByPlaceholderText(
      "Type for debounced API call"
    );

    // Simulate user typing
    fireEvent.change(debounceInput, { target: { value: "Prod" } });

    // Wait for the debounce time to pass
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1); // Ensure API called only once
    });

    // Ensure API call has been made and rendered data is displayed
    await waitFor(() => {
      expect(screen.getByText("Product 3")).toBeInTheDocument();
    });
    expect(screen.getByText("Product 4")).toBeInTheDocument();
  });
});
