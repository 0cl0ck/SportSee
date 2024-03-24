import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MockDataContext } from "../utils/mockDataContext.js";

function HomePage() {
  const navigate = useNavigate();
  const { useMock, setUseMock } = useContext(MockDataContext);

  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={() => navigate("/user/12")}>
        Dashboard Utilisateur 12
      </button>
      <button onClick={() => navigate("/user/18")}>
        Dashboard Utilisateur 18
      </button>
      <div>
        <label>
          Utiliser données mockées:
          <input
            type="checkbox"
            checked={useMock}
            onChange={(e) => setUseMock(e.target.checked)}
          />
        </label>
      </div>
    </div>
  );
}

export default HomePage;
