import 'react-native-gesture-handler';
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome"
import { FlatListSlider } from 'react-native-flatlist-slider';
//import ImageSlider from 'react-native-image-slider'
//import ImageView from 'react-native-image-view';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  FlatList,
  TouchableOpacity
} from "react-native";

//const Stack = createStackNavigator();

const HomeScreen = () => {
  const scrapImage = [
    {
      "image": "https://5.imimg.com/data5/SELLER/Default/2021/4/HL/CG/KQ/126830196/industrial-glass-scrap-500x500.jpg",
      "desc": "Glass Items"
    },
    {
      "image": "https://tiimg.tistatic.com/fp/1/006/245/mixed-plastic-scrap-all-types--488.jpg",
      "desc": "Plastic"
    }
  ]

  return (
    <View style={styles.ScreenContainer}>
      <Text style={styles.TextStyle1}>
        Know what you can recycle
      </Text>
      <FlatListSlider
        data={scrapImage}
        timer={5000}
        onPress={item => {return null;}}
        indicatorActiveWidth={40}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    //  justifyContent: "space-between",
    // backgroundColor: "#009600",'
    //padding: 10
  },
  TextStyle1: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  TextStyle2: {
    fontSize: 10,
    fontWeight: 'bold'
  }
})
