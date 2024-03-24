const dailyActivityDataMock = [
  {
    day: "2020-07-01",
    kilogram: 90,
    calories: 240,
  },
  {
    day: "2020-07-02",
    kilogram: 87,
    calories: 220,
  },
  {
    day: "2020-07-03",
    kilogram: 85,
    calories: 280,
  },
  {
    day: "2020-07-04",
    kilogram: 82,
    calories: 500,
  },
  {
    day: "2020-07-05",
    kilogram: 79,
    calories: 160,
  },
  {
    day: "2020-07-06",
    kilogram: 81,
    calories: 162,
  },
  {
    day: "2020-07-07",
    kilogram: 78,
    calories: 390,
  },
];

const intensityDataMock = [
  { kind: "Intensité", value: 50 },
  { kind: "Vitesse", value: 110 },
  { kind: "Force", value: 70 },
  { kind: "Endurance", value: 90 },
  { kind: "Energie", value: 100 },
  { kind: "Cardio", value: 80 },
];

const activityDataMock = [
  { day: "L", sessionLength: 68 },
  { day: "M", sessionLength: 120.5 },
  { day: "Me", sessionLength: 67.5 },
  { day: "J", sessionLength: 61.5 },
  { day: "V", sessionLength: 53.5 },
  { day: "S", sessionLength: 10.5 },
  { day: "D", sessionLength: 66.5 },
];

const objectiveScoreDataMock = [{ score: 0.12 }];

const nutritionData = [
  {
    id: "calories",
    label: "Calories",
    value: "1,930kCal",
    iconPath: "/energy.svg",
    bgColor: "#FBEAEA",
  },
  {
    id: "proteins",
    label: "Protéines",
    value: "155g",
    iconPath: "/chicken.svg",
    bgColor: "#E9F4FB",
  },
  {
    id: "carbs",
    label: "Glucides",
    value: "290g",
    iconPath: "/apple.svg",
    bgColor: "#FAF6E5",
  },
  {
    id: "fats",
    label: "Lipides",
    value: "50g",
    iconPath: "/cheeseburger.svg",
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
