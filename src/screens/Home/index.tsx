import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView,} from 'react-native';
import  Card  from '../../components/card/Card';
import Header from '../../components/header/Header';
import { useNavigation, NavigationProp} from '@react-navigation/native'
import { useEffect, useState } from 'react';
import { getAllPokemon } from '../../controllers/pokemonControllers';
import Bullets from '../../components/bullets/Bullets';
import Carrossel from '../../components/carrossel/Carrossel';

export default function Home(){
const { navigate } = useNavigation<NavigationProp<any>>();

const [pokemons, setPokemons] = useState<Pokemon[]>([]);

useEffect(() =>{
  getAllPokemon().then(setPokemons).catch((err) => console.log(err));
});

return (
  <ScrollView>
  <View style ={styles.container}>
    <Header />
    <ScrollView horizontal={true}>
     <Bullets/>
    </ScrollView>
    <View style={styles.scrollNoHeader}>
    <StatusBar style='dark'/>
    <Carrossel data={pokemons}/>
    {/* <Card data={pokemons}/> */}
    </View>
  </View>
  </ScrollView>
   
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF1E4',
  },
  btnText: {
    backgroundColor: 'grey',
    height: 80,
    borderRadius:50,
    alignItems: 'center',
    margin:50,
    elevation:5,
    justifyContent: "center"
},
scrollNoHeader: {
  padding: 20,
},
});
