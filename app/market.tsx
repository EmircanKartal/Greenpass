import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

interface Product {
  id: string;
  name: string;
  points: number;
  category: string;
  image: number;
  description: string;
}

const Market: React.FC = () => {
  // ✅ Load fonts first
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": Poppins_400Regular,
  });

  // ✅ Always declare hooks at the top level
  const categories = [
    "All",
    "Travel",
    "Merchandise",
    "Experiences",
    "Upgrades",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products: Product[] = [
    {
      id: "1",
      name: "Premium Lounge Access",
      points: 2500,
      category: "Travel",
      image: require("../assets/images/lounge.jpg"),
      description: "Enjoy 3 hours of luxury airport lounge access",
    },
    {
      id: "2",
      name: "100 Miles",
      points: 1500,
      category: "Merchandise",
      image: require("../assets/images/miles.jpg"),
      description: "100 miles added to your frequent flyer account",
    },
    {
      id: "3",
      name: "Airport Fast Track",
      points: 2000,
      category: "Travel",
      image: require("../assets/images/fast_track.jpg"),
      description: "Skip the security queue at participating airports",
    },
    {
      id: "4",
      name: "Eco Polar Bear",
      points: 1000,
      category: "Merchandise",
      image: require("../assets/images/eco-polar-bear.jpg"),
      description: "Collectible eco-friendly plush toy",
    },
    {
      id: "5",
      name: "TK Collection Model Airplane",
      points: 1800,
      category: "Upgrades",
      image: require("../assets/images/tk-airplane.jpg"),
      description: "Model airplane from the Turkish Airlines collection",
    },
  ];

  // ✅ Filter products based on category selection
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // ✅ Prevent rendering issues: Handle fonts inside JSX
  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Marketplace</Text>
          <Text style={styles.subtitle}>Redeem your eco rewards</Text>
        </View>
        <View style={styles.pointsBalance}>
          <View style={styles.pointsIcon}>
            <AntDesign name="star" size={20} color="#2f7d31" />
          </View>
          <View>
            <Text style={styles.pointsText}>Your Points</Text>
            <Text style={styles.balanceText}>4,750</Text>
          </View>
        </View>
      </View>

      {/* Category Selector */}
      <View style={styles.categoriesWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.categoryButtonActive,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.categoryTextActive,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Products Grid */}
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productBadge}>
              <AntDesign name="star" size={12} color="#FFF" />
              <Text style={styles.badgeText}>{item.points}</Text>
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productCategory}>
                {item.category.toUpperCase()}
              </Text>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
              <TouchableOpacity style={styles.claimButton}>
                <Text style={styles.claimButtonText}>Claim Reward</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productGrid}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9fa" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 4,
    fontFamily: "Poppins-Regular",
  },
  subtitle: { fontSize: 14, color: "#666", fontFamily: "Poppins-Regular" },
  pointsBalance: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F8E9",
    padding: 12,
    borderRadius: 12,
  },
  pointsText: {
    fontSize: 12,
    color: "#666",
    fontFamily: "Poppins-Regular",
  },
  pointsIcon: {
    backgroundColor: "#E8F5E8",
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  balanceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E7D32",
    fontFamily: "Poppins-Regular",
  },
  categoriesWrapper: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: "#f8f9fa",
    borderWidth: 1,
    borderColor: "#e9ecef",
  },
  categoryButtonActive: { backgroundColor: "#2E7D32", borderColor: "#2E7D32" },
  categoryText: {
    color: "#666",
    fontWeight: "600",
    fontSize: 14,
    fontFamily: "Poppins-Regular",
  },
  categoryTextActive: { color: "#fff" },
  productGrid: { padding: 15 },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 4,
  },
  productImage: { width: "100%", height: 200, resizeMode: "cover" },
  productBadge: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "#2E7D32",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  badgeText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 4,
    fontSize: 12,
    fontFamily: "Poppins-Regular",
  },
  productInfo: {
    padding: 16,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  productCategory: {
    fontSize: 12,
    color: "#2E7D32",
    fontWeight: "600",
    marginBottom: 4,
    letterSpacing: 0.5,
    fontFamily: "Poppins-Regular",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
    fontFamily: "Poppins-Regular",
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
    lineHeight: 20,
    fontFamily: "Poppins-Regular",
  },
  claimButton: {
    backgroundColor: "#2E7D32",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  claimButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
    fontFamily: "Poppins-Regular",
  },

  categoriesContainer: {
    paddingHorizontal: 15,
  },
});

export default Market;
