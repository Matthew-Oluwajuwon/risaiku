import { Image, Platform, Pressable, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";
import { useSelector } from "react-redux";

const Profile = () => {
  const state = useSelector((state) => {
    return state.app;
  });
  return (
    <View>
      <View className="items-center justify-center mt-5 mb-3">
        <Image source={require("../../assets/images/avatar-big.png")} />
        <Text>Tap to change photo</Text>
      </View>
      <View className="">
        <View className="mb-3">
          <Text className="font-medium mb-2 text-[#007A72]">Full Name</Text>
          <TextInput
            underlineColor="#007a721a"
            mode="outlined"
            className="rounded-md"
            placeholderTextColor="#00000080"
            placeholder="Amaremo Olubunmi"
            outlineColor="#007a721a"
            // label="Full Name"
            activeOutlineColor="#007a721a"
            outlineStyle={{
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "#c4c4c4",
              backgroundColor: "#ffffff",
            }}
          />
        </View>
        <View className="mb-3">
          <Text className="font-medium mb-2 text-[#007A72]">Phone Number</Text>
          <TextInput
            underlineColor="#007a721a"
            mode="outlined"
            className="rounded-md"
            placeholderTextColor="#00000080"
            placeholder="07031377214"
            outlineColor="#007a721a"
            // label="Full Name"
            activeOutlineColor="#007a721a"
            keyboardType="number-pad"
            outlineStyle={{
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "#c4c4c4",
              backgroundColor: "#ffffff",
            }}
          />
        </View>
        <View className="mb-3">
          <Text className="font-medium mb-2 text-[#007A72]">Home Address</Text>
          <TextInput
            underlineColor="#007a721a"
            mode="outlined"
            className="rounded-md"
            placeholderTextColor="#00000080"
            placeholder="5th avenue, 52 road, house 53, Festac."
            outlineColor="#007a721a"
            // label="Full Name"
            activeOutlineColor="#007a721a"
            outlineStyle={{
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "#c4c4c4",
              backgroundColor: "#ffffff",
            }}
          />
        </View>
        <View className="mb-3">
          <Text className="font-semibold mt-1 text-[#007A72]">Gender</Text>
          <View className={`border border-[#c4c4c4] rounded-[10px] mt-2 ${Platform.OS === "ios" && "h-14 pl-4 pt-4 flex-row items-center"}`}>
            <RNPickerSelect
              onValueChange={(value) => {}}
              value={state.request?.wasteCategory}
              modalProps={{borderColor: "#ff0000"}}
              style={{ width: 100 }}
              items={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
              ]}
            />
          </View>
        </View>
        <Pressable className={`bg-[#007A72] w-full mt-1 mx-auto rounded-full p-3 items-center`}>
          <Text className="text-[#ffffff!important] text-base font-medium">Update Changes</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Profile;
