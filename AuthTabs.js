import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Account, Dashboard, Notifications, Report } from "./screens";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

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
        component={Dashboard}
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
