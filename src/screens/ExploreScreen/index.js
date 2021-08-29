import React from 'react';
import {View, Text} from 'react-native';
import Feed from '../../components/Feed';

const ExploreScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'blue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
        }}>
        Explore Screen
      </Text>
    </View>
  );
};

export default ExploreScreen;
