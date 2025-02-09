import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Header from "@/components/Header";
import EcoPointsCard from "@/components/EcoPointsCard";
import UserCard from "@/components/UserCard";
import WelcomePopup from "@/components/WelcomePopup";
import happyManProfile from "../../assets/images/happy-man-profile.jpeg";
import marketImage from "../../assets/images/marketplace.jpg";
import shoppingMallImage from "../../assets/images/shopping-mall.png"; // Ensure you have this image in the assets

const activities = [
  {
    title: "Eco Flight with Turkish Airlines",
    date: "April 5, 2023",
    points: "+200 EP",
    logo: require("@/assets/images/turkish-airlines-logo.png"),
  },
  {
    title: "Eco Flight with A-Jet",
    date: "April 8, 2023",
    points: "+150 EP",
    logo: require("@/assets/images/a-jet.png"),
  },
  {
    title: "Eco Flight with Sun Express",
    date: "April 12, 2023",
    points: "+180 EP",
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

type RootStackParamList = {
  routeSuggestions: undefined;
  market: undefined;
};

export default function HomeScreen() {
  const [isPopupVisible, setPopupVisible] = useState(true);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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

        {/* Eco Points Card */}
        <EcoPointsCard progress={72} />

        {/* Claim Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("routeSuggestions")}
        >
          <Text style={styles.buttonText}>Claim Eco Points</Text>
        </TouchableOpacity>

        {/* Marketplace Card */}

        {/* Transactions Section */}
        <View style={styles.transactionsCard}>
          <View style={styles.transactionsHeader}>
            <Text style={styles.transactionsTitle}>Activities</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>

          {activities.map((activity, index) => (
            <View key={index} style={styles.transactionItem}>
              <Image source={activity.logo} style={styles.logo} />
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionTitle}>{activity.title}</Text>
                <Text style={styles.transactionDate}>{activity.date}</Text>
              </View>
              <Text
                style={[
                  styles.transactionPoints,
                  {
                    color: activity.points.includes("+")
                      ? "#32CD32"
                      : "#FF6347",
                  },
                ]}
              >
                {activity.points}
              </Text>
            </View>
          ))}
        </View>
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
  button: {
    backgroundColor: "#2f7d31",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 28,
    width: "60%",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  marketplaceCard: {
    width: 410, // Adjust the width to 410px
    height: 210, // Adjust the height to make it square
    marginBottom: 24,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 5,
  },

  marketplaceBackground: {
    flex: 1,
    justifyContent: "flex-end", // Position the text at the bottom
    alignItems: "center",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject, // Covers the entire background
    backgroundColor: "rgba(255, 255, 255, 0.7)", // White overlay with 0.8 opacity
    borderRadius: 12, // Ensure the overlay matches the card's rounded corners
  },

  marketplaceText: {
    fontSize: 44, // Slightly larger font for better visibility
    fontWeight: "bold",
    color: "#333", // Darker text for contrast with the white overlay
    marginBottom: 22, // Space from the bottom
    textAlign: "center",
  },

  transactionsCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
    marginBottom: 24,
  },
  transactionsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  transactionsTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  seeAll: {
    fontSize: 18,
    color: "#32CD32",
    fontWeight: "600",
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 18,
    marginBottom: 14,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  transactionDate: {
    fontSize: 12,
    color: "#888",
  },
  transactionPoints: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
