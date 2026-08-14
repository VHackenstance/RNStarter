import Reach from 'react'
import { View, Text, FlatList} from 'react-native'
import styles from "../../styles/styles"

const friends = [
    { name: 'Friend #1', age: 2002 },
    { name: 'Friend #2', age: 80 },
    { name: 'Friend #3', age: 90 },
    { name: 'Friend #4', age: 100 },
    { name: 'Friend #5', age: 120 },
    { name: 'Friend #6', age: 200 },
    { name: 'Friend #7', age: 124 },
    { name: 'Friend #8', age: 224 },
    { name: 'Friend #9', age: 2000 },
    { name: 'Friend #10', age: 223 },
]

const FlatListScreen = ({ route }) => {
    const { key1, key2 } = route.params
    return (
        <View style={styles.container}>
            <Text style={styles.H1_b}>{ key1 }:  { key2 }</Text>
            <FlatList
                data={friends}
                // horizontal
                // showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={(friend) => friend.name }
                renderItem={({ index, item }) => {
                    return (
                        <Text style={[styles.p_b, styles.flatlistItemContainer]}>
                            {index + 1}. {item.name} - Age {item.age}
                        </Text>
                    )
                }}
            />
        </View>
    )
}

export default FlatListScreen