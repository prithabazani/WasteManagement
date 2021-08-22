import React,{useState} from "react";
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding'; 
import Icon from "react-native-vector-icons/FontAwesome"


import {
    View,
    Text,
    Flatlist
} from "react-native"

const AddressScreen = (hasLocationPermission) => {
  const [currentPosition,SetcurrentPosition] = useState();
  if(hasLocationPermission){
    Geolocation.getCurrentPosition(
      (position)=>{
        SetcurrentPosition(JSON.stringify(position));
        console.log(position);
      },
      (error) =>{
        console.log(error.code, error.message);
      },
      {
        enableHighAccuracy:true,
        timeout:1000,
        maximumAge:1000
      }
    );
  } 
 /* Geocoder.init("AIzaSyC58UP7Thf7aGdKHJ7xT9_NENgPANqa6OE");
  Geocoder.from(41.89,12.49).then(json=>
    {
      var address = json.results[0].address_components[0];
      console.log(address);
    })
    .catch(error=>
      console.warn(error));*/

   return( 
    <View>
        <Text>
          {"Welcome to Address Screen"}
        </Text>
        <Text>
           {currentPosition}
        </Text>  
        
         
    </View>
   )
}

export default AddressScreen;

