// src/components/Login.jsx
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login process; in a real app, update authentication state
    // After login, navigate to the profile details page
    navigate("/profile/details");
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
