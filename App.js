import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import CoinDetailedScreen from './src/screens/CoinDetailedScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <CoinDetailedScreen />
      {/* <HomeScreen /> */}
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
