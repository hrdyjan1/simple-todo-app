import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { isDefined } from '../constants/isDefined';
import { getStorage } from '../storage/Storage';

type UserType = {
  username: string;
  accessToken: string;
} | null;

const content = null;
const storage = getStorage<UserType>();
const userAtom = atomWithStorage('user', content, storage);

const isUserAuthAtom = atom(async get => {
  const user = await get(userAtom);
  return isDefined(user?.accessToken);
});

export { isUserAuthAtom, userAtom, type UserType };
