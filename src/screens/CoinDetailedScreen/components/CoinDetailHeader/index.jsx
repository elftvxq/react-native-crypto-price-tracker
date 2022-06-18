import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons, EvilIcons, FontAwesome } from '@expo/vector-icons';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { useWatchlist } from '../../../../Contexts/WatchlistContext';

const CoinDetailHeader = (props) => {
  const { coinId, image, name, symbol, marketCapRank } = props;
  // hooks
  const navigation = useNavigation();
  const { watchlistCoinIds, storeWatchlistCoinId, removeWatchlistCoinId } =
    useWatchlist();

  const checkIfCoinIsWatchlisted = () => {
    return watchlistCoinIds.some((coinIdValue) => coinIdValue === coinId);
  };
  console.log(
    '🚀 ~ file: index.jsx ~ line 18 ~ checkIfCoinIsWatchlisted ~ checkIfCoinIsWatchlisted',
    checkIfCoinIsWatchlisted
  );

  const handleWatchlistCoin = () => {
    if (checkIfCoinIsWatchlisted()) {
      return removeWatchlistCoinId(coinId);
    }
    return storeWatchlistCoinId(coinId);
  };

  return (
    <View style={styles.headerContainer}>
      <Ionicons
        name='chevron-back-sharp'
        size={30}
        color='white'
        onPress={() => navigation.goBack()}
      />
      <View style={styles.tickerContainer}>
        <Image source={{ url: image }} style={{ width: 25, height: 25 }} />
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>
            #{marketCapRank}
          </Text>
        </View>
      </View>

      <FontAwesome
        name={checkIfCoinIsWatchlisted() ? 'star' : 'star-o'}
        size={25}
        color={checkIfCoinIsWatchlisted() ? '#FFBF00' : 'white'}
        onPress={handleWatchlistCoin}
      />
    </View>
  );
};

export default CoinDetailHeader;
