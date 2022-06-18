import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useWatchlist } from '../../Contexts/WatchlistContext';
import CoinItem from '../../components/CoinItem';

const WatchlistScreen = () => {
  const { watchlistCoinIds } = useWatchlist();
  console.log(watchlistCoinIds, 'watchlistCoinIds');
  return (
    <FlatList
      data={watchlistCoinIds}
      // renderItem={({ item }) => <CoinItem marketCoin={item}
      // />}
    />
  );
};

export default WatchlistScreen;
