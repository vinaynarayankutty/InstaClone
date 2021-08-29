import React from 'react';
import {View, Text} from 'react-native';
import Feed from '../../components/Feed';

const NotificationsScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
        }}>
        Notification Screen
      </Text>
    </View>
  );
};

export default NotificationsScreen;
