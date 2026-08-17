import React from "react"
import {View, FlatList, TouchableOpacity, Text} from "react-native"
import { TOData } from "@data/data"
import styles from "@styles/styles";

const TouchableOpacityFlatListHomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={[styles.H3_b, {marginVertical: 10}]}>TouchableOpacity</Text>
            <FlatList
                data={TOData}
                keyExtractor={(TO) => TO.title}
                renderItem={({ item }) => {
                    const { props, title, navTarget } = item;
                    return (
                        <View style={{marginBottom: 10}}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate(navTarget, { key1: props.key1, key2: props.key2 })}
                                style={styles.TO_button}
                            >
                                <Text style={styles.TO_buttonText}>{title}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default TouchableOpacityFlatListHomeScreen