import React from 'react';
import { View, Text } from 'react-native';
import { useWatchlist } from '../../Contexts/WatchlistContext';

const WatchlistScreen = () => {
  const { value } = useWatchlist();
  console.log(value, 'value');
  return (
    <View>
      <Text style={{ color: 'white' }}>Watch List</Text>
    </View>
  );
};

export default WatchlistScreen;
