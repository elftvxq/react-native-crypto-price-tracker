import React, { memo } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const CoinItem = ({ marketCoin }) => {
  const {
    id,
    name,
    image,
    current_price,
    total_volume,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
  } = marketCoin;

  const navigation = useNavigation();

  const percentageColor =
    price_change_percentage_24h < 0 ? '#ea3943' : '#16c784';

  const normalizeVolume = (volume) => {
    if (volume > 1_000_000_000_000) {
      return `${Math.floor(volume / 1_000_000_000_000)} T`;
    } else if (volume > 1_000_000_000) {
      return `${Math.floor(volume / 1_000_000_000)} B`;
    } else if (volume > 1_000_000) {
      return `${Math.floor(volume / 1_000_000)} M`;
    } else if (volume > 1_000) {
      return `${Math.floor(volume / 1_000)} K`;
    }
  };

  return (
    <Pressable
      style={styles.coinContainer}
      onPress={() => navigation.navigate('CoinDetailedScreen', { coinId: id })}
    >
      <Image
        source={{ uri: image }}
        style={{
          height: 30,
          width: 30,
          marginRight: 10,
          alignSelf: 'center',
        }}
      />
      {/* put text inside the view, making it as a row, change the direction */}
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{market_cap_rank}</Text>
          </View>

          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'}
            size={12}
            color={percentageColor}
            style={{ alignSelf: 'center', marginRight: 5 }}
          />
          <Text style={{ color: percentageColor }}>
            {price_change_percentage_24h &&
              price_change_percentage_24h.toFixed(2)}
            %
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
        <Text style={styles.title}>
          NT${current_price && current_price.toLocaleString()}
        </Text>
        <Text style={{ color: 'white' }}>
          交易量 NT${total_volume && total_volume.toLocaleString()}
        </Text>
      </View>
    </Pressable>
  );
};

export default memo(CoinItem);
