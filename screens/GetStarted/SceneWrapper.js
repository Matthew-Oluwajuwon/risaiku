import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Animated, Image, Pressable, View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { setAllAppKeys } from "../../store";
import SceneOne from "./SceneOne";
import SceneTwo from "./SceneTwo";
import SceneThree from "./SceneThree";

const SceneWrapper = ({ navigation }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.app;
  });

  const [rotation] = useState(new Animated.Value(0)); // Initial value for rotation: 0 degrees
  const [scale] = useState(new Animated.Value(1)); // Initial value for scale: 1
  const [buttonType, setButtonType] = useState("next");

  const rotateImage = () => {
    rotation.setValue(0);
    Animated.timing(rotation, {
      toValue: 1, // Rotate 360 degrees
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: true,
    }).start();
  };
  const scaleImage = () => {
    scale.setValue(1);
    Animated.timing(scale, {
      toValue: 1, // Rotate 360 degrees
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: true,
    }).start();
  };

  const rotateAnimation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: buttonType === "prev" ? ["0deg", "180deg"] : ["180deg", "0deg"],
  });

  const imageAnimation = scale.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const onSceneChange = (type) => {
    setButtonType(type);
    dispatch(
      setAllAppKeys({
        ...state,
        current: type?.toLowerCase() === "prev" ? state.current - 1 : state.current + 1,
      })
    );
    scaleImage();
    rotateImage();
  };

  const steps = [
    {
      content: <SceneOne />,
    },
    {
      content: <SceneTwo />,
    },
    {
      content: <SceneThree />,
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#ffffff]">
      <View className={`mx-auto mt-7 px-3 flex-row justify-center  w-full relative`}>
        {state.current > 0 && (
          <Pressable onPress={() => onSceneChange("prev")} className={`absolute left-3`}>
            <Image source={require("../../assets/icons/rounded-back-arrow.png")} />
          </Pressable>
        )}
        <Image source={require("../../assets/images/colored-logo.png")} />
      </View>
      <View className="flex-1 flex-row justify-between items-end relative">
        {steps[state.current].content}
        <View className="flex-1 my-auto">
          <Animated.Image
            source={
              state.current === 0
                ? require("../../assets/images/circle-one.png")
                : state.current == 1
                ? require("../../assets/images/circle-two.png")
                : require("../../assets/images/circle-three.png")
            }
            className={`absolute -right-[50%] -top-32`}
            style={{ transform: [{ rotate: rotateAnimation }] }}
          />
          <Animated.Image
            source={
              state.current === 0
                ? require("../../assets/images/scene-one-image.png")
                : state.current === 1
                ? require("../../assets/images/scene-two-image.png")
                : require("../../assets/images/scene-three-image.png")
            }
            className="m-auto"
            style={{ opacity: imageAnimation }}
          />
        </View>
      </View>
      <View className={`h-20 flex-row justify-between items-center px-3`}>
        <Image
          source={
            state.current === 0
              ? require("../../assets/icons/bar-one.png")
              : state.current === 1
              ? require("../../assets/icons/bar-two.png")
              : require("../../assets/icons/bar-three.png")
          }
        />
        {state.current < 2 ? (
          <Pressable onPress={() => onSceneChange("next")}>
            <Image source={require("../../assets/icons/rounded-forward-arrow-filled.png")} />
          </Pressable>
        ) : (
          <Button onPress={() => navigation.navigate("Welcome")} className="bg-[#007A72] text-[#ffffff!important] py-2 rounded-full" mode="contained">
            Get started
          </Button>
        )}
      </View>
      <StatusBar backgroundColor="transparent" />
    </SafeAreaView>
  );
};

export default SceneWrapper;
