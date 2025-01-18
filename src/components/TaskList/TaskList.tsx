import { TaskType } from '@/src/atoms/TaskListAtom';
import { globalStyles } from '@/src/styles/globalStyles';
import { FlatList, ListRenderItem } from 'react-native';
import { Separator, Spacer } from 'tamagui';
import { Task } from '../Task/Task';
import { EmptyTaskList } from './components/EmptyTaskList';

interface TaskListProps {
  onCreateTaskPress: () => void;
  onEditTaskPress: (id: string) => void;
  onRemoveTaskPress: (id: string) => void;
  onrToggleTaskStatusPress: (id: string) => void;
  data: TaskType[];
}

function TaskList(props: TaskListProps) {
  const renderItem: ListRenderItem<TaskType> = ({ item }) => (
    <Task
      id={item.id}
      title={item.title}
      status={item.status}
      onEdit={props.onEditTaskPress}
      onDelete={props.onRemoveTaskPress}
      onToggleStatus={props.onrToggleTaskStatusPress}
      subTitle={new Date(item.date).toISOString().split('T')[0]}
    />
  );

  const ListEmptyComponent = () => (
    <EmptyTaskList onCreateTaskPress={props.onCreateTaskPress} />
  );

  return (
    <FlatList
      data={props.data}
      renderItem={renderItem}
      ListFooterComponent={Spacer}
      ItemSeparatorComponent={Separator}
      ListEmptyComponent={ListEmptyComponent}
      contentContainerStyle={globalStyles.flexGrowOne}
    />
  );
}

export { TaskList };
