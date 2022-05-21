"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("./Connection/config.js"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./Connection/Routes/routes.js"));

var _morgan = _interopRequireDefault(require("morgan"));

var app = (0, _express["default"])();
app.set('port', _config["default"].port);
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].urlencoded({
  extended: false
})); //Recibir datos desde formularios html

app.use(_express["default"].json()); //Usar JSON
// Routes

app.use(_routes["default"]);
var _default = app;
exports["default"] = _default;