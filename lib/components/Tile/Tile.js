"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TileBelowTheFoldContent = exports.TileAboveTheFoldContent = exports.ExpandableTile = exports.SelectableTile = exports.ClickableTile = exports.Tile = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

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

var Tile =
/*#__PURE__*/
function (_Component) {
  function Tile() {
    _classCallCheck(this, Tile);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tile).apply(this, arguments));
  }

  _createClass(Tile, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          other = _objectWithoutProperties(_this$props, ["children", "className"]);

      var tileClasses = (0, _classnames.default)('bx--tile', className);
      return _react.default.createElement("div", _extends({
        className: tileClasses
      }, other), children);
    }
  }]);

  _inherits(Tile, _Component);

  return Tile;
}(_react.Component);

exports.Tile = Tile;

_defineProperty(Tile, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string
});

var ClickableTile =
/*#__PURE__*/
function (_Component2) {
  function ClickableTile() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, ClickableTile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ClickableTile)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      clicked: _this.props.clicked
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (evt) {
      _this.setState({
        clicked: !_this.state.clicked
      }, function () {
        _this.props.handleClick(evt);
      });
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyDown", function (evt) {
      if (evt.which === 13 || evt.which === 32) {
        _this.setState({
          clicked: !_this.state.clicked
        }, function () {
          _this.props.handleKeyDown(evt);
        });
      } else {
        _this.props.handleKeyDown(evt);
      }
    }), _temp));
  }

  _createClass(ClickableTile, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var clicked = _ref.clicked;

      if (clicked !== this.props.clicked) {
        this.setState({
          clicked: clicked
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          href = _this$props2.href,
          className = _this$props2.className,
          handleClick = _this$props2.handleClick,
          handleKeyDown = _this$props2.handleKeyDown,
          clicked = _this$props2.clicked,
          other = _objectWithoutProperties(_this$props2, ["children", "href", "className", "handleClick", "handleKeyDown", "clicked"]);

      var classes = (0, _classnames.default)('bx--tile', 'bx--tile--clickable', {
        'bx--tile--is-clicked': this.state.clicked
      }, className);
      return _react.default.createElement("a", _extends({
        href: href,
        className: classes
      }, other, {
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown
      }), children);
    }
  }]);

  _inherits(ClickableTile, _Component2);

  return ClickableTile;
}(_react.Component);

exports.ClickableTile = ClickableTile;

_defineProperty(ClickableTile, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  href: _propTypes.default.string
});

_defineProperty(ClickableTile, "defaultProps", {
  clicked: false,
  handleClick: function handleClick() {},
  handleKeyDown: function handleKeyDown() {}
});

