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
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
    </div>
  );
}

export default Monthdata;
