import { KeyboardView } from '@/src/components/KeyboardView/KeyboardView';
import { Screen } from '@/src/components/Screen/Screen';
import { globalStyles } from '@/src/styles/globalStyles';
import { router } from 'expo-router';
import { ScrollView } from 'tamagui';
import { CreateScreenForm } from './components/CreateScreenForm';

function CreateScreen() {
  const handleCreateTask = (values: { date: number; title: string }) => {
    console.log(values);
    router.dismissTo('/');
  };

  return (
    <Screen>
      <KeyboardView>
        <ScrollView
          f={1}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={globalStyles.flexOne}>
          <CreateScreenForm handleCreateTask={handleCreateTask} />
        </ScrollView>
      </KeyboardView>
    </Screen>
  );
}

export { CreateScreen };
