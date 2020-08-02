import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput,Button} from 'react-native-paper'


const RequestDemo = (props) => {

  const [state, setState] = useState({
    City:'',
    Community:'',
   error:null,
    display:false
  })


  const onPressHandler=()=>{
   
    if(state.City===''||state.Community===''){
      return setState({
        error:'please filled all fields'
      })
    }

    return setState({
      display:true,
    })
  }


  if(state.display){
    return <View style={styles.screen}>
    <Text style={{color:'#53c742',fontSize:24,marginVertical:10}}>Got it!</Text>
    <Text style={{fontSize:18,textAlign:'center'}}>Thank you for connecting with us. We will get in touch with you within 24 hours. MeanWhile you can </Text>
    <Text style={{fontSize:18,color:'red'}}>check out out offerings</Text>
    </View>
  }


  return <View style={styles.screen}>
    <Text style={styles.text}>Please provide the following information</Text>
    <TextInput style={{...styles.input,marginTop:20}} label='City Name' value={state.City} onChangeText={text => setState({ City: text, })} underlineColor="#ed6b61" />
    <Text>{state.errorCity}</Text>
    <TextInput style={styles.input} label='Community Name' value={state.Community} onChangeText={text => setState({ Community: text })} selectionColor='orange' underlineColor="#ed6b61" dense='true' />
    <Text>{state.errorCommunity}</Text>

  <Text>{state.error}</Text>
    <Button contentStyle={styles.content} style={styles.btn} mode="contained" onPress={onPressHandler}>
    Press me
  </Button>
  </View>

}


RequestDemo.navigationOptions=()=>{
  return {
      headerTitle: 'Request Demo',
        headerStyle: {
            backgroundColor: '#ed6b61'
        },
        headerTintColor:'white',
        headerTitleStyle: {
            color: 'white',
            fontSize: 25
        },
  }
}

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    fontSize: 18,
    marginTop:30,
  },
  input: {
    width: '80%',
    backgroundColor: 'white',
  },
  btn: {
  width:'70%',
  height:60,
    marginTop: 30,
    borderRadius:30,
   backgroundColor:'#ed6b61'
  },
  content:{
    marginVertical:'5%'
  }

})

export default RequestDemo