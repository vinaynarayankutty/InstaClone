import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },

  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },

  left: {
    flexDirection: 'row',
    width: 120,
    justifyContent: 'space-between',
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
