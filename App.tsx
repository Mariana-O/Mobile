import 'react-native-gesture-handler'
import { StyleSheet, Text,  ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Teste from './src/screens/Teste';

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
        <Stack.Screen name='Home' component={Home} options={{headerShown: false,}} />
        <Stack.Screen name='Teste' component={Teste} options={{title:'teste'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
