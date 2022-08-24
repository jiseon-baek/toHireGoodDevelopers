import React, {useState} from 'react';
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
import Header from '@/components/Header';
import styles from './styles';
import {getPublicRepo} from '../../services/RepositoryService';
import {useEffect} from 'react';
import {COLOR} from '../../utils/color';
import {saveStorageData, loadStorageData} from '../../utils/storage';

const RepoList = () => {
  const [array, setArray] = useState(0);

  useEffect(() => {
    loadStorageData('repos')
      .then(data => {
        return setArray(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [array]);

  return (
    <SafeAreaView style={styles.container}>
      <Header array={array} />
      <View style={styles.titleView}>
        <Text style={styles.title}>🔎 Github Repository 검색</Text>
      </View>
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default RepoList;
