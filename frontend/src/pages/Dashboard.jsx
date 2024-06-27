import React, { useState, useEffect } from "react";
import { useFetchData } from "../hooks/useEffectHooks";
import { useNavigate } from "react-router-dom";

import GreetingHeader from "../components/GreetingHeader/GreetingHeader";
import DailyActivityChart from "../components/charts/DailyActivityChart";
import SessionDurationChart from "../components/charts/SessionDurationChart";
import PerformanceRadar from "../components/charts/PerformanceRadar";
import NutritionInfoList from "../components/infoCards/NutritionInfoList";
import RadialScoreChart from "../components/charts/RadialScoreChart";
import "../sass/pages/_dashboard.scss";

/**
 * Dashboard est le composant principal pour l'affichage des données de l'utilisateur sous forme de graphiques
 * et de cards. Il utilise le hook useFetchData pour obtenir les données nécessaires.
 *
 * Les données récupérées comprennent :
 * - userName : Nom de l'utilisateur pour personnaliser l'accueil.
 * - dailyActivityData : Données pour le graphique d'activité quotidienne.
 * - averageSessionData : Données pour le graphique de durée des sessions.
 * - performanceData : Données pour le radar de performance.
 * - scoreData : Données pour le graphique de score radial.
 * - nutritionInfo : Données pour les Cards Nutritionnelles.
 *
 * Chaque sous-composant reçoit les données spécifiques dont il a besoin pour afficher les visualisations correspondantes.
 */

function Dashboard() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const {
    userName,
    dailyActivityData,
    averageSessionData,
    performanceData,
    scoreData,
    nutritionInfo,
  } = useFetchData(setError);

  // Assure que userName est une chaîne
  const userNameString = Array.isArray(userName)
    ? userName.join(" ")
    : userName;

  useEffect(() => {
    if (error) {
      navigate("/error");
    }
  }, [error, navigate]);

  return (
    <div className="dashboard">
      <GreetingHeader name={userNameString} />
      <div className="dashboard__elements">
        <div className="dashboard__charts--container">
          <DailyActivityChart data={dailyActivityData} />
          <div className="dashboard__charts--flex">
            <div className="chart">
              <SessionDurationChart data={averageSessionData} />
            </div>
            <div className="chart">
              <PerformanceRadar data={performanceData} />
            </div>
            <div className="chart">
              <RadialScoreChart data={scoreData} />
            </div>
          </div>
        </div>
        <div className="dashboard__cards">
          <NutritionInfoList data={nutritionInfo} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
