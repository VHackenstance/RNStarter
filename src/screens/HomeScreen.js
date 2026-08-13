import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import styles from "../../styles/styles"

// navigation object provided automatically to screen components defined within a navigator
const HomeScreen = ({ navigation }) => {
    // const { navigation } = props;
    return (
      <View style={styles.homeContainer}>
        <Text style={styles.H1_b}>HomeScreen</Text>
        <View style={styles.button_container}>
            <Button
                title="Go to Componets Demo"
                onPress={() => navigation.navigate('Components', { name: 'Button', company: 'Simple' })}
            />
            <Button
                title="Go to Flat List Example"
                onPress={() => navigation.navigate('FlatList', { name: 'Lists', type: 'Flat List Component' })}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('Components', { name: 'Touchable', company: 'Opacity' })}
                style={styles.TO_button}
            >
                <Text style={styles.TO_buttonText}>Go Components Touchable Opacity</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('FlatList', { name: 'Touchable', type: 'Opacity' })}
                style={styles.TO_button}
            >
                <Text style={styles.TO_buttonText}>Flat List Touchable Opacity</Text>
            </TouchableOpacity>
        </View>
      </View>
  )
};

export default HomeScreen;
