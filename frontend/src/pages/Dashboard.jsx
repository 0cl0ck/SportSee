import React from "react";
import GreetingHeader from "../components/GreetingHeader/GreetingHeader";
import DailyActivityChart from "../components/charts/DailyActivityChart";
import SessionDurationChart from "../components/charts/SessionDurationChart";
import PerformanceRadar from "../components/charts/PerformanceRadar";
import NutritionInfoList from "../components/infoCards/NutritionInfoList";
import RadialScoreChart from "../components/charts/RadialScoreChart";
import "../sass/pages/_dashboard.scss";

import { useParams } from "react-router-dom";
import { getUserData } from "../utils/apiService.js";
import { useEffect, useState } from "react";

import {
  activityDataMock,
  dailyActivityDataMock,
  intensityDataMock,
  nutritionData,
  objectiveScoreDataMock,
} from "../utils/mockUser";

function Dashboard() {
  const { userId } = useParams(); // Utilisez useParams pour récupérer l'ID de l'utilisateur depuis l'URL
  const [userData, setUserData] = useState(null);
  const [nutritionInfo, setNutritionInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData(userId);

        setUserData(data.data);
        transformAndSetNutritionData(data.data.keyData);
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
          <DailyActivityChart data={dailyActivityDataMock} />
          <div className="dashboard__charts--flex">
            <div className="chart">
              <SessionDurationChart data={activityDataMock} />
            </div>
            <div className="chart">
              <PerformanceRadar data={intensityDataMock} />
            </div>
            <div className="chart">
              <RadialScoreChart data={objectiveScoreDataMock} />
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
