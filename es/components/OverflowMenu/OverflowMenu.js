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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import ClickListener from '../../internal/ClickListener';
import FloatingMenu from '../../internal/FloatingMenu';
import OptimizedResize from '../../internal/OptimizedResize';
import Icon from '../Icon';
var matchesFuncName = typeof Element !== 'undefined' && ['matches', 'webkitMatchesSelector', 'msMatchesSelector'].filter(function (name) {
  return typeof Element.prototype[name] === 'function';
})[0];
/**
 * @param {Node} elem A DOM node.
 * @param {string} selector A CSS selector
 * @returns {boolean} `true` if the given DOM element is a element node and matches the given selector.
 * @private
 */

var matches = function matches(elem, selector) {
  return typeof elem[matchesFuncName] === 'function' && elem[matchesFuncName](selector);
};

var on = function on(element) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  element.addEventListener.apply(element, args);
  return {
    release: function release() {
      element.removeEventListener.apply(element, args);
      return null;
    }
  };
};
/**
 * @param {Element} menuBody The menu body with the menu arrow.
 * @returns {FloatingMenu~offset} The adjustment of the floating menu position, upon the position of the menu arrow.
 * @private
 */


var getMenuOffset = function getMenuOffset(menuBody) {
  var menuWidth = menuBody.offsetWidth;
  var arrowStyle = menuBody.ownerDocument.defaultView.getComputedStyle(menuBody, ':before');
  var values = ['top', 'left', 'width', 'height', 'border-top-width'].reduce(function (o, name) {
    return _objectSpread({}, o, _defineProperty({}, name, Number((/^([\d-]+)px$/.exec(arrowStyle.getPropertyValue(name)) || [])[1])));
  }, {});

  if (Object.keys(values).every(function (name) {
    return !isNaN(values[name]);
  })) {
    var top = values.top,
        left = values.left,
        width = values.width,
        height = values.height,
        borderTopWidth = values['border-top-width'];
    return {
      left: menuWidth / 2 - (left + Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 2),
      top: Math.sqrt(Math.pow(borderTopWidth, 2) * 2) - top
    };
  }
};

var OverflowMenu =
/*#__PURE__*/
function (_Component) {
  function OverflowMenu() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, OverflowMenu);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OverflowMenu)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_hFocusIn", null), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      /**
       * The open/closed state.
       * @type {boolean}
       */
      open: _this.props.open
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getMenuPosition", function () {
      if (_this.menuEl) {
        var menuPosition = _this.menuEl.getBoundingClientRect();

        _this.setState({
          menuPosition: menuPosition
        });
      }
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (evt) {
      _this.setState({
        open: !_this.state.open
      });

      _this.props.onClick(evt);
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyDown", function (evt) {
      if (evt.which === 40) {
        _this.setState({
          open: !_this.state.open
        });

        _this.props.onClick(evt);
      }
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyPress", function (evt) {
      // only respond to key events when the menu is closed, so that menu items still respond to key events
      if (!_this.state.open) {
        var key = evt.key || evt.which;

        if (key === 'Enter' || key === 13 || key === ' ' || key === 32) {
          _this.setState({
            open: true
          });
        }
      }
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClickOutside", function () {
      _this.closeMenu();
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeMenu", function () {
      _this.setState({
        open: false
      });
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "bindMenuEl", function (menuEl) {
      _this.menuEl = menuEl;
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_bindMenuBody", function (menuBody) {
      if (!menuBody && _this._hFocusIn) {
        _this._hFocusIn = _this._hFocusIn.release();
      }
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handlePlace", function (menuBody) {
      if (menuBody) {
        (menuBody.querySelector('[data-floating-menu-primary-focus]') || menuBody).focus();
        var hasFocusin = 'onfocusin' in window;
        var focusinEventName = hasFocusin ? 'focusin' : 'focus';
        _this._hFocusIn = on(menuBody.ownerDocument, focusinEventName, function (event) {
          var target = event.target;

          if (!menuBody.contains(target)) {
            _this.closeMenu();

            if (_this.menuEl && !matches(target, '.bx--overflow-menu,.bx--overflow-menu-options')) {
              // Note:
              // The last focusable element in the page should NOT be the trigger button of overflow menu.
              // Doing so breaks the code that detects if floating menu losing focus, e.g. by keyboard events.
              _this.menuEl.focus();
            }
          }
        }, !hasFocusin);
      }
    }), _temp));
  }

  _createClass(OverflowMenu, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this2 = this;

      if (nextState.open && !this.state.open) {
        requestAnimationFrame(function () {
          _this2.getMenuPosition();
        });
        return false; // Let `.getMenuPosition()` cause render
      }

      return true;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      requestAnimationFrame(function () {
        _this3.getMenuPosition();
      });
      this.hResize = OptimizedResize.add(function () {
        _this3.getMenuPosition();
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.open !== this.props.open) {
        this.setState({
          open: nextProps.open
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.hResize.release();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          id = _this$props.id,
          tabIndex = _this$props.tabIndex,
          ariaLabel = _this$props.ariaLabel,
          children = _this$props.children,
          iconDescription = _this$props.iconDescription,
          iconName = _this$props.iconName,
          flipped = _this$props.flipped,
          floatingMenu = _this$props.floatingMenu,
          menuOffset = _this$props.menuOffset,
          menuOffsetFlip = _this$props.menuOffsetFlip,
          iconClass = _this$props.iconClass,
          onClick = _this$props.onClick,
          renderIcon = _this$props.renderIcon,
          other = _objectWithoutProperties(_this$props, ["id", "tabIndex", "ariaLabel", "children", "iconDescription", "iconName", "flipped", "floatingMenu", "menuOffset", "menuOffsetFlip", "iconClass", "onClick", "renderIcon"]);

      var open = this.state.open;
      var overflowMenuClasses = classNames(this.props.className, 'bx--overflow-menu', {
        'bx--overflow-menu--open': open
      });
      var overflowMenuOptionsClasses = classNames('bx--overflow-menu-options', {
        'bx--overflow-menu--flip': this.props.flipped,
        'bx--overflow-menu-options--open': open
      });
      var overflowMenuIconClasses = classNames('bx--overflow-menu__icon', iconClass);
      var childrenWithProps = React.Children.toArray(children).map(function (child) {
        return React.cloneElement(child, {
          closeMenu: _this4.closeMenu
        });
      });
      var menuBody = React.createElement("ul", {
        className: overflowMenuOptionsClasses,
        tabIndex: "-1",
        ref: !floatingMenu && this._bindMenuBody
      }, childrenWithProps);
      var wrappedMenuBody = !floatingMenu ? menuBody : React.createElement("div", {
        role: "menuitem"
      }, React.createElement(FloatingMenu, {
        menuPosition: this.state.menuPosition,
        menuOffset: flipped ? menuOffsetFlip : menuOffset,
        menuRef: this._bindMenuBody,
        onPlace: this._handlePlace
      }, menuBody));
      var iconProps = {
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        className: overflowMenuIconClasses,
        description: iconDescription,
        focusable: 'false' // Prevent `<svg>` in trigger icon from getting focus for IE11

      };
      return React.createElement(ClickListener, {
        onClickOutside: this.handleClickOutside
      }, React.createElement("div", _extends({}, other, {
        role: "button",
        "aria-haspopup": true,
        "aria-expanded": this.state.open,
        className: overflowMenuClasses,
        onKeyDown: this.handleKeyPress,
        "aria-label": ariaLabel,
        id: id,
        tabIndex: tabIndex,
        ref: this.bindMenuEl
      }), renderIcon ? renderIcon(iconProps) : React.createElement(Icon, _extends({}, iconProps, {
        name: iconName,
        style: {
          width: '100%'
        }
      })), open && wrappedMenuBody));
    }
  }]);

  _inherits(OverflowMenu, _Component);

  return OverflowMenu;
}(Component);

