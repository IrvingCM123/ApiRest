"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verUsuarios1 = exports.verUsuarios = exports.verInformacion = exports.enviarCorreo = exports.ProbarConexion = exports.EncontrarUsuario = exports.EliminarUsuario = exports.ContarUsuario = exports.AltaUsuario = exports.AltaInformacion = exports.ActualizarUsuarios = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _index = require("../Database/index.js");

var nodemailer = _interopRequireWildcard(require("nodemailer"));

var app = _interopRequireWildcard(require("express"));

var _dotenv = require("dotenv");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _dotenv.config)();

var ProbarConexion = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return poolPromise;

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().query("SELECT * FROM Usuarios", function (err, respuesta) {
              if (err) {
                console.log(err);
              } else {
                var send_data = respuesta.recordset;
                res.json(send_data);
              }
            });

          case 6:
            result = _context.sent;
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0.message);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function ProbarConexion(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.ProbarConexion = ProbarConexion;

var enviarCorreo = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var transporter, message;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            transporter = nodemailer.createTransport({
              service: process.env.Gmail_Service,
              auth: {
                user: process.env.Gmail_User,
                pass: process.env.Gmail_Password
              }
            });
            message = {
              from: process.env.Gmail_User,
              to: process.env.Gmail_Destiny,
              subject: process.env.Gmail_Subject_Alta_Materia,
              text: "\n    Docente: ".concat(req.body.numero, "\n    Materia: ").concat(req.body.nrc, "\n  ")
            };
            transporter.sendMail(message, function (error, info) {
              if (error) {
                console.log(error);
                res.send("Error al enviar el correo electrónico");
              } else {
                console.log("Correo electrónico enviado: " + info.response);
                res.send("Correo electrónico enviado correctamente");
              }
            });

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function enviarCorreo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.enviarCorreo = enviarCorreo;

var verUsuarios = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _index.getConnection)();

          case 3:
            pool = _context3.sent;
            _context3.next = 6;
            return pool.request().query(_index.querys.verUsuarios);

          case 6:
            result = _context3.sent;
            res.json(result.recordsets);
            _context3.next = 14;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            res.status(500);
            res.send(_context3.t0.message);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));

  return function verUsuarios(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.verUsuarios = verUsuarios;

var verUsuarios1 = function verUsuarios1(req, res) {};

exports.verUsuarios1 = verUsuarios1;

var EncontrarUsuario = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var Id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            Id = req.params.Id;
            _context4.next = 3;
            return (0, _index.getConnection)();

          case 3:
            pool = _context4.sent;
            _context4.next = 6;
            return pool.request().input("Id", _index.sql.Int, Id).query(_index.querys.EncontrarUsuario);

          case 6:
            result = _context4.sent;
            res.send(result.recordset[0]);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function EncontrarUsuario(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.EncontrarUsuario = EncontrarUsuario;

var verInformacion = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return (0, _index.getConnection)();

          case 3:
            pool = _context5.sent;
            _context5.next = 6;
            return pool.request().query(_index.querys.VerInformacion);

          case 6:
            result = _context5.sent;
            console.log(result.recordset);
            res.json(result);
            _context5.next = 15;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            res.status(500);
            res.send(_context5.t0.message);

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 11]]);
  }));

  return function verInformacion(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.verInformacion = verInformacion;

var AltaInformacion = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body, letra, palabra, significado, imagen, pool;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body = req.body, letra = _req$body.letra, palabra = _req$body.palabra, significado = _req$body.significado, imagen = _req$body.imagen;

            if (!(letra == null || palabra == null || significado == null || imagen == null)) {
              _context6.next = 3;
              break;
            }

            return _context6.abrupt("return", res.status(400).json({
              message: "Por favor llena todos los campos"
            }));

          case 3:
            _context6.prev = 3;
            _context6.next = 6;
            return (0, _index.getConnection)();

          case 6:
            pool = _context6.sent;
            _context6.next = 9;
            return pool.request().input("letra", _index.sql.VarChar, letra).input("palabra", _index.sql.VarChar, palabra).input("significado", _index.sql.VarChar, significado).input("imagen", _index.sql.VarChar, imagen).query(_index.querys.AltaInformacion);

          case 9:
            res.json({
              letra: letra,
              palabra: palabra,
              significado: significado,
              imagen: imagen
            });
            _context6.next = 16;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](3);
            res.status(500);
            res.send(_context6.t0.message);

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[3, 12]]);
  }));

  return function AltaInformacion(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.AltaInformacion = AltaInformacion;

var AltaUsuario = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var _req$body2, Nombre_Usuario, Apellido_Usuario, Correo_Electronico, Contraseña, pool;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body2 = req.body, Nombre_Usuario = _req$body2.Nombre_Usuario, Apellido_Usuario = _req$body2.Apellido_Usuario, Correo_Electronico = _req$body2.Correo_Electronico, Contraseña = _req$body2.Contraseña;

            if (!(Nombre_Usuario == null || Apellido_Usuario == null || Correo_Electronico == null || Contraseña == null)) {
              _context7.next = 3;
              break;
            }

            return _context7.abrupt("return", res.status(400).json({
              message: "Por favor llena todos los campos"
            }));

          case 3:
            _context7.prev = 3;
            _context7.next = 6;
            return (0, _index.getConnection)();

          case 6:
            pool = _context7.sent;
            _context7.next = 9;
            return pool.request().input("NombreUsuario", _index.sql.VarChar, Nombre_Usuario).input("ApellidoUsuario", _index.sql.VarChar, Apellido_Usuario).input("CorreoElectronico", _index.sql.VarChar, Correo_Electronico).input("Contraseña", _index.sql.VarChar, Contraseña).query(_index.querys.RegistrarUsuario);

          case 9:
            res.json({
              Nombre_Usuario: Nombre_Usuario,
              Apellido_Usuario: Apellido_Usuario,
              Correo_Electronico: Correo_Electronico,
              Contraseña: Contraseña
            });
            _context7.next = 16;
            break;

          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](3);
            res.status(500);
            res.send(_context7.t0.message);

          case 16:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[3, 12]]);
  }));

  return function AltaUsuario(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.AltaUsuario = AltaUsuario;

var EliminarUsuario = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var Id, pool, result;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            Id = req.params.Id;
            _context8.next = 3;
            return (0, _index.getConnection)();

          case 3:
            pool = _context8.sent;
            _context8.next = 6;
            return pool.request().input("Id", _index.sql.Int, Id).query(_index.querys.EliminarUsuario);

          case 6:
            result = _context8.sent;
            res.sendStatus(204);

          case 8:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function EliminarUsuario(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.EliminarUsuario = EliminarUsuario;

var ContarUsuario = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return (0, _index.getConnection)();

          case 2:
            pool = _context9.sent;
            _context9.next = 5;
            return pool.request().query(_index.querys.ContarUsuarios);

          case 5:
            result = _context9.sent;
            res.json(result.recordset[0][""]);

          case 7:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function ContarUsuario(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

exports.ContarUsuario = ContarUsuario;

var ActualizarUsuarios = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var _req$body3, Nombre_Usuario, Apellido_Usuario, Correo_Electronico, Contraseña, CorreoE, pool;

    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _req$body3 = req.body, Nombre_Usuario = _req$body3.Nombre_Usuario, Apellido_Usuario = _req$body3.Apellido_Usuario, Correo_Electronico = _req$body3.Correo_Electronico, Contraseña = _req$body3.Contraseña;
            CorreoE = req.params.CorreoE;

            if (!(Nombre_Usuario == null || Apellido_Usuario == null || Correo_Electronico == null || Contraseña == null)) {
              _context10.next = 4;
              break;
            }

            return _context10.abrupt("return", res.status(400).json({
              message: "Por favor llena todos los campos"
            }));

          case 4:
            _context10.prev = 4;
            _context10.next = 7;
            return (0, _index.getConnection)();

          case 7:
            pool = _context10.sent;
            _context10.next = 10;
            return pool.request().input("Nombre", _index.sql.VarChar, Nombre_Usuario).input("Apellido", _index.sql.VarChar, Apellido_Usuario).input("Correo", _index.sql.VarChar, Correo_Electronico).input("Contraseña", _index.sql.VarChar, Contraseña).query(_index.querys.ActualizarUsuario);

          case 10:
            res.json({
              Nombre_Usuario: Nombre_Usuario,
              Apellido_Usuario: Apellido_Usuario,
              Correo_Electronico: Correo_Electronico,
              Contraseña: Contraseña
            });
            _context10.next = 17;
            break;

          case 13:
            _context10.prev = 13;
            _context10.t0 = _context10["catch"](4);
            res.status(500);
            res.send(_context10.t0.message);

          case 17:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[4, 13]]);
  }));

  return function ActualizarUsuarios(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

exports.ActualizarUsuarios = ActualizarUsuarios;