import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
} from 'react-native';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Styles from '../Stylesheets/stylesheet';

function Detailscreen({ route }) {
  const { launchName, launchDetails, launchLogo, launchWebcast } = route.params;

  const handleWebcastPress = () => {
    //eingentlich wollte ich über Webview das YT video direkt einbinden leider wurde das von React Native nicht unterstützt
    Linking.openURL(launchWebcast);
  };

  return (
    <SafeAreaView style={Styles.detailContainer}>
      <Image source={{ uri: launchLogo }} style={Styles.detailImage} />
      <Text style={Styles.detailHeader}>{launchName}</Text>
      <Text style={Styles.detailText}>{launchDetails}</Text>
      <Button title="Watch Webcast" onPress={handleWebcastPress} />
    </SafeAreaView>
  );
}

export default Detailscreen;
