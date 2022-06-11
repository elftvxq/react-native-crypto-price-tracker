import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CoinItem from './src/components/CoinItem';
import cryptocurrencies from './assets/data/cryptocurrencies.json';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Flatlist automatically take id/ key from data as rendered item id, so we don't need to pass a key or id */}
      <FlatList
        data={cryptocurrencies}
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
