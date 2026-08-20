import React, { useState } from "react"
import { View, Button, Text } from "react-native"
import styles from "@styles/styles"
import { ColorCounter } from "@components/"

const MoreColorScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    console.log(red)

    return (
        <View style={styles.container}>
            <Text style={styles.H2_b}>More Color Square Screen</Text>
            <ColorCounter
                color="Red"
                onIncrease={() => setRed(red + 1)}
                onDecrease={() => setRed(red - 1)}
            />
            <ColorCounter
                color="Blue"
                onIncrease={() => setBlue(blue + 1)}
                onDecrease={() => setBlue(blue - 1)}
            />
            <ColorCounter
                color="Green"
                onIncrease={() => setGreen(green + 1)}
                onDecrease={() => setGreen(green - 1)}
            />
            <View style={{
                backgroundColor: "blue",
                height: 100,
                marginTop: 10,
                width: 100}}>
            </View>
        </View>
    )
};

export default MoreColorScreen