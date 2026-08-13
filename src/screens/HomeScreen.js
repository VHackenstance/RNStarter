import React from "react";
import { Text, View, Button } from "react-native";
import styles from "../../styles/styles"

const HomeScreen = ({ navigation }) => {
  return (
      <View style={styles.home_container}>
        <Text style={styles.text_H1_b}>HomeScreen</Text>
        <View style={styles.button_container}>
            <Button
                title="Componets Screen"
                onPress={() => navigation.navigate('Components', { name: 'RAM', company: 'ABC Hardware' })}
            />
            <Button
                title="Flat List Screen"
                onPress={() => navigation.navigate('FlatList', { name: 'Lists', type: 'Flat List Component' })}
            />
        </View>
      </View>
  )
};

export default HomeScreen;
