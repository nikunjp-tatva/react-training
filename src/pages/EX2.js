import axios from "axios";
import React, { useEffect, useState } from "react";

import UserTable from "../components/shared/UserTable";

export default function EX2() {
  const [data, setData] = useState({
    isLoading: false,
    users: [],
  });
  const [users, setUsers] = useState(data.users);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    filterUsers(event.target.value);
  };

  const filterUsers = (query) => {
    const filteredUsers = data.users.filter((user) => {
      return (
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.username.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
      );
    });
    setUsers(filteredUsers);
  };

  useEffect(() => {
    setData((prev) => ({ ...prev, isLoading: true }));
    const apiUrl = `https://jsonplaceholder.typicode.com/users`;
    axios.get(apiUrl).then((response) => {
      const data = response.data;
      setData({ isLoading: false, users: data });
      setUsers(data);
    });
  }, []);

  return (
    <>
      <div>
        <h1>Users Details</h1>
      </div>
      <h4>Search User</h4>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <div>
        {data.isLoading ? (
          "Fetching data from API"
        ) : (
          <UserTable users={users} />
        )}
      </div>
    </>
  );
}
