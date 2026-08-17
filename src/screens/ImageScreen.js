import React from "react"
import { Text, View, FlatList } from "react-native"
import styles from "@styles/styles"
import { ImageDetail } from "@components/index";

const imageData = [
    { title: "Forest", path: require("../../assets/images/forest.jpg") },
    { title: "Beach", path: require("../../assets/images/beach.jpg") },
    { title: "Mountain", path: require("../../assets/images/mountain.jpg") },
]

const ImageScreen = ({ route }) => {
  const { key1, key2 } = route.params
  return (
      <View style={styles.container}>
        <Text style={styles.H1_b}>{key1} {key2}</Text>
          <FlatList
              data={imageData}
              showsVerticalScrollIndicator={false}
              keyExtractor={(image) => image.title}
              renderItem={({ item }) => {
                  return (
                    <ImageDetail
                      title={item.title}
                      source={item.path}
                    />
                  )
              }}
          />
      </View>
  )
};

export default ImageScreen
