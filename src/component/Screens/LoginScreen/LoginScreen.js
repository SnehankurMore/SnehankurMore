import React from 'react';
import {View, StyleSheet, Text,Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import RegisterScreen from '../Screens/RegisterScreen/RegisterScreen';
// import WelcomeScreen from '../Screens/WelcomeScreen/WelcomeScreen';
// import { createStackNavigator } from '@react-navigation/stack';
import Navigator from '../Routes/LoginStack'

const Stack = createStackNavigator();


const LoginScreen = ({navigation})=>{
      return(
      <View>
      <Text>Login</Text>
      <TextInput 
        style={{
          height: 40,
          borderColor: 'red',
          borderWidth: 5
        }}
        placeholder={'Email'}
        keyboardType={'email-address'}
        defaultValue=""
      />
      <TextInput
        style={{height: 40,
          borderColor: 'red',
          borderWidth: 5}}
        placeholder={'Password'}
        defaultValue=""
      />

      <Button
        style={{marginTop: 10}}
        color="#00A7E1"
        onPress={() => navigation.navigate('PressHandler')}
        title="Login"
        type="outline">
      </Button>
      <Button
        style={{marginTop: 10}}
        color="#00A7E1"
        onPress={() => navigation.navigate('RegisterScreen')}
        title="Don't have an Account? Register">
      </Button>
      
    </View>
      )
    }

    const PressHandler = () => {
      navigation.navigate('WelcomeScreen')
    };

    const RegisterScreen = ({})
 

  export default LoginScreen;