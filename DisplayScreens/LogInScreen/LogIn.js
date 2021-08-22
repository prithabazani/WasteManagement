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
  const [userId, SetUserId] = useState();
  const [password, SetPassword] = useState();

  const ValidateLogin = () => {
    if (userId == "pritha") {
      if (password == "test") {
        //Alert.alert("successful login")
        navigation.navigate('NavigationPage')
      }
      else
        Alert.alert("Enter correct Password")
    }
    else {
      console.log("wrong userid")
      Alert.alert("Enter correct credential")
    }
  }

  const DoSignUp = () => {
      navigation.navigate('SignUp')
  }


  return (
    <View style={styles.container} >
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Username..."
          placeholderTextColor="#003f5c"
          onChangeText={text => SetUserId(text)} />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={text => SetPassword(text)} />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={ValidateLogin}
      >
        <Text style={styles.loginText}>LogIn</Text>
      </TouchableOpacity>
      <TouchableOpacity 
          style={styles.signup}
          onPress={DoSignUp}
         >
        <Text style={styles.loginText}>Signup</Text>
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
  loginBtn: {
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