import { Button, H3, Paragraph, Spacer, YStack } from 'tamagui';

interface EmptyTaskListProps {
  onCreateTaskPress: () => void;
}

function EmptyTaskList(props: EmptyTaskListProps) {
  return (
    <YStack flex={1} justifyContent="center" alignItems="center" padding="$4">
      <H3>No Tasks Found</H3>
      <Spacer size="$2" />
      <Paragraph textAlign="center">
        You don&apos;t have any tasks yet. Start by adding your first task!
      </Paragraph>
      <Spacer size="$4" />
      <Button onPress={props.onCreateTaskPress}>Create Task</Button>
    </YStack>
  );
}

export { EmptyTaskList };
