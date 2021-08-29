import React from 'react';
import {View, Text} from 'react-native';
import Feed from '../../components/Feed';

const ProfileScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'orange',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
        }}>
        Profile Screen
      </Text>
    </View>
  );
};

export default ProfileScreen;
