import { View, Text, Image, FlatList, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Dashboard = () => {
  const DATA = [
    {
      id: "1",
      img: require("../../assets/images/slide-one.png"),
    },
    {
      id: "2",
      img: require("../../assets/images/slide-two.png"),
    },
  ];

  const [distanceFromEnd, setDistanceFromEnd] = useState(1);
  const Item = ({ src, id }) => (
    <View className="relative w-72">
      <Image source={src} className="absolute top-0 left-0 w-full rounded-lg" />
      <View className="absolute bottom-50  w-full items-center translate-y-7">
        {id === "1" ? (
          <View className="gap-4">
            <Text className="text-white font-medium text-xl">
              <Image source={require("../../assets/images/coin.png")} />
              Risaiku Coins
            </Text>
            <Text className="text-center text-white text-4xl font-semibold">0</Text>
          </View>
        ) : (
          <View className="gap-4">
            <Text className="text-white font-medium text-xl">Available Balance</Text>
            <Text className="text-center text-white text-4xl font-semibold">$0.00</Text>
          </View>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white px-5">
      <View className="my-5 flex-row justify-between">
        <View>
          <Text className="text-[#007A72] font-semibold text-3xl">Hi Priye75,</Text>
          <Text className="font-medium mt-2">Don't forget to recycle today!!!</Text>
        </View>
        <View>
          <Image source={require("../../assets/images/avatar.png")} />
        </View>
      </View>
      <ScrollView>
        <View style={{ height: 140 }}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item src={item.img} id={item.id} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ flexDirection: "row", gap: 15, position: "relative" }}
            onEndReached={({ distanceFromEnd }) => {
              setDistanceFromEnd(distanceFromEnd);
            }}
            alwaysBounceHorizontal
            bounces
            horizontal
          />
        </View>
        <View className="flex-row justify-center gap-5 items-center my-2 mb-7">
          <View className={`h-2 w-8 ${distanceFromEnd === 0 ? "bg-[#007A7280]" : "bg-[#007A72]"} rounded-full`} />
          <View className={`h-2 w-8 ${distanceFromEnd === 0 ? "bg-[#007A72]" : "bg-[#007A7280]"} rounded-full`} />
        </View>
        <View className="w-full mt-4 flex-row gap-3 flex-wrap justify-between mx-auto">
          <View className="basis-[46%] relative h-40 bg-[#FFF9CC] rounded-[25px]">
            <Image source={require("../../assets/images/yellow.png")} className="absolute right-3 top-3" />
            <Text className="text-[#D4BA00] font-semibold text-base absolute bottom-5 left-5 w-20">Schedule a Pick up</Text>
          </View>
          <View className="basis-[46%] relative h-40 bg-[#E5F5CC] rounded-[25px]">
            <Image source={require("../../assets/images/green.png")} className="absolute right-3 top-3" />
            <Text className="text-[#6AAC00] font-semibold text-base absolute bottom-5 left-5 w-20">Schedule a Drop off</Text>
          </View>
          <View className="basis-[46%] relative h-40 bg-[#D9ECFF] rounded-[25px]">
            <Image source={require("../../assets/images/blue.png")} className="absolute right-3 top-3" />
            <Text  className="text-[#3684D4] font-semibold text-base absolute bottom-5 left-5 w-20">Zero waste Store</Text>
          </View>
          <View className="basis-[46%] relative h-40 bg-[#FCD9CC] rounded-[25px]">
            <Image source={require("../../assets/images/red.png")} className="absolute right-3 top-3" />
            <Text  className="text-[#C73500] font-semibold text-base absolute bottom-5 left-5 w-20">Waste Management</Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="transparent" />
    </SafeAreaView>
  );
};

export default Dashboard;
