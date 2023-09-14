import type { ScreenEventType } from '@segment/analytics-react-native';
import Survicate from '@survicate/react-native-survicate';

export default async (event: ScreenEventType) => {
    Survicate.enterScreen(event.name);
};
