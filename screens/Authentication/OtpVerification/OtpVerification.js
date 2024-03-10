import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import useSetRequest from "../../../hooks/useSetRequest";
import { useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import KeyboadAvoidingContainer from "../../../components/KeyboadAvoidingContainer/KeyboadAvoidingContainer";

const OtpVerification = ({ navigation }) => {
  const state = useSelector((state) => {
    return state.app;
  });
  const { onChangeText } = useSetRequest();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboadAvoidingContainer>
        <ScrollView className="flex-1 w-full">
          <View className="flex-row items-center w-full justify-center my-10 relative">
            <TouchableOpacity onPress={() => navigation.goBack()} className="absolute left-3">
              <Image source={require("../../../assets/icons/back-arrow.png")} />
            </TouchableOpacity>
          </View>
          <View className="items-center gap-5 mt-20">
            <Text className="text-2xl font-medium text-[#333333]">Verify your Phone Number</Text>
            <Text className="text-[#333333B2] text-center text-base leading-loose">Please enter the security code we sent to 07031377214</Text>
          </View>
          <Text className="text-[14px] mt-5 mx-auto">Please wait to receive OTP Verification Message</Text>
          <View className="my-10 mx-10">
            <SmoothPinCodeInput
              ref={this.pinInput}
              cellStyle={{
                borderColor: "#D9D9D9",
                borderWidth: 4,
                marginRight: 15,
                borderRadius: 5,
                width: 50,
                height: 50,
              }}
              cellStyleFocused={{
                borderColor: "#008000",
              }}
              containerStyle={{
                marginHorizontal: 15,
                width: "100%",
              }}
              textStyle={{
                fontSize: 24,
                color: "black",
              }}
              textStyleFocused={{
                color: "#007A72",
              }}
              onTextChange={(code) => onChangeText("code", code)}
              value={state.request?.code}
              onFulfill={this._checkCode}
              onBackspace={this._focusePrevInput}
            />
            <TouchableOpacity>
              <Text className="text-center underline mt-7 text-[14px] font-medium">Didn’t receive a code?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("OtpVerificationSuccess")} className={`bg-[#007A72] mt-10 rounded-full p-4 items-center`}>
              <Text className="text-[#ffffff!important] text-base font-medium">Done</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboadAvoidingContainer>
      <StatusBar backgroundColor="transparent" />
    </SafeAreaView>
  );
};

export default OtpVerification;
