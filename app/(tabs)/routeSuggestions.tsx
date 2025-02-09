import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";

const routes = [
  { id: "1", airline: "Green Airlines", co2: "123 kg" },
  { id: "2", airline: "EcoFlights", co2: "300 kg" },
  { id: "3", airline: "Sustainable Skies", co2: "150 kg" },
];

export default function RouteSuggestionsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={routes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.airline}</Text>
            <Text>CO₂ Emission: {item.co2}</Text>
            <Button title="View Details" onPress={() => {}} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  item: {
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
});
