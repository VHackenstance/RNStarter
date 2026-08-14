import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import styles from "@styles/styles"

const HomeScreenButtons = ({ navigation }) => {
    const { navigate } = navigation;
    return (
        <View style={styles.button_container}>
            <Button
                title="Button - Componets"
                onPress={() => navigate('Components', { key1: 'Button', key2: 'Simple' })}
            />
            <Button
                title="Button - Flat List"
                onPress={() => navigate('FlatList', { key1: 'Lists', key2: 'Flat List' })}
            />
            <Button
                title="Button - Images"
                onPress={() => navigate('Images', { key1: 'Image', key2: 'Screen' })}
            />
            <TouchableOpacity
                onPress={() => navigate('Components', { key1: 'Touchable', key2: 'Opacity' })}
                style={styles.TO_button}
            >
                <Text style={styles.TO_buttonText}>TouchableOpacity - Components</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigate('FlatList', { key1: 'Touchable', key2: 'Opacity' })}
                style={styles.TO_button}
            >
                <Text style={styles.TO_buttonText}>TouchableOpacity - Flat List</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigate('Images', { key1: 'Image', key2: 'Screen' })}
                style={styles.TO_button}
            >
                <Text style={styles.TO_buttonText}>TouchableOpacity - Image Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreenButtons;