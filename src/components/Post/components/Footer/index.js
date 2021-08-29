import React, {useState, useEffect} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Footer = ({likesCount: likesCountProps, name, caption, postedAt}) => {
  const [isLiked, setIsLike] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const onLikePressed = () => {
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);

    setIsLike(!isLiked);
  };

  useEffect(() => {
    setLikesCount(likesCountProps);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.left}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            <ADIcon
              name={isLiked ? 'heart' : 'hearto'}
              size={25}
              color={isLiked ? '#e73838' : '#545454'}
            />
          </TouchableWithoutFeedback>

          <FontistoIcon name="comment" size={23} color={'#545454'} />
          <IoniconsIcon
            name="paper-plane-outline"
            size={25}
            color={'#545454'}
          />
        </View>
        <FAIcon name="bookmark-o" size={25} color={'#545454'} />
      </View>
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
