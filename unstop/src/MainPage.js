import React from "react";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/"); // Redirect back to the login page
  };

  return (
    <div className="main-page">
      <h1>Welcome to the Main Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default MainPage;
