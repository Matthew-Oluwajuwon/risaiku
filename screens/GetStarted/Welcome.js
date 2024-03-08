import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Welcome = ({ navigation }) => {
  const onNavigate = (path) => {
    navigation.navigate(path);
  };

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
        <TouchableOpacity onPress={() => onNavigate("Signup")} className={`bg-[#007A72] rounded-full p-4 items-center `}>
          <Text className="text-[#ffffff!important] text-base font-medium">Create an account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate("Login")} className={`border-2 border-[#007A72] rounded-full p-3 items-center `}>
          <Text className="text-[#007A72!important] text-base font-medium">Sign in</Text>
        </TouchableOpacity>
      </View>
      <View className="justify-end flex-1">
        <Image source={require("../../assets/images/welcome-image.png")} className="" />
      </View>
      <StatusBar backgroundColor="transparent" />
    </SafeAreaView>
  );
};

export default Welcome;
