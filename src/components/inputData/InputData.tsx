import {StyleSheet, Text, View,} from "react-native";
import { useState } from 'react'
import { TextInput } from "react-native";

export default function InputData(){
    const [inputValue, setInputValue] = useState('');
    return(
        <View>
          <Text style={styles.text}>  Digite: </Text>
            <TextInput value={inputValue} onChangeText={ text => setInputValue(text)} style = {styles.setText}>
            </TextInput>
          <Text>{inputValue}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
setText: {
    fontSize: 16,
    backgroundColor: '#dcdcdc',
    elevatation: 5,
    borderRadius: 45,
},

text: {
    fontSize: 25,
},
})