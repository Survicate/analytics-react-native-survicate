import type { TrackEventType } from '@segment/analytics-react-native';
import Survicate from '@survicate/react-native-survicate';

export default async (event: TrackEventType) => {
    const properties: { [key: string]: string } = {};

    for (const key in event.properties) {
        if (event.properties.hasOwnProperty(key)) {
            const value = event.properties[key];

            if (typeof value === 'string') {
                properties[key] = value;
            }
        }
    }

    Survicate.invokeEvent(event.event, properties);
};
