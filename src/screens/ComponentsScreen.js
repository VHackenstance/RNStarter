import React from "react"
import { Text, View } from "react-native"
import styles from "../../styles/styles"

const ComponentsScreen = ({ route }) => {
  const { name, company } = route.params
  return (
      <View style={styles.container}>
        <Text style={styles.text}>Components Screen </Text>
        <Text style={styles.text}>{ company }: { name } </Text>
      </View>
  )
};

export default ComponentsScreen
