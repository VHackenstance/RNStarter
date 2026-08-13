import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, FlatListScreen, ComponentsScreen } from "../screens"

// Setup Navigation
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            id="StackNavigatorID"
            initialRouteName="Home"
        >
            <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home Screen'}}/>
            <Stack.Screen name="Components" component={ComponentsScreen} options={{title: 'Components Screen'}} />
            <Stack.Screen name="FlatList" component={FlatListScreen} options={{title: 'Flat List Element'}} />
        </Stack.Navigator>
    )
}

export default StackNavigator

