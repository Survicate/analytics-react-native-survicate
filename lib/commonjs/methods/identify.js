"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNativeSurvicate = _interopRequireDefault(require("@survicate/react-native-survicate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = event => {
  const userId = event.userId;
  const properties = event.traits;
  console.log('SurvicatePlugin.identify', userId);

  if (userId !== undefined) {
    _reactNativeSurvicate.default.setUserTrait('userId', userId);

    for (const key in properties) {
      if (properties.hasOwnProperty(key)) {
        const value = properties[key];

        if (typeof value === 'string') {
          _reactNativeSurvicate.default.setUserTrait(key, value);
        }
      }
    }
  }
};

exports.default = _default;
//# sourceMappingURL=identify.js.map