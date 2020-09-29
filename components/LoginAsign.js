import React,{Component} from 'react';

import {StyleSheet,ScrollView ,View,Text,TextInput,TouchableOpacity} from 'react-native';



export default class LoginAsign extends Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            email:"",
            password:"",
            passwordAgain:""
        }
    }
    render(){
return(
  <ScrollView showVerticalScrollIndicator={false} style={StyleSheet.container}>
        <View style={styles.LoginTextContainer}>
            <Text style={styles.LoginText}>Sign up</Text>
           
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
style={styles.input }
 placeholder="Email" 
 autoCapitalized="none"
 autoCorrect={false}
 value={this.state.email}
         onchangeText={(email)=>{
           this.setState({email})
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


<TextInput
placeholderTextColor="#aaaaaa"
 style={styles.input}
 placeholder="Password again" 
 autoCapitalized="none"
 autoCorrect={false}
 secureTextEntry={true}
 value={this.state.passwordAgain}
         onchangeText={(passwordAgain)=>{
           this.setState({passwordAgain})
         }}
/>
<Text style={styles.forgotPassword}>Forget Password</Text>

</View>



        
<View style={styles.buttonContainer}>
<TouchableOpacity>
    <Text style={styles.buttonText}>Sign up</Text>
</TouchableOpacity>
 </View>


<View style={styles.noAccountContainer}>
<Text style={styles.noAccountText}>You already have an account</Text>
<Text style={styles.signInText}>Log in</Text>
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
