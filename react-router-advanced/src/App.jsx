// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import Post from "./components/Post";
import BlogPost from "./components/BlogPost"; // Import BlogPost component
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Protected and Nested Routes for Profile */}
        <Route path="/profile/*" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        {/* Dynamic Route for Posts */}
        <Route path="/posts/:postId" element={<Post />} />
        {/* Dynamic Route for Blog Posts */}
        <Route path="/blog/:id" element={<BlogPost />} />
        {/* Fallback for undefined routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


