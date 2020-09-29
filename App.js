
import React,{Component} from 'react';
import { StyleSheet,ScrollView, Text, View,TextInput,TouchableOpacity,FlatList } from 'react-native';
import LoginScreen from './LoginScreen';
import ContactsScreen from './ContactsScreen';
import Contact from './components/Contact';
import LoginAsign from './components/LoginAsign';


class App extends Component{
  constructor(props){
    super(props)
    this.state={
email:"",
password:"",
name:["ama","kofi","sam","bob","tony","james","ama","kofi","sam","bob","tony","james",]
    }
  }
  render(){
    return (
      <View style={styles.container}>
       
  {/*<LoginScreen/>*/}
 {/* <ContactsScreen/>*/}
  <LoginAsign/>




      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop:100,
  },
  input:{
    backgroundColor:"grey",
    height:60,
    marginLeft:1,
    marginBottom:5,
  },
  button:{
height:200,
color:"black",
fontSize:20,
  },
  buttonContainer:{
marginHorizontal:20,
backgroundColor:"grey",
height:35,
justifyContent:"center",
borderRadius:5,
  },

container2:{

}

});

export default App;