import React from "react"
import { Text, View } from "react-native"
import styles from "../../styles/styles"

const ComponentsScreen = ({ route }) => {
  const { key1, key2 } = route.params
  return (
      <View style={styles.container}>
        <Text style={styles.H1_b}>Components Screen </Text>
        <Text style={styles.p_b}>{ key2 }: { key1 } </Text>
      </View>
  )
};

export default ComponentsScreen
