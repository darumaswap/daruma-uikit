'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var get = require('lodash/get');
var noop = require('lodash/noop');
var debounce = require('lodash/debounce');
var reactPopper = require('react-popper');
var throttle = require('lodash/throttle');
var reactRouterDom = require('react-router-dom');
var reactTransitionGroup = require('react-transition-group');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var noop__default = /*#__PURE__*/_interopDefaultLegacy(noop);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);
var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get__default['default'](theme, path, fallback);
}; };

var rotate$1 = styled.keyframes(templateObject_1$V || (templateObject_1$V = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = styled.css(templateObject_2$n || (templateObject_2$n = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate$1);
var Svg = styled__default['default'].svg(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n  align-self: center; // Safari fix\n  fill: ", ";\n  flex-shrink: 0;\n  ", "\n  ", "\n"], ["\n  align-self: center; // Safari fix\n  fill: ", ";\n  flex-shrink: 0;\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, styledSystem.space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$V, templateObject_2$n, templateObject_3$b;

var Icon$1x = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1w = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$1v = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$1u = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled__default['default'].div(templateObject_1$U || (templateObject_1$U = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, styledSystem.space, styledSystem.typography);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$U;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var scales$6 = {
    MD: "md",
    SM: "sm",
    XS: "xs",
};
var variants$3 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var _a$4, _b$1;
var scaleVariants$1 = (_a$4 = {},
    _a$4[scales$6.MD] = {
        height: "48px",
        padding: "0 24px",
    },
    _a$4[scales$6.SM] = {
        height: "32px",
        padding: "0 16px",
    },
    _a$4[scales$6.XS] = {
        height: "20px",
        fontSize: "12px",
        padding: "0 8px",
    },
    _a$4);
var styleVariants$2 = (_b$1 = {},
    _b$1[variants$3.PRIMARY] = {
        backgroundColor: "primary",
        color: "white",
    },
    _b$1[variants$3.SECONDARY] = {
        backgroundColor: "transparent",
        border: "2px solid",
        borderColor: "primary",
        boxShadow: "none",
        color: "primary",
        ":disabled": {
            backgroundColor: "transparent",
        },
    },
    _b$1[variants$3.TERTIARY] = {
        backgroundColor: "tertiary",
        boxShadow: "none",
        color: "primary",
    },
    _b$1[variants$3.SUBTLE] = {
        backgroundColor: "textSubtle",
        color: "white",
    },
    _b$1[variants$3.DANGER] = {
        backgroundColor: "failure",
        color: "white",
    },
    _b$1[variants$3.SUCCESS] = {
        backgroundColor: "success",
        color: "white",
    },
    _b$1[variants$3.TEXT] = {
        backgroundColor: "transparent",
        color: "primary",
        boxShadow: "none",
    },
    _b$1);

var getDisabledStyles = function (_a) {
    var $isLoading = _a.$isLoading, theme = _a.theme;
    if ($isLoading === true) {
        return "\n      &:disabled,\n      &.pancake-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.pancake-button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */
var getOpacity = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var StyledButton = styled__default['default'].button(templateObject_1$T || (templateObject_1$T = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n    box-shadow: none;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n    box-shadow: none;\n  }\n\n  ", "\n  ",
    "\n  ",
    "\n  ", "\n  ", "\n"])), getOpacity, getDisabledStyles, styledSystem.variant({
    prop: "scale",
    variants: scaleVariants$1,
}), styledSystem.variant({
    variants: styleVariants$2,
}), styledSystem.layout, styledSystem.space);
var templateObject_1$T;

var Button = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon, external = props.external, className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("pancake-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("pancake-button--disabled");
    }
    return (React__default['default'].createElement(StyledButton, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, internalProps, rest),
        React__default['default'].createElement(React__default['default'].Fragment, null,
            React.isValidElement(startIcon) &&
                React.cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            children,
            React.isValidElement(endIcon) &&
                React.cloneElement(endIcon, {
                    ml: "0.5rem",
                }))));
};
Button.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants$3.PRIMARY,
    scale: scales$6.MD,
    disabled: false,
};

var IconButton = styled__default['default'](Button)(templateObject_1$S || (templateObject_1$S = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$S;

var Icon$1t = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$1s = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$1r = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$1q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$1p = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$1o = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" })));
};

var Icon$1n = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" })));
};

var Icon$1m = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$1l = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default['default'].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$1k = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React__default['default'].createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React__default['default'].createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React__default['default'].createElement("g", { mask: "url(#mask0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React__default['default'].createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$1j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.0967 17.8521L7.87565 20.2891C6.91907 20.8414 5.69589 20.5136 5.1436 19.557L0.999729 12.3796C0.447444 11.4231 0.775193 10.1999 1.73178 9.64759L6.31754 7C6.53486 6.87453 6.76593 6.79448 6.99977 6.75691V6C6.99977 4.89543 7.8952 4 8.99977 4H14.9998C16.1043 4 16.9998 4.89543 16.9998 6V6.73545C17.299 6.75379 17.5986 6.83993 17.8759 7L22.4616 9.64759C23.4182 10.1999 23.746 11.4231 23.1937 12.3796L19.0498 19.557C18.4975 20.5136 17.2743 20.8414 16.3178 20.2891L12.0967 17.8521ZM8.99977 6L14.9998 6L14.9998 7.98154L11.2363 14.5H8.99977L8.99977 6ZM6.99977 14.5L6.99977 8.91551L2.73178 11.3796L6.87565 18.557L10.4386 16.5H8.99977C7.8952 16.5 6.99977 15.6046 6.99977 14.5ZM16.8759 8.73205L21.4616 11.3796L17.3178 18.557L12.732 15.9094L16.8759 8.73205Z" })));
};

var Icon$1i = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$1h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" }),
        React__default['default'].createElement("path", { d: "M11.25 7.72H6.25V9.22H11.25V7.72Z" }),
        React__default['default'].createElement("path", { d: "M18 15.75H13V17.25H18V15.75Z" }),
        React__default['default'].createElement("path", { d: "M18 13.25H13V14.75H18V13.25Z" }),
        React__default['default'].createElement("path", { d: "M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z" }),
        React__default['default'].createElement("path", { d: "M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z" })));
};

var Icon$1g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$1f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$1e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.00012 16.2L5.50012 12.7C5.11012 12.31 4.49012 12.31 4.10012 12.7C3.71012 13.09 3.71012 13.71 4.10012 14.1L8.29012 18.29C8.68012 18.68 9.31012 18.68 9.70012 18.29L20.3001 7.70001C20.6901 7.31001 20.6901 6.69001 20.3001 6.30001C19.9101 5.91001 19.2901 5.91001 18.9001 6.30001L9.00012 16.2Z" })));
};

var Icon$1d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$1c = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$1b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$1a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$19 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$18 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$17 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$16 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$15 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { d: "M15.6772 2.8668C15.9878 1.97095 15.2658 1.05469 14.2495 1.05469C13.4213 1.05469 12.75 1.67612 12.75 2.4427L12.75 5.07933C12.75 5.61801 13.2217 6.05469 13.8037 6.05469C14.2615 6.05469 14.667 5.78094 14.8069 5.37734L15.6772 2.8668Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { d: "M9.32279 2.8668C9.01225 1.97095 9.73416 1.05469 10.7505 1.05469C11.5787 1.05469 12.25 1.67612 12.25 2.4427L12.25 5.07934C12.25 5.61801 11.7783 6.05469 11.1963 6.05469C10.7385 6.05469 10.333 5.78094 10.1931 5.37734L9.32279 2.8668Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { d: "M10.825 1.26941C11.1413 1.50339 10.6373 1.71436 10.293 2.17982C9.94869 2.64527 9.89449 3.18896 9.57817 2.95498C9.26185 2.72101 9.32403 2.18322 9.66832 1.71776C10.0126 1.2523 10.5086 1.03544 10.825 1.26941Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M14.6507 1.39423C14.8957 1.70211 14.3543 1.77544 13.9012 2.13593C13.4482 2.49642 13.2551 3.00755 13.0102 2.69968C12.7652 2.3918 12.9644 1.88843 13.4174 1.52794C13.8705 1.16746 14.4057 1.08636 14.6507 1.39423Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M10.3026 1.54788C10.4525 1.65871 10.1853 1.79706 9.98717 2.06492C9.78903 2.33278 9.73495 2.62873 9.58511 2.51789C9.43528 2.40706 9.49314 2.11391 9.69127 1.84605C9.88941 1.57819 10.1528 1.43705 10.3026 1.54788Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M14.0738 1.5278C14.1899 1.67363 13.896 1.73812 13.6353 1.94557C13.3746 2.15302 13.2458 2.42489 13.1297 2.27905C13.0137 2.13322 13.1454 1.86503 13.4061 1.65758C13.6668 1.45012 13.9578 1.38196 14.0738 1.5278Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M13.406 5.80534C13.1769 5.64322 13.6402 5.49916 14.0299 5.10944C14.4196 4.71971 14.4298 4.07338 14.6827 4.32626C14.9356 4.57915 14.7916 5.0668 14.4019 5.45652C14.0122 5.84624 13.6351 5.96747 13.406 5.80534Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M10.6248 5.80534C10.3957 5.64322 10.8589 5.49916 11.2486 5.10944C11.6383 4.71971 11.6486 4.07338 11.9015 4.32626C12.1543 4.57915 12.0103 5.0668 11.6206 5.45652C11.2309 5.84624 10.8538 5.96747 10.6248 5.80534Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M13.9914 10.3006C12.9839 8.40915 12.4375 6.30469 12.4375 6.30469C12.4375 6.30469 11.9087 8.34165 10.9321 10.2086C10.6414 11.6927 9.56271 12.9024 8.10162 13.3682C6.2379 13.9624 4.40451 13.1384 3.73966 11.239C3.00517 10.5247 2.41808 9.75079 2.125 9.15553V10.3668C2.125 14.1503 3.02673 17.8564 4.72554 21.0547H20.1495C21.8483 17.8564 22.75 14.1503 22.75 10.3668V9.15553C22.4628 9.73876 21.8934 10.4935 21.1797 11.1956C20.5277 13.1259 18.6807 13.967 16.8028 13.3682C15.372 12.912 14.3079 11.7426 13.9914 10.3006Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.7881 7.51367C13.0461 8.29103 13.4582 9.39262 14.0101 10.4296C14.2401 11.4788 14.8691 12.3823 15.7478 12.9675L14.8711 21.0453L12.4716 21.026L6.31499 21.0756C5.03757 17.5852 4.57523 15.3977 4.04834 11.8082C4.82141 13.3685 6.48748 14.0096 8.17878 13.4698C9.62537 13.0081 10.6933 11.8093 10.9812 10.3385C11.509 9.3285 11.9046 8.26831 12.1552 7.51367H12.7881Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.335 21.0354L10.6112 11.4121C10.1532 12.3105 9.37201 13.0219 8.40008 13.3927C8.66771 15.748 9.05381 17.902 9.86757 21.0472L11.335 21.0354ZM8.91436 21.0549C8.26697 18.1715 7.86567 16.0604 7.58788 13.6114C6.85387 13.7286 6.14425 13.6244 5.53223 13.3211C5.85194 15.8033 6.40755 18.9391 7.32573 21.0677L8.91436 21.0549Z", fill: "#FFE971" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.1731 9.68799C11.1115 9.81472 11.0477 9.94136 10.982 10.0672C10.6941 11.538 9.62616 12.7368 8.17957 13.1985C6.33435 13.7874 4.51917 12.9708 3.86091 11.0883C3.82538 11.0537 3.79019 11.019 3.75537 10.9842C3.76298 11.1884 3.78916 11.3929 3.8348 11.5958C4.24757 13.4306 6.09537 14.4351 8.21827 13.7576C10.1825 13.1307 11.3382 11.3971 11.1731 9.68799Z", fill: "#FFE971" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8289 9.68799C13.8905 9.81475 13.9542 9.94142 14.02 10.0673C14.3079 11.5381 15.3758 12.7369 16.8224 13.1986C18.6677 13.7875 20.4828 12.9709 21.1411 11.0884C21.1766 11.0538 21.2118 11.0191 21.2466 10.9843C21.239 11.1885 21.2128 11.393 21.1672 11.5959C20.7544 13.4308 18.9066 14.4353 16.7837 13.7578C14.8194 13.1309 13.6636 11.3971 13.8289 9.68799Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M16.25 7.99219C16.25 9.80885 14.5431 11.0547 12.4375 11.0547C10.3319 11.0547 8.625 9.80885 8.625 7.99219C8.625 6.17553 10.3319 4.92969 12.4375 4.92969C14.5431 4.92969 16.25 6.17553 16.25 7.99219Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { d: "M14.5349 6.09354C14.807 7.1091 13.4021 6.71163 11.9077 7.11205C10.4134 7.51246 9.39541 8.55914 9.12329 7.54357C8.85117 6.52801 9.87598 5.50694 11.3704 5.10652C12.8647 4.70611 14.2628 5.07797 14.5349 6.09354Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M11.0893 10.2853C10.7875 9.70556 11.9478 9.89409 13.237 9.49295C14.5262 9.09181 15.3014 7.75528 15.5484 8.54928C15.7955 9.34329 14.9187 10.2079 13.6295 10.609C12.3403 11.0102 11.3911 10.865 11.0893 10.2853Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M12.979 5.80657C13.1079 6.28763 12.3191 6.1324 11.4591 6.36283C10.5992 6.59326 9.99366 7.1221 9.86476 6.64104C9.73586 6.15998 10.3446 5.64328 11.2046 5.41284C12.0646 5.18241 12.8501 5.32552 12.979 5.80657Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M11.7222 8.09327C11.7222 8.76484 11.4227 9.01955 11.0533 9.01955C10.6838 9.01955 10.3843 8.76484 10.3843 8.09327C10.3843 7.4217 10.6838 7.16699 11.0533 7.16699C11.4227 7.16699 11.7222 7.4217 11.7222 8.09327Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M11.7222 7.94581C11.7222 8.61738 11.4227 8.87209 11.0533 8.87209C10.6838 8.87209 10.3843 8.61738 10.3843 7.94581C10.3843 7.27424 10.6838 7.01953 11.0533 7.01953C11.4227 7.01953 11.7222 7.27424 11.7222 7.94581Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M11.4119 7.41061C11.4587 7.67736 11.217 7.57296 10.9599 7.67813C10.7028 7.78331 10.5276 8.05822 10.4808 7.79148C10.434 7.52473 10.6103 7.25654 10.8674 7.15136C11.1245 7.04619 11.3651 7.14386 11.4119 7.41061Z", fill: "#FA7048" }),
        React__default['default'].createElement("path", { d: "M10.796 8.61486C10.7456 8.421 10.9921 8.50242 11.2088 8.3668C11.4256 8.23119 11.5783 7.83458 11.6194 8.10027C11.6605 8.36596 11.4909 8.60461 11.2742 8.74023C11.0575 8.87584 10.8465 8.80873 10.796 8.61486Z", fill: "#9F0400" }),
        React__default['default'].createElement("path", { d: "M14.1924 8.09327C14.1924 8.76484 13.8929 9.01955 13.5235 9.01955C13.154 9.01955 12.8545 8.76484 12.8545 8.09327C12.8545 7.4217 13.154 7.16699 13.5235 7.16699C13.8929 7.16699 14.1924 7.4217 14.1924 8.09327Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M14.1924 7.94581C14.1924 8.61738 13.8929 8.87209 13.5235 8.87209C13.154 8.87209 12.8545 8.61738 12.8545 7.94581C12.8545 7.27424 13.154 7.01953 13.5235 7.01953C13.8929 7.01953 14.1924 7.27424 14.1924 7.94581Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M13.8821 7.41061C13.9289 7.67736 13.6872 7.57296 13.4301 7.67813C13.173 7.78331 12.9978 8.05822 12.951 7.79148C12.9042 7.52473 13.0805 7.25654 13.3376 7.15136C13.5947 7.04619 13.8353 7.14386 13.8821 7.41061Z", fill: "#FA7048" }),
        React__default['default'].createElement("path", { d: "M13.2663 8.61486C13.2158 8.421 13.4623 8.50242 13.6791 8.3668C13.8958 8.23119 14.0485 7.83458 14.0896 8.10027C14.1307 8.36596 13.9612 8.60461 13.7444 8.74023C13.5277 8.87584 13.3167 8.80873 13.2663 8.61486Z", fill: "#9F0400" }),
        React__default['default'].createElement("path", { d: "M24.3751 9.78352C24.3751 10.8765 23.4126 11.6261 22.2254 11.6261C21.0381 11.6261 20.0757 10.8765 20.0757 9.78352C20.0757 8.6905 21.0381 7.94092 22.2254 7.94092C23.4126 7.94092 24.3751 8.6905 24.3751 9.78352Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { d: "M23.4327 8.66844C23.5873 9.24565 22.7888 9.01974 21.9395 9.24732C21.0902 9.47491 20.5116 10.0698 20.3569 9.49259C20.2023 8.91538 20.7847 8.33504 21.6341 8.10746C22.4834 7.87987 23.278 8.09123 23.4327 8.66844Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M21.468 11.1604C21.2965 10.8309 21.956 10.938 22.6887 10.7101C23.4214 10.4821 23.862 9.72242 24.0024 10.1737C24.1429 10.625 23.6445 11.1164 22.9118 11.3444C22.179 11.5724 21.6396 11.4899 21.468 11.1604Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M22.5483 8.5052C22.6216 8.77861 22.1733 8.69038 21.6845 8.82135C21.1957 8.95232 20.8516 9.2529 20.7783 8.97948C20.705 8.70606 21.051 8.41238 21.5398 8.28141C22.0286 8.15044 22.4751 8.23178 22.5483 8.5052Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M4.92439 9.78352C4.92439 10.8765 3.96194 11.6261 2.7747 11.6261C1.58745 11.6261 0.625 10.8765 0.625 9.78352C0.625 8.6905 1.58745 7.94092 2.7747 7.94092C3.96194 7.94092 4.92439 8.6905 4.92439 9.78352Z", fill: "#FFC700" }),
        React__default['default'].createElement("path", { d: "M3.982 8.66844C4.13667 9.24565 3.33817 9.01974 2.48882 9.24732C1.63947 9.47491 1.0609 10.0698 0.906238 9.49259C0.751574 8.91538 1.33404 8.33504 2.18339 8.10746C3.03274 7.87987 3.82734 8.09123 3.982 8.66844Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M2.01735 11.1604C1.8458 10.8309 2.5053 10.938 3.23802 10.7101C3.97074 10.4821 4.41134 9.72242 4.55176 10.1737C4.69218 10.625 4.19381 11.1164 3.46109 11.3444C2.72837 11.5724 2.1889 11.4899 2.01735 11.1604Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M3.09716 8.5052C3.17042 8.77861 2.72209 8.69038 2.23331 8.82135C1.74453 8.95232 1.40038 9.2529 1.32712 8.97948C1.25386 8.70606 1.59985 8.41238 2.08863 8.28141C2.57742 8.15044 3.0239 8.23178 3.09716 8.5052Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M21 21.4833C21 22.5878 20.7489 23.0547 12.4375 23.0547C4.12611 23.0547 3.875 22.5878 3.875 21.4833C3.875 20.3787 4.12611 20.3047 12.4375 20.3047C20.7489 20.3047 21 20.3787 21 21.4833Z", fill: "#D8D8D8" }),
        React__default['default'].createElement("path", { d: "M14.6123 21.583C14.5965 22.6393 13.9077 22.7662 9.15269 22.6767C5.64021 22.6106 4.71703 22.5202 4.72814 21.7777C4.73925 21.0352 5.09021 20.7512 9.18036 20.8281C13.9354 20.9176 14.6234 20.8405 14.6123 21.583Z", fill: "#EFF3F5" }),
        React__default['default'].createElement("path", { d: "M5.36878 22.06C5.19105 21.8607 5.32313 21.5819 5.55794 21.3186C5.79275 21.0553 6.04136 20.9072 6.21909 21.1065C6.39682 21.3058 6.26473 21.5845 6.02992 21.8478C5.79512 22.1111 5.54651 22.2593 5.36878 22.06Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M5.33188 22.0183C5.18225 21.8505 5.32355 21.5821 5.55836 21.3188C5.79317 21.0555 6.03256 20.897 6.18219 21.0648C6.33181 21.2326 6.19051 21.501 5.9557 21.7644C5.7209 22.0277 5.4815 22.1861 5.33188 22.0183Z", fill: "#373333" }),
        React__default['default'].createElement("path", { d: "M19.1715 22.06C18.9938 21.8607 19.1259 21.5819 19.3607 21.3186C19.5955 21.0553 19.8441 20.9072 20.0218 21.1065C20.1995 21.3058 20.0675 21.5845 19.8327 21.8478C19.5978 22.1111 19.3492 22.2593 19.1715 22.06Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M19.1374 22.0217C18.9855 21.8514 19.1261 21.5821 19.3609 21.3188C19.5957 21.0555 19.8358 20.8979 19.9877 21.0682C20.1397 21.2386 19.9991 21.5079 19.7643 21.7712C19.5295 22.0345 19.2893 22.1921 19.1374 22.0217Z", fill: "#373333" }),
        React__default['default'].createElement("path", { d: "M8.71657 22.2374C8.50579 22.001 8.66243 21.6704 8.94091 21.3581C9.21938 21.0459 9.51422 20.8702 9.725 21.1066C9.93579 21.3429 9.77914 21.6736 9.50066 21.9858C9.22219 22.2981 8.92735 22.4738 8.71657 22.2374Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M8.65967 22.1742C8.49136 21.9854 8.66193 21.6704 8.9404 21.3581C9.21887 21.0459 9.4998 20.8546 9.66811 21.0433C9.83643 21.2321 9.66585 21.5471 9.38738 21.8594C9.10891 22.1716 8.82799 22.3629 8.65967 22.1742Z", fill: "#373333" }),
        React__default['default'].createElement("path", { d: "M15.8196 22.2374C15.6088 22.001 15.7655 21.6704 16.0439 21.3581C16.3224 21.0459 16.6172 20.8702 16.828 21.1066C17.0388 21.3429 16.8822 21.6736 16.6037 21.9858C16.3252 22.2981 16.0304 22.4738 15.8196 22.2374Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M15.7716 22.1835C15.597 21.9878 15.7656 21.6705 16.0441 21.3582C16.3225 21.0459 16.6055 20.857 16.78 21.0527C16.9545 21.2483 16.786 21.5656 16.5075 21.8779C16.229 22.1902 15.9461 22.3792 15.7716 22.1835Z", fill: "#373333" }),
        React__default['default'].createElement("path", { d: "M12.1406 22.3976C11.8957 22.1229 12.0777 21.7387 12.4013 21.3759C12.7249 21.013 13.0675 20.8089 13.3125 21.0835C13.5574 21.3582 13.3754 21.7424 13.0518 22.1053C12.7282 22.4681 12.3856 22.6723 12.1406 22.3976Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M12.0921 22.3438C11.8835 22.1098 12.0775 21.7389 12.401 21.3761C12.7246 21.0132 13.0554 20.7957 13.264 21.0297C13.4726 21.2636 13.2787 21.6345 12.9551 21.9974C12.6315 22.3602 12.3008 22.5777 12.0921 22.3438Z", fill: "#373333" }),
        React__default['default'].createElement("path", { d: "M12.0489 13.7369C12.2981 13.494 12.7019 13.494 12.9511 13.7369L14.8132 15.5524C15.0623 15.7953 15.0623 16.1891 14.8132 16.432L12.9511 18.2475C12.7019 18.4904 12.2981 18.4904 12.0489 18.2475L10.1868 16.432C9.93772 16.1891 9.93772 15.7953 10.1868 15.5524L12.0489 13.7369Z", fill: "#FFE971" }),
        React__default['default'].createElement("path", { d: "M12.4726 13.2256V15.5732H10.125C10.125 15.4162 10.1849 15.2593 10.3046 15.1396L12.039 13.4052C12.1587 13.2855 12.3157 13.2256 12.4726 13.2256Z", fill: "#FA7048" }),
        React__default['default'].createElement("path", { d: "M12.4726 17.9209V15.5733H10.125C10.125 15.7302 10.1849 15.8872 10.3046 16.0069L12.039 17.7413C12.1587 17.861 12.3157 17.9209 12.4726 17.9209Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M12.4727 13.2256V15.5732H14.8203C14.8203 15.4162 14.7604 15.2593 14.6407 15.1396L12.9063 13.4052C12.7866 13.2855 12.6296 13.2256 12.4727 13.2256Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M12.4727 17.9209V15.5733H14.8203C14.8203 15.7302 14.7604 15.8872 14.6407 16.0069L12.9063 17.7413C12.7866 17.861 12.6296 17.9209 12.4727 17.9209Z", fill: "#9F0400" }),
        React__default['default'].createElement("path", { d: "M18.6595 15.807C18.7972 15.6548 19.0203 15.6548 19.158 15.807L20.1869 16.9442C20.3246 17.0964 20.3246 17.343 20.1869 17.4952L19.158 18.6324C19.0203 18.7846 18.7972 18.7846 18.6595 18.6324L17.6306 17.4952C17.4929 17.343 17.4929 17.0964 17.6306 16.9442L18.6595 15.807Z", fill: "#FFE971" }),
        React__default['default'].createElement("path", { d: "M18.9132 15.5596V16.9244H17.5483C17.5483 16.8332 17.5831 16.742 17.6528 16.6724L18.6611 15.664C18.7307 15.5944 18.822 15.5596 18.9132 15.5596Z", fill: "#FA7048" }),
        React__default['default'].createElement("path", { d: "M18.9132 18.2896V16.9247H17.5483C17.5483 17.0159 17.5831 17.1072 17.6528 17.1768L18.6611 18.1851C18.7307 18.2547 18.822 18.2896 18.9132 18.2896Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M18.9134 15.5596V16.9245H20.2783C20.2783 16.8332 20.2435 16.742 20.1739 16.6724L19.1655 15.664C19.0959 15.5944 19.0047 15.5596 18.9134 15.5596Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M18.9134 18.2896V16.9247H20.2783C20.2783 17.0159 20.2435 17.1072 20.1739 17.1768L19.1655 18.1851C19.0959 18.2547 19.0047 18.2896 18.9134 18.2896Z", fill: "#9F0400" }),
        React__default['default'].createElement("path", { d: "M5.64194 15.807C5.77959 15.6548 6.00277 15.6548 6.14042 15.807L7.16936 16.9442C7.30701 17.0964 7.30701 17.343 7.16936 17.4952L6.14042 18.6324C6.00277 18.7846 5.77959 18.7846 5.64194 18.6324L4.613 17.4952C4.47535 17.343 4.47535 17.0964 4.613 16.9442L5.64194 15.807Z", fill: "#FFE971" }),
        React__default['default'].createElement("path", { d: "M5.90931 15.5596V16.9245H4.54443C4.54443 16.8332 4.57924 16.742 4.64885 16.6724L5.65722 15.664C5.72683 15.5944 5.81807 15.5596 5.90931 15.5596Z", fill: "#FA7048" }),
        React__default['default'].createElement("path", { d: "M5.90931 18.2896V16.9247H4.54443C4.54443 17.0159 4.57924 17.1072 4.64885 17.1768L5.65722 18.1851C5.72683 18.2547 5.81807 18.2896 5.90931 18.2896Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M5.90905 15.5596V16.9245H7.27393C7.27393 16.8332 7.23912 16.742 7.16951 16.6724L6.16114 15.664C6.09153 15.5944 6.00029 15.5596 5.90905 15.5596Z", fill: "#CC240E" }),
        React__default['default'].createElement("path", { d: "M5.90905 18.2896V16.9247H7.27393C7.27393 17.0159 7.23912 17.1072 7.16951 17.1768L6.16114 18.1851C6.09153 18.2547 6.00029 18.2896 5.90905 18.2896Z", fill: "#9F0400" })));
};

var Icon$14 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" })));
};

var Icon$13 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z" })));
};

var Icon$12 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M4.68179 7.04592C5.06573 7.78505 5.47899 8.47752 5.91436 9.12605C4.76866 8.20293 3.15483 7.94918 1.72791 8.60664L0.865295 9.00408L0.949991 9.1879C1.87444 11.1943 4.25037 12.0714 6.25678 11.147L7.1194 10.7495C7.7588 11.5306 8.42708 12.2337 9.10661 12.8671C7.54917 12.0868 5.60297 12.3946 4.36752 13.7424L4.07604 14.0604L5.17158 15.0646C6.8001 16.5573 9.33037 16.4472 10.8231 14.8187L11.0984 14.5183C11.8534 15.0744 12.6001 15.5528 13.3138 15.9628C13.5418 16.0939 13.7667 16.218 13.9874 16.3354C12.2933 15.9571 10.485 16.7202 9.6092 18.3189L9.47337 18.5669L10.514 19.137C12.4515 20.1983 14.8825 19.4881 15.9439 17.5507L16.0715 17.3177C16.4836 17.4877 16.862 17.6297 17.1977 17.747C17.6961 17.9213 18.1016 18.0417 18.3855 18.1191L18.8453 18.2339C19.2507 18.3192 19.6484 18.0598 19.7338 17.6545C19.819 17.2494 19.56 16.8519 19.1551 16.7662L19.1524 16.7657C19.1551 16.7662 19.0729 16.7518 18.7802 16.6719C18.527 16.6029 18.1551 16.4928 17.6927 16.3311C17.1224 16.1317 16.416 15.8546 15.6253 15.4802L15.9997 14.8317C17.1043 12.9186 16.4488 10.4722 14.5356 9.36762L13.8989 9.00001L13.4324 9.80801C12.4895 11.4411 12.8291 13.4627 14.1387 14.7066C14.1128 14.6919 14.0869 14.6771 14.0609 14.6622C12.797 13.9361 11.4285 12.9847 10.1078 11.7498L10.5391 11.324C12.1111 9.77192 12.1274 7.23931 10.5753 5.66723L9.93826 5.02195L9.41242 5.5411C8.11055 6.82638 7.87565 8.78411 8.71479 10.3119C7.73795 9.1976 6.82187 7.90232 6.03634 6.39938C7.08943 4.4961 6.42732 2.09216 4.53566 1.00001L3.4039 0.346588L2.82248 1.35364C1.71791 3.26682 2.37341 5.71318 4.28658 6.81775L4.68179 7.04592Z" })));
};

var Icon$11 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M15.3182 7.04592C14.9343 7.78505 14.521 8.47752 14.0856 9.12605C15.2313 8.20293 16.8452 7.94918 18.2721 8.60664L19.1347 9.00408L19.05 9.1879C18.1256 11.1943 15.7496 12.0714 13.7432 11.147L12.8806 10.7495C12.2412 11.5306 11.5729 12.2337 10.8934 12.8671C12.4508 12.0868 14.397 12.3946 15.6325 13.7424L15.924 14.0604L14.8284 15.0646C13.1999 16.5573 10.6696 16.4472 9.17692 14.8187L8.90162 14.5183C8.1466 15.0744 7.39992 15.5528 6.68625 15.9628C6.45816 16.0939 6.23335 16.218 6.01259 16.3354C7.70668 15.9571 9.51501 16.7202 10.3908 18.3189L10.5266 18.5669L9.486 19.137C7.54854 20.1983 5.11749 19.4881 4.05611 17.5507L3.92849 17.3177C3.51637 17.4877 3.13804 17.6297 2.80235 17.747C2.30389 17.9213 1.89839 18.0417 1.61448 18.1191L1.15466 18.2339C0.749332 18.3192 0.351572 18.0598 0.26624 17.6545C0.180958 17.2494 0.440012 16.8519 0.844932 16.7662L0.847556 16.7657C0.844932 16.7662 0.927067 16.7518 1.21981 16.6719C1.47301 16.6029 1.84485 16.4928 2.30733 16.3311C2.87756 16.1317 3.58397 15.8546 4.3747 15.4802L4.0003 14.8317C2.89573 12.9186 3.55123 10.4722 5.4644 9.36762L6.10112 9.00001L6.56763 9.80801C7.51049 11.4411 7.1709 13.4627 5.86133 14.7066C5.88719 14.6919 5.9131 14.6771 5.93906 14.6622C7.20296 13.9361 8.57146 12.9847 9.89223 11.7498L9.46094 11.324C7.88886 9.77192 7.87263 7.23931 9.42468 5.66723L10.0617 5.02195L10.5876 5.5411C11.8895 6.82638 12.1243 8.78411 11.2852 10.3119C12.2621 9.1976 13.1781 7.90232 13.9637 6.39938C12.9106 4.4961 13.5727 2.09216 15.4643 1.00001L16.5961 0.346588L17.1775 1.35364C18.2821 3.26682 17.6266 5.71318 15.7134 6.81775L15.3182 7.04592Z" })));
};

var Icon$10 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$$ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("image", { width: "32", height: "32", href: "/images/logo-nav-mobile.png" })));
};

var Icon$_ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear_logoround)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear_logoround", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$Z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#F6AF5B" }),
        React__default['default'].createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#F6AF5B" }),
        React__default['default'].createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#AE5714" }),
        React__default['default'].createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#AE5714" }),
        React__default['default'].createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#E17A2F" }),
        React__default['default'].createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#F6AF5B" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#F7D29B" }),
        React__default['default'].createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#E7974D" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#E17A2F" }),
        React__default['default'].createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#AE5714" }),
        React__default['default'].createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#AE5714" })));
};

var Icon$Y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#FFAF00" }),
        React__default['default'].createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#EB8C00" }),
        React__default['default'].createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#FFD800" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#FEED8D" }),
        React__default['default'].createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#FFC700" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#EB8C00" }),
        React__default['default'].createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#EB8C00" })));
};

var Icon$X = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#9A6AFF" }),
        React__default['default'].createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#9A6AFF" }),
        React__default['default'].createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#A880FD" }),
        React__default['default'].createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#A880FD" }),
        React__default['default'].createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#7645D9" }),
        React__default['default'].createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#9A6AFF" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#CAB3F8" }),
        React__default['default'].createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#8F5BFD" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#7645D9" }),
        React__default['default'].createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#452A7A" }),
        React__default['default'].createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#452A7A" })));
};

var Icon$W = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#C0C4C6" }),
        React__default['default'].createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#C0C4C6" }),
        React__default['default'].createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#969696" }),
        React__default['default'].createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#C0C4C6" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#D8D8D8" }),
        React__default['default'].createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#B2B2B2" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#969696" }),
        React__default['default'].createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#7D7D7D" }),
        React__default['default'].createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#7D7D7D" })));
};

var Icon$V = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#0098A1" }),
        React__default['default'].createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0022L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#84F0F9" }),
        React__default['default'].createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#0098A1" }),
        React__default['default'].createElement("path", { d: "M9.95096 14.0798C9.03126 14.1218 8.69439 13.361 8.65076 12.4055C8.60713 11.4501 8.87326 10.6617 9.79296 10.6197C10.7127 10.5777 11.0495 11.3385 11.0932 12.294C11.1368 13.2495 10.8707 14.0378 9.95096 14.0798Z", fill: "#017178" }),
        React__default['default'].createElement("path", { d: "M15.1199 14.0803C14.2002 14.1223 13.8633 13.3615 13.8197 12.406C13.7761 11.4505 14.0422 10.6622 14.9619 10.6202C15.8816 10.5782 16.2185 11.339 16.2621 12.2945C16.3057 13.25 16.0396 14.0383 15.1199 14.0803Z", fill: "#017178" })));
};

var Icon$U = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 35 33" }, props),
        React__default['default'].createElement("path", { d: "m32.9582 1-13.1341 9.7183 2.4424-5.72731z", fill: "#e17726", stroke: "#e17726" }),
        React__default['default'].createElement("g", { fill: "#e27625", stroke: "#e27625" },
            React__default['default'].createElement("path", { d: "m2.66296 1 13.01714 9.809-2.3254-5.81802z" }),
            React__default['default'].createElement("path", { d: "m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z" }),
            React__default['default'].createElement("path", { d: "m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z" }),
            React__default['default'].createElement("path", { d: "m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z" }),
            React__default['default'].createElement("path", { d: "m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z" }),
            React__default['default'].createElement("path", { d: "m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z" }),
            React__default['default'].createElement("path", { d: "m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z" })),
        React__default['default'].createElement("path", { d: "m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React__default['default'].createElement("path", { d: "m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React__default['default'].createElement("path", { d: "m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z", fill: "#233447", stroke: "#233447" }),
        React__default['default'].createElement("path", { d: "m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z", fill: "#233447", stroke: "#233447" }),
        React__default['default'].createElement("path", { d: "m10.8733 28.8721.6495-5.3386-4.13117.1167z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m24.0982 23.5335.6366 5.3386 3.4946-5.2219z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m8.392 17.6507 3.1049 6.0513-.1039-3.0062z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z", fill: "#c0ac9d", stroke: "#c0ac9d" }),
        React__default['default'].createElement("path", { d: "m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z", fill: "#161616", stroke: "#161616" }),
        React__default['default'].createElement("path", { d: "m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z", fill: "#763e1a", stroke: "#763e1a" }),
        React__default['default'].createElement("path", { d: "m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z", fill: "#763e1a", stroke: "#763e1a" }),
        React__default['default'].createElement("path", { d: "m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z", fill: "#f5841f", stroke: "#f5841f" })));
};

var Icon$T = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$S = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React__default['default'].createElement("g", { mask: "url(#A)" },
            React__default['default'].createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React__default['default'].createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React__default['default'].createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var Icon$R = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$Q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React__default['default'].createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React__default['default'].createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear_pancakes)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear_pancakes", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#9F4A08" }),
                React__default['default'].createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$P = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React__default['default'].createElement("image", { width: 90, height: 90, href: "/images/dar-round-panel.svg" })));
};

var Icon$O = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip-pocketwatch)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.4825 9.78846C44.9985 10.9575 44.934 12.0841 44.3506 13.0946C43.7672 14.105 42.8238 14.7242 41.5534 14.8619C40.2449 15.0037 38.5223 14.6345 36.5148 13.4755C34.5072 12.3164 33.3262 11.0092 32.7948 9.80511C32.2788 8.63603 32.3433 7.50943 32.9267 6.49898C33.5101 5.48854 34.4535 4.86941 35.7239 4.73171C37.0324 4.5899 38.755 4.95904 40.7625 6.1181C42.7701 7.27716 43.9511 8.58438 44.4825 9.78846ZM46.7339 8.79481C45.9315 6.97669 44.3045 5.3214 41.993 3.98688C39.6815 2.65235 37.4345 2.07098 35.4588 2.28512C33.445 2.50338 31.7896 3.54667 30.7955 5.26852C29.8014 6.99038 29.7255 8.94565 30.5434 10.7988C31.3458 12.6169 32.9728 14.2722 35.2843 15.6067C37.5958 16.9412 39.8428 17.5226 41.8185 17.3085C43.8323 17.0902 45.4877 16.0469 46.4818 14.325C47.4759 12.6032 47.5518 10.6479 46.7339 8.79481Z", fill: "#FFAF00" }),
            React__default['default'].createElement("path", { d: "M39.2061 12.466C39.4779 11.9952 39.3166 11.3932 38.8458 11.1213L37.3879 10.2796C36.9171 10.0078 36.315 10.1691 36.0432 10.6399L33.7667 14.5829C33.4949 15.0537 33.6562 15.6558 34.127 15.9276L35.5849 16.7693C36.0557 17.0411 36.6577 16.8798 36.9296 16.409L39.2061 12.466Z", fill: "#EB8C00" }),
            React__default['default'].createElement("path", { d: "M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L36.9885 6.30023C36.5177 6.02841 35.9156 6.18972 35.6438 6.66054L34.4249 8.77169C34.1531 9.2425 34.3144 9.84453 34.7852 10.1164L40.2885 13.2937C40.7593 13.5655 41.3614 13.4042 41.6332 12.9334L42.8521 10.8222Z", fill: "#FFAF00" }),
            React__default['default'].createElement("path", { d: "M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L38.2605 7.03465C37.7897 6.76282 37.1877 6.92413 36.9159 7.39495L35.9418 9.08208C35.67 9.5529 35.8313 10.1549 36.3021 10.4268L40.5333 12.8697C41.0041 13.1415 41.6062 12.9802 41.878 12.5093L42.8521 10.8222Z", fill: "#FFD800" }),
            React__default['default'].createElement("path", { d: "M42.2502 9.90623C42.3862 9.67082 42.3055 9.3698 42.0701 9.23389L41.2265 8.74685C40.9911 8.61094 40.6901 8.6916 40.5542 8.92701L39.0879 11.4666C38.952 11.702 39.0327 12.0031 39.2681 12.139L40.1117 12.626C40.3471 12.7619 40.6481 12.6813 40.784 12.4458L42.2502 9.90623Z", fill: "#FFE971" }),
            React__default['default'].createElement("path", { d: "M14.4276 37.9808C19.0474 45.9826 29.0239 48.079 37.1341 43.3966C45.2442 38.7142 48.4169 29.0261 43.7971 21.0244C39.1773 13.0227 29.2008 10.9262 21.0907 15.6086C12.9805 20.291 9.80785 29.9791 14.4276 37.9808Z", fill: "#EB8C00" }),
            React__default['default'].createElement("path", { d: "M12.9928 35.4957C17.6126 43.4975 27.5891 45.5939 35.6993 40.9115C43.8094 36.2291 46.9821 26.541 42.3623 18.5393C37.7425 10.5375 27.766 8.4411 19.6558 13.1235C11.5457 17.8059 8.37303 27.494 12.9928 35.4957Z", fill: "#FFD800" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.7043 22.6394C12.3316 20.7707 13.3072 19.0005 14.5942 17.4155L44.4474 25.2401C44.6009 27.2114 44.3704 29.1765 43.7923 31.0497L11.7043 22.6394ZM39.463 38.0997C40.3335 37.2422 41.1005 36.3113 41.7564 35.3244L10.887 27.2335C10.8573 28.381 10.9556 29.5386 11.1892 30.6891L39.463 38.0997Z", fill: "#FFE971" }),
            React__default['default'].createElement("path", { d: "M15.0259 34.3218C19.0448 41.2826 27.6684 43.1382 34.6556 39.1041C41.6428 35.07 44.3477 26.674 40.3288 19.7131C36.31 12.7523 27.6863 10.8967 20.6991 14.9308C13.7119 18.9649 11.0071 27.3609 15.0259 34.3218Z", fill: "#FFC700" }),
            React__default['default'].createElement("path", { d: "M16.5423 33.2959C20.044 39.3611 27.4985 40.8267 33.6123 37.2969C39.7261 33.7671 42.1841 26.5785 38.6824 20.5134C35.1806 14.4482 27.7262 12.9826 21.6123 16.5124C15.4985 20.0422 13.0406 27.2308 16.5423 33.2959Z", fill: "white" }),
            React__default['default'].createElement("path", { d: "M19.6485 19.4094C18.7716 20.2171 20.1105 20.7851 21.1076 20.1316C22.9645 18.9145 25.1882 18.2126 27.5811 18.2248C31.0292 18.2423 34.1409 19.7388 36.319 22.1137C37.0584 22.9199 38.4114 22.545 37.8645 21.5976C34.5623 15.878 27.6235 14.4433 21.9702 17.7072C21.1156 18.2006 20.3393 18.7732 19.6485 19.4094Z", fill: "#E7E8E8" }),
            React__default['default'].createElement("path", { d: "M34.6395 35.043C35.5545 34.2788 34.2368 33.6843 33.2067 34.2845C31.5603 35.2437 29.6432 35.7884 27.5946 35.7783C24.3428 35.7623 21.4084 34.3516 19.3546 32.1127C18.6572 31.3525 17.381 31.706 17.8968 32.5993C21.0104 37.9921 27.5541 39.344 32.8862 36.2656C33.5169 35.9014 34.1025 35.4916 34.6395 35.043Z", fill: "#E7E8E8" }),
            React__default['default'].createElement("path", { d: "M32.5972 20.6118C32.801 20.2587 32.6801 19.8071 32.3269 19.6033L32.0205 19.4263C31.6673 19.2225 31.2158 19.3434 31.0119 19.6966L28.0893 24.7587C27.8854 25.1118 28.0064 25.5633 28.3595 25.7672L28.666 25.9442C29.0191 26.148 29.4707 26.027 29.6745 25.6739L32.5972 20.6118Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { d: "M21.2036 27.5233C20.8098 27.6288 20.576 28.0336 20.6816 28.4275L20.7784 28.789C20.884 29.1828 21.2888 29.4166 21.6826 29.311L26.2569 28.0854C26.6507 27.9798 26.8844 27.575 26.7789 27.1812L26.682 26.8197C26.5765 26.4258 26.1717 26.1921 25.7778 26.2976L21.2036 27.5233Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { d: "M25.4809 25.6151C26.244 24.2934 27.8023 23.9359 29.053 24.658C30.3037 25.3801 30.7732 26.9084 30.0101 28.23C29.247 29.5517 27.6887 29.9093 26.438 29.1872C25.1873 28.4651 24.7178 26.9368 25.4809 25.6151Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { d: "M17.0126 14.6084C16.4241 14.2686 15.5801 14.6286 15.1275 15.4126L10.989 22.5807C10.5364 23.3647 10.6466 24.2756 11.2351 24.6154L11.8085 24.9464C12.397 25.2862 13.241 24.9262 13.6936 24.1422L17.8321 16.9741C18.2847 16.1901 18.1745 15.2792 17.586 14.9394L17.0126 14.6084Z", fill: "#EB8C00" }),
            React__default['default'].createElement("path", { d: "M1.87053 28.4667C-1.14632 26.725 -0.193534 19.9443 3.7222 13.162C7.63794 6.37974 13.0338 2.16425 16.0507 3.90603C19.0675 5.64781 18.1147 12.4285 14.199 19.2108C10.2833 25.993 4.88739 30.2085 1.87053 28.4667Z", fill: "#FFC700" }),
            React__default['default'].createElement("path", { d: "M3.24974 28.6111C0.902471 27.273 2.13775 21.219 5.79373 14.9665C9.44971 8.71396 14.1419 4.63067 16.4892 5.96878C18.8365 7.30688 17.6012 13.3609 13.9452 19.6134C10.2892 25.8659 5.59701 29.9492 3.24974 28.6111Z", fill: "#FFD800" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.32523 23.3938C2.57644 22.2148 2.99217 20.9038 3.55715 19.5196L17.6473 7.92463C17.7625 8.75342 17.6984 9.77478 17.4703 10.9308L2.32523 23.3938ZM15.6081 16.3772C15.9949 15.5396 16.3319 14.7209 16.6159 13.9331L2.04567 25.923C2.0571 26.4661 2.12846 26.9487 2.26274 27.3591L15.6081 16.3772Z", fill: "#FFE971" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip-pocketwatch" },
                React__default['default'].createElement("rect", { width: "48", height: "48", fill: "white", transform: "matrix(-1 0 0 1 48 0)" })))));
};

var Icon$N = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9 14.7902C9 15.555 9.82366 16.0367 10.4903 15.6617L15.4505 12.8716C16.1302 12.4893 16.1302 11.5107 15.4505 11.1284L10.4903 8.33827C9.82366 7.96331 9 8.44502 9 9.20985V14.7902ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$M = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$L = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$K = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$J = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React__default['default'].createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React__default['default'].createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React__default['default'].createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$I = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7.75C12.5 7.33579 12.1642 7 11.75 7C11.3358 7 11 7.33579 11 7.75V13L15.5537 15.8022C15.9106 16.0219 16.3781 15.9106 16.5978 15.5537C16.8192 15.1938 16.7041 14.7225 16.3419 14.5051L12.5 12.2V7.75Z" })));
};

var Icon$H = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip-won)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M43.1934 10.6907C44.0412 9.92381 45.4 10.3246 45.6959 11.4288C45.9144 12.2444 45.4304 13.0827 44.6148 13.3012L38.4955 14.9409L43.1934 10.6907ZM49.112 10.5134C48.1317 6.85481 43.6295 5.52698 40.8207 8.06806L31.0187 16.9358C29.5584 18.2569 30.8604 20.6481 32.7625 20.1385L45.5302 16.7174C48.2324 15.9933 49.8361 13.2157 49.112 10.5134Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.1886 8.0841C29.8078 6.90274 28.3125 6.54189 27.4349 7.41956C26.7866 8.06782 26.7866 9.11885 27.4349 9.7671L32.2987 14.6309L30.1886 8.0841ZM24.7196 4.70427C27.6276 1.79628 32.5818 2.99187 33.8434 6.90609L38.2461 20.5658C38.902 22.6007 36.3796 24.1424 34.8677 22.6306L24.7196 12.4824C22.5717 10.3345 22.5717 6.85214 24.7196 4.70427Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { opacity: "0.6", d: "M7.27624 34.0431C7.01094 35.0539 5.57594 35.054 5.31064 34.0431L4.51492 31.0112C4.42182 30.6565 4.14478 30.3794 3.79005 30.2863L0.758148 29.4906C-0.252715 29.2253 -0.252717 27.7903 0.758146 27.525L3.79005 26.7293C4.14478 26.6362 4.42182 26.3591 4.51492 26.0044L5.31064 22.9725C5.57594 21.9616 7.01094 21.9616 7.27624 22.9725L8.07196 26.0044C8.16506 26.3591 8.44209 26.6362 8.79682 26.7293L11.8287 27.525C12.8396 27.7903 12.8396 29.2253 11.8287 29.4906L8.79683 30.2863C8.44209 30.3794 8.16506 30.6565 8.07196 31.0112L7.27624 34.0431Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M9.62029 11.6637C9.62344 12.2763 8.81089 12.494 8.5073 11.9619L7.59673 10.3659C7.4902 10.1791 7.2913 10.0643 7.07631 10.0654L5.23882 10.0748C4.62619 10.078 4.40847 9.26545 4.9406 8.96185L6.53663 8.05128C6.72337 7.94475 6.8382 7.74585 6.8371 7.53087L6.82766 5.69337C6.82451 5.08074 7.63705 4.86302 7.94064 5.39515L8.85121 6.99119C8.95775 7.17792 9.15664 7.29275 9.37163 7.29165L11.2091 7.28221C11.8218 7.27906 12.0395 8.0916 11.5073 8.39519L9.91131 9.30576C9.72458 9.4123 9.60974 9.6112 9.61085 9.82618L9.62029 11.6637Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { opacity: "0.8", d: "M53.8712 15.7857C53.2964 15.6348 53.2964 14.8189 53.8712 14.6681L56.9643 13.8563C57.166 13.8033 57.3235 13.6458 57.3764 13.4441L58.1882 10.351C58.3391 9.77623 59.155 9.77623 59.3058 10.351L60.1176 13.4441C60.1706 13.6458 60.3281 13.8033 60.5298 13.8563L63.6229 14.6681C64.1977 14.8189 64.1977 15.6348 63.6229 15.7857L60.5298 16.5975C60.3281 16.6504 60.1706 16.8079 60.1176 17.0096L59.3058 20.1027C59.155 20.6775 58.3391 20.6775 58.1882 20.1027L57.3764 17.0096C57.3235 16.8079 57.166 16.6504 56.9643 16.5975L53.8712 15.7857Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M51.0823 29.9055C50.3505 27.1742 47.543 25.5533 44.8116 26.2851L17.6112 33.5735C14.8798 34.3053 13.2589 37.1128 13.9908 39.8441L18.546 56.8444C19.2778 59.5758 22.0853 61.1967 24.8167 60.4648L52.0171 53.1765C54.7485 52.4446 56.3694 49.6371 55.6375 46.9058L51.0823 29.9055Z", fill: "url(#paint0_linear_won)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.2737 36.0462L45.4742 28.7579C46.8399 28.392 48.2436 29.2024 48.6095 30.5681L53.1648 47.5684C53.5307 48.934 52.7202 50.3378 51.3546 50.7037L24.1541 57.9921C22.7884 58.358 21.3847 57.5475 21.0187 56.1819L16.4635 39.1816C16.0976 37.8159 16.9081 36.4122 18.2737 36.0462ZM44.8116 26.2851C47.543 25.5533 50.3505 27.1742 51.0823 29.9055L55.6375 46.9058C56.3694 49.6371 54.7485 52.4446 52.0171 53.1765L24.8167 60.4648C22.0853 61.1967 19.2778 59.5758 18.546 56.8444L13.9908 39.8441C13.2589 37.1128 14.8798 34.3053 17.6112 33.5735L44.8116 26.2851Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { d: "M35.2297 28.8525L27.1932 31.0059L34.3987 57.8973L42.4352 55.7439L35.2297 28.8525Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { d: "M54.5173 42.4023L52.3639 34.3658L15.1113 44.3476L17.2647 52.3841L54.5173 42.4023Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9264 46.3239L31.8613 48.485L32.1926 49.7213L40.2577 47.5603L39.9264 46.3239ZM29.7019 40.4262L37.767 38.2651L37.4358 37.0287L29.3707 39.1898L29.7019 40.4262Z", fill: "#7645D9" })),
            React__default['default'].createElement("path", { d: "M54.8306 24.9448C55.3795 22.8962 54.1638 20.7906 52.1153 20.2417L17.4965 10.9657C15.448 10.4168 13.3424 11.6324 12.7935 13.681L11.8824 17.081C11.3335 19.1295 12.5492 21.2351 14.5977 21.784L49.2165 31.0601C51.265 31.609 53.3706 30.3933 53.9195 28.3448L54.8306 24.9448Z", fill: "url(#paint1_linear_won)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8339 13.4384L51.4527 22.7145C52.1355 22.8975 52.5408 23.5993 52.3578 24.2822L51.4468 27.6822C51.2638 28.3651 50.5619 28.7703 49.8791 28.5873L15.2603 19.3113C14.5775 19.1283 14.1722 18.4264 14.3552 17.7436L15.2662 14.3435C15.4492 13.6607 16.1511 13.2555 16.8339 13.4384ZM52.1153 20.2417C54.1638 20.7906 55.3795 22.8962 54.8306 24.9448L53.9195 28.3448C53.3706 30.3933 51.265 31.609 49.2165 31.0601L14.5977 21.784C12.5492 21.2351 11.3335 19.1295 11.8824 17.081L12.7935 13.681C13.3424 11.6324 15.448 10.4168 17.4965 10.9657L52.1153 20.2417Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { d: "M38.8242 16.6804L30.7877 14.527L27.8889 25.3454L35.9254 27.4988L38.8242 16.6804Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M38.4257 18.0799L30.4256 15.8399L30.7455 14.3999L38.8813 16.6573L38.4257 18.0799Z", fill: "#7645D9" }))),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear_won", x1: "31.2114", y1: "29.9293", x2: "38.4169", y2: "56.8207", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("linearGradient", { id: "paint1_linear_won", x1: "34.8059", y1: "15.6037", x2: "31.9071", y2: "26.4221", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("clipPath", { id: "clip-won" },
                React__default['default'].createElement("rect", { width: "64", height: "64", fill: "white" })))));
};

var Icon$G = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip-teamplayer)" },
            React__default['default'].createElement("path", { d: "M15.9617 4.03476C16.5597 2.82143 15.6818 1.40061 14.2254 1.22477C13.0389 1.08149 11.9708 1.84428 11.8399 2.9285L11.3896 6.65764C11.2976 7.41951 11.899 8.11875 12.7328 8.21943C13.3889 8.29864 14.0166 7.98162 14.286 7.435L15.9617 4.03476Z", fill: "#1FC7D4" }),
            React__default['default'].createElement("path", { d: "M6.27612 5.16903C5.36287 4.17118 5.80868 2.56162 7.15782 1.98574C8.25706 1.51653 9.49573 1.95041 9.92446 2.95482L11.3991 6.40949C11.7004 7.11529 11.3184 7.95473 10.546 8.28444C9.93817 8.54388 9.24684 8.41494 8.83541 7.9654L6.27612 5.16903Z", fill: "#1FC7D4" }),
            React__default['default'].createElement("path", { d: "M17.0349 9.11691C17.3916 11.6186 15.2219 13.6784 12.2437 14.1031C9.26546 14.5278 6.60649 13.1564 6.24978 10.6548C5.89307 8.15311 8.06278 6.09324 11.041 5.66857C14.0192 5.24391 16.6782 6.61525 17.0349 9.11691Z", fill: "#1FC7D4" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.53552 12.9725C8.66378 13.937 10.392 14.3672 12.2437 14.1032C14.913 13.7225 16.9328 12.0284 17.0663 9.87986C16.4991 11.4567 14.8084 12.7917 12.6007 13.3832C10.6865 13.8961 8.82955 13.7307 7.53552 12.9725Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M11.1696 9.94964C11.3325 10.6295 11.0911 10.9601 10.717 11.0497C10.343 11.1393 9.97795 10.9541 9.81504 10.2742C9.65212 9.5943 9.89356 9.26377 10.2676 9.17414C10.6417 9.08451 11.0067 9.26973 11.1696 9.94964Z", fill: "#017178" }),
            React__default['default'].createElement("path", { d: "M14.4407 9.58045C14.4649 10.2792 14.1625 10.555 13.7781 10.5684C13.3937 10.5817 13.0729 10.3275 13.0486 9.62879C13.0243 8.93005 13.3268 8.65422 13.7112 8.64087C14.0956 8.62753 14.4164 8.88172 14.4407 9.58045Z", fill: "#017178" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.3337 10.8946C12.1996 10.9121 12.1051 11.0349 12.1226 11.169C12.1855 11.6513 12.654 11.9486 13.1254 11.8872C13.3584 11.8568 13.563 11.7451 13.7062 11.5832C13.7958 11.4819 13.7863 11.3272 13.685 11.2376C13.5838 11.148 13.429 11.1575 13.3395 11.2588C13.2753 11.3313 13.1788 11.3864 13.0621 11.4016C12.8142 11.4339 12.6305 11.2773 12.6082 11.1057C12.5907 10.9716 12.4678 10.8771 12.3337 10.8946Z", fill: "#017178" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.3339 10.8945C12.1998 10.9119 12.1053 11.0348 12.1228 11.1689C12.1452 11.3405 12.0078 11.539 11.76 11.5713C11.6411 11.5868 11.5319 11.557 11.4508 11.5014C11.3393 11.425 11.1869 11.4535 11.1104 11.565C11.034 11.6765 11.0625 11.8289 11.174 11.9054C11.3555 12.0297 11.586 12.0878 11.8233 12.0569C12.2947 11.9954 12.6712 11.5878 12.6083 11.1056C12.5908 10.9715 12.468 10.877 12.3339 10.8945Z", fill: "#017178" }),
            React__default['default'].createElement("path", { d: "M9.50991 12.781C9.67816 11.447 8.51926 10.3246 7.21792 10.5612C6.15761 10.7539 5.45717 11.7854 5.65344 12.8651L6.32848 16.5785C6.4664 17.3372 7.1822 17.8424 7.92727 17.7069C8.51353 17.6004 8.9626 17.1204 9.0384 16.5195L9.50991 12.781Z", fill: "#9A6AFF" }),
            React__default['default'].createElement("path", { d: "M4.93123 13.9946C4.62613 12.6768 3.04713 12.1326 1.80838 12.9183C0.799086 13.5584 0.455077 14.825 1.04002 15.7472L3.05191 18.9192C3.46294 19.5673 4.37109 19.7279 5.08032 19.2781C5.63839 18.9241 5.92368 18.2814 5.78623 17.6877L4.93123 13.9946Z", fill: "#9A6AFF" }),
            React__default['default'].createElement("path", { d: "M12.3621 17.3922C13.4422 19.6768 11.9781 22.2858 9.25833 23.5716C6.53859 24.8574 3.59314 24.333 2.5131 22.0485C1.43306 19.764 2.89716 17.1549 5.6169 15.8691C8.33664 14.5833 11.2821 15.1077 12.3621 17.3922Z", fill: "#9A6AFF" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.5245 20.1686C11.9455 21.2367 10.9163 22.1811 9.58715 22.8094C6.86742 24.0952 3.92196 23.5709 2.84192 21.2863C2.41234 20.3777 2.38525 19.4177 2.67957 18.51C2.0738 19.6275 1.96092 20.8804 2.51314 22.0485C3.59318 24.333 6.53864 24.8574 9.25837 23.5716C10.8963 22.7972 12.0789 21.5429 12.5245 20.1686Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.75939 18.7345C8.86973 18.6564 9.02253 18.6825 9.10068 18.7928C9.45793 19.2972 9.2815 19.9886 8.77528 20.3471C8.66494 20.4253 8.51213 20.3992 8.43398 20.2889C8.35583 20.1785 8.38193 20.0257 8.49227 19.9476C8.8145 19.7193 8.87726 19.3246 8.7011 19.0758C8.62294 18.9655 8.64904 18.8127 8.75939 18.7345Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.75936 18.7345C8.86971 18.6563 9.02251 18.6824 9.10066 18.7928C9.27683 19.0415 9.67007 19.1133 9.9923 18.8851C10.1026 18.807 10.2554 18.8331 10.3336 18.9434C10.4117 19.0537 10.3856 19.2065 10.2753 19.2847C9.76908 19.6432 9.05832 19.5802 8.70107 19.0758C8.62292 18.9654 8.64902 18.8126 8.75936 18.7345Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { d: "M7.26609 18.6401C7.75355 19.1413 7.7149 19.5488 7.43915 19.8169C7.16341 20.0851 6.755 20.1124 6.26755 19.6112C5.7801 19.11 5.81875 18.7025 6.09449 18.4343C6.37023 18.1662 6.77864 18.1389 7.26609 18.6401Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { d: "M10.0286 16.8059C10.429 17.3791 10.3252 17.775 10.0099 17.9953C9.69452 18.2156 9.28705 18.1767 8.88668 17.6036C8.48632 17.0304 8.5901 16.6344 8.90543 16.4142C9.22077 16.1939 9.62825 16.2327 10.0286 16.8059Z", fill: "#452A7A" }),
            React__default['default'].createElement("path", { d: "M15.821 11.1076C15.5183 9.7976 16.5573 8.56337 17.876 8.66668C18.9503 8.75086 19.7518 9.70595 19.6661 10.7999L19.3713 14.5627C19.3111 15.3315 18.6502 15.9067 17.8953 15.8475C17.3012 15.801 16.8058 15.3691 16.6694 14.7789L15.821 11.1076Z", fill: "#FFC700" }),
            React__default['default'].createElement("path", { d: "M20.4641 11.4595C20.469 10.121 21.7611 9.16422 23.0195 9.56738C24.0448 9.89586 24.6059 11.0053 24.2727 12.0453L23.1267 15.6224C22.8925 16.3532 22.1187 16.7586 21.3982 16.5277C20.8313 16.3461 20.4482 15.8139 20.4504 15.2108L20.4641 11.4595Z", fill: "#FFC700" }),
            React__default['default'].createElement("path", { d: "M13.6364 16.264C13.1079 18.7351 15.1302 20.9398 18.072 21.569C21.0138 22.1983 23.7611 21.0137 24.2897 18.5427C24.8182 16.0716 22.7959 13.8669 19.854 13.2376C16.9122 12.6084 14.1649 13.793 13.6364 16.264Z", fill: "#FFC700" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.7678 17.3277C18.638 17.2898 18.5021 17.3644 18.4643 17.4942C18.2913 18.0876 18.6839 18.6835 19.2794 18.8571C19.4092 18.8949 19.5451 18.8203 19.583 18.6905C19.6208 18.5607 19.5462 18.4248 19.4164 18.387C19.0373 18.2765 18.8491 17.9238 18.9344 17.6312C18.9722 17.5014 18.8976 17.3655 18.7678 17.3277Z", fill: "#AE5714" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.7679 17.3275C18.6381 17.2897 18.5022 17.3642 18.4643 17.494C18.379 17.7867 18.0308 17.983 17.6517 17.8725C17.5219 17.8347 17.386 17.9092 17.3482 18.039C17.3103 18.1689 17.3849 18.3048 17.5147 18.3426C18.1103 18.5162 18.7615 18.2245 18.9344 17.631C18.9723 17.5012 18.8977 17.3653 18.7679 17.3275Z", fill: "#AE5714" }),
            React__default['default'].createElement("path", { d: "M17.78 16.2187C17.6338 16.9024 17.2734 17.0965 16.8973 17.016C16.5212 16.9356 16.2717 16.6111 16.4179 15.9274C16.5642 15.2437 16.9245 15.0496 17.3007 15.13C17.6768 15.2105 17.9263 15.535 17.78 16.2187Z", fill: "#AE5714" }),
            React__default['default'].createElement("path", { d: "M21.344 17.3356C21.0937 17.9884 20.7077 18.1244 20.3485 17.9867C19.9894 17.849 19.7931 17.4897 20.0434 16.8369C20.2937 16.1841 20.6798 16.0482 21.039 16.1859C21.3981 16.3236 21.5943 16.6828 21.344 17.3356Z", fill: "#AE5714" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.9627 18.7486C14.73 19.7089 15.9227 20.4634 17.3569 20.8477C20.2916 21.6341 23.1259 20.5724 23.7898 18.0947C24.0539 17.1092 23.9086 16.1461 23.4531 15.2939C24.2558 16.2986 24.5929 17.5285 24.2534 18.7954C23.5895 21.2731 20.7552 22.3347 17.8205 21.5484C16.0531 21.0748 14.6523 20.0389 13.9627 18.7486Z", fill: "#EB8C00" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip-teamplayer" },
                React__default['default'].createElement("rect", { width: "24", height: "24", fill: "white", transform: "translate(0.5 0.5)" })))));
};

var Icon$F = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 18 16" }, props),
        React__default['default'].createElement("path", { d: "M10.0002 7.33L15.0002 14H3.00018L8.00018 7.33V2H10.0002V7.33ZM12.9602 0H5.04018C4.62018 0 4.39018 0.48 4.65018 0.81L6.00018 2.5V6.67L0.200175 14.4C-0.289825 15.06 0.180175 16 1.00018 16H17.0002C17.8202 16 18.2902 15.06 17.8002 14.4L12.0002 6.67V2.5L13.3502 0.81C13.6102 0.48 13.3802 0 12.9602 0Z" })));
};

var Icon$E = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$D = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear_ticketround)" }),
        React__default['default'].createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear_ticketround", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$C = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.0701 1.01H9.07007V3.01H15.0701V1.01ZM11.0701 14.01H13.0701V8.01H11.0701V14.01ZM19.1001 7.39L20.5201 5.97C20.0901 5.46 19.6201 4.98 19.1101 4.56L17.6901 5.98C16.1401 4.74 14.1901 4 12.0701 4C7.10007 4 3.07007 8.03 3.07007 13C3.07007 17.97 7.09007 22 12.0701 22C17.0501 22 21.0701 17.97 21.0701 13C21.0701 10.89 20.3301 8.94 19.1001 7.39ZM12.0701 20.01C8.20007 20.01 5.07007 16.88 5.07007 13.01C5.07007 9.14 8.20007 6.01 12.0701 6.01C15.9401 6.01 19.0701 9.14 19.0701 13.01C19.0701 16.88 15.9401 20.01 12.0701 20.01Z" })));
};

var Icon$B = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default['default'].createElement("path", { d: "M16.8196 4.04526C17.2184 2.78478 16.2774 1.5 14.9553 1.5C13.8754 1.5 13 2.37543 13 3.45534L13 7.25679C13 8.01243 13.6126 8.625 14.3682 8.625C14.9648 8.625 15.4927 8.2384 15.6727 7.66958L16.8196 4.04526Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M8.05539 4.04526C7.65652 2.78478 8.59753 1.5 9.91962 1.5C10.9995 1.5 11.875 2.37543 11.875 3.45534L11.875 7.25679C11.875 8.01243 11.2624 8.625 10.5067 8.625C9.91013 8.625 9.3823 8.2384 9.2023 7.66958L8.05539 4.04526Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.24713 8.9375L13.4374 8.9375V17.0625H7.96396C7.92764 17.0625 7.89183 17.0625 7.85651 17.0625C7.06169 17.0627 6.51444 17.0629 6.00729 16.9494C4.88983 16.6995 3.90253 16.0491 3.23171 15.1211C2.92726 14.6999 2.71136 14.1971 2.39779 13.4667C2.38385 13.4342 2.36972 13.4013 2.35539 13.368L2.34484 13.3434C2.19078 12.9849 2.05946 12.6793 1.96737 12.4255C1.87345 12.1667 1.79043 11.8847 1.78065 11.583C1.7455 10.4988 2.39693 9.50984 3.40701 9.11409C3.68809 9.00396 3.97989 8.96895 4.25478 8.95306C4.5243 8.93749 4.85692 8.93749 5.24713 8.9375ZM4.36295 10.8249C4.15337 10.837 4.09575 10.858 4.09101 10.8599C3.82001 10.9661 3.64524 11.2314 3.65467 11.5223C3.65483 11.5274 3.65831 11.5886 3.72992 11.7859C3.80127 11.9825 3.91061 12.238 4.0781 12.6278C4.4505 13.4945 4.5838 13.791 4.75127 14.0227C5.15376 14.5795 5.74615 14.9697 6.41662 15.1197C6.6956 15.1821 7.02062 15.1875 7.96396 15.1875H11.5624V10.8125H5.27387C4.84961 10.8125 4.57176 10.8129 4.36295 10.8249Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.637 10.8249C20.4282 10.8129 20.1503 10.8125 19.7261 10.8125H13.4375V15.1875H17.036C17.9793 15.1875 18.3043 15.1821 18.5833 15.1197C19.2538 14.9697 19.8462 14.5795 20.2487 14.0227C20.4161 13.791 20.5494 13.4945 20.9218 12.6278C21.0893 12.238 21.1987 11.9825 21.27 11.7859C21.3416 11.5886 21.3451 11.5274 21.3453 11.5223C21.3547 11.2314 21.1799 10.9661 20.9089 10.8599C20.9042 10.858 20.8466 10.837 20.637 10.8249ZM20.7452 8.95306C21.0201 8.96895 21.3118 9.00396 21.5929 9.11409C22.603 9.50984 23.2544 10.4988 23.2193 11.583C23.2095 11.8847 23.1265 12.1667 23.0326 12.4255C22.9405 12.6793 22.8092 12.9849 22.6551 13.3434L22.6446 13.368C22.6302 13.4013 22.6161 13.4342 22.6022 13.4667C22.2886 14.197 22.0727 14.6999 21.7682 15.1211C21.0974 16.0491 20.1101 16.6995 18.9927 16.9494C18.4855 17.0629 17.9383 17.0627 17.1434 17.0625C17.1081 17.0625 17.0723 17.0625 17.036 17.0625H11.5625V8.9375L19.7528 8.9375C20.143 8.93749 20.4756 8.93749 20.7452 8.95306Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M8.07961 10.8125H4.6577C4.61915 10.8125 4.58174 10.8125 4.5454 10.8125C4.39673 10.5329 4.3125 10.2138 4.3125 9.875C4.3125 9.53623 4.39673 9.21713 4.54539 8.9375C4.57317 8.9375 4.60124 8.9375 4.62961 8.9375L8.07961 8.9375C8.22827 9.21713 8.3125 9.53623 8.3125 9.875C8.3125 10.2138 8.22827 10.5329 8.07961 10.8125Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M8.4231 15.1875L9.18751 17.0104L9.06332 17.0625L7.23815 17.0625C7.0893 17.0626 6.94898 17.0626 6.81591 17.0619L6.01688 15.1564C6.27346 15.1844 6.63759 15.1875 7.3468 15.1875H8.4231Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M16.9204 10.8125H20.3423C20.3809 10.8125 20.4183 10.8125 20.4546 10.8125C20.6033 10.5329 20.6875 10.2138 20.6875 9.875C20.6875 9.53623 20.6033 9.21713 20.4546 8.9375C20.4268 8.9375 20.3988 8.9375 20.3704 8.9375L16.9204 8.9375C16.7717 9.21713 16.6875 9.53623 16.6875 9.875C16.6875 10.2138 16.7717 10.5329 16.9204 10.8125Z", fill: "#EB8C00" }),
        React__default['default'].createElement("path", { d: "M16.5769 15.1875L15.8125 17.0104L15.9367 17.0625L17.7619 17.0625C17.9107 17.0626 18.051 17.0626 18.1841 17.0619L18.9831 15.1564C18.7266 15.1844 18.3624 15.1875 17.6532 15.1875H16.5769Z", fill: "#EB8C00" }),
        React__default['default'].createElement("path", { d: "M10.9347 16.6152C10.8361 15.6854 11.5651 14.875 12.5002 14.875C13.4353 14.875 14.1642 15.6853 14.0656 16.6152L13.7087 19.9805C13.6547 20.4891 13.2257 20.875 12.7142 20.875H12.2861C11.7746 20.875 11.3456 20.4891 11.2917 19.9805L10.9347 16.6152Z", fill: "#EB8C00" }),
        React__default['default'].createElement("path", { d: "M8.875 21.5312C8.875 20.5475 9.67249 19.75 10.6562 19.75H14.3438C15.3275 19.75 16.125 20.5475 16.125 21.5312C16.125 21.8592 15.8592 22.125 15.5312 22.125H9.46875C9.14083 22.125 8.875 21.8592 8.875 21.5312Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M6.88325 14.6524C5.89136 12.0714 5.39541 10.7809 5.56796 9.74082C5.75596 8.6076 6.43705 7.61619 7.42741 7.03418C8.33639 6.5 9.72434 6.5 12.5002 6.5C15.2761 6.5 16.664 6.5 17.573 7.03418C18.5634 7.61619 19.2445 8.6076 19.4325 9.74082C19.605 10.7809 19.1091 12.0714 18.1172 14.6524C17.6137 15.9625 17.362 16.6176 16.9476 17.1125C16.494 17.6543 15.9009 18.0617 15.2324 18.2908C14.6218 18.5 13.9146 18.5 12.5002 18.5C11.0858 18.5 10.3786 18.5 9.768 18.2908C9.09952 18.0617 8.5064 17.6543 8.0528 17.1125C7.63848 16.6176 7.38674 15.9625 6.88325 14.6524Z", fill: "#FFD800" }),
        React__default['default'].createElement("path", { d: "M17.903 7.86713C18.1516 8.78956 17.8918 9.94993 17.3722 12.2707L17.1257 13.372C16.8386 14.6541 16.6951 15.2952 16.4026 15.8048C15.9154 16.6532 15.1253 17.286 14.1908 17.5761C13.6297 17.7503 12.9728 17.7503 11.6589 17.7503C10.5622 17.7503 10.0139 17.7503 9.52467 17.6202C8.79145 17.4253 8.13341 17.02 7.63037 16.4569C7.76277 16.7161 7.89603 16.9258 8.05248 17.1127C8.50608 17.6545 9.0992 18.062 9.76768 18.291C10.3783 18.5002 11.0855 18.5002 12.4999 18.5002C13.9143 18.5002 14.6215 18.5002 15.2321 18.291C15.9006 18.062 16.4937 17.6545 16.9473 17.1127C17.3616 16.6178 17.6134 15.9627 18.1169 14.6526C19.1088 12.0716 19.6047 10.7811 19.4321 9.74103C19.2442 8.60781 18.5631 7.6164 17.5727 7.0344C17.572 7.034 17.5713 7.0336 17.5707 7.0332C17.7122 7.29512 17.8242 7.57465 17.903 7.86713Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { d: "M20.1942 7.55201C20.1249 7.816 19.7501 7.816 19.6808 7.55201L19.308 6.13133C19.2837 6.03869 19.2113 5.96634 19.1187 5.94202L17.698 5.56917C17.434 5.49988 17.434 5.12512 17.698 5.05584L19.1187 4.68298C19.2113 4.65867 19.2837 4.58632 19.308 4.49368L19.6808 3.073C19.7501 2.809 20.1249 2.809 20.1942 3.073L20.567 4.49368C20.5913 4.58632 20.6637 4.65867 20.7563 4.68298L22.177 5.05584C22.441 5.12512 22.441 5.49988 22.177 5.56917L20.7563 5.94202C20.6637 5.96634 20.5913 6.03869 20.567 6.13133L20.1942 7.55201Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M4.46705 4.12184C4.50969 3.95939 4.74031 3.95939 4.78295 4.12184L5.0124 4.99611C5.02736 5.05312 5.07188 5.09764 5.12889 5.1126L6.00316 5.34205C6.16561 5.38469 6.16561 5.61531 6.00316 5.65795L5.12889 5.8874C5.07188 5.90236 5.02736 5.94688 5.0124 6.00389L4.78295 6.87816C4.74031 7.04061 4.50969 7.04061 4.46705 6.87816L4.2376 6.00389C4.22264 5.94688 4.17812 5.90236 4.12111 5.8874L3.24684 5.65795C3.08439 5.61531 3.08439 5.38469 3.24684 5.34205L4.12111 5.1126C4.17812 5.09764 4.22264 5.05312 4.2376 4.99611L4.46705 4.12184Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { d: "M5.3257 21.0184C5.2884 21.1605 5.0866 21.1605 5.0493 21.0184L4.84853 20.2534C4.83543 20.2035 4.79648 20.1646 4.74659 20.1515L3.98161 19.9507C3.83946 19.9134 3.83946 19.7116 3.98161 19.6743L4.74659 19.4735C4.79648 19.4604 4.83543 19.4215 4.84853 19.3716L5.0493 18.6066C5.0866 18.4645 5.2884 18.4645 5.3257 18.6066L5.52647 19.3716C5.53957 19.4215 5.57852 19.4604 5.62841 19.4735L6.39339 19.6743C6.53554 19.7116 6.53554 19.9134 6.39339 19.9507L5.62841 20.1515C5.57852 20.1646 5.53957 20.2035 5.52647 20.2534L5.3257 21.0184Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.13603 7.98393C8.40807 8.2437 8.418 8.67482 8.15822 8.94685L8.04567 9.06471C7.79436 9.32787 7.65414 9.67776 7.65414 10.0416L7.65414 10.2898C7.65414 10.6659 7.34921 10.9708 6.97306 10.9708C6.59692 10.9708 6.29199 10.6659 6.29199 10.2898L6.29199 10.0416C6.29199 9.32735 6.56725 8.64055 7.06056 8.12398L7.17311 8.00611C7.43289 7.73408 7.864 7.72415 8.13603 7.98393Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.93527 2.21472C10.1387 2.409 10.1461 2.73142 9.95187 2.93487L9.86769 3.02302C9.67974 3.21983 9.57487 3.4815 9.57487 3.75363V3.93921C9.57487 4.22052 9.34682 4.44857 9.06551 4.44857C8.7842 4.44857 8.55615 4.22052 8.55615 3.93921V3.75363C8.55615 3.21944 8.76201 2.70579 9.13094 2.31946L9.21512 2.23131C9.4094 2.02786 9.73183 2.02044 9.93527 2.21472Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.8469 2.21472C15.0503 2.409 15.0578 2.73142 14.8635 2.93487L14.7793 3.02302C14.5914 3.21983 14.4865 3.4815 14.4865 3.75363V3.93921C14.4865 4.22052 14.2584 4.44857 13.9771 4.44857C13.6958 4.44857 13.4678 4.22052 13.4678 3.93921V3.75363C13.4678 3.21944 13.6736 2.70579 14.0426 2.31946L14.1267 2.23131C14.321 2.02786 14.6434 2.02044 14.8469 2.21472Z", fill: "#FEED8D" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.789 9.61642C12.789 9.0473 13.2462 8.58594 13.8102 8.58594C14.4493 8.58594 14.9313 9.17163 14.814 9.80558L14.5186 11.4019C15.2601 11.7867 15.832 12.412 15.832 13.2088C15.832 13.9251 15.3629 14.5072 14.7441 14.8888C14.1184 15.2747 13.2798 15.5 12.375 15.5C11.4702 15.5 10.6316 15.2747 10.0059 14.8888C9.38712 14.5072 8.91797 13.9251 8.91797 13.2088C8.91797 12.4166 9.48346 11.7938 10.2182 11.4087L9.92155 9.80559C9.80423 9.17163 10.2863 8.58594 10.9254 8.58594C11.4894 8.58594 11.9466 9.04731 11.9466 9.61642L11.9466 10.9347C12.087 10.9235 12.23 10.9177 12.375 10.9177C12.515 10.9177 12.6532 10.9231 12.789 10.9336V9.61642Z", fill: "#FFAF00" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.789 9.15548C12.789 8.58636 13.2462 8.125 13.8102 8.125C14.4493 8.125 14.9313 8.71069 14.814 9.34464L14.5186 10.9409C15.2601 11.3257 15.832 11.9511 15.832 12.7479C15.832 13.4642 15.3629 14.0463 14.7441 14.4279C14.1184 14.8137 13.2798 15.0391 12.375 15.0391C11.4702 15.0391 10.6316 14.8137 10.0059 14.4279C9.38712 14.0463 8.91797 13.4642 8.91797 12.7479C8.91797 11.9557 9.48346 11.3329 10.2182 10.9478L9.92155 9.34465C9.80423 8.7107 10.2863 8.12501 10.9254 8.12501C11.4894 8.12501 11.9466 8.58637 11.9466 9.15548L11.9466 10.4738C12.087 10.4625 12.23 10.4567 12.375 10.4567C12.515 10.4567 12.6532 10.4621 12.789 10.4726V9.15548ZM11.6782 12.3681C11.6782 12.73 11.4783 13.0234 11.2317 13.0234C10.9851 13.0234 10.7852 12.73 10.7852 12.3681C10.7852 12.0061 10.9851 11.7127 11.2317 11.7127C11.4783 11.7127 11.6782 12.0061 11.6782 12.3681ZM13.5861 13.0234C13.8327 13.0234 14.0326 12.73 14.0326 12.368C14.0326 12.0061 13.8327 11.7127 13.5861 11.7127C13.3395 11.7127 13.1396 12.0061 13.1396 12.368C13.1396 12.73 13.3395 13.0234 13.5861 13.0234Z", fill: "#ED8103" })));
};

var Icon$A = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        React__default['default'].createElement("path", { d: "M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" })));
};

var Icon$z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$x = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$w = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M3.63 3.63C3.24 4.02 3.24 4.65 3.63 5.04L7.29 8.7L7 9H4C3.45 9 3 9.45 3 10V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V13.41L16.18 17.59C15.69 17.96 15.16 18.27 14.58 18.5C14.22 18.65 14 19.03 14 19.42C14 20.14 14.73 20.6 15.39 20.33C16.19 20 16.94 19.56 17.61 19.02L18.95 20.36C19.34 20.75 19.97 20.75 20.36 20.36C20.75 19.97 20.75 19.34 20.36 18.95L5.05 3.63C4.66 3.24 4.03 3.24 3.63 3.63ZM19 12C19 12.82 18.85 13.61 18.59 14.34L20.12 15.87C20.68 14.7 21 13.39 21 12C21 8.17 18.6 4.89 15.22 3.6C14.63 3.37 14 3.83 14 4.46V4.65C14 5.03 14.25 5.36 14.61 5.5C17.18 6.54 19 9.06 19 12ZM10.29 5.71L10.12 5.88L12 7.76V6.41C12 5.52 10.92 5.08 10.29 5.71ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V9.76L16.48 12.24C16.49 12.16 16.5 12.08 16.5 12Z" })));
};

var Icon$v = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M3 10V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V6.41C12 5.52 10.92 5.07 10.29 5.7L7 9H4C3.45 9 3 9.45 3 10ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 4.45V4.65C14 5.03 14.25 5.36 14.6 5.5C17.18 6.53 19 9.06 19 12C19 14.94 17.18 17.47 14.6 18.5C14.24 18.64 14 18.97 14 19.35V19.55C14 20.18 14.63 20.62 15.21 20.4C18.6 19.11 21 15.84 21 12C21 8.16 18.6 4.89 15.21 3.6C14.63 3.37 14 3.82 14 4.45Z" })));
};

var Icon$u = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Icon$t = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M17.65 6.35C16.02 4.72 13.71 3.78 11.17 4.04C7.50002 4.41 4.48002 7.39 4.07002 11.06C3.52002 15.91 7.27002 20 12 20C15.19 20 17.93 18.13 19.21 15.44C19.53 14.77 19.05 14 18.31 14C17.94 14 17.59 14.2 17.43 14.53C16.3 16.96 13.59 18.5 10.63 17.84C8.41002 17.35 6.62002 15.54 6.15002 13.32C5.31002 9.44 8.26002 6 12 6C13.66 6 15.14 6.69 16.22 7.78L14.71 9.29C14.08 9.92 14.52 11 15.41 11H19C19.55 11 20 10.55 20 10V6.41C20 5.52 18.92 5.07 18.29 5.7L17.65 6.35Z" })));
};

var ExpandableButton = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React__default['default'].createElement(IconButton, { "aria-label": "Hide or show expandable content", onClick: onClick },
        children,
        expanded ? React__default['default'].createElement(Icon$1a, { color: "invertedContrast" }) : React__default['default'].createElement(Icon$1d, { color: "invertedContrast" })));
};
ExpandableButton.defaultProps = {
    expanded: false,
};
var ExpandableLabel = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React__default['default'].createElement(Button, { variant: "text", "aria-label": "Hide or show expandable content", onClick: onClick, endIcon: expanded ? React__default['default'].createElement(Icon$1a, { color: "primary" }) : React__default['default'].createElement(Icon$1d, { color: "primary" }) }, children));
};
ExpandableLabel.defaultProps = {
    expanded: false,
};

var Box = styled__default['default'].div(templateObject_1$R || (templateObject_1$R = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), styledSystem.background, styledSystem.border, styledSystem.layout, styledSystem.position, styledSystem.space);
var templateObject_1$R;

var Flex = styled__default['default'](Box)(templateObject_1$Q || (templateObject_1$Q = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), styledSystem.flexbox);
var templateObject_1$Q;

var variants$2 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$2.INFO : _b;
    switch (variant) {
        case variants$2.DANGER:
            return theme.colors.failure;
        case variants$2.WARNING:
            return theme.colors.warning;
        case variants$2.SUCCESS:
            return theme.colors.success;
        case variants$2.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$2.INFO; }
    switch (variant) {
        case variants$2.DANGER:
            return Icon$1v;
        case variants$2.WARNING:
            return Icon$1w;
        case variants$2.SUCCESS:
            return Icon$1x;
        case variants$2.INFO:
        default:
            return Icon$1u;
    }
};
var IconLabel = styled__default['default'].div(templateObject_1$P || (templateObject_1$P = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled__default['default'].div(templateObject_2$m || (templateObject_2$m = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled__default['default'].div(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled__default['default'](Flex)(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default['default'].createElement(StyledAlert, null,
        React__default['default'].createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React__default['default'].createElement(Icon, { color: "currentColor", width: "24px" })),
        React__default['default'].createElement(Details, { hasHandler: !!onClick },
            React__default['default'].createElement(Text, { bold: true }, title),
            typeof children === "string" ? React__default['default'].createElement(Text, { as: "p" }, children) : children),
        onClick && (React__default['default'].createElement(CloseHandler, null,
            React__default['default'].createElement(IconButton, { scale: "sm", variant: "text", onClick: onClick },
                React__default['default'].createElement(Icon$19, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$P, templateObject_2$m, templateObject_3$a, templateObject_4$7;

var scales$5 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$5.MD : _b;
    switch (scale) {
        case scales$5.SM:
            return "32px";
        case scales$5.LG:
            return "48px";
        case scales$5.MD:
        default:
            return "40px";
    }
};
var Input$1 = styled__default['default'].input(templateObject_1$O || (templateObject_1$O = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input$1.defaultProps = {
    scale: scales$5.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$O;

var StyledBalanceInput = styled__default['default'](Box)(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.inputSecondary;
}, function (_a) {
    var theme = _a.theme, isWarning = _a.isWarning;
    return theme.shadows[isWarning ? "warning" : "inset"];
});
var StyledInput$1 = styled__default['default'](Input$1)(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: right;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"], ["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: right;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var templateObject_1$N, templateObject_2$l;

var BalanceInput = function (_a) {
    var value = _a.value, _b = _a.placeholder, placeholder = _b === void 0 ? "0.0" : _b, onChange = _a.onChange, currencyValue = _a.currencyValue, inputProps = _a.inputProps, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, props = __rest(_a, ["value", "placeholder", "onChange", "currencyValue", "inputProps", "isWarning"]);
    return (React__default['default'].createElement(StyledBalanceInput, __assign({ isWarning: isWarning }, props),
        React__default['default'].createElement(StyledInput$1, __assign({ type: "number", value: value, onChange: onChange, placeholder: placeholder }, inputProps)),
        currencyValue && (React__default['default'].createElement(Text, { fontSize: "12px", textAlign: "right", color: "textSubtle" }, currencyValue))));
};

var Separator = styled__default['default'].div(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled__default['default'].ul(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, styledSystem.space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArray(__spreadArray([], accum), [item]);
        }
        return __spreadArray(__spreadArray([], accum), [
            React__default['default'].createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React__default['default'].createElement(Icon$1b, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = React.Children.toArray(children).filter(function (child) { return React.isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React__default['default'].createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default['default'].createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$M, templateObject_2$k;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$3.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled__default['default'].div(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$L;

var ButtonMenu$1 = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales$6.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$3.PRIMARY : _d, onItemClick = _a.onItemClick, children = _a.children;
    return (React__default['default'].createElement(StyledButtonMenu, { variant: variant }, React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            scale: scale,
            variant: variant,
        });
    })));
};

var InactiveButton = styled__default['default'](Button)(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (variant === variants$3.PRIMARY ? theme.colors.primary : theme.colors.textSubtle);
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants$3.PRIMARY : _c, as = _a.as, props = __rest(_a, ["isActive", "variant", "as"]);
    if (!isActive) {
        return React__default['default'].createElement(InactiveButton, __assign({ forwardedAs: as, variant: "tertiary" }, props));
    }
    return React__default['default'].createElement(Button, __assign({ as: as, variant: variant }, props));
};
var templateObject_1$K;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled__default['default'].div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, styledSystem.space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$J;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React__default['default'].createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled__default['default'].div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$I;

var CardHeader = styled__default['default'].div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  background: ", ";\n  ", "\n"], ["\n  background: ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "default" : _b;
    return theme.card.cardHeaderBackground[variant];
}, styledSystem.space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$H;

var CardFooter = styled__default['default'].div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, styledSystem.space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$G;

var StyledCardRibbon = styled__default['default'].div(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ", ";\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform: ", ";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ", ";\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform: ",
    ";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var ribbonPosition = _a.ribbonPosition;
    return (ribbonPosition === "right" ? 0 : "auto");
}, function (_a) {
    var ribbonPosition = _a.ribbonPosition;
    return ribbonPosition === "right"
        ? "translateX(30%) translateY(0%) rotate(45deg)"
        : "translateX(0%) translateY(200%) rotate(-45deg)";
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text, ribbonPosition = _a.ribbonPosition;
    return (React__default['default'].createElement(StyledCardRibbon, { variantColor: variantColor, ribbonPosition: ribbonPosition },
        React__default['default'].createElement("div", { title: text }, text)));
};
CardRibbon.defaultProps = {
    ribbonPosition: "right",
};
var templateObject_1$F;

var scales$4 = {
    SM: "sm",
    MD: "md",
};

var getScale$3 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$4.SM:
            return "24px";
        case scales$4.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled__default['default'].input.attrs({ type: "checkbox" })(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale$3, getScale$3, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales$4.MD,
};
var templateObject_1$E;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled__default['default'].div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container$4 = styled__default['default'].div(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React__default['default'].createElement(Container$4, null,
        target,
        React__default['default'].createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$D, templateObject_2$j;

var bunnyFall = styled.keyframes(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"])));
var Bunny = styled__default['default'].div(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"], ["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"])), function (_a) {
    var position = _a.position;
    return position + "vw";
}, bunnyFall, function (_a) {
    var duration = _a.duration;
    return duration + "s";
}, function (_a) {
    var iterations = _a.iterations;
    return (Number.isFinite(iterations) ? String(iterations) : "infinite");
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.3 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 2.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 3.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 5.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 8 + "s";
});
var FallingBunnies = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 30 : _b, _c = _a.size, size = _c === void 0 ? 32 : _c, _d = _a.iterations, iterations = _d === void 0 ? Infinity : _d, _e = _a.duration, duration = _e === void 0 ? 10 : _e;
    var bunnies = __spreadArray([], Array(count)).map(function (_, index) { return (React__default['default'].createElement(Bunny, { key: String(index), position: Math.random() * 100, iterations: iterations, duration: duration },
        React__default['default'].createElement(Icon$$, { width: size, height: size }))); });
    return React__default['default'].createElement("div", null, bunnies);
};
var templateObject_1$C, templateObject_2$i;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$3;
var style = (_a$3 = {},
    _a$3[sizes.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a$3[sizes.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a$3[sizes.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a$3[sizes.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a$3);
var Heading = styled__default['default'](Text).attrs({ bold: true })(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$B;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper$3 = styled__default['default'].div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, styledSystem.space);
var templateObject_1$A;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = React.useRef(null);
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React__default['default'].createElement(Wrapper$3, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled__default['default'].img(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled__default['default'].div(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = React.useRef(null);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React__default['default'].createElement(Wrapper$3, __assign({ ref: imgRef }, otherProps), isLoaded ? React__default['default'].createElement(StyledImage, { src: src, alt: alt }) : React__default['default'].createElement(Placeholder, null)));
};
var templateObject_1$z, templateObject_2$h;

var GridLayout$1 = styled__default['default'].div(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$y;

var GridLayout = styled__default['default'](GridLayout$1)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$x;

var StyledLink$1 = styled__default['default'](Text)(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default['default'].createElement(StyledLink$1, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$w;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(Link, __assign({ external: true }, props),
        children,
        React__default['default'].createElement(Icon$R, { color: "primary", ml: "4px" })));
};

var NotificationDotRoot = styled__default['default'].span(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  display: inline-flex;\n  position: relative;\n"], ["\n  display: inline-flex;\n  position: relative;\n"])));
var Dot = styled__default['default'].span(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"], ["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? "inline-flex" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var NotificationDot = function (_a) {
    var _b = _a.show, show = _b === void 0 ? false : _b, children = _a.children, props = __rest(_a, ["show", "children"]);
    return (React__default['default'].createElement(NotificationDotRoot, null,
        React.Children.map(children, function (child) { return React.cloneElement(child, props); }),
        React__default['default'].createElement(Dot, { show: show })));
};
var templateObject_1$v, templateObject_2$g;

var scales$3 = {
    SM: "sm",
    MD: "md",
};

var scaleKeyValues$1 = {
    sm: {
        pancakeSize: "16px",
        travelDistance: "16px",
        toggleHeight: "20px",
        toggleWidth: "36px",
        pancakeThickness: "1px",
        pancakeTwoOffset: "0px",
        pancakeThreeOffset: "-3px",
        butterTop: "3px",
        butterLeft: "10px",
        butterWidth: "6px",
        butterHeight: "5px",
        butterThickness: "0.5px",
        butterRadius: "2px",
        butterSmearOneTop: "10px",
        butterSmearOneLeft: "2.5px",
        butterSmearTwoTop: "11px",
        butterSmearTwoRight: "2.5px", // these values adjust the position of it
    },
    md: {
        pancakeSize: "32px",
        travelDistance: "34px",
        toggleHeight: "40px",
        toggleWidth: "72px",
        pancakeThickness: "2px",
        pancakeTwoOffset: "-3px",
        pancakeThreeOffset: "-8px",
        butterTop: "3px",
        butterLeft: "16px",
        butterWidth: "12px",
        butterHeight: "11px",
        butterThickness: "1px",
        butterRadius: "4px",
        butterSmearOneTop: "20px",
        butterSmearOneLeft: "5px",
        butterSmearTwoTop: "22px",
        butterSmearTwoRight: "5px",
    },
};
var getScale$2 = function (property) { return function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$3.MD : _b;
    return scaleKeyValues$1[scale][property];
}; };
var PancakeStack = styled__default['default'].div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n\n  &:label:before {\n    content: none;\n  }\n\n  .pancakes {\n    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  .pancake {\n    background: #e27c31;\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    position: absolute;\n    transition: 0.4s ease;\n    top: 2px;\n    left: 4px;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n  }\n\n  .pancake:nth-child(1) {\n    background: ", ";\n    box-shadow: 0 ", " 0 ", "\n      ", ";\n  }\n\n  .pancake:nth-child(2) {\n    left: 0;\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3) {\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3):before,\n  .pancake:nth-child(3):after {\n    content: \"\";\n    position: absolute;\n    background: #ef8927;\n    border-radius: 20px;\n    width: 50%;\n    height: 20%;\n  }\n\n  .pancake:nth-child(3):before {\n    top: ", ";\n    left: ", ";\n  }\n\n  .pancake:nth-child(3):after {\n    top: ", ";\n    right: ", ";\n  }\n\n  .butter {\n    width: ", ";\n    height: ", ";\n    background: #fbdb60;\n    top: ", ";\n    left: ", ";\n    position: absolute;\n    border-radius: ", ";\n    box-shadow: 0 ", " 0 ", " #d67823;\n    transform: scale(0);\n    transition: 0.2s ease;\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n\n  &:label:before {\n    content: none;\n  }\n\n  .pancakes {\n    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  .pancake {\n    background: #e27c31;\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    position: absolute;\n    transition: 0.4s ease;\n    top: 2px;\n    left: 4px;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n  }\n\n  .pancake:nth-child(1) {\n    background: ", ";\n    box-shadow: 0 ", " 0 ", "\n      ", ";\n  }\n\n  .pancake:nth-child(2) {\n    left: 0;\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3) {\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3):before,\n  .pancake:nth-child(3):after {\n    content: \"\";\n    position: absolute;\n    background: #ef8927;\n    border-radius: 20px;\n    width: 50%;\n    height: 20%;\n  }\n\n  .pancake:nth-child(3):before {\n    top: ", ";\n    left: ", ";\n  }\n\n  .pancake:nth-child(3):after {\n    top: ", ";\n    right: ", ";\n  }\n\n  .butter {\n    width: ", ";\n    height: ", ";\n    background: #fbdb60;\n    top: ", ";\n    left: ", ";\n    position: absolute;\n    border-radius: ", ";\n    box-shadow: 0 ", " 0 ", " #d67823;\n    transform: scale(0);\n    transition: 0.2s ease;\n  }\n"])), getScale$2("pancakeSize"), getScale$2("pancakeSize"), getScale$2("pancakeThickness"), getScale$2("pancakeThickness"), function (_a) {
    var theme = _a.theme;
    return theme.pancakeToggle.handleBackground;
}, getScale$2("pancakeThickness"), getScale$2("pancakeThickness"), function (_a) {
    var theme = _a.theme;
    return theme.pancakeToggle.handleShadow;
}, getScale$2("pancakeTwoOffset"), getScale$2("pancakeThreeOffset"), getScale$2("butterSmearOneTop"), getScale$2("butterSmearOneLeft"), getScale$2("butterSmearTwoTop"), getScale$2("butterSmearTwoRight"), getScale$2("butterWidth"), getScale$2("butterHeight"), getScale$2("butterTop"), getScale$2("butterLeft"), getScale$2("butterRadius"), getScale$2("butterThickness"), getScale$2("butterThickness"));
var PancakeInput = styled__default['default'].input(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n\n  &:focus + label {\n    box-shadow: ", ";\n  }\n\n  &:checked + label .pancakes {\n    transform: translateX(", ");\n  }\n\n  &:checked + label .pancake:nth-child(1) {\n    background: #e27c31;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(2) {\n    transform: scale(1);\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(3) {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n\n  &:checked + label .butter {\n    transform: scale(1);\n    transition-delay: 0.6s;\n  }\n"], ["\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n\n  &:focus + label {\n    box-shadow: ", ";\n  }\n\n  &:checked + label .pancakes {\n    transform: translateX(", ");\n  }\n\n  &:checked + label .pancake:nth-child(1) {\n    background: #e27c31;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(2) {\n    transform: scale(1);\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(3) {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n\n  &:checked + label .butter {\n    transform: scale(1);\n    transition-delay: 0.6s;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, getScale$2("travelDistance"), getScale$2("pancakeThickness"), getScale$2("pancakeThickness"));
var PancakeLabel = styled__default['default'].label(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  display: inline-block;\n  border-radius: 50px;\n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n"], ["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  display: inline-block;\n  border-radius: 50px;\n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n"])), getScale$2("toggleWidth"), getScale$2("toggleHeight"), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$u, templateObject_2$f, templateObject_3$9;

var PancakeToggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales$3.MD : _b, props = __rest(_a, ["checked", "scale"]);
    return (React__default['default'].createElement(PancakeStack, { scale: scale },
        React__default['default'].createElement(PancakeInput, __assign({ id: props.id || "pancake-toggle", scale: scale, type: "checkbox", checked: checked }, props)),
        React__default['default'].createElement(PancakeLabel, { scale: scale, checked: checked, htmlFor: props.id || "pancake-toggle" },
            React__default['default'].createElement("div", { className: "pancakes" },
                React__default['default'].createElement("div", { className: "pancake" }),
                React__default['default'].createElement("div", { className: "pancake" }),
                React__default['default'].createElement("div", { className: "pancake" }),
                React__default['default'].createElement("div", { className: "butter" })))));
};
PancakeToggle.defaultProps = {
    scale: scales$3.MD,
};

var variants$1 = {
    ROUND: "round",
    FLAT: "flat",
};

var _a$2;
var styleVariants$1 = (_a$2 = {},
    _a$2[variants$1.ROUND] = {
        borderRadius: "32px",
    },
    _a$2[variants$1.FLAT] = {
        borderRadius: 0,
    },
    _a$2);

var Bar = styled__default['default'].div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled__default['default'].div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n"], ["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ",
    "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, Bar, function (_a) {
    var variant = _a.variant;
    return (variant === variants$1.FLAT ? "0" : "32px");
}, function (_a) {
    var variant = _a.variant;
    return (variant === variants$1.FLAT ? "0" : "32px");
}, styledSystem.variant({
    variants: styleVariants$1,
}), styledSystem.space);
var templateObject_1$t, templateObject_2$e;

var ProgressBunnyWrapper = styled__default['default'].div(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$s;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? variants$1.ROUND : _b, _c = _a.primaryStep, primaryStep = _c === void 0 ? 0 : _c, _d = _a.secondaryStep, secondaryStep = _d === void 0 ? null : _d, _e = _a.showProgressBunny, showProgressBunny = _e === void 0 ? false : _e;
    return (React__default['default'].createElement(StyledProgress, { variant: variant },
        showProgressBunny && (React__default['default'].createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React__default['default'].createElement(Icon$J, null))),
        React__default['default'].createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React__default['default'].createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled__default['default'].input.attrs({ type: "radio" })(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, styledSystem.space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$r;

var bunnyHeadMain = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2028%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%221%22%20y%3D%2219%22%20width%3D%2217%22%20height%3D%2211%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cg%20filter%3D%22url%28%23filter0_d%29%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z%22%20fill%3D%22url%28%23paint0_linear_bunnyhead_main%29%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate%282%29%22%3E%3Cpath%20d%3D%22M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M9%2014.5C9%2015.6046%208.55228%2016%208%2016C7.44772%2016%207%2015.6046%207%2014.5C7%2013.3954%207.44772%2013%208%2013C8.55228%2013%209%2013.3954%209%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3Cpath%20d%3D%22M18%2014.5C18%2015.6046%2017.5523%2016%2017%2016C16.4477%2016%2016%2015.6046%2016%2014.5C16%2013.3954%2016.4477%2013%2017%2013C17.5523%2013%2018%2013.3954%2018%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%20dy%3D%221%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%221%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3ClinearGradient%20id%3D%22paint0_linear_bunnyhead_main%22%20x1%3D%2214%22%20y1%3D%221%22%20x2%3D%2214%22%20y2%3D%2225%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var bunnyHeadMax = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2028%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%221%22%20y%3D%2219%22%20width%3D%2217%22%20height%3D%2211%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cg%20filter%3D%22url%28%23filter0_d%29%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z%22%20fill%3D%22url%28%23paint0_linear_bunnyhead_max%29%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22M11.5047%2016.0634C10.9435%2014.4456%208.79685%2014.4456%208.08131%2016.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M20.8894%2016.0634C20.3283%2014.4456%2018.1816%2014.4456%2017.4661%2016.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M14.7284%2017.4446C14.796%2018.3149%2014.4446%2020.0556%2012.498%2020.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M14.7457%2017.4446C14.6781%2018.3149%2015.0296%2020.0556%2016.9761%2020.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M13.4505%2020.0787C13.4505%2021.5097%2015.955%2021.5097%2015.955%2020.0787%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2228%22%20height%3D%2228%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%20dy%3D%221%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%221%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3ClinearGradient%20id%3D%22paint0_linear_bunnyhead_max%22%20x1%3D%2214%22%20y1%3D%221%22%20x2%3D%2214%22%20y2%3D%2225%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var bunnyButt = "data:image/svg+xml,%3Csvg%20width%3D%2215%22%20height%3D%2232%22%20viewBox%3D%220%200%2015%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M9.58803%2020.8649C7.72935%2021.3629%208.02539%2024.0334%208.76388%2026.7895C9.50238%2029.5456%2010.5812%2032.0062%2012.4399%2031.5082C14.2986%2031.0102%2015.2334%2028.0099%2014.4949%2025.2538C13.7564%2022.4978%2011.4467%2020.3669%209.58803%2020.8649Z%22%20fill%3D%22%230098A1%22%2F%3E%3Cpath%20d%3D%22M1%2024.4516C1%2020.8885%203.88849%2018%207.45161%2018H15V28H4.54839C2.58867%2028%201%2026.4113%201%2024.4516Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M6.11115%2017.2246C6.79693%2018.4124%205.77784%2019.3343%204.52793%2020.0559C3.27802%2020.7776%201.97011%2021.1992%201.28433%2020.0114C0.598546%2018.8236%201.1635%2017.1151%202.41341%2016.3935C3.66332%2015.6718%205.42537%2016.0368%206.11115%2017.2246Z%22%20fill%3D%22%2353DEE9%22%2F%3E%3Cpath%20d%3D%22M1.64665%2023.6601C0.285995%2025.0207%201.87759%2027.1854%203.89519%2029.203C5.91279%2031.2206%208.07743%2032.8122%209.43808%2031.4515C10.7987%2030.0909%2010.1082%2027.0252%208.09058%2025.0076C6.07298%2022.99%203.0073%2022.2994%201.64665%2023.6601Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3C%2Fsvg%3E";

var getCursorStyle = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return disabled ? "not-allowed" : "cursor";
};
var getBaseThumbStyles = function (_a) {
    var isMax = _a.isMax, disabled = _a.disabled;
    return "\n  -webkit-appearance: none;\n  background-image: url(" + (isMax ? bunnyHeadMax : bunnyHeadMain) + ");\n  cursor: " + getCursorStyle + ";\n  width: 24px;\n  height: 32px;\n  filter: " + (disabled ? "grayscale(100%)" : "none") + ";\n  transform: translate(-2px, -2px);\n  transition: 200ms transform;\n\n  &:hover {\n    transform: " + (disabled ? "scale(1) translate(-2px, -2px)" : "scale(1.1) translate(-3px, -3px)") + ";\n  }\n";
};
var SliderLabelContainer = styled__default['default'].div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  bottom: 0;\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 30px);\n"], ["\n  bottom: 0;\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 30px);\n"])));
var SliderLabel = styled__default['default'](Text)(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"], ["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"])), function (_a) {
    var progress = _a.progress;
    return progress;
});
var BunnyButt = styled__default['default'].div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  background: url(", ") no-repeat;\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  width: 15px;\n"], ["\n  background: url(", ") no-repeat;\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  width: 15px;\n"])), bunnyButt, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "grayscale(100%)" : "none");
});
var BunnySlider = styled__default['default'].div(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 14px);\n"], ["\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 14px);\n"])));
var StyledInput = styled__default['default'].input(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n  cursor: ", ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n\n    background-color: transparent;\n    border: 0;\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"], ["\n  cursor: ", ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n\n    background-color: transparent;\n    border: 0;\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"])), getCursorStyle, getBaseThumbStyles, getBaseThumbStyles, getBaseThumbStyles);
var BarBackground = styled__default['default'].div(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"], ["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return theme.colors[disabled ? "textDisabled" : "inputSecondary"];
});
var BarProgress = styled__default['default'].div(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 18px;\n"], ["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 18px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "grayscale(100%)" : "none");
});
var templateObject_1$q, templateObject_2$d, templateObject_3$8, templateObject_4$6, templateObject_5$4, templateObject_6$1, templateObject_7$1;

var Slider = function (_a) {
    var name = _a.name, min = _a.min, max = _a.max, value = _a.value, onValueChanged = _a.onValueChanged, valueLabel = _a.valueLabel, _b = _a.step, step = _b === void 0 ? "any" : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, props = __rest(_a, ["name", "min", "max", "value", "onValueChanged", "valueLabel", "step", "disabled"]);
    var handleChange = function (_a) {
        var target = _a.target;
        onValueChanged(parseFloat(target.value));
    };
    var progressPercentage = (value / max) * 100;
    var isMax = value === max;
    var progressWidth = isMax ? "calc(100% - 16px)" : progressPercentage + "%";
    var labelProgress = isMax ? "calc(100% - 12px)" : progressPercentage + "%";
    var displayValueLabel = isMax ? "MAX" : valueLabel;
    return (React__default['default'].createElement(Box, __assign({ position: "relative", height: "48px" }, props),
        React__default['default'].createElement(BunnyButt, { disabled: disabled }),
        React__default['default'].createElement(BunnySlider, null,
            React__default['default'].createElement(BarBackground, { disabled: disabled }),
            React__default['default'].createElement(BarProgress, { style: { width: progressWidth }, disabled: disabled }),
            React__default['default'].createElement(StyledInput, { name: name, type: "range", min: min, max: max, value: value, step: step, onChange: handleChange, isMax: isMax, disabled: disabled })),
        valueLabel && (React__default['default'].createElement(SliderLabelContainer, null,
            React__default['default'].createElement(SliderLabel, { progress: labelProgress }, displayValueLabel)))));
};

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = styled.keyframes(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = styled.keyframes(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled__default['default'].div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, styledSystem.layout, styledSystem.space);
var Pulse = styled__default['default'](Root)(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled__default['default'](Root)(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default['default'].createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default['default'].createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$p, templateObject_2$c, templateObject_3$7, templateObject_4$5, templateObject_5$3;

var Icon$s = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 256 256" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M166.898 204.279C172.402 190.795 170.197 176.127 166.942 163.633C164.747 155.208 156.522 149.043 143.339 146.339C130.289 143.662 113.23 144.62 95.212 149.658C77.1941 154.696 61.9863 162.761 52.0088 171.877C41.9295 181.085 37.8164 190.7 40.0117 199.126C43.2669 211.619 48.4857 225.444 59.7919 234.228C70.9463 242.894 88.7701 247.193 118.461 238.891C148.152 230.589 161.467 217.582 166.898 204.279ZM119.268 241.986C179.746 225.075 176.514 188.072 169.929 162.798C164.622 142.43 131.106 136.301 94.4056 146.563C57.7053 156.825 31.7183 179.593 37.0251 199.961C43.6102 225.235 58.7891 258.897 119.268 241.986Z", fill: "#464649" }),
        React__default['default'].createElement("path", { d: "M155.801 175.68C158.653 186.628 180.351 181.576 214.977 171.894C249.604 162.212 257.158 150.578 254.305 139.63C251.453 128.682 244.685 121.053 216.678 128.884C182.051 138.566 152.948 164.732 155.801 175.68Z", fill: "#606063" }),
        React__default['default'].createElement("path", { d: "M159.97 178.737L175.437 178.709C178.284 178.704 178.523 174.429 177.474 164.815C176.82 158.816 173.457 154.101 171.27 155.477L159.942 163.875L159.97 178.737Z", fill: "#464649" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M162.261 177.996C160.059 177.319 159.158 176.266 158.788 174.845C158.644 174.296 158.636 173.375 159.104 171.965C159.566 170.568 160.432 168.889 161.754 166.98C164.397 163.161 168.612 158.775 174.091 154.332C185.037 145.456 200.6 136.7 217.484 131.979C231.34 128.104 239.201 128.297 243.777 130.191C248.018 131.946 250.005 135.425 251.319 140.465C251.901 142.7 251.928 144.848 251.283 146.962C250.634 149.091 249.235 151.411 246.622 153.858C241.312 158.83 231.342 163.998 214.171 168.799C196.798 173.657 182.967 177.263 173.149 178.336C168.216 178.875 164.644 178.728 162.261 177.996ZM214.977 171.894C180.351 181.576 158.653 186.628 155.801 175.68C152.948 164.732 182.051 138.566 216.678 128.884C244.685 121.053 251.453 128.682 254.305 139.63C257.158 150.578 249.604 162.212 214.977 171.894Z", fill: "#464649" }),
        React__default['default'].createElement("path", { d: "M169.925 161.024C176.511 186.298 179.743 223.301 119.264 240.212C58.7859 257.123 43.607 223.461 37.022 198.187C31.7151 177.819 57.7022 155.052 94.4024 144.789C131.103 134.527 164.619 140.656 169.925 161.024Z", fill: "#606063" }),
        React__default['default'].createElement("path", { d: "M62.2322 217.512C45.5076 212.12 42.4613 203.795 40.3848 196.052L41.9594 211.275L50.2352 225.685L64.4374 238.481L80.947 244.327C82.4065 243.612 89.4986 243.299 83.1029 242.028C76.7073 240.758 72.7474 234.756 69.9914 231.378C68.2638 226.484 67.7365 219.287 62.2322 217.512Z", fill: "#464649" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M166.895 202.505C172.399 189.021 170.194 174.353 166.939 161.86C164.744 153.434 156.519 147.269 143.336 144.565C130.286 141.888 113.227 142.846 95.2088 147.884C77.1909 152.922 61.9831 160.987 52.0056 170.103C41.9263 179.311 37.8132 188.926 40.0086 197.352C43.2637 209.845 48.4825 223.67 59.7887 232.454C70.9431 241.12 88.7669 245.419 118.458 237.117C148.149 228.815 161.464 215.809 166.895 202.505ZM119.264 240.212C179.743 223.301 176.511 186.298 169.925 161.024C164.619 140.656 131.103 134.527 94.4024 144.789C57.7022 155.052 31.7151 177.819 37.022 198.187C43.607 223.461 58.7859 257.123 119.264 240.212Z", fill: "#464649" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M164.233 181.686C165.018 182.322 165.157 183.497 164.543 184.311C162.98 186.382 161.187 188.422 159.188 190.412C158.469 191.128 157.327 191.104 156.636 190.36C155.945 189.615 155.968 188.431 156.687 187.716C158.576 185.834 160.252 183.925 161.7 182.007C162.314 181.193 163.448 181.05 164.233 181.686ZM57.4215 216.239C57.6566 215.235 58.6323 214.619 59.6008 214.863C73.2899 218.308 91.7045 217.793 111.035 212.388C120.262 209.808 128.779 206.37 136.271 202.374C137.157 201.901 138.245 202.263 138.701 203.181C139.157 204.099 138.809 205.226 137.923 205.699C130.195 209.821 121.438 213.352 111.976 215.998C92.2044 221.527 73.1589 222.124 58.7494 218.497C57.7809 218.253 57.1863 217.242 57.4215 216.239Z", fill: "#979797" }),
        React__default['default'].createElement("path", { d: "M159.836 163.292C164.405 180.829 141.059 195.381 109.857 204.106C78.655 212.831 51.4793 212.682 46.8428 194.887C42.2064 177.092 65.6193 162.798 96.8214 154.074C128.024 145.349 155.266 145.755 159.836 163.292Z", fill: "#464649" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M145.831 183.549C154.508 176.998 157.462 170.578 155.854 164.406C154.245 158.233 148.575 154.225 137.894 153.086C127.333 151.96 113.281 153.898 97.8965 158.2C82.4985 162.506 69.3986 168.094 60.8132 174.54C52.1526 181.043 49.1801 187.461 50.825 193.774C52.4698 200.087 58.1557 204.083 68.7987 205.189C79.3491 206.285 93.384 204.285 108.782 199.98C124.166 195.678 137.251 190.028 145.831 183.549ZM110.264 205.113C141.466 196.388 164.405 180.829 159.836 163.292C155.266 145.755 128.024 145.349 96.8214 154.074C65.6193 162.798 42.2064 177.092 46.8428 194.887C51.4793 212.682 79.0614 213.838 110.264 205.113Z", fill: "#737373" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M103.877 181.153C89.0555 185.297 76.4977 192.072 68.1169 199.619C67.3647 200.297 66.2249 200.214 65.5711 199.434C64.9173 198.655 64.997 197.474 65.7492 196.796C74.622 188.806 87.7006 181.803 102.936 177.543C106.034 176.676 109.107 175.955 112.134 175.375C113.114 175.187 114.056 175.858 114.237 176.873C114.419 177.889 113.771 178.864 112.792 179.052C109.86 179.614 106.881 180.313 103.877 181.153ZM123.847 175.658C123.792 174.627 124.554 173.745 125.549 173.688C132.378 173.297 138.774 173.682 144.424 174.797C145.403 174.991 146.046 175.97 145.86 176.984C145.673 177.999 144.728 178.664 143.749 178.471C138.431 177.421 132.333 177.045 125.749 177.422C124.753 177.479 123.902 176.69 123.847 175.658Z", fill: "#606063" })));
};

var Icon$r = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React__default['default'].createElement("svg", { width: "128", height: "128", viewBox: "0 0 128 128", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default['default'].createElement("path", { d: "M56.7204 37.5858C56.7204 45.3822 58.0271 54.1169 60.2906 60.8591C61.4246 64.2369 62.7705 67.0285 64.249 68.946C65.742 70.8826 67.1906 71.7103 68.5307 71.7103C71.1919 71.7103 74.4165 70.5307 77.8384 68.3524C81.235 66.1902 84.7001 63.1234 87.8127 59.5481C94.0844 52.3439 98.6784 43.3694 98.6784 35.942C98.6784 28.1653 97.1567 21.2636 93.9931 16.3543C90.8793 11.5222 86.1363 8.54284 79.3564 8.54284C72.6009 8.54284 66.9825 11.9157 63.0072 17.2564C59.0174 22.6164 56.7204 29.9263 56.7204 37.5858Z", fill: "#FEDC90", stroke: "#D1884F", strokeWidth: "2.89134" }),
            React__default['default'].createElement("path", { d: "M32.7442 66.7859C39.4364 62.9222 47.2575 60.5211 53.8454 59.9252C57.1411 59.6272 60.0564 59.7876 62.336 60.3933C64.6294 61.0028 66.1079 62.0118 66.8368 63.2742C69.6116 68.0804 69.9429 76.4856 67.7501 84.8501C65.5656 93.1829 61.0085 100.957 54.6069 104.653C47.9434 108.5 40.9505 110.185 34.8292 109.454C28.7533 108.729 23.476 105.626 20.0729 99.7316C16.6658 93.8305 16.5364 87.5528 18.8757 81.7754C21.228 75.9659 26.1018 70.6209 32.7442 66.7859Z", fill: "#D1884F", stroke: "#633001", strokeWidth: "2.89134" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M73.6122 7.76013C69.4145 8.86483 64.8207 11.0867 61.24 16.1556C53.2804 27.4231 51.7006 41.9592 58.5495 60.7386C65.3984 79.518 63.3431 89.9236 56.0487 98.3189C48.7543 106.714 29.475 108.685 23.3482 101.929C21.8481 100.274 17.4954 97.4588 20.3675 102.54C23.2397 107.622 30.7527 111.748 39.59 111.748C48.4273 111.748 55.5943 108.146 61.958 101.338C68.3217 94.5306 74.292 78.3883 68.3268 61.7709C60.6331 40.3385 62.8311 27.508 68.2893 19.7815C71.0879 15.8198 75.5453 12.3629 78.6077 10.5868C81.8233 8.72183 84.8797 8.42294 86.8682 8.42294C83.3332 6.65548 77.8099 6.65542 73.6122 7.76013Z", fill: "#633001" }))));
};

var rotate = styled.keyframes(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var float = styled.keyframes(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container$3 = styled__default['default'].div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled__default['default'](Icon$r)(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate);
var FloatingPanIcon = styled__default['default'](Icon$s)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React__default['default'].createElement(Container$3, null,
        React__default['default'].createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" }),
        React__default['default'].createElement(FloatingPanIcon, { width: size + "px" })));
};
var templateObject_1$o, templateObject_2$b, templateObject_3$6, templateObject_4$4, templateObject_5$2;

var StepperWrapper = styled__default['default'].div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n"])));
var Stepper = function (_a) {
    var children = _a.children;
    var numberOfSteps = React__default['default'].Children.count(children);
    return (React__default['default'].createElement(StepperWrapper, null, React__default['default'].Children.map(children, function (child) {
        if (React__default['default'].isValidElement(child)) {
            return React__default['default'].cloneElement(child, { numberOfSteps: numberOfSteps });
        }
        return child;
    })));
};
var templateObject_1$n;

var getStepNumberFontColor = function (_a) {
    var theme = _a.theme, status = _a.status;
    if (status === "past") {
        return theme.colors.success;
    }
    if (status === "current") {
        return theme.colors.invertedContrast;
    }
    return theme.colors.textDisabled;
};
var StyledStep = styled__default['default'](Flex)(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  ", " {\n    justify-content: center;\n  }\n"], ["\n  ", " {\n    justify-content: center;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Connector = styled__default['default'].div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  position: absolute;\n  width: 4px;\n  height: 100%;\n  top: 50%;\n  left: calc(50% - 2px);\n  background-color: ", ";\n"], ["\n  position: absolute;\n  width: 4px;\n  height: 100%;\n  top: 50%;\n  left: calc(50% - 2px);\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme, status = _a.status;
    return theme.colors[status === "past" ? "success" : "textDisabled"];
});
var ChildrenWrapper = styled__default['default'](Box)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  ", " {\n    visibility: ", ";\n  }\n"], ["\n  ", " {\n    visibility: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var isVisible = _a.isVisible;
    return (isVisible ? "visible" : "hidden");
});
var ChildrenLeftWrapper = styled__default['default'](ChildrenWrapper)(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  display: none;\n  ", " {\n    display: block;\n    margin-right: 16px;\n  }\n"], ["\n  display: none;\n  ", " {\n    display: block;\n    margin-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ChildrenRightWrapper = styled__default['default'](ChildrenWrapper)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  margin-left: 8px;\n  ", " {\n    margin-left: 16px;\n  }\n"], ["\n  margin-left: 8px;\n  ", " {\n    margin-left: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Wrapper$2 = styled__default['default'].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n"])));
var StepNumber = styled__default['default'].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  z-index: 1;\n  ", " {\n    font-size: 40px;\n    width: 80px;\n    height: 80px;\n  }\n"], ["\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  z-index: 1;\n  ", " {\n    font-size: 40px;\n    width: 80px;\n    height: 80px;\n  }\n"])), function (_a) {
    var theme = _a.theme, status = _a.status;
    return theme.colors[status === "current" ? "secondary" : "invertedContrast"];
}, function (_a) {
    var theme = _a.theme, status = _a.status;
    return (status === "past" ? theme.colors.success : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.circle;
}, getStepNumberFontColor, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
/**
 * ChildrenLeftWrapper and ChildrenRightWrapper are used on the non mobile version, to force the alternate layout.
 * One of the child is hidden based on the step number.
 */
var Step = function (_a) {
    var index = _a.index, status = _a.status, _b = _a.numberOfSteps, numberOfSteps = _b === void 0 ? 0 : _b, children = _a.children;
    var isIndexPair = index % 2 === 0;
    return (React__default['default'].createElement(StyledStep, { mb: index < numberOfSteps - 1 ? "16px" : 0 },
        React__default['default'].createElement(ChildrenLeftWrapper, { isVisible: !isIndexPair }, children),
        React__default['default'].createElement(Wrapper$2, null,
            React__default['default'].createElement(StepNumber, { status: status }, index + 1),
            index < numberOfSteps - 1 && React__default['default'].createElement(Connector, { status: status })),
        React__default['default'].createElement(ChildrenRightWrapper, { isVisible: isIndexPair }, children)));
};
var templateObject_1$m, templateObject_2$a, templateObject_3$5, templateObject_4$3, templateObject_5$1, templateObject_6, templateObject_7;

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArray([], data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArray([], action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            columnCopy = state.columns.map(function (column) {
                if (state.sortColumn === column.name) {
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: column.sorted.asc,
                        } });
                }
                return column;
            });
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = React.useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = React.useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = React.useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = React.useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop__default['default'],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop__default['default'],
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = React.useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = React.useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    React.useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = React.useMemo(function () {
        return __spreadArray([], state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    React.useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var Wrapper$1 = styled__default['default'](Flex)(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  border-bottom: 2px solid ", ";\n  overflow-x: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"], ["\n  border-bottom: 2px solid ", ";\n  overflow-x: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var Inner$1 = styled__default['default'](Flex)(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  ", " {\n    flex-grow: 0;\n  }\n"], ["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  ", " {\n    flex-grow: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, onItemClick = _a.onItemClick, children = _a.children;
    return (React__default['default'].createElement(Wrapper$1, { p: ["0 4px", "0 16px"] },
        React__default['default'].createElement(Inner$1, null, React.Children.map(children, function (child, index) {
            return React.cloneElement(child, {
                isActive: activeIndex === index,
                onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            });
        }))));
};
var templateObject_1$l, templateObject_2$9;

var StyledTab = styled__default['default'].button(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: 8px;\n  border-radius: 16px 16px 0 0;\n  color: ", ";\n  background-color: ", ";\n\n  ", " {\n    flex-grow: 0;\n    padding: 8px 12px;\n  }\n"], ["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: 8px;\n  border-radius: 16px 16px 0 0;\n  color: ", ";\n  background-color: ", ";\n\n  ", " {\n    flex-grow: 0;\n    padding: 8px 12px;\n  }\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
}, function (_a) {
    var theme = _a.theme, bgColor = _a.bgColor;
    return theme.colors[bgColor];
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var templateObject_1$k;

var Tab = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, onClick = _a.onClick, children = _a.children;
    return (React__default['default'].createElement(StyledTab, { onClick: onClick, bgColor: isActive ? "textSubtle" : "input", color: isActive ? "backgroundAlt" : "textSubtle" },
        React__default['default'].createElement(Text, { fontWeight: 600, color: isActive ? "backgroundAlt" : "textSubtle" }, children)));
};

var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    SUCCESS: "success",
    TEXTDISABLED: "textDisabled",
    TEXTSUBTLE: "textSubtle",
    BINANCE: "binance",
    FAILURE: "failure",
};
var scales$1 = {
    MD: "md",
    SM: "sm",
};

var _a$1, _b;
var scaleVariants = (_a$1 = {},
    _a$1[scales$1.MD] = {
        height: "28px",
        padding: "0 8px",
        fontSize: "14px",
    },
    _a$1[scales$1.SM] = {
        height: "24px",
        padding: "0 4px",
        fontSize: "12px",
    },
    _a$1);
var styleVariants = (_b = {},
    _b[variants.PRIMARY] = {
        backgroundColor: "primary",
    },
    _b[variants.SECONDARY] = {
        backgroundColor: "secondary",
    },
    _b[variants.SUCCESS] = {
        backgroundColor: "success",
    },
    _b[variants.TEXTDISABLED] = {
        backgroundColor: "textDisabled",
    },
    _b[variants.TEXTSUBTLE] = {
        backgroundColor: "textSubtle",
    },
    _b[variants.BINANCE] = {
        backgroundColor: "binance",
    },
    _b[variants.FAILURE] = {
        backgroundColor: "failure",
    },
    _b);

var getOutlineStyles = function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variantKey = _b === void 0 ? variants.PRIMARY : _b;
    if (outline) {
        var themeColorKey = styleVariants[variantKey].backgroundColor;
        var color = theme.colors[themeColorKey];
        return "\n      color: " + color + ";\n      background: transparent;\n      border: 2px solid " + color + ";\n    ";
    }
    return "";
};
var StyledTag = styled__default['default'].div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n  ", "\n  ", "\n\n  ", "\n"], ["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ",
    "\n  ",
    "\n  ", "\n\n  ", "\n"])), styledSystem.variant({
    prop: "scale",
    variants: scaleVariants,
}), styledSystem.variant({
    variants: styleVariants,
}), styledSystem.space, getOutlineStyles);
var templateObject_1$j;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React__default['default'].createElement(StyledTag, __assign({}, props),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5em",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5em",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    scale: scales$1.MD,
    outline: false,
};

var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px",
    },
    md: {
        handleHeight: "32px",
        handleWidth: "32px",
        handleLeft: "4px",
        handleTop: "4px",
        checkedLeft: "calc(100% - 36px)",
        toggleHeight: "40px",
        toggleWidth: "72px",
    },
};
var getScale = function (property) { return function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$4.MD : _b;
    return scaleKeyValues[scale][property];
}; };
var Handle = styled__default['default'].div(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
}, getScale("handleHeight"), getScale("handleLeft"), getScale("handleTop"), getScale("handleWidth"));
var Input = styled__default['default'].input(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, getScale("checkedLeft"), Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled__default['default'].div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale("toggleHeight"), getScale("toggleWidth"));
var templateObject_1$i, templateObject_2$8, templateObject_3$4;

var scales = {
    SM: "sm",
    MD: "md",
};

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales.MD : _b, props = __rest(_a, ["checked", "scale"]);
    var isChecked = !!checked;
    return (React__default['default'].createElement(StyledToggle, { checked: isChecked, scale: scale },
        React__default['default'].createElement(Input, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React__default['default'].createElement(Handle, { scale: scale })));
};
Toggle.defaultProps = {
    scale: scales.MD,
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries$1 = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #CB6E6E, 0px 0px 0px 4px #CB6E6E",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries$1,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = React.useState(function () {
        return Object.keys(mediaQueries).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function (size) {
            var mql = window.matchMedia(mediaQueries[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = React.useCallback(function () {
        return debounce__default['default'](function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    React.useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    React.useEffect(function () {
        var pattern = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
        ];
        var currentIndex = 0;
        var onKeyUpHandler = function (event) {
            var key = event.key;
            // is key in correct order otherwise reset
            if (key !== pattern[currentIndex]) {
                currentIndex = 0;
                return;
            }
            currentIndex += 1;
            if (pattern.length === currentIndex) {
                currentIndex = 0;
                matchedCodeHandler();
            }
        };
        document.addEventListener("keyup", onKeyUpHandler);
        return function () { return document.removeEventListener("keyup", onKeyUpHandler); };
    }, [matchedCodeHandler]);
};

var Arrow = styled__default['default'].div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"], ["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.tooltip.background;
});
var StyledTooltip = styled__default['default'].div(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  z-index: 10;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"], ["\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  z-index: 10;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.tooltip.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.tooltip.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.tooltip.boxShadow;
}, Arrow, Arrow, Arrow, Arrow);
var templateObject_1$h, templateObject_2$7;

function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
var useTooltip = function (content, placement, trigger, arrowPadding, tooltipPadding, tooltipOffset) {
    if (placement === void 0) { placement = "auto"; }
    if (trigger === void 0) { trigger = "hover"; }
    var _a = React.useState(null), targetElement = _a[0], setTargetElement = _a[1];
    var _b = React.useState(null), tooltipElement = _b[0], setTooltipElement = _b[1];
    var _c = React.useState(null), arrowElement = _c[0], setArrowElement = _c[1];
    var _d = React.useState(false), visible = _d[0], setVisible = _d[1];
    var hideTooltip = React.useCallback(function (e) {
        e.stopPropagation();
        e.preventDefault();
        setVisible(false);
    }, []);
    var showTooltip = React.useCallback(function (e) {
        e.stopPropagation();
        e.preventDefault();
        setVisible(true);
    }, []);
    var toggleTooltip = React.useCallback(function (e) {
        e.stopPropagation();
        setVisible(!visible);
    }, [visible]);
    // Trigger = hover
    React.useEffect(function () {
        if (targetElement === null || trigger !== "hover")
            return undefined;
        if (isTouchDevice()) {
            targetElement.addEventListener("touchstart", showTooltip);
            targetElement.addEventListener("touchend", hideTooltip);
        }
        else {
            targetElement.addEventListener("mouseenter", showTooltip);
            targetElement.addEventListener("mouseleave", hideTooltip);
        }
        return function () {
            targetElement.removeEventListener("touchstart", showTooltip);
            targetElement.removeEventListener("touchend", hideTooltip);
            targetElement.removeEventListener("mouseenter", showTooltip);
            targetElement.removeEventListener("mouseleave", showTooltip);
        };
    }, [trigger, targetElement, hideTooltip, showTooltip]);
    // Keep tooltip open when cursor moves from the targetElement to the tooltip
    React.useEffect(function () {
        if (tooltipElement === null || trigger !== "hover")
            return undefined;
        tooltipElement.addEventListener("mouseenter", showTooltip);
        tooltipElement.addEventListener("mouseleave", hideTooltip);
        return function () {
            tooltipElement.removeEventListener("mouseenter", showTooltip);
            tooltipElement.removeEventListener("mouseleave", hideTooltip);
        };
    }, [trigger, tooltipElement, hideTooltip, showTooltip]);
    // Trigger = click
    React.useEffect(function () {
        if (targetElement === null || trigger !== "click")
            return undefined;
        targetElement.addEventListener("click", toggleTooltip);
        return function () { return targetElement.removeEventListener("click", toggleTooltip); };
    }, [trigger, targetElement, visible, toggleTooltip]);
    // Handle click outside
    React.useEffect(function () {
        if (trigger !== "click")
            return undefined;
        var handleClickOutside = function (_a) {
            var target = _a.target;
            if (target instanceof Node) {
                if (tooltipElement != null &&
                    targetElement != null &&
                    !tooltipElement.contains(target) &&
                    !targetElement.contains(target)) {
                    setVisible(false);
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () { return document.removeEventListener("mousedown", handleClickOutside); };
    }, [trigger, targetElement, tooltipElement]);
    // Trigger = focus
    React.useEffect(function () {
        if (targetElement === null || trigger !== "focus")
            return undefined;
        targetElement.addEventListener("focus", showTooltip);
        targetElement.addEventListener("blur", hideTooltip);
        return function () {
            targetElement.removeEventListener("focus", showTooltip);
            targetElement.removeEventListener("blur", hideTooltip);
        };
    }, [trigger, targetElement, showTooltip, hideTooltip]);
    // On small screens Popper.js tries to squeeze the tooltip to available space without overflowing beyound the edge
    // of the screen. While it works fine when the element is in the middle of the screen it does not handle well the
    // cases when the target element is very close to the edge of the screen - no margin is applied between the tooltip
    // and the screen edge.
    // preventOverflow mitigates this behaviour, default 16px paddings on left and right solve the problem for all screen sizes
    // that we support.
    // Note that in the farm page where there are tooltips very close to the edge of the screen this padding works perfectly
    // even on the iPhone 5 screen (320px wide), BUT in the storybook with the contrived example ScreenEdges example
    // iPhone 5 behaves differently overflowing beyound the edge. All paddings are identical so I have no idea why it is,
    // and fixing that seems like a very bad use of time.
    var _e = reactPopper.usePopper(targetElement, tooltipElement, {
        placement: placement,
        modifiers: [
            {
                name: "arrow",
                options: { element: arrowElement, padding: arrowPadding || 16 },
            },
            { name: "offset", options: { offset: tooltipOffset || [0, 10] } },
            { name: "preventOverflow", options: { padding: tooltipPadding || { left: 16, right: 16 } } },
        ],
    }), styles = _e.styles, attributes = _e.attributes;
    var tooltip = (React__default['default'].createElement(StyledTooltip, __assign({ ref: setTooltipElement, style: styles.popper }, attributes.popper),
        content,
        React__default['default'].createElement(Arrow, { ref: setArrowElement, style: styles.arrow })));
    return {
        targetRef: setTargetElement,
        tooltip: tooltip,
        tooltipVisible: visible,
    };
};

var ModalHeader = styled__default['default'].div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  align-items: center;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n"], ["\n  align-items: center;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n"])), function (_a) {
    var background = _a.background;
    return background || "transparent";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
});
var ModalTitle = styled__default['default'](Flex)(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var ModalBody = styled__default['default'](Flex)(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  flex-direction: column;\n"], ["\n  flex-direction: column;\n"])));
var ModalCloseButton = function (_a) {
    var onDismiss = _a.onDismiss;
    return (React__default['default'].createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
        React__default['default'].createElement(Icon$19, { color: "primary" })));
};
var ModalBackButton = function (_a) {
    var onBack = _a.onBack;
    return (React__default['default'].createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
        React__default['default'].createElement(Icon$1s, { color: "primary" })));
};
var ModalContainer = styled__default['default'](Box)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n\n  ", " {\n    width: auto;\n    min-width: ", ";\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n\n  ", " {\n    width: auto;\n    min-width: ", ";\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
}, function (_a) {
    var minWidth = _a.minWidth;
    return minWidth;
});
var templateObject_1$g, templateObject_2$6, templateObject_3$3, templateObject_4$2;

var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c, _d = _a.headerBackground, headerBackground = _d === void 0 ? "transparent" : _d, _e = _a.minWidth, minWidth = _e === void 0 ? "320px" : _e, props = __rest(_a, ["title", "onDismiss", "onBack", "children", "hideCloseButton", "bodyPadding", "headerBackground", "minWidth"]);
    return (React__default['default'].createElement(ModalContainer, __assign({ minWidth: minWidth }, props),
        React__default['default'].createElement(ModalHeader, { background: headerBackground },
            React__default['default'].createElement(ModalTitle, null,
                onBack && React__default['default'].createElement(ModalBackButton, { onBack: onBack }),
                React__default['default'].createElement(Heading, null, title)),
            !hideCloseButton && React__default['default'].createElement(ModalCloseButton, { onDismiss: onDismiss })),
        React__default['default'].createElement(ModalBody, { p: bodyPadding }, children)));
};

var Overlay = styled__default['default'].div.attrs({ role: "presentation" })(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$f;

var ModalWrapper = styled__default['default'].div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = React.createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = React.useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React__default['default'].createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default['default'].createElement(ModalWrapper, null,
            React__default['default'].createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React__default['default'].isValidElement(modalNode) &&
                React__default['default'].cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$e;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = React.useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = React.useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    React.useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
        React__default['default'].createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })));
};

var Icon$p = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$o = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$n = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$m = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$l = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$k = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo$2 = function (_a) {
    var isDark = _a.isDark, props = __rest(_a, ["isDark"]);
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 205 26" }, props), isDark ? (React__default['default'].createElement("image", { width: "183", height: "32", href: '/images/logo-nav-dark.png' })) : (React__default['default'].createElement("image", { width: "175", height: "32", href: '/images/logo-nav-white.png' }))));
};

var Icon$i = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })));
};

var Icon$e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M3.18731 5.68438C2.44993 5.52604 2.44993 4.47393 3.18731 4.31559L5.3203 3.85755C5.58957 3.79973 5.79991 3.58939 5.85774 3.32012L6.31577 1.18713C6.47411 0.449748 7.52622 0.449751 7.68457 1.18713L8.1426 3.32012C8.20042 3.58939 8.41076 3.79973 8.68003 3.85755L10.813 4.31559C11.5504 4.47393 11.5504 5.52604 10.813 5.68438L8.68003 6.14241C8.41076 6.20024 8.20042 6.41058 8.1426 6.67985L7.68457 8.81284C7.52622 9.55022 6.47411 9.55022 6.31577 8.81284L5.85774 6.67985C5.79991 6.41058 5.58957 6.20024 5.3203 6.14241L3.18731 5.68438Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.99998C15.866 2.99998 19 6.13399 19 9.99998C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 9.99998C5 9.4477 4.55228 8.99998 4 8.99998C3.44772 8.99998 3 9.4477 3 9.99998C3 12.8894 4.36163 15.4608 6.47822 17.1075L5.58579 18C5.21071 18.3751 5 18.8838 5 19.4142V21.5C5 22.3284 5.67157 23 6.5 23H17.5C18.3284 23 19 22.3284 19 21.5V19.4142C19 18.8838 18.7893 18.3751 18.4142 18L17.5218 17.1075C19.6384 15.4608 21 12.8894 21 9.99998C21 5.02942 16.9706 0.999985 12 0.999985C11.4477 0.999985 11 1.4477 11 1.99998C11 2.55227 11.4477 2.99998 12 2.99998ZM12 19C10.6564 19 9.38156 18.7056 8.23649 18.1777L7 19.4142L7 21H17V19.4142L15.7635 18.1777C14.6184 18.7056 13.3436 19 12 19Z" })));
};

var Icon$d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React__default['default'].createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React__default['default'].createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React__default['default'].createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React__default['default'].createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React__default['default'].createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React__default['default'].createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React__default['default'].createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$c = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 5H17C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5H5C3.9 5 3 5.9 3 7V8C3 10.55 4.92 12.63 7.39 12.94C8.02 14.44 9.37 15.57 11 15.9V19H8C7.44772 19 7 19.4477 7 20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19H13V15.9C14.63 15.57 15.98 14.44 16.61 12.94C19.08 12.63 21 10.55 21 8V7C21 5.9 20.1 5 19 5ZM5 8V7H7V10.82C5.84 10.4 5 9.3 5 8ZM12 14C10.35 14 9 12.65 9 11V5H15V11C15 12.65 13.65 14 12 14ZM19 8C19 9.3 18.16 10.4 17 10.82V7H19V8Z" })));
};

var Icon$b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$9 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$8 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$q,
    GroupsIcon: Icon$p,
    HamburgerIcon: Icon$o,
    HamburgerCloseIcon: Icon$n,
    HomeIcon: Icon$m,
    IfoIcon: Icon$l,
    InfoIcon: Icon$k,
    LanguageIcon: Icon$j,
    LogoIcon: Logo$2,
    MoonIcon: Icon$i,
    MoreIcon: Icon$h,
    NftIcon: Icon$g,
    PoolIcon: Icon$f,
    PredictionsIcon: Icon$e,
    SunIcon: Icon$d,
    TeamBattleIcon: Icon$c,
    TelegramIcon: Icon$b,
    TicketIcon: Icon$a,
    TradeIcon: Icon$9,
    TwitterIcon: Icon$8
});

var MenuButton = styled__default['default'](Button)(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$d;

var blink = styled.keyframes(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  0%,  100% { transform: scaleY(1); } \n  50% { transform:  scaleY(0.1); } \n"], ["\n  0%,  100% { transform: scaleY(1); } \n  50% { transform:  scaleY(0.1); } \n"])));
var StyledLink = styled__default['default'](reactRouterDom.Link)(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n  .right-eye {\n    animation-delay: 20ms;\n  }\n  &:hover {\n    .left-eye,\n    .right-eye {\n      transform-origin: center 60%;\n      animation-name: ", ";\n      animation-duration: 350ms;\n      animation-iteration-count: 1;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n  .right-eye {\n    animation-delay: 20ms;\n  }\n  &:hover {\n    .left-eye,\n    .right-eye {\n      transform-origin: center 60%;\n      animation-name: ", ";\n      animation-duration: 350ms;\n      animation-iteration-count: 1;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, blink);
var Logo = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Icon$$, { className: "mobile-icon" }),
        React__default['default'].createElement(Logo$2, { className: "desktop-icon", isDark: isDark })));
    return (React__default['default'].createElement(Flex, null,
        React__default['default'].createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React__default['default'].createElement(Icon$n, { width: "24px", color: "textSubtle" })) : (React__default['default'].createElement(Icon$o, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React__default['default'].createElement(StyledLink, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React__default['default'].createElement(StyledLink, { to: href, "aria-label": "Pancake home page" }, innerLogo))));
};
var Logo$1 = React__default['default'].memo(Logo, function (prev, next) { return prev.isPushed === next.isPushed && prev.isDark === next.isDark; });
var templateObject_1$c, templateObject_2$5;

var status = {
    LIVE: {
        text: "LIVE",
        color: "failure",
    },
    SOON: {
        text: "SOON",
        color: "warning",
    },
    NEW: {
        text: "NEW",
        color: "success",
    },
};
var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.pancakeswap.finance",
            },
            {
                label: "Liquidity",
                href: "https://exchange.pancakeswap.finance/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
        status: status.LIVE,
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
    },
    {
        label: "NFT",
        icon: "NftIcon",
        href: "/nft",
    },
    {
        label: "Team Battle",
        icon: "TeamBattleIcon",
        href: "/competition",
        status: status.SOON,
    },
    {
        label: "Profile & Teams",
        icon: "GroupsIcon",
        items: [
            {
                label: "Leaderboard",
                href: "/teams",
                status: status.NEW,
            },
            {
                label: "YourProfile",
                href: "/",
            },
        ],
        calloutClass: "rainbow",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://pancakeswap.info",
            },
            {
                label: "Tokens",
                href: "https://pancakeswap.info/tokens",
            },
            {
                label: "Pairs",
                href: "https://pancakeswap.info/pairs",
            },
            {
                label: "Accounts",
                href: "https://pancakeswap.info/accounts",
            },
        ],
    },
    {
        label: "IFO",
        icon: "IfoIcon",
        items: [
            {
                label: "Next",
                href: "/ifo",
            },
            {
                label: "History",
                href: "/ifo/history",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            {
                label: "Voting",
                href: "https://voting.pancakeswap.finance",
            },
            {
                label: "Github",
                href: "https://github.com/pancakeswap",
            },
            {
                label: "Docs",
                href: "https://docs.pancakeswap.finance",
            },
            {
                label: "Blog",
                href: "https://pancakeswap.medium.com",
            },
        ],
    },
];
var socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "English",
                href: "https://t.me/pancakeswap",
            },
            {
                label: "Announcements",
                href: "https://t.me/PancakeSwapAnn",
            }
        ],
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/DarumaWallet",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = styled.keyframes(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled__default['default'].div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled__default['default'].div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var LinkStatus = styled__default['default'](Text)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"], ["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.radii.default;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
});
var LinkLabelMemo = React__default['default'].memo(LinkLabel, function (prev, next) { return prev.isPushed === next.isPushed; });
var templateObject_1$b, templateObject_2$4, templateObject_3$2, templateObject_4$1;

var Container$2 = styled__default['default'].div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled__default['default'].div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className, isActive = _a.isActive;
    var _c = React.useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React__default['default'].createElement(Container$2, null,
        React__default['default'].createElement(MenuEntry, { onClick: handleClick, className: className, isActive: isActive },
            icon,
            React__default['default'].createElement(LinkLabelMemo, { isPushed: isPushed }, label),
            isOpen ? React__default['default'].createElement(Icon$1p, null) : React__default['default'].createElement(Icon$1q, null)),
        React__default['default'].createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React__default['default'].Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var Accordion$1 = React__default['default'].memo(Accordion, function (prev, next) { return prev.isPushed === next.isPushed && prev.isActive === next.isActive; });
var templateObject_1$a, templateObject_2$3;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : reactRouterDom.NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React__default['default'].createElement(Tag, __assign({}, props, otherProps));
};

var Icons$3 = IconModule;
var Container$1 = styled__default['default'].div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = reactRouterDom.useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React__default['default'].createElement(Container$1, null, links.map(function (entry) {
        var Icon = Icons$3[entry.icon];
        var iconElement = React__default['default'].createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            var itemsMatchIndex = entry.items.findIndex(function (item) { return item.href === location.pathname; });
            var initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
            return (React__default['default'].createElement(Accordion$1, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: initialOpenState, className: calloutClass, isActive: entry.items.some(function (item) { return item.href === location.pathname; }) }, isPushed &&
                entry.items.map(function (item) { return (React__default['default'].createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React__default['default'].createElement(MenuLink, { href: item.href },
                        React__default['default'].createElement(LinkLabelMemo, { isPushed: isPushed }, item.label),
                        item.status && (React__default['default'].createElement(LinkStatus, { color: item.status.color, fontSize: "14px" }, item.status.text))))); })));
        }
        return (React__default['default'].createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React__default['default'].createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React__default['default'].createElement(LinkLabelMemo, { isPushed: isPushed }, entry.label),
                entry.status && (React__default['default'].createElement(LinkStatus, { color: entry.status.color, fontSize: "14px" }, entry.status.text)))));
    })));
};
var templateObject_1$9;

var PriceLink = styled__default['default'].a(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var CakePrice = function (_a) {
    var cakePriceUsd = _a.cakePriceUsd;
    return cakePriceUsd ? (React__default['default'].createElement(PriceLink, { href: "https://pancakeswap.info/token/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", target: "_blank" },
        React__default['default'].createElement(Icon$P, { width: "24px", mr: "8px" }),
        React__default['default'].createElement(Text, { color: "textSubtle", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React__default['default'].createElement(Skeleton, { width: 80, height: 24 }));
};
var CakePrice$1 = React__default['default'].memo(CakePrice);
var templateObject_1$8;

var Icons$2 = IconModule;
var MoonIcon = Icons$2.MoonIcon, SunIcon = Icons$2.SunIcon;
var ThemeSwitcher = function (_a) {
    var isDark = _a.isDark, toggleTheme = _a.toggleTheme;
    return (React__default['default'].createElement(Button, { variant: "text", onClick: function () { return toggleTheme(!isDark); } },
        React__default['default'].createElement(Flex, { alignItems: "center" },
            React__default['default'].createElement(SunIcon, { color: isDark ? "textDisabled" : "text", width: "24px" }),
            React__default['default'].createElement(Text, { color: "textDisabled", mx: "4px" }, "/"),
            React__default['default'].createElement(MoonIcon, { color: isDark ? "text" : "textDisabled", width: "24px" }))));
};
var ThemeSwitcher$1 = React__default['default'].memo(ThemeSwitcher, function (prev, next) { return prev.isDark === next.isDark; });

var Icons$1 = IconModule;
var SocialLinks = function () { return (React__default['default'].createElement(Flex, null, socials.map(function (social, index) {
    var Icon = Icons$1[social.icon];
    var iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
    var mr = index < socials.length - 1 ? "24px" : 0;
    if (social.items) {
        return (React__default['default'].createElement(Dropdown, { key: social.label, position: "top", target: React__default['default'].createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React__default['default'].createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
    }
    return (React__default['default'].createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
        React__default['default'].createElement(Icon, __assign({}, iconProps))));
}))); };
var SocialLinks$1 = React__default['default'].memo(SocialLinks, function () { return true; });

var Icons = IconModule;
var LanguageIcon = Icons.LanguageIcon;
var LangSelector = function (_a) {
    var currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang;
    return (React__default['default'].createElement(Dropdown, { position: "top-right", target: React__default['default'].createElement(Button, { variant: "text", startIcon: React__default['default'].createElement(LanguageIcon, { color: "textSubtle", width: "24px" }) },
            React__default['default'].createElement(Text, { color: "textSubtle" }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React__default['default'].createElement(MenuButton, { key: lang.code, fullWidth: true, onClick: function () { return setLang(lang); }, 
        // Safari fix
        style: { minHeight: "32px", height: "auto" } }, lang.language)); })));
};
var LangSelector$1 = React__default['default'].memo(LangSelector, function (prev, next) { return prev.currentLang === next.currentLang; });

var Container = styled__default['default'].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var SettingsEntry = styled__default['default'].div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled__default['default'].div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, toggleTheme = _a.toggleTheme, isDark = _a.isDark, cakePriceUsd = _a.cakePriceUsd, currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang;
    if (!isPushed) {
        return (React__default['default'].createElement(Container, null,
            React__default['default'].createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React__default['default'].createElement(Icon$18, null))));
    }
    return (React__default['default'].createElement(Container, null,
        React__default['default'].createElement(SocialEntry, null,
            React__default['default'].createElement(CakePrice$1, { cakePriceUsd: cakePriceUsd }),
            React__default['default'].createElement(SocialLinks$1, null)),
        React__default['default'].createElement(SettingsEntry, null,
            React__default['default'].createElement(ThemeSwitcher$1, { isDark: isDark, toggleTheme: toggleTheme }),
            React__default['default'].createElement(LangSelector$1, { currentLang: currentLang, langs: langs, setLang: setLang }))));
};
var templateObject_1$7, templateObject_2$2, templateObject_3$1;

var StyledPanel = styled__default['default'].div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n  ", ";\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n  ", ";\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var isPushed = _a.isPushed;
    return !isPushed && "white-space: nowrap;";
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React__default['default'].createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React__default['default'].createElement(PanelBody, __assign({}, props)),
        React__default['default'].createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$6;

var Icon$7 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React__default['default'].createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React__default['default'].createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React__default['default'].createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$6 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$5 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React__default['default'].createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$4 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip-trustwallet)" },
            React__default['default'].createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React__default['default'].createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip-trustwallet" },
                React__default['default'].createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$3 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React__default['default'].createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$2 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React__default['default'].createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var Icon$1 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "#F5F5F5" }),
        React__default['default'].createElement("path", { d: "M56.5504425,41.9387033 L56.5504425,50.4659601 L47.3948342,50.4659601 L47.3948342,85.5971142 L45.0078131,84.7075452 C43.8992633,84.2955753 42.1136272,83.5937969 39.9052997,82.5918134 L38.8675775,82.1177881 L38.8675775,14.6817622 L47.9569067,11.8769231 L56.5504425,14.5267861 L56.5504425,23.7259307 L47.9569067,21.0669705 L47.3948342,21.2411155 L47.3948342,41.9387033 L56.5504425,41.9387033 Z M16,50.4659926 L16,21.7739797 L36.1702794,15.548296 L36.1702794,24.7052039 L24.526282,28.3200122 L24.526282,41.9387358 L36.1702794,41.9387358 L36.1702794,81.3806284 L33.591244,80.0543973 C25.5662786,75.923652 16,68.9585019 16,59.2339983 L16,54.6496962 L24.526282,54.6496962 L24.526282,59.2339983 C24.526282,61.2460878 25.5734263,63.3605199 27.6426978,65.5373324 L27.6426978,50.4659926 L16,50.4659926 Z M59.1389325,15.3302574 L79.8040306,21.7261873 L79.8040306,50.4659601 L67.6710627,50.4659601 L67.6710627,62.9111544 C67.6710627,62.9111544 64.9581695,66.4674811 59.1464051,69.4451657 C59.1464051,67.0682164 59.1389325,15.3302574 59.1389325,15.3302574 Z M71.2780734,41.9387033 L71.2780734,28.2783928 L67.6710627,27.1649695 L67.6710627,41.9387033 L71.2780734,41.9387033 Z M71.2780734,59.8661186 L71.2780734,54.6495662 L79.8040306,54.6495662 L79.8040306,59.8661186 C79.8040306,74.3588162 58.7760221,82.7005566 52.330058,84.9127828 L49.9859233,85.7230769 L49.9859233,76.7068496 L51.1311866,76.2744112 C61.1591444,72.5004032 71.2780734,65.962818 71.2780734,59.8661186 Z", fill: "#000000" })));
};

var Icon = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M43.8238 9.22742C43.4014 9.26995 42.667 9.3524 42.1918 9.41061C41.7166 9.46859 40.9822 9.55555 40.5598 9.60379C39.8105 9.68932 39.3821 9.76964 38.3038 10.027C38.0134 10.0963 37.4734 10.2223 37.1038 10.3071C35.2947 10.7222 34.7799 10.8731 33.6305 11.3245C33.2513 11.4733 32.8887 11.5952 32.8246 11.5952C32.7605 11.5952 32.3936 11.7449 32.0093 11.9278C31.6251 12.1108 31.2915 12.2605 31.2677 12.2605C31.1907 12.2605 29.4281 13.2323 29.2798 13.3565C29.2006 13.4228 28.9198 13.5949 28.6558 13.7386C28.3918 13.8824 28.1542 14.0273 28.1278 14.0608C28.1014 14.0943 27.475 14.5543 26.7358 15.0832C25.465 15.9923 23.3124 17.871 22.8344 18.4883C22.7139 18.6437 22.3275 19.0916 21.9756 19.4837C21.6238 19.8757 21.2633 20.3248 21.1745 20.4816C21.086 20.6384 20.8433 21.0234 20.6357 21.337C20.016 22.2732 19.015 24.3584 18.8448 25.0674C18.7781 25.3445 19.021 25.3492 19.866 25.0869C20.4836 24.8954 22.5898 24.6186 23.4437 24.6169L23.8959 24.616L24.7196 23.4042C26.3684 20.9789 27.7356 19.5711 29.1838 18.8072C29.4742 18.6542 29.8414 18.4515 29.9998 18.357C30.282 18.1883 31.7837 17.6501 32.4478 17.4795C34.3553 16.9895 36.7371 17.364 39.2523 18.5492C44.8863 21.2042 50.4632 21.3608 55.7278 19.012C58.9788 17.5619 59.8942 17.3274 61.9428 17.4205C65.4351 17.5793 68.7903 19.6757 70.9071 23.0209C71.0487 23.2447 71.191 23.4493 71.2234 23.4755C71.2558 23.5016 71.4492 23.7663 71.6532 24.064C72.0992 24.7143 72.1006 24.7151 73.2478 24.7702C74.264 24.8186 75.6972 25.0458 76.2497 25.2454C76.4489 25.3174 76.7676 25.3763 76.9584 25.3763H77.305L77.2553 25.0097C77.1999 24.6005 77.0748 24.2916 76.4604 23.0478C75.9317 21.9774 75.3874 21.0148 75.1707 20.7668C75.0792 20.6622 74.8637 20.3695 74.6914 20.1164C72.7608 17.2785 68.0384 13.6162 64.0318 11.8494C61.2965 10.6431 56.4588 9.42534 54.3358 9.40847C53.9926 9.40586 53.0854 9.34194 52.3198 9.26662C50.7953 9.11669 45.1786 9.09079 43.8238 9.22742ZM67.2238 32.475C67.3162 32.4988 67.4674 32.4988 67.5598 32.475C67.6522 32.451 67.5766 32.4315 67.3918 32.4315C67.207 32.4315 67.1314 32.451 67.2238 32.475ZM68.7437 32.7214C68.7658 32.7362 68.8594 32.8055 68.9518 32.8756C69.0956 32.9847 69.1198 32.9806 69.1198 32.8488C69.1198 32.754 69.0396 32.6946 68.9117 32.6946C68.7975 32.6946 68.7219 32.7067 68.7437 32.7214ZM72.0958 34.2628C72.1616 34.3412 72.2856 34.4003 72.3716 34.3944C72.5033 34.3849 72.5016 34.3766 72.3598 34.3398C72.2674 34.316 72.1918 34.2568 72.1918 34.2084C72.1918 34.1599 72.1433 34.1202 72.084 34.1202C72.0096 34.1202 72.0132 34.1642 72.0958 34.2628ZM74.0398 35.9498C74.0616 36.0151 74.1596 36.0838 74.257 36.1026C74.4197 36.1339 74.4216 36.1242 74.2798 35.9838C74.0955 35.8013 73.9846 35.7854 74.0398 35.9498ZM74.6043 36.4963C74.6892 36.627 74.8368 36.7491 74.9326 36.7679C75.1232 36.8052 75.0387 36.6992 74.6405 36.4012C74.4552 36.2625 74.4543 36.2651 74.6043 36.4963ZM79.1326 37.9659C79.1624 38.1469 79.314 38.5639 79.47 38.8925C79.8185 39.627 80.4562 41.131 80.6907 41.7711C80.7864 42.0325 80.8923 42.2891 80.9261 42.3414C80.9597 42.3936 81.216 43.1421 81.4956 44.0046C82.2346 46.2842 82.1979 46.2405 82.9536 45.7451C83.515 45.3775 83.508 45.2725 82.8408 44.0265C81.3898 41.3171 80.9117 40.3776 80.7432 39.9028C80.1836 38.3277 78.9485 36.8422 79.1326 37.9659ZM16.1348 38.3712C15.9725 38.5661 15.8398 38.7873 15.8398 38.8628C15.8398 38.9381 15.7827 39.0674 15.7128 39.1501C15.643 39.2325 15.5276 39.4925 15.4563 39.7277C15.385 39.9629 14.9144 40.9466 14.4106 41.9137C13.9068 42.8807 13.3311 43.9866 13.1312 44.371C12.6723 45.2537 12.6744 45.3697 13.1554 45.67C13.7012 46.0112 13.8905 45.7783 14.316 44.2422C14.4173 43.8763 14.5416 43.4914 14.5918 43.3868C14.6422 43.2823 14.7516 42.9829 14.8349 42.7215C14.9184 42.4602 15.0476 42.118 15.1222 41.9612C15.313 41.5608 15.7383 40.5042 15.8686 40.1079C15.9286 39.9249 16.159 39.4124 16.3805 38.9688C16.602 38.5252 16.7628 38.1296 16.7379 38.0897C16.6383 37.9302 16.4153 38.0343 16.1348 38.3712ZM76.7261 40.1079C76.7261 40.2908 76.7458 40.3657 76.77 40.2742C76.794 40.1827 76.794 40.033 76.77 39.9416C76.7458 39.8501 76.7261 39.9249 76.7261 40.1079ZM76.7261 47.7113C76.7261 47.8942 76.7458 47.9691 76.77 47.8776C76.794 47.7861 76.794 47.6364 76.77 47.5449C76.7458 47.4535 76.7261 47.5283 76.7261 47.7113ZM21.1198 50.9902C21.1198 51.0686 21.1899 51.1328 21.2756 51.1328C21.403 51.1328 21.4097 51.1069 21.3118 50.9902C21.246 50.9118 21.176 50.8477 21.156 50.8477C21.1361 50.8477 21.1198 50.9118 21.1198 50.9902ZM73.0558 52.9027C73.0558 53.0346 73.08 53.0386 73.2238 52.9296C73.3162 52.8595 73.4098 52.7901 73.4319 52.7754C73.4537 52.7606 73.3781 52.7485 73.2639 52.7485C73.136 52.7485 73.0558 52.8079 73.0558 52.9027ZM84.9576 53.026C83.9835 53.2152 82.9834 53.8973 82.8917 54.435C82.7352 55.3539 82.3258 56.6757 81.9572 57.4517C81.5746 58.2577 80.2553 60.1618 80.0796 60.1618C79.8874 60.1618 79.4924 60.8606 79.6071 60.9975C79.898 61.3446 82.3923 61.9579 83.5376 61.9641C85.4362 61.9745 87.1913 61.0749 88.1669 59.5916C88.6342 58.8814 88.429 57.3127 87.4853 54.3778C87.024 52.9431 86.5877 52.7098 84.9576 53.026ZM10.4674 53.1178C9.73947 53.3188 9.98691 59.6139 10.7888 61.3002C11.0957 61.9453 12.5741 62.0239 14.6636 61.5057C15.9272 61.1926 16.2238 61.0764 16.2238 60.8944C16.2238 60.7953 15.247 59.4447 15.0754 59.3064C14.8976 59.1632 14.203 58.0162 13.8941 57.3555C13.5687 56.6598 13.4105 56.1344 13.0397 54.5196C12.9231 54.0112 12.8756 53.9422 12.5 53.7348C12.1748 53.5552 10.7429 53.0016 10.711 53.0431C10.7072 53.0484 10.5975 53.0819 10.4674 53.1178ZM35.5438 53.8622C35.3789 53.9209 35.3924 54.0791 35.562 54.0791C35.7212 54.0791 35.8469 53.9223 35.7375 53.861C35.6969 53.8382 35.6098 53.8389 35.5438 53.8622ZM60.0668 54.1416C60.0941 54.2117 60.2196 54.2692 60.3461 54.2692C60.4724 54.2692 60.5758 54.312 60.5758 54.3642C60.5758 54.4165 60.6406 54.4593 60.7198 54.4593C60.9975 54.4593 60.8597 54.3139 60.4407 54.1646C60.1049 54.0451 60.0276 54.0404 60.0668 54.1416ZM25.5838 54.2692C25.849 54.3821 26.0158 54.3821 26.0158 54.2692C26.0158 54.2169 25.8754 54.1772 25.7038 54.1808C25.4424 54.1865 25.423 54.2008 25.5838 54.2692ZM70.1278 54.5543C70.0952 54.6066 69.9898 54.6494 69.8938 54.6494C69.7978 54.6494 69.6656 54.7135 69.5998 54.7919C69.5019 54.9086 69.5086 54.9345 69.636 54.9345C69.7217 54.9345 69.7918 54.8917 69.7918 54.8394C69.7918 54.7872 69.8945 54.7444 70.02 54.7444C70.1456 54.7444 70.302 54.6803 70.3678 54.6018C70.4655 54.4854 70.4597 54.4593 70.3373 54.4593C70.2548 54.4593 70.1604 54.5021 70.1278 54.5543ZM45.7918 59.6517C45.607 59.6743 45.175 59.7603 44.8318 59.8427C44.4886 59.9252 43.927 60.0319 43.5838 60.0801C43.2406 60.1281 42.8302 60.2091 42.6718 60.2602C42.5134 60.3113 42.0166 60.441 41.5678 60.5484C40.3083 60.8497 39.8856 60.9633 38.5918 61.3477C37.9318 61.544 37.1542 61.7592 36.8638 61.8265C36.5734 61.8937 36.0982 62.0218 35.8078 62.1109C34.5356 62.5022 31.7379 63.2177 30.8158 63.3876C30.4726 63.451 29.9974 63.5422 29.7598 63.5907C28.9023 63.7656 27.217 63.9635 26.5853 63.9635C25.7657 63.9635 25.7043 64.0783 26.1116 64.8476C27.0344 66.5903 26.3736 67.6538 24.8405 66.8946C22.5082 65.7394 18.2544 65.594 16.3952 66.6057C16.2216 66.7 15.8638 66.8561 15.5998 66.9521C15.3358 67.0484 14.947 67.2406 14.7358 67.3793C14.5246 67.5181 14.2762 67.6604 14.1838 67.6954C13.9167 67.7968 13.9728 68.2095 14.2798 68.3996C14.425 68.4894 14.5582 68.5724 14.5755 68.5838C14.593 68.5949 14.5565 68.6985 14.4944 68.8135C14.4027 68.9829 14.4058 69.0129 14.5104 68.9704C15.8033 68.4471 16.484 68.9537 16.764 70.6479C17.2059 73.3202 18.0694 75.0844 19.687 76.6198C20.3002 77.202 20.2848 77.7677 19.6604 77.6095L19.4398 77.5536L19.664 77.6672C19.952 77.8133 20.197 77.6729 20.2376 77.3386C20.2608 77.1454 20.1039 76.9192 19.4854 76.2554C18.2715 74.9521 17.3916 73.4176 17.22 72.3052C17.1857 72.082 17.1149 71.8461 17.0628 71.7808C16.9966 71.6974 17.0093 71.662 17.1063 71.662C17.1821 71.662 17.3897 71.8544 17.5678 72.0896C17.7459 72.3249 17.9333 72.5173 17.9844 72.5173C18.0646 72.5173 18.6732 73.0249 19.3532 73.6586C19.7271 74.0071 20.2493 74.3153 20.3079 74.2217C20.3871 74.0948 20.8908 74.5736 21.175 75.0457C21.3039 75.2603 21.5012 75.5169 21.613 75.616C21.7251 75.7153 21.5451 75.3928 21.2134 74.8998C20.1975 73.3901 19.5838 71.7216 19.5838 70.4699C19.5838 67.9962 22.1864 66.6824 23.4125 68.537C23.6945 68.9632 24.1918 70.4266 24.1918 70.8299C24.1918 70.9356 24.2331 71.1768 24.2835 71.3659C24.3339 71.5548 24.4853 72.1799 24.6204 72.7549C25.056 74.6111 26.7845 78.4169 27.4479 78.9802C27.6053 79.114 27.8496 79.6731 27.8031 79.7931C27.6884 80.0891 26.1639 79.5866 25.5886 79.0631C25.4667 78.9522 25.3179 78.9569 25.3882 79.0696C25.4189 79.119 25.6484 79.257 25.898 79.3765C26.1476 79.4961 26.5128 79.6909 26.7099 79.8097C27.1306 80.0635 27.8148 80.1055 27.901 79.8831C27.979 79.6823 28.285 79.7061 28.5118 79.9306C28.6174 80.0352 28.7544 80.1207 28.8164 80.1207C28.878 80.1207 28.9968 80.1763 29.0804 80.2443C29.1636 80.312 29.4694 80.4667 29.7598 80.5876C30.0502 80.7086 30.3526 80.8457 30.4318 80.892C30.511 80.9386 30.6689 81.0165 30.7824 81.0654C30.8962 81.1144 31.0174 81.1999 31.0522 81.2553C31.0868 81.3109 31.1979 81.3563 31.2989 81.3563C31.4696 81.3563 31.6788 81.4361 32.6878 81.8859C33.4352 82.2193 33.7469 82.3055 34.0078 82.2513C34.1993 82.2117 34.2718 82.2342 34.2718 82.3335C34.2718 82.4262 34.4213 82.4878 34.736 82.5248C34.9913 82.5548 35.4557 82.6714 35.768 82.784C36.0802 82.8967 36.4803 83.0243 36.6572 83.0675C36.8338 83.1108 37.0714 83.2307 37.1852 83.3339C37.2987 83.4372 37.543 83.5529 37.7278 83.591C37.9126 83.629 38.1718 83.7133 38.3038 83.7784C38.4358 83.8433 38.7598 83.9238 39.0238 83.9571C39.2878 83.9904 39.726 84.1013 39.9977 84.2035C40.2692 84.3057 40.8308 84.4326 41.2455 84.4858C41.6604 84.5388 42.3238 84.65 42.7198 84.7324C43.1158 84.8151 43.7638 84.9197 44.1598 84.9643C46.7285 85.2554 47.1008 85.2737 49.4878 85.225C51.7961 85.1779 53.0504 85.0803 57.0718 84.6341C57.7582 84.558 58.7086 84.4561 59.1838 84.4076C60.018 84.3228 62.648 83.8516 63.7402 83.5914C64.0325 83.5218 64.6822 83.3717 65.1838 83.2578C67.5252 82.7261 71.0016 81.5856 73.6318 80.4862C74.7836 80.0048 77.3768 78.7041 77.9309 78.3299C78.4352 77.9896 79.033 77.6002 79.34 77.412C80.6283 76.6222 82.7626 74.7708 83.9967 73.3727C84.5232 72.7761 85.5358 71.4319 85.5358 71.3298C85.5358 71.3022 85.7036 71.0342 85.9085 70.7341C86.9518 69.2075 86.9357 68.7228 85.8416 68.7123C85.5063 68.709 85.056 68.6113 83.9446 68.3008C83.2078 68.095 82.2382 67.7049 81.1244 67.1664C77.6016 65.463 73.8792 65.3481 70.9918 66.8538C69.71 67.5221 69.2122 66.7169 69.9358 65.1449C70.5089 63.9001 70.5984 63.9778 68.3518 63.7689C66.2244 63.5712 65.1231 63.3942 63.5998 63.005C62.755 62.7893 61.8262 62.5567 61.5358 62.488C61.2454 62.4196 60.7054 62.2718 60.3358 62.1594C59.9662 62.0472 59.3228 61.8716 58.9059 61.7692C58.4892 61.6668 57.6252 61.4169 56.9859 61.2137C56.3468 61.0108 55.651 60.8003 55.4398 60.7463C54.1707 60.4213 53.3441 60.2234 52.7518 60.1029C52.3822 60.0278 51.799 59.8981 51.4558 59.8149C50.8464 59.6671 46.6565 59.5464 45.7918 59.6517ZM54.8734 64.3114C55.8761 65.3623 55.4304 65.713 50.9254 67.4176C50.1029 67.7289 49.3474 68.3538 49.3452 68.7247C49.3407 69.4757 49.8713 69.3876 51.6958 68.334C53.2913 67.4128 53.8232 67.4109 54.6353 68.3226C55.3954 69.1764 55.5408 69.8379 55.056 70.2363C54.9248 70.344 54.7649 70.7355 54.5228 71.542C54.3624 72.0763 53.5971 72.5128 52.8142 72.5164C52.6904 72.5169 52.4528 72.576 52.2862 72.6475C52.1199 72.7191 51.6166 72.9391 51.1678 73.1361C50.3744 73.4846 50.3369 73.4915 49.8144 73.3853C48.2715 73.0719 47.0424 74.2404 47.7766 75.3227C48.2225 75.9802 48.3142 75.9888 48.5352 75.3924C48.7378 74.8466 49.2663 74.2673 49.627 74.1958C49.7722 74.167 50.1288 74.0359 50.4192 73.9042C51.0286 73.6284 51.6425 73.4735 52.1396 73.4701C52.3308 73.4687 52.8159 73.3615 53.2174 73.2318C55.0496 72.6397 56.107 72.8488 57.4318 74.0653C58.1842 74.7561 58.1907 75.1151 57.4774 76.6042C57.3396 76.8917 57.1416 77.4263 57.0375 77.7922C56.4507 79.8527 55.8747 80.7563 54.7049 81.453C53.9936 81.8766 53.9151 81.8607 53.6448 81.2387C53.3199 80.4907 52.8605 80.4156 51.1198 80.8266C49.2274 81.2736 49.0968 81.2646 48.4515 80.6432C47.9079 80.12 47.6818 79.5277 47.2714 77.5546C47.179 77.1103 47.0729 76.704 47.0355 76.6517C46.7568 76.2627 46.6227 75.1963 46.7948 74.7399C46.9774 74.2557 47.8731 73.2777 48.1337 73.2777C49.027 73.2777 49.3611 72.7105 49.0796 71.6719C48.3831 69.1048 48.4601 68.6527 49.7576 67.6944C50.438 67.1919 50.4365 67.1622 49.7038 66.4674C48.4104 65.2414 48.3053 64.9574 49.1588 64.9966C49.4528 65.0102 49.8629 64.9593 50.0705 64.8835C50.2781 64.808 50.7286 64.6718 51.0718 64.5811C51.415 64.4905 52.063 64.294 52.5118 64.1446C53.8061 63.7138 54.3389 63.7513 54.8734 64.3114ZM45.8345 64.1961C47.2546 64.8004 48.061 66.2968 47.3578 67.0234C47.0403 67.3515 46.9236 67.3534 46.106 67.0438C45.325 66.7483 44.5304 66.7193 43.7936 66.9595C42.9632 67.2301 42.9629 66.9996 43.7933 66.5777C44.6496 66.1426 44.7358 66.077 44.7358 65.8615C44.7358 65.6691 43.9704 64.9555 43.34 64.5601C43.1084 64.415 42.9173 64.27 42.9154 64.2382C42.8998 63.9811 45.2494 63.9474 45.8345 64.1961ZM30.9665 65.5854C31.2874 65.8839 31.3714 66.2155 31.4835 67.6227C31.6044 69.1433 31.7398 70.1743 31.933 71.0442C32.0141 71.4101 32.118 71.8881 32.1641 72.1067C32.6842 74.5831 34.7148 78.9082 36.3336 80.988C36.4404 81.1251 36.6142 81.3558 36.7198 81.5007C36.8254 81.6457 37.009 81.8945 37.1278 82.0539C38.323 83.657 34.6616 82.5899 32.16 80.6057C28.2603 77.5128 26.5289 72.0953 28.0107 67.6227C28.6025 65.8363 30.1152 64.7937 30.9665 65.5854ZM66.3891 65.4733C67.5072 65.976 68.346 67.8182 68.4934 70.0938C68.8224 75.1738 66.0924 79.8622 61.5358 82.0432C58.908 83.3008 58.0959 83.0761 59.347 81.4373C60.8472 79.4716 62.1346 77.1906 62.846 75.2363C63.9819 72.1167 64.2192 71.0599 64.5526 67.635C64.7681 65.4227 65.185 64.932 66.3891 65.4733ZM75.2009 68.0183C76.4722 68.796 76.8449 70.7978 76.0428 72.5406C75.9312 72.7835 75.8398 73.0063 75.8398 73.0358C75.8398 74.0974 72.9022 77.5608 70.9438 78.8079C68.4048 80.4249 67.6925 80.3426 68.8378 78.5646C70.3582 76.2045 71.1207 74.2823 71.7646 71.1867C72.0423 69.8512 72.1738 69.389 72.4229 68.8739C72.9672 67.7479 74.1588 67.3808 75.2009 68.0183ZM81.3236 68.9C83.2836 69.7597 83.1725 72.2232 81.0809 74.2763C80.3372 75.0065 78.362 76.6042 78.2033 76.6042C78.1752 76.6042 78.0044 76.7037 77.8234 76.8251C76.1864 77.925 75.1258 77.7404 76.3467 76.568C77.1761 75.7718 77.7634 74.9908 78.1817 74.1271C78.8036 72.8429 78.9684 72.3151 79.2519 70.6999C79.5507 68.9974 80.22 68.416 81.3236 68.9ZM45.5158 69.2495C45.9838 69.6936 45.9999 69.907 45.637 70.8596C45.0269 72.4613 45.15 72.4104 46.6246 70.4535C47.5172 69.2693 47.7555 69.0067 47.8258 69.131C47.8884 69.2419 47.8484 69.3738 47.6844 69.5948C47.5582 69.7647 46.8432 71.1226 46.0952 72.6124L44.7351 75.3211L44.682 76.4616C44.653 77.0889 44.6144 78.4361 44.5964 79.4554C44.5781 80.4748 44.5308 81.3943 44.491 81.4988C44.2553 82.1176 43.8022 82.1915 43.4717 81.6652C43.2533 81.3178 43.2485 81.2591 43.2737 79.3366C43.2879 78.252 43.2639 77.3645 43.22 77.3645C43.058 77.3645 42.8254 77.6211 42.3231 78.3541C41.5354 79.5037 41.1586 79.6353 40.4799 78.998C40.094 78.6355 39.9267 78.1764 39.906 77.4222L39.8878 76.7672L40.4638 76.2824C41.6758 75.2624 42.4685 74.3835 42.8878 73.5949C43.4686 72.5026 43.43 71.9708 42.8079 72.4929C40.8377 74.1459 39.6617 73.9853 38.3381 71.8829C37.82 71.0596 37.8497 70.9346 38.5032 71.1896C39.3044 71.5023 39.27 71.5111 41.8136 70.3349C42.2391 70.1382 42.7536 69.8321 42.9567 69.6554C43.9184 68.8173 44.8966 68.6624 45.5158 69.2495ZM13.944 69.3097C13.0119 70.2648 13.0164 72.0711 13.9539 73.305C14.774 74.3847 16.9107 76.1941 18.1918 76.8936C18.5086 77.0665 18.889 77.2908 19.0373 77.3918C19.1856 77.4928 19.3284 77.5539 19.3551 77.5277C19.3815 77.5014 19.1523 77.34 18.8456 77.1692C18.3022 76.8662 16.9918 76.0384 16.8958 75.9374C16.8694 75.9096 16.5663 75.6675 16.2221 75.3995C13.4076 73.2073 12.5878 70.9582 14.0163 69.3474C14.3976 68.9174 14.3506 68.8929 13.944 69.3097ZM52.4158 69.4356C52.1782 69.5007 51.7318 69.6223 51.4239 69.706C50.3602 69.9944 50.2325 70.2012 50.634 70.9853C50.9206 71.5453 50.9369 71.5498 51.5904 71.24C52.3143 70.8971 52.9923 70.2137 52.9904 69.8291C52.988 69.3541 52.9092 69.3004 52.4158 69.4356ZM46.0184 70.9888C45.8285 71.3961 45.6958 71.4861 45.6958 71.2074C45.6958 71.0321 46.082 70.492 46.1554 70.5647C46.1782 70.5873 46.1165 70.7781 46.0184 70.9888ZM43.0179 72.7355C42.8945 72.8576 42.7695 72.7633 42.8609 72.6171C42.8962 72.5606 42.9692 72.5411 43.0227 72.5741C43.0884 72.614 43.0868 72.6673 43.0179 72.7355ZM54.1215 72.6803C53.9772 72.702 53.718 72.7024 53.5455 72.6813C53.3729 72.6601 53.491 72.6423 53.8078 72.6418C54.1246 72.6414 54.2657 72.6587 54.1215 72.6803ZM52.0246 73.1871C51.9588 73.2273 51.8436 73.2368 51.7685 73.2081C51.6629 73.1681 51.6591 73.1394 51.751 73.0831C51.8168 73.0429 51.932 73.0334 52.0071 73.0622C52.1127 73.1021 52.1165 73.1308 52.0246 73.1871ZM49.9198 73.7529C49.9198 73.8052 49.855 73.8479 49.7758 73.8479C49.6966 73.8479 49.6318 73.8052 49.6318 73.7529C49.6318 73.7006 49.6966 73.6578 49.7758 73.6578C49.855 73.6578 49.9198 73.7006 49.9198 73.7529ZM54.0209 74.5004C53.0856 75.0314 52.873 75.5732 53.5198 75.7775C54.4222 76.0629 54.5204 77.0765 53.6861 77.4968C52.6575 78.0153 52.4379 78.8783 53.2656 79.1503C53.5599 79.247 53.7404 79.383 53.8752 79.6092C54.1071 79.9984 54.3104 80.0219 54.3946 79.6693C54.4289 79.5255 54.5552 79.1085 54.6747 78.7426C54.7944 78.3767 54.9636 77.671 55.0508 77.1744C55.1379 76.6778 55.2502 76.1401 55.3006 75.9797C55.466 75.4508 55.4081 75.1196 55.0752 74.6874C54.6891 74.186 54.602 74.1706 54.0209 74.5004ZM54.7616 74.6182C54.6946 74.7256 54.4318 74.7302 54.4318 74.6242C54.4318 74.4904 54.5398 74.4286 54.6807 74.4821C54.7544 74.5101 54.7908 74.5714 54.7616 74.6182ZM49.1616 75.2786C48.5686 75.8654 48.565 76.2981 49.1333 78.6609C49.3503 79.5631 49.3918 79.6455 49.6272 79.6455C49.9301 79.6455 51.0432 79.2715 51.162 79.1297C51.3084 78.955 51.194 78.3149 51.0164 78.3149C50.3055 78.3149 49.3438 77.6206 49.3438 77.1074C49.3438 76.7988 49.3515 76.7928 49.7518 76.8045C51.3596 76.8508 51.811 75.481 50.2992 75.1429C49.4261 74.9478 49.5053 74.9383 49.1616 75.2786ZM21.8818 75.9878C22.2389 76.4768 24.0092 78.1759 24.4798 78.4817C24.7702 78.6701 25.0618 78.8647 25.1278 78.9139C25.1938 78.9633 25.2478 78.9786 25.2478 78.9479C25.2478 78.9173 24.9778 78.7129 24.6478 78.4938C24.3178 78.2748 23.5294 77.5788 22.8958 76.9473C22.2622 76.3157 21.806 75.884 21.8818 75.9878ZM49.3438 77.7979C49.3438 77.8732 49.3052 77.9347 49.2581 77.9347C49.152 77.9347 49.0488 77.6881 49.1237 77.614C49.2077 77.5308 49.3438 77.6444 49.3438 77.7979ZM43.0426 77.9823C43.0121 78.0607 42.9488 78.1248 42.9015 78.1248C42.8544 78.1248 42.8158 78.0607 42.8158 77.9823C42.8158 77.9039 42.8792 77.8397 42.9567 77.8397C43.0426 77.8397 43.0762 77.8955 43.0426 77.9823Z", fill: "#C8312E" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.552 19.1594C33.4464 19.1843 33.1656 19.2504 32.928 19.306C30.1944 19.9461 28.3661 21.3449 26.2675 24.4017C25.9615 24.8474 26.0256 25.0912 26.4488 25.0912C27.0816 25.0912 29.6751 26.0906 30.8688 26.7946C31.9728 27.4456 32.8179 28.032 34.8653 29.5689C37.4122 31.4804 40.6104 33.458 41.136 33.4464C41.3143 33.4423 41.3124 33.4347 41.112 33.339C40.9932 33.2822 40.896 33.1995 40.896 33.1553C40.896 33.1109 40.8312 33.0747 40.752 33.0747C40.6728 33.0747 40.608 33.0313 40.608 32.9778C40.608 32.9234 40.4928 32.9032 40.344 32.9319C40.1484 32.9695 40.1278 32.9619 40.2641 32.903C40.4299 32.8314 40.4107 32.796 40.0721 32.5461C37.182 30.4126 33.3348 26.8316 32.9086 25.8779C32.0364 23.9257 34.4475 23.0418 37.5238 24.1861C40.2427 25.1974 41.5947 25.9133 42.6754 26.9143C44.3794 28.4925 45.216 30.2185 45.216 32.1566C45.216 33.6324 45.7527 34.7097 46.9097 35.5558C47.4989 35.9868 47.5891 36.2962 47.1795 36.4811C46.603 36.741 42.3552 36.5514 40.128 36.166C39.6792 36.0883 39.3012 36.0239 39.288 36.023C39.2748 36.022 39.264 36.0852 39.264 36.1636C39.264 36.242 39.308 36.3062 39.3617 36.3062C39.4736 36.3062 40.7998 38.2636 40.8005 38.4299C40.801 38.4903 40.8703 38.668 40.9551 38.8248C41.8635 40.5082 42.0447 44.6032 41.2736 46.0231C41.2244 46.1139 41.184 46.2429 41.184 46.3099C41.184 46.3769 41.0201 46.7518 40.8197 47.1429C39.9694 48.8026 39.0802 49.9414 37.92 50.8574C37.3899 51.2761 35.7286 52.2733 35.5613 52.2733C35.4943 52.2733 35.3172 52.3334 35.1677 52.4071C34.3195 52.8246 33.7385 52.9524 31.675 53.1753C31.1592 53.2309 29.3074 53.0222 28.8 52.8514C28.668 52.807 28.3656 52.7148 28.128 52.6466C27.8904 52.5782 27.6108 52.4662 27.5067 52.3978C27.4025 52.3294 27.2458 52.2733 27.1584 52.2733C27.0711 52.2733 26.9458 52.2092 26.88 52.1307C26.8143 52.0523 26.6794 51.9882 26.5803 51.9882C26.4812 51.9882 26.4 51.9547 26.4 51.914C26.4 51.8732 26.2812 51.7941 26.136 51.7385C25.0424 51.3184 22.176 48.3155 22.176 47.5899C22.176 47.5084 22.1417 47.4278 22.0997 47.4102C21.8938 47.3247 21.218 45.3953 21.2168 44.8895C21.2163 44.7227 21.1728 44.5597 21.12 44.5274C21.0622 44.492 21.024 43.8312 21.024 42.8641C21.024 41.8971 21.0622 41.2363 21.12 41.2009C21.1728 41.1686 21.2163 41.0056 21.2168 40.8388C21.2182 40.2305 21.7853 38.7181 22.3378 37.8487C22.5127 37.5733 22.656 37.3255 22.656 37.2982C22.656 36.785 25.7388 33.9301 26.293 33.9301C26.3518 33.9301 26.4005 33.8981 26.4012 33.8588C26.4022 33.7964 26.5975 33.6973 27.408 33.348C28.3601 32.9379 29.9184 32.6014 30.8719 32.6002C31.1933 32.5998 31.4847 32.5713 31.5197 32.5366C31.5934 32.4634 31.0647 32.1243 30.8768 32.1243C30.8072 32.1243 30.4519 31.9756 30.0871 31.7938C27.6101 30.559 23.2308 31.3552 21.3368 33.3848C21.0989 33.6398 17.952 39.8449 17.952 40.0589C17.952 40.0863 17.844 40.3305 17.712 40.6014C17.58 40.8723 17.472 41.1275 17.472 41.1686C17.472 41.2097 17.37 41.4689 17.2455 41.7448C16.8632 42.5906 16.789 42.7795 16.3966 43.9096C15.8141 45.5878 15.2652 47.5409 15.3404 47.6683C15.3776 47.7315 15.8451 48.248 16.3791 48.8164C16.9131 49.3847 17.4963 50.0191 17.6751 50.2263C18.4949 51.176 19.7312 52.4052 20.6086 53.1427C22.1388 54.4289 23.5618 55.1015 25.824 55.6076C26.5723 55.7751 30.3358 55.8357 31.32 55.6963C32.9256 55.4684 33.2763 55.4166 33.8434 55.3232C34.1619 55.2707 34.6803 55.1581 34.9954 55.073C35.3103 54.9877 35.7408 54.8768 35.952 54.8264C38.6516 54.1834 42.0612 52.5214 44.5949 50.6134C45.2489 50.1208 45.9473 49.6734 46.1477 49.6183C48.0358 49.0991 48.1364 51.0549 46.3037 52.6535C44.9511 53.8334 42.7916 55.442 41.647 56.122C40.4153 56.8536 39.8767 57.144 38.736 57.6907C36.7503 58.6426 35.7276 59.0168 33.168 59.7282C32.904 59.8016 32.3208 59.9268 31.872 60.0069C31.4232 60.0867 30.7536 60.2077 30.384 60.2756C29.4619 60.4455 25.4323 60.4415 24.528 60.2699C23.7228 60.1172 21.7258 59.6187 21.456 59.5029C21.3504 59.4578 21.1128 59.3663 20.928 59.2996C19.4345 58.7619 16.4964 56.9492 15.84 56.161C15.408 55.6423 15.2943 55.9305 15.6404 56.6666C16.6049 58.7198 18.5803 60.5237 19.7374 60.4082C20.9628 60.2856 22.5684 60.8233 23.4296 61.6447C24.5484 62.7118 28.43 62.2594 35.76 60.207C36.816 59.9112 37.8096 59.6343 37.968 59.5918C38.1264 59.549 38.7312 59.3789 39.312 59.2138C40.452 58.8894 42.3214 58.4375 43.248 58.2619C43.5648 58.2021 43.9752 58.116 44.16 58.0707C45.0149 57.8618 46.5701 57.7387 48.288 57.7444C50.0506 57.7501 50.6515 57.8072 52.608 58.1552C53.1423 58.2503 56.5755 59.1387 57.36 59.3849C57.6768 59.4842 58.1952 59.6389 58.512 59.7287C58.8288 59.8185 59.196 59.9299 59.328 59.9763C59.9686 60.2013 63.678 61.1671 65.52 61.5884C66.9694 61.9201 68.3256 62.081 70.0848 62.1302L71.9614 62.1829L72.5076 61.7424C73.7686 60.7257 74.526 60.447 76.0294 60.447C77.5822 60.447 79.1631 59.0974 80.341 56.7662C80.8546 55.7495 80.8572 55.5501 80.3511 56.0044C78.4104 57.7461 74.4766 59.8767 73.2015 59.8767C73.1199 59.8767 72.8055 59.9378 72.5026 60.0124C65.76 61.6742 55.1439 58.1298 49.3875 52.2952C47.7053 50.5901 48.3284 48.7586 50.227 49.8272C50.7766 50.1365 50.9832 50.2829 51.8808 50.9988C54.1791 52.8319 59.4694 55.0395 62.112 55.2683C62.4024 55.2935 63.1584 55.3791 63.792 55.4587C71.0971 56.3753 73.7648 55.4271 78.3442 50.2862C78.7356 49.8469 79.0992 49.4406 79.152 49.3833C80.8176 47.5811 80.8037 47.602 80.6417 47.1002C80.5899 46.9398 80.3508 46.1557 80.1104 45.358C79.7391 44.1268 79.2408 42.7011 78.9233 41.9612C77.8947 39.565 75.482 34.5795 74.8697 33.5851C74.7142 33.3323 73.3817 32.3144 73.2065 32.3144C73.1744 32.3144 72.9871 32.2141 72.7901 32.0918C70.7194 30.8037 66.9828 30.8455 64.981 32.1792C64.7124 32.3581 64.5295 32.5092 64.5744 32.5152C64.6193 32.5211 64.872 32.5385 65.136 32.5537C66.336 32.6233 67.8778 33.0049 68.9962 33.5086C70.2665 34.081 72.2398 35.6197 72.7661 36.4488C72.8657 36.6056 73.0423 36.8344 73.1585 36.9572C73.7273 37.5593 74.784 39.9793 74.784 40.6803C74.784 40.815 74.8301 40.9709 74.8863 41.0265C75.0255 41.1643 75.0255 44.5639 74.8863 44.7018C74.8301 44.7574 74.7826 44.9548 74.7809 45.1404C74.7754 45.7242 73.9296 47.7619 73.4739 48.2889C73.4023 48.3716 73.344 48.4697 73.344 48.507C73.344 48.7461 71.7963 50.4081 70.98 51.0456C70.6447 51.3072 68.9955 52.2733 68.8839 52.2733C68.8248 52.2733 68.6079 52.3584 68.4017 52.4624C68.1955 52.5665 67.8732 52.6765 67.6853 52.7069C67.4976 52.7374 67.2576 52.8008 67.152 52.8478C66.6708 53.0622 64.9436 53.2154 63.984 53.1287C62.3552 52.9819 61.9733 52.893 60.72 52.3705C58.4316 51.4163 56.7048 49.8975 55.585 47.8538C55.4132 47.5402 55.2346 47.243 55.1883 47.1933C55.142 47.1436 55.104 47.0312 55.104 46.9436C55.104 46.8559 55.0392 46.7309 54.96 46.6658C54.8808 46.6007 54.816 46.433 54.816 46.293C54.816 46.1531 54.7774 45.9979 54.7303 45.9482C54.324 45.5203 54.1476 41.7046 54.4798 40.5287C54.9595 38.8303 56.1696 36.5913 56.8767 36.0938C57.0334 35.9835 56.563 36.0125 55.728 36.1648C53.5279 36.5657 49.2156 36.7389 48.7894 36.4433C48.4642 36.2178 48.5264 35.9621 48.984 35.6414C50.3343 34.6947 50.718 33.9332 50.8757 31.8867C51.1495 28.3317 53.449 25.9794 58.32 24.2707C61.4496 23.173 63.5647 23.7121 63.222 25.5203C63.0576 26.388 60.9113 28.5479 57.504 31.2742C56.8968 31.7598 56.3784 32.184 56.352 32.2165C56.3256 32.2491 56.0254 32.4876 55.6846 32.7466C54.6917 33.5012 54.7397 33.4561 54.9612 33.4276C55.1684 33.4007 56.1706 32.9046 56.7581 32.538C56.9552 32.4149 57.1436 32.3144 57.1772 32.3144C57.3279 32.3144 60.4639 30.1605 61.68 29.2217C64.8485 26.7758 68.1226 25.105 69.7712 25.0928C70.1648 25.09 70.1021 24.8391 69.4944 23.9844C67.1767 20.7252 64.8101 19.2456 61.728 19.1287C60.218 19.0712 59.5438 19.2397 57.072 20.2918C50.3213 23.1654 45.5883 23.1556 38.7691 20.2542C36.4366 19.2618 34.6805 18.8932 33.552 19.1594ZM62.5735 19.381C62.5925 19.4376 62.7881 19.4844 63.0079 19.4851C63.4411 19.4868 64.0666 19.67 64.2463 19.8479C64.308 19.909 64.4974 19.9589 64.6673 19.9589C64.837 19.9589 64.9904 19.991 65.0081 20.0302C65.0256 20.0694 65.2128 20.187 65.424 20.2915C66.3656 20.7573 67.8694 21.969 67.8716 22.2637C67.8718 22.3029 67.9368 22.335 68.016 22.335C68.0952 22.335 68.16 22.3955 68.16 22.4697C68.16 22.5436 68.1924 22.6184 68.232 22.636C68.5954 22.7957 69.9293 24.8001 69.7157 24.865C69.6257 24.8925 69.4769 24.9546 69.3852 25.003C69.2936 25.0515 69.0451 25.0912 68.8332 25.0912C68.6213 25.0912 68.448 25.1306 68.448 25.1786C68.448 25.2269 68.3076 25.2934 68.136 25.3269C67.8451 25.3832 67.549 25.4885 67.1969 25.6605C67.116 25.6999 66.9108 25.7624 66.7409 25.7995C66.571 25.8363 66.432 25.9059 66.432 25.9542C66.432 26.0022 66.3631 26.0416 66.2789 26.0416C66.1947 26.0416 65.9895 26.1378 65.8231 26.2555C65.6568 26.3731 65.3911 26.5387 65.2325 26.6237C65.0739 26.7086 64.7928 26.8697 64.608 26.9813C64.4232 27.0933 64.1964 27.2106 64.104 27.242C64.0116 27.2736 63.936 27.337 63.936 27.3834C63.936 27.4295 63.8815 27.4672 63.8151 27.4672C63.7486 27.4672 63.5777 27.5742 63.4351 27.7049C63.2928 27.8355 63.1421 27.9432 63.1001 27.9439C63.0583 27.9448 62.8887 28.0624 62.7231 28.2052C62.1394 28.7094 61.9652 28.8473 61.6824 29.0278C61.5255 29.1281 61.3095 29.2913 61.2024 29.3907C61.0956 29.4897 60.8676 29.657 60.696 29.7623C60.5244 29.8675 60.384 29.9932 60.384 30.0412C60.384 30.0892 60.338 30.1284 60.2816 30.1284C60.1884 30.1284 59.5383 30.5685 59.424 30.7091C59.3268 30.8287 58.944 30.9014 58.944 30.8001C58.944 30.7443 58.8955 30.6987 58.8363 30.6987C58.7626 30.6987 58.7669 30.7445 58.8499 30.8436C58.9167 30.9232 58.9544 31.0007 58.9337 31.0157C58.4542 31.3637 57.8803 31.7465 57.6838 31.8497C57.5448 31.9224 57.1976 32.136 56.9117 32.3244C55.8416 33.0296 55.2027 33.2052 56.0902 32.5499C56.3662 32.346 56.9254 31.9102 57.3327 31.5816C57.7399 31.2528 58.1026 30.9838 58.1383 30.9838C58.1741 30.9838 58.3198 30.8662 58.4621 30.7224C58.6044 30.5787 58.8466 30.3572 59.0004 30.2301C59.1543 30.1032 59.521 29.7932 59.8155 29.5411C60.11 29.2892 60.4001 29.083 60.4603 29.083C60.624 29.083 60.4882 29.3526 60.2938 29.4137C60.2009 29.4429 60.0763 29.5729 60.0166 29.7026C59.9571 29.8321 59.8519 29.9383 59.7833 29.9383C59.6347 29.9383 59.2908 30.3133 59.3686 30.3903C59.3984 30.42 59.502 30.3732 59.599 30.2862C59.6959 30.1995 59.8258 30.1284 59.8875 30.1284C59.9494 30.1284 60 30.094 60 30.0519C60 29.9574 61.278 28.9879 61.4028 28.9879C61.4525 28.9879 61.5629 28.9131 61.6479 28.8216C62.0527 28.3858 63.2554 27.4672 63.4212 27.4672C63.4932 27.4672 63.552 27.4245 63.552 27.3722C63.552 27.3199 63.6108 27.2772 63.6826 27.2772C63.7543 27.2772 64.0092 27.1061 64.2492 26.897C64.4892 26.6879 64.7338 26.5168 64.7926 26.5168C64.8516 26.5168 65.071 26.4099 65.28 26.2792C65.4891 26.1485 65.6935 26.0423 65.7341 26.043C65.8495 26.0454 66.8602 25.5274 66.8959 25.4476C66.9137 25.4084 67.0433 25.3749 67.184 25.373C67.3248 25.3711 67.548 25.3084 67.68 25.2337C67.812 25.1591 68.0362 25.0964 68.1783 25.0945C68.3203 25.0926 68.4634 25.0484 68.496 24.9961C68.5287 24.9439 68.6561 24.9011 68.779 24.9011C69.1824 24.9011 69.4913 24.572 69.2851 24.3622C68.9551 24.0265 68.772 23.7713 68.587 23.3885C68.484 23.1761 68.3527 23.0019 68.2951 23.0014C68.2375 23.0007 68.1089 22.8506 68.0093 22.6676C67.9097 22.4846 67.7888 22.335 67.7403 22.335C67.6491 22.335 67.5396 22.238 66.8244 21.5228C66.5914 21.29 66.3636 21.0994 66.3183 21.0994C66.2727 21.0994 65.9093 20.8856 65.5107 20.6242C65.1091 20.3609 64.675 20.149 64.5372 20.149C64.2528 20.149 63.552 19.8655 63.552 19.7505C63.552 19.7082 63.3888 19.6738 63.1894 19.6738C62.9899 19.6738 62.7308 19.6072 62.6134 19.5257C62.4524 19.4141 62.1701 19.3806 61.464 19.3891C60.3461 19.4027 60.2297 19.3877 60.672 19.2877C61.1295 19.1841 62.5303 19.253 62.5735 19.381ZM60.24 19.5787C60.2074 19.631 60.0346 19.6738 59.856 19.6738C59.6775 19.6738 59.5078 19.7118 59.4788 19.7581C59.4497 19.8045 59.2786 19.8698 59.0981 19.9033C58.9179 19.9368 58.3882 20.1547 57.9211 20.3878C57.4541 20.6209 57.0072 20.8124 56.928 20.8136C56.8488 20.8145 56.6544 20.9005 56.496 21.0044C56.3376 21.1082 56.1416 21.1935 56.0604 21.1937C55.9791 21.1942 55.7431 21.28 55.536 21.3845C55.3289 21.4891 55.1086 21.5746 55.0467 21.5746C54.9847 21.5746 54.8103 21.6385 54.6591 21.7167C54.5079 21.7946 54.307 21.8588 54.2127 21.8593C54.1183 21.8595 53.9379 21.9267 53.8114 22.0087C53.5512 22.1777 52.9791 22.1582 52.9193 21.9785C52.8924 21.8973 52.9975 21.8597 53.2529 21.8597C53.4579 21.8597 53.6667 21.8201 53.7168 21.7716C53.767 21.7234 54.0022 21.6554 54.2393 21.6212C54.4767 21.5867 54.6927 21.5261 54.7193 21.4865C54.7462 21.447 54.9747 21.3372 55.2272 21.2429C55.4796 21.1486 55.7091 21.0348 55.7369 20.9903C55.7645 20.9457 55.8696 20.9093 55.9704 20.9093C56.1766 20.9093 56.863 20.6149 56.9119 20.5054C56.9297 20.4662 57.0029 20.4341 57.0749 20.4341C57.1469 20.4341 57.3946 20.3348 57.6255 20.2134C57.8561 20.0917 58.3337 19.9107 58.6865 19.8106C59.0393 19.7104 59.328 19.5961 59.328 19.5562C59.328 19.5162 59.5467 19.4837 59.8138 19.4837C60.1131 19.4837 60.2765 19.52 60.24 19.5787ZM52.512 22.2399C52.1667 22.3494 51.936 22.3494 51.936 22.2399C51.936 22.1876 52.1196 22.1491 52.344 22.1544C52.6906 22.1625 52.716 22.1753 52.512 22.2399ZM51.7872 22.4181C51.618 22.5728 50.5217 22.6125 50.3333 22.4711C50.1826 22.3578 50.2714 22.3407 51.0192 22.338C51.516 22.3361 51.84 22.3701 51.7872 22.4181ZM49.728 22.6201C49.8259 22.6826 49.5795 22.708 48.96 22.6987C48.1925 22.6873 48.1241 22.675 48.528 22.6201C49.2675 22.5196 49.5711 22.5196 49.728 22.6201ZM62.1552 23.3916C62.2054 23.4377 62.388 23.4755 62.5611 23.4755C62.7999 23.4755 62.9156 23.5384 63.0418 23.7368C63.133 23.8806 63.3044 24.116 63.4222 24.26C63.834 24.7633 63.7313 25.9934 63.253 26.2861C63.115 26.3705 63.162 26.01 63.3151 25.8097C63.5023 25.5645 63.5004 24.7707 63.312 24.616C63.2328 24.5509 63.168 24.4173 63.168 24.3192C63.168 24.2211 63.1351 24.1408 63.0951 24.1408C63.055 24.1408 62.9122 24.04 62.778 23.9167C62.3381 23.5128 61.7019 23.4225 60.4356 23.5838C59.8244 23.6617 59.3048 23.7059 59.2808 23.6822C59.1701 23.5724 59.3731 23.4755 59.7139 23.4755C59.9199 23.4755 60.1433 23.4172 60.2105 23.3462C60.3478 23.2008 61.9892 23.2393 62.1552 23.3916ZM59.1773 23.7499C59.2371 23.8457 58.8571 23.9675 58.7338 23.892C58.6894 23.8647 58.6779 23.8026 58.7081 23.7539C58.7784 23.6416 59.108 23.6387 59.1773 23.7499ZM58.603 23.9426C58.6327 23.9904 58.3551 24.1222 57.9855 24.2353C57.6161 24.3484 57.2892 24.4805 57.2592 24.5285C57.1923 24.6357 56.832 24.6454 56.832 24.5399C56.832 24.4126 57.0533 24.2358 57.2127 24.2358C57.2955 24.2358 57.5136 24.1526 57.6975 24.0512C58.0541 23.8542 58.5135 23.7993 58.603 23.9426ZM56.64 24.711C56.64 24.7633 56.551 24.8061 56.4423 24.8061C56.3335 24.8061 56.2714 24.7633 56.304 24.711C56.3367 24.6587 56.4257 24.616 56.5018 24.616C56.5779 24.616 56.64 24.6587 56.64 24.711ZM56.16 24.9961C56.16 25.0484 56.1067 25.0912 56.0415 25.0912C55.8895 25.0912 54.9041 25.5757 54.7371 25.7325C54.6675 25.7978 54.5523 25.8515 54.4812 25.8515C54.4102 25.8515 54.336 25.8993 54.3163 25.9575C54.2967 26.0157 54.1959 26.0459 54.0924 26.0247C53.94 25.9936 53.9818 25.9416 54.3113 25.7527C54.5352 25.6241 54.7188 25.4654 54.7193 25.4001C54.7198 25.3347 54.7956 25.2791 54.888 25.2768C54.9804 25.2741 55.2072 25.1934 55.392 25.0969C55.766 24.9018 56.16 24.8503 56.16 24.9961ZM53.664 26.4218C53.4792 26.5784 53.2956 26.7067 53.256 26.7067C53.2164 26.7069 53.184 26.7433 53.184 26.7877C53.184 26.8321 52.9032 27.1576 52.56 27.5112C52.2168 27.8645 51.936 28.2131 51.936 28.2858C51.936 28.3583 51.8935 28.4177 51.8419 28.4177C51.7901 28.4177 51.7205 28.5246 51.6874 28.6553C51.6543 28.786 51.5888 28.8929 51.5417 28.8929C51.4944 28.8929 51.456 28.9518 51.456 29.0238C51.456 29.0958 51.3912 29.2079 51.312 29.273C51.2328 29.3382 51.168 29.4722 51.168 29.571C51.168 29.6699 51.1306 29.825 51.085 29.9158C50.8412 30.3998 50.7571 30.8581 50.7149 31.9342C50.6892 32.5877 50.6295 33.1629 50.5822 33.2126C50.5349 33.2622 50.496 33.3801 50.496 33.4746C50.496 33.7158 50.0127 34.579 49.7422 34.8212C49.6181 34.9321 49.4345 35.098 49.3342 35.1894C49.2341 35.2809 49.1088 35.3558 49.056 35.3558C49.0032 35.3558 48.96 35.394 48.96 35.4406C48.96 35.533 48.6689 35.6694 48.6055 35.6067C48.5842 35.5855 48.8328 35.3173 49.1583 35.0105C49.8111 34.3954 50.3016 33.6402 50.3031 33.2489C50.3035 33.1097 50.353 32.9795 50.413 32.9595C50.484 32.9362 50.5299 32.5449 50.5443 31.8349C50.5668 30.7419 50.7312 29.8576 50.953 29.638C51.0185 29.5731 51.072 29.4629 51.072 29.3928C51.072 29.0929 51.7308 28.0418 52.2439 27.5226C52.5499 27.2132 52.8 26.9274 52.8 26.8875C52.8 26.8476 52.8864 26.7877 52.992 26.7544C53.0976 26.7212 53.184 26.6435 53.1843 26.5817C53.1845 26.4536 53.6393 26.1583 53.856 26.1457C53.9355 26.1409 53.8491 26.265 53.664 26.4218ZM63.168 26.5123C63.168 26.556 63.0384 26.729 62.88 26.897C62.7216 27.065 62.592 27.2334 62.592 27.2717C62.592 27.333 62.2812 27.6438 61.4705 28.3939C61.3433 28.5115 61.1981 28.6078 61.1477 28.6078C61.0973 28.6078 61.056 28.6691 61.056 28.7439C61.056 28.877 60.7023 29.0495 60.612 28.9604C60.5871 28.9357 61.1088 28.3735 61.7715 27.7113C62.4339 27.0493 62.976 26.4643 62.976 26.4116C62.976 26.3588 63.0192 26.3419 63.072 26.3743C63.1248 26.4066 63.168 26.4688 63.168 26.5123ZM69.1875 31.4205C69.2276 31.5412 67.2492 31.6907 67.0704 31.5807C66.912 31.4833 68.017 31.2868 68.6323 31.3029C68.9187 31.3103 69.1685 31.3633 69.1875 31.4205ZM70.368 31.4215C70.6056 31.4498 70.8864 31.5094 70.992 31.5543C71.0976 31.599 71.4216 31.708 71.712 31.7967C72.0024 31.8851 72.2811 31.9951 72.3312 32.0409C72.3814 32.0868 72.4956 32.1243 72.5849 32.1243C72.6744 32.1243 72.7723 32.1885 72.8028 32.2669C72.8331 32.3453 72.9459 32.4094 73.0529 32.4094C73.1602 32.4094 73.248 32.4522 73.248 32.5045C73.248 32.5568 73.2932 32.5995 73.3481 32.5995C73.4031 32.5995 73.6822 32.7706 73.968 32.9797C74.2539 33.1888 74.533 33.3599 74.5879 33.3599C74.6429 33.3599 74.688 33.4418 74.688 33.5421C74.688 33.6422 74.7204 33.7384 74.76 33.756C74.7996 33.7733 75.0248 34.1725 75.2604 34.6429C75.4961 35.1134 75.7162 35.5197 75.7495 35.5459C75.7831 35.572 75.8396 35.711 75.8751 35.8547C75.9106 35.9985 75.9821 36.1161 76.034 36.1161C76.0856 36.1161 76.128 36.223 76.128 36.3537C76.128 36.4844 76.1712 36.5913 76.224 36.5913C76.2768 36.5913 76.32 36.6502 76.32 36.7222C76.32 36.7942 76.3848 36.9064 76.464 36.9715C76.5432 37.0366 76.608 37.1701 76.608 37.2683C76.608 37.3664 76.6512 37.4467 76.704 37.4467C76.7568 37.4467 76.8 37.4923 76.8 37.5479C76.8 37.6035 76.902 37.8708 77.0268 38.1419C77.1516 38.413 77.2841 38.731 77.3213 38.8486C77.3585 38.9662 77.4293 39.0624 77.4785 39.0624C77.5277 39.0624 77.568 39.1225 77.568 39.1962C77.568 39.2698 77.6811 39.5585 77.8195 39.8377C78.1147 40.4339 78.2062 40.6489 78.2885 40.9395C78.3216 41.0571 78.3893 41.1533 78.4385 41.1533C78.4877 41.1533 78.528 41.2577 78.528 41.3853C78.528 41.5128 78.5664 41.6407 78.6132 41.6694C78.66 41.6982 78.7268 41.8716 78.7616 42.0553C78.7964 42.2387 78.866 42.3889 78.9164 42.3889C78.9668 42.3889 79.008 42.4749 79.008 42.5802C79.008 42.7722 79.0304 42.8308 79.3277 43.4182C79.416 43.5924 79.488 43.8122 79.488 43.9065C79.488 44.0008 79.5526 44.2004 79.6316 44.3501C79.7103 44.4998 79.7751 44.7186 79.7756 44.8362C79.7758 44.9539 79.8192 45.0501 79.872 45.0501C79.9248 45.0501 79.968 45.1972 79.968 45.377C79.968 45.5569 80.0088 45.7292 80.0585 45.7596C80.1082 45.79 80.178 46.0062 80.2133 46.2403C80.2488 46.4743 80.31 46.6658 80.3496 46.6658C80.5217 46.6658 80.5424 47.6509 80.3739 47.8163C80.2827 47.9056 79.992 48.2221 79.728 48.5196C79.464 48.8169 79.0752 49.2422 78.864 49.4643C78.6528 49.6865 78.1776 50.2061 77.808 50.6193C76.5188 52.0602 74.6086 53.794 74.3105 53.794C74.2541 53.794 74.208 53.8275 74.208 53.8684C74.208 53.9092 73.9164 54.091 73.56 54.2723C73.2036 54.4536 72.8976 54.6339 72.8801 54.6731C72.8623 54.7123 72.7111 54.7435 72.5441 54.7423L72.24 54.7401L72.48 54.5543C72.612 54.4522 72.775 54.3676 72.8419 54.3664C72.9089 54.3652 73.135 54.2573 73.344 54.1266C73.5531 53.996 73.7657 53.889 73.8163 53.889C73.8982 53.889 74.5752 53.3649 74.9842 52.9849C75.0677 52.9072 75.1798 52.8436 75.2333 52.8436C75.2868 52.8436 75.6072 52.5587 75.9454 52.2106C76.2833 51.8622 76.8516 51.2934 77.208 50.946C77.5644 50.5989 77.856 50.2796 77.856 50.2368C77.856 50.1938 78.18 49.8388 78.576 49.4482C78.972 49.0573 79.296 48.6926 79.296 48.6372C79.296 48.5821 79.52 48.3333 79.7936 48.0843L80.2908 47.6314L80.1855 47.1249C80.1276 46.8462 80.029 46.4472 79.9664 46.2381C79.9037 46.029 79.8308 45.6973 79.8041 45.5008C79.7775 45.3046 79.7172 45.1202 79.67 45.0914C79.6227 45.0624 79.584 44.9593 79.584 44.8621C79.584 44.765 79.4707 44.462 79.332 44.1888C79.1935 43.9155 79.08 43.5829 79.08 43.4496C79.08 43.316 79.0208 43.1481 78.948 43.0763C78.8756 43.0043 78.8156 42.8739 78.8148 42.7859C78.8141 42.6983 78.685 42.3756 78.528 42.0691C78.3711 41.7623 78.265 41.4753 78.2926 41.4311C78.3204 41.3867 78.2333 41.1788 78.0994 40.9687C77.9655 40.7587 77.856 40.5574 77.856 40.5213C77.856 40.4082 77.2692 39.257 77.1855 39.2059C77.1418 39.1791 77.1279 39.0748 77.1545 38.974C77.186 38.855 77.1322 38.7469 77.0014 38.6661C76.8908 38.5974 76.8 38.4656 76.8 38.3729C76.8 38.2802 76.764 38.1303 76.7204 38.0395C76.5747 37.738 76.3558 37.3072 76.2262 37.0665C75.9994 36.6457 75.936 36.5008 75.936 36.4027C75.936 36.3499 75.7911 36.1033 75.614 35.855C75.4368 35.6064 75.1942 35.1894 75.0747 34.9281C74.9549 34.6667 74.8191 34.3785 74.7725 34.2877C74.7262 34.197 74.688 34.0625 74.688 33.9888C74.688 33.9152 74.5476 33.7427 74.376 33.6053C73.4621 32.8742 72.9178 32.5045 72.7548 32.5045C72.5278 32.5045 71.616 32.04 71.616 31.9243C71.616 31.8775 71.4286 31.8392 71.1994 31.8392C70.9702 31.8392 70.5706 31.7755 70.3114 31.6976C70.0522 31.6199 69.7212 31.5557 69.576 31.555C69.4308 31.5545 69.312 31.5184 69.312 31.4749C69.312 31.3184 69.4579 31.2563 69.6948 31.3127C69.8275 31.3443 70.1304 31.3932 70.368 31.4215ZM66.72 31.7442C66.72 31.7964 66.5796 31.8385 66.408 31.8378C66.1714 31.8366 66.1308 31.814 66.24 31.7442C66.4287 31.6235 66.72 31.6235 66.72 31.7442ZM67.56 32.475C67.4676 32.4988 67.3164 32.4988 67.224 32.475C67.1316 32.451 67.2072 32.4315 67.392 32.4315C67.5768 32.4315 67.6524 32.451 67.56 32.475ZM69.12 32.8488C69.12 32.9807 69.0958 32.9847 68.952 32.8756C68.8596 32.8055 68.766 32.7362 68.744 32.7214C68.7221 32.7067 68.7977 32.6946 68.9119 32.6946C69.0399 32.6946 69.12 32.754 69.12 32.8488ZM72.192 34.2084C72.192 34.2568 72.2676 34.316 72.36 34.3398C72.5019 34.3766 72.5036 34.3849 72.3718 34.3944C72.2859 34.4003 72.1618 34.3412 72.096 34.2628C72.0135 34.1642 72.0099 34.1202 72.0843 34.1202C72.1436 34.1202 72.192 34.1599 72.192 34.2084ZM47.1591 35.2607C47.3789 35.4698 47.5932 35.6409 47.6355 35.6409C47.6775 35.6409 47.712 35.6837 47.712 35.7359C47.712 35.7882 47.6472 35.831 47.568 35.831C47.4888 35.831 47.424 35.7668 47.424 35.6884C47.424 35.6093 47.3386 35.5459 47.232 35.5459C47.1264 35.5459 47.04 35.5031 47.04 35.4508C47.04 35.3985 46.9973 35.3558 46.9452 35.3558C46.7976 35.3558 46.4681 35.0459 46.5226 34.9587C46.6143 34.8116 46.7597 34.8808 47.1591 35.2607ZM30.0672 35.8167C29.9455 35.8507 30.5484 35.8785 31.4064 35.8785C32.2644 35.8785 32.8392 35.8514 32.6832 35.8184C32.3093 35.7393 30.3487 35.7378 30.0672 35.8167ZM63.312 35.8279C63.1536 35.8659 63.456 35.8766 63.984 35.8512C64.512 35.826 64.962 35.7896 64.9841 35.7706C65.0568 35.7074 63.6053 35.7571 63.312 35.8279ZM65.52 35.8364C66.0063 35.936 66.3991 35.9315 66 35.831C65.8416 35.7911 65.5824 35.7583 65.424 35.758C65.1819 35.7578 65.1972 35.7704 65.52 35.8364ZM74.28 35.9838C74.4219 36.1242 74.4199 36.1339 74.2572 36.1026C74.1598 36.0838 74.0619 36.0151 74.04 35.9498C73.9848 35.7854 74.0957 35.8013 74.28 35.9838ZM29.184 36.0372C28.4868 36.3228 27.8468 36.6296 27.8799 36.6624C27.9005 36.6828 28.1004 36.6072 28.3239 36.4944C28.5473 36.3815 28.9728 36.21 29.2692 36.1135C29.5656 36.017 29.7216 35.9381 29.616 35.9384C29.5104 35.9386 29.316 35.983 29.184 36.0372ZM33.168 36.0211C33.4551 36.1432 33.6948 36.1432 33.504 36.0211C33.4248 35.9705 33.2736 35.9312 33.168 35.9341L32.976 35.9393L33.168 36.0211ZM48.288 36.1826C48.288 36.3737 48.2602 36.4117 48.1793 36.3316C48.1195 36.2724 48.0965 36.157 48.1282 36.075C48.2163 35.8483 48.288 35.8968 48.288 36.1826ZM62.4 36.0686C62.2152 36.1392 62.1288 36.1967 62.208 36.1967C62.2872 36.1967 62.5032 36.1392 62.688 36.0686C62.8728 35.998 62.9592 35.9405 62.88 35.9405C62.8008 35.9405 62.5848 35.998 62.4 36.0686ZM66.672 36.0719C66.8304 36.1439 67.0248 36.2012 67.104 36.1997C67.1832 36.1981 67.0968 36.1392 66.912 36.0686C66.4738 35.9015 66.3012 35.9039 66.672 36.0719ZM47.904 36.2644C47.904 36.3397 47.8608 36.4012 47.808 36.4012C47.7552 36.4012 47.712 36.3131 47.712 36.2054C47.712 36.0978 47.7552 36.0363 47.808 36.0686C47.8608 36.1009 47.904 36.189 47.904 36.2644ZM34.08 36.242C34.08 36.2646 34.4427 36.4846 34.886 36.731C35.7586 37.216 36.883 38.2455 37.3049 38.9458C37.4381 39.1667 37.5696 39.3475 37.5972 39.3475C37.8355 39.3475 36.6708 37.9295 35.952 37.3443C35.4488 36.9344 34.08 36.1287 34.08 36.242ZM56.304 36.4428C56.0456 36.65 55.9311 36.6723 55.1835 36.6621C54.6348 36.6548 54.3005 36.6923 54.2036 36.7721C53.904 37.0181 48.8019 37.0432 48.5729 36.7999C48.469 36.6897 48.3855 36.544 48.3872 36.4766C48.3891 36.3967 48.4349 36.4122 48.5177 36.52C48.6569 36.7016 54.24 36.7847 54.24 36.6051C54.24 36.5604 54.5417 36.4989 54.9103 36.4682C55.279 36.4376 55.657 36.3684 55.7503 36.3147C55.8437 36.261 56.0712 36.2159 56.256 36.2145L56.592 36.2121L56.304 36.4428ZM61.488 36.4549C61.0745 36.7163 61.0987 36.718 61.656 36.4663C61.854 36.3768 62.016 36.2829 62.016 36.2575C62.016 36.1615 61.86 36.2197 61.488 36.4549ZM74.9688 36.6728C75.0874 36.784 75.0824 36.7971 74.9328 36.7679C74.8371 36.7491 74.6895 36.627 74.6045 36.4963C74.4403 36.2435 74.5865 36.3143 74.9688 36.6728ZM27.3224 36.9394C26.9019 37.2117 25.6383 38.3971 25.7683 38.3971C25.8149 38.3971 26.0732 38.17 26.3424 37.8924C26.6117 37.6149 27.0372 37.2495 27.288 37.0801C27.5388 36.9109 27.744 36.7529 27.744 36.7294C27.744 36.6678 27.7349 36.6723 27.3224 36.9394ZM47.328 36.7814C47.328 36.8337 47.2632 36.8764 47.184 36.8764C47.1048 36.8764 47.04 36.8337 47.04 36.7814C47.04 36.7291 47.1048 36.6864 47.184 36.6864C47.2632 36.6864 47.328 36.7291 47.328 36.7814ZM60.5664 36.9829C59.5565 37.6919 57.7042 39.9178 58.1242 39.9178C58.1506 39.9178 58.2653 39.737 58.3791 39.516C58.8399 38.6221 59.6139 37.7701 60.6 37.072C61.0159 36.7776 61.1158 36.6864 61.0224 36.6864C61.0039 36.6864 60.7987 36.8199 60.5664 36.9829ZM69.2016 37.441C69.5662 37.7515 70.0913 38.3182 70.3687 38.7003C70.8838 39.4098 71.1355 39.7097 70.9913 39.4426C70.5879 38.6953 68.9052 36.8764 68.6172 36.8764C68.5743 36.8764 68.8373 37.1304 69.2016 37.441ZM25.3628 38.9436C24.9334 39.6137 24.672 40.0993 24.672 40.2269C24.672 40.2892 24.8045 40.0872 24.9665 39.7781C25.1285 39.469 25.3375 39.1066 25.4309 38.9728C25.6704 38.6297 25.746 38.4922 25.6956 38.4922C25.6716 38.4922 25.5219 38.6953 25.3628 38.9436ZM71.0981 39.7752C71.4716 40.7986 71.6283 41.3095 71.7005 41.7395C71.7569 42.076 71.7893 42.1499 71.7968 41.9593C71.8116 41.581 71.4682 40.3664 71.2229 39.9306C71.1161 39.7405 71.06 39.6707 71.0981 39.7752ZM31.056 39.8266C30.9204 39.8814 31.0169 39.9064 31.3841 39.9111C31.6699 39.9147 31.8859 39.9026 31.8641 39.8838C31.759 39.7952 31.2269 39.7574 31.056 39.8266ZM64.368 39.8228C64.1304 39.8826 64.1724 39.8962 64.608 39.9C64.9844 39.9031 65.0808 39.881 64.944 39.8228C64.722 39.7282 64.7432 39.7282 64.368 39.8228ZM76.7703 40.2742C76.746 40.3657 76.7264 40.2908 76.7264 40.1079C76.7264 39.9249 76.746 39.8501 76.7703 39.9416C76.7943 40.033 76.7943 40.1827 76.7703 40.2742ZM30.144 40.0604C29.8306 40.2379 29.9403 40.2398 30.349 40.0642C30.5266 39.9877 30.6072 39.9252 30.528 39.9249C30.4488 39.9247 30.276 39.9858 30.144 40.0604ZM32.3751 40.053C32.5726 40.1229 32.8481 40.2538 32.9871 40.3438C33.126 40.4341 33.2098 40.46 33.1733 40.4016C33.0795 40.2509 32.3931 39.9171 32.1879 39.9221C32.0933 39.9242 32.1775 39.9831 32.3751 40.053ZM37.9267 39.9556C37.9167 40.0851 38.3259 41.1633 38.3691 41.1206C38.39 41.1001 38.3004 40.8102 38.1701 40.4766C38.04 40.1433 37.9303 39.9088 37.9267 39.9556ZM63.4023 40.0573C63.2998 40.134 63.2614 40.1982 63.3168 40.1998C63.3723 40.2015 63.4587 40.1642 63.5088 40.1172C63.559 40.0699 63.6864 40.0107 63.792 39.9855C63.9792 39.9408 63.9792 39.9397 63.7863 39.9287C63.6778 39.9228 63.505 39.9805 63.4023 40.0573ZM65.52 39.9855C65.6256 40.0107 65.7531 40.0699 65.8032 40.1172C65.8534 40.1642 65.9371 40.2029 65.9895 40.2029C66.042 40.2029 66.001 40.1402 65.8983 40.0635C65.7958 39.9867 65.6256 39.9275 65.52 39.9318L65.328 39.9399L65.52 39.9855ZM57.8986 40.3084C57.8396 40.4764 57.8079 40.6306 57.8285 40.6508C57.8491 40.6712 57.9142 40.5503 57.9735 40.3826C58.0325 40.2146 58.0642 40.0604 58.0436 40.0402C58.0229 40.0197 57.9579 40.1407 57.8986 40.3084ZM29.5683 40.3742C29.1912 40.628 28.5142 41.4599 28.5128 41.6709C28.5123 41.7203 28.6349 41.5692 28.7849 41.3349C28.9349 41.1006 29.2481 40.7508 29.4809 40.5577C29.9287 40.1861 29.9669 40.106 29.5683 40.3742ZM62.4418 40.7278C62.1548 41.0165 61.9215 41.3052 61.9231 41.3693C61.9248 41.4335 62.0204 41.3608 62.1356 41.2075C62.425 40.8231 62.6936 40.5524 62.9734 40.3633C63.104 40.2752 63.1551 40.2029 63.0872 40.2029C63.0192 40.2029 62.7288 40.4391 62.4418 40.7278ZM66.288 40.3562C66.3936 40.4372 66.5484 40.5534 66.6319 40.6147C66.7155 40.6758 66.9423 40.9321 67.1359 41.1845C67.3296 41.4366 67.488 41.6136 67.488 41.5772C67.488 41.4387 66.8206 40.6209 66.5407 40.4168C66.2148 40.1787 65.9849 40.1238 66.288 40.3562ZM33.312 40.5612C33.312 40.6145 33.3771 40.6824 33.4563 40.7126C33.5357 40.7428 33.7301 40.9694 33.8883 41.2166C34.0467 41.4637 34.176 41.621 34.176 41.5663C34.176 41.4437 33.6895 40.7727 33.4721 40.5952C33.384 40.5235 33.312 40.5082 33.312 40.5612ZM57.655 41.0177C57.6195 41.1569 57.6092 41.2893 57.6317 41.3116C57.6545 41.3339 57.7018 41.2384 57.7371 41.0989C57.7726 40.9597 57.7829 40.8274 57.7603 40.805C57.7375 40.7827 57.6903 40.8782 57.655 41.0177ZM24.343 41.2078C24.3075 41.347 24.2972 41.4793 24.3197 41.5017C24.3425 41.524 24.3898 41.4285 24.4251 41.289C24.4606 41.1498 24.4709 41.0174 24.4483 40.9951C24.4255 40.9728 24.3783 41.0683 24.343 41.2078ZM38.4243 41.581C38.4252 41.7901 38.4449 41.8645 38.468 41.7462C38.491 41.6281 38.49 41.457 38.466 41.366C38.442 41.2752 38.4231 41.3719 38.4243 41.581ZM57.5302 41.8186C57.5302 42.0539 57.5489 42.1501 57.5717 42.0325C57.5948 41.9149 57.5948 41.7224 57.5717 41.6048C57.5489 41.4872 57.5302 41.5834 57.5302 41.8186ZM61.7436 41.7752C61.6822 41.9085 61.6337 42.0691 61.6359 42.132C61.6378 42.1948 61.7033 42.1009 61.7813 41.923C61.9452 41.549 61.9107 41.4123 61.7436 41.7752ZM24.2163 42.0563C24.2172 42.2653 24.2369 42.3397 24.26 42.2214C24.283 42.1033 24.282 41.9322 24.258 41.8412C24.234 41.7505 24.2151 41.8472 24.2163 42.0563ZM34.1827 41.7892C34.2043 42.0361 34.3546 42.2454 34.3613 42.0382C34.3649 41.9237 34.3248 41.8034 34.272 41.7711C34.2192 41.7388 34.1791 41.7469 34.1827 41.7892ZM67.5507 41.9612C67.5826 42.118 67.6407 42.503 67.6793 42.8166L67.7499 43.3868L67.7556 42.9116C67.7587 42.6503 67.7007 42.2653 67.6268 42.0563C67.5382 41.8058 67.5123 41.7733 67.5507 41.9612ZM28.368 42.1038C28.3315 42.268 28.3217 42.4224 28.3462 42.4464C28.3707 42.4706 28.4182 42.354 28.452 42.1869C28.532 41.7908 28.4544 41.7141 28.368 42.1038ZM38.5306 42.8641C38.5306 43.3607 38.5469 43.5639 38.5666 43.3156C38.5863 43.0673 38.5863 42.661 38.5666 42.4127C38.5469 42.1644 38.5306 42.3675 38.5306 42.8641ZM57.4176 42.7769C57.4227 43.0601 57.462 43.527 57.5047 43.8145C57.5592 44.1809 57.5669 44.0388 57.5311 43.3393C57.4769 42.2825 57.4016 41.9092 57.4176 42.7769ZM34.3968 42.8641C34.3968 43.1516 34.4148 43.2692 34.4369 43.1255C34.4587 42.9817 34.4587 42.7465 34.4369 42.6027C34.4148 42.459 34.3968 42.5766 34.3968 42.8641ZM71.8378 42.9116C71.8383 43.2253 71.8563 43.3422 71.8776 43.1713C71.899 43.0005 71.8985 42.7439 71.8767 42.6011C71.8548 42.4583 71.8373 42.598 71.8378 42.9116ZM24.2182 43.6245C24.2182 43.8597 24.2369 43.9559 24.2597 43.8383C24.2828 43.7207 24.2828 43.5282 24.2597 43.4106C24.2369 43.293 24.2182 43.3892 24.2182 43.6245ZM28.3364 43.3868C28.3349 43.4914 28.3707 43.6625 28.416 43.767C28.5212 44.0091 28.5212 43.7594 28.416 43.4344C28.3544 43.2433 28.3385 43.2341 28.3364 43.3868ZM61.6402 43.557C61.6104 44.1726 62.9571 45.7337 63.4988 45.7111C63.5544 45.709 63.4488 45.6277 63.264 45.5305C62.5906 45.1772 61.9604 44.3981 61.7218 43.6245C61.6724 43.4638 61.646 43.442 61.6402 43.557ZM67.4659 43.8877C67.2564 44.4644 67.3208 44.5283 67.5396 43.9607C67.632 43.7212 67.6894 43.5071 67.6673 43.485C67.645 43.4629 67.5543 43.6442 67.4659 43.8877ZM38.4154 44.0529C38.3614 45.0582 37.4796 46.724 36.4587 47.7502C35.6403 48.5726 35.4888 48.8375 36.2501 48.1147C37.4698 46.9571 38.5795 44.9284 38.4682 44.06L38.4308 43.767L38.4154 44.0529ZM24.3072 44.2422C24.3072 44.3468 24.3418 44.5392 24.384 44.6699C24.445 44.8581 24.4608 44.8678 24.4608 44.7174C24.4608 44.6129 24.4263 44.4204 24.384 44.2897C24.3231 44.1016 24.3072 44.0918 24.3072 44.2422ZM33.9399 44.4375C33.6718 44.9303 32.8822 45.5339 32.2616 45.7204C32.1 45.7688 32.0748 45.7969 32.1879 45.8024C32.7303 45.828 34.4218 44.4064 34.1588 44.146C34.1372 44.1246 34.0388 44.2558 33.9399 44.4375ZM71.4132 45.032C71.2779 45.4341 71.1355 45.8484 71.0969 45.953C71.0515 46.0758 71.0796 46.059 71.1763 45.9055C71.3417 45.6424 71.7555 44.3962 71.6967 44.338C71.6763 44.3175 71.5486 44.63 71.4132 45.032ZM28.7067 44.3955C28.7004 44.5328 29.3127 45.1946 29.5954 45.3566L29.904 45.5334L29.5774 45.2587C29.3979 45.1076 29.1291 44.8384 28.98 44.6607C28.831 44.4827 28.7081 44.3634 28.7067 44.3955ZM57.6488 44.6699C57.7707 45.0693 58.0692 45.7688 58.0747 45.6679C58.081 45.5552 57.702 44.5485 57.6276 44.4798C57.5993 44.4537 57.6089 44.5392 57.6488 44.6699ZM66.8621 44.8743C66.6545 45.0912 66.2244 45.3903 65.9064 45.5393C65.5882 45.6883 65.3928 45.8088 65.472 45.8071C65.8493 45.7988 66.7083 45.2554 67.0551 44.8054C67.3903 44.3701 67.321 44.3948 66.8621 44.8743ZM24.486 45.0235C24.4584 45.5519 26.4322 48.4714 26.6628 48.2433C26.6878 48.2183 26.5519 48.0625 26.3609 47.8964C25.8411 47.4444 24.9708 46.092 24.5839 45.1347C24.5335 45.0097 24.4894 44.9598 24.486 45.0235ZM30.0048 45.6137C30.055 45.6622 30.2256 45.7285 30.384 45.7608C30.6711 45.8197 30.6708 45.8192 30.349 45.6726C29.9806 45.5046 29.8733 45.4861 30.0048 45.6137ZM31.08 45.8791C31.2516 45.9002 31.5324 45.9002 31.704 45.8791C31.8756 45.8582 31.7352 45.8408 31.392 45.8408C31.0488 45.8408 30.9084 45.8582 31.08 45.8791ZM58.08 45.834C58.08 45.9651 58.7523 47.0225 58.9155 47.1479C59.0784 47.2731 59.0794 47.27 58.9296 47.0918C58.8425 46.9882 58.6534 46.6896 58.5096 46.4282C58.2471 45.9506 58.08 45.7197 58.08 45.834ZM64.2939 45.8791C64.4643 45.9 64.7667 45.9005 64.9659 45.8798C65.1651 45.8591 65.0256 45.842 64.656 45.8416C64.2864 45.8411 64.1235 45.8579 64.2939 45.8791ZM53.2654 46.3401C53.4317 46.4223 53.568 46.5292 53.568 46.5777C53.568 46.6261 53.6328 46.6658 53.712 46.6658C53.7912 46.6658 53.856 46.7461 53.856 46.8443C53.856 46.9424 53.9208 47.0759 54 47.141C54.1584 47.271 54.2023 47.663 54.048 47.5687C53.9952 47.5364 53.952 47.4428 53.952 47.3606C53.952 47.1779 53.3194 46.5708 53.1293 46.5708C53.0537 46.5708 52.992 46.528 52.992 46.4757C52.992 46.4201 52.6702 46.3807 52.2183 46.3807C51.727 46.3807 51.4664 46.346 51.504 46.2856C51.601 46.1305 52.9234 46.1714 53.2654 46.3401ZM70.8358 46.4044C70.5754 46.8882 69.6375 47.9465 69.109 48.3528C68.4814 48.8354 68.3914 48.9502 68.8435 48.6909C69.4131 48.3645 71.2894 46.1906 71.0016 46.1906C70.9735 46.1906 70.8989 46.2868 70.8358 46.4044ZM51.3053 46.465C51.3632 46.5575 51.0509 46.6625 50.712 46.6646C50.5932 46.6653 50.496 46.7086 50.496 46.7609C50.496 46.8131 50.442 46.8545 50.376 46.8528C50.31 46.8511 50.3772 46.7442 50.5253 46.6152C50.7927 46.3826 51.2043 46.3032 51.3053 46.465ZM44.2752 46.5769C45.4471 46.8103 47.4437 47.8184 47.2037 48.056C47.1713 48.0884 46.8584 48.061 46.5084 47.9957C44.756 47.6683 43.3587 48.3091 42.6663 49.758C42.3579 50.4033 42.1829 50.4753 42.049 50.0118C41.5735 48.3675 42.1469 46.8041 43.308 46.5784C43.5389 46.5332 43.7367 46.4919 43.7472 46.4862C43.7578 46.4805 43.9954 46.5213 44.2752 46.5769ZM53.3465 46.9151C54.0401 47.468 54.3103 48.6223 54.0103 49.7499C53.8392 50.3934 53.7401 50.3829 53.3431 49.6801C52.5005 48.1881 51.3312 47.6721 49.5199 47.9926C48.5151 48.1706 48.5218 47.9565 49.5375 47.433C51.362 46.4931 52.6049 46.3239 53.3465 46.9151ZM59.6108 47.9225C59.9508 48.2739 60.2496 48.5412 60.2746 48.5165C60.2995 48.4918 60.301 48.4609 60.2777 48.4479C60.2544 48.4348 59.9556 48.1675 59.6136 47.8538L58.992 47.2836L59.6108 47.9225ZM76.7703 47.8776C76.746 47.9691 76.7264 47.8942 76.7264 47.7113C76.7264 47.5283 76.746 47.4535 76.7703 47.545C76.7943 47.6364 76.7943 47.7861 76.7703 47.8776ZM54.4368 49.5368C54.325 50.4749 54.246 50.257 54.2532 49.0309L54.2602 47.8538L54.3811 48.422C54.4546 48.7667 54.4764 49.2046 54.4368 49.5368ZM50.832 48.1865C50.8683 48.2447 50.7192 48.2815 50.448 48.2815C50.1768 48.2815 50.0278 48.2447 50.064 48.1865C50.0967 48.1342 50.2695 48.0914 50.448 48.0914C50.6266 48.0914 50.7994 48.1342 50.832 48.1865ZM52.0486 48.4443C52.578 48.8717 53.0907 49.4467 53.1495 49.6787C53.1799 49.7989 53.2433 49.8972 53.2903 49.8972C53.3376 49.8972 53.376 50.0068 53.376 50.1406C53.376 50.2784 53.3345 50.3582 53.28 50.3249C53.2272 50.2926 53.184 50.2045 53.184 50.1292C53.184 49.9873 52.8545 49.6128 52.728 49.6112C52.6884 49.6107 52.5835 49.4396 52.4952 49.231C52.4043 49.0167 52.2684 48.8518 52.1832 48.8518C52.0999 48.8518 52.032 48.809 52.032 48.7567C52.032 48.7045 51.9814 48.6617 51.9195 48.6617C51.8578 48.6617 51.734 48.5961 51.6447 48.5163C51.5554 48.4362 51.3843 48.3519 51.2643 48.329C50.8903 48.2578 50.9266 48.1865 51.3367 48.1865C51.6211 48.1865 51.8172 48.2575 52.0486 48.4443ZM26.8186 48.355C26.8944 48.4766 27.456 48.8881 27.456 48.8221C27.456 48.7986 27.2974 48.6596 27.1037 48.5132C26.9098 48.3668 26.7814 48.2955 26.8186 48.355ZM34.848 49.0069C34.452 49.2377 33.9984 49.4643 33.84 49.5107C33.6816 49.557 33.6286 49.5988 33.7224 49.6036C33.9288 49.614 35.0904 49.0454 35.424 48.7708C35.7644 48.4904 35.6655 48.531 34.848 49.0069ZM27.552 48.8898C27.552 48.9395 28.2152 49.327 28.2999 49.327C28.3354 49.327 28.2055 49.2201 28.0114 49.0894C27.6713 48.8606 27.552 48.8088 27.552 48.8898ZM60.9099 48.9435C60.9732 49.0447 61.5526 49.3422 61.5984 49.2968C61.6157 49.28 61.4556 49.174 61.2427 49.0616C61.0301 48.9492 60.8803 48.896 60.9099 48.9435ZM50.4908 49.6931C50.4286 49.7136 50.3504 49.6898 50.317 49.6406C50.2834 49.5912 50.1708 49.5195 50.0667 49.4812C49.9097 49.4237 49.9013 49.3973 50.0172 49.3263C50.1142 49.2669 50.2255 49.3044 50.3803 49.4482C50.5183 49.5767 50.5606 49.6701 50.4908 49.6931ZM62.0828 49.5173C62.3043 49.6231 62.6283 49.7321 62.8028 49.7594C63.0056 49.791 62.9295 49.7435 62.592 49.6276C61.7237 49.3291 61.6613 49.3156 62.0828 49.5173ZM67.1326 49.4605C66.9636 49.5214 66.7959 49.6005 66.7596 49.6364C66.6706 49.7245 67.2384 49.5594 67.4571 49.4337C67.68 49.3051 67.5286 49.3177 67.1326 49.4605ZM33.072 49.7226C32.9136 49.7744 32.4168 49.85 31.968 49.8906L31.152 49.9643L31.776 49.9771C32.3352 49.9887 33.3413 49.8051 33.4819 49.6656C33.5571 49.5914 33.4116 49.6116 33.072 49.7226ZM29.904 49.8554C30.2208 49.926 30.6096 49.9818 30.768 49.979C30.9264 49.9764 30.7536 49.9174 30.384 49.8481C29.5087 49.6841 29.161 49.6893 29.904 49.8554ZM51.7023 50.3518C52.4333 50.9551 53.1999 51.4545 53.5599 51.5617C53.6875 51.5997 53.8966 51.7539 54.0245 51.9045C54.1524 52.0552 54.3288 52.1814 54.4167 52.1852C54.5043 52.189 54.7056 52.274 54.864 52.3743C55.0224 52.4743 55.2168 52.5827 55.296 52.615C55.3752 52.6471 55.668 52.7758 55.9467 52.9011C56.2253 53.0263 56.49 53.1287 56.5349 53.1287C56.5798 53.1287 56.6703 53.1928 56.736 53.2713C56.8018 53.3497 56.9583 53.4138 57.0838 53.4138C57.2093 53.4138 57.312 53.4566 57.312 53.5089C57.312 53.5611 57.3989 53.6039 57.5052 53.6039C57.6991 53.6039 57.7584 53.626 58.3517 53.9204C58.5276 54.0078 58.7357 54.0791 58.8139 54.0791C58.8922 54.0791 59.202 54.1955 59.5023 54.3379C59.8025 54.4802 60.156 54.6249 60.288 54.6593C60.516 54.7188 60.5131 54.7226 60.2352 54.7332C60.0742 54.7394 59.9014 54.7092 59.8512 54.6662C59.8011 54.6232 59.5008 54.5101 59.184 54.4153C58.4892 54.2069 58.3306 54.1511 57.8607 53.9496C57.661 53.8641 57.4126 53.794 57.3087 53.794C57.205 53.794 57.12 53.7512 57.12 53.6989C57.12 53.6467 57.0444 53.6025 56.952 53.6008C56.8596 53.5992 56.7003 53.535 56.5978 53.4582C56.4951 53.3815 56.3331 53.3188 56.2378 53.3188C56.1423 53.3188 56.064 53.276 56.064 53.2237C56.064 53.1715 55.9807 53.1287 55.879 53.1287C55.777 53.1287 55.6289 53.0645 55.5497 52.9861C55.4705 52.9077 55.3162 52.8436 55.207 52.8436C55.0976 52.8436 55.008 52.8082 55.008 52.7647C55.008 52.7214 54.7164 52.5423 54.36 52.3667C54.0036 52.1911 53.6904 52.0219 53.664 51.9908C53.6376 51.9599 53.3136 51.7584 52.944 51.5431C52.5744 51.3281 52.1619 51.0513 52.027 50.9285C51.8924 50.8056 51.6164 50.5768 51.414 50.42C51.2117 50.2632 50.9549 50.061 50.8431 49.9707L50.64 49.8065L50.8383 49.8043C50.9472 49.8032 51.336 50.0496 51.7023 50.3518ZM63.312 49.902C63.4176 49.9443 63.7632 49.9785 64.08 49.978C64.8039 49.9771 64.6699 49.9262 63.792 49.869C63.4015 49.8435 63.2004 49.8573 63.312 49.902ZM65.232 49.8972C64.7683 49.9602 64.765 49.9628 65.136 49.9719C65.3472 49.9771 65.6928 49.946 65.904 49.9027C66.3941 49.8024 65.9568 49.7989 65.232 49.8972ZM21.312 50.9902C21.41 51.1069 21.4032 51.1328 21.2758 51.1328C21.1901 51.1328 21.12 51.0686 21.12 50.9902C21.12 50.9118 21.1364 50.8477 21.1563 50.8477C21.1762 50.8477 21.2463 50.9118 21.312 50.9902ZM73.4321 52.7754C73.41 52.7901 73.3164 52.8595 73.224 52.9296C73.0803 53.0386 73.056 53.0346 73.056 52.9027C73.056 52.8079 73.1362 52.7485 73.2641 52.7485C73.3783 52.7485 73.454 52.7606 73.4321 52.7754ZM51.2986 54.1238C51.5024 54.3084 51.7011 54.4593 51.7399 54.4593C51.7788 54.4593 51.9663 54.609 52.1566 54.7919C52.3469 54.9749 52.5459 55.1246 52.5989 55.1246C52.652 55.1246 52.7945 55.223 52.916 55.3429C53.0372 55.4632 53.2013 55.5912 53.2803 55.6276C53.4497 55.7055 53.7876 55.9122 53.856 55.98C53.9038 56.027 54.3315 56.2637 54.84 56.5241C54.9852 56.5985 55.104 56.6987 55.104 56.7472C55.104 56.7957 55.1904 56.8353 55.296 56.8353C55.4016 56.8353 55.4885 56.8674 55.489 56.9066C55.4895 56.9458 55.6839 57.0623 55.921 57.1656C56.1581 57.2687 56.352 57.3864 56.352 57.427C56.352 57.4674 56.4048 57.5006 56.4694 57.5006C56.5668 57.5006 57.6991 58.0179 58.8797 58.6017C59.0292 58.6756 59.2272 58.7362 59.3199 58.7362C59.4123 58.7362 59.5188 58.7666 59.5565 58.8039C59.6626 58.9089 60.5081 59.2112 60.696 59.2114C60.7884 59.2114 60.864 59.2542 60.864 59.3064C60.864 59.3587 60.9612 59.4017 61.08 59.402C61.1988 59.4024 61.4199 59.4666 61.5711 59.5445C61.7223 59.6227 62.0139 59.6866 62.2191 59.6866C62.4243 59.6866 62.592 59.7253 62.592 59.7726C62.592 59.8201 62.808 59.8883 63.072 59.9242C63.3358 59.9601 63.576 60.0283 63.6056 60.0756C63.6351 60.1231 63.8909 60.1618 64.1736 60.1618C64.459 60.1618 64.7036 60.2079 64.7228 60.2652C64.7424 60.3234 65.1135 60.3902 65.5709 60.418C66.018 60.4451 66.4102 60.5085 66.4421 60.5591C66.5148 60.6746 70.3632 60.5988 71.2229 60.465C72.1704 60.3175 72.2528 60.4638 71.328 60.6522C70.4016 60.8409 68.0765 60.8792 66.96 60.724C66.5904 60.6727 66.086 60.634 65.839 60.6382C65.592 60.6425 65.1384 60.5824 64.831 60.5049C64.5235 60.4275 64.0776 60.3429 63.84 60.3172C63.271 60.2554 62.7127 60.1103 62.5589 59.9841C62.491 59.928 62.287 59.8731 62.1056 59.862C61.9244 59.8506 61.6908 59.7852 61.5867 59.7166C61.4825 59.6479 61.2773 59.5916 61.1307 59.5916C60.984 59.5916 60.864 59.5488 60.864 59.4965C60.864 59.4443 60.7426 59.4015 60.5943 59.4015C60.4462 59.4015 60.241 59.3388 60.1383 59.262C60.0358 59.1853 59.8359 59.1211 59.6938 59.1195C59.5517 59.1178 59.4087 59.0736 59.376 59.0213C59.3434 58.969 59.2138 58.9263 59.088 58.9263C58.9623 58.9263 58.8327 58.8835 58.8 58.8312C58.7674 58.779 58.6812 58.7362 58.6085 58.7362C58.4259 58.7362 58.1011 58.5924 57.648 58.3109C57.4368 58.1795 57.1992 58.0483 57.12 58.0191C57.0408 57.9901 56.8464 57.8967 56.688 57.8121C56.5296 57.7273 56.0967 57.5042 55.7261 57.3163C55.3553 57.1281 54.9233 56.8895 54.7661 56.7857C54.6087 56.6821 54.2691 56.4903 54.0111 56.3599C53.7531 56.2294 53.5239 56.0584 53.5018 55.98C53.4797 55.9016 53.2911 55.7557 53.0827 55.6559C52.8744 55.5558 52.704 55.442 52.704 55.4028C52.704 55.3636 52.5204 55.2422 52.296 55.1331C52.0716 55.0238 51.7839 54.8252 51.6567 54.6914C51.5295 54.5579 51.2945 54.3813 51.1344 54.2996C50.8102 54.1335 50.4895 53.7861 50.5587 53.6754C50.6191 53.5785 50.8527 53.7201 51.2986 54.1238ZM35.756 53.9907C35.6847 54.1048 35.424 54.106 35.424 53.9919C35.424 53.889 35.6323 53.8018 35.7377 53.861C35.778 53.8836 35.7862 53.942 35.756 53.9907ZM60.864 54.3873C60.864 54.427 60.7992 54.4593 60.72 54.4593C60.6408 54.4593 60.576 54.4165 60.576 54.3642C60.576 54.312 60.4726 54.2692 60.3463 54.2692C60.2199 54.2692 60.0944 54.2117 60.067 54.1416C60.0279 54.0404 60.1052 54.0451 60.4409 54.1647C60.6735 54.2473 60.864 54.3476 60.864 54.3873ZM26.016 54.2692C26.016 54.3821 25.8492 54.3821 25.584 54.2692C25.4232 54.2008 25.4427 54.1865 25.704 54.1808C25.8756 54.1772 26.016 54.2169 26.016 54.2692ZM70.368 54.6018C70.3023 54.6803 70.1458 54.7444 70.0203 54.7444C69.8948 54.7444 69.792 54.7872 69.792 54.8395C69.792 54.8917 69.7219 54.9345 69.6363 54.9345C69.5088 54.9345 69.5021 54.9086 69.6 54.7919C69.6658 54.7135 69.798 54.6494 69.894 54.6494C69.99 54.6494 70.0954 54.6066 70.128 54.5543C70.1607 54.5021 70.255 54.4593 70.3375 54.4593C70.4599 54.4593 70.4657 54.4854 70.368 54.6018ZM72.2388 54.8376C72.2715 54.8896 72.1255 54.958 71.9086 54.9922C71.6947 55.0262 71.52 55.0911 71.52 55.1367C71.52 55.1823 71.3957 55.2196 71.2438 55.2196C71.0919 55.2196 70.8123 55.2838 70.6229 55.3622C70.4333 55.4406 70.05 55.5009 69.7712 55.4962C69.2744 55.4879 69.271 55.4857 69.6 55.3978C69.7848 55.3484 70.0224 55.2698 70.128 55.2227C70.2864 55.1526 70.9798 55.0298 71.2544 55.0234C71.293 55.0224 71.4658 54.9611 71.6384 54.8867C72.0142 54.7252 72.1611 54.713 72.2388 54.8376ZM69 55.668C68.8548 55.6896 68.6172 55.6896 68.472 55.668C68.3268 55.6461 68.4456 55.6283 68.736 55.6283C69.0264 55.6283 69.1452 55.6461 69 55.668ZM80.4761 56.2413C80.442 56.3328 80.3136 56.5671 80.191 56.7622C80.0684 56.9572 79.968 57.1818 79.968 57.2611C79.968 57.3405 79.9277 57.4056 79.8785 57.4056C79.8293 57.4056 79.7631 57.4866 79.7312 57.5859C79.6995 57.685 79.5238 57.9233 79.3407 58.1153C79.1578 58.3076 79.008 58.4924 79.008 58.5261C79.008 58.6423 77.7476 59.7584 77.4178 59.9342C77.2364 60.0309 77.088 60.1431 77.088 60.1834C77.088 60.2238 76.5454 60.2569 75.8823 60.2569C75.103 60.2569 74.6976 60.2234 74.736 60.1618C74.7687 60.1096 74.9787 60.0668 75.2026 60.0668C75.4265 60.0668 75.6569 60.02 75.7145 59.963C75.7904 59.8879 75.8784 59.8905 76.0328 59.9722C76.4772 60.2077 77.952 59.6196 77.952 59.2071C77.952 59.1572 78.0039 59.1164 78.0675 59.1164C78.1978 59.1164 79.008 58.2976 79.008 58.1659C79.008 58.1189 79.062 58.0462 79.128 58.0044C79.3479 57.8651 79.5005 57.4883 79.4427 57.2276C79.3954 57.0147 79.4398 56.9313 79.7009 56.7413C79.8742 56.6148 80.0948 56.4134 80.191 56.2934C80.3976 56.0353 80.5642 56.0049 80.4761 56.2413ZM79.392 57.3087C79.392 57.36 79.284 57.4289 79.152 57.4617C79.02 57.4945 78.912 57.5593 78.912 57.6059C78.912 57.6527 78.8715 57.6907 78.822 57.6907C78.7723 57.6907 78.5957 57.8138 78.4292 57.9644C78.2626 58.1151 78.0116 58.2957 77.8712 58.3658C77.731 58.4361 77.5169 58.5665 77.3955 58.6559C77.2743 58.745 77.0475 58.8457 76.8915 58.8797C76.7357 58.9137 76.608 58.9774 76.608 59.0213C76.608 59.0653 76.4789 59.1294 76.3212 59.1636C76.1633 59.1979 76.0095 59.2656 75.9795 59.3138C75.9492 59.362 75.8192 59.4015 75.6903 59.4015C75.5614 59.4015 75.456 59.4435 75.456 59.4946C75.456 59.546 75.3372 59.6141 75.192 59.6462C75.0468 59.6783 74.7871 59.7669 74.6151 59.843C74.4427 59.9192 74.2592 59.9556 74.2071 59.9235C74.1548 59.8917 74.112 59.9043 74.112 59.9518C74.112 60.105 73.3731 60.3426 73.2562 60.2269C73.0779 60.0504 73.1379 59.9955 73.5819 59.9294C73.8183 59.8945 74.0367 59.8254 74.0674 59.7762C74.0981 59.727 74.2721 59.6866 74.4538 59.6866C74.6355 59.6866 74.784 59.6457 74.784 59.5958C74.784 59.546 74.9352 59.477 75.12 59.4428C75.3048 59.4084 75.456 59.3423 75.456 59.2958C75.456 59.2494 75.5856 59.2114 75.744 59.2114C75.9024 59.2114 76.032 59.1693 76.032 59.1183C76.032 59.0669 76.14 58.998 76.272 58.9652C76.404 58.9325 76.5125 58.8783 76.5132 58.8448C76.5137 58.811 76.6973 58.6989 76.9212 58.5951C77.1449 58.4912 77.3496 58.3843 77.376 58.3574C77.4694 58.2624 77.8102 58.0647 77.976 58.0096C78.0684 57.9787 78.144 57.921 78.144 57.8808C78.144 57.8407 78.2196 57.7829 78.312 57.752C78.5043 57.6881 78.7956 57.5078 78.9869 57.3343C79.1427 57.1929 79.392 57.1773 79.392 57.3087ZM53.9681 58.0633C53.9856 58.1113 54.1944 58.1709 54.432 58.1954C54.8657 58.2405 56.1682 58.5891 56.4603 58.7383C56.5462 58.7823 56.773 58.8474 56.9643 58.8828C57.1555 58.9184 57.312 58.9854 57.312 59.032C57.312 59.0783 57.4606 59.1164 57.6423 59.1164C57.8239 59.1164 57.9994 59.1591 58.032 59.2114C58.0647 59.2637 58.2077 59.3062 58.3498 59.306C58.6339 59.3055 59.4235 59.5414 59.8229 59.746C59.9631 59.818 60.2067 59.8767 60.3646 59.8767C60.5297 59.8767 60.6747 59.9366 60.7061 60.0176C60.7385 60.1015 60.8237 60.1347 60.9156 60.0998C61.0011 60.0673 61.3157 60.1148 61.6155 60.2051C61.915 60.2956 62.2896 60.4025 62.448 60.4429C62.6064 60.4833 62.9088 60.5608 63.12 60.6149C63.3312 60.6694 63.841 60.7898 64.2531 60.8827C64.6652 60.9756 65.024 61.0866 65.0508 61.1294C65.1221 61.2439 64.28 61.2246 64.1631 61.1089C64.0733 61.0201 63.6197 60.9129 62.6885 60.7606C62.5037 60.7304 62.2661 60.6539 62.1605 60.5905C62.0547 60.5268 61.7088 60.4208 61.392 60.3545C61.0752 60.2882 60.6799 60.1751 60.5136 60.1029C60.3471 60.0307 60.1325 59.9717 60.0363 59.9717C59.754 59.9717 58.848 59.7444 58.848 59.6733C58.848 59.6377 58.6752 59.5795 58.464 59.5441C58.2528 59.5087 58.08 59.4409 58.08 59.3932C58.08 59.3454 57.8856 59.3064 57.648 59.3064C57.4104 59.3064 57.216 59.2675 57.216 59.2197C57.216 59.172 57.0435 59.1042 56.8325 59.0688C56.6216 59.0337 56.4247 58.9657 56.3947 58.918C56.365 58.8702 56.1946 58.8312 56.016 58.8312C55.8375 58.8312 55.6671 58.7923 55.6373 58.7445C55.6073 58.6967 55.4107 58.6288 55.2 58.5936C54.9893 58.5585 54.7927 58.4905 54.7627 58.4427C54.733 58.395 54.5491 58.3536 54.3543 58.3508C54.1594 58.3477 53.8056 58.2645 53.568 58.1659L53.136 57.9865L53.5361 57.9811C53.7559 57.9782 53.9504 58.0153 53.9681 58.0633ZM72.9898 60.2654C72.8412 60.4125 72.2691 60.4237 72.2182 60.2806C72.1882 60.1963 72.3094 60.1618 72.6353 60.1618C72.9667 60.1618 73.0654 60.1906 72.9898 60.2654ZM74.5378 60.3419C74.5985 60.4391 74.3758 60.542 74.1041 60.542C74.0028 60.542 73.92 60.5848 73.92 60.637C73.92 60.6893 73.8523 60.7321 73.7695 60.7321C73.687 60.7321 73.4777 60.839 73.3047 60.9697C73.1314 61.1004 72.9653 61.2073 72.9351 61.2073C72.9048 61.2073 72.6948 61.3784 72.4683 61.5875L72.0564 61.9676L70.4203 61.9607C69.5203 61.9569 68.5464 61.9125 68.256 61.8621C67.9656 61.8118 67.4472 61.7462 67.104 61.7165C66.7608 61.6868 66.439 61.6243 66.3888 61.5775C66.3387 61.5307 66.1155 61.4924 65.8928 61.4924C65.4216 61.4924 65.1627 61.4133 65.2383 61.2924C65.3218 61.1586 65.6547 61.1892 66.9763 61.453C67.9265 61.6426 68.6182 61.711 70.0016 61.7519L71.7948 61.8051L72.0968 61.5062C72.2628 61.3418 72.4536 61.2073 72.5206 61.2073C72.5876 61.2073 72.7205 61.1218 72.816 61.0172C72.9115 60.9127 73.0642 60.8271 73.1551 60.8271C73.2461 60.8271 73.3743 60.763 73.44 60.6846C73.5058 60.6061 73.6361 60.542 73.7295 60.542C73.8231 60.542 73.9243 60.4778 73.9548 60.3994C74.0143 60.2455 74.4507 60.2025 74.5378 60.3419ZM52.512 64.1446C52.0632 64.294 51.4152 64.4905 51.072 64.5811C50.7288 64.6718 50.2784 64.808 50.0708 64.8835C49.8632 64.9593 49.453 65.0102 49.159 64.9966C48.3055 64.9574 48.4107 65.2414 49.704 66.4674C50.4368 67.1622 50.4382 67.1919 49.7578 67.6944C48.4604 68.6527 48.3833 69.1048 49.0798 71.6719C49.3613 72.7105 49.0272 73.2777 48.1339 73.2777C47.8733 73.2777 46.9776 74.2557 46.795 74.7399C46.6229 75.1963 46.7571 76.2627 47.0357 76.6517C47.0731 76.704 47.1792 77.1103 47.2716 77.5546C47.682 79.5277 47.9081 80.12 48.4517 80.6432C49.0971 81.2646 49.2276 81.2736 51.12 80.8267C52.8607 80.4156 53.3201 80.4907 53.6451 81.2387C53.9153 81.8607 53.9938 81.8766 54.7052 81.453C55.8749 80.7563 56.4509 79.8527 57.0377 77.7922C57.1419 77.4263 57.3399 76.8917 57.4776 76.6042C58.1909 75.1151 58.1844 74.7561 57.432 74.0653C56.1072 72.8488 55.0498 72.6397 53.2176 73.2318C52.8161 73.3616 52.3311 73.4687 52.1398 73.4701C51.6427 73.4735 51.0288 73.6284 50.4195 73.9042C50.1291 74.0359 49.7724 74.167 49.6272 74.1958C49.2665 74.2673 48.738 74.8466 48.5355 75.3924C48.3144 75.9888 48.2228 75.9802 47.7768 75.3228C47.0427 74.2405 48.2717 73.0719 49.8147 73.3853C50.3372 73.4915 50.3746 73.4846 51.168 73.1361C51.6168 72.9391 52.1201 72.7191 52.2864 72.6475C52.453 72.576 52.6906 72.5169 52.8144 72.5164C53.5973 72.5128 54.3627 72.0763 54.523 71.542C54.7651 70.7355 54.925 70.344 55.0563 70.2363C55.5411 69.8379 55.3956 69.1764 54.6355 68.3226C53.8234 67.4109 53.2915 67.4128 51.696 68.334C49.8715 69.3876 49.3409 69.4757 49.3455 68.7247C49.3476 68.3538 50.1032 67.7289 50.9256 67.4176C55.4307 65.713 55.8763 65.3623 54.8736 64.3114C54.3391 63.7513 53.8064 63.7138 52.512 64.1446ZM43.416 64.0788C42.8083 64.2011 42.8047 64.2244 43.3402 64.5602C43.9707 64.9555 44.736 65.6691 44.736 65.8615C44.736 66.077 44.6499 66.1426 43.7936 66.5777C42.9632 66.9997 42.9634 67.2301 43.7938 66.9595C44.5306 66.7193 45.3252 66.7483 46.1062 67.0438C47.16 67.4428 47.6184 67.2125 47.6136 66.2868C47.6062 64.7944 45.4623 63.6668 43.416 64.0788ZM29.7739 65.3911C27.5405 66.3246 26.7819 71.5135 28.3109 75.3988C29.6151 78.7132 32.0907 81.1391 35.5848 82.5272C37.04 83.1055 37.7496 82.8877 37.128 82.0539C37.0092 81.8945 36.8256 81.6457 36.72 81.5007C36.6144 81.3558 36.4407 81.1251 36.3339 80.988C34.7151 78.9082 32.6844 74.5831 32.1644 72.1068C32.1183 71.8882 32.0143 71.4101 31.9332 71.0442C31.74 70.1743 31.6047 69.1433 31.4837 67.6227C31.3234 65.6075 30.8218 64.9529 29.7739 65.3911ZM65.2853 65.4146C64.8372 65.6391 64.7095 66.0262 64.5528 67.635C64.4002 69.2046 64.3124 69.8923 64.1422 70.8541C63.8415 72.5525 63.0005 75.0718 62.1103 76.9404C61.3291 78.5801 60.5083 79.9157 59.3472 81.4373C58.0961 83.0761 58.9083 83.3008 61.536 82.0432C66.0927 79.8622 68.8227 75.1738 68.4936 70.0938C68.2947 67.0206 66.7056 64.703 65.2853 65.4146ZM21.168 67.8061C17.6837 69.0671 20.5848 76.4129 25.632 79.1095C25.8168 79.2081 26.2392 79.4333 26.5704 79.6099C27.6511 80.1854 28.3104 79.7125 27.4481 78.9802C26.7847 78.4169 25.0563 74.6111 24.6207 72.7549C24.4855 72.1799 24.3341 71.5548 24.2837 71.3659C24.2333 71.1768 24.192 70.9356 24.192 70.8299C24.192 70.4266 23.6948 68.9632 23.4128 68.537C22.916 67.7854 22.0258 67.4958 21.168 67.8061ZM73.6159 67.7586C72.6742 68.057 72.2539 68.8352 71.7648 71.1867C71.1209 74.2823 70.3584 76.2045 68.838 78.5646C67.6928 80.3427 68.4051 80.4249 70.944 78.808C72.9024 77.5608 75.84 74.0974 75.84 73.0358C75.84 73.0063 75.9315 72.7835 76.0431 72.5406C77.192 70.0441 75.6972 67.099 73.6159 67.7586ZM14.7197 68.8874C12.3368 69.8462 13.0479 72.927 16.2224 75.3995C16.5665 75.6675 16.8696 75.9092 16.896 75.9365C17.1108 76.1594 19.3464 77.4973 19.6781 77.6014C20.2853 77.7922 20.2908 77.193 19.6872 76.6198C18.072 75.0868 17.2054 73.3181 16.7664 70.6593C16.5022 69.0604 15.8002 68.4526 14.7197 68.8874ZM80.1586 68.8919C79.6891 69.1391 79.4381 69.6397 79.2521 70.6999C78.7803 73.3896 77.9852 74.9953 76.3469 76.568C75.126 77.7404 76.1866 77.925 77.8236 76.8251C78.0046 76.7037 78.1755 76.6042 78.2036 76.6042C78.3622 76.6042 80.3374 75.0065 81.0812 74.2763C82.861 72.5292 83.2335 70.6436 82.0445 69.399C81.4604 68.7874 80.7298 68.5909 80.1586 68.8919ZM43.6711 69.116C43.4815 69.2355 43.1602 69.4784 42.9569 69.6554C42.7539 69.8322 42.2393 70.1382 41.8138 70.3349C39.2703 71.5111 39.3046 71.5023 38.5035 71.1896C37.8499 70.9346 37.8202 71.0596 38.3383 71.8829C39.6619 73.9853 40.838 74.1459 42.8081 72.4929C43.4302 71.9708 43.4688 72.5026 42.888 73.5949C42.4687 74.3835 41.676 75.2624 40.464 76.2824L39.888 76.7672L39.9063 77.4222C39.9269 78.1764 40.0942 78.6355 40.4801 78.998C41.1588 79.6353 41.5356 79.5037 42.3233 78.3541C42.8256 77.6211 43.0582 77.3645 43.2202 77.3645C43.2641 77.3645 43.2881 78.252 43.2739 79.3366C43.2487 81.2591 43.2535 81.3178 43.4719 81.6652C43.8024 82.1915 44.2556 82.1176 44.4912 81.4988C44.5311 81.3943 44.5783 80.4748 44.5966 79.4554C44.6146 78.4361 44.6532 77.0889 44.6823 76.4616L44.7353 75.3211L46.0954 72.6124C46.8435 71.1226 47.5584 69.7647 47.6847 69.5948C47.8486 69.3738 47.8887 69.2419 47.826 69.131C47.7557 69.0067 47.5174 69.2693 46.6248 70.4535C45.1503 72.4104 45.0271 72.4613 45.6372 70.8596C46.0001 69.907 45.984 69.6936 45.516 69.2495C45.1224 68.8763 44.1615 68.8066 43.6711 69.116ZM52.9906 69.8291C52.9925 70.2137 52.3145 70.8971 51.5907 71.24C50.9371 71.5498 50.9208 71.5453 50.6343 70.9853C50.2327 70.2012 50.3604 69.9944 51.4241 69.706C51.732 69.6224 52.1784 69.5007 52.416 69.4356C52.9095 69.3004 52.9882 69.3541 52.9906 69.8291ZM55.0755 74.6874C55.4084 75.1196 55.4662 75.4508 55.3008 75.9797C55.2504 76.1401 55.1381 76.6778 55.051 77.1744C54.9639 77.671 54.7947 78.3767 54.6749 78.7426C54.5554 79.1085 54.4292 79.5255 54.3948 79.6693C54.3106 80.0219 54.1073 79.9984 53.8755 79.6092C53.7406 79.383 53.5601 79.2471 53.2659 79.1503C52.4381 78.8783 52.6577 78.0153 53.6863 77.4969C54.5206 77.0765 54.4224 76.0629 53.52 75.7775C52.8732 75.5732 53.0859 75.0314 54.0211 74.5004C54.6022 74.1706 54.6893 74.186 55.0755 74.6874ZM50.2995 75.1429C51.8112 75.481 51.3598 76.8508 49.752 76.8045C49.3517 76.7928 49.344 76.7988 49.344 77.1074C49.344 77.6206 50.3057 78.3149 51.0166 78.3149C51.1942 78.3149 51.3087 78.955 51.1623 79.1297C51.0435 79.2715 49.9304 79.6455 49.6275 79.6455C49.392 79.6455 49.3505 79.5631 49.1336 78.6609C48.5652 76.2981 48.5688 75.8654 49.1619 75.2786C49.5056 74.9383 49.4263 74.9478 50.2995 75.1429Z", fill: "#ECC28A" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M60.6719 19.2876C60.2295 19.3876 60.346 19.4026 61.4639 19.3891C62.17 19.3805 62.4522 19.414 62.6132 19.5257C62.7306 19.6072 62.9898 19.6737 63.1892 19.6737C63.3887 19.6737 63.5519 19.7082 63.5519 19.7505C63.5519 19.8655 64.2527 20.1489 64.5371 20.1489C64.6748 20.1489 65.109 20.3609 65.5105 20.6241C65.9091 20.8855 66.2725 21.0994 66.3181 21.0994C66.3635 21.0994 66.5912 21.2899 66.8243 21.5228C67.5395 22.238 67.6489 22.3349 67.7401 22.3349C67.7886 22.3349 67.9096 22.4846 68.0092 22.6676C68.1088 22.8505 68.2374 23.0007 68.295 23.0014C68.3526 23.0019 68.4839 23.176 68.5868 23.3884C68.7719 23.7712 68.955 24.0264 69.285 24.3622C69.4911 24.572 69.1823 24.9011 68.7788 24.9011C68.656 24.9011 68.5285 24.9438 68.4959 24.9961C68.4632 25.0484 68.3202 25.0926 68.1781 25.0945C68.036 25.0964 67.8119 25.1591 67.6799 25.2337C67.5479 25.3083 67.3247 25.371 67.1838 25.3729C67.0432 25.3748 66.9135 25.4083 66.8958 25.4475C66.86 25.5274 65.8494 26.0454 65.7339 26.043C65.6934 26.0423 65.4889 26.1485 65.2799 26.2792C65.0708 26.4098 64.8515 26.5168 64.7924 26.5168C64.7336 26.5168 64.4891 26.6878 64.2491 26.8969C64.0091 27.106 63.7542 27.2771 63.6824 27.2771C63.6107 27.2771 63.5519 27.3199 63.5519 27.3722C63.5519 27.4244 63.4931 27.4672 63.4211 27.4672C63.2552 27.4672 62.0526 28.3858 61.6477 28.8216C61.5627 28.913 61.4523 28.9879 61.4027 28.9879C61.2779 28.9879 59.9999 29.9573 59.9999 30.0519C59.9999 30.0939 59.9492 30.1284 59.8873 30.1284C59.8256 30.1284 59.6958 30.1994 59.5988 30.2862C59.5019 30.3731 59.3982 30.4199 59.3684 30.3902C59.2907 30.3132 59.6346 29.9383 59.7831 29.9383C59.8518 29.9383 59.9569 29.8321 60.0164 29.7026C60.0762 29.5729 60.2007 29.4429 60.2936 29.4137C60.488 29.3526 60.6239 29.0829 60.4602 29.0829C60.3999 29.0829 60.1098 29.2892 59.8153 29.541C59.5208 29.7931 59.1541 30.1032 59.0003 30.2301C58.8464 30.3572 58.6043 30.5786 58.4619 30.7224C58.3196 30.8662 58.1739 30.9838 58.1382 30.9838C58.1024 30.9838 57.7398 31.2527 57.3325 31.5816C56.9252 31.9102 56.366 32.346 56.09 32.5498C55.2025 33.2051 55.8414 33.0296 56.9115 32.3243C57.1974 32.1359 57.5447 31.9223 57.6836 31.8496C57.8802 31.7465 58.454 31.3637 58.9336 31.0156C58.9542 31.0006 58.9165 30.9232 58.8498 30.8436C58.7667 30.7445 58.7624 30.6986 58.8361 30.6986C58.8954 30.6986 58.9439 30.7443 58.9439 30.8001C58.9439 30.9013 59.3267 30.8286 59.4239 30.7091C59.5381 30.5684 60.1883 30.1284 60.2814 30.1284C60.3378 30.1284 60.3839 30.0892 60.3839 30.0412C60.3839 29.9932 60.5243 29.8675 60.6959 29.7622C60.8675 29.657 61.0955 29.4897 61.2023 29.3906C61.3093 29.2913 61.5253 29.1281 61.6823 29.0278C61.965 28.8472 62.1392 28.7094 62.7229 28.2052C62.8885 28.0624 63.0582 27.9448 63.0999 27.9438C63.1419 27.9431 63.2927 27.8355 63.435 27.7048C63.5775 27.5741 63.7484 27.4672 63.8149 27.4672C63.8814 27.4672 63.9359 27.4294 63.9359 27.3833C63.9359 27.337 64.0115 27.2735 64.1039 27.2419C64.1963 27.2106 64.4231 27.0932 64.6079 26.9813C64.7927 26.8696 65.0737 26.7085 65.2323 26.6237C65.391 26.5386 65.6567 26.373 65.823 26.2554C65.9893 26.1378 66.1945 26.0416 66.2787 26.0416C66.363 26.0416 66.4319 26.0021 66.4319 25.9541C66.4319 25.9059 66.5708 25.8363 66.7407 25.7994C66.9107 25.7624 67.1159 25.6999 67.1967 25.6604C67.5488 25.4884 67.845 25.3832 68.1359 25.3268C68.3075 25.2933 68.4479 25.2268 68.4479 25.1786C68.4479 25.1306 68.6211 25.0911 68.8331 25.0911C69.045 25.0911 69.2934 25.0515 69.3851 25.003C69.4768 24.9545 69.6255 24.8925 69.7155 24.8649C69.9291 24.8001 68.5952 22.7956 68.2319 22.636C68.1923 22.6184 68.1599 22.5435 68.1599 22.4696C68.1599 22.3955 68.0951 22.3349 68.0159 22.3349C67.9367 22.3349 67.8716 22.3028 67.8714 22.2636C67.8692 21.969 66.3654 20.7572 65.4239 20.2915C65.2127 20.1869 65.0255 20.0693 65.0079 20.0301C64.9902 19.9909 64.8368 19.9588 64.6671 19.9588C64.4972 19.9588 64.3079 19.9089 64.2462 19.8479C64.0664 19.6699 63.441 19.4867 63.0078 19.4851C62.7879 19.4843 62.5923 19.4375 62.5734 19.381C62.5302 19.2529 61.1293 19.184 60.6719 19.2876ZM59.3279 19.5561C59.3279 19.596 59.0391 19.7103 58.6863 19.8106C58.3335 19.9106 57.8559 20.0917 57.6253 20.2133C57.3944 20.3347 57.1467 20.4341 57.0747 20.4341C57.0027 20.4341 56.9295 20.4661 56.9118 20.5053C56.8628 20.6149 56.1764 20.9093 55.9703 20.9093C55.8695 20.9093 55.7643 20.9456 55.7367 20.9903C55.7089 21.0347 55.4795 21.1485 55.227 21.2429C54.9745 21.3372 54.746 21.447 54.7191 21.4864C54.6925 21.5261 54.4765 21.5867 54.2391 21.6211C54.002 21.6554 53.7668 21.7233 53.7167 21.7715C53.6665 21.82 53.4577 21.8597 53.2527 21.8597C52.9974 21.8597 52.8923 21.8972 52.9191 21.9785C52.9789 22.1581 53.5511 22.1776 53.8112 22.0087C53.9377 21.9267 54.1182 21.8595 54.2125 21.8592C54.3068 21.8587 54.5077 21.7946 54.6589 21.7167C54.8101 21.6385 54.9846 21.5746 55.0465 21.5746C55.1084 21.5746 55.3287 21.489 55.5359 21.3845C55.743 21.2799 55.9789 21.1942 56.0603 21.1937C56.1414 21.1934 56.3375 21.1081 56.4959 21.0043C56.6543 20.9005 56.8487 20.8145 56.9279 20.8135C57.0071 20.8123 57.4539 20.6208 57.921 20.3877C58.388 20.1546 58.9177 19.9367 59.0979 19.9032C59.2784 19.8697 59.4495 19.8044 59.4786 19.7581C59.5076 19.7117 59.6773 19.6737 59.8559 19.6737C60.0344 19.6737 60.2072 19.6309 60.2399 19.5787C60.2763 19.52 60.1129 19.4836 59.8136 19.4836C59.5465 19.4836 59.3279 19.5162 59.3279 19.5561ZM51.9359 22.2399C51.9359 22.3494 52.1665 22.3494 52.5119 22.2399C52.7159 22.1752 52.6904 22.1624 52.3439 22.1543C52.1195 22.1491 51.9359 22.1876 51.9359 22.2399ZM50.3331 22.4711C50.4558 22.563 50.6802 22.5865 51.1011 22.5511C52.0352 22.473 51.9819 22.3344 51.0191 22.338C50.2712 22.3406 50.1824 22.3577 50.3331 22.4711ZM48.5279 22.62C48.1239 22.6749 48.1923 22.6873 48.9599 22.6987C49.5793 22.7079 49.8258 22.6825 49.7279 22.62C49.5709 22.5195 49.2673 22.5195 48.5279 22.62ZM60.2103 23.3462C60.1431 23.4172 59.9197 23.4754 59.7138 23.4754C59.373 23.4754 59.17 23.5724 59.2806 23.6821C59.3046 23.7059 59.8242 23.6617 60.4355 23.5838C61.7017 23.4224 62.338 23.5127 62.7779 23.9166C62.912 24.04 63.0548 24.1407 63.0949 24.1407C63.135 24.1407 63.1679 24.221 63.1679 24.3192C63.1679 24.4173 63.2327 24.5508 63.3119 24.6159C63.5003 24.7706 63.5022 25.5644 63.315 25.8097C63.1619 26.01 63.1148 26.3704 63.2528 26.2861C63.7311 25.9933 63.8339 24.7632 63.422 24.26C63.3042 24.116 63.1328 23.8805 63.0416 23.7368C62.9154 23.5384 62.7997 23.4754 62.5609 23.4754C62.3879 23.4754 62.2052 23.4376 62.1551 23.3915C61.989 23.2392 60.3476 23.2007 60.2103 23.3462ZM58.7079 23.7539C58.6777 23.8026 58.6892 23.8646 58.7336 23.8919C58.857 23.9675 59.2369 23.8456 59.1772 23.7498C59.1078 23.6386 58.7783 23.6415 58.7079 23.7539ZM57.6973 24.0511C57.5135 24.1526 57.2953 24.2358 57.2125 24.2358C57.0531 24.2358 56.8319 24.4125 56.8319 24.5399C56.8319 24.6454 57.1921 24.6356 57.2591 24.5285C57.2891 24.4805 57.6159 24.3484 57.9853 24.2353C58.3549 24.1222 58.6326 23.9903 58.6028 23.9425C58.5133 23.7993 58.054 23.8542 57.6973 24.0511ZM56.3039 24.711C56.2712 24.7632 56.3334 24.806 56.4421 24.806C56.5508 24.806 56.6399 24.7632 56.6399 24.711C56.6399 24.6587 56.5777 24.6159 56.5016 24.6159C56.4255 24.6159 56.3365 24.6587 56.3039 24.711ZM55.3919 25.0968C55.2071 25.1933 54.9803 25.2741 54.8879 25.2767C54.7955 25.2791 54.7196 25.3347 54.7191 25.4C54.7187 25.4654 54.5351 25.6241 54.3111 25.7526C53.9816 25.9415 53.9399 25.9936 54.0923 26.0247C54.1957 26.0458 54.2965 26.0157 54.3162 25.9574C54.3359 25.8992 54.41 25.8515 54.4811 25.8515C54.5521 25.8515 54.6673 25.7978 54.7369 25.7324C54.9039 25.5756 55.8894 25.0911 56.0413 25.0911C56.1066 25.0911 56.1599 25.0484 56.1599 24.9961C56.1599 24.8502 55.7658 24.9018 55.3919 25.0968ZM53.4481 26.3117C53.3029 26.3982 53.1841 26.5199 53.1841 26.5816C53.1839 26.6434 53.0975 26.7211 52.9919 26.7544C52.8863 26.7876 52.7999 26.8475 52.7999 26.8874C52.7999 26.9274 52.5498 27.2132 52.2438 27.5226C51.7307 28.0417 51.0719 29.0929 51.0719 29.3928C51.0719 29.4629 51.0183 29.5731 50.9528 29.638C50.7311 29.8575 50.5667 30.7419 50.5441 31.8349C50.5297 32.5448 50.4839 32.9362 50.4128 32.9595C50.3528 32.9794 50.3034 33.1096 50.3029 33.2489C50.3015 33.6402 49.8109 34.3953 49.1581 35.0105C48.8327 35.3172 48.584 35.5855 48.6054 35.6066C48.6687 35.6694 48.9599 35.533 48.9599 35.4405C48.9599 35.394 49.0031 35.3557 49.0559 35.3557C49.1087 35.3557 49.2339 35.2809 49.334 35.1894C49.4343 35.0979 49.6179 34.9321 49.742 34.8211C50.0125 34.579 50.4959 33.7158 50.4959 33.4746C50.4959 33.38 50.5347 33.2622 50.582 33.2125C50.6293 33.1629 50.6891 32.5876 50.7147 31.9342C50.757 30.8581 50.841 30.3997 51.0848 29.9157C51.1304 29.825 51.1679 29.6698 51.1679 29.571C51.1679 29.4721 51.2327 29.3381 51.3119 29.273C51.3911 29.2079 51.4559 29.0957 51.4559 29.0238C51.4559 28.9518 51.4943 28.8928 51.5415 28.8928C51.5886 28.8928 51.6541 28.7859 51.6872 28.6552C51.7203 28.5245 51.7899 28.4176 51.8418 28.4176C51.8934 28.4176 51.9359 28.3582 51.9359 28.2857C51.9359 28.213 52.2167 27.8645 52.5599 27.5112C52.9031 27.1576 53.1839 26.8321 53.1839 26.7876C53.1839 26.7432 53.2163 26.7069 53.2559 26.7066C53.2955 26.7066 53.4791 26.5783 53.6639 26.4217C54.0222 26.1183 53.8871 26.0494 53.4481 26.3117ZM62.9759 26.4115C62.9759 26.4643 62.4337 27.0492 61.7713 27.7112C61.1087 28.3734 60.5869 28.9356 60.6119 28.9603C60.7021 29.0494 61.0559 28.8769 61.0559 28.7439C61.0559 28.669 61.0971 28.6077 61.1475 28.6077C61.1979 28.6077 61.3432 28.5115 61.4704 28.3939C62.2811 27.6437 62.5919 27.3329 62.5919 27.2716C62.5919 27.2334 62.7215 27.0649 62.8799 26.8969C63.1868 26.5714 63.225 26.4678 63.0719 26.3742C63.0191 26.3419 62.9759 26.3588 62.9759 26.4115ZM67.5359 31.401C67.2191 31.4623 67.0095 31.5431 67.0703 31.5806C67.2491 31.6906 69.2274 31.5412 69.1873 31.4205C69.1395 31.277 68.2311 31.266 67.5359 31.401ZM69.3827 31.3254C69.242 31.4649 69.3171 31.554 69.5759 31.555C69.7211 31.5557 70.052 31.6198 70.3112 31.6975C70.5704 31.7755 70.97 31.8391 71.1992 31.8391C71.4284 31.8391 71.6159 31.8774 71.6159 31.9242C71.6159 32.0399 72.5276 32.5044 72.7547 32.5044C72.9176 32.5044 73.4619 32.8742 74.3759 33.6053C74.5475 33.7426 74.6879 33.9151 74.6879 33.9888C74.6879 34.0624 74.726 34.1969 74.7723 34.2877C74.8189 34.3784 74.9547 34.6667 75.0745 34.928C75.194 35.1894 75.4367 35.6064 75.6138 35.8549C75.7909 36.1032 75.9359 36.3499 75.9359 36.4026C75.9359 36.5007 75.9992 36.6457 76.226 37.0665C76.3556 37.3072 76.5745 37.738 76.7202 38.0395C76.7639 38.1302 76.7999 38.2802 76.7999 38.3728C76.7999 38.4655 76.8906 38.5974 77.0012 38.666C77.132 38.7468 77.1858 38.8549 77.1543 38.974C77.1277 39.0747 77.1416 39.179 77.1853 39.2059C77.2691 39.257 77.8559 40.4082 77.8559 40.5213C77.8559 40.5574 77.9653 40.7586 78.0992 40.9687C78.2331 41.1787 78.3203 41.3866 78.2924 41.4311C78.2648 41.4753 78.3709 41.7623 78.5279 42.069C78.6848 42.3756 78.8139 42.6982 78.8147 42.7859C78.8154 42.8738 78.8754 43.0043 78.9479 43.0763C79.0206 43.148 79.0799 43.316 79.0799 43.4495C79.0799 43.5828 79.1934 43.9155 79.3319 44.1887C79.4706 44.462 79.5839 44.7649 79.5839 44.8621C79.5839 44.9593 79.6225 45.0624 79.6698 45.0914C79.7171 45.1201 79.7773 45.3045 79.8039 45.5008C79.8306 45.6973 79.9035 46.029 79.9662 46.2381C80.0288 46.4472 80.1275 46.8461 80.1853 47.1248L80.2907 47.6314L79.7934 48.0843C79.5198 48.3333 79.2959 48.5821 79.2959 48.6372C79.2959 48.6926 78.9719 49.0573 78.5759 49.4481C78.1799 49.8388 77.8559 50.1937 77.8559 50.2368C77.8559 50.2795 77.5643 50.5989 77.2079 50.946C76.8515 51.2934 76.2831 51.8622 75.9452 52.2105C75.6071 52.5586 75.2867 52.8435 75.2331 52.8435C75.1796 52.8435 75.0675 52.9072 74.984 52.9849C74.5751 53.3648 73.898 53.889 73.8162 53.889C73.7655 53.889 73.5529 53.9959 73.3439 54.1266C73.1348 54.2573 72.9087 54.3652 72.8418 54.3663C72.7748 54.3675 72.6119 54.4521 72.4799 54.5543L72.2399 54.7401L72.5439 54.7422C72.711 54.7434 72.8622 54.7123 72.8799 54.6731C72.8975 54.6339 73.2035 54.4535 73.5599 54.2723C73.9163 54.091 74.2079 53.9092 74.2079 53.8683C74.2079 53.8275 74.254 53.794 74.3104 53.794C74.6084 53.794 76.5186 52.0601 77.8079 50.6193C78.1775 50.2061 78.6527 49.6865 78.8639 49.4643C79.0751 49.2421 79.4639 48.8168 79.7279 48.5196C79.9919 48.2221 80.2825 47.9056 80.3737 47.8163C80.5422 47.6509 80.5215 46.6658 80.3495 46.6658C80.3099 46.6658 80.2487 46.4743 80.2131 46.2402C80.1779 46.0062 80.108 45.79 80.0583 45.7595C80.0087 45.7291 79.9679 45.5569 79.9679 45.377C79.9679 45.1971 79.9247 45.0501 79.8719 45.0501C79.8191 45.0501 79.7756 44.9538 79.7754 44.8362C79.7749 44.7186 79.7101 44.4998 79.6314 44.3501C79.5524 44.2004 79.4879 44.0008 79.4879 43.9065C79.4879 43.8121 79.4159 43.5923 79.3276 43.4182C79.0302 42.8308 79.0079 42.7721 79.0079 42.5801C79.0079 42.4749 78.9666 42.3889 78.9162 42.3889C78.8658 42.3889 78.7962 42.2387 78.7614 42.0553C78.7266 41.8716 78.6599 41.6981 78.6131 41.6694C78.5663 41.6406 78.5279 41.5128 78.5279 41.3852C78.5279 41.2576 78.4875 41.1533 78.4383 41.1533C78.3891 41.1533 78.3215 41.0571 78.2883 40.9395C78.206 40.6489 78.1146 40.4338 77.8194 39.8377C77.6809 39.5585 77.5679 39.2698 77.5679 39.1961C77.5679 39.1225 77.5275 39.0624 77.4783 39.0624C77.4291 39.0624 77.3583 38.9661 77.3211 38.8485C77.2839 38.7309 77.1515 38.413 77.0267 38.1419C76.9019 37.8708 76.7999 37.6035 76.7999 37.5479C76.7999 37.4923 76.7567 37.4467 76.7039 37.4467C76.6511 37.4467 76.6079 37.3663 76.6079 37.2682C76.6079 37.1701 76.5431 37.0365 76.4639 36.9714C76.3847 36.9063 76.3199 36.7942 76.3199 36.7222C76.3199 36.6502 76.2767 36.5913 76.2239 36.5913C76.1711 36.5913 76.1279 36.4843 76.1279 36.3537C76.1279 36.223 76.0854 36.1161 76.0338 36.1161C75.982 36.1161 75.9104 35.9984 75.8749 35.8547C75.8394 35.7109 75.783 35.5719 75.7494 35.5458C75.716 35.5197 75.4959 35.1134 75.2603 34.6429C75.0246 34.1724 74.7995 33.7733 74.7599 33.7559C74.7203 33.7383 74.6879 33.6421 74.6879 33.5421C74.6879 33.4418 74.6427 33.3598 74.5878 33.3598C74.5328 33.3598 74.2537 33.1888 73.9679 32.9797C73.682 32.7706 73.4029 32.5995 73.3479 32.5995C73.293 32.5995 73.2479 32.5567 73.2479 32.5044C73.2479 32.4522 73.16 32.4094 73.0527 32.4094C72.9457 32.4094 72.8329 32.3453 72.8027 32.2668C72.7722 32.1884 72.6743 32.1243 72.5848 32.1243C72.4955 32.1243 72.3812 32.0867 72.3311 32.0409C72.2809 31.995 72.0023 31.885 71.7119 31.7966C71.4215 31.708 71.0975 31.5989 70.9919 31.5543C70.8863 31.5094 70.6055 31.4497 70.3679 31.4214C70.1303 31.3932 69.8274 31.3442 69.6947 31.3126C69.5619 31.2812 69.4215 31.287 69.3827 31.3254ZM66.2399 31.7441C66.1307 31.814 66.1712 31.8365 66.4079 31.8377C66.5795 31.8384 66.7199 31.7964 66.7199 31.7441C66.7199 31.6234 66.4285 31.6234 66.2399 31.7441ZM46.5224 34.9587C46.4679 35.0459 46.7975 35.3557 46.9451 35.3557C46.9971 35.3557 47.0399 35.3985 47.0399 35.4508C47.0399 35.503 47.1263 35.5458 47.2319 35.5458C47.3384 35.5458 47.4239 35.6092 47.4239 35.6884C47.4239 35.7668 47.4887 35.8309 47.5679 35.8309C47.6471 35.8309 47.7119 35.7882 47.7119 35.7359C47.7119 35.6836 47.6773 35.6408 47.6353 35.6408C47.5931 35.6408 47.3787 35.4698 47.1589 35.2607C46.7595 34.8807 46.6141 34.8116 46.5224 34.9587ZM64.1156 35.8345C59.1515 36.2023 55.9367 41.7103 58.2296 45.919C58.305 46.0573 58.4641 46.3545 58.5831 46.5798C58.8193 47.026 60.2593 48.5666 60.4403 48.5666C60.502 48.5666 60.604 48.6284 60.6673 48.7037C61.4749 49.667 66.0176 50.3401 66.7631 49.6069C66.8132 49.5574 66.916 49.517 66.9913 49.517C67.9369 49.517 70.2786 47.5193 71.0003 46.0969C73.1651 41.8295 70.4303 36.4946 65.7599 35.8744C65.5223 35.8428 65.2631 35.8055 65.1839 35.7915C65.1047 35.7775 64.6239 35.7967 64.1156 35.8345ZM30.0959 35.8889C27.1988 36.607 25.3412 38.2866 24.5168 40.934C23.6704 43.6517 24.7069 46.6655 27.1338 48.5438C27.3524 48.7132 27.5617 48.8517 27.5989 48.8517C27.6359 48.8517 27.7844 48.9351 27.9289 49.0368C30.6954 50.9871 35.7702 49.5874 37.5587 46.3806C38.6891 44.3539 38.8067 41.3771 37.8174 39.8227C37.7675 39.7443 37.6969 39.616 37.6607 39.5376C37.0239 38.1602 35.0883 36.5699 33.4602 36.0864C32.8895 35.9169 30.5394 35.7791 30.0959 35.8889ZM48.128 36.075C48.0963 36.1569 48.1194 36.2724 48.1791 36.3316C48.26 36.4116 48.2879 36.3736 48.2879 36.1826C48.2879 35.8967 48.2161 35.8483 48.128 36.075ZM47.7119 36.2054C47.7119 36.313 47.7551 36.4012 47.8079 36.4012C47.8607 36.4012 47.9039 36.3396 47.9039 36.2643C47.9039 36.189 47.8607 36.1009 47.8079 36.0685C47.7551 36.0362 47.7119 36.0978 47.7119 36.2054ZM55.7502 36.3147C55.6568 36.3684 55.2788 36.4375 54.9102 36.4682C54.5415 36.4988 54.2399 36.5604 54.2399 36.6051C54.2399 36.7847 48.6567 36.7015 48.5175 36.52C48.4347 36.4121 48.3889 36.3967 48.387 36.4765C48.3853 36.544 48.4688 36.6896 48.5727 36.7999C48.8017 37.0432 53.9039 37.018 54.2034 36.7721C54.3003 36.6923 54.6347 36.6547 55.1833 36.6621C55.9309 36.6723 56.0454 36.65 56.3039 36.4428L56.5919 36.2121L56.2559 36.2144C56.0711 36.2159 55.8435 36.261 55.7502 36.3147ZM47.0399 36.7814C47.0399 36.8336 47.1047 36.8764 47.1839 36.8764C47.2631 36.8764 47.3279 36.8336 47.3279 36.7814C47.3279 36.7291 47.2631 36.6863 47.1839 36.6863C47.1047 36.6863 47.0399 36.7291 47.0399 36.7814ZM31.9316 39.875C35.3559 40.3699 35.193 45.555 31.7432 45.8738C28.7569 46.1499 27.1336 42.8173 29.2096 40.6731C29.6051 40.2647 30.9925 39.6873 31.3556 39.7799C31.4149 39.7952 31.6741 39.8379 31.9316 39.875ZM65.3099 39.8928C67.6338 40.2198 68.553 43.3303 66.83 45.036C64.467 47.3755 60.4707 44.6314 61.8255 41.5993C62.2979 40.5422 63.9625 39.5331 64.7999 39.7961C64.8791 39.8211 65.1085 39.8645 65.3099 39.8928ZM51.5039 46.2856C51.4662 46.346 51.7268 46.3806 52.2181 46.3806C52.67 46.3806 52.9919 46.4201 52.9919 46.4757C52.9919 46.528 53.0535 46.5707 53.1291 46.5707C53.3192 46.5707 53.9519 47.1778 53.9519 47.3605C53.9519 47.4427 53.9951 47.5364 54.0479 47.5687C54.2022 47.663 54.1583 47.271 53.9999 47.141C53.9207 47.0759 53.8559 46.9423 53.8559 46.8442C53.8559 46.7461 53.7911 46.6658 53.7119 46.6658C53.6327 46.6658 53.5679 46.6261 53.5679 46.5776C53.5679 46.2763 51.6767 46.0088 51.5039 46.2856ZM50.5251 46.6152C50.3771 46.7442 50.3099 46.8511 50.3759 46.8528C50.4419 46.8544 50.4959 46.8131 50.4959 46.7608C50.4959 46.7085 50.5931 46.6653 50.7119 46.6646C51.0507 46.6624 51.363 46.5574 51.3051 46.465C51.2041 46.3032 50.7925 46.3825 50.5251 46.6152ZM54.2531 49.0309C54.2492 49.6781 54.2744 50.18 54.3087 50.1458C54.453 50.003 54.4964 48.9644 54.381 48.4219L54.26 47.8538L54.2531 49.0309ZM50.0639 48.1865C50.0276 48.2447 50.1767 48.2815 50.4479 48.2815C50.7191 48.2815 50.8681 48.2447 50.8319 48.1865C50.7992 48.1342 50.6264 48.0914 50.4479 48.0914C50.2693 48.0914 50.0965 48.1342 50.0639 48.1865ZM50.9948 48.2371C51.0229 48.2646 51.1441 48.3062 51.2641 48.329C51.3841 48.3518 51.5552 48.4362 51.6445 48.5162C51.7338 48.5961 51.8576 48.6617 51.9193 48.6617C51.9812 48.6617 52.0319 48.7044 52.0319 48.7567C52.0319 48.809 52.0998 48.8517 52.1831 48.8517C52.2683 48.8517 52.4041 49.0166 52.4951 49.231C52.5834 49.4396 52.6883 49.6107 52.7279 49.6111C52.8543 49.6128 53.1839 49.9873 53.1839 50.1291C53.1839 50.2044 53.2271 50.2926 53.2799 50.3249C53.3343 50.3582 53.3759 50.2783 53.3759 50.1405C53.3759 50.0068 53.3375 49.8972 53.2902 49.8972C53.2431 49.8972 53.1798 49.7988 53.1493 49.6786C53.0103 49.1305 51.8636 48.1865 51.3366 48.1865C51.1206 48.1865 50.9667 48.2093 50.9948 48.2371ZM50.0171 49.3262C49.9011 49.3973 49.9095 49.4237 50.0665 49.4812C50.1707 49.5194 50.2832 49.5912 50.3168 49.6406C50.3502 49.6898 50.4284 49.7135 50.4906 49.6931C50.5604 49.6701 50.5182 49.5767 50.3802 49.4481C50.2254 49.3044 50.114 49.2668 50.0171 49.3262ZM50.8429 49.9706C50.9547 50.0609 51.2115 50.2631 51.4139 50.4199C51.6162 50.5768 51.8922 50.8056 52.0268 50.9284C52.1617 51.0513 52.5743 51.3281 52.9439 51.5431C53.3135 51.7584 53.6375 51.9599 53.6639 51.9908C53.6903 52.0219 54.0035 52.1911 54.3599 52.3667C54.7163 52.5422 55.0079 52.7214 55.0079 52.7646C55.0079 52.8081 55.0974 52.8435 55.2068 52.8435C55.316 52.8435 55.4703 52.9077 55.5495 52.9861C55.6287 53.0645 55.7768 53.1287 55.8788 53.1287C55.9806 53.1287 56.0639 53.1714 56.0639 53.2237C56.0639 53.276 56.1421 53.3187 56.2376 53.3187C56.3329 53.3187 56.4949 53.3815 56.5976 53.4582C56.7001 53.535 56.8595 53.5991 56.9519 53.6008C57.0443 53.6024 57.1199 53.6466 57.1199 53.6989C57.1199 53.7512 57.2048 53.794 57.3085 53.794C57.4124 53.794 57.6608 53.864 57.8605 53.9496C58.3304 54.1511 58.4891 54.2069 59.1839 54.4153C59.5007 54.5101 59.8009 54.6232 59.8511 54.6662C59.9012 54.7092 60.074 54.7394 60.2351 54.7332C60.513 54.7225 60.5159 54.7187 60.2879 54.6593C60.1559 54.6249 59.8023 54.4802 59.5021 54.3378C59.2019 54.1955 58.892 54.0791 58.8138 54.0791C58.7355 54.0791 58.5275 54.0078 58.3515 53.9204C57.7583 53.626 57.699 53.6039 57.5051 53.6039C57.3987 53.6039 57.3119 53.5611 57.3119 53.5088C57.3119 53.4566 57.2091 53.4138 57.0836 53.4138C56.9581 53.4138 56.8016 53.3496 56.7359 53.2712C56.6701 53.1928 56.5796 53.1287 56.5347 53.1287C56.4899 53.1287 56.2251 53.0262 55.9465 52.901C55.6679 52.7758 55.3751 52.647 55.2959 52.615C55.2167 52.5826 55.0223 52.4743 54.8639 52.3743C54.7055 52.274 54.5041 52.1889 54.4165 52.1851C54.3287 52.1813 54.1523 52.0552 54.0243 51.9045C53.8964 51.7539 53.6874 51.5997 53.5597 51.5616C53.1997 51.4545 52.4331 50.955 51.7021 50.3518C51.3359 50.0495 50.9471 49.8031 50.8381 49.8043L50.6399 49.8064L50.8429 49.9706ZM50.5585 53.6754C50.4894 53.7861 50.81 54.1335 51.1343 54.2996C51.2943 54.3813 51.5293 54.5579 51.6565 54.6914C51.7837 54.8252 52.0715 55.0238 52.2959 55.1331C52.5203 55.2422 52.7039 55.3636 52.7039 55.4028C52.7039 55.442 52.8743 55.5558 53.0826 55.6558C53.2909 55.7556 53.4795 55.9015 53.5016 55.9799C53.5237 56.0583 53.7529 56.2294 54.0109 56.3599C54.2689 56.4903 54.6085 56.6821 54.7659 56.7857C54.9231 56.8895 55.3551 57.128 55.7259 57.3162C56.0965 57.5042 56.5295 57.7273 56.6879 57.8121C56.8463 57.8967 57.0407 57.9901 57.1199 58.0191C57.1991 58.0483 57.4367 58.1795 57.6479 58.3108C58.101 58.5924 58.4257 58.7362 58.6083 58.7362C58.6811 58.7362 58.7672 58.7789 58.7999 58.8312C58.8325 58.8835 58.9621 58.9262 59.0879 58.9262C59.2136 58.9262 59.3432 58.969 59.3759 59.0213C59.4085 59.0736 59.5515 59.1178 59.6936 59.1194C59.8357 59.1211 60.0356 59.1852 60.1381 59.262C60.2408 59.3387 60.446 59.4015 60.5941 59.4015C60.7424 59.4015 60.8639 59.4442 60.8639 59.4965C60.8639 59.5488 60.9839 59.5915 61.1305 59.5915C61.2771 59.5915 61.4823 59.6479 61.5865 59.7165C61.6907 59.7852 61.9242 59.8505 62.1054 59.8619C62.2868 59.8731 62.4908 59.928 62.5587 59.9841C62.7126 60.1102 63.2708 60.2554 63.8399 60.3172C64.0775 60.3429 64.5234 60.4274 64.8308 60.5049C65.1383 60.5824 65.5919 60.6425 65.8388 60.6382C66.0858 60.6339 66.5903 60.6727 66.9599 60.724C68.0763 60.8791 70.4015 60.8409 71.3279 60.6522C72.2526 60.4638 72.1703 60.3174 71.2227 60.465C70.3631 60.5988 66.5147 60.6746 66.442 60.5591C66.41 60.5085 66.0179 60.445 65.5707 60.4179C65.1133 60.3901 64.7423 60.3234 64.7226 60.2652C64.7034 60.2079 64.4588 60.1618 64.1735 60.1618C63.8908 60.1618 63.6349 60.1231 63.6054 60.0755C63.5759 60.0283 63.3356 59.9601 63.0719 59.9242C62.8079 59.8883 62.5919 59.8201 62.5919 59.7726C62.5919 59.7253 62.4241 59.6866 62.2189 59.6866C62.0137 59.6866 61.7221 59.6227 61.5709 59.5445C61.4197 59.4666 61.1987 59.4024 61.0799 59.4019C60.9611 59.4017 60.8639 59.3587 60.8639 59.3064C60.8639 59.2541 60.7883 59.2114 60.6959 59.2114C60.5079 59.2111 59.6624 58.9089 59.5563 58.8039C59.5187 58.7666 59.4121 58.7362 59.3197 58.7362C59.2271 58.7362 59.0291 58.6756 58.8795 58.6017C57.699 58.0179 56.5667 57.5006 56.4692 57.5006C56.4047 57.5006 56.3519 57.4673 56.3519 57.427C56.3519 57.3863 56.1579 57.2687 55.9208 57.1656C55.6837 57.0622 55.4893 56.9458 55.4888 56.9066C55.4883 56.8674 55.4015 56.8353 55.2959 56.8353C55.1903 56.8353 55.1039 56.7956 55.1039 56.7472C55.1039 56.6987 54.9851 56.5984 54.8399 56.524C54.3313 56.2636 53.9036 56.027 53.8559 55.9799C53.7875 55.9122 53.4495 55.7055 53.2801 55.6276C53.2011 55.5912 53.037 55.4631 52.9158 55.3429C52.7943 55.2229 52.6518 55.1245 52.5987 55.1245C52.5457 55.1245 52.3467 54.9749 52.1564 54.7919C51.9661 54.6089 51.7787 54.4593 51.7398 54.4593C51.7009 54.4593 51.5022 54.3084 51.2984 54.1238C50.8525 53.7201 50.619 53.5784 50.5585 53.6754ZM71.6382 54.8867C71.4656 54.9611 71.2928 55.0224 71.2542 55.0233C70.9796 55.0297 70.2863 55.1526 70.1279 55.2227C70.0223 55.2697 69.7847 55.3484 69.5999 55.3978C69.2708 55.4857 69.2742 55.4878 69.771 55.4962C70.0499 55.5009 70.4331 55.4406 70.6227 55.3622C70.8121 55.2837 71.0917 55.2196 71.2436 55.2196C71.3955 55.2196 71.5199 55.1823 71.5199 55.1367C71.5199 55.091 71.6946 55.0262 71.9084 54.9922C72.1254 54.958 72.2713 54.8896 72.2387 54.8375C72.1609 54.713 72.014 54.7251 71.6382 54.8867ZM68.4719 55.668C68.6171 55.6896 68.8547 55.6896 68.9999 55.668C69.1451 55.6461 69.0263 55.6283 68.7359 55.6283C68.4455 55.6283 68.3267 55.6461 68.4719 55.668ZM80.1908 56.2933C80.0946 56.4133 79.874 56.6148 79.7007 56.7412C79.4396 56.9313 79.3952 57.0147 79.4425 57.2276C79.5003 57.4883 79.3477 57.8651 79.1279 58.0043C79.0619 58.0462 79.0079 58.1189 79.0079 58.1659C79.0079 58.2975 78.1976 59.1163 78.0673 59.1163C78.0037 59.1163 77.9519 59.1572 77.9519 59.2071C77.9519 59.6196 76.4771 60.2077 76.0326 59.9722C75.8783 59.8905 75.7902 59.8878 75.7143 59.9629C75.6567 60.0199 75.4263 60.0668 75.2024 60.0668C74.9785 60.0668 74.7685 60.1095 74.7359 60.1618C74.6975 60.2233 75.1028 60.2568 75.8821 60.2568C76.5452 60.2568 77.0879 60.2238 77.0879 60.1834C77.0879 60.143 77.2362 60.0309 77.4176 59.9342C77.7474 59.7583 79.0079 58.6423 79.0079 58.5261C79.0079 58.4924 79.1576 58.3075 79.3405 58.1153C79.5236 57.9233 79.6993 57.685 79.731 57.5859C79.7629 57.4866 79.8291 57.4056 79.8783 57.4056C79.9275 57.4056 79.9679 57.3405 79.9679 57.2611C79.9679 57.1817 80.0682 56.9572 80.1908 56.7621C80.5931 56.1227 80.5931 55.7915 80.1908 56.2933ZM78.9867 57.3343C78.7955 57.5077 78.5041 57.6881 78.3119 57.752C78.2195 57.7829 78.1439 57.8406 78.1439 57.8808C78.1439 57.9209 78.0683 57.9787 77.9759 58.0096C77.81 58.0647 77.4692 58.2624 77.3759 58.3574C77.3495 58.3843 77.1447 58.4912 76.9211 58.595C76.6971 58.6989 76.5135 58.811 76.5131 58.8447C76.5123 58.8782 76.4039 58.9324 76.2719 58.9652C76.1399 58.998 76.0319 59.0669 76.0319 59.1182C76.0319 59.1693 75.9023 59.2114 75.7439 59.2114C75.5855 59.2114 75.4559 59.2494 75.4559 59.2957C75.4559 59.3423 75.3047 59.4083 75.1199 59.4428C74.9351 59.477 74.7839 59.5459 74.7839 59.5958C74.7839 59.6457 74.6353 59.6866 74.4536 59.6866C74.2719 59.6866 74.098 59.727 74.0672 59.7762C74.0365 59.8253 73.8181 59.8945 73.5817 59.9294C73.1377 59.9955 73.0777 60.0504 73.256 60.2269C73.3729 60.3426 74.1119 60.105 74.1119 59.9518C74.1119 59.9042 74.1546 59.8916 74.2069 59.9235C74.259 59.9556 74.4426 59.9192 74.6149 59.8429C74.787 59.7669 75.0467 59.6783 75.1919 59.6462C75.3371 59.6141 75.4559 59.5459 75.4559 59.4946C75.4559 59.4435 75.5612 59.4015 75.6901 59.4015C75.819 59.4015 75.9491 59.362 75.9793 59.3138C76.0093 59.2655 76.1631 59.1978 76.3211 59.1636C76.4787 59.1294 76.6079 59.0652 76.6079 59.0213C76.6079 58.9773 76.7356 58.9137 76.8913 58.8797C77.0473 58.8457 77.2741 58.745 77.3953 58.6559C77.5167 58.5665 77.7308 58.4361 77.871 58.3657C78.0114 58.2956 78.2624 58.1151 78.429 57.9644C78.5955 57.8138 78.7722 57.6907 78.8219 57.6907C78.8713 57.6907 78.9119 57.6527 78.9119 57.6059C78.9119 57.5593 79.0199 57.4944 79.1519 57.4616C79.2839 57.4289 79.3919 57.3599 79.3919 57.3086C79.3919 57.1772 79.1425 57.1929 78.9867 57.3343ZM53.5679 58.1659C53.8055 58.2645 54.1592 58.3477 54.3541 58.3508C54.549 58.3536 54.7328 58.395 54.7626 58.4427C54.7926 58.4905 54.9891 58.5584 55.1999 58.5936C55.4106 58.6288 55.6072 58.6967 55.6372 58.7445C55.6669 58.7922 55.8373 58.8312 56.0159 58.8312C56.1944 58.8312 56.3648 58.8702 56.3946 58.9179C56.4246 58.9657 56.6214 59.0336 56.8323 59.0688C57.0433 59.1042 57.2159 59.1719 57.2159 59.2197C57.2159 59.2674 57.4103 59.3064 57.6479 59.3064C57.8855 59.3064 58.0799 59.3454 58.0799 59.3931C58.0799 59.4409 58.2527 59.5086 58.4639 59.544C58.6751 59.5794 58.8479 59.6376 58.8479 59.6733C58.8479 59.7443 59.7539 59.9717 60.0361 59.9717C60.1323 59.9717 60.3469 60.0306 60.5135 60.1029C60.6798 60.1751 61.0751 60.2882 61.3919 60.3545C61.7087 60.4208 62.0545 60.5268 62.1604 60.5904C62.266 60.6539 62.5035 60.7304 62.6883 60.7606C63.6195 60.9129 64.0732 61.02 64.1629 61.1089C64.2798 61.2246 65.122 61.2439 65.0507 61.1293C65.0238 61.0866 64.665 60.9756 64.2529 60.8827C63.8408 60.7898 63.3311 60.6693 63.1199 60.6149C62.9087 60.5607 62.6063 60.4833 62.4479 60.4429C62.2895 60.4025 61.9148 60.2956 61.6153 60.205C61.3155 60.1148 61.0009 60.0672 60.9155 60.0998C60.8235 60.1347 60.7383 60.1014 60.7059 60.0176C60.6745 59.9365 60.5295 59.8767 60.3644 59.8767C60.2065 59.8767 59.9629 59.818 59.8227 59.746C59.4234 59.5414 58.6338 59.3055 58.3496 59.3059C58.2075 59.3062 58.0645 59.2636 58.0319 59.2114C57.9992 59.1591 57.8238 59.1163 57.6421 59.1163C57.4604 59.1163 57.3119 59.0783 57.3119 59.032C57.3119 58.9854 57.1554 58.9184 56.9641 58.8828C56.7728 58.8474 56.546 58.7823 56.4601 58.7383C56.168 58.5891 54.8655 58.2405 54.4319 58.1954C54.1943 58.1709 53.9855 58.1113 53.9679 58.0633C53.9502 58.0153 53.7558 57.9782 53.5359 57.9811L53.1359 57.9865L53.5679 58.1659ZM72.218 60.2806C72.2689 60.4236 72.8411 60.4125 72.9896 60.2654C73.0652 60.1905 72.9666 60.1618 72.6351 60.1618C72.3092 60.1618 72.188 60.1963 72.218 60.2806ZM73.9547 60.3994C73.9242 60.4778 73.8229 60.542 73.7293 60.542C73.6359 60.542 73.5056 60.6061 73.4399 60.6845C73.3741 60.7629 73.2459 60.8271 73.155 60.8271C73.064 60.8271 72.9114 60.9126 72.8159 61.0172C72.7203 61.1217 72.5874 61.2073 72.5204 61.2073C72.4535 61.2073 72.2627 61.3418 72.0966 61.5062L71.7947 61.8051L70.0014 61.7519C68.618 61.711 67.9263 61.6426 66.9762 61.453C65.6545 61.1892 65.3216 61.1586 65.2381 61.2923C65.1625 61.4133 65.4215 61.4924 65.8926 61.4924C66.1153 61.4924 66.3385 61.5306 66.3887 61.5775C66.4388 61.6243 66.7607 61.6868 67.1039 61.7165C67.4471 61.7462 67.9655 61.8117 68.2559 61.8621C68.5463 61.9125 69.5202 61.9569 70.4202 61.9607L72.0563 61.9676L72.4681 61.5874C72.6947 61.3783 72.9047 61.2073 72.9349 61.2073C72.9651 61.2073 73.1312 61.1003 73.3045 60.9697C73.4775 60.839 73.6868 60.7321 73.7694 60.7321C73.8522 60.7321 73.9199 60.6893 73.9199 60.637C73.9199 60.5847 74.0027 60.542 74.1039 60.542C74.3756 60.542 74.5983 60.4391 74.5376 60.3419C74.4505 60.2024 74.0142 60.2454 73.9547 60.3994Z", fill: "#F1ECE5" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.8879 6.46284C45.8879 6.52272 45.2308 6.55788 44.1088 6.55788C42.6162 6.55788 42.321 6.58093 42.2747 6.70045C42.2305 6.81378 42.0253 6.84301 41.2696 6.84301C40.7005 6.84301 40.3199 6.88103 40.3199 6.93805C40.3199 6.99341 40.0021 7.03309 39.5588 7.03309C39.0102 7.03309 38.7575 7.07301 38.6536 7.17566C38.5676 7.26072 38.3329 7.31822 38.0708 7.31822C37.8294 7.31822 37.6319 7.35576 37.6319 7.40186C37.6319 7.44772 37.3643 7.50451 37.0374 7.52803C36.7038 7.55203 36.4264 7.61951 36.4055 7.682C36.3834 7.7471 36.1715 7.79343 35.896 7.79343C35.6363 7.79343 35.4239 7.8362 35.4239 7.88848C35.4239 7.94075 35.2928 7.98352 35.1328 7.98352C34.9628 7.98352 34.8188 8.04268 34.7867 8.12608C34.7478 8.22588 34.5906 8.26865 34.2616 8.26865C34.0033 8.26865 33.7919 8.30761 33.7919 8.35537C33.7919 8.40313 33.6191 8.47085 33.4079 8.50625C33.1967 8.54166 33.0239 8.60937 33.0239 8.65713C33.0239 8.70489 32.8772 8.74386 32.6982 8.74386C32.4971 8.74386 32.3512 8.79851 32.3171 8.88642C32.2868 8.96483 32.1524 9.02899 32.019 9.02899C31.8853 9.02899 31.7759 9.07175 31.7759 9.12403C31.7759 9.1763 31.6448 9.21907 31.4848 9.21907C31.3148 9.21907 31.1708 9.27823 31.1387 9.36163C31.1082 9.44004 30.98 9.5042 30.8536 9.5042C30.7273 9.5042 30.6239 9.54697 30.6239 9.59924C30.6239 9.65151 30.5159 9.69428 30.3839 9.69428C30.2346 9.69428 30.1439 9.74822 30.1439 9.83685C30.1439 9.92547 30.0532 9.97941 29.9039 9.97941C29.7719 9.97941 29.6639 10.0222 29.6639 10.0745C29.6639 10.1267 29.576 10.1695 29.4688 10.1695C29.3617 10.1695 29.2489 10.2336 29.2187 10.3121C29.1882 10.3905 29.1032 10.4546 29.0296 10.4546C28.9561 10.4546 28.8959 10.4974 28.8959 10.5497C28.8959 10.6019 28.7648 10.6447 28.6048 10.6447C28.4348 10.6447 28.2908 10.7039 28.2587 10.7873C28.2282 10.8657 28.1588 10.9298 28.1046 10.9298C28.0504 10.9298 27.9059 11.0368 27.7835 11.1674C27.6611 11.2981 27.4727 11.405 27.3644 11.405C27.2564 11.405 27.1679 11.4478 27.1679 11.5001C27.1679 11.5524 27.0964 11.5951 27.009 11.5951C26.9216 11.5951 26.6857 11.7662 26.4848 11.9753C26.284 12.1844 26.0812 12.3555 26.0344 12.3555C25.8512 12.3555 25.3523 12.6579 25.0136 12.974C24.8183 13.1564 24.5996 13.3059 24.5281 13.3059C24.4564 13.3059 24.3128 13.4128 24.2089 13.5435C24.1052 13.6742 23.9797 13.7811 23.9303 13.7811C23.8808 13.7811 23.7824 13.888 23.7119 14.0187C23.6413 14.1494 23.5259 14.2563 23.4556 14.2563C23.3855 14.2563 23.3279 14.2962 23.3279 14.3449C23.3279 14.3937 23.2326 14.4635 23.1164 14.5001C22.8692 14.5778 22.6559 14.7698 22.6559 14.9147C22.6559 14.9708 22.6096 15.0167 22.5529 15.0167C22.4202 15.0167 22.1759 15.2585 22.1759 15.3899C22.1759 15.446 22.1296 15.4919 22.0729 15.4919C21.9402 15.4919 21.6959 15.7338 21.6959 15.8651C21.6959 15.9212 21.6532 15.9671 21.6011 15.9671C21.4734 15.9671 20.2559 17.167 20.2559 17.2929C20.2559 17.3478 20.1911 17.3927 20.1119 17.3927C20.0224 17.3927 19.9679 17.4825 19.9679 17.6303C19.9679 17.761 19.9216 17.8679 19.8649 17.8679C19.7322 17.8679 19.4879 18.1098 19.4879 18.2412C19.4879 18.2973 19.4231 18.3431 19.3439 18.3431C19.2623 18.3431 19.1999 18.4284 19.1999 18.5396C19.1999 18.6478 19.0487 18.8773 18.8639 19.0498C18.6791 19.2223 18.5279 19.4547 18.5279 19.5661C18.5279 19.683 18.4669 19.7688 18.3839 19.7688C18.2944 19.7688 18.2399 19.8586 18.2399 20.0064C18.2399 20.1371 18.1967 20.244 18.1439 20.244C18.0911 20.244 18.0479 20.3081 18.0479 20.3866C18.0479 20.465 18.0078 20.5291 17.9588 20.5291C17.8439 20.5291 17.5679 21.0763 17.5679 21.3039C17.5679 21.4007 17.5031 21.4795 17.4239 21.4795C17.3382 21.4795 17.2799 21.5667 17.2799 21.6946C17.2799 21.8131 17.1721 21.9897 17.0399 22.088C16.8673 22.2164 16.7999 22.3561 16.7999 22.5858C16.7999 22.7614 16.7567 22.9052 16.7039 22.9052C16.6511 22.9052 16.6079 23.0504 16.6079 23.2276C16.6079 23.4267 16.5527 23.5712 16.4639 23.6049C16.3734 23.6391 16.3199 23.7846 16.3199 23.9951C16.3199 24.1797 16.2767 24.3308 16.2239 24.3308C16.1711 24.3308 16.1279 24.4332 16.1279 24.5582C16.1279 24.6834 16.0631 24.8103 15.9839 24.8405C15.9006 24.8721 15.8399 25.0142 15.8399 25.1776C15.8399 25.333 15.7967 25.4865 15.7439 25.5188C15.6911 25.5512 15.6479 25.7379 15.6479 25.9342C15.6479 26.292 15.2056 26.8948 14.9406 26.8984C14.8808 26.8993 14.6857 27.0276 14.5069 27.1835C14.3281 27.3396 14.1229 27.4672 14.0509 27.4672C13.9789 27.4672 13.9199 27.51 13.9199 27.5623C13.9199 27.6145 13.8736 27.6573 13.8169 27.6573C13.7605 27.6573 13.654 27.7108 13.5803 27.7761C13.2628 28.0581 13.154 28.1325 13.06 28.1325C13.005 28.1325 12.9599 28.1967 12.9599 28.2751C12.9599 28.3535 12.8951 28.4176 12.8159 28.4176C12.7367 28.4176 12.6719 28.4604 12.6719 28.5127C12.6719 28.565 12.6066 28.6077 12.5267 28.6077C12.4468 28.6077 12.1664 28.8216 11.9039 29.0829C11.6413 29.3443 11.3776 29.5581 11.3178 29.5581C11.1404 29.5581 9.60275 31.1118 9.60131 31.2927C9.60035 31.3872 9.52739 31.459 9.43187 31.4592C9.25691 31.4592 8.54387 32.145 8.54387 32.3132C8.54387 32.3662 8.48987 32.4101 8.42387 32.4111C8.27819 32.413 7.87187 32.8231 7.87187 32.968C7.87187 33.0253 7.65587 33.2871 7.39187 33.5499C7.12787 33.8127 6.91187 34.0852 6.91187 34.1556C6.91187 34.2261 6.80387 34.364 6.67187 34.4621C6.53987 34.5602 6.43187 34.6776 6.43187 34.723C6.43187 34.7684 6.32387 34.8898 6.19187 34.9924C6.05987 35.0953 5.95187 35.2574 5.95187 35.3524C5.95187 35.4477 5.88707 35.5501 5.80787 35.5803C5.72867 35.6102 5.66387 35.7219 5.66387 35.8279C5.66387 35.9341 5.62067 36.021 5.56787 36.021C5.51507 36.021 5.47187 36.0852 5.47187 36.1636C5.47187 36.242 5.42555 36.3062 5.36891 36.3062C5.19971 36.3062 4.99187 36.5642 4.99187 36.7745C4.99187 36.8861 4.92947 36.9715 4.84787 36.9715C4.76867 36.9715 4.70387 37.0254 4.70387 37.0914C4.70387 37.1575 4.59587 37.2917 4.46387 37.3899C4.33187 37.488 4.22387 37.6479 4.22387 37.7451C4.22387 37.8423 4.18067 37.9219 4.12787 37.9219C4.07507 37.9219 4.03187 37.9815 4.03187 38.0542C4.03187 38.1272 3.96707 38.2113 3.88787 38.2415C3.80867 38.2714 3.74387 38.3674 3.74387 38.4546C3.74387 38.5415 3.63587 38.7119 3.50387 38.8331C3.37187 38.9543 3.26387 39.117 3.26387 39.1947C3.26387 39.2727 3.22067 39.3627 3.16787 39.395C3.11507 39.4273 3.07187 39.5174 3.07187 39.5953C3.07187 39.673 2.96387 39.8358 2.83187 39.957C2.69987 40.0781 2.59187 40.2257 2.59187 40.2851C2.59187 40.3445 2.52707 40.393 2.44787 40.393C2.35835 40.393 2.30387 40.4828 2.30387 40.6306C2.30387 40.7613 2.26547 40.8682 2.21819 40.8682C2.17115 40.8682 2.10563 40.9751 2.07251 41.1058C2.03939 41.2365 1.96979 41.3434 1.91795 41.3434C1.75547 41.3434 1.80131 42.8223 1.96787 42.9591C2.04707 43.0242 2.11187 43.1578 2.11187 43.2559C2.11187 43.373 2.18027 43.4343 2.31083 43.4343C2.42003 43.4343 2.57435 43.4985 2.65355 43.5769C2.86331 43.7846 6.49667 43.7874 6.77363 43.58C6.87611 43.5032 7.16507 43.4391 7.41587 43.4374C7.66667 43.4358 7.87187 43.3916 7.87187 43.3393C7.87187 43.287 7.97675 43.2442 8.10491 43.2442C8.23331 43.2442 8.40299 43.1801 8.48219 43.1017C8.56139 43.0233 8.75627 42.9591 8.91539 42.9591C9.07451 42.9591 9.22811 42.9211 9.25715 42.8748C9.28619 42.8284 9.46139 42.7624 9.64691 42.7279C9.83219 42.6935 9.98387 42.6246 9.98387 42.5747C9.98387 42.5248 10.0883 42.4839 10.216 42.4839C10.3434 42.4839 10.4627 42.4402 10.4807 42.3867C10.4987 42.333 10.6859 42.2686 10.8966 42.2432C11.1073 42.2178 11.2259 42.2223 11.1599 42.2534C11.0939 42.2843 11.0399 42.4131 11.0399 42.5393C11.0399 42.6802 10.9842 42.769 10.8959 42.769C10.8064 42.769 10.7519 42.8589 10.7519 43.0066C10.7519 43.1373 10.7087 43.2442 10.6559 43.2442C10.6031 43.2442 10.5599 43.3512 10.5599 43.4819C10.5599 43.6296 10.5054 43.7195 10.4159 43.7195C10.3367 43.7195 10.2719 43.7622 10.2719 43.8145C10.2719 43.873 9.79091 43.9095 9.02075 43.9095C7.99739 43.9095 7.75979 43.9354 7.71467 44.0521C7.67579 44.1519 7.51859 44.1947 7.18955 44.1947C6.93131 44.1947 6.71987 44.2374 6.71987 44.2897C6.71987 44.342 6.63875 44.3848 6.53963 44.3848C6.44051 44.3848 6.30563 44.4489 6.23987 44.5273C6.17411 44.6057 5.97443 44.6699 5.79611 44.6699C5.61779 44.6699 5.47187 44.7127 5.47187 44.7649C5.47187 44.8172 5.38403 44.86 5.27675 44.86C5.16971 44.86 5.05691 44.9241 5.02667 45.0025C4.99619 45.0809 4.91123 45.1451 4.83755 45.1451C4.76411 45.1451 4.70387 45.1879 4.70387 45.2401C4.70387 45.2924 4.64099 45.3352 4.56419 45.3352C4.48739 45.3352 4.31651 45.4421 4.18451 45.5728C4.05251 45.7035 3.90251 45.8104 3.85115 45.8104C3.69107 45.8104 3.07187 46.4424 3.07187 46.6057C3.07187 46.691 3.01379 46.7608 2.94275 46.7608C2.76443 46.7608 2.30387 47.1662 2.30387 47.3232C2.30387 47.394 2.19587 47.5509 2.06387 47.672C1.93187 47.7932 1.82387 47.9698 1.82387 48.0643C1.82387 48.1589 1.71587 48.3167 1.58387 48.4148C1.45187 48.5129 1.34387 48.6693 1.34387 48.7622C1.34387 48.8551 1.31147 48.9451 1.27187 48.9627C1.20779 48.9908 0.985551 49.4073 0.824031 49.8022C0.792111 49.8806 0.682911 50.073 0.581871 50.2299C0.480591 50.3867 0.394671 50.6357 0.390831 50.7833C0.386991 50.9306 0.322191 51.1123 0.246831 51.1869C-0.0819687 51.5125 -0.111249 60.8226 0.215871 61.0592C0.308271 61.126 0.383871 61.2793 0.383871 61.3997C0.383871 61.6601 0.675711 62.3478 0.786351 62.3478C0.829071 62.3478 0.863871 62.4547 0.863871 62.5854C0.863871 62.7161 0.907071 62.823 0.959871 62.823C1.01267 62.823 1.05587 62.9218 1.05587 63.0425C1.05587 63.163 1.11923 63.3448 1.19675 63.4465C1.27427 63.5479 1.33907 63.69 1.34075 63.7625C1.34243 63.8349 1.45187 63.9932 1.58387 64.1144C1.71587 64.2355 1.82387 64.4221 1.82387 64.5292C1.82387 64.6362 1.86635 64.7238 1.91795 64.7238C1.96979 64.7238 2.03939 64.8308 2.07251 64.9614C2.10563 65.0921 2.17115 65.199 2.21819 65.199C2.26547 65.199 2.30387 65.2632 2.30387 65.3416C2.30387 65.42 2.35019 65.4842 2.40683 65.4842C2.57603 65.4842 2.78387 65.7422 2.78387 65.9525C2.78387 66.0608 2.84147 66.1495 2.91155 66.1495C2.98187 66.1495 3.09731 66.2564 3.16787 66.3871C3.24851 66.5363 3.37955 66.6247 3.52019 66.6247C3.68099 66.6247 3.74387 66.6789 3.74387 66.8179C3.74387 66.9238 3.80867 67.0355 3.88787 67.0654C3.96707 67.0956 4.03187 67.1797 4.03187 67.2527C4.03187 67.3254 4.12139 67.385 4.23083 67.385C4.44323 67.385 4.70387 67.5908 4.70387 67.7583C4.70387 67.8144 4.76867 67.8602 4.84787 67.8602C4.92707 67.8602 4.99187 67.9023 4.99187 67.9534C4.99187 68.0047 5.09987 68.0736 5.23187 68.1064C5.36387 68.1392 5.47187 68.1969 5.47187 68.2347C5.47187 68.2725 5.57987 68.3606 5.71187 68.4305C5.84387 68.5003 5.95187 68.6146 5.95187 68.6843C5.95187 68.7536 5.99507 68.8107 6.04787 68.8107C6.10067 68.8107 6.14387 68.8682 6.14387 68.9385C6.14387 69.0088 6.25187 69.1906 6.38387 69.3424C6.51563 69.4943 6.62363 69.6948 6.62387 69.7879C6.62387 69.8808 6.68867 69.9818 6.76787 70.0118C6.85667 70.0455 6.91187 70.19 6.91187 70.3891C6.91187 70.5663 6.95507 70.7115 7.00787 70.7115C7.06067 70.7115 7.10387 70.769 7.10387 70.8393C7.10387 70.9097 7.21187 71.0914 7.34387 71.2433C7.47563 71.3951 7.58363 71.5956 7.58387 71.6888C7.58387 71.7817 7.64867 71.8827 7.72787 71.9126C7.80707 71.9428 7.87187 72.043 7.87187 72.1357C7.87187 72.2281 7.93667 72.3572 8.01587 72.4223C8.09507 72.4874 8.15987 72.6026 8.15987 72.6784C8.15987 72.8393 8.38859 73.0876 8.53691 73.0876C8.59355 73.0876 8.63987 73.1517 8.63987 73.2301C8.63987 73.3085 8.68307 73.3727 8.73587 73.3727C8.78867 73.3727 8.83187 73.4404 8.83187 73.5231C8.83187 73.6058 9.04787 73.8885 9.31187 74.1511C9.57587 74.4139 9.79187 74.7097 9.79187 74.8085C9.79187 74.9076 9.85667 74.9884 9.93587 74.9884C10.0151 74.9884 10.0799 75.0343 10.0799 75.0903C10.0799 75.2217 10.3242 75.4636 10.4569 75.4636C10.5136 75.4636 10.5599 75.5119 10.5599 75.5708C10.5599 75.739 12.7703 77.8318 13.1231 77.9977C13.2973 78.0794 13.4399 78.1904 13.4399 78.2439C13.4399 78.3667 13.7351 78.5929 13.9004 78.5969C13.9691 78.5986 14.1251 78.7069 14.2475 78.8376C14.3699 78.9683 14.5189 79.0752 14.5789 79.0752C14.6389 79.0752 14.6879 79.1394 14.6879 79.2178C14.6879 79.2962 14.7635 79.3618 14.8559 79.3635C15.0635 79.367 15.3599 79.5811 15.3599 79.7272C15.3599 79.7869 15.4679 79.8356 15.5999 79.8356C15.7319 79.8356 15.8399 79.8783 15.8399 79.9306C15.8399 79.9829 15.9047 80.0257 15.9839 80.0257C16.0631 80.0257 16.1279 80.0898 16.1279 80.1682C16.1279 80.2497 16.2143 80.3108 16.33 80.3108C16.4413 80.3108 16.6172 80.4177 16.7209 80.5484C16.8534 80.715 17.0034 80.786 17.2225 80.786C17.458 80.786 17.5672 80.8447 17.6639 81.0236C17.7419 81.1676 17.8763 81.2612 18.0059 81.2612C18.1232 81.2612 18.2442 81.3254 18.2747 81.4038C18.3049 81.4822 18.4151 81.5463 18.5192 81.5463C18.6234 81.5463 18.7352 81.5891 18.7679 81.6414C18.8005 81.6937 18.8953 81.7364 18.9786 81.7364C19.0619 81.7364 19.2299 81.8433 19.3523 81.974C19.4747 82.1047 19.6446 82.2116 19.73 82.2116C19.8157 82.2116 19.9504 82.2758 20.0296 82.3542C20.1088 82.4326 20.276 82.4968 20.4011 82.4968C20.5261 82.4968 20.6552 82.5395 20.6879 82.5918C20.7205 82.6441 20.848 82.6868 20.9713 82.6868C21.0944 82.6868 21.2202 82.751 21.2507 82.8294C21.2809 82.9078 21.3937 82.972 21.5008 82.972C21.608 82.972 21.6959 83.0147 21.6959 83.067C21.6959 83.1193 21.7993 83.1621 21.9256 83.1621C22.052 83.1621 22.1802 83.2262 22.2107 83.3046C22.2428 83.388 22.3868 83.4472 22.5568 83.4472C22.7168 83.4472 22.8479 83.49 22.8479 83.5422C22.8479 83.5945 23.0161 83.6373 23.2216 83.6373C23.4652 83.6373 23.6147 83.6869 23.6507 83.7798C23.6809 83.8582 23.7937 83.9224 23.9008 83.9224C24.008 83.9224 24.0959 83.9652 24.0959 84.0174C24.0959 84.0697 24.2418 84.1125 24.4201 84.1125C24.5984 84.1125 24.7981 84.1766 24.8639 84.2551C24.9296 84.3335 25.1077 84.3976 25.2596 84.3976C25.4116 84.3976 25.5359 84.4404 25.5359 84.4927C25.5359 84.5449 25.7473 84.5877 26.0056 84.5877C26.3346 84.5877 26.4918 84.6305 26.5307 84.7303C26.5609 84.8087 26.6737 84.8728 26.7808 84.8728C26.888 84.8728 26.9759 84.9156 26.9759 84.9679C26.9759 85.0201 27.1441 85.0629 27.3496 85.0629C27.5932 85.0629 27.7427 85.1126 27.7787 85.2055C27.8164 85.3031 27.9707 85.348 28.2688 85.348C28.508 85.348 28.7039 85.3908 28.7039 85.4431C28.7039 85.4954 28.9153 85.5381 29.1736 85.5381C29.5026 85.5381 29.6598 85.5809 29.6987 85.6807C29.7306 85.7631 29.8741 85.8233 30.0392 85.8233C30.1962 85.8233 30.3512 85.866 30.3839 85.9183C30.4165 85.9706 30.6952 86.0133 31.0033 86.0133C31.4125 86.0133 31.5781 86.0518 31.6187 86.1559C31.6592 86.2604 31.8258 86.2985 32.2448 86.2985C32.5806 86.2985 32.8307 86.3422 32.8516 86.4047C32.8715 86.4636 33.1972 86.533 33.5797 86.5601C33.9604 86.5872 34.2719 86.6461 34.2719 86.6915C34.2719 86.7366 34.5275 86.7737 34.84 86.7737C35.1668 86.7737 35.4227 86.8179 35.4431 86.878C35.463 86.9374 35.8381 87.0044 36.315 87.0339C36.7753 87.0624 37.1519 87.1222 37.1519 87.1671C37.1519 87.2121 37.5371 87.2489 38.008 87.2489C38.5912 87.2489 38.8763 87.2855 38.9024 87.3637C38.9284 87.4402 39.2749 87.4908 39.9426 87.5157C40.4932 87.5364 40.9849 87.5917 41.0351 87.6386C41.0852 87.6856 41.5194 87.7241 41.9999 87.7241C42.4804 87.7241 42.916 87.7662 42.968 87.8177C43.0201 87.8693 43.6352 87.9401 44.3348 87.975C45.0344 88.0102 45.6296 88.075 45.6572 88.119C45.7225 88.224 50.5919 88.224 50.5919 88.119C50.5919 88.0748 51.1859 88.0104 51.9119 87.976C52.6441 87.9413 53.246 87.8712 53.2638 87.8187C53.2818 87.7659 53.6509 87.7241 54.0983 87.7241C54.5394 87.7241 54.9234 87.6875 54.9512 87.6428C54.9791 87.5982 55.4663 87.5381 56.0339 87.5095C56.6521 87.4782 57.0798 87.4154 57.1007 87.3532C57.1235 87.2857 57.5221 87.2489 58.2318 87.2489C58.8347 87.2489 59.3279 87.2125 59.3279 87.1679C59.3279 87.1232 59.7059 87.0581 60.1679 87.0232C60.6299 86.988 61.0223 86.9177 61.0398 86.8666C61.0576 86.8155 61.2601 86.7737 61.4903 86.7737C61.7202 86.7737 61.9314 86.7371 61.9595 86.6922C61.9873 86.6475 62.2592 86.5853 62.5636 86.5541C62.8679 86.5232 63.1319 86.4529 63.1504 86.398C63.1698 86.3405 63.4856 86.2985 63.8989 86.2985C64.4459 86.2985 64.6268 86.265 64.6691 86.1559C64.7065 86.0594 64.8592 86.0133 65.1404 86.0133C65.3694 86.0133 65.5832 85.9706 65.6159 85.9183C65.6485 85.866 65.7604 85.8233 65.8645 85.8233C65.9687 85.8233 66.0788 85.7591 66.1091 85.6807C66.1496 85.5764 66.3157 85.5381 66.7302 85.5381C67.0434 85.5381 67.2959 85.4956 67.2959 85.4431C67.2959 85.3908 67.4917 85.348 67.731 85.348C68.0291 85.348 68.1834 85.3031 68.2211 85.2055C68.2571 85.1126 68.4066 85.0629 68.6502 85.0629C68.8556 85.0629 69.0239 85.0201 69.0239 84.9679C69.0239 84.9156 69.1319 84.8728 69.2639 84.8728C69.4132 84.8728 69.5039 84.8189 69.5039 84.7303C69.5039 84.6226 69.6212 84.5877 69.9839 84.5877C70.2479 84.5877 70.4639 84.5449 70.4639 84.4927C70.4639 84.4404 70.6165 84.3976 70.803 84.3976C71.0156 84.3976 71.1625 84.3446 71.1971 84.2551C71.2312 84.1671 71.3771 84.1125 71.5782 84.1125C71.7572 84.1125 71.9039 84.0697 71.9039 84.0174C71.9039 83.9652 71.9917 83.9224 72.099 83.9224C72.206 83.9224 72.3188 83.8582 72.3491 83.7798C72.3829 83.6926 72.5286 83.6373 72.7244 83.6373C72.9006 83.6373 73.0712 83.5945 73.1039 83.5422C73.1365 83.49 73.2916 83.4472 73.4485 83.4472C73.6136 83.4472 73.7572 83.3871 73.7891 83.3046C73.8196 83.2262 73.9477 83.1621 74.0742 83.1621C74.2004 83.1621 74.3039 83.1193 74.3039 83.067C74.3039 83.0147 74.3917 82.972 74.499 82.972C74.606 82.972 74.7188 82.9078 74.7491 82.8294C74.7851 82.7365 74.9346 82.6868 75.1782 82.6868C75.3836 82.6868 75.5519 82.6488 75.5519 82.602C75.5519 82.5555 75.6599 82.4906 75.7919 82.4578C75.9239 82.425 76.0319 82.3561 76.0319 82.3048C76.0319 82.2537 76.1204 82.2116 76.2284 82.2116C76.3367 82.2116 76.5251 82.1047 76.6475 81.974C76.7936 81.8179 76.9732 81.7364 77.1709 81.7364C77.3365 81.7364 77.4719 81.6944 77.4719 81.6433C77.4719 81.592 77.5799 81.5231 77.7119 81.4903C77.8439 81.4575 77.9519 81.3926 77.9519 81.346C77.9519 81.2992 78.0167 81.2612 78.0959 81.2612C78.1751 81.2612 78.2399 81.2282 78.2399 81.1878C78.2399 81.1179 78.4636 80.9944 79.2695 80.6197C79.4663 80.5282 79.7629 80.3144 79.9288 80.1445C80.0948 79.9746 80.3226 79.8356 80.4352 79.8356C80.5532 79.8356 80.6399 79.7752 80.6399 79.693C80.6399 79.6122 80.726 79.5504 80.8384 79.5504C80.9476 79.5504 81.1794 79.4008 81.3536 79.2178C81.5279 79.0348 81.7302 78.8844 81.8032 78.8835C81.8761 78.8825 82.0376 78.7756 82.162 78.6459C82.2863 78.5162 82.4267 78.4099 82.474 78.4099C82.5212 78.4099 82.5599 78.3458 82.5599 78.2674C82.5599 78.189 82.6247 78.1248 82.7039 78.1248C82.7831 78.1248 82.8479 78.082 82.8479 78.0298C82.8479 77.9775 82.906 77.9347 82.977 77.9347C83.0478 77.9347 83.3312 77.7209 83.6065 77.4595C83.8818 77.1982 84.1477 76.9843 84.1976 76.9843C84.2473 76.9843 84.2879 76.9385 84.2879 76.8824C84.2879 76.7541 84.5308 76.5091 84.6582 76.5091C84.7945 76.5091 85.4399 75.8906 85.4399 75.7602C85.4399 75.7003 85.6559 75.4384 85.9199 75.1785C86.1839 74.9186 86.3999 74.6624 86.3999 74.6097C86.3999 74.5567 86.5727 74.3371 86.7839 74.1216C86.9951 73.9061 87.1679 73.6702 87.1679 73.5972C87.1679 73.524 87.3133 73.3247 87.4909 73.1539C87.6685 72.983 87.8442 72.7485 87.8814 72.6328C87.9184 72.5171 87.9892 72.4223 88.0384 72.4223C88.0876 72.4223 88.1279 72.3199 88.1279 72.1949C88.1279 72.0697 88.1927 71.9428 88.2719 71.9126C88.3511 71.8827 88.4159 71.771 88.4159 71.665C88.4159 71.5588 88.4591 71.4718 88.5119 71.4718C88.5647 71.4718 88.6079 71.4122 88.6079 71.3395C88.6079 71.2666 88.6727 71.1824 88.7519 71.1523C88.8311 71.1223 88.8959 71.0107 88.8959 70.9047C88.8959 70.7985 88.9391 70.7115 88.9919 70.7115C89.0447 70.7115 89.0879 70.6091 89.0879 70.4841C89.0879 70.3589 89.1527 70.232 89.2319 70.2018C89.3111 70.1719 89.3759 70.0602 89.3759 69.9543C89.3759 69.848 89.4191 69.7611 89.4719 69.7611C89.5247 69.7611 89.5679 69.6734 89.5679 69.5665C89.5679 69.4593 89.6759 69.2728 89.8079 69.1516C89.9399 69.0304 90.0479 68.8829 90.0479 68.8235C90.0479 68.6541 90.4134 68.3354 90.6076 68.3354C90.7043 68.3354 90.8413 68.2285 90.9119 68.0978C90.9824 67.9672 91.0979 67.8602 91.1682 67.8602C91.2383 67.8602 91.2959 67.8272 91.2959 67.7868C91.2959 67.7464 91.4471 67.6328 91.6319 67.5342C91.8167 67.4356 91.9679 67.2976 91.9679 67.2275C91.9679 67.1574 92.0142 67.0999 92.0708 67.0999C92.2036 67.0999 92.4479 66.858 92.4479 66.7266C92.4479 66.6705 92.4925 66.6247 92.547 66.6247C92.7184 66.6247 93.2159 66.0566 93.2159 65.861C93.2159 65.7584 93.2622 65.6743 93.3188 65.6743C93.4326 65.6743 93.6959 65.4397 93.6959 65.3383C93.6959 65.3029 93.8039 65.1898 93.9359 65.0871C94.0679 64.9842 94.1773 64.8284 94.179 64.7407C94.1828 64.5409 94.4012 64.2486 94.5464 64.2486C94.6069 64.2486 94.6559 64.1042 94.6559 63.9262C94.6559 63.7271 94.7111 63.5826 94.7999 63.5489C94.8791 63.5189 94.9439 63.3859 94.9439 63.2538C94.9439 63.1214 94.9871 63.0131 95.0399 63.0131C95.0927 63.0131 95.1359 62.9061 95.1359 62.7755C95.1359 62.6448 95.1784 62.5379 95.23 62.5379C95.2818 62.5379 95.3514 62.4309 95.3845 62.3003C95.4176 62.1696 95.4832 62.0626 95.5302 62.0626C95.5775 62.0626 95.6159 61.9284 95.6159 61.7642C95.6159 61.5898 95.6857 61.4154 95.7839 61.3444C95.9632 61.2144 96.0193 55.6775 95.8583 53.9933C95.8112 53.5012 95.8266 53.2239 95.9099 53.07C96.0774 52.7599 95.9694 51.172 95.7654 50.9489C95.6831 50.8588 95.6159 50.6922 95.6159 50.5789C95.6159 50.4653 95.5727 50.3724 95.5199 50.3724C95.4671 50.3724 95.4239 50.2855 95.4239 50.1793C95.4239 50.0733 95.3591 49.9616 95.2799 49.9317C95.2007 49.9015 95.1359 49.7746 95.1359 49.6494C95.1359 49.5244 95.0927 49.422 95.0399 49.422C94.9871 49.422 94.9439 49.335 94.9439 49.2288C94.9439 49.1229 94.8791 49.0112 94.7999 48.9812C94.7207 48.9511 94.6559 48.8313 94.6559 48.7151C94.6559 48.5868 94.5613 48.4538 94.4159 48.3765C94.2839 48.3067 94.1759 48.1653 94.1759 48.0624C94.1759 47.9598 94.0679 47.7766 93.9359 47.6554C93.8039 47.5342 93.6959 47.3852 93.6959 47.3242C93.6959 47.189 92.2909 45.8104 92.1532 45.8104C92.0992 45.8104 91.9472 45.7035 91.8152 45.5728C91.6832 45.4421 91.5124 45.3352 91.4356 45.3352C91.3588 45.3352 91.2959 45.2924 91.2959 45.2401C91.2959 45.1879 91.2311 45.1451 91.1519 45.1451C91.0727 45.1451 91.0079 45.0809 91.0079 45.0025C91.0079 44.9139 90.9172 44.86 90.7679 44.86C90.6359 44.86 90.5279 44.8172 90.5279 44.7649C90.5279 44.7127 90.3812 44.6699 90.2022 44.6699C90.0011 44.6699 89.8552 44.6152 89.8211 44.5273C89.7908 44.4489 89.6564 44.3848 89.523 44.3848C89.3893 44.3848 89.2799 44.342 89.2799 44.2897C89.2799 44.2374 89.0684 44.1947 88.8102 44.1947C88.4812 44.1947 88.324 44.1519 88.2851 44.0521C88.24 43.9354 88.0024 43.9095 86.979 43.9095C85.7855 43.9095 85.7279 43.9008 85.7279 43.7164C85.7279 43.6104 85.6631 43.4987 85.5839 43.4688C85.5047 43.4386 85.4384 43.3438 85.4368 43.2578C85.4329 43.0608 85.2136 42.769 85.0693 42.769C85.0091 42.769 84.9599 42.6621 84.9599 42.5314C84.9599 42.4007 84.9167 42.2938 84.8639 42.2938C84.8111 42.2938 84.7679 42.2261 84.7679 42.1434C84.7679 42.0605 84.8003 42.0104 84.8399 42.032C84.8795 42.0534 85.0523 42.1304 85.2239 42.2033C85.3955 42.276 85.5359 42.3689 85.5359 42.4098C85.5359 42.4504 85.6871 42.4839 85.8719 42.4839C86.0567 42.4839 86.2079 42.5184 86.2079 42.5607C86.2079 42.6771 86.9101 42.9591 87.2 42.9591C87.3407 42.9591 87.4559 43.0012 87.4559 43.0523C87.4559 43.1036 87.5639 43.1725 87.6959 43.2053C87.8279 43.2381 87.9359 43.3029 87.9359 43.3495C87.9359 43.3963 88.2553 43.4343 88.6456 43.4343C89.188 43.4343 89.3684 43.4681 89.4107 43.5769C89.4524 43.6848 89.6288 43.7195 90.1352 43.7195C90.5034 43.7195 90.8312 43.7622 90.8639 43.8145C90.9421 43.9397 92.4479 43.9397 92.4479 43.8145C92.4479 43.7622 92.6176 43.7195 92.8249 43.7195C93.0325 43.7195 93.267 43.6553 93.3462 43.5769C93.4254 43.4985 93.5797 43.4343 93.6889 43.4343C93.8195 43.4343 93.8879 43.373 93.8879 43.2559C93.8879 43.1578 93.9527 43.0242 94.0319 42.9591C94.1924 42.827 94.2462 41.3434 94.0902 41.3434C94.0432 41.3434 93.9776 41.2365 93.9445 41.1058C93.9114 40.9751 93.8418 40.8682 93.79 40.8682C93.7384 40.8682 93.6959 40.7805 93.6959 40.6736C93.6959 40.5664 93.5879 40.3799 93.4559 40.2587C93.3239 40.1375 93.2159 39.9933 93.2159 39.9384C93.2159 39.7453 92.877 39.204 92.5679 38.9034C92.3963 38.7364 92.2559 38.5316 92.2559 38.4479C92.2559 38.3645 92.1911 38.2714 92.1119 38.2415C92.0327 38.2113 91.9679 38.1272 91.9679 38.0542C91.9679 37.9815 91.9247 37.9219 91.8719 37.9219C91.8191 37.9219 91.7759 37.8423 91.7759 37.7451C91.7759 37.6479 91.6679 37.488 91.5359 37.3899C91.4039 37.2917 91.2959 37.1347 91.2959 37.0411C91.2959 36.9472 91.2311 36.8458 91.1519 36.8158C91.0727 36.7856 91.0079 36.7015 91.0079 36.6286C91.0079 36.5559 90.9678 36.4962 90.9186 36.4962C90.8694 36.4962 90.8154 36.4 90.7986 36.2824C90.7789 36.1451 90.6906 36.0576 90.5519 36.0381C90.4117 36.0184 90.3359 35.9424 90.3359 35.8214C90.3359 35.7188 90.2711 35.6102 90.1919 35.5803C90.1127 35.5501 90.0479 35.4477 90.0479 35.3524C90.0479 35.2574 89.9399 35.0953 89.8079 34.9924C89.6759 34.8898 89.5679 34.7684 89.5679 34.723C89.5679 34.6776 89.4599 34.5602 89.3279 34.4621C89.1959 34.364 89.0879 34.2209 89.0879 34.1442C89.0879 34.0674 88.8719 33.7918 88.6079 33.5319C88.3439 33.2719 88.1272 33.0091 88.1262 32.9481C88.1243 32.8124 87.7072 32.4094 87.5689 32.4094C87.5137 32.4094 87.4417 32.3251 87.4086 32.2217C87.3755 32.1186 87.243 31.952 87.1141 31.8518C86.9852 31.7512 86.8799 31.622 86.8799 31.564C86.8799 31.5063 86.8033 31.459 86.7097 31.459C86.6137 31.459 86.4606 31.3141 86.3586 31.1263C86.259 30.9434 86.1196 30.7937 86.0488 30.7937C85.978 30.7937 85.9199 30.7295 85.9199 30.6511C85.9199 30.5625 85.8292 30.5086 85.6799 30.5086C85.5138 30.5086 85.4399 30.4565 85.4399 30.3394C85.4399 30.1586 84.855 29.5581 84.6788 29.5581C84.6208 29.5581 84.3584 29.3443 84.0959 29.0829C83.8333 28.8216 83.553 28.6077 83.4731 28.6077C83.3932 28.6077 83.3279 28.565 83.3279 28.5127C83.3279 28.4604 83.2631 28.4176 83.1839 28.4176C83.1047 28.4176 83.0399 28.3535 83.0399 28.2751C83.0399 28.1967 82.9854 28.1325 82.9187 28.1325C82.852 28.1325 82.7164 28.0256 82.6172 27.8949C82.5181 27.7642 82.3566 27.6573 82.2584 27.6573C82.1603 27.6573 82.0799 27.6174 82.0799 27.5687C82.0799 27.52 81.9853 27.4503 81.8699 27.414C81.7544 27.3779 81.5226 27.2039 81.3546 27.0274C81.1866 26.8511 80.9572 26.7069 80.8446 26.7069C80.7059 26.7069 80.6399 26.6472 80.6399 26.5225C80.6399 26.421 80.6024 26.3151 80.5566 26.2868C80.5105 26.2587 80.4452 26.0639 80.4114 25.8536C80.3773 25.6433 80.307 25.4713 80.2547 25.4713C80.2026 25.4713 80.1599 25.3416 80.1599 25.1831C80.1599 25.0149 80.1001 24.8723 80.0159 24.8405C79.9367 24.8103 79.8719 24.6834 79.8719 24.5582C79.8719 24.4332 79.8287 24.3308 79.7759 24.3308C79.7231 24.3308 79.6799 24.1369 79.6799 23.9C79.6799 23.6049 79.6345 23.4521 79.5359 23.4148C79.4567 23.3847 79.3919 23.2578 79.3919 23.1326C79.3919 23.0076 79.3487 22.9052 79.2959 22.9052C79.2431 22.9052 79.1999 22.7614 79.1999 22.5858C79.1999 22.3561 79.1324 22.2164 78.9599 22.088C78.7979 21.9676 78.7194 21.8165 78.7182 21.6233C78.7172 21.4434 78.628 21.2538 78.4782 21.1132C78.3472 20.9901 78.2399 20.8069 78.2399 20.7061C78.2399 20.6056 78.1751 20.4985 78.0959 20.4685C78.0167 20.4383 77.9519 20.3329 77.9519 20.2338C77.9519 20.1349 77.9087 20.0539 77.8559 20.0539C77.8031 20.0539 77.7599 19.9898 77.7599 19.9113C77.7599 19.8329 77.6951 19.7688 77.6159 19.7688C77.5328 19.7688 77.4719 19.683 77.4719 19.5661C77.4719 19.4547 77.3207 19.2223 77.1359 19.0498C76.9511 18.8773 76.7999 18.6478 76.7999 18.5396C76.7999 18.4284 76.7375 18.3431 76.6559 18.3431C76.5767 18.3431 76.5119 18.279 76.5119 18.2006C76.5119 18.1222 76.4687 18.058 76.4159 18.058C76.3631 18.058 76.3184 18.0046 76.3168 17.9392C76.3124 17.7805 75.98 17.3927 75.8485 17.3927C75.7909 17.3927 75.7439 17.348 75.7439 17.2936C75.7439 17.163 73.5779 15.0167 73.4461 15.0167C73.3897 15.0167 73.3439 14.9708 73.3439 14.9147C73.3439 14.7833 73.0996 14.5414 72.9668 14.5414C72.9102 14.5414 72.8639 14.4773 72.8639 14.3989C72.8639 14.3103 72.7732 14.2563 72.6239 14.2563C72.4919 14.2563 72.3839 14.2105 72.3839 14.1544C72.3839 14.0418 72.147 13.7811 72.0445 13.7811C72.0088 13.7811 71.8945 13.6742 71.7908 13.5435C71.6869 13.4128 71.5386 13.3059 71.4611 13.3059C71.3836 13.3059 71.1558 13.1348 70.9549 12.9257C70.754 12.7166 70.5181 12.5456 70.4308 12.5456C70.3434 12.5456 70.2719 12.5028 70.2719 12.4505C70.2719 12.3982 70.2116 12.3555 70.1382 12.3555C70.0645 12.3555 69.9796 12.2913 69.9491 12.2129C69.9188 12.1345 69.8164 12.0703 69.7216 12.0703C69.627 12.0703 69.4684 11.9634 69.3692 11.8327C69.2701 11.7021 69.1086 11.5951 69.0104 11.5951C68.9123 11.5951 68.8319 11.5524 68.8319 11.5001C68.8319 11.4478 68.7433 11.405 68.6353 11.405C68.5271 11.405 68.3387 11.2981 68.2163 11.1674C68.0939 11.0368 67.9494 10.9298 67.8952 10.9298C67.8409 10.9298 67.7716 10.8657 67.7411 10.7873C67.7108 10.7089 67.598 10.6447 67.491 10.6447C67.3837 10.6447 67.2959 10.6019 67.2959 10.5497C67.2959 10.4974 67.1924 10.4546 67.0662 10.4546C66.9397 10.4546 66.8116 10.3905 66.7811 10.3121C66.7508 10.2336 66.638 10.1695 66.531 10.1695C66.4237 10.1695 66.3359 10.1267 66.3359 10.0745C66.3359 10.0222 66.2279 9.97941 66.0959 9.97941C65.9466 9.97941 65.8559 9.92547 65.8559 9.83685C65.8559 9.74822 65.7652 9.69428 65.6159 9.69428C65.4839 9.69428 65.3759 9.65151 65.3759 9.59924C65.3759 9.54697 65.2724 9.5042 65.1462 9.5042C65.0197 9.5042 64.8916 9.44004 64.8611 9.36163C64.8292 9.27918 64.6856 9.21907 64.5205 9.21907C64.3636 9.21907 64.2116 9.18105 64.1826 9.13472C64.1536 9.08839 63.9784 9.02233 63.7928 8.98788C63.6076 8.95343 63.4559 8.88452 63.4559 8.83462C63.4559 8.78473 63.3155 8.74243 63.1439 8.74077C62.9723 8.73911 62.7481 8.67495 62.6456 8.59821C62.5429 8.52146 62.3593 8.45873 62.2376 8.45873C62.1157 8.45873 62.0159 8.41596 62.0159 8.36369C62.0159 8.31142 61.9115 8.26865 61.7838 8.26865C61.6564 8.26865 61.5361 8.2216 61.5167 8.16434C61.4975 8.10684 61.2769 8.03698 61.0266 8.00918C60.7763 7.98114 60.5483 7.92127 60.52 7.87588C60.4916 7.8305 60.2802 7.79343 60.0503 7.79343C59.8156 7.79343 59.6154 7.74449 59.5943 7.682C59.5734 7.61951 59.296 7.55203 58.9624 7.52803C58.6355 7.50451 58.3679 7.44772 58.3679 7.40186C58.3679 7.35576 58.1704 7.31822 57.9289 7.31822C57.6668 7.31822 57.4321 7.26072 57.3462 7.17566C57.2423 7.07301 56.9896 7.03309 56.4409 7.03309C55.9976 7.03309 55.6799 6.99341 55.6799 6.93805C55.6799 6.88103 55.2992 6.84301 54.7302 6.84301C53.9744 6.84301 53.7692 6.81378 53.7251 6.70045C53.6788 6.58093 53.3836 6.55788 51.891 6.55788C50.769 6.55788 50.1119 6.52272 50.1119 6.46284C50.1119 6.40225 49.3439 6.3678 47.9999 6.3678C46.6559 6.3678 45.8879 6.40225 45.8879 6.46284ZM53.8165 9.02209C56.1097 9.26065 58.4701 9.67361 59.5679 10.0281C59.7791 10.0963 60.1031 10.1814 60.2879 10.2168C60.9522 10.3446 63.4537 11.199 64.1759 11.5448C64.3343 11.6206 64.7015 11.7938 64.9919 11.9294C70.3468 14.4329 75.4513 19.4376 77.1944 23.8931C77.36 24.3168 77.5336 24.7378 77.5799 24.8286C77.99 25.6334 77.5012 25.9225 76.312 25.578C75.4182 25.319 74.6951 25.2005 73.3429 25.0912C71.829 24.9685 71.4344 24.7331 71.0305 23.7104C70.8952 23.368 69.177 21.2876 68.4282 20.5598C66.0968 18.2935 62.1721 17.1242 59.5199 17.9062C58.4264 18.2286 57.7304 18.4631 57.3162 18.6489C52.5289 20.7969 48.5437 21.4582 44.8799 20.7123C43.7382 20.4797 42.6452 20.2026 42.2879 20.0551C42.1823 20.0116 41.8583 19.9054 41.5679 19.8194C41.2775 19.7334 40.8887 19.5939 40.7039 19.5095C40.5191 19.425 40.1735 19.2822 39.9359 19.1919C39.6983 19.1016 38.9982 18.8086 38.3802 18.5408C37.2716 18.0604 37.0832 18.0057 35.5679 17.7247C34.7084 17.5652 33.1624 17.6572 32.3519 17.9157C30.993 18.3493 30.609 18.4921 30.0102 18.7865C28.7363 19.4128 27.3846 20.5134 26.3934 21.7316C25.7975 22.4637 25.2104 23.2713 24.7631 23.9737C24.1424 24.9481 24.0563 24.9961 22.9266 24.9961C22.4466 24.9961 21.898 25.0358 21.7069 25.0845C21.5161 25.133 21.1007 25.2223 20.7839 25.2827C20.4671 25.343 19.8755 25.4815 19.4694 25.5906C18.836 25.7605 18.7081 25.77 18.5711 25.6574C17.9137 25.1173 20.1515 20.8466 22.3828 18.3835C23.4911 17.1601 26.4923 14.6094 27.3431 14.1677C27.466 14.104 27.6388 13.9888 27.7271 13.9116C28.4384 13.2909 30.9978 11.9128 32.6684 11.2511C38.0708 9.1112 46.3177 8.24203 53.8165 9.02209ZM35.6864 19.0177C37.0585 19.3306 37.696 19.5666 39.9145 20.5823C40.1932 20.7099 40.4776 20.8142 40.5464 20.8142C40.6156 20.8142 40.6981 20.8401 40.7303 20.872C40.8709 21.0115 42.7801 21.5922 43.8719 21.8276C46.2875 22.3489 49.9823 22.3675 51.9359 21.8683C52.1207 21.821 52.5959 21.7069 52.9919 21.6147C53.3879 21.5225 53.7767 21.4168 53.8559 21.3797C53.9351 21.3427 54.2375 21.2388 54.5279 21.1488C54.8183 21.0587 55.1855 20.9316 55.3439 20.8663C55.5023 20.8012 55.7831 20.6926 55.9679 20.6251C56.1527 20.5574 56.6593 20.3371 57.094 20.1356C57.5286 19.9339 57.9071 19.7688 57.9349 19.7688C57.963 19.7688 58.1692 19.6861 58.3928 19.5849C62.2357 17.8484 66.3745 19.4361 69.5876 23.8796C70.3931 24.9933 70.3777 25.0617 69.2639 25.3349C66.9992 25.8907 64.8248 26.9773 62.6879 28.621C62.2919 28.9256 61.63 29.4355 61.2169 29.7542C60.8039 30.0728 59.8717 30.7255 59.1457 31.205C57.484 32.3023 57.5303 32.2733 57.0719 32.5059C56.8607 32.613 56.5367 32.7905 56.3519 32.9003C54.5464 33.9726 53.2938 34.2613 54.7696 33.2648C54.9632 33.1341 55.5438 32.685 56.06 32.2669C56.576 31.8487 57.5044 31.1002 58.1226 30.6036C62.6034 27.0048 63.8497 25.181 62.5487 24.1269C61.1845 23.0216 55.3748 25.0484 53.0144 27.453C52.4401 28.0379 51.5519 29.336 51.5519 29.59C51.5519 29.656 51.5149 29.7508 51.4698 29.8005C51.2608 30.0305 51.0498 31.0289 50.9804 32.1179C50.8657 33.9173 50.3392 34.953 49.1699 35.6789C48.8557 35.8737 48.7631 35.9863 48.7859 36.1448C48.844 36.5497 53.9528 36.4257 55.9679 35.9704C57.2072 35.6903 57.3277 35.777 56.7527 36.535C55.9139 37.6405 55.6758 38.0464 55.2625 39.0747C51.2447 49.0711 63.807 57.5222 71.668 50.1115C74.2225 47.7032 75.4285 43.6052 74.5 40.488C74.3831 40.096 74.254 39.6419 74.2127 39.4789C73.8448 38.0231 71.9754 35.6504 70.3444 34.569C69.1355 33.7673 68.1546 33.3487 66.8334 33.0704C66.6056 33.0224 66.3892 32.9647 66.3524 32.9424C66.316 32.9198 65.7925 32.8756 65.1892 32.844C63.7153 32.7665 63.6702 32.6715 64.816 32.0589C67.3643 30.696 70.1663 30.6231 72.6191 31.8558C73.2601 32.1778 74.6996 33.097 74.8568 33.285C74.9886 33.4421 77.5252 38.4225 77.9204 39.3C78.5488 40.6947 78.9613 41.6549 79.2479 42.3889C79.3398 42.6241 79.4502 42.9021 79.4932 43.0066C79.7051 43.5203 80.3708 45.5821 80.5876 46.3949C80.9305 47.6825 80.92 47.7778 80.3759 48.2853C80.1251 48.5193 79.773 48.8815 79.5935 49.0901C77.637 51.364 75.5507 53.4078 74.5439 54.0373C74.3855 54.1363 74.2343 54.2426 74.2079 54.2734C74.1666 54.3217 72.8173 54.9784 72.2399 55.2312C71.5175 55.5475 68.5895 56.0702 67.5359 56.0712C66.3018 56.0721 61.6864 55.4852 60.8639 55.2227C60.7319 55.1804 60.3431 55.0713 59.9999 54.9803C59.1647 54.7584 58.006 54.3842 57.6335 54.2157C57.4669 54.1406 57.3061 54.0791 57.2759 54.0791C56.7484 54.0791 52.768 51.8872 51.5999 50.9536C49.8688 49.5698 48.8305 49.2859 48.6148 50.1372C48.3944 51.0061 49.1308 52.0224 51.1199 53.5946C51.4895 53.8869 51.8135 54.1494 51.8399 54.1782C51.9004 54.2442 53.3339 55.2443 54.0959 55.7523C55.1156 56.4321 57.4139 57.6327 58.6079 58.1098C58.9775 58.2574 59.3663 58.4152 59.4719 58.4601C60.0892 58.7236 61.2196 59.1163 61.36 59.1163C61.4504 59.1163 61.5476 59.1534 61.576 59.1985C61.604 59.2437 61.7903 59.3069 61.9895 59.3387C62.1889 59.3706 62.5895 59.4654 62.8799 59.5495C65.6255 60.3455 69.6623 60.4697 72.7362 59.8529C73.0619 59.7876 73.3607 59.702 73.4003 59.6628C73.4396 59.6236 73.5402 59.5915 73.624 59.5913C74.6896 59.5899 78.2317 57.6627 80.0264 56.108C80.9574 55.3016 81.1016 55.5515 80.4534 56.8472C79.4029 58.9472 77.492 60.7045 76.3679 60.6047C74.9564 60.4797 73.8044 60.8452 72.7182 61.763C71.9848 62.3825 70.1022 62.5374 67.9199 62.1574C67.6559 62.1116 67.0079 62.0028 66.4799 61.9158C65.9519 61.8288 65.4448 61.7193 65.3531 61.6725C65.2614 61.6257 65.0886 61.587 64.9691 61.5862C64.774 61.5853 63.6812 61.3303 62.9279 61.1098C62.3992 60.9552 61.4922 60.7192 61.1039 60.6351C60.8927 60.5895 60.4391 60.4645 60.0959 60.3576C59.7527 60.2507 59.2343 60.0936 58.9439 60.0088C58.6535 59.9237 58.3079 59.8215 58.1759 59.7816C58.0439 59.7417 57.6767 59.6338 57.3599 59.5419C57.0431 59.4499 56.6975 59.3416 56.5919 59.3009C56.4059 59.2297 55.7956 59.0745 55.1039 58.9232C54.9191 58.8828 54.5087 58.7785 54.1919 58.6917C52.072 58.111 50.8336 57.953 48.3359 57.9452C45.9001 57.9373 45.5807 57.9661 43.5359 58.3781C41.9178 58.7041 41.4464 58.8079 40.8479 58.9695C39.5536 59.319 38.4366 59.6158 38.2559 59.6578C38.1503 59.6823 37.9775 59.7384 37.8719 59.7823C37.7663 59.8263 37.5719 59.8847 37.4399 59.9118C37.3079 59.9392 36.9839 60.0252 36.7199 60.1031C34.126 60.8699 31.486 61.558 30.3359 61.7673C29.2472 61.9655 28.7034 62.0631 28.0799 62.1722C27.1604 62.333 24.1168 62.3387 23.836 62.18C23.7193 62.1142 23.4601 61.9089 23.26 61.7241C23.0596 61.5392 22.5316 61.2115 22.0864 60.9958L21.2766 60.6037L20.1709 60.6102C19.1137 60.6161 18.7825 60.5443 18.5279 60.254C18.5015 60.2238 18.3071 60.0767 18.0959 59.9268C17.0982 59.219 16.1276 58.0269 15.5423 56.7902C14.8919 55.4163 15.027 55.3018 16.1725 56.2567C20.6608 59.9988 26.9687 61.2488 33.0239 59.5965C33.2087 59.5462 33.5975 59.4428 33.8879 59.367C35.846 58.8554 38.6003 57.6902 40.7416 56.4675C41.2112 56.1992 41.6288 55.9799 41.6696 55.9799C41.7104 55.9799 41.7582 55.9464 41.776 55.9056C41.8074 55.8324 42.9925 55.0295 43.0693 55.0295C43.1536 55.0295 45.866 52.8397 46.3321 52.3954C48.1278 50.6837 47.5636 48.8339 45.6205 50.0619C45.4772 50.1524 44.9711 50.5276 44.4959 50.8954C43.604 51.5854 42.5308 52.2733 42.3455 52.2733C42.2874 52.2733 42.2399 52.312 42.2399 52.3593C42.2399 52.4294 40.1274 53.5022 39.4079 53.7973C38.8446 54.0285 38.4623 54.1889 38.1695 54.3167C37.9897 54.3951 37.8056 54.4593 37.7603 54.4593C37.7147 54.4593 37.3324 54.5683 36.9107 54.7016C35.7568 55.0666 34.5006 55.38 33.6959 55.5042C33.2999 55.5653 32.8247 55.6518 32.6399 55.6965C31.5102 55.9695 27.9671 56.0811 26.5919 55.8868C23.0521 55.3871 21.1676 54.2568 17.8736 50.6576C17.3713 50.1087 16.5678 49.2374 16.088 48.7215C15.6083 48.2055 15.2022 47.7041 15.1856 47.6074C15.1434 47.3629 15.8586 44.8262 16.2952 43.6719C16.7108 42.5723 16.9033 42.0904 17.187 41.4384C17.3348 41.0987 17.6377 40.3932 17.86 39.871C18.2759 38.8932 19.8443 35.7309 20.8537 33.835C21.2286 33.131 22.4653 32.2096 23.7119 31.7059C23.9495 31.6099 24.2303 31.4963 24.3359 31.4535C25.3996 31.0225 27.8951 30.8619 28.8959 31.1598C30.5204 31.6436 32.044 32.3873 32.0608 32.7048C32.0624 32.7366 31.5786 32.7929 30.9856 32.83C29.8019 32.9043 29.1152 33.0438 27.6479 33.5081C26.7572 33.7901 25.3324 34.7102 24.35 35.6375C23.782 36.1738 22.5599 37.6961 22.5599 37.8672C22.5599 37.8993 22.4591 38.0851 22.3357 38.2802C22.2126 38.4753 22.0864 38.7202 22.0554 38.8248C22.0244 38.9293 21.9124 39.2501 21.8063 39.5376C20.8638 42.0949 21.1597 45.4632 22.5311 47.7877C23.7724 49.8918 25.1725 51.0964 27.7528 52.2811C30.0748 53.347 33.8855 53.0051 36.5855 51.4882C37.7442 50.8374 39.1379 49.5102 39.9107 48.3214C40.25 47.7994 41.0519 46.0575 41.132 45.6678C41.1644 45.511 41.2487 45.1047 41.3195 44.7649C41.8974 41.9902 41.2645 39.2765 39.4727 36.846C38.7366 35.8476 38.7584 35.7627 39.7098 35.926C41.9065 36.3028 42.9745 36.3941 45.2159 36.3964C47.5093 36.3988 47.7985 36.2517 46.7519 35.6161C45.6433 34.9428 45.1009 33.7405 44.984 31.6966C44.9483 31.0755 44.86 30.5651 44.7287 30.2234C44.618 29.9359 44.5028 29.6185 44.4721 29.5178C43.9679 27.8547 41.3185 25.7591 38.3387 24.6658C37.9763 24.5328 37.5935 24.3855 37.4879 24.3382C37.3823 24.2909 36.9719 24.179 36.5759 24.0894C36.1799 23.9998 35.7306 23.8891 35.5775 23.8435C33.7739 23.3058 32.3663 24.6416 33.2072 26.0931C33.6503 26.8578 36.4588 29.4695 38.9773 31.459C39.4192 31.808 39.9551 32.2526 40.2563 32.5201C40.3544 32.6073 40.7322 32.8853 41.0958 33.1379C41.7148 33.5682 41.9219 33.835 41.6365 33.835C41.3912 33.835 39.4739 32.8378 38.1119 32.0017C36.6354 31.0955 36.5807 31.0582 35.0879 29.9457C34.5599 29.5524 34.0847 29.1986 34.0319 29.1599C33.9791 29.1212 33.7847 28.9672 33.5999 28.8178C33.2202 28.5108 31.6014 27.3722 31.5445 27.3722C31.5241 27.3722 31.233 27.2073 30.8977 27.0058C29.7186 26.297 28.0592 25.5989 27.0239 25.376C25.5752 25.0643 25.5992 25.1344 26.4944 23.8233C28.8587 20.3602 32.7205 18.3412 35.6864 19.0177ZM33.0239 35.7765C34.8772 36.2289 36.5209 37.3939 37.5162 38.96C37.9542 39.6488 38.0305 39.7925 38.3046 40.4405C38.7875 41.5834 38.8055 44.0424 38.3387 45.1118C38.2667 45.2767 38.2079 45.4518 38.2079 45.5013C38.2079 46.0853 36.5576 48.1501 35.5763 48.794C34.6108 49.4275 34.437 49.5047 32.8732 49.9949C32.1436 50.2234 29.5645 50.0407 28.9124 49.7143C28.8241 49.6701 28.516 49.5327 28.2277 49.4092C22.8817 47.1172 22.732 39.1061 27.9851 36.4371C28.4992 36.1757 28.7838 36.0678 29.8079 35.7464C30.2476 35.6083 32.4181 35.6287 33.0239 35.7765ZM66.37 35.7879C71.8355 37.1513 73.8246 43.9036 69.9256 47.8571C65.7565 52.0846 58.6763 50.0507 57.4595 44.2762C56.7244 40.7884 58.922 37.0325 62.3039 35.9968C62.5943 35.9079 62.9615 35.7948 63.1199 35.7456C63.6011 35.5957 65.7097 35.6233 66.37 35.7879ZM79.4 37.3628C80.1306 37.9397 80.4236 38.3412 80.8336 39.3266C81.238 40.2996 81.7242 41.2973 82.3019 42.3413C83.8693 45.1729 83.9411 45.4428 83.2559 45.9249C82.1807 46.6815 81.9328 46.6244 81.657 45.5576C81.3251 44.2743 80.9612 43.2155 80.2573 41.486C80.0872 41.0678 79.8414 40.4481 79.7111 40.109C79.581 39.7697 79.3936 39.342 79.2949 39.1586C78.1496 37.0285 78.1861 36.4038 79.4 37.3628ZM17.4757 37.3307C17.4124 37.6741 17.2324 38.0932 16.0691 40.6075C15.7847 41.2222 15.5519 41.7877 15.5519 41.8645C15.5519 41.941 15.4487 42.2292 15.3227 42.5051C15.1964 42.7809 14.8871 43.6696 14.6353 44.4798C13.9729 46.6109 13.9268 46.656 13.0189 46.0594C12.1993 45.5208 12.1835 45.3559 12.8344 44.1215C13.13 43.5607 13.5224 42.813 13.7063 42.4601C13.8899 42.1073 14.078 41.8186 14.1241 41.8186C14.1702 41.8186 14.2079 41.7649 14.2079 41.6996C14.2079 41.634 14.354 41.2811 14.5326 40.9155C14.7112 40.5496 15.0388 39.8161 15.2608 39.285C15.6563 38.3389 15.8209 38.1205 16.8335 37.2005C17.2304 36.8398 17.5542 36.9054 17.4757 37.3307ZM30.4844 40.1005C30.4544 40.1487 30.3073 40.215 30.1576 40.2473C28.922 40.5161 28.0787 42.88 28.766 44.1472C29.6557 45.7871 31.7584 46.2226 33.2056 45.0669C34.9319 43.6879 34.4694 40.9167 32.3896 40.1784C31.8884 40.0007 30.5802 39.9472 30.4844 40.1005ZM63.4976 40.2388C60.0769 41.8158 62.1872 46.8226 65.7208 45.5139C68.0454 44.6528 68.1848 41.414 65.9456 40.2948C65.1968 39.9206 64.2356 39.8985 63.4976 40.2388ZM43.2875 46.752C42.3474 47.0514 41.9598 47.8742 42.0935 49.2866C42.1705 50.1016 42.2579 50.1398 42.6102 49.5128C43.3057 48.2751 44.1618 47.7951 45.6803 47.7911C46.5412 47.7889 46.75 47.7649 46.5839 47.6877C46.4651 47.6324 46.3679 47.5509 46.3679 47.5067C46.3679 47.4622 46.3112 47.4261 46.2419 47.4261C46.1725 47.4261 45.9385 47.3413 45.7216 47.2375C44.8108 46.8019 43.778 46.5959 43.2875 46.752ZM51.1753 46.9055C50.5045 47.1367 49.965 47.3729 49.4605 47.6564C49.2707 47.763 49.3828 47.7792 50.2883 47.7759C51.4662 47.7718 52.0996 47.9845 52.6624 48.5728C52.8172 48.7348 53.0195 48.9373 53.1119 49.0231C53.2043 49.1088 53.2811 49.2231 53.2825 49.2768C53.284 49.3305 53.408 49.5351 53.5583 49.7316L53.8316 50.089L53.8916 49.791C54.3587 47.4791 53.1712 46.2174 51.1753 46.9055ZM11.8974 53.0426C13.065 53.4839 13.2104 53.6447 13.4795 54.7919C13.7881 56.1085 13.953 56.6179 14.2446 57.1585C14.3828 57.4144 14.4959 57.6772 14.4959 57.7425C14.4959 57.9226 15.4952 59.2644 16.2361 60.0793C17.0936 61.0222 17.0687 61.2498 16.0799 61.4988C15.8687 61.5518 15.6095 61.6338 15.5039 61.6808C15.0515 61.8825 13.0909 62.242 12.4319 62.2444C10.7008 62.2504 7.96667 60.661 7.60403 59.4381C7.38515 58.7005 7.48667 57.4866 7.87283 56.2175C7.96835 55.9039 8.11403 55.3237 8.19635 54.9283C8.65571 52.7247 9.67835 52.2037 11.8974 53.0426ZM86.9759 52.7879C87.4132 52.944 87.7141 53.7113 88.3019 56.17C89.0332 59.2273 88.9218 59.6928 87.1199 61.1122C85.9074 62.0674 83.7164 62.5421 82.2829 62.1603C82.0921 62.1095 81.5903 61.984 81.1679 61.8814C78.7408 61.2926 78.6431 61.1702 79.7288 60.0777C80.7966 59.0035 81.6388 57.6681 82.0712 56.3632C82.3105 55.6416 82.6559 54.2338 82.6559 53.9795C82.6559 53.7852 83.3836 53.2826 84.0479 53.0179C84.2591 52.9338 84.5399 52.8202 84.6719 52.7656C85.0055 52.6275 86.5691 52.6425 86.9759 52.7879ZM51.5519 59.454C51.9479 59.5371 52.4046 59.6448 52.5666 59.6935C52.7288 59.7419 52.9664 59.7835 53.0946 59.7859C53.223 59.788 53.5007 59.8531 53.7119 59.9306C53.9231 60.0078 54.3119 60.1131 54.5759 60.1644C55.0897 60.2642 55.3525 60.3343 57.2159 60.868C58.7987 61.3213 59.2535 61.4556 59.9999 61.6894C61.2596 62.0843 65.4544 63.086 66.4799 63.2369C68.3156 63.5068 69.0143 63.5833 69.6464 63.5833C70.1552 63.5833 70.3069 63.6223 70.5265 63.8093L70.792 64.0353L70.3398 64.9866C69.6049 66.5334 69.8161 67.0956 70.9237 66.5415C71.1196 66.4436 71.6255 66.2478 72.0479 66.1069C74.3382 65.3418 76.7876 65.2962 79.0079 65.9777C79.3806 66.092 79.5152 66.1431 80.1961 66.4284C80.4536 66.5363 80.696 66.6247 80.7347 66.6247C80.7736 66.6247 81.1074 66.7891 81.4768 66.9901C82.8688 67.7476 84.3822 68.186 86.6555 68.4904C88.0703 68.6797 85.5901 72.4855 81.7376 76.0363C81.1033 76.621 78.22 78.5475 77.056 79.1646C75.5872 79.943 74.4368 80.4971 73.6129 80.8226C73.1538 81.0041 72.6354 81.2139 72.4609 81.289C71.4095 81.7417 70.6506 82.0002 67.6799 82.9176C67.0156 83.1226 64.9475 83.6387 63.4559 83.9713C62.8758 84.1006 61.8018 84.2971 59.8079 84.639C58.5944 84.8469 56.2604 85.1454 55.0079 85.2525C54.4007 85.3046 53.5151 85.3889 53.0399 85.44C50.6238 85.7002 46.5952 85.6605 43.3919 85.3452C42.8903 85.2958 41.7887 85.1898 40.9439 85.1097C40.0991 85.0296 38.9111 84.8982 38.3039 84.8179C37.3331 84.6892 36.8077 84.6022 35.1839 84.3019C34.9727 84.2627 34.4759 84.1802 34.0799 84.1182C33.6839 84.0562 33.2303 83.9661 33.0719 83.9176C32.7671 83.8247 31.2853 83.4952 30.4799 83.341C30.2159 83.2906 29.7839 83.1697 29.5199 83.0725C29.2559 82.9751 28.7807 82.8313 28.4639 82.7527C27.3901 82.4868 27.0244 82.3858 26.8319 82.3024C26.7263 82.2565 26.049 82.0244 25.3266 81.7863C24.6044 81.5485 23.6442 81.1833 23.1928 80.9749C22.7413 80.7665 22.2779 80.5959 22.1629 80.5959C22.048 80.5959 21.8125 80.489 21.6392 80.3583C21.4662 80.2276 21.2893 80.1205 21.2464 80.1202C21.2032 80.1198 21.0383 80.0511 20.8799 79.9674C20.7215 79.8836 20.0303 79.5348 19.3439 79.1921C18.6575 78.8493 17.9231 78.4323 17.7119 78.2652C17.5007 78.0984 17.0903 77.8074 16.7999 77.6185C14.8566 76.3554 14.6598 76.1962 13.0096 74.5517C11.6584 73.2054 11.1052 72.5701 10.6588 71.852C10.4802 71.5645 10.2592 71.2437 10.1677 71.1392C9.86771 70.7961 9.21587 69.4049 9.21587 69.1079C9.21587 68.7539 9.42731 68.622 10.0016 68.6172C10.9424 68.6094 12.3726 68.1344 14.1599 67.236C18.2092 65.2005 21.1268 64.9999 24.8456 66.5018C26.2955 67.0873 26.54 66.6088 25.6691 64.8902C25.1281 63.8226 25.2786 63.5838 26.4932 63.5824C27.3028 63.5814 29.1503 63.364 29.6632 63.2093C29.8477 63.1537 30.1206 63.1081 30.2699 63.1081C30.711 63.1081 34.7492 62.0824 37.1999 61.3477C38.5772 60.935 40.1694 60.498 40.8829 60.3374C41.3248 60.2378 41.9389 60.072 42.248 59.9691C42.5569 59.866 42.8929 59.7816 42.9944 59.7816C43.096 59.7816 43.6266 59.6913 44.1736 59.5813C46.1516 59.1826 49.9477 59.117 51.5519 59.454Z", fill: "#0E3145" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.2559 8.84109C37.5642 9.30632 30.5332 11.4631 27.7271 13.9116C27.6388 13.9888 27.466 14.1041 27.3431 14.1677C26.4923 14.6094 23.4911 17.1601 22.3828 18.3836C20.1515 20.8466 17.9138 25.1173 18.5711 25.6574C18.7082 25.77 18.8361 25.7605 19.4694 25.5906C19.8755 25.4816 20.4671 25.3431 20.7839 25.2827C21.1007 25.2224 21.5162 25.133 21.707 25.0845C21.898 25.0358 22.4466 24.9962 22.9266 24.9962C24.0563 24.9962 24.1425 24.9482 24.7631 23.9737C25.2105 23.2714 25.7975 22.4637 26.3934 21.7317C26.8523 21.1676 27.6645 20.3595 28.1164 20.0174C29.0913 19.2794 29.3498 19.1111 30.0102 18.7866C30.609 18.4922 30.993 18.3494 32.3519 17.9157C33.1624 17.6572 34.7085 17.5653 35.5679 17.7247C37.0833 18.0058 37.2717 18.0604 38.3802 18.5409C38.9982 18.8087 39.6983 19.1016 39.9359 19.1919C40.1735 19.2822 40.5191 19.425 40.7039 19.5096C40.8887 19.5939 41.2775 19.7334 41.5679 19.8194C41.8583 19.9054 42.1823 20.0117 42.2879 20.0551C42.5133 20.1483 43.3538 20.3795 43.9679 20.5175C48.3671 21.5057 52.12 20.9804 57.3162 18.649C57.7305 18.4632 58.4265 18.2287 59.5199 17.9062C62.1722 17.1243 66.0969 18.2935 68.4282 20.5598C69.177 21.2876 70.8952 23.3681 71.0306 23.7105C71.4345 24.7331 71.829 24.9686 73.343 25.0912C74.6951 25.2005 75.4182 25.3191 76.312 25.5781C77.5012 25.9226 77.9901 25.6334 77.5799 24.8286C77.5336 24.7379 77.3601 24.3168 77.1945 23.8932C75.4514 19.4376 70.3468 14.4329 64.9919 11.9295C64.7015 11.7938 64.3343 11.6206 64.1759 11.5448C63.4538 11.1991 60.9522 10.3447 60.2879 10.2168C60.1031 10.1814 59.7791 10.0964 59.5679 10.0282C58.4702 9.67366 56.1098 9.2607 53.8166 9.02214C51.7182 8.80378 46.275 8.7009 44.2559 8.84109ZM52.3199 9.26664C53.0855 9.34196 53.9927 9.40588 54.3359 9.40849C56.459 9.42536 61.2966 10.6431 64.0319 11.8494C68.0385 13.6163 72.761 17.2785 74.6915 20.1164C74.8638 20.3695 75.0794 20.6622 75.1708 20.7668C75.3875 21.0148 75.9318 21.9774 76.4606 23.0478C77.075 24.2917 77.2 24.6005 77.2554 25.0097L77.3051 25.3763H76.9586C76.7678 25.3763 76.449 25.3174 76.2498 25.2454C75.6974 25.0458 74.2641 24.8187 73.2479 24.7702C72.1007 24.7151 72.0993 24.7144 71.6534 24.064C71.4494 23.7663 71.2559 23.5016 71.2235 23.4755C71.1911 23.4493 71.0488 23.2448 70.9072 23.0209C68.7904 19.6757 65.4352 17.5793 61.943 17.4206C59.8943 17.3274 58.979 17.5619 55.7279 19.012C50.4633 21.3608 44.8864 21.2042 39.2524 18.5492C36.7372 17.364 34.3554 16.9895 32.4479 17.4795C31.7838 17.6501 30.2822 18.1883 29.9999 18.357C29.8415 18.4515 29.4743 18.6542 29.1839 18.8072C27.7358 19.5711 26.3685 20.9789 24.7197 23.4042L23.896 24.616L23.4438 24.6169C22.5899 24.6186 20.4837 24.8954 19.8662 25.0869C19.0211 25.3492 18.7783 25.3445 18.845 25.0674C19.0151 24.3584 20.0162 22.2732 20.6358 21.337C20.8434 21.0234 21.0861 20.6385 21.1746 20.4816C21.2634 20.3248 21.6239 19.8757 21.9758 19.4837C22.3276 19.0916 22.714 18.6438 22.8345 18.4884C23.3126 17.8711 25.4651 15.9923 26.7359 15.0832C27.4751 14.5543 28.1015 14.0943 28.1279 14.0608C28.1543 14.0273 28.3919 13.8824 28.6559 13.7386C28.9199 13.5949 29.2007 13.4228 29.2799 13.3566C29.4282 13.2323 31.1908 12.2605 31.2678 12.2605C31.2916 12.2605 31.6252 12.1108 32.0094 11.9278C32.3937 11.7449 32.7606 11.5952 32.8247 11.5952C32.8888 11.5952 33.2514 11.4733 33.6306 11.3245C34.78 10.8731 35.2948 10.7222 37.1039 10.3071C37.4735 10.2223 38.0135 10.0964 38.3039 10.027C39.3822 9.76965 39.8106 9.68934 40.5599 9.6038C40.9823 9.55557 41.7167 9.4686 42.1919 9.41063C44.0745 9.18039 44.7076 9.1495 47.7599 9.13976C49.8827 9.1331 51.3873 9.17492 52.3199 9.26664ZM33.3599 19.0301C30.6069 19.5486 28.3254 21.1415 26.4945 23.8233C25.5993 25.1344 25.5753 25.0643 27.0239 25.3761C28.0593 25.599 29.7186 26.297 30.8978 27.0058C31.233 27.2073 31.5242 27.3722 31.5446 27.3722C31.6014 27.3722 33.2202 28.5108 33.5999 28.8178C33.7847 28.9673 33.9791 29.1212 34.0319 29.16C34.0847 29.1987 34.5599 29.5525 35.0879 29.9457C36.5807 31.0582 36.6354 31.0955 38.1119 32.0017C39.4739 32.8379 41.3913 33.8351 41.6366 33.8351C41.9219 33.8351 41.7148 33.5683 41.0958 33.138C40.7322 32.8854 40.3545 32.6074 40.2563 32.5202C39.9551 32.2526 39.4192 31.8081 38.9774 31.459C36.4588 29.4696 33.6503 26.8578 33.2073 26.0932C32.3663 24.6416 33.7739 23.3058 35.5775 23.8435C35.7306 23.8891 36.1799 23.9999 36.5759 24.0894C36.9719 24.179 37.3823 24.2909 37.4879 24.3382C37.5935 24.3855 37.9763 24.5328 38.3387 24.6659C41.3186 25.7591 43.9679 27.8548 44.4722 29.5178C44.5029 29.6185 44.6181 29.936 44.7287 30.2235C44.86 30.5652 44.9483 31.0755 44.9841 31.6966C45.101 33.7405 45.6434 34.9428 46.7519 35.6162C47.7986 36.2518 47.5094 36.3989 45.2159 36.3965C42.9746 36.3941 41.9066 36.3029 39.7098 35.926C38.7585 35.7628 38.7366 35.8476 39.4727 36.846C41.2646 39.2765 41.8974 41.9902 41.3195 44.765C41.2487 45.1047 41.1645 45.5111 41.1321 45.6679C41.0519 46.0575 40.2501 47.7994 39.9107 48.3215C39.1379 49.5102 37.7442 50.8375 36.5855 51.4883C33.8855 53.0051 30.0748 53.3471 27.7528 52.2812C22.3874 49.8179 19.9458 44.5858 21.8063 39.5376C21.9124 39.2501 22.0245 38.9294 22.0554 38.8248C22.0864 38.7203 22.2126 38.4753 22.3358 38.2802C22.4591 38.0852 22.5599 37.8993 22.5599 37.8673C22.5599 37.6962 23.782 36.1738 24.3501 35.6376C25.3324 34.7102 26.7573 33.7902 27.6479 33.5081C29.1153 33.0439 29.8019 32.9044 30.9856 32.83C31.5786 32.793 32.0625 32.7366 32.0608 32.7048C32.044 32.3874 30.5205 31.6437 28.8959 31.1599C27.8951 30.8619 25.3996 31.0226 24.3359 31.4536C24.2303 31.4963 23.9495 31.6099 23.7119 31.7059C22.4654 32.2096 21.2286 33.1311 20.8538 33.8351C19.8443 35.731 18.2759 38.8932 17.86 39.871C17.6378 40.3933 17.3349 41.0987 17.187 41.4385C16.9034 42.0905 16.7109 42.5723 16.2952 43.672C15.8587 44.8263 15.1434 47.363 15.1857 47.6075C15.2022 47.7042 15.6083 48.2055 16.0881 48.7216C16.5678 49.2374 17.3714 50.1087 17.8737 50.6576C21.1677 54.2569 23.0522 55.3871 26.5919 55.8868C27.9671 56.0812 31.5102 55.9695 32.6399 55.6965C32.8247 55.6518 33.2999 55.5653 33.6959 55.5043C34.5006 55.38 35.7568 55.0666 36.9107 54.7016C37.3324 54.5684 37.7147 54.4593 37.7603 54.4593C37.8057 54.4593 37.9898 54.3951 38.1695 54.3167C38.4623 54.1889 38.8446 54.0285 39.4079 53.7973C40.1274 53.5022 42.2399 52.4294 42.2399 52.3593C42.2399 52.312 42.2874 52.2733 42.3455 52.2733C42.5308 52.2733 43.6041 51.5854 44.4959 50.8954C44.9711 50.5276 45.4773 50.1524 45.6206 50.0619C47.5636 48.834 48.1278 50.6837 46.3322 52.3954C45.8661 52.8398 43.1536 55.0295 43.0694 55.0295C42.9926 55.0295 41.8074 55.8324 41.776 55.9056C41.7582 55.9465 41.7105 55.98 41.6697 55.98C41.6289 55.98 41.2113 56.1993 40.7416 56.4675C38.6003 57.6903 35.8461 58.8555 33.8879 59.367C33.5975 59.4428 33.2087 59.5462 33.0239 59.5966C26.9687 61.2489 20.6608 59.9988 16.1726 56.2568C15.0271 55.3018 14.8919 55.4164 15.5423 56.7902C16.1277 58.0269 17.0983 59.219 18.0959 59.9268C18.3071 60.0768 18.5015 60.2238 18.5279 60.254C18.7826 60.5444 19.1138 60.6161 20.171 60.6102L21.2766 60.6038L22.0864 60.9958C22.5316 61.2116 23.0596 61.5392 23.26 61.7241C23.4602 61.9089 23.7194 62.1142 23.836 62.1801C24.1168 62.3388 27.1605 62.3331 28.0799 62.1722C28.7034 62.0632 29.2473 61.9655 30.3359 61.7673C31.486 61.558 34.126 60.8699 36.7199 60.1031C36.9839 60.0252 37.3079 59.9392 37.4399 59.9119C37.5719 59.8848 37.7663 59.8263 37.8719 59.7824C37.9775 59.7384 38.1503 59.6823 38.2559 59.6579C38.4366 59.6158 39.5536 59.319 40.8479 58.9695C41.4465 58.808 41.9178 58.7041 43.5359 58.3781C45.5807 57.9661 45.9002 57.9374 48.3359 57.9452C50.8336 57.953 52.072 58.1111 54.1919 58.6918C54.5087 58.7785 54.9191 58.8828 55.1039 58.9232C55.7956 59.0745 56.4059 59.2297 56.5919 59.301C56.6975 59.3416 57.0431 59.45 57.3599 59.5419C57.6767 59.6339 58.0439 59.7417 58.1759 59.7817C58.3079 59.8216 58.6535 59.9238 58.9439 60.0088C59.2343 60.0936 59.7527 60.2507 60.0959 60.3576C60.4391 60.4645 60.8927 60.5895 61.1039 60.6351C61.4922 60.7193 62.3992 60.9552 62.9279 61.1099C63.6813 61.3304 64.774 61.5853 64.9691 61.5863C65.0886 61.587 65.2614 61.6257 65.3531 61.6725C65.4448 61.7193 65.9519 61.8289 66.4799 61.9158C67.0079 62.0028 67.6559 62.1116 67.9199 62.1575C70.1022 62.5374 71.9848 62.3825 72.7182 61.7631C73.8045 60.8452 74.9565 60.4797 76.3679 60.6047C77.4921 60.7045 79.403 58.9472 80.4534 56.8472C81.1017 55.5516 80.9574 55.3016 80.0265 56.108C78.2318 57.6627 74.6896 59.5899 73.624 59.5913C73.5402 59.5916 73.4397 59.6237 73.4003 59.6629C73.3607 59.7021 73.0619 59.7876 72.7362 59.8529C69.6623 60.4698 65.6255 60.3455 62.8799 59.5495C62.5895 59.4654 62.189 59.3706 61.9895 59.3388C61.7903 59.3069 61.6041 59.2437 61.576 59.1986C61.5477 59.1534 61.4505 59.1164 61.36 59.1164C61.2196 59.1164 60.0892 58.7236 59.4719 58.4601C59.3663 58.4152 58.9775 58.2574 58.6079 58.1099C57.4139 57.6328 55.1157 56.4321 54.0959 55.7523C53.3339 55.2443 51.9004 54.2443 51.8399 54.1782C51.8135 54.1495 51.4895 53.8869 51.1199 53.5946C49.1308 52.0224 48.3945 51.0062 48.6148 50.1372C48.8306 49.2859 49.8688 49.5698 51.5999 50.9537C52.768 51.8872 56.7484 54.0791 57.2759 54.0791C57.3062 54.0791 57.467 54.1407 57.6335 54.2157C58.006 54.3842 59.1647 54.7584 59.9999 54.9804C60.3431 55.0714 60.7319 55.1804 60.8639 55.2227C61.6864 55.4853 66.3018 56.0722 67.5359 56.0712C68.5895 56.0703 71.5175 55.5475 72.2399 55.2313C72.8174 54.9785 74.1666 54.3217 74.2079 54.2735C74.2343 54.2426 74.3855 54.1364 74.5439 54.0373C75.5507 53.4079 77.637 51.364 79.5935 49.0901C79.773 48.8815 80.1251 48.5194 80.3759 48.2853C80.92 47.7778 80.9306 47.6825 80.5876 46.3949C80.3709 45.5821 79.7051 43.5204 79.4932 43.0067C79.4502 42.9021 79.3398 42.6241 79.2479 42.3889C78.9614 41.6549 78.5488 40.6948 77.9205 39.3C77.5252 38.4226 74.9886 33.4421 74.8569 33.285C74.6997 33.0971 73.2602 32.1778 72.6191 31.8558C70.1663 30.6231 67.3643 30.6961 64.816 32.059C63.6702 32.6715 63.7154 32.7666 65.1892 32.844C65.7926 32.8756 66.316 32.9198 66.3525 32.9424C66.3892 32.9647 66.6057 33.0225 66.8334 33.0705C68.1546 33.3487 69.1355 33.7674 70.3444 34.5691C71.9754 35.6504 73.8448 38.0231 74.2127 39.4789C74.254 39.6419 74.3831 40.096 74.5 40.4881C75.4286 43.6052 74.2226 47.7032 71.668 50.1116C63.807 57.5223 51.2447 49.0711 55.2626 39.0748C55.6758 38.0464 55.9139 37.6406 56.7527 36.535C57.3278 35.777 57.2073 35.6903 55.9679 35.9705C53.9529 36.4257 48.844 36.5497 48.7859 36.1449C48.7631 35.9864 48.8558 35.8738 49.1699 35.6789C50.3392 34.953 50.8658 33.9173 50.9805 32.1179C51.0498 31.029 51.2608 30.0305 51.4698 29.8005C51.515 29.7509 51.5519 29.6561 51.5519 29.59C51.5519 28.7178 53.7767 26.5213 55.6108 25.5828C59.8413 23.418 63.0746 23.245 63.0712 25.1836C63.0695 26.1074 61.2782 28.0693 58.1226 30.6037C57.5044 31.1003 56.5761 31.8487 56.0601 32.2669C55.5438 32.6851 54.9633 33.1342 54.7696 33.2648C53.2938 34.2614 54.5464 33.9727 56.3519 32.9004C56.5367 32.7906 56.8607 32.6131 57.0719 32.5059C57.5303 32.2733 57.484 32.3023 59.1458 31.205C59.8718 30.7255 60.8039 30.0728 61.217 29.7542C61.63 29.4356 62.2919 28.9257 62.6879 28.6211C64.8249 26.9773 66.9993 25.8907 69.2639 25.335C70.3778 25.0617 70.3931 24.9933 69.5877 23.8796C66.3746 19.4362 62.2358 17.8485 58.3929 19.5849C58.1692 19.6861 57.963 19.7688 57.935 19.7688C57.9071 19.7688 57.5286 19.934 57.094 20.1357C56.6594 20.3372 56.1527 20.5574 55.9679 20.6252C55.7831 20.6926 55.5023 20.8012 55.3439 20.8663C55.1855 20.9317 54.8183 21.0588 54.5279 21.1488C54.2375 21.2389 53.9351 21.3427 53.8559 21.3798C53.7767 21.4169 53.3879 21.5226 52.9919 21.6148C52.5959 21.707 52.1207 21.821 51.9359 21.8683C49.9823 22.3675 46.2875 22.349 43.8719 21.8277C42.7802 21.5922 40.871 21.0115 40.7303 20.872C40.6982 20.8402 40.6156 20.8143 40.5465 20.8143C40.4776 20.8143 40.1932 20.71 39.9146 20.5824C37.696 19.5666 37.0586 19.3307 35.6865 19.0177C35.151 18.8956 34.0425 18.9016 33.3599 19.0301ZM36.3839 19.3407C36.7271 19.4309 37.8004 19.842 38.769 20.2542C45.5882 23.1557 50.3212 23.1654 57.0719 20.2918C59.5437 19.2397 60.2178 19.0712 61.7279 19.1287C64.81 19.2456 67.1766 20.7252 69.4943 23.9844C70.102 24.8391 70.1646 25.09 69.771 25.0929C68.1225 25.105 64.8484 26.7758 61.6799 29.2217C60.4638 30.1605 57.3278 32.3144 57.177 32.3144C57.1434 32.3144 56.955 32.414 56.758 32.5356C55.222 33.4851 54.3906 33.7151 55.4968 32.8847C55.8796 32.5972 56.2396 32.3168 56.2965 32.2617C56.3534 32.2065 56.8967 31.7632 57.5039 31.2761C60.9326 28.5265 63.0578 26.3871 63.2219 25.5203C63.5646 23.7121 61.4495 23.173 58.3199 24.2707C53.4489 25.9794 51.1494 28.3317 50.8756 31.8867C50.7179 33.9332 50.3342 34.6948 48.9839 35.6414C48.5262 35.9621 48.4641 36.2178 48.7893 36.4433C49.2155 36.7389 53.5278 36.5657 55.7279 36.1648C56.5629 36.0125 57.0333 35.9835 56.8766 36.0938C56.1695 36.5913 54.9594 38.8303 54.4797 40.5287C54.1475 41.7046 54.3239 45.5203 54.7302 45.9482C54.7773 45.9979 54.8159 46.1531 54.8159 46.293C54.8159 46.433 54.8807 46.6007 54.9599 46.6658C55.0391 46.7309 55.1039 46.8559 55.1039 46.9436C55.1039 47.0313 55.1418 47.1436 55.1882 47.1933C55.2345 47.243 55.413 47.5402 55.5849 47.8538C56.7047 49.8975 58.4315 51.4163 60.7199 52.3705C61.9732 52.893 62.355 52.9819 63.9839 53.1287C64.9434 53.2154 66.6707 53.0622 67.1519 52.8478C67.2575 52.8008 67.4975 52.7374 67.6852 52.7069C67.8731 52.6765 68.1954 52.5665 68.4016 52.4625C68.6078 52.3584 68.8247 52.2733 68.8838 52.2733C68.9954 52.2733 70.6446 51.3072 70.9799 51.0456C71.7962 50.4081 73.3439 48.7461 73.3439 48.507C73.3439 48.4697 73.4022 48.3716 73.4738 48.2889C73.9295 47.7619 74.7753 45.7242 74.7808 45.1404C74.7825 44.9548 74.83 44.7574 74.8862 44.7018C75.0254 44.564 75.0254 41.1643 74.8862 41.0265C74.83 40.9709 74.7839 40.815 74.7839 40.6803C74.7839 39.9793 73.7272 37.5593 73.1584 36.9572C73.0422 36.8344 72.8656 36.6056 72.766 36.4488C72.2397 35.6198 70.2664 34.081 68.9961 33.5086C67.8777 33.0049 66.3359 32.6233 65.1359 32.5537C64.8719 32.5385 64.6192 32.5211 64.5743 32.5152C64.5294 32.5093 64.7123 32.3581 64.9809 32.1792C66.9827 30.8455 70.7193 30.8037 72.79 32.0918C72.987 32.2141 73.1742 32.3144 73.2064 32.3144C73.3816 32.3144 74.7141 33.3323 74.8696 33.5851C75.4818 34.5795 77.8946 39.565 78.9232 41.9612C79.2407 42.7011 79.739 44.1268 80.1102 45.358C80.3507 46.1557 80.5898 46.9398 80.6416 47.1002C80.8036 47.602 80.8175 47.5811 79.1519 49.3833C79.0991 49.4406 78.7355 49.8469 78.3441 50.2862C73.7646 55.4271 71.097 56.3753 63.7919 55.4587C63.1583 55.3791 62.4023 55.2935 62.1119 55.2683C59.4693 55.0395 54.179 52.8319 51.8807 50.9988C50.9831 50.2829 50.7765 50.1365 50.2269 49.8272C48.3282 48.7587 47.7052 50.5901 49.3874 52.2952C54.0532 57.0245 62.0661 60.3942 68.6399 60.3916C70.5525 60.3909 71.2413 60.3232 72.5025 60.0124C72.8054 59.9378 73.1198 59.8767 73.2014 59.8767C74.4765 59.8767 78.4103 57.7461 80.351 56.0044C80.8571 55.5501 80.8545 55.7495 80.3409 56.7662C79.163 59.0974 77.5821 60.447 76.0293 60.447C74.5259 60.447 73.7685 60.7257 72.5075 61.7424L71.9613 62.1829L70.0847 62.1302C68.3255 62.081 66.9693 61.9201 65.5199 61.5884C63.6779 61.1671 59.9685 60.2013 59.3279 59.9763C59.1959 59.9299 58.8287 59.8185 58.5119 59.7287C58.1951 59.6389 57.6767 59.4842 57.3599 59.3849C56.5754 59.1387 53.1422 58.2503 52.6079 58.1553C50.6514 57.8072 50.0505 57.7501 48.2879 57.7444C46.57 57.7387 45.0148 57.8618 44.1599 58.0707C43.9751 58.116 43.5647 58.2021 43.2479 58.2619C42.3213 58.4375 40.4519 58.8895 39.3119 59.2138C38.7311 59.3789 38.1263 59.549 37.9679 59.5918C37.8095 59.6343 36.8159 59.9112 35.7599 60.207C28.4298 62.2594 24.5483 62.7118 23.4294 61.6447C22.5683 60.8233 20.9627 60.2856 19.7373 60.4082C18.5802 60.5237 16.6048 58.7198 15.6402 56.6667C15.2942 55.9305 15.4079 55.6423 15.8399 56.161C16.4963 56.9492 19.4344 58.7619 20.9279 59.2996C21.1127 59.3663 21.3503 59.4578 21.4559 59.503C21.7257 59.6187 23.7227 60.1172 24.5279 60.2699C25.4322 60.4415 29.4618 60.4455 30.3839 60.2756C30.7535 60.2077 31.4231 60.0868 31.8719 60.0069C32.3207 59.9268 32.9039 59.8016 33.1679 59.7282C35.7275 59.0168 36.7502 58.6426 38.7359 57.6907C39.8766 57.144 40.4152 56.8536 41.6469 56.1221C42.6064 55.552 44.1628 54.4177 45.6887 53.1762C47.4134 51.7729 48.0522 50.4863 47.3805 49.7685C46.8801 49.2339 46.1212 49.4641 44.5948 50.6134C42.0611 52.5214 38.6514 54.1834 35.9519 54.8264C35.7407 54.8768 35.3102 54.9877 34.9953 55.073C34.6802 55.1581 34.1618 55.2707 33.8433 55.3232C33.2762 55.4166 32.9255 55.4684 31.3199 55.6963C30.3357 55.8357 26.5722 55.7752 25.8239 55.6076C23.5617 55.1015 22.1387 54.4289 20.6085 53.1427C19.7311 52.4052 18.4948 51.1761 17.675 50.2263C17.4962 50.0191 16.913 49.3847 16.379 48.8164C15.845 48.248 15.3775 47.7315 15.3403 47.6683C15.2651 47.5409 15.814 45.5878 16.3965 43.9096C16.7889 42.7795 16.8631 42.5906 17.2454 41.7448C17.3699 41.4689 17.4719 41.2097 17.4719 41.1686C17.4719 41.1275 17.5799 40.8723 17.7119 40.6014C17.8439 40.3305 17.9519 40.0863 17.9519 40.0589C17.9519 39.8449 21.0988 33.6398 21.3366 33.3848C23.2307 31.3552 27.61 30.559 30.087 31.7938C30.4518 31.9756 30.807 32.1243 30.8766 32.1243C31.0646 32.1243 31.5933 32.4634 31.5196 32.5366C31.4846 32.5713 31.1932 32.5998 30.8718 32.6003C29.9183 32.6014 28.36 32.9379 27.4079 33.348C26.5974 33.6973 26.4021 33.7964 26.4011 33.8589C26.4004 33.8981 26.3517 33.9301 26.2929 33.9301C25.7387 33.9301 22.6559 36.785 22.6559 37.2982C22.6559 37.3255 22.5126 37.5733 22.3377 37.8487C21.7852 38.7181 21.2181 40.2305 21.2166 40.8388C21.2162 41.0056 21.1727 41.1686 21.1199 41.2009C21.0621 41.2363 21.0239 41.8971 21.0239 42.8641C21.0239 43.8312 21.0621 44.492 21.1199 44.5274C21.1727 44.5597 21.2162 44.7227 21.2166 44.8895C21.2178 45.3953 21.8937 47.3247 22.0996 47.4102C22.1416 47.4278 22.1759 47.5084 22.1759 47.5899C22.1759 48.3155 25.0422 51.3184 26.1359 51.7385C26.2811 51.7941 26.3999 51.8732 26.3999 51.9141C26.3999 51.9547 26.481 51.9882 26.5802 51.9882C26.6793 51.9882 26.8142 52.0523 26.8799 52.1308C26.9457 52.2092 27.071 52.2733 27.1583 52.2733C27.2457 52.2733 27.4024 52.3294 27.5066 52.3978C27.6107 52.4663 27.8903 52.5782 28.1279 52.6466C28.3655 52.7148 28.6679 52.807 28.7999 52.8514C29.3073 53.0223 31.1591 53.2309 31.6749 53.1753C33.7384 52.9524 34.3194 52.8246 35.1676 52.4071C35.3171 52.3334 35.4942 52.2733 35.5612 52.2733C35.7285 52.2733 37.3898 51.2761 37.9199 50.8574C39.0801 49.9415 39.9693 48.8026 40.8196 47.1429C41.02 46.7518 41.1839 46.3769 41.1839 46.3099C41.1839 46.2429 41.2242 46.1139 41.2734 46.0231C42.0446 44.6032 41.8634 40.5083 40.955 38.8248C40.8702 38.668 40.8009 38.4903 40.8004 38.4299C40.7997 38.2636 39.4734 36.3062 39.3616 36.3062C39.3078 36.3062 39.2639 36.242 39.2639 36.1636C39.2639 36.0852 39.2747 36.022 39.2879 36.023C39.3011 36.0239 39.6791 36.0883 40.1279 36.166C42.3551 36.5514 46.6029 36.741 47.1794 36.4811C47.589 36.2962 47.4988 35.9869 46.9096 35.5558C45.7526 34.7097 45.2159 33.6324 45.2159 32.1566C45.2159 29.3272 43.455 26.916 40.227 25.3248C39.3316 24.8833 38.831 24.6723 37.5237 24.1862C34.4474 23.0418 32.0363 23.9257 32.9085 25.8779C33.3419 26.8478 36.6854 29.9583 40.1301 32.596C40.3665 32.777 40.5743 32.9588 40.5918 32.9999C40.6096 33.041 40.6852 33.0748 40.7598 33.0748C40.8347 33.0748 40.8959 33.1109 40.8959 33.1553C40.8959 33.1995 40.9931 33.2822 41.1119 33.339C41.3123 33.4347 41.3142 33.4423 41.1359 33.4464C40.6103 33.458 37.4121 31.4804 34.8652 29.5689C32.8178 28.032 31.9727 27.4456 30.8687 26.7946C29.675 26.0906 27.0815 25.0912 26.4486 25.0912C26.0255 25.0912 25.9614 24.8474 26.2674 24.4017C28.366 21.3449 30.1943 19.9461 32.9279 19.306C33.1655 19.2504 33.4463 19.1843 33.5519 19.1594C33.9503 19.0655 35.7844 19.1829 36.3839 19.3407ZM29.8079 35.7464C28.7838 36.0679 28.4992 36.1757 27.9851 36.4371C22.732 39.1061 22.8818 47.1173 28.2278 49.4092C28.516 49.5328 28.8242 49.6701 28.9125 49.7143C29.5504 50.0336 32.259 50.2316 32.8514 50.0018C32.9728 49.9548 33.2663 49.8633 33.5039 49.7984C33.7415 49.7335 33.8848 49.6625 33.8222 49.6404C33.7595 49.6183 33.5003 49.6739 33.2462 49.7637C32.9711 49.8611 32.3769 49.945 31.779 49.9714C25.0338 50.2672 21.5776 42.3095 26.4424 37.6843C30.2303 34.0829 36.3155 35.5813 38.2158 40.5831C38.3646 40.9752 38.4887 41.2011 38.4914 41.0854C38.4938 40.9695 38.4251 40.7128 38.3387 40.5152C38.2521 40.3172 38.1347 40.0485 38.0776 39.9178C37.3466 38.2415 35.6339 36.6842 33.7439 35.9773C32.8977 35.6609 30.5238 35.5216 29.8079 35.7464ZM63.1199 35.7457C62.9615 35.7949 62.5943 35.908 62.3039 35.9968C60.0887 36.6752 57.7958 39.1501 57.5402 41.1386C57.5094 41.3777 57.5668 41.2783 57.7238 40.8207C58.7706 37.7682 61.2525 35.8795 64.3754 35.759C65.998 35.6963 66.6472 35.8628 68.5062 36.8185C70.9367 38.068 72.4396 41.8667 71.6294 44.712C69.6885 51.5268 60.1466 51.7812 57.8006 45.0807C57.639 44.6196 57.5063 44.3375 57.5054 44.4539C57.5046 44.5704 57.609 44.942 57.7374 45.2799C59.6901 50.416 66.0714 51.7653 69.9256 47.8572C73.8246 43.9036 71.8355 37.1514 66.37 35.788C65.7098 35.6233 63.6011 35.5958 63.1199 35.7457ZM78.4766 36.977C78.3693 37.1487 78.7269 38.102 79.295 39.1587C79.3936 39.3421 79.581 39.7698 79.7111 40.1091C79.8414 40.4481 80.0872 41.0678 80.2574 41.486C80.9613 43.2155 81.3251 44.2743 81.657 45.5576C81.9328 46.6245 82.1807 46.6815 83.2559 45.925C83.9411 45.4429 83.8694 45.1729 82.3019 42.3414C81.7242 41.2973 81.238 40.2996 80.8336 39.3266C80.266 37.9616 78.784 36.4844 78.4766 36.977ZM17.0896 37.0418C16.9286 37.1043 16.9144 37.1164 16.192 37.8119C15.7543 38.2332 15.5956 38.4839 15.2608 39.2851C15.0388 39.8161 14.7112 40.5496 14.5327 40.9155C14.3541 41.2812 14.2079 41.634 14.2079 41.6996C14.2079 41.765 14.1703 41.8187 14.1242 41.8187C14.0781 41.8187 13.8899 42.1073 13.7063 42.4602C13.5225 42.813 13.1301 43.5608 12.8344 44.1215C12.1835 45.3559 12.1994 45.5208 13.019 46.0594C13.9269 46.6561 13.973 46.6109 14.6354 44.4798C14.8871 43.6696 15.1965 42.781 15.3227 42.5051C15.4487 42.2292 15.5519 41.941 15.5519 41.8645C15.5519 41.7878 15.7847 41.2223 16.0691 40.6076C17.2324 38.0932 17.4124 37.6741 17.4758 37.3308C17.5447 36.9582 17.4626 36.8969 17.0896 37.0418ZM79.69 37.9896C80.0776 38.3363 80.3858 38.8961 80.7434 39.9028C80.9118 40.3776 81.3899 41.3171 82.841 44.0265C83.5082 45.2725 83.5151 45.3775 82.9538 45.7451C82.198 46.2405 82.2347 46.2842 81.4958 44.0046C81.2162 43.1421 80.9598 42.3937 80.9262 42.3414C80.8924 42.2891 80.7866 42.0325 80.6908 41.7711C80.4563 41.131 79.8186 39.627 79.4702 38.8925C78.9134 37.7188 78.9981 37.3707 79.69 37.9896ZM16.738 38.0897C16.763 38.1296 16.6022 38.5252 16.3806 38.9688C16.1591 39.4124 15.9287 39.9249 15.8687 40.1079C15.7384 40.5042 15.3131 41.5609 15.1223 41.9612C15.0477 42.118 14.9186 42.4602 14.8351 42.7216C14.7518 42.9829 14.6423 43.2823 14.5919 43.3869C14.5418 43.4914 14.4175 43.8763 14.3162 44.2422C13.8907 45.7784 13.7013 46.0112 13.1555 45.67C12.6746 45.3697 12.6724 45.2537 13.1313 44.371C13.3312 43.9866 13.907 42.8808 14.4107 41.9137C14.9145 40.9466 15.3851 39.963 15.4564 39.7277C15.5277 39.4925 15.6431 39.2325 15.713 39.1501C15.7828 39.0674 15.8399 38.9382 15.8399 38.8628C15.8399 38.5131 16.5959 37.8623 16.738 38.0897ZM31.3919 40.0069C34.2186 40.2557 35.3339 43.3669 33.2056 45.067C30.2697 47.4119 26.763 43.2771 29.4887 40.6841C29.7119 40.4717 29.9262 40.298 29.9651 40.298C30.1096 40.298 30.5529 40.1008 30.508 40.0566C30.4185 39.9677 29.8046 40.2861 29.3992 40.6311C27.2188 42.4885 28.6715 45.9608 31.5582 45.7912C35.3862 45.5664 35.2744 40.0537 31.4399 39.957L30.5759 39.9352L31.3919 40.0069ZM63.8399 39.9815C60.5802 41.0826 61.0802 45.6061 64.4822 45.791C67.7457 45.9682 68.884 41.8747 66.0292 40.2267C65.8254 40.1091 65.6058 40.015 65.5413 40.0174C65.4767 40.02 65.6682 40.1469 65.967 40.2996C68.6481 41.6702 67.6826 45.7206 64.6763 45.7144C60.8349 45.7064 60.7701 40.2968 64.6079 40.009L65.4239 39.948L64.7039 39.9404C64.3079 39.9361 63.9191 39.9546 63.8399 39.9815ZM38.5439 42.8035C38.5439 43.6268 38.572 44.2018 38.6063 44.0811C38.686 43.802 38.6846 41.9558 38.6046 41.5863C38.5713 41.4325 38.5439 41.9802 38.5439 42.8035ZM57.3719 41.8305C57.2942 42.215 57.3117 43.6979 57.3974 44.0027C57.4338 44.1322 57.4636 43.6297 57.4636 42.886C57.4636 41.4197 57.461 41.3893 57.3719 41.8305ZM38.2727 44.9895C37.697 46.7975 36.3952 48.3143 34.617 49.2491C34.2424 49.446 33.9923 49.6083 34.0614 49.6095C34.421 49.6169 35.9351 48.6087 36.5901 47.9261C37.3024 47.1838 38.2079 45.8266 38.2079 45.5013C38.2079 45.4519 38.2763 45.2687 38.3601 45.0941C38.4438 44.9194 38.4976 44.7013 38.4796 44.6091C38.4618 44.5171 38.3687 44.6882 38.2727 44.9895ZM43.3079 46.5784C42.1468 46.8041 41.5734 48.3675 42.0489 50.0118C42.1828 50.4754 42.3578 50.4034 42.6662 49.758C43.3586 48.3091 44.7558 47.6683 46.5083 47.9957C47.2079 48.1264 47.3442 48.0867 47.1033 47.8232C46.72 47.4038 44.0313 46.3327 43.7471 46.4862C43.7366 46.4919 43.5388 46.5332 43.3079 46.5784ZM51.4079 46.6582C50.6562 46.8602 49.0686 47.6096 48.8567 47.8624C48.6671 48.0886 48.814 48.1176 49.5198 47.9926C51.3311 47.6721 52.5004 48.1882 53.343 49.6801C53.74 50.3829 53.8391 50.3934 54.0102 49.7499C54.5658 47.6619 53.2941 46.1512 51.4079 46.6582ZM44.9116 46.9103C45.1403 46.9866 45.5046 47.1337 45.7216 47.2375C45.9386 47.3413 46.1726 47.4262 46.2419 47.4262C46.3113 47.4262 46.3679 47.4623 46.3679 47.5067C46.3679 47.5509 46.4651 47.6324 46.5839 47.6878C46.75 47.765 46.5412 47.789 45.6803 47.7911C44.1618 47.7952 43.3058 48.2751 42.6102 49.5128C42.2579 50.1399 42.1706 50.1016 42.0935 49.2866C41.8929 47.1665 42.9662 46.2616 44.9116 46.9103ZM53.241 46.9989C53.8562 47.4635 54.1271 48.6258 53.8917 49.791L53.8317 50.089L53.5583 49.7316C53.4081 49.5351 53.284 49.3306 53.2826 49.2769C53.2811 49.2232 53.2043 49.1089 53.1119 49.0231C53.0195 48.9373 52.8172 48.7349 52.6624 48.5728C52.0996 47.9845 51.4662 47.7719 50.2883 47.7759C49.1536 47.78 49.1577 47.788 50.0714 47.3423C51.5078 46.6413 52.6096 46.5221 53.241 46.9989ZM9.81497 52.7454C8.90849 52.8847 8.51057 53.4214 8.19641 54.9283C8.11409 55.3237 7.96841 55.9039 7.87289 56.2176C7.48673 57.4866 7.38521 58.7006 7.60409 59.4381C7.96673 60.661 10.7008 62.2504 12.4319 62.2444C13.091 62.2421 15.0515 61.8826 15.5039 61.6808C15.6095 61.6338 15.8687 61.5518 16.0799 61.4988C17.0687 61.2498 17.0937 61.0222 16.2362 60.0794C15.4953 59.2644 14.4959 57.9226 14.4959 57.7425C14.4959 57.6772 14.3829 57.4144 14.2447 57.1585C13.9531 56.6179 13.7882 56.1085 13.4795 54.7919C13.1301 53.3026 11.632 52.466 9.81497 52.7454ZM84.6719 52.7656C84.5399 52.8203 84.2591 52.9339 84.0479 53.018C83.3836 53.2827 82.6559 53.7852 82.6559 53.9796C82.6559 54.2338 82.3106 55.6416 82.0713 56.3632C81.6388 57.6682 80.7966 59.0035 79.7289 60.0777C78.6431 61.1702 78.7408 61.2926 81.1679 61.8814C81.5903 61.984 82.0922 62.1095 82.283 62.1603C84.5308 62.7591 87.7223 61.3838 88.6082 59.4343C88.9377 58.7091 88.3881 55.7588 87.4701 53.3271C87.2423 52.7233 85.5801 52.3897 84.6719 52.7656ZM86.841 53.1187C87.3856 53.4473 88.625 58.0025 88.4378 58.9866C88.1538 60.4795 85.6912 61.976 83.5377 61.9641C82.3924 61.9579 79.8981 61.3446 79.6072 60.9975C79.4925 60.8606 79.8875 60.1618 80.0798 60.1618C80.2554 60.1618 81.5747 58.2577 81.9573 57.4517C82.3259 56.6757 82.7354 55.3539 82.8918 54.4351C83.0656 53.4164 85.8158 52.4998 86.841 53.1187ZM11.4033 53.2706C12.6671 53.7077 12.8932 53.8802 13.0399 54.5196C13.4107 56.1344 13.5688 56.6598 13.8943 57.3555C14.2031 58.0163 14.8977 59.1632 15.0755 59.3065C15.2471 59.4447 16.2239 60.7953 16.2239 60.8944C16.2239 61.0764 15.9273 61.1926 14.6637 61.5057C12.5743 62.0239 11.0959 61.9453 10.7889 61.3002C10.2698 60.2084 10.0759 58.6604 10.0895 55.7148C10.1001 53.4076 10.1287 53.2114 10.4675 53.1178C10.5976 53.0819 10.7073 53.0484 10.7111 53.0432C10.7152 53.0379 11.0267 53.1403 11.4033 53.2706ZM95.872 53.0971C95.7726 53.1952 95.7993 54.4892 95.9039 54.6494C95.9678 54.747 95.9975 54.5156 95.9985 53.9128C95.9999 53.0332 95.9915 52.9788 95.872 53.0971ZM45.8879 59.3022C45.4919 59.3454 44.7206 59.4711 44.1736 59.5814C43.6266 59.6914 43.096 59.7817 42.9945 59.7817C42.893 59.7817 42.557 59.866 42.2481 59.9691C41.939 60.072 41.3248 60.2379 40.883 60.3374C40.1694 60.498 38.5773 60.935 37.1999 61.3477C34.7493 62.0824 30.711 63.1081 30.2699 63.1081C30.1206 63.1081 29.8478 63.1538 29.6632 63.2094C29.1503 63.364 27.3028 63.5815 26.4933 63.5824C25.2786 63.5838 25.1282 63.8226 25.6691 64.8902C26.5401 66.6088 26.2955 67.0873 24.8457 66.5019C21.1269 65 18.2092 65.2005 14.1599 67.2361C12.3727 68.1345 10.9425 68.6094 10.0017 68.6173C9.42737 68.622 9.21593 68.7539 9.21593 69.1079C9.21593 69.4049 9.86777 70.7961 10.1678 71.1392C10.2592 71.2438 10.4803 71.5645 10.6588 71.852C11.1052 72.5701 11.6584 73.2054 13.0096 74.5517C14.6599 76.1962 14.8567 76.3554 16.7999 77.6185C17.0903 77.8074 17.5007 78.0985 17.7119 78.2653C17.9231 78.4323 18.6575 78.8493 19.3439 79.1922C20.0303 79.5348 20.7215 79.8836 20.8799 79.9675C21.0383 80.0511 21.2032 80.1198 21.2464 80.1203C21.2894 80.1205 21.4662 80.2277 21.6393 80.3583C21.8126 80.489 22.048 80.5959 22.163 80.5959C22.2779 80.5959 22.7414 80.7665 23.1928 80.9749C23.6442 81.1833 24.6045 81.5485 25.3266 81.7863C26.049 82.0244 26.7263 82.2566 26.8319 82.3024C27.0244 82.3858 27.3902 82.4868 28.4639 82.7527C28.7807 82.8313 29.2559 82.9751 29.5199 83.0725C29.7839 83.1697 30.2159 83.2906 30.4799 83.341C31.2854 83.4952 32.7671 83.8248 33.0719 83.9177C33.2303 83.9661 33.6839 84.0562 34.0799 84.1182C34.4759 84.1802 34.9727 84.2627 35.1839 84.3019C36.8078 84.6022 37.3331 84.6892 38.3039 84.818C38.9111 84.8983 40.0991 85.0297 40.9439 85.1097C41.7887 85.1898 42.8903 85.2958 43.3919 85.3452C46.5952 85.6605 50.6238 85.7002 53.0399 85.44C53.5151 85.3889 54.4007 85.3046 55.0079 85.2525C56.2605 85.1454 58.5945 84.847 59.8079 84.639C61.8018 84.2971 62.8758 84.1006 63.4559 83.9714C64.9475 83.6387 67.0156 83.1226 67.6799 82.9176C70.6506 82.0002 71.4095 81.7417 72.461 81.289C72.6354 81.214 73.1538 81.0042 73.613 80.8226C74.4369 80.4971 75.5872 79.943 77.056 79.1646C78.22 78.5475 81.1034 76.621 81.7377 76.0363C85.5902 72.4855 88.0703 68.6798 86.6555 68.4904C84.3822 68.186 82.8688 67.7476 81.4768 66.9902C81.1074 66.7891 80.7736 66.6247 80.7347 66.6247C80.6961 66.6247 80.4537 66.5363 80.1962 66.4285C79.2489 66.0317 78.9923 65.9487 77.9999 65.7192C75.9112 65.2364 72.813 65.5964 70.9238 66.5416C69.8162 67.0956 69.605 66.5335 70.3398 64.9867L70.792 64.0353L70.5266 63.8093C70.307 63.6223 70.1553 63.5834 69.6465 63.5834C69.0143 63.5834 68.3157 63.5069 66.4799 63.2369C65.4544 63.0861 61.2597 62.0843 59.9999 61.6894C59.2535 61.4556 58.7987 61.3214 57.2159 60.868C55.3526 60.3343 55.0898 60.2642 54.5759 60.1644C54.3119 60.1131 53.9231 60.0079 53.7119 59.9306C53.5007 59.8532 53.223 59.7881 53.0946 59.7859C52.9665 59.7836 52.7289 59.742 52.5666 59.6935C51.2942 59.3126 47.7129 59.1028 45.8879 59.3022ZM51.4559 59.8149C51.7991 59.8981 52.3823 60.0278 52.7519 60.1029C53.3442 60.2234 54.1708 60.4213 55.4399 60.7463C55.6511 60.8003 56.3469 61.0108 56.986 61.2137C57.6254 61.4169 58.4894 61.6668 58.906 61.7692C59.3229 61.8716 59.9663 62.0472 60.3359 62.1594C60.7055 62.2718 61.2455 62.4196 61.5359 62.488C61.8263 62.5567 62.7551 62.7893 63.5999 63.005C65.1232 63.3942 66.2246 63.5712 68.3519 63.7689C70.5986 63.9778 70.509 63.9001 69.9359 65.1449C69.2123 66.7169 69.7101 67.5222 70.9919 66.8538C73.8794 65.3481 77.6018 65.4631 81.1245 67.1665C82.2383 67.7049 83.2079 68.095 83.9447 68.3008C85.0562 68.6113 85.5064 68.709 85.8417 68.7123C86.9358 68.7228 86.9519 69.2075 85.9086 70.7341C85.7037 71.0342 85.5359 71.3022 85.5359 71.3298C85.5359 71.432 84.5234 72.7761 83.9968 73.3727C82.7627 74.7708 80.6284 76.6222 79.3401 77.412C79.0331 77.6002 78.4353 77.9896 77.931 78.3299C77.4954 78.6241 75.2502 79.7717 74.1599 80.2576C71.7273 81.3416 67.7106 82.684 65.1839 83.2578C64.6823 83.3717 64.0326 83.5218 63.7403 83.5914C62.6481 83.8516 60.0182 84.3228 59.1839 84.4076C58.7087 84.4561 57.7583 84.558 57.0719 84.6341C53.0505 85.0803 51.7962 85.1779 49.4879 85.225C47.1009 85.2737 46.7286 85.2554 44.1599 84.9643C43.7639 84.9197 43.1159 84.8151 42.7199 84.7324C42.3239 84.65 41.6606 84.5388 41.2456 84.4858C40.8309 84.4326 40.2693 84.3057 39.9978 84.2035C39.7262 84.1013 39.2879 83.9904 39.0239 83.9571C38.7599 83.9239 38.4359 83.8433 38.3039 83.7784C38.1719 83.7133 37.9127 83.629 37.7279 83.591C37.5431 83.5529 37.2988 83.4372 37.1853 83.3339C37.0715 83.2308 36.8339 83.1108 36.6573 83.0675C36.4804 83.0243 36.0803 82.8967 35.7681 82.7841C35.4558 82.6714 34.9914 82.5548 34.7361 82.5248C34.4214 82.4878 34.2719 82.4262 34.2719 82.3336C34.2719 82.2342 34.1994 82.2117 34.0079 82.2513C33.747 82.3055 33.4353 82.2193 32.6879 81.8859C31.679 81.4361 31.4697 81.3563 31.299 81.3563C31.198 81.3563 31.0869 81.3109 31.0523 81.2553C31.0175 81.1999 30.8963 81.1144 30.7826 81.0655C30.669 81.0165 30.5111 80.9386 30.4319 80.892C30.3527 80.8457 30.0503 80.7086 29.7599 80.5876C29.4695 80.4667 29.1638 80.312 29.0805 80.2443C28.997 80.1763 28.8782 80.1207 28.8165 80.1207C28.7546 80.1207 28.6175 80.0352 28.5119 79.9306C28.2851 79.7061 27.9791 79.6824 27.9011 79.8831C27.839 80.0438 27.0777 80.0865 26.9231 79.9383C26.873 79.89 26.5511 79.7071 26.2079 79.5315C24.3364 78.5742 22.157 76.6194 21.1434 74.9884C20.8751 74.5567 20.3814 74.1038 20.308 74.2217C20.2494 74.3153 19.7272 74.0071 19.3533 73.6586C18.6734 73.0249 18.0647 72.5173 17.9846 72.5173C17.9334 72.5173 17.746 72.3249 17.5679 72.0897C17.3898 71.8544 17.1823 71.662 17.1064 71.662C17.0095 71.662 16.9967 71.6974 17.063 71.7808C17.1151 71.8461 17.1858 72.0821 17.2202 72.3052C17.3913 73.4155 18.2718 74.9523 19.48 76.2492C20.3488 77.182 20.5055 77.7447 19.8962 77.7447C18.9959 77.7447 15.1358 74.8606 13.954 73.305C12.9352 71.9642 13.0195 70.1325 14.1463 69.125C14.6714 68.6558 14.6786 68.6227 14.3032 68.4113C13.9723 68.2248 13.9019 67.8025 14.1839 67.6954C14.2763 67.6604 14.5247 67.5181 14.7359 67.3793C14.9471 67.2406 15.3359 67.0484 15.5999 66.9521C15.8639 66.8561 16.2218 66.7 16.3953 66.6057C18.2546 65.594 22.5083 65.7394 24.8406 66.8946C26.3738 67.6538 27.0345 66.5903 26.1117 64.8477C25.7044 64.0783 25.7658 63.9635 26.5854 63.9635C27.2171 63.9635 28.9024 63.7656 29.7599 63.5907C29.9975 63.5423 30.4727 63.451 30.8159 63.3876C31.738 63.2177 34.5357 62.5023 35.8079 62.1109C36.0983 62.0218 36.5735 61.8937 36.8639 61.8265C37.1543 61.7593 37.9319 61.544 38.5919 61.3477C39.8858 60.9633 40.3084 60.8497 41.5679 60.5484C42.0167 60.441 42.5135 60.3113 42.6719 60.2602C42.8303 60.2091 43.2407 60.1281 43.5839 60.0801C43.9271 60.0319 44.4887 59.9252 44.8319 59.8427C45.7662 59.6182 45.934 59.6087 48.4799 59.6372C50.2312 59.6569 50.9913 59.7023 51.4559 59.8149ZM45.905 70.7807C45.7022 71.0302 45.6218 71.3795 45.7679 71.3745C45.8555 71.3714 46.2138 70.6224 46.1555 70.5647C46.1327 70.5419 46.0199 70.6393 45.905 70.7807ZM42.861 72.6171C42.7696 72.7633 42.8946 72.8576 43.018 72.7355C43.0869 72.6673 43.0886 72.614 43.0228 72.5741C42.9693 72.5411 42.8963 72.5606 42.861 72.6171ZM53.5456 72.6813C53.7182 72.7024 53.9774 72.702 54.1216 72.6803C54.2658 72.6587 54.1247 72.6414 53.8079 72.6418C53.4911 72.6423 53.373 72.6601 53.5456 72.6813ZM51.7511 73.0831C51.6592 73.1394 51.663 73.1681 51.7686 73.2081C51.8438 73.2368 51.959 73.2273 52.0247 73.1872C52.1166 73.1308 52.1128 73.1021 52.0072 73.0622C51.9321 73.0334 51.8169 73.0429 51.7511 73.0831ZM49.6319 73.7529C49.6319 73.8052 49.6967 73.8479 49.7759 73.8479C49.8551 73.8479 49.9199 73.8052 49.9199 73.7529C49.9199 73.7006 49.8551 73.6579 49.7759 73.6579C49.6967 73.6579 49.6319 73.7006 49.6319 73.7529ZM54.4893 74.488C54.3863 74.59 54.4288 74.7033 54.5702 74.7033C54.6462 74.7033 54.7324 74.6651 54.7617 74.6183C54.8229 74.5204 54.5759 74.4025 54.4893 74.488ZM49.1238 77.614C49.049 77.6881 49.1522 77.9348 49.2582 77.9348C49.3679 77.9348 49.3703 77.677 49.2614 77.6102C49.2158 77.5824 49.1541 77.5841 49.1238 77.614ZM42.8159 77.9823C42.8159 78.0607 42.8546 78.1248 42.9016 78.1248C42.9489 78.1248 43.0122 78.0607 43.0427 77.9823C43.0763 77.8956 43.0427 77.8397 42.9568 77.8397C42.8793 77.8397 42.8159 77.9039 42.8159 77.9823Z", fill: "#743739" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

exports.ConnectorNames = void 0;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
})(exports.ConnectorNames || (exports.ConnectorNames = {}));

var connectors = [
    {
        title: "DarumaWallet",
        icon: Icon,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "Metamask",
        icon: Icon$7,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "TrustWallet",
        icon: Icon$4,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "MathWallet",
        icon: Icon$6,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "TokenPocket",
        icon: Icon$5,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "WalletConnect",
        icon: Icon$3,
        connectorId: exports.ConnectorNames.WalletConnect,
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$2,
        connectorId: exports.ConnectorNames.BSC,
    },
    {
        title: "SafePal Wallet",
        icon: Icon$1,
        connectorId: exports.ConnectorNames.Injected,
    },
];
var connectorLocalStorageKey = "connectorId";
var deviceUIDKey = "deviceUID";
var tokenUIDKey = "tokenUID";
var darumaAddressKey = "darumaAddress";
var connectDarumaKey = "isConnectDarumaWs";
var BASE_DARUMA_URL_SIGNIN = "https://app-qc.darumawallet.com/#/embed/daruma-wallet/link";
var BASE_DARUMA_URL_LOGOUT = "https://app-qc.darumawallet.com/#/auth/logout";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    var deviceUID = window.localStorage.getItem(deviceUIDKey);
    var tokenUID = window.localStorage.getItem(tokenUIDKey);
    var handleWalletConnect = function () {
        if (title === 'DarumaWallet') {
            window.localStorage.setItem(connectDarumaKey, 'connect');
            window.open(BASE_DARUMA_URL_SIGNIN + "/" + deviceUID + "/" + tokenUID);
        }
        else {
            login(walletConfig.connectorId);
            window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
        }
        onDismiss();
    };
    return (React__default['default'].createElement(Button, { width: "100%", variant: "tertiary", onClick: handleWalletConnect, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React__default['default'].createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React__default['default'].createElement(Icon, { width: "32px" })));
};

var HelpLink = styled__default['default'](Link)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React__default['default'].createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React__default['default'].createElement(HelpLink, { href: "https://docs.pancakeswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain", external: true },
            React__default['default'].createElement(Icon$14, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$5;

var StyleButton = styled__default['default'](Text).attrs({ role: "button" })(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled__default['default'].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = React.useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default['default'].createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React__default['default'].createElement(Icon$16, { width: "20px", color: "primary", ml: "4px" }),
        React__default['default'].createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$4, templateObject_2$1;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b, darumaAddress = _a.darumaAddress;
    var handleLogout = function () {
        if (darumaAddress) {
            window.localStorage.removeItem(darumaAddressKey);
            window.localStorage.setItem(connectDarumaKey, 'disconnect');
            window.open("" + BASE_DARUMA_URL_LOGOUT);
            window.location.reload();
        }
        else {
            logout();
            window.localStorage.removeItem(connectorLocalStorageKey);
            onDismiss();
        }
    };
    return (React__default['default'].createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React__default['default'].createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, darumaAddress || (account)),
        React__default['default'].createElement(Flex, { mb: "32px" },
            React__default['default'].createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React__default['default'].createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React__default['default'].createElement(Flex, { justifyContent: "center" },
            React__default['default'].createElement(Button, { scale: "sm", variant: "secondary", onClick: handleLogout }, "Logout"))));
};

var useWalletModal = function (login, logout, account, darumaAddress) {
    var onPresentConnectModal = useModal(React__default['default'].createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React__default['default'].createElement(AccountModal, { account: account || "", logout: logout, darumaAddress: darumaAddress || "" }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout, darumaAddress = _a.darumaAddress;
    var _b = useWalletModal(login, logout, account, darumaAddress), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    var darumaEllipsis = darumaAddress ? darumaAddress.substring(0, 4) + "..." + darumaAddress.substring(darumaAddress.length - 4) : null;
    return (React__default['default'].createElement("div", null, account ? (React__default['default'].createElement(Button, { scale: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React__default['default'].createElement(React__default['default'].Fragment, null, darumaAddress ? (React__default['default'].createElement(Button, { scale: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, darumaEllipsis)) : (React__default['default'].createElement(Button, { scale: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))))));
};

var Wrapper = styled__default['default'].div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled__default['default'].nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled__default['default'].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled__default['default'].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
}, function (_a) {
    var isPushed = _a.isPushed;
    return "calc(100% - " + (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px)";
});
var MobileOnlyOverlay = styled__default['default'](Overlay)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var darumaAddress = _a.darumaAddress, account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links, children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = React.useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = React.useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = React.useRef(window.pageYOffset);
    React.useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle__default['default'](handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React__default['default'].createElement(Wrapper, null,
        React__default['default'].createElement(StyledNav, { showMenu: showMenu },
            React__default['default'].createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React__default['default'].createElement(Flex, null,
                React__default['default'].createElement(UserBlock, { account: account, login: login, logout: logout, darumaAddress: darumaAddress }))),
        React__default['default'].createElement(BodyWrapper, null,
            React__default['default'].createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links }),
            React__default['default'].createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React__default['default'].createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$3, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React__default['default'].createElement(Button, __assign({ as: "a", scale: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React__default['default'].createElement(Button, { as: reactRouterDom.Link, scale: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a;
var alertTypeMap = (_a = {},
    _a[types.INFO] = variants$2.INFO,
    _a[types.SUCCESS] = variants$2.SUCCESS,
    _a[types.DANGER] = variants$2.DANGER,
    _a[types.WARNING] = variants$2.WARNING,
    _a);
var StyledToast = styled__default['default'].div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = React.useRef();
    var ref = React.useRef(null);
    var removeHandler = React.useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = React.useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    React.useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React__default['default'].createElement(reactTransitionGroup.CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React__default['default'].createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React__default['default'].createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Text, { as: "p", mb: "8px" }, description),
                React__default['default'].createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$2;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled__default['default'].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React__default['default'].createElement(StyledToastContainer, null,
        React__default['default'].createElement(reactTransitionGroup.TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React__default['default'].createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$1;

var ResetCSS = styled.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Space Grotesk', cursive;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* Number */\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Space Grotesk', cursive;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* Number */\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1;

var baseColors = {
    failure: "#ED4B9E",
    primary: "#cb6e6e",
    primaryBright: "#d44f4f",
    primaryDark: "#cb6e6e",
    secondary: "#a90d0d",
    success: "#952a2a",
    warning: "#FFB237",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FAF9FA", backgroundDisabled: "#E9EAEB", backgroundAlt: "#FFFFFF", contrast: "#191326", dropdown: "#F6F6F6", invertedContrast: "#FFFFFF", input: "#F6EAEA", inputSecondary: "#CB6E6E", tertiary: "#eff4f5", text: "#a90d0d", textDisabled: "#BDC2C4", textSubtle: "#CB6E6E", borderColor: "#e9eaeb", headerTableBackground: "#F0D2D2", bodyTableBackground: "#F6EAEA", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
        cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
        blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
        violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#a90d0d", background: "#100C18", backgroundDisabled: "#3c3742", backgroundAlt: "#27262c", contrast: "#FFFFFF", dropdown: "#1E1D20", invertedContrast: "#191326", input: "#27262c", inputSecondary: "#CB6E6E", primaryDark: "#0098A1", tertiary: "#353547", text: "#EAE2FC", textDisabled: "#666171", textSubtle: "#CB6E6E", borderColor: "#524B63", headerTableBackground: "#F0D2D2", bodyTableBackground: "#27262", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
        cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
        blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
        violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    } });

var light$7 = {
    background: lightColors.backgroundAlt,
};
var dark$7 = {
    background: darkColors.backgroundAlt,
};

var light$6 = {
    background: lightColors.backgroundAlt,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: {
        default: lightColors.gradients.cardHeader,
        blue: lightColors.gradients.blue,
        violet: lightColors.gradients.violet,
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$6 = {
    background: darkColors.backgroundAlt,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: {
        default: darkColors.gradients.cardHeader,
        blue: darkColors.gradients.blue,
        violet: darkColors.gradients.violet,
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$5 = {
    handleBackground: lightColors.backgroundAlt,
    handleShadow: lightColors.textDisabled,
};
var dark$5 = {
    handleBackground: darkColors.backgroundAlt,
    handleShadow: darkColors.textDisabled,
};

var light$4 = {
    handleBackground: lightColors.backgroundAlt,
};
var dark$4 = {
    handleBackground: darkColors.backgroundAlt,
};

var light$3 = {
    handleBackground: lightColors.backgroundAlt,
};
var dark$3 = {
    handleBackground: darkColors.backgroundAlt,
};

var light$2 = {
    background: lightColors.backgroundAlt,
    hover: "#EEEAF4",
};
var dark$2 = {
    background: darkColors.backgroundAlt,
    hover: "#473d5d",
};

var light$1 = {
    background: lightColors.backgroundAlt,
};
var dark$1 = {
    background: darkColors.backgroundAlt,
};

var light = {
    background: darkColors.backgroundAlt,
    text: darkColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};
var dark = {
    background: lightColors.backgroundAlt,
    text: lightColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark$7, colors: darkColors, card: dark$6, toggle: dark$3, nav: dark$2, modal: dark$1, pancakeToggle: dark$5, radio: dark$4, tooltip: dark });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light$7, colors: lightColors, card: light$6, toggle: light$3, nav: light$2, modal: light$1, pancakeToggle: light$5, radio: light$4, tooltip: light });

exports.AddIcon = Icon$1t;
exports.Alert = Alert;
exports.ArrowBackIcon = Icon$1s;
exports.ArrowDownIcon = Icon$1r;
exports.ArrowDropDownIcon = Icon$1q;
exports.ArrowDropUpIcon = Icon$1p;
exports.ArrowForwardIcon = Icon$1o;
exports.ArrowUpIcon = Icon$1n;
exports.AutoRenewIcon = Icon$1m;
exports.BackgroundImage = BackgroundImage;
exports.BalanceInput = BalanceInput;
exports.BaseLayout = GridLayout$1;
exports.BinanceIcon = Icon$1l;
exports.BlockIcon = Icon$1v;
exports.Box = Box;
exports.Breadcrumbs = Breadcrumbs;
exports.BunnyPlaceholderIcon = Icon$1k;
exports.Button = Button;
exports.ButtonMenu = ButtonMenu$1;
exports.ButtonMenuItem = ButtonMenuItem;
exports.CalculateIcon = Icon$1h;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardRibbon = CardRibbon;
exports.CardViewIcon = Icon$1i;
exports.Cards = Icon$1j;
exports.CardsLayout = GridLayout;
exports.ChartIcon = Icon$1f;
exports.Checkbox = Checkbox;
exports.CheckmarkCircleIcon = Icon$1x;
exports.CheckmarkIcon = Icon$1e;
exports.ChevronDownIcon = Icon$1d;
exports.ChevronLeftIcon = Icon$1c;
exports.ChevronRightIcon = Icon$1b;
exports.ChevronUpIcon = Icon$1a;
exports.CircleOutlineIcon = Icon$1g;
exports.CloseIcon = Icon$19;
exports.CogIcon = Icon$18;
exports.CommunityIcon = Icon$17;
exports.CopyIcon = Icon$16;
exports.CrownIcon = Icon$15;
exports.Dropdown = Dropdown;
exports.ErrorIcon = Icon$1w;
exports.ExpandableButton = ExpandableButton;
exports.ExpandableLabel = ExpandableLabel;
exports.FallingBunnies = FallingBunnies;
exports.Flex = Flex;
exports.Heading = Heading;
exports.HelpIcon = Icon$14;
exports.HistoryIcon = Icon$13;
exports.IconButton = IconButton;
exports.Image = Image;
exports.InfoIcon = Icon$1u;
exports.Input = Input$1;
exports.LaurelLeftIcon = Icon$12;
exports.LaurelRightIcon = Icon$11;
exports.Link = Link;
exports.LinkExternal = LinkExternal;
exports.ListViewIcon = Icon$10;
exports.LogoIcon = Icon$$;
exports.LogoRoundIcon = Icon$_;
exports.MedalBronzeIcon = Icon$Z;
exports.MedalGoldIcon = Icon$Y;
exports.MedalPurpleIcon = Icon$X;
exports.MedalSilverIcon = Icon$W;
exports.MedalTealIcon = Icon$V;
exports.Menu = Menu;
exports.MetamaskIcon = Icon$U;
exports.MinusIcon = Icon$T;
exports.Modal = Modal;
exports.ModalBackButton = ModalBackButton;
exports.ModalBody = ModalBody;
exports.ModalCloseButton = ModalCloseButton;
exports.ModalContainer = ModalContainer;
exports.ModalHeader = ModalHeader;
exports.ModalProvider = ModalProvider;
exports.ModalTitle = ModalTitle;
exports.NoProfileAvatarIcon = Icon$S;
exports.NotificationDot = NotificationDot;
exports.OpenNewIcon = Icon$R;
exports.PancakeRoundIcon = Icon$P;
exports.PancakeToggle = PancakeToggle;
exports.PancakesIcon = Icon$Q;
exports.PlayCircleOutlineIcon = Icon$N;
exports.PocketWatchIcon = Icon$O;
exports.PrizeIcon = Icon$M;
exports.Progress = Progress;
exports.ProgressBunny = Icon$J;
exports.Radio = Radio;
exports.RefreshIcon = Icon$t;
exports.RemoveIcon = Icon$L;
exports.ResetCSS = ResetCSS;
exports.SearchIcon = Icon$z;
exports.Skeleton = Skeleton;
exports.Slider = Slider;
exports.Spinner = Spinner;
exports.Step = Step;
exports.Stepper = Stepper;
exports.Svg = Svg;
exports.SwapVertIcon = Icon$y;
exports.SyncAltIcon = Icon$x;
exports.Tab = Tab;
exports.TabMenu = ButtonMenu;
exports.Tag = Tag;
exports.TeamPlayerIcon = Icon$G;
exports.TestnetIcon = Icon$F;
exports.Text = Text;
exports.Ticket = Icon$E;
exports.TicketRound = Icon$D;
exports.TimerIcon = Icon$C;
exports.ToastContainer = ToastContainer;
exports.Toggle = Toggle;
exports.TrophyGoldIcon = Icon$B;
exports.TuneIcon = Icon$A;
exports.VerifiedIcon = Icon$K;
exports.VolumeOffIcon = Icon$w;
exports.VolumeUpIcon = Icon$v;
exports.WaitIcon = Icon$I;
exports.WarningIcon = Icon$u;
exports.Won = Icon$H;
exports.alertVariants = variants$2;
exports.byTextAscending = byTextAscending;
exports.byTextDescending = byTextDescending;
exports.connectDarumaKey = connectDarumaKey;
exports.connectorLocalStorageKey = connectorLocalStorageKey;
exports.dark = darkTheme;
exports.darkColors = darkColors;
exports.darumaAddressKey = darumaAddressKey;
exports.deviceUIDKey = deviceUIDKey;
exports.light = lightTheme;
exports.lightColors = lightColors;
exports.makeRender = makeRender;
exports.menuConfig = links;
exports.menuStatus = status;
exports.toastTypes = types;
exports.tokenUIDKey = tokenUIDKey;
exports.useKonamiCheatCode = useKonamiCheatCode;
exports.useMatchBreakpoints = useMatchBreakpoints;
exports.useModal = useModal;
exports.useParticleBurst = useParticleBurst;
exports.useTable = useTable;
exports.useTooltip = useTooltip;
exports.useWalletModal = useWalletModal;
