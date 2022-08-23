import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppText from '@/components/AppText';
import styles from './styles';

const Repository = ({item}) => {
  useEffect(() => {}, [item]);

  return (
    <View>
      <View style={styles.repoItem}>
        <Text>{item?.full_name}</Text>
      </View>
    </View>
  );
};

export default Repository;
