import React from "react"
import { Text, View } from "react-native"
import styles from "@styles/styles"

const ImageScreen = ({ route }) => {
  const { key1, key2 } = route.params
  return (
      <View style={styles.container}>
        <Text style={styles.H1_b}>Image Screen </Text>
        <Text style={styles.p_b}>{ key1 }: { key2 } </Text>
      </View>
  )
};

export default ImageScreen
