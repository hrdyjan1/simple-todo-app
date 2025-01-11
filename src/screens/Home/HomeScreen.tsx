import { Screen } from '@/src/components/Screen/Screen';
import { TaskList } from '@/src/components/TaskList/TaskList';
import { Plus } from '@tamagui/lucide-icons';
import { router } from 'expo-router';
import { Button } from 'tamagui';

const data = [
  { id: '1', name: 'Clean kitchen', status: 'DONE' as const },
  { id: '2', name: 'Walk the dog 🐕', status: 'PENDING' as const },
];

function HomeScreen() {
  const goToCreateTask = () => router.navigate('/create');

  return (
    <Screen>
      <TaskList data={data} onCreateTaskPress={goToCreateTask} />
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
