import React, { useState } from "react";
import { View, Pressable, Image, Text, ScrollView, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-paper";
import KeyboadAvoidingContainer from "../../../components/KeyboadAvoidingContainer/KeyboadAvoidingContainer";
import { useDispatch, useSelector } from "react-redux";
import { setAllAppKeys } from "../../../store";
import useSetRequest from "../../../hooks/useSetRequest";
import { signInWithEmailAndPassword } from "@firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FIREBASE_AUTH } from "../../../firebase.config";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.app;
  });
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const onNavigate = (path) => {
    navigation.navigate(path);
  };
  const { onChangeText } = useSetRequest();
  const [loading, setLoading] = useState(false);

  const onChangeCurrentStep = (screen) => {
    onNavigate(screen);
    dispatch(
      setAllAppKeys({
        ...state,
        current: 0,
      })
    );
  };

  const onLogin = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(FIREBASE_AUTH, state.request?.email, state.request?.password);
      await AsyncStorage.setItem("***", response._tokenResponse?.idToken);
      onChangeCurrentStep("AuthTabs");
      setLoading(false);
    } catch (error) {
      console.log("err", error);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboadAvoidingContainer>
        <ScrollView className="w-full flex-1">
          <View className="flex-row items-center w-full justify-center my-10 relative">
            <Pressable onPress={() => navigation.goBack()} className="absolute left-3">
              <Image source={require("../../../assets/icons/back-arrow.png")} />
            </Pressable>
            <Image source={require("../../../assets/images/colored-logo.png")} />
          </View>
          <View className="my-10 w-full">
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
                  onChangeText={(e) => onChangeText("email", e)}
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
                  className="bg-[#007A721A!important] autofill:bg-[#007A721A] outline-[none!important] rounded-md p-1"
                  secureTextEntry={!isPasswordShown}
                  placeholderTextColor="#33333380"
                  placeholder="Password"
                  label="Password"
                  onChangeText={(e) => onChangeText("password", e)}
                  activeOutlineColor="#007a721a"
                  outlineStyle={{ borderWidth: 0, borderRadius: 10 }}
                  right={
                    <TextInput.Icon icon={isPasswordShown ? "eye-outline" : "eye-off-outline"} color="#33333350" onPress={() => setIsPasswordShown(!isPasswordShown)} />
                  }
                />
              </View>
            </View>
            <Pressable onPress={onLogin} className={`bg-[#007A72] w-[95%] mt-10 rounded-full p-4 items-center`}>
              {loading ? <ActivityIndicator color="#ffffff" /> : <Text className="text-[#ffffff!important] text-base font-medium">Sign in</Text>}
            </Pressable>
          </View>
          <View className="items-center">
            <Pressable className="mt-16" onPress={() => onNavigate("ForgotPassword")}>
              <Text className="text-[#007A72] font-medium text-base">Forgot Password?</Text>
            </Pressable>
            <Pressable className="mt-16" onPress={() => onNavigate("Signup")}>
              <Text className="font-medium text-base">
                No account? <Text className="text-[#007A72] ">Create one</Text>
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboadAvoidingContainer>
      <StatusBar backgroundColor="transparent" />
    </SafeAreaView>
  );
};

export default Login;
