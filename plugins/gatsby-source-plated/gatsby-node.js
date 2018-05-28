'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sourceNodes = undefined;

var createMenu = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(createNode) {
    var menuResponse;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _axios2.default.get("https://api.plated.com/api/v4/menus.json");

          case 2:
            menuResponse = _context2.sent;

            // console.log("What is this " + menuResponse.data + " and createNode " + createNode)
            menuResponse.data.mains.forEach((0, _fp.pipe)(_nodes.MenuNode, createNode));

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function createMenu(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

var _fp = require('lodash/fp');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _nodes = require('./nodes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var sourceNodes = exports.sourceNodes = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref, _ref2) {
    var createNode = _ref.boundActionCreators.createNode;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _objectDestructuringEmpty(_ref2);

            _context.next = 3;
            return createMenu(createNode);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function sourceNodes(_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}();