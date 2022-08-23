import React from 'react';
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
import {useState} from 'react';
import {getPublicRepo} from '../../services/RepositoryService';
import {useEffect} from 'react';
import {COLOR} from '../../utils/color';
import Repository from './Repository';

const Home = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [dataNum, setDataNum] = useState(0);
  const [data, setData] = useState([]);

  const searchRepo = async () => {
    try {
      setLoading(true);
      const res = await getPublicRepo(input);
      if (res.data) {
        setData(res.data?.items);
        setDataNum(res.data?.total_count);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>🔎 Github Repository 검색</Text>
      </View>
      <View style={styles.searchDiv}>
        <TextInput
          style={styles.input}
          onChangeText={text => setInput(text)}
          value={input}
          placeholder="Repository를 검색하세요."
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={searchRepo}
          style={styles.button}>
          <Text style={styles.btnText}>검색</Text>
        </TouchableOpacity>
      </View>
      <Text style={{paddingHorizontal: 20, paddingVertical: 10}}>
        총 <Text style={styles.number}>{dataNum}</Text>개의 repository를
        찾았습니다!
      </Text>
      <ScrollView style={styles.data}>
        {loading ? (
          <ActivityIndicator
            size="large"
            color={COLOR.MAIN_COLOR}
            style={{marginTop: 20}}
          />
        ) : (
          data?.map(item => (
            <View key={item?.id} style={styles.item}>
              <Repository item={item} />
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
