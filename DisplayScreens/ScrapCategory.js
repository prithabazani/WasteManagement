import 'react-native-gesture-handler';
import React from 'react';
//import { Col, Row, Grid } from "react-native-easy-grid";
//import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'
//import { TOUCHABLE_STATE } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';

const GridListItems  = [
      { "key": "GlassItems",
        "picture": "https://recyclenation.com/wp-content/uploads/2014/02/How%20to%20Recycle%20Glass.jpg" },
      { key: "Plastic",
        picture: "https://recyclenation.com/wp-content/uploads/2014/02/How%20to%20Recycle%20Glass.jpg"  },
      { key: "Cloths",
        picture: "https://recyclenation.com/wp-content/uploads/2014/02/How%20to%20Recycle%20Glass.jpg"  },
      { key: "Paper",
        picture: "https://recyclenation.com/wp-content/uploads/2014/02/How%20to%20Recycle%20Glass.jpg"  },
      { key: "Wooden Items",
        picture: "https://recyclenation.com/wp-content/uploads/2014/02/How%20to%20Recycle%20Glass.jpg"  },
      { key: "Thermocol",
        picture: "https://recyclenation.com/wp-content/uploads/2014/02/How%20to%20Recycle%20Glass.jpg" },
      { key:"E-Waste",
        picture: "https://recyclenation.com/wp-content/uploads/2014/02/How%20to%20Recycle%20Glass.jpg" },
      { key:"Medical-Waste",
        picture: "https://recyclenation.com/wp-content/uploads/2014/02/How%20to%20Recycle%20Glass.jpg" },
      { key:"Mud Pot",
        picture: "https://recyclenation.com/wp-content/uploads/2014/02/How%20to%20Recycle%20Glass.jpg" },
      { key:"KitchenScrap",
        picture: "https://recyclenation.com/wp-content/uploads/2014/02/How%20to%20Recycle%20Glass.jpg" },  
    ]

keyExtractor = (item, index) => index.toString()

//const Stack = createStackNavigator();

const ScrapCategory = ({navigation}) => {
  return (
    <FlatList
    keyExtractor={ keyExtractor }
    data ={GridListItems}
    renderItem={ ({item}) =>
    <TouchableOpacity 
       style={styles.GridViewContainer}
       onPress={()=>navigation.navigate("ProvideScrapDetails",{category:item.key})}>
       <Text styles={styles.CategoryText}> {item.key} </Text>
       <Image source={{uri:"https://recyclenation.com/wp-content/uploads/2014/02/How%20to%20Recycle%20Glass.jpg"}} style={{width:60,height:60}}/>
    </TouchableOpacity> 
    }
    numColumns={2}
    />
  )
}

export default ScrapCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e5e5e5"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  CategoryText: {
    fontSize: 10,
    margin: 10,
    fontWeight: "bold",
    color: "white"
  },
  GridViewContainer: {
   flex:1,
   borderRadius:5,
   justifyContent: 'center',
   alignItems: 'center',
   height: 100,
   margin: 5,
   backgroundColor: '#7B1FA2'
},
  GridViewTextLayout: {
   fontSize: 30,
   fontWeight: 'bold',
   justifyContent: 'center',
   color: '#fff',
   padding: 10,
 }
});
