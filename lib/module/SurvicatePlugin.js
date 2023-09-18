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
  }

  update(settings, _) {
    const survicateSettings = settings.integrations[this.key]; // Survicate.setWorkspaceKey(workspaceKey);

    console.log('Survicate.setWorkspaceKey(workspaceKey)', survicateSettings.workspaceKey);
    Survicate.initializeSdk();
  }

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