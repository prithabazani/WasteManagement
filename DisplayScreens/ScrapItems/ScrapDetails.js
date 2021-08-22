import 'react-native-gesture-handler';
import React, { useEffect, useState, useRef } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { Picker } from '@react-native-picker/picker'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RecycleBin from './RecycleBin'
import ScrapCategory from '../Datahub/ScrapCategory.json'  //import json file
import BottomSheet from 'reanimated-bottom-sheet';
//import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from "react-native-raw-bottom-sheet";

//import Icon from 'react-native-vector-icons/Ionicons'
//import {Appbar} from 'react-native-paper'

import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Image
  // WebView
} from 'react-native';

const ProvideScrapDetails = ({ route, navigation }) => {

  //variable declaration
  //const [Count,SetCount]  = React.useState(0);
  const sheetRef = React.useRef(null);
  const pickerRef = useRef();
  const [SelectedScrap, SetSelectedScrap] = useState();
  const [Description, UpdateDescription] = React.useState("Glass Items");
  //const [image, setImage] = useState('https://c8.alamy.com/comp/H9TM1X/broken-glass-and-scrap-metal-at-a-dump-fuerteventura-canary-islands-H9TM1X.jpg');
  const CategoryDetails = route.params;
  const [imageArray, setImageArray] = useState([]);

  const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  )

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const takePhotoFromCamera = () => {
    const imgArr = [...imageArray];
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      imgArr.push({ "image_path": image.path })
      setImageArray(imgArr);
     // setImage(image.path);
      sheetRef.current.close();
    });
  }

  const DeletePhotoFromList = (imagepath) => {
    console.log(imagepath)
    const filteredImageArray = imageArray.filter(item => item.image_path !== imagepath);
    setImageArray(filteredImageArray);
  }

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      sheetRef.current.close();
    });
  }

  const RenderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => sheetRef.current.close()}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.ScreenContainer}>
      {/*  <BottomSheet
        ref={sheetRef}
        snapPoints={[300,0]}
        renderContent={renderInner}
        initialSnap={1}
        enabledGestureInteraction={true}
    /> */}
      <RBSheet
        ref={sheetRef}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={320}
      >
        <RenderInner />
      </RBSheet>
      <View style={{ borderWidth: 1, borderColor: 'red', height:50, width:200 }}>
      <Picker
        style={styles.pickerStyle}
        ref={pickerRef}
        placeholder="Select Scrap Category"
        selectedValue={SelectedScrap}
        onValueChange={(itemValue) =>
        SetSelectedScrap(itemValue)
        }>
        <Picker.Item label={ScrapCategory.GlassScrap} value={ScrapCategory.GlassScrap} />
        <Picker.Item label={ScrapCategory.PaperScrap} value={ScrapCategory.PaperScrap} />
        <Picker.Item label={ScrapCategory.EWaste} value={ScrapCategory.EWaste} />
        <Picker.Item label={ScrapCategory.PlasticScrap} value={ScrapCategory.PlasticScrap} />
        <Picker.Item label={ScrapCategory.Thermocol} value={ScrapCategory.Thermocol} />
      </Picker>
      </View>
      <TextInput
        placeholder="Enter the scrap details"
        style={styles.inputStyle}
        Text={Description}
        onChangeText={(event) => UpdateDescription(event)}
      />
      <View>
        <TouchableOpacity onPress={() => sheetRef.current.open()} >
          <Icon style={{backgroundColor:"black",width: 25, height: 25}}
            name="camera"
            size={25}
            color="#fff"
          />
        </TouchableOpacity>
        <Text>
        Upload
        </Text>
       </View> 
      <FlatList 
        horizontal
        keyExtractor={keyExtractor}
        data={imageArray}
        renderItem={({ item }) => (
          <View style={styles.ListViewContainer}          >
          <Image
          source={{ uri: item.image_path }}
          style={{ width: 100, height: 100,marginTop:5,marginRight:15,borderRadius:15}}
          showsHorizontalScrollIndicator={false}>
            
         </Image>
          <View style={{
              position: 'absolute',
              right:0,
              top:0
            }}>  
          <TouchableOpacity onPress={() =>{DeletePhotoFromList(item.image_path)}} >
          <Icon
            name="close-circle"
            size={25}
            color="#fff"
          />
        </TouchableOpacity>
        </View>
          </View>
        )}
      />
      <AppButton
        title="Drop in RecycleBin"
        onPress={() => { navigation.navigate("RecycleBin") }}
      />
    </SafeAreaView>
  )
}

export default ProvideScrapDetails;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    justifyContent: "space-between",
    //backgroundColor: "#009600",
    padding: 20
  },
  inputStyle: {
    height: "30%",
    marginTop: 10,
    borderWidth: 1,
  },
  pickerStyle: {
    height:50,
    width:200
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
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  ListViewContainer: {
    borderColor:"black",
    borderRadius:5,
    minHeight:120,
    paddingTop:10,
    marginLeft:4,
    marginRight:4,
    position:'relative'
 },
});