import * as SecureStore from 'expo-secure-store';
import { createJSONStorage } from 'jotai/utils';
import { AsyncStringStorage } from 'jotai/vanilla/utils/atomWithStorage';

const storage: AsyncStringStorage = {
  getItem: SecureStore.getItemAsync,
  setItem: SecureStore.setItemAsync,
  removeItem: SecureStore.deleteItemAsync,
};

const getStorage = <T>() => createJSONStorage<T>(() => storage);

export { getStorage };
