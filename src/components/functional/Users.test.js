import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import Users from "./Users";
import constant from "../../constant";

jest.mock("axios");

describe("Users Component", () => {
  it("fetches and displays users data correctly", async () => {
    const fakeUsers = [
      { id: 1, name: "Admin", email: "admin@test.com" },
      { id: 2, name: "User", email: "user@test.com" },
    ];

    axios.get.mockResolvedValueOnce({ data: fakeUsers });

    render(<Users />);

    // Check if "Fetching data from API" message is displayed initially
    expect(screen.getByText("Fetching data from API")).toBeInTheDocument();

    // Wait for data to be fetched and loaded
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(constant.fakeUserApiUrl);
    });
    expect(screen.getByText("Users Details")).toBeInTheDocument();

    // Check if user data is displayed correctly
    expect(screen.getByText("Admin")).toBeInTheDocument();
    expect(screen.getByText("User")).toBeInTheDocument();
    expect(screen.getByText("admin@test.com")).toBeInTheDocument();
    expect(screen.getByText("user@test.com")).toBeInTheDocument();
  });
});
