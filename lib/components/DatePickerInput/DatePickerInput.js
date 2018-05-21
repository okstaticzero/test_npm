"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DatePickerInput =
/*#__PURE__*/
function (_Component) {
  function DatePickerInput() {
    _classCallCheck(this, DatePickerInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(DatePickerInput).apply(this, arguments));
  }

  _createClass(DatePickerInput, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          id = _this$props.id,
          labelText = _this$props.labelText,
          invalid = _this$props.invalid,
          invalidText = _this$props.invalidText,
          hideLabel = _this$props.hideLabel,
          _onChange = _this$props.onChange,
          _onClick = _this$props.onClick,
          placeholder = _this$props.placeholder,
          type = _this$props.type,
          datePickerType = _this$props.datePickerType,
          pattern = _this$props.pattern,
          other = _objectWithoutProperties(_this$props, ["id", "labelText", "invalid", "invalidText", "hideLabel", "onChange", "onClick", "placeholder", "type", "datePickerType", "pattern"]);

      var datePickerInputProps = {
        id: id,
        onChange: function onChange(evt) {
          if (!other.disabled) {
            _onChange(evt);
          }
        },
        onClick: function onClick(evt) {
          if (!other.disabled) {
            _onClick(evt);
          }
        },
        placeholder: placeholder,
        type: type,
        pattern: pattern
      };
      var labelClasses = (0, _classnames.default)('bx--label', {
        'bx--visually-hidden': hideLabel
      });
      var datePickerIcon = datePickerType === 'single' ? _react.default.createElement("svg", {
        className: "bx--date-picker__icon",
        width: "17",
        height: "19",
        viewBox: "0 0 17 19"
      }, _react.default.createElement("path", {
        d: "M12 0h2v2.7h-2zM3 0h2v2.7H3z"
      }), _react.default.createElement("path", {
        d: "M0 2v17h17V2H0zm15 15H2V7h13v10z"
      }), _react.default.createElement("path", {
        d: "M9.9 15H8.6v-3.9H7.1v-.9c.9 0 1.7-.3 1.8-1.2h1v6z"
      })) : '';
      var label = labelText ? _react.default.createElement("label", {
        htmlFor: id,
        className: labelClasses
      }, labelText) : null;
      var error = invalid ? _react.default.createElement("div", {
        className: "bx--form-requirement"
      }, invalidText) : null;
      var input = invalid ? _react.default.createElement("input", _extends({}, other, datePickerInputProps, {
        ref: function ref(input) {
          _this.input = input;
        },
        "data-invalid": true,
        className: "bx--date-picker__input"
      })) : _react.default.createElement("input", _extends({
        ref: function ref(input) {
          _this.input = input;
        }
      }, other, datePickerInputProps, {
        className: "bx--date-picker__input"
      }));
      return _react.default.createElement("div", {
        className: "bx--date-picker-container"
      }, label, datePickerIcon, input, error);
    }
  }]);

  _inherits(DatePickerInput, _Component);

  return DatePickerInput;
}(_react.Component);

exports.default = DatePickerInput;

_defineProperty(DatePickerInput, "propTypes", {
  id: _propTypes.default.string.isRequired,
  children: _propTypes.default.node
});

_defineProperty(DatePickerInput, "defaultProps", {
  pattern: '\\d{1,2}\\/\\d{1,2}\\/\\d{4}',
  type: 'text',
  disabled: false,
  invalid: false,
  labelText: '',
  onClick: function onClick() {},
  onChange: function onChange() {}
});