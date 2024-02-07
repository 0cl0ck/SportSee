import React from "react";
import NutritionInfoCard from "./NutritionInfoCard";
import "./NutritionInfoList.scss";
const NutritionInfoList = ({ data }) => {
  console.log(data);
  return (
    <div className="nutritionList__container">
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
