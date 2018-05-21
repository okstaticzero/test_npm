function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Icon from '../Icon';

var AccordionItem =
/*#__PURE__*/
function (_Component) {
  function AccordionItem() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, AccordionItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AccordionItem)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: _this.props.open
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (evt) {
      _this.props.onClick(evt);
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleHeadingClick", function (evt) {
      var open = !_this.state.open;

      _this.setState({
        open: open
      });

      _this.props.onHeadingClick({
        isOpen: open,
        event: evt
      });
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyPress", function (evt) {
      var isKeyPressTarget = evt.target === evt.currentTarget;
      var isValidKeyPress = [13, 32].indexOf(evt.which) !== -1;

      if (isKeyPressTarget && isValidKeyPress) {
        _this.handleHeadingClick(evt);
      }
    }), _temp));
  }

  _createClass(AccordionItem, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var open = _ref.open;

      if (open !== this.props.open) {
        this.setState({
          open: open
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          title = _this$props.title,
          children = _this$props.children,
          onClick = _this$props.onClick,
          onHeadingClick = _this$props.onHeadingClick,
          other = _objectWithoutProperties(_this$props, ["className", "title", "children", "onClick", "onHeadingClick"]);

      var classNames = classnames({
        'bx--accordion__item--active': this.state.open
      }, 'bx--accordion__item', className);
      return React.createElement("li", _extends({
        className: classNames,
        onClick: this.handleClick,
        onKeyPress: this.handleKeyPress,
        role: "presentation"
      }, other), React.createElement("button", {
        type: "button",
        className: "bx--accordion__heading",
        role: "tab",
        onClick: this.handleHeadingClick
      }, React.createElement(Icon, {
        className: "bx--accordion__arrow",
        name: "chevron--right",
        description: "Expand/Collapse"
      }), React.createElement("p", {
        className: "bx--accordion__title"
      }, title)), React.createElement("div", {
        className: "bx--accordion__content"
      }, children));
    }
  }]);

  _inherits(AccordionItem, _Component);

  return AccordionItem;
}(Component);

_defineProperty(AccordionItem, "propTypes", {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.node,
  open: PropTypes.bool,
  onClick: PropTypes.func,
  onHeadingClick: PropTypes.func
});

_defineProperty(AccordionItem, "defaultProps", {
  title: 'title',
  open: false,
  onClick: function onClick() {},
  onHeadingClick: function onHeadingClick() {}
});

export { AccordionItem as default };