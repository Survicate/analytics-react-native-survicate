"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SurvicatePlugin = void 0;

var _analyticsReactNative = require("@segment/analytics-react-native");

var _reactNativeSurvicate = _interopRequireDefault(require("@survicate/react-native-survicate"));

var _identify = _interopRequireDefault(require("./methods/identify"));

var _track = _interopRequireDefault(require("./methods/track"));

var _screen = _interopRequireDefault(require("./methods/screen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class SurvicatePlugin extends _analyticsReactNative.DestinationPlugin {
  constructor() {
    super(...arguments);

    _defineProperty(this, "type", _analyticsReactNative.PluginType.destination);

    _defineProperty(this, "key", 'Survicate');

    _defineProperty(this, "hasInitialized", false);
  }

  update(settings, _) {}

  identify(event) {
    (0, _identify.default)(event);
    return event;
  }

  track(event) {
    (0, _track.default)(event);
    return event;
  }

  screen(event) {
    (0, _screen.default)(event);
    return event;
  }

  reset() {
    _reactNativeSurvicate.default.reset();
  }

}

exports.SurvicatePlugin = SurvicatePlugin;
//# sourceMappingURL=SurvicatePlugin.js.map