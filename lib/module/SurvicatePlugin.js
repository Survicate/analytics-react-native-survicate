function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { DestinationPlugin, PluginType } from '@segment/analytics-react-native';
import Survicate from '@survicate/react-native-survicate';
import identify from './methods/identify';
import track from './methods/track';
import screen from './methods/screen';
export class SurvicatePlugin extends DestinationPlugin {
  constructor() {
    super(...arguments);

    _defineProperty(this, "type", PluginType.destination);

    _defineProperty(this, "key", 'Survicate');

    _defineProperty(this, "hasInitialized", false);
  }

  update(settings, _) {}

  identify(event) {
    identify(event);
    return event;
  }

  track(event) {
    track(event);
    return event;
  }

  screen(event) {
    screen(event);
    return event;
  }

  reset() {
    Survicate.reset();
  }

}
//# sourceMappingURL=SurvicatePlugin.js.map