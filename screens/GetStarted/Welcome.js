import { View, Text, Image, Pressable, Animated, Easing } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Welcome = ({ navigation }) => {
  const [rotation] = useState(new Animated.Value(0)); // Initial value for rotation: 0 degrees
  const onNavigate = (path) => {
    navigation.navigate(path);
  };

  const rotateSquare = () => {
    rotation.setValue(0);
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1, // Rotate 360 degrees
        duration: 20000, // Animation duration in milliseconds
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();
  };

  const rotateAnimation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  useEffect(() => {
    rotateSquare();
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <View className={`mx-auto mt-7 px-3 flex-row justify-center  w-full relative`}>
        <Image source={require("../../assets/images/colored-logo.png")} />
      </View>
      <View className="items-center my-14">
        <Text className="font-bold text-4xl mb-3">Reduce,</Text>
        <Text className="font-bold text-4xl mb-3">Recycle, Reuse</Text>
        <Text className="text-[#007A72] font-bold text-4xl mb-3"> on the go.</Text>
      </View>
      <View className="gap-5 px-4">
        <Pressable onPress={() => onNavigate("Signup")} className={`bg-[#007A72] rounded-full p-4 items-center `}>
          <Text className="text-[#ffffff!important] text-base font-medium">Create an account</Text>
        </Pressable>
        <Pressable onPress={() => onNavigate("Login")} className={`border-2 border-[#007A72] rounded-full p-3 items-center `}>
          <Text className="text-[#007A72!important] text-base font-medium">Sign in</Text>
        </Pressable>
      </View>
      <View className="justify-end flex-1 relative">
        <Animated.Image style={{ transform: [{ rotate: rotateAnimation }] }} source={require("../../assets/images/welcome-image1.png")} className="absolute -bottom-48" />
      </View>
      <StatusBar backgroundColor="transparent" />
    </SafeAreaView>
  );
};

export default Welcome;
