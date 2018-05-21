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
import React, { Component, Children } from 'react';
import classnames from 'classnames';
import debounce from 'lodash.debounce';
import window from 'window-or-global';
import Breadcrumb from '../Breadcrumb';
import Tabs from '../Tabs';
import OverflowMenu from '../OverflowMenu';
import Icon from '../Icon';

var DetailPageHeader =
/*#__PURE__*/
function (_Component) {
  function DetailPageHeader() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, DetailPageHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DetailPageHeader)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isScrolled: _this.props.isScrolled || false,
      isScrollingDownward: _this.props.isScrollingDownward || false,
      lastPosition: 0
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleScroll", function () {
      var lastPosition = _this.state.lastPosition;
      var currentPosition = window.pageYOffset || 0;

      if (currentPosition > 86) {
        if (currentPosition > lastPosition) {
          _this.setState({
            isScrolled: true,
            isScrollingDownward: true,
            lastPosition: currentPosition
          });
        } else {
          _this.setState({
            isScrolled: true,
            isScrollingDownward: false,
            lastPosition: currentPosition
          });
        }
      } else {
        _this.setState({
          isScrolled: false,
          isScrollingDownward: false,
          lastPosition: currentPosition
        });
      }
    }), _temp));
  }

  _createClass(DetailPageHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._debouncedScroll = debounce(this.handleScroll, 25);
      window.addEventListener('scroll', this._debouncedScroll);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isScrolled !== this.props.isScrolled) {
        this.setState({
          isScrolled: nextProps.isScrolled
        });
      }

      if (nextProps.isScrollingDownward !== this.props.isScrollingDownward) {
        this.setState({
          isScrollingDownward: nextProps.isScrollingDownward
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this._debouncedScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          title = _this$props.title,
          hasTabs = _this$props.hasTabs,
          statusColor = _this$props.statusColor,
          statusContent = _this$props.statusContent,
          statusText = _this$props.statusText,
          other = _objectWithoutProperties(_this$props, ["children", "title", "hasTabs", "statusColor", "statusContent", "statusText"]);

      var _this$state = this.state,
          isScrolled = _this$state.isScrolled,
          isScrollingDownward = _this$state.isScrollingDownward;
      var defaultIcon = React.createElement("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, React.createElement("path", {
        fill: "#D8D8D8",
        d: "M0 0h24v24H0z",
        fillRule: "evenodd"
      }));
      var withTabs = hasTabs ? 'bx--detail-page-header--with-tabs' : 'bx--detail-page-header--no-tabs';
      var scrolled = isScrollingDownward ? 'bx--detail-page-header--scroll' : null;
      var classNames = classnames('bx--detail-page-header', withTabs, scrolled);
      var breadcrumb;
      var tabs;
      var overflow;
      var icon;
      Children.map(children, function (child) {
        if (child.type === Breadcrumb) {
          breadcrumb = child;
        }

        if (child.type === Tabs) {
          tabs = child;
        }

        if (child.type === OverflowMenu) {
          overflow = child;
        }

        if (child.type === Icon) {
          icon = child;
        }

        return null;
      });
      var statusStyles = {
        backgroundColor: statusColor
      };
      icon = icon === undefined ? defaultIcon : icon;
      return React.createElement("header", _extends({}, other, {
        className: classNames,
        "data-header-active": isScrolled
      }), React.createElement("div", {
        className: "bx--detail-page-header-content"
      }, breadcrumb, React.createElement("div", {
        className: "bx--detail-page-header-title-container"
      }, React.createElement("div", {
        className: "bx--detail-page-header-icon-container"
      }, icon), React.createElement("h1", {
        className: "bx--detail-page-header-title"
      }, title), React.createElement("div", {
        className: "bx--detail-page-header-status-container"
      }, React.createElement("div", {
        style: statusStyles,
        className: "bx--detail-page-header-status-icon"
      }), ' ', React.createElement("span", {
        className: "bx--detail-page-header-status-text"
      }, statusText, statusContent))), tabs), React.createElement("div", {
        className: "bx--detail-page-header-menu"
      }, overflow));
    }
  }]);

  _inherits(DetailPageHeader, _Component);

  return DetailPageHeader;
}(Component);

_defineProperty(DetailPageHeader, "propTypes", {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  role: PropTypes.string,
  statusColor: PropTypes.string,
  statusContent: PropTypes.node,
  statusText: PropTypes.string,
  hasTabs: PropTypes.bool,
  isScrolled: PropTypes.bool,
  isScrollingDownward: PropTypes.bool
});

_defineProperty(DetailPageHeader, "defaultProps", {
  title: 'Provide a title',
  statusText: 'Running',
  role: 'banner',
  // a11y compliance
  hasTabs: false
});

export { DetailPageHeader as default };