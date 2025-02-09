import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import Header from "@/components/Header";
import EcoPointsCard from "@/components/EcoPointsCard";
import RecentActivitiesCard from "@/components/recentActivitesCard";

const activities = [
  {
    title: "Eco Flight with Turkish Airlines",
    date: "April 5, 2023",
    points: "+200 EcoPoints",
    logo: require("@/assets/images/turkish-airlines-logo.png"), // Turkish Airlines logo
  },
  {
    title: "Eco Flight with A-Jet",
    date: "April 8, 2023",
    points: "+150 EcoPoints",
    logo: require("@/assets/images/a-jet.png"), // A-Jet logo
  },
  {
    title: "Eco Flight with Sun Express",
    date: "April 12, 2023",
    points: "+180 EcoPoints",
    logo: require("@/assets/images/sun-express.png"), // Sun Express logo
  },
];

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.subtitle}>Battle Pass Progress</Text>
        <EcoPointsCard progress={65} points={4750} />

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
