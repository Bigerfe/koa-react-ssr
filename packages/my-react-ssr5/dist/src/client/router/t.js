"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRouter = require("react-router");

const Root = ({
  route
}) => React.createElement("div", null, React.createElement("h1", null, "Root"), renderRoutes(route.routes));

const Home = ({
  route
}) => React.createElement("div", null, React.createElement("h2", null, "Home"));

const Child = ({
  route
}) => React.createElement("div", null, React.createElement("h2", null, "Child"), renderRoutes(route.routes, {
  someProp: "these extra props are optional"
}));

const GrandChild = ({
  someProp
}) => React.createElement("div", null, React.createElement("h3", null, "Grand Child"), React.createElement("div", null, someProp));

const routes = [{
  path: "/",
  exact: true,
  component: Home
}, {
  path: "/child/:id",
  component: Child,
  exact: true
}, {
  path: "/child/:id/grand-child",
  component: GrandChild,
  exact: true
}];
const branch = (0, _reactRouter.matchPath)(routes, "/child/23");

for (var item of routes) {
  let match = (0, _reactRouter.matchPath)('/child/23', item);
  console.log(match);
}

var _default = {};
exports.default = _default;