import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Header from "@/components/Header";
import HomePageCard from "@/components/home-page-card";
import UserCard from "@/components/UserCard";
import WelcomePopup from "@/components/WelcomePopup";
import happyManProfile from "../../assets/images/happy-man-profile.jpeg";
import marketImage from "../../assets/images/marketplace.jpg";
import Transaction from "@/components/Transaction";

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
  const [animateUserCard, setAnimateUserCard] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Trigger animations only after the popup is closed
  useEffect(() => {
    if (!isPopupVisible) {
      setTimeout(() => {
        setAnimateUserCard(true); // Start EP & progress bar animation after 300ms
      }, 300);

      setTimeout(() => {
        setAnimateCards(true); // Start home page card animations slightly later
      }, 600);
    }
  }, [isPopupVisible]);

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
        <UserCard profile={userProfile} animate={animateUserCard} />

        {/* Home Page Cards */}
        <HomePageCard
          title="Claim Your Eco-Points"
          topic="Sustainable Flights"
          backgroundColor="#a2f2c9"
          textColor="#1d6367"
          imageUrl="https://www.flyairnorth.com/sites/default/files/styles/hero_image_lg/public/2025-02/Valentines%20Sale%202025%20-%20AirNorth.com%20Hero.png?h=40f26a99&itok=kT5RNUKc"
          navigateTo="routeSuggestions"
          icon="plane"
          animate={animateCards}
        />

        <HomePageCard
          title="Shop with Your Points"
          topic="Eco-Store"
          backgroundColor="#1d6367"
          textColor="#ffffff"
          imageUrl={marketImage}
          navigateTo="market"
          icon="shopping-bag"
          animate={animateCards}
        />

        {/* Transactions Section */}
        <View style={styles.transactionsCard}>
          <View style={styles.transactionsHeader}>
            <Text style={styles.transactionsTitle}>February 2025</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>

          <Transaction />
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

  transactionsCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 20,
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
