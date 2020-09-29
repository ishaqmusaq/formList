import React from 'react';
import {View,FlatList}  from 'react-native';
import Contact from './components/Contact';


export default function ContactsScreen(){
    const contacts=[
        {name:"ishaq musah", number:"23-456-543-23"},
        {name:"john milk", number:"23-456-543-23"},
        {name:"aayisha musah", number:"23-456-543-23"},
        {name:"musah ilyas", number:"23-456-543-23"},
        {name:"ishaq rasah", number:"23-456-543-23"},
        {name:"ishaq mensah", number:"23-456-543-23"},
        {name:"ibrahim  baaba", number:"23-456-543-23"},
        {name:"ishaq musah", number:"23-456-543-23"},
        {name:"john milk", number:"23-456-543-23"},
        {name:"aayisha musah", number:"23-456-543-23"},
        {name:"musah ilyas", number:"23-456-543-23"},
        {name:"ishaq rasah", number:"23-456-543-23"},
        {name:"ishaq mensah", number:"23-456-543-23"},
        {name:"ibrahim  baaba", number:"23-456-543-23"},
    ]
    return(
        <View>
<FlatList 
     data={contacts}
       renderItem={({item})=>{
    return <Contact name={item.name} phone={item.phone}/>
}}
keyExtractor={(item)=>item.number}
/>
        </View>
    )
}