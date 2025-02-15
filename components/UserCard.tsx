import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type UserProfile = {
  name: string;
  points: number;
  level: string;
  battlePassProgress: number;
  avatarUrl: any;
};

// Define the available screens in navigation
type RootStackParamList = {
  profile: undefined;
};

export default function UserCard({ profile }: { profile: UserProfile }) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.card}>
      {/* Profile Image - Clickable */}
      <TouchableOpacity onPress={() => navigation.navigate("profile")}>
        <Image source={profile.avatarUrl} style={styles.avatar} />
      </TouchableOpacity>

      {/* User Details */}
      <View style={styles.details}>
        <Text style={styles.name}>{profile.name}</Text>
        <View style={styles.levelContainer}>
          <FontAwesome5 name="leaf" size={16} color="#32CD32" />
          <Text style={styles.level}>{profile.level} | </Text>
          <FontAwesome5 name="coins" size={16} color="#32CD32" />
          <Text style={styles.greenText}> 4750 EP</Text>
          <Text style={styles.level}> / ton CO₂</Text>
        </View>
        <View style={styles.progressContainer}>
          <View
            style={[
              styles.progressBar,
              { width: `${profile.battlePassProgress}%` },
            ]}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 77,
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  levelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  level: {
    fontSize: 14,
    color: "#666",
    marginLeft: 4,
  },
  greenText: {
    fontSize: 14,
    color: "#32CD32",
    fontWeight: "bold",
    marginLeft: 4,
  },
  progressContainer: {
    height: 6,
    backgroundColor: "#e0e0e0",
    borderRadius: 3,
    overflow: "hidden",
    marginTop: 8,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#32CD32",
  },
});
