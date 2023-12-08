import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import  Card  from '../../components/card/Card';
import InputData from '../../components/inputData/InputData';
import Btn from '../../components/btn/Btn';
import { useNavigation, NavigationProp} from '@react-navigation/native'
import { FlatList, ScrollView,  } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { getAllPokemon } from '../../controllers/pokemonControllers';

export default function Home(){
const { navigate } = useNavigation<NavigationProp<any>>();

const [pokemons, setPokemons] = useState<Pokemon[]>([]);

useEffect(() =>{
  getAllPokemon().then(setPokemons).catch((err) => console.log(err));
})

return (
  <ScrollView>
  <View style ={styles.container}>
    <StatusBar style='dark'/>
    <Text>Mariana Camargo</Text>

    <TouchableOpacity onPress={() => navigate('Teste')} style={styles.btnText}>
      <Text>go to teste Screen</Text>
    </TouchableOpacity>
    <Card data={pokemons}/>
  </View>
  </ScrollView>
   
);
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#1515',
     padding: 20
  },
  btnText: {
    backgroundColor: '#fffff',
    height: 80,
    borderRadius:50,
    alignItems: 'center',
    margin:50,
    elevation:5,
    justifyContent: "center"
},
});
