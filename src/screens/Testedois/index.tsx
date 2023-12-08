import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default function Testedois(){
    const { navigate } = useNavigation<NavigationProp<any>>();
    return(
        <ScrollView>
           <TouchableOpacity onPress={() => navigate('Home')} style={styles.btnText}><Text>Home</Text></TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    btnText: {
      backgroundColor: 'red',
      height: 80,
      borderRadius:50,
      alignItems: 'center',
      margin:50,
      elevation:5,
      justifyContent: "center"
  
  }
  });