import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppText from '@/components/AppText';
import styles from './styles';
import {COLOR} from '../../utils/color';
import {postRepo} from '../../services/RepositoryService';
import {saveStorageData, loadStorageData} from '../../utils/storage';

const Repository = ({item, name, url, array}) => {
  const [loading, setLoading] = useState(false);

  const createRepo = async () => {
    try {
      setLoading(true);
      const repo = [{name: name, url: url}];

      await saveStorageData('repos', repo).then(() =>
        Alert.alert('저장되었습니다.'),
      );
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <View style={styles.repoContainer}>
      <View style={styles.repoItem}>
        <Text>{item?.full_name}</Text>
      </View>
      <TouchableOpacity
        style={styles.registerBtn}
        activeOpacity={0.8}
        onPress={() => createRepo(item?.name, item?.html_url)}>
        <Text
          style={{borderBottomColor: COLOR.MAIN_COLOR, borderBottomWidth: 1}}>
          등록하기
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Repository;
