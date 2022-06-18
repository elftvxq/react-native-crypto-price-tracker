import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import { useWatchlist } from '../../Contexts/WatchlistContext';
import CoinItem from '../../components/CoinItem';
import { getWatchlistedCoins } from '../../services/request.js';
// import { WatchListContext } from '../../Contexts/WatchlistContext';

const WatchlistScreen = () => {
  const { watchlistCoinIds } = useWatchlist();

  console.log(
    '🚀 ~ file: index.jsx ~ line 9 ~ WatchlistScreen ~ watchlistCoinIds',
    watchlistCoinIds
  );

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  // const transformCoinIds = () => {
  //   if (watchlistCoinIds) return watchlistCoinIds.join('%2C');
  // };
  // console.log(
  //   '🚀 ~ file: index.jsx ~ line 18 ~ WatchlistScreen ~ transformCoinIds',
  //   transformCoinIds()
  // );

  const fetchWatchlistedCoins = async () => {
    if (loading) return;

    setLoading(true);

    const watchlistedCoinsData = await getWatchlistedCoins();
    // ((
    //   await getWatchlistedCoins(1, transformCoinIds())
    // )) || [];

    // setCoins((existingCoins) => [...existingCoins, ...watchlistedCoinsData]);
    // setCoins([...coins, ...watchlistedCoinsData]);
    setCoins(watchlistedCoinsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchWatchlistedCoins();
  }, []);

  // useEffect(() => {
  //   fetchWatchlistedCoins();
  // }, [watchlistCoinIds]);

  return (
    <FlatList
      keyExtractor={(id) => {
        id.toString();
      }}
      data={coins}
      renderItem={({ item }) => <CoinItem marketCoin={item} />}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          tintColor='white'
          onRefresh={fetchWatchlistedCoins}
        />
      }
    />
  );
};

export default WatchlistScreen;
