import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../searchbar/SearchBar';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';  

export default function Header(){
    return(
        <SafeAreaView style={styles.headerView}>
            <StatusBar style='auto'/>
            <View style={styles.headerTopElements}>
                <AntDesign name="user" size={24} color="black" />
                <Text style={styles.colorText}> MARIANA'S </Text>
                <Feather name="bell" size={24} color="black" />
            </View>
            <SearchBar/>
        </SafeAreaView>

    )
};

const styles = StyleSheet.create({
    headerView: {
        backgroundColor: '#1515',
    },
    headerTopElements: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 17,
    },
    colorText: {
        color: "white",
    },
});