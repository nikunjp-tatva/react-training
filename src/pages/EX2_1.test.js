import axios from "axios";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EX2_1 from "./EX2_1";

// Mocking Axios to simulate API response
jest.mock("axios");

describe("EX2_1 Component", () => {
  it("renders user details after API call", async () => {
    const mockUsers = [
      {
        id: 1,
        name: "Admin",
        username: "admin",
        email: "admin@test.com",
      },
      {
        id: 2,
        name: "User",
        username: "user",
        email: "user@test.com",
      },
    ];

    // Mocking the API response
    axios.get.mockResolvedValueOnce({ data: mockUsers });

    render(<EX2_1 />);

    // Check if the loading text appears initially
    expect(screen.getByText("Fetching data from API")).toBeInTheDocument();

    // Wait for the API call to finish and the loading state to change
    await waitFor(() => {
      expect(
        screen.queryByText("Fetching data from API")
      ).not.toBeInTheDocument();
    });

    // Ensure the user details are rendered
    expect(screen.getByText("Users Details")).toBeInTheDocument();
    expect(screen.getByText("Search User")).toBeInTheDocument();

    // Simulate user input for searching
    const searchInput = screen.getByPlaceholderText("Search...");
    userEvent.type(searchInput, "User");

    // Ensure the filtered user is displayed
    expect(screen.getByText("Admin")).toBeInTheDocument();
    expect(screen.queryByText("User")).not.toBe();
  });
});
