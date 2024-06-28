import React from "react";
import NutritionInfoCard from "./NutritionInfoCard";
import PropTypes from "prop-types";
import "../../sass/components/_nutritionInfoList.scss";

const NutritionInfoList = ({ data }) => {
  if (!Array.isArray(data)) {
    console.error("Expected data to be an array, but got:", data);
    return null; // Si les données ne sont pas valides, on ne rend rien
  }
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
