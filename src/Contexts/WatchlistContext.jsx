import React, { useContext, createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WatchlistContext = createContext();

// customized hooks, can directly import to use
export const useWatchlist = () => useContext(WatchlistContext);

const WatchlistProvider = ({ children }) => {
  const [watchlistCoinIds, setWatchlistCoinIds] = useState([]);

  const getWatchlistData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@watchlist_coins');
      setWatchlistCoinIds(jsonValue !== null ? JSON.parse(jsonValue) : []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWatchlistData();
  }, []);

  // id is currency id to know which one to store
  const storeWatchlistCoinId = async (coinId) => {
    try {
      const newWatchlist = [...watchlistCoinIds, coinId];
      const jsonValue = JSON.stringify('watchlist_coins', newWatchlist);
      await AsyncStorage.setItem('@watchlist_coins', jsonValue);
      setWatchlistCoinIds(newWatchlist);
    } catch (e) {
      console.log(e);
    }
  };

  const removeWatchlistCoinIs = async (coinId) => {
    const newWatchlist = watchlistCoinIds.filter(
      (coinIdValue) => coinIdValue !== coinId
    );

    const jsonValue = JSON.stringify(newWatchlist);
    await AsyncStorage.setItem('@watchlist_coins', jsonValue);
    setWatchlistCoinIds(newWatchlist);
  };

  return (
    <WatchlistContext.Provider
      value={{
        watchlistCoinIds,
        storeWatchlistCoinId,
        removeWatchlistCoinIs,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};
export default WatchlistProvider;
