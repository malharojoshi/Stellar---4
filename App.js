import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import DailyPicScreen from './screens/DailyPic';
import SpaceCraftScreen from './screens/SpaceCrafts';
import StarmapScreen from './screens/StarMap';
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{
      headerShown:false
    }}>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
    <Stack.Screen name="SpaceCrafts" component={SpaceCraftScreen}/>
    <Stack.Screen name="StarMap" component={StarmapScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
export default App;