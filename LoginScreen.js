import React,{Component} from 'react';

import {StyleSheet,ScrollView ,View,Text,TextInput,TouchableOpacity} from 'react-native';



export default class LoginScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:"",
        }
    }
    render(){
return(
  <ScrollView showVerticalScrollIndicator={false} style={StyleSheet.container}>
        <View style={styles.LoginTextContainer}>
            <Text style={styles.LoginText}>Login</Text>
           
            </View>
 <View>

<TextInput 
placeholderTextColor="#aaaaaa"
style={styles.input }
 placeholder="Username" 
 autoCapitalized="none"
 autoCorrect={false}
 value={this.state.username}
         onchangeText={(username)=>{
           this.setState({username})
         }}
/>


<TextInput
placeholderTextColor="#aaaaaa"
 style={styles.input}
 placeholder="Password" 
 autoCapitalized="none"
 autoCorrect={false}
 secureTextEntry={true}
 value={this.state.password}
         onchangeText={(password)=>{
           this.setState({password})
         }}
/>
<Text style={styles.forgotPassword}>Forget Password</Text>

</View>



        
<View style={styles.buttonContainer}>
<TouchableOpacity>
    <Text style={styles.buttonText}>Log in</Text>
</TouchableOpacity>
 </View>


<View style={styles.noAccountContainer}>
<Text style={styles.noAccountText}>Dont have an account</Text>
<Text style={styles.signInText}>Sign up</Text>
</View>
    
  </ScrollView>  
)
    }
}

const styles=StyleSheet.create({
    container:{
marginHorizontal:50,
    },
    LoginText:{
        fontSize:50,
        color:"#5100ad",
    },
    LoginTextContainer:{
        marginBottom:30,
    },
    input:{
borderBottomWidth:1,
marginBottomColor:"#5100ad",
fontSize:20,
height:50, 
marginTop:20,


    },
    forgotPassword:{
color:"#0853a8",
alignSelf:"flex-end",
marginVertical:3,
    },

    buttonContainer:{
height:50,
backgrounColor:"#5100ad",
justifyContent:"center",
alignItems:"center",
borderRadius:10,
marginVertical:50,
    },

    buttonText:{
     color:"#fff",
     fontSize:25,
     

    },
    noAccountContainer:{
flexDirection:"row",
 justifyContent:"center",
 marginRight:"",
    },

    signInText:{
fontSize:16,
color:"#5100ad",
    },

    noAccountText:{
      marginRight:10,
      fontSize:16,

    }

    
});

