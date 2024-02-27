import React from "react";

function NutritionInfoCard(data) {
  console.log(data.bgColor);
  return (
    <div className="nutrition__container">
      <div
        className="nutrition__icon--container"
        style={{ backgroundColor: data.bgColor }}
      >
        <img
          src={data.iconPath}
          alt="nutrition icon"
          className="nutrition__icon"
        />
      </div>
      <div className="nutrition__info">
        <p className="nutrition__value"> {data.value} </p>
        <p className="nutrition__title"> {data.label} </p>
      </div>
    </div>
  );
}

export default NutritionInfoCard;
