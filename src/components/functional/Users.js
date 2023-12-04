import axios from "axios";
import React, { useEffect, useState } from "react";

import constant from "../../constant";
import UserTable from "../shared/UserTable";

export default function Users() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(constant.fakeUserApiUrl).then((response) => {
      const data = response.data;
      setLoading(false);
      setUsers(data);
    });
  }, []);

  return (
    <>
      <div>
        <h1>Users Details</h1>
      </div>
      <div>
        {loading ? "Fetching data from API" : <UserTable users={users} />}
      </div>
    </>
  );
}
