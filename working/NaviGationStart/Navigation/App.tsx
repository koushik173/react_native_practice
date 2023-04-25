import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Button, Text, View} from 'react-native';
import { Home } from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import { Header } from './Components/Login/Header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUp from './Components/SignUp/SignUp';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import ApiCall from './Components/ApiCall/ApiCall';




// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();


//npm start --clean--cache

const App=()=> {
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen  name='Login' component={Login} />
        <Tab.Screen  name='Home' component={Home}/>
        <Tab.Screen  name='SignUp' component={SignUp}/>
        <Tab.Screen  name='ApiCall' component={ApiCall}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default App;
