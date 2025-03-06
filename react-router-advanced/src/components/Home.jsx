// src/components/Home.jsx
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li><Link to="/profile/details">Go to Profile</Link></li>
          <li><Link to="/posts/1">View Post 1</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
