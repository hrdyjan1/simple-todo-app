import { Button, H3, Paragraph, Spacer, YStack } from 'tamagui';

interface EmptyTaskListProps {
  onCreateTaskPress: () => void;
}

function EmptyTaskList(props: EmptyTaskListProps) {
  return (
    <YStack f={1} jc="center" ai="center">
      <H3>No Tasks Found</H3>
      <Spacer size="$2" />
      <Paragraph>
        You don&apos;t have any tasks yet. Start by adding your first task!
      </Paragraph>
      <Spacer size="$4" />
      <Button onPress={props.onCreateTaskPress}>Create Task</Button>
    </YStack>
  );
}

export { EmptyTaskList };
