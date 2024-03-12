import { View, Text } from "react-native";
import React from "react";
import Dashboard from "./Dashboard";
import ScheduleApickup from "./components/ScheduleApickup";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((state) => {
    return state.app;
  });
 
  const steps = [
    {
      title: "Dashboard",
      Component: <Dashboard />,
    },
    {
      title: "ScheduleApickup",
      Component: <ScheduleApickup />,
    },
    {
      title: "ScheduleAdropoff",
      Component: <ScheduleApickup />,
    },
  ];
  return <View className="flex-1">{steps[state.current].Component}</View>;
};

export default Home;
