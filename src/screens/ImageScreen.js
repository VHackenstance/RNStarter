import React from "react"
import { Text, View, FlatList } from "react-native"
import styles from "@styles/styles"
import { ImageDetail } from "@components/index";
import { imageData } from "@data/data"

const ImageScreen = ({ route }) => {
  const { key1, key2 } = route.params
  return (
      <View style={styles.container}>
        <Text style={styles.H1_b}>Image Screen </Text>
        <Text style={styles.H3_b}>{key1} {key2}</Text>
          <FlatList
              data={imageData}
              showsVerticalScrollIndicator={false}
              keyExtractor={(image) => image.title}
              renderItem={({ item }) => {
                  return (
                    <ImageDetail
                      title={item.title}
                      source={item.path}
                      score={item.score}
                    />
                  )
              }}
          />
      </View>
  )
};

export default ImageScreen
