import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import styles from "../../styles/styles"

// navigation object provided automatically to screen components defined within a navigator
const HomeScreen = ({ navigation }) => {
    const { navigate } = navigation;
    return (
      <View style={styles.homeContainer}>
        <Text style={styles.H1_b}>HomeScreen</Text>
        <View style={styles.button_container}>
            <Button
                title="Button - Componets"
                onPress={() => navigate('Components', { name: 'Button', company: 'Simple' })}
            />
            <Button
                title="Button - Flat List"
                onPress={() => navigate('FlatList', { name: 'Lists', type: 'Flat List Component' })}
            />
            <TouchableOpacity
                onPress={() => navigate('Components', { name: 'Touchable', company: 'Opacity' })}
                style={styles.TO_button}
            >
                <Text style={styles.TO_buttonText}>TouchableOpacity - Components</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigate('FlatList', { name: 'Touchable', type: 'Opacity' })}
                style={styles.TO_button}
            >
                <Text style={styles.TO_buttonText}>TouchableOpacity - FlatList</Text>
            </TouchableOpacity>
        </View>
      </View>
  )
};

export default HomeScreen;
