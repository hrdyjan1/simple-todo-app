import { createTaskAtom } from '@/src/atoms/TaskAtom';
import { KeyboardView } from '@/src/components/KeyboardView/KeyboardView';
import { Screen } from '@/src/components/Screen/Screen';
import { globalStyles } from '@/src/styles/globalStyles';
import { router } from 'expo-router';
import { useAtom } from 'jotai';
import { ScrollView } from 'tamagui';
import { CreateScreenForm } from './components/CreateScreenForm';

function CreateScreen() {
  const [, createTask] = useAtom(createTaskAtom);

  const handleCreateTask = (value: { date: number; title: string }) => {
    createTask({
      ...value,
      status: 'PENDING',
      id: new Date().getTime().toString(),
    });
    router.dismissTo('/');
  };

  return (
    <Screen>
      <KeyboardView>
        <ScrollView
          flex={1}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={globalStyles.flexOne}>
          <CreateScreenForm handleCreateTask={handleCreateTask} />
        </ScrollView>
      </KeyboardView>
    </Screen>
  );
}

export { CreateScreen };
