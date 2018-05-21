"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderSummaryFooter = exports.OrderSummaryTotal = exports.OrderSummaryListItem = exports.OrderSummaryCategory = exports.OrderSummaryList = exports.OrderSummaryHeader = exports.OrderSummary = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Link = _interopRequireDefault(require("../Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var OrderSummary =
/*#__PURE__*/
function (_Component) {
  function OrderSummary() {
    _classCallCheck(this, OrderSummary);

    return _possibleConstructorReturn(this, _getPrototypeOf(OrderSummary).apply(this, arguments));
  }

  _createClass(OrderSummary, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          other = _objectWithoutProperties(_this$props, ["children", "className"]);

      var classes = (0, _classnames.default)('bx--order-summary', className);
      return _react.default.createElement("div", _extends({
        className: classes
      }, other), children);
    }
  }]);

  _inherits(OrderSummary, _Component);

  return OrderSummary;
}(_react.Component);

exports.OrderSummary = OrderSummary;

_defineProperty(OrderSummary, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string
});

var OrderSummaryHeader =
/*#__PURE__*/
function (_Component2) {
  function OrderSummaryHeader() {
    _classCallCheck(this, OrderSummaryHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(OrderSummaryHeader).apply(this, arguments));
  }

  _createClass(OrderSummaryHeader, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          _this$props2$id = _this$props2.id,
          id = _this$props2$id === void 0 ? this._sectionId = this._sectionId || "order__summary__header__id_".concat(Math.random().toString(36).substr(2)) : _this$props2$id,
          title = _this$props2.title,
          other = _objectWithoutProperties(_this$props2, ["children", "className", "id", "title"]);

      var classes = (0, _classnames.default)('bx--order-header', className);
      return _react.default.createElement("section", _extends({
        className: classes,
        "aria-labelledby": "".concat(id, "__title")
      }, other), _react.default.createElement("p", {
        className: "bx--order-header-title",
        id: "".concat(id, "__title")
      }, title), children);
    }
  }]);

  _inherits(OrderSummaryHeader, _Component2);

  return OrderSummaryHeader;
}(_react.Component);

exports.OrderSummaryHeader = OrderSummaryHeader;

_defineProperty(OrderSummaryHeader, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  id: _propTypes.default.string,
  title: _propTypes.default.string
});

_defineProperty(OrderSummaryHeader, "defaultProps", {
  title: 'Order Summary'
});

var OrderSummaryList =
/*#__PURE__*/
function (_Component3) {
  function OrderSummaryList() {
    _classCallCheck(this, OrderSummaryList);

    return _possibleConstructorReturn(this, _getPrototypeOf(OrderSummaryList).apply(this, arguments));
  }

  _createClass(OrderSummaryList, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          className = _this$props3.className,
          other = _objectWithoutProperties(_this$props3, ["children", "className"]);

      var classes = (0, _classnames.default)('bx--order-list', className);
      return _react.default.createElement("ul", _extends({
        className: classes
      }, other), children);
    }
  }]);

  _inherits(OrderSummaryList, _Component3);

  return OrderSummaryList;
}(_react.Component);

exports.OrderSummaryList = OrderSummaryList;

_defineProperty(OrderSummaryList, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string
});

var OrderSummaryCategory =
/*#__PURE__*/
function (_Component4) {
  function OrderSummaryCategory() {
    _classCallCheck(this, OrderSummaryCategory);

    return _possibleConstructorReturn(this, _getPrototypeOf(OrderSummaryCategory).apply(this, arguments));
  }

  _createClass(OrderSummaryCategory, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          className = _this$props4.className,
          categoryText = _this$props4.categoryText,
          other = _objectWithoutProperties(_this$props4, ["children", "className", "categoryText"]);

      var classes = (0, _classnames.default)('bx--order-category', className);
      return _react.default.createElement("li", _extends({
        className: classes
      }, other), _react.default.createElement("p", {
        className: "bx--order-category-title"
      }, categoryText), _react.default.createElement("ul", null, children));
    }
  }]);

  _inherits(OrderSummaryCategory, _Component4);

  return OrderSummaryCategory;
}(_react.Component);

exports.OrderSummaryCategory = OrderSummaryCategory;

_defineProperty(OrderSummaryCategory, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  categoryText: _propTypes.default.string
});

_defineProperty(OrderSummaryCategory, "defaultProps", {
  categoryText: 'Category Label'
});

var OrderSummaryListItem =
/*#__PURE__*/
function (_Component5) {
  function OrderSummaryListItem() {
    _classCallCheck(this, OrderSummaryListItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(OrderSummaryListItem).apply(this, arguments));
  }

  _createClass(OrderSummaryListItem, [{
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          className = _this$props5.className,
          text = _this$props5.text,
          price = _this$props5.price,
          other = _objectWithoutProperties(_this$props5, ["className", "text", "price"]);

      var classes = (0, _classnames.default)('bx--order-item', className);
      return _react.default.createElement("li", _extends({
        className: classes
      }, other), _react.default.createElement("p", {
        className: "bx--order-detail"
      }, text), _react.default.createElement("p", {
        className: "bx--order-price"
      }, price));
    }
  }]);

  _inherits(OrderSummaryListItem, _Component5);

  return OrderSummaryListItem;
}(_react.Component);

