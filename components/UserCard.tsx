import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import {
  useFonts,
  Poppins_700Bold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

type UserProfile = {
  name: string;
  points: number;
  level: string;
  battlePassProgress: number;
  avatarUrl: any;
};

type RootStackParamList = {
  profile: undefined;
};

export default function UserCard({
  profile,
  animate,
}: {
  profile: UserProfile;
  animate: boolean;
}) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Animated EP Value
  const animatedEP = useRef(new Animated.Value(0)).current;
  const animatedProgress = useRef(new Animated.Value(0)).current;
  const [displayEP, setDisplayEP] = useState(0);

  useEffect(() => {
    if (animate) {
      // Animate EP value
      Animated.timing(animatedEP, {
        toValue: profile.points,
        duration: 2000,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }).start();

      animatedEP.addListener(({ value }) => {
        setDisplayEP(Math.floor(value));
      });

      // Animate Progress Bar
      Animated.timing(animatedProgress, {
        toValue: profile.battlePassProgress,
        duration: 1800,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }).start();
    }

    return () => {
      animatedEP.removeAllListeners();
      animatedProgress.removeAllListeners();
    };
  }, [animate]);

  let [fontsLoaded] = useFonts({
    "Poppins-Bold": Poppins_700Bold,
    "Poppins-Regular": Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
          <Text style={styles.greenText}> {displayEP} EP</Text>
          <Text style={styles.level}> / tonnes CO₂</Text>
        </View>
        <View style={styles.progressContainer}>
          <Animated.View
            style={[
              styles.progressBar,
              {
                width: animatedProgress.interpolate({
                  inputRange: [0, 100],
                  outputRange: ["0%", `${profile.battlePassProgress}%`],
                }),
              },
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
    fontFamily: "Poppins-Bold",
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
    fontFamily: "Poppins-Regular",
  },
  greenText: {
    fontSize: 14,
    color: "#32CD32",
    fontWeight: "bold",
    marginLeft: 4,
    fontFamily: "Poppins-Bold",
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
