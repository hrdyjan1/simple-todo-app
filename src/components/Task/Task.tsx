import { Check, Square, Trash } from '@tamagui/lucide-icons';
import { Button, Spacer, Text, XStack } from 'tamagui';

interface TaskProps {
  id: string;
  name: string;
  status: 'DONE' | 'PENDING';
  onDelete: (id: string) => void;
}

function Task(props: TaskProps) {
  return (
    <XStack ai="center" py="$4">
      {props.status === 'DONE' ? (
        <Check color="$green10" />
      ) : (
        <Square color="$gray10" />
      )}
      <Spacer />
      <Text flex={1} numberOfLines={1}>
        {props.name}
      </Text>
      <Spacer />
      <Button
        p="$2"
        w="$4"
        h="$4"
        borderRadius="$round"
        onPress={() => props.onDelete(props.id)}>
        <Trash size={20} />
      </Button>
    </XStack>
  );
}

export { Task };
