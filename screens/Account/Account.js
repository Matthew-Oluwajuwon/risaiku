import { View, Text, ScrollView, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Profile from "./Profile";

const Account = ({ navigation }) => {
  const [showProfile, setShowProfile] = useState(false);
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView className="flex-1 bg-white px-5">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View className="flex-row items-center justify-center relative my-3">
          <Pressable onPress={() => (showProfile ? setShowProfile(false) : handleBack())} className="absolute left-0 ">
            <Image source={require("../../assets/icons/back-arrow.png")} />
          </Pressable>
          <Text className="font-semibold text-base">{showProfile ? "Profile" : "Account"}</Text>
        </View>
        {showProfile ? (
          <Profile />
        ) : (
          <>
            <View className="flex-row justify-between my-6">
              <View className="gap-1">
                <Text className="font-bold text-base">Priye75</Text>
                <Text className="font-medium">Olubunmi Amaremo</Text>
                <Text className="text-[#00000080]">070313377214</Text>
              </View>
              <View>
                <Pressable onPress={() => setShowProfile(true)}>
                  <Image source={require("../../assets/images/avatar.png")} />
                </Pressable>
              </View>
            </View>
            <View className="flex-row mb-7 w-full gap-5">
              <View className="bg-[#007A71] h-20 w-[47%] rounded-md p-3">
                <View className="flex-row gap-2">
                  <Image source={require("../../assets/icons/coin.png")} />
                  <Text className="text-white">Risaiku coins</Text>
                </View>
                <Text className="text-white text-2xl mt-2">0</Text>
              </View>
              <View className="bg-[#000000] h-20 w-[47%] rounded-md p-3">
                <View className="flex-row gap-2">
                  <Image source={require("../../assets/icons/balance.png")} />
                  <Text className="text-white">Balance</Text>
                </View>
                <Text className="text-white text-2xl mt-2">$0</Text>
              </View>
            </View>
            <ScrollView className="gap-5 mb-5">
              <View className="flex-row justify-between items-center border border-[#C4C4C4] rounded-md p-4">
                <View className="flex-row gap-3 items-center">
                  <Image source={require("../../assets/icons/reportHistory.png")} />
                  <Text>Report History</Text>
                </View>
                <Image source={require("../../assets/icons/arrowForward.png")} />
              </View>
              <View className="flex-row justify-between items-center border border-[#C4C4C4] rounded-md p-4">
                <View className="flex-row gap-3 items-center">
                  <Image source={require("../../assets/icons/refer.png")} />
                  <Text>Refer & Earn</Text>
                </View>
                <Image source={require("../../assets/icons/arrowForward.png")} />
              </View>
              <View className="flex-row justify-between items-center border border-[#C4C4C4] rounded-md p-4">
                <View className="flex-row gap-3 items-center">
                  <Image source={require("../../assets/icons/contact.png")} />
                  <Text>Contact Us</Text>
                </View>
                <Image source={require("../../assets/icons/arrowForward.png")} />
              </View>
              <View className="flex-row justify-between items-center border border-[#C4C4C4] rounded-md p-4">
                <View className="flex-row gap-3 items-center">
                  <Image source={require("../../assets/icons/settings.png")} />
                  <Text>Settings</Text>
                </View>
                <Image source={require("../../assets/icons/arrowForward.png")} />
              </View>
              <View className="flex-row justify-between items-center border border-[#C4C4C4] rounded-md p-4">
                <View className="flex-row gap-3 items-center">
                  <Image source={require("../../assets/icons/logout.png")} />
                  <Text>Log Out</Text>
                </View>
                <Image source={require("../../assets/icons/arrowForward.png")} />
              </View>
            </ScrollView>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;
