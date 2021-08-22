import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {
 FlatList,
 View,   
 Text,
 StyleSheet,
 TouchableOpacity
} from 'react-native';

const RecycleBin = ({navigation}) => {

const [isLoading, setLoading] = useState(true);
const [dataObj, setdataObj] = useState([]);
//console.log(dataObj);


useEffect(() => {
  fetch('http://192.168.29.64:3000/recycleBin/getRecycleBin')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setdataObj(json);
    })
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
}, []);

const AppButton=({onPress,title})=>(
  <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
)

 return(
  <View style={ styles.container }>
  {isLoading ? <Text>Loading...</Text> : 
  ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
      <FlatList
        data={dataObj}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style = {styles.GridViewContainer}>
          <Text style={styles.container_text}>{item.id + '. ' + item.name}</Text>
          </View>
        )}
      />
      <AppButton
       title = "Submit"
       onPress = {()=>{navigation.navigate("Profile")}}
      />
    </View>
  )}
</View>  
 )
}

export default RecycleBin

const styles = StyleSheet.create({
container: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      marginLeft:16,
      marginRight:16,
      marginTop: 8,
      marginBottom: 8,
      borderRadius: 5,
      backgroundColor: '#FFF',
      elevation: 2,
  },
container_text: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
    justifyContent: 'center',
},
GridViewContainer: {
  flex:1,
  borderRadius:5,
  justifyContent: 'center',
  alignItems: 'flex-start',
  height: 100,
  margin: 5,
  backgroundColor: '#AF10AF'
 },
 appButtonContainer: {
  flex:1,
  flexDirection: 'row',
  justifyContent: 'space-around'
},
appButtonText: {
  fontSize: 20,
  alignContent:"center",
  color: "#fff",
  fontWeight: "bold",
  alignSelf: "center",
  textTransform: "uppercase"
},
buttonStyle:{
  backgroundColor:'#009688',
  borderRadius:5,
  padding:1,
  //width: "40%",
  height:50
}
})