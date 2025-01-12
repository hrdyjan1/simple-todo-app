import { isDefined } from '@/src/constants/isDefined';
import { Check, Edit3, Square, Trash } from '@tamagui/lucide-icons';
import { Button, Spacer, Text, XStack, YStack } from 'tamagui';

interface TaskProps {
  id: string;
  title: string;
  subTitle?: string;
  status: 'DONE' | 'PENDING';
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string) => void;
}

function Task(props: TaskProps) {
  return (
    <XStack
      padding="$4"
      alignItems="center"
      onPress={() => props.onToggleStatus(props.id)}>
      {props.status === 'DONE' ? (
        <Check color="$green10" size="$1" />
      ) : (
        <Square color="$gray10" size="$1" />
      )}
      <Spacer />
      <YStack flex={1} justifyContent="center">
        <Text numberOfLines={1}>{props.title}</Text>
        {isDefined(props.subTitle) ? (
          <Text color="$gray10" numberOfLines={1}>
            {props.subTitle}
          </Text>
        ) : null}
      </YStack>
      <Spacer />
      <Button
        width="$4"
        height="$4"
        padding="$2"
        borderRadius="$round"
        onPress={() => props.onEdit(props.id)}>
        <Edit3 size="$1" />
      </Button>
      <Spacer />
      <Button
        width="$4"
        height="$4"
        padding="$2"
        borderRadius="$round"
        onPress={() => props.onDelete(props.id)}>
        <Trash size="$1" />
      </Button>
    </XStack>
  );
}

export { Task };
