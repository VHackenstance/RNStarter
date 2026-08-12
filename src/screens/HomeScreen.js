import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>HomeScreen</Text>
        <Button
            title="Componets"
            onPress={() => navigation.navigate('Components', { name: 'RAM' })}
        />
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

export default HomeScreen;
