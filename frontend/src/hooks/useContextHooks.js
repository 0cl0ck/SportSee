import { useContext } from "react";
import { MockDataContext } from "../utils/mockDataContext";

export const useMockDataContext = () => {
  const { useMock } = useContext(MockDataContext);
  return useMock;
};
