import React, {useState, useEffect} from "react";
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';


const [Laititude, setLatitude] = React.useState(0);
const [Longitude, setLongitude] = React.useState(0);
const [Address, setAddress] = React.useState(null);

const APIkey = "AIzaSyC58UP7Thf7aGdKHJ7xT9_NENgPANqa6OE";
Geocoder.init(APIkey);

UpdateLocation = () => {
    const [displayCurrentAddress,setDisplayCurrentAddress]=useState("Wait, We are fetching your location");

    Geolocation.getCurrentPosition((position)=> {
        setState({
            Laititude: position.coords.latitude,
            Longitude: position.coords.longitude
        })
    })

    return(
        <View>
            
        </View>
    )
}    

