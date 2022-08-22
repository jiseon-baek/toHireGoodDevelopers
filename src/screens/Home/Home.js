import React from 'react';
import {StyleSheet, View, Text, ScrollView, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppText from '@/components/AppText';
import styles from './styles';
import {useState} from 'react';

const Home = () => {
  const [text, onChangeText] = useState('');
  useEffect(() => {
    getPublicRepo();
    return () => {};
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Repository를 검색하세요."
      />
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default Home;
