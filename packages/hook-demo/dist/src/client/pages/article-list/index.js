"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Index;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

let count = 1,
    setCount;
console.log('count', count);

setCount = function (cb) {
  count = cb();
  return Index(count);
};

function Index() {
  console.log('render', count); //let [count,setCount] = useState(1);  

  return _react.default.createElement("div", null, _react.default.createElement("p", null, "\u6587\u7AE0\u5217\u8868 hook"), _react.default.createElement("p", null, "count:", count), _react.default.createElement("button", {
    onClick: () => setCount(() => count + 1)
  }, "\u6570\u5B57\u7D2F\u52A0"));
}
