import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]); // State to store the list of posts

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from refreshing
    if (!title || !body) {
      setMessage("Please fill in both fields.");
      return;
    }

    // Add the new post to the list of posts
    const newPost = { title, body };
    setPosts((prevPosts) => [...prevPosts, newPost]);

    // Simulate success message
    setMessage("Post created successfully!");

    // Clear the form fields
    setTitle("");
    setBody("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          style={{ padding: "10px", fontSize: "16px", minHeight: "100px" }}
        ></textarea>
        <button
          type="submit"
          style={{
            padding: "10px",
            fontSize: "16px",
            background: "#4caf50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Create Post
        </button>
      </form>
      {message && <p style={{ marginTop: "10px", color: "#007bff" }}>{message}</p>}

      {/* Display the list of posts */}
      <div style={{ marginTop: "20px" }}>
        <h3>Submitted Posts</h3>
        {posts.length === 0 ? (
          <p>No posts created yet.</p>
        ) : (
          posts.map((post, index) => (
            <div key={index} style={{ marginBottom: "10px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
