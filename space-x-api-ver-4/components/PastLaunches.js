import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Styles from '../Stylesheets/stylesheet'


const PastLaunches = () => {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const getLaunches = async () => {
    try {
      const response = await fetch(
        'https://api.spacexdata.com/v4/launches/past'
      );
      const json = await response.json();
      setData(json);
      setFilteredData(json); // Initially, set filtered data same as the fetched data
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLaunches();
  }, []);

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filteredLaunches = data.filter((launch) =>
      launch.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filteredLaunches);
  };

  return (
    <View style={Styles.container}>
      <TextInput
        style={Styles.searchbar}
        placeholder="Search for past launches..."
        onChangeText={handleSearch}
        value={searchQuery}
      />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={({ id }) => id.toString()} // Ensure id is converted to string
          renderItem={({ item }) => (
            <View style={Styles.cards}>
              <Text style = {Styles.header}>{item.name}</Text>
              <Text>Flight Number: {item.flight_number}</Text>
              <Text>Date: {item.date_local}</Text>
              <Button
                title=">>Details"
                onPress={() =>
                  navigation.navigate('Details', {
                    launchName: item.name,
                    launchDetails: item.details,
                    launchLogo: item.links.patch.small,
                    launchWebcast: item.links.webcast,
                  })
                }
              />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default PastLaunches;
