import {StyleSheet} from 'react-native';
import {COLOR} from '@/utils/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  titleView: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: COLOR.BLACK,
  },
});

export default styles;
