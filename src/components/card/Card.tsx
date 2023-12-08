import {StyleSheet, Text, View,} from 'react-native';
import { TouchableOpacityProps } from 'react-native-gesture-handler';
 
type Props = {
  data: Pokemon[];
} & TouchableOpacityProps

export default function Card({data, ...rest} : Props){
    return(
      <View>
        {data.map((item) => {
          return(

    <View>
    <Text>{item.name}</Text>
    </View>
    )
   })};
   </View>
  )}
   
   

const style = StyleSheet.create({
    card: {
    display: 'flex',
    flexWrap:"wrap",
    flexDirection:"row",
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1515'

    },
    textStyle: {
      borderRadius: 5,
      backgroundColor: '#333',
      fontSize: 25,
      color: '#ffff',
    },
})

