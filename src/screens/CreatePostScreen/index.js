import React from 'react';
import {View, Text} from 'react-native';

const CreatePostScreen = () => {
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
        Create Post Screen
      </Text>
    </View>
  );
};

export default CreatePostScreen;
