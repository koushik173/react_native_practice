/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React, {useEffect, useState} from 'react';

import {
  Button,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const User = props => {
//   const {name, age} = props;
//   return (
//     <View style={{backgroundColor: 'green', padding: 5, marginTop: 10}}>
//       <Text style={{fontSize: 30}}> Name: {name}</Text>
//       <Text style={style.testBox}> Age: {age}</Text>
//       <Text style={Exstyle.testBox}> Age: {age}</Text>
//     </View>
//   );
// };

// const TextArea = () => {
//   const [name, setName] = useState('');
//   return (
//     <View>
//       <TextInput
//         style={style.textInput}
//         placeholder="Enter Your name"
//         onChangeText={text => setName(text)}></TextInput>

//       <Text style={{fontSize: 30}}>name:{name}</Text>
//     </View>
//   );
// };

// const RegistrationForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');
//   const [submitOk, setSubmitOk] = useState(false);

//   const clearAll = () => {
//     setSubmitOk(false);
//     setEmail('');
//     setName('');
//     setPass('');
//   };

//   return (
//     <View>
//       <TextInput
//         style={style.textInput}
//         placeholder="Enter Your Name"
//         onChangeText={setName}
//         value={name}></TextInput>
//       <TextInput
//         style={style.textInput}
//         placeholder="Enter Your Email"
//         onChangeText={setEmail}
//         value={email}></TextInput>
//       <TextInput
//         style={style.textInput}
//         secureTextEntry={true}
//         placeholder="Enter Your Password"
//         onChangeText={setPass}
//         value={pass}></TextInput>

//       <View>
//         <View style={{marginBottom: 10}}>
//           <Button onPress={() => setSubmitOk(true)} title="Submit"></Button>
//         </View>
//         <Button onPress={clearAll} title="Clear"></Button>
//       </View>

//       <View>
//         {submitOk ? (
//           <View>
//             <Text>name:{name}</Text>
//             <Text>Email:{email}</Text>
//             <Text>pass:{pass}</Text>
//           </View>
//         ) : null}
//       </View>
//     </View>
//   );
// };

// const FlattenList = () => {
//   const userData = [
//     {
//       id: 1,
//       name: 'Monoj',
//       age: 34,
//     },
//     {
//       id: 2,
//       name: 'Sumir',
//       age: 42,
//     },
//     {
//       id: 3,
//       name: 'Monohor',
//       age: 26,
//     },
//     {
//       id: 4,
//       name: 'Orudhuty',
//       age: 24,
//     },
//     {
//       id: 5,
//       name: 'Jessury',
//       age: 64,
//     },
//     {
//       id: 6,
//       name: 'Dharittri',
//       age: 48,
//     },
//   ];
//   return (
//     <View>
//       <Text style={{fontSize: 25}}>List with Flat List Componets: </Text>
//       <FlatList
//         data={userData}
//         renderItem={({item}) => <Text style={style.user}>{item.name}</Text>}
//         keyExtractor={item => item.id}
//       />
//     </View>
//   );
// };

// const MapList = () => {
//   const userData = [
//     {
//       id: 1,
//       name: 'Monoj',
//       age: 34,
//     },
//     {
//       id: 2,
//       name: 'Sumir',
//       age: 42,
//     },
//     {
//       id: 3,
//       name: 'Monohor',
//       age: 26,
//     },
//     {
//       id: 4,
//       name: 'Orudhuty',
//       age: 24,
//     },
//     {
//       id: 5,
//       name: 'Jessury',
//       age: 64,
//     },
//     {
//       id: 6,
//       name: 'Dharittri',
//       age: 48,
//     },
//     {
//       id: 7,
//       name: 'Shubadia',
//       age: 34,
//     },
//     {
//       id: 8,
//       name: 'Monosree',
//       age: 42,
//     },
//     {
//       id: 9,
//       name: 'Shotabdi',
//       age: 26,
//     },
//     {
//       id: 10,
//       name: 'Anuproama',
//       age: 24,
//     },
//     {
//       id: 11,
//       name: 'Jesika',
//       age: 64,
//     },
//     {
//       id: 12,
//       name: 'Sumona',
//       age: 48,
//     },
//   ];
//   return (
//     <View>
//       <Text style={{fontSize: 30}}>List with map function</Text>
//       <ScrollView style={{marginBottom: 250}}>
//         {userData.map(item => (
//           <Text style={style.user}>{item.name}</Text>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const MakeGrid = () => {
//   const userData = [
//     {
//       id: 1,
//       name: 'Monoj',
//       age: 34,
//     },
//     {
//       id: 2,
//       name: 'Sumir',
//       age: 42,
//     },
//     {
//       id: 3,
//       name: 'Monohor',
//       age: 26,
//     },
//     {
//       id: 4,
//       name: 'Orudhuty',
//       age: 24,
//     },
//     {
//       id: 5,
//       name: 'Jessury',
//       age: 64,
//     },
//     {
//       id: 6,
//       name: 'Dharittri',
//       age: 48,
//     },
//     {
//       id: 7,
//       name: 'Shubadia',
//       age: 34,
//     },
//     {
//       id: 8,
//       name: 'Monosree',
//       age: 42,
//     },
//     {
//       id: 9,
//       name: 'Shotabdi',
//       age: 26,
//     },
//     {
//       id: 10,
//       name: 'Anuproama',
//       age: 24,
//     },
//     {
//       id: 11,
//       name: 'Jesika',
//       age: 64,
//     },
//     {
//       id: 12,
//       name: 'Sumona',
//       age: 48,
//     },
//   ];
//   return (
//     <View>
//       <Text style={{fontSize: 30}}>Grid with Dynamic Data</Text>
//       <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
//         {userData.map(item => (
//           <Text style={style.gridList}>{item.name}</Text>
//         ))}
//       </View>
//     </View>
//   );
// };

// const ComponentsLoop = () => {
//   const userData = [
//     {
//       id: 1,
//       name: 'Roy',
//       age: 23,
//       email: 'asd@gamil.com',
//     },
//     {
//       id: 2,
//       name: 'Shantra',
//       age: 43,
//       email: 'asd@gamil.com',
//     },
//     {
//       id: 3,
//       name: 'Dharittri',
//       age: 53,
//       email: 'asd@gamil.com',
//     },
//   ];
//   return (
//     <View>
//       <Text style={{fontSize: 30}}>Components in Loop with Flatlist</Text>
//       <FlatList
//         data={userData}
//         renderItem={({item}) => <UserDataShow data={item} />}></FlatList>
//     </View>
//   );
// };

// const UserDataShow = props => {
//   const data = props.data;
//   return (
//     <View style={style.box}>
//       <Text style={style.userList}>{data.name}</Text>
//       <Text style={style.userList}>{data.email}</Text>
//     </View>
//   );
// };

// const UseEffectShow = () => {
//   const [showVotli, setShowVotli] = useState(false);
//   return (
//     <View>
//       <Button title="Show Votli" onPress={() => setShowVotli(true)}></Button>
//       <Button title="Hide Votli" onPress={() => setShowVotli(false)}></Button>
//       {showVotli ? <Votli/> : null}
//     </View>
//   );
// };

// const Votli = () => {

//   useEffect(()=>{
//     return ()=>console.warn("GAya");;
//   })
//   return (
//     <View>
//       <Text>Hey Im Votli.Also call me Hattie</Text>
//     </View>
//   );
// };


const CustomStatusBar =()=>{

  return(
    <View>
      <Text>Hi</Text>
      <StatusBar 
      backgroundColor="yellow" barStyle={'dark-content'}/>

    </View>
  )

}
const WebViewshow=()=>{
  return(
      <WebView source={{uri:"https://classroom.google.com/u/1/h"}}></WebView>
  )
}

const Home=()=>{
  return(
    <View>
      <Text>This is home</Text>
    </View>
  )
}

const style = StyleSheet.create({
  testBox: {
    color: 'blue',
    fontSize: 30,
    backgroundColor: 'red',
    marginTop: 5,
    borderRadius: 10,
    width: 180,
    height: 50,
    textAlign: 'center',
  },
  textInput: {
    fontSize: 18,
    color: 'blue',
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10,
  },
  user: {
    fontSize: 25,
    padding: 10,
    color: 'white',
    backgroundColor: 'green',
    margin: 10,
    textAlign: 'center',
  },
  gridList: {
    fontSize: 20,
    margin: 10,
    backgroundColor: 'blue',
    color: 'white',
    width: 110,
    height: 110,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  box: {
    flexDirection: 'row',
    borderWidth: 5,
    borderColor: 'orange',
    margin: 10,
    backgroundColor: 'green',
  },
  userList: {
    color: 'orange',
    margin: 10,
    fontSize: 30,
  },
});

export default App;
