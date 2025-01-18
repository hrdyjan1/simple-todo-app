import { TaskType } from '@/src/atoms/TaskListAtom';
import { DateInput } from '@/src/components/DateInput/DateInput';
import { useToastController } from '@tamagui/toast';
import React from 'react';
import { Button, H2, Input, Spacer, YStack } from 'tamagui';
import { getDate } from './utils/getDate';
import { getDefaultInitialTaskFormState } from './utils/getDefaultInitialTaskFormState';
import { taskFromReducer } from './utils/taskFromReducer';

interface CreateScreenFormProps {
  initialState?: {
    id: string;
    day: string;
    month: string;
    year: string;
    title: string;
    status: 'PENDING' | 'DONE';
  };
  title: string;
  actionButtonTitle: string;
  onActionPress: (task: TaskType) => void;
}

function TaskForm(props: CreateScreenFormProps) {
  const toast = useToastController();
  const [state, dispatch] = React.useReducer(
    taskFromReducer,
    props.initialState ?? getDefaultInitialTaskFormState(),
  );

  const onCreateTaskPress = () => {
    const date = getDate(state);

    if (!state.title) {
      return toast.show('Form error', { message: 'No title' });
    }
    if (!date) {
      return toast.show('Form error', { message: 'Wrong form of date' });
    }

    props.onActionPress({ ...state, date });
  };

  return (
    <YStack flex={1} padding={20} justifyContent="center" gap="$4">
      <H2 ta="center">{props.title}</H2>
      <Spacer size="$2" />
      <Input
        placeholder="Title"
        value={state.title}
        onChangeText={value => dispatch({ type: 'UPDATE_TITLE', value })}
      />
      <DateInput
        day={state.day}
        month={state.month}
        year={state.year}
        onChangeDay={value => dispatch({ type: 'UPDATE_DAY', value })}
        onChangeMonth={value => dispatch({ type: 'UPDATE_MONTH', value })}
        onChangeYear={value => dispatch({ type: 'UPDATE_YEAR', value })}
      />

      <Spacer size="$4" />
      <Button onPress={onCreateTaskPress}>{props.actionButtonTitle}</Button>
    </YStack>
  );
}

export { TaskForm };
