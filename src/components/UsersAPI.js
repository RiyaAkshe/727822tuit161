import { useState, useEffect } from "react";

export default function UsersAPI() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock Data for Users
  const mockUsers = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  ];

  useEffect(() => {
    // Simulate API delay
    setLoading(true);
    setTimeout(() => {
      setUsers(mockUsers);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      {loading && <p>Loading...</p>}
      {!loading && users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}
