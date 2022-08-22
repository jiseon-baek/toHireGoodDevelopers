import React from 'react';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {COLOR} from '@/utils/color';

export default function AppText(props) {
  if (!props.children && !props.content) {
    return null;
  }
  return (
    <Text
      numberOfLines={props.numberOfLines}
      allowFontScaling={false}
      style={[styles.text, props.style]}
      {...props}>
      {props.content || props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: COLOR.BLACK,
  },
});
