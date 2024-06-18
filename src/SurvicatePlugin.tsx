import {
  DestinationPlugin,
  IdentifyEventType,
  PluginType,
  TrackEventType,
  ScreenEventType,
  SegmentAPISettings,
  UpdateType,
} from '@segment/analytics-react-native';
import Survicate from '@survicate/react-native-survicate';
import identify from './methods/identify';
import track from './methods/track';
import screen from './methods/screen';
import update from './methods/update';

export class SurvicatePlugin extends DestinationPlugin {
  type = PluginType.destination;
  key = 'Survicate';

  update(settings: SegmentAPISettings, type: UpdateType) {
    update(settings, type);
  }

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
  
  reset() {
    Survicate.reset();
  }
}
