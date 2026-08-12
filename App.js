import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from "./src/screens/ComponentsScreen";

// Setup Navigation
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
            id="StackNavigatorID"
            initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home Screen'}}/>
          <Stack.Screen name="Components" component={ComponentsScreen} options={{title: 'Components Screen'}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
