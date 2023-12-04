import axios from "axios";
import React, { useEffect, useState } from "react";

import constant from "../../constant"
import UserTable from "../shared/UserTable";

export default function Users() {
  const [data, setData] = useState({
    isLoading: false,
    users: [],
  });

  useEffect(() => {
    setData((prev) => ({ ...prev, isLoading: true }));
    axios.get(constant.fakeUserApiUrl).then((response) => {
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
          <UserTable users={data.users} />
        )}
      </div>
    </>
  );
}
