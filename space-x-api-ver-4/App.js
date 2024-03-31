import * as React from 'react';
import { ActivityIndicator, FlatList, Text, View, Button,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Detailscreen from './components/Detailscreen';
import UpcomingLaunches from './components/UpcomingLaunches';
import AllLaunches from './components/AllLaunches';
import PastLaunches from './components/PastLaunches';
import HomeScreen from './components/Homescreen';







const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Launches" component={HomeScreen} />
          <Stack.Screen name="Details" component={Detailscreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
