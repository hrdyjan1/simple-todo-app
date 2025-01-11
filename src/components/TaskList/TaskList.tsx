import { noop } from '@/src/constants/noop';
import { globalStyles } from '@/src/styles/globalStyles';
import { FlatList, ListRenderItem } from 'react-native';
import { Separator, Stack } from 'tamagui';
import { Task } from '../Task/Task';
import { EmptyTaskList } from './components/EmptyTaskList';

interface TaskBase {
  id: string;
  name: string;
  status: 'DONE' | 'PENDING';
}

interface TaskListProps<T extends TaskBase> {
  onAddTaskPress: () => void;
  data: T[];
}

function TaskList<T extends TaskBase>(props: TaskListProps<T>) {
  const renderItem: ListRenderItem<T> = ({ item }) => (
    <Task id={item.id} name={item.name} status={item.status} onDelete={noop} />
  );

  const ListEmptyComponent = () => (
    <EmptyTaskList onAddTaskPress={props.onAddTaskPress} />
  );

  return (
    <Stack f={1} bg="$background">
      <FlatList<T>
        data={props.data}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={globalStyles.flexOne}
      />
    </Stack>
  );
}

export { TaskList };
