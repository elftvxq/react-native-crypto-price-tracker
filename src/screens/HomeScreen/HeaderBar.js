import React from 'react';
import { View, Text } from 'react-native';

const HeaderBar = ({ title }) => {
  return (
    <View
      style={{
        height: 50,
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: 'flex-end',
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 30,
          fontWeight: 'bold',
        }}
      >
        {title}
      </Text>
    </View>
  );
};
export default HeaderBar;
