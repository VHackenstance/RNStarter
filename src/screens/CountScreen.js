import React, { useState } from "react"
import { Text, View, Button,  } from "react-native"
import styles from "@styles/styles"

const CountScreen = ({ route }) => {
    const [counter, setCounter] = useState(0)

    return (
        <View style={styles.container}>
            <Text style={styles.H1_b}>Current Count: {counter}</Text>
            <Button
                title={"Increase Count"}
                onPress={() => {
                    setCounter(counter + 1)
                    console.log(counter)
                }}
            />
            <Button
                title={"Decrease Count"}
                onPress={() => {
                    setCounter(counter - 1)
                    console.log(counter)
                }}
            />

        </View>
    )
};

export default CountScreen