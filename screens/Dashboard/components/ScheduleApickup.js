import { View, Text, TouchableOpacity, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";

const ScheduleApickup = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-white px-5 mt-2">
      <View className=" flex flex-row items-center gap-16">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../../../assets/icons/back-arrow.png")} />
        </TouchableOpacity>
        <Text className="font-semibold mt-2">Schedule Pickup</Text>
      </View>
      <View>
        <Picker mode="dropdown">
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
      <Text className="font-semibold mt-2 text-[#007A72]">Waste Category</Text>
      <Text className="font-medium mt-2 text-[#007A72]">Number of Bags</Text>
      <View>
        <TextInput
          underlineColor="#007a721a"
          mode="outlined"
          className="bg-[#007A721A] outline-[none!important] rounded-md p-1"
          placeholderTextColor="#00000080"
          placeholder="Please indicate the number of bags"
          outlineColor="#007a721a"
          label="Please indicate the number of bags"
          activeOutlineColor="#007a721a"
          outlineStyle={{ borderWidth: 0, borderRadius: 10 }}
        />
      </View>
      <Text className="font-semibold mt-2 text-[#007A72]">Extra Information</Text>
      <View>
        <TextInput
          underlineColor="#007a721a"
          mode="outlined"
          className="bg-[#007A721A] outline-[none!important] rounded-md p-1"
          placeholderTextColor="#00000080"
          placeholder="Please indicate if its wood/metal etc"
          outlineColor="#007a721a"
          label="Please indicate if its wood/metal etc"
          activeOutlineColor="#007a721a"
          outlineStyle={{ borderWidth: 0, borderRadius: 10 }}
        />
      </View>
      <Text className="font-semibold mt-2 text-[#007A72]">Pick up address</Text>
      <View>
        <TextInput
          underlineColor="#007a721a"
          mode="outlined"
          className="bg-[#007A721A] outline-[none!important] rounded-md p-1"
          placeholderTextColor="#00000080"
          placeholder="Please enter your pick up address"
          outlineColor="#007a721a"
          label="Please enter your pick up address"
          activeOutlineColor="#007a721a"
          outlineStyle={{ borderWidth: 0, borderRadius: 10 }}
        />
      </View>
      <Text className="font-semibold mt-2 text-[#007A72]">Pick up date</Text>
      <Text className="font-semibold mt-2 text-[#007A72]">Pick up time</Text>
    </SafeAreaView>
  );
};

export default ScheduleApickup;
