import React from "react";
//import Icon from 'react-native-vector-icons/Ionicons'; 
//import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    View,
    Image,
    TouchableOpacity
} from "react-native"

const NavigationDrawerStructure = (props)=> {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
      //Props to open/close the drawer
      props.navigationProps.toggleDrawer();
    };
  
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={()=> toggleDrawer()}>
          {/*Donute Button Image */}
          <Image
            source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
            style={{
              width: 25,
              height: 25,
              marginLeft: 5
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

export default NavigationDrawerStructure  
