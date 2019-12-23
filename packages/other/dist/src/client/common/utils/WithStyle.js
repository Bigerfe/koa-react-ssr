"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _rootContext = _interopRequireDefault(require("../../app/root-context"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//高阶组件，用于收集组件的 css 信息
function withStyles(...styles) {
  return function wrapWithStyles(ComposedComponent) {
    class WithStyles extends _react.default.PureComponent {
      constructor(props, context) {
        super(props, context);
        this.removeCss = context.insertCss(...styles);
      }

      componentWillUnmount() {
        if (this.removeCss) {
          setTimeout(this.removeCss, 0);
        }
      }

      render() {
        return _react.default.createElement(ComposedComponent, this.props);
      }

    }

    const displayName = ComposedComponent.displayName || ComposedComponent.name || 'Component';
    WithStyles.displayName = `WithStyles(${displayName})`;
    WithStyles.contextType = _rootContext.default;
    WithStyles.ComposedComponent = ComposedComponent;
    return (0, _hoistNonReactStatics.default)(WithStyles, ComposedComponent);
  };
}

var _default = withStyles;
exports.default = _default;