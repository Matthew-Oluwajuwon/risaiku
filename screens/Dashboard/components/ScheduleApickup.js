import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import RNPickerSelect from "react-native-picker-select";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import { useSelector } from "react-redux";
import useSetRequest from "../../../hooks/useSetRequest";
import { StatusBar } from "expo-status-bar";
import KeyboadAvoidingContainer from "../../../components/KeyboadAvoidingContainer/KeyboadAvoidingContainer";
import useChangeCurrent from "../../../hooks/useChangeCurrent";

const ScheduleApickup = () => {
  const state = useSelector((state) => {
    return state.app;
  });
  const { onChangeText } = useSetRequest();
  const onChangeCurrentStep = useChangeCurrent();

  return (
    <SafeAreaView className="flex-1 bg-white px-5 mt-2">
      <KeyboadAvoidingContainer>
        <ScrollView>
          <View className="flex-row items-center justify-center relative my-3">
            <TouchableOpacity onPress={() => onChangeCurrentStep(0)} className="absolute left-0 ">
              <Image source={require("../../../assets/icons/back-arrow.png")} />
            </TouchableOpacity>
            <Text className="font-semibold text-base">Schedule Pick up</Text>
          </View>
          <View className="mb-5">
            <Text className="font-semibold mt-2 text-[#007A72]">Waste Category</Text>
            <View className="border border-[#c4c4c4] rounded-[10px] mt-2 h-14 p-4">
              <RNPickerSelect
                onValueChange={(value) => onChangeText("wasteCategory", value)}
                value={state.request?.wasteCategory}
                modalProps={{}}
                items={[
                  { label: "Football", value: "football" },
                  { label: "Baseball", value: "baseball" },
                  { label: "Hockey", value: "hockey" },
                ]}
              />
            </View>
          </View>
          <View className="mb-5">
            <Text className="font-medium mt-2 text-[#007A72]">Number of Bags</Text>
            <TextInput
              underlineColor="#007a721a"
              mode="outlined"
              className="rounded-md p-1"
              placeholderTextColor="#00000080"
              placeholder="Please indicate the number of bags"
              outlineColor="#007a721a"
              label="Please indicate the number of bags"
              activeOutlineColor="#007a721a"
              outlineStyle={{ borderWidth: 1, borderRadius: 10, borderColor: "#c4c4c4", backgroundColor: "#ffffff" }}
            />
          </View>
          <View className="mb-5">
            <Text className="font-semibold mt-2 text-[#007A72]">Extra Information</Text>
            <TextInput
              underlineColor="#007a721a"
              mode="outlined"
              className="rounded-md p-1"
              placeholderTextColor="#00000080"
              placeholder="Please indicate if its wood/metal etc"
              outlineColor="#007a721a"
              label="Extra information"
              activeOutlineColor="#007a721a"
              outlineStyle={{ borderWidth: 1, borderRadius: 10, borderColor: "#c4c4c4", backgroundColor: "#ffffff" }}
            />
          </View>
          <View className="mb-5">
            <Text className="font-semibold mt-2 text-[#007A72]">Pick up address</Text>
            <TextInput
              underlineColor="#007a721a"
              mode="outlined"
              className="rounded-md p-1"
              placeholderTextColor="#00000080"
              placeholder="Pick up address"
              outlineColor="#007a721a"
              label="Please enter your pick up address"
              activeOutlineColor="#007a721a"
              outlineStyle={{ borderWidth: 1, borderRadius: 10, borderColor: "#c4c4c4", backgroundColor: "#ffffff" }}
            />
          </View>
          <View className="mb-5">
            <Text className="font-semibold mt-2 text-[#007A72]">Pick up date</Text>
            <TextInput
              underlineColor="#007a721a"
              mode="outlined"
              className="rounded-md p-1"
              placeholderTextColor="#00000080"
              placeholder="Select date"
              outlineColor="#007a721a"
              label="Pick up date"
              activeOutlineColor="#007a721a"
              outlineStyle={{ borderWidth: 1, borderRadius: 10, borderColor: "#c4c4c4", backgroundColor: "#ffffff" }}
            />
          </View>
          <View className="mb-5">
            <Text className="font-semibold mt-2 text-[#007A72]">Pick up time</Text>
            <TextInput
              underlineColor="#007a721a"
              mode="outlined"
              className="rounded-md p-1"
              placeholderTextColor="#00000080"
              placeholder="Select time"
              outlineColor="#007a721a"
              label="Pick up time"
              activeOutlineColor="#007a721a"
              outlineStyle={{ borderWidth: 1, borderRadius: 10, borderColor: "#c4c4c4", backgroundColor: "#ffffff" }}
            />
          </View>
        </ScrollView>
      </KeyboadAvoidingContainer>
      <StatusBar backgroundColor="transparent" />
    </SafeAreaView>
  );
};

export default ScheduleApickup;
