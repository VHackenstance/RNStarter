import React from "react";
import { View } from "react-native";
// import ButtonFlatListHomeScreen from "./buttonFlatLists/ButtonFlatListHomeScreen";
import TouchableOpacityFlatListHomeScreen from "./TOFlatLists/TouchableOpacityFlatListHomeScreen";

const HomeScreenButtons = ({ navigation }) => {
    return (
        <View>
            {/*<ButtonFlatListHomeScreen navigation={navigation} />*/}
            <TouchableOpacityFlatListHomeScreen navigation={navigation} />
        </View>
    )
}

export default HomeScreenButtons;