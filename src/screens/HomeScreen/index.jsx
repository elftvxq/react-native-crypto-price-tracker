import React, { useState, useEffect } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import CoinItem from '../../components/CoinItem';
import { getCoinList } from '../../services/request.js';

const HomeScreen = ({}) => {
  const [coinList, setCoinList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoinList = async (pageNumber) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const fechedCoinList = await getCoinList(pageNumber);
    setCoinList((existingCoinList) => [...existingCoinList, ...fechedCoinList]);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoinList();
  }, []);

  const refetchCoinList = async () => {
    if (loading) {
      return;
    }
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
      onEndReached={() => fetchCoinList(coinList.length / 25 + 1)}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          tintColor='white'
          onRefresh={refetchCoinList}
        />
      }
    />
  );
};

export default HomeScreen;
