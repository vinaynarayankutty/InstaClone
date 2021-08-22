import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const Footer = ({likesCount, name, caption, postedAt}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.likesCount}>{likesCount} likes</Text>
      <View style={styles.captionContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.caption}>{caption}</Text>
      </View>

      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default Footer;
