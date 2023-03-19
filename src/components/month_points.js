import { useState, useEffect } from "react";

function Monthdata() {
  const [Monthdata, setMonthdata] = useState([]);

  useEffect(() => {
    async function fetchMonthdata() {
      const res = await fetch("/api/month_data");
      const data = await res.json();
      setMonthdata(data);
    }

    fetchMonthdata();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Files</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {Monthdata.map((user) => (
          <tr key={user.username}>
            <td>{user.username}</td>
            <td>{user.files}</td>
            <td>{user.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Monthdata;