var SelectableTile =
/*#__PURE__*/
function (_Component3) {
  function SelectableTile() {
    var _getPrototypeOf3;

    var _temp2, _this2;

    _classCallCheck(this, SelectableTile);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _possibleConstructorReturn(_this2, (_temp2 = _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(SelectableTile)).call.apply(_getPrototypeOf3, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {
      selected: _this2.props.selected
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "handleClick", function (evt) {
      evt.preventDefault();
      var isInput = evt.target === _this2.input;

      if (!isInput) {
        _this2.setState({
          selected: !_this2.state.selected
        }, function () {
          _this2.props.handleClick(evt);
        });
      } else {
        _this2.props.handleClick(evt);
      }
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "handleKeyDown", function (evt) {
      evt.preventDefault();

      if (evt.which === 13 || evt.which === 32) {
        _this2.setState({
          selected: !_this2.state.selected
        }, function () {
          _this2.props.handleKeyDown(evt);
        });
      } else {
        _this2.props.handleKeyDown(evt);
      }
    }), _temp2));
  }

  _createClass(SelectableTile, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref2) {
      var selected = _ref2.selected;

      if (selected !== this.props.selected) {
        this.setState({
          selected: selected
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          children = _this$props3.children,
          id = _this$props3.id,
          tabIndex = _this$props3.tabIndex,
          value = _this$props3.value,
          name = _this$props3.name,
          title = _this$props3.title,
          className = _this$props3.className,
          handleClick = _this$props3.handleClick,
          handleKeyDown = _this$props3.handleKeyDown,
          other = _objectWithoutProperties(_this$props3, ["children", "id", "tabIndex", "value", "name", "title", "className", "handleClick", "handleKeyDown"]);

      var classes = (0, _classnames.default)('bx--tile', 'bx--tile--selectable', className);
      return (// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        _react.default.createElement("label", _extends({
          htmlFor: id,
          className: classes,
          tabIndex: tabIndex
        }, other, {
          onClick: this.handleClick,
          onKeyDown: this.handleKeyDown
        }), _react.default.createElement("input", {
          ref: function ref(input) {
            _this3.input = input;
          },
          tabIndex: -1,
          id: id,
          className: "bx--tile-input",
          value: value,
          type: "checkbox",
          name: name,
          title: title,
          checked: this.state.selected
        }), _react.default.createElement("div", {
          className: "bx--tile__checkmark"
        }, _react.default.createElement(_Icon.default, {
          name: "checkmark--glyph",
          description: "Tile checkmark"
        })), _react.default.createElement("div", {
          className: "bx--tile-content"
        }, children))
      );
    }
  }]);

  _inherits(SelectableTile, _Component3);

  return SelectableTile;
}(_react.Component);

exports.SelectableTile = SelectableTile;

_defineProperty(SelectableTile, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  selected: _propTypes.default.bool,
  id: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  name: _propTypes.default.string,
  title: _propTypes.default.string
});

_defineProperty(SelectableTile, "defaultProps", {
  value: 'value',
  title: 'title',
  selected: false,
  handleClick: function handleClick() {},
  handleKeyDown: function handleKeyDown() {}
});

