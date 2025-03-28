import { useState, useEffect } from "react";

export default function CommentsAPI() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock Data for Comments
  const mockComments = [
    { id: 1, author: "John Doe", body: "Great post!" },
    { id: 2, author: "Jane Smith", body: "Thanks for sharing!" },
  ];

  useEffect(() => {
    // Simulate API delay
    setLoading(true);
    setTimeout(() => {
      setComments(mockComments);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Comments</h2>
      {loading && <p>Loading...</p>}
      {!loading && comments.map((comment) => (
        <div key={comment.id}>
          <p><strong>{comment.author}:</strong> {comment.body}</p>
        </div>
      ))}
    </div>
  );
}
