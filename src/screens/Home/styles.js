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
  searchDiv: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },
  button: {
    paddingHorizontal: 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: COLOR.MAIN_COLOR,
  },
  btnText: {
    color: COLOR.WHITE,
  },
  data: {
    paddingHorizontal: 20,
  },
  number: {
    fontWeight: '500',
    color: COLOR.POINT_COLOR,
  },
  item: {
    marginTop: 10,
  },
  repoItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: COLOR.GRAY,
  },
});

export default styles;
