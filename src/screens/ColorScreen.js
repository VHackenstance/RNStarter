import React, { useState } from "react"
import { View, Button, FlatList  } from "react-native"
import styles from "@styles/styles"

const ColorScreen = () => {
    const [colors, setColors] = useState([])

    return (
        <View style={styles.container}>
            <Button title={"Add a Color"} onPress={() => {setColors([...colors, randomRgb()])}}/>
            <Button title={"Clear Colors"} onPress={() => setColors([])} />
            <FlatList
                keyExtractor={(item) => item}
                data={colors}
                renderItem={({ item }) => {
                    return <View style={{backgroundColor: item, height: 100, marginTop: 10, width: 100}}></View>
                }}
            />
        </View>
    )
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`
}

export default ColorScreen