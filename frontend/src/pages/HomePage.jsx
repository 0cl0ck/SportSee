import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MockDataContext } from "../utils/mockDataContext.js";

/**
 * HomePage est le composant de page d'accueil de l'application. Il permet à l'utilisateur
 * de naviguer vers des tableaux de bord spécifiques et de gérer l'utilisation des données mockées.
 *
 * Fonctionnalités:
 * - Navigation vers les dashboards des utilisateurs 12 et 18 via des boutons.
 * - Contrôle pour activer ou désactiver l'utilisation de données mockées à travers un checkbox.
 */
function HomePage() {
  const navigate = useNavigate(); // Hook pour la navigation
  const { useMock, setUseMock } = useContext(MockDataContext); // Accès au contexte pour les données mockées

  return (
    <div className="display-column">
      <h1>Homepage</h1>
      <div className="display-row">
        <button className="btn" onClick={() => navigate("/user/12")}>
          Dashboard Utilisateur 12
        </button>
        <button className="btn" onClick={() => navigate("/user/18")}>
          Dashboard Utilisateur 18
        </button>
      </div>
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
