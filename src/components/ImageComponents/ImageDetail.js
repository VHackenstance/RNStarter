import React from "react"
import { Text, View, Image } from "react-native"
import styles from "@styles/styles"

const ImageDetail = ({ title, source, score }) => {
    return (
        <View>
            <Image source={source} />
            <Text style={styles.H2_b}>{ title }</Text>
            <Text style={styles.H3_b}>Image Score - {score}</Text>
        </View>
    )
};

export default ImageDetail