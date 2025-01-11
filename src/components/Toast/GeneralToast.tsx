import { Toast, useToastState } from '@tamagui/toast';
import { YStack, isWeb } from 'tamagui';

function GeneralToast() {
  const currentToast = useToastState();

  if (!currentToast || currentToast.isHandledNatively) return null;

  return (
    <Toast
      br="$6"
      theme="purple"
      animation="quick"
      key={currentToast.id}
      y={isWeb ? '$12' : 0}
      duration={currentToast.duration}
      viewportName={currentToast.viewportName}
      exitStyle={{ opacity: 0, scale: 1, y: -20 }}
      enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}>
      <YStack ai="center" p="$2" gap="$2">
        <Toast.Title fow="bold">{currentToast.title}</Toast.Title>
        {!!currentToast.message && (
          <Toast.Description>{currentToast.message}</Toast.Description>
        )}
      </YStack>
    </Toast>
  );
}

export { GeneralToast };
