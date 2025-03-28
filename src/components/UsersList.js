import { useState, useEffect } from "react";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock Data
  const mockUsers = [
    { _id: 1, name: "John Doe", followers: 1000, following: 250, posts: 50 },
    { _id: 2, name: "Jane Smith", followers: 800, following: 300, posts: 40 },
  ];

  useEffect(() => {
    // Simulating an API call delay
    const fetchUsers = () => {
      setLoading(true);
      setTimeout(() => {
        setUsers(mockUsers);
        setLoading(false);
      }, 1000); // Simulate 1 second delay
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">User List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => (
          <div key={user._id} className="p-4 bg-white shadow rounded mb-2">
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
            <p>Posts: {user.posts}</p>
          </div>
        ))
      )}
    </div>
  );
}
