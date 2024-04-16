const nameMock = "John Doe";

const dailyActivityDataMock = [
  {
    day: "1",
    kilogram: 90,
    calories: 240,
  },
  {
    day: "2",
    kilogram: 87,
    calories: 220,
  },
  {
    day: "3",
    kilogram: 85,
    calories: 280,
  },
  {
    day: "4",
    kilogram: 82,
    calories: 500,
  },
  {
    day: "5",
    kilogram: 79,
    calories: 160,
  },
  {
    day: "6",
    kilogram: 81,
    calories: 162,
  },
  {
    day: "7",
    kilogram: 78,
    calories: 390,
  },
];

const intensityDataMock = [
  { kind: "Endurance", value: 90 },
  { kind: "Force", value: 70 },
  { kind: "Energie", value: 100 },
  { kind: "Intensité", value: 50 },
  { kind: "Vitesse", value: 110 },
  { kind: "Cardio", value: 80 },
];

const activityDataMock = [
  { day: 1, sessionLength: 68 },
  { day: 2, sessionLength: 120.5 },
  { day: 3, sessionLength: 67.5 },
  { day: 4, sessionLength: 61.5 },
  { day: 5, sessionLength: 53.5 },
  { day: 6, sessionLength: 10.5 },
  { day: 7, sessionLength: 48.5 },
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
  nameMock,
  dailyActivityDataMock,
  intensityDataMock,
  activityDataMock,
  objectiveScoreDataMock,
  nutritionData,
};
