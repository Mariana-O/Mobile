import { Text, View, StyleSheet, TouchableOpacityProps, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useEffect, useState } from 'react';
import { getAllPokemon } from '../../controllers/pokemonControllers';
import { useNavigation, NavigationProp} from '@react-navigation/native'
import ImagemFundo from '../../../assets/ImagemFundo.jpg'

type Props = {
    data: Pokemon[];
  } & TouchableOpacityProps;


export default function Carrossel({data, ...rest} : Props){
// const { navigate } = useNavigation<NavigationProp<any>>();

// const [pokemons, setPokemons] = useState<Pokemon[]>([]);

// useEffect(() =>{
//   getAllPokemon().then(setPokemons).catch((err) => console.log(err));
// });

const poke = data.map((item) => {
    return item

})
    return(
        <View>
            <Carousel
             containerCustomStyle={{overflow: 'visible'}}
             data={poke}
             renderItem={({ item }) => {
                return(
                <View style={styles.itemView}>
                  <ImageBackground source={ImagemFundo} style={styles.backgroundImg} blurRadius={3.5} borderRadius={25}>
                    <Text style={styles.textColor}>
                        {item.name}
                    </Text>
                    </ImageBackground>
                </View>
                )
             }}  
            firstItem={2}
            inactiveSlideOpacity={0.80} //opacidade de itens inativos
            inactiveSlideScale={0.77} //tamanho dos itens inativos
            sliderWidth={300} //tamanho do slider 
            itemWidth={200} //tamanho do item
            slideStyle={{display: 'flex',}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    itemView: {
        width: 200,
        height: 300,
        borderRadius: 20,
        margin: 10,

    },
    backgroundImg: {
        flex: 1,
        blurRadius: 0.75,
        width: 200,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textColor:{
        fontSize:30,
        color: 'white',
    }

})