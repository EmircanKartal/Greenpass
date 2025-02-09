import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import Header from "@/components/Header";
import EcoPointsCard from "@/components/EcoPointsCard";
import RecentActivitiesCard from "@/components/recentActivitesCard";
import UserCard from "@/components/UserCard";
import happyManProfile from "../../assets/images/happy-man-profile.jpeg";
import WelcomePopup from "@/components/WelcomePopup";

const activities = [
  {
    title: "Eco Flight with Turkish Airlines",
    date: "April 5, 2023",
    points: "+200 EcoPoints",
    logo: require("@/assets/images/turkish-airlines-logo.png"),
  },
  {
    title: "Eco Flight with A-Jet",
    date: "April 8, 2023",
    points: "+150 EcoPoints",
    logo: require("@/assets/images/a-jet.png"),
  },
  {
    title: "Eco Flight with Sun Express",
    date: "April 12, 2023",
    points: "+180 EcoPoints",
    logo: require("@/assets/images/sun-express.png"),
  },
];

const userProfile = {
  name: "Hazerfen Çelebi",
  points: 4750,
  level: "Eco Pioneer",
  battlePassProgress: 75,
  avatarUrl: happyManProfile,
};

export default function HomeScreen() {
  const [isPopupVisible, setPopupVisible] = useState(true);

  return (
    <View style={styles.container}>
      {/* Welcome Pop-Up */}
      <WelcomePopup
        visible={isPopupVisible}
        onClose={() => setPopupVisible(false)}
      />

      {/* Header */}
      <Header />

      <ScrollView contentContainerStyle={styles.content}>
        {/* User Card */}
        <UserCard profile={userProfile} />

        <EcoPointsCard progress={72} />

        <Text style={styles.subtitle}>Recent Activities</Text>
        {activities.map((activity, index) => (
          <RecentActivitiesCard key={index} activity={activity} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
});
