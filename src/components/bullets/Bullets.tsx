import { Text, View, StyleSheet } from "react-native";
import bullets from "../../services/bullets";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Bullets() {
    return (
        <View style={styles.bulletsView}>
            {bullets.map((item) => {
                return (
                    <TouchableOpacity style={styles.touchableBtn}>
                    <Text style={styles.touchableText}>{item.name}</Text>
                    </TouchableOpacity>
                )

            })}
        </View>
    )
}

const styles = StyleSheet.create({
    bulletsView: {
        flexDirection: 'row',
        margin: 7,

    },
    touchableBtn: {
        borderRadius: 30,
        padding: 10,
        marginHorizontal: 5,
        backgroundColor: '#CEDEBD'
    },
    touchableText : {
        fontSize: 20,
        

    }

})