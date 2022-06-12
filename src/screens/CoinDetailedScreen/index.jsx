import React, { useState } from 'react';
import { View, Text, Image, Dimensions, TextInput } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel,
} from '@rainbow-me/animated-charts';
import Coin from '../../../assets/data/crypto.json';
import CoinDetailHeader from './components/CoinDetailHeader';
import styles from './style';

const CoinDetailedScreen = () => {
  const {
    image: { small },
    symbol,
    name,
    prices,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = Coin;

  const [coinValue, setCoinValue] = useState('1');
  const [twdValue, setTwdValue] = useState(current_price.usd.toString());

  const percentageColor =
    price_change_percentage_24h < 0 ? '#ea3943' : '#16c784';

  // to compare the current price to the price at the first price
  const chartColor = current_price.usd > prices[0][1] ? '#16c784' : '#ea3943';

  // to get the screen full size
  const screenWidth = Dimensions.get('window').width;

  // run and change UI thread instead JS thread, only updating UI
  const formatCurrency = (value) => {
    'worklet';
    if (value === '') {
      return `$${current_price.usd.toFixed(2)} `;
    }
    return `$${parseFloat(value).toFixed(2)}`;
  };

  const changeCoinValue = (value) => {
    setCoinValue(value);
    const floatValue = parseFloat(value.replace(',', '.')) || 0;
    setTwdValue((floatValue * current_price.usd).toString());
  };

  const changeTwdValue = (value) => {
    setTwdValue(value);
    const floatValue = parseFloat(value.replace(',', '.')) || 0;
    setCoinValue((floatValue / current_price.usd).toString());
  };

  return (
    <View style={{ paddingHorizontal: 10 }}>
      {/* ChartPathProvider: using anything from this lib, need to be wrapped */}
      <ChartPathProvider
        data={{
          points: prices.map(([x, y]) => ({ x, y })),
          smoothingStrategy: 'bezier',
        }}
      >
        <CoinDetailHeader
          image={small}
          name={name}
          symbol={symbol}
          marketCapRank={market_cap_rank}
        />
        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <ChartYLabel format={formatCurrency} style={styles.currentPrice} />
          </View>
          <View
            style={{
              backgroundColor: percentageColor,
              paddingHorizontal: 3,
              paddingVertical: 8,
              borderRadius: 5,
              flexDirection: 'row',
            }}
          >
            <AntDesign
              name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'}
              size={12}
              color={'white'}
              style={{ alignSelf: 'center', marginRight: 5 }}
            />
            <Text style={styles.priceChange}>
              {price_change_percentage_24h.toFixed(2)}%
            </Text>
          </View>
        </View>
        <View>
          <ChartPath
            storkeWidth={2}
            height={screenWidth / 2}
            stroke={chartColor}
            width={screenWidth}
          />
          <ChartDot
            style={{
              backgroundColor: chartColor,
            }}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <Text style={{ color: 'white', alignSelf: 'center' }}>
              {symbol.toUpperCase()}
            </Text>
            <TextInput
              style={styles.input}
              value={coinValue}
              keyboardType='numeric'
              onChangeText={changeCoinValue}
            />
          </View>

          <View style={{ flexDirection: 'row', flex: 1 }}>
            <Text style={{ color: 'white', alignSelf: 'center' }}>TWD</Text>
            {/* value only takes string */}
            <TextInput
              style={styles.input}
              value={twdValue}
              keyboardType='numeric'
              onChangeText={changeTwdValue}
            />
          </View>
        </View>
      </ChartPathProvider>
    </View>
  );
};

export default CoinDetailedScreen;
