import React from "react";
//import { Appbar } from 'react-native-paper';
import 'react-native-gesture-handler';
import NavigationPage from "./NavigationPage" ;
import LogIn from "./DisplayScreens/LogInScreen/LogIn.js";
import SignUp from "./DisplayScreens/LogInScreen/SignUp.js";
import { NavigationContainer } from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding'; 
import { createStackNavigator } from '@react-navigation/stack';

//import { Stack } from "react-native-router-flux";


/*const _goBack = () =>
{
  console.log("Insode go back fn")
}

const _handleSearch = () =>
{
  console.log("Inside search fn")
}

const _handleMore = () =>
{
  console.log("Inside handle more fn")
}*/

const App = (hasLocationPermission) =>
{
  const Stack = createStackNavigator();

  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="LogIn">
       <Stack.Screen name="LogIn" component={LogIn} />
       <Stack.Screen options={{header: () => null}} name="NavigationPage" component={NavigationPage} />
       <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
    </NavigationContainer>
    )
}

export default App


//<NavigationPage/>
