import {
  DestinationPlugin,
  IdentifyEventType,
  PluginType,
  TrackEventType,
  ScreenEventType,
} from '@segment/analytics-react-native';
import Survicate from '@survicate/react-native-survicate';
import identify from './methods/identify';
import track from './methods/track';
import screen from './methods/screen';

export class SurvicatePlugin extends DestinationPlugin {
  type = PluginType.destination;
  key = 'Survicate';

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
