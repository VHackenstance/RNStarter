import React from "react"
import { View, FlatList, Button, Text } from "react-native"
import { buttonData } from "@data/data"
import styles from "@styles/styles"

const ButtonFlatListHomeScreen = ({ navigation }) => {
    return (
            <View>
                <Text style={[styles.H3_b, {marginVertical: 10}]}>Buttons</Text>
                <FlatList
                    data={buttonData}
                    keyExtractor={(button) => button.title}
                    renderItem={({ item }) => {
                        const { props, title, navTarget } = item;
                        return (
                            <View style={{marginBottom: 10}}>
                                <Button
                                    title={title}
                                    onPress={() => navigation.navigate(
                                        navTarget,
                                        { key1: props.key1, key2: props.key2}
                                    )}
                                />
                            </View>
                        )
                    }}
                />
            </View>
    )
}

export default ButtonFlatListHomeScreen