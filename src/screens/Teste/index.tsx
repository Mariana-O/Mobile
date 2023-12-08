import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Teste(){
    const { navigate } = useNavigation<NavigationProp<any>>();
    return(
        <View>
          <Text>Olá, eu sou uma tela teste</Text>
          <TouchableOpacity onPress={() => navigate('Testedois')} style={styles.btnText}><Text>proxima tela</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "red",
    },
    btnText: {
        backgroundColor: 'red',
        height: 80,
        borderRadius:50,
        alignItems: 'center',
        margin:50,
        elevation:5,
        justifyContent: "center"
    
    }
})