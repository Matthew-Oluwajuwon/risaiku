import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SceneWrapper, Welcome } from "./screens/GetStarted";
import { Dashboard, Login, OtpVerification, OtpVerificationSuccess, Signup } from "./screens";
import { AuthTabs } from "./AuthTabs";
import ScheduleApickup from "./screens/Dashboard/components/ScheduleApickup";

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SceneWrapper"
          component={SceneWrapper}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OtpVerification"
          component={OtpVerification}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OtpVerificationSuccess"
          component={OtpVerificationSuccess}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AuthTabs"
          component={AuthTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ScheduleApickup"
          component={ScheduleApickup}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacks;
