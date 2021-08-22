import React from 'react';
import {FlatList} from 'react-native';

import Stories from '../../components/Stories';
import Post from '../Post';

const data = [
  {
    user: {
      imageUri:
        'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'Lucas',
    },
    imageUri:
      'https://thumbs.dreamstime.com/b/picturesque-autumn-scenery-santa-maddalena-village-church-road-colorful-trees-meadows-foreground-mountain-peaks-159426189.jpg',
    caption: 'Beautiful Scenery #instagram',
    likesCount: 1234,
    postedAt: '3 minutes ago',
  },

  {
    user: {
      imageUri:
        'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'Lucas',
    },
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrW1Q-wGelAcX3-1ES3L_VGDe0OkTgjD0AgQ&usqp=CAU',
    caption: 'Beautiful Scenery #instagram',
    likesCount: 1234,
    postedAt: '3 minutes ago',
  },

  {
    user: {
      imageUri:
        'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'Lucas',
    },
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0JgW77a3Qp4aOt41TJydYRrs7AF0g5b6zlw&usqp=CAU',
    caption: 'Beautiful Scenery #instagram',
    likesCount: 1234,
    postedAt: '3 minutes ago',
  },
];

const Feed = () => {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => <Post post={item} />}
      ListHeaderComponent={Stories}
    />
  );
};

export default Feed;
