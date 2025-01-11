import { Input, XStack } from 'tamagui';

interface DateInputProps {
  initialState?: {
    day: string;
    month: string;
    year: string;
  };
  onChangeDay: (value: string) => void;
  onChangeMonth: (value: string) => void;
  onChangeYear: (value: string) => void;
}

function DateInput(props: DateInputProps) {
  return (
    <XStack alignItems="center" justifyContent="space-between">
      <Input
        width="30%"
        placeholder="DD"
        keyboardType="number-pad"
        onChangeText={props.onChangeDay}
        defaultValue={props.initialState?.day}
      />

      <Input
        width="30%"
        placeholder="MM"
        keyboardType="number-pad"
        onChangeText={props.onChangeMonth}
        defaultValue={props.initialState?.month}
      />

      <Input
        width="30%"
        placeholder="YYYY"
        keyboardType="number-pad"
        onChangeText={props.onChangeYear}
        defaultValue={props.initialState?.year}
      />
    </XStack>
  );
}

export { DateInput };
