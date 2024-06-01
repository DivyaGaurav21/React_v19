import React from "react";
import { usePosts } from "../context/PostContext";

const Posts = () => {
  const { posts, onDeleteSinglePost } = usePosts();
  return (
    <section>
      return (
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => onDeleteSinglePost(post.title)}>
              delete
            </button>
          </li>
        ))}
      </ul>
      );
    </section>
  );
};

export default Posts;
