import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

type Activity = {
  title: string;
  date: string;
  points: string;
  logo: any;
};

type RecentActivitiesCardProps = {
  activity: Activity;
};

export default function RecentActivitiesCard({
  activity,
}: RecentActivitiesCardProps) {
  const isPositive = activity.points.includes("+");

  return (
    <View style={styles.card}>
      <Image source={activity.logo} style={styles.logo} />
      <View style={styles.details}>
        <Text style={styles.activityTitle}>{activity.title}</Text>
        <Text style={styles.activityDate}>{activity.date}</Text>
      </View>
      <Text
        style={[
          styles.points,
          { color: isPositive ? "#32CD32" : "#FF6347" }, // Green for positive, red for negative
        ]}
      >
        {activity.points}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  activityDate: {
    fontSize: 12,
    color: "#888",
  },
  points: {
    fontSize: 16,
    fontWeight: "600",
  },
});
