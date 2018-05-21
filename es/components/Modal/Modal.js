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
import classNames from 'classnames';
import Icon from '../Icon';
import Button from '../Button';

var Modal =
/*#__PURE__*/
function (_Component) {
  function Modal() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyDown", function (evt) {
      if (evt.which === 27) {
        _this.props.onRequestClose();
      }

      if (evt.which === 13 && _this.props.shouldSubmitOnEnter) {
        _this.props.onRequestSubmit();
      }
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (evt) {
      if (_this.innerModal && !_this.innerModal.contains(evt.target)) {
        _this.props.onRequestClose();
      }
    }), _temp));
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          modalHeading = _this$props.modalHeading,
          modalLabel = _this$props.modalLabel,
          modalAriaLabel = _this$props.modalAriaLabel,
          passiveModal = _this$props.passiveModal,
          secondaryButtonText = _this$props.secondaryButtonText,
          primaryButtonText = _this$props.primaryButtonText,
          open = _this$props.open,
          onRequestClose = _this$props.onRequestClose,
          onRequestSubmit = _this$props.onRequestSubmit,
          onSecondarySubmit = _this$props.onSecondarySubmit,
          iconDescription = _this$props.iconDescription,
          primaryButtonDisabled = _this$props.primaryButtonDisabled,
          danger = _this$props.danger,
          other = _objectWithoutProperties(_this$props, ["modalHeading", "modalLabel", "modalAriaLabel", "passiveModal", "secondaryButtonText", "primaryButtonText", "open", "onRequestClose", "onRequestSubmit", "onSecondarySubmit", "iconDescription", "primaryButtonDisabled", "danger"]);

      var onSecondaryButtonClick = onSecondarySubmit ? onSecondarySubmit : onRequestClose;
      var modalClasses = classNames(_defineProperty({
        'bx--modal': true,
        'bx--modal-tall': !passiveModal,
        'is-visible': open,
        'bx--modal--danger': this.props.danger
      }, this.props.className, this.props.className));
      var modalButton = React.createElement("button", {
        className: "bx--modal-close",
        type: "button",
        onClick: onRequestClose
      }, React.createElement(Icon, {
        name: "close",
        className: "bx--modal-close__icon",
        description: iconDescription
      }));
      var modalBody = React.createElement("div", {
        ref: function ref(modal) {
          _this2.innerModal = modal;
        },
        role: "dialog",
        className: "bx--modal-container",
        "aria-label": modalAriaLabel
      }, React.createElement("div", {
        className: "bx--modal-header"
      }, passiveModal && modalButton, modalLabel && React.createElement("h4", {
        className: "bx--modal-header__label"
      }, modalLabel), React.createElement("h2", {
        className: "bx--modal-header__heading"
      }, modalHeading), !passiveModal && modalButton), React.createElement("div", {
        className: "bx--modal-content"
      }, this.props.children), !passiveModal && React.createElement("div", {
        className: "bx--modal-footer"
      }, React.createElement("div", {
        className: "bx--modal__buttons-container"
      }, React.createElement(Button, {
        kind: danger ? 'tertiary' : 'secondary',
        onClick: onSecondaryButtonClick
      }, secondaryButtonText), React.createElement(Button, {
        kind: danger ? 'danger--primary' : 'primary',
        disabled: primaryButtonDisabled,
        onClick: onRequestSubmit
      }, primaryButtonText))));
      return React.createElement("div", _extends({}, other, {
        onKeyDown: this.handleKeyDown,
        onClick: this.handleClick,
        className: modalClasses,
        role: "presentation",
        tabIndex: -1
      }), modalBody);
    }
  }]);

  _inherits(Modal, _Component);

  return Modal;
}(Component);

_defineProperty(Modal, "propTypes", {
  children: PropTypes.node,
  className: PropTypes.string,
  passiveModal: PropTypes.bool,
  onRequestClose: PropTypes.func,
  id: PropTypes.string,
  modalHeading: PropTypes.string,
  modalLabel: PropTypes.string,
  modalAriaLabel: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  primaryButtonText: PropTypes.string,
  open: PropTypes.bool,
  onRequestSubmit: PropTypes.func,
  onKeyDown: PropTypes.func,
  iconDescription: PropTypes.string,
  primaryButtonDisabled: PropTypes.bool,
  onSecondarySubmit: PropTypes.func,
  danger: PropTypes.bool,
  shouldSubmitOnEnter: PropTypes.bool
});

_defineProperty(Modal, "defaultProps", {
  onRequestClose: function onRequestClose() {},
  onRequestSubmit: function onRequestSubmit() {},
  primaryButtonDisabled: false,
  onKeyDown: function onKeyDown() {},
  passiveModal: false,
  iconDescription: 'close the modal',
  modalHeading: '',
  modalLabel: ''
});

export { Modal as default };