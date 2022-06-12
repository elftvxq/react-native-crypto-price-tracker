import React, { useState, useEffect } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import CoinItem from '../../components/CoinItem';
import { getCoinList } from '../../services/request.js';

const HomeScreen = ({}) => {
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

  const refetchCoins = async () => {
    setLoading(true);
    const fechedCoinList = await getCoinList();
    setCoinList(fechedCoinList);
    setLoading(false);
  };

  return (
    /* Flatlist automatically take id/ key from data as rendered item id, so we don't need to pass a key or id */

    <FlatList
      data={coinList}
      renderItem={({ item }) => <CoinItem marketCoin={item} />}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          tintColor='white'
          onRefresh={refetchCoins}
        />
      }
    />
  );
};

export default HomeScreen;
