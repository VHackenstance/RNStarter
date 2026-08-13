import React from "react"
import { Text, View } from "react-native"
import styles from "../../styles/styles"

const ComponentsScreen = ({ route }) => {
  const { name, company } = route.params
  return (
      <View style={styles.container}>
        <Text style={styles.H1_b}>Components Screen </Text>
        <Text style={styles.p_b}>{ company }: { name } </Text>
      </View>
  )
};

export default ComponentsScreen
