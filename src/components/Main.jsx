import React from "react";
import "./Main.scss";
import NutritionInfoCard from "./NutritionInfoCard.jsx";
import NutritionInfoList from "./NutritionInfoList.jsx";
import GreetingHeader from "./GreetingHeader";
import DailyActivityChart from "./DailyActivityChart.jsx";
import ObjectiveScoreChart from "./ObjectiveScoreChart.jsx";
import SessionDurationChart from "./SessionDurationChart.jsx";
import IntensityChart from "./IntensityChart.jsx";
import {
  dailyActivityDataMock,
  activityDataMock,
  intensityDataMock,
  objectiveScoreDataMock,
  nutritionData,
} from "./dataMock.js";

function Main() {
  return (
    <main>
      <GreetingHeader name="John Doe" />
      <div className="container">
        <div className="charts__container">
          <DailyActivityChart data={dailyActivityDataMock} />
          <div className="charts__flex">
            <SessionDurationChart data={activityDataMock} />
            <IntensityChart data={intensityDataMock} />
            <ObjectiveScoreChart data={objectiveScoreDataMock} />
          </div>
        </div>
        <div className="nutritionInfoCard__Container">
          <NutritionInfoList data={nutritionData} />
        </div>
      </div>
    </main>
  );
}

export default Main;
