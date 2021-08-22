import React from 'react';
import {View, FlatList} from 'react-native';

import Story from '../Story';
import styles from './styles';

const data = [
  {
    imageUri:
      'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Lucas',
  },
  {
    imageUri:
      'https://images.pexels.com/photos/771743/pexels-photo-771743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Mark',
  },
  {
    imageUri:
      'https://images.pexels.com/photos/771746/pexels-photo-771746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Rony',
  },
  {
    imageUri:
      'https://images.pexels.com/photos/771745/pexels-photo-771745.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Jack',
  },
  {
    imageUri:
      'https://images.pexels.com/photos/771743/pexels-photo-771743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Eric',
  },
];

const Stories = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={({name}) => name}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Story imageUri={item.imageUri} name={item.name} />
        )}
        style={styles.container}
      />
    </View>
  );
};

export default Stories;
