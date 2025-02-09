import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

type EcoPointsCardProps = {
  progress: number;
  points: number;
};

export default function EcoPointsCard({
  progress,
  points,
}: EcoPointsCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Battle Pass Progress</Text>
      <View style={styles.progressContainer}>
        <Text
          style={styles.progressText}
        >{`Tier 3: Silver (${progress}%)`}</Text>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
        </View>
      </View>
      <Text style={styles.ecoPointsText}>{`+${points} EcoPoints`}</Text>
      <View style={styles.rewardsContainer}>
        <View style={styles.reward}>
          <FontAwesome5 name="medal" size={24} color="#007BFF" />
          <Text style={styles.rewardText}>Exclusive Badge</Text>
        </View>
        <View style={styles.reward}>
          <FontAwesome5 name="plane" size={24} color="#007BFF" />
          <Text style={styles.rewardText}>Flight Miles</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 16,
    padding: 16,
    marginVertical: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  progressContainer: {
    marginVertical: 12,
  },
  progressText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#32CD32",
  },
  ecoPointsText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007BFF",
    marginTop: 12,
  },
  rewardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  reward: {
    alignItems: "center",
  },
  rewardText: {
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 8,
    color: "#007BFF",
  },
});
