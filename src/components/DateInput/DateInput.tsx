import { Input, XStack } from 'tamagui';

interface DateInputProps {
  initialState?: {
    day: string;
    month: string;
    year: string;
  };
  day?: string;
  month?: string;
  year?: string;
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
        value={props.day}
        keyboardType="number-pad"
        onChangeText={props.onChangeDay}
        defaultValue={props.initialState?.day}
      />

      <Input
        width="30%"
        placeholder="MM"
        value={props.month}
        keyboardType="number-pad"
        onChangeText={props.onChangeMonth}
        defaultValue={props.initialState?.month}
      />

      <Input
        width="30%"
        placeholder="YYYY"
        value={props.year}
        keyboardType="number-pad"
        onChangeText={props.onChangeYear}
        defaultValue={props.initialState?.year}
      />
    </XStack>
  );
}

export { DateInput };
