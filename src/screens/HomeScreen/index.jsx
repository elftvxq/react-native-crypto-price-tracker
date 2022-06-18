import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  FlatList,
  RefreshControl,
  Text,
  Button,
  Alert,
} from 'react-native';
import CoinItem from '../../components/CoinItem';
import { getCoinList } from '../../services/request.js';
import HeaderBar from './HeaderBar.js';
import SortButton from './SortButton.js';

const HomeScreen = ({}) => {
  const [coinList, setCoinList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState(1);

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

  const sortByName = () => {
    coinList.sort((a, b) => a.name.localeCompare(b.name));

    setCoinList([...coinList]);
  };

  const sortByCurrentPrice = () => {
    coinList.sort((a, b) => {
      return b.current_price - a.current_price;
    });

    setCoinList([...coinList]);
  };

  const sortByCurrentVolume = () => {
    coinList.sort((a, b) => {
      return b.total_volume - a.total_volume;
    });

    setCoinList([...coinList]);
  };

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
    <View>
      <HeaderBar title={'Market'} />
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 15,
          paddingHorizontal: 10,
        }}
      >
        <SortButton title='貨幣名稱' onPress={sortByName} />
        <SortButton title='即時幣價' onPress={sortByCurrentPrice} />
        <SortButton title='即時交易量' onPress={sortByCurrentVolume} />
      </View>

      <FlatList
        // keyExtractor={(id) => {
        //   id.toString();
        // }}
        keyExtractor={(item, index) => item.id}
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
    </View>
  );
};

export default HomeScreen;
