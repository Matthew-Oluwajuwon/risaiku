import { View, Text, TouchableOpacity, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";

const ScheduleApickup = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-white px-5 mt-2">
      <View className="flex-row items-center justify-center relative my-3">
        <TouchableOpacity onPress={() => navigation.goBack()} className="absolute left-0 ">
          <Image source={require("../../../assets/icons/back-arrow.png")} />
        </TouchableOpacity>
        <Text className="font-semibold text-base">Schedule Pick up</Text>
      </View>
      <View className="mb-5">
        <Text className="font-semibold mt-2 text-[#007A72]">Waste Category</Text>
        <Picker mode="dropdown" style={{ backgroundColor: "#ffffff" }} itemStyle={{borderRadius: 6, borderWidth: 1, borderColor: "#c4c4c4"}}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
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
          label="Please indicate if its wood/metal etc"
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
          placeholder="Please enter your pick up address"
          outlineColor="#007a721a"
          label="Please enter your pick up address"
          activeOutlineColor="#007a721a"
          outlineStyle={{ borderWidth: 1, borderRadius: 10, borderColor: "#c4c4c4", backgroundColor: "#ffffff" }}
        />
      </View>
      <Text className="font-semibold mt-2 text-[#007A72]">Pick up date</Text>
      <Text className="font-semibold mt-2 text-[#007A72]">Pick up time</Text>
    </SafeAreaView>
  );
};

export default ScheduleApickup;