exports.OrderSummaryListItem = OrderSummaryListItem;

_defineProperty(OrderSummaryListItem, "propTypes", {
  className: _propTypes.default.string,
  text: _propTypes.default.string,
  price: _propTypes.default.string
});

_defineProperty(OrderSummaryListItem, "defaultProps", {
  text: 'Detail 1',
  price: '--'
});

var OrderSummaryTotal =
/*#__PURE__*/
function (_Component6) {
  function OrderSummaryTotal() {
    _classCallCheck(this, OrderSummaryTotal);

    return _possibleConstructorReturn(this, _getPrototypeOf(OrderSummaryTotal).apply(this, arguments));
  }

  _createClass(OrderSummaryTotal, [{
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          children = _this$props6.children,
          className = _this$props6.className,
          _this$props6$id = _this$props6.id,
          id = _this$props6$id === void 0 ? "order__summary__total__id_".concat(Math.random().toString(36).substr(2)) : _this$props6$id,
          summaryText = _this$props6.summaryText,
          summaryPrice = _this$props6.summaryPrice,
          summaryDetails = _this$props6.summaryDetails,
          other = _objectWithoutProperties(_this$props6, ["children", "className", "id", "summaryText", "summaryPrice", "summaryDetails"]);

      var classes = (0, _classnames.default)('bx--order-total-container', className);
      return _react.default.createElement("section", _extends({
        className: classes,
        "aria-labelledby": "".concat(id, "__title")
      }, other), _react.default.createElement("div", {
        className: "bx--order-total"
      }, _react.default.createElement("p", {
        className: "bx--order-total-text",
        id: "".concat(id, "__title")
      }, summaryText), _react.default.createElement("p", {
        className: "bx--order-total-price"
      }, summaryPrice, _react.default.createElement("span", null, summaryDetails))), children);
    }
  }]);

  _inherits(OrderSummaryTotal, _Component6);

  return OrderSummaryTotal;
}(_react.Component);

exports.OrderSummaryTotal = OrderSummaryTotal;

_defineProperty(OrderSummaryTotal, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  id: _propTypes.default.string,
  summaryText: _propTypes.default.string,
  summaryPrice: _propTypes.default.string,
  summaryDetails: _propTypes.default.string
});

_defineProperty(OrderSummaryTotal, "defaultProps", {
  summaryText: 'Total due now:',
  summaryPrice: '$0.00',
  summaryDetails: 'estimated'
});

var OrderSummaryFooter =
/*#__PURE__*/
function (_Component7) {
  function OrderSummaryFooter() {
    _classCallCheck(this, OrderSummaryFooter);

    return _possibleConstructorReturn(this, _getPrototypeOf(OrderSummaryFooter).apply(this, arguments));
  }

  _createClass(OrderSummaryFooter, [{
    key: "render",
    value: function render() {
      var _this$props7 = this.props,
          className = _this$props7.className,
          _this$props7$id = _this$props7.id,
          id = _this$props7$id === void 0 ? this._sectionId = this._sectionId || "order__summary__footer__id_".concat(Math.random().toString(36).substr(2)) : _this$props7$id,
          footerText = _this$props7.footerText,
          linkText = _this$props7.linkText,
          href = _this$props7.href,
          target = _this$props7.target,
          rel = _this$props7.rel,
          other = _objectWithoutProperties(_this$props7, ["className", "id", "footerText", "linkText", "href", "target", "rel"]);

      var classes = (0, _classnames.default)('bx--order-footer', className);
      return _react.default.createElement("section", _extends({
        className: classes,
        "aria-labelledby": "".concat(id, "__title")
      }, other), _react.default.createElement("p", {
        className: "bx--order-footer-text",
        id: "".concat(id, "__title")
      }, footerText), "\xA0", _react.default.createElement(_Link.default, {
        href: href,
        target: target,
        rel: rel
      }, linkText));
    }
  }]);

  _inherits(OrderSummaryFooter, _Component7);

  return OrderSummaryFooter;
}(_react.Component);

exports.OrderSummaryFooter = OrderSummaryFooter;

_defineProperty(OrderSummaryFooter, "propTypes", {
  className: _propTypes.default.string,
  id: _propTypes.default.string,
  linkText: _propTypes.default.string,
  href: _propTypes.default.string,
  target: _propTypes.default.string,
  rel: _propTypes.default.string
});

_defineProperty(OrderSummaryFooter, "defaultProps", {
  footerText: 'Need Help?',
  linkText: 'Contact Bluemix Sales',
  href: '',
  target: '_blank',
  rel: 'noreferrer noopener'
});