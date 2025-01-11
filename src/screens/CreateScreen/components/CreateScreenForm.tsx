import { DateInput } from '@/src/components/DateInput/DateInput';
import React from 'react';
import { Button, H2, Input, Spacer, YStack } from 'tamagui';
import { createTaskFromReducer } from './utils/createTaskFromReducer';

interface TaskBase {
  date: number;
  title: string;
}

interface CreateScreenFormProps {
  initialState?: {
    day: string;
    month: string;
    year: string;
    title: string;
  };
  handleCreateTask: (task: TaskBase) => void;
}

const defaultInitialState: NonNullable<CreateScreenFormProps['initialState']> =
  { title: '', day: '', month: '', year: '' };

function CreateScreenForm(props: CreateScreenFormProps) {
  const [state, dispatch] = React.useReducer(
    createTaskFromReducer,
    props.initialState ?? defaultInitialState,
  );

  const onCreateTaskPress = () => {
    props.handleCreateTask({
      title: state.title,
      date: new Date(`${state.year}-${state.month}-${state.day}`).getTime(),
    });
  };

  return (
    <YStack f={1} padding={20} justifyContent="center" gap="$4">
      <H2 ta="center">Create Task</H2>
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
      <Button onPress={onCreateTaskPress}>Create</Button>
    </YStack>
  );
}

export { CreateScreenForm };
