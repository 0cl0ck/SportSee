import { useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  getUserData,
  getUserActivity,
  getUserAverageSessions,
  getPerformanceData,
} from "../api/apiService";

import {
  useUserData,
  useUserName,
  useNutritionInfo,
  useDailyActivityData,
  useAverageSessionData,
  useScoreData,
  usePerformanceData,
} from "./useStateHooks";

import { useMockDataContext } from "./useContextHooks";

import {
  activityDataMock,
  dailyActivityDataMock,
  intensityDataMock,
  nutritionData,
  objectiveScoreDataMock,
  nameMock,
} from "../mock/mockUser";

// Importation des fonctions de traitement de données
import {
  convertDayNumberToLetter,
  transformPerformanceData,
  transformAndSetNutritionData,
} from "../model/dataTransformations";

// Hook personnalisé pour récupérer et gérer les données de l'utilisateur
export const useFetchData = (setError) => {
  const { userId } = useParams();
  const [userData, setUserData] = useUserData();
  const [userName, setUserName] = useUserName();
  const [nutritionInfo, setNutritionInfo] = useNutritionInfo();
  const [dailyActivityData, setDailyActivityData] = useDailyActivityData();
  const [averageSessionData, setAverageSessionData] = useAverageSessionData();
  const [scoreData, setScoreData] = useScoreData();
  const [performanceData, setPerformanceData] = usePerformanceData();
  const useMock = useMockDataContext(); // Basculement pour utiliser les données simulées

  useEffect(() => {
    const fetchData = async () => {
      if (useMock) {
        // Utiliser les données simulées pour les tests ou le développement
        setUserName(nameMock);
        setDailyActivityData(dailyActivityDataMock);
        setAverageSessionData(
          activityDataMock.map((session) => ({
            ...session,
            day: convertDayNumberToLetter(session.day),
          }))
        );
        setScoreData(objectiveScoreDataMock);
        setPerformanceData(intensityDataMock);
        setNutritionInfo(nutritionData);
        return;
      }

      try {
        // Récupération des données réelles depuis les API
        const data = await getUserData(userId);
        const activityData = await getUserActivity(userId);
        const averageSessionData = await getUserAverageSessions(userId);
        const performanceData = await getPerformanceData(userId);
        const transformedPerformanceData = transformPerformanceData(
          performanceData.data.data,
          performanceData.data.kind
        );

        // Formatage des données de session pour afficher uniquement le numéro du jour
        const formattedData = activityData.data.sessions.map((item) => {
          const dayOnly = item.day.split("-")[2];
          const formattedDay = parseInt(dayOnly, 10);

          return { ...item, day: formattedDay.toString() };
        });

        // Définition des données transformées dans l'état
        setUserData(data.data);
        setUserName(data.data.userInfos.firstName);
        setDailyActivityData(formattedData);
        setAverageSessionData(
          averageSessionData.data.sessions.map((session) => ({
            ...session,
            day: convertDayNumberToLetter(session.day),
          }))
        );
        setScoreData([{ score: data.data.todayScore ?? data.data.score }]);
        setPerformanceData(transformedPerformanceData);

        // Définition des informations nutritionnelles dans l'état
        transformAndSetNutritionData(data.data.keyData, setNutritionInfo);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setError(true);
      }
    };

    fetchData();
  }, [userId, useMock, setError]);

  return {
    userData,
    userName,
    nutritionInfo,
    dailyActivityData,
    averageSessionData,
    scoreData,
    performanceData,
  };
};
