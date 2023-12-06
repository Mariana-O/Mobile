import {StyleSheet, Text, View,} from 'react-native';

export default function Card(){
    return(
    
    <View style={style.card}>
    <Text style={style.textStyle}> Item </Text> 
    <Text style={style.textStyle}> Item </Text>   
    <Text style={style.textStyle}> Item </Text>   
       
    </View>
    )
}

const style = StyleSheet.create({
    card: {
    display: 'flex',
    flexWrap:"wrap",
    flexDirection:"row",
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    },
    textStyle: {
      borderRadius: 5,
      backgroundColor: '#333',
      fontSize: 25,
      color: '#ffff',
    },
})