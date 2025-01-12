import { editTaskAtom, getTaskByIdAtom, TaskType } from '@/src/atoms/TaskAtom';
import { KeyboardView } from '@/src/components/KeyboardView/KeyboardView';
import { Screen } from '@/src/components/Screen/Screen';
import { TaskForm } from '@/src/components/TaskForm/TaskForm';
import { globalStyles } from '@/src/styles/globalStyles';
import { router, useLocalSearchParams } from 'expo-router';
import { useAtom } from 'jotai';
import { ScrollView } from 'tamagui';

function EditScreen() {
  const params = useLocalSearchParams<{ id: string }>();
  const [, editTask] = useAtom(editTaskAtom);
  const [getTaskById] = useAtom(getTaskByIdAtom);

  const task = getTaskById(params.id);
  const date = new Date(task.date);

  const handleEditTask = (value: TaskType) => {
    editTask(value);
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
            title="Edit Task"
            actionButtonTitle="Edit"
            onActionPress={handleEditTask}
            initialState={{
              ...task,
              day: date.getDate().toString(),
              year: date.getFullYear().toString(),
              month: (date.getMonth() + 1).toString(),
            }}
          />
        </ScrollView>
      </KeyboardView>
    </Screen>
  );
}

export { EditScreen };