var ExpandableTile =
/*#__PURE__*/
function (_Component4) {
  function ExpandableTile() {
    var _getPrototypeOf4;

    var _temp3, _this4;

    _classCallCheck(this, ExpandableTile);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _possibleConstructorReturn(_this4, (_temp3 = _this4 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(ExpandableTile)).call.apply(_getPrototypeOf4, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this4)), "state", {
      expanded: _this4.props.expanded,
      tileMaxHeight: _this4.props.tileMaxHeight,
      tilePadding: _this4.props.tilePadding
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this4)), "componentDidMount", function () {
      if (_this4.refs[0]) {
        _this4.aboveTheFold = _reactDom.default.findDOMNode(_this4.refs[0]); // eslint-disable-line
      }

      var getStyle = window.getComputedStyle(_this4.tile, null);

      _this4.setState({
        tileMaxHeight: _this4.aboveTheFold.getBoundingClientRect().height,
        tilePadding: parseInt(getStyle.getPropertyValue('padding-top'), 10) + parseInt(getStyle.getPropertyValue('padding-bottom'), 10)
      });
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this4)), "setMaxHeight", function () {
      if (_this4.state.expanded) {
        _this4.setState({
          tileMaxHeight: _this4.tileContent.getBoundingClientRect().height
        });
      } else {
        _this4.setState({
          tileMaxHeight: _this4.aboveTheFold.getBoundingClientRect().height
        });
      }
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this4)), "handleClick", function (evt) {
      _this4.setState({
        expanded: !_this4.state.expanded
      }, function () {
        _this4.setMaxHeight();

        _this4.props.handleClick(evt);
      });
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this4)), "getChildren", function () {
      return _react.default.Children.map(_this4.props.children, function (child) {
        return child;
      });
    }), _temp3));
  }

  _createClass(ExpandableTile, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref3) {
      var expanded = _ref3.expanded,
          tileMaxHeight = _ref3.tileMaxHeight,
          tilePadding = _ref3.tilePadding;

      if (expanded !== this.props.expanded) {
        this.setState({
          expanded: expanded
        });
      }

      if (tileMaxHeight !== this.props.tileMaxHeight) {
        this.setState({
          tileMaxHeight: tileMaxHeight
        });
      }

      if (tilePadding !== this.props.tilePadding) {
        this.setState({
          tilePadding: tilePadding
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props4 = this.props,
          tabIndex = _this$props4.tabIndex,
          className = _this$props4.className,
          tileMaxHeight = _this$props4.tileMaxHeight,
          tilePadding = _this$props4.tilePadding,
          handleClick = _this$props4.handleClick,
          expanded = _this$props4.expanded,
          other = _objectWithoutProperties(_this$props4, ["tabIndex", "className", "tileMaxHeight", "tilePadding", "handleClick", "expanded"]);

      var classes = (0, _classnames.default)('bx--tile', 'bx--tile--expandable', {
        'bx--tile--is-expanded': this.state.expanded
      }, className);
      var tileStyle = {
        maxHeight: this.state.tileMaxHeight + this.state.tilePadding
      };
      var content = this.getChildren().map(function (child, index) {
        return _react.default.cloneElement(child, {
          ref: index
        });
      });
      return (// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        _react.default.createElement("div", _extends({
          ref: function ref(tile) {
            _this5.tile = tile;
          },
          style: tileStyle,
          className: classes
        }, other, {
          role: "button",
          onClick: this.handleClick,
          tabIndex: tabIndex
        }), _react.default.createElement("button", {
          className: "bx--tile__chevron"
        }, _react.default.createElement(_Icon.default, {
          name: "chevron--down",
          description: "Tile chevron"
        })), _react.default.createElement("div", {
          ref: function ref(tileContent) {
            _this5.tileContent = tileContent;
          },
          className: "bx--tile-content"
        }, content))
      );
    }
  }]);

  _inherits(ExpandableTile, _Component4);

  return ExpandableTile;
}(_react.Component);

exports.ExpandableTile = ExpandableTile;

_defineProperty(ExpandableTile, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  expanded: _propTypes.default.bool,
  tabIndex: _propTypes.default.number
});

_defineProperty(ExpandableTile, "defaultProps", {
  tabIndex: 0,
  expanded: false,
  tileMaxHeight: '0',
  handleClick: function handleClick() {}
});

var TileAboveTheFoldContent =
/*#__PURE__*/
function (_Component5) {
  function TileAboveTheFoldContent() {
    _classCallCheck(this, TileAboveTheFoldContent);

    return _possibleConstructorReturn(this, _getPrototypeOf(TileAboveTheFoldContent).apply(this, arguments));
  }

  _createClass(TileAboveTheFoldContent, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react.default.createElement("span", {
        className: "bx--tile-content__above-the-fold"
      }, children);
    }
  }]);

  _inherits(TileAboveTheFoldContent, _Component5);

  return TileAboveTheFoldContent;
}(_react.Component);

exports.TileAboveTheFoldContent = TileAboveTheFoldContent;

_defineProperty(TileAboveTheFoldContent, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string
});

var TileBelowTheFoldContent =
/*#__PURE__*/
function (_Component6) {
  function TileBelowTheFoldContent() {
    _classCallCheck(this, TileBelowTheFoldContent);

    return _possibleConstructorReturn(this, _getPrototypeOf(TileBelowTheFoldContent).apply(this, arguments));
  }

  _createClass(TileBelowTheFoldContent, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react.default.createElement("span", {
        className: "bx--tile-content__below-the-fold"
      }, children);
    }
  }]);

  _inherits(TileBelowTheFoldContent, _Component6);

  return TileBelowTheFoldContent;
}(_react.Component);

exports.TileBelowTheFoldContent = TileBelowTheFoldContent;

_defineProperty(TileBelowTheFoldContent, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string
});