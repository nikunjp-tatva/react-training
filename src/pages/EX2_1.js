import axios from "axios";
import React, { useEffect, useState } from "react";

import UserTable from "../components/shared/UserTable";

export default function EX2_1() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    filterUsers(event.target.value);
  };

  const filterUsers = (query) => {
    const filteredUsersDetails = filteredUsers.filter((user) => {
      return (
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.username.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
      );
    });
    setUsers(filteredUsersDetails);
  };

  useEffect(() => {
    setLoading(true);
    const apiUrl = `https://jsonplaceholder.typicode.com/users`;
    axios.get(apiUrl).then((response) => {
      const data = response.data;
      setLoading(false);
      setFilteredUsers(data);
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
        {loading ? "Fetching data from API" : <UserTable users={users} />}
      </div>
    </>
  );
}
