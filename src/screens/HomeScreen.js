import React from "react";
import { Text, View, Button } from "react-native";
import styles from "../../styles/styles"

const HomeScreen = ({ navigation }) => {
  return (
      <View style={styles.home_container}>
        <Text style={styles.text}>HomeScreen</Text>
        <View style={styles.button_container}>
            <Button
                title="Componets"
                onPress={() => navigation.navigate('Components', { name: 'RAM', company: 'ABC Hardware' })}
            />
            <Button
                title="Lists"
                onPress={() => navigation.navigate('FlatList', { name: 'Element', type: 'Flat List' })}
            />
        </View>
      </View>
  )
};

export default HomeScreen;
