import { View, Text, useColorScheme, Pressable } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MainTabParamList, RootTabScreenProps } from "../types";
import { FontAwesome } from "@expo/vector-icons";
import TabOneScreen from "../src/screens/TabOneScreen";
import TabTwoScreen from "../src/screens/TabTwoScreen";
import Colors from "../constants/Colors";

import { Fontisto } from "@expo/vector-icons";
import ChatScreen from "../src/screens/ChatScreen";

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

const MainTabNavigator = () => {
  const colorScheme = useColorScheme();
  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: Colors.light.background,
        tabBarStyle: {
          backgroundColor: Colors.light.tint,
        },
        tabBarIndicatorStyle: {
          backgroundColor: Colors.light.background,
          height: 3,
        },
        tabBarLabelStyle: { fontWeight: "bold" },
        tabBarShowIcon: true,
      }}
    >
      <MainTab.Screen
        name="Camera"
        component={TabTwoScreen}
        options={({ navigation }: RootTabScreenProps<"Camera">) => ({
          tabBarIcon: ({ color }) => (
            <Fontisto name="camera" color={color} size={18} />
          ),
          tabBarLabel: () => null,
        })}
      />
      <MainTab.Screen name="Chats" component={ChatScreen} />
      <MainTab.Screen name="Status" component={TabTwoScreen} />
      <MainTab.Screen name="Calls" component={TabTwoScreen} />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