_defineProperty(OverflowMenu, "propTypes", {
  /**
   * `true` if the menu should be open.
   */
  open: PropTypes.bool,

  /**
   * `true` if the menu alignment should be flipped.
   */
  flipped: PropTypes.bool,

  /**
   * `true` if the menu should be floated, making the DOM of the menu body orphaned from the trigger button.
   * Useful when the container of the triggering element cannot have `overflow:visible` style, etc.
   */
  floatingMenu: PropTypes.bool,

  /**
   * The child nodes.
   */
  children: PropTypes.node,

  /**
   * The CSS class names.
   */
  className: PropTypes.string,

  /**
   * The `tabindex` attribute.
   */
  tabIndex: PropTypes.number,

  /**
   * The element ID.
   */
  id: PropTypes.string,

  /**
   * The ARIA label.
   */
  ariaLabel: PropTypes.string,

  /**
   * The event handler for the `click` event.
   */
  onClick: PropTypes.func,

  /**
   * The event handler for the `focus` event.
   */
  onFocus: PropTypes.func,

  /**
   * The event handler for the `keydown` event.
   */
  onKeyDown: PropTypes.func,

  /**
   * The icon description.
   */
  iconDescription: PropTypes.string.isRequired,

  /**
   * The icon name.
   */
  iconName: PropTypes.string,

  /**
   * The adjustment in position applied to the floating menu.
   */
  menuOffset: PropTypes.oneOfType([PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number
  }), PropTypes.func]),

  /**
   * The adjustment in position applied to the floating menu.
   */
  menuOffsetFlip: PropTypes.oneOfType([PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number
  }), PropTypes.func]),

  /**
   * The CSS class for the icon.
   */
  iconClass: PropTypes.string,

  /**
   * Function called to override icon rendering.
   */
  renderIcon: PropTypes.func
});

_defineProperty(OverflowMenu, "defaultProps", {
  ariaLabel: 'list of options',
  iconDescription: 'open and close list of options',
  iconName: 'overflow-menu',
  open: false,
  flipped: false,
  floatingMenu: false,
  onClick: function onClick() {},
  onKeyDown: function onKeyDown() {},
  tabIndex: 0,
  menuOffset: getMenuOffset,
  menuOffsetFlip: getMenuOffset
});

export { OverflowMenu as default };