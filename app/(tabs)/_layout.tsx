import React from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";

// Icon components
const HomeIcon = ({ color }: { color: string }) => (
  <AntDesign name="home" size={30} color={color} />
);
const ProfileIcon = ({ color }: { color: string }) => (
  <AntDesign name="user" size={32} color={color} />
);
const RoutesIcon = () => (
  <View
    style={{
      width: 72,
      height: 72,
      borderRadius: "100%",
      backgroundColor: "#2f7d31",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20, // To make the button hover a bit over the navbar
    }}
  >
    <AntDesign name="plus" size={40} color="white" />
  </View>
);

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          height: 80, // Increased navbar height
          paddingBottom: 20, // Padding for a cleaner look
          backgroundColor: "#fff", // Optional: Customize navbar color
        },
        tabBarLabelStyle: {
          fontSize: 15, // Larger text size for tab titles
          fontWeight: "600", // Bold text for better visibility
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: HomeIcon,
        }}
      />
      <Tabs.Screen
        name="routeSuggestions"
        options={{
          title: "",
          tabBarIcon: RoutesIcon,
          tabBarLabelStyle: { display: "none" }, // Hide label for floating button
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ProfileIcon,
        }}
      />
    </Tabs>
  );
}
