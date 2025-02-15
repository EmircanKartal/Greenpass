import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export type TransactionProps = {
  title: string;
  company: string;
  points: string;
  date: string;
  logo: any;
};

const transactions: TransactionProps[] = [
  {
    company: "Turkish Airlines",
    title: "Eco Flight",
    points: "+200 EP",
    date: "Today",
    logo: require("@/assets/images/turkish-airlines-logo.png"),
  },
  {
    company: "A-Jet",
    title: "Eco Flight",
    points: "+150 EP",
    date: "Nov 23",
    logo: require("@/assets/images/a-jet.png"),
  },
  {
    company: "Sun Express",
    title: "Eco Flight",
    points: "+180 EP",
    date: "Nov 16",
    logo: require("@/assets/images/sun-express.png"),
  },
];

export default function TransactionsList() {
  return (
    <View>
      {transactions.map((transaction, index) => (
        <View key={index} style={styles.transactionCard}>
          <View style={styles.leftSection}>
            <Image source={transaction.logo} style={styles.logo} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{transaction.company}</Text>
              <Text style={styles.subtitle}>{transaction.title}</Text>
            </View>
          </View>
          <View style={styles.rightSection}>
            <Text
              style={[
                styles.points,
                {
                  color: transaction.points.includes("+")
                    ? "#32CD32"
                    : "#FF6347",
                },
              ]}
            >
              {transaction.points}
            </Text>
            <Text style={styles.date}>{transaction.date}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  transactionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 2,
    paddingVertical: 16,
    marginBottom: 12,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  logo: {
    width: 62,
    height: 62,
    borderRadius: 225,
    marginRight: 21,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: 1,
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#888",
  },
  rightSection: {
    alignItems: "flex-end",
  },
  points: {
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "#888",
  },
  gradientOverlay: {
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
  },
});
