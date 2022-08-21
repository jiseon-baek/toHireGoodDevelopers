import React from 'react';
import {StyleSheet} from 'react-native';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';

export default function AppButton(props) {
  const onPress = () => {
    props.onPress && props.onPress();
  };

  return (
    <View>
      <TouchableOpacity
        disabled={props.disabled || props.loading}
        activeOpacity={0.8}
        style={styles.button}
        onPress={onPress}>
        {props.loading && (
          <ActivityIndicator
            style={styles.loading}
            size="small"
            color={'white'}
          />
        )}
        {props.children || (
          <AppText style={styles.title}>{props.title}</AppText>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: ms(24),
    backgroundColor: 'white',
  },
  loading: {marginRight: 8},
  title: {
    fontSize: 14,
    color: 'black',
  },
});
