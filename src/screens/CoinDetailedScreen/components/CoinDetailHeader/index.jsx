import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const CoinDetailHeader = (props) => {
  const { image, name, symbol, marketCapRank } = props;

  // hooks
  const navigation = useNavigation();
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

      <EvilIcons name='user' size={30} color='white' />
    </View>
  );
};

export default CoinDetailHeader;
