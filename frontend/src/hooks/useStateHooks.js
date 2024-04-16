import { useState } from "react";

export const useUserData = () => {
  const [userData, setUserData] = useState(null);
  return [userData, setUserData];
};

export const useUserName = () => {
  const [userName, setUserName] = useState([]);
  return [userName, setUserName];
};

export const useNutritionInfo = () => {
  const [nutritionInfo, setNutritionInfo] = useState([]);
  return [nutritionInfo, setNutritionInfo];
};

export const useDailyActivityData = () => {
  const [dailyActivityData, setDailyActivityData] = useState([]);
  return [dailyActivityData, setDailyActivityData];
};

export const useAverageSessionData = () => {
  const [averageSessionData, setAverageSessionData] = useState([]);
  return [averageSessionData, setAverageSessionData];
};

export const useScoreData = () => {
  const [scoreData, setScoreData] = useState([]);
  return [scoreData, setScoreData];
};

export const usePerformanceData = () => {
  const [performanceData, setPerformanceData] = useState([]);
  return [performanceData, setPerformanceData];
};
