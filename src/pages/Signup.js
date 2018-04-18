import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Logo from '../common/Logo';

import {Actions} from 'react-native-router-flux';

export default class Signup extends  Component {
    constructor(props) {
        super(props);
      }

    static navigationOptions = {
      drawerLabel: () => null
 }

	render() {
		return(
      <View style={styles.container}>
      <Logo/>
      <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={(email) => this.setState ({ email })}
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(password) => this.setState ({ password })}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
              />  
      <View>
              <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('EmailLogin')}>
              <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity> 
              </View>
              <View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress={()=> this.props.navigation.navigate('Login')}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
				</View>
    </View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:10,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  },
  inputBox: {
    width:280,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 23,
    paddingHorizontal:10,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:280,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 10
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
});