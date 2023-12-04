import axios from "axios";
import React, { useEffect, useState } from "react";

import { fakeUserApiUrl } from "../../constant"

function GetData({ users }) {
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

export default function Users() {
  const [data, setData] = useState({
    isLoading: false,
    users: [],
  });

  useEffect(() => {
    setData((prev) => ({ ...prev, isLoading: true }));
    axios.get(fakeUserApiUrl).then((response) => {
      const data = response.data;
      setData({ isLoading: false, users: data });
    });
  }, []);

  return (
    <>
      <div>
        <h1>Users Details</h1>
      </div>
      <div>
        {data.isLoading ? (
          "Fetching data from API"
        ) : (
          <GetData users={data.users} />
        )}
      </div>
    </>
  );
}
