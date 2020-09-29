import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import {EvilIcons} from "@expo/vector-icons";

export default function Animal({name,age,location}) {
    return(
        <View style={styles.container}>
<Image source={require('../assets/splash.png')} style={styles.image}/>
       <View style={styles.infoContainer}>
           <Text style={styles.name} numberOfLines={1}> {name}</Text>
           <Text>{age}</Text>
          
       </View>
<View style={styles.icons}>
    <EvilIcons name="location" size={25} color="#5100ad" />
    <Text>{location}</Text>
</View>



</View>

    )
} 

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
marginHorizontal:20,
alignItem:"center",
marginVertical:10,
    },
    image:{
        width:50,
        height:50,
        borderRadius:50,
    },
    infoContainer:{
        justifyContent:"center",
        marginHorizontal:15,
        flex:4,
    },
    name:{
        fontWeight:"bold",
        fontSize:17,

    },
    icons:{
flex:1,
    }
})