const dailyActivityDataMock = [
  { day: 1, poids: 68, calories: 50 },
  { day: 2, poids: 120.5, calories: 45 },
  { day: 3, poids: 67.5, calories: 100 },
  { day: 4, poids: 61.5, calories: 150 },
  { day: 5, poids: 53.5, calories: 25 },
  { day: 6, poids: 10.5, calories: 35 },
  { day: 7, poids: 66.5, calories: 60 },
];

const intensityDataMock = [
  { subject: "Intensité", A: 50, fullMark: 150 },
  { subject: "Vitesse", A: 110, fullMark: 150 },
  { subject: "Force", A: 70, fullMark: 150 },
  { subject: "Endurance", A: 90, fullMark: 150 },
  { subject: "Energie", A: 100, fullMark: 150 },
  { subject: "Cardio", A: 80, fullMark: 150 },
];

const activityDataMock = [
  { day: "L", activityDuration: 68 },
  { day: "M", activityDuration: 120.5 },
  { day: "Me", activityDuration: 67.5 },
  { day: "J", activityDuration: 61.5 },
  { day: "V", activityDuration: 53.5 },
  { day: "S", activityDuration: 10.5 },
  { day: "D", activityDuration: 66.5 },
];

const objectiveScoreDataMock = [{ name: "Score", value: 12, fill: "#FF0000" }];

const nutritionData = [
  {
    id: "calories",
    label: "Calories",
    value: "1,930kCal",
    iconPath: "./energy.svg",
    bgColor: "#FBEAEA",
  },
  {
    id: "proteins",
    label: "Protéines",
    value: "155g",
    iconPath: "chicken.svg",
    bgColor: "#E9F4FB",
  },
  {
    id: "carbs",
    label: "Glucides",
    value: "290g",
    iconPath: "apple.svg",
    bgColor: "#FAF6E5",
  },
  {
    id: "fats",
    label: "Lipides",
    value: "50g",
    iconPath: "cheeseburger.svg",
    bgColor: "#FBEAEF",
  },
];

export {
  dailyActivityDataMock,
  intensityDataMock,
  activityDataMock,
  objectiveScoreDataMock,
  nutritionData,
};
