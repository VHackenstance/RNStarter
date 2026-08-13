import Reach from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styles from "../../styles/styles"

const FlatListScreen = ({ route }) => {
    const { name, type } = route.params
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Some Text </Text>
            <Text style={styles.text}>{ type } { name } </Text>
        </View>
    )
}

export default FlatListScreen