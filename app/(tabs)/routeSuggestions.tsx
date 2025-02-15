import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  Platform,
  ScrollView, // Import ScrollView
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Header from "@/components/Header";
import { router } from "expo-router";

const ClaimPointsScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header />
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("../../assets/images/transparent-background-profile-banner.jpeg")}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {/* Add contentContainerStyle */}
            {/* Header Card */}
            <View style={styles.headerCard}>
              <View style={styles.iconContainer}>
                <AntDesign name="gift" size={32} color="#2f7d31" />
              </View>
              <Text style={styles.title}>Claim ECO-Points</Text>
              <Text style={styles.subtitle}>
                Turn your eco-friendly choices into rewards
              </Text>
            </View>
            {/* Main Card */}
            <View style={styles.mainCard}>
              <View style={styles.inputSection}>
                <Text style={styles.inputLabel}>Enter your ticket number</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder="TX-000"
                    placeholderTextColor="#999"
                  />
                  <View style={styles.inputIcon}>
                    <AntDesign name="barcode" size={24} color="#2f7d31" />
                  </View>
                </View>
              </View>

              <TouchableOpacity style={styles.confirmButton}>
                <AntDesign
                  name="checkcircleo"
                  size={20}
                  color="#FFF"
                  style={styles.buttonIcon}
                />
                <Text style={styles.confirmButtonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
            {/* Points Display Card */}
            <View style={styles.pointsCard}>
              <View style={styles.pointsHeader}>
                <AntDesign name="star" size={24} color="#2f7d31" />
                <Text style={styles.pointsTitle}>Current Balance</Text>
              </View>
              <Text style={styles.pointsAmount}>4750</Text>
              <Text style={styles.pointsLabel}>ECO-Points</Text>
            </View>
            {/* Help Card */}
            <TouchableOpacity style={styles.helpCard}>
              <AntDesign name="questioncircleo" size={20} color="#666" />
              <Text style={styles.helpText}>
                Need help finding your ticket number?
              </Text>
              <AntDesign name="right" size={16} color="#666" />
            </TouchableOpacity>
            {/* New Spend Points Button */}
            <TouchableOpacity
              style={styles.spendButton}
              onPress={() => router.push("/market")}
            >
              <Text style={styles.spendButtonText}>
                Spend Your Points at the Marketplace!
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  backgroundImage: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    padding: 20,
  },
  headerCard: {
    alignItems: "center",
    padding: 20,
    marginBottom: 20,
  },
  iconContainer: {
    width: 70,
    height: 70,
    backgroundColor: "#E8F5E8",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  mainCard: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  inputSection: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
    fontWeight: "500",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    overflow: "hidden",
  },
  input: {
    flex: 1,
    height: 55,
    paddingHorizontal: 20,
    fontSize: 18,
    color: "#333",
  },
  inputIcon: {
    padding: 15,
    backgroundColor: "#F5F5F5",
  },
  confirmButton: {
    flexDirection: "row",
    backgroundColor: "#2f7d31",
    borderRadius: 12,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#2f7d31",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  buttonIcon: {
    marginRight: 8,
  },
  confirmButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  pointsCard: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  pointsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  pointsTitle: {
    fontSize: 16,
    color: "#666",
    marginLeft: 8,
    fontWeight: "500",
  },
  pointsAmount: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2f7d31",
  },
  pointsLabel: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  helpCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 15,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  helpText: {
    flex: 1,
    color: "#666",
    fontSize: 14,
    marginHorizontal: 10,
  },
  spendButton: {
    backgroundColor: "#2f7d31",
    borderRadius: 12,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  spendButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollViewContent: {
    // Style for the ScrollView's content
    flexGrow: 1, // Important: allows content to expand and fill the ScrollView
    padding: 20, // Add padding here if needed
  },
});

export default ClaimPointsScreen;
