import { useContext } from "react";
import { MockDataContext } from "../mock/mockDataContext";

export const useMockDataContext = () => {
  const { useMock } = useContext(MockDataContext);
  return useMock;
};
