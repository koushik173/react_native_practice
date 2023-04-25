import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

const ApiCall = () => {
    const [getdata, setData] = useState(undefined);

    useEffect(()=>{
        // console.warn("hello");
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.warn(error));
    },[])

    // console.warn(data);
  return (
    <ScrollView>
      <Text>ApiCall</Text>
      <Text>Total: {getdata.length}</Text>
      {
        getdata.map((item)=><View style={{borderColor: 'red', padding:10, borderWidth:2, margin: 2}}>
          <Text>id: {item.id}</Text>
          <Text>Title: {item.title}</Text>
          <Text>Body: {item.body}</Text>
        </View>)
      }
      

      
    </ScrollView>
  )
}

export default ApiCall