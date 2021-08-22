import React from "react"
import { Router, Scene } from "react-native-router-flux"
import { HomeScreen } from "../Screens/HomeScreen"
import {createStackNavigator} from "@react-navigation/stack"
import { HistoryScreen } from "../Screens/HistoryScreen"
import { ProfileScreen } from "../Screens/ProfileScreen"

const Routes = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="Home"
            Component={HomeScreen}
         />
      </Stack.Navigator>
   )
}

export default Routes;