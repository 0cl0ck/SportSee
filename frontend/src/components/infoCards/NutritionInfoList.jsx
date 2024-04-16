import React from "react";
import NutritionInfoCard from "./NutritionInfoCard";
import PropTypes from "prop-types";
import "../../sass/components/_nutritionInfoList.scss";

const NutritionInfoList = ({ data }) => {
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

NutritionInfoList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      iconPath: PropTypes.string.isRequired,
      bgColor: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NutritionInfoList;
