import React from "react";
import "../sass/pages/_main.scss";
import NutritionInfoList from "../components/infoCards/NutritionInfoList.jsx";
import GreetingHeader from "../components/GreetingHeader/GreetingHeader.jsx";
import DailyActivityChart from "../components/charts/DailyActivityChart.jsx";
import ObjectiveScoreChart from "../components/charts/ObjectiveScoreChart.jsx";
import SessionDurationChart from "../components/charts/SessionDurationChart.jsx";
import IntensityChart from "../components/charts/IntensityChart.jsx";
import {
  dailyActivityDataMock,
  activityDataMock,
  intensityDataMock,
  objectiveScoreDataMock,
  nutritionData,
} from "../components/dataMock.js";

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