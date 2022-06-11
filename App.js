import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import CoinItem from './src/components/CoinItem';
import cryptocurrencies from './assets/data/cryptocurrencies.json';
import { getCoinList } from './src/services/request';

export default function App() {
  const [coinList, setCoinList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoinList = async () => {
    setLoading(true);
    const fechedCoinList = await getCoinList();
    setCoinList(fechedCoinList);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoinList();
  }, []);

  if (loading || !coinList) {
    return <ActivityIndicator size='large' />;
  }
  console.log(coinList, 'coinList');
  return (
    <View style={styles.container}>
      {/* Flatlist automatically take id/ key from data as rendered item id, so we don't need to pass a key or id */}
      <FlatList
        data={coinList}
        renderItem={({ item }) => <CoinItem marketCoin={item} />}
      />
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
});
