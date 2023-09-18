"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNativeSurvicate = _interopRequireDefault(require("@survicate/react-native-survicate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = async event => {
  _reactNativeSurvicate.default.enterScreen(event.name);
};

exports.default = _default;
//# sourceMappingURL=screen.js.map