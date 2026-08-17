import React from "react"
import { Text, View, Image } from "react-native"
import styles from "@styles/styles"

const CountScreen = ({ route }) => {
    const { key1, key2 } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.H1_b}>Count Screen</Text>
            <Text style={styles.H3_b}>key1: { key1 }</Text>
            <Text style={styles.H3_b}>key2: {key2}</Text>
        </View>
    )
};

export default CountScreen