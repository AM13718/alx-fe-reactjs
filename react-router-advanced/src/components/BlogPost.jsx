// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post</h2>
      <p>Displaying blog post with ID: {id}</p>
      {/* Add additional blog post details here */}
    </div>
  );
};

export default BlogPost;
