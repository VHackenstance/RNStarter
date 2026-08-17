import React from "react"
import { Text, View, Image } from "react-native"
import styles from "@styles/styles"

const ImageDetail = props => {
    const { title, source } = props
    return (
        <View>
            <Text style={styles.H2_b}>{ title }</Text>
            <Image source={source} />
        </View>
    )
};

export default ImageDetail