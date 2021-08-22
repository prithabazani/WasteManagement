import 'react-native-gesture-handler';
import React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome"
import Icon1 from "react-native-vector-icons/Entypo"
//import {Router,Scene} from "react-native-router-flux"
import HomeScreen from "./DisplayScreens/HomeScreen"
import HistoryScreen from "./DisplayScreens/HistoryScreen"
import ProfileScreen from "./DisplayScreens/ProfileScreen"
import ScrapCategory from "./DisplayScreens/ScrapCategory"
import AddressScreen from "./DisplayScreens/AddressScreen"
import ProvideScrapDetails from './DisplayScreens/ScrapItems/ProvideScrapDetails'
import RecycleBin from './DisplayScreens/ScrapItems/RecycleBin'
import ScrapDetails from './DisplayScreens/ScrapItems/ScrapDetails'
import NavigationDrawerStructure from "./DisplayScreens/NavigationStructures/NavigationDrawerStructure"
//import { Drawer } from 'react-native-paper';


import {
    StyleSheet,
    View,
    Text
} from "react-native"
//import { ScreenStackHeaderCenterView } from "react-native-screens";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const ProfileScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: 'Make waste into Profit', //Set Header Title
                    headerLeft: () =>
                        <NavigationDrawerStructure
                            navigationProps={navigation}
                        />,
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </Stack.Navigator>
    );
}

/*const HistoryScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="History"
                component={HistoryScreen}
                options={{
                    title: 'Make waste into Profit', //Set Header Title
                    headerLeft: () =>
                        <NavigationDrawerStructure
                            navigationProps={navigation}
                        />,
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </Stack.Navigator>
    )
}*/

const AddressScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SetPickupLocation"
                component={AddressScreen}
                options={{
                    title: 'Make waste into Profit', //Set Header Title
                    headerLeft: () =>
                        <NavigationDrawerStructure
                            navigationProps={navigation}
                        />,
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </Stack.Navigator>
    )
}

/*const ScrapCategoryStack = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="ScrapCategory">
            <Stack.Screen
                name="ScrapCategory"
                component={ScrapCategory}
                options={{
                    title: 'Make waste into Profit', //Set Header Title
                    headerRight: () =>
                        <View style={styles.iconcontainer}>
                            <Text style={styles.icon}>
                                <Icon name="recycle" size={30} color="#ffffff" />
                            </Text>
                        </View>,
                    headerLeft: () =>
                        <NavigationDrawerStructure
                            navigationProps={navigation}
                        />,
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
            <Stack.Screen
                name="ProvideScrapDetails"
                component={ProvideScrapDetails}
                options={{
                    headerRight: () =>
                        <View style={styles.iconcontainer}>
                            <Text style={styles.icon}>
                                <Icon name="recycle" size={30} color="#ffffff" />
                            </Text>
                        </View>,
                    headerStyle: {
                        backgroundColor: '#04511e', //Set Header color
                    }
                }}
            />
        </Stack.Navigator>
    )
}*/

const RecycleBinStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="RecycleBin"
                component={RecycleBin}
                options={{
                    //  title: 'Make waste into Profit', //Set Header Title
                    headerRight: () =>
                        <View style={styles.iconcontainer}>
                            <Text style={styles.icon}>
                                <Icon name="recycle" size={30} color="#ffffff" onPress={ScrapCategory}/>,
                            </Text>
                        </View>,
                    headerLeft: () =>
                        <NavigationDrawerStructure
                            navigationProps={navigation}
                        />,
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </Stack.Navigator>
    )
}

const ScrapDetailsStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ScrapDetails"
                component={ScrapDetails}
                options={{
                    //  title: 'Make waste into Profit', //Set Header Title
                    headerRight: () =>
                        <View style={styles.iconcontainer}>
                            <Text style={styles.icon}>
                                <Icon name="recycle" size={30} color="#ffffff" onPress={ScrapCategory}/>,
                            </Text>
                        </View>,
                    headerLeft: () =>
                        <NavigationDrawerStructure
                            navigationProps={navigation}
                        />,
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </Stack.Navigator>
    )
}

const HomeScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    //  title: 'Make waste into Profit', //Set Header Title
                    headerRight: () =>
                        <View style={styles.iconcontainer}>
                            <Text style={styles.icon}>
                                <Icon name="recycle" size={30} color="#ffffff" onPress={ScrapCategory}/>,
                            </Text>
                        </View>,
                    headerLeft: () =>
                        <NavigationDrawerStructure
                            navigationProps={navigation}
                        />,
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </Stack.Navigator>
    )
}

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                activeTintColor: '#e91e63',
                backgroundColor: "lightblue",
                itemStyle: { marginVertical: 5 }
            }}>
            <Drawer.Screen
                name="Home"
                options={{ drawerLabel: 'Home' }}
                component={HomeScreenStack}
            />
            <Drawer.Screen
                name="Profile"
                options={{ drawerLabel: 'Profile' }}
                component={ProfileScreenStack}
            />
            <Drawer.Screen
                name="SetPickup"
                options={{ drawerLabel: 'SetPickup' }}
                component={AddressScreenStack}
            />
            <Drawer.Screen
                name = "RecycleBin"
                options={{drawerLabel: 'RecycleBin'}}
                component = {RecycleBinStack}
            />
            <Drawer.Screen
                name = "ScrapDetails"
                options={{drawerLabel: 'ScrapDetails'}}
                component ={ScrapDetailsStack}
            />
        </Drawer.Navigator>
    )
}

const NavigationPage = () => {
    return (
            <Stack.Navigator
                initialRouteName="DrawerNavigation_Home">
                <Stack.Screen
                    name="DrawerNavigation_Home"
                    component={DrawerNavigation}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
    )
}

export default NavigationPage;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icon: {
        paddingLeft: 10,
        letterSpacing: 20
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingRight: 20,
        width: 100
    }
});