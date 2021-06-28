import * as React from 'react';
import {createAppContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../LoginScreen/LoginScreen';
import RegisterScreen from '../RegisterScreen/RegisterScreen';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';

const screens ={
    LoginScreen:{
        screen : LoginScreen
    },
    WelcomeScreen :{
        screen:WelcomeScreen
    },
    RegisterScreen:{
        screen:RegisterScreen
    },
}

const LoginStack = createStackNavigator(screens)

export default createAppContainer(LoginStack)