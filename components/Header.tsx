import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/LogoImg.png")}
          style={styles.logo}
        />
        <Text style={styles.logoText}>GREENPASS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center everything horizontally
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40, // Adjust the size of the logo image
    height: 40,
    marginRight: 8, // Add space between the logo and the text
  },
  logoText: {
    fontSize: 28, // Larger font size for the title
    fontWeight: "500", // Slightly lighter than bold
    color: "#333", // Dark gray color for the text
    letterSpacing: 3, // Add spacing between letters
    fontFamily: "sans-serif-light", // Use a clean sans-serif font
    textAlign: "center", // Align text properly
  },
});
