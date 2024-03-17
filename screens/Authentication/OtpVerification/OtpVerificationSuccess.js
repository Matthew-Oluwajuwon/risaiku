import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const OtpVerificationSuccess = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 items-center bg-white px-5">
      <View className="flex-1 items-center justify-center gap-8">
        <Image source={require("../../../assets/images/success.png")} />
        <View className="items-center">
          <Text className="text-[#007A72] font-bold text-3xl mb-5">Success!</Text>
          <Text className="font-medium text-lg">You are ready to start recycling.</Text>
        </View>
      </View>
        <Pressable onPress={() => navigation.navigate("Dashboard")} className={`bg-[#007A72] mb-6 rounded-full p-4 items-center w-full`}>
          <Text className="text-[#ffffff!important] text-base font-medium">Continue</Text>
        </Pressable>
      <StatusBar backgroundColor="transparent" />
    </SafeAreaView>
  );
};

export default OtpVerificationSuccess;
