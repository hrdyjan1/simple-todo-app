import { Toast as TamguiToast, useToastState } from '@tamagui/toast';
import { YStack, isWeb } from 'tamagui';

function Toast() {
  const currentToast = useToastState();

  if (!currentToast || currentToast.isHandledNatively) return null;

  return (
    <TamguiToast
      br="$6"
      theme="red"
      animation="quick"
      key={currentToast.id}
      y={isWeb ? '$12' : 0}
      duration={currentToast.duration}
      viewportName={currentToast.viewportName}
      exitStyle={{ opacity: 0, scale: 1, y: -20 }}
      enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}>
      <YStack alignItems="center" padding="$2" gap="$2">
        <TamguiToast.Title fow="bold">{currentToast.title}</TamguiToast.Title>
        {!!currentToast.message && (
          <TamguiToast.Description>
            {currentToast.message}
          </TamguiToast.Description>
        )}
      </YStack>
    </TamguiToast>
  );
}

export { Toast };
