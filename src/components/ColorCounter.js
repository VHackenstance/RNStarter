import React from 'react'
import {View, Text, Button} from 'react-native';
import styles from '@styles/styles';

const ColorCounter = ({ color, onDecrease, onIncrease }) => {
    return (
        <View style={{gap: 10}}>
            <Text>{ color }</Text>
            <Button
                onPress={() => onIncrease()}
                title={`Increase ${color}`}
            />
            <Button
                onPress={() => onDecrease()}
                title={`Decrease ${color}`}
            />
        </View>
    )
}

export default ColorCounter