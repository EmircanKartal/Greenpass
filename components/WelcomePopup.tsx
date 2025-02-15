import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts, Jost_700Bold } from "@expo-google-fonts/jost";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Montserrat_600SemiBold } from "@expo-google-fonts/montserrat";
import { Asset } from "expo-asset";

export default function WelcomePopup({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(0);
  const [prevStep, setPrevStep] = useState(0);

  const backgroundColors = ["#a1f2c9", "#7b86eb", "#a6eb7b"];
  const buttonColors = ["#30ab7f", "#5bfff5", "#e3fd5b"];
  const chevronColors = ["#fff", "#000812", "#000812"];
  const descriptionColors = ["#444", "#fff", "#444"];

  const titles = [
    { first: "Track", second: "Impact" },
    { first: "Earn", second: "EcoPoints" },
    { first: "Get", second: "Rewards" },
  ];

  const descriptions = [
    "Monitor your flight emissions and track your carbon footprint in real-time.",
    "Choose eco-friendly flights and earn rewards for your sustainable choices.",
    "Redeem your EcoPoints for exclusive benefits and travel perks.",
  ];

  const images = [
    require("../assets/images/track.png"),
    require("../assets/images/earn.png"),
    require("../assets/images/reward.png"),
  ];

  const [bgAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(50)); // ✅ Start offscreen
  const [loadedImages, setLoadedImages] = useState<boolean>(false);

  let [fontsLoaded] = useFonts({
    "Jost-Bold": Jost_700Bold,
    "Poppins-Regular": Poppins_400Regular,
    "Montserrat-SemiBold": Montserrat_600SemiBold,
  });

  // ✅ Preload images
  useEffect(() => {
    const preloadImages = async () => {
      await Promise.all(
        images.map((img) => Asset.fromModule(img).downloadAsync())
      );
      setLoadedImages(true);
    };

    preloadImages();
  }, []);

  // ✅ Fast Background Color Transition with Easing
  useEffect(() => {
    Animated.timing(bgAnim, {
      toValue: step,
      duration: 400, // ✅ Faster transition
      easing: Easing.out(Easing.ease), // ✅ Smooth easing
      useNativeDriver: false,
    }).start();
  }, [step]);

  // ✅ Handle Sliding Animation for Image
  useEffect(() => {
    slideAnim.setValue(50); // Start from the right
    Animated.timing(slideAnim, {
      toValue: 0, // Move to center
      duration: 300, // ✅ Faster transition
      easing: Easing.out(Easing.ease), // ✅ Smooth slide-in
      useNativeDriver: true,
    }).start();
  }, [step]);

  const nextStep = () => {
    if (step < 2) {
      Animated.sequence([
        Animated.timing(slideAnim, {
          toValue: -50, // Slide out to left
          duration: 250, // ✅ Faster exit
          easing: Easing.out(Easing.ease), // ✅ Smooth slide-out
          useNativeDriver: true,
        }),
      ]).start(() => {
        setPrevStep(step);
        setStep(step + 1);
      });
    } else {
      onClose();
    }
  };

  if (!fontsLoaded || !loadedImages) {
    return null;
  }

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <Animated.View
        style={[
          styles.container,
          {
            backgroundColor: bgAnim.interpolate({
              inputRange: [0, 1, 2],
              outputRange: backgroundColors,
            }),
          },
        ]}
      >
        <View style={styles.content}>
          {/* Image with Slide Animation */}
          <Animated.Image
            source={images[step]}
            style={[
              styles.image,
              {
                transform: [{ translateX: slideAnim }], // ✅ Sliding effect
              },
            ]}
          />

          {/* Title */}
          <Text style={styles.title}>
            <Text style={styles.titleWhite}>
              {titles[step].first} {"\n"}
            </Text>
            <Text style={[styles.titleColored, { color: buttonColors[step] }]}>
              {titles[step].second}
            </Text>
          </Text>

          {/* Description */}
          <Text
            style={[styles.description, { color: descriptionColors[step] }]}
          >
            {descriptions[step]}
          </Text>

          {/* Progress & Button */}
          <View style={styles.bottomRow}>
            {/* Progress Dots */}
            <View style={styles.dotsContainer}>
              {[0, 1, 2].map((index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    {
                      backgroundColor: step === index ? "#fff" : "#e6e6e6",
                      opacity: step === index ? 1 : 0.65,
                    },
                  ]}
                />
              ))}
            </View>

            {/* Next Button */}
            <TouchableOpacity
              style={[styles.button, { backgroundColor: buttonColors[step] }]}
              onPress={nextStep}
            >
              <FontAwesome
                name="chevron-right"
                size={24}
                color={chevronColors[step]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: 50,
  },
  image: {
    width: "100%",
    height: 280,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    paddingTop: 14,
    fontSize: 55,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 54,
    fontFamily: "Jost-Bold",
  },
  titleWhite: {
    color: "#fff",
  },
  titleColored: {
    fontWeight: "600",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 20,
    paddingHorizontal: 20,
    marginTop: 10,
    fontFamily: "Poppins-Regular",
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flex: 1,
    alignItems: "center",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 4,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
});
