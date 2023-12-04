import axios from "axios";
import React, { useEffect, useState } from "react";

function UserData({ users }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Username</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

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
        {data.isLoading ? "Fetching data from API" : <UserData users={users} />}
      </div>
    </>
  );
}
