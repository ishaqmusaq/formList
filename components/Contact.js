import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import {MaterialIcons,MaterialCommunityIcons,SimpleLineIcons} from "@expo/vector-icons";

export default function Contact({name,phone}) {
    return(
        <View style={styles.container}>
<Image source={require('../assets/favicon.png')} style={styles.image}/>
       <View style={styles.infoContainer}>
           <Text style={styles.name} numberOfLines={1}> {name}</Text>
           <Text>{phone}</Text>
       </View>
<View style={styles.icons}>
    <MaterialIcons  name="local-phone" size={25} color="#5100ad" />
</View>

<View style={styles.icons}>
    <MaterialCommunityIcons name="message-processing" size={25} color="#009cf5"/>
</View>


<View style={styles.icons}>
    <SimpleLineIcons name="options-vertical" size={25 } color="#8a8a8a"/>
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