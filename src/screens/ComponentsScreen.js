import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = ({ route }) => {
  const { name } = route.params;
  return (
      <View style={styles.container}>
        <Text style={styles.text}>Components Screen </Text>
        <Text style={styles.text}>{ name } </Text>
      </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default ComponentsScreen;
