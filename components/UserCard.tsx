import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ProgressBarAndroid,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

type UserProfile = {
  name: string;
  points: number;
  level: string;
  battlePassProgress: number;
  avatarUrl: any;
};

export default function UserCard({ profile }: { profile: UserProfile }) {
  return (
    <View style={styles.card}>
      {/* Profile Image */}
      <Image source={profile.avatarUrl} style={styles.avatar} />

      {/* User Details */}
      <View style={styles.details}>
        <Text style={styles.name}>{profile.name}</Text>
        <View style={styles.levelContainer}>
          <FontAwesome5 name="leaf" size={16} color="#32CD32" />
          <Text style={styles.level}>{profile.level}</Text>
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

      {/* Notification Icon */}
      <View style={styles.notification}>
        <FontAwesome5 name="bell" size={20} color="#333" />
        <View style={styles.notificationDot} />
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
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
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
    marginLeft: 8,
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
  notification: {
    position: "relative",
  },
  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "red",
    position: "absolute",
    top: 0,
    right: -2,
  },
});
