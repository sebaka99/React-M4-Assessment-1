import React from "react";
import { StyleSheet,Text, TextInput, View, Image, TouchableOpacity, Button, useState, StatusBar, Alert } from 'react-native';




const Login = ( { navigation }) =>{
    
  // Initial state of email and password will be empty
 // const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');


  console.log('The name is Kamogelo');

    return (
        
    

    <View style={styles.container}>
      
    <Image style={styles.image} source = {require("../assets/proj.png")}/>
    <StatusBar style="auto" />

    <View style={styles.inputView}>
    
    <TextInput style={styles.textInput}
    placeholder='Email'
    placeholderTextColor="003f5c"
    //onChangeText={(email) => setEmail(email)}

    />
    </View>

    <View style={styles.inputView}>
      
    <TextInput style={styles.textInput}
    placeholder='Password'
    placeholderTextColor="003f5c"
    secureTextEntry={true}
    //onChangeText={(password) => setPassword(password)}

    />
    </View>

    <View >
    <TouchableOpacity>
        <Text style={styles.forgotPasswordText} onPress={() => Alert.alert('Feature coming soon')}>Forgot Password?</Text>
      </TouchableOpacity>

      <Button style={styles.loginButton} 
      title="Login" 

      onPress={() => navigation.navigate('Dashboard')}> 
             
      </Button>

      <TouchableOpacity>
        <Text style={styles.createAccountText} onPress={() => navigation.navigate('Register')}>New user? Create an account.</Text>
      </TouchableOpacity>
   
    </View>  
    
  </View>
    );
    

    
    
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Make space between the image and text inputs
  image :{
    marginBottom: 40
  },

  inputView: {
    backgroundColor: "skyblue",
    borderRadius: 10,
    width: "90%",
    height: 50,
    marginBottom: 20,
    alignItems: "center"
  },

  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgotPasswordText: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    textAlign: "center",
    marginBottom: 20,
  },

  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: 'yellow',
  },

  createAccountText: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    textAlign: "center",
    marginTop: 20
    
  },
});
