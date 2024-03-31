import * as React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UpcomingLaunches from './UpcomingLaunches';
import AllLaunches from './AllLaunches';
import PastLaunches from './PastLaunches';



const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="All Launches" component={AllLaunches} />
      <Tab.Screen name="Past Launches" component={PastLaunches} />
      <Tab.Screen name="Upcoming Launches" component={UpcomingLaunches} />
    </Tab.Navigator>
  );
}

export default HomeScreen;
