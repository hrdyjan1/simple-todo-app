import { taskManagerAtom, TaskType } from '@/src/atoms/TaskListAtom';
import { KeyboardView } from '@/src/components/KeyboardView/KeyboardView';
import { Screen } from '@/src/components/Screen/Screen';
import { TaskForm } from '@/src/components/TaskForm/TaskForm';
import { globalStyles } from '@/src/styles/globalStyles';
import { router } from 'expo-router';
import { useAtom } from 'jotai';
import { ScrollView } from 'tamagui';

function CreateScreen() {
  const [, manageTask] = useAtom(taskManagerAtom);

  const handleCreateTask = (value: TaskType) => {
    manageTask({ payload: value, type: 'CREATE' });
    router.dismissTo('/');
  };

  return (
    <Screen>
      <KeyboardView>
        <ScrollView
          flex={1}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={globalStyles.flexOne}>
          <TaskForm
            title="Create Task"
            actionButtonTitle="Create"
            onActionPress={handleCreateTask}
          />
        </ScrollView>
      </KeyboardView>
    </Screen>
  );
}

export { CreateScreen };
