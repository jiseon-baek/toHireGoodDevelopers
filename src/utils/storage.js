import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export async function loadStorageData(key) {
  try {
    const getData = await AsyncStorage.getItem(key);
    return JSON.parse(getData);
  } catch {
    return null;
  }
}

export async function saveStorageData(key, data) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch {
    return false;
  }
}
