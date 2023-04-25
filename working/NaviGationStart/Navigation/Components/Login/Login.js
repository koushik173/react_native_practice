import { Button, Text, View} from 'react-native';

export const Login=(props)=>{
    const data={
        'name': 'Roy',
        'age': 23
    }
    return(
      <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize: 40, marginBottom: 30}}>Login Screen</Text>
        <Button title='Lets Go Home' onPress={()=>props.navigation.navigate("Home", {data})}></Button>
      </View>
    )
  }