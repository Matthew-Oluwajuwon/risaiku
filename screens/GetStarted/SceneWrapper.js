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
  const [buttonType, setButtonType] = useState("next");
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);
  const rotateSquare = () => {
    rotation.setValue(0);
    Animated.timing(rotation, {
      toValue: 1, // Rotate 360 degrees
      duration: 500, // Animation duration in milliseconds
      useNativeDriver: true,
    }).start(({ finished }) => {
      setIsAnimationFinished(finished);
    });
  };

  const rotateAnimation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: buttonType === "next" ? ["0deg", "360deg"] : ["360deg", "0deg"],
  });

  const onSceneChange = (type) => {
    setButtonType(type);
    rotateSquare();
    dispatch(
      setAllAppKeys({
        ...state,
        current: type?.toLowerCase() === "prev" ? state.current - 1 : state.current + 1,
      })
    );
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
          <Pressable onPress={() => onSceneChange("prev")} className="absolute left-3">
            <Image source={require("../../assets/icons/rounded-back-arrow.png")} />
          </Pressable>
        )}
        <Image source={require("../../assets/images/colored-logo.png")} />
      </View>
      <View className="flex-1 flex-row justify-between items-end relative">
        {steps[state.current].content}
        <Animated.Image
          source={
            state.current === 0
              ? require("../../assets/images/scene-one-circle.png")
              : state.current === 1
              ? require("../../assets/images/scene-two-circle.png")
              : require("../../assets/images/scene-three-circle.png")
          }
          className={`absolute -right-[50%] top-14`}
          style={{ transform: [{ rotate: rotateAnimation }] }}
        />
        {/* {(isAnimationFinished || state.current === 0) && (
          <Animated.Image
            source={
              state.current === 0
                ? require("../../assets/images/scene-one-image.png")
                : state.current === 1
                ? require("../../assets/images/scene-two-image.png")
                : require("../../assets/images/scene-three-image.png")
            }
            className="absolute bottom-[30%] right-[18%]"
          />
        )} */}
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
