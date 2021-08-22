import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },

  likesCount: {
    fontWeight: 'bold',
    margin: 3,
  },

  captionContainer: {
    flexDirection: 'row',
  },

  name: {
    fontWeight: 'bold',
    margin: 3,
    textTransform: 'lowercase',
  },

  caption: {
    margin: 3,
  },

  postedAt: {
    color: '#8c8c8c',
    margin: 3,
  },
});

export default styles;
