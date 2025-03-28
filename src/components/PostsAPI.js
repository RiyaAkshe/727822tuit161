import { useState, useEffect } from "react";

export default function PostsAPI() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock Data for Posts
  const mockPosts = [
    { id: 1, title: "First Post", body: "This is the content of the first post." },
    { id: 2, title: "Second Post", body: "This is the content of the second post." },
  ];

  useEffect(() => {
    // Simulate API delay
    setLoading(true);
    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Posts List</h2>
      {loading && <p>Loading...</p>}
      {!loading && posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
