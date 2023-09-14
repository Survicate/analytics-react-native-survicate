"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SurvicatePlugin = require("./SurvicatePlugin");

Object.keys(_SurvicatePlugin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SurvicatePlugin[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SurvicatePlugin[key];
    }
  });
});
//# sourceMappingURL=index.js.map