import { taskListAtom, taskManagerAtom } from '@/src/atoms/TaskListAtom';
import { Screen } from '@/src/components/Screen/Screen';
import { TaskList } from '@/src/components/TaskList/TaskList';
import { Plus } from '@tamagui/lucide-icons';
import { router } from 'expo-router';
import { useAtom } from 'jotai';
import { Button } from 'tamagui';

function HomeScreen() {
  const [taskList] = useAtom(taskListAtom);
  const [, manageTask] = useAtom(taskManagerAtom);

  const goToCreateTask = () => router.navigate('/create');
  const goToEditTask = (id: string) => router.navigate(`/edit/${id}`);

  const removeTask = (id: string) =>
    manageTask({ type: 'REMOVE', payload: id });
  const toggleTaskStatus = (id: string) =>
    manageTask({ type: 'TOGGLE_STATUS', payload: id });

  return (
    <Screen px={0} py={0}>
      <TaskList
        data={Object.values(taskList)}
        onRemoveTaskPress={removeTask}
        onEditTaskPress={goToEditTask}
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
