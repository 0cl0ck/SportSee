import React from "react";
import "./Main.scss";
import GreetingHeader from "./GreetingHeader";
import DailyActivityChart from "./DailyActivityChart.jsx";
import dailyActivityDataMock from "./dataMock.js";

function Main() {
  return (
    <main>
      <GreetingHeader name="John Doe" />
      <DailyActivityChart data={dailyActivityDataMock} />
    </main>
  );
}

export default Main;
