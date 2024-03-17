import React, { useState } from "react";
import { View, Pressable, Image, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { TextInput, Checkbox } from "react-native-paper";
import KeyboadAvoidingContainer from "../../../components/KeyboadAvoidingContainer/KeyboadAvoidingContainer";

const Signup = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const onNavigate = (path) => {
    navigation.navigate(path);
  };

  return (
    <SafeAreaView className="flex-1 items-center bg-white">
      <KeyboadAvoidingContainer>
        <ScrollView className="w-full flex-1">
          <View className="flex-row items-center w-full justify-center my-10 relative">
            <Pressable onPress={() => navigation.goBack()} className="absolute left-3">
              <Image source={require("../../../assets/icons/back-arrow.png")} />
            </Pressable>
            <Image source={require("../../../assets/images/colored-logo.png")} />
          </View>
          <View className="mb-5">
            <Text className="text-center font-medium text-3xl">Sign up on Risaiku for free</Text>
          </View>
          <View className="w-full items-center px-3">
            <View className="w-full gap-4">
              <View>
                <TextInput
                  underlineColor="#007a721a"
                  mode="outlined"
                  className="bg-[#007A721A] outline-[none!important] rounded-[10px] p-1"
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
                  className="bg-[#007A721A] outline-[none!important] rounded-[10px] p-1"
                  placeholderTextColor="#33333380"
                  placeholder="Email"
                  outlineColor="#007a721a"
                  keyboardType="email-address"
                  label="Email"
                  activeOutlineColor="#007a721a"
                  outlineStyle={{ borderWidth: 0, borderRadius: 10 }}
                />
              </View>
              <View>
                <TextInput
                  underlineColor="#007a721a"
                  mode="outlined"
                  className="bg-[#007A721A] outline-[none!important] rounded-[10px] p-1"
                  placeholderTextColor="#33333380"
                  placeholder="Phone number"
                  outlineColor="#007a721a"
                  keyboardType="numeric"
                  label="Phone number"
                  activeOutlineColor="#007a721a"
                  outlineStyle={{ borderWidth: 0, borderRadius: 10 }}
                />
              </View>
              <View>
                <TextInput
                  underlineColor="#007a721a"
                  mode="outlined"
                  outlineColor="#007a721a"
                  className="bg-[#007A721A]  outline-[none!important] rounded-[10px] p-1"
                  secureTextEntry={!isPasswordShown}
                  placeholderTextColor="#33333380"
                  placeholder="Password"
                  label="Password"
                  activeOutlineColor="#007a721a"
                  outlineStyle={{ borderWidth: 0, borderRadius: 10 }}
                  right={
                    <TextInput.Icon icon={isPasswordShown ? "eye-outline" : "eye-off-outline"} color="#33333350" onPress={() => setIsPasswordShown(!isPasswordShown)} />
                  }
                />
              </View>
              <View className="flex-row items-center w-[80%] gap-2">
                <Checkbox status="checked" label="g" color="#007a72" />
                <Text className="text-base">
                  By creating an account you are agreeing to our <Text className="text-[#007A72] underline">Terms and conditions</Text>
                </Text>
              </View>
              <View className="flex-row w-full">
                <Pressable onPress={() => onNavigate("OtpVerification")} className={`bg-[#007A72] w-full mt-5 rounded-full p-4 items-center`}>
                  <Text className="text-[#ffffff!important] text-base font-medium">Sign up</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <Pressable className="mt-8 items-center" onPress={() => onNavigate("Login")}>
            <Text className="font-medium text-base">
              Already have an account? <Text className="text-[#007A72]">Sign in</Text>
            </Text>
          </Pressable>
        </ScrollView>
      </KeyboadAvoidingContainer>
      <StatusBar backgroundColor="transparent" />
    </SafeAreaView>
  );
};

export default Signup;
