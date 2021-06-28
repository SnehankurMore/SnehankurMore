import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen/RegisterScreen';
import WelcomeScreen from '../Screens/WelcomeScreen/WelcomeScreen';




const Stack = createStackNavigator();

export const AllNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen
         name="Register"    
         component={RegisterScreen}
         options={{title: 'Register'}}
        />
        <Stack.Screen
         name="Welcome"
         component={WelcomeScreen}
         options={{title: 'Welcome'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
