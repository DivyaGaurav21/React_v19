import React from "react";
import SearchPosts from "./SearchPosts";
import { usePosts } from "../context/PostContext";

const Header = () => {
  const { posts, onClearPosts } = usePosts();
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <p>🚀 {posts.length} atomic posts found</p>;
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
};

export default Header;
