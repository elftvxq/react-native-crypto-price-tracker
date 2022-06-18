import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';
import WatchlistProvider from './src/Contexts/WatchlistContext';

export default function App() {
  return (
    <NavigationContainer theme={{ colors: { background: '#121212' } }}>
      <WatchlistProvider>
        <View style={styles.container}>
          <Navigation />
          <StatusBar style='light' />
        </View>
      </WatchlistProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
});
