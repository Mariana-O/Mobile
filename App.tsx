import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,  ScrollView, SafeAreaView } from 'react-native';
import Card from './src/components/card/Card';
import InputData from './src/components/inputData/InputData';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto'/>
      <Text />
        <ScrollView>
        <Card/>
        <Card/>
        <Card/>
       < InputData/>
       

      </ScrollView>
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#1515',
     padding: 20
  },
});
