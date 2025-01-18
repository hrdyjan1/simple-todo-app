import { nanoid } from 'nanoid';
import 'react-native-get-random-values';

function getDefaultInitialTaskFormState() {
  return {
    title: '',
    day: '',
    month: '',
    year: '',
    id: nanoid(),
    status: 'PENDING',
  } as const;
}

export { getDefaultInitialTaskFormState };
