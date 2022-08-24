import React, {useState, useEffect} from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {Text, View, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {COLOR} from '@/utils/color';
import {loadStorageData} from '../utils/storage';
import {SCREEN} from '../navigators/routes';

export default function Header(props) {
  const {canBack, array} = props || {};
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.header]}>
      {canBack || canBack === undefined ? (
        <TouchableOpacity onPress={goBack} style={{marginLeft: 10}}>
          <Text style={{fontSize: 30}}>◀︎</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.left} />
      )}
      <TouchableOpacity
        style={styles.repoNum}
        onPress={() => navigation.navigate(SCREEN.REPO_LIST)}>
        <Text style={styles.text}>{array?.length ?? 0}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLOR.WHITE,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: COLOR.WHITE,
  },
  repoNum: {
    borderRadius: 100,
    backgroundColor: COLOR.RED,
    padding: 10,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  left: {
    width: 10,
  },
});
