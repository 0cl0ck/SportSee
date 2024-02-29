import React from "react";
import NutritionInfoCard from "./NutritionInfoCard";
import "../../sass/components/_nutritionInfoList.scss";
const NutritionInfoList = ({ data }) => {
  console.log(data);
  return (
    <div className="dashboard-cards__container">
      {data.map((item) => (
        <NutritionInfoCard
          key={item.id}
          label={item.label}
          value={item.value}
          iconPath={item.iconPath}
          bgColor={item.bgColor}
        />
      ))}
    </div>
  );
};

export default NutritionInfoList;
