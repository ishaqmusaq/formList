import React from 'react';
import {View,FlatList}  from 'react-native';
import Animal from './Animal';


export default function AnimalScreen(){
    const animals=[
        {name:"Lion ", age:"23 years",location:"Madina"},
        {name:"Lion ", age:"23 years",location:"Madina"},
        {name:"Lion ", age:"23 years",location:"Madina"},
        {name:"Lion ", age:"23 years",location:"Madina"},
        
    ]
    return(
        <View>
<FlatList 
     data={animals}
       renderItem={({item})=>{
    return <Animal name={item.name} age={item.age} location={item.location} />
}}
keyExtractor={(item)=>item.number}
/>
        </View>
    )
}