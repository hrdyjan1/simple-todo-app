import {
  removeTaskAtom,
  taskListAtom,
  toggleStatusTaskAtom,
} from '@/src/atoms/TaskAtom';
import { Screen } from '@/src/components/Screen/Screen';
import { TaskList } from '@/src/components/TaskList/TaskList';
import { Plus } from '@tamagui/lucide-icons';
import { router } from 'expo-router';
import { useAtom } from 'jotai';
import { Button } from 'tamagui';

function HomeScreen() {
  const [taskList] = useAtom(taskListAtom);
  const [, removeTask] = useAtom(removeTaskAtom);
  const [, toggleTaskStatus] = useAtom(toggleStatusTaskAtom);

  const goToCreateTask = () => router.navigate('/create');

  return (
    <Screen px={0} py={0}>
      <TaskList
        data={Object.values(taskList)}
        onRemoveTaskPress={removeTask}
        onCreateTaskPress={goToCreateTask}
        onrToggleTaskStatusPress={toggleTaskStatus}
      />
      <Button
        size="$6"
        right="$4"
        bottom="$4"
        zIndex={1000}
        position="absolute"
        onPress={goToCreateTask}
        iconAfter={<Plus size="$2" />}
      />
    </Screen>
  );
}

export { HomeScreen };
