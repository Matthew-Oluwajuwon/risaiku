import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Account, Home, Notifications, Report } from "./screens";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

export function AuthTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#007A72",
        tabBarInactiveTintColor: "#C4C4C4",
        tabBarLabelStyle: { fontSize: 16, borderColor: "white" },
        tabBarStyle: { borderTopWidth: 0, padding: 5, borderColor: "white" },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ size, focused }) => <Ionicons name="home" color={focused ? "#007A72" : "#C4C4C4"} size={size} />,
          headerShown: false,
        }}
        component={Home}
      />
        
      <Tab.Screen
        name="Report"
        options={{
          tabBarIcon: ({ focused, size }) => <Ionicons name="videocam" color={focused ? "#007A72" : "#C4C4C4"} size={size} />,
          headerShown: false,
        }}
        component={Report}
      />
      <Tab.Screen
        name="Notifications"
        options={{
          tabBarIcon: ({ focused, size }) => <Ionicons name="notifications" color={focused ? "#007A72" : "#C4C4C4"} size={size} />,
          headerShown: false,
        }}
        component={Notifications}
      />
      <Tab.Screen
        name="Account"
        options={{
          tabBarIcon: ({ focused, size }) => <Ionicons name="person-circle-outline" color={focused ? "#007A72" : "#C4C4C4"} size={size} />,
          headerShown: false,
        }}
        component={Account}
      />
    </Tab.Navigator>
  );
}
