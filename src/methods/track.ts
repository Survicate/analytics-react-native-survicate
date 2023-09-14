import type { TrackEventType } from '@segment/analytics-react-native';
import Survicate from '@survicate/react-native-survicate';

export default async (event: TrackEventType) => {
    Survicate.invokeEvent(event.event);
};
