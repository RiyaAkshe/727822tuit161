import React from "react";
import UsersAPI from "./components/UsersAPI";
import PostsAPI from "./components/PostsAPI";
import CreatePost from "./components/CreatePost";
import CommentsAPI from "./components/CommentsAPI";

function App() {
  return (
    <div>
      <h1>Social Media API Testing</h1>
      <UsersAPI />
      <PostsAPI />
      <CreatePost />
      <CommentsAPI />
    </div>
  );
}

export default App;
