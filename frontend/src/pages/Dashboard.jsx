import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import GreetingHeader from "../components/GreetingHeader/GreetingHeader";
import DailyActivityChart from "../components/charts/DailyActivityChart";
import SessionDurationChart from "../components/charts/SessionDurationChart";
import PerformanceRadar from "../components/charts/PerformanceRadar";
import NutritionInfoList from "../components/infoCards/NutritionInfoList";
import RadialScoreChart from "../components/charts/RadialScoreChart";
import "../sass/pages/_dashboard.scss";
import { MockDataContext } from "../utils/mockDataContext.js";

import {
  getUserData,
  getUserActivity,
  getUserAverageSessions,
  getPerformanceData,
} from "../utils/apiService.js";

import {
  activityDataMock,
  dailyActivityDataMock,
  intensityDataMock,
  nutritionData,
  objectiveScoreDataMock,
} from "../utils/mockUser";

const convertDayNumberToLetter = (dayNumber) => {
  const dayMappings = {
    1: "L",
    2: "M",
    3: "Me",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };

  return dayMappings[dayNumber] || "Unknown";
};

function Dashboard() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [nutritionInfo, setNutritionInfo] = useState([]);
  const [dailyActivityData, setDailyActivityData] = useState([]);
  const [averageSessionData, setAverageSessionData] = useState([]);
  const [scoreData, setScoreData] = useState([]);
  const [performanceData, setPerformanceData] = useState([]);
  const { useMock } = useContext(MockDataContext);

  useEffect(() => {
    const fetchData = async () => {
      if (useMock) {
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
        const data = await getUserData(userId);
        const activityData = await getUserActivity(userId);
        const averageSessionData = await getUserAverageSessions(userId);

        const performanceApiData = await getPerformanceData(userId);

        // Transformation des données de sessions moyennes
        const transformedAverageSessionData =
          averageSessionData.data.sessions.map((session) => ({
            ...session,
            day: convertDayNumberToLetter(session.day),
          }));

        // Normalisation des données de score
        const normalizedScoreData = {
          score:
            data.data.todayScore !== undefined
              ? data.data.todayScore
              : data.data.score,
        };

        // Transformation des données de performance pour le radar
        const transformedPerformanceData = performanceApiData.data.data
          .map((performance) => ({
            value: performance.value,
            kind: performanceApiData.data.kind[performance.kind], // Utilisation directe de l'objet kind pour la correspondance
          }))
          .map((item) => ({
            ...item,
            kind: item.kind[0].toUpperCase() + item.kind.slice(1), // Capitalisation
          }));

        setUserData(data.data);
        transformAndSetNutritionData(data.data.keyData);
        setDailyActivityData(activityData.data.sessions);
        setAverageSessionData(transformedAverageSessionData);
        setScoreData([normalizedScoreData]);
        setPerformanceData(transformedPerformanceData);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchData();
  }, [userId]);

  const transformAndSetNutritionData = (keyData) => {
    const nutritionInfo = [
      {
        id: `${keyData.calorieCount}`,
        label: "Calories",
        value: `${keyData.calorieCount}kCal`,
        iconPath: "/energy.svg",
        bgColor: "#FBEAEA",
      },
      {
        id: `${keyData.proteinCount}`,
        label: "Protéines",
        value: `${keyData.proteinCount}g`,
        iconPath: "/chicken.svg",
        bgColor: "#E9F4FB",
      },
      {
        id: `${keyData.carbohydrateCount}`,
        label: "Glucides",
        value: `${keyData.carbohydrateCount}g`,
        iconPath: "/apple.svg",
        bgColor: "#FAF6E5",
      },
      {
        id: `${keyData.lipidCount}`,
        label: "Lipides",
        value: `${keyData.lipidCount}g`,
        iconPath: "/cheeseburger.svg",
        bgColor: "#FBEAEF",
      },
    ];

    setNutritionInfo(nutritionInfo);
  };

  return (
    <div className="dashboard">
      {userData && <GreetingHeader name={userData.userInfos.firstName} />}
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
