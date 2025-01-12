import { isDefined } from '@/src/constants/isDefined';
import { Check, Square, Trash } from '@tamagui/lucide-icons';
import { Button, Spacer, Text, XStack, YStack } from 'tamagui';

interface TaskProps {
  id: string;
  title: string;
  subTitle?: string;
  status: 'DONE' | 'PENDING';
  onDelete: (id: string) => void;
  onToggleStatus: (id: string) => void;
}

function Task(props: TaskProps) {
  return (
    <XStack
      ai="center"
      py="$4"
      px="$4"
      onPress={() => props.onToggleStatus(props.id)}>
      {props.status === 'DONE' ? (
        <Check color="$green10" />
      ) : (
        <Square color="$gray10" />
      )}
      <Spacer />
      <YStack f={1} justifyContent="center">
        <Text numberOfLines={1}>{props.title}</Text>
        {isDefined(props.subTitle) ? (
          <Text color="$gray10" numberOfLines={1}>
            {props.subTitle}
          </Text>
        ) : null}
      </YStack>
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
