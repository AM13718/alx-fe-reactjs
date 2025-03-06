// src/components/Post.jsx
import { useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams();

  return (
    <div>
      <h2>Post ID: {postId}</h2>
      <p>Display content for post {postId} here...</p>
    </div>
  );
};

export default Post;
