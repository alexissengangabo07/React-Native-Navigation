import React from 'react';
import {View, Text, Button, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Detail from './screens/Detail';
import About from './screens/About'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNav from './screens/TabNav';

const Stack = createNativeStackNavigator();
// const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='TabNav' component={TabNav} options={{ headerShown: false}} />
          <Stack.Screen name='Detail' component={Detail}  options={{ title: 'Details' }} />
          <Stack.Screen name='About' component={About} options={{title: 'About Us'}} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;