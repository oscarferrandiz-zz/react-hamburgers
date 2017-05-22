'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Hamburger;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Hamburger(_ref) {
  var active = _ref.active,
      type = _ref.type;


  var cNames = (0, _classnames2.default)('hamburger', 'hamburger--' + type, { 'is-active': active });

  return _react2.default.createElement(
    'button',
    { className: cNames, type: 'button' },
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