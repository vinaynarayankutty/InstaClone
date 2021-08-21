import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

const ProfilePicture = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }}
        style={styles.image}
      />
    </View>
  );
};

export default ProfilePicture;
