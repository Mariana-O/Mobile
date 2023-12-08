import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Btn(){
    return(
        <View>
            <TouchableOpacity style={styles.btnText}>
                <Text>botao</Text>
            </TouchableOpacity>
        </View>
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
})