import React from "react";
import { View } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
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

const ScanCodeIcon = () => (
  <View
    style={{
      width: 72,
      height: 72,
      borderRadius: 36,
      backgroundColor: "#2f7d31",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20, // Floating effect
    }}
  >
    <MaterialIcons name="qr-code-scanner" size={40} color="#E8F5E8" />
  </View>
);

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#2f7d31", // Green color for active tab
        tabBarInactiveTintColor: "#aaa", // Gray color for inactive tabs
        headerShown: false,
        tabBarStyle: {
          height: 80,
          paddingBottom: 20,
          backgroundColor: "#fff",
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: "600",
          marginTop: 3,
        },
        tabBarIcon: ({ focused, color }) => {
          switch (route.name) {
            case "index":
              return <HomeIcon color={focused ? "#2f7d31" : "#aaa"} />;
            case "routeSuggestions":
              return <ScanCodeIcon />;
            case "profile":
              return <ProfileIcon color={focused ? "#2f7d31" : "#aaa"} />;
            default:
              return null;
          }
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="routeSuggestions"
        options={{
          title: "",
          tabBarLabelStyle: { display: "none" }, // Hide label for floating button
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
}
