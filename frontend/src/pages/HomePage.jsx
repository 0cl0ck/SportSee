// Dans src/pages/HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={() => navigate("/user/12")}>
        Dashboard Utilisateur 12
      </button>
      <button onClick={() => navigate("/user/18")}>
        Dashboard Utilisateur 18
      </button>
    </div>
  );
}

export default HomePage;
