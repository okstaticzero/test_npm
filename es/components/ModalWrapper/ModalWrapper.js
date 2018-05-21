function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
import React from 'react';
import Modal from '../Modal';
import Button from '../Button';

var ModalWrapper =
/*#__PURE__*/
function (_React$Component) {
  function ModalWrapper() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, ModalWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ModalWrapper)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isOpen: false
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOpen", function () {
      _this.setState({
        isOpen: true
      });
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClose", function () {
      _this.setState({
        isOpen: false
      });
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnRequestSubmit", function () {
      var _this$props = _this.props,
          handleSubmit = _this$props.handleSubmit,
          shouldCloseAfterSubmit = _this$props.shouldCloseAfterSubmit;

      if (handleSubmit()) {
        if (shouldCloseAfterSubmit) {
          _this.handleClose();
        }
      }
    }), _temp));
  }

  _createClass(ModalWrapper, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          id = _this$props2.id,
          buttonTriggerText = _this$props2.buttonTriggerText,
          triggerButtonKind = _this$props2.triggerButtonKind,
          modalLabel = _this$props2.modalLabel,
          modalHeading = _this$props2.modalHeading,
          passiveModal = _this$props2.passiveModal,
          primaryButtonText = _this$props2.primaryButtonText,
          secondaryButtonText = _this$props2.secondaryButtonText,
          disabled = _this$props2.disabled;
      var props = {
        id: id,
        modalLabel: modalLabel,
        modalHeading: modalHeading,
        passiveModal: passiveModal,
        primaryButtonText: primaryButtonText,
        secondaryButtonText: secondaryButtonText,
        open: this.state.isOpen,
        onRequestClose: this.handleClose,
        onRequestSubmit: this.handleOnRequestSubmit
      };
      return React.createElement("div", {
        role: "presentation",
        onKeyDown: function onKeyDown(evt) {
          if (evt.which === 27) {
            _this2.handleClose();

            _this2.props.onKeyDown(evt);
          }
        }
      }, React.createElement(Button, {
        disabled: disabled,
        kind: triggerButtonKind,
        onClick: this.handleOpen
      }, buttonTriggerText), React.createElement(Modal, props, this.props.children));
    }
  }]);

  _inherits(ModalWrapper, _React$Component);

  return ModalWrapper;
}(React.Component);

_defineProperty(ModalWrapper, "propTypes", {
  status: PropTypes.string,
  handleOpen: PropTypes.func,
  children: PropTypes.node,
  id: PropTypes.string,
  buttonTriggerText: PropTypes.string,
  modalLabel: PropTypes.string,
  modalHeading: PropTypes.string,
  modalText: PropTypes.string,
  passiveModal: PropTypes.bool,
  withHeader: PropTypes.bool,
  modalBeforeContent: PropTypes.bool,
  primaryButtonText: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  handleSubmit: PropTypes.func,
  disabled: PropTypes.bool,
  triggerButtonKind: PropTypes.oneOf(['primary', 'secondary', 'danger', 'ghost']),
  shouldCloseAfterSubmit: PropTypes.bool
});

_defineProperty(ModalWrapper, "defaultProps", {
  primaryButtonText: 'Save',
  secondaryButtonText: 'Cancel',
  triggerButtonKind: 'primary',
  disabled: false
});

export { ModalWrapper as default };