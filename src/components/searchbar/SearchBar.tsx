import { StyleSheet, View, Text} from "react-native";
import React, { useState } from 'react'
import { TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 


export default function SearchBar(){
    const [inputValue, setInputValue] = useState('');
    return(
        <View  style = {styles.SearchBarContainer}>
          <TextInput value={inputValue} placeholder="Pesquisar" onChangeText={ text => setInputValue(text)}>
          </TextInput>
          <AntDesign name="search1" size={24} color="white" />
      </View>
    )
}

const styles = StyleSheet.create({
    SearchBarContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#DCDCDC',
        borderRadius: 45,
        elevatation: 3,
        paddingVertical: 10,
        margin: 20,
        paddingHorizontal: 25,
        borderWidth: 2,
    },
});