import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";

export default function WelcomePopup({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.content}>
          {/* Image */}
          <Image
            source={require("../assets/images/world.png")} // Replace with your world image
            style={styles.image}
          />

          {/* Slogan */}
          <Text style={styles.slogan}>
            For a bluer sky, rewarding green flights!
          </Text>

          {/* Description */}
          <Text style={styles.description}>
            Track your carbon footprint with Greenpass and earn rewards for
            eco-friendly flights.
          </Text>

          {/* Button */}
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start", // Align content upwards
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: 50, // Start content closer to the top
  },
  image: {
    width: "100%",
    height: 400,
    resizeMode: "contain",
    marginBottom: 16, // Reduced space below the image
  },
  slogan: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#000",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    textAlign: "left",
    width: "100%",
    marginBottom: 12,
    paddingLeft: 40,
  },
  description: {
    fontSize: 17,
    color: "#666",
    textAlign: "left",
    lineHeight: 20,
    marginBottom: 12,
    width: "90%",
    paddingLeft: 20,
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
