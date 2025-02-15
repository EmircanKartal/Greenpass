import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type HomePageCardProps = {
  title: string;
  topic: string;
  backgroundColor: string;
  textColor: string;
  imageUrl: any;
  navigateTo: "routeSuggestions" | "market";
  icon: string;
};

type RootStackParamList = {
  routeSuggestions: undefined;
  market: undefined;
};

export default function HomePageCard({
  title,
  topic,
  backgroundColor,
  textColor,
  imageUrl,
  navigateTo,
  icon,
}: HomePageCardProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(navigateTo)}
      style={styles.card}
    >
      <ImageBackground
        source={typeof imageUrl === "string" ? { uri: imageUrl } : imageUrl}
        style={styles.image}
        imageStyle={{ borderTopLeftRadius: 26, borderTopRightRadius: 26 }}
      >
        <LinearGradient
          colors={["rgba(69, 237, 223, 0.44)", "rgba(212, 212, 212, 0.28)"]}
          style={styles.overlay}
        />
      </ImageBackground>
      <View style={[styles.content, { backgroundColor }]}>
        <View style={styles.topicContainer}>
          <FontAwesome5 name={icon} size={20} color={textColor} />
          <Text style={[styles.topic, { color: textColor }]}>{topic}</Text>
        </View>
        <Text style={[styles.title, { color: textColor }]}>{title}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Learn more</Text>
          <FontAwesome5 name="arrow-right" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 26,
    overflow: "hidden",
    marginBottom: 26,
    elevation: 5,
  },
  image: {
    height: 190,
    width: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
  },
  content: {
    padding: 26,
    borderRadius: 18,
    marginTop: -46,
    alignItems: "flex-start",
  },
  topicContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  topic: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    letterSpacing: 1,
    textAlign: "left",
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2eab7f",
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 38,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 8,
    color: "#fff",
  },
});
