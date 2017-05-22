'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Hamburger;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Hamburger(_ref) {
  var active = _ref.active,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ['active', 'type']);

  var cNames = (0, _classnames2.default)('hamburger', 'hamburger--' + type, { 'is-active': active });

  return _react2.default.createElement(
    'button',
    _extends({ type: 'button', className: cNames }, props),
    _react2.default.createElement(
      'span',
      { className: 'hamburger-box' },
      _react2.default.createElement('span', { className: 'hamburger-inner' })
    )
  );
}

/* PropTypes */
Hamburger.propTypes = {
  active: _propTypes2.default.bool,
  type: _propTypes2.default.string
};

/* Default props */
Hamburger.defaultProps = {
  active: false,
  type: 'boring'
};