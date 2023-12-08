import 'react-native-gesture-handler'
import { StyleSheet, Text,  ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Teste from './src/screens/Teste';
import Testedois from './src/screens/Testedois';

type StackNavigatorParamsList = {
  Home: undefined;
  Teste: undefined;
  Testedois: undefined;
}

const Stack = createStackNavigator<StackNavigatorParamsList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{title:'Tela principal'}}/>
        <Stack.Screen name='Teste' component={Teste}/>
        <Stack.Screen name='Testedois' component={Testedois}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#1515',
    padding: 20,
    justifyContent: 'center',
    alignItems: "center"
  },
});
