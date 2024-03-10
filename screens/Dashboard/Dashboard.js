import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Dashboard = () => {
    
    const DATA = [
        {
            id: "1",
            img: require("../../assets/images/slide-one.png")
        },
        {
            id: "2",
            img: require("../../assets/images/slide-two.png")
        },
    ]
    
    const Item = ({src}) => (
        <View className="relative w-80">
          <Image source={src} className="absolute top-0 left-0" />
        </View>
      );
    
  return (
    <SafeAreaView className="flex-1 bg-white px-5">
      <View className="my-7 flex-row justify-between">
        <View>
          <Text className="text-[#007A72] font-semibold text-3xl">Hi Priye75,</Text>
          <Text className="font-medium mt-2">Don't forget to recycle today!!!</Text>
        </View>
        <View>
          <Image source={require("../../assets/images/avatar.png")} />
        </View>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item src={item.img} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{ flexDirection: 'row', gap: 5, position: "relative" }}
        horizontal
      />
      <StatusBar backgroundColor="transparent" />
    </SafeAreaView>
  );
};

export default Dashboard;
