import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

type EcoPointsCardProps = {
  progress: number;
};

export default function EcoPointsCard({ progress }: EcoPointsCardProps) {
  return (
    <ImageBackground
      source={require("@/assets/images/airport.png")} // Replace with the actual path to your image
      style={styles.backgroundImage}
      imageStyle={styles.backgroundImageStyle}
    >
      <View style={styles.outerCard}>
        <View style={styles.innerCard}>
          {/* Title */}
          <Text style={styles.title}>GreenPass Progress</Text>

          {/* Progress Bar */}
          <View style={styles.progressContainer}>
            <Text style={styles.progressText}>{`Progress: ${progress}%`}</Text>
            <View style={styles.progressBarBackground}>
              <View
                style={[styles.progressBarFill, { width: `${progress}%` }]}
              />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: 200, // Adjust height as needed
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImageStyle: {
    borderRadius: 16,
  },
  outerCard: {
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white
    borderRadius: 16,
    padding: 16,
    width: "90%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  innerCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  progressContainer: {
    width: "100%",
    marginTop: 8,
  },
  progressText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
    textAlign: "center",
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#32CD32",
  },
});
