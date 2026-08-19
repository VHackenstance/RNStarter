import React from "react";
import { Text, View } from "react-native";
import styles from "@styles/styles"
import HomeScreenButtons from '@views/HomeScreenButtons';

// navigation object provided to screens defined in navigator
const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.homeContainer}>
        <Text style={styles.H1_b}>HomeScreen</Text>
        <HomeScreenButtons navigation={navigation} />
      </View>
  )
};

export default HomeScreen;
