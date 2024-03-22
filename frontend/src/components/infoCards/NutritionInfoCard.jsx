import React from "react";

function NutritionInfoCard(data) {
  return (
    <div className="card__container">
      <div className="card__icon" style={{ backgroundColor: data.bgColor }}>
        <img src={data.iconPath} alt="card icon" className="card__icon--img" />
      </div>
      <div className="card__info">
        <p className="card__value"> {data.value} </p>
        <p className="card__title"> {data.label} </p>
      </div>
    </div>
  );
}

export default NutritionInfoCard;
