import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import { useFonts, Jost_700Bold } from "@expo-google-fonts/jost";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import happyManProfile from "../../assets/images/happy-man-profile.jpeg";

const ProfileScreen: React.FC = () => {
  const userProfile = {
    name: "Hazerfen Çelebi",
    points: 4750,
    level: "Green Pass",
    battlePassProgress: 72,
    avatarUrl: happyManProfile,
  };

  const discoverItems = [
    {
      title: "Achievements",
      subtitle: "12 Badges Earned",
      icon: "trophy",
    },
    {
      title: "Friends",
      subtitle: "Connect & Compare",
      icon: "user-friends",
    },
    {
      title: "Rewards",
      subtitle: "View Store",
      icon: "gift",
    },
    {
      title: "Notifications",
      subtitle: "Manage Alerts",
      icon: "bell",
    },
    {
      title: "Settings",
      subtitle: "Account Preferences",
      icon: "cog",
    },
  ];

  let [fontsLoaded] = useFonts({
    "Jost-Bold": Jost_700Bold,
    "Poppins-Regular": Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null; // Prevents rendering glitches before fonts load
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Background Image */}
        <View style={styles.headerContainer}>
          <ImageBackground
            source={require("../../assets/images/transparent-background-profile-banner.jpeg")}
            style={styles.headerBackground}
          >
            <View style={styles.headerOverlay} />
          </ImageBackground>

          {/* Profile Card */}
          <View style={styles.profileCard}>
            <Image source={userProfile.avatarUrl} style={styles.avatar} />
            <View>
              <Text style={styles.name}>{userProfile.name}</Text>
              <View style={styles.statsRow}>
                <Text style={styles.statsText}>
                  <FontAwesome5 name="leaf" size={16} color="#32CD32" />{" "}
                  {userProfile.points} EP
                </Text>
                <View style={styles.separator} />
                <Text style={styles.statsText}>
                  <FontAwesome5 name="shield-alt" size={16} color="#32CD32" />{" "}
                  {userProfile.level}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Discover More Section */}
        <Text style={styles.sectionTitle}>Discover More</Text>
        {discoverItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <View style={styles.iconContainer}>
              <FontAwesome5 name={item.icon} size={28} color="#2f7d31" />
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
            </View>
            <AntDesign name="right" size={20} color="#666" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  headerContainer: {
    position: "relative",
    height: 250,
  },
  headerBackground: {
    width: "100%",
    height: "100%",
  },
  headerOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(76, 175, 80, 0.5)",
  },
  profileCard: {
    position: "absolute",
    top: "65%",
    left: "10%",
    right: "10%",
    backgroundColor: "#FFF",
    padding: 19,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 35,
    marginRight: 16,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#333",
    fontFamily: "Jost-Bold", // ✅ Jost for main name
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  statsText: {
    fontSize: 14,
    color: "#32CD32",
    fontWeight: "600",
    fontFamily: "Poppins-Regular", // ✅ Poppins for stats
  },
  separator: {
    width: 8,
    height: 8,
    backgroundColor: "#fff",
    borderRadius: 4,
    marginHorizontal: 6,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 1,
    color: "#333",
    textAlign: "left",
    marginTop: 60,
    marginBottom: 16,
    marginLeft: 30,
    fontFamily: "Poppins-Regular", // ✅ Jost for section title
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    marginHorizontal: 30,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
  },
  iconContainer: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8F5E8",
    borderRadius: 12,
    marginRight: 12,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 1,
    color: "#333",
    fontFamily: "Poppins-Regular", // ✅ Jost for card titles
  },
  cardSubtitle: {
    fontSize: 15,
    color: "#888",
    fontFamily: "Poppins-Regular", // ✅ Poppins for subtitles
  },
});

export default ProfileScreen;
