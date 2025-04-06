// src/components/PostsComponent.jsx
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery("posts", fetchPosts, {
    staleTime: 5000,           // Data remains fresh for 5 seconds
    cacheTime: 10000,          // Cache data for 10 seconds after it becomes inactive
    keepPreviousData: true,    // Keeps previous data during background fetching
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error fetching posts: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch} style={{ marginBottom: "10px" }}>
        Refresh Posts
      </button>
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;


