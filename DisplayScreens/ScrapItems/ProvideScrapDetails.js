import 'react-native-gesture-handler';
import React from 'react'
import ScrapCategory from '../ScrapCategory'
import RecycleBin from './RecycleBin'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//import Icon from 'react-native-vector-icons/Ionicons'
//import {Appbar} from 'react-native-paper'

import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
  // WebView
} from 'react-native';

const ProvideScrapDetails = ({ route, navigation }) => {
   
  //variable declaration
  //const [Count,SetCount]  = React.useState(0);
  const [Description, UpdateDescription] = React.useState("Glass Items");
  const [image, setImage] = useState('https://c8.alamy.com/comp/H9TM1X/broken-glass-and-scrap-metal-at-a-dump-fuerteventura-canary-islands-H9TM1X.jpg');

  const CategoryDetails = route.params;

  const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.ScreenContainer}>
      <Text>
        {/* { JSON.stringify(CategoryDetails) } */}
        Category : {CategoryDetails['category']}
      </Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={UpdateDescription}
      />
      <Text>
       {" Enter the scrap image"}
      </Text>  
       <ImageBackground
                source={{
                  uri: image,
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
      <Icon
         name="camera"
         size={35}
         color="#f00"
         style={{
           opacity:0.7,
           justifyContent:'center'
         }}
      />
      </ImageBackground>
      <AppButton
        title="Drop in RecycleBin"
        onPress={() => navigation.navigate("RecycleBin")}
      />
    </SafeAreaView>
  )
}

export default ProvideScrapDetails;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    justifyContent: "space-between",
    // backgroundColor: "#009688",
    padding: 16
  },
  inputStyle: {
    height: "30%",
    margin: 12,
    borderWidth: 1,
  },
  appButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonStyle: {
    backgroundColor: '#009688',
    borderRadius: 5,
    padding: 1,
    //width: "40%",
    height: 50
  },
  appButtonText: {
    fontSize: 20,
    alignContent: "center",
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});