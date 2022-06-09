"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verUsuarios = exports.verInformacion = exports.EncontrarUsuario = exports.EliminarUsuario = exports.ContarUsuario = exports.AltaUsuario = exports.AltaInformacion = exports.ActualizarUsuarios = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _index = require("../Database/index.js");

var _fs = _interopRequireDefault(require("fs"));

var verUsuarios = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var Id, pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Id = req.params.Id;
            _context.prev = 1;
            _context.next = 4;
            return (0, _index.getConnection)();

          case 4:
            pool = _context.sent;
            _context.next = 7;
            return pool.request().input("Id", _index.sql.Int, Id).query(_index.querys.EncontrarUsuario);

          case 7:
            result = _context.sent;
            res.send(result.recordset[0]);
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            res.status(500);
            res.send(_context.t0.message);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11]]);
  }));

  return function verUsuarios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.verUsuarios = verUsuarios;

var verInformacion = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _index.getConnection)();

          case 3:
            pool = _context2.sent;
            _context2.next = 6;
            return pool.request().query(_index.querys.VerInformacion);

          case 6:
            result = _context2.sent;
            console.log(result.recordset);
            res.json(result);
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            res.status(500);
            res.send(_context2.t0.message);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function verInformacion(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.verInformacion = verInformacion;

var AltaInformacion = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, letra, palabra, significado, imagen, pool;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, letra = _req$body.letra, palabra = _req$body.palabra, significado = _req$body.significado, imagen = _req$body.imagen;

            if (!(letra == null || palabra == null || significado == null || imagen == null)) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return", res.status(400).json({
              message: "Por favor llena todos los campos"
            }));

          case 3:
            _context3.prev = 3;
            _context3.next = 6;
            return (0, _index.getConnection)();

          case 6:
            pool = _context3.sent;
            _context3.next = 9;
            return pool.request().input("letra", _index.sql.VarChar, letra).input("palabra", _index.sql.VarChar, palabra).input("significado", _index.sql.VarChar, significado).input("imagen", _index.sql.VarChar, imagen).query(_index.querys.AltaInformacion);

          case 9:
            res.json({
              letra: letra,
              palabra: palabra,
              significado: significado,
              imagen: imagen
            });
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](3);
            res.status(500);
            res.send(_context3.t0.message);

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 12]]);
  }));

  return function AltaInformacion(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.AltaInformacion = AltaInformacion;

var AltaUsuario = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body2, Nombre_Usuario, Apellido_Usuario, Correo_Electronico, Contraseña, pool;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, Nombre_Usuario = _req$body2.Nombre_Usuario, Apellido_Usuario = _req$body2.Apellido_Usuario, Correo_Electronico = _req$body2.Correo_Electronico, Contraseña = _req$body2.Contraseña;

            if (!(Nombre_Usuario == null || Apellido_Usuario == null || Correo_Electronico == null || Contraseña == null)) {
              _context4.next = 3;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
              message: "Por favor llena todos los campos"
            }));

          case 3:
            _context4.prev = 3;
            _context4.next = 6;
            return (0, _index.getConnection)();

          case 6:
            pool = _context4.sent;
            _context4.next = 9;
            return pool.request().input("NombreUsuario", _index.sql.VarChar, Nombre_Usuario).input("ApellidoUsuario", _index.sql.VarChar, Apellido_Usuario).input("CorreoElectronico", _index.sql.VarChar, Correo_Electronico).input("Contraseña", _index.sql.VarChar, Contraseña).query(_index.querys.RegistrarUsuario);

          case 9:
            res.json({
              Nombre_Usuario: Nombre_Usuario,
              Apellido_Usuario: Apellido_Usuario,
              Correo_Electronico: Correo_Electronico,
              Contraseña: Contraseña
            });
            _context4.next = 16;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](3);
            res.status(500);
            res.send(_context4.t0.message);

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 12]]);
  }));

  return function AltaUsuario(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.AltaUsuario = AltaUsuario;

var EncontrarUsuario = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var Id, pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            Id = req.params.Id;
            _context5.next = 3;
            return (0, _index.getConnection)();

          case 3:
            pool = _context5.sent;
            _context5.next = 6;
            return pool.request().input("Id", _index.sql.Int, Id).query(_index.querys.EncontrarUsuario);

          case 6:
            result = _context5.sent;
            res.send(result.recordset[0]);

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function EncontrarUsuario(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.EncontrarUsuario = EncontrarUsuario;

var EliminarUsuario = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var Id, pool, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            Id = req.params.Id;
            _context6.next = 3;
            return (0, _index.getConnection)();

          case 3:
            pool = _context6.sent;
            _context6.next = 6;
            return pool.request().input("Id", _index.sql.Int, Id).query(_index.querys.EliminarUsuario);

          case 6:
            result = _context6.sent;
            res.sendStatus(204);

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function EliminarUsuario(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.EliminarUsuario = EliminarUsuario;

var ContarUsuario = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return (0, _index.getConnection)();

          case 2:
            pool = _context7.sent;
            _context7.next = 5;
            return pool.request().query(_index.querys.ContarUsuarios);

          case 5:
            result = _context7.sent;
            res.json(result.recordset[0]['']);

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function ContarUsuario(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.ContarUsuario = ContarUsuario;

var ActualizarUsuarios = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var _req$body3, Nombre_Usuario, Apellido_Usuario, Correo_Electronico, Contraseña, CorreoE, pool;

    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _req$body3 = req.body, Nombre_Usuario = _req$body3.Nombre_Usuario, Apellido_Usuario = _req$body3.Apellido_Usuario, Correo_Electronico = _req$body3.Correo_Electronico, Contraseña = _req$body3.Contraseña;
            CorreoE = req.params.CorreoE;

            if (!(Nombre_Usuario == null || Apellido_Usuario == null || Correo_Electronico == null || Contraseña == null)) {
              _context8.next = 4;
              break;
            }

            return _context8.abrupt("return", res.status(400).json({
              message: "Por favor llena todos los campos"
            }));

          case 4:
            _context8.prev = 4;
            _context8.next = 7;
            return (0, _index.getConnection)();

          case 7:
            pool = _context8.sent;
            _context8.next = 10;
            return pool.request().input("Nombre", _index.sql.VarChar, Nombre_Usuario).input("Apellido", _index.sql.VarChar, Apellido_Usuario).input("Correo", _index.sql.VarChar, Correo_Electronico).input("Contraseña", _index.sql.VarChar, Contraseña).query(_index.querys.ActualizarUsuario);

          case 10:
            res.json({
              Nombre_Usuario: Nombre_Usuario,
              Apellido_Usuario: Apellido_Usuario,
              Correo_Electronico: Correo_Electronico,
              Contraseña: Contraseña
            });
            _context8.next = 17;
            break;

          case 13:
            _context8.prev = 13;
            _context8.t0 = _context8["catch"](4);
            res.status(500);
            res.send(_context8.t0.message);

          case 17:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[4, 13]]);
  }));

  return function ActualizarUsuarios(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.ActualizarUsuarios = ActualizarUsuarios;