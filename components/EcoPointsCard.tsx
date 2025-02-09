import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

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
    backgroundColor: "rgba(255, 255, 255, 0.84)", // Semi-transparent white
    borderRadius: 16,
    padding: 26,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  innerCard: {
    backgroundColor: "rgba(255, 255, 255, 0.0)", // Semi-transparent white
    borderRadius: 12,
    padding: 30,

    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  progressContainer: {
    width: "100%",
    marginTop: 5,
  },
  progressText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#444",
    marginBottom: 16,
    textAlign: "center",
  },
  progressBarBackground: {
    height: 12,
    backgroundColor: "#e0e0e0",
    borderRadius: 6,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#32CD32",
  },
  button: {
    backgroundColor: "#2f7d31",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 28,
    width: "80%",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
