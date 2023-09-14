import {
  DestinationPlugin,
  IdentifyEventType,
  PluginType,
  TrackEventType,
  UpdateType,
  SegmentAPISettings,
  ScreenEventType,
} from '@segment/analytics-react-native';
import type { SegmentSurvicateSettings } from './types';
import Survicate from '@survicate/react-native-survicate';
import identify from './methods/identify';
import track from './methods/track';
import screen from './methods/screen';

export class SurvicatePlugin extends DestinationPlugin {
  type = PluginType.destination;
  key = 'Survicate';

  update(settings: SegmentAPISettings, _: UpdateType) {}

  identify(event: IdentifyEventType) {
    identify(event);
    return event;
  }

  track(event: TrackEventType) {
    track(event);
    return event;
  }

  screen(event: ScreenEventType) {
    screen(event);
    return event;
  }
  
  reset() {}
}
