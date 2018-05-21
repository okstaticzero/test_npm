function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

import window from 'window-or-global';
import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

var newChild = function newChild(children, tabIndex) {
  var child = React.Children.only(children);
  return React.cloneElement(React.Children.only(child), {
    tabIndex: tabIndex,
    className: 'left-nav-list__item-link'
  });
};

var InteriorLeftNavItem = function InteriorLeftNavItem(_ref) {
  var className = _ref.className,
      tabIndex = _ref.tabIndex,
      children = _ref.children,
      _onClick = _ref.onClick,
      activeHref = _ref.activeHref,
      other = _objectWithoutProperties(_ref, ["className", "tabIndex", "children", "onClick", "activeHref"]);

  var childHref = children.props.href === undefined ? children.props.to : children.props.href;
  var activePath = window.location && window.location.hash ? window.location.hash : activeHref;
  var classNames = classnames('left-nav-list__item', className, {
    'left-nav-list__item--active': activePath === childHref
  });
  return React.createElement("li", _extends({
    tabIndex: children ? -1 : tabIndex,
    role: "menuitem",
    className: classNames,
    onClick: function onClick(evt) {
      return _onClick(evt, childHref);
    },
    onKeyPress: function onKeyPress(evt) {
      return _onClick(evt, childHref);
    }
  }, other), newChild(children, tabIndex));
};

InteriorLeftNavItem.propTypes = {
  className: PropTypes.string,
  tabIndex: PropTypes.number,
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func,
  children: PropTypes.node
};
InteriorLeftNavItem.defaultProps = {
  tabIndex: 0,
  label: 'InteriorLeftNavItem Label',
  onClick:
  /* istanbul ignore next */
  function onClick() {}
};
export default InteriorLeftNavItem;