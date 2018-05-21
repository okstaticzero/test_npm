function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

import React from 'react';

var ToggleSkeleton =
/*#__PURE__*/
function (_React$Component) {
  function ToggleSkeleton() {
    _classCallCheck(this, ToggleSkeleton);

    return _possibleConstructorReturn(this, _getPrototypeOf(ToggleSkeleton).apply(this, arguments));
  }

  _createClass(ToggleSkeleton, [{
    key: "render",
    value: function render() {
      var id = this.props.id;
      return React.createElement("div", {
        className: "bx--form-item"
      }, React.createElement("input", {
        type: "checkbox",
        id: id,
        className: "bx--toggle bx--skeleton"
      }), React.createElement("label", {
        className: "bx--toggle__label bx--skeleton",
        htmlFor: id
      }, React.createElement("span", {
        className: "bx--toggle__text--left"
      }), React.createElement("span", {
        className: "bx--toggle__appearance"
      }), React.createElement("span", {
        className: "bx--toggle__text--right"
      })));
    }
  }]);

  _inherits(ToggleSkeleton, _React$Component);

  return ToggleSkeleton;
}(React.Component);

export { ToggleSkeleton as default };