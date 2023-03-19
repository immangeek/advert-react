import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Name</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.username}>
            <td>{user.username}</td>
            <td>{user.name}</td>
            <td>{user.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Users;
