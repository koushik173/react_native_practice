import { Button, Text, View} from 'react-native';

export const Home=()=>{
    // const {name,age}=props.route.params.data;

    return(
      <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize: 40}}>Home Screen</Text>
        <Text style={{fontSize: 40}}>Name: </Text>
        <Text style={{fontSize: 40}}>Age: </Text>
      </View>
    )
  }