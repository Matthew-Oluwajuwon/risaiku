import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-paper";

const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const onNavigate = (path) => {
    navigation.navigate(path);
  };

  return (
    <SafeAreaView className="flex-1 items-center">
      <View className="flex-row items-center w-full justify-center my-5 relative">
        <TouchableOpacity onPress={() => navigation.goBack()} className="absolute left-3">
          <Image source={require("../../assets/icons/back-arrow.png")} />
        </TouchableOpacity>
        <Image source={require("../../assets/images/colored-logo.png")} />
      </View>
      <View className="my-10">
        <Text className="text-center font-medium text-3xl">Welcome back</Text>
      </View>
      <View className="w-full px-3 items-center">
        <View className="w-full gap-5">
          <View>
            <TextInput
              underlineColor="#007a721a"
              mode="outlined"
              className="bg-[#007A721A] outline-[none!important] rounded-md p-1"
              placeholderTextColor="#33333380"
              placeholder="Username"
              outlineColor="#007a721a"
              label="Username"
              activeOutlineColor="#007a721a"
              outlineStyle={{ borderWidth: 0, borderRadius: 10 }}
            />
          </View>
          <View>
            <TextInput
              underlineColor="#007a721a"
              mode="outlined"
              outlineColor="#007a721a"
              className="bg-[#007A721A]  outline-[none!important] rounded-md p-1"
              secureTextEntry={!isPasswordShown}
              placeholderTextColor="#33333380"
              placeholder="Password"
              label="Password"
              activeOutlineColor="#007a721a"
              outlineStyle={{ borderWidth: 0, borderRadius: 10 }}
              right={<TextInput.Icon icon={isPasswordShown ? "eye-outline" : "eye-off-outline"} color="#33333350" onPress={() => setIsPasswordShown(!isPasswordShown)} />}
            />
          </View>
        </View>
        <TouchableOpacity className={`bg-[#007A72] w-[95%] mt-10 rounded-full p-4 items-center`}>
          <Text className="text-[#ffffff!important] text-base font-medium">Sign in</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="mt-16" onPress={() => onNavigate("ForgotPassword")}>
        <Text className="text-[#007A72] font-medium text-base">Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity className="mt-16" onPress={() => onNavigate("Signup")}>
        <Text className="font-medium text-base">
          No account? <Text className="text-[#007A72] ">Create one</Text>
        </Text>
      </TouchableOpacity>
      <StatusBar backgroundColor="transparent" />
    </SafeAreaView>
  );
};

export default Login;
