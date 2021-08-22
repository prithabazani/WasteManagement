import React, { useState } from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

const LogIn = ({ navigation }) => {
  const [userId, SetUserId] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");
  const [mobileNo,SetMobileNo]=useState("");

  const NavigateToLogInPage = () => {
    if(userId!=""){
      if(password!=""){
         if(confirmPassword!=""){
            if(confirmPassword==password){
              if(mobileNo!=""){
                 navigation.navigate('LogIn')
            }
            else alert("You can't keep Mobile No blank")
         }
         else alert("password did not match with confirmPassword")
      }
      else alert("You can't keep confirmPassword blank")
    }
    else alert("You can't keep password blank")
  } 
  else alert("You can't keep userId blank")  
}

  return (
    <View style={styles.container} >
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={text => SetUserId(text)} />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={text => SetPassword(text)} />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
          onChangeText={text => SetConfirmPassword(text)} />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Mobile Number"
          placeholderTextColor="#003f5c"
          onChangeText={text => SetMobileNo(text)} />
      </View>
    
      <TouchableOpacity
        style={styles.submitBtn}
        onPress={NavigateToLogInPage}
      >
        <Text>Submit</Text>
      </TouchableOpacity>

    </View>
  )
}

export default LogIn


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //        backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgot: {
    color: "black",
    fontSize: 11
  },
  signup: {
    color: "black",
    fontSize: 16
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  submitBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  }
})