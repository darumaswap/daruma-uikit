import React, { isValidElement, cloneElement, Children, useRef, useEffect, useState, useMemo, useReducer, useCallback, createContext, useContext } from 'react';
import styled, { keyframes, css, useTheme, createGlobalStyle } from 'styled-components';
import { space, typography, variant as variant$1, layout, background, border, position, flexbox } from 'styled-system';
import get from 'lodash/get';
import noop from 'lodash/noop';
import debounce from 'lodash/debounce';
import { usePopper } from 'react-popper';
import throttle from 'lodash/throttle';
import { Link as Link$1, NavLink, useLocation } from 'react-router-dom';
import { v4 } from 'uuid';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
    return get(theme, path, fallback);
}; };

var rotate = keyframes(templateObject_1$V || (templateObject_1$V = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css(templateObject_2$n || (templateObject_2$n = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled.svg(templateObject_3$c || (templateObject_3$c = __makeTemplateObject(["\n  align-self: center; // Safari fix\n  fill: ", ";\n  flex-shrink: 0;\n  ", "\n  ", "\n"], ["\n  align-self: center; // Safari fix\n  fill: ", ";\n  flex-shrink: 0;\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$V, templateObject_2$n, templateObject_3$c;

var Icon$1r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$1p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$1o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled.div(templateObject_1$U || (templateObject_1$U = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, space, typography);
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
var StyledButton = styled.button(templateObject_1$T || (templateObject_1$T = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n    box-shadow: none;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n    box-shadow: none;\n  }\n\n  ", "\n  ",
    "\n  ",
    "\n  ", "\n  ", "\n"])), getOpacity, getDisabledStyles, variant$1({
    prop: "scale",
    variants: scaleVariants$1,
}), variant$1({
    variants: styleVariants$2,
}), layout, space);
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
    return (React.createElement(StyledButton, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, internalProps, rest),
        React.createElement(React.Fragment, null,
            isValidElement(startIcon) &&
                cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            children,
            isValidElement(endIcon) &&
                cloneElement(endIcon, {
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

var IconButton = styled(Button)(templateObject_1$S || (templateObject_1$S = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$S;

var Icon$1n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$1m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$1l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$1k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$1j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$1i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" })));
};

var Icon$1h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" })));
};

var Icon$1g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$1f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React.createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$1e = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React.createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React.createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React.createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React.createElement("g", { mask: "url(#mask0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React.createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React.createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$1d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.0967 17.8521L7.87565 20.2891C6.91907 20.8414 5.69589 20.5136 5.1436 19.557L0.999729 12.3796C0.447444 11.4231 0.775193 10.1999 1.73178 9.64759L6.31754 7C6.53486 6.87453 6.76593 6.79448 6.99977 6.75691V6C6.99977 4.89543 7.8952 4 8.99977 4H14.9998C16.1043 4 16.9998 4.89543 16.9998 6V6.73545C17.299 6.75379 17.5986 6.83993 17.8759 7L22.4616 9.64759C23.4182 10.1999 23.746 11.4231 23.1937 12.3796L19.0498 19.557C18.4975 20.5136 17.2743 20.8414 16.3178 20.2891L12.0967 17.8521ZM8.99977 6L14.9998 6L14.9998 7.98154L11.2363 14.5H8.99977L8.99977 6ZM6.99977 14.5L6.99977 8.91551L2.73178 11.3796L6.87565 18.557L10.4386 16.5H8.99977C7.8952 16.5 6.99977 15.6046 6.99977 14.5ZM16.8759 8.73205L21.4616 11.3796L17.3178 18.557L12.732 15.9094L16.8759 8.73205Z" })));
};

var Icon$1c = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$1b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" }),
        React.createElement("path", { d: "M11.25 7.72H6.25V9.22H11.25V7.72Z" }),
        React.createElement("path", { d: "M18 15.75H13V17.25H18V15.75Z" }),
        React.createElement("path", { d: "M18 13.25H13V14.75H18V13.25Z" }),
        React.createElement("path", { d: "M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z" }),
        React.createElement("path", { d: "M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z" })));
};

var Icon$1a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$19 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$18 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.00012 16.2L5.50012 12.7C5.11012 12.31 4.49012 12.31 4.10012 12.7C3.71012 13.09 3.71012 13.71 4.10012 14.1L8.29012 18.29C8.68012 18.68 9.31012 18.68 9.70012 18.29L20.3001 7.70001C20.6901 7.31001 20.6901 6.69001 20.3001 6.30001C19.9101 5.91001 19.2901 5.91001 18.9001 6.30001L9.00012 16.2Z" })));
};

var Icon$17 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$16 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$15 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$14 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$13 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$12 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$11 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$10 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$$ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M15.6772 2.8668C15.9878 1.97095 15.2658 1.05469 14.2495 1.05469C13.4213 1.05469 12.75 1.67612 12.75 2.4427L12.75 5.07933C12.75 5.61801 13.2217 6.05469 13.8037 6.05469C14.2615 6.05469 14.667 5.78094 14.8069 5.37734L15.6772 2.8668Z", fill: "#FFC700" }),
        React.createElement("path", { d: "M9.32279 2.8668C9.01225 1.97095 9.73416 1.05469 10.7505 1.05469C11.5787 1.05469 12.25 1.67612 12.25 2.4427L12.25 5.07934C12.25 5.61801 11.7783 6.05469 11.1963 6.05469C10.7385 6.05469 10.333 5.78094 10.1931 5.37734L9.32279 2.8668Z", fill: "#FFC700" }),
        React.createElement("path", { d: "M10.825 1.26941C11.1413 1.50339 10.6373 1.71436 10.293 2.17982C9.94869 2.64527 9.89449 3.18896 9.57817 2.95498C9.26185 2.72101 9.32403 2.18322 9.66832 1.71776C10.0126 1.2523 10.5086 1.03544 10.825 1.26941Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M14.6507 1.39423C14.8957 1.70211 14.3543 1.77544 13.9012 2.13593C13.4482 2.49642 13.2551 3.00755 13.0102 2.69968C12.7652 2.3918 12.9644 1.88843 13.4174 1.52794C13.8705 1.16746 14.4057 1.08636 14.6507 1.39423Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M10.3026 1.54788C10.4525 1.65871 10.1853 1.79706 9.98717 2.06492C9.78903 2.33278 9.73495 2.62873 9.58511 2.51789C9.43528 2.40706 9.49314 2.11391 9.69127 1.84605C9.88941 1.57819 10.1528 1.43705 10.3026 1.54788Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M14.0738 1.5278C14.1899 1.67363 13.896 1.73812 13.6353 1.94557C13.3746 2.15302 13.2458 2.42489 13.1297 2.27905C13.0137 2.13322 13.1454 1.86503 13.4061 1.65758C13.6668 1.45012 13.9578 1.38196 14.0738 1.5278Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M13.406 5.80534C13.1769 5.64322 13.6402 5.49916 14.0299 5.10944C14.4196 4.71971 14.4298 4.07338 14.6827 4.32626C14.9356 4.57915 14.7916 5.0668 14.4019 5.45652C14.0122 5.84624 13.6351 5.96747 13.406 5.80534Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M10.6248 5.80534C10.3957 5.64322 10.8589 5.49916 11.2486 5.10944C11.6383 4.71971 11.6486 4.07338 11.9015 4.32626C12.1543 4.57915 12.0103 5.0668 11.6206 5.45652C11.2309 5.84624 10.8538 5.96747 10.6248 5.80534Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M13.9914 10.3006C12.9839 8.40915 12.4375 6.30469 12.4375 6.30469C12.4375 6.30469 11.9087 8.34165 10.9321 10.2086C10.6414 11.6927 9.56271 12.9024 8.10162 13.3682C6.2379 13.9624 4.40451 13.1384 3.73966 11.239C3.00517 10.5247 2.41808 9.75079 2.125 9.15553V10.3668C2.125 14.1503 3.02673 17.8564 4.72554 21.0547H20.1495C21.8483 17.8564 22.75 14.1503 22.75 10.3668V9.15553C22.4628 9.73876 21.8934 10.4935 21.1797 11.1956C20.5277 13.1259 18.6807 13.967 16.8028 13.3682C15.372 12.912 14.3079 11.7426 13.9914 10.3006Z", fill: "#FFC700" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.7881 7.51367C13.0461 8.29103 13.4582 9.39262 14.0101 10.4296C14.2401 11.4788 14.8691 12.3823 15.7478 12.9675L14.8711 21.0453L12.4716 21.026L6.31499 21.0756C5.03757 17.5852 4.57523 15.3977 4.04834 11.8082C4.82141 13.3685 6.48748 14.0096 8.17878 13.4698C9.62537 13.0081 10.6933 11.8093 10.9812 10.3385C11.509 9.3285 11.9046 8.26831 12.1552 7.51367H12.7881Z", fill: "#FFD800" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.335 21.0354L10.6112 11.4121C10.1532 12.3105 9.37201 13.0219 8.40008 13.3927C8.66771 15.748 9.05381 17.902 9.86757 21.0472L11.335 21.0354ZM8.91436 21.0549C8.26697 18.1715 7.86567 16.0604 7.58788 13.6114C6.85387 13.7286 6.14425 13.6244 5.53223 13.3211C5.85194 15.8033 6.40755 18.9391 7.32573 21.0677L8.91436 21.0549Z", fill: "#FFE971" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.1731 9.68799C11.1115 9.81472 11.0477 9.94136 10.982 10.0672C10.6941 11.538 9.62616 12.7368 8.17957 13.1985C6.33435 13.7874 4.51917 12.9708 3.86091 11.0883C3.82538 11.0537 3.79019 11.019 3.75537 10.9842C3.76298 11.1884 3.78916 11.3929 3.8348 11.5958C4.24757 13.4306 6.09537 14.4351 8.21827 13.7576C10.1825 13.1307 11.3382 11.3971 11.1731 9.68799Z", fill: "#FFE971" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8289 9.68799C13.8905 9.81475 13.9542 9.94142 14.02 10.0673C14.3079 11.5381 15.3758 12.7369 16.8224 13.1986C18.6677 13.7875 20.4828 12.9709 21.1411 11.0884C21.1766 11.0538 21.2118 11.0191 21.2466 10.9843C21.239 11.1885 21.2128 11.393 21.1672 11.5959C20.7544 13.4308 18.9066 14.4353 16.7837 13.7578C14.8194 13.1309 13.6636 11.3971 13.8289 9.68799Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M16.25 7.99219C16.25 9.80885 14.5431 11.0547 12.4375 11.0547C10.3319 11.0547 8.625 9.80885 8.625 7.99219C8.625 6.17553 10.3319 4.92969 12.4375 4.92969C14.5431 4.92969 16.25 6.17553 16.25 7.99219Z", fill: "#FFC700" }),
        React.createElement("path", { d: "M14.5349 6.09354C14.807 7.1091 13.4021 6.71163 11.9077 7.11205C10.4134 7.51246 9.39541 8.55914 9.12329 7.54357C8.85117 6.52801 9.87598 5.50694 11.3704 5.10652C12.8647 4.70611 14.2628 5.07797 14.5349 6.09354Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M11.0893 10.2853C10.7875 9.70556 11.9478 9.89409 13.237 9.49295C14.5262 9.09181 15.3014 7.75528 15.5484 8.54928C15.7955 9.34329 14.9187 10.2079 13.6295 10.609C12.3403 11.0102 11.3911 10.865 11.0893 10.2853Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M12.979 5.80657C13.1079 6.28763 12.3191 6.1324 11.4591 6.36283C10.5992 6.59326 9.99366 7.1221 9.86476 6.64104C9.73586 6.15998 10.3446 5.64328 11.2046 5.41284C12.0646 5.18241 12.8501 5.32552 12.979 5.80657Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M11.7222 8.09327C11.7222 8.76484 11.4227 9.01955 11.0533 9.01955C10.6838 9.01955 10.3843 8.76484 10.3843 8.09327C10.3843 7.4217 10.6838 7.16699 11.0533 7.16699C11.4227 7.16699 11.7222 7.4217 11.7222 8.09327Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M11.7222 7.94581C11.7222 8.61738 11.4227 8.87209 11.0533 8.87209C10.6838 8.87209 10.3843 8.61738 10.3843 7.94581C10.3843 7.27424 10.6838 7.01953 11.0533 7.01953C11.4227 7.01953 11.7222 7.27424 11.7222 7.94581Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M11.4119 7.41061C11.4587 7.67736 11.217 7.57296 10.9599 7.67813C10.7028 7.78331 10.5276 8.05822 10.4808 7.79148C10.434 7.52473 10.6103 7.25654 10.8674 7.15136C11.1245 7.04619 11.3651 7.14386 11.4119 7.41061Z", fill: "#FA7048" }),
        React.createElement("path", { d: "M10.796 8.61486C10.7456 8.421 10.9921 8.50242 11.2088 8.3668C11.4256 8.23119 11.5783 7.83458 11.6194 8.10027C11.6605 8.36596 11.4909 8.60461 11.2742 8.74023C11.0575 8.87584 10.8465 8.80873 10.796 8.61486Z", fill: "#9F0400" }),
        React.createElement("path", { d: "M14.1924 8.09327C14.1924 8.76484 13.8929 9.01955 13.5235 9.01955C13.154 9.01955 12.8545 8.76484 12.8545 8.09327C12.8545 7.4217 13.154 7.16699 13.5235 7.16699C13.8929 7.16699 14.1924 7.4217 14.1924 8.09327Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M14.1924 7.94581C14.1924 8.61738 13.8929 8.87209 13.5235 8.87209C13.154 8.87209 12.8545 8.61738 12.8545 7.94581C12.8545 7.27424 13.154 7.01953 13.5235 7.01953C13.8929 7.01953 14.1924 7.27424 14.1924 7.94581Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M13.8821 7.41061C13.9289 7.67736 13.6872 7.57296 13.4301 7.67813C13.173 7.78331 12.9978 8.05822 12.951 7.79148C12.9042 7.52473 13.0805 7.25654 13.3376 7.15136C13.5947 7.04619 13.8353 7.14386 13.8821 7.41061Z", fill: "#FA7048" }),
        React.createElement("path", { d: "M13.2663 8.61486C13.2158 8.421 13.4623 8.50242 13.6791 8.3668C13.8958 8.23119 14.0485 7.83458 14.0896 8.10027C14.1307 8.36596 13.9612 8.60461 13.7444 8.74023C13.5277 8.87584 13.3167 8.80873 13.2663 8.61486Z", fill: "#9F0400" }),
        React.createElement("path", { d: "M24.3751 9.78352C24.3751 10.8765 23.4126 11.6261 22.2254 11.6261C21.0381 11.6261 20.0757 10.8765 20.0757 9.78352C20.0757 8.6905 21.0381 7.94092 22.2254 7.94092C23.4126 7.94092 24.3751 8.6905 24.3751 9.78352Z", fill: "#FFC700" }),
        React.createElement("path", { d: "M23.4327 8.66844C23.5873 9.24565 22.7888 9.01974 21.9395 9.24732C21.0902 9.47491 20.5116 10.0698 20.3569 9.49259C20.2023 8.91538 20.7847 8.33504 21.6341 8.10746C22.4834 7.87987 23.278 8.09123 23.4327 8.66844Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M21.468 11.1604C21.2965 10.8309 21.956 10.938 22.6887 10.7101C23.4214 10.4821 23.862 9.72242 24.0024 10.1737C24.1429 10.625 23.6445 11.1164 22.9118 11.3444C22.179 11.5724 21.6396 11.4899 21.468 11.1604Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M22.5483 8.5052C22.6216 8.77861 22.1733 8.69038 21.6845 8.82135C21.1957 8.95232 20.8516 9.2529 20.7783 8.97948C20.705 8.70606 21.051 8.41238 21.5398 8.28141C22.0286 8.15044 22.4751 8.23178 22.5483 8.5052Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M4.92439 9.78352C4.92439 10.8765 3.96194 11.6261 2.7747 11.6261C1.58745 11.6261 0.625 10.8765 0.625 9.78352C0.625 8.6905 1.58745 7.94092 2.7747 7.94092C3.96194 7.94092 4.92439 8.6905 4.92439 9.78352Z", fill: "#FFC700" }),
        React.createElement("path", { d: "M3.982 8.66844C4.13667 9.24565 3.33817 9.01974 2.48882 9.24732C1.63947 9.47491 1.0609 10.0698 0.906238 9.49259C0.751574 8.91538 1.33404 8.33504 2.18339 8.10746C3.03274 7.87987 3.82734 8.09123 3.982 8.66844Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M2.01735 11.1604C1.8458 10.8309 2.5053 10.938 3.23802 10.7101C3.97074 10.4821 4.41134 9.72242 4.55176 10.1737C4.69218 10.625 4.19381 11.1164 3.46109 11.3444C2.72837 11.5724 2.1889 11.4899 2.01735 11.1604Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M3.09716 8.5052C3.17042 8.77861 2.72209 8.69038 2.23331 8.82135C1.74453 8.95232 1.40038 9.2529 1.32712 8.97948C1.25386 8.70606 1.59985 8.41238 2.08863 8.28141C2.57742 8.15044 3.0239 8.23178 3.09716 8.5052Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M21 21.4833C21 22.5878 20.7489 23.0547 12.4375 23.0547C4.12611 23.0547 3.875 22.5878 3.875 21.4833C3.875 20.3787 4.12611 20.3047 12.4375 20.3047C20.7489 20.3047 21 20.3787 21 21.4833Z", fill: "#D8D8D8" }),
        React.createElement("path", { d: "M14.6123 21.583C14.5965 22.6393 13.9077 22.7662 9.15269 22.6767C5.64021 22.6106 4.71703 22.5202 4.72814 21.7777C4.73925 21.0352 5.09021 20.7512 9.18036 20.8281C13.9354 20.9176 14.6234 20.8405 14.6123 21.583Z", fill: "#EFF3F5" }),
        React.createElement("path", { d: "M5.36878 22.06C5.19105 21.8607 5.32313 21.5819 5.55794 21.3186C5.79275 21.0553 6.04136 20.9072 6.21909 21.1065C6.39682 21.3058 6.26473 21.5845 6.02992 21.8478C5.79512 22.1111 5.54651 22.2593 5.36878 22.06Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M5.33188 22.0183C5.18225 21.8505 5.32355 21.5821 5.55836 21.3188C5.79317 21.0555 6.03256 20.897 6.18219 21.0648C6.33181 21.2326 6.19051 21.501 5.9557 21.7644C5.7209 22.0277 5.4815 22.1861 5.33188 22.0183Z", fill: "#373333" }),
        React.createElement("path", { d: "M19.1715 22.06C18.9938 21.8607 19.1259 21.5819 19.3607 21.3186C19.5955 21.0553 19.8441 20.9072 20.0218 21.1065C20.1995 21.3058 20.0675 21.5845 19.8327 21.8478C19.5978 22.1111 19.3492 22.2593 19.1715 22.06Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M19.1374 22.0217C18.9855 21.8514 19.1261 21.5821 19.3609 21.3188C19.5957 21.0555 19.8358 20.8979 19.9877 21.0682C20.1397 21.2386 19.9991 21.5079 19.7643 21.7712C19.5295 22.0345 19.2893 22.1921 19.1374 22.0217Z", fill: "#373333" }),
        React.createElement("path", { d: "M8.71657 22.2374C8.50579 22.001 8.66243 21.6704 8.94091 21.3581C9.21938 21.0459 9.51422 20.8702 9.725 21.1066C9.93579 21.3429 9.77914 21.6736 9.50066 21.9858C9.22219 22.2981 8.92735 22.4738 8.71657 22.2374Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M8.65967 22.1742C8.49136 21.9854 8.66193 21.6704 8.9404 21.3581C9.21887 21.0459 9.4998 20.8546 9.66811 21.0433C9.83643 21.2321 9.66585 21.5471 9.38738 21.8594C9.10891 22.1716 8.82799 22.3629 8.65967 22.1742Z", fill: "#373333" }),
        React.createElement("path", { d: "M15.8196 22.2374C15.6088 22.001 15.7655 21.6704 16.0439 21.3581C16.3224 21.0459 16.6172 20.8702 16.828 21.1066C17.0388 21.3429 16.8822 21.6736 16.6037 21.9858C16.3252 22.2981 16.0304 22.4738 15.8196 22.2374Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M15.7716 22.1835C15.597 21.9878 15.7656 21.6705 16.0441 21.3582C16.3225 21.0459 16.6055 20.857 16.78 21.0527C16.9545 21.2483 16.786 21.5656 16.5075 21.8779C16.229 22.1902 15.9461 22.3792 15.7716 22.1835Z", fill: "#373333" }),
        React.createElement("path", { d: "M12.1406 22.3976C11.8957 22.1229 12.0777 21.7387 12.4013 21.3759C12.7249 21.013 13.0675 20.8089 13.3125 21.0835C13.5574 21.3582 13.3754 21.7424 13.0518 22.1053C12.7282 22.4681 12.3856 22.6723 12.1406 22.3976Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M12.0921 22.3438C11.8835 22.1098 12.0775 21.7389 12.401 21.3761C12.7246 21.0132 13.0554 20.7957 13.264 21.0297C13.4726 21.2636 13.2787 21.6345 12.9551 21.9974C12.6315 22.3602 12.3008 22.5777 12.0921 22.3438Z", fill: "#373333" }),
        React.createElement("path", { d: "M12.0489 13.7369C12.2981 13.494 12.7019 13.494 12.9511 13.7369L14.8132 15.5524C15.0623 15.7953 15.0623 16.1891 14.8132 16.432L12.9511 18.2475C12.7019 18.4904 12.2981 18.4904 12.0489 18.2475L10.1868 16.432C9.93772 16.1891 9.93772 15.7953 10.1868 15.5524L12.0489 13.7369Z", fill: "#FFE971" }),
        React.createElement("path", { d: "M12.4726 13.2256V15.5732H10.125C10.125 15.4162 10.1849 15.2593 10.3046 15.1396L12.039 13.4052C12.1587 13.2855 12.3157 13.2256 12.4726 13.2256Z", fill: "#FA7048" }),
        React.createElement("path", { d: "M12.4726 17.9209V15.5733H10.125C10.125 15.7302 10.1849 15.8872 10.3046 16.0069L12.039 17.7413C12.1587 17.861 12.3157 17.9209 12.4726 17.9209Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M12.4727 13.2256V15.5732H14.8203C14.8203 15.4162 14.7604 15.2593 14.6407 15.1396L12.9063 13.4052C12.7866 13.2855 12.6296 13.2256 12.4727 13.2256Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M12.4727 17.9209V15.5733H14.8203C14.8203 15.7302 14.7604 15.8872 14.6407 16.0069L12.9063 17.7413C12.7866 17.861 12.6296 17.9209 12.4727 17.9209Z", fill: "#9F0400" }),
        React.createElement("path", { d: "M18.6595 15.807C18.7972 15.6548 19.0203 15.6548 19.158 15.807L20.1869 16.9442C20.3246 17.0964 20.3246 17.343 20.1869 17.4952L19.158 18.6324C19.0203 18.7846 18.7972 18.7846 18.6595 18.6324L17.6306 17.4952C17.4929 17.343 17.4929 17.0964 17.6306 16.9442L18.6595 15.807Z", fill: "#FFE971" }),
        React.createElement("path", { d: "M18.9132 15.5596V16.9244H17.5483C17.5483 16.8332 17.5831 16.742 17.6528 16.6724L18.6611 15.664C18.7307 15.5944 18.822 15.5596 18.9132 15.5596Z", fill: "#FA7048" }),
        React.createElement("path", { d: "M18.9132 18.2896V16.9247H17.5483C17.5483 17.0159 17.5831 17.1072 17.6528 17.1768L18.6611 18.1851C18.7307 18.2547 18.822 18.2896 18.9132 18.2896Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M18.9134 15.5596V16.9245H20.2783C20.2783 16.8332 20.2435 16.742 20.1739 16.6724L19.1655 15.664C19.0959 15.5944 19.0047 15.5596 18.9134 15.5596Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M18.9134 18.2896V16.9247H20.2783C20.2783 17.0159 20.2435 17.1072 20.1739 17.1768L19.1655 18.1851C19.0959 18.2547 19.0047 18.2896 18.9134 18.2896Z", fill: "#9F0400" }),
        React.createElement("path", { d: "M5.64194 15.807C5.77959 15.6548 6.00277 15.6548 6.14042 15.807L7.16936 16.9442C7.30701 17.0964 7.30701 17.343 7.16936 17.4952L6.14042 18.6324C6.00277 18.7846 5.77959 18.7846 5.64194 18.6324L4.613 17.4952C4.47535 17.343 4.47535 17.0964 4.613 16.9442L5.64194 15.807Z", fill: "#FFE971" }),
        React.createElement("path", { d: "M5.90931 15.5596V16.9245H4.54443C4.54443 16.8332 4.57924 16.742 4.64885 16.6724L5.65722 15.664C5.72683 15.5944 5.81807 15.5596 5.90931 15.5596Z", fill: "#FA7048" }),
        React.createElement("path", { d: "M5.90931 18.2896V16.9247H4.54443C4.54443 17.0159 4.57924 17.1072 4.64885 17.1768L5.65722 18.1851C5.72683 18.2547 5.81807 18.2896 5.90931 18.2896Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M5.90905 15.5596V16.9245H7.27393C7.27393 16.8332 7.23912 16.742 7.16951 16.6724L6.16114 15.664C6.09153 15.5944 6.00029 15.5596 5.90905 15.5596Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M5.90905 18.2896V16.9247H7.27393C7.27393 17.0159 7.23912 17.1072 7.16951 17.1768L6.16114 18.1851C6.09153 18.2547 6.00029 18.2896 5.90905 18.2896Z", fill: "#9F0400" })));
};

var Icon$_ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" })));
};

var Icon$Z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z" })));
};

var Icon$Y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M4.68179 7.04592C5.06573 7.78505 5.47899 8.47752 5.91436 9.12605C4.76866 8.20293 3.15483 7.94918 1.72791 8.60664L0.865295 9.00408L0.949991 9.1879C1.87444 11.1943 4.25037 12.0714 6.25678 11.147L7.1194 10.7495C7.7588 11.5306 8.42708 12.2337 9.10661 12.8671C7.54917 12.0868 5.60297 12.3946 4.36752 13.7424L4.07604 14.0604L5.17158 15.0646C6.8001 16.5573 9.33037 16.4472 10.8231 14.8187L11.0984 14.5183C11.8534 15.0744 12.6001 15.5528 13.3138 15.9628C13.5418 16.0939 13.7667 16.218 13.9874 16.3354C12.2933 15.9571 10.485 16.7202 9.6092 18.3189L9.47337 18.5669L10.514 19.137C12.4515 20.1983 14.8825 19.4881 15.9439 17.5507L16.0715 17.3177C16.4836 17.4877 16.862 17.6297 17.1977 17.747C17.6961 17.9213 18.1016 18.0417 18.3855 18.1191L18.8453 18.2339C19.2507 18.3192 19.6484 18.0598 19.7338 17.6545C19.819 17.2494 19.56 16.8519 19.1551 16.7662L19.1524 16.7657C19.1551 16.7662 19.0729 16.7518 18.7802 16.6719C18.527 16.6029 18.1551 16.4928 17.6927 16.3311C17.1224 16.1317 16.416 15.8546 15.6253 15.4802L15.9997 14.8317C17.1043 12.9186 16.4488 10.4722 14.5356 9.36762L13.8989 9.00001L13.4324 9.80801C12.4895 11.4411 12.8291 13.4627 14.1387 14.7066C14.1128 14.6919 14.0869 14.6771 14.0609 14.6622C12.797 13.9361 11.4285 12.9847 10.1078 11.7498L10.5391 11.324C12.1111 9.77192 12.1274 7.23931 10.5753 5.66723L9.93826 5.02195L9.41242 5.5411C8.11055 6.82638 7.87565 8.78411 8.71479 10.3119C7.73795 9.1976 6.82187 7.90232 6.03634 6.39938C7.08943 4.4961 6.42732 2.09216 4.53566 1.00001L3.4039 0.346588L2.82248 1.35364C1.71791 3.26682 2.37341 5.71318 4.28658 6.81775L4.68179 7.04592Z" })));
};

var Icon$X = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M15.3182 7.04592C14.9343 7.78505 14.521 8.47752 14.0856 9.12605C15.2313 8.20293 16.8452 7.94918 18.2721 8.60664L19.1347 9.00408L19.05 9.1879C18.1256 11.1943 15.7496 12.0714 13.7432 11.147L12.8806 10.7495C12.2412 11.5306 11.5729 12.2337 10.8934 12.8671C12.4508 12.0868 14.397 12.3946 15.6325 13.7424L15.924 14.0604L14.8284 15.0646C13.1999 16.5573 10.6696 16.4472 9.17692 14.8187L8.90162 14.5183C8.1466 15.0744 7.39992 15.5528 6.68625 15.9628C6.45816 16.0939 6.23335 16.218 6.01259 16.3354C7.70668 15.9571 9.51501 16.7202 10.3908 18.3189L10.5266 18.5669L9.486 19.137C7.54854 20.1983 5.11749 19.4881 4.05611 17.5507L3.92849 17.3177C3.51637 17.4877 3.13804 17.6297 2.80235 17.747C2.30389 17.9213 1.89839 18.0417 1.61448 18.1191L1.15466 18.2339C0.749332 18.3192 0.351572 18.0598 0.26624 17.6545C0.180958 17.2494 0.440012 16.8519 0.844932 16.7662L0.847556 16.7657C0.844932 16.7662 0.927067 16.7518 1.21981 16.6719C1.47301 16.6029 1.84485 16.4928 2.30733 16.3311C2.87756 16.1317 3.58397 15.8546 4.3747 15.4802L4.0003 14.8317C2.89573 12.9186 3.55123 10.4722 5.4644 9.36762L6.10112 9.00001L6.56763 9.80801C7.51049 11.4411 7.1709 13.4627 5.86133 14.7066C5.88719 14.6919 5.9131 14.6771 5.93906 14.6622C7.20296 13.9361 8.57146 12.9847 9.89223 11.7498L9.46094 11.324C7.88886 9.77192 7.87263 7.23931 9.42468 5.66723L10.0617 5.02195L10.5876 5.5411C11.8895 6.82638 12.1243 8.78411 11.2852 10.3119C12.2621 9.1976 13.1781 7.90232 13.9637 6.39938C12.9106 4.4961 13.5727 2.09216 15.4643 1.00001L16.5961 0.346588L17.1775 1.35364C18.2821 3.26682 17.6266 5.71318 15.7134 6.81775L15.3182 7.04592Z" })));
};

var Icon$W = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$V = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("image", { width: "32", height: "32", href: "/images/logo-nav-title-mobile.png" })));
};

var Icon$U = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear_logoround)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React.createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React.createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React.createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear_logoround", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#54DADE" }),
                React.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$T = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#F6AF5B" }),
        React.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#F6AF5B" }),
        React.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#AE5714" }),
        React.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#AE5714" }),
        React.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#E17A2F" }),
        React.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#F6AF5B" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#F7D29B" }),
        React.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#E7974D" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#E17A2F" }),
        React.createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#AE5714" }),
        React.createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#AE5714" })));
};

var Icon$S = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#FFAF00" }),
        React.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#EB8C00" }),
        React.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#FFD800" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#FEED8D" }),
        React.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#FFC700" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#EB8C00" }),
        React.createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#EB8C00" })));
};

var Icon$R = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#9A6AFF" }),
        React.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#9A6AFF" }),
        React.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#A880FD" }),
        React.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#A880FD" }),
        React.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#7645D9" }),
        React.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#9A6AFF" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#CAB3F8" }),
        React.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#8F5BFD" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#7645D9" }),
        React.createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#452A7A" }),
        React.createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#452A7A" })));
};

var Icon$Q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#C0C4C6" }),
        React.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#C0C4C6" }),
        React.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#7D7D7D" }),
        React.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#969696" }),
        React.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#C0C4C6" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#D8D8D8" }),
        React.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#B2B2B2" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#969696" }),
        React.createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#7D7D7D" })));
};

var Icon$P = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#1FC7D4" }),
        React.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#0098A1" }),
        React.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#53DEE9" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0022L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#84F0F9" }),
        React.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#1FC7D4" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#0098A1" }),
        React.createElement("path", { d: "M9.95096 14.0798C9.03126 14.1218 8.69439 13.361 8.65076 12.4055C8.60713 11.4501 8.87326 10.6617 9.79296 10.6197C10.7127 10.5777 11.0495 11.3385 11.0932 12.294C11.1368 13.2495 10.8707 14.0378 9.95096 14.0798Z", fill: "#017178" }),
        React.createElement("path", { d: "M15.1199 14.0803C14.2002 14.1223 13.8633 13.3615 13.8197 12.406C13.7761 11.4505 14.0422 10.6622 14.9619 10.6202C15.8816 10.5782 16.2185 11.339 16.2621 12.2945C16.3057 13.25 16.0396 14.0383 15.1199 14.0803Z", fill: "#017178" })));
};

var Icon$O = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 35 33" }, props),
        React.createElement("path", { d: "m32.9582 1-13.1341 9.7183 2.4424-5.72731z", fill: "#e17726", stroke: "#e17726" }),
        React.createElement("g", { fill: "#e27625", stroke: "#e27625" },
            React.createElement("path", { d: "m2.66296 1 13.01714 9.809-2.3254-5.81802z" }),
            React.createElement("path", { d: "m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z" }),
            React.createElement("path", { d: "m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z" }),
            React.createElement("path", { d: "m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z" }),
            React.createElement("path", { d: "m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z" }),
            React.createElement("path", { d: "m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z" }),
            React.createElement("path", { d: "m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z" })),
        React.createElement("path", { d: "m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React.createElement("path", { d: "m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React.createElement("path", { d: "m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z", fill: "#233447", stroke: "#233447" }),
        React.createElement("path", { d: "m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z", fill: "#233447", stroke: "#233447" }),
        React.createElement("path", { d: "m10.8733 28.8721.6495-5.3386-4.13117.1167z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m24.0982 23.5335.6366 5.3386 3.4946-5.2219z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m8.392 17.6507 3.1049 6.0513-.1039-3.0062z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z", fill: "#c0ac9d", stroke: "#c0ac9d" }),
        React.createElement("path", { d: "m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z", fill: "#161616", stroke: "#161616" }),
        React.createElement("path", { d: "m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z", fill: "#763e1a", stroke: "#763e1a" }),
        React.createElement("path", { d: "m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z", fill: "#763e1a", stroke: "#763e1a" }),
        React.createElement("path", { d: "m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z", fill: "#f5841f", stroke: "#f5841f" })));
};

var Icon$N = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$M = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React.createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React.createElement("g", { mask: "url(#A)" },
            React.createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React.createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React.createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var Icon$L = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$K = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React.createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React.createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React.createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React.createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React.createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear_pancakes)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React.createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear_pancakes", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#9F4A08" }),
                React.createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React.createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$J = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React.createElement("image", { width: 90, height: 90, href: "/images/dar-round-panel.svg" })));
};

var Icon$I = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("g", { clipPath: "url(#clip-pocketwatch)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.4825 9.78846C44.9985 10.9575 44.934 12.0841 44.3506 13.0946C43.7672 14.105 42.8238 14.7242 41.5534 14.8619C40.2449 15.0037 38.5223 14.6345 36.5148 13.4755C34.5072 12.3164 33.3262 11.0092 32.7948 9.80511C32.2788 8.63603 32.3433 7.50943 32.9267 6.49898C33.5101 5.48854 34.4535 4.86941 35.7239 4.73171C37.0324 4.5899 38.755 4.95904 40.7625 6.1181C42.7701 7.27716 43.9511 8.58438 44.4825 9.78846ZM46.7339 8.79481C45.9315 6.97669 44.3045 5.3214 41.993 3.98688C39.6815 2.65235 37.4345 2.07098 35.4588 2.28512C33.445 2.50338 31.7896 3.54667 30.7955 5.26852C29.8014 6.99038 29.7255 8.94565 30.5434 10.7988C31.3458 12.6169 32.9728 14.2722 35.2843 15.6067C37.5958 16.9412 39.8428 17.5226 41.8185 17.3085C43.8323 17.0902 45.4877 16.0469 46.4818 14.325C47.4759 12.6032 47.5518 10.6479 46.7339 8.79481Z", fill: "#FFAF00" }),
            React.createElement("path", { d: "M39.2061 12.466C39.4779 11.9952 39.3166 11.3932 38.8458 11.1213L37.3879 10.2796C36.9171 10.0078 36.315 10.1691 36.0432 10.6399L33.7667 14.5829C33.4949 15.0537 33.6562 15.6558 34.127 15.9276L35.5849 16.7693C36.0557 17.0411 36.6577 16.8798 36.9296 16.409L39.2061 12.466Z", fill: "#EB8C00" }),
            React.createElement("path", { d: "M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L36.9885 6.30023C36.5177 6.02841 35.9156 6.18972 35.6438 6.66054L34.4249 8.77169C34.1531 9.2425 34.3144 9.84453 34.7852 10.1164L40.2885 13.2937C40.7593 13.5655 41.3614 13.4042 41.6332 12.9334L42.8521 10.8222Z", fill: "#FFAF00" }),
            React.createElement("path", { d: "M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L38.2605 7.03465C37.7897 6.76282 37.1877 6.92413 36.9159 7.39495L35.9418 9.08208C35.67 9.5529 35.8313 10.1549 36.3021 10.4268L40.5333 12.8697C41.0041 13.1415 41.6062 12.9802 41.878 12.5093L42.8521 10.8222Z", fill: "#FFD800" }),
            React.createElement("path", { d: "M42.2502 9.90623C42.3862 9.67082 42.3055 9.3698 42.0701 9.23389L41.2265 8.74685C40.9911 8.61094 40.6901 8.6916 40.5542 8.92701L39.0879 11.4666C38.952 11.702 39.0327 12.0031 39.2681 12.139L40.1117 12.626C40.3471 12.7619 40.6481 12.6813 40.784 12.4458L42.2502 9.90623Z", fill: "#FFE971" }),
            React.createElement("path", { d: "M14.4276 37.9808C19.0474 45.9826 29.0239 48.079 37.1341 43.3966C45.2442 38.7142 48.4169 29.0261 43.7971 21.0244C39.1773 13.0227 29.2008 10.9262 21.0907 15.6086C12.9805 20.291 9.80785 29.9791 14.4276 37.9808Z", fill: "#EB8C00" }),
            React.createElement("path", { d: "M12.9928 35.4957C17.6126 43.4975 27.5891 45.5939 35.6993 40.9115C43.8094 36.2291 46.9821 26.541 42.3623 18.5393C37.7425 10.5375 27.766 8.4411 19.6558 13.1235C11.5457 17.8059 8.37303 27.494 12.9928 35.4957Z", fill: "#FFD800" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.7043 22.6394C12.3316 20.7707 13.3072 19.0005 14.5942 17.4155L44.4474 25.2401C44.6009 27.2114 44.3704 29.1765 43.7923 31.0497L11.7043 22.6394ZM39.463 38.0997C40.3335 37.2422 41.1005 36.3113 41.7564 35.3244L10.887 27.2335C10.8573 28.381 10.9556 29.5386 11.1892 30.6891L39.463 38.0997Z", fill: "#FFE971" }),
            React.createElement("path", { d: "M15.0259 34.3218C19.0448 41.2826 27.6684 43.1382 34.6556 39.1041C41.6428 35.07 44.3477 26.674 40.3288 19.7131C36.31 12.7523 27.6863 10.8967 20.6991 14.9308C13.7119 18.9649 11.0071 27.3609 15.0259 34.3218Z", fill: "#FFC700" }),
            React.createElement("path", { d: "M16.5423 33.2959C20.044 39.3611 27.4985 40.8267 33.6123 37.2969C39.7261 33.7671 42.1841 26.5785 38.6824 20.5134C35.1806 14.4482 27.7262 12.9826 21.6123 16.5124C15.4985 20.0422 13.0406 27.2308 16.5423 33.2959Z", fill: "white" }),
            React.createElement("path", { d: "M19.6485 19.4094C18.7716 20.2171 20.1105 20.7851 21.1076 20.1316C22.9645 18.9145 25.1882 18.2126 27.5811 18.2248C31.0292 18.2423 34.1409 19.7388 36.319 22.1137C37.0584 22.9199 38.4114 22.545 37.8645 21.5976C34.5623 15.878 27.6235 14.4433 21.9702 17.7072C21.1156 18.2006 20.3393 18.7732 19.6485 19.4094Z", fill: "#E7E8E8" }),
            React.createElement("path", { d: "M34.6395 35.043C35.5545 34.2788 34.2368 33.6843 33.2067 34.2845C31.5603 35.2437 29.6432 35.7884 27.5946 35.7783C24.3428 35.7623 21.4084 34.3516 19.3546 32.1127C18.6572 31.3525 17.381 31.706 17.8968 32.5993C21.0104 37.9921 27.5541 39.344 32.8862 36.2656C33.5169 35.9014 34.1025 35.4916 34.6395 35.043Z", fill: "#E7E8E8" }),
            React.createElement("path", { d: "M32.5972 20.6118C32.801 20.2587 32.6801 19.8071 32.3269 19.6033L32.0205 19.4263C31.6673 19.2225 31.2158 19.3434 31.0119 19.6966L28.0893 24.7587C27.8854 25.1118 28.0064 25.5633 28.3595 25.7672L28.666 25.9442C29.0191 26.148 29.4707 26.027 29.6745 25.6739L32.5972 20.6118Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M21.2036 27.5233C20.8098 27.6288 20.576 28.0336 20.6816 28.4275L20.7784 28.789C20.884 29.1828 21.2888 29.4166 21.6826 29.311L26.2569 28.0854C26.6507 27.9798 26.8844 27.575 26.7789 27.1812L26.682 26.8197C26.5765 26.4258 26.1717 26.1921 25.7778 26.2976L21.2036 27.5233Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M25.4809 25.6151C26.244 24.2934 27.8023 23.9359 29.053 24.658C30.3037 25.3801 30.7732 26.9084 30.0101 28.23C29.247 29.5517 27.6887 29.9093 26.438 29.1872C25.1873 28.4651 24.7178 26.9368 25.4809 25.6151Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M17.0126 14.6084C16.4241 14.2686 15.5801 14.6286 15.1275 15.4126L10.989 22.5807C10.5364 23.3647 10.6466 24.2756 11.2351 24.6154L11.8085 24.9464C12.397 25.2862 13.241 24.9262 13.6936 24.1422L17.8321 16.9741C18.2847 16.1901 18.1745 15.2792 17.586 14.9394L17.0126 14.6084Z", fill: "#EB8C00" }),
            React.createElement("path", { d: "M1.87053 28.4667C-1.14632 26.725 -0.193534 19.9443 3.7222 13.162C7.63794 6.37974 13.0338 2.16425 16.0507 3.90603C19.0675 5.64781 18.1147 12.4285 14.199 19.2108C10.2833 25.993 4.88739 30.2085 1.87053 28.4667Z", fill: "#FFC700" }),
            React.createElement("path", { d: "M3.24974 28.6111C0.902471 27.273 2.13775 21.219 5.79373 14.9665C9.44971 8.71396 14.1419 4.63067 16.4892 5.96878C18.8365 7.30688 17.6012 13.3609 13.9452 19.6134C10.2892 25.8659 5.59701 29.9492 3.24974 28.6111Z", fill: "#FFD800" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.32523 23.3938C2.57644 22.2148 2.99217 20.9038 3.55715 19.5196L17.6473 7.92463C17.7625 8.75342 17.6984 9.77478 17.4703 10.9308L2.32523 23.3938ZM15.6081 16.3772C15.9949 15.5396 16.3319 14.7209 16.6159 13.9331L2.04567 25.923C2.0571 26.4661 2.12846 26.9487 2.26274 27.3591L15.6081 16.3772Z", fill: "#FFE971" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip-pocketwatch" },
                React.createElement("rect", { width: "48", height: "48", fill: "white", transform: "matrix(-1 0 0 1 48 0)" })))));
};

var Icon$H = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9 14.7902C9 15.555 9.82366 16.0367 10.4903 15.6617L15.4505 12.8716C16.1302 12.4893 16.1302 11.5107 15.4505 11.1284L10.4903 8.33827C9.82366 7.96331 9 8.44502 9 9.20985V14.7902ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$G = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$F = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$E = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React.createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React.createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React.createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7.75C12.5 7.33579 12.1642 7 11.75 7C11.3358 7 11 7.33579 11 7.75V13L15.5537 15.8022C15.9106 16.0219 16.3781 15.9106 16.5978 15.5537C16.8192 15.1938 16.7041 14.7225 16.3419 14.5051L12.5 12.2V7.75Z" })));
};

var Icon$B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("g", { clipPath: "url(#clip-won)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M43.1934 10.6907C44.0412 9.92381 45.4 10.3246 45.6959 11.4288C45.9144 12.2444 45.4304 13.0827 44.6148 13.3012L38.4955 14.9409L43.1934 10.6907ZM49.112 10.5134C48.1317 6.85481 43.6295 5.52698 40.8207 8.06806L31.0187 16.9358C29.5584 18.2569 30.8604 20.6481 32.7625 20.1385L45.5302 16.7174C48.2324 15.9933 49.8361 13.2157 49.112 10.5134Z", fill: "#7645D9" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.1886 8.0841C29.8078 6.90274 28.3125 6.54189 27.4349 7.41956C26.7866 8.06782 26.7866 9.11885 27.4349 9.7671L32.2987 14.6309L30.1886 8.0841ZM24.7196 4.70427C27.6276 1.79628 32.5818 2.99187 33.8434 6.90609L38.2461 20.5658C38.902 22.6007 36.3796 24.1424 34.8677 22.6306L24.7196 12.4824C22.5717 10.3345 22.5717 6.85214 24.7196 4.70427Z", fill: "#7645D9" }),
            React.createElement("path", { opacity: "0.6", d: "M7.27624 34.0431C7.01094 35.0539 5.57594 35.054 5.31064 34.0431L4.51492 31.0112C4.42182 30.6565 4.14478 30.3794 3.79005 30.2863L0.758148 29.4906C-0.252715 29.2253 -0.252717 27.7903 0.758146 27.525L3.79005 26.7293C4.14478 26.6362 4.42182 26.3591 4.51492 26.0044L5.31064 22.9725C5.57594 21.9616 7.01094 21.9616 7.27624 22.9725L8.07196 26.0044C8.16506 26.3591 8.44209 26.6362 8.79682 26.7293L11.8287 27.525C12.8396 27.7903 12.8396 29.2253 11.8287 29.4906L8.79683 30.2863C8.44209 30.3794 8.16506 30.6565 8.07196 31.0112L7.27624 34.0431Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M9.62029 11.6637C9.62344 12.2763 8.81089 12.494 8.5073 11.9619L7.59673 10.3659C7.4902 10.1791 7.2913 10.0643 7.07631 10.0654L5.23882 10.0748C4.62619 10.078 4.40847 9.26545 4.9406 8.96185L6.53663 8.05128C6.72337 7.94475 6.8382 7.74585 6.8371 7.53087L6.82766 5.69337C6.82451 5.08074 7.63705 4.86302 7.94064 5.39515L8.85121 6.99119C8.95775 7.17792 9.15664 7.29275 9.37163 7.29165L11.2091 7.28221C11.8218 7.27906 12.0395 8.0916 11.5073 8.39519L9.91131 9.30576C9.72458 9.4123 9.60974 9.6112 9.61085 9.82618L9.62029 11.6637Z", fill: "#53DEE9" }),
            React.createElement("path", { opacity: "0.8", d: "M53.8712 15.7857C53.2964 15.6348 53.2964 14.8189 53.8712 14.6681L56.9643 13.8563C57.166 13.8033 57.3235 13.6458 57.3764 13.4441L58.1882 10.351C58.3391 9.77623 59.155 9.77623 59.3058 10.351L60.1176 13.4441C60.1706 13.6458 60.3281 13.8033 60.5298 13.8563L63.6229 14.6681C64.1977 14.8189 64.1977 15.6348 63.6229 15.7857L60.5298 16.5975C60.3281 16.6504 60.1706 16.8079 60.1176 17.0096L59.3058 20.1027C59.155 20.6775 58.3391 20.6775 58.1882 20.1027L57.3764 17.0096C57.3235 16.8079 57.166 16.6504 56.9643 16.5975L53.8712 15.7857Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M51.0823 29.9055C50.3505 27.1742 47.543 25.5533 44.8116 26.2851L17.6112 33.5735C14.8798 34.3053 13.2589 37.1128 13.9908 39.8441L18.546 56.8444C19.2778 59.5758 22.0853 61.1967 24.8167 60.4648L52.0171 53.1765C54.7485 52.4446 56.3694 49.6371 55.6375 46.9058L51.0823 29.9055Z", fill: "url(#paint0_linear_won)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.2737 36.0462L45.4742 28.7579C46.8399 28.392 48.2436 29.2024 48.6095 30.5681L53.1648 47.5684C53.5307 48.934 52.7202 50.3378 51.3546 50.7037L24.1541 57.9921C22.7884 58.358 21.3847 57.5475 21.0187 56.1819L16.4635 39.1816C16.0976 37.8159 16.9081 36.4122 18.2737 36.0462ZM44.8116 26.2851C47.543 25.5533 50.3505 27.1742 51.0823 29.9055L55.6375 46.9058C56.3694 49.6371 54.7485 52.4446 52.0171 53.1765L24.8167 60.4648C22.0853 61.1967 19.2778 59.5758 18.546 56.8444L13.9908 39.8441C13.2589 37.1128 14.8798 34.3053 17.6112 33.5735L44.8116 26.2851Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M35.2297 28.8525L27.1932 31.0059L34.3987 57.8973L42.4352 55.7439L35.2297 28.8525Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M54.5173 42.4023L52.3639 34.3658L15.1113 44.3476L17.2647 52.3841L54.5173 42.4023Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9264 46.3239L31.8613 48.485L32.1926 49.7213L40.2577 47.5603L39.9264 46.3239ZM29.7019 40.4262L37.767 38.2651L37.4358 37.0287L29.3707 39.1898L29.7019 40.4262Z", fill: "#7645D9" })),
            React.createElement("path", { d: "M54.8306 24.9448C55.3795 22.8962 54.1638 20.7906 52.1153 20.2417L17.4965 10.9657C15.448 10.4168 13.3424 11.6324 12.7935 13.681L11.8824 17.081C11.3335 19.1295 12.5492 21.2351 14.5977 21.784L49.2165 31.0601C51.265 31.609 53.3706 30.3933 53.9195 28.3448L54.8306 24.9448Z", fill: "url(#paint1_linear_won)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8339 13.4384L51.4527 22.7145C52.1355 22.8975 52.5408 23.5993 52.3578 24.2822L51.4468 27.6822C51.2638 28.3651 50.5619 28.7703 49.8791 28.5873L15.2603 19.3113C14.5775 19.1283 14.1722 18.4264 14.3552 17.7436L15.2662 14.3435C15.4492 13.6607 16.1511 13.2555 16.8339 13.4384ZM52.1153 20.2417C54.1638 20.7906 55.3795 22.8962 54.8306 24.9448L53.9195 28.3448C53.3706 30.3933 51.265 31.609 49.2165 31.0601L14.5977 21.784C12.5492 21.2351 11.3335 19.1295 11.8824 17.081L12.7935 13.681C13.3424 11.6324 15.448 10.4168 17.4965 10.9657L52.1153 20.2417Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M38.8242 16.6804L30.7877 14.527L27.8889 25.3454L35.9254 27.4988L38.8242 16.6804Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M38.4257 18.0799L30.4256 15.8399L30.7455 14.3999L38.8813 16.6573L38.4257 18.0799Z", fill: "#7645D9" }))),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear_won", x1: "31.2114", y1: "29.9293", x2: "38.4169", y2: "56.8207", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("linearGradient", { id: "paint1_linear_won", x1: "34.8059", y1: "15.6037", x2: "31.9071", y2: "26.4221", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("clipPath", { id: "clip-won" },
                React.createElement("rect", { width: "64", height: "64", fill: "white" })))));
};

var Icon$A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("g", { clipPath: "url(#clip-teamplayer)" },
            React.createElement("path", { d: "M15.9617 4.03476C16.5597 2.82143 15.6818 1.40061 14.2254 1.22477C13.0389 1.08149 11.9708 1.84428 11.8399 2.9285L11.3896 6.65764C11.2976 7.41951 11.899 8.11875 12.7328 8.21943C13.3889 8.29864 14.0166 7.98162 14.286 7.435L15.9617 4.03476Z", fill: "#1FC7D4" }),
            React.createElement("path", { d: "M6.27612 5.16903C5.36287 4.17118 5.80868 2.56162 7.15782 1.98574C8.25706 1.51653 9.49573 1.95041 9.92446 2.95482L11.3991 6.40949C11.7004 7.11529 11.3184 7.95473 10.546 8.28444C9.93817 8.54388 9.24684 8.41494 8.83541 7.9654L6.27612 5.16903Z", fill: "#1FC7D4" }),
            React.createElement("path", { d: "M17.0349 9.11691C17.3916 11.6186 15.2219 13.6784 12.2437 14.1031C9.26546 14.5278 6.60649 13.1564 6.24978 10.6548C5.89307 8.15311 8.06278 6.09324 11.041 5.66857C14.0192 5.24391 16.6782 6.61525 17.0349 9.11691Z", fill: "#1FC7D4" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.53552 12.9725C8.66378 13.937 10.392 14.3672 12.2437 14.1032C14.913 13.7225 16.9328 12.0284 17.0663 9.87986C16.4991 11.4567 14.8084 12.7917 12.6007 13.3832C10.6865 13.8961 8.82955 13.7307 7.53552 12.9725Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M11.1696 9.94964C11.3325 10.6295 11.0911 10.9601 10.717 11.0497C10.343 11.1393 9.97795 10.9541 9.81504 10.2742C9.65212 9.5943 9.89356 9.26377 10.2676 9.17414C10.6417 9.08451 11.0067 9.26973 11.1696 9.94964Z", fill: "#017178" }),
            React.createElement("path", { d: "M14.4407 9.58045C14.4649 10.2792 14.1625 10.555 13.7781 10.5684C13.3937 10.5817 13.0729 10.3275 13.0486 9.62879C13.0243 8.93005 13.3268 8.65422 13.7112 8.64087C14.0956 8.62753 14.4164 8.88172 14.4407 9.58045Z", fill: "#017178" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.3337 10.8946C12.1996 10.9121 12.1051 11.0349 12.1226 11.169C12.1855 11.6513 12.654 11.9486 13.1254 11.8872C13.3584 11.8568 13.563 11.7451 13.7062 11.5832C13.7958 11.4819 13.7863 11.3272 13.685 11.2376C13.5838 11.148 13.429 11.1575 13.3395 11.2588C13.2753 11.3313 13.1788 11.3864 13.0621 11.4016C12.8142 11.4339 12.6305 11.2773 12.6082 11.1057C12.5907 10.9716 12.4678 10.8771 12.3337 10.8946Z", fill: "#017178" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.3339 10.8945C12.1998 10.9119 12.1053 11.0348 12.1228 11.1689C12.1452 11.3405 12.0078 11.539 11.76 11.5713C11.6411 11.5868 11.5319 11.557 11.4508 11.5014C11.3393 11.425 11.1869 11.4535 11.1104 11.565C11.034 11.6765 11.0625 11.8289 11.174 11.9054C11.3555 12.0297 11.586 12.0878 11.8233 12.0569C12.2947 11.9954 12.6712 11.5878 12.6083 11.1056C12.5908 10.9715 12.468 10.877 12.3339 10.8945Z", fill: "#017178" }),
            React.createElement("path", { d: "M9.50991 12.781C9.67816 11.447 8.51926 10.3246 7.21792 10.5612C6.15761 10.7539 5.45717 11.7854 5.65344 12.8651L6.32848 16.5785C6.4664 17.3372 7.1822 17.8424 7.92727 17.7069C8.51353 17.6004 8.9626 17.1204 9.0384 16.5195L9.50991 12.781Z", fill: "#9A6AFF" }),
            React.createElement("path", { d: "M4.93123 13.9946C4.62613 12.6768 3.04713 12.1326 1.80838 12.9183C0.799086 13.5584 0.455077 14.825 1.04002 15.7472L3.05191 18.9192C3.46294 19.5673 4.37109 19.7279 5.08032 19.2781C5.63839 18.9241 5.92368 18.2814 5.78623 17.6877L4.93123 13.9946Z", fill: "#9A6AFF" }),
            React.createElement("path", { d: "M12.3621 17.3922C13.4422 19.6768 11.9781 22.2858 9.25833 23.5716C6.53859 24.8574 3.59314 24.333 2.5131 22.0485C1.43306 19.764 2.89716 17.1549 5.6169 15.8691C8.33664 14.5833 11.2821 15.1077 12.3621 17.3922Z", fill: "#9A6AFF" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.5245 20.1686C11.9455 21.2367 10.9163 22.1811 9.58715 22.8094C6.86742 24.0952 3.92196 23.5709 2.84192 21.2863C2.41234 20.3777 2.38525 19.4177 2.67957 18.51C2.0738 19.6275 1.96092 20.8804 2.51314 22.0485C3.59318 24.333 6.53864 24.8574 9.25837 23.5716C10.8963 22.7972 12.0789 21.5429 12.5245 20.1686Z", fill: "#7645D9" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.75939 18.7345C8.86973 18.6564 9.02253 18.6825 9.10068 18.7928C9.45793 19.2972 9.2815 19.9886 8.77528 20.3471C8.66494 20.4253 8.51213 20.3992 8.43398 20.2889C8.35583 20.1785 8.38193 20.0257 8.49227 19.9476C8.8145 19.7193 8.87726 19.3246 8.7011 19.0758C8.62294 18.9655 8.64904 18.8127 8.75939 18.7345Z", fill: "#452A7A" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.75936 18.7345C8.86971 18.6563 9.02251 18.6824 9.10066 18.7928C9.27683 19.0415 9.67007 19.1133 9.9923 18.8851C10.1026 18.807 10.2554 18.8331 10.3336 18.9434C10.4117 19.0537 10.3856 19.2065 10.2753 19.2847C9.76908 19.6432 9.05832 19.5802 8.70107 19.0758C8.62292 18.9654 8.64902 18.8126 8.75936 18.7345Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M7.26609 18.6401C7.75355 19.1413 7.7149 19.5488 7.43915 19.8169C7.16341 20.0851 6.755 20.1124 6.26755 19.6112C5.7801 19.11 5.81875 18.7025 6.09449 18.4343C6.37023 18.1662 6.77864 18.1389 7.26609 18.6401Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M10.0286 16.8059C10.429 17.3791 10.3252 17.775 10.0099 17.9953C9.69452 18.2156 9.28705 18.1767 8.88668 17.6036C8.48632 17.0304 8.5901 16.6344 8.90543 16.4142C9.22077 16.1939 9.62825 16.2327 10.0286 16.8059Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M15.821 11.1076C15.5183 9.7976 16.5573 8.56337 17.876 8.66668C18.9503 8.75086 19.7518 9.70595 19.6661 10.7999L19.3713 14.5627C19.3111 15.3315 18.6502 15.9067 17.8953 15.8475C17.3012 15.801 16.8058 15.3691 16.6694 14.7789L15.821 11.1076Z", fill: "#FFC700" }),
            React.createElement("path", { d: "M20.4641 11.4595C20.469 10.121 21.7611 9.16422 23.0195 9.56738C24.0448 9.89586 24.6059 11.0053 24.2727 12.0453L23.1267 15.6224C22.8925 16.3532 22.1187 16.7586 21.3982 16.5277C20.8313 16.3461 20.4482 15.8139 20.4504 15.2108L20.4641 11.4595Z", fill: "#FFC700" }),
            React.createElement("path", { d: "M13.6364 16.264C13.1079 18.7351 15.1302 20.9398 18.072 21.569C21.0138 22.1983 23.7611 21.0137 24.2897 18.5427C24.8182 16.0716 22.7959 13.8669 19.854 13.2376C16.9122 12.6084 14.1649 13.793 13.6364 16.264Z", fill: "#FFC700" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.7678 17.3277C18.638 17.2898 18.5021 17.3644 18.4643 17.4942C18.2913 18.0876 18.6839 18.6835 19.2794 18.8571C19.4092 18.8949 19.5451 18.8203 19.583 18.6905C19.6208 18.5607 19.5462 18.4248 19.4164 18.387C19.0373 18.2765 18.8491 17.9238 18.9344 17.6312C18.9722 17.5014 18.8976 17.3655 18.7678 17.3277Z", fill: "#AE5714" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.7679 17.3275C18.6381 17.2897 18.5022 17.3642 18.4643 17.494C18.379 17.7867 18.0308 17.983 17.6517 17.8725C17.5219 17.8347 17.386 17.9092 17.3482 18.039C17.3103 18.1689 17.3849 18.3048 17.5147 18.3426C18.1103 18.5162 18.7615 18.2245 18.9344 17.631C18.9723 17.5012 18.8977 17.3653 18.7679 17.3275Z", fill: "#AE5714" }),
            React.createElement("path", { d: "M17.78 16.2187C17.6338 16.9024 17.2734 17.0965 16.8973 17.016C16.5212 16.9356 16.2717 16.6111 16.4179 15.9274C16.5642 15.2437 16.9245 15.0496 17.3007 15.13C17.6768 15.2105 17.9263 15.535 17.78 16.2187Z", fill: "#AE5714" }),
            React.createElement("path", { d: "M21.344 17.3356C21.0937 17.9884 20.7077 18.1244 20.3485 17.9867C19.9894 17.849 19.7931 17.4897 20.0434 16.8369C20.2937 16.1841 20.6798 16.0482 21.039 16.1859C21.3981 16.3236 21.5943 16.6828 21.344 17.3356Z", fill: "#AE5714" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.9627 18.7486C14.73 19.7089 15.9227 20.4634 17.3569 20.8477C20.2916 21.6341 23.1259 20.5724 23.7898 18.0947C24.0539 17.1092 23.9086 16.1461 23.4531 15.2939C24.2558 16.2986 24.5929 17.5285 24.2534 18.7954C23.5895 21.2731 20.7552 22.3347 17.8205 21.5484C16.0531 21.0748 14.6523 20.0389 13.9627 18.7486Z", fill: "#EB8C00" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip-teamplayer" },
                React.createElement("rect", { width: "24", height: "24", fill: "white", transform: "translate(0.5 0.5)" })))));
};

var Icon$z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 16" }, props),
        React.createElement("path", { d: "M10.0002 7.33L15.0002 14H3.00018L8.00018 7.33V2H10.0002V7.33ZM12.9602 0H5.04018C4.62018 0 4.39018 0.48 4.65018 0.81L6.00018 2.5V6.67L0.200175 14.4C-0.289825 15.06 0.180175 16 1.00018 16H17.0002C17.8202 16 18.2902 15.06 17.8002 14.4L12.0002 6.67V2.5L13.3502 0.81C13.6102 0.48 13.3802 0 12.9602 0Z" })));
};

var Icon$y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React.createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React.createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$x = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear_ticketround)" }),
        React.createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React.createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React.createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear_ticketround", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#54DADE" }),
                React.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.0701 1.01H9.07007V3.01H15.0701V1.01ZM11.0701 14.01H13.0701V8.01H11.0701V14.01ZM19.1001 7.39L20.5201 5.97C20.0901 5.46 19.6201 4.98 19.1101 4.56L17.6901 5.98C16.1401 4.74 14.1901 4 12.0701 4C7.10007 4 3.07007 8.03 3.07007 13C3.07007 17.97 7.09007 22 12.0701 22C17.0501 22 21.0701 17.97 21.0701 13C21.0701 10.89 20.3301 8.94 19.1001 7.39ZM12.0701 20.01C8.20007 20.01 5.07007 16.88 5.07007 13.01C5.07007 9.14 8.20007 6.01 12.0701 6.01C15.9401 6.01 19.0701 9.14 19.0701 13.01C19.0701 16.88 15.9401 20.01 12.0701 20.01Z" })));
};

var Icon$v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M16.8196 4.04526C17.2184 2.78478 16.2774 1.5 14.9553 1.5C13.8754 1.5 13 2.37543 13 3.45534L13 7.25679C13 8.01243 13.6126 8.625 14.3682 8.625C14.9648 8.625 15.4927 8.2384 15.6727 7.66958L16.8196 4.04526Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M8.05539 4.04526C7.65652 2.78478 8.59753 1.5 9.91962 1.5C10.9995 1.5 11.875 2.37543 11.875 3.45534L11.875 7.25679C11.875 8.01243 11.2624 8.625 10.5067 8.625C9.91013 8.625 9.3823 8.2384 9.2023 7.66958L8.05539 4.04526Z", fill: "#FFD800" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.24713 8.9375L13.4374 8.9375V17.0625H7.96396C7.92764 17.0625 7.89183 17.0625 7.85651 17.0625C7.06169 17.0627 6.51444 17.0629 6.00729 16.9494C4.88983 16.6995 3.90253 16.0491 3.23171 15.1211C2.92726 14.6999 2.71136 14.1971 2.39779 13.4667C2.38385 13.4342 2.36972 13.4013 2.35539 13.368L2.34484 13.3434C2.19078 12.9849 2.05946 12.6793 1.96737 12.4255C1.87345 12.1667 1.79043 11.8847 1.78065 11.583C1.7455 10.4988 2.39693 9.50984 3.40701 9.11409C3.68809 9.00396 3.97989 8.96895 4.25478 8.95306C4.5243 8.93749 4.85692 8.93749 5.24713 8.9375ZM4.36295 10.8249C4.15337 10.837 4.09575 10.858 4.09101 10.8599C3.82001 10.9661 3.64524 11.2314 3.65467 11.5223C3.65483 11.5274 3.65831 11.5886 3.72992 11.7859C3.80127 11.9825 3.91061 12.238 4.0781 12.6278C4.4505 13.4945 4.5838 13.791 4.75127 14.0227C5.15376 14.5795 5.74615 14.9697 6.41662 15.1197C6.6956 15.1821 7.02062 15.1875 7.96396 15.1875H11.5624V10.8125H5.27387C4.84961 10.8125 4.57176 10.8129 4.36295 10.8249Z", fill: "#FFD800" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.637 10.8249C20.4282 10.8129 20.1503 10.8125 19.7261 10.8125H13.4375V15.1875H17.036C17.9793 15.1875 18.3043 15.1821 18.5833 15.1197C19.2538 14.9697 19.8462 14.5795 20.2487 14.0227C20.4161 13.791 20.5494 13.4945 20.9218 12.6278C21.0893 12.238 21.1987 11.9825 21.27 11.7859C21.3416 11.5886 21.3451 11.5274 21.3453 11.5223C21.3547 11.2314 21.1799 10.9661 20.9089 10.8599C20.9042 10.858 20.8466 10.837 20.637 10.8249ZM20.7452 8.95306C21.0201 8.96895 21.3118 9.00396 21.5929 9.11409C22.603 9.50984 23.2544 10.4988 23.2193 11.583C23.2095 11.8847 23.1265 12.1667 23.0326 12.4255C22.9405 12.6793 22.8092 12.9849 22.6551 13.3434L22.6446 13.368C22.6302 13.4013 22.6161 13.4342 22.6022 13.4667C22.2886 14.197 22.0727 14.6999 21.7682 15.1211C21.0974 16.0491 20.1101 16.6995 18.9927 16.9494C18.4855 17.0629 17.9383 17.0627 17.1434 17.0625C17.1081 17.0625 17.0723 17.0625 17.036 17.0625H11.5625V8.9375L19.7528 8.9375C20.143 8.93749 20.4756 8.93749 20.7452 8.95306Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M8.07961 10.8125H4.6577C4.61915 10.8125 4.58174 10.8125 4.5454 10.8125C4.39673 10.5329 4.3125 10.2138 4.3125 9.875C4.3125 9.53623 4.39673 9.21713 4.54539 8.9375C4.57317 8.9375 4.60124 8.9375 4.62961 8.9375L8.07961 8.9375C8.22827 9.21713 8.3125 9.53623 8.3125 9.875C8.3125 10.2138 8.22827 10.5329 8.07961 10.8125Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M8.4231 15.1875L9.18751 17.0104L9.06332 17.0625L7.23815 17.0625C7.0893 17.0626 6.94898 17.0626 6.81591 17.0619L6.01688 15.1564C6.27346 15.1844 6.63759 15.1875 7.3468 15.1875H8.4231Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M16.9204 10.8125H20.3423C20.3809 10.8125 20.4183 10.8125 20.4546 10.8125C20.6033 10.5329 20.6875 10.2138 20.6875 9.875C20.6875 9.53623 20.6033 9.21713 20.4546 8.9375C20.4268 8.9375 20.3988 8.9375 20.3704 8.9375L16.9204 8.9375C16.7717 9.21713 16.6875 9.53623 16.6875 9.875C16.6875 10.2138 16.7717 10.5329 16.9204 10.8125Z", fill: "#EB8C00" }),
        React.createElement("path", { d: "M16.5769 15.1875L15.8125 17.0104L15.9367 17.0625L17.7619 17.0625C17.9107 17.0626 18.051 17.0626 18.1841 17.0619L18.9831 15.1564C18.7266 15.1844 18.3624 15.1875 17.6532 15.1875H16.5769Z", fill: "#EB8C00" }),
        React.createElement("path", { d: "M10.9347 16.6152C10.8361 15.6854 11.5651 14.875 12.5002 14.875C13.4353 14.875 14.1642 15.6853 14.0656 16.6152L13.7087 19.9805C13.6547 20.4891 13.2257 20.875 12.7142 20.875H12.2861C11.7746 20.875 11.3456 20.4891 11.2917 19.9805L10.9347 16.6152Z", fill: "#EB8C00" }),
        React.createElement("path", { d: "M8.875 21.5312C8.875 20.5475 9.67249 19.75 10.6562 19.75H14.3438C15.3275 19.75 16.125 20.5475 16.125 21.5312C16.125 21.8592 15.8592 22.125 15.5312 22.125H9.46875C9.14083 22.125 8.875 21.8592 8.875 21.5312Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M6.88325 14.6524C5.89136 12.0714 5.39541 10.7809 5.56796 9.74082C5.75596 8.6076 6.43705 7.61619 7.42741 7.03418C8.33639 6.5 9.72434 6.5 12.5002 6.5C15.2761 6.5 16.664 6.5 17.573 7.03418C18.5634 7.61619 19.2445 8.6076 19.4325 9.74082C19.605 10.7809 19.1091 12.0714 18.1172 14.6524C17.6137 15.9625 17.362 16.6176 16.9476 17.1125C16.494 17.6543 15.9009 18.0617 15.2324 18.2908C14.6218 18.5 13.9146 18.5 12.5002 18.5C11.0858 18.5 10.3786 18.5 9.768 18.2908C9.09952 18.0617 8.5064 17.6543 8.0528 17.1125C7.63848 16.6176 7.38674 15.9625 6.88325 14.6524Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M17.903 7.86713C18.1516 8.78956 17.8918 9.94993 17.3722 12.2707L17.1257 13.372C16.8386 14.6541 16.6951 15.2952 16.4026 15.8048C15.9154 16.6532 15.1253 17.286 14.1908 17.5761C13.6297 17.7503 12.9728 17.7503 11.6589 17.7503C10.5622 17.7503 10.0139 17.7503 9.52467 17.6202C8.79145 17.4253 8.13341 17.02 7.63037 16.4569C7.76277 16.7161 7.89603 16.9258 8.05248 17.1127C8.50608 17.6545 9.0992 18.062 9.76768 18.291C10.3783 18.5002 11.0855 18.5002 12.4999 18.5002C13.9143 18.5002 14.6215 18.5002 15.2321 18.291C15.9006 18.062 16.4937 17.6545 16.9473 17.1127C17.3616 16.6178 17.6134 15.9627 18.1169 14.6526C19.1088 12.0716 19.6047 10.7811 19.4321 9.74103C19.2442 8.60781 18.5631 7.6164 17.5727 7.0344C17.572 7.034 17.5713 7.0336 17.5707 7.0332C17.7122 7.29512 17.8242 7.57465 17.903 7.86713Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M20.1942 7.55201C20.1249 7.816 19.7501 7.816 19.6808 7.55201L19.308 6.13133C19.2837 6.03869 19.2113 5.96634 19.1187 5.94202L17.698 5.56917C17.434 5.49988 17.434 5.12512 17.698 5.05584L19.1187 4.68298C19.2113 4.65867 19.2837 4.58632 19.308 4.49368L19.6808 3.073C19.7501 2.809 20.1249 2.809 20.1942 3.073L20.567 4.49368C20.5913 4.58632 20.6637 4.65867 20.7563 4.68298L22.177 5.05584C22.441 5.12512 22.441 5.49988 22.177 5.56917L20.7563 5.94202C20.6637 5.96634 20.5913 6.03869 20.567 6.13133L20.1942 7.55201Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M4.46705 4.12184C4.50969 3.95939 4.74031 3.95939 4.78295 4.12184L5.0124 4.99611C5.02736 5.05312 5.07188 5.09764 5.12889 5.1126L6.00316 5.34205C6.16561 5.38469 6.16561 5.61531 6.00316 5.65795L5.12889 5.8874C5.07188 5.90236 5.02736 5.94688 5.0124 6.00389L4.78295 6.87816C4.74031 7.04061 4.50969 7.04061 4.46705 6.87816L4.2376 6.00389C4.22264 5.94688 4.17812 5.90236 4.12111 5.8874L3.24684 5.65795C3.08439 5.61531 3.08439 5.38469 3.24684 5.34205L4.12111 5.1126C4.17812 5.09764 4.22264 5.05312 4.2376 4.99611L4.46705 4.12184Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M5.3257 21.0184C5.2884 21.1605 5.0866 21.1605 5.0493 21.0184L4.84853 20.2534C4.83543 20.2035 4.79648 20.1646 4.74659 20.1515L3.98161 19.9507C3.83946 19.9134 3.83946 19.7116 3.98161 19.6743L4.74659 19.4735C4.79648 19.4604 4.83543 19.4215 4.84853 19.3716L5.0493 18.6066C5.0866 18.4645 5.2884 18.4645 5.3257 18.6066L5.52647 19.3716C5.53957 19.4215 5.57852 19.4604 5.62841 19.4735L6.39339 19.6743C6.53554 19.7116 6.53554 19.9134 6.39339 19.9507L5.62841 20.1515C5.57852 20.1646 5.53957 20.2035 5.52647 20.2534L5.3257 21.0184Z", fill: "#FEED8D" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.13603 7.98393C8.40807 8.2437 8.418 8.67482 8.15822 8.94685L8.04567 9.06471C7.79436 9.32787 7.65414 9.67776 7.65414 10.0416L7.65414 10.2898C7.65414 10.6659 7.34921 10.9708 6.97306 10.9708C6.59692 10.9708 6.29199 10.6659 6.29199 10.2898L6.29199 10.0416C6.29199 9.32735 6.56725 8.64055 7.06056 8.12398L7.17311 8.00611C7.43289 7.73408 7.864 7.72415 8.13603 7.98393Z", fill: "#FEED8D" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.93527 2.21472C10.1387 2.409 10.1461 2.73142 9.95187 2.93487L9.86769 3.02302C9.67974 3.21983 9.57487 3.4815 9.57487 3.75363V3.93921C9.57487 4.22052 9.34682 4.44857 9.06551 4.44857C8.7842 4.44857 8.55615 4.22052 8.55615 3.93921V3.75363C8.55615 3.21944 8.76201 2.70579 9.13094 2.31946L9.21512 2.23131C9.4094 2.02786 9.73183 2.02044 9.93527 2.21472Z", fill: "#FEED8D" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.8469 2.21472C15.0503 2.409 15.0578 2.73142 14.8635 2.93487L14.7793 3.02302C14.5914 3.21983 14.4865 3.4815 14.4865 3.75363V3.93921C14.4865 4.22052 14.2584 4.44857 13.9771 4.44857C13.6958 4.44857 13.4678 4.22052 13.4678 3.93921V3.75363C13.4678 3.21944 13.6736 2.70579 14.0426 2.31946L14.1267 2.23131C14.321 2.02786 14.6434 2.02044 14.8469 2.21472Z", fill: "#FEED8D" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.789 9.61642C12.789 9.0473 13.2462 8.58594 13.8102 8.58594C14.4493 8.58594 14.9313 9.17163 14.814 9.80558L14.5186 11.4019C15.2601 11.7867 15.832 12.412 15.832 13.2088C15.832 13.9251 15.3629 14.5072 14.7441 14.8888C14.1184 15.2747 13.2798 15.5 12.375 15.5C11.4702 15.5 10.6316 15.2747 10.0059 14.8888C9.38712 14.5072 8.91797 13.9251 8.91797 13.2088C8.91797 12.4166 9.48346 11.7938 10.2182 11.4087L9.92155 9.80559C9.80423 9.17163 10.2863 8.58594 10.9254 8.58594C11.4894 8.58594 11.9466 9.04731 11.9466 9.61642L11.9466 10.9347C12.087 10.9235 12.23 10.9177 12.375 10.9177C12.515 10.9177 12.6532 10.9231 12.789 10.9336V9.61642Z", fill: "#FFAF00" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.789 9.15548C12.789 8.58636 13.2462 8.125 13.8102 8.125C14.4493 8.125 14.9313 8.71069 14.814 9.34464L14.5186 10.9409C15.2601 11.3257 15.832 11.9511 15.832 12.7479C15.832 13.4642 15.3629 14.0463 14.7441 14.4279C14.1184 14.8137 13.2798 15.0391 12.375 15.0391C11.4702 15.0391 10.6316 14.8137 10.0059 14.4279C9.38712 14.0463 8.91797 13.4642 8.91797 12.7479C8.91797 11.9557 9.48346 11.3329 10.2182 10.9478L9.92155 9.34465C9.80423 8.7107 10.2863 8.12501 10.9254 8.12501C11.4894 8.12501 11.9466 8.58637 11.9466 9.15548L11.9466 10.4738C12.087 10.4625 12.23 10.4567 12.375 10.4567C12.515 10.4567 12.6532 10.4621 12.789 10.4726V9.15548ZM11.6782 12.3681C11.6782 12.73 11.4783 13.0234 11.2317 13.0234C10.9851 13.0234 10.7852 12.73 10.7852 12.3681C10.7852 12.0061 10.9851 11.7127 11.2317 11.7127C11.4783 11.7127 11.6782 12.0061 11.6782 12.3681ZM13.5861 13.0234C13.8327 13.0234 14.0326 12.73 14.0326 12.368C14.0326 12.0061 13.8327 11.7127 13.5861 11.7127C13.3395 11.7127 13.1396 12.0061 13.1396 12.368C13.1396 12.73 13.3395 13.0234 13.5861 13.0234Z", fill: "#ED8103" })));
};

var Icon$u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        React.createElement("path", { d: "M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" })));
};

var Icon$t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M3.63 3.63C3.24 4.02 3.24 4.65 3.63 5.04L7.29 8.7L7 9H4C3.45 9 3 9.45 3 10V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V13.41L16.18 17.59C15.69 17.96 15.16 18.27 14.58 18.5C14.22 18.65 14 19.03 14 19.42C14 20.14 14.73 20.6 15.39 20.33C16.19 20 16.94 19.56 17.61 19.02L18.95 20.36C19.34 20.75 19.97 20.75 20.36 20.36C20.75 19.97 20.75 19.34 20.36 18.95L5.05 3.63C4.66 3.24 4.03 3.24 3.63 3.63ZM19 12C19 12.82 18.85 13.61 18.59 14.34L20.12 15.87C20.68 14.7 21 13.39 21 12C21 8.17 18.6 4.89 15.22 3.6C14.63 3.37 14 3.83 14 4.46V4.65C14 5.03 14.25 5.36 14.61 5.5C17.18 6.54 19 9.06 19 12ZM10.29 5.71L10.12 5.88L12 7.76V6.41C12 5.52 10.92 5.08 10.29 5.71ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V9.76L16.48 12.24C16.49 12.16 16.5 12.08 16.5 12Z" })));
};

var Icon$p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M3 10V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V6.41C12 5.52 10.92 5.07 10.29 5.7L7 9H4C3.45 9 3 9.45 3 10ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 4.45V4.65C14 5.03 14.25 5.36 14.6 5.5C17.18 6.53 19 9.06 19 12C19 14.94 17.18 17.47 14.6 18.5C14.24 18.64 14 18.97 14 19.35V19.55C14 20.18 14.63 20.62 15.21 20.4C18.6 19.11 21 15.84 21 12C21 8.16 18.6 4.89 15.21 3.6C14.63 3.37 14 3.82 14 4.45Z" })));
};

var Icon$o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Icon$n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M17.65 6.35C16.02 4.72 13.71 3.78 11.17 4.04C7.50002 4.41 4.48002 7.39 4.07002 11.06C3.52002 15.91 7.27002 20 12 20C15.19 20 17.93 18.13 19.21 15.44C19.53 14.77 19.05 14 18.31 14C17.94 14 17.59 14.2 17.43 14.53C16.3 16.96 13.59 18.5 10.63 17.84C8.41002 17.35 6.62002 15.54 6.15002 13.32C5.31002 9.44 8.26002 6 12 6C13.66 6 15.14 6.69 16.22 7.78L14.71 9.29C14.08 9.92 14.52 11 15.41 11H19C19.55 11 20 10.55 20 10V6.41C20 5.52 18.92 5.07 18.29 5.7L17.65 6.35Z" })));
};

var ExpandableButton = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React.createElement(IconButton, { "aria-label": "Hide or show expandable content", onClick: onClick },
        children,
        expanded ? React.createElement(Icon$14, { color: "invertedContrast" }) : React.createElement(Icon$17, { color: "invertedContrast" })));
};
ExpandableButton.defaultProps = {
    expanded: false,
};
var ExpandableLabel = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React.createElement(Button, { variant: "text", "aria-label": "Hide or show expandable content", onClick: onClick, endIcon: expanded ? React.createElement(Icon$14, { color: "primary" }) : React.createElement(Icon$17, { color: "primary" }) }, children));
};
ExpandableLabel.defaultProps = {
    expanded: false,
};

var Box = styled.div(templateObject_1$R || (templateObject_1$R = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), background, border, layout, position, space);
var templateObject_1$R;

var Flex = styled(Box)(templateObject_1$Q || (templateObject_1$Q = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), flexbox);
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
            return Icon$1p;
        case variants$2.WARNING:
            return Icon$1q;
        case variants$2.SUCCESS:
            return Icon$1r;
        case variants$2.INFO:
        default:
            return Icon$1o;
    }
};
var IconLabel = styled.div(templateObject_1$P || (templateObject_1$P = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled.div(templateObject_2$m || (templateObject_2$m = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled.div(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled(Flex)(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React.createElement(StyledAlert, null,
        React.createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React.createElement(Icon, { color: "currentColor", width: "24px" })),
        React.createElement(Details, { hasHandler: !!onClick },
            React.createElement(Text, { bold: true }, title),
            typeof children === "string" ? React.createElement(Text, { as: "p" }, children) : children),
        onClick && (React.createElement(CloseHandler, null,
            React.createElement(IconButton, { scale: "sm", variant: "text", onClick: onClick },
                React.createElement(Icon$13, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$P, templateObject_2$m, templateObject_3$b, templateObject_4$6;

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
var Input$1 = styled.input(templateObject_1$O || (templateObject_1$O = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
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

var StyledBalanceInput = styled(Box)(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.inputSecondary;
}, function (_a) {
    var theme = _a.theme, isWarning = _a.isWarning;
    return theme.shadows[isWarning ? "warning" : "inset"];
});
var StyledInput$1 = styled(Input$1)(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: right;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"], ["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: right;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var templateObject_1$N, templateObject_2$l;

var BalanceInput = function (_a) {
    var value = _a.value, _b = _a.placeholder, placeholder = _b === void 0 ? "0.0" : _b, onChange = _a.onChange, currencyValue = _a.currencyValue, inputProps = _a.inputProps, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, props = __rest(_a, ["value", "placeholder", "onChange", "currencyValue", "inputProps", "isWarning"]);
    return (React.createElement(StyledBalanceInput, __assign({ isWarning: isWarning }, props),
        React.createElement(StyledInput$1, __assign({ type: "number", value: value, onChange: onChange, placeholder: placeholder }, inputProps)),
        currencyValue && (React.createElement(Text, { fontSize: "12px", textAlign: "right", color: "textSubtle" }, currencyValue))));
};

var Separator = styled.div(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled.ul(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArray(__spreadArray([], accum), [item]);
        }
        return __spreadArray(__spreadArray([], accum), [
            React.createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React.createElement(Icon$15, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = Children.toArray(children).filter(function (child) { return isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React.createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React.createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$M, templateObject_2$k;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$3.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled.div(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$L;

var ButtonMenu$1 = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales$6.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$3.PRIMARY : _d, onItemClick = _a.onItemClick, children = _a.children;
    return (React.createElement(StyledButtonMenu, { variant: variant }, Children.map(children, function (child, index) {
        return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            scale: scale,
            variant: variant,
        });
    })));
};

var InactiveButton = styled(Button)(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (variant === variants$3.PRIMARY ? theme.colors.primary : theme.colors.textSubtle);
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants$3.PRIMARY : _c, as = _a.as, props = __rest(_a, ["isActive", "variant", "as"]);
    if (!isActive) {
        return React.createElement(InactiveButton, __assign({ forwardedAs: as, variant: "tertiary" }, props));
    }
    return React.createElement(Button, __assign({ as: as, variant: variant }, props));
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
var StyledCard = styled.div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$J;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React.createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled.div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$I;

var CardHeader = styled.div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  background: ", ";\n  ", "\n"], ["\n  background: ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "default" : _b;
    return theme.card.cardHeaderBackground[variant];
}, space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$H;

var CardFooter = styled.div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$G;

var StyledCardRibbon = styled.div(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ", ";\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform: ", ";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ", ";\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform: ",
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
    return (React.createElement(StyledCardRibbon, { variantColor: variantColor, ribbonPosition: ribbonPosition },
        React.createElement("div", { title: text }, text)));
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
var Checkbox = styled.input.attrs({ type: "checkbox" })(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale$3, getScale$3, function (_a) {
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
var DropdownContent = styled.div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
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
var Container$4 = styled.div(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React.createElement(Container$4, null,
        target,
        React.createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$D, templateObject_2$j;

var bunnyFall = keyframes(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"])));
var Bunny = styled.div(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"], ["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"])), function (_a) {
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
    var bunnies = __spreadArray([], Array(count)).map(function (_, index) { return (React.createElement(Bunny, { key: String(index), position: Math.random() * 100, iterations: iterations, duration: duration },
        React.createElement(Icon$V, { width: size, height: size }))); });
    return React.createElement("div", null, bunnies);
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
var Heading = styled(Text).attrs({ bold: true })(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
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

var Wrapper$3 = styled.div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
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
}, space);
var templateObject_1$A;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = useRef(null);
    useEffect(function () {
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
    return React.createElement(Wrapper$3, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled.img(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled.div(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = useRef(null);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    useEffect(function () {
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
    return (React.createElement(Wrapper$3, __assign({ ref: imgRef }, otherProps), isLoaded ? React.createElement(StyledImage, { src: src, alt: alt }) : React.createElement(Placeholder, null)));
};
var templateObject_1$z, templateObject_2$h;

var GridLayout$1 = styled.div(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
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

var GridLayout = styled(GridLayout$1)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$x;

var StyledLink$1 = styled(Text)(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React.createElement(StyledLink$1, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$w;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(Link, __assign({ external: true }, props),
        children,
        React.createElement(Icon$L, { color: "primary", ml: "4px" })));
};

var NotificationDotRoot = styled.span(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  display: inline-flex;\n  position: relative;\n"], ["\n  display: inline-flex;\n  position: relative;\n"])));
var Dot = styled.span(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"], ["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"])), function (_a) {
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
    return (React.createElement(NotificationDotRoot, null,
        Children.map(children, function (child) { return cloneElement(child, props); }),
        React.createElement(Dot, { show: show })));
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
var PancakeStack = styled.div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n\n  &:label:before {\n    content: none;\n  }\n\n  .pancakes {\n    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  .pancake {\n    background: #e27c31;\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    position: absolute;\n    transition: 0.4s ease;\n    top: 2px;\n    left: 4px;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n  }\n\n  .pancake:nth-child(1) {\n    background: ", ";\n    box-shadow: 0 ", " 0 ", "\n      ", ";\n  }\n\n  .pancake:nth-child(2) {\n    left: 0;\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3) {\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3):before,\n  .pancake:nth-child(3):after {\n    content: \"\";\n    position: absolute;\n    background: #ef8927;\n    border-radius: 20px;\n    width: 50%;\n    height: 20%;\n  }\n\n  .pancake:nth-child(3):before {\n    top: ", ";\n    left: ", ";\n  }\n\n  .pancake:nth-child(3):after {\n    top: ", ";\n    right: ", ";\n  }\n\n  .butter {\n    width: ", ";\n    height: ", ";\n    background: #fbdb60;\n    top: ", ";\n    left: ", ";\n    position: absolute;\n    border-radius: ", ";\n    box-shadow: 0 ", " 0 ", " #d67823;\n    transform: scale(0);\n    transition: 0.2s ease;\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n\n  &:label:before {\n    content: none;\n  }\n\n  .pancakes {\n    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  .pancake {\n    background: #e27c31;\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    position: absolute;\n    transition: 0.4s ease;\n    top: 2px;\n    left: 4px;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n  }\n\n  .pancake:nth-child(1) {\n    background: ", ";\n    box-shadow: 0 ", " 0 ", "\n      ", ";\n  }\n\n  .pancake:nth-child(2) {\n    left: 0;\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3) {\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3):before,\n  .pancake:nth-child(3):after {\n    content: \"\";\n    position: absolute;\n    background: #ef8927;\n    border-radius: 20px;\n    width: 50%;\n    height: 20%;\n  }\n\n  .pancake:nth-child(3):before {\n    top: ", ";\n    left: ", ";\n  }\n\n  .pancake:nth-child(3):after {\n    top: ", ";\n    right: ", ";\n  }\n\n  .butter {\n    width: ", ";\n    height: ", ";\n    background: #fbdb60;\n    top: ", ";\n    left: ", ";\n    position: absolute;\n    border-radius: ", ";\n    box-shadow: 0 ", " 0 ", " #d67823;\n    transform: scale(0);\n    transition: 0.2s ease;\n  }\n"])), getScale$2("pancakeSize"), getScale$2("pancakeSize"), getScale$2("pancakeThickness"), getScale$2("pancakeThickness"), function (_a) {
    var theme = _a.theme;
    return theme.pancakeToggle.handleBackground;
}, getScale$2("pancakeThickness"), getScale$2("pancakeThickness"), function (_a) {
    var theme = _a.theme;
    return theme.pancakeToggle.handleShadow;
}, getScale$2("pancakeTwoOffset"), getScale$2("pancakeThreeOffset"), getScale$2("butterSmearOneTop"), getScale$2("butterSmearOneLeft"), getScale$2("butterSmearTwoTop"), getScale$2("butterSmearTwoRight"), getScale$2("butterWidth"), getScale$2("butterHeight"), getScale$2("butterTop"), getScale$2("butterLeft"), getScale$2("butterRadius"), getScale$2("butterThickness"), getScale$2("butterThickness"));
var PancakeInput = styled.input(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n\n  &:focus + label {\n    box-shadow: ", ";\n  }\n\n  &:checked + label .pancakes {\n    transform: translateX(", ");\n  }\n\n  &:checked + label .pancake:nth-child(1) {\n    background: #e27c31;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(2) {\n    transform: scale(1);\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(3) {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n\n  &:checked + label .butter {\n    transform: scale(1);\n    transition-delay: 0.6s;\n  }\n"], ["\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n\n  &:focus + label {\n    box-shadow: ", ";\n  }\n\n  &:checked + label .pancakes {\n    transform: translateX(", ");\n  }\n\n  &:checked + label .pancake:nth-child(1) {\n    background: #e27c31;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(2) {\n    transform: scale(1);\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(3) {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n\n  &:checked + label .butter {\n    transform: scale(1);\n    transition-delay: 0.6s;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, getScale$2("travelDistance"), getScale$2("pancakeThickness"), getScale$2("pancakeThickness"));
var PancakeLabel = styled.label(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  display: inline-block;\n  border-radius: 50px;\n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n"], ["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  display: inline-block;\n  border-radius: 50px;\n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n"])), getScale$2("toggleWidth"), getScale$2("toggleHeight"), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$u, templateObject_2$f, templateObject_3$a;

var PancakeToggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales$3.MD : _b, props = __rest(_a, ["checked", "scale"]);
    return (React.createElement(PancakeStack, { scale: scale },
        React.createElement(PancakeInput, __assign({ id: props.id || "pancake-toggle", scale: scale, type: "checkbox", checked: checked }, props)),
        React.createElement(PancakeLabel, { scale: scale, checked: checked, htmlFor: props.id || "pancake-toggle" },
            React.createElement("div", { className: "pancakes" },
                React.createElement("div", { className: "pancake" }),
                React.createElement("div", { className: "pancake" }),
                React.createElement("div", { className: "pancake" }),
                React.createElement("div", { className: "butter" })))));
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

var Bar = styled.div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled.div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n"], ["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ",
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
}, variant$1({
    variants: styleVariants$1,
}), space);
var templateObject_1$t, templateObject_2$e;

var ProgressBunnyWrapper = styled.div(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
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
    return (React.createElement(StyledProgress, { variant: variant },
        showProgressBunny && (React.createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React.createElement(Icon$D, null))),
        React.createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React.createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
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
var Radio = styled.input.attrs({ type: "radio" })(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
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
}, space);
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
var SliderLabelContainer = styled.div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  bottom: 0;\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 30px);\n"], ["\n  bottom: 0;\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 30px);\n"])));
var SliderLabel = styled(Text)(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"], ["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"])), function (_a) {
    var progress = _a.progress;
    return progress;
});
var BunnyButt = styled.div(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  background: url(", ") no-repeat;\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  width: 15px;\n"], ["\n  background: url(", ") no-repeat;\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  width: 15px;\n"])), bunnyButt, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "grayscale(100%)" : "none");
});
var BunnySlider = styled.div(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 14px);\n"], ["\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 14px);\n"])));
var StyledInput = styled.input(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  cursor: ", ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n\n    background-color: transparent;\n    border: 0;\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"], ["\n  cursor: ", ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n\n    background-color: transparent;\n    border: 0;\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"])), getCursorStyle, getBaseThumbStyles, getBaseThumbStyles, getBaseThumbStyles);
var BarBackground = styled.div(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"], ["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return theme.colors[disabled ? "textDisabled" : "inputSecondary"];
});
var BarProgress = styled.div(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 18px;\n"], ["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 18px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "grayscale(100%)" : "none");
});
var templateObject_1$q, templateObject_2$d, templateObject_3$9, templateObject_4$5, templateObject_5$3, templateObject_6$1, templateObject_7$1;

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
    return (React.createElement(Box, __assign({ position: "relative", height: "48px" }, props),
        React.createElement(BunnyButt, { disabled: disabled }),
        React.createElement(BunnySlider, null,
            React.createElement(BarBackground, { disabled: disabled }),
            React.createElement(BarProgress, { style: { width: progressWidth }, disabled: disabled }),
            React.createElement(StyledInput, { name: name, type: "range", min: min, max: max, value: value, step: step, onChange: handleChange, isMax: isMax, disabled: disabled })),
        valueLabel && (React.createElement(SliderLabelContainer, null,
            React.createElement(SliderLabel, { progress: labelProgress }, displayValueLabel)))));
};

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = keyframes(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = keyframes(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled.div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, layout, space);
var Pulse = styled(Root)(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React.createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React.createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$p, templateObject_2$c, templateObject_3$8, templateObject_4$4, templateObject_5$2;

var Icon$m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 51 45" }, props),
        React.createElement("svg", { width: "51", height: "45", viewBox: "0 0 51 45", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.2235 2.33759C22.9992 2.36046 22.6091 2.4048 22.3566 2.4361C22.1042 2.46727 21.7141 2.51403 21.4898 2.53997C21.0918 2.58596 20.8642 2.62914 20.2914 2.76751C20.1372 2.80481 19.8504 2.87253 19.654 2.91814C18.6931 3.14134 18.4196 3.22246 17.8091 3.46521C17.6077 3.54519 17.4151 3.61073 17.381 3.61073C17.347 3.61073 17.1521 3.69122 16.948 3.7896C16.7439 3.88797 16.5667 3.96846 16.5541 3.96846C16.5131 3.96846 15.5769 4.491 15.4981 4.55782C15.4561 4.59347 15.3069 4.68597 15.1667 4.76326C15.0265 4.84056 14.9002 4.91849 14.8862 4.9365C14.8722 4.95452 14.5395 5.20186 14.1468 5.48626C13.4718 5.97507 12.3284 6.98528 12.0745 7.3172C12.0105 7.40075 11.8052 7.64158 11.6184 7.85239C11.4315 8.06319 11.24 8.30466 11.1928 8.38898C11.1458 8.47331 11.0169 8.68028 10.9066 8.84892C10.5775 9.3523 10.0457 10.4735 9.95536 10.8548C9.91992 11.0037 10.0489 11.0063 10.4978 10.8652C10.8258 10.7623 11.9446 10.6134 12.3982 10.6125L12.6383 10.612L13.0759 9.96044C13.9517 8.65639 14.6779 7.89941 15.4471 7.48865C15.6014 7.40638 15.7964 7.2974 15.8806 7.24655C16.0305 7.15584 16.8281 6.86646 17.1809 6.77473C18.1941 6.51128 19.4592 6.71264 20.7953 7.34991C23.7879 8.77751 26.7502 8.8617 29.5466 7.59878C31.2735 6.81906 31.7597 6.69296 32.8479 6.74304C34.7029 6.82839 36.4851 7.95562 37.6095 9.75437C37.6847 9.87472 37.7603 9.98472 37.7775 9.99877C37.7947 10.0128 37.8974 10.1552 38.0058 10.3152C38.2427 10.6649 38.2434 10.6653 38.8528 10.6949C39.3925 10.721 40.1539 10.8431 40.4473 10.9505C40.5531 10.9892 40.7224 11.0209 40.8238 11.0209H41.0079L40.9815 10.8237C40.952 10.6037 40.8856 10.4376 40.5593 9.7688C40.2784 9.19324 39.9893 8.67568 39.8742 8.5423C39.8256 8.48608 39.7111 8.32868 39.6196 8.19262C38.5941 6.66664 36.0857 4.69746 33.9575 3.74743C32.5046 3.09879 29.9349 2.44402 28.8072 2.43495C28.6249 2.43354 28.143 2.39917 27.7364 2.35867C26.9266 2.27806 23.9432 2.26413 23.2235 2.33759ZM35.653 14.8378C35.7021 14.8506 35.7824 14.8506 35.8315 14.8378C35.8805 14.8249 35.8404 14.8145 35.7422 14.8145C35.6441 14.8145 35.6039 14.8249 35.653 14.8378ZM36.4603 14.9703C36.4721 14.9782 36.5218 15.0156 36.5709 15.0532C36.6472 15.1119 36.6601 15.1097 36.6601 15.0388C36.6601 14.9878 36.6175 14.9559 36.5496 14.9559C36.4889 14.9559 36.4487 14.9624 36.4603 14.9703ZM38.2409 15.7991C38.2758 15.8413 38.3417 15.8731 38.3873 15.8699C38.4573 15.8648 38.4564 15.8603 38.3811 15.8405C38.332 15.8277 38.2919 15.7959 38.2919 15.7699C38.2919 15.7438 38.2661 15.7225 38.2346 15.7225C38.1951 15.7225 38.197 15.7461 38.2409 15.7991ZM39.2735 16.7062C39.2851 16.7413 39.3371 16.7783 39.3888 16.7884C39.4753 16.8052 39.4763 16.8 39.401 16.7245C39.303 16.6264 39.2441 16.6178 39.2735 16.7062ZM39.5733 17.0001C39.6184 17.0703 39.6968 17.136 39.7477 17.1461C39.8489 17.1662 39.804 17.1092 39.5926 16.949C39.4941 16.8743 39.4936 16.8758 39.5733 17.0001ZM41.9786 17.7903C41.9944 17.8876 42.075 18.1118 42.1579 18.2885C42.343 18.6834 42.6817 19.4922 42.8062 19.8364C42.8571 19.9769 42.9133 20.1149 42.9313 20.143C42.9491 20.1711 43.0853 20.5735 43.2338 21.0373C43.6263 22.263 43.6068 22.2395 44.0083 21.9732C44.3064 21.7755 44.3027 21.719 43.9484 21.0491C43.1776 19.5922 42.9237 19.087 42.8342 18.8318C42.5369 17.9848 41.8809 17.1861 41.9786 17.7903ZM8.51583 18.0082C8.42965 18.113 8.35916 18.2319 8.35916 18.2726C8.35916 18.3131 8.32882 18.3826 8.29172 18.427C8.25462 18.4714 8.1933 18.6111 8.15544 18.7376C8.11758 18.8641 7.86759 19.393 7.6 19.913C7.33242 20.433 7.02659 21.0276 6.9204 21.2343C6.67665 21.7089 6.6778 21.7713 6.93327 21.9328C7.22317 22.1162 7.32375 21.991 7.54978 21.1651C7.60357 20.9683 7.66961 20.7613 7.69625 20.7051C7.72302 20.6489 7.78116 20.4879 7.82539 20.3474C7.86976 20.2069 7.93834 20.0229 7.97799 19.9386C8.07933 19.7233 8.30523 19.1551 8.37446 18.942C8.40633 18.8437 8.52871 18.5681 8.64637 18.3295C8.76404 18.091 8.84945 17.8783 8.83619 17.8568C8.78329 17.7711 8.66486 17.8271 8.51583 18.0082ZM40.7004 18.942C40.7004 19.0404 40.7108 19.0806 40.7237 19.0315C40.7365 18.9823 40.7365 18.9018 40.7237 18.8526C40.7108 18.8034 40.7004 18.8437 40.7004 18.942ZM40.7004 23.0304C40.7004 23.1288 40.7108 23.169 40.7237 23.1198C40.7365 23.0706 40.7365 22.9901 40.7237 22.9409C40.7108 22.8918 40.7004 22.932 40.7004 23.0304ZM11.1638 24.7935C11.1638 24.8356 11.201 24.8701 11.2465 24.8701C11.3142 24.8701 11.3178 24.8562 11.2657 24.7935C11.2308 24.7513 11.1936 24.7168 11.183 24.7168C11.1724 24.7168 11.1638 24.7513 11.1638 24.7935ZM38.7508 25.8218C38.7508 25.8927 38.7637 25.8949 38.84 25.8363C38.8891 25.7986 38.9388 25.7613 38.9506 25.7533C38.9622 25.7454 38.922 25.7389 38.8613 25.7389C38.7934 25.7389 38.7508 25.7708 38.7508 25.8218ZM45.0727 25.8881C44.5553 25.9898 44.0241 26.3566 43.9754 26.6458C43.8923 27.1398 43.6748 27.8505 43.479 28.2678C43.2758 28.7012 42.575 29.725 42.4817 29.725C42.3796 29.725 42.1697 30.1008 42.2307 30.1744C42.3852 30.361 43.7101 30.6908 44.3184 30.6941C45.3269 30.6997 46.2592 30.216 46.7774 29.4184C47.0256 29.0365 46.9166 28.1931 46.4154 26.615C46.1704 25.8435 45.9386 25.7181 45.0727 25.8881ZM5.50548 25.9374C5.11883 26.0455 5.25026 29.4304 5.67618 30.3371C5.83923 30.684 6.62451 30.7263 7.73437 30.4477C8.40556 30.2793 8.56313 30.2168 8.56313 30.1189C8.56313 30.0657 8.04428 29.3395 7.95313 29.2651C7.85866 29.1881 7.48973 28.5714 7.32566 28.2161C7.1528 27.842 7.06879 27.5595 6.87183 26.6912C6.80987 26.4178 6.78463 26.3808 6.58512 26.2692C6.41238 26.1727 5.65183 25.875 5.63487 25.8973C5.63283 25.9001 5.57457 25.9182 5.50548 25.9374ZM18.8254 26.3377C18.7378 26.3693 18.745 26.4544 18.8351 26.4544C18.9196 26.4544 18.9864 26.37 18.9283 26.3371C18.9067 26.3248 18.8605 26.3252 18.8254 26.3377ZM31.8514 26.488C31.8659 26.5257 31.9326 26.5566 31.9997 26.5566C32.0668 26.5566 32.1217 26.5796 32.1217 26.6077C32.1217 26.6358 32.1562 26.6588 32.1982 26.6588C32.3457 26.6588 32.2726 26.5806 32.05 26.5004C31.8716 26.4361 31.8306 26.4335 31.8514 26.488ZM13.5349 26.5566C13.6758 26.6173 13.7644 26.6173 13.7644 26.5566C13.7644 26.5285 13.6898 26.5071 13.5987 26.509C13.4598 26.5121 13.4495 26.5198 13.5349 26.5566ZM37.1955 26.7099C37.1782 26.738 37.1222 26.761 37.0712 26.761C37.0202 26.761 36.95 26.7955 36.9151 26.8376C36.863 26.9004 36.8666 26.9143 36.9343 26.9143C36.9798 26.9143 37.017 26.8913 37.017 26.8632C37.017 26.8351 37.0716 26.8121 37.1383 26.8121C37.205 26.8121 37.2881 26.7776 37.323 26.7354C37.3749 26.6728 37.3718 26.6588 37.3068 26.6588C37.263 26.6588 37.2129 26.6818 37.1955 26.7099ZM24.2689 29.4507C24.1707 29.4629 23.9412 29.5091 23.7589 29.5535C23.5766 29.5978 23.2783 29.6552 23.096 29.6811C22.9137 29.7069 22.6958 29.7505 22.6116 29.7779C22.5275 29.8054 22.2636 29.8752 22.0252 29.9329C21.3562 30.0949 21.1317 30.156 20.4444 30.3627C20.0938 30.4682 19.6808 30.584 19.5266 30.6201C19.3723 30.6563 19.1199 30.7252 18.9656 30.7731C18.2899 30.9835 16.8038 31.3682 16.314 31.4595C16.1317 31.4936 15.8793 31.5427 15.7531 31.5688C15.2976 31.6628 14.4024 31.7692 14.0669 31.7692C13.6315 31.7692 13.5989 31.8309 13.8152 32.2446C14.3054 33.1816 13.9545 33.7535 13.1401 33.3453C11.9012 32.7241 9.64175 32.6459 8.65415 33.1899C8.56198 33.2406 8.37191 33.3246 8.23168 33.3762C8.09145 33.4279 7.88493 33.5313 7.77274 33.6059C7.66056 33.6805 7.52861 33.757 7.47953 33.7758C7.33765 33.8304 7.36748 34.0523 7.53053 34.1545C7.60765 34.2028 7.6784 34.2474 7.68758 34.2535C7.69689 34.2595 7.67751 34.3152 7.6445 34.3771C7.5958 34.4682 7.59745 34.4843 7.65304 34.4614C8.33978 34.1801 8.70132 34.4524 8.85009 35.3634C9.08478 36.8003 9.54346 37.7489 10.4027 38.5745C10.7284 38.8875 10.7202 39.1917 10.3885 39.1067L10.2714 39.0766L10.3905 39.1377C10.5434 39.2163 10.6736 39.1408 10.6951 38.961C10.7075 38.8571 10.6241 38.7355 10.2956 38.3785C9.6508 37.6778 9.18345 36.8527 9.0923 36.2545C9.07407 36.1345 9.03647 36.0077 9.0088 35.9725C8.97362 35.9277 8.98038 35.9087 9.03188 35.9087C9.07216 35.9087 9.18243 36.0122 9.27703 36.1386C9.37162 36.2651 9.47118 36.3686 9.49833 36.3686C9.54091 36.3686 9.86421 36.6415 10.2254 36.9822C10.424 37.1697 10.7014 37.3354 10.7325 37.285C10.7746 37.2168 11.0421 37.4742 11.1931 37.7281C11.2615 37.8435 11.3663 37.9815 11.4257 38.0347C11.4853 38.0881 11.3897 37.9148 11.2135 37.6497C10.6738 36.8379 10.3479 35.9407 10.3479 35.2677C10.3479 33.9376 11.7303 33.2312 12.3816 34.2284C12.5314 34.4576 12.7955 35.2444 12.7955 35.4612C12.7955 35.5181 12.8174 35.6478 12.8442 35.7495C12.871 35.851 12.9514 36.1872 13.0232 36.4964C13.2546 37.4944 14.1727 39.5408 14.5251 39.8437C14.6087 39.9156 14.7385 40.2163 14.7137 40.2808C14.6528 40.44 13.843 40.1697 13.5375 39.8883C13.4727 39.8286 13.3937 39.8312 13.431 39.8917C13.4473 39.9183 13.5692 39.9925 13.7018 40.0568C13.8344 40.1211 14.0284 40.2258 14.1331 40.2897C14.3565 40.4262 14.72 40.4488 14.7657 40.3292C14.8072 40.2212 14.9697 40.234 15.0902 40.3547C15.1463 40.411 15.2191 40.457 15.252 40.457C15.2847 40.457 15.3478 40.4868 15.3922 40.5234C15.4364 40.5598 15.5988 40.643 15.7531 40.708C15.9073 40.773 16.068 40.8468 16.11 40.8717C16.1521 40.8967 16.236 40.9386 16.2963 40.9649C16.3567 40.9912 16.4211 41.0372 16.4396 41.067C16.4579 41.0969 16.517 41.1213 16.5706 41.1213C16.6613 41.1213 16.7724 41.1642 17.3084 41.4061C17.7054 41.5853 17.8709 41.6317 18.0095 41.6026C18.1113 41.5812 18.1498 41.5934 18.1498 41.6468C18.1498 41.6966 18.2292 41.7297 18.3963 41.7496C18.5319 41.7657 18.7786 41.8285 18.9445 41.889C19.1103 41.9496 19.3228 42.0182 19.4168 42.0414C19.5106 42.0647 19.6368 42.1292 19.6973 42.1847C19.7576 42.2402 19.8873 42.3025 19.9855 42.3229C20.0836 42.3433 20.2213 42.3887 20.2914 42.4237C20.3616 42.4586 20.5337 42.5019 20.6739 42.5198C20.8141 42.5377 21.0469 42.5973 21.1912 42.6523C21.3354 42.7072 21.6337 42.7754 21.854 42.804C22.0744 42.8325 22.4268 42.8923 22.6371 42.9367C22.8475 42.9811 23.1917 43.0373 23.402 43.0614C24.7664 43.2179 24.9642 43.2277 26.2321 43.2015C27.4582 43.1762 28.1244 43.1237 30.2605 42.8838C30.6251 42.8429 31.1299 42.7881 31.3824 42.762C31.8255 42.7164 33.2224 42.4631 33.8026 42.3232C33.9579 42.2857 34.303 42.205 34.5694 42.1438C35.8131 41.8579 37.6597 41.2446 39.0567 40.6534C39.6685 40.3946 41.046 39.6952 41.3403 39.494C41.6082 39.3111 41.9257 39.1017 42.0888 39.0005C42.7731 38.5758 43.9068 37.5803 44.5623 36.8285C44.842 36.5077 45.3798 35.785 45.3798 35.7301C45.3798 35.7152 45.469 35.5711 45.5778 35.4098C46.132 34.5889 46.1234 34.3283 45.5423 34.3226C45.3642 34.3209 45.125 34.2683 44.5346 34.1014C44.1433 33.9907 43.6282 33.7809 43.0366 33.4914C41.1654 32.5755 39.1882 32.5137 37.6545 33.3233C36.9736 33.6827 36.7092 33.2497 37.0935 32.4044C37.398 31.7351 37.4455 31.7769 36.2522 31.6646C35.1222 31.5583 34.5371 31.4631 33.728 31.2538C33.2793 31.1378 32.7859 31.0127 32.6317 30.9758C32.4774 30.939 32.1906 30.8596 31.9943 30.7991C31.7979 30.7388 31.4562 30.6444 31.2347 30.5893C31.0134 30.5343 30.5545 30.3999 30.2149 30.2906C29.8754 30.1815 29.5058 30.0683 29.3936 30.0393C28.7195 29.8646 28.2805 29.7581 27.9658 29.6934C27.7695 29.653 27.4597 29.5832 27.2774 29.5385C26.9538 29.459 24.7282 29.3941 24.2689 29.4507ZM29.0928 31.9563C29.6254 32.5213 29.3887 32.7099 26.9957 33.6265C26.5588 33.7938 26.1575 34.1299 26.1564 34.3293C26.1539 34.7331 26.4358 34.6857 27.4049 34.1192C28.2524 33.6239 28.5349 33.6229 28.9663 34.1131C29.3701 34.5722 29.4473 34.9278 29.1898 35.1421C29.1201 35.2 29.0352 35.4105 28.9065 35.8441C28.8214 36.1315 28.4148 36.3662 27.999 36.3681C27.9332 36.3684 27.807 36.4002 27.7185 36.4386C27.6302 36.4771 27.3629 36.5954 27.1245 36.7013C26.703 36.8887 26.6831 36.8924 26.4056 36.8353C25.586 36.6668 24.9332 37.2951 25.3231 37.8771C25.56 38.2306 25.6087 38.2352 25.7261 37.9145C25.8337 37.621 26.1144 37.3096 26.306 37.2711C26.3832 37.2557 26.5726 37.1851 26.7268 37.1143C27.0505 36.966 27.3766 36.8827 27.6406 36.8809C27.7422 36.8802 27.9999 36.8225 28.2132 36.7528C29.1864 36.4344 29.748 36.5468 30.4517 37.201C30.8514 37.5724 30.8548 37.7654 30.476 38.5661C30.4028 38.7207 30.2976 39.0081 30.2423 39.2049C29.9306 40.3128 29.6246 40.7987 29.0033 41.1733C28.6254 41.4011 28.5837 41.3925 28.4402 41.0581C28.2676 40.6559 28.0236 40.6155 27.099 40.8365C26.0938 41.0768 26.0244 41.072 25.6816 40.7379C25.3929 40.4566 25.2728 40.1381 25.0548 39.0771C25.0057 38.8382 24.9494 38.6198 24.9295 38.5916C24.7815 38.3825 24.7102 37.8091 24.8016 37.5637C24.8986 37.3033 25.3744 36.7774 25.5128 36.7774C25.9873 36.7774 26.1648 36.4725 26.0152 35.914C25.6453 34.5337 25.6862 34.2906 26.3754 33.7753C26.7368 33.5051 26.736 33.4891 26.3468 33.1156C25.6598 32.4563 25.604 32.3036 26.0573 32.3247C26.2135 32.332 26.4313 32.3047 26.5416 32.2639C26.6519 32.2233 26.8912 32.1501 27.0735 32.1013C27.2558 32.0526 27.6 31.9469 27.8384 31.8666C28.5259 31.6349 28.8089 31.6551 29.0928 31.9563ZM24.2916 31.8943C25.0459 32.2192 25.4742 33.0238 25.1007 33.4145C24.932 33.591 24.8701 33.592 24.4357 33.4255C24.0209 33.2666 23.5988 33.251 23.2075 33.3802C22.7664 33.5257 22.7662 33.4017 23.2073 33.1748C23.6622 32.9409 23.708 32.9056 23.708 32.7898C23.708 32.6863 23.3014 32.3026 22.9665 32.09C22.8435 32.012 22.742 31.934 22.741 31.9169C22.7327 31.7787 23.9808 31.7605 24.2916 31.8943ZM16.3941 32.6413C16.5645 32.8018 16.6091 32.9801 16.6687 33.7367C16.7329 34.5544 16.8048 35.1088 16.9074 35.5765C16.9505 35.7732 17.0057 36.0303 17.0302 36.1478C17.3065 37.4794 18.3851 39.805 19.2449 40.9233C19.3017 40.997 19.394 41.1211 19.4501 41.199C19.5062 41.2769 19.6037 41.4107 19.6668 41.4964C20.3016 42.3584 18.3568 41.7846 17.028 40.7177C14.9566 39.0546 14.0369 36.1417 14.824 33.7367C15.1384 32.7762 15.9419 32.2156 16.3941 32.6413ZM35.2096 32.581C35.8035 32.8513 36.2491 33.8419 36.3274 35.0654C36.5021 37.797 35.052 40.3179 32.6317 41.4907C31.2359 42.1669 30.8045 42.046 31.469 41.1649C32.2659 40.1079 32.9497 38.8814 33.3276 37.8306C33.931 36.1532 34.057 35.5849 34.2341 33.7434C34.3486 32.5538 34.57 32.29 35.2096 32.581ZM39.8902 33.9495C40.5655 34.3676 40.7635 35.444 40.3374 36.3811C40.2782 36.5117 40.2296 36.6315 40.2296 36.6474C40.2296 37.2182 38.6692 39.0805 37.629 39.7511C36.2803 40.6205 35.902 40.5763 36.5103 39.6202C37.3179 38.3512 37.7229 37.3176 38.0649 35.6531C38.2124 34.935 38.2823 34.6865 38.4146 34.4095C38.7038 33.8041 39.3367 33.6067 39.8902 33.9495ZM43.1424 34.4236C44.1836 34.8858 44.1245 36.2104 43.0135 37.3144C42.6185 37.707 41.5693 38.5661 41.485 38.5661C41.4701 38.5661 41.3793 38.6196 41.2832 38.6849C40.4137 39.2763 39.8503 39.177 40.4988 38.5467C40.9394 38.1185 41.2513 37.6986 41.4735 37.2342C41.8039 36.5436 41.8914 36.2599 42.042 35.3914C42.2007 34.476 42.5563 34.1633 43.1424 34.4236ZM24.1223 34.6115C24.3709 34.8503 24.3794 34.965 24.1866 35.4772C23.8626 36.3385 23.928 36.3111 24.7112 35.2589C25.1853 34.6221 25.3119 34.4809 25.3493 34.5478C25.3826 34.6074 25.3613 34.6783 25.2742 34.7971C25.2071 34.8885 24.8274 35.6187 24.43 36.4197L23.7076 37.8762L23.6794 38.4894C23.664 38.8267 23.6434 39.5511 23.6339 40.0992C23.6242 40.6473 23.5991 41.1418 23.5779 41.198C23.4527 41.5307 23.2121 41.5704 23.0365 41.2874C22.9205 41.1006 22.918 41.0691 22.9313 40.0353C22.9389 39.4521 22.9261 38.9749 22.9028 38.9749C22.8167 38.9749 22.6932 39.1129 22.4264 39.5071C22.008 40.1252 21.8078 40.1959 21.4473 39.8533C21.2423 39.6583 21.1535 39.4115 21.1425 39.006L21.1328 38.6537L21.4388 38.3931C22.0826 37.8446 22.5036 37.372 22.7263 36.948C23.0349 36.3607 23.0143 36.0748 22.6839 36.3554C21.6374 37.2443 21.0127 37.1579 20.3097 36.0275C20.0344 35.5848 20.0502 35.5176 20.3974 35.6547C20.8229 35.8228 20.8047 35.8275 22.1557 35.1951C22.3818 35.0893 22.6551 34.9248 22.7629 34.8297C23.2738 34.3791 23.7934 34.2958 24.1223 34.6115ZM7.35218 34.6438C6.85704 35.1574 6.85946 36.1287 7.35741 36.7921C7.79301 37.3727 8.92798 38.3456 9.60848 38.7217C9.77675 38.8147 9.97881 38.9353 10.0576 38.9896C10.1364 39.0439 10.2122 39.0768 10.2264 39.0627C10.2404 39.0485 10.1187 38.9618 9.95574 38.8699C9.66712 38.707 8.97107 38.2619 8.92008 38.2076C8.90605 38.1926 8.74504 38.0625 8.56224 37.9183C7.06726 36.7396 6.63178 35.5302 7.39055 34.6642C7.59312 34.4329 7.56813 34.4197 7.35218 34.6438ZM27.7874 34.7115C27.6612 34.7466 27.424 34.812 27.2605 34.8569C26.6955 35.012 26.6277 35.1232 26.8409 35.5448C26.9932 35.8459 27.0018 35.8484 27.349 35.6818C27.7334 35.4974 28.0936 35.13 28.0926 34.9231C28.0913 34.6677 28.0495 34.6389 27.7874 34.7115ZM24.3892 35.5467C24.2884 35.7657 24.2179 35.8141 24.2179 35.6643C24.2179 35.57 24.423 35.2796 24.462 35.3187C24.4741 35.3308 24.4414 35.4334 24.3892 35.5467ZM22.7954 36.4859C22.7299 36.5516 22.6635 36.5008 22.7121 36.4223C22.7308 36.3919 22.7696 36.3814 22.798 36.3991C22.8329 36.4206 22.832 36.4492 22.7954 36.4859ZM28.6934 36.4562C28.6168 36.4679 28.4791 36.4681 28.3874 36.4568C28.2958 36.4454 28.3585 36.4358 28.5268 36.4356C28.695 36.4353 28.77 36.4446 28.6934 36.4562ZM27.5796 36.7288C27.5446 36.7504 27.4835 36.7555 27.4436 36.74C27.3875 36.7185 27.3854 36.7031 27.4342 36.6728C27.4692 36.6512 27.5304 36.6461 27.5703 36.6616C27.6264 36.683 27.6284 36.6985 27.5796 36.7288ZM26.4616 37.033C26.4616 37.0611 26.4271 37.0841 26.3851 37.0841C26.343 37.0841 26.3086 37.0611 26.3086 37.033C26.3086 37.0049 26.343 36.9819 26.3851 36.9819C26.4271 36.9819 26.4616 37.0049 26.4616 37.033ZM28.64 37.4349C28.1432 37.7204 28.0302 38.0117 28.3738 38.1216C28.8531 38.2751 28.9053 38.8201 28.4621 39.0461C27.9157 39.3249 27.7991 39.7889 28.2388 39.9352C28.3951 39.9872 28.4909 40.0603 28.5626 40.1819C28.6857 40.3912 28.7937 40.4038 28.8385 40.2142C28.8567 40.1369 28.9237 39.9127 28.9872 39.7159C29.0508 39.5192 29.1407 39.1397 29.187 38.8727C29.2333 38.6057 29.2929 38.3166 29.3197 38.2303C29.4075 37.9459 29.3768 37.7678 29.2 37.5354C28.9949 37.2659 28.9486 37.2576 28.64 37.4349ZM29.0334 37.4983C28.9978 37.556 28.8582 37.5584 28.8582 37.5015C28.8582 37.4295 28.9156 37.3963 28.9904 37.4251C29.0296 37.4401 29.0489 37.4731 29.0334 37.4983ZM26.0588 37.8533C25.7438 38.1689 25.7419 38.4015 26.0438 39.672C26.159 40.1571 26.1811 40.2014 26.3062 40.2014C26.467 40.2014 27.0583 40.0003 27.1214 39.9241C27.1992 39.8302 27.1384 39.486 27.044 39.486C26.6664 39.486 26.1556 39.1127 26.1556 38.8367C26.1556 38.6707 26.1597 38.6675 26.3723 38.6738C27.2263 38.6987 27.4661 37.9622 26.6631 37.7804C26.1993 37.6755 26.2414 37.6704 26.0588 37.8533ZM11.5685 38.2347C11.7582 38.4976 12.6985 39.4112 12.9485 39.5757C13.1028 39.677 13.2576 39.7816 13.2927 39.8081C13.3278 39.8346 13.3564 39.8428 13.3564 39.8263C13.3564 39.8098 13.213 39.7 13.0377 39.5822C12.8624 39.4644 12.4437 39.0902 12.1071 38.7506C11.7706 38.411 11.5282 38.1788 11.5685 38.2347ZM26.1556 39.208C26.1556 39.2485 26.1351 39.2816 26.1101 39.2816C26.0537 39.2816 25.9989 39.1489 26.0387 39.1091C26.0833 39.0644 26.1556 39.1254 26.1556 39.208ZM22.8086 39.3071C22.7924 39.3493 22.7587 39.3838 22.7336 39.3838C22.7086 39.3838 22.6881 39.3493 22.6881 39.3071C22.6881 39.2649 22.7218 39.2304 22.7629 39.2304C22.8086 39.2304 22.8264 39.2605 22.8086 39.3071Z", fill: "#C8312E" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.7674 7.67799C17.7113 7.6914 17.5622 7.72692 17.436 7.75682C15.984 8.101 15.0128 8.85313 13.8981 10.4968C13.7356 10.7365 13.7696 10.8675 13.9943 10.8675C14.3305 10.8675 15.7081 11.4049 16.3422 11.7835C16.9286 12.1335 17.3775 12.4488 18.465 13.2752C19.8178 14.303 21.5167 15.3664 21.7958 15.3601C21.8906 15.3579 21.8895 15.3539 21.7831 15.3024C21.72 15.2718 21.6684 15.2274 21.6684 15.2036C21.6684 15.1797 21.6339 15.1603 21.5919 15.1603C21.5498 15.1603 21.5154 15.1369 21.5154 15.1082C21.5154 15.0789 21.4542 15.0681 21.3752 15.0835C21.2713 15.1037 21.2603 15.0996 21.3327 15.0679C21.4208 15.0295 21.4106 15.0104 21.2307 14.876C19.6956 13.7289 17.6521 11.8034 17.4256 11.2906C16.9624 10.2409 18.2431 9.7656 19.8771 10.3809C21.3214 10.9246 22.0395 11.3096 22.6135 11.8478C23.5186 12.6964 23.963 13.6245 23.963 14.6666C23.963 15.4602 24.2481 16.0394 24.8627 16.4944C25.1756 16.7261 25.2236 16.8925 25.006 16.9919C24.6998 17.1317 22.4435 17.0297 21.2604 16.8225C21.022 16.7807 20.8212 16.7461 20.8142 16.7456C20.8072 16.745 20.8015 16.779 20.8015 16.8212C20.8015 16.8634 20.8248 16.8978 20.8534 16.8978C20.9128 16.8978 21.6172 17.9503 21.6176 18.0398C21.6179 18.0722 21.6547 18.1678 21.6997 18.2521C22.1822 19.1573 22.2785 21.3591 21.8689 22.1226C21.8428 22.1714 21.8213 22.2408 21.8213 22.2768C21.8213 22.3129 21.7343 22.5145 21.6278 22.7248C21.1762 23.6172 20.7038 24.2295 20.0876 24.722C19.806 24.9472 18.9236 25.4834 18.8347 25.4834C18.7991 25.4834 18.7051 25.5157 18.6256 25.5553C18.1751 25.7798 17.8665 25.8485 16.7704 25.9684C16.4964 25.9983 15.5128 25.8861 15.2433 25.7942C15.1732 25.7703 15.0125 25.7208 14.8863 25.6841C14.7601 25.6473 14.6116 25.5871 14.5563 25.5503C14.501 25.5135 14.4177 25.4834 14.3713 25.4834C14.3249 25.4834 14.2584 25.4489 14.2234 25.4067C14.1885 25.3646 14.1169 25.3301 14.0642 25.3301C14.0116 25.3301 13.9685 25.312 13.9685 25.2902C13.9685 25.2682 13.9054 25.2257 13.8282 25.1958C13.2473 24.9699 11.7248 23.3553 11.7248 22.9651C11.7248 22.9213 11.7066 22.878 11.6843 22.8685C11.5749 22.8225 11.2159 21.7851 11.2152 21.5131C11.215 21.4234 11.1919 21.3357 11.1639 21.3184C11.1331 21.2993 11.1129 20.944 11.1129 20.424C11.1129 19.9041 11.1331 19.5488 11.1639 19.5297C11.1919 19.5123 11.215 19.4247 11.2152 19.335C11.216 19.0079 11.5173 18.1947 11.8107 17.7273C11.9036 17.5792 11.9798 17.4459 11.9798 17.4313C11.9798 17.1553 13.6173 15.6202 13.9116 15.6202C13.9428 15.6202 13.9687 15.603 13.9691 15.5819C13.9696 15.5483 14.0734 15.495 14.5039 15.3072C15.0096 15.0867 15.8374 14.9058 16.3438 14.9052C16.5145 14.9049 16.6693 14.8896 16.6879 14.8709C16.727 14.8316 16.4462 14.6493 16.3464 14.6493C16.3094 14.6493 16.1207 14.5693 15.927 14.4715C14.6112 13.8076 12.2851 14.2357 11.279 15.327C11.1527 15.4641 9.48111 18.8006 9.48111 18.9157C9.48111 18.9304 9.42375 19.0617 9.35363 19.2074C9.28352 19.353 9.22615 19.4902 9.22615 19.5123C9.22615 19.5344 9.17197 19.6738 9.10581 19.8222C8.90273 20.277 8.86334 20.3786 8.6549 20.9862C8.34551 21.8886 8.05395 22.9388 8.09386 23.0072C8.11362 23.0412 8.36195 23.319 8.6456 23.6246C8.92924 23.9302 9.23903 24.2713 9.334 24.3827C9.76948 24.8934 10.4261 25.5543 10.8922 25.9509C11.705 26.6424 12.4609 27.0041 13.6625 27.2762C14.06 27.3663 16.059 27.3989 16.5818 27.3239C17.4347 27.2014 17.6209 27.1735 17.9222 27.1233C18.0914 27.0951 18.3667 27.0345 18.5341 26.9888C18.7014 26.9429 18.9301 26.8833 19.0422 26.8562C20.4762 26.5104 22.2873 25.6168 23.6331 24.5908C23.9805 24.326 24.3515 24.0854 24.4579 24.0558C25.4608 23.7766 25.5142 24.8282 24.5408 25.6878C23.8223 26.3223 22.6752 27.1872 22.0673 27.5528C21.413 27.9462 21.1269 28.1023 20.521 28.3963C19.4662 28.9081 18.923 29.1094 17.5635 29.4919C17.4232 29.5313 17.1134 29.5987 16.8751 29.6417C16.6367 29.6847 16.281 29.7497 16.0847 29.7862C15.5949 29.8776 13.4545 29.8754 12.9741 29.7832C12.5464 29.701 11.4856 29.433 11.3423 29.3708C11.2863 29.3465 11.16 29.2973 11.0619 29.2614C10.2686 28.9723 8.70794 27.9976 8.35927 27.5738C8.12981 27.2949 8.06938 27.4499 8.25321 27.8457C8.76556 28.9497 9.81486 29.9196 10.4294 29.8575C11.0804 29.7916 11.9332 30.0807 12.3906 30.5224C12.9849 31.0962 15.0467 30.8529 18.9403 29.7493C19.5012 29.5902 20.0289 29.4414 20.1131 29.4185C20.1972 29.3955 20.5185 29.3041 20.827 29.2153C21.4325 29.0409 22.4255 28.7979 22.9177 28.7035C23.086 28.6713 23.304 28.625 23.4021 28.6006C23.8562 28.4883 24.6823 28.4221 25.5948 28.4252C26.531 28.4283 26.8502 28.4589 27.8895 28.6461C28.1732 28.6972 29.9969 29.1749 30.4136 29.3073C30.5819 29.3607 30.8572 29.4438 31.0255 29.4921C31.1938 29.5404 31.3888 29.6003 31.459 29.6253C31.7992 29.7462 33.7696 30.2656 34.748 30.4921C35.5179 30.6705 36.2382 30.757 37.1727 30.7834L38.1695 30.8118L38.4596 30.5749C39.1294 30.0282 39.5317 29.8783 40.3303 29.8783C41.1551 29.8783 41.9948 29.1527 42.6205 27.8992C42.8933 27.3525 42.8947 27.2453 42.6258 27.4896C41.595 28.4261 39.5055 29.5717 38.8282 29.5717C38.7848 29.5717 38.6178 29.6046 38.4569 29.6447C34.8755 30.5382 29.2364 28.6324 26.1788 25.4951C25.2853 24.5783 25.6162 23.5935 26.6247 24.1681C26.9167 24.3344 27.0264 24.4131 27.5032 24.7981C28.724 25.7837 31.534 26.9708 32.9377 27.0938C33.092 27.1073 33.4936 27.1533 33.8301 27.1961C37.7104 27.689 39.1274 27.1791 41.5598 24.4149C41.7678 24.1787 41.9609 23.9602 41.9889 23.9294C42.8737 22.9604 42.8663 22.9716 42.7802 22.7018C42.7527 22.6155 42.6257 22.1939 42.498 21.765C42.3008 21.103 42.0361 20.3364 41.8675 19.9386C41.3211 18.6501 40.0395 15.9694 39.7143 15.4347C39.6317 15.2988 38.9239 14.7515 38.8308 14.7515C38.8138 14.7515 38.7143 14.6976 38.6097 14.6318C37.5098 13.9392 35.525 13.9616 34.4617 14.6788C34.319 14.775 34.2219 14.8562 34.2457 14.8594C34.2695 14.8626 34.4038 14.8719 34.544 14.8801C35.1814 14.9176 36.0004 15.1227 36.5944 15.3936C37.2692 15.7014 38.3173 16.5287 38.5969 16.9745C38.6498 17.0588 38.7436 17.1819 38.8053 17.2479C39.1075 17.5717 39.6688 18.8729 39.6688 19.2498C39.6688 19.3222 39.6933 19.406 39.7231 19.4359C39.797 19.51 39.797 21.338 39.7231 21.4122C39.6933 21.442 39.668 21.5482 39.6671 21.648C39.6642 21.9619 39.2149 23.0576 38.9729 23.341C38.9349 23.3854 38.9039 23.4382 38.9039 23.4582C38.9039 23.5868 38.0818 24.4805 37.6482 24.8232C37.4701 24.9639 36.594 25.4834 36.5348 25.4834C36.5034 25.4834 36.3882 25.5291 36.2787 25.5851C36.1692 25.641 35.9979 25.7002 35.8981 25.7165C35.7984 25.7329 35.671 25.767 35.6149 25.7923C35.3593 25.9075 34.4418 25.9899 33.9321 25.9433C33.0669 25.8644 32.8641 25.8166 32.1984 25.5356C30.9828 25.0225 30.0656 24.2059 29.4708 23.107C29.3795 22.9384 29.2846 22.7786 29.26 22.7518C29.2354 22.7251 29.2153 22.6647 29.2153 22.6176C29.2153 22.5704 29.1809 22.5032 29.1388 22.4682C29.0967 22.4332 29.0623 22.343 29.0623 22.2678C29.0623 22.1925 29.0418 22.1091 29.0168 22.0824C28.801 21.8523 28.7073 19.8006 28.8837 19.1683C29.1385 18.2551 29.7813 17.0512 30.1569 16.7836C30.2401 16.7244 29.9902 16.7399 29.5467 16.8218C28.3781 17.0374 26.0875 17.1305 25.8611 16.9716C25.6884 16.8503 25.7214 16.7129 25.9645 16.5404C26.6817 16.0314 26.8856 15.6219 26.9693 14.5215C27.1148 12.6099 28.3362 11.3451 30.9235 10.4264C32.5859 9.83612 33.7094 10.126 33.5273 11.0983C33.44 11.5649 32.3 12.7262 30.4901 14.1921C30.1676 14.4533 29.8922 14.6813 29.8782 14.6988C29.8642 14.7163 29.7047 14.8446 29.5237 14.9839C28.9963 15.3896 29.0218 15.3654 29.1394 15.35C29.2494 15.3356 29.7818 15.0688 30.0939 14.8717C30.1985 14.8055 30.2986 14.7515 30.3165 14.7515C30.3965 14.7515 32.0623 13.5933 32.7083 13.0885C34.3913 11.7734 36.1304 10.8749 37.0061 10.8684C37.2151 10.8669 37.1819 10.732 36.8591 10.2724C35.628 8.51993 34.3709 7.72437 32.7338 7.66151C31.9317 7.63059 31.5736 7.72117 30.2606 8.2869C26.6748 9.83204 24.1608 9.8268 20.5386 8.26671C19.2996 7.73305 18.3668 7.5349 17.7674 7.67799ZM33.1829 7.79719C33.193 7.8276 33.2969 7.85276 33.4136 7.85315C33.6437 7.85404 33.976 7.95255 34.0714 8.04824C34.1042 8.08107 34.2048 8.1079 34.295 8.1079C34.3852 8.1079 34.4666 8.12515 34.4761 8.14623C34.4854 8.16731 34.5848 8.23055 34.697 8.28677C35.1971 8.53718 35.9959 9.18876 35.9971 9.34718C35.9972 9.36826 36.0317 9.38551 36.0738 9.38551C36.1159 9.38551 36.1503 9.41809 36.1503 9.45795C36.1503 9.49769 36.1675 9.53793 36.1885 9.54738C36.3815 9.63324 37.0901 10.711 36.9766 10.7459C36.9288 10.7607 36.8498 10.7941 36.8011 10.8201C36.7524 10.8462 36.6204 10.8675 36.5079 10.8675C36.3953 10.8675 36.3033 10.8887 36.3033 10.9146C36.3033 10.9405 36.2287 10.9763 36.1375 10.9943C35.983 11.0246 35.8257 11.0812 35.6387 11.1737C35.5957 11.1949 35.4867 11.2285 35.3965 11.2484C35.3062 11.2682 35.2324 11.3056 35.2324 11.3316C35.2324 11.3574 35.1958 11.3786 35.1511 11.3786C35.1063 11.3786 34.9973 11.4303 34.909 11.4936C34.8207 11.5568 34.6795 11.6459 34.5953 11.6916C34.511 11.7372 34.3617 11.8238 34.2636 11.8839C34.1654 11.9441 34.0449 12.0072 33.9958 12.024C33.9468 12.041 33.9066 12.0751 33.9066 12.1C33.9066 12.1248 33.8777 12.1451 33.8424 12.1451C33.807 12.1451 33.7163 12.2026 33.6406 12.2729C33.565 12.3432 33.4849 12.4011 33.4626 12.4014C33.4404 12.4019 33.3503 12.4652 33.2623 12.542C32.9523 12.8131 32.8597 12.8872 32.7096 12.9843C32.6262 13.0382 32.5114 13.126 32.4546 13.1794C32.3979 13.2326 32.2768 13.3226 32.1856 13.3792C32.0945 13.4358 32.0199 13.5034 32.0199 13.5292C32.0199 13.555 31.9954 13.5761 31.9654 13.5761C31.916 13.5761 31.5706 13.8127 31.51 13.8883C31.4583 13.9526 31.255 13.9917 31.255 13.9372C31.255 13.9072 31.2292 13.8827 31.1978 13.8827C31.1586 13.8827 31.1609 13.9074 31.205 13.9606C31.2405 14.0034 31.2605 14.0451 31.2495 14.0531C30.9948 14.2403 30.69 14.4461 30.5856 14.5016C30.5118 14.5407 30.3273 14.6555 30.1755 14.7568C29.607 15.136 29.2677 15.2304 29.7391 14.8781C29.8857 14.7685 30.1827 14.5341 30.3991 14.3575C30.6154 14.1806 30.808 14.036 30.827 14.036C30.846 14.036 30.9234 13.9728 30.999 13.8955C31.0746 13.8182 31.2032 13.6991 31.2849 13.6307C31.3667 13.5625 31.5615 13.3958 31.7179 13.2602C31.8743 13.1248 32.0284 13.0139 32.0604 13.0139C32.1474 13.0139 32.0752 13.1589 31.9719 13.1918C31.9226 13.2075 31.8564 13.2774 31.8247 13.3471C31.7931 13.4167 31.7373 13.4739 31.7008 13.4739C31.6219 13.4739 31.4392 13.6755 31.4805 13.7169C31.4963 13.7328 31.5514 13.7077 31.6029 13.6609C31.6544 13.6143 31.7234 13.5761 31.7561 13.5761C31.789 13.5761 31.8159 13.5575 31.8159 13.5349C31.8159 13.4841 32.4947 12.9628 32.561 12.9628C32.5874 12.9628 32.6461 12.9226 32.6912 12.8734C32.9063 12.6391 33.5451 12.1451 33.6332 12.1451C33.6714 12.1451 33.7026 12.1221 33.7026 12.094C33.7026 12.0659 33.7339 12.0429 33.772 12.0429C33.8101 12.0429 33.9455 11.9509 34.073 11.8385C34.2005 11.7261 34.3304 11.6341 34.3616 11.6341C34.393 11.6341 34.5095 11.5766 34.6205 11.5063C34.7315 11.4361 34.8402 11.379 34.8617 11.3793C34.923 11.3806 35.4598 11.1021 35.4788 11.0592C35.4883 11.0381 35.5571 11.0201 35.6318 11.0191C35.7067 11.018 35.8252 10.9843 35.8953 10.9442C35.9654 10.9041 36.0845 10.8703 36.16 10.8693C36.2354 10.8683 36.3114 10.8445 36.3288 10.8164C36.3461 10.7883 36.4138 10.7653 36.4791 10.7653C36.6934 10.7653 36.8574 10.5884 36.7479 10.4756C36.5726 10.295 36.4754 10.1578 36.3771 9.952C36.3224 9.83778 36.2527 9.74414 36.2221 9.74388C36.1915 9.7435 36.1231 9.66275 36.0702 9.56438C36.0173 9.466 35.9531 9.38551 35.9273 9.38551C35.8789 9.38551 35.8207 9.33339 35.4409 8.94883C35.3171 8.82362 35.1961 8.72116 35.172 8.72116C35.1478 8.72116 34.9548 8.60617 34.743 8.46563C34.5297 8.32408 34.2991 8.21011 34.226 8.21011C34.0749 8.21011 33.7026 8.05769 33.7026 7.99586C33.7026 7.97312 33.616 7.95459 33.51 7.95459C33.4041 7.95459 33.2664 7.91882 33.2041 7.875C33.1185 7.81495 32.9686 7.79693 32.5935 7.80153C31.9997 7.80882 31.9379 7.80077 32.1729 7.74698C32.4158 7.69128 33.1599 7.72833 33.1829 7.79719ZM31.9434 7.90349C31.9261 7.93159 31.8343 7.95459 31.7394 7.95459C31.6446 7.95459 31.5544 7.97503 31.539 7.99995C31.5236 8.02486 31.4327 8.05999 31.3368 8.07801C31.2411 8.09602 30.9597 8.21318 30.7117 8.33851C30.4636 8.46385 30.2262 8.56682 30.1841 8.56746C30.1421 8.56797 30.0388 8.61422 29.9547 8.67005C29.8705 8.72588 29.7664 8.77175 29.7233 8.77188C29.6801 8.77213 29.5548 8.81825 29.4447 8.87447C29.3347 8.93068 29.2177 8.97668 29.1848 8.97668C29.1519 8.97668 29.0592 9.01105 28.9789 9.05308C28.8986 9.09498 28.7919 9.12948 28.7418 9.12973C28.6917 9.12986 28.5958 9.16602 28.5287 9.2101C28.3905 9.30093 28.0866 9.29046 28.0548 9.19387C28.0405 9.15018 28.0964 9.12999 28.232 9.12999C28.3409 9.12999 28.4518 9.10865 28.4784 9.08259C28.5051 9.05666 28.63 9.02012 28.756 9.00172C28.882 8.98319 28.9968 8.95061 29.0109 8.92928C29.0252 8.90807 29.1466 8.84904 29.2807 8.79832C29.4148 8.7476 29.5367 8.68641 29.5515 8.66251C29.5661 8.63849 29.6219 8.61895 29.6755 8.61895C29.785 8.61895 30.1496 8.46065 30.1756 8.40175C30.185 8.38067 30.2239 8.36343 30.2622 8.36343C30.3004 8.36343 30.432 8.31002 30.5546 8.24474C30.6771 8.17932 30.9308 8.08197 31.1182 8.02818C31.3056 7.97427 31.459 7.91281 31.459 7.89135C31.459 7.86989 31.5751 7.85238 31.717 7.85238C31.876 7.85238 31.9628 7.87193 31.9434 7.90349ZM27.8385 9.33441C27.655 9.39331 27.5325 9.39331 27.5325 9.33441C27.5325 9.3063 27.63 9.2856 27.7492 9.28841C27.9333 9.29276 27.9468 9.29966 27.8385 9.33441ZM27.4535 9.43023C27.3636 9.5134 26.7813 9.53474 26.6812 9.45872C26.6011 9.39778 26.6483 9.38858 27.0455 9.38717C27.3094 9.38615 27.4815 9.40442 27.4535 9.43023ZM26.3597 9.53882C26.4117 9.57243 26.2808 9.5861 25.9517 9.58111C25.5441 9.57498 25.5077 9.56834 25.7223 9.53882C26.1151 9.48478 26.2763 9.48478 26.3597 9.53882ZM32.9607 9.95366C32.9873 9.97845 33.0844 9.99876 33.1763 9.99876C33.3031 9.99876 33.3646 10.0326 33.4316 10.1393C33.4801 10.2166 33.5711 10.3432 33.6337 10.4206C33.8524 10.6912 33.7979 11.3526 33.5438 11.51C33.4705 11.5554 33.4955 11.3616 33.5768 11.2539C33.6762 11.122 33.6752 10.6952 33.5752 10.612C33.5331 10.577 33.4987 10.5052 33.4987 10.4524C33.4987 10.3997 33.4812 10.3565 33.4599 10.3565C33.4386 10.3565 33.3628 10.3023 33.2915 10.236C33.0578 10.0188 32.7199 9.97027 32.0473 10.057C31.7226 10.0989 31.4466 10.1227 31.4338 10.1099C31.3751 10.0509 31.4829 9.99876 31.664 9.99876C31.7733 9.99876 31.892 9.96746 31.9277 9.92926C32.0006 9.85107 32.8725 9.87177 32.9607 9.95366ZM31.3789 10.1463C31.4106 10.1978 31.2088 10.2634 31.1433 10.2227C31.1197 10.208 31.1136 10.1747 31.1297 10.1485C31.167 10.0881 31.3421 10.0865 31.3789 10.1463ZM31.0738 10.2499C31.0896 10.2756 30.9421 10.3465 30.7458 10.4073C30.5496 10.4682 30.376 10.5392 30.3601 10.565C30.3245 10.6226 30.1332 10.6279 30.1332 10.5711C30.1332 10.5027 30.2507 10.4076 30.3353 10.4076C30.3793 10.4076 30.4952 10.3629 30.5928 10.3083C30.7823 10.2024 31.0263 10.1729 31.0738 10.2499ZM30.0312 10.6631C30.0312 10.6912 29.9839 10.7142 29.9261 10.7142C29.8684 10.7142 29.8354 10.6912 29.8527 10.6631C29.87 10.635 29.9173 10.612 29.9577 10.612C29.9981 10.612 30.0312 10.635 30.0312 10.6631ZM29.7762 10.8164C29.7762 10.8445 29.7479 10.8675 29.7132 10.8675C29.6325 10.8675 29.1091 11.128 29.0204 11.2124C28.9834 11.2475 28.9222 11.2764 28.8845 11.2764C28.8467 11.2764 28.8073 11.3021 28.7969 11.3334C28.7864 11.3647 28.7329 11.3809 28.6779 11.3695C28.597 11.3528 28.6192 11.3248 28.7942 11.2232C28.9131 11.1541 29.0107 11.0688 29.0109 11.0336C29.0112 10.9985 29.0515 10.9686 29.1005 10.9673C29.1496 10.9659 29.2701 10.9225 29.3683 10.8706C29.5669 10.7657 29.7762 10.738 29.7762 10.8164ZM28.4504 11.583C28.3522 11.6672 28.2547 11.7362 28.2337 11.7362C28.2126 11.7363 28.1954 11.7559 28.1954 11.7797C28.1954 11.8036 28.0463 11.9787 27.864 12.1688C27.6817 12.3588 27.5325 12.5462 27.5325 12.5853C27.5325 12.6242 27.51 12.6562 27.4825 12.6562C27.455 12.6562 27.418 12.7137 27.4005 12.7839C27.3829 12.8542 27.3481 12.9117 27.3231 12.9117C27.298 12.9117 27.2776 12.9434 27.2776 12.9821C27.2776 13.0208 27.2431 13.0811 27.2011 13.1161C27.159 13.1511 27.1246 13.2232 27.1246 13.2763C27.1246 13.3295 27.1047 13.4129 27.0805 13.4617C26.951 13.722 26.9063 13.9684 26.8839 14.547C26.8703 14.8984 26.8385 15.2077 26.8134 15.2344C26.7883 15.2611 26.7676 15.3245 26.7676 15.3753C26.7676 15.505 26.5109 15.9692 26.3672 16.0993C26.3013 16.159 26.2038 16.2482 26.1505 16.2974C26.0973 16.3466 26.0308 16.3868 26.0027 16.3868C25.9747 16.3868 25.9517 16.4074 25.9517 16.4324C25.9517 16.4821 25.7971 16.5555 25.7635 16.5217C25.7521 16.5104 25.8842 16.3661 26.0571 16.2012C26.4038 15.8704 26.6644 15.4644 26.6651 15.254C26.6654 15.1791 26.6917 15.1091 26.7235 15.0983C26.7613 15.0858 26.7856 14.8754 26.7933 14.4936C26.8052 13.9059 26.8926 13.4304 27.0104 13.3124C27.0452 13.2775 27.0736 13.2182 27.0736 13.1805C27.0736 13.0193 27.4235 12.4541 27.6961 12.1749C27.8586 12.0086 27.9915 11.8549 27.9915 11.8334C27.9915 11.8119 28.0374 11.7797 28.0934 11.7619C28.1495 11.744 28.1954 11.7022 28.1956 11.669C28.1957 11.6001 28.4373 11.4413 28.5524 11.4345C28.5946 11.432 28.5487 11.4987 28.4504 11.583ZM33.4987 11.6317C33.4987 11.6552 33.4298 11.7482 33.3457 11.8385C33.2616 11.9288 33.1927 12.0194 33.1927 12.04C33.1927 12.073 33.0276 12.2401 32.597 12.6434C32.5294 12.7067 32.4523 12.7584 32.4255 12.7584C32.3988 12.7584 32.3768 12.7914 32.3768 12.8316C32.3768 12.9032 32.1889 12.9959 32.141 12.948C32.1277 12.9347 32.4049 12.6324 32.7569 12.2764C33.1087 11.9204 33.3967 11.6059 33.3967 11.5775C33.3967 11.5491 33.4196 11.5401 33.4477 11.5574C33.4757 11.5748 33.4987 11.6083 33.4987 11.6317ZM36.696 14.2708C36.7173 14.3357 35.6665 14.4161 35.5715 14.3569C35.4874 14.3046 36.0743 14.1989 36.4012 14.2076C36.5533 14.2115 36.686 14.24 36.696 14.2708ZM37.3231 14.2713C37.4493 14.2865 37.5985 14.3186 37.6546 14.3428C37.7107 14.3668 37.8828 14.4254 38.037 14.4731C38.1913 14.5206 38.3393 14.5798 38.3659 14.6044C38.3926 14.6291 38.4532 14.6493 38.5007 14.6493C38.5482 14.6493 38.6002 14.6838 38.6164 14.7259C38.6325 14.7681 38.6924 14.8026 38.7493 14.8026C38.8062 14.8026 38.8529 14.8256 38.8529 14.8537C38.8529 14.8818 38.8769 14.9048 38.9061 14.9048C38.9353 14.9048 39.0835 14.9968 39.2353 15.1092C39.3872 15.2216 39.5354 15.3136 39.5646 15.3136C39.5938 15.3136 39.6178 15.3577 39.6178 15.4116C39.6178 15.4654 39.635 15.5171 39.656 15.5266C39.6771 15.5359 39.7966 15.7506 39.9218 16.0035C40.047 16.2565 40.1639 16.475 40.1816 16.489C40.1995 16.5031 40.2294 16.5778 40.2483 16.6551C40.2672 16.7324 40.3052 16.7956 40.3327 16.7956C40.3601 16.7956 40.3827 16.8531 40.3827 16.9234C40.3827 16.9937 40.4056 17.0512 40.4337 17.0512C40.4617 17.0512 40.4847 17.0828 40.4847 17.1216C40.4847 17.1603 40.5191 17.2206 40.5612 17.2556C40.6032 17.2906 40.6376 17.3624 40.6376 17.4152C40.6376 17.4679 40.6606 17.5111 40.6886 17.5111C40.7167 17.5111 40.7396 17.5356 40.7396 17.5655C40.7396 17.5954 40.7938 17.7392 40.8601 17.8849C40.9264 18.0307 40.9968 18.2016 41.0165 18.2649C41.0363 18.3281 41.0739 18.3799 41.1 18.3799C41.1262 18.3799 41.1476 18.4122 41.1476 18.4518C41.1476 18.4914 41.2076 18.6466 41.2812 18.7968C41.438 19.1173 41.4865 19.2329 41.5303 19.3892C41.5479 19.4524 41.5838 19.5042 41.6099 19.5042C41.6361 19.5042 41.6575 19.5603 41.6575 19.6289C41.6575 19.6975 41.6779 19.7662 41.7028 19.7817C41.7276 19.7971 41.7631 19.8904 41.7815 19.9892C41.8 20.0878 41.837 20.1685 41.8638 20.1685C41.8905 20.1685 41.9125 20.2148 41.9125 20.2714C41.9125 20.3746 41.9243 20.4062 42.0823 20.722C42.1292 20.8156 42.1674 20.9338 42.1674 20.9845C42.1674 21.0353 42.2017 21.1426 42.2437 21.2231C42.2855 21.3036 42.3199 21.4212 42.3202 21.4845C42.3203 21.5477 42.3433 21.5994 42.3714 21.5994C42.3994 21.5994 42.4224 21.6785 42.4224 21.7752C42.4224 21.872 42.4441 21.9646 42.4704 21.9809C42.4968 21.9973 42.5339 22.1136 42.5527 22.2394C42.5715 22.3652 42.6041 22.4682 42.6251 22.4682C42.7165 22.4682 42.7275 22.9979 42.638 23.0868C42.5895 23.1349 42.4351 23.3051 42.2949 23.465C42.1547 23.6248 41.9482 23.8535 41.836 23.973C41.7238 24.0924 41.4714 24.3719 41.2751 24.594C40.5902 25.3688 39.5756 26.301 39.4173 26.301C39.3873 26.301 39.3628 26.3191 39.3628 26.341C39.3628 26.363 39.2079 26.4607 39.0186 26.5582C38.8293 26.6557 38.6668 26.7527 38.6575 26.7738C38.648 26.7948 38.5677 26.8116 38.479 26.8109L38.3175 26.8098L38.445 26.7099C38.5151 26.6549 38.6016 26.6095 38.6372 26.6088C38.6728 26.6082 38.7929 26.5502 38.9039 26.4799C39.0149 26.4096 39.1279 26.3521 39.1548 26.3521C39.1982 26.3521 39.5579 26.0703 39.7751 25.866C39.8195 25.8242 39.879 25.79 39.9074 25.79C39.9359 25.79 40.106 25.6368 40.2857 25.4496C40.4652 25.2623 40.767 24.9565 40.9564 24.7697C41.1457 24.583 41.3005 24.4113 41.3005 24.3883C41.3005 24.3652 41.4726 24.1743 41.683 23.9643C41.8933 23.7541 42.0654 23.558 42.0654 23.5283C42.0654 23.4986 42.1844 23.3648 42.3297 23.231L42.5939 22.9874L42.5379 22.7151C42.5072 22.5652 42.4548 22.3507 42.4215 22.2383C42.3882 22.1258 42.3495 21.9475 42.3353 21.8418C42.3212 21.7363 42.2892 21.6371 42.2641 21.6217C42.2389 21.6061 42.2184 21.5506 42.2184 21.4984C42.2184 21.4461 42.1582 21.2832 42.0846 21.1363C42.011 20.9894 41.9507 20.8105 41.9507 20.7389C41.9507 20.667 41.9192 20.5767 41.8806 20.5381C41.8421 20.4994 41.8102 20.4293 41.8098 20.382C41.8095 20.3349 41.7409 20.1614 41.6575 19.9966C41.5741 19.8316 41.5178 19.6773 41.5324 19.6535C41.5472 19.6296 41.501 19.5178 41.4298 19.4049C41.3587 19.292 41.3005 19.1837 41.3005 19.1643C41.3005 19.1035 40.9889 18.4845 40.9444 18.457C40.9212 18.4426 40.9138 18.3865 40.9279 18.3323C40.9446 18.2683 40.9161 18.2102 40.8466 18.1668C40.7878 18.1298 40.7396 18.0589 40.7396 18.0091C40.7396 17.9593 40.7205 17.8787 40.6973 17.8299C40.6199 17.6677 40.5037 17.4361 40.4348 17.3067C40.3144 17.0804 40.2807 17.0025 40.2807 16.9497C40.2807 16.9214 40.2037 16.7887 40.1096 16.6552C40.0155 16.5216 39.8867 16.2974 39.8232 16.1568C39.7596 16.0163 39.6874 15.8613 39.6627 15.8125C39.6381 15.7637 39.6178 15.6914 39.6178 15.6518C39.6178 15.6122 39.5432 15.5194 39.4521 15.4456C38.9666 15.0525 38.6775 14.8537 38.5909 14.8537C38.4703 14.8537 37.986 14.6039 37.986 14.5417C37.986 14.5165 37.8865 14.4959 37.7647 14.4959C37.643 14.4959 37.4307 14.4617 37.293 14.4198C37.1554 14.378 36.9796 14.3435 36.9024 14.3431C36.8253 14.3429 36.7622 14.3235 36.7622 14.3001C36.7622 14.2159 36.8397 14.1825 36.9655 14.2128C37.036 14.2298 37.1969 14.2561 37.3231 14.2713ZM35.3854 14.4448C35.3854 14.4729 35.3108 14.4956 35.2197 14.4952C35.094 14.4945 35.0724 14.4824 35.1304 14.4448C35.2306 14.3799 35.3854 14.3799 35.3854 14.4448ZM35.8316 14.8378C35.7825 14.8506 35.7022 14.8506 35.6531 14.8378C35.604 14.8249 35.6442 14.8145 35.7423 14.8145C35.8405 14.8145 35.8807 14.8249 35.8316 14.8378ZM36.6602 15.0388C36.6602 15.1097 36.6473 15.1119 36.571 15.0532C36.5219 15.0155 36.4722 14.9782 36.4605 14.9703C36.4489 14.9624 36.489 14.9559 36.5497 14.9559C36.6176 14.9559 36.6602 14.9878 36.6602 15.0388ZM38.292 15.7698C38.292 15.7959 38.3321 15.8277 38.3812 15.8405C38.4566 15.8603 38.4575 15.8648 38.3875 15.8699C38.3418 15.8731 38.2759 15.8413 38.241 15.7991C38.1971 15.7461 38.1952 15.7224 38.2347 15.7224C38.2662 15.7224 38.292 15.7438 38.292 15.7698ZM24.9951 16.3357C25.1119 16.4481 25.2257 16.5401 25.2482 16.5401C25.2705 16.5401 25.2888 16.5631 25.2888 16.5912C25.2888 16.6193 25.2544 16.6423 25.2124 16.6423C25.1703 16.6423 25.1359 16.6078 25.1359 16.5657C25.1359 16.5231 25.0905 16.489 25.0339 16.489C24.9778 16.489 24.9319 16.466 24.9319 16.4379C24.9319 16.4098 24.9092 16.3868 24.8815 16.3868C24.8031 16.3868 24.6281 16.2202 24.657 16.1733C24.7057 16.0942 24.783 16.1314 24.9951 16.3357ZM15.9164 16.6347C15.8518 16.6529 16.172 16.6679 16.6277 16.6679C17.0835 16.6679 17.3888 16.6533 17.3059 16.6356C17.1073 16.593 16.0659 16.5922 15.9164 16.6347ZM33.5752 16.6407C33.491 16.6611 33.6516 16.6669 33.9321 16.6532C34.2126 16.6396 34.4516 16.6201 34.4633 16.6099C34.5019 16.5759 33.7309 16.6026 33.5752 16.6407ZM34.748 16.6453C35.0063 16.6988 35.215 16.6964 35.003 16.6423C34.9188 16.6209 34.7811 16.6032 34.697 16.6031C34.5684 16.603 34.5765 16.6097 34.748 16.6453ZM39.4011 16.7245C39.4764 16.8 39.4754 16.8052 39.389 16.7884C39.3372 16.7783 39.2852 16.7413 39.2736 16.7062C39.2443 16.6178 39.3032 16.6264 39.4011 16.7245ZM15.4473 16.7532C15.0769 16.9068 14.7369 17.0717 14.7545 17.0894C14.7655 17.1003 14.8717 17.0597 14.9904 16.999C15.109 16.9383 15.3351 16.8461 15.4925 16.7942C15.65 16.7424 15.7328 16.6999 15.6767 16.7001C15.6206 16.7002 15.5174 16.7241 15.4473 16.7532ZM17.5635 16.7445C17.7159 16.8102 17.8433 16.8102 17.7419 16.7445C17.6999 16.7173 17.6195 16.6962 17.5635 16.6978L17.4615 16.7006L17.5635 16.7445ZM25.5948 16.8314C25.5948 16.9341 25.58 16.9546 25.5371 16.9115C25.5053 16.8797 25.4931 16.8176 25.5099 16.7735C25.5567 16.6517 25.5948 16.6777 25.5948 16.8314ZM33.0907 16.7701C32.9926 16.808 32.9467 16.839 32.9887 16.839C33.0308 16.839 33.1455 16.808 33.2437 16.7701C33.3419 16.7321 33.3878 16.7012 33.3457 16.7012C33.3036 16.7012 33.1889 16.7321 33.0907 16.7701ZM35.3599 16.7719C35.444 16.8106 35.5473 16.8414 35.5894 16.8406C35.6314 16.8397 35.5855 16.808 35.4874 16.7701C35.2546 16.6803 35.1629 16.6815 35.3599 16.7719ZM25.3908 16.8754C25.3908 16.9159 25.3679 16.949 25.3398 16.949C25.3118 16.949 25.2888 16.9016 25.2888 16.8437C25.2888 16.7858 25.3118 16.7527 25.3398 16.7701C25.3679 16.7875 25.3908 16.8349 25.3908 16.8754ZM18.0479 16.8634C18.0479 16.8755 18.2405 16.9938 18.476 17.1263C18.9395 17.387 19.5367 17.9406 19.7609 18.3171C19.8316 18.436 19.9015 18.5332 19.9161 18.5332C20.0427 18.5332 19.424 17.7707 19.0422 17.456C18.7749 17.2356 18.0479 16.8024 18.0479 16.8634ZM29.8527 16.9713C29.7154 17.0827 29.6546 17.0947 29.2575 17.0892C28.9661 17.0853 28.7885 17.1055 28.737 17.1484C28.5779 17.2806 25.8677 17.2942 25.7461 17.1633C25.6909 17.1041 25.6466 17.0257 25.6475 16.9895C25.6485 16.9465 25.6728 16.9548 25.7168 17.0128C25.7907 17.1104 28.7563 17.1552 28.7563 17.0586C28.7563 17.0346 28.9166 17.0015 29.1124 16.985C29.3082 16.9685 29.509 16.9313 29.5586 16.9024C29.6082 16.8736 29.729 16.8493 29.8272 16.8485L30.0057 16.8473L29.8527 16.9713ZM32.6063 16.9778C32.3866 17.1184 32.3995 17.1193 32.6955 16.984C32.8007 16.9358 32.8868 16.8853 32.8868 16.8717C32.8868 16.82 32.8039 16.8513 32.6063 16.9778ZM39.7669 17.095C39.8299 17.1548 39.8272 17.1618 39.7478 17.1461C39.697 17.136 39.6186 17.0703 39.5734 17.0001C39.4862 16.8641 39.5639 16.9022 39.7669 17.095ZM14.4584 17.2383C14.235 17.3847 13.5638 18.0221 13.6329 18.0221C13.6577 18.0221 13.7948 17.9 13.9379 17.7508C14.0809 17.6016 14.3069 17.4051 14.4402 17.314C14.5734 17.223 14.6824 17.138 14.6824 17.1254C14.6824 17.0923 14.6775 17.0947 14.4584 17.2383ZM25.0849 17.1534C25.0849 17.1815 25.0505 17.2045 25.0084 17.2045C24.9663 17.2045 24.9319 17.1815 24.9319 17.1534C24.9319 17.1253 24.9663 17.1023 25.0084 17.1023C25.0505 17.1023 25.0849 17.1253 25.0849 17.1534ZM32.1168 17.2617C31.5803 17.6429 30.5964 18.8398 30.8195 18.8398C30.8335 18.8398 30.8945 18.7426 30.9549 18.6238C31.1997 18.1431 31.6108 17.685 32.1346 17.3096C32.3555 17.1513 32.4086 17.1023 32.359 17.1023C32.3492 17.1023 32.2402 17.1741 32.1168 17.2617ZM36.7036 17.508C36.8972 17.675 37.1761 17.9797 37.3235 18.1852C37.5971 18.5667 37.7308 18.7279 37.6542 18.5843C37.4399 18.1825 36.5461 17.2045 36.3931 17.2045C36.3703 17.2045 36.51 17.3411 36.7036 17.508ZM13.4175 18.316C13.1894 18.6763 13.0506 18.9374 13.0506 19.006C13.0506 19.0395 13.121 18.9309 13.207 18.7647C13.2931 18.5985 13.4041 18.4036 13.4537 18.3317C13.5809 18.1472 13.6211 18.0732 13.5943 18.0732C13.5816 18.0732 13.502 18.1825 13.4175 18.316ZM37.7109 18.7632C37.9093 19.3134 37.9925 19.5881 38.0309 19.8194C38.0609 20.0003 38.0781 20.04 38.082 19.9375C38.0899 19.7341 37.9075 19.081 37.7772 18.8467C37.7205 18.7445 37.6906 18.7069 37.7109 18.7632ZM16.4416 18.7908C16.3696 18.8203 16.4208 18.8337 16.6159 18.8362C16.7677 18.8382 16.8824 18.8316 16.8708 18.8215C16.815 18.7739 16.5324 18.7536 16.4416 18.7908ZM34.1361 18.7887C34.0099 18.8209 34.0322 18.8282 34.2636 18.8302C34.4635 18.8319 34.5147 18.82 34.442 18.7887C34.3241 18.7379 34.3353 18.7379 34.1361 18.7887ZM40.7238 19.0315C40.7109 19.0806 40.7005 19.0404 40.7005 18.942C40.7005 18.8436 40.7109 18.8034 40.7238 18.8526C40.7366 18.9018 40.7366 18.9823 40.7238 19.0315ZM15.9572 18.9165C15.7907 19.0119 15.849 19.0129 16.0661 18.9185C16.1604 18.8774 16.2032 18.8438 16.1612 18.8436C16.1191 18.8435 16.0273 18.8764 15.9572 18.9165ZM17.1423 18.9125C17.2472 18.9501 17.3935 19.0205 17.4673 19.0689C17.5411 19.1174 17.5856 19.1314 17.5663 19.0999C17.5164 19.0189 17.1518 18.8394 17.0428 18.8421C16.9926 18.8433 17.0373 18.8749 17.1423 18.9125ZM20.0912 18.8601C20.0858 18.9298 20.3032 19.5095 20.3261 19.4865C20.3372 19.4756 20.2897 19.3197 20.2204 19.1403C20.1513 18.9611 20.0931 18.835 20.0912 18.8601ZM33.6231 18.9148C33.5687 18.9561 33.5483 18.9906 33.5777 18.9915C33.6072 18.9924 33.653 18.9723 33.6797 18.947C33.7063 18.9216 33.774 18.8898 33.8301 18.8762C33.9296 18.8522 33.9296 18.8516 33.8271 18.8457C33.7694 18.8425 33.6777 18.8735 33.6231 18.9148ZM34.748 18.8762C34.8041 18.8898 34.8718 18.9216 34.8984 18.947C34.9251 18.9723 34.9696 18.9931 34.9973 18.9931C35.0253 18.9931 35.0035 18.9594 34.9489 18.9181C34.8945 18.8769 34.8041 18.8451 34.748 18.8474L34.646 18.8517L34.748 18.8762ZM30.6997 19.0499C30.6683 19.1402 30.6515 19.2231 30.6625 19.234C30.6734 19.2449 30.708 19.1799 30.7395 19.0897C30.7708 18.9994 30.7876 18.9165 30.7767 18.9056C30.7657 18.8946 30.7312 18.9597 30.6997 19.0499ZM15.6514 19.0852C15.4511 19.2217 15.0915 19.669 15.0907 19.7824C15.0904 19.809 15.1556 19.7278 15.2353 19.6018C15.3149 19.4758 15.4813 19.2877 15.605 19.1839C15.8428 18.9841 15.8631 18.941 15.6514 19.0852ZM33.1129 19.2753C32.9604 19.4306 32.8365 19.5858 32.8374 19.6203C32.8383 19.6548 32.8891 19.6157 32.9502 19.5333C33.104 19.3266 33.2466 19.1811 33.3953 19.0794C33.4646 19.032 33.4918 18.9931 33.4557 18.9931C33.4196 18.9931 33.2654 19.1201 33.1129 19.2753ZM35.1559 19.0755C35.212 19.1191 35.2942 19.1816 35.3386 19.2145C35.383 19.2474 35.5034 19.3852 35.6063 19.5209C35.7092 19.6565 35.7933 19.7516 35.7933 19.7321C35.7933 19.6576 35.4388 19.2179 35.2902 19.1081C35.117 18.9801 34.9949 18.9506 35.1559 19.0755ZM17.6399 19.1858C17.6399 19.2144 17.6745 19.2509 17.7166 19.2672C17.7588 19.2834 17.862 19.4053 17.946 19.5382C18.0302 19.671 18.0989 19.7556 18.0989 19.7262C18.0989 19.6603 17.8405 19.2995 17.725 19.2041C17.6782 19.1655 17.6399 19.1573 17.6399 19.1858ZM30.5703 19.4312C30.5514 19.5061 30.5459 19.5772 30.5579 19.5893C30.57 19.6013 30.5951 19.5499 30.6139 19.4749C30.6328 19.4 30.6382 19.3289 30.6262 19.3169C30.6141 19.3049 30.589 19.3562 30.5703 19.4312ZM12.8758 19.5334C12.857 19.6083 12.8515 19.6795 12.8635 19.6915C12.8756 19.7035 12.9007 19.6521 12.9194 19.5771C12.9383 19.5023 12.9438 19.4311 12.9318 19.4191C12.9197 19.4071 12.8946 19.4584 12.8758 19.5334ZM20.3554 19.7341C20.3559 19.8466 20.3664 19.8866 20.3786 19.8229C20.3909 19.7594 20.3904 19.6674 20.3776 19.6185C20.3649 19.5697 20.3548 19.6217 20.3554 19.7341ZM30.504 19.8619C30.504 19.9884 30.5139 20.0401 30.526 19.9769C30.5383 19.9136 30.5383 19.8102 30.526 19.7469C30.5139 19.6837 30.504 19.7354 30.504 19.8619ZM32.7421 19.8385C32.7094 19.9102 32.6837 19.9966 32.6848 20.0304C32.6858 20.0641 32.7206 20.0137 32.7621 19.918C32.8491 19.7169 32.8308 19.6434 32.7421 19.8385ZM12.8085 19.9897C12.809 20.1021 12.8195 20.1421 12.8317 20.0785C12.844 20.015 12.8434 19.923 12.8307 19.874C12.8179 19.8252 12.8079 19.8772 12.8085 19.9897ZM18.1024 19.8461C18.1139 19.9788 18.1937 20.0914 18.1973 19.98C18.1992 19.9184 18.1779 19.8537 18.1499 19.8363C18.1218 19.819 18.1005 19.8233 18.1024 19.8461ZM35.8266 19.9386C35.8436 20.0229 35.8744 20.2299 35.8949 20.3985L35.9324 20.7051L35.9355 20.4496C35.9371 20.3091 35.9063 20.1021 35.867 19.9897C35.82 19.855 35.8062 19.8375 35.8266 19.9386ZM15.0138 20.0152C14.9944 20.1035 14.9892 20.1865 15.0022 20.1994C15.0152 20.2125 15.0405 20.1497 15.0584 20.0599C15.1009 19.847 15.0597 19.8057 15.0138 20.0152ZM20.4119 20.424C20.4119 20.6911 20.4206 20.8003 20.431 20.6668C20.4415 20.5333 20.4415 20.3148 20.431 20.1813C20.4206 20.0478 20.4119 20.157 20.4119 20.424ZM30.4442 20.3772C30.4469 20.5295 30.4678 20.7805 30.4905 20.9351C30.5194 21.1321 30.5235 21.0557 30.5045 20.6796C30.4757 20.1113 30.4357 19.9106 30.4442 20.3772ZM18.2162 20.424C18.2162 20.5786 18.2257 20.6419 18.2374 20.5646C18.249 20.4873 18.249 20.3608 18.2374 20.2835C18.2257 20.2062 18.2162 20.2695 18.2162 20.424ZM38.1038 20.4496C38.1041 20.6182 38.1136 20.6811 38.125 20.5892C38.1363 20.4974 38.1361 20.3594 38.1245 20.2826C38.1129 20.2058 38.1036 20.281 38.1038 20.4496ZM12.8095 20.8329C12.8095 20.9594 12.8195 21.0111 12.8316 20.9479C12.8438 20.8846 12.8438 20.7811 12.8316 20.7179C12.8195 20.6547 12.8095 20.7064 12.8095 20.8329ZM14.997 20.7051C14.9962 20.7613 15.0152 20.8533 15.0393 20.9095C15.0952 21.0397 15.0952 20.9055 15.0393 20.7307C15.0066 20.628 14.9981 20.623 14.997 20.7051ZM32.6871 20.7966C32.6713 21.1276 33.3866 21.967 33.6743 21.9549C33.7039 21.9537 33.6478 21.91 33.5497 21.8578C33.1919 21.6678 32.8572 21.2489 32.7305 20.8329C32.7042 20.7465 32.6902 20.7348 32.6871 20.7966ZM35.7816 20.9744C35.6703 21.2845 35.7045 21.3189 35.8207 21.0137C35.8698 20.8849 35.9003 20.7698 35.8886 20.7579C35.8767 20.746 35.8285 20.8435 35.7816 20.9744ZM20.3507 21.0632C20.322 21.6038 19.8537 22.4995 19.3114 23.0513C18.8766 23.4935 18.7962 23.636 19.2006 23.2473C19.8484 22.6249 20.4379 21.534 20.3788 21.0671L20.3589 20.9095L20.3507 21.0632ZM12.8568 21.1651C12.8568 21.2213 12.8752 21.3248 12.8976 21.395C12.93 21.4962 12.9384 21.5015 12.9384 21.4206C12.9384 21.3644 12.9201 21.2609 12.8976 21.1906C12.8652 21.0894 12.8568 21.0842 12.8568 21.1651ZM17.9734 21.2701C17.831 21.5351 17.4116 21.8596 17.082 21.9599C16.9962 21.9859 16.9828 22.001 17.0428 22.0039C17.3309 22.0177 18.2294 21.2533 18.0897 21.1133C18.0782 21.1018 18.026 21.1723 17.9734 21.2701ZM37.8783 21.5897C37.8064 21.8059 37.7308 22.0287 37.7103 22.0849C37.6862 22.151 37.7011 22.1419 37.7525 22.0594C37.8403 21.918 38.0601 21.2478 38.0289 21.2165C38.018 21.2056 37.9502 21.3736 37.8783 21.5897ZM15.1937 21.2475C15.1904 21.3213 15.5156 21.6771 15.6658 21.7643L15.8297 21.8593L15.6562 21.7116C15.5608 21.6304 15.4181 21.4856 15.3389 21.39C15.2597 21.2944 15.1945 21.2302 15.1937 21.2475ZM30.567 21.395C30.6317 21.6098 30.7903 21.9859 30.7933 21.9316C30.7966 21.8711 30.5953 21.3297 30.5558 21.2928C30.5407 21.2788 30.5458 21.3248 30.567 21.395ZM35.4609 21.5049C35.3506 21.6215 35.1221 21.7824 34.9532 21.8625C34.7842 21.9426 34.6804 22.0074 34.7225 22.0065C34.9229 22.002 35.3791 21.7098 35.5634 21.4679C35.7415 21.2338 35.7046 21.2471 35.4609 21.5049ZM12.9518 21.5851C12.9371 21.8693 13.9856 23.4391 14.1081 23.3164C14.1213 23.303 14.0492 23.2192 13.9477 23.1299C13.6716 22.8869 13.2093 22.1597 13.0038 21.6449C12.977 21.5777 12.9536 21.5509 12.9518 21.5851ZM15.8832 21.9025C15.9099 21.9286 16.0005 21.9642 16.0847 21.9816C16.2371 22.0133 16.237 22.013 16.0661 21.9342C15.8704 21.8439 15.8134 21.8339 15.8832 21.9025ZM16.4544 22.0452C16.5455 22.0566 16.6947 22.0566 16.7858 22.0452C16.877 22.034 16.8024 22.0246 16.6201 22.0246C16.4378 22.0246 16.3632 22.034 16.4544 22.0452ZM30.7961 22.0209C30.7961 22.0915 31.1531 22.66 31.2398 22.7274C31.3264 22.7948 31.3269 22.7931 31.2473 22.6973C31.2011 22.6416 31.1006 22.481 31.0242 22.3405C30.8848 22.0837 30.7961 21.9595 30.7961 22.0209ZM34.0967 22.0452C34.1872 22.0564 34.3478 22.0567 34.4536 22.0456C34.5594 22.0345 34.4854 22.0253 34.2891 22.025C34.0927 22.0248 34.0062 22.0338 34.0967 22.0452ZM28.2386 22.2931C28.327 22.3373 28.3994 22.3948 28.3994 22.4208C28.3994 22.4469 28.4338 22.4682 28.4759 22.4682C28.518 22.4682 28.5524 22.5114 28.5524 22.5642C28.5524 22.6169 28.5868 22.6887 28.6289 22.7237C28.713 22.7936 28.7363 23.0044 28.6544 22.9537C28.6263 22.9363 28.6034 22.886 28.6034 22.8418C28.6034 22.7435 28.2673 22.4171 28.1664 22.4171C28.1262 22.4171 28.0934 22.3941 28.0934 22.366C28.0934 22.3361 27.9225 22.3149 27.6824 22.3149C27.4215 22.3149 27.283 22.2963 27.3031 22.2638C27.3546 22.1804 28.057 22.2024 28.2386 22.2931ZM37.5716 22.3277C37.4333 22.5878 36.9351 23.1569 36.6544 23.3753C36.321 23.6348 36.2732 23.6965 36.5134 23.5571C36.8159 23.3816 37.8125 22.2127 37.6597 22.2127C37.6448 22.2127 37.6051 22.2644 37.5716 22.3277ZM27.1975 22.3603C27.2282 22.41 27.0624 22.4664 26.8824 22.4676C26.8193 22.468 26.7676 22.4912 26.7676 22.5193C26.7676 22.5474 26.7389 22.5697 26.7039 22.5688C26.6688 22.5679 26.7045 22.5104 26.7832 22.441C26.9252 22.3159 27.1438 22.2733 27.1975 22.3603ZM23.4633 22.4204C24.0858 22.5459 25.1463 23.088 25.0188 23.2158C25.0016 23.2331 24.8354 23.2184 24.6495 23.1833C23.7187 23.0072 22.9765 23.3518 22.6087 24.1309C22.4449 24.4779 22.3519 24.5166 22.2808 24.2673C22.0282 23.3832 22.3328 22.5426 22.9496 22.4212C23.0722 22.3969 23.1772 22.3747 23.1828 22.3716C23.1885 22.3686 23.3147 22.3905 23.4633 22.4204ZM28.2817 22.6022C28.6502 22.8995 28.7937 23.5202 28.6343 24.1266C28.5435 24.4725 28.4908 24.4669 28.2799 24.089C27.8324 23.2868 27.2113 23.0093 26.2492 23.1816C25.7154 23.2773 25.719 23.1622 26.2585 22.8808C27.2276 22.3753 27.8878 22.2844 28.2817 22.6022ZM31.6091 23.1439C31.7898 23.3329 31.9485 23.4766 31.9617 23.4633C31.975 23.4501 31.9758 23.4335 31.9634 23.4264C31.951 23.4194 31.7923 23.2757 31.6107 23.107L31.2805 22.8004L31.6091 23.1439ZM40.7238 23.1198C40.7109 23.169 40.7005 23.1287 40.7005 23.0304C40.7005 22.932 40.7109 22.8917 40.7238 22.9409C40.7366 22.9901 40.7366 23.0706 40.7238 23.1198ZM28.8609 24.012C28.8015 24.5164 28.7595 24.3992 28.7634 23.74L28.7671 23.107L28.8313 23.4125C28.8703 23.5979 28.8819 23.8333 28.8609 24.012ZM26.9461 23.2859C26.9654 23.3172 26.8862 23.337 26.7421 23.337C26.5981 23.337 26.5189 23.3172 26.5382 23.2859C26.5555 23.2578 26.6473 23.2348 26.7421 23.2348C26.837 23.2348 26.9288 23.2578 26.9461 23.2859ZM27.5923 23.4245C27.8735 23.6544 28.1458 23.9635 28.1771 24.0882C28.1933 24.1529 28.2269 24.2058 28.2519 24.2058C28.277 24.2058 28.2974 24.2647 28.2974 24.3366C28.2974 24.4107 28.2754 24.4536 28.2464 24.4357C28.2184 24.4184 28.1954 24.371 28.1954 24.3305C28.1954 24.2542 28.0204 24.0528 27.9532 24.0519C27.9322 24.0517 27.8765 23.9597 27.8296 23.8475C27.7812 23.7323 27.7091 23.6436 27.6638 23.6436C27.6196 23.6436 27.5835 23.6206 27.5835 23.5925C27.5835 23.5644 27.5566 23.5414 27.5237 23.5414C27.491 23.5414 27.4252 23.5062 27.3778 23.4632C27.3303 23.4202 27.2394 23.3748 27.1757 23.3625C26.9771 23.3242 26.9963 23.2859 27.2142 23.2859C27.3653 23.2859 27.4694 23.3241 27.5923 23.4245ZM14.1908 23.3765C14.2311 23.4419 14.5294 23.6632 14.5294 23.6277C14.5294 23.615 14.4451 23.5403 14.3422 23.4616C14.2392 23.3829 14.171 23.3445 14.1908 23.3765ZM18.4558 23.727C18.2455 23.8511 18.0045 23.973 17.9204 23.9979C17.8363 24.0228 17.8081 24.0453 17.8579 24.0479C17.9676 24.0535 18.5846 23.7477 18.7618 23.6001C18.9426 23.4493 18.89 23.4711 18.4558 23.727ZM14.5804 23.6641C14.5804 23.6908 14.9326 23.8991 14.9776 23.8991C14.9965 23.8991 14.9275 23.8417 14.8244 23.7714C14.6437 23.6483 14.5804 23.6205 14.5804 23.6641ZM32.2992 23.6929C32.3328 23.7474 32.6406 23.9073 32.6649 23.8829C32.6741 23.8738 32.5891 23.8169 32.476 23.7564C32.3631 23.696 32.2835 23.6674 32.2992 23.6929ZM26.7648 24.096C26.7318 24.107 26.6903 24.0942 26.6725 24.0678C26.6547 24.0412 26.5949 24.0026 26.5396 23.9821C26.4562 23.9511 26.4517 23.937 26.5133 23.8988C26.5648 23.8668 26.624 23.887 26.7062 23.9643C26.7795 24.0334 26.8019 24.0836 26.7648 24.096ZM32.9222 24.0015C33.0399 24.0583 33.212 24.117 33.3046 24.1317C33.4124 24.1487 33.3719 24.1231 33.1927 24.0608C32.7315 23.9003 32.6983 23.893 32.9222 24.0015ZM35.6045 23.9709C35.5148 24.0037 35.4257 24.0462 35.4064 24.0655C35.3591 24.1129 35.6608 24.0241 35.7769 23.9565C35.8953 23.8874 35.8149 23.8942 35.6045 23.9709ZM17.5125 24.1119C17.4283 24.1397 17.1644 24.1803 16.926 24.2022L16.4926 24.2418L16.8241 24.2487C17.1211 24.255 17.6555 24.1562 17.7302 24.0812C17.7701 24.0413 17.6928 24.0522 17.5125 24.1119ZM15.8297 24.1833C15.998 24.2212 16.2045 24.2512 16.2886 24.2497C16.3728 24.2483 16.281 24.2166 16.0847 24.1793C15.6197 24.0912 15.435 24.094 15.8297 24.1833ZM27.4084 24.4502C27.7967 24.7746 28.2038 25.0431 28.3951 25.1007C28.4629 25.1212 28.5739 25.2041 28.6419 25.2851C28.7098 25.3661 28.8035 25.4339 28.8502 25.436C28.8967 25.438 29.0037 25.4838 29.0878 25.5377C29.1719 25.5915 29.2752 25.6497 29.3173 25.6671C29.3593 25.6843 29.5149 25.7536 29.6629 25.8209C29.8109 25.8882 29.9515 25.9433 29.9753 25.9433C29.9992 25.9433 30.0472 25.9778 30.0822 26.02C30.1171 26.0621 30.2002 26.0966 30.2669 26.0966C30.3336 26.0966 30.3881 26.1196 30.3881 26.1477C30.3881 26.1758 30.4343 26.1988 30.4907 26.1988C30.5937 26.1988 30.6252 26.2107 30.9404 26.369C31.0338 26.416 31.1443 26.4544 31.1859 26.4544C31.2275 26.4544 31.392 26.517 31.5515 26.5935C31.711 26.67 31.8988 26.7478 31.9689 26.7664C32.09 26.7983 32.0885 26.8003 31.9408 26.8061C31.8553 26.8094 31.7635 26.7932 31.7369 26.7701C31.7102 26.7469 31.5507 26.6861 31.3825 26.6351C31.0134 26.5231 30.9291 26.4931 30.6795 26.3847C30.5735 26.3387 30.4415 26.301 30.3863 26.301C30.3313 26.301 30.2861 26.278 30.2861 26.2499C30.2861 26.2218 30.246 26.1981 30.1969 26.1972C30.1478 26.1963 30.0632 26.1618 30.0087 26.1205C29.9542 26.0793 29.8681 26.0455 29.8175 26.0455C29.7668 26.0455 29.7252 26.0225 29.7252 25.9944C29.7252 25.9663 29.681 25.9433 29.6269 25.9433C29.5727 25.9433 29.4941 25.9088 29.452 25.8667C29.4099 25.8245 29.328 25.79 29.27 25.79C29.2118 25.79 29.1643 25.771 29.1643 25.7476C29.1643 25.7243 29.0094 25.628 28.8201 25.5336C28.6308 25.4392 28.4644 25.3482 28.4504 25.3315C28.4364 25.3149 28.2643 25.2065 28.0679 25.0908C27.8716 24.9751 27.6525 24.8263 27.5808 24.7602C27.5093 24.6942 27.3627 24.5712 27.2553 24.4868C27.1478 24.4025 27.0114 24.2938 26.952 24.2452L26.8441 24.157L26.9494 24.1558C27.0073 24.1552 27.2138 24.2877 27.4084 24.4502ZM33.5752 24.2083C33.6312 24.2311 33.8148 24.2495 33.9831 24.2492C34.3676 24.2487 34.2964 24.2214 33.8301 24.1906C33.6227 24.1769 33.5159 24.1843 33.5752 24.2083ZM34.595 24.2058C34.3487 24.2396 34.3469 24.241 34.544 24.2459C34.6562 24.2487 34.8398 24.232 34.952 24.2087C35.2123 24.1548 34.98 24.1529 34.595 24.2058ZM11.2659 24.7935C11.3179 24.8562 11.3143 24.8701 11.2466 24.8701C11.2011 24.8701 11.1639 24.8356 11.1639 24.7935C11.1639 24.7513 11.1725 24.7168 11.1831 24.7168C11.1937 24.7168 11.2309 24.7513 11.2659 24.7935ZM38.9507 25.7533C38.939 25.7613 38.8892 25.7986 38.8402 25.8362C38.7638 25.8949 38.7509 25.8927 38.7509 25.8218C38.7509 25.7708 38.7935 25.7389 38.8614 25.7389C38.9221 25.7389 38.9623 25.7454 38.9507 25.7533ZM27.1939 26.4784C27.3022 26.5776 27.4077 26.6588 27.4284 26.6588C27.449 26.6588 27.5486 26.7393 27.6497 26.8376C27.7508 26.936 27.8565 27.0165 27.8846 27.0165C27.9128 27.0165 27.9885 27.0694 28.053 27.1339C28.1174 27.1986 28.2046 27.2674 28.2465 27.287C28.3366 27.3289 28.516 27.44 28.5524 27.4764C28.5777 27.5017 28.8049 27.629 29.0751 27.769C29.1522 27.809 29.2153 27.8629 29.2153 27.889C29.2153 27.915 29.2612 27.9364 29.3173 27.9364C29.3734 27.9364 29.4195 27.9536 29.4198 27.9747C29.42 27.9958 29.5233 28.0584 29.6492 28.114C29.7752 28.1694 29.8782 28.2327 29.8782 28.2545C29.8782 28.2762 29.9062 28.2941 29.9405 28.2941C29.9923 28.2941 30.5937 28.5722 31.2208 28.8862C31.3002 28.9259 31.4054 28.9585 31.4546 28.9585C31.5037 28.9585 31.5603 28.9748 31.5803 28.9949C31.6367 29.0514 32.0858 29.2139 32.1856 29.214C32.2347 29.214 32.2748 29.237 32.2748 29.2651C32.2748 29.2932 32.3265 29.3163 32.3896 29.3165C32.4527 29.3167 32.5701 29.3512 32.6504 29.3931C32.7307 29.4351 32.8856 29.4695 32.9946 29.4695C33.1036 29.4695 33.1927 29.4903 33.1927 29.5158C33.1927 29.5413 33.3074 29.578 33.4477 29.5973C33.5878 29.6166 33.7154 29.6532 33.7311 29.6787C33.7467 29.7042 33.8826 29.725 34.0328 29.725C34.1844 29.725 34.3143 29.7498 34.3245 29.7806C34.3349 29.8119 34.532 29.8478 34.775 29.8628C35.0125 29.8773 35.2208 29.9114 35.2378 29.9387C35.2764 30.0007 37.3206 29.96 37.7772 29.8881C38.2805 29.8087 38.3242 29.8874 37.833 29.9887C37.341 30.0902 36.1059 30.1107 35.5129 30.0273C35.3166 29.9997 35.0486 29.9789 34.9174 29.9812C34.7862 29.9835 34.5453 29.9512 34.382 29.9095C34.2187 29.8679 33.9818 29.8224 33.8556 29.8086C33.5534 29.7754 33.2568 29.6973 33.1751 29.6295C33.139 29.5993 33.0307 29.5698 32.9343 29.5638C32.8381 29.5577 32.714 29.5225 32.6587 29.4856C32.6034 29.4487 32.4944 29.4184 32.4165 29.4184C32.3386 29.4184 32.2748 29.3954 32.2748 29.3673C32.2748 29.3392 32.2103 29.3162 32.1316 29.3162C32.0529 29.3162 31.9439 29.2825 31.8893 29.2412C31.8349 29.1999 31.7287 29.1654 31.6532 29.1645C31.5778 29.1637 31.5018 29.1399 31.4845 29.1118C31.4671 29.0837 31.3983 29.0607 31.3315 29.0607C31.2647 29.0607 31.1958 29.0377 31.1785 29.0096C31.1612 28.9815 31.1154 28.9585 31.0768 28.9585C30.9798 28.9585 30.8073 28.8812 30.5666 28.7298C30.4544 28.6591 30.3282 28.5886 30.2861 28.5729C30.2441 28.5573 30.1408 28.5071 30.0567 28.4616C29.9725 28.416 29.7425 28.296 29.5457 28.195C29.3488 28.0938 29.1193 27.9655 29.0358 27.9097C28.9522 27.854 28.7718 27.7509 28.6347 27.6807C28.4977 27.6106 28.3759 27.5186 28.3642 27.4764C28.3525 27.4343 28.2523 27.3558 28.1416 27.3022C28.031 27.2484 27.9405 27.1872 27.9405 27.1661C27.9405 27.145 27.8429 27.0797 27.7237 27.0211C27.6045 26.9623 27.4517 26.8555 27.3841 26.7836C27.3166 26.7118 27.1918 26.6169 27.1067 26.5729C26.9345 26.4836 26.7642 26.2968 26.8009 26.2373C26.833 26.1852 26.9571 26.2613 27.1939 26.4784ZM18.9381 26.4068C18.9002 26.4682 18.7618 26.4688 18.7618 26.4075C18.7618 26.3521 18.8724 26.3053 18.9284 26.3371C18.9498 26.3492 18.9542 26.3806 18.9381 26.4068ZM32.2748 26.6201C32.2748 26.6414 32.2404 26.6588 32.1984 26.6588C32.1563 26.6588 32.1219 26.6358 32.1219 26.6077C32.1219 26.5796 32.0669 26.5566 31.9999 26.5566C31.9327 26.5566 31.866 26.5256 31.8515 26.488C31.8307 26.4335 31.8717 26.4361 32.0501 26.5004C32.1736 26.5448 32.2748 26.5987 32.2748 26.6201ZM13.7645 26.5566C13.7645 26.6173 13.6759 26.6173 13.535 26.5566C13.4496 26.5198 13.4599 26.5121 13.5988 26.509C13.6899 26.5071 13.7645 26.5285 13.7645 26.5566ZM37.3231 26.7354C37.2882 26.7776 37.2051 26.8121 37.1384 26.8121C37.0717 26.8121 37.0172 26.8351 37.0172 26.8632C37.0172 26.8913 36.9799 26.9143 36.9344 26.9143C36.8667 26.9143 36.8632 26.9004 36.9152 26.8376C36.9501 26.7955 37.0204 26.761 37.0713 26.761C37.1223 26.761 37.1783 26.738 37.1956 26.7099C37.213 26.6818 37.2631 26.6588 37.3069 26.6588C37.3719 26.6588 37.375 26.6728 37.3231 26.7354ZM38.3168 26.8622C38.3342 26.8902 38.2567 26.9269 38.1414 26.9453C38.0278 26.9636 37.935 26.9985 37.935 27.023C37.935 27.0476 37.869 27.0676 37.7883 27.0676C37.7076 27.0676 37.5591 27.1021 37.4585 27.1443C37.3578 27.1864 37.1542 27.2189 37.0061 27.2163C36.7422 27.2119 36.7404 27.2107 36.9152 27.1634C37.0133 27.1369 37.1395 27.0946 37.1956 27.0693C37.2798 27.0316 37.6481 26.9655 37.7939 26.9621C37.8144 26.9616 37.9062 26.9286 37.9979 26.8886C38.1975 26.8017 38.2755 26.7952 38.3168 26.8622ZM36.5965 27.3087C36.5193 27.3203 36.3931 27.3203 36.316 27.3087C36.2389 27.2969 36.302 27.2874 36.4562 27.2874C36.6105 27.2874 36.6736 27.2969 36.5965 27.3087ZM42.6923 27.617C42.6742 27.6662 42.606 27.7921 42.5408 27.897C42.4757 28.0019 42.4224 28.1227 42.4224 28.1653C42.4224 28.208 42.401 28.243 42.3748 28.243C42.3487 28.243 42.3135 28.2866 42.2966 28.34C42.2797 28.3933 42.1864 28.5214 42.0892 28.6246C41.992 28.728 41.9125 28.8274 41.9125 28.8455C41.9125 28.908 41.2429 29.5081 41.0678 29.6026C40.9714 29.6546 40.8926 29.7149 40.8926 29.7367C40.8926 29.7584 40.6044 29.7761 40.2521 29.7761C39.8382 29.7761 39.6229 29.7581 39.6433 29.725C39.6606 29.6969 39.7722 29.6739 39.8911 29.6739C40.0101 29.6739 40.1324 29.6488 40.163 29.6181C40.2033 29.5777 40.2501 29.5791 40.3321 29.6231C40.5682 29.7497 41.3515 29.4335 41.3515 29.2117C41.3515 29.1849 41.3791 29.1629 41.4129 29.1629C41.4821 29.1629 41.9125 28.7226 41.9125 28.6518C41.9125 28.6265 41.9411 28.5875 41.9762 28.565C42.093 28.4901 42.1741 28.2875 42.1433 28.1473C42.1182 28.0328 42.1418 27.988 42.2805 27.8858C42.3725 27.8178 42.4897 27.7095 42.5408 27.645C42.6506 27.5062 42.7391 27.4899 42.6923 27.617ZM42.1164 28.1909C42.1164 28.2185 42.0591 28.2555 41.9889 28.2732C41.9188 28.2908 41.8615 28.3257 41.8615 28.3507C41.8615 28.3759 41.8399 28.3963 41.8137 28.3963C41.7873 28.3963 41.6934 28.4625 41.605 28.5435C41.5165 28.6245 41.3832 28.7216 41.3086 28.7593C41.2341 28.7971 41.1204 28.8672 41.0559 28.9153C40.9915 28.9632 40.8711 29.0174 40.7882 29.0356C40.7055 29.0539 40.6376 29.0881 40.6376 29.1118C40.6376 29.1354 40.5691 29.1699 40.4853 29.1883C40.4014 29.2067 40.3197 29.2431 40.3038 29.2691C40.2877 29.295 40.2186 29.3162 40.1502 29.3162C40.0817 29.3162 40.0257 29.3388 40.0257 29.3663C40.0257 29.3939 39.9626 29.4305 39.8855 29.4478C39.8084 29.465 39.6704 29.5127 39.579 29.5536C39.4875 29.5946 39.39 29.6141 39.3623 29.5969C39.3345 29.5798 39.3118 29.5865 39.3118 29.6121C39.3118 29.6945 38.9193 29.8223 38.8572 29.76C38.7625 29.6651 38.7944 29.6356 39.0302 29.6001C39.1558 29.5813 39.2718 29.5441 39.2881 29.5177C39.3044 29.4912 39.3969 29.4695 39.4934 29.4695C39.5899 29.4695 39.6688 29.4475 39.6688 29.4207C39.6688 29.3939 39.7491 29.3568 39.8473 29.3384C39.9454 29.3199 40.0257 29.2844 40.0257 29.2593C40.0257 29.2344 40.0946 29.214 40.1787 29.214C40.2628 29.214 40.3317 29.1914 40.3317 29.1639C40.3317 29.1363 40.3891 29.0993 40.4592 29.0816C40.5293 29.064 40.5869 29.0349 40.5873 29.0169C40.5875 28.9987 40.6851 28.9384 40.804 28.8826C40.9228 28.8267 41.0316 28.7693 41.0456 28.7548C41.0952 28.7037 41.2762 28.5974 41.3643 28.5678C41.4134 28.5512 41.4535 28.5201 41.4535 28.4985C41.4535 28.4769 41.4937 28.4459 41.5428 28.4293C41.6449 28.3949 41.7996 28.2979 41.9012 28.2047C41.984 28.1287 42.1164 28.1202 42.1164 28.1909ZM28.6119 28.5967C28.6212 28.6225 28.7321 28.6545 28.8583 28.6677C29.0887 28.692 29.7805 28.8794 29.9357 28.9596C29.9813 28.9833 30.1018 29.0183 30.2034 29.0373C30.305 29.0565 30.3881 29.0925 30.3881 29.1175C30.3881 29.1424 30.467 29.1629 30.5635 29.1629C30.66 29.1629 30.7532 29.1859 30.7706 29.214C30.7879 29.2421 30.8639 29.265 30.9393 29.2648C31.0903 29.2646 31.5097 29.3915 31.7218 29.5015C31.7963 29.5402 31.9257 29.5717 32.0096 29.5717C32.0973 29.5717 32.1743 29.6039 32.191 29.6475C32.2082 29.6926 32.2534 29.7105 32.3023 29.6917C32.3476 29.6742 32.5148 29.6997 32.674 29.7483C32.8331 29.797 33.0321 29.8545 33.1162 29.8762C33.2004 29.8979 33.361 29.9395 33.4732 29.9687C33.5854 29.9979 33.8561 30.0627 34.075 30.1127C34.2939 30.1626 34.4845 30.2223 34.4988 30.2453C34.5366 30.3069 34.0893 30.2965 34.0272 30.2343C33.9795 30.1865 33.7386 30.1289 33.244 30.047C33.1458 30.0308 33.0196 29.9896 32.9635 29.9555C32.9073 29.9213 32.7236 29.8643 32.5553 29.8286C32.387 29.793 32.1771 29.7322 32.0887 29.6933C32.0002 29.6545 31.8863 29.6228 31.8352 29.6228C31.6852 29.6228 31.204 29.5006 31.204 29.4624C31.204 29.4432 31.1122 29.4119 31 29.3929C30.8878 29.3738 30.7961 29.3374 30.7961 29.3117C30.7961 29.286 30.6928 29.2651 30.5666 29.2651C30.4404 29.2651 30.3371 29.2441 30.3371 29.2185C30.3371 29.1928 30.2455 29.1564 30.1334 29.1373C30.0213 29.1184 29.9168 29.0819 29.9009 29.0562C29.8851 29.0305 29.7946 29.0096 29.6997 29.0096C29.6049 29.0096 29.5144 28.9886 29.4985 28.9629C29.4826 28.9373 29.3782 28.9007 29.2663 28.8818C29.1543 28.8629 29.0499 28.8264 29.034 28.8007C29.0182 28.775 28.9205 28.7528 28.817 28.7512C28.7135 28.7496 28.5256 28.7049 28.3994 28.6518L28.1699 28.5554L28.3824 28.5524C28.4992 28.5509 28.6025 28.5708 28.6119 28.5967ZM38.7157 29.7807C38.6368 29.8598 38.3329 29.8658 38.3059 29.7889C38.2899 29.7436 38.3543 29.725 38.5274 29.725C38.7035 29.725 38.7559 29.7405 38.7157 29.7807ZM39.538 29.8219C39.5702 29.8741 39.4519 29.9295 39.3076 29.9295C39.2538 29.9295 39.2098 29.9524 39.2098 29.9806C39.2098 30.0087 39.1739 30.0317 39.1299 30.0317C39.0861 30.0317 38.9749 30.0892 38.883 30.1594C38.7909 30.2297 38.7027 30.2872 38.6867 30.2872C38.6706 30.2872 38.5591 30.3792 38.4387 30.4916L38.22 30.696L37.3509 30.6923C36.8729 30.6903 36.3555 30.6664 36.2013 30.6393C36.047 30.6122 35.7717 30.5769 35.5894 30.561C35.4071 30.545 35.2361 30.5114 35.2095 30.4862C35.1828 30.4611 35.0643 30.4405 34.946 30.4405C34.6957 30.4405 34.5582 30.398 34.5983 30.3329C34.6427 30.261 34.8195 30.2775 35.5215 30.4193C36.0262 30.5212 36.3937 30.558 37.1285 30.58L38.081 30.6086L38.2414 30.4479C38.3296 30.3595 38.4309 30.2872 38.4665 30.2872C38.5021 30.2872 38.5727 30.2412 38.6234 30.185C38.6742 30.1288 38.7552 30.0828 38.8036 30.0828C38.8519 30.0828 38.92 30.0483 38.9549 30.0061C38.9898 29.9639 39.059 29.9295 39.1086 29.9295C39.1583 29.9295 39.2121 29.895 39.2283 29.8528C39.2599 29.77 39.4917 29.7469 39.538 29.8219ZM27.8385 31.8666C27.6001 31.9469 27.2559 32.0526 27.0736 32.1013C26.8913 32.1501 26.652 32.2233 26.5417 32.2639C26.4315 32.3047 26.2136 32.332 26.0574 32.3247C25.6041 32.3036 25.6599 32.4563 26.3469 33.1156C26.7361 33.4891 26.7369 33.5051 26.3755 33.7753C25.6863 34.2906 25.6454 34.5337 26.0154 35.914C26.1649 36.4725 25.9874 36.7774 25.513 36.7774C25.3745 36.7774 24.8988 37.3033 24.8017 37.5637C24.7103 37.8091 24.7816 38.3825 24.9296 38.5916C24.9495 38.6197 25.0058 38.8382 25.0549 39.0771C25.2729 40.1381 25.393 40.4566 25.6817 40.7379C26.0245 41.072 26.0939 41.0768 27.0991 40.8365C28.0237 40.6155 28.2677 40.6559 28.4403 41.0581C28.5839 41.3925 28.6256 41.4011 29.0034 41.1733C29.6248 40.7987 29.9307 40.3128 30.2424 39.2049C30.2977 39.0081 30.4029 38.7207 30.4761 38.5661C30.855 37.7654 30.8515 37.5724 30.4519 37.201C29.7482 36.5468 29.1865 36.4344 28.2133 36.7528C28 36.8225 27.7424 36.8802 27.6408 36.8809C27.3767 36.8827 27.0506 36.966 26.727 37.1143C26.5727 37.1851 26.3833 37.2556 26.3061 37.2711C26.1145 37.3096 25.8338 37.621 25.7262 37.9145C25.6088 38.2352 25.5601 38.2306 25.3233 37.8771C24.9333 37.2951 25.5861 36.6668 26.4057 36.8353C26.6832 36.8924 26.7031 36.8887 27.1246 36.7013C27.363 36.5954 27.6303 36.4771 27.7186 36.4386C27.8071 36.4002 27.9333 36.3683 27.9991 36.3681C28.415 36.3662 28.8215 36.1315 28.9066 35.8441C29.0353 35.4105 29.1202 35.2 29.1899 35.1421C29.4474 34.9278 29.3702 34.5722 28.9664 34.1131C28.535 33.6229 28.2525 33.6239 27.405 34.1192C26.4359 34.6857 26.1541 34.7331 26.1565 34.3293C26.1576 34.1298 26.5589 33.7938 26.9958 33.6265C29.3888 32.7099 29.6255 32.5213 29.0929 31.9563C28.809 31.6551 28.526 31.6349 27.8385 31.8666ZM23.0069 31.8312C22.6841 31.897 22.6822 31.9095 22.9666 32.09C23.3015 32.3026 23.7081 32.6863 23.7081 32.7898C23.7081 32.9056 23.6623 32.9409 23.2075 33.1748C22.7664 33.4017 22.7665 33.5257 23.2076 33.3801C23.5989 33.251 24.021 33.2666 24.4359 33.4255C24.9956 33.64 25.2391 33.5162 25.2366 33.0185C25.2326 32.216 24.0938 31.6096 23.0069 31.8312ZM15.7606 32.5368C14.5743 33.0388 14.1713 35.8288 14.9835 37.918C15.6762 39.7001 16.9912 41.0045 18.8472 41.7509C19.6201 42.0619 19.9971 41.9447 19.6669 41.4964C19.6038 41.4107 19.5063 41.2769 19.4502 41.199C19.3941 41.121 19.3018 40.997 19.2451 40.9233C18.3852 39.805 17.3066 37.4793 17.0303 36.1478C17.0058 36.0303 16.9506 35.7732 16.9076 35.5765C16.8049 35.1087 16.733 34.5544 16.6688 33.7367C16.5836 32.6532 16.3172 32.3012 15.7606 32.5368ZM34.6233 32.5494C34.3853 32.6702 34.3175 32.8783 34.2342 33.7434C34.1532 34.5874 34.1065 34.9571 34.0161 35.4743C33.8564 36.3875 33.4097 37.7422 32.9369 38.7469C32.5219 39.6285 32.0859 40.3467 31.4692 41.1649C30.8046 42.046 31.236 42.1669 32.6318 41.4907C35.0522 40.3179 36.5023 37.797 36.3275 35.0654C36.2218 33.413 35.3777 32.1668 34.6233 32.5494ZM11.1894 33.8354C9.33859 34.5134 10.8796 38.4632 13.5605 39.9132C13.6587 39.9662 13.8831 40.0873 14.059 40.1823C14.633 40.4917 14.9832 40.2375 14.5252 39.8437C14.1728 39.5408 13.2547 37.4944 13.0233 36.4964C12.9515 36.1872 12.8711 35.851 12.8443 35.7495C12.8176 35.6478 12.7956 35.5181 12.7956 35.4612C12.7956 35.2444 12.5315 34.4576 12.3817 34.2283C12.1178 33.8242 11.645 33.6685 11.1894 33.8354ZM39.0483 33.8098C38.5481 33.9703 38.3249 34.3887 38.0651 35.6531C37.723 37.3176 37.318 38.3512 36.5104 39.6202C35.9021 40.5763 36.2804 40.6205 37.6291 39.7511C38.6693 39.0804 40.2297 37.2182 40.2297 36.6474C40.2297 36.6315 40.2783 36.5117 40.3376 36.3811C40.9478 35.0387 40.1539 33.4551 39.0483 33.8098ZM7.76419 34.4168C6.49842 34.9323 6.87615 36.5889 8.56235 37.9183C8.74516 38.0624 8.90617 38.1924 8.92019 38.2071C9.03429 38.3269 10.2218 39.0463 10.398 39.1023C10.7205 39.2049 10.7234 38.8827 10.4028 38.5745C9.54485 37.7502 9.08452 36.7992 8.85135 35.3695C8.711 34.5098 8.33811 34.183 7.76419 34.4168ZM42.5236 34.4192C42.2743 34.5521 42.1409 34.8213 42.0421 35.3914C41.7915 36.8376 41.3691 37.701 40.4989 38.5467C39.8504 39.177 40.4138 39.2763 41.2833 38.6849C41.3795 38.6196 41.4702 38.5661 41.4851 38.5661C41.5694 38.5661 42.6186 37.707 43.0137 37.3144C43.9591 36.375 44.1569 35.3611 43.5254 34.6919C43.2151 34.363 42.827 34.2573 42.5236 34.4192ZM23.1424 34.5397C23.0417 34.604 22.871 34.7345 22.763 34.8297C22.6552 34.9248 22.3819 35.0893 22.1559 35.1951C20.8048 35.8275 20.823 35.8228 20.3975 35.6547C20.0504 35.5176 20.0346 35.5848 20.3098 36.0275C21.0129 37.1579 21.6375 37.2443 22.684 36.3554C23.0144 36.0747 23.035 36.3607 22.7265 36.948C22.5038 37.372 22.0827 37.8446 21.4389 38.3931L21.1329 38.6537L21.1426 39.006C21.1536 39.4115 21.2424 39.6583 21.4474 39.8533C21.808 40.1959 22.0081 40.1252 22.4265 39.507C22.6933 39.1129 22.8168 38.9749 22.9029 38.9749C22.9262 38.9749 22.939 39.4521 22.9315 40.0353C22.9181 41.069 22.9206 41.1006 23.0366 41.2874C23.2122 41.5704 23.4529 41.5306 23.578 41.198C23.5992 41.1417 23.6243 40.6473 23.634 40.0992C23.6436 39.5511 23.6641 38.8267 23.6795 38.4894L23.7077 37.8762L24.4301 36.4197C24.8275 35.6186 25.2073 34.8885 25.2743 34.7971C25.3614 34.6783 25.3827 34.6074 25.3494 34.5478C25.312 34.4809 25.1855 34.6221 24.7114 35.2589C23.9281 36.3111 23.8627 36.3384 24.1868 35.4772C24.3795 34.965 24.371 34.8503 24.1224 34.6115C23.9133 34.4108 23.4029 34.3734 23.1424 34.5397ZM28.0927 34.9231C28.0937 35.13 27.7336 35.4974 27.3491 35.6818C27.0019 35.8484 26.9933 35.8459 26.8411 35.5448C26.6278 35.1232 26.6956 35.012 27.2606 34.8569C27.4242 34.812 27.6613 34.7465 27.7875 34.7115C28.0496 34.6388 28.0914 34.6677 28.0927 34.9231ZM29.2001 37.5354C29.3769 37.7678 29.4077 37.9459 29.3198 38.2303C29.293 38.3166 29.2334 38.6057 29.1871 38.8727C29.1408 39.1397 29.051 39.5192 28.9873 39.7159C28.9239 39.9127 28.8568 40.1369 28.8386 40.2142C28.7938 40.4038 28.6859 40.3911 28.5627 40.1819C28.4911 40.0602 28.3952 39.9872 28.2389 39.9352C27.7992 39.7889 27.9159 39.3249 28.4622 39.0461C28.9054 38.8201 28.8532 38.275 28.3739 38.1216C28.0303 38.0117 28.1433 37.7204 28.6401 37.4349C28.9487 37.2576 28.995 37.2659 29.2001 37.5354ZM26.6632 37.7804C27.4662 37.9622 27.2264 38.6987 26.3724 38.6738C26.1598 38.6675 26.1557 38.6707 26.1557 38.8367C26.1557 39.1126 26.6665 39.486 27.0441 39.486C27.1385 39.486 27.1993 39.8301 27.1215 39.9241C27.0584 40.0003 26.4672 40.2014 26.3063 40.2014C26.1812 40.2014 26.1592 40.1571 26.0439 39.672C25.742 38.4015 25.744 38.1689 26.059 37.8533C26.2415 37.6704 26.1994 37.6755 26.6632 37.7804Z", fill: "#ECC28A" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.1729 7.74699C31.938 7.80077 31.9998 7.80882 32.5936 7.80154C32.9687 7.79694 33.1186 7.81496 33.2041 7.875C33.2664 7.91883 33.4041 7.9546 33.5101 7.9546C33.616 7.9546 33.7027 7.97312 33.7027 7.99587C33.7027 8.0577 34.0749 8.21012 34.226 8.21012C34.2992 8.21012 34.5298 8.32408 34.7431 8.46564C34.9548 8.60618 35.1478 8.72116 35.172 8.72116C35.1961 8.72116 35.3171 8.82363 35.4409 8.94883C35.8208 9.33339 35.8789 9.38552 35.9274 9.38552C35.9531 9.38552 36.0174 9.46601 36.0703 9.56439C36.1232 9.66276 36.1915 9.74351 36.2221 9.74389C36.2527 9.74414 36.3224 9.83779 36.3771 9.95201C36.4754 10.1578 36.5727 10.295 36.748 10.4756C36.8575 10.5884 36.6934 10.7653 36.4791 10.7653C36.4138 10.7653 36.3461 10.7883 36.3288 10.8164C36.3115 10.8445 36.2355 10.8683 36.16 10.8693C36.0846 10.8704 35.9655 10.9041 35.8954 10.9442C35.8253 10.9843 35.7067 11.018 35.6319 11.0191C35.5572 11.0201 35.4883 11.0381 35.4789 11.0592C35.4599 11.1021 34.9231 11.3806 34.8618 11.3794C34.8402 11.379 34.7316 11.4361 34.6206 11.5063C34.5095 11.5766 34.393 11.6341 34.3616 11.6341C34.3304 11.6341 34.2005 11.7261 34.073 11.8385C33.9455 11.951 33.8102 12.0429 33.772 12.0429C33.7339 12.0429 33.7027 12.0659 33.7027 12.094C33.7027 12.1222 33.6715 12.1452 33.6332 12.1452C33.5451 12.1452 32.9063 12.6391 32.6912 12.8734C32.6461 12.9226 32.5875 12.9628 32.5611 12.9628C32.4948 12.9628 31.816 13.4841 31.816 13.5349C31.816 13.5575 31.7891 13.5761 31.7562 13.5761C31.7234 13.5761 31.6544 13.6143 31.6029 13.6609C31.5514 13.7077 31.4964 13.7328 31.4806 13.7169C31.4393 13.6755 31.6219 13.4739 31.7008 13.4739C31.7373 13.4739 31.7931 13.4168 31.8248 13.3471C31.8565 13.2774 31.9227 13.2075 31.972 13.1918C32.0753 13.1589 32.1474 13.0139 32.0605 13.0139C32.0285 13.0139 31.8743 13.1248 31.7179 13.2603C31.5615 13.3958 31.3667 13.5625 31.285 13.6308C31.2033 13.6991 31.0747 13.8182 30.9991 13.8955C30.9235 13.9728 30.8461 14.036 30.8271 14.036C30.8081 14.036 30.6155 14.1806 30.3991 14.3575C30.1828 14.5342 29.8858 14.7685 29.7392 14.8781C29.2677 15.2305 29.6071 15.136 30.1755 14.7568C30.3274 14.6555 30.5118 14.5407 30.5856 14.5016C30.69 14.4461 30.9949 14.2403 31.2496 14.0531C31.2605 14.0451 31.2405 14.0034 31.2051 13.9606C31.161 13.9074 31.1587 13.8827 31.1978 13.8827C31.2293 13.8827 31.255 13.9072 31.255 13.9373C31.255 13.9917 31.4584 13.9526 31.51 13.8883C31.5707 13.8127 31.916 13.5761 31.9655 13.5761C31.9955 13.5761 32.0199 13.555 32.0199 13.5292C32.0199 13.5034 32.0945 13.4358 32.1857 13.3792C32.2768 13.3226 32.3979 13.2327 32.4546 13.1794C32.5115 13.126 32.6262 13.0382 32.7096 12.9843C32.8598 12.8872 32.9523 12.8131 33.2624 12.542C33.3503 12.4652 33.4405 12.402 33.4626 12.4014C33.4849 12.4011 33.565 12.3432 33.6406 12.2729C33.7163 12.2026 33.8071 12.1452 33.8424 12.1452C33.8777 12.1452 33.9067 12.1248 33.9067 12.1001C33.9067 12.0751 33.9468 12.041 33.9959 12.024C34.045 12.0072 34.1654 11.9441 34.2636 11.8839C34.3618 11.8238 34.5111 11.7372 34.5953 11.6916C34.6796 11.6459 34.8207 11.5568 34.909 11.4936C34.9974 11.4303 35.1064 11.3786 35.1511 11.3786C35.1959 11.3786 35.2325 11.3574 35.2325 11.3316C35.2325 11.3056 35.3063 11.2682 35.3965 11.2484C35.4868 11.2285 35.5958 11.1949 35.6388 11.1737C35.8258 11.0812 35.9831 11.0246 36.1376 10.9943C36.2287 10.9763 36.3033 10.9405 36.3033 10.9146C36.3033 10.8888 36.3954 10.8675 36.5079 10.8675C36.6205 10.8675 36.7524 10.8462 36.8011 10.8201C36.8498 10.7941 36.9289 10.7607 36.9767 10.7459C37.0901 10.711 36.3816 9.63325 36.1886 9.54739C36.1675 9.53794 36.1503 9.49769 36.1503 9.45796C36.1503 9.4181 36.1159 9.38552 36.0738 9.38552C36.0318 9.38552 35.9972 9.36827 35.9971 9.34719C35.996 9.18877 35.1972 8.53719 34.697 8.28678C34.5849 8.23056 34.4854 8.16732 34.4761 8.14624C34.4667 8.12516 34.3852 8.10791 34.2951 8.10791C34.2048 8.10791 34.1043 8.08108 34.0715 8.04825C33.976 7.95255 33.6438 7.85405 33.4137 7.85316C33.2969 7.85277 33.193 7.8276 33.1829 7.7972C33.16 7.72833 32.4159 7.69128 32.1729 7.74699ZM31.459 7.89136C31.459 7.91282 31.3056 7.97427 31.1183 8.02819C30.9309 8.08198 30.6772 8.17933 30.5547 8.24474C30.432 8.31003 30.3005 8.36343 30.2622 8.36343C30.224 8.36343 30.1851 8.38068 30.1757 8.40176C30.1496 8.46066 29.785 8.61895 29.6755 8.61895C29.622 8.61895 29.5662 8.6385 29.5515 8.66252C29.5367 8.68641 29.4148 8.74761 29.2807 8.79833C29.1466 8.84905 29.0253 8.90808 29.011 8.92929C28.9968 8.95062 28.8821 8.9832 28.756 9.00173C28.6301 9.02012 28.5051 9.05666 28.4785 9.0826C28.4518 9.10866 28.3409 9.13 28.2321 9.13C28.0964 9.13 28.0406 9.15018 28.0549 9.19388C28.0866 9.29047 28.3905 9.30094 28.5287 9.2101C28.5959 9.16603 28.6918 9.12987 28.7419 9.12974C28.792 9.12949 28.8987 9.09499 28.979 9.05309C29.0593 9.01105 29.152 8.97669 29.1849 8.97669C29.2178 8.97669 29.3348 8.93069 29.4448 8.87448C29.5548 8.81826 29.6801 8.77214 29.7233 8.77188C29.7664 8.77176 29.8706 8.72589 29.9547 8.67006C30.0389 8.61423 30.1421 8.56798 30.1842 8.56747C30.2263 8.56683 30.4636 8.46385 30.7117 8.33852C30.9598 8.21319 31.2411 8.09603 31.3369 8.07802C31.4328 8.06 31.5236 8.02487 31.5391 7.99995C31.5545 7.97504 31.6446 7.9546 31.7395 7.9546C31.8343 7.9546 31.9261 7.9316 31.9434 7.90349C31.9628 7.87194 31.876 7.85239 31.717 7.85239C31.5751 7.85239 31.459 7.86989 31.459 7.89136ZM27.5326 9.33442C27.5326 9.39331 27.6551 9.39331 27.8385 9.33442C27.9469 9.29966 27.9334 9.29276 27.7493 9.28842C27.6301 9.28561 27.5326 9.30631 27.5326 9.33442ZM26.6813 9.45873C26.7464 9.50817 26.8656 9.52082 27.0892 9.50178C27.5854 9.45975 27.5571 9.38526 27.0456 9.38718C26.6484 9.38859 26.6012 9.39778 26.6813 9.45873ZM25.7223 9.53883C25.5078 9.56835 25.5441 9.57499 25.9518 9.58112C26.2808 9.5861 26.4118 9.57243 26.3597 9.53883C26.2764 9.48479 26.1151 9.48479 25.7223 9.53883ZM31.9278 9.92927C31.8921 9.96747 31.7734 9.99877 31.664 9.99877C31.483 9.99877 31.3751 10.0509 31.4339 10.1099C31.4466 10.1227 31.7226 10.0989 32.0473 10.057C32.7199 9.97028 33.0579 10.0188 33.2916 10.236C33.3628 10.3023 33.4387 10.3565 33.46 10.3565C33.4813 10.3565 33.4987 10.3997 33.4987 10.4525C33.4987 10.5052 33.5331 10.577 33.5752 10.612C33.6753 10.6952 33.6763 11.122 33.5769 11.2539C33.4955 11.3616 33.4705 11.5554 33.5438 11.5101C33.7979 11.3527 33.8525 10.6912 33.6337 10.4206C33.5711 10.3432 33.4801 10.2166 33.4317 10.1393C33.3646 10.0326 33.3032 9.99877 33.1763 9.99877C33.0844 9.99877 32.9874 9.97846 32.9607 9.95367C32.8725 9.87178 32.0007 9.85108 31.9278 9.92927ZM31.1297 10.1485C31.1137 10.1747 31.1198 10.208 31.1434 10.2227C31.2089 10.2634 31.4107 10.1978 31.379 10.1463C31.3421 10.0865 31.1671 10.0881 31.1297 10.1485ZM30.5929 10.3083C30.4953 10.3629 30.3794 10.4076 30.3354 10.4076C30.2507 10.4076 30.1332 10.5027 30.1332 10.5711C30.1332 10.6279 30.3246 10.6226 30.3601 10.565C30.3761 10.5392 30.5497 10.4682 30.7459 10.4074C30.9422 10.3465 31.0897 10.2756 31.0739 10.2499C31.0263 10.1729 30.7823 10.2024 30.5929 10.3083ZM29.8527 10.6631C29.8354 10.6912 29.8684 10.7142 29.9262 10.7142C29.9839 10.7142 30.0312 10.6912 30.0312 10.6631C30.0312 10.635 29.9982 10.612 29.9578 10.612C29.9174 10.612 29.8701 10.635 29.8527 10.6631ZM29.3683 10.8706C29.2702 10.9225 29.1497 10.9659 29.1006 10.9673C29.0515 10.9686 29.0112 10.9985 29.011 11.0336C29.0107 11.0688 28.9132 11.1541 28.7943 11.2232C28.6192 11.3248 28.597 11.3528 28.678 11.3695C28.7329 11.3809 28.7865 11.3647 28.7969 11.3334C28.8074 11.3021 28.8468 11.2764 28.8845 11.2764C28.9223 11.2764 28.9834 11.2475 29.0204 11.2124C29.1091 11.1281 29.6326 10.8675 29.7133 10.8675C29.748 10.8675 29.7763 10.8445 29.7763 10.8164C29.7763 10.738 29.5669 10.7657 29.3683 10.8706ZM28.3358 11.5239C28.2587 11.5704 28.1956 11.6358 28.1956 11.669C28.1955 11.7022 28.1496 11.744 28.0935 11.7619C28.0374 11.7798 27.9915 11.812 27.9915 11.8334C27.9915 11.8549 27.8587 12.0086 27.6961 12.1749C27.4236 12.4541 27.0736 13.0193 27.0736 13.1805C27.0736 13.2182 27.0452 13.2775 27.0104 13.3124C26.8926 13.4304 26.8053 13.906 26.7933 14.4937C26.7857 14.8754 26.7613 15.0858 26.7236 15.0983C26.6917 15.1091 26.6654 15.1791 26.6652 15.254C26.6644 15.4644 26.4039 15.8704 26.0571 16.2012C25.8842 16.3661 25.7522 16.5104 25.7635 16.5217C25.7972 16.5555 25.9518 16.4821 25.9518 16.4324C25.9518 16.4074 25.9747 16.3868 26.0028 16.3868C26.0308 16.3868 26.0974 16.3466 26.1505 16.2974C26.2038 16.2482 26.3014 16.159 26.3673 16.0994C26.5109 15.9692 26.7677 15.505 26.7677 15.3753C26.7677 15.3245 26.7883 15.2611 26.8135 15.2344C26.8386 15.2077 26.8703 14.8984 26.8839 14.5471C26.9064 13.9684 26.951 13.722 27.0805 13.4617C27.1047 13.4129 27.1246 13.3295 27.1246 13.2763C27.1246 13.2232 27.1591 13.1511 27.2011 13.1161C27.2432 13.0811 27.2776 13.0208 27.2776 12.9821C27.2776 12.9434 27.298 12.9117 27.3231 12.9117C27.3481 12.9117 27.3829 12.8542 27.4005 12.784C27.4181 12.7137 27.4551 12.6562 27.4826 12.6562C27.51 12.6562 27.5326 12.6243 27.5326 12.5853C27.5326 12.5462 27.6817 12.3588 27.864 12.1688C28.0463 11.9787 28.1955 11.8036 28.1955 11.7798C28.1955 11.7559 28.2127 11.7363 28.2337 11.7362C28.2548 11.7362 28.3523 11.6672 28.4504 11.583C28.6408 11.4199 28.569 11.3828 28.3358 11.5239ZM33.3967 11.5775C33.3967 11.6059 33.1088 11.9204 32.7569 12.2764C32.4049 12.6324 32.1278 12.9347 32.141 12.948C32.189 12.9959 32.3769 12.9032 32.3769 12.8316C32.3769 12.7914 32.3988 12.7584 32.4256 12.7584C32.4523 12.7584 32.5295 12.7067 32.597 12.6434C33.0277 12.2401 33.1928 12.073 33.1928 12.04C33.1928 12.0194 33.2616 11.9289 33.3457 11.8385C33.5088 11.6635 33.5291 11.6078 33.4477 11.5575C33.4197 11.5401 33.3967 11.5491 33.3967 11.5775ZM35.8189 14.2604C35.6506 14.2933 35.5393 14.3368 35.5716 14.3569C35.6665 14.4161 36.7174 14.3357 36.6961 14.2708C36.6707 14.1937 36.1882 14.1878 35.8189 14.2604ZM36.7999 14.2197C36.7252 14.2947 36.7651 14.3426 36.9025 14.3432C36.9796 14.3435 37.1554 14.378 37.2931 14.4198C37.4308 14.4617 37.643 14.496 37.7648 14.496C37.8865 14.496 37.9861 14.5165 37.9861 14.5417C37.9861 14.6039 38.4704 14.8537 38.591 14.8537C38.6775 14.8537 38.9667 15.0525 39.4521 15.4456C39.5433 15.5194 39.6178 15.6122 39.6178 15.6518C39.6178 15.6914 39.6381 15.7637 39.6627 15.8125C39.6874 15.8613 39.7596 16.0163 39.8232 16.1568C39.8867 16.2974 40.0156 16.5216 40.1097 16.6552C40.2037 16.7887 40.2807 16.9214 40.2807 16.9497C40.2807 17.0025 40.3144 17.0804 40.4349 17.3067C40.5037 17.4361 40.62 17.6677 40.6974 17.8299C40.7206 17.8787 40.7397 17.9593 40.7397 18.0091C40.7397 18.0589 40.7879 18.1299 40.8466 18.1668C40.9161 18.2102 40.9447 18.2683 40.928 18.3324C40.9138 18.3865 40.9212 18.4426 40.9444 18.4571C40.9889 18.4845 41.3006 19.1035 41.3006 19.1643C41.3006 19.1838 41.3587 19.292 41.4299 19.4049C41.501 19.5178 41.5473 19.6296 41.5325 19.6535C41.5178 19.6773 41.5742 19.8316 41.6575 19.9966C41.7409 20.1614 41.8095 20.3349 41.8099 20.382C41.8103 20.4293 41.8421 20.4994 41.8806 20.5381C41.9193 20.5767 41.9508 20.6671 41.9508 20.7389C41.9508 20.8105 42.0111 20.9894 42.0846 21.1363C42.1583 21.2832 42.2185 21.4461 42.2185 21.4984C42.2185 21.5507 42.239 21.6061 42.2641 21.6217C42.2892 21.6371 42.3212 21.7363 42.3354 21.8418C42.3495 21.9475 42.3883 22.1258 42.4215 22.2383C42.4548 22.3507 42.5072 22.5652 42.5379 22.7151L42.5939 22.9875L42.3298 23.231C42.1844 23.3649 42.0655 23.4986 42.0655 23.5283C42.0655 23.558 41.8934 23.7541 41.683 23.9643C41.4727 24.1743 41.3006 24.3652 41.3006 24.3883C41.3006 24.4113 41.1457 24.5831 40.9564 24.7697C40.7671 24.9565 40.4652 25.2624 40.2857 25.4497C40.1061 25.6368 39.9359 25.79 39.9075 25.79C39.879 25.79 39.8195 25.8243 39.7752 25.866C39.5579 26.0703 39.1983 26.3522 39.1548 26.3522C39.1279 26.3522 39.015 26.4097 38.9039 26.4799C38.7929 26.5502 38.6728 26.6082 38.6373 26.6088C38.6017 26.6095 38.5151 26.655 38.445 26.7099L38.3175 26.8098L38.479 26.8109C38.5678 26.8116 38.6481 26.7949 38.6575 26.7738C38.6668 26.7527 38.8294 26.6557 39.0187 26.5582C39.208 26.4608 39.3629 26.363 39.3629 26.341C39.3629 26.3191 39.3874 26.3011 39.4173 26.3011C39.5756 26.3011 40.5903 25.3688 41.2751 24.594C41.4714 24.3719 41.7238 24.0925 41.836 23.973C41.9482 23.8535 42.1547 23.6248 42.295 23.465C42.4352 23.3051 42.5896 23.1349 42.638 23.0868C42.7275 22.9979 42.7165 22.4682 42.6251 22.4682C42.6041 22.4682 42.5716 22.3653 42.5527 22.2394C42.534 22.1136 42.4969 21.9973 42.4705 21.9809C42.4441 21.9646 42.4224 21.872 42.4224 21.7753C42.4224 21.6785 42.3995 21.5995 42.3714 21.5995C42.3434 21.5995 42.3203 21.5477 42.3202 21.4845C42.3199 21.4212 42.2855 21.3036 42.2437 21.2231C42.2018 21.1426 42.1675 21.0353 42.1675 20.9845C42.1675 20.9338 42.1292 20.8156 42.0823 20.722C41.9244 20.4062 41.9125 20.3746 41.9125 20.2714C41.9125 20.2148 41.8906 20.1685 41.8638 20.1685C41.837 20.1685 41.8001 20.0878 41.7816 19.9892C41.7631 19.8904 41.7277 19.7971 41.7028 19.7817C41.6779 19.7662 41.6575 19.6975 41.6575 19.6289C41.6575 19.5603 41.6361 19.5042 41.61 19.5042C41.5839 19.5042 41.5479 19.4524 41.5303 19.3892C41.4866 19.2329 41.438 19.1173 41.2812 18.7968C41.2077 18.6466 41.1476 18.4914 41.1476 18.4518C41.1476 18.4122 41.1262 18.3799 41.1001 18.3799C41.0739 18.3799 41.0363 18.3281 41.0166 18.2649C40.9968 18.2017 40.9264 18.0307 40.8602 17.8849C40.7939 17.7392 40.7397 17.5954 40.7397 17.5655C40.7397 17.5356 40.7167 17.5111 40.6887 17.5111C40.6606 17.5111 40.6377 17.4679 40.6377 17.4152C40.6377 17.3624 40.6033 17.2906 40.5612 17.2556C40.5191 17.2206 40.4847 17.1603 40.4847 17.1216C40.4847 17.0829 40.4618 17.0512 40.4337 17.0512C40.4057 17.0512 40.3827 16.9937 40.3827 16.9234C40.3827 16.8531 40.3602 16.7956 40.3328 16.7956C40.3052 16.7956 40.2672 16.7324 40.2484 16.6551C40.2295 16.5778 40.1995 16.5031 40.1817 16.489C40.164 16.475 40.0471 16.2565 39.9219 16.0035C39.7967 15.7506 39.6771 15.5359 39.6561 15.5266C39.6351 15.5171 39.6178 15.4654 39.6178 15.4116C39.6178 15.3577 39.5939 15.3136 39.5647 15.3136C39.5355 15.3136 39.3872 15.2216 39.2354 15.1092C39.0836 14.9968 38.9353 14.9048 38.9061 14.9048C38.8769 14.9048 38.853 14.8818 38.853 14.8537C38.853 14.8256 38.8063 14.8026 38.7493 14.8026C38.6924 14.8026 38.6325 14.7681 38.6165 14.7259C38.6003 14.6838 38.5483 14.6493 38.5007 14.6493C38.4533 14.6493 38.3926 14.6291 38.366 14.6044C38.3393 14.5798 38.1913 14.5206 38.0371 14.4731C37.8828 14.4254 37.7107 14.3668 37.6546 14.3428C37.5985 14.3186 37.4494 14.2866 37.3232 14.2714C37.197 14.2561 37.0361 14.2298 36.9656 14.2128C36.8951 14.196 36.8205 14.199 36.7999 14.2197ZM35.1305 14.4448C35.0725 14.4824 35.094 14.4945 35.2197 14.4952C35.3109 14.4956 35.3854 14.473 35.3854 14.4448C35.3854 14.3799 35.2307 14.3799 35.1305 14.4448ZM24.6571 16.1733C24.6282 16.2202 24.8032 16.3868 24.8816 16.3868C24.9093 16.3868 24.9319 16.4098 24.9319 16.4379C24.9319 16.466 24.9778 16.489 25.0339 16.489C25.0905 16.489 25.1359 16.5231 25.1359 16.5657C25.1359 16.6078 25.1703 16.6423 25.2124 16.6423C25.2545 16.6423 25.2889 16.6193 25.2889 16.5912C25.2889 16.5631 25.2705 16.5401 25.2482 16.5401C25.2258 16.5401 25.112 16.4481 24.9952 16.3357C24.783 16.1314 24.7058 16.0942 24.6571 16.1733ZM34.0021 16.6443C31.3653 16.842 29.6577 19.8037 30.8757 22.0667C30.9157 22.141 31.0002 22.3009 31.0634 22.422C31.1889 22.6619 31.9538 23.4903 32.0499 23.4903C32.0827 23.4903 32.1368 23.5235 32.1705 23.564C32.5995 24.082 35.0124 24.4439 35.4084 24.0497C35.435 24.0231 35.4896 24.0014 35.5296 24.0014C36.0319 24.0014 37.2757 22.9271 37.6591 22.1624C38.809 19.8678 37.3563 16.9992 34.8755 16.6657C34.7493 16.6487 34.6116 16.6287 34.5696 16.6211C34.5275 16.6136 34.2721 16.6239 34.0021 16.6443ZM15.9317 16.6735C14.3929 17.0596 13.4062 17.9627 12.9683 19.3863C12.5187 20.8476 13.0693 22.4681 14.3584 23.4781C14.4745 23.5691 14.5857 23.6436 14.6054 23.6436C14.6251 23.6436 14.704 23.6885 14.7807 23.7432C16.2502 24.7918 18.9458 24.0392 19.8958 22.3149C20.4962 21.2251 20.5587 19.6245 20.0332 18.7887C20.0067 18.7466 19.9692 18.6776 19.95 18.6354C19.6118 17.8948 18.5836 17.0397 17.7188 16.7797C17.4156 16.6886 16.1673 16.6145 15.9317 16.6735ZM25.5099 16.7735C25.4931 16.8176 25.5054 16.8797 25.5371 16.9115C25.5801 16.9546 25.5949 16.9341 25.5949 16.8314C25.5949 16.6777 25.5567 16.6517 25.5099 16.7735ZM25.2889 16.8437C25.2889 16.9016 25.3118 16.949 25.3399 16.949C25.3679 16.949 25.3909 16.9159 25.3909 16.8754C25.3909 16.8349 25.3679 16.7875 25.3399 16.7701C25.3118 16.7527 25.2889 16.7858 25.2889 16.8437ZM29.5586 16.9025C29.5091 16.9313 29.3083 16.9685 29.1125 16.985C28.9166 17.0015 28.7564 17.0346 28.7564 17.0586C28.7564 17.1552 25.7908 17.1105 25.7169 17.0128C25.6729 16.9548 25.6485 16.9465 25.6475 16.9895C25.6466 17.0257 25.691 17.1041 25.7462 17.1633C25.8678 17.2942 28.5779 17.2806 28.737 17.1484C28.7885 17.1055 28.9661 17.0853 29.2575 17.0892C29.6546 17.0947 29.7154 17.0827 29.8527 16.9713L30.0057 16.8473L29.8272 16.8485C29.7291 16.8493 29.6082 16.8736 29.5586 16.9025ZM24.9319 17.1534C24.9319 17.1815 24.9664 17.2045 25.0084 17.2045C25.0505 17.2045 25.0849 17.1815 25.0849 17.1534C25.0849 17.1253 25.0505 17.1023 25.0084 17.1023C24.9664 17.1023 24.9319 17.1253 24.9319 17.1534ZM16.9068 18.8168C18.7258 19.083 18.6392 21.8709 16.8068 22.0424C15.2205 22.1909 14.3582 20.3989 15.461 19.246C15.671 19.0264 16.408 18.7159 16.6009 18.7657C16.6324 18.7739 16.7701 18.7969 16.9068 18.8168ZM34.6365 18.8264C35.8709 19.0022 36.3592 20.6747 35.444 21.5919C34.1888 22.8499 32.0661 21.3743 32.7857 19.744C33.0366 19.1756 33.9208 18.633 34.3656 18.7744C34.4077 18.7878 34.5295 18.8112 34.6365 18.8264ZM27.3031 22.2638C27.2831 22.2963 27.4215 22.3149 27.6825 22.3149C27.9225 22.3149 28.0935 22.3361 28.0935 22.366C28.0935 22.3941 28.1263 22.4171 28.1664 22.4171C28.2674 22.4171 28.6034 22.7436 28.6034 22.8418C28.6034 22.886 28.6264 22.9363 28.6544 22.9537C28.7364 23.0044 28.7131 22.7936 28.6289 22.7238C28.5868 22.6887 28.5524 22.6169 28.5524 22.5642C28.5524 22.5114 28.518 22.4682 28.4759 22.4682C28.4339 22.4682 28.3994 22.4469 28.3994 22.4208C28.3994 22.2588 27.3949 22.115 27.3031 22.2638ZM26.7832 22.441C26.7046 22.5104 26.6689 22.5679 26.7039 22.5688C26.739 22.5697 26.7677 22.5474 26.7677 22.5193C26.7677 22.4912 26.8193 22.468 26.8824 22.4676C27.0624 22.4664 27.2283 22.41 27.1976 22.3603C27.1439 22.2733 26.9253 22.3159 26.7832 22.441ZM28.7634 23.74C28.7614 24.088 28.7748 24.3578 28.793 24.3394C28.8696 24.2626 28.8927 23.7042 28.8314 23.4125L28.7671 23.107L28.7634 23.74ZM26.5382 23.2859C26.519 23.3172 26.5981 23.337 26.7422 23.337C26.8862 23.337 26.9654 23.3172 26.9462 23.2859C26.9288 23.2578 26.837 23.2348 26.7422 23.2348C26.6473 23.2348 26.5556 23.2578 26.5382 23.2859ZM27.0327 23.3131C27.0476 23.3279 27.112 23.3503 27.1758 23.3626C27.2395 23.3748 27.3304 23.4202 27.3778 23.4632C27.4252 23.5062 27.491 23.5414 27.5238 23.5414C27.5567 23.5414 27.5836 23.5644 27.5836 23.5925C27.5836 23.6206 27.6196 23.6436 27.6639 23.6436C27.7091 23.6436 27.7813 23.7323 27.8296 23.8475C27.8765 23.9597 27.9322 24.0517 27.9533 24.052C28.0204 24.0528 28.1955 24.2542 28.1955 24.3305C28.1955 24.371 28.2184 24.4184 28.2465 24.4357C28.2754 24.4536 28.2975 24.4107 28.2975 24.3366C28.2975 24.2647 28.2771 24.2058 28.252 24.2058C28.227 24.2058 28.1933 24.1529 28.1771 24.0882C28.1033 23.7935 27.4942 23.2859 27.2143 23.2859C27.0995 23.2859 27.0178 23.2982 27.0327 23.3131ZM26.5134 23.8988C26.4518 23.937 26.4562 23.9511 26.5396 23.9821C26.5949 24.0026 26.6547 24.0412 26.6726 24.0678C26.6903 24.0942 26.7319 24.107 26.7649 24.096C26.802 24.0836 26.7795 24.0334 26.7062 23.9643C26.624 23.887 26.5649 23.8668 26.5134 23.8988ZM26.952 24.2453C27.0114 24.2938 27.1478 24.4025 27.2553 24.4869C27.3628 24.5712 27.5094 24.6942 27.5809 24.7603C27.6525 24.8263 27.8717 24.9752 28.068 25.0908C28.2643 25.2065 28.4364 25.3149 28.4504 25.3315C28.4645 25.3482 28.6308 25.4392 28.8201 25.5336C29.0094 25.628 29.1643 25.7243 29.1643 25.7476C29.1643 25.771 29.2119 25.79 29.27 25.79C29.328 25.79 29.41 25.8245 29.4521 25.8667C29.4941 25.9088 29.5728 25.9433 29.627 25.9433C29.681 25.9433 29.7253 25.9663 29.7253 25.9944C29.7253 26.0225 29.7668 26.0455 29.8176 26.0455C29.8682 26.0455 29.9542 26.0793 30.0088 26.1205C30.0632 26.1618 30.1479 26.1963 30.1969 26.1972C30.246 26.1981 30.2862 26.2218 30.2862 26.25C30.2862 26.2781 30.3313 26.3011 30.3864 26.3011C30.4416 26.3011 30.5735 26.3387 30.6796 26.3847C30.9292 26.4931 31.0135 26.5231 31.3825 26.6351C31.5508 26.6861 31.7103 26.7469 31.7369 26.7701C31.7636 26.7932 31.8554 26.8094 31.9409 26.8061C32.0885 26.8003 32.09 26.7983 31.9689 26.7664C31.8988 26.7478 31.711 26.67 31.5516 26.5935C31.3921 26.517 31.2275 26.4544 31.1859 26.4544C31.1444 26.4544 31.0339 26.416 30.9404 26.369C30.6253 26.2107 30.5938 26.1988 30.4908 26.1988C30.4343 26.1988 30.3882 26.1758 30.3882 26.1477C30.3882 26.1196 30.3336 26.0966 30.2669 26.0966C30.2003 26.0966 30.1171 26.0621 30.0822 26.02C30.0473 25.9778 29.9992 25.9433 29.9754 25.9433C29.9515 25.9433 29.8109 25.8883 29.6629 25.8209C29.5149 25.7536 29.3594 25.6844 29.3173 25.6671C29.2752 25.6497 29.172 25.5915 29.0879 25.5377C29.0037 25.4838 28.8968 25.438 28.8502 25.436C28.8036 25.4339 28.7099 25.3661 28.6419 25.2851C28.574 25.2041 28.4629 25.1212 28.3951 25.1007C28.2039 25.0431 27.7967 24.7746 27.4084 24.4502C27.2139 24.2877 27.0073 24.1552 26.9495 24.1558L26.8442 24.157L26.952 24.2453ZM26.801 26.2373C26.7642 26.2968 26.9346 26.4836 27.1068 26.5729C27.1918 26.6169 27.3166 26.7118 27.3842 26.7836C27.4517 26.8555 27.6046 26.9623 27.7238 27.0211C27.843 27.0798 27.9405 27.145 27.9405 27.1661C27.9405 27.1872 28.031 27.2484 28.1417 27.3022C28.2523 27.3558 28.3525 27.4343 28.3643 27.4765C28.376 27.5186 28.4977 27.6106 28.6348 27.6807C28.7718 27.7509 28.9522 27.854 29.0358 27.9097C29.1193 27.9655 29.3488 28.0938 29.5458 28.195C29.7426 28.296 29.9726 28.416 30.0567 28.4616C30.1409 28.5071 30.2441 28.5573 30.2862 28.5729C30.3282 28.5886 30.4545 28.6591 30.5666 28.7298C30.8073 28.8812 30.9798 28.9585 31.0768 28.9585C31.1154 28.9585 31.1612 28.9815 31.1786 29.0096C31.1959 29.0377 31.2647 29.0607 31.3315 29.0607C31.3983 29.0607 31.4672 29.0837 31.4845 29.1118C31.5018 29.1399 31.5778 29.1637 31.6533 29.1646C31.7288 29.1655 31.835 29.1999 31.8894 29.2412C31.944 29.2825 32.0529 29.3162 32.1316 29.3162C32.2104 29.3162 32.2749 29.3392 32.2749 29.3673C32.2749 29.3954 32.3386 29.4184 32.4165 29.4184C32.4944 29.4184 32.6034 29.4487 32.6587 29.4856C32.7141 29.5225 32.8381 29.5577 32.9344 29.5638C33.0307 29.5698 33.1391 29.5993 33.1752 29.6295C33.2569 29.6973 33.5534 29.7754 33.8557 29.8086C33.9819 29.8224 34.2187 29.8679 34.382 29.9095C34.5453 29.9512 34.7863 29.9835 34.9175 29.9812C35.0486 29.9789 35.3166 29.9997 35.5129 30.0273C36.106 30.1108 37.341 30.0902 37.8331 29.9887C38.3243 29.8874 38.2806 29.8087 37.7773 29.8881C37.3206 29.96 35.2765 30.0008 35.2378 29.9387C35.2209 29.9114 35.0126 29.8773 34.7751 29.8628C34.5321 29.8478 34.335 29.8119 34.3245 29.7806C34.3143 29.7498 34.1844 29.725 34.0329 29.725C33.8827 29.725 33.7468 29.7042 33.7311 29.6787C33.7154 29.6532 33.5878 29.6166 33.4477 29.5973C33.3075 29.578 33.1928 29.5413 33.1928 29.5158C33.1928 29.4903 33.1037 29.4695 32.9947 29.4695C32.8857 29.4695 32.7308 29.4352 32.6505 29.3931C32.5701 29.3512 32.4527 29.3167 32.3896 29.3165C32.3265 29.3163 32.2749 29.2932 32.2749 29.2651C32.2749 29.237 32.2347 29.214 32.1857 29.214C32.0858 29.2139 31.6367 29.0514 31.5804 28.9949C31.5604 28.9748 31.5038 28.9585 31.4547 28.9585C31.4055 28.9585 31.3003 28.9259 31.2209 28.8862C30.5938 28.5723 29.9923 28.2941 29.9406 28.2941C29.9063 28.2941 29.8782 28.2762 29.8782 28.2545C29.8782 28.2327 29.7752 28.1694 29.6493 28.114C29.5233 28.0584 29.4201 27.9958 29.4198 27.9747C29.4196 27.9536 29.3734 27.9364 29.3173 27.9364C29.2612 27.9364 29.2153 27.9151 29.2153 27.889C29.2153 27.8629 29.1522 27.809 29.0751 27.769C28.805 27.629 28.5778 27.5018 28.5524 27.4765C28.5161 27.44 28.3366 27.3289 28.2466 27.287C28.2047 27.2674 28.1175 27.1986 28.0531 27.1339C27.9886 27.0694 27.9129 27.0165 27.8847 27.0165C27.8565 27.0165 27.7508 26.936 27.6497 26.8377C27.5486 26.7393 27.4491 26.6588 27.4284 26.6588C27.4078 26.6588 27.3022 26.5777 27.194 26.4784C26.9571 26.2613 26.8331 26.1852 26.801 26.2373ZM37.9979 26.8886C37.9063 26.9286 37.8145 26.9616 37.794 26.9621C37.6481 26.9655 37.2798 27.0316 37.1957 27.0693C37.1396 27.0946 37.0134 27.1369 36.9152 27.1634C36.7405 27.2107 36.7422 27.2119 37.0061 27.2163C37.1543 27.2189 37.3578 27.1864 37.4586 27.1443C37.5591 27.1021 37.7077 27.0676 37.7884 27.0676C37.869 27.0676 37.9351 27.0476 37.9351 27.023C37.9351 26.9985 38.0279 26.9636 38.1415 26.9454C38.2567 26.927 38.3342 26.8902 38.3169 26.8622C38.2756 26.7952 38.1976 26.8017 37.9979 26.8886ZM36.3161 27.3087C36.3932 27.3203 36.5194 27.3203 36.5965 27.3087C36.6737 27.297 36.6105 27.2874 36.4563 27.2874C36.302 27.2874 36.2389 27.297 36.3161 27.3087ZM42.5409 27.645C42.4897 27.7095 42.3726 27.8178 42.2806 27.8858C42.1419 27.988 42.1183 28.0329 42.1434 28.1473C42.1741 28.2875 42.093 28.4901 41.9763 28.565C41.9412 28.5875 41.9125 28.6266 41.9125 28.6519C41.9125 28.7226 41.4821 29.1629 41.4129 29.1629C41.3791 29.1629 41.3516 29.1849 41.3516 29.2117C41.3516 29.4335 40.5682 29.7497 40.3321 29.6231C40.2502 29.5791 40.2034 29.5777 40.1631 29.6181C40.1325 29.6488 40.0101 29.6739 39.8912 29.6739C39.7722 29.6739 39.6607 29.6969 39.6433 29.725C39.6229 29.7581 39.8383 29.7762 40.2522 29.7762C40.6044 29.7762 40.8927 29.7584 40.8927 29.7367C40.8927 29.715 40.9714 29.6547 41.0678 29.6027C41.243 29.5081 41.9125 28.908 41.9125 28.8455C41.9125 28.8274 41.9921 28.728 42.0892 28.6246C42.1865 28.5214 42.2798 28.3933 42.2966 28.34C42.3136 28.2866 42.3488 28.243 42.3749 28.243C42.401 28.243 42.4224 28.208 42.4224 28.1653C42.4224 28.1227 42.4757 28.0019 42.5409 27.897C42.7545 27.5532 42.7545 27.3751 42.5409 27.645ZM41.9013 28.2047C41.7997 28.298 41.6449 28.3949 41.5428 28.4293C41.4937 28.4459 41.4536 28.477 41.4536 28.4985C41.4536 28.5201 41.4134 28.5512 41.3643 28.5678C41.2762 28.5974 41.0952 28.7037 41.0456 28.7548C41.0316 28.7693 40.9229 28.8268 40.8041 28.8826C40.6851 28.9384 40.5876 28.9987 40.5873 29.0169C40.587 29.0349 40.5293 29.064 40.4592 29.0816C40.3891 29.0993 40.3317 29.1363 40.3317 29.1639C40.3317 29.1914 40.2629 29.214 40.1788 29.214C40.0946 29.214 40.0258 29.2344 40.0258 29.2594C40.0258 29.2844 39.9455 29.3199 39.8473 29.3384C39.7491 29.3568 39.6688 29.3939 39.6688 29.4207C39.6688 29.4475 39.5899 29.4695 39.4934 29.4695C39.3969 29.4695 39.3045 29.4912 39.2882 29.5177C39.2719 29.5441 39.1558 29.5813 39.0303 29.6001C38.7944 29.6356 38.7626 29.6651 38.8573 29.7601C38.9194 29.8223 39.3119 29.6945 39.3119 29.6121C39.3119 29.5866 39.3346 29.5798 39.3624 29.5969C39.39 29.6142 39.4876 29.5946 39.5791 29.5536C39.6705 29.5127 39.8084 29.4651 39.8856 29.4478C39.9627 29.4306 40.0258 29.3939 40.0258 29.3663C40.0258 29.3388 40.0817 29.3162 40.1502 29.3162C40.2187 29.3162 40.2878 29.295 40.3038 29.2691C40.3198 29.2431 40.4015 29.2067 40.4854 29.1883C40.5691 29.1699 40.6377 29.1354 40.6377 29.1118C40.6377 29.0882 40.7055 29.0539 40.7883 29.0356C40.8711 29.0174 40.9916 28.9632 41.056 28.9153C41.1205 28.8673 41.2342 28.7971 41.3086 28.7593C41.3832 28.7216 41.5166 28.6245 41.605 28.5435C41.6935 28.4625 41.7873 28.3963 41.8137 28.3963C41.84 28.3963 41.8615 28.3759 41.8615 28.3507C41.8615 28.3257 41.9189 28.2908 41.989 28.2732C42.0591 28.2555 42.1165 28.2185 42.1165 28.1909C42.1165 28.1202 41.984 28.1287 41.9013 28.2047ZM28.3994 28.6519C28.5257 28.7049 28.7136 28.7496 28.8171 28.7513C28.9206 28.7528 29.0182 28.775 29.0341 28.8007C29.05 28.8264 29.1544 28.8629 29.2663 28.8818C29.3783 28.9007 29.4827 28.9373 29.4986 28.963C29.5144 28.9886 29.6049 29.0096 29.6998 29.0096C29.7946 29.0096 29.8851 29.0305 29.9009 29.0562C29.9169 29.0819 30.0214 29.1184 30.1335 29.1373C30.2455 29.1564 30.3372 29.1928 30.3372 29.2185C30.3372 29.2442 30.4404 29.2651 30.5666 29.2651C30.6928 29.2651 30.7961 29.2861 30.7961 29.3117C30.7961 29.3374 30.8879 29.3738 31.0001 29.3929C31.1123 29.4119 31.204 29.4432 31.204 29.4624C31.204 29.5006 31.6853 29.6228 31.8352 29.6228C31.8863 29.6228 32.0003 29.6545 32.0888 29.6934C32.1771 29.7322 32.3871 29.793 32.5554 29.8287C32.7236 29.8643 32.9073 29.9213 32.9636 29.9555C33.0196 29.9896 33.1458 30.0308 33.244 30.047C33.7386 30.1289 33.9796 30.1865 34.0273 30.2343C34.0893 30.2965 34.5367 30.3069 34.4988 30.2453C34.4845 30.2223 34.294 30.1626 34.0751 30.1127C33.8562 30.0627 33.5854 29.9979 33.4732 29.9687C33.361 29.9396 33.2004 29.8979 33.1163 29.8762C33.0321 29.8545 32.8331 29.797 32.674 29.7483C32.5148 29.6997 32.3477 29.6742 32.3023 29.6917C32.2535 29.7105 32.2082 29.6926 32.191 29.6475C32.1743 29.6039 32.0973 29.5717 32.0096 29.5717C31.9257 29.5717 31.7963 29.5402 31.7219 29.5015C31.5097 29.3915 31.0903 29.2646 30.9394 29.2649C30.8639 29.265 30.7879 29.2421 30.7706 29.214C30.7533 29.1859 30.6601 29.1629 30.5636 29.1629C30.4671 29.1629 30.3882 29.1425 30.3882 29.1175C30.3882 29.0925 30.305 29.0565 30.2034 29.0373C30.1018 29.0183 29.9814 28.9833 29.9357 28.9596C29.7806 28.8794 29.0887 28.692 28.8584 28.6677C28.7322 28.6545 28.6213 28.6225 28.612 28.5967C28.6025 28.5709 28.4993 28.5509 28.3825 28.5525L28.17 28.5554L28.3994 28.6519ZM38.3059 29.7889C38.333 29.8658 38.6369 29.8598 38.7158 29.7807C38.7559 29.7405 38.7035 29.725 38.5275 29.725C38.3544 29.725 38.29 29.7436 38.3059 29.7889ZM39.2284 29.8528C39.2122 29.895 39.1584 29.9295 39.1087 29.9295C39.0591 29.9295 38.9899 29.964 38.9549 30.0061C38.92 30.0483 38.8519 30.0828 38.8036 30.0828C38.7553 30.0828 38.6742 30.1288 38.6235 30.185C38.5727 30.2412 38.5021 30.2872 38.4666 30.2872C38.431 30.2872 38.3296 30.3595 38.2414 30.4479L38.081 30.6086L37.1285 30.58C36.3937 30.558 36.0263 30.5213 35.5216 30.4193C34.8196 30.2775 34.6427 30.261 34.5984 30.3329C34.5582 30.398 34.6958 30.4405 34.946 30.4405C35.0643 30.4405 35.1829 30.4611 35.2095 30.4862C35.2362 30.5114 35.4071 30.545 35.5894 30.561C35.7717 30.577 36.0471 30.6122 36.2013 30.6393C36.3556 30.6664 36.8729 30.6903 37.351 30.6923L38.22 30.696L38.4388 30.4916C38.5591 30.3792 38.6707 30.2872 38.6867 30.2872C38.7028 30.2872 38.791 30.2297 38.883 30.1594C38.975 30.0892 39.0861 30.0317 39.13 30.0317C39.1739 30.0317 39.2099 30.0087 39.2099 29.9806C39.2099 29.9525 39.2539 29.9295 39.3077 29.9295C39.452 29.9295 39.5703 29.8741 39.538 29.8219C39.4918 29.7469 39.26 29.77 39.2284 29.8528Z", fill: "#F1ECE5" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.32 0.851092C24.32 0.883288 23.9709 0.902197 23.375 0.902197C22.5821 0.902197 22.4253 0.914589 22.4007 0.978853C22.3773 1.0398 22.2683 1.05551 21.8668 1.05551C21.5646 1.05551 21.3624 1.07595 21.3624 1.10661C21.3624 1.13638 21.1936 1.15772 20.9582 1.15772C20.6667 1.15772 20.5325 1.17918 20.4773 1.23437C20.4317 1.28011 20.307 1.31103 20.1678 1.31103C20.0395 1.31103 19.9346 1.33122 19.9346 1.356C19.9346 1.38066 19.7925 1.4112 19.6188 1.42384C19.4416 1.43675 19.2943 1.47303 19.2832 1.50663C19.2714 1.54164 19.1589 1.56655 19.0125 1.56655C18.8746 1.56655 18.7618 1.58955 18.7618 1.61766C18.7618 1.64576 18.6922 1.66876 18.6071 1.66876C18.5169 1.66876 18.4404 1.70057 18.4233 1.74542C18.4027 1.79908 18.3192 1.82207 18.1444 1.82207C18.0072 1.82207 17.8949 1.84303 17.8949 1.86871C17.8949 1.89439 17.8031 1.9308 17.6909 1.94984C17.5787 1.96887 17.487 2.00528 17.487 2.03096C17.487 2.05664 17.4091 2.0776 17.314 2.0776C17.2071 2.0776 17.1296 2.10698 17.1115 2.15425C17.0955 2.19641 17.0241 2.23091 16.9532 2.23091C16.8822 2.23091 16.824 2.25391 16.824 2.28201C16.824 2.31012 16.7544 2.33312 16.6694 2.33312C16.5792 2.33312 16.5027 2.36493 16.4856 2.40977C16.4694 2.45194 16.4013 2.48643 16.3341 2.48643C16.2671 2.48643 16.2121 2.50943 16.2121 2.53754C16.2121 2.56564 16.1548 2.58864 16.0847 2.58864C16.0054 2.58864 15.9572 2.61764 15.9572 2.6653C15.9572 2.71295 15.909 2.74195 15.8297 2.74195C15.7596 2.74195 15.7022 2.76495 15.7022 2.79306C15.7022 2.82116 15.6556 2.84416 15.5986 2.84416C15.5417 2.84416 15.4818 2.87866 15.4657 2.92082C15.4495 2.96298 15.4044 2.99747 15.3653 2.99747C15.3263 2.99747 15.2943 3.02047 15.2943 3.04858C15.2943 3.07669 15.2247 3.09968 15.1396 3.09968C15.0494 3.09968 14.9729 3.1315 14.9558 3.17634C14.9396 3.2185 14.9028 3.253 14.874 3.253C14.8452 3.253 14.7684 3.31049 14.7034 3.38076C14.6384 3.45103 14.5383 3.50852 14.4808 3.50852C14.4234 3.50852 14.3764 3.53151 14.3764 3.55962C14.3764 3.58773 14.3384 3.61073 14.292 3.61073C14.2456 3.61073 14.1203 3.70271 14.0136 3.81514C13.9069 3.92757 13.7992 4.01956 13.7743 4.01956C13.677 4.01956 13.412 4.1822 13.2321 4.35212C13.1284 4.45024 13.0122 4.5306 12.9742 4.5306C12.9361 4.5306 12.8599 4.5881 12.8047 4.65836C12.7496 4.72863 12.6829 4.78613 12.6567 4.78613C12.6304 4.78613 12.5781 4.84362 12.5407 4.91389C12.5032 4.98415 12.4419 5.04165 12.4045 5.04165C12.3673 5.04165 12.3367 5.06311 12.3367 5.0893C12.3367 5.11549 12.2861 5.15305 12.2244 5.17273C12.0931 5.21451 11.9797 5.31774 11.9797 5.39567C11.9797 5.42582 11.9551 5.45048 11.9251 5.45048C11.8546 5.45048 11.7248 5.58054 11.7248 5.65119C11.7248 5.68135 11.7002 5.706 11.6701 5.706C11.5996 5.706 11.4698 5.83606 11.4698 5.90672C11.4698 5.93687 11.4471 5.96152 11.4195 5.96152C11.3516 5.96152 10.7049 6.60672 10.7049 6.67443C10.7049 6.70394 10.6705 6.72809 10.6284 6.72809C10.5809 6.72809 10.5519 6.77638 10.5519 6.85585C10.5519 6.92612 10.5273 6.98361 10.4973 6.98361C10.4268 6.98361 10.297 7.11367 10.297 7.18432C10.297 7.21448 10.2626 7.23913 10.2205 7.23913C10.1772 7.23913 10.144 7.285 10.144 7.34479C10.144 7.40292 10.0637 7.52634 9.96553 7.61909C9.86737 7.71185 9.78706 7.8368 9.78706 7.89672C9.78706 7.95958 9.75468 8.0057 9.71057 8.0057C9.66302 8.0057 9.63408 8.05399 9.63408 8.13346C9.63408 8.20373 9.61113 8.26122 9.58309 8.26122C9.55504 8.26122 9.5321 8.29572 9.5321 8.33788C9.5321 8.38004 9.51081 8.41453 9.4848 8.41453C9.42374 8.41453 9.27713 8.70877 9.27713 8.83116C9.27713 8.88316 9.24271 8.92558 9.20064 8.92558C9.15513 8.92558 9.12415 8.97247 9.12415 9.0412C9.12415 9.10495 9.06692 9.19988 8.99667 9.25277C8.90501 9.32176 8.86919 9.39689 8.86919 9.52043C8.86919 9.61485 8.84624 9.69214 8.8182 9.69214C8.79015 9.69214 8.76721 9.7702 8.76721 9.86551C8.76721 9.97258 8.73789 10.0503 8.69072 10.0684C8.64266 10.0868 8.61423 10.165 8.61423 10.2782C8.61423 10.3775 8.59128 10.4587 8.56324 10.4587C8.53519 10.4587 8.51224 10.5138 8.51224 10.581C8.51224 10.6483 8.47782 10.7165 8.43575 10.7328C8.39152 10.7497 8.35926 10.8261 8.35926 10.914C8.35926 10.9976 8.33632 11.0801 8.30827 11.0975C8.28023 11.1149 8.25728 11.2153 8.25728 11.3208C8.25728 11.5132 8.02233 11.8374 7.88159 11.8393C7.84985 11.8398 7.74621 11.9088 7.65123 11.9926C7.55626 12.0765 7.44726 12.1451 7.40902 12.1451C7.37077 12.1451 7.33941 12.1681 7.33941 12.1963C7.33941 12.2244 7.31481 12.2474 7.28472 12.2474C7.25476 12.2474 7.19816 12.2761 7.15902 12.3112C6.99037 12.4629 6.93262 12.5029 6.88264 12.5029C6.85345 12.5029 6.82948 12.5374 6.82948 12.5795C6.82948 12.6217 6.79506 12.6562 6.753 12.6562C6.71093 12.6562 6.67651 12.6792 6.67651 12.7073C6.67651 12.7354 6.64183 12.7584 6.59938 12.7584C6.55693 12.7584 6.40803 12.8734 6.26856 13.0139C6.1291 13.1545 5.989 13.2694 5.95725 13.2694C5.86305 13.2694 5.04627 14.1049 5.04551 14.2021C5.045 14.2529 5.00624 14.2915 4.9555 14.2917C4.86257 14.2917 4.48382 14.6604 4.48382 14.7508C4.48382 14.7793 4.45514 14.803 4.42008 14.8035C4.3427 14.8045 4.12687 15.025 4.12687 15.1029C4.12687 15.1337 4.01214 15.2745 3.87191 15.4158C3.73168 15.5571 3.61695 15.7037 3.61695 15.7415C3.61695 15.7794 3.55958 15.8535 3.48946 15.9063C3.41935 15.9591 3.36198 16.0222 3.36198 16.0466C3.36198 16.071 3.30461 16.1363 3.2345 16.1915C3.16438 16.2468 3.10702 16.3339 3.10702 16.385C3.10702 16.4363 3.0726 16.4913 3.03053 16.5075C2.98846 16.5236 2.95404 16.5837 2.95404 16.6407C2.95404 16.6978 2.93109 16.7445 2.90305 16.7445C2.875 16.7445 2.85205 16.779 2.85205 16.8212C2.85205 16.8634 2.82745 16.8979 2.79737 16.8979C2.70749 16.8979 2.59709 17.0366 2.59709 17.1497C2.59709 17.2097 2.56395 17.2556 2.5206 17.2556C2.47853 17.2556 2.44411 17.2846 2.44411 17.3201C2.44411 17.3556 2.38675 17.4278 2.31663 17.4806C2.24652 17.5333 2.18915 17.6193 2.18915 17.6716C2.18915 17.7238 2.1662 17.7666 2.13816 17.7666C2.11011 17.7666 2.08716 17.7987 2.08716 17.8378C2.08716 17.877 2.05274 17.9222 2.01068 17.9385C1.96861 17.9546 1.93419 18.0062 1.93419 18.0531C1.93419 18.0998 1.87682 18.1914 1.8067 18.2566C1.73659 18.3217 1.67922 18.4093 1.67922 18.451C1.67922 18.4929 1.65628 18.5414 1.62823 18.5587C1.60018 18.5761 1.57724 18.6245 1.57724 18.6664C1.57724 18.7082 1.51987 18.7957 1.44976 18.8609C1.37964 18.9261 1.32227 19.0054 1.32227 19.0373C1.32227 19.0693 1.28785 19.0953 1.24579 19.0953C1.19823 19.0953 1.1693 19.1436 1.1693 19.2231C1.1693 19.2934 1.1489 19.3509 1.12379 19.3509C1.0988 19.3509 1.064 19.4084 1.0464 19.4786C1.02881 19.5489 0.991842 19.6064 0.964306 19.6064C0.878001 19.6064 0.90235 20.4016 0.990822 20.4752C1.03289 20.5102 1.06731 20.582 1.06731 20.6347C1.06731 20.6977 1.10364 20.7307 1.17299 20.7307C1.231 20.7307 1.31297 20.7652 1.35504 20.8073C1.46646 20.919 3.3964 20.9205 3.54352 20.809C3.59795 20.7677 3.75144 20.7332 3.88466 20.7323C4.01788 20.7314 4.12687 20.7077 4.12687 20.6796C4.12687 20.6515 4.18258 20.6285 4.25066 20.6285C4.31886 20.6285 4.40899 20.594 4.45106 20.5518C4.49313 20.5096 4.59664 20.4752 4.68116 20.4752C4.76568 20.4752 4.84727 20.4547 4.8627 20.4298C4.87812 20.4049 4.97118 20.3694 5.06973 20.3508C5.16814 20.3323 5.24871 20.2953 5.24871 20.2684C5.24871 20.2416 5.30417 20.2196 5.37199 20.2196C5.43968 20.2196 5.50304 20.1961 5.5126 20.1674C5.52216 20.1385 5.6216 20.1039 5.73352 20.0902C5.84545 20.0765 5.90843 20.079 5.87337 20.0957C5.83831 20.1123 5.80963 20.1816 5.80963 20.2494C5.80963 20.3252 5.78006 20.3729 5.73314 20.3729C5.68559 20.3729 5.65665 20.4212 5.65665 20.5007C5.65665 20.571 5.63371 20.6285 5.60566 20.6285C5.57761 20.6285 5.55467 20.686 5.55467 20.7562C5.55467 20.8357 5.52573 20.884 5.47818 20.884C5.43611 20.884 5.40169 20.907 5.40169 20.9351C5.40169 20.9665 5.14622 20.9862 4.73713 20.9862C4.19355 20.9862 4.06734 21.0001 4.04337 21.0629C4.02272 21.1165 3.93922 21.1395 3.76444 21.1395C3.62727 21.1395 3.51496 21.1625 3.51496 21.1906C3.51496 21.2187 3.47187 21.2417 3.41922 21.2417C3.36657 21.2417 3.29493 21.2762 3.26 21.3184C3.22507 21.3605 3.119 21.395 3.02428 21.395C2.92956 21.395 2.85205 21.418 2.85205 21.4461C2.85205 21.4742 2.8054 21.4972 2.74841 21.4972C2.69156 21.4972 2.63164 21.5317 2.61558 21.5739C2.59939 21.6161 2.55426 21.6506 2.51512 21.6506C2.47611 21.6506 2.44411 21.6736 2.44411 21.7017C2.44411 21.7298 2.41071 21.7528 2.36992 21.7528C2.32912 21.7528 2.23836 21.8103 2.16824 21.8805C2.09813 21.9508 2.01845 22.0083 1.99117 22.0083C1.90614 22.0083 1.57724 22.3481 1.57724 22.4359C1.57724 22.4818 1.54639 22.5193 1.50865 22.5193C1.41393 22.5193 1.1693 22.7373 1.1693 22.8217C1.1693 22.8598 1.11193 22.9441 1.04181 23.0093C0.9717 23.0744 0.914333 23.1694 0.914333 23.2202C0.914333 23.2711 0.856966 23.3559 0.786851 23.4087C0.716736 23.4614 0.659369 23.5455 0.659369 23.5955C0.659369 23.6454 0.642159 23.6938 0.621125 23.7033C0.587087 23.7184 0.469039 23.9423 0.383244 24.1547C0.366289 24.1968 0.308285 24.3003 0.254615 24.3846C0.200818 24.469 0.155179 24.6029 0.15314 24.6822C0.1511 24.7614 0.11668 24.8591 0.0766505 24.8993C-0.0979994 25.0743 -0.113552 30.0803 0.0602054 30.2076C0.109286 30.2435 0.149443 30.3259 0.149443 30.3907C0.149443 30.5307 0.30446 30.9004 0.363229 30.9004C0.385921 30.9004 0.404406 30.9579 0.404406 31.0282C0.404406 31.0985 0.427353 31.156 0.455399 31.156C0.483445 31.156 0.506391 31.2091 0.506391 31.274C0.506391 31.3388 0.540047 31.4365 0.581223 31.4912C0.6224 31.5458 0.65682 31.6222 0.657712 31.6611C0.658605 31.7001 0.716736 31.7852 0.786851 31.8503C0.856966 31.9155 0.914333 32.0158 0.914333 32.0734C0.914333 32.1309 0.936897 32.178 0.964306 32.178C0.991842 32.178 1.02881 32.2355 1.0464 32.3058C1.064 32.3761 1.0988 32.4336 1.12379 32.4336C1.1489 32.4336 1.1693 32.4681 1.1693 32.5102C1.1693 32.5524 1.1939 32.5869 1.22399 32.5869C1.31386 32.5869 1.42426 32.7256 1.42426 32.8387C1.42426 32.897 1.45486 32.9446 1.49208 32.9446C1.52943 32.9446 1.59075 33.0021 1.62823 33.0724C1.67106 33.1526 1.74067 33.2001 1.81537 33.2001C1.90079 33.2001 1.93419 33.2293 1.93419 33.304C1.93419 33.361 1.96861 33.421 2.01068 33.4371C2.05274 33.4534 2.08716 33.4986 2.08716 33.5378C2.08716 33.5769 2.13472 33.609 2.19285 33.609C2.30567 33.609 2.44411 33.7196 2.44411 33.8097C2.44411 33.8398 2.47853 33.8645 2.5206 33.8645C2.56267 33.8645 2.59709 33.8871 2.59709 33.9146C2.59709 33.9422 2.65446 33.9792 2.72457 33.9968C2.79469 34.0145 2.85205 34.0455 2.85205 34.0658C2.85205 34.0862 2.90942 34.1336 2.97954 34.1711C3.04965 34.2087 3.10702 34.2701 3.10702 34.3076C3.10702 34.3449 3.12997 34.3755 3.15801 34.3755C3.18606 34.3755 3.209 34.4065 3.209 34.4443C3.209 34.4821 3.26637 34.5798 3.33649 34.6615C3.40647 34.7431 3.46384 34.8509 3.46397 34.901C3.46397 34.951 3.49839 35.0053 3.54046 35.0214C3.58762 35.0395 3.61695 35.1172 3.61695 35.2243C3.61695 35.3196 3.63989 35.3976 3.66794 35.3976C3.69598 35.3976 3.71893 35.4285 3.71893 35.4664C3.71893 35.5042 3.7763 35.6019 3.84641 35.6836C3.9164 35.7652 3.97377 35.873 3.97389 35.9231C3.97389 35.9731 4.00831 36.0274 4.05038 36.0435C4.09245 36.0597 4.12687 36.1136 4.12687 36.1634C4.12687 36.2131 4.16129 36.2825 4.20336 36.3175C4.24543 36.3525 4.27985 36.4145 4.27985 36.4552C4.27985 36.5417 4.40134 36.6752 4.48012 36.6752C4.51021 36.6752 4.53481 36.7097 4.53481 36.7519C4.53481 36.794 4.55776 36.8285 4.58581 36.8285C4.61385 36.8285 4.6368 36.865 4.6368 36.9094C4.6368 36.9539 4.75153 37.1059 4.89176 37.2471C5.03199 37.3884 5.14673 37.5475 5.14673 37.6006C5.14673 37.6539 5.18115 37.6973 5.22322 37.6973C5.26528 37.6973 5.2997 37.722 5.2997 37.7521C5.2997 37.8228 5.42948 37.9528 5.49998 37.9528C5.53006 37.9528 5.55467 37.9788 5.55467 38.0105C5.55467 38.1009 6.72877 39.2262 6.91617 39.3154C7.00872 39.3594 7.08445 39.419 7.08445 39.4478C7.08445 39.5138 7.24125 39.6354 7.32909 39.6376C7.36554 39.6385 7.44841 39.6968 7.51342 39.767C7.57844 39.8373 7.65761 39.8948 7.68948 39.8948C7.72135 39.8948 7.74735 39.9293 7.74735 39.9715C7.74735 40.0136 7.78751 40.0489 7.83659 40.0498C7.94686 40.0517 8.1043 40.1668 8.1043 40.2454C8.1043 40.2774 8.16167 40.3036 8.23178 40.3036C8.3019 40.3036 8.35926 40.3266 8.35926 40.3547C8.35926 40.3828 8.39368 40.4058 8.43575 40.4058C8.47782 40.4058 8.51224 40.4403 8.51224 40.4825C8.51224 40.5263 8.55814 40.5592 8.61958 40.5592C8.67873 40.5592 8.77218 40.6167 8.82725 40.6869C8.89762 40.7765 8.9773 40.8147 9.09369 40.8147C9.21875 40.8147 9.27675 40.8462 9.32813 40.9424C9.36956 41.0199 9.44095 41.0702 9.50979 41.0702C9.57213 41.0702 9.63638 41.1047 9.65257 41.1469C9.66863 41.189 9.72714 41.2235 9.78247 41.2235C9.8378 41.2235 9.8972 41.2465 9.91454 41.2746C9.93188 41.3027 9.98223 41.3257 10.0265 41.3257C10.0707 41.3257 10.1599 41.3832 10.225 41.4535C10.29 41.5238 10.3802 41.5812 10.4256 41.5812C10.4711 41.5812 10.5426 41.6157 10.5847 41.6579C10.6268 41.7001 10.7156 41.7346 10.7821 41.7346C10.8485 41.7346 10.9171 41.7576 10.9344 41.7857C10.9517 41.8138 11.0194 41.8368 11.085 41.8368C11.1503 41.8368 11.2171 41.8713 11.2333 41.9134C11.2494 41.9556 11.3093 41.9901 11.3662 41.9901C11.4232 41.9901 11.4698 42.0131 11.4698 42.0412C11.4698 42.0693 11.5248 42.0923 11.5918 42.0923C11.659 42.0923 11.7271 42.1268 11.7433 42.1689C11.7603 42.2138 11.8368 42.2456 11.9271 42.2456C12.0121 42.2456 12.0817 42.2686 12.0817 42.2967C12.0817 42.3248 12.1711 42.3478 12.2802 42.3478C12.4096 42.3478 12.489 42.3745 12.5082 42.4245C12.5242 42.4666 12.5841 42.5011 12.641 42.5011C12.698 42.5011 12.7446 42.5241 12.7446 42.5522C12.7446 42.5803 12.8221 42.6033 12.9169 42.6033C13.0116 42.6033 13.1176 42.6378 13.1526 42.68C13.1875 42.7222 13.2821 42.7566 13.3628 42.7566C13.4435 42.7566 13.5095 42.7796 13.5095 42.8078C13.5095 42.8359 13.6218 42.8589 13.759 42.8589C13.9338 42.8589 14.0173 42.8819 14.0379 42.9355C14.054 42.9777 14.1139 43.0122 14.1708 43.0122C14.2278 43.0122 14.2744 43.0352 14.2744 43.0633C14.2744 43.0914 14.3638 43.1144 14.4729 43.1144C14.6023 43.1144 14.6817 43.1411 14.7008 43.191C14.7209 43.2435 14.8028 43.2677 14.9612 43.2677C15.0883 43.2677 15.1923 43.2907 15.1923 43.3188C15.1923 43.3469 15.3046 43.3699 15.4418 43.3699C15.6165 43.3699 15.7 43.3929 15.7207 43.4466C15.7377 43.4909 15.8139 43.5232 15.9016 43.5232C15.985 43.5232 16.0673 43.5462 16.0847 43.5743C16.102 43.6024 16.25 43.6254 16.4137 43.6254C16.631 43.6254 16.719 43.6461 16.7405 43.7021C16.7621 43.7583 16.8506 43.7787 17.0732 43.7787C17.2515 43.7787 17.3843 43.8022 17.3954 43.8358C17.406 43.8675 17.579 43.9048 17.7822 43.9194C17.9844 43.934 18.1499 43.9656 18.1499 43.99C18.1499 44.0143 18.2856 44.0343 18.4516 44.0343C18.6252 44.0343 18.7611 44.058 18.772 44.0903C18.7826 44.1223 18.9818 44.1583 19.2351 44.1742C19.4796 44.1895 19.6796 44.2217 19.6796 44.2458C19.6796 44.27 19.8842 44.2898 20.1344 44.2898C20.4441 44.2898 20.5956 44.3095 20.6095 44.3515C20.6233 44.3926 20.8073 44.4198 21.162 44.4333C21.4544 44.4444 21.7157 44.4741 21.7423 44.4993C21.7689 44.5246 21.9996 44.5453 22.2548 44.5453C22.51 44.5453 22.7414 44.5679 22.769 44.5956C22.7967 44.6234 23.1234 44.6614 23.495 44.6802C23.8667 44.6991 24.1828 44.734 24.1975 44.7576C24.2321 44.8141 26.8186 44.8141 26.8186 44.7576C26.8186 44.7339 27.1341 44.6992 27.5198 44.6807C27.9087 44.6621 28.2284 44.6244 28.2379 44.5961C28.2474 44.5678 28.4435 44.5453 28.6811 44.5453C28.9154 44.5453 29.1194 44.5256 29.1342 44.5016C29.149 44.4776 29.4078 44.4453 29.7093 44.4299C30.0377 44.4131 30.2648 44.3793 30.2759 44.3459C30.288 44.3096 30.4998 44.2898 30.8767 44.2898C31.197 44.2898 31.459 44.2702 31.459 44.2462C31.459 44.2222 31.6597 44.1872 31.9051 44.1684C32.1505 44.1495 32.359 44.1117 32.3683 44.0842C32.3777 44.0567 32.4853 44.0343 32.6076 44.0343C32.7297 44.0343 32.8419 44.0146 32.8568 43.9904C32.8716 43.9664 33.016 43.9329 33.1777 43.9162C33.3393 43.8996 33.4795 43.8618 33.4894 43.8323C33.4997 43.8013 33.6674 43.7787 33.887 43.7787C34.1775 43.7787 34.2736 43.7607 34.2961 43.7021C34.3159 43.6502 34.397 43.6254 34.5464 43.6254C34.668 43.6254 34.7816 43.6024 34.799 43.5743C34.8163 43.5462 34.8757 43.5232 34.931 43.5232C34.9864 43.5232 35.0449 43.4887 35.0609 43.4466C35.0825 43.3905 35.1707 43.3699 35.3909 43.3699C35.5572 43.3699 35.6913 43.347 35.6913 43.3188C35.6913 43.2907 35.7954 43.2677 35.9225 43.2677C36.0808 43.2677 36.1628 43.2435 36.1828 43.191C36.2019 43.1411 36.2813 43.1144 36.4107 43.1144C36.5198 43.1144 36.6092 43.0914 36.6092 43.0633C36.6092 43.0352 36.6666 43.0122 36.7367 43.0122C36.816 43.0122 36.8642 42.9832 36.8642 42.9355C36.8642 42.8776 36.9265 42.8589 37.1191 42.8589C37.2594 42.8589 37.3741 42.8359 37.3741 42.8078C37.3741 42.7796 37.4552 42.7566 37.5542 42.7566C37.6672 42.7566 37.7452 42.7282 37.7636 42.68C37.7817 42.6327 37.8592 42.6033 37.966 42.6033C38.0611 42.6033 38.139 42.5803 38.139 42.5522C38.139 42.5241 38.1857 42.5011 38.2426 42.5011C38.2995 42.5011 38.3594 42.4666 38.3755 42.4245C38.3934 42.3776 38.4708 42.3478 38.5749 42.3478C38.6684 42.3478 38.7591 42.3248 38.7764 42.2967C38.7937 42.2686 38.8761 42.2456 38.9595 42.2456C39.0472 42.2456 39.1234 42.2133 39.1404 42.1689C39.1566 42.1268 39.2246 42.0923 39.2918 42.0923C39.3589 42.0923 39.4138 42.0693 39.4138 42.0412C39.4138 42.0131 39.4605 41.9901 39.5175 41.9901C39.5743 41.9901 39.6342 41.9556 39.6503 41.9134C39.6694 41.8635 39.7488 41.8368 39.8782 41.8368C39.9874 41.8368 40.0767 41.8163 40.0767 41.7912C40.0767 41.7661 40.1341 41.7312 40.2042 41.7136C40.2743 41.696 40.3317 41.6589 40.3317 41.6313C40.3317 41.6039 40.3787 41.5812 40.4361 41.5812C40.4936 41.5812 40.5937 41.5238 40.6587 41.4535C40.7363 41.3695 40.8317 41.3257 40.9367 41.3257C41.0247 41.3257 41.0966 41.3031 41.0966 41.2756C41.0966 41.248 41.1539 41.211 41.224 41.1934C41.2942 41.1757 41.3515 41.1409 41.3515 41.1158C41.3515 41.0906 41.386 41.0702 41.428 41.0702C41.4701 41.0702 41.5045 41.0524 41.5045 41.0307C41.5045 40.9932 41.6233 40.9267 42.0514 40.7252C42.1559 40.6761 42.3135 40.5611 42.4016 40.4697C42.4898 40.3784 42.6108 40.3036 42.6706 40.3036C42.7333 40.3036 42.7793 40.2712 42.7793 40.227C42.7793 40.1835 42.8251 40.1503 42.8848 40.1503C42.9428 40.1503 43.0659 40.0698 43.1585 39.9715C43.251 39.8731 43.3585 39.7922 43.3972 39.7917C43.436 39.7912 43.5218 39.7337 43.5878 39.6639C43.6539 39.5942 43.7284 39.5371 43.7535 39.5371C43.7787 39.5371 43.7992 39.5026 43.7992 39.4604C43.7992 39.4183 43.8336 39.3838 43.8757 39.3838C43.9177 39.3838 43.9522 39.3608 43.9522 39.3327C43.9522 39.3045 43.983 39.2816 44.0207 39.2816C44.0584 39.2816 44.2089 39.1666 44.3551 39.026C44.5013 38.8855 44.6426 38.7705 44.6691 38.7705C44.6955 38.7705 44.7171 38.7459 44.7171 38.7157C44.7171 38.6467 44.8461 38.515 44.9138 38.515C44.9862 38.515 45.329 38.1824 45.329 38.1123C45.329 38.0801 45.4437 37.9393 45.5839 37.7995C45.7242 37.6598 45.8389 37.522 45.8389 37.4937C45.8389 37.4652 45.9307 37.3471 46.0429 37.2312C46.155 37.1154 46.2468 36.9885 46.2468 36.9493C46.2468 36.9099 46.3241 36.8027 46.4184 36.7109C46.5128 36.619 46.6061 36.4929 46.6258 36.4307C46.6455 36.3685 46.6831 36.3175 46.7092 36.3175C46.7353 36.3175 46.7568 36.2624 46.7568 36.1952C46.7568 36.1279 46.7912 36.0597 46.8332 36.0435C46.8753 36.0274 46.9097 35.9673 46.9097 35.9103C46.9097 35.8532 46.9327 35.8065 46.9607 35.8065C46.9888 35.8065 47.0117 35.7744 47.0117 35.7353C47.0117 35.6961 47.0461 35.6508 47.0882 35.6346C47.1303 35.6185 47.1647 35.5585 47.1647 35.5015C47.1647 35.4444 47.1876 35.3976 47.2157 35.3976C47.2437 35.3976 47.2667 35.3426 47.2667 35.2754C47.2667 35.208 47.3011 35.1398 47.3432 35.1236C47.3852 35.1075 47.4197 35.0474 47.4197 34.9904C47.4197 34.9333 47.4426 34.8866 47.4707 34.8866C47.4987 34.8866 47.5216 34.8394 47.5216 34.7819C47.5216 34.7243 47.579 34.624 47.6491 34.5589C47.7192 34.4937 47.7766 34.4144 47.7766 34.3824C47.7766 34.2913 47.9708 34.12 48.0739 34.12C48.1253 34.12 48.1981 34.0625 48.2355 33.9923C48.273 33.922 48.3343 33.8645 48.3717 33.8645C48.4089 33.8645 48.4395 33.8467 48.4395 33.825C48.4395 33.8033 48.5198 33.7422 48.618 33.6892C48.7161 33.6362 48.7965 33.562 48.7965 33.5243C48.7965 33.4866 48.8211 33.4557 48.8512 33.4557C48.9217 33.4557 49.0514 33.3256 49.0514 33.2549C49.0514 33.2248 49.0751 33.2001 49.1041 33.2001C49.1951 33.2001 49.4594 32.8947 49.4594 32.7895C49.4594 32.7343 49.484 32.6891 49.5141 32.6891C49.5745 32.6891 49.7143 32.563 49.7143 32.5084C49.7143 32.4894 49.7717 32.4286 49.8418 32.3734C49.9119 32.3181 49.9701 32.2343 49.971 32.1871C49.973 32.0797 50.089 31.9225 50.1661 31.9225C50.1983 31.9225 50.2243 31.8448 50.2243 31.7492C50.2243 31.6421 50.2536 31.5644 50.3007 31.5463C50.3428 31.5302 50.3772 31.4586 50.3772 31.3876C50.3772 31.3164 50.4002 31.2582 50.4282 31.2582C50.4563 31.2582 50.4792 31.2007 50.4792 31.1304C50.4792 31.0601 50.5018 31.0026 50.5292 31.0026C50.5567 31.0026 50.5937 30.9452 50.6113 30.8749C50.6289 30.8046 50.6637 30.7471 50.6887 30.7471C50.7138 30.7471 50.7342 30.6749 50.7342 30.5867C50.7342 30.4929 50.7713 30.3991 50.8234 30.3609C50.9187 30.291 50.9485 27.3138 50.8629 26.4082C50.838 26.1436 50.8461 25.9945 50.8904 25.9118C50.9793 25.745 50.922 24.8912 50.8136 24.7712C50.7699 24.7228 50.7342 24.6333 50.7342 24.5723C50.7342 24.5112 50.7112 24.4613 50.6832 24.4613C50.6551 24.4613 50.6322 24.4145 50.6322 24.3574C50.6322 24.3004 50.5978 24.2404 50.5557 24.2243C50.5136 24.2081 50.4792 24.1398 50.4792 24.0725C50.4792 24.0053 50.4563 23.9502 50.4282 23.9502C50.4002 23.9502 50.3772 23.9035 50.3772 23.8464C50.3772 23.7894 50.3428 23.7294 50.3007 23.7133C50.2587 23.697 50.2243 23.6326 50.2243 23.5702C50.2243 23.5012 50.174 23.4296 50.0968 23.3881C50.0267 23.3505 49.9693 23.2745 49.9693 23.2192C49.9693 23.164 49.9119 23.0655 49.8418 23.0003C49.7717 22.9352 49.7143 22.8551 49.7143 22.8222C49.7143 22.7496 48.9681 22.0083 48.8949 22.0083C48.8662 22.0083 48.7855 21.9508 48.7154 21.8805C48.6453 21.8103 48.5545 21.7528 48.5137 21.7528C48.4729 21.7528 48.4395 21.7298 48.4395 21.7017C48.4395 21.6736 48.4051 21.6506 48.363 21.6506C48.321 21.6506 48.2865 21.6161 48.2865 21.5739C48.2865 21.5262 48.2384 21.4972 48.1591 21.4972C48.0889 21.4972 48.0316 21.4742 48.0316 21.4461C48.0316 21.418 47.9537 21.395 47.8586 21.395C47.7517 21.395 47.6742 21.3656 47.6561 21.3184C47.6401 21.2762 47.5687 21.2417 47.4978 21.2417C47.4268 21.2417 47.3687 21.2187 47.3687 21.1906C47.3687 21.1625 47.2564 21.1395 47.1192 21.1395C46.9444 21.1395 46.8609 21.1165 46.8403 21.0629C46.8163 21.0001 46.6901 20.9862 46.1465 20.9862C45.5125 20.9862 45.4819 20.9815 45.4819 20.8823C45.4819 20.8253 45.4475 20.7653 45.4055 20.7492C45.3634 20.733 45.3282 20.682 45.3273 20.6358C45.3253 20.5298 45.2087 20.3729 45.1321 20.3729C45.1001 20.3729 45.074 20.3155 45.074 20.2452C45.074 20.1749 45.0511 20.1174 45.023 20.1174C44.995 20.1174 44.972 20.081 44.972 20.0366C44.972 19.992 44.9892 19.965 45.0103 19.9766C45.0313 19.9881 45.1231 20.0295 45.2142 20.0687C45.3054 20.1078 45.38 20.1578 45.38 20.1798C45.38 20.2016 45.4603 20.2196 45.5584 20.2196C45.6566 20.2196 45.7369 20.2382 45.7369 20.2609C45.7369 20.3235 46.1099 20.4752 46.2639 20.4752C46.3386 20.4752 46.3998 20.4978 46.3998 20.5252C46.3998 20.5528 46.4572 20.5899 46.5273 20.6075C46.5974 20.6251 46.6548 20.66 46.6548 20.6851C46.6548 20.7102 46.8244 20.7307 47.0317 20.7307C47.3198 20.7307 47.4157 20.7488 47.4381 20.8073C47.4603 20.8653 47.554 20.884 47.823 20.884C48.0186 20.884 48.1927 20.907 48.21 20.9351C48.2516 21.0024 49.0514 21.0024 49.0514 20.9351C49.0514 20.907 49.1416 20.884 49.2517 20.884C49.362 20.884 49.4865 20.8495 49.5286 20.8073C49.5707 20.7652 49.6526 20.7307 49.7106 20.7307C49.78 20.7307 49.8163 20.6977 49.8163 20.6347C49.8163 20.582 49.8507 20.5102 49.8928 20.4752C49.9781 20.4041 50.0066 19.6064 49.9238 19.6064C49.8988 19.6064 49.864 19.5489 49.8464 19.4786C49.8288 19.4084 49.7918 19.3509 49.7643 19.3509C49.7369 19.3509 49.7143 19.3037 49.7143 19.2462C49.7143 19.1886 49.657 19.0883 49.5869 19.0232C49.5167 18.958 49.4594 18.8804 49.4594 18.8509C49.4594 18.7471 49.2794 18.456 49.1152 18.2944C49.024 18.2046 48.9494 18.0945 48.9494 18.0495C48.9494 18.0046 48.915 17.9546 48.873 17.9385C48.8309 17.9222 48.7965 17.877 48.7965 17.8378C48.7965 17.7987 48.7735 17.7666 48.7455 17.7666C48.7174 17.7666 48.6945 17.7238 48.6945 17.6716C48.6945 17.6193 48.6371 17.5333 48.567 17.4806C48.4969 17.4278 48.4395 17.3434 48.4395 17.293C48.4395 17.2426 48.4051 17.188 48.363 17.1719C48.321 17.1557 48.2865 17.1104 48.2865 17.0712C48.2865 17.0321 48.2652 17.0001 48.2391 17.0001C48.213 17.0001 48.1843 16.9483 48.1754 16.8851C48.1649 16.8112 48.118 16.7642 48.0443 16.7537C47.9699 16.7431 47.9296 16.7022 47.9296 16.6372C47.9296 16.582 47.8952 16.5236 47.8531 16.5075C47.811 16.4913 47.7766 16.4363 47.7766 16.385C47.7766 16.3339 47.7192 16.2468 47.6491 16.1915C47.579 16.1363 47.5216 16.071 47.5216 16.0466C47.5216 16.0222 47.4643 15.9591 47.3942 15.9063C47.3241 15.8535 47.2667 15.7766 47.2667 15.7354C47.2667 15.6941 47.152 15.5459 47.0117 15.4061C46.8715 15.2663 46.7564 15.125 46.7559 15.0922C46.7548 15.0193 46.5333 14.8026 46.4599 14.8026C46.4305 14.8026 46.3923 14.7572 46.3747 14.7016C46.3571 14.6462 46.2867 14.5566 46.2183 14.5027C46.1498 14.4487 46.0939 14.3792 46.0939 14.348C46.0939 14.317 46.0532 14.2915 46.0035 14.2915C45.9525 14.2915 45.8711 14.2136 45.817 14.1127C45.7641 14.0143 45.69 13.9338 45.6524 13.9338C45.6148 13.9338 45.5839 13.8993 45.5839 13.8571C45.5839 13.8095 45.5357 13.7805 45.4564 13.7805C45.3682 13.7805 45.329 13.7525 45.329 13.6895C45.329 13.5923 45.0183 13.2694 44.9247 13.2694C44.8939 13.2694 44.7545 13.1545 44.6151 13.0139C44.4756 12.8734 44.3267 12.7584 44.2842 12.7584C44.2418 12.7584 44.2071 12.7354 44.2071 12.7073C44.2071 12.6792 44.1727 12.6562 44.1306 12.6562C44.0886 12.6562 44.0541 12.6217 44.0541 12.5795C44.0541 12.5374 44.0252 12.5029 43.9898 12.5029C43.9543 12.5029 43.8823 12.4454 43.8297 12.3751C43.777 12.3049 43.6912 12.2474 43.6391 12.2474C43.5869 12.2474 43.5442 12.2259 43.5442 12.1997C43.5442 12.1735 43.494 12.1361 43.4327 12.1165C43.3714 12.0971 43.2482 12.0036 43.159 11.9087C43.0697 11.8139 42.9479 11.7363 42.8881 11.7363C42.8144 11.7363 42.7793 11.7042 42.7793 11.6372C42.7793 11.5826 42.7594 11.5256 42.7351 11.5104C42.7106 11.4954 42.6759 11.3906 42.658 11.2775C42.6399 11.1645 42.6025 11.072 42.5747 11.072C42.5471 11.072 42.5244 11.0022 42.5244 10.917C42.5244 10.8265 42.4926 10.7499 42.4479 10.7328C42.4058 10.7165 42.3714 10.6483 42.3714 10.581C42.3714 10.5138 42.3484 10.4587 42.3204 10.4587C42.2923 10.4587 42.2694 10.3545 42.2694 10.2271C42.2694 10.0684 42.2453 9.98625 42.1929 9.96619C42.1508 9.94996 42.1164 9.88174 42.1164 9.81441C42.1164 9.74721 42.0935 9.69214 42.0654 9.69214C42.0374 9.69214 42.0144 9.61485 42.0144 9.52043C42.0144 9.39689 41.9786 9.32176 41.887 9.25277C41.8009 9.188 41.7592 9.10674 41.7586 9.00287C41.7581 8.90616 41.7106 8.8042 41.6311 8.72857C41.5615 8.66239 41.5045 8.56389 41.5045 8.50971C41.5045 8.45567 41.4701 8.39805 41.428 8.38195C41.386 8.36573 41.3515 8.309 41.3515 8.25573C41.3515 8.20258 41.3286 8.15901 41.3005 8.15901C41.2725 8.15901 41.2495 8.12452 41.2495 8.08236C41.2495 8.04019 41.2151 8.0057 41.1731 8.0057C41.1289 8.0057 41.0966 7.95958 41.0966 7.89672C41.0966 7.8368 41.0163 7.71185 40.9181 7.61909C40.8199 7.52634 40.7396 7.40292 40.7396 7.34479C40.7396 7.285 40.7065 7.23913 40.6631 7.23913C40.6211 7.23913 40.5866 7.20464 40.5866 7.16248C40.5866 7.12032 40.5637 7.08582 40.5356 7.08582C40.5076 7.08582 40.4839 7.05707 40.483 7.02194C40.4807 6.9366 40.3041 6.72809 40.2343 6.72809C40.2037 6.72809 40.1787 6.70407 40.1787 6.67481C40.1787 6.60455 39.0282 5.45048 38.9582 5.45048C38.9282 5.45048 38.9039 5.42582 38.9039 5.39567C38.9039 5.32502 38.7741 5.19496 38.7036 5.19496C38.6735 5.19496 38.6489 5.16046 38.6489 5.1183C38.6489 5.07065 38.6007 5.04165 38.5214 5.04165C38.4513 5.04165 38.394 5.01699 38.394 4.98684C38.394 4.92628 38.2681 4.78613 38.2137 4.78613C38.1947 4.78613 38.134 4.72863 38.0789 4.65836C38.0237 4.5881 37.945 4.5306 37.9038 4.5306C37.8626 4.5306 37.7416 4.43862 37.6349 4.32619C37.5282 4.21376 37.4029 4.12177 37.3565 4.12177C37.3101 4.12177 37.2721 4.09877 37.2721 4.07067C37.2721 4.04256 37.2401 4.01956 37.2011 4.01956C37.162 4.01956 37.1168 3.98507 37.1007 3.9429C37.0846 3.90074 37.0302 3.86625 36.9798 3.86625C36.9296 3.86625 36.8453 3.80876 36.7927 3.73849C36.74 3.66822 36.6542 3.61073 36.6021 3.61073C36.5499 3.61073 36.5072 3.58773 36.5072 3.55962C36.5072 3.53151 36.4602 3.50852 36.4028 3.50852C36.3453 3.50852 36.2453 3.45103 36.1802 3.38076C36.1152 3.31049 36.0385 3.253 36.0097 3.253C35.9809 3.253 35.944 3.2185 35.9278 3.17634C35.9118 3.13418 35.8518 3.09968 35.795 3.09968C35.738 3.09968 35.6913 3.07669 35.6913 3.04858C35.6913 3.02047 35.6364 2.99747 35.5693 2.99747C35.5022 2.99747 35.4341 2.96298 35.4179 2.92082C35.4018 2.87866 35.3419 2.84416 35.2851 2.84416C35.2281 2.84416 35.1814 2.82116 35.1814 2.79306C35.1814 2.76495 35.124 2.74195 35.0539 2.74195C34.9746 2.74195 34.9265 2.71295 34.9265 2.6653C34.9265 2.61764 34.8783 2.58864 34.799 2.58864C34.7289 2.58864 34.6715 2.56564 34.6715 2.53754C34.6715 2.50943 34.6165 2.48643 34.5495 2.48643C34.4823 2.48643 34.4142 2.45194 34.398 2.40977C34.3811 2.36544 34.3049 2.33312 34.2171 2.33312C34.1338 2.33312 34.0531 2.31268 34.0377 2.28776C34.0222 2.26285 33.9292 2.22733 33.8306 2.20881C33.7322 2.19028 33.6516 2.15323 33.6516 2.1264C33.6516 2.09957 33.5771 2.07683 33.4859 2.07594C33.3948 2.07504 33.2757 2.04055 33.2213 1.99928C33.1667 1.95801 33.0692 1.92428 33.0045 1.92428C32.9398 1.92428 32.8867 1.90129 32.8867 1.87318C32.8867 1.84507 32.8313 1.82207 32.7635 1.82207C32.6958 1.82207 32.6319 1.79678 32.6216 1.76599C32.6114 1.73507 32.4942 1.69751 32.3613 1.68256C32.2283 1.66748 32.1072 1.63529 32.0922 1.61089C32.0771 1.58648 31.9648 1.56655 31.8427 1.56655C31.718 1.56655 31.6117 1.54023 31.6005 1.50663C31.5894 1.47303 31.442 1.43675 31.2648 1.42384C31.0912 1.4112 30.949 1.38066 30.949 1.356C30.949 1.33122 30.8441 1.31103 30.7159 1.31103C30.5767 1.31103 30.452 1.28011 30.4063 1.23437C30.3511 1.17918 30.2169 1.15772 29.9255 1.15772C29.69 1.15772 29.5212 1.13638 29.5212 1.10661C29.5212 1.07595 29.319 1.05551 29.0168 1.05551C28.6153 1.05551 28.5063 1.0398 28.4829 0.978853C28.4583 0.914589 28.3015 0.902197 27.5087 0.902197C26.9127 0.902197 26.5637 0.883288 26.5637 0.851092C26.5637 0.818513 26.1557 0.799988 25.4418 0.799988C24.7279 0.799988 24.32 0.818513 24.32 0.851092ZM28.5315 2.2272C29.7495 2.35548 31.0033 2.57752 31.5864 2.76814C31.6986 2.80481 31.8707 2.85055 31.9689 2.86959C32.3217 2.93832 33.6505 3.39775 34.0341 3.58364C34.1182 3.6244 34.3133 3.71753 34.4675 3.79049C37.3119 5.13657 40.0233 7.8276 40.9492 10.2234C41.0372 10.4512 41.1293 10.6776 41.1539 10.7264C41.3718 11.1591 41.1121 11.3146 40.4805 11.1293C40.0057 10.9901 39.6216 10.9263 38.9034 10.8675C38.0992 10.8016 37.8896 10.675 37.6751 10.1251C37.6032 9.94102 36.6905 8.82235 36.2928 8.43101C35.0544 7.21243 32.9697 6.58372 31.5609 7.00418C30.9801 7.17755 30.6104 7.30365 30.3904 7.40356C27.8475 8.55852 25.7307 8.91408 23.7846 8.51304C23.1781 8.38796 22.5976 8.23899 22.4077 8.15965C22.3517 8.13627 22.1796 8.07916 22.0253 8.03291C21.8711 7.98666 21.6645 7.91167 21.5664 7.86631C21.4682 7.82083 21.2846 7.74404 21.1584 7.6955C21.0322 7.64695 20.6604 7.48942 20.3321 7.34543C19.7433 7.0871 19.6432 7.05771 18.8383 6.90657C18.3817 6.82084 17.5605 6.87029 17.13 7.00929C16.4082 7.24246 16.2042 7.31924 15.8862 7.47754C15.2095 7.81431 14.4915 8.4061 13.965 9.06113C13.6485 9.45476 13.3367 9.88902 13.099 10.2667C12.7694 10.7906 12.7236 10.8164 12.1235 10.8164C11.8686 10.8164 11.5772 10.8378 11.4757 10.864C11.3743 10.89 11.1537 10.9381 10.9854 10.9705C10.8171 11.003 10.5029 11.0775 10.2872 11.1361C9.95075 11.2274 9.8828 11.2326 9.81001 11.172C9.46083 10.8816 10.6495 8.58522 11.8347 7.26085C12.4234 6.60301 14.0175 5.2315 14.4695 4.99399C14.5347 4.95975 14.6265 4.89779 14.6734 4.85627C15.0513 4.52256 16.4108 3.78154 17.2982 3.42573C20.1678 2.27511 24.5483 1.80777 28.5315 2.2272ZM18.9012 7.60185C19.6301 7.77011 19.9686 7.89697 21.1471 8.44315C21.2951 8.51176 21.4462 8.56785 21.4827 8.56785C21.5195 8.56785 21.5633 8.58177 21.5804 8.59889C21.6551 8.67389 22.6692 8.98614 23.2491 9.11275C24.5322 9.39305 26.4948 9.40302 27.5325 9.13459C27.6307 9.10917 27.8831 9.04784 28.0934 8.99827C28.3038 8.9487 28.5103 8.89185 28.5524 8.87192C28.5944 8.85199 28.7551 8.79616 28.9093 8.74773C29.0636 8.69931 29.2586 8.63096 29.3428 8.59583C29.4269 8.56082 29.576 8.50243 29.6742 8.46615C29.7724 8.42974 30.0415 8.3113 30.2724 8.20296C30.5032 8.09449 30.7043 8.0057 30.719 8.0057C30.734 8.0057 30.8435 7.96124 30.9623 7.90681C33.0035 6.97314 35.2019 7.82683 36.9087 10.2161C37.3365 10.8149 37.3283 10.8517 36.7367 10.9986C35.5338 11.2975 34.3788 11.8817 33.2437 12.7656C33.0334 12.9293 32.6818 13.2035 32.4624 13.3748C32.243 13.5462 31.7478 13.8971 31.3622 14.155C30.4795 14.745 30.5041 14.7294 30.2606 14.8544C30.1484 14.9121 29.9763 15.0075 29.8782 15.0665C28.9191 15.6431 28.2538 15.7983 29.0377 15.2625C29.1406 15.1922 29.4489 14.9508 29.7232 14.7259C29.9972 14.5011 30.4903 14.0986 30.8187 13.8316C33.1988 11.8965 33.8608 10.9158 33.1698 10.3491C32.4451 9.75474 29.3592 10.8445 28.1054 12.1375C27.8004 12.452 27.3285 13.15 27.3285 13.2866C27.3285 13.3221 27.3089 13.3731 27.2849 13.3998C27.1739 13.5234 27.0619 14.0603 27.025 14.6458C26.9641 15.6133 26.6844 16.1703 26.0633 16.5606C25.8964 16.6653 25.8472 16.7259 25.8593 16.8111C25.8902 17.0288 28.6039 16.9621 29.6742 16.7173C30.3325 16.5667 30.3965 16.6133 30.0911 17.0209C29.6455 17.6154 29.5191 17.8336 29.2995 18.3865C27.1654 23.7615 33.8381 28.3057 38.0137 24.321C39.3706 23.026 40.0112 20.8225 39.518 19.1464C39.4559 18.9356 39.3873 18.6915 39.3654 18.6038C39.1699 17.8211 38.177 16.5452 37.3106 15.9638C36.6685 15.5327 36.1475 15.3076 35.4457 15.158C35.3247 15.1322 35.2097 15.1012 35.1902 15.0891C35.1708 15.077 34.8928 15.0532 34.5723 15.0362C33.7894 14.9946 33.7655 14.9435 34.3741 14.6141C35.7277 13.8813 37.216 13.8421 38.5189 14.5049C38.8594 14.678 39.624 15.1723 39.7075 15.2734C39.7775 15.3578 41.1249 18.0358 41.3348 18.5076C41.6686 19.2576 41.8877 19.7739 42.0399 20.1685C42.0888 20.295 42.1474 20.4445 42.1702 20.5007C42.2828 20.7769 42.6364 21.8855 42.7515 22.3226C42.9337 23.0149 42.9281 23.0661 42.6391 23.339C42.5059 23.4649 42.3189 23.6596 42.2235 23.7718C41.1843 24.9944 40.0761 26.0934 39.5413 26.4319C39.4572 26.4852 39.3768 26.5423 39.3628 26.5589C39.3409 26.5848 38.6242 26.9379 38.3175 27.0739C37.9337 27.2439 36.3785 27.525 35.8188 27.5255C35.1633 27.526 32.7117 27.2104 32.2748 27.0693C32.2047 27.0465 31.9982 26.9879 31.8159 26.939C31.3723 26.8196 30.7568 26.6184 30.5589 26.5278C30.4705 26.4875 30.385 26.4544 30.369 26.4544C30.0888 26.4544 27.9745 25.2758 27.354 24.7738C26.4345 24.0297 25.883 23.877 25.7684 24.3348C25.6514 24.802 26.0425 25.3485 27.0991 26.1939C27.2954 26.351 27.4675 26.4922 27.4815 26.5076C27.5136 26.5432 28.2751 27.0809 28.6798 27.3541C29.2215 27.7196 30.4423 28.3652 31.0765 28.6217C31.2728 28.701 31.4793 28.7859 31.5354 28.81C31.8633 28.9517 32.4638 29.1629 32.5383 29.1629C32.5864 29.1629 32.638 29.1828 32.6531 29.2071C32.668 29.2314 32.7669 29.2654 32.8727 29.2825C32.9787 29.2996 33.1914 29.3506 33.3457 29.3958C34.8041 29.8238 36.9483 29.8906 38.5811 29.5589C38.7541 29.5238 38.9128 29.4778 38.9338 29.4567C38.9547 29.4357 39.0082 29.4184 39.0527 29.4183C39.6187 29.4175 41.5002 28.3813 42.4535 27.5453C42.948 27.1117 43.0246 27.2461 42.6803 27.9428C42.1223 29.0719 41.1073 30.0168 40.5102 29.9632C39.7604 29.896 39.1485 30.0925 38.5715 30.586C38.182 30.9191 37.182 31.0024 36.0228 30.7981C35.8826 30.7734 35.5384 30.7149 35.2579 30.6682C34.9774 30.6214 34.7081 30.5625 34.6594 30.5373C34.6107 30.5122 34.5189 30.4913 34.4554 30.491C34.3518 30.4905 33.7713 30.3534 33.3712 30.2348C33.0903 30.1516 32.6086 30.0248 32.4023 29.9795C32.2901 29.955 32.0492 29.8878 31.8669 29.8303C31.6846 29.7728 31.4092 29.6884 31.255 29.6428C31.1007 29.597 30.9172 29.5421 30.847 29.5206C30.7769 29.4992 30.5819 29.4412 30.4136 29.3917C30.2453 29.3423 30.0618 29.284 30.0057 29.2622C29.9069 29.2238 29.5827 29.1404 29.2153 29.059C29.1171 29.0373 28.8991 28.9812 28.7308 28.9346C27.6048 28.6223 26.947 28.5374 25.6203 28.5332C24.3265 28.5289 24.1568 28.5444 23.0707 28.7659C22.2112 28.9412 21.9608 28.9971 21.6429 29.0839C20.9553 29.2719 20.362 29.4314 20.2661 29.4541C20.21 29.4672 20.1182 29.4974 20.0621 29.521C20.006 29.5446 19.9027 29.5761 19.8326 29.5906C19.7625 29.6053 19.5904 29.6516 19.4502 29.6935C18.0724 30.1058 16.6701 30.4758 16.0592 30.5883C15.4809 30.6949 15.192 30.7474 14.8608 30.806C14.3724 30.8925 12.7557 30.8956 12.6066 30.8102C12.5446 30.7748 12.4069 30.6645 12.3006 30.5651C12.1942 30.4657 11.9137 30.2895 11.6772 30.1735L11.2471 29.9627L10.6598 29.9661C10.0982 29.9693 9.92232 29.9307 9.78706 29.7746C9.77304 29.7584 9.66978 29.6793 9.55759 29.5987C9.02765 29.2181 8.51212 28.5771 8.20119 27.9121C7.85571 27.1734 7.92748 27.1118 8.53595 27.6253C10.92 29.6374 14.2706 30.3095 17.487 29.4211C17.5851 29.394 17.7916 29.3384 17.9459 29.2977C18.986 29.0226 20.449 28.3961 21.5864 27.7386C21.8359 27.5944 22.0577 27.4764 22.0794 27.4764C22.101 27.4764 22.1264 27.4584 22.1358 27.4365C22.1525 27.3971 22.782 26.9654 22.8228 26.9654C22.8676 26.9654 24.3084 25.788 24.5559 25.549C25.5098 24.6287 25.2101 23.634 24.178 24.2943C24.1019 24.343 23.833 24.5447 23.5806 24.7425C23.1069 25.1135 22.5368 25.4834 22.4383 25.4834C22.4075 25.4834 22.3823 25.5042 22.3823 25.5296C22.3823 25.5673 21.2602 26.1442 20.878 26.3028C20.5788 26.4271 20.3757 26.5134 20.2202 26.5821C20.1247 26.6243 20.0269 26.6588 20.0028 26.6588C19.9786 26.6588 19.7755 26.7174 19.5515 26.7891C18.9386 26.9853 18.2713 27.1539 17.8439 27.2207C17.6336 27.2535 17.3811 27.3 17.283 27.324C16.6829 27.4708 14.8009 27.5309 14.0704 27.4264C12.1902 27.1577 11.1892 26.5499 9.43954 24.6146C9.17273 24.3195 8.74592 23.851 8.49108 23.5736C8.23624 23.2961 8.02055 23.0265 8.01175 22.9745C7.98931 22.8431 8.36921 21.4791 8.6011 20.8584C8.8219 20.2672 8.92414 20.0081 9.07482 19.6575C9.15335 19.4748 9.31423 19.0955 9.43228 18.8146C9.6532 18.2889 10.4863 16.5885 11.0225 15.5691C11.2216 15.1906 11.8785 14.6951 12.5407 14.4243C12.6669 14.3727 12.816 14.3116 12.8721 14.2886C13.4371 14.0568 14.7627 13.9705 15.2943 14.1307C16.1572 14.3908 16.9664 14.7907 16.9754 14.9614C16.9763 14.9785 16.7193 15.0088 16.4043 15.0287C15.7755 15.0687 15.4108 15.1437 14.6314 15.3933C14.1583 15.545 13.4014 16.0397 12.8796 16.5383C12.5779 16.8267 11.9288 17.6453 11.9288 17.7372C11.9288 17.7545 11.8752 17.8544 11.8097 17.9593C11.7443 18.0642 11.6772 18.1959 11.6608 18.2521C11.6443 18.3083 11.5848 18.4808 11.5285 18.6354C11.0278 20.0105 11.185 21.8216 11.9135 23.0715C12.5728 24.2028 13.3165 24.8506 14.6871 25.4876C15.9205 26.0607 17.9446 25.8769 19.3788 25.0613C19.9943 24.7113 20.7346 23.9976 21.145 23.3585C21.3253 23.0778 21.7512 22.1412 21.7938 21.9316C21.811 21.8473 21.8558 21.6288 21.8934 21.4461C22.2003 19.9541 21.8642 18.495 20.9124 17.1881C20.5214 16.6513 20.533 16.6057 21.0383 16.6934C22.2052 16.8961 22.7725 16.9451 23.963 16.9464C25.1812 16.9477 25.3349 16.8686 24.7789 16.5268C24.1901 16.1648 23.902 15.5183 23.8399 14.4193C23.8209 14.0853 23.774 13.8109 23.7042 13.6272C23.6455 13.4726 23.5843 13.3019 23.568 13.2477C23.3001 12.3535 21.8929 11.2267 20.31 10.6388C20.1175 10.5673 19.9142 10.4881 19.8581 10.4627C19.802 10.4372 19.584 10.3771 19.3737 10.3289C19.1633 10.2807 18.9247 10.2212 18.8434 10.1967C17.8853 9.90755 17.1377 10.6258 17.5844 11.4063C17.8197 11.8174 19.3115 13.2218 20.6493 14.2915C20.884 14.4792 21.1686 14.7183 21.3286 14.8621C21.3808 14.909 21.5814 15.0585 21.7745 15.1943C22.1033 15.4257 22.2133 15.5691 22.0618 15.5691C21.9315 15.5691 20.913 15.0329 20.1896 14.5833C19.4053 14.0961 19.3762 14.076 18.5833 13.4778C18.3028 13.2664 18.0504 13.0761 18.0224 13.0553C17.9943 13.0345 17.8911 12.9517 17.7929 12.8713C17.5912 12.7063 16.7314 12.094 16.7012 12.094C16.6903 12.094 16.5357 12.0054 16.3576 11.897C15.7313 11.5159 14.8499 11.1406 14.2999 11.0207C13.5304 10.8531 13.5432 10.8908 14.0187 10.1858C15.2745 8.3237 17.3258 7.23811 18.9012 7.60185ZM17.487 16.6131C18.4714 16.8563 19.3445 17.4827 19.8732 18.3248C20.1058 18.6952 20.1464 18.7725 20.2919 19.1209C20.5484 19.7354 20.558 21.0576 20.31 21.6327C20.2718 21.7213 20.2406 21.8155 20.2406 21.8421C20.2406 22.1561 19.364 23.2663 18.8427 23.6126C18.3299 23.9532 18.2376 23.9947 17.4069 24.2583C17.0194 24.3812 15.6494 24.2829 15.3031 24.1074C15.2562 24.0836 15.0925 24.0098 14.9394 23.9434C12.0997 22.711 12.0202 18.4034 14.8105 16.9682C15.0835 16.8277 15.2347 16.7697 15.7787 16.5968C16.0122 16.5226 17.1652 16.5336 17.487 16.6131ZM35.1995 16.6192C38.1027 17.3523 39.1592 20.983 37.0882 23.1088C34.8737 25.3819 31.1128 24.2883 30.4665 21.1833C30.076 19.3079 31.2434 17.2884 33.0397 16.7315C33.194 16.6837 33.389 16.6229 33.4732 16.5965C33.7288 16.5158 34.8488 16.5307 35.1995 16.6192ZM42.1208 17.466C42.5088 17.7762 42.6645 17.9921 42.8822 18.5219C43.097 19.0451 43.3553 19.5816 43.6621 20.143C44.4947 21.6655 44.5328 21.8106 44.1689 22.0699C43.5978 22.4767 43.4661 22.446 43.3196 21.8723C43.1433 21.1823 42.95 20.613 42.5761 19.683C42.4857 19.4582 42.3552 19.125 42.286 18.9427C42.2169 18.7602 42.1173 18.5303 42.0649 18.4316C41.4566 17.2862 41.476 16.9504 42.1208 17.466ZM9.22818 17.4488C9.19453 17.6334 9.09891 17.8587 8.48101 19.2107C8.32994 19.5412 8.20629 19.8453 8.20629 19.8866C8.20629 19.9277 8.15147 20.0827 8.08454 20.231C8.01749 20.3793 7.85316 20.8572 7.71943 21.2928C7.36758 22.4387 7.34311 22.463 6.86084 22.1422C6.42549 21.8525 6.41708 21.7639 6.76281 21.1002C6.91987 20.7986 7.1283 20.3966 7.22595 20.2069C7.32348 20.0171 7.42342 19.8619 7.4479 19.8619C7.47238 19.8619 7.49239 19.833 7.49239 19.7979C7.49239 19.7626 7.57003 19.5729 7.66487 19.3763C7.75972 19.1795 7.93373 18.7851 8.05165 18.4996C8.26174 17.9908 8.34919 17.8734 8.88704 17.3787C9.09789 17.1848 9.26987 17.2201 9.22818 17.4488ZM16.1381 18.9381C16.1221 18.964 16.044 18.9996 15.9644 19.017C15.3082 19.1615 14.8602 20.4326 15.2253 21.114C15.6979 21.9958 16.8147 22.23 17.5835 21.6085C18.5004 20.867 18.2548 19.3769 17.15 18.98C16.8838 18.8844 16.1889 18.8557 16.1381 18.9381ZM33.6738 19.0124C31.8568 19.8604 32.9778 22.5525 34.8547 21.8488C36.0895 21.3858 36.1635 19.6443 34.9741 19.0426C34.5764 18.8414 34.0658 18.8295 33.6738 19.0124ZM22.9387 22.5146C22.4394 22.6756 22.2335 23.118 22.3045 23.8774C22.3454 24.3156 22.3918 24.3362 22.579 23.9991C22.9484 23.3335 23.4031 23.0755 24.2097 23.0733C24.667 23.0721 24.7779 23.0592 24.6897 23.0177C24.6266 22.988 24.5749 22.9441 24.5749 22.9204C24.5749 22.8965 24.5449 22.8771 24.508 22.8771C24.4712 22.8771 24.3469 22.8314 24.2316 22.7756C23.7478 22.5414 23.1993 22.4307 22.9387 22.5146ZM27.1285 22.5971C26.7722 22.7214 26.4856 22.8484 26.2177 23.0009C26.1168 23.0582 26.1764 23.0669 26.6574 23.0651C27.283 23.063 27.6195 23.1773 27.9184 23.4936C28.0006 23.5808 28.1081 23.6896 28.1572 23.7357C28.2063 23.7819 28.247 23.8433 28.2478 23.8722C28.2486 23.9011 28.3145 24.0111 28.3943 24.1167L28.5395 24.3089L28.5714 24.1487C28.8194 22.9055 28.1887 22.2271 27.1285 22.5971ZM6.26512 25.8971C6.88532 26.1343 6.96258 26.2208 7.10548 26.8376C7.26942 27.5456 7.357 27.8195 7.51189 28.1101C7.58532 28.2477 7.64537 28.389 7.64537 28.4242C7.64537 28.521 8.1762 29.2425 8.56974 29.6807C9.02523 30.1877 9.01197 30.3101 8.48675 30.4439C8.37456 30.4724 8.23688 30.5165 8.18079 30.5418C7.94049 30.6503 6.89909 30.8436 6.54902 30.8449C5.6295 30.8481 4.17723 29.9935 3.9846 29.3359C3.86834 28.9393 3.92226 28.2866 4.12738 27.6042C4.17812 27.4356 4.2555 27.1236 4.29923 26.911C4.54323 25.7261 5.08643 25.4459 6.26512 25.8971ZM46.1448 25.7601C46.3771 25.844 46.537 26.2566 46.8492 27.5787C47.2376 29.2226 47.1785 29.4728 46.2213 30.2361C45.5773 30.7497 44.4135 31.0049 43.6521 30.7996C43.5507 30.7723 43.2842 30.7048 43.0598 30.6496C41.7706 30.3331 41.7187 30.2673 42.2954 29.6798C42.8626 29.1022 43.3099 28.3842 43.5396 27.6825C43.6667 27.2945 43.8502 26.5375 43.8502 26.4008C43.8502 26.2963 44.2367 26.0261 44.5896 25.8838C44.7018 25.8386 44.8509 25.7775 44.921 25.7481C45.0982 25.6739 45.9288 25.6819 46.1448 25.7601ZM27.3285 29.3444C27.5389 29.3892 27.7815 29.447 27.8675 29.4732C27.9537 29.4993 28.0799 29.5216 28.148 29.5229C28.2162 29.5241 28.3637 29.5591 28.4759 29.6007C28.5881 29.6423 28.7946 29.6988 28.9348 29.7264C29.2078 29.7801 29.3473 29.8178 30.3371 30.1047C31.1779 30.3485 31.4194 30.4207 31.8159 30.5464C32.4851 30.7588 34.7132 31.2974 35.2579 31.3785C36.233 31.5237 36.6041 31.5648 36.9399 31.5648C37.2102 31.5648 37.2907 31.5857 37.4074 31.6863L37.5484 31.8078L37.3082 32.3194C36.9178 33.1511 37.03 33.4534 37.6184 33.1554C37.7224 33.1028 37.9911 32.9975 38.2155 32.9217C39.432 32.5104 40.7331 32.4858 41.9125 32.8522C42.1104 32.9137 42.1819 32.9412 42.5436 33.0946C42.6804 33.1526 42.8092 33.2001 42.8297 33.2001C42.8503 33.2001 43.0277 33.2885 43.2239 33.3966C43.9633 33.8039 44.7672 34.0397 45.9747 34.2033C46.7262 34.3051 45.4088 36.3515 43.3624 38.2607C43.0255 38.5752 41.4939 39.611 40.8756 39.9428C40.0955 40.3614 39.4844 40.6593 39.0468 40.8344C38.8029 40.932 38.5276 41.0448 38.4349 41.0852C37.8764 41.3285 37.4733 41.4675 35.8953 41.9608C35.5424 42.0711 34.4439 42.3486 33.6516 42.5274C33.3435 42.5969 32.773 42.7026 31.7139 42.8865C31.0694 42.9982 29.8296 43.1587 29.1643 43.2163C28.8418 43.2443 28.3713 43.2897 28.1189 43.3171C26.8356 43.457 24.6957 43.4357 22.9942 43.2662C22.7277 43.2396 22.1426 43.1826 21.6939 43.1395C21.2451 43.0965 20.6141 43.0258 20.2916 42.9827C19.7759 42.9134 19.4968 42.8666 18.6343 42.7052C18.5221 42.6841 18.2582 42.6397 18.0479 42.6064C17.8375 42.5731 17.5966 42.5246 17.5125 42.4986C17.3506 42.4486 16.5635 42.2714 16.1356 42.1885C15.9954 42.1614 15.766 42.0964 15.6257 42.0441C15.4855 41.9917 15.2331 41.9144 15.0648 41.8722C14.4944 41.7292 14.3002 41.6749 14.1979 41.63C14.1418 41.6054 13.7821 41.4806 13.3984 41.3526C13.0148 41.2247 12.5047 41.0283 12.2649 40.9163C12.0251 40.8042 11.779 40.7125 11.7179 40.7125C11.6568 40.7125 11.5318 40.655 11.4397 40.5847C11.3478 40.5144 11.2539 40.4568 11.231 40.4567C11.2081 40.4564 11.1205 40.4195 11.0364 40.3745C10.9522 40.3294 10.5851 40.1419 10.2205 39.9577C9.8559 39.7733 9.46581 39.5491 9.35362 39.4593C9.24144 39.3696 9.02344 39.2131 8.86919 39.1115C7.83697 38.4323 7.73244 38.3467 6.85587 37.4625C6.13815 36.7386 5.84431 36.397 5.60719 36.0109C5.51234 35.8563 5.39493 35.6838 5.34636 35.6276C5.18701 35.4431 4.84077 34.6951 4.84077 34.5354C4.84077 34.345 4.95308 34.2741 5.25814 34.2715C5.75787 34.2673 6.51754 34.0119 7.46689 33.5289C9.61776 32.4343 11.1676 32.3265 13.1429 33.1341C13.913 33.4489 14.0429 33.1916 13.5803 32.2675C13.2929 31.6935 13.3729 31.5651 14.0181 31.5643C14.448 31.5638 15.4294 31.4469 15.7018 31.3637C15.7999 31.3338 15.9448 31.3093 16.0241 31.3093C16.2584 31.3093 18.4034 30.7577 19.7051 30.3627C20.4368 30.1408 21.2825 29.9058 21.6615 29.8195C21.8962 29.7659 22.2224 29.6767 22.3866 29.6214C22.5507 29.566 22.7291 29.5206 22.7831 29.5206C22.837 29.5206 23.1188 29.4721 23.4094 29.4129C24.4601 29.1985 26.4765 29.1633 27.3285 29.3444Z", fill: "#0E3145" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.4532 2.12987C19.8987 2.38003 16.164 3.53971 14.6735 4.85629C14.6266 4.89781 14.5348 4.95977 14.4695 4.99401C14.0176 5.23152 12.4234 6.60303 11.8347 7.26087C10.6495 8.58524 9.4609 10.8816 9.81007 11.172C9.88286 11.2326 9.95081 11.2275 10.2872 11.1361C10.5029 11.0775 10.8172 11.003 10.9854 10.9705C11.1537 10.9381 11.3744 10.89 11.4757 10.864C11.5772 10.8378 11.8686 10.8165 12.1236 10.8165C12.7237 10.8165 12.7694 10.7906 13.0991 10.2667C13.3367 9.88904 13.6485 9.45478 13.9651 9.06115C14.2088 8.75785 14.6402 8.32333 14.8803 8.13936C15.3981 7.74253 15.5354 7.65208 15.8862 7.47756C16.2043 7.31926 16.4083 7.24248 17.1301 7.00931C17.5606 6.87031 18.3818 6.82086 18.8383 6.90659C19.6432 7.05773 19.7433 7.08712 20.3322 7.34545C20.6604 7.48944 21.0323 7.64697 21.1585 7.69552C21.2847 7.74406 21.4683 7.82085 21.5664 7.86633C21.6646 7.91169 21.8711 7.98668 22.0254 8.03293C22.1796 8.07918 22.3517 8.13629 22.4078 8.15967C22.5275 8.20975 22.974 8.33406 23.3002 8.40829C25.6369 8.93965 27.6304 8.65717 30.3905 7.40358C30.6105 7.30367 30.9802 7.17757 31.561 7.0042C32.9698 6.58374 35.0545 7.21245 36.2929 8.43103C36.6906 8.82237 37.6032 9.94104 37.6751 10.1251C37.8897 10.675 38.0993 10.8016 38.9034 10.8676C39.6217 10.9263 40.0058 10.9901 40.4805 11.1293C41.1122 11.3146 41.3719 11.1591 41.154 10.7264C41.1294 10.6776 41.0372 10.4512 40.9493 10.2234C40.0234 7.82762 37.3119 5.13659 34.4676 3.79051C34.3133 3.71755 34.1183 3.62442 34.0341 3.58366C33.6505 3.39777 32.3218 2.93834 31.9689 2.86961C31.8708 2.85057 31.6987 2.80483 31.5865 2.76816C31.0034 2.57754 29.7496 2.3555 28.5315 2.22722C27.4169 2.10981 24.5257 2.05449 23.4532 2.12987ZM27.7365 2.35869C28.1432 2.39919 28.6251 2.43356 28.8074 2.43496C29.9351 2.44403 32.5047 3.09881 33.9576 3.74745C36.0858 4.69748 38.5943 6.66666 39.6198 8.19263C39.7113 8.3287 39.8258 8.4861 39.8743 8.54231C39.9895 8.6757 40.2786 9.19326 40.5594 9.76882C40.8858 10.4376 40.9522 10.6037 40.9816 10.8237L41.008 11.0209H40.8239C40.7226 11.0209 40.5533 10.9892 40.4475 10.9505C40.154 10.8432 39.3927 10.721 38.853 10.695C38.2436 10.6653 38.2428 10.6649 38.006 10.3153C37.8976 10.1552 37.7949 10.0128 37.7776 9.99879C37.7604 9.98473 37.6848 9.87473 37.6096 9.75438C36.4852 7.95564 34.703 6.8284 32.8481 6.74306C31.7599 6.69298 31.2737 6.81908 29.5468 7.5988C26.7503 8.86172 23.7881 8.77752 20.7954 7.34992C19.4594 6.71265 18.1943 6.5113 17.1811 6.77474C16.8283 6.86648 16.0307 7.15585 15.8807 7.24656C15.7966 7.29741 15.6016 7.40639 15.4473 7.48867C14.6781 7.89942 13.9518 8.6564 13.076 9.96046L12.6385 10.612L12.3983 10.6126C11.9447 10.6134 10.826 10.7623 10.498 10.8653C10.0491 11.0063 9.92009 11.0038 9.95553 10.8548C10.0459 10.4735 10.5776 9.35232 10.9068 8.84894C11.0171 8.6803 11.1459 8.47332 11.193 8.389C11.2402 8.30468 11.4316 8.06321 11.6185 7.85241C11.8054 7.6416 12.0107 7.40077 12.0747 7.31721C12.3286 6.98529 13.472 5.97509 14.147 5.48627C14.5396 5.20188 14.8724 4.95453 14.8864 4.93652C14.9004 4.91851 15.0266 4.84057 15.1668 4.76328C15.3071 4.68598 15.4562 4.59348 15.4983 4.55784C15.5771 4.49102 16.5133 3.96848 16.5542 3.96848C16.5669 3.96848 16.7441 3.88799 16.9482 3.78961C17.1522 3.69123 17.3472 3.61075 17.3812 3.61075C17.4152 3.61075 17.6079 3.5452 17.8093 3.46523C18.4198 3.22248 18.6932 3.14135 19.6542 2.91815C19.8505 2.87254 20.1374 2.80483 20.2916 2.76752C20.8644 2.62916 21.0919 2.58598 21.4899 2.53998C21.7143 2.51405 22.1044 2.46729 22.3568 2.43611C23.3568 2.31231 23.6931 2.2957 25.3144 2.29046C26.442 2.28689 27.2412 2.30937 27.7365 2.35869ZM17.6655 7.60851C16.2031 7.88728 14.9913 8.74379 14.0187 10.1858C13.5432 10.8908 13.5305 10.8531 14.3 11.0207C14.8499 11.1406 15.7313 11.5159 16.3577 11.8971C16.5357 12.0054 16.6904 12.0941 16.7012 12.0941C16.7314 12.0941 17.5913 12.7063 17.793 12.8714C17.8911 12.9517 17.9944 13.0345 18.0224 13.0553C18.0505 13.0762 18.3029 13.2664 18.5834 13.4778C19.3763 14.076 19.4054 14.0961 20.1896 14.5834C20.9131 15.0329 21.9315 15.5692 22.0618 15.5692C22.2134 15.5692 22.1034 15.4257 21.7746 15.1943C21.5815 15.0585 21.3808 14.909 21.3287 14.8621C21.1687 14.7183 20.884 14.4792 20.6493 14.2916C19.3115 13.2218 17.8197 11.8175 17.5844 11.4063C17.1377 10.6258 17.8854 9.90757 18.8434 10.1967C18.9248 10.2212 19.1634 10.2808 19.3737 10.3289C19.5841 10.3771 19.8021 10.4373 19.8582 10.4627C19.9143 10.4881 20.1176 10.5673 20.3101 10.6389C21.8929 11.2267 23.3002 12.3535 23.568 13.2477C23.5843 13.3019 23.6455 13.4726 23.7043 13.6272C23.774 13.8109 23.8209 14.0853 23.8399 14.4193C23.902 15.5183 24.1901 16.1648 24.779 16.5269C25.3349 16.8686 25.1813 16.9477 23.9631 16.9464C22.7725 16.9451 22.2052 16.8961 21.0384 16.6935C20.5331 16.6057 20.5215 16.6513 20.9124 17.1881C21.8642 18.495 22.2004 19.9542 21.8934 21.4462C21.8558 21.6289 21.8111 21.8473 21.7939 21.9317C21.7513 22.1412 21.3254 23.0778 21.1451 23.3585C20.7346 23.9977 19.9943 24.7113 19.3788 25.0613C17.9447 25.8769 15.9205 26.0608 14.6871 25.4876C11.8372 24.1631 10.5403 21.3498 11.5285 18.6354C11.5849 18.4808 11.6444 18.3084 11.6608 18.2521C11.6773 18.1959 11.7443 18.0642 11.8097 17.9593C11.8753 17.8544 11.9288 17.7545 11.9288 17.7373C11.9288 17.6453 12.578 16.8267 12.8797 16.5384C13.4015 16.0397 14.1583 15.545 14.6314 15.3934C15.4108 15.1437 15.7756 15.0687 16.4043 15.0287C16.7193 15.0088 16.9763 14.9785 16.9754 14.9614C16.9665 14.7907 16.1573 14.3908 15.2943 14.1307C14.7627 13.9705 13.4372 14.0569 12.8722 14.2886C12.8161 14.3116 12.6669 14.3727 12.5407 14.4243C11.8786 14.6951 11.2217 15.1906 11.0225 15.5692C10.4864 16.5886 9.65327 18.2889 9.43234 18.8147C9.31429 19.0955 9.15341 19.4748 9.07488 19.6575C8.9242 20.0081 8.82196 20.2672 8.60116 20.8585C8.36927 21.4791 7.98937 22.8431 8.01181 22.9746C8.02061 23.0266 8.23631 23.2961 8.49114 23.5736C8.74598 23.851 9.17279 24.3195 9.43961 24.6146C11.1893 26.5499 12.1903 27.1577 14.0705 27.4264C14.801 27.5309 16.683 27.4709 17.283 27.3241C17.3812 27.3 17.6336 27.2535 17.844 27.2207C18.2714 27.1539 18.9386 26.9854 19.5516 26.7891C19.7756 26.7174 19.9786 26.6588 20.0029 26.6588C20.027 26.6588 20.1247 26.6243 20.2202 26.5821C20.3758 26.5134 20.5788 26.4272 20.878 26.3029C21.2602 26.1442 22.3823 25.5673 22.3823 25.5297C22.3823 25.5042 22.4076 25.4834 22.4384 25.4834C22.5368 25.4834 23.1069 25.1135 23.5806 24.7425C23.8331 24.5447 24.1019 24.343 24.178 24.2943C25.2101 23.6341 25.5098 24.6287 24.556 25.5491C24.3084 25.788 22.8676 26.9654 22.8229 26.9654C22.7821 26.9654 22.1526 27.3971 22.1359 27.4365C22.1265 27.4585 22.1011 27.4765 22.0794 27.4765C22.0577 27.4765 21.8359 27.5944 21.5864 27.7386C20.4491 28.3961 18.9861 29.0226 17.9459 29.2977C17.7917 29.3385 17.5852 29.394 17.487 29.4211C14.2707 30.3096 10.9201 29.6374 8.53602 27.6253C7.92755 27.1118 7.85577 27.1734 8.20125 27.9121C8.51218 28.5771 9.02771 29.2181 9.55765 29.5987C9.66984 29.6793 9.7731 29.7584 9.78712 29.7746C9.92238 29.9308 10.0983 29.9693 10.6599 29.9661L11.2472 29.9627L11.6773 30.1735C11.9138 30.2895 12.1942 30.4657 12.3007 30.5651C12.407 30.6645 12.5447 30.7749 12.6066 30.8103C12.7558 30.8956 14.3725 30.8925 14.8609 30.806C15.1921 30.7474 15.481 30.6949 16.0592 30.5883C16.6701 30.4758 18.0724 30.1058 19.4502 29.6935C19.5905 29.6516 19.7626 29.6054 19.8327 29.5907C19.9028 29.5761 20.0061 29.5447 20.0621 29.521C20.1182 29.4974 20.21 29.4672 20.2661 29.4541C20.3621 29.4315 20.9554 29.2719 21.6429 29.084C21.9609 28.9971 22.2112 28.9412 23.0707 28.766C24.1569 28.5444 24.3265 28.529 25.6203 28.5332C26.947 28.5374 27.6049 28.6224 28.7309 28.9346C28.8992 28.9812 29.1172 29.0373 29.2153 29.059C29.5827 29.1404 29.9069 29.2239 30.0057 29.2622C30.0618 29.284 30.2454 29.3423 30.4137 29.3917C30.5819 29.4412 30.777 29.4992 30.8471 29.5206C30.9172 29.5421 31.1008 29.597 31.255 29.6428C31.4093 29.6884 31.6847 29.7728 31.867 29.8303C32.0492 29.8878 32.2902 29.955 32.4024 29.9796C32.6086 30.0248 33.0904 30.1517 33.3712 30.2348C33.7714 30.3534 34.3518 30.4905 34.4555 30.491C34.519 30.4914 34.6107 30.5122 34.6594 30.5374C34.7081 30.5625 34.9775 30.6214 35.258 30.6682C35.5384 30.715 35.8826 30.7735 36.0229 30.7981C37.182 31.0024 38.182 30.9191 38.5716 30.586C39.1486 30.0925 39.7605 29.896 40.5102 29.9632C41.1073 30.0169 42.1223 29.0719 42.6803 27.9428C43.0247 27.2461 42.948 27.1117 42.4535 27.5453C41.5002 28.3813 39.6187 29.4175 39.0527 29.4183C39.0082 29.4184 38.9548 29.4357 38.9339 29.4568C38.9129 29.4778 38.7542 29.5238 38.5812 29.559C36.9484 29.8906 34.8041 29.8238 33.3457 29.3958C33.1915 29.3506 32.9787 29.2996 32.8728 29.2825C32.767 29.2654 32.668 29.2314 32.6531 29.2071C32.6381 29.1828 32.5865 29.1629 32.5384 29.1629C32.4638 29.1629 31.8634 28.9517 31.5355 28.81C31.4794 28.7859 31.2729 28.7011 31.0766 28.6217C30.4423 28.3652 29.2216 27.7196 28.6799 27.3541C28.2752 27.0809 27.5137 26.5432 27.4816 26.5077C27.4676 26.4922 27.2955 26.351 27.0991 26.1939C26.0426 25.3485 25.6515 24.8021 25.7685 24.3348C25.8831 23.8771 26.4346 24.0297 27.3541 24.7738C27.9746 25.2758 30.0888 26.4544 30.369 26.4544C30.3851 26.4544 30.4705 26.4875 30.559 26.5278C30.7568 26.6184 31.3723 26.8197 31.816 26.939C31.9983 26.9879 32.2048 27.0466 32.2749 27.0693C32.7118 27.2105 35.1634 27.526 35.8189 27.5255C36.3785 27.525 37.9338 27.2439 38.3175 27.0739C38.6242 26.938 39.341 26.5848 39.3629 26.5589C39.3769 26.5423 39.4572 26.4852 39.5414 26.4319C40.0761 26.0935 41.1843 24.9945 42.2236 23.7718C42.3189 23.6596 42.5059 23.4649 42.6392 23.3391C42.9282 23.0662 42.9338 23.0149 42.7516 22.3226C42.6365 21.8855 42.2828 20.7769 42.1703 20.5007C42.1475 20.4445 42.0888 20.295 42.04 20.1686C41.8878 19.7739 41.6686 19.2576 41.3349 18.5077C41.1249 18.0358 39.7776 15.3578 39.7076 15.2734C39.6241 15.1723 38.8595 14.678 38.5189 14.5049C37.2161 13.8421 35.7277 13.8813 34.3741 14.6141C33.7655 14.9435 33.7895 14.9946 34.5724 15.0363C34.8929 15.0533 35.1709 15.077 35.1903 15.0892C35.2098 15.1012 35.3248 15.1322 35.4457 15.158C36.1475 15.3076 36.6686 15.5327 37.3107 15.9638C38.177 16.5453 39.17 17.8211 39.3654 18.6039C39.3874 18.6915 39.4559 18.9357 39.518 19.1465C40.0112 20.8226 39.3707 23.026 38.0137 24.321C33.8382 28.3058 27.1654 23.7616 29.2996 18.3865C29.5191 17.8336 29.6456 17.6154 30.0911 17.0209C30.3966 16.6133 30.3326 16.5667 29.6743 16.7173C28.6039 16.9621 25.8902 17.0288 25.8594 16.8111C25.8473 16.7259 25.8965 16.6653 26.0633 16.5606C26.6844 16.1703 26.9641 15.6134 27.0251 14.6458C27.0619 14.0603 27.174 13.5235 27.285 13.3998C27.309 13.3731 27.3286 13.3221 27.3286 13.2866C27.3286 12.8176 28.5104 11.6366 29.4846 11.1319C31.7317 9.96787 33.4491 9.87486 33.4473 10.9173C33.4464 11.414 32.4949 12.4689 30.8188 13.8316C30.4904 14.0986 29.9973 14.5011 29.7232 14.7259C29.449 14.9508 29.1406 15.1923 29.0378 15.2625C28.2539 15.7984 28.9192 15.6431 29.8782 15.0665C29.9764 15.0075 30.1485 14.9121 30.2607 14.8545C30.5042 14.7294 30.4796 14.745 31.3623 14.155C31.7479 13.8972 32.243 13.5462 32.4624 13.3749C32.6818 13.2035 33.0334 12.9294 33.2438 12.7656C34.3789 11.8817 35.5338 11.2975 36.7368 10.9986C37.3284 10.8517 37.3366 10.8149 36.9087 10.2161C35.202 7.82685 33.0036 6.97316 30.9623 7.90683C30.8435 7.96126 30.734 8.00572 30.7191 8.00572C30.7043 8.00572 30.5033 8.09451 30.2724 8.20298C30.0415 8.31132 29.7724 8.42976 29.6743 8.46617C29.5761 8.50245 29.427 8.56084 29.3428 8.59585C29.2587 8.63098 29.0636 8.69933 28.9094 8.74775C28.7551 8.79618 28.5945 8.85201 28.5524 8.87194C28.5104 8.89187 28.3038 8.94872 28.0935 8.99829C27.8831 9.04786 27.6307 9.10919 27.5326 9.13461C26.4949 9.40304 24.5323 9.39307 23.2492 9.11277C22.6693 8.98615 21.6552 8.67391 21.5805 8.59891C21.5634 8.58179 21.5195 8.56787 21.4828 8.56787C21.4462 8.56787 21.2951 8.51178 21.1471 8.44317C19.9687 7.89699 19.6301 7.77013 18.9013 7.60187C18.6169 7.5362 18.028 7.53939 17.6655 7.60851ZM19.2718 7.77549C19.4541 7.82404 20.0242 8.04507 20.5387 8.26673C24.1608 9.82682 26.6749 9.83206 30.2607 8.28692C31.5736 7.7212 31.9317 7.63061 32.7338 7.66153C34.3709 7.72439 35.628 8.51996 36.8591 10.2725C37.1819 10.732 37.2152 10.8669 37.0061 10.8685C36.1305 10.875 34.3913 11.7734 32.7083 13.0886C32.0624 13.5933 30.3966 14.7515 30.3165 14.7515C30.2987 14.7515 30.1986 14.805 30.0939 14.8704C29.2781 15.381 28.8365 15.5046 29.424 15.0581C29.6274 14.9035 29.8186 14.7528 29.8488 14.7231C29.879 14.6935 30.1676 14.4551 30.4901 14.1932C32.3114 12.7147 33.4402 11.5644 33.5274 11.0983C33.7094 10.126 32.5859 9.83615 30.9236 10.4264C28.3362 11.3451 27.1148 12.61 26.9694 14.5215C26.8856 15.6219 26.6818 16.0314 25.9645 16.5404C25.7214 16.7129 25.6884 16.8503 25.8612 16.9716C26.0876 17.1305 28.3782 17.0374 29.5468 16.8219C29.9903 16.74 30.2402 16.7244 30.1569 16.7837C29.7813 17.0512 29.1386 18.2551 28.8838 19.1683C28.7073 19.8006 28.801 21.8523 29.0168 22.0824C29.0418 22.1091 29.0624 22.1925 29.0624 22.2678C29.0624 22.343 29.0968 22.4332 29.1388 22.4682C29.1809 22.5033 29.2153 22.5705 29.2153 22.6176C29.2153 22.6647 29.2355 22.7252 29.2601 22.7519C29.2847 22.7786 29.3795 22.9384 29.4708 23.1071C30.0656 24.2059 30.9829 25.0226 32.1984 25.5357C32.8641 25.8166 33.0669 25.8644 33.9322 25.9433C34.4418 25.99 35.3593 25.9076 35.6149 25.7923C35.671 25.767 35.7985 25.7329 35.8982 25.7166C35.998 25.7002 36.1692 25.6411 36.2787 25.5851C36.3882 25.5291 36.5035 25.4834 36.5348 25.4834C36.5941 25.4834 37.4702 24.9639 37.6482 24.8233C38.0818 24.4805 38.9039 23.5868 38.9039 23.4583C38.9039 23.4382 38.9349 23.3854 38.9729 23.341C39.215 23.0576 39.6642 21.9619 39.6672 21.648C39.6681 21.5482 39.6933 21.4421 39.7231 21.4122C39.7971 21.3381 39.7971 19.5101 39.7231 19.436C39.6933 19.4061 39.6688 19.3223 39.6688 19.2498C39.6688 18.8729 39.1075 17.5717 38.8054 17.2479C38.7437 17.1819 38.6499 17.0589 38.597 16.9745C38.3174 16.5288 37.2692 15.7014 36.5945 15.3936C36.0004 15.1228 35.1815 14.9176 34.5441 14.8801C34.4038 14.872 34.2696 14.8626 34.2458 14.8594C34.2219 14.8563 34.3191 14.775 34.4617 14.6788C35.525 13.9617 37.5098 13.9392 38.6097 14.6318C38.7144 14.6976 38.8138 14.7515 38.8309 14.7515C38.924 14.7515 39.6317 15.2988 39.7143 15.4348C40.0396 15.9694 41.3211 18.6501 41.8675 19.9386C42.0362 20.3364 42.3008 21.103 42.498 21.7651C42.6258 22.1939 42.7527 22.6156 42.7803 22.7018C42.8663 22.9716 42.8737 22.9604 41.989 23.9294C41.961 23.9602 41.7678 24.1787 41.5599 24.4149C39.1274 27.1792 37.7105 27.6891 33.8302 27.1962C33.4936 27.1534 33.092 27.1074 32.9378 27.0938C31.5341 26.9708 28.724 25.7838 27.5033 24.7981C27.0265 24.4132 26.9167 24.3344 26.6248 24.1681C25.6163 23.5936 25.2853 24.5783 26.1788 25.4952C28.6572 28.0381 32.9134 29.85 36.4053 29.8486C37.4212 29.8482 37.7871 29.8118 38.457 29.6447C38.6179 29.6046 38.7849 29.5717 38.8282 29.5717C39.5055 29.5717 41.5951 28.4261 42.6259 27.4896C42.8948 27.2454 42.8934 27.3525 42.6205 27.8992C41.9949 29.1527 41.1551 29.8784 40.3303 29.8784C39.5318 29.8784 39.1295 30.0282 38.4597 30.5749L38.1695 30.8118L37.1727 30.7834C36.2383 30.757 35.5179 30.6705 34.748 30.4921C33.7696 30.2656 31.7993 29.7463 31.459 29.6253C31.3889 29.6004 31.1938 29.5404 31.0256 29.4922C30.8573 29.4439 30.5819 29.3607 30.4137 29.3073C29.9969 29.1749 28.1733 28.6972 27.8895 28.6461C26.8503 28.459 26.5311 28.4283 25.5949 28.4252C24.6823 28.4222 23.8563 28.4883 23.4022 28.6006C23.304 28.625 23.086 28.6713 22.9177 28.7035C22.4255 28.7979 21.4326 29.0409 20.827 29.2153C20.5185 29.3041 20.1973 29.3956 20.1131 29.4186C20.029 29.4414 19.5012 29.5903 18.9403 29.7493C15.0468 30.8529 12.985 31.0962 12.3907 30.5224C11.9333 30.0808 11.0804 29.7916 10.4295 29.8576C9.81491 29.9196 8.76561 28.9497 8.25326 27.8457C8.06943 27.4499 8.12986 27.2949 8.35933 27.5738C8.70799 27.9976 10.2686 28.9723 11.0619 29.2614C11.1601 29.2973 11.2863 29.3465 11.3424 29.3708C11.4857 29.433 12.5465 29.701 12.9742 29.7832C13.4545 29.8754 15.5949 29.8776 16.0847 29.7863C16.281 29.7497 16.6367 29.6847 16.8751 29.6418C17.1135 29.5987 17.4233 29.5314 17.5635 29.4919C18.9231 29.1094 19.4663 28.9082 20.5211 28.3964C21.127 28.1024 21.4131 27.9462 22.0673 27.5529C22.577 27.2464 23.4037 26.6364 24.2142 25.9689C25.1303 25.2143 25.4697 24.5225 25.1128 24.1365C24.847 23.8491 24.4439 23.9729 23.6332 24.5909C22.2873 25.6168 20.4762 26.5105 19.0423 26.8562C18.9301 26.8833 18.7014 26.9429 18.5341 26.9888C18.3668 27.0345 18.0914 27.0951 17.9222 27.1233C17.621 27.1736 17.4347 27.2014 16.5819 27.3239C16.0591 27.3989 14.0601 27.3663 13.6626 27.2763C12.4609 27.0041 11.7051 26.6424 10.8923 25.9509C10.4262 25.5543 9.76953 24.8934 9.33405 24.3827C9.23908 24.2713 8.9293 23.9302 8.64565 23.6246C8.362 23.319 8.11367 23.0413 8.09391 23.0073C8.05401 22.9388 8.34556 21.8886 8.65496 20.9862C8.86339 20.3786 8.90278 20.277 9.10586 19.8222C9.17202 19.6739 9.2262 19.5345 9.2262 19.5124C9.2262 19.4903 9.28357 19.3531 9.35368 19.2074C9.4238 19.0618 9.48117 18.9304 9.48117 18.9157C9.48117 18.8006 11.1527 15.4641 11.279 15.3271C12.2851 14.2357 14.6113 13.8076 15.927 14.4716C16.1208 14.5693 16.3095 14.6493 16.3464 14.6493C16.4463 14.6493 16.7271 14.8316 16.688 14.8709C16.6693 14.8896 16.5146 14.9049 16.3439 14.9052C15.8374 14.9058 15.0097 15.0867 14.5039 15.3073C14.0734 15.4951 13.9697 15.5483 13.9692 15.5819C13.9688 15.603 13.9429 15.6203 13.9117 15.6203C13.6173 15.6203 11.9798 17.1553 11.9798 17.4313C11.9798 17.446 11.9037 17.5792 11.8108 17.7273C11.5173 18.1948 11.2161 19.008 11.2153 19.335C11.215 19.4247 11.192 19.5124 11.1639 19.5297C11.1332 19.5488 11.1129 19.9041 11.1129 20.4241C11.1129 20.9441 11.1332 21.2994 11.1639 21.3184C11.192 21.3358 11.215 21.4234 11.2153 21.5131C11.2159 21.7851 11.5749 22.8225 11.6843 22.8685C11.7066 22.878 11.7248 22.9213 11.7248 22.9651C11.7248 23.3553 13.2474 24.9699 13.8283 25.1958C13.9054 25.2257 13.9685 25.2683 13.9685 25.2902C13.9685 25.3121 14.0116 25.3301 14.0643 25.3301C14.1169 25.3301 14.1886 25.3646 14.2235 25.4067C14.2584 25.4489 14.325 25.4834 14.3714 25.4834C14.4178 25.4834 14.501 25.5136 14.5563 25.5503C14.6117 25.5871 14.7602 25.6473 14.8864 25.6841C15.0126 25.7208 15.1732 25.7704 15.2433 25.7942C15.5128 25.8861 16.4965 25.9983 16.7704 25.9684C17.8665 25.8485 18.1752 25.7798 18.6257 25.5553C18.7051 25.5157 18.7992 25.4834 18.8348 25.4834C18.9236 25.4834 19.806 24.9472 20.0876 24.7221C20.7039 24.2296 21.1762 23.6172 21.6279 22.7248C21.7343 22.5145 21.8214 22.3129 21.8214 22.2769C21.8214 22.2408 21.8428 22.1715 21.8689 22.1227C22.2785 21.3592 22.1823 19.1573 21.6998 18.2521C21.6548 18.1678 21.6179 18.0723 21.6177 18.0398C21.6173 17.9504 20.9128 16.8979 20.8534 16.8979C20.8249 16.8979 20.8015 16.8634 20.8015 16.8212C20.8015 16.7791 20.8073 16.7451 20.8143 16.7456C20.8213 16.7461 21.0221 16.7807 21.2605 16.8225C22.4435 17.0297 24.6998 17.1317 25.006 16.9919C25.2236 16.8925 25.1757 16.7262 24.8627 16.4944C24.2481 16.0394 23.9631 15.4602 23.9631 14.6667C23.9631 13.1453 23.0278 11.8488 21.3131 10.9932C20.8375 10.7558 20.5716 10.6423 19.8772 10.3809C18.2431 9.76562 16.9624 10.2409 17.4257 11.2906C17.6559 11.8121 19.4319 13.4846 21.2616 14.9029C21.3872 15.0002 21.4976 15.098 21.5069 15.1201C21.5163 15.1422 21.5565 15.1603 21.5961 15.1603C21.6359 15.1603 21.6684 15.1797 21.6684 15.2036C21.6684 15.2274 21.72 15.2719 21.7831 15.3024C21.8896 15.3539 21.8906 15.358 21.7959 15.3601C21.5167 15.3664 19.8179 14.3031 18.4651 13.2752C17.3775 12.4489 16.9286 12.1335 16.3422 11.7835C15.7081 11.4049 14.3306 10.8676 13.9944 10.8676C13.7696 10.8676 13.7356 10.7365 13.8982 10.4968C15.0129 8.85316 15.984 8.10103 17.436 7.75684C17.5622 7.72694 17.7114 7.69143 17.7675 7.67801C17.9791 7.62755 18.9533 7.69066 19.2718 7.77549ZM15.7788 16.5969C15.2348 16.7697 15.0836 16.8277 14.8105 16.9683C12.0202 18.4034 12.0998 22.711 14.9394 23.9434C15.0925 24.0098 15.2562 24.0837 15.3031 24.1074C15.642 24.2791 17.0807 24.3856 17.3954 24.262C17.4599 24.2367 17.6158 24.1875 17.742 24.1526C17.8682 24.1178 17.9443 24.0796 17.911 24.0677C17.8777 24.0558 17.7401 24.0857 17.6051 24.134C17.459 24.1864 17.1433 24.2315 16.8258 24.2457C13.2429 24.4047 11.407 20.1259 13.9911 17.6389C16.0031 15.7024 19.2354 16.5081 20.2448 19.1976C20.3239 19.4084 20.3898 19.5299 20.3912 19.4677C20.3925 19.4053 20.356 19.2673 20.3101 19.161C20.2641 19.0546 20.2017 18.9101 20.1714 18.8398C19.7831 17.9385 18.8734 17.1011 17.8695 16.7211C17.42 16.5509 16.159 16.476 15.7788 16.5969ZM33.4732 16.5965C33.3891 16.6229 33.194 16.6837 33.0398 16.7315C31.8631 17.0963 30.6452 18.427 30.5094 19.4963C30.4931 19.6248 30.5236 19.5714 30.6069 19.3253C31.163 17.684 32.4813 16.6684 34.1401 16.6036C35.002 16.5699 35.3468 16.6595 36.3343 17.1733C37.6253 17.8452 38.4236 19.8877 37.9932 21.4177C36.9623 25.082 31.8938 25.2188 30.6477 21.616C30.5619 21.368 30.4914 21.2163 30.4909 21.2789C30.4905 21.3415 30.546 21.5413 30.6142 21.723C31.6514 24.4847 35.041 25.2103 37.0882 23.1088C39.1593 20.983 38.1027 17.3523 35.1996 16.6192C34.8489 16.5307 33.7288 16.5159 33.4732 16.5965ZM41.6303 17.2585C41.5733 17.3509 41.7632 17.8635 42.065 18.4316C42.1174 18.5303 42.2169 18.7602 42.286 18.9427C42.3553 19.125 42.4858 19.4582 42.5762 19.6831C42.9501 20.613 43.1433 21.1823 43.3197 21.8724C43.4661 22.446 43.5978 22.4767 44.1689 22.0699C44.5329 21.8107 44.4948 21.6655 43.6622 20.143C43.3553 19.5816 43.0971 19.0451 42.8823 18.522C42.5808 17.788 41.7936 16.9937 41.6303 17.2585ZM9.02312 17.2934C8.93758 17.327 8.93006 17.3335 8.54634 17.7075C8.31382 17.934 8.22955 18.0688 8.05171 18.4996C7.93379 18.7852 7.75978 19.1796 7.66493 19.3763C7.57009 19.5729 7.49245 19.7627 7.49245 19.7979C7.49245 19.8331 7.47244 19.8619 7.44796 19.8619C7.42348 19.8619 7.32354 20.0172 7.22601 20.2069C7.12836 20.3966 6.91993 20.7987 6.76287 21.1002C6.41714 21.7639 6.42556 21.8526 6.86091 22.1422C7.34317 22.463 7.36765 22.4387 7.7195 21.2928C7.85322 20.8572 8.01755 20.3794 8.0846 20.231C8.15153 20.0827 8.20635 19.9277 8.20635 19.8866C8.20635 19.8453 8.33001 19.5412 8.48107 19.2107C9.09898 17.8588 9.19459 17.6334 9.22824 17.4488C9.26483 17.2484 9.22123 17.2155 9.02312 17.2934ZM42.2748 17.8031C42.4807 17.9895 42.6444 18.2905 42.8343 18.8318C42.9238 19.0871 43.1778 19.5922 43.9485 21.0491C44.3029 21.7191 44.3066 21.7755 44.0084 21.9732C43.607 22.2396 43.6265 22.2631 43.234 21.0373C43.0855 20.5736 42.9493 20.1711 42.9315 20.143C42.9135 20.1149 42.8573 19.9769 42.8064 19.8364C42.6819 19.4922 42.3431 18.6835 42.158 18.2885C41.8623 17.6574 41.9073 17.4702 42.2748 17.8031ZM8.83636 17.8568C8.84962 17.8783 8.76421 18.091 8.64654 18.3296C8.52888 18.5681 8.4065 18.8437 8.37462 18.942C8.3054 19.1552 8.0795 19.7233 7.97816 19.9386C7.93851 20.0229 7.86992 20.2069 7.82556 20.3474C7.78132 20.488 7.72319 20.6489 7.69642 20.7051C7.66978 20.7614 7.60374 20.9683 7.54995 21.1651C7.32392 21.9911 7.22334 22.1163 6.93344 21.9328C6.67797 21.7713 6.67682 21.709 6.92057 21.2343C7.02676 21.0276 7.33259 20.433 7.60017 19.913C7.86776 19.393 8.11775 18.8641 8.15561 18.7376C8.19347 18.6111 8.25479 18.4714 8.29189 18.427C8.32899 18.3826 8.35933 18.3131 8.35933 18.2726C8.35933 18.0845 8.76089 17.7346 8.83636 17.8568ZM16.6201 18.8877C18.1216 19.0215 18.714 20.6944 17.5835 21.6085C16.024 22.8694 14.1614 20.6461 15.6092 19.2519C15.7278 19.1377 15.8416 19.0443 15.8623 19.0443C15.939 19.0443 16.1745 18.9382 16.1506 18.9145C16.1031 18.8667 15.777 19.0379 15.5617 19.2234C14.4035 20.2221 15.1751 22.0892 16.7085 21.998C18.7418 21.8771 18.6824 18.9129 16.6456 18.8609L16.1867 18.8492L16.6201 18.8877ZM33.8557 18.8741C32.1242 19.4661 32.3898 21.8984 34.1968 21.9978C35.9303 22.0931 36.5349 19.8921 35.0186 19.0059C34.9103 18.9427 34.7937 18.8921 34.7594 18.8934C34.7251 18.8948 34.8268 18.963 34.9855 19.0451C36.4096 19.7821 35.8968 21.96 34.2999 21.9567C32.2595 21.9523 32.225 19.0436 34.2636 18.8889L34.697 18.8561L34.3146 18.852C34.1043 18.8497 33.8977 18.8596 33.8557 18.8741ZM20.4191 20.3915C20.4191 20.8342 20.434 21.1434 20.4522 21.0785C20.4946 20.9283 20.4938 19.9356 20.4513 19.737C20.4336 19.6543 20.4191 19.9488 20.4191 20.3915ZM30.42 19.8683C30.3787 20.075 30.388 20.8724 30.4335 21.0363C30.4529 21.1059 30.4687 20.8357 30.4687 20.4358C30.4687 19.6474 30.4673 19.6311 30.42 19.8683ZM20.275 21.5669C19.9692 22.539 19.2778 23.3547 18.3332 23.8573C18.1342 23.9632 18.0014 24.0504 18.0381 24.0511C18.2291 24.055 19.0334 23.5129 19.3813 23.1459C19.7596 22.7468 20.2406 22.017 20.2406 21.8421C20.2406 21.8155 20.277 21.717 20.3214 21.6231C20.3659 21.5292 20.3945 21.4119 20.3849 21.3623C20.3755 21.3129 20.326 21.4049 20.275 21.5669ZM22.9496 22.4212C22.3328 22.5426 22.0283 23.3833 22.2808 24.2674C22.352 24.5166 22.4449 24.4779 22.6087 24.1309C22.9765 23.3518 23.7187 23.0073 24.6496 23.1833C25.0212 23.2536 25.0936 23.2323 24.9656 23.0906C24.762 22.8651 23.3338 22.2891 23.1829 22.3717C23.1773 22.3747 23.0722 22.397 22.9496 22.4212ZM27.2521 22.4642C26.8528 22.5728 26.0096 22.9757 25.897 23.1117C25.7963 23.2333 25.8743 23.2489 26.2492 23.1817C27.2113 23.0093 27.8324 23.2868 28.28 24.089C28.4909 24.4669 28.5435 24.4726 28.6344 24.1266C28.9295 23.0038 28.254 22.1915 27.2521 22.4642ZM23.8014 22.5997C23.9229 22.6407 24.1164 22.7198 24.2317 22.7756C24.3469 22.8315 24.4712 22.8771 24.5081 22.8771C24.5449 22.8771 24.575 22.8965 24.575 22.9204C24.575 22.9442 24.6266 22.988 24.6897 23.0177C24.7779 23.0593 24.667 23.0722 24.2098 23.0733C23.4032 23.0755 22.9485 23.3336 22.579 23.9991C22.3919 24.3362 22.3455 24.3157 22.3045 23.8774C22.198 22.7374 22.7681 22.2509 23.8014 22.5997ZM28.2258 22.6474C28.5526 22.8971 28.6965 23.5221 28.5714 24.1487L28.5396 24.3089L28.3944 24.1167C28.3145 24.0111 28.2486 23.9011 28.2479 23.8722C28.2471 23.8433 28.2063 23.7819 28.1572 23.7358C28.1082 23.6896 28.0007 23.5808 27.9185 23.4937C27.6195 23.1773 27.2831 23.063 26.6574 23.0651C26.0547 23.0673 26.0568 23.0717 26.5422 22.832C27.3051 22.4551 27.8904 22.391 28.2258 22.6474ZM5.15903 25.7373C4.67753 25.8121 4.46616 26.1007 4.29929 26.911C4.25556 27.1236 4.17818 27.4356 4.12744 27.6042C3.92233 28.2866 3.8684 28.9393 3.98466 29.3359C4.17729 29.9935 5.62956 30.8481 6.54909 30.8449C6.89915 30.8436 7.94055 30.6503 8.18085 30.5418C8.23694 30.5165 8.37462 30.4725 8.48681 30.444C9.01203 30.3101 9.02529 30.1877 8.5698 29.6807C8.17626 29.2425 7.64543 28.521 7.64543 28.4242C7.64543 28.3891 7.58539 28.2478 7.51196 28.1102C7.35707 27.8195 7.26949 27.5456 7.10554 26.8377C6.91993 26.0369 6.12419 25.587 5.15903 25.7373ZM44.9211 25.7481C44.851 25.7775 44.7018 25.8386 44.5896 25.8838C44.2368 26.0261 43.8502 26.2963 43.8502 26.4009C43.8502 26.5376 43.6668 27.2945 43.5397 27.6825C43.31 28.3842 42.8626 29.1022 42.2955 29.6798C41.7187 30.2673 41.7706 30.3331 43.0598 30.6497C43.2842 30.7049 43.5508 30.7723 43.6521 30.7997C44.8461 31.1216 46.5414 30.3821 47.0119 29.3339C47.1869 28.9439 46.895 27.3575 46.4074 26.05C46.2864 25.7254 45.4035 25.546 44.9211 25.7481ZM46.0733 25.938C46.3625 26.1147 47.0208 28.564 46.9214 29.0932C46.7706 29.8959 45.4625 30.7005 44.3186 30.6941C43.7103 30.6908 42.3853 30.3611 42.2308 30.1744C42.1699 30.1008 42.3797 29.7251 42.4818 29.7251C42.5752 29.7251 43.2759 28.7012 43.4791 28.2678C43.6749 27.8506 43.8924 27.1398 43.9755 26.6458C44.0678 26.0981 45.5287 25.6052 46.0733 25.938ZM6.0027 26.0196C6.67402 26.2547 6.79411 26.3474 6.872 26.6913C7.06896 27.5595 7.15297 27.842 7.32583 28.2161C7.4899 28.5714 7.85883 29.1881 7.9533 29.2651C8.04445 29.3395 8.5633 30.0657 8.5633 30.1189C8.5633 30.2168 8.40573 30.2793 7.73454 30.4477C6.62468 30.7263 5.8394 30.684 5.67635 30.3372C5.4006 29.7501 5.2976 28.9177 5.30487 27.3339C5.31047 26.0933 5.32564 25.9878 5.50565 25.9375C5.57474 25.9182 5.633 25.9002 5.63504 25.8973C5.63721 25.8945 5.80268 25.9496 6.0027 26.0196ZM50.8703 25.9263C50.8175 25.9791 50.8316 26.6749 50.8872 26.761C50.9211 26.8135 50.9369 26.6891 50.9374 26.365C50.9382 25.892 50.9338 25.8627 50.8703 25.9263ZM24.32 29.2628C24.1097 29.2861 23.7 29.3537 23.4094 29.4129C23.1189 29.4721 22.837 29.5206 22.7831 29.5206C22.7292 29.5206 22.5507 29.566 22.3866 29.6214C22.2225 29.6768 21.8962 29.7659 21.6615 29.8195C21.2825 29.9058 20.4368 30.1408 19.7052 30.3627C18.4035 30.7578 16.2585 31.3093 16.0242 31.3093C15.9449 31.3093 15.7999 31.3338 15.7019 31.3637C15.4295 31.4469 14.4481 31.5638 14.0181 31.5643C13.3729 31.5651 13.293 31.6935 13.5803 32.2675C14.043 33.1916 13.9131 33.4489 13.1429 33.1341C11.1676 32.3265 9.61783 32.4344 7.46695 33.5289C6.5176 34.0119 5.75793 34.2673 5.25821 34.2716C4.95314 34.2741 4.84083 34.345 4.84083 34.5354C4.84083 34.6951 5.18707 35.4431 5.34642 35.6276C5.39499 35.6838 5.5124 35.8563 5.60725 36.0109C5.84437 36.397 6.13821 36.7386 6.85593 37.4625C7.7325 38.3467 7.83703 38.4323 8.86925 39.1115C9.02351 39.2131 9.2415 39.3696 9.35368 39.4593C9.46587 39.5491 9.85596 39.7733 10.2206 39.9577C10.5852 40.1419 10.9523 40.3295 11.0364 40.3746C11.1206 40.4195 11.2082 40.4565 11.2311 40.4567C11.2539 40.4568 11.3479 40.5145 11.4398 40.5847C11.5318 40.655 11.6569 40.7125 11.718 40.7125C11.779 40.7125 12.0252 40.8042 12.265 40.9163C12.5048 41.0283 13.0148 41.2247 13.3984 41.3526C13.7821 41.4806 14.1419 41.6054 14.198 41.6301C14.3002 41.6749 14.4945 41.7292 15.0649 41.8722C15.2331 41.9145 15.4856 41.9918 15.6258 42.0441C15.766 42.0964 15.9955 42.1614 16.1357 42.1885C16.5635 42.2714 17.3506 42.4486 17.5125 42.4986C17.5967 42.5247 17.8376 42.5731 18.0479 42.6064C18.2583 42.6398 18.5222 42.6841 18.6344 42.7052C19.4969 42.8667 19.776 42.9134 20.2916 42.9827C20.6141 43.0259 21.2452 43.0965 21.6939 43.1396C22.1426 43.1826 22.7278 43.2396 22.9942 43.2662C24.6957 43.4357 26.8356 43.4571 28.119 43.3172C28.3714 43.2897 28.8418 43.2443 29.1643 43.2164C29.8297 43.1587 31.0694 42.9983 31.714 42.8865C32.7731 42.7026 33.3436 42.597 33.6517 42.5275C34.444 42.3486 35.5425 42.0711 35.8954 41.9608C37.4733 41.4676 37.8764 41.3286 38.4349 41.0852C38.5276 41.0448 38.803 40.932 39.0469 40.8344C39.4845 40.6593 40.0955 40.3614 40.8757 39.9429C41.494 39.6111 43.0256 38.5752 43.3625 38.2608C45.4088 36.3515 46.7262 34.3052 45.9747 34.2033C44.7672 34.0397 43.9633 33.804 43.2239 33.3967C43.0277 33.2886 42.8504 33.2002 42.8297 33.2002C42.8092 33.2002 42.6805 33.1526 42.5437 33.0946C42.0405 32.8813 41.9042 32.8367 41.3771 32.7133C40.2676 32.4536 38.622 32.6472 37.6184 33.1554C37.0301 33.4534 36.9179 33.1511 37.3083 32.3194L37.5484 31.8078L37.4074 31.6863C37.2908 31.5858 37.2102 31.5648 36.94 31.5648C36.6042 31.5648 36.2331 31.5237 35.258 31.3785C34.7132 31.2974 32.4851 30.7588 31.816 30.5464C31.4195 30.4207 31.1779 30.3485 30.3372 30.1048C29.3474 29.8178 29.2078 29.7801 28.9349 29.7265C28.7946 29.6989 28.5881 29.6423 28.4759 29.6008C28.3638 29.5591 28.2163 29.5241 28.1481 29.5229C28.08 29.5217 27.9538 29.4993 27.8676 29.4732C27.1917 29.2684 25.2894 29.1556 24.32 29.2628ZM27.2776 29.5385C27.4599 29.5832 27.7697 29.653 27.966 29.6934C28.2806 29.7582 28.7197 29.8646 29.3938 30.0394C29.506 30.0684 29.8756 30.1816 30.215 30.2907C30.5547 30.3999 31.0136 30.5343 31.2349 30.5894C31.4563 30.6444 31.7981 30.7388 31.9944 30.7991C32.1908 30.8596 32.4776 30.939 32.6318 30.9758C32.7861 31.0128 33.2794 31.1378 33.7282 31.2538C34.5373 31.4631 35.1223 31.5583 36.2523 31.6646C37.4457 31.7769 37.3981 31.7351 37.0937 32.4045C36.7093 33.2497 36.9737 33.6827 37.6546 33.3233C39.1884 32.5137 41.1656 32.5755 43.0368 33.4915C43.6284 33.781 44.1434 33.9907 44.5348 34.1014C45.1252 34.2684 45.3643 34.3209 45.5424 34.3227C46.1236 34.3283 46.1322 34.5889 45.578 35.4098C45.4691 35.5711 45.38 35.7153 45.38 35.7301C45.38 35.785 44.8422 36.5078 44.5625 36.8286C43.907 37.5803 42.7733 38.5758 42.0889 39.0005C41.9259 39.1017 41.6083 39.3111 41.3405 39.494C41.1091 39.6522 39.9165 40.2693 39.3374 40.5306C38.0452 41.1134 35.9117 41.8353 34.5696 42.1438C34.3031 42.205 33.958 42.2857 33.8028 42.3232C33.2226 42.4631 31.8256 42.7164 31.3825 42.762C31.1301 42.7881 30.6253 42.8429 30.2607 42.8838C28.1246 43.1237 27.4584 43.1762 26.2323 43.2015C24.9643 43.2277 24.7666 43.2179 23.4022 43.0614C23.1918 43.0374 22.8476 42.9811 22.6373 42.9367C22.4269 42.8924 22.0746 42.8326 21.8542 42.8041C21.6339 42.7755 21.3356 42.7072 21.1914 42.6523C21.0471 42.5974 20.8143 42.5377 20.6741 42.5198C20.5338 42.5019 20.3617 42.4586 20.2916 42.4237C20.2215 42.3887 20.0838 42.3434 19.9857 42.3229C19.8875 42.3025 19.7577 42.2403 19.6974 42.1847C19.637 42.1292 19.5108 42.0647 19.417 42.0415C19.323 42.0182 19.1105 41.9496 18.9446 41.889C18.7788 41.8285 18.5321 41.7658 18.3965 41.7497C18.2293 41.7297 18.1499 41.6966 18.1499 41.6468C18.1499 41.5934 18.1114 41.5813 18.0097 41.6026C17.8711 41.6317 17.7055 41.5854 17.3085 41.4061C16.7726 41.1643 16.6614 41.1213 16.5708 41.1213C16.5171 41.1213 16.4581 41.0969 16.4398 41.067C16.4213 41.0373 16.3569 40.9913 16.2965 40.9649C16.2362 40.9386 16.1523 40.8967 16.1102 40.8717C16.0681 40.8468 15.9075 40.7731 15.7533 40.708C15.599 40.643 15.4366 40.5598 15.3924 40.5234C15.348 40.4869 15.2849 40.457 15.2521 40.457C15.2192 40.457 15.1465 40.411 15.0904 40.3548C14.9699 40.234 14.8074 40.2213 14.7659 40.3292C14.7329 40.4156 14.3285 40.4386 14.2464 40.3589C14.2198 40.3329 14.0488 40.2345 13.8665 40.1401C12.8724 39.6254 11.7148 38.5743 11.1764 37.6973C11.0339 37.4652 10.7717 37.2217 10.7327 37.2851C10.7015 37.3354 10.4241 37.1697 10.2255 36.9823C9.86438 36.6415 9.54108 36.3686 9.4985 36.3686C9.47135 36.3686 9.37179 36.2651 9.27719 36.1387C9.1826 36.0122 9.07233 35.9087 9.03205 35.9087C8.98054 35.9087 8.97379 35.9277 9.00897 35.9726C9.03664 36.0077 9.07424 36.1346 9.09247 36.2545C9.18337 36.8516 9.6511 37.6779 10.2928 38.3752C10.7543 38.8768 10.8376 39.1794 10.5139 39.1794C10.0357 39.1794 7.98529 37.6286 7.35758 36.7922C6.81642 36.0712 6.86116 35.0863 7.45969 34.5446C7.73862 34.2923 7.74244 34.2745 7.54306 34.1608C7.36726 34.0605 7.32991 33.8335 7.4797 33.7758C7.52878 33.7571 7.66073 33.6805 7.77291 33.6059C7.88509 33.5313 8.09161 33.428 8.23184 33.3762C8.37207 33.3246 8.56215 33.2407 8.65432 33.1899C9.64192 32.6459 11.9014 32.7241 13.1403 33.3453C13.9546 33.7535 14.3056 33.1816 13.8154 32.2446C13.5991 31.8309 13.6317 31.7692 14.0671 31.7692C14.4026 31.7692 15.2978 31.6628 15.7533 31.5688C15.8795 31.5427 16.1319 31.4937 16.3142 31.4595C16.804 31.3682 18.29 30.9835 18.9658 30.7731C19.1201 30.7252 19.3725 30.6563 19.5267 30.6202C19.681 30.584 20.094 30.4682 20.4446 30.3627C21.1318 30.156 21.3563 30.0949 22.0254 29.9329C22.2638 29.8752 22.5276 29.8054 22.6118 29.778C22.6959 29.7505 22.9139 29.7069 23.0962 29.6811C23.2785 29.6552 23.5768 29.5978 23.7591 29.5535C24.2554 29.4327 24.3445 29.4276 25.6968 29.443C26.6271 29.4536 27.0308 29.478 27.2776 29.5385ZM24.3291 35.4348C24.2214 35.569 24.1787 35.7568 24.2563 35.7541C24.3028 35.7524 24.4932 35.3497 24.4622 35.3187C24.4501 35.3064 24.3901 35.3588 24.3291 35.4348ZM22.7122 36.4223C22.6637 36.5009 22.7301 36.5516 22.7956 36.4859C22.8322 36.4492 22.8331 36.4206 22.7982 36.3992C22.7697 36.3814 22.731 36.3919 22.7122 36.4223ZM28.3876 36.4568C28.4793 36.4682 28.6169 36.4679 28.6935 36.4563C28.7702 36.4446 28.6952 36.4353 28.5269 36.4356C28.3587 36.4358 28.2959 36.4454 28.3876 36.4568ZM27.4344 36.6728C27.3856 36.7031 27.3876 36.7186 27.4437 36.74C27.4836 36.7555 27.5448 36.7504 27.5797 36.7288C27.6286 36.6985 27.6265 36.683 27.5704 36.6616C27.5305 36.6461 27.4693 36.6512 27.4344 36.6728ZM26.3087 37.033C26.3087 37.0611 26.3432 37.0841 26.3852 37.0841C26.4273 37.0841 26.4617 37.0611 26.4617 37.033C26.4617 37.0049 26.4273 36.9819 26.3852 36.9819C26.3432 36.9819 26.3087 37.0049 26.3087 37.033ZM28.8889 37.4283C28.8342 37.4831 28.8567 37.544 28.9318 37.544C28.9722 37.544 29.018 37.5235 29.0335 37.4983C29.0661 37.4456 28.9349 37.3823 28.8889 37.4283ZM26.0389 39.1091C25.9991 39.149 26.0539 39.2816 26.1103 39.2816C26.1685 39.2816 26.1698 39.143 26.1119 39.1071C26.0877 39.0921 26.0549 39.093 26.0389 39.1091ZM22.6883 39.3071C22.6883 39.3493 22.7088 39.3838 22.7338 39.3838C22.7589 39.3838 22.7925 39.3493 22.8087 39.3071C22.8266 39.2605 22.8087 39.2305 22.7631 39.2305C22.7219 39.2305 22.6883 39.265 22.6883 39.3071Z", fill: "#743739" }))));
};

var Container$3 = styled.div(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var scale = keyframes(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n\t0% {\n\t\ttransform: scale(1);\n\t}\n\t100% {\n\t\ttransform: scale(1.2);\n\t}\n"], ["\n\t0% {\n\t\ttransform: scale(1);\n\t}\n\t100% {\n\t\ttransform: scale(1.2);\n\t}\n"])));
var ScaleDarumaIcon = styled(Icon$m)(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  animation: ", " 1s ease-in-out infinite;\n"], ["\n  animation: ", " 1s ease-in-out infinite;\n"])), scale);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 51 : _b;
    return (React.createElement(Container$3, null,
        React.createElement(ScaleDarumaIcon, { width: size + "px" })));
};
var templateObject_1$o, templateObject_2$b, templateObject_3$7;

var StepperWrapper = styled.div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n"])));
var Stepper = function (_a) {
    var children = _a.children;
    var numberOfSteps = React.Children.count(children);
    return (React.createElement(StepperWrapper, null, React.Children.map(children, function (child) {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { numberOfSteps: numberOfSteps });
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
var StyledStep = styled(Flex)(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  ", " {\n    justify-content: center;\n  }\n"], ["\n  ", " {\n    justify-content: center;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Connector = styled.div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  position: absolute;\n  width: 4px;\n  height: 100%;\n  top: 50%;\n  left: calc(50% - 2px);\n  background-color: ", ";\n"], ["\n  position: absolute;\n  width: 4px;\n  height: 100%;\n  top: 50%;\n  left: calc(50% - 2px);\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme, status = _a.status;
    return theme.colors[status === "past" ? "success" : "textDisabled"];
});
var ChildrenWrapper = styled(Box)(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  ", " {\n    visibility: ", ";\n  }\n"], ["\n  ", " {\n    visibility: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var isVisible = _a.isVisible;
    return (isVisible ? "visible" : "hidden");
});
var ChildrenLeftWrapper = styled(ChildrenWrapper)(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  display: none;\n  ", " {\n    display: block;\n    margin-right: 16px;\n  }\n"], ["\n  display: none;\n  ", " {\n    display: block;\n    margin-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ChildrenRightWrapper = styled(ChildrenWrapper)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  margin-left: 8px;\n  ", " {\n    margin-left: 16px;\n  }\n"], ["\n  margin-left: 8px;\n  ", " {\n    margin-left: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Wrapper$2 = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n"])));
var StepNumber = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  z-index: 1;\n  ", " {\n    font-size: 40px;\n    width: 80px;\n    height: 80px;\n  }\n"], ["\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  z-index: 1;\n  ", " {\n    font-size: 40px;\n    width: 80px;\n    height: 80px;\n  }\n"])), function (_a) {
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
    return (React.createElement(StyledStep, { mb: index < numberOfSteps - 1 ? "16px" : 0 },
        React.createElement(ChildrenLeftWrapper, { isVisible: !isIndexPair }, children),
        React.createElement(Wrapper$2, null,
            React.createElement(StepNumber, { status: status }, index + 1),
            index < numberOfSteps - 1 && React.createElement(Connector, { status: status })),
        React.createElement(ChildrenRightWrapper, { isVisible: isIndexPair }, children)));
};
var templateObject_1$m, templateObject_2$a, templateObject_3$6, templateObject_4$3, templateObject_5$1, templateObject_6, templateObject_7;

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
    var columnsWithSorting = useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = useMemo(function () {
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
    var _a = useReducer(reducer, {
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
            nextPage: noop,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop,
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = useMemo(function () {
        return __spreadArray([], state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    useEffect(function () {
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

var Wrapper$1 = styled(Flex)(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  border-bottom: 2px solid ", ";\n  overflow-x: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"], ["\n  border-bottom: 2px solid ", ";\n  overflow-x: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var Inner$1 = styled(Flex)(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  ", " {\n    flex-grow: 0;\n  }\n"], ["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  ", " {\n    flex-grow: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, onItemClick = _a.onItemClick, children = _a.children;
    return (React.createElement(Wrapper$1, { p: ["0 4px", "0 16px"] },
        React.createElement(Inner$1, null, Children.map(children, function (child, index) {
            return cloneElement(child, {
                isActive: activeIndex === index,
                onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            });
        }))));
};
var templateObject_1$l, templateObject_2$9;

var StyledTab = styled.button(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: 8px;\n  border-radius: 16px 16px 0 0;\n  color: ", ";\n  background-color: ", ";\n\n  ", " {\n    flex-grow: 0;\n    padding: 8px 12px;\n  }\n"], ["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: 8px;\n  border-radius: 16px 16px 0 0;\n  color: ", ";\n  background-color: ", ";\n\n  ", " {\n    flex-grow: 0;\n    padding: 8px 12px;\n  }\n"])), function (_a) {
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
    return (React.createElement(StyledTab, { onClick: onClick, bgColor: isActive ? "textSubtle" : "input", color: isActive ? "backgroundAlt" : "textSubtle" },
        React.createElement(Text, { fontWeight: 600, color: isActive ? "backgroundAlt" : "textSubtle" }, children)));
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
var StyledTag = styled.div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n  ", "\n  ", "\n\n  ", "\n"], ["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ",
    "\n  ",
    "\n  ", "\n\n  ", "\n"])), variant$1({
    prop: "scale",
    variants: scaleVariants,
}), variant$1({
    variants: styleVariants,
}), space, getOutlineStyles);
var templateObject_1$j;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React.createElement(StyledTag, __assign({}, props),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5em",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
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
var Handle = styled.div(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
}, getScale("handleHeight"), getScale("handleLeft"), getScale("handleTop"), getScale("handleWidth"));
var Input = styled.input(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, getScale("checkedLeft"), Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled.div(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale("toggleHeight"), getScale("toggleWidth"));
var templateObject_1$i, templateObject_2$8, templateObject_3$5;

var scales = {
    SM: "sm",
    MD: "md",
};

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales.MD : _b, props = __rest(_a, ["checked", "scale"]);
    var isChecked = !!checked;
    return (React.createElement(StyledToggle, { checked: isChecked, scale: scale },
        React.createElement(Input, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React.createElement(Handle, { scale: scale })));
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
    var _a = useState(function () {
        return Object.keys(mediaQueries).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
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
    var makeListener = useCallback(function () {
        return debounce(function (event) {
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
    var initialize = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    useEffect(function () {
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

var Arrow = styled.div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"], ["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.tooltip.background;
});
var StyledTooltip = styled.div(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  z-index: 10;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"], ["\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  z-index: 10;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"])), function (_a) {
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
    var _a = useState(null), targetElement = _a[0], setTargetElement = _a[1];
    var _b = useState(null), tooltipElement = _b[0], setTooltipElement = _b[1];
    var _c = useState(null), arrowElement = _c[0], setArrowElement = _c[1];
    var _d = useState(false), visible = _d[0], setVisible = _d[1];
    var hideTooltip = useCallback(function (e) {
        e.stopPropagation();
        e.preventDefault();
        setVisible(false);
    }, []);
    var showTooltip = useCallback(function (e) {
        e.stopPropagation();
        e.preventDefault();
        setVisible(true);
    }, []);
    var toggleTooltip = useCallback(function (e) {
        e.stopPropagation();
        setVisible(!visible);
    }, [visible]);
    // Trigger = hover
    useEffect(function () {
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
    useEffect(function () {
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
    useEffect(function () {
        if (targetElement === null || trigger !== "click")
            return undefined;
        targetElement.addEventListener("click", toggleTooltip);
        return function () { return targetElement.removeEventListener("click", toggleTooltip); };
    }, [trigger, targetElement, visible, toggleTooltip]);
    // Handle click outside
    useEffect(function () {
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
    useEffect(function () {
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
    var _e = usePopper(targetElement, tooltipElement, {
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
    var tooltip = (React.createElement(StyledTooltip, __assign({ ref: setTooltipElement, style: styles.popper }, attributes.popper),
        content,
        React.createElement(Arrow, { ref: setArrowElement, style: styles.arrow })));
    return {
        targetRef: setTargetElement,
        tooltip: tooltip,
        tooltipVisible: visible,
    };
};

var ModalHeader = styled.div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  align-items: center;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n"], ["\n  align-items: center;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n"])), function (_a) {
    var background = _a.background;
    return background || "transparent";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
});
var ModalTitle = styled(Flex)(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var ModalBody = styled(Flex)(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  flex-direction: column;\n"], ["\n  flex-direction: column;\n"])));
var ModalCloseButton = function (_a) {
    var onDismiss = _a.onDismiss;
    return (React.createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
        React.createElement(Icon$13, { color: "primary" })));
};
var ModalBackButton = function (_a) {
    var onBack = _a.onBack;
    return (React.createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
        React.createElement(Icon$1m, { color: "primary" })));
};
var ModalContainer = styled(Box)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n\n  ", " {\n    width: auto;\n    min-width: ", ";\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n\n  ", " {\n    width: auto;\n    min-width: ", ";\n    max-width: 100%;\n  }\n"])), function (_a) {
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
var templateObject_1$g, templateObject_2$6, templateObject_3$4, templateObject_4$2;

var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c, _d = _a.headerBackground, headerBackground = _d === void 0 ? "transparent" : _d, _e = _a.minWidth, minWidth = _e === void 0 ? "320px" : _e, props = __rest(_a, ["title", "onDismiss", "onBack", "children", "hideCloseButton", "bodyPadding", "headerBackground", "minWidth"]);
    return (React.createElement(ModalContainer, __assign({ minWidth: minWidth }, props),
        React.createElement(ModalHeader, { background: headerBackground },
            React.createElement(ModalTitle, null,
                onBack && React.createElement(ModalBackButton, { onBack: onBack }),
                React.createElement(Heading, null, title)),
            !hideCloseButton && React.createElement(ModalCloseButton, { onDismiss: onDismiss })),
        React.createElement(ModalBody, { p: bodyPadding }, children)));
};

var Overlay = styled.div.attrs({ role: "presentation" })(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
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

var ModalWrapper = styled.div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
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
    return (React.createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React.createElement(ModalWrapper, null,
            React.createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React.isValidElement(modalNode) &&
                React.cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$e;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
        React.createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })));
};

var Icon$k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo$2 = function (_a) {
    var isDark = _a.isDark, props = __rest(_a, ["isDark"]);
    return (React.createElement(Svg, __assign({ viewBox: "0 0 205 32" }, props), isDark ? (React.createElement("image", { width: "183", height: "32", href: '/images/logo-nav-title-dark.png' })) : (React.createElement("image", { width: "172", height: "32", href: '/images/logo-nav-title-white.png' }))));
};

var Icon$d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$c = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })));
};

var Icon$9 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M3.18731 5.68438C2.44993 5.52604 2.44993 4.47393 3.18731 4.31559L5.3203 3.85755C5.58957 3.79973 5.79991 3.58939 5.85774 3.32012L6.31577 1.18713C6.47411 0.449748 7.52622 0.449751 7.68457 1.18713L8.1426 3.32012C8.20042 3.58939 8.41076 3.79973 8.68003 3.85755L10.813 4.31559C11.5504 4.47393 11.5504 5.52604 10.813 5.68438L8.68003 6.14241C8.41076 6.20024 8.20042 6.41058 8.1426 6.67985L7.68457 8.81284C7.52622 9.55022 6.47411 9.55022 6.31577 8.81284L5.85774 6.67985C5.79991 6.41058 5.58957 6.20024 5.3203 6.14241L3.18731 5.68438Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.99998C15.866 2.99998 19 6.13399 19 9.99998C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 9.99998C5 9.4477 4.55228 8.99998 4 8.99998C3.44772 8.99998 3 9.4477 3 9.99998C3 12.8894 4.36163 15.4608 6.47822 17.1075L5.58579 18C5.21071 18.3751 5 18.8838 5 19.4142V21.5C5 22.3284 5.67157 23 6.5 23H17.5C18.3284 23 19 22.3284 19 21.5V19.4142C19 18.8838 18.7893 18.3751 18.4142 18L17.5218 17.1075C19.6384 15.4608 21 12.8894 21 9.99998C21 5.02942 16.9706 0.999985 12 0.999985C11.4477 0.999985 11 1.4477 11 1.99998C11 2.55227 11.4477 2.99998 12 2.99998ZM12 19C10.6564 19 9.38156 18.7056 8.23649 18.1777L7 19.4142L7 21H17V19.4142L15.7635 18.1777C14.6184 18.7056 13.3436 19 12 19Z" })));
};

var Icon$8 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React.createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React.createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React.createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React.createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React.createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React.createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React.createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$7 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 5H17C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5H5C3.9 5 3 5.9 3 7V8C3 10.55 4.92 12.63 7.39 12.94C8.02 14.44 9.37 15.57 11 15.9V19H8C7.44772 19 7 19.4477 7 20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19H13V15.9C14.63 15.57 15.98 14.44 16.61 12.94C19.08 12.63 21 10.55 21 8V7C21 5.9 20.1 5 19 5ZM5 8V7H7V10.82C5.84 10.4 5 9.3 5 8ZM12 14C10.35 14 9 12.65 9 11V5H15V11C15 12.65 13.65 14 12 14ZM19 8C19 9.3 18.16 10.4 17 10.82V7H19V8Z" })));
};

var Icon$6 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$5 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$4 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$3 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$l,
    GroupsIcon: Icon$k,
    HamburgerIcon: Icon$j,
    HamburgerCloseIcon: Icon$i,
    HomeIcon: Icon$h,
    IfoIcon: Icon$g,
    InfoIcon: Icon$f,
    LanguageIcon: Icon$e,
    LogoIcon: Logo$2,
    MoonIcon: Icon$d,
    MoreIcon: Icon$c,
    NftIcon: Icon$b,
    PoolIcon: Icon$a,
    PredictionsIcon: Icon$9,
    SunIcon: Icon$8,
    TeamBattleIcon: Icon$7,
    TelegramIcon: Icon$6,
    TicketIcon: Icon$5,
    TradeIcon: Icon$4,
    TwitterIcon: Icon$3
});

var MenuButton = styled(Button)(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$d;

var blink = keyframes(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  0%,  100% { transform: scaleY(1); } \n  50% { transform:  scaleY(0.1); } \n"], ["\n  0%,  100% { transform: scaleY(1); } \n  50% { transform:  scaleY(0.1); } \n"])));
var StyledLink = styled(Link$1)(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n  .right-eye {\n    animation-delay: 20ms;\n  }\n  &:hover {\n    .left-eye,\n    .right-eye {\n      transform-origin: center 60%;\n      animation-name: ", ";\n      animation-duration: 350ms;\n      animation-iteration-count: 1;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n  .right-eye {\n    animation-delay: 20ms;\n  }\n  &:hover {\n    .left-eye,\n    .right-eye {\n      transform-origin: center 60%;\n      animation-name: ", ";\n      animation-duration: 350ms;\n      animation-iteration-count: 1;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, blink);
var StyledLogoText = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  svg {\n    transition: transform 0.2s;\n  };\n  &:hover {\n    svg {\n      transform: scale(1.1);\n    }\n  }\n"], ["\n  svg {\n    transition: transform 0.2s;\n  };\n  &:hover {\n    svg {\n      transform: scale(1.1);\n    }\n  }\n"])));
var Logo = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React.createElement(React.Fragment, null,
        React.createElement(Icon$V, { className: "mobile-icon" }),
        React.createElement(StyledLogoText, null,
            React.createElement(Logo$2, { className: "desktop-icon", isDark: isDark }))));
    return (React.createElement(Flex, null,
        React.createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React.createElement(Icon$i, { width: "24px", color: "textSubtle" })) : (React.createElement(Icon$j, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React.createElement(StyledLink, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React.createElement(StyledLink, { to: href, "aria-label": "Pancake home page" }, innerLogo))));
};
var Logo$1 = React.memo(Logo, function (prev, next) { return prev.isPushed === next.isPushed && prev.isDark === next.isDark; });
var templateObject_1$c, templateObject_2$5, templateObject_3$3;

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
                href: "https://t.me/DarumaWallet",
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

var rainbowAnimation = keyframes(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled.div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
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
var LinkStatus = styled(Text)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"], ["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.radii.default;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
});
var LinkLabelMemo = React.memo(LinkLabel, function (prev, next) { return prev.isPushed === next.isPushed; });
var templateObject_1$b, templateObject_2$4, templateObject_3$2, templateObject_4$1;

var Container$2 = styled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className, isActive = _a.isActive;
    var _c = useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React.createElement(Container$2, null,
        React.createElement(MenuEntry, { onClick: handleClick, className: className, isActive: isActive },
            icon,
            React.createElement(LinkLabelMemo, { isPushed: isPushed }, label),
            isOpen ? React.createElement(Icon$1j, null) : React.createElement(Icon$1k, null)),
        React.createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React.Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var Accordion$1 = React.memo(Accordion, function (prev, next) { return prev.isPushed === next.isPushed && prev.isActive === next.isActive; });
var templateObject_1$a, templateObject_2$3;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React.createElement(Tag, __assign({}, props, otherProps));
};

var Icons$3 = IconModule;
var Container$1 = styled.div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React.createElement(Container$1, null, links.map(function (entry) {
        var Icon = Icons$3[entry.icon];
        var iconElement = React.createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            var itemsMatchIndex = entry.items.findIndex(function (item) { return item.href === location.pathname; });
            var initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
            return (React.createElement(Accordion$1, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: initialOpenState, className: calloutClass, isActive: entry.items.some(function (item) { return item.href === location.pathname; }) }, isPushed &&
                entry.items.map(function (item) { return (React.createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React.createElement(MenuLink, { href: item.href },
                        React.createElement(LinkLabelMemo, { isPushed: isPushed }, item.label),
                        item.status && (React.createElement(LinkStatus, { color: item.status.color, fontSize: "14px" }, item.status.text))))); })));
        }
        return (React.createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React.createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React.createElement(LinkLabelMemo, { isPushed: isPushed }, entry.label),
                entry.status && (React.createElement(LinkStatus, { color: entry.status.color, fontSize: "14px" }, entry.status.text)))));
    })));
};
var templateObject_1$9;

var Icon$2 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React.createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React.createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React.createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React.createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React.createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React.createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React.createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React.createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React.createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React.createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React.createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React.createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$1 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("g", { clipPath: "url(#clip-trustwallet)" },
            React.createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React.createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip-trustwallet" },
                React.createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M43.8238 9.22742C43.4014 9.26995 42.667 9.3524 42.1918 9.41061C41.7166 9.46859 40.9822 9.55555 40.5598 9.60379C39.8105 9.68932 39.3821 9.76964 38.3038 10.027C38.0134 10.0963 37.4734 10.2223 37.1038 10.3071C35.2947 10.7222 34.7799 10.8731 33.6305 11.3245C33.2513 11.4733 32.8887 11.5952 32.8246 11.5952C32.7605 11.5952 32.3936 11.7449 32.0093 11.9278C31.6251 12.1108 31.2915 12.2605 31.2677 12.2605C31.1907 12.2605 29.4281 13.2323 29.2798 13.3565C29.2006 13.4228 28.9198 13.5949 28.6558 13.7386C28.3918 13.8824 28.1542 14.0273 28.1278 14.0608C28.1014 14.0943 27.475 14.5543 26.7358 15.0832C25.465 15.9923 23.3124 17.871 22.8344 18.4883C22.7139 18.6437 22.3275 19.0916 21.9756 19.4837C21.6238 19.8757 21.2633 20.3248 21.1745 20.4816C21.086 20.6384 20.8433 21.0234 20.6357 21.337C20.016 22.2732 19.015 24.3584 18.8448 25.0674C18.7781 25.3445 19.021 25.3492 19.866 25.0869C20.4836 24.8954 22.5898 24.6186 23.4437 24.6169L23.8959 24.616L24.7196 23.4042C26.3684 20.9789 27.7356 19.5711 29.1838 18.8072C29.4742 18.6542 29.8414 18.4515 29.9998 18.357C30.282 18.1883 31.7837 17.6501 32.4478 17.4795C34.3553 16.9895 36.7371 17.364 39.2523 18.5492C44.8863 21.2042 50.4632 21.3608 55.7278 19.012C58.9788 17.5619 59.8942 17.3274 61.9428 17.4205C65.4351 17.5793 68.7903 19.6757 70.9071 23.0209C71.0487 23.2447 71.191 23.4493 71.2234 23.4755C71.2558 23.5016 71.4492 23.7663 71.6532 24.064C72.0992 24.7143 72.1006 24.7151 73.2478 24.7702C74.264 24.8186 75.6972 25.0458 76.2497 25.2454C76.4489 25.3174 76.7676 25.3763 76.9584 25.3763H77.305L77.2553 25.0097C77.1999 24.6005 77.0748 24.2916 76.4604 23.0478C75.9317 21.9774 75.3874 21.0148 75.1707 20.7668C75.0792 20.6622 74.8637 20.3695 74.6914 20.1164C72.7608 17.2785 68.0384 13.6162 64.0318 11.8494C61.2965 10.6431 56.4588 9.42534 54.3358 9.40847C53.9926 9.40586 53.0854 9.34194 52.3198 9.26662C50.7953 9.11669 45.1786 9.09079 43.8238 9.22742ZM67.2238 32.475C67.3162 32.4988 67.4674 32.4988 67.5598 32.475C67.6522 32.451 67.5766 32.4315 67.3918 32.4315C67.207 32.4315 67.1314 32.451 67.2238 32.475ZM68.7437 32.7214C68.7658 32.7362 68.8594 32.8055 68.9518 32.8756C69.0956 32.9847 69.1198 32.9806 69.1198 32.8488C69.1198 32.754 69.0396 32.6946 68.9117 32.6946C68.7975 32.6946 68.7219 32.7067 68.7437 32.7214ZM72.0958 34.2628C72.1616 34.3412 72.2856 34.4003 72.3716 34.3944C72.5033 34.3849 72.5016 34.3766 72.3598 34.3398C72.2674 34.316 72.1918 34.2568 72.1918 34.2084C72.1918 34.1599 72.1433 34.1202 72.084 34.1202C72.0096 34.1202 72.0132 34.1642 72.0958 34.2628ZM74.0398 35.9498C74.0616 36.0151 74.1596 36.0838 74.257 36.1026C74.4197 36.1339 74.4216 36.1242 74.2798 35.9838C74.0955 35.8013 73.9846 35.7854 74.0398 35.9498ZM74.6043 36.4963C74.6892 36.627 74.8368 36.7491 74.9326 36.7679C75.1232 36.8052 75.0387 36.6992 74.6405 36.4012C74.4552 36.2625 74.4543 36.2651 74.6043 36.4963ZM79.1326 37.9659C79.1624 38.1469 79.314 38.5639 79.47 38.8925C79.8185 39.627 80.4562 41.131 80.6907 41.7711C80.7864 42.0325 80.8923 42.2891 80.9261 42.3414C80.9597 42.3936 81.216 43.1421 81.4956 44.0046C82.2346 46.2842 82.1979 46.2405 82.9536 45.7451C83.515 45.3775 83.508 45.2725 82.8408 44.0265C81.3898 41.3171 80.9117 40.3776 80.7432 39.9028C80.1836 38.3277 78.9485 36.8422 79.1326 37.9659ZM16.1348 38.3712C15.9725 38.5661 15.8398 38.7873 15.8398 38.8628C15.8398 38.9381 15.7827 39.0674 15.7128 39.1501C15.643 39.2325 15.5276 39.4925 15.4563 39.7277C15.385 39.9629 14.9144 40.9466 14.4106 41.9137C13.9068 42.8807 13.3311 43.9866 13.1312 44.371C12.6723 45.2537 12.6744 45.3697 13.1554 45.67C13.7012 46.0112 13.8905 45.7783 14.316 44.2422C14.4173 43.8763 14.5416 43.4914 14.5918 43.3868C14.6422 43.2823 14.7516 42.9829 14.8349 42.7215C14.9184 42.4602 15.0476 42.118 15.1222 41.9612C15.313 41.5608 15.7383 40.5042 15.8686 40.1079C15.9286 39.9249 16.159 39.4124 16.3805 38.9688C16.602 38.5252 16.7628 38.1296 16.7379 38.0897C16.6383 37.9302 16.4153 38.0343 16.1348 38.3712ZM76.7261 40.1079C76.7261 40.2908 76.7458 40.3657 76.77 40.2742C76.794 40.1827 76.794 40.033 76.77 39.9416C76.7458 39.8501 76.7261 39.9249 76.7261 40.1079ZM76.7261 47.7113C76.7261 47.8942 76.7458 47.9691 76.77 47.8776C76.794 47.7861 76.794 47.6364 76.77 47.5449C76.7458 47.4535 76.7261 47.5283 76.7261 47.7113ZM21.1198 50.9902C21.1198 51.0686 21.1899 51.1328 21.2756 51.1328C21.403 51.1328 21.4097 51.1069 21.3118 50.9902C21.246 50.9118 21.176 50.8477 21.156 50.8477C21.1361 50.8477 21.1198 50.9118 21.1198 50.9902ZM73.0558 52.9027C73.0558 53.0346 73.08 53.0386 73.2238 52.9296C73.3162 52.8595 73.4098 52.7901 73.4319 52.7754C73.4537 52.7606 73.3781 52.7485 73.2639 52.7485C73.136 52.7485 73.0558 52.8079 73.0558 52.9027ZM84.9576 53.026C83.9835 53.2152 82.9834 53.8973 82.8917 54.435C82.7352 55.3539 82.3258 56.6757 81.9572 57.4517C81.5746 58.2577 80.2553 60.1618 80.0796 60.1618C79.8874 60.1618 79.4924 60.8606 79.6071 60.9975C79.898 61.3446 82.3923 61.9579 83.5376 61.9641C85.4362 61.9745 87.1913 61.0749 88.1669 59.5916C88.6342 58.8814 88.429 57.3127 87.4853 54.3778C87.024 52.9431 86.5877 52.7098 84.9576 53.026ZM10.4674 53.1178C9.73947 53.3188 9.98691 59.6139 10.7888 61.3002C11.0957 61.9453 12.5741 62.0239 14.6636 61.5057C15.9272 61.1926 16.2238 61.0764 16.2238 60.8944C16.2238 60.7953 15.247 59.4447 15.0754 59.3064C14.8976 59.1632 14.203 58.0162 13.8941 57.3555C13.5687 56.6598 13.4105 56.1344 13.0397 54.5196C12.9231 54.0112 12.8756 53.9422 12.5 53.7348C12.1748 53.5552 10.7429 53.0016 10.711 53.0431C10.7072 53.0484 10.5975 53.0819 10.4674 53.1178ZM35.5438 53.8622C35.3789 53.9209 35.3924 54.0791 35.562 54.0791C35.7212 54.0791 35.8469 53.9223 35.7375 53.861C35.6969 53.8382 35.6098 53.8389 35.5438 53.8622ZM60.0668 54.1416C60.0941 54.2117 60.2196 54.2692 60.3461 54.2692C60.4724 54.2692 60.5758 54.312 60.5758 54.3642C60.5758 54.4165 60.6406 54.4593 60.7198 54.4593C60.9975 54.4593 60.8597 54.3139 60.4407 54.1646C60.1049 54.0451 60.0276 54.0404 60.0668 54.1416ZM25.5838 54.2692C25.849 54.3821 26.0158 54.3821 26.0158 54.2692C26.0158 54.2169 25.8754 54.1772 25.7038 54.1808C25.4424 54.1865 25.423 54.2008 25.5838 54.2692ZM70.1278 54.5543C70.0952 54.6066 69.9898 54.6494 69.8938 54.6494C69.7978 54.6494 69.6656 54.7135 69.5998 54.7919C69.5019 54.9086 69.5086 54.9345 69.636 54.9345C69.7217 54.9345 69.7918 54.8917 69.7918 54.8394C69.7918 54.7872 69.8945 54.7444 70.02 54.7444C70.1456 54.7444 70.302 54.6803 70.3678 54.6018C70.4655 54.4854 70.4597 54.4593 70.3373 54.4593C70.2548 54.4593 70.1604 54.5021 70.1278 54.5543ZM45.7918 59.6517C45.607 59.6743 45.175 59.7603 44.8318 59.8427C44.4886 59.9252 43.927 60.0319 43.5838 60.0801C43.2406 60.1281 42.8302 60.2091 42.6718 60.2602C42.5134 60.3113 42.0166 60.441 41.5678 60.5484C40.3083 60.8497 39.8856 60.9633 38.5918 61.3477C37.9318 61.544 37.1542 61.7592 36.8638 61.8265C36.5734 61.8937 36.0982 62.0218 35.8078 62.1109C34.5356 62.5022 31.7379 63.2177 30.8158 63.3876C30.4726 63.451 29.9974 63.5422 29.7598 63.5907C28.9023 63.7656 27.217 63.9635 26.5853 63.9635C25.7657 63.9635 25.7043 64.0783 26.1116 64.8476C27.0344 66.5903 26.3736 67.6538 24.8405 66.8946C22.5082 65.7394 18.2544 65.594 16.3952 66.6057C16.2216 66.7 15.8638 66.8561 15.5998 66.9521C15.3358 67.0484 14.947 67.2406 14.7358 67.3793C14.5246 67.5181 14.2762 67.6604 14.1838 67.6954C13.9167 67.7968 13.9728 68.2095 14.2798 68.3996C14.425 68.4894 14.5582 68.5724 14.5755 68.5838C14.593 68.5949 14.5565 68.6985 14.4944 68.8135C14.4027 68.9829 14.4058 69.0129 14.5104 68.9704C15.8033 68.4471 16.484 68.9537 16.764 70.6479C17.2059 73.3202 18.0694 75.0844 19.687 76.6198C20.3002 77.202 20.2848 77.7677 19.6604 77.6095L19.4398 77.5536L19.664 77.6672C19.952 77.8133 20.197 77.6729 20.2376 77.3386C20.2608 77.1454 20.1039 76.9192 19.4854 76.2554C18.2715 74.9521 17.3916 73.4176 17.22 72.3052C17.1857 72.082 17.1149 71.8461 17.0628 71.7808C16.9966 71.6974 17.0093 71.662 17.1063 71.662C17.1821 71.662 17.3897 71.8544 17.5678 72.0896C17.7459 72.3249 17.9333 72.5173 17.9844 72.5173C18.0646 72.5173 18.6732 73.0249 19.3532 73.6586C19.7271 74.0071 20.2493 74.3153 20.3079 74.2217C20.3871 74.0948 20.8908 74.5736 21.175 75.0457C21.3039 75.2603 21.5012 75.5169 21.613 75.616C21.7251 75.7153 21.5451 75.3928 21.2134 74.8998C20.1975 73.3901 19.5838 71.7216 19.5838 70.4699C19.5838 67.9962 22.1864 66.6824 23.4125 68.537C23.6945 68.9632 24.1918 70.4266 24.1918 70.8299C24.1918 70.9356 24.2331 71.1768 24.2835 71.3659C24.3339 71.5548 24.4853 72.1799 24.6204 72.7549C25.056 74.6111 26.7845 78.4169 27.4479 78.9802C27.6053 79.114 27.8496 79.6731 27.8031 79.7931C27.6884 80.0891 26.1639 79.5866 25.5886 79.0631C25.4667 78.9522 25.3179 78.9569 25.3882 79.0696C25.4189 79.119 25.6484 79.257 25.898 79.3765C26.1476 79.4961 26.5128 79.6909 26.7099 79.8097C27.1306 80.0635 27.8148 80.1055 27.901 79.8831C27.979 79.6823 28.285 79.7061 28.5118 79.9306C28.6174 80.0352 28.7544 80.1207 28.8164 80.1207C28.878 80.1207 28.9968 80.1763 29.0804 80.2443C29.1636 80.312 29.4694 80.4667 29.7598 80.5876C30.0502 80.7086 30.3526 80.8457 30.4318 80.892C30.511 80.9386 30.6689 81.0165 30.7824 81.0654C30.8962 81.1144 31.0174 81.1999 31.0522 81.2553C31.0868 81.3109 31.1979 81.3563 31.2989 81.3563C31.4696 81.3563 31.6788 81.4361 32.6878 81.8859C33.4352 82.2193 33.7469 82.3055 34.0078 82.2513C34.1993 82.2117 34.2718 82.2342 34.2718 82.3335C34.2718 82.4262 34.4213 82.4878 34.736 82.5248C34.9913 82.5548 35.4557 82.6714 35.768 82.784C36.0802 82.8967 36.4803 83.0243 36.6572 83.0675C36.8338 83.1108 37.0714 83.2307 37.1852 83.3339C37.2987 83.4372 37.543 83.5529 37.7278 83.591C37.9126 83.629 38.1718 83.7133 38.3038 83.7784C38.4358 83.8433 38.7598 83.9238 39.0238 83.9571C39.2878 83.9904 39.726 84.1013 39.9977 84.2035C40.2692 84.3057 40.8308 84.4326 41.2455 84.4858C41.6604 84.5388 42.3238 84.65 42.7198 84.7324C43.1158 84.8151 43.7638 84.9197 44.1598 84.9643C46.7285 85.2554 47.1008 85.2737 49.4878 85.225C51.7961 85.1779 53.0504 85.0803 57.0718 84.6341C57.7582 84.558 58.7086 84.4561 59.1838 84.4076C60.018 84.3228 62.648 83.8516 63.7402 83.5914C64.0325 83.5218 64.6822 83.3717 65.1838 83.2578C67.5252 82.7261 71.0016 81.5856 73.6318 80.4862C74.7836 80.0048 77.3768 78.7041 77.9309 78.3299C78.4352 77.9896 79.033 77.6002 79.34 77.412C80.6283 76.6222 82.7626 74.7708 83.9967 73.3727C84.5232 72.7761 85.5358 71.4319 85.5358 71.3298C85.5358 71.3022 85.7036 71.0342 85.9085 70.7341C86.9518 69.2075 86.9357 68.7228 85.8416 68.7123C85.5063 68.709 85.056 68.6113 83.9446 68.3008C83.2078 68.095 82.2382 67.7049 81.1244 67.1664C77.6016 65.463 73.8792 65.3481 70.9918 66.8538C69.71 67.5221 69.2122 66.7169 69.9358 65.1449C70.5089 63.9001 70.5984 63.9778 68.3518 63.7689C66.2244 63.5712 65.1231 63.3942 63.5998 63.005C62.755 62.7893 61.8262 62.5567 61.5358 62.488C61.2454 62.4196 60.7054 62.2718 60.3358 62.1594C59.9662 62.0472 59.3228 61.8716 58.9059 61.7692C58.4892 61.6668 57.6252 61.4169 56.9859 61.2137C56.3468 61.0108 55.651 60.8003 55.4398 60.7463C54.1707 60.4213 53.3441 60.2234 52.7518 60.1029C52.3822 60.0278 51.799 59.8981 51.4558 59.8149C50.8464 59.6671 46.6565 59.5464 45.7918 59.6517ZM54.8734 64.3114C55.8761 65.3623 55.4304 65.713 50.9254 67.4176C50.1029 67.7289 49.3474 68.3538 49.3452 68.7247C49.3407 69.4757 49.8713 69.3876 51.6958 68.334C53.2913 67.4128 53.8232 67.4109 54.6353 68.3226C55.3954 69.1764 55.5408 69.8379 55.056 70.2363C54.9248 70.344 54.7649 70.7355 54.5228 71.542C54.3624 72.0763 53.5971 72.5128 52.8142 72.5164C52.6904 72.5169 52.4528 72.576 52.2862 72.6475C52.1199 72.7191 51.6166 72.9391 51.1678 73.1361C50.3744 73.4846 50.3369 73.4915 49.8144 73.3853C48.2715 73.0719 47.0424 74.2404 47.7766 75.3227C48.2225 75.9802 48.3142 75.9888 48.5352 75.3924C48.7378 74.8466 49.2663 74.2673 49.627 74.1958C49.7722 74.167 50.1288 74.0359 50.4192 73.9042C51.0286 73.6284 51.6425 73.4735 52.1396 73.4701C52.3308 73.4687 52.8159 73.3615 53.2174 73.2318C55.0496 72.6397 56.107 72.8488 57.4318 74.0653C58.1842 74.7561 58.1907 75.1151 57.4774 76.6042C57.3396 76.8917 57.1416 77.4263 57.0375 77.7922C56.4507 79.8527 55.8747 80.7563 54.7049 81.453C53.9936 81.8766 53.9151 81.8607 53.6448 81.2387C53.3199 80.4907 52.8605 80.4156 51.1198 80.8266C49.2274 81.2736 49.0968 81.2646 48.4515 80.6432C47.9079 80.12 47.6818 79.5277 47.2714 77.5546C47.179 77.1103 47.0729 76.704 47.0355 76.6517C46.7568 76.2627 46.6227 75.1963 46.7948 74.7399C46.9774 74.2557 47.8731 73.2777 48.1337 73.2777C49.027 73.2777 49.3611 72.7105 49.0796 71.6719C48.3831 69.1048 48.4601 68.6527 49.7576 67.6944C50.438 67.1919 50.4365 67.1622 49.7038 66.4674C48.4104 65.2414 48.3053 64.9574 49.1588 64.9966C49.4528 65.0102 49.8629 64.9593 50.0705 64.8835C50.2781 64.808 50.7286 64.6718 51.0718 64.5811C51.415 64.4905 52.063 64.294 52.5118 64.1446C53.8061 63.7138 54.3389 63.7513 54.8734 64.3114ZM45.8345 64.1961C47.2546 64.8004 48.061 66.2968 47.3578 67.0234C47.0403 67.3515 46.9236 67.3534 46.106 67.0438C45.325 66.7483 44.5304 66.7193 43.7936 66.9595C42.9632 67.2301 42.9629 66.9996 43.7933 66.5777C44.6496 66.1426 44.7358 66.077 44.7358 65.8615C44.7358 65.6691 43.9704 64.9555 43.34 64.5601C43.1084 64.415 42.9173 64.27 42.9154 64.2382C42.8998 63.9811 45.2494 63.9474 45.8345 64.1961ZM30.9665 65.5854C31.2874 65.8839 31.3714 66.2155 31.4835 67.6227C31.6044 69.1433 31.7398 70.1743 31.933 71.0442C32.0141 71.4101 32.118 71.8881 32.1641 72.1067C32.6842 74.5831 34.7148 78.9082 36.3336 80.988C36.4404 81.1251 36.6142 81.3558 36.7198 81.5007C36.8254 81.6457 37.009 81.8945 37.1278 82.0539C38.323 83.657 34.6616 82.5899 32.16 80.6057C28.2603 77.5128 26.5289 72.0953 28.0107 67.6227C28.6025 65.8363 30.1152 64.7937 30.9665 65.5854ZM66.3891 65.4733C67.5072 65.976 68.346 67.8182 68.4934 70.0938C68.8224 75.1738 66.0924 79.8622 61.5358 82.0432C58.908 83.3008 58.0959 83.0761 59.347 81.4373C60.8472 79.4716 62.1346 77.1906 62.846 75.2363C63.9819 72.1167 64.2192 71.0599 64.5526 67.635C64.7681 65.4227 65.185 64.932 66.3891 65.4733ZM75.2009 68.0183C76.4722 68.796 76.8449 70.7978 76.0428 72.5406C75.9312 72.7835 75.8398 73.0063 75.8398 73.0358C75.8398 74.0974 72.9022 77.5608 70.9438 78.8079C68.4048 80.4249 67.6925 80.3426 68.8378 78.5646C70.3582 76.2045 71.1207 74.2823 71.7646 71.1867C72.0423 69.8512 72.1738 69.389 72.4229 68.8739C72.9672 67.7479 74.1588 67.3808 75.2009 68.0183ZM81.3236 68.9C83.2836 69.7597 83.1725 72.2232 81.0809 74.2763C80.3372 75.0065 78.362 76.6042 78.2033 76.6042C78.1752 76.6042 78.0044 76.7037 77.8234 76.8251C76.1864 77.925 75.1258 77.7404 76.3467 76.568C77.1761 75.7718 77.7634 74.9908 78.1817 74.1271C78.8036 72.8429 78.9684 72.3151 79.2519 70.6999C79.5507 68.9974 80.22 68.416 81.3236 68.9ZM45.5158 69.2495C45.9838 69.6936 45.9999 69.907 45.637 70.8596C45.0269 72.4613 45.15 72.4104 46.6246 70.4535C47.5172 69.2693 47.7555 69.0067 47.8258 69.131C47.8884 69.2419 47.8484 69.3738 47.6844 69.5948C47.5582 69.7647 46.8432 71.1226 46.0952 72.6124L44.7351 75.3211L44.682 76.4616C44.653 77.0889 44.6144 78.4361 44.5964 79.4554C44.5781 80.4748 44.5308 81.3943 44.491 81.4988C44.2553 82.1176 43.8022 82.1915 43.4717 81.6652C43.2533 81.3178 43.2485 81.2591 43.2737 79.3366C43.2879 78.252 43.2639 77.3645 43.22 77.3645C43.058 77.3645 42.8254 77.6211 42.3231 78.3541C41.5354 79.5037 41.1586 79.6353 40.4799 78.998C40.094 78.6355 39.9267 78.1764 39.906 77.4222L39.8878 76.7672L40.4638 76.2824C41.6758 75.2624 42.4685 74.3835 42.8878 73.5949C43.4686 72.5026 43.43 71.9708 42.8079 72.4929C40.8377 74.1459 39.6617 73.9853 38.3381 71.8829C37.82 71.0596 37.8497 70.9346 38.5032 71.1896C39.3044 71.5023 39.27 71.5111 41.8136 70.3349C42.2391 70.1382 42.7536 69.8321 42.9567 69.6554C43.9184 68.8173 44.8966 68.6624 45.5158 69.2495ZM13.944 69.3097C13.0119 70.2648 13.0164 72.0711 13.9539 73.305C14.774 74.3847 16.9107 76.1941 18.1918 76.8936C18.5086 77.0665 18.889 77.2908 19.0373 77.3918C19.1856 77.4928 19.3284 77.5539 19.3551 77.5277C19.3815 77.5014 19.1523 77.34 18.8456 77.1692C18.3022 76.8662 16.9918 76.0384 16.8958 75.9374C16.8694 75.9096 16.5663 75.6675 16.2221 75.3995C13.4076 73.2073 12.5878 70.9582 14.0163 69.3474C14.3976 68.9174 14.3506 68.8929 13.944 69.3097ZM52.4158 69.4356C52.1782 69.5007 51.7318 69.6223 51.4239 69.706C50.3602 69.9944 50.2325 70.2012 50.634 70.9853C50.9206 71.5453 50.9369 71.5498 51.5904 71.24C52.3143 70.8971 52.9923 70.2137 52.9904 69.8291C52.988 69.3541 52.9092 69.3004 52.4158 69.4356ZM46.0184 70.9888C45.8285 71.3961 45.6958 71.4861 45.6958 71.2074C45.6958 71.0321 46.082 70.492 46.1554 70.5647C46.1782 70.5873 46.1165 70.7781 46.0184 70.9888ZM43.0179 72.7355C42.8945 72.8576 42.7695 72.7633 42.8609 72.6171C42.8962 72.5606 42.9692 72.5411 43.0227 72.5741C43.0884 72.614 43.0868 72.6673 43.0179 72.7355ZM54.1215 72.6803C53.9772 72.702 53.718 72.7024 53.5455 72.6813C53.3729 72.6601 53.491 72.6423 53.8078 72.6418C54.1246 72.6414 54.2657 72.6587 54.1215 72.6803ZM52.0246 73.1871C51.9588 73.2273 51.8436 73.2368 51.7685 73.2081C51.6629 73.1681 51.6591 73.1394 51.751 73.0831C51.8168 73.0429 51.932 73.0334 52.0071 73.0622C52.1127 73.1021 52.1165 73.1308 52.0246 73.1871ZM49.9198 73.7529C49.9198 73.8052 49.855 73.8479 49.7758 73.8479C49.6966 73.8479 49.6318 73.8052 49.6318 73.7529C49.6318 73.7006 49.6966 73.6578 49.7758 73.6578C49.855 73.6578 49.9198 73.7006 49.9198 73.7529ZM54.0209 74.5004C53.0856 75.0314 52.873 75.5732 53.5198 75.7775C54.4222 76.0629 54.5204 77.0765 53.6861 77.4968C52.6575 78.0153 52.4379 78.8783 53.2656 79.1503C53.5599 79.247 53.7404 79.383 53.8752 79.6092C54.1071 79.9984 54.3104 80.0219 54.3946 79.6693C54.4289 79.5255 54.5552 79.1085 54.6747 78.7426C54.7944 78.3767 54.9636 77.671 55.0508 77.1744C55.1379 76.6778 55.2502 76.1401 55.3006 75.9797C55.466 75.4508 55.4081 75.1196 55.0752 74.6874C54.6891 74.186 54.602 74.1706 54.0209 74.5004ZM54.7616 74.6182C54.6946 74.7256 54.4318 74.7302 54.4318 74.6242C54.4318 74.4904 54.5398 74.4286 54.6807 74.4821C54.7544 74.5101 54.7908 74.5714 54.7616 74.6182ZM49.1616 75.2786C48.5686 75.8654 48.565 76.2981 49.1333 78.6609C49.3503 79.5631 49.3918 79.6455 49.6272 79.6455C49.9301 79.6455 51.0432 79.2715 51.162 79.1297C51.3084 78.955 51.194 78.3149 51.0164 78.3149C50.3055 78.3149 49.3438 77.6206 49.3438 77.1074C49.3438 76.7988 49.3515 76.7928 49.7518 76.8045C51.3596 76.8508 51.811 75.481 50.2992 75.1429C49.4261 74.9478 49.5053 74.9383 49.1616 75.2786ZM21.8818 75.9878C22.2389 76.4768 24.0092 78.1759 24.4798 78.4817C24.7702 78.6701 25.0618 78.8647 25.1278 78.9139C25.1938 78.9633 25.2478 78.9786 25.2478 78.9479C25.2478 78.9173 24.9778 78.7129 24.6478 78.4938C24.3178 78.2748 23.5294 77.5788 22.8958 76.9473C22.2622 76.3157 21.806 75.884 21.8818 75.9878ZM49.3438 77.7979C49.3438 77.8732 49.3052 77.9347 49.2581 77.9347C49.152 77.9347 49.0488 77.6881 49.1237 77.614C49.2077 77.5308 49.3438 77.6444 49.3438 77.7979ZM43.0426 77.9823C43.0121 78.0607 42.9488 78.1248 42.9015 78.1248C42.8544 78.1248 42.8158 78.0607 42.8158 77.9823C42.8158 77.9039 42.8792 77.8397 42.9567 77.8397C43.0426 77.8397 43.0762 77.8955 43.0426 77.9823Z", fill: "#C8312E" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.552 19.1594C33.4464 19.1843 33.1656 19.2504 32.928 19.306C30.1944 19.9461 28.3661 21.3449 26.2675 24.4017C25.9615 24.8474 26.0256 25.0912 26.4488 25.0912C27.0816 25.0912 29.6751 26.0906 30.8688 26.7946C31.9728 27.4456 32.8179 28.032 34.8653 29.5689C37.4122 31.4804 40.6104 33.458 41.136 33.4464C41.3143 33.4423 41.3124 33.4347 41.112 33.339C40.9932 33.2822 40.896 33.1995 40.896 33.1553C40.896 33.1109 40.8312 33.0747 40.752 33.0747C40.6728 33.0747 40.608 33.0313 40.608 32.9778C40.608 32.9234 40.4928 32.9032 40.344 32.9319C40.1484 32.9695 40.1278 32.9619 40.2641 32.903C40.4299 32.8314 40.4107 32.796 40.0721 32.5461C37.182 30.4126 33.3348 26.8316 32.9086 25.8779C32.0364 23.9257 34.4475 23.0418 37.5238 24.1861C40.2427 25.1974 41.5947 25.9133 42.6754 26.9143C44.3794 28.4925 45.216 30.2185 45.216 32.1566C45.216 33.6324 45.7527 34.7097 46.9097 35.5558C47.4989 35.9868 47.5891 36.2962 47.1795 36.4811C46.603 36.741 42.3552 36.5514 40.128 36.166C39.6792 36.0883 39.3012 36.0239 39.288 36.023C39.2748 36.022 39.264 36.0852 39.264 36.1636C39.264 36.242 39.308 36.3062 39.3617 36.3062C39.4736 36.3062 40.7998 38.2636 40.8005 38.4299C40.801 38.4903 40.8703 38.668 40.9551 38.8248C41.8635 40.5082 42.0447 44.6032 41.2736 46.0231C41.2244 46.1139 41.184 46.2429 41.184 46.3099C41.184 46.3769 41.0201 46.7518 40.8197 47.1429C39.9694 48.8026 39.0802 49.9414 37.92 50.8574C37.3899 51.2761 35.7286 52.2733 35.5613 52.2733C35.4943 52.2733 35.3172 52.3334 35.1677 52.4071C34.3195 52.8246 33.7385 52.9524 31.675 53.1753C31.1592 53.2309 29.3074 53.0222 28.8 52.8514C28.668 52.807 28.3656 52.7148 28.128 52.6466C27.8904 52.5782 27.6108 52.4662 27.5067 52.3978C27.4025 52.3294 27.2458 52.2733 27.1584 52.2733C27.0711 52.2733 26.9458 52.2092 26.88 52.1307C26.8143 52.0523 26.6794 51.9882 26.5803 51.9882C26.4812 51.9882 26.4 51.9547 26.4 51.914C26.4 51.8732 26.2812 51.7941 26.136 51.7385C25.0424 51.3184 22.176 48.3155 22.176 47.5899C22.176 47.5084 22.1417 47.4278 22.0997 47.4102C21.8938 47.3247 21.218 45.3953 21.2168 44.8895C21.2163 44.7227 21.1728 44.5597 21.12 44.5274C21.0622 44.492 21.024 43.8312 21.024 42.8641C21.024 41.8971 21.0622 41.2363 21.12 41.2009C21.1728 41.1686 21.2163 41.0056 21.2168 40.8388C21.2182 40.2305 21.7853 38.7181 22.3378 37.8487C22.5127 37.5733 22.656 37.3255 22.656 37.2982C22.656 36.785 25.7388 33.9301 26.293 33.9301C26.3518 33.9301 26.4005 33.8981 26.4012 33.8588C26.4022 33.7964 26.5975 33.6973 27.408 33.348C28.3601 32.9379 29.9184 32.6014 30.8719 32.6002C31.1933 32.5998 31.4847 32.5713 31.5197 32.5366C31.5934 32.4634 31.0647 32.1243 30.8768 32.1243C30.8072 32.1243 30.4519 31.9756 30.0871 31.7938C27.6101 30.559 23.2308 31.3552 21.3368 33.3848C21.0989 33.6398 17.952 39.8449 17.952 40.0589C17.952 40.0863 17.844 40.3305 17.712 40.6014C17.58 40.8723 17.472 41.1275 17.472 41.1686C17.472 41.2097 17.37 41.4689 17.2455 41.7448C16.8632 42.5906 16.789 42.7795 16.3966 43.9096C15.8141 45.5878 15.2652 47.5409 15.3404 47.6683C15.3776 47.7315 15.8451 48.248 16.3791 48.8164C16.9131 49.3847 17.4963 50.0191 17.6751 50.2263C18.4949 51.176 19.7312 52.4052 20.6086 53.1427C22.1388 54.4289 23.5618 55.1015 25.824 55.6076C26.5723 55.7751 30.3358 55.8357 31.32 55.6963C32.9256 55.4684 33.2763 55.4166 33.8434 55.3232C34.1619 55.2707 34.6803 55.1581 34.9954 55.073C35.3103 54.9877 35.7408 54.8768 35.952 54.8264C38.6516 54.1834 42.0612 52.5214 44.5949 50.6134C45.2489 50.1208 45.9473 49.6734 46.1477 49.6183C48.0358 49.0991 48.1364 51.0549 46.3037 52.6535C44.9511 53.8334 42.7916 55.442 41.647 56.122C40.4153 56.8536 39.8767 57.144 38.736 57.6907C36.7503 58.6426 35.7276 59.0168 33.168 59.7282C32.904 59.8016 32.3208 59.9268 31.872 60.0069C31.4232 60.0867 30.7536 60.2077 30.384 60.2756C29.4619 60.4455 25.4323 60.4415 24.528 60.2699C23.7228 60.1172 21.7258 59.6187 21.456 59.5029C21.3504 59.4578 21.1128 59.3663 20.928 59.2996C19.4345 58.7619 16.4964 56.9492 15.84 56.161C15.408 55.6423 15.2943 55.9305 15.6404 56.6666C16.6049 58.7198 18.5803 60.5237 19.7374 60.4082C20.9628 60.2856 22.5684 60.8233 23.4296 61.6447C24.5484 62.7118 28.43 62.2594 35.76 60.207C36.816 59.9112 37.8096 59.6343 37.968 59.5918C38.1264 59.549 38.7312 59.3789 39.312 59.2138C40.452 58.8894 42.3214 58.4375 43.248 58.2619C43.5648 58.2021 43.9752 58.116 44.16 58.0707C45.0149 57.8618 46.5701 57.7387 48.288 57.7444C50.0506 57.7501 50.6515 57.8072 52.608 58.1552C53.1423 58.2503 56.5755 59.1387 57.36 59.3849C57.6768 59.4842 58.1952 59.6389 58.512 59.7287C58.8288 59.8185 59.196 59.9299 59.328 59.9763C59.9686 60.2013 63.678 61.1671 65.52 61.5884C66.9694 61.9201 68.3256 62.081 70.0848 62.1302L71.9614 62.1829L72.5076 61.7424C73.7686 60.7257 74.526 60.447 76.0294 60.447C77.5822 60.447 79.1631 59.0974 80.341 56.7662C80.8546 55.7495 80.8572 55.5501 80.3511 56.0044C78.4104 57.7461 74.4766 59.8767 73.2015 59.8767C73.1199 59.8767 72.8055 59.9378 72.5026 60.0124C65.76 61.6742 55.1439 58.1298 49.3875 52.2952C47.7053 50.5901 48.3284 48.7586 50.227 49.8272C50.7766 50.1365 50.9832 50.2829 51.8808 50.9988C54.1791 52.8319 59.4694 55.0395 62.112 55.2683C62.4024 55.2935 63.1584 55.3791 63.792 55.4587C71.0971 56.3753 73.7648 55.4271 78.3442 50.2862C78.7356 49.8469 79.0992 49.4406 79.152 49.3833C80.8176 47.5811 80.8037 47.602 80.6417 47.1002C80.5899 46.9398 80.3508 46.1557 80.1104 45.358C79.7391 44.1268 79.2408 42.7011 78.9233 41.9612C77.8947 39.565 75.482 34.5795 74.8697 33.5851C74.7142 33.3323 73.3817 32.3144 73.2065 32.3144C73.1744 32.3144 72.9871 32.2141 72.7901 32.0918C70.7194 30.8037 66.9828 30.8455 64.981 32.1792C64.7124 32.3581 64.5295 32.5092 64.5744 32.5152C64.6193 32.5211 64.872 32.5385 65.136 32.5537C66.336 32.6233 67.8778 33.0049 68.9962 33.5086C70.2665 34.081 72.2398 35.6197 72.7661 36.4488C72.8657 36.6056 73.0423 36.8344 73.1585 36.9572C73.7273 37.5593 74.784 39.9793 74.784 40.6803C74.784 40.815 74.8301 40.9709 74.8863 41.0265C75.0255 41.1643 75.0255 44.5639 74.8863 44.7018C74.8301 44.7574 74.7826 44.9548 74.7809 45.1404C74.7754 45.7242 73.9296 47.7619 73.4739 48.2889C73.4023 48.3716 73.344 48.4697 73.344 48.507C73.344 48.7461 71.7963 50.4081 70.98 51.0456C70.6447 51.3072 68.9955 52.2733 68.8839 52.2733C68.8248 52.2733 68.6079 52.3584 68.4017 52.4624C68.1955 52.5665 67.8732 52.6765 67.6853 52.7069C67.4976 52.7374 67.2576 52.8008 67.152 52.8478C66.6708 53.0622 64.9436 53.2154 63.984 53.1287C62.3552 52.9819 61.9733 52.893 60.72 52.3705C58.4316 51.4163 56.7048 49.8975 55.585 47.8538C55.4132 47.5402 55.2346 47.243 55.1883 47.1933C55.142 47.1436 55.104 47.0312 55.104 46.9436C55.104 46.8559 55.0392 46.7309 54.96 46.6658C54.8808 46.6007 54.816 46.433 54.816 46.293C54.816 46.1531 54.7774 45.9979 54.7303 45.9482C54.324 45.5203 54.1476 41.7046 54.4798 40.5287C54.9595 38.8303 56.1696 36.5913 56.8767 36.0938C57.0334 35.9835 56.563 36.0125 55.728 36.1648C53.5279 36.5657 49.2156 36.7389 48.7894 36.4433C48.4642 36.2178 48.5264 35.9621 48.984 35.6414C50.3343 34.6947 50.718 33.9332 50.8757 31.8867C51.1495 28.3317 53.449 25.9794 58.32 24.2707C61.4496 23.173 63.5647 23.7121 63.222 25.5203C63.0576 26.388 60.9113 28.5479 57.504 31.2742C56.8968 31.7598 56.3784 32.184 56.352 32.2165C56.3256 32.2491 56.0254 32.4876 55.6846 32.7466C54.6917 33.5012 54.7397 33.4561 54.9612 33.4276C55.1684 33.4007 56.1706 32.9046 56.7581 32.538C56.9552 32.4149 57.1436 32.3144 57.1772 32.3144C57.3279 32.3144 60.4639 30.1605 61.68 29.2217C64.8485 26.7758 68.1226 25.105 69.7712 25.0928C70.1648 25.09 70.1021 24.8391 69.4944 23.9844C67.1767 20.7252 64.8101 19.2456 61.728 19.1287C60.218 19.0712 59.5438 19.2397 57.072 20.2918C50.3213 23.1654 45.5883 23.1556 38.7691 20.2542C36.4366 19.2618 34.6805 18.8932 33.552 19.1594ZM62.5735 19.381C62.5925 19.4376 62.7881 19.4844 63.0079 19.4851C63.4411 19.4868 64.0666 19.67 64.2463 19.8479C64.308 19.909 64.4974 19.9589 64.6673 19.9589C64.837 19.9589 64.9904 19.991 65.0081 20.0302C65.0256 20.0694 65.2128 20.187 65.424 20.2915C66.3656 20.7573 67.8694 21.969 67.8716 22.2637C67.8718 22.3029 67.9368 22.335 68.016 22.335C68.0952 22.335 68.16 22.3955 68.16 22.4697C68.16 22.5436 68.1924 22.6184 68.232 22.636C68.5954 22.7957 69.9293 24.8001 69.7157 24.865C69.6257 24.8925 69.4769 24.9546 69.3852 25.003C69.2936 25.0515 69.0451 25.0912 68.8332 25.0912C68.6213 25.0912 68.448 25.1306 68.448 25.1786C68.448 25.2269 68.3076 25.2934 68.136 25.3269C67.8451 25.3832 67.549 25.4885 67.1969 25.6605C67.116 25.6999 66.9108 25.7624 66.7409 25.7995C66.571 25.8363 66.432 25.9059 66.432 25.9542C66.432 26.0022 66.3631 26.0416 66.2789 26.0416C66.1947 26.0416 65.9895 26.1378 65.8231 26.2555C65.6568 26.3731 65.3911 26.5387 65.2325 26.6237C65.0739 26.7086 64.7928 26.8697 64.608 26.9813C64.4232 27.0933 64.1964 27.2106 64.104 27.242C64.0116 27.2736 63.936 27.337 63.936 27.3834C63.936 27.4295 63.8815 27.4672 63.8151 27.4672C63.7486 27.4672 63.5777 27.5742 63.4351 27.7049C63.2928 27.8355 63.1421 27.9432 63.1001 27.9439C63.0583 27.9448 62.8887 28.0624 62.7231 28.2052C62.1394 28.7094 61.9652 28.8473 61.6824 29.0278C61.5255 29.1281 61.3095 29.2913 61.2024 29.3907C61.0956 29.4897 60.8676 29.657 60.696 29.7623C60.5244 29.8675 60.384 29.9932 60.384 30.0412C60.384 30.0892 60.338 30.1284 60.2816 30.1284C60.1884 30.1284 59.5383 30.5685 59.424 30.7091C59.3268 30.8287 58.944 30.9014 58.944 30.8001C58.944 30.7443 58.8955 30.6987 58.8363 30.6987C58.7626 30.6987 58.7669 30.7445 58.8499 30.8436C58.9167 30.9232 58.9544 31.0007 58.9337 31.0157C58.4542 31.3637 57.8803 31.7465 57.6838 31.8497C57.5448 31.9224 57.1976 32.136 56.9117 32.3244C55.8416 33.0296 55.2027 33.2052 56.0902 32.5499C56.3662 32.346 56.9254 31.9102 57.3327 31.5816C57.7399 31.2528 58.1026 30.9838 58.1383 30.9838C58.1741 30.9838 58.3198 30.8662 58.4621 30.7224C58.6044 30.5787 58.8466 30.3572 59.0004 30.2301C59.1543 30.1032 59.521 29.7932 59.8155 29.5411C60.11 29.2892 60.4001 29.083 60.4603 29.083C60.624 29.083 60.4882 29.3526 60.2938 29.4137C60.2009 29.4429 60.0763 29.5729 60.0166 29.7026C59.9571 29.8321 59.8519 29.9383 59.7833 29.9383C59.6347 29.9383 59.2908 30.3133 59.3686 30.3903C59.3984 30.42 59.502 30.3732 59.599 30.2862C59.6959 30.1995 59.8258 30.1284 59.8875 30.1284C59.9494 30.1284 60 30.094 60 30.0519C60 29.9574 61.278 28.9879 61.4028 28.9879C61.4525 28.9879 61.5629 28.9131 61.6479 28.8216C62.0527 28.3858 63.2554 27.4672 63.4212 27.4672C63.4932 27.4672 63.552 27.4245 63.552 27.3722C63.552 27.3199 63.6108 27.2772 63.6826 27.2772C63.7543 27.2772 64.0092 27.1061 64.2492 26.897C64.4892 26.6879 64.7338 26.5168 64.7926 26.5168C64.8516 26.5168 65.071 26.4099 65.28 26.2792C65.4891 26.1485 65.6935 26.0423 65.7341 26.043C65.8495 26.0454 66.8602 25.5274 66.8959 25.4476C66.9137 25.4084 67.0433 25.3749 67.184 25.373C67.3248 25.3711 67.548 25.3084 67.68 25.2337C67.812 25.1591 68.0362 25.0964 68.1783 25.0945C68.3203 25.0926 68.4634 25.0484 68.496 24.9961C68.5287 24.9439 68.6561 24.9011 68.779 24.9011C69.1824 24.9011 69.4913 24.572 69.2851 24.3622C68.9551 24.0265 68.772 23.7713 68.587 23.3885C68.484 23.1761 68.3527 23.0019 68.2951 23.0014C68.2375 23.0007 68.1089 22.8506 68.0093 22.6676C67.9097 22.4846 67.7888 22.335 67.7403 22.335C67.6491 22.335 67.5396 22.238 66.8244 21.5228C66.5914 21.29 66.3636 21.0994 66.3183 21.0994C66.2727 21.0994 65.9093 20.8856 65.5107 20.6242C65.1091 20.3609 64.675 20.149 64.5372 20.149C64.2528 20.149 63.552 19.8655 63.552 19.7505C63.552 19.7082 63.3888 19.6738 63.1894 19.6738C62.9899 19.6738 62.7308 19.6072 62.6134 19.5257C62.4524 19.4141 62.1701 19.3806 61.464 19.3891C60.3461 19.4027 60.2297 19.3877 60.672 19.2877C61.1295 19.1841 62.5303 19.253 62.5735 19.381ZM60.24 19.5787C60.2074 19.631 60.0346 19.6738 59.856 19.6738C59.6775 19.6738 59.5078 19.7118 59.4788 19.7581C59.4497 19.8045 59.2786 19.8698 59.0981 19.9033C58.9179 19.9368 58.3882 20.1547 57.9211 20.3878C57.4541 20.6209 57.0072 20.8124 56.928 20.8136C56.8488 20.8145 56.6544 20.9005 56.496 21.0044C56.3376 21.1082 56.1416 21.1935 56.0604 21.1937C55.9791 21.1942 55.7431 21.28 55.536 21.3845C55.3289 21.4891 55.1086 21.5746 55.0467 21.5746C54.9847 21.5746 54.8103 21.6385 54.6591 21.7167C54.5079 21.7946 54.307 21.8588 54.2127 21.8593C54.1183 21.8595 53.9379 21.9267 53.8114 22.0087C53.5512 22.1777 52.9791 22.1582 52.9193 21.9785C52.8924 21.8973 52.9975 21.8597 53.2529 21.8597C53.4579 21.8597 53.6667 21.8201 53.7168 21.7716C53.767 21.7234 54.0022 21.6554 54.2393 21.6212C54.4767 21.5867 54.6927 21.5261 54.7193 21.4865C54.7462 21.447 54.9747 21.3372 55.2272 21.2429C55.4796 21.1486 55.7091 21.0348 55.7369 20.9903C55.7645 20.9457 55.8696 20.9093 55.9704 20.9093C56.1766 20.9093 56.863 20.6149 56.9119 20.5054C56.9297 20.4662 57.0029 20.4341 57.0749 20.4341C57.1469 20.4341 57.3946 20.3348 57.6255 20.2134C57.8561 20.0917 58.3337 19.9107 58.6865 19.8106C59.0393 19.7104 59.328 19.5961 59.328 19.5562C59.328 19.5162 59.5467 19.4837 59.8138 19.4837C60.1131 19.4837 60.2765 19.52 60.24 19.5787ZM52.512 22.2399C52.1667 22.3494 51.936 22.3494 51.936 22.2399C51.936 22.1876 52.1196 22.1491 52.344 22.1544C52.6906 22.1625 52.716 22.1753 52.512 22.2399ZM51.7872 22.4181C51.618 22.5728 50.5217 22.6125 50.3333 22.4711C50.1826 22.3578 50.2714 22.3407 51.0192 22.338C51.516 22.3361 51.84 22.3701 51.7872 22.4181ZM49.728 22.6201C49.8259 22.6826 49.5795 22.708 48.96 22.6987C48.1925 22.6873 48.1241 22.675 48.528 22.6201C49.2675 22.5196 49.5711 22.5196 49.728 22.6201ZM62.1552 23.3916C62.2054 23.4377 62.388 23.4755 62.5611 23.4755C62.7999 23.4755 62.9156 23.5384 63.0418 23.7368C63.133 23.8806 63.3044 24.116 63.4222 24.26C63.834 24.7633 63.7313 25.9934 63.253 26.2861C63.115 26.3705 63.162 26.01 63.3151 25.8097C63.5023 25.5645 63.5004 24.7707 63.312 24.616C63.2328 24.5509 63.168 24.4173 63.168 24.3192C63.168 24.2211 63.1351 24.1408 63.0951 24.1408C63.055 24.1408 62.9122 24.04 62.778 23.9167C62.3381 23.5128 61.7019 23.4225 60.4356 23.5838C59.8244 23.6617 59.3048 23.7059 59.2808 23.6822C59.1701 23.5724 59.3731 23.4755 59.7139 23.4755C59.9199 23.4755 60.1433 23.4172 60.2105 23.3462C60.3478 23.2008 61.9892 23.2393 62.1552 23.3916ZM59.1773 23.7499C59.2371 23.8457 58.8571 23.9675 58.7338 23.892C58.6894 23.8647 58.6779 23.8026 58.7081 23.7539C58.7784 23.6416 59.108 23.6387 59.1773 23.7499ZM58.603 23.9426C58.6327 23.9904 58.3551 24.1222 57.9855 24.2353C57.6161 24.3484 57.2892 24.4805 57.2592 24.5285C57.1923 24.6357 56.832 24.6454 56.832 24.5399C56.832 24.4126 57.0533 24.2358 57.2127 24.2358C57.2955 24.2358 57.5136 24.1526 57.6975 24.0512C58.0541 23.8542 58.5135 23.7993 58.603 23.9426ZM56.64 24.711C56.64 24.7633 56.551 24.8061 56.4423 24.8061C56.3335 24.8061 56.2714 24.7633 56.304 24.711C56.3367 24.6587 56.4257 24.616 56.5018 24.616C56.5779 24.616 56.64 24.6587 56.64 24.711ZM56.16 24.9961C56.16 25.0484 56.1067 25.0912 56.0415 25.0912C55.8895 25.0912 54.9041 25.5757 54.7371 25.7325C54.6675 25.7978 54.5523 25.8515 54.4812 25.8515C54.4102 25.8515 54.336 25.8993 54.3163 25.9575C54.2967 26.0157 54.1959 26.0459 54.0924 26.0247C53.94 25.9936 53.9818 25.9416 54.3113 25.7527C54.5352 25.6241 54.7188 25.4654 54.7193 25.4001C54.7198 25.3347 54.7956 25.2791 54.888 25.2768C54.9804 25.2741 55.2072 25.1934 55.392 25.0969C55.766 24.9018 56.16 24.8503 56.16 24.9961ZM53.664 26.4218C53.4792 26.5784 53.2956 26.7067 53.256 26.7067C53.2164 26.7069 53.184 26.7433 53.184 26.7877C53.184 26.8321 52.9032 27.1576 52.56 27.5112C52.2168 27.8645 51.936 28.2131 51.936 28.2858C51.936 28.3583 51.8935 28.4177 51.8419 28.4177C51.7901 28.4177 51.7205 28.5246 51.6874 28.6553C51.6543 28.786 51.5888 28.8929 51.5417 28.8929C51.4944 28.8929 51.456 28.9518 51.456 29.0238C51.456 29.0958 51.3912 29.2079 51.312 29.273C51.2328 29.3382 51.168 29.4722 51.168 29.571C51.168 29.6699 51.1306 29.825 51.085 29.9158C50.8412 30.3998 50.7571 30.8581 50.7149 31.9342C50.6892 32.5877 50.6295 33.1629 50.5822 33.2126C50.5349 33.2622 50.496 33.3801 50.496 33.4746C50.496 33.7158 50.0127 34.579 49.7422 34.8212C49.6181 34.9321 49.4345 35.098 49.3342 35.1894C49.2341 35.2809 49.1088 35.3558 49.056 35.3558C49.0032 35.3558 48.96 35.394 48.96 35.4406C48.96 35.533 48.6689 35.6694 48.6055 35.6067C48.5842 35.5855 48.8328 35.3173 49.1583 35.0105C49.8111 34.3954 50.3016 33.6402 50.3031 33.2489C50.3035 33.1097 50.353 32.9795 50.413 32.9595C50.484 32.9362 50.5299 32.5449 50.5443 31.8349C50.5668 30.7419 50.7312 29.8576 50.953 29.638C51.0185 29.5731 51.072 29.4629 51.072 29.3928C51.072 29.0929 51.7308 28.0418 52.2439 27.5226C52.5499 27.2132 52.8 26.9274 52.8 26.8875C52.8 26.8476 52.8864 26.7877 52.992 26.7544C53.0976 26.7212 53.184 26.6435 53.1843 26.5817C53.1845 26.4536 53.6393 26.1583 53.856 26.1457C53.9355 26.1409 53.8491 26.265 53.664 26.4218ZM63.168 26.5123C63.168 26.556 63.0384 26.729 62.88 26.897C62.7216 27.065 62.592 27.2334 62.592 27.2717C62.592 27.333 62.2812 27.6438 61.4705 28.3939C61.3433 28.5115 61.1981 28.6078 61.1477 28.6078C61.0973 28.6078 61.056 28.6691 61.056 28.7439C61.056 28.877 60.7023 29.0495 60.612 28.9604C60.5871 28.9357 61.1088 28.3735 61.7715 27.7113C62.4339 27.0493 62.976 26.4643 62.976 26.4116C62.976 26.3588 63.0192 26.3419 63.072 26.3743C63.1248 26.4066 63.168 26.4688 63.168 26.5123ZM69.1875 31.4205C69.2276 31.5412 67.2492 31.6907 67.0704 31.5807C66.912 31.4833 68.017 31.2868 68.6323 31.3029C68.9187 31.3103 69.1685 31.3633 69.1875 31.4205ZM70.368 31.4215C70.6056 31.4498 70.8864 31.5094 70.992 31.5543C71.0976 31.599 71.4216 31.708 71.712 31.7967C72.0024 31.8851 72.2811 31.9951 72.3312 32.0409C72.3814 32.0868 72.4956 32.1243 72.5849 32.1243C72.6744 32.1243 72.7723 32.1885 72.8028 32.2669C72.8331 32.3453 72.9459 32.4094 73.0529 32.4094C73.1602 32.4094 73.248 32.4522 73.248 32.5045C73.248 32.5568 73.2932 32.5995 73.3481 32.5995C73.4031 32.5995 73.6822 32.7706 73.968 32.9797C74.2539 33.1888 74.533 33.3599 74.5879 33.3599C74.6429 33.3599 74.688 33.4418 74.688 33.5421C74.688 33.6422 74.7204 33.7384 74.76 33.756C74.7996 33.7733 75.0248 34.1725 75.2604 34.6429C75.4961 35.1134 75.7162 35.5197 75.7495 35.5459C75.7831 35.572 75.8396 35.711 75.8751 35.8547C75.9106 35.9985 75.9821 36.1161 76.034 36.1161C76.0856 36.1161 76.128 36.223 76.128 36.3537C76.128 36.4844 76.1712 36.5913 76.224 36.5913C76.2768 36.5913 76.32 36.6502 76.32 36.7222C76.32 36.7942 76.3848 36.9064 76.464 36.9715C76.5432 37.0366 76.608 37.1701 76.608 37.2683C76.608 37.3664 76.6512 37.4467 76.704 37.4467C76.7568 37.4467 76.8 37.4923 76.8 37.5479C76.8 37.6035 76.902 37.8708 77.0268 38.1419C77.1516 38.413 77.2841 38.731 77.3213 38.8486C77.3585 38.9662 77.4293 39.0624 77.4785 39.0624C77.5277 39.0624 77.568 39.1225 77.568 39.1962C77.568 39.2698 77.6811 39.5585 77.8195 39.8377C78.1147 40.4339 78.2062 40.6489 78.2885 40.9395C78.3216 41.0571 78.3893 41.1533 78.4385 41.1533C78.4877 41.1533 78.528 41.2577 78.528 41.3853C78.528 41.5128 78.5664 41.6407 78.6132 41.6694C78.66 41.6982 78.7268 41.8716 78.7616 42.0553C78.7964 42.2387 78.866 42.3889 78.9164 42.3889C78.9668 42.3889 79.008 42.4749 79.008 42.5802C79.008 42.7722 79.0304 42.8308 79.3277 43.4182C79.416 43.5924 79.488 43.8122 79.488 43.9065C79.488 44.0008 79.5526 44.2004 79.6316 44.3501C79.7103 44.4998 79.7751 44.7186 79.7756 44.8362C79.7758 44.9539 79.8192 45.0501 79.872 45.0501C79.9248 45.0501 79.968 45.1972 79.968 45.377C79.968 45.5569 80.0088 45.7292 80.0585 45.7596C80.1082 45.79 80.178 46.0062 80.2133 46.2403C80.2488 46.4743 80.31 46.6658 80.3496 46.6658C80.5217 46.6658 80.5424 47.6509 80.3739 47.8163C80.2827 47.9056 79.992 48.2221 79.728 48.5196C79.464 48.8169 79.0752 49.2422 78.864 49.4643C78.6528 49.6865 78.1776 50.2061 77.808 50.6193C76.5188 52.0602 74.6086 53.794 74.3105 53.794C74.2541 53.794 74.208 53.8275 74.208 53.8684C74.208 53.9092 73.9164 54.091 73.56 54.2723C73.2036 54.4536 72.8976 54.6339 72.8801 54.6731C72.8623 54.7123 72.7111 54.7435 72.5441 54.7423L72.24 54.7401L72.48 54.5543C72.612 54.4522 72.775 54.3676 72.8419 54.3664C72.9089 54.3652 73.135 54.2573 73.344 54.1266C73.5531 53.996 73.7657 53.889 73.8163 53.889C73.8982 53.889 74.5752 53.3649 74.9842 52.9849C75.0677 52.9072 75.1798 52.8436 75.2333 52.8436C75.2868 52.8436 75.6072 52.5587 75.9454 52.2106C76.2833 51.8622 76.8516 51.2934 77.208 50.946C77.5644 50.5989 77.856 50.2796 77.856 50.2368C77.856 50.1938 78.18 49.8388 78.576 49.4482C78.972 49.0573 79.296 48.6926 79.296 48.6372C79.296 48.5821 79.52 48.3333 79.7936 48.0843L80.2908 47.6314L80.1855 47.1249C80.1276 46.8462 80.029 46.4472 79.9664 46.2381C79.9037 46.029 79.8308 45.6973 79.8041 45.5008C79.7775 45.3046 79.7172 45.1202 79.67 45.0914C79.6227 45.0624 79.584 44.9593 79.584 44.8621C79.584 44.765 79.4707 44.462 79.332 44.1888C79.1935 43.9155 79.08 43.5829 79.08 43.4496C79.08 43.316 79.0208 43.1481 78.948 43.0763C78.8756 43.0043 78.8156 42.8739 78.8148 42.7859C78.8141 42.6983 78.685 42.3756 78.528 42.0691C78.3711 41.7623 78.265 41.4753 78.2926 41.4311C78.3204 41.3867 78.2333 41.1788 78.0994 40.9687C77.9655 40.7587 77.856 40.5574 77.856 40.5213C77.856 40.4082 77.2692 39.257 77.1855 39.2059C77.1418 39.1791 77.1279 39.0748 77.1545 38.974C77.186 38.855 77.1322 38.7469 77.0014 38.6661C76.8908 38.5974 76.8 38.4656 76.8 38.3729C76.8 38.2802 76.764 38.1303 76.7204 38.0395C76.5747 37.738 76.3558 37.3072 76.2262 37.0665C75.9994 36.6457 75.936 36.5008 75.936 36.4027C75.936 36.3499 75.7911 36.1033 75.614 35.855C75.4368 35.6064 75.1942 35.1894 75.0747 34.9281C74.9549 34.6667 74.8191 34.3785 74.7725 34.2877C74.7262 34.197 74.688 34.0625 74.688 33.9888C74.688 33.9152 74.5476 33.7427 74.376 33.6053C73.4621 32.8742 72.9178 32.5045 72.7548 32.5045C72.5278 32.5045 71.616 32.04 71.616 31.9243C71.616 31.8775 71.4286 31.8392 71.1994 31.8392C70.9702 31.8392 70.5706 31.7755 70.3114 31.6976C70.0522 31.6199 69.7212 31.5557 69.576 31.555C69.4308 31.5545 69.312 31.5184 69.312 31.4749C69.312 31.3184 69.4579 31.2563 69.6948 31.3127C69.8275 31.3443 70.1304 31.3932 70.368 31.4215ZM66.72 31.7442C66.72 31.7964 66.5796 31.8385 66.408 31.8378C66.1714 31.8366 66.1308 31.814 66.24 31.7442C66.4287 31.6235 66.72 31.6235 66.72 31.7442ZM67.56 32.475C67.4676 32.4988 67.3164 32.4988 67.224 32.475C67.1316 32.451 67.2072 32.4315 67.392 32.4315C67.5768 32.4315 67.6524 32.451 67.56 32.475ZM69.12 32.8488C69.12 32.9807 69.0958 32.9847 68.952 32.8756C68.8596 32.8055 68.766 32.7362 68.744 32.7214C68.7221 32.7067 68.7977 32.6946 68.9119 32.6946C69.0399 32.6946 69.12 32.754 69.12 32.8488ZM72.192 34.2084C72.192 34.2568 72.2676 34.316 72.36 34.3398C72.5019 34.3766 72.5036 34.3849 72.3718 34.3944C72.2859 34.4003 72.1618 34.3412 72.096 34.2628C72.0135 34.1642 72.0099 34.1202 72.0843 34.1202C72.1436 34.1202 72.192 34.1599 72.192 34.2084ZM47.1591 35.2607C47.3789 35.4698 47.5932 35.6409 47.6355 35.6409C47.6775 35.6409 47.712 35.6837 47.712 35.7359C47.712 35.7882 47.6472 35.831 47.568 35.831C47.4888 35.831 47.424 35.7668 47.424 35.6884C47.424 35.6093 47.3386 35.5459 47.232 35.5459C47.1264 35.5459 47.04 35.5031 47.04 35.4508C47.04 35.3985 46.9973 35.3558 46.9452 35.3558C46.7976 35.3558 46.4681 35.0459 46.5226 34.9587C46.6143 34.8116 46.7597 34.8808 47.1591 35.2607ZM30.0672 35.8167C29.9455 35.8507 30.5484 35.8785 31.4064 35.8785C32.2644 35.8785 32.8392 35.8514 32.6832 35.8184C32.3093 35.7393 30.3487 35.7378 30.0672 35.8167ZM63.312 35.8279C63.1536 35.8659 63.456 35.8766 63.984 35.8512C64.512 35.826 64.962 35.7896 64.9841 35.7706C65.0568 35.7074 63.6053 35.7571 63.312 35.8279ZM65.52 35.8364C66.0063 35.936 66.3991 35.9315 66 35.831C65.8416 35.7911 65.5824 35.7583 65.424 35.758C65.1819 35.7578 65.1972 35.7704 65.52 35.8364ZM74.28 35.9838C74.4219 36.1242 74.4199 36.1339 74.2572 36.1026C74.1598 36.0838 74.0619 36.0151 74.04 35.9498C73.9848 35.7854 74.0957 35.8013 74.28 35.9838ZM29.184 36.0372C28.4868 36.3228 27.8468 36.6296 27.8799 36.6624C27.9005 36.6828 28.1004 36.6072 28.3239 36.4944C28.5473 36.3815 28.9728 36.21 29.2692 36.1135C29.5656 36.017 29.7216 35.9381 29.616 35.9384C29.5104 35.9386 29.316 35.983 29.184 36.0372ZM33.168 36.0211C33.4551 36.1432 33.6948 36.1432 33.504 36.0211C33.4248 35.9705 33.2736 35.9312 33.168 35.9341L32.976 35.9393L33.168 36.0211ZM48.288 36.1826C48.288 36.3737 48.2602 36.4117 48.1793 36.3316C48.1195 36.2724 48.0965 36.157 48.1282 36.075C48.2163 35.8483 48.288 35.8968 48.288 36.1826ZM62.4 36.0686C62.2152 36.1392 62.1288 36.1967 62.208 36.1967C62.2872 36.1967 62.5032 36.1392 62.688 36.0686C62.8728 35.998 62.9592 35.9405 62.88 35.9405C62.8008 35.9405 62.5848 35.998 62.4 36.0686ZM66.672 36.0719C66.8304 36.1439 67.0248 36.2012 67.104 36.1997C67.1832 36.1981 67.0968 36.1392 66.912 36.0686C66.4738 35.9015 66.3012 35.9039 66.672 36.0719ZM47.904 36.2644C47.904 36.3397 47.8608 36.4012 47.808 36.4012C47.7552 36.4012 47.712 36.3131 47.712 36.2054C47.712 36.0978 47.7552 36.0363 47.808 36.0686C47.8608 36.1009 47.904 36.189 47.904 36.2644ZM34.08 36.242C34.08 36.2646 34.4427 36.4846 34.886 36.731C35.7586 37.216 36.883 38.2455 37.3049 38.9458C37.4381 39.1667 37.5696 39.3475 37.5972 39.3475C37.8355 39.3475 36.6708 37.9295 35.952 37.3443C35.4488 36.9344 34.08 36.1287 34.08 36.242ZM56.304 36.4428C56.0456 36.65 55.9311 36.6723 55.1835 36.6621C54.6348 36.6548 54.3005 36.6923 54.2036 36.7721C53.904 37.0181 48.8019 37.0432 48.5729 36.7999C48.469 36.6897 48.3855 36.544 48.3872 36.4766C48.3891 36.3967 48.4349 36.4122 48.5177 36.52C48.6569 36.7016 54.24 36.7847 54.24 36.6051C54.24 36.5604 54.5417 36.4989 54.9103 36.4682C55.279 36.4376 55.657 36.3684 55.7503 36.3147C55.8437 36.261 56.0712 36.2159 56.256 36.2145L56.592 36.2121L56.304 36.4428ZM61.488 36.4549C61.0745 36.7163 61.0987 36.718 61.656 36.4663C61.854 36.3768 62.016 36.2829 62.016 36.2575C62.016 36.1615 61.86 36.2197 61.488 36.4549ZM74.9688 36.6728C75.0874 36.784 75.0824 36.7971 74.9328 36.7679C74.8371 36.7491 74.6895 36.627 74.6045 36.4963C74.4403 36.2435 74.5865 36.3143 74.9688 36.6728ZM27.3224 36.9394C26.9019 37.2117 25.6383 38.3971 25.7683 38.3971C25.8149 38.3971 26.0732 38.17 26.3424 37.8924C26.6117 37.6149 27.0372 37.2495 27.288 37.0801C27.5388 36.9109 27.744 36.7529 27.744 36.7294C27.744 36.6678 27.7349 36.6723 27.3224 36.9394ZM47.328 36.7814C47.328 36.8337 47.2632 36.8764 47.184 36.8764C47.1048 36.8764 47.04 36.8337 47.04 36.7814C47.04 36.7291 47.1048 36.6864 47.184 36.6864C47.2632 36.6864 47.328 36.7291 47.328 36.7814ZM60.5664 36.9829C59.5565 37.6919 57.7042 39.9178 58.1242 39.9178C58.1506 39.9178 58.2653 39.737 58.3791 39.516C58.8399 38.6221 59.6139 37.7701 60.6 37.072C61.0159 36.7776 61.1158 36.6864 61.0224 36.6864C61.0039 36.6864 60.7987 36.8199 60.5664 36.9829ZM69.2016 37.441C69.5662 37.7515 70.0913 38.3182 70.3687 38.7003C70.8838 39.4098 71.1355 39.7097 70.9913 39.4426C70.5879 38.6953 68.9052 36.8764 68.6172 36.8764C68.5743 36.8764 68.8373 37.1304 69.2016 37.441ZM25.3628 38.9436C24.9334 39.6137 24.672 40.0993 24.672 40.2269C24.672 40.2892 24.8045 40.0872 24.9665 39.7781C25.1285 39.469 25.3375 39.1066 25.4309 38.9728C25.6704 38.6297 25.746 38.4922 25.6956 38.4922C25.6716 38.4922 25.5219 38.6953 25.3628 38.9436ZM71.0981 39.7752C71.4716 40.7986 71.6283 41.3095 71.7005 41.7395C71.7569 42.076 71.7893 42.1499 71.7968 41.9593C71.8116 41.581 71.4682 40.3664 71.2229 39.9306C71.1161 39.7405 71.06 39.6707 71.0981 39.7752ZM31.056 39.8266C30.9204 39.8814 31.0169 39.9064 31.3841 39.9111C31.6699 39.9147 31.8859 39.9026 31.8641 39.8838C31.759 39.7952 31.2269 39.7574 31.056 39.8266ZM64.368 39.8228C64.1304 39.8826 64.1724 39.8962 64.608 39.9C64.9844 39.9031 65.0808 39.881 64.944 39.8228C64.722 39.7282 64.7432 39.7282 64.368 39.8228ZM76.7703 40.2742C76.746 40.3657 76.7264 40.2908 76.7264 40.1079C76.7264 39.9249 76.746 39.8501 76.7703 39.9416C76.7943 40.033 76.7943 40.1827 76.7703 40.2742ZM30.144 40.0604C29.8306 40.2379 29.9403 40.2398 30.349 40.0642C30.5266 39.9877 30.6072 39.9252 30.528 39.9249C30.4488 39.9247 30.276 39.9858 30.144 40.0604ZM32.3751 40.053C32.5726 40.1229 32.8481 40.2538 32.9871 40.3438C33.126 40.4341 33.2098 40.46 33.1733 40.4016C33.0795 40.2509 32.3931 39.9171 32.1879 39.9221C32.0933 39.9242 32.1775 39.9831 32.3751 40.053ZM37.9267 39.9556C37.9167 40.0851 38.3259 41.1633 38.3691 41.1206C38.39 41.1001 38.3004 40.8102 38.1701 40.4766C38.04 40.1433 37.9303 39.9088 37.9267 39.9556ZM63.4023 40.0573C63.2998 40.134 63.2614 40.1982 63.3168 40.1998C63.3723 40.2015 63.4587 40.1642 63.5088 40.1172C63.559 40.0699 63.6864 40.0107 63.792 39.9855C63.9792 39.9408 63.9792 39.9397 63.7863 39.9287C63.6778 39.9228 63.505 39.9805 63.4023 40.0573ZM65.52 39.9855C65.6256 40.0107 65.7531 40.0699 65.8032 40.1172C65.8534 40.1642 65.9371 40.2029 65.9895 40.2029C66.042 40.2029 66.001 40.1402 65.8983 40.0635C65.7958 39.9867 65.6256 39.9275 65.52 39.9318L65.328 39.9399L65.52 39.9855ZM57.8986 40.3084C57.8396 40.4764 57.8079 40.6306 57.8285 40.6508C57.8491 40.6712 57.9142 40.5503 57.9735 40.3826C58.0325 40.2146 58.0642 40.0604 58.0436 40.0402C58.0229 40.0197 57.9579 40.1407 57.8986 40.3084ZM29.5683 40.3742C29.1912 40.628 28.5142 41.4599 28.5128 41.6709C28.5123 41.7203 28.6349 41.5692 28.7849 41.3349C28.9349 41.1006 29.2481 40.7508 29.4809 40.5577C29.9287 40.1861 29.9669 40.106 29.5683 40.3742ZM62.4418 40.7278C62.1548 41.0165 61.9215 41.3052 61.9231 41.3693C61.9248 41.4335 62.0204 41.3608 62.1356 41.2075C62.425 40.8231 62.6936 40.5524 62.9734 40.3633C63.104 40.2752 63.1551 40.2029 63.0872 40.2029C63.0192 40.2029 62.7288 40.4391 62.4418 40.7278ZM66.288 40.3562C66.3936 40.4372 66.5484 40.5534 66.6319 40.6147C66.7155 40.6758 66.9423 40.9321 67.1359 41.1845C67.3296 41.4366 67.488 41.6136 67.488 41.5772C67.488 41.4387 66.8206 40.6209 66.5407 40.4168C66.2148 40.1787 65.9849 40.1238 66.288 40.3562ZM33.312 40.5612C33.312 40.6145 33.3771 40.6824 33.4563 40.7126C33.5357 40.7428 33.7301 40.9694 33.8883 41.2166C34.0467 41.4637 34.176 41.621 34.176 41.5663C34.176 41.4437 33.6895 40.7727 33.4721 40.5952C33.384 40.5235 33.312 40.5082 33.312 40.5612ZM57.655 41.0177C57.6195 41.1569 57.6092 41.2893 57.6317 41.3116C57.6545 41.3339 57.7018 41.2384 57.7371 41.0989C57.7726 40.9597 57.7829 40.8274 57.7603 40.805C57.7375 40.7827 57.6903 40.8782 57.655 41.0177ZM24.343 41.2078C24.3075 41.347 24.2972 41.4793 24.3197 41.5017C24.3425 41.524 24.3898 41.4285 24.4251 41.289C24.4606 41.1498 24.4709 41.0174 24.4483 40.9951C24.4255 40.9728 24.3783 41.0683 24.343 41.2078ZM38.4243 41.581C38.4252 41.7901 38.4449 41.8645 38.468 41.7462C38.491 41.6281 38.49 41.457 38.466 41.366C38.442 41.2752 38.4231 41.3719 38.4243 41.581ZM57.5302 41.8186C57.5302 42.0539 57.5489 42.1501 57.5717 42.0325C57.5948 41.9149 57.5948 41.7224 57.5717 41.6048C57.5489 41.4872 57.5302 41.5834 57.5302 41.8186ZM61.7436 41.7752C61.6822 41.9085 61.6337 42.0691 61.6359 42.132C61.6378 42.1948 61.7033 42.1009 61.7813 41.923C61.9452 41.549 61.9107 41.4123 61.7436 41.7752ZM24.2163 42.0563C24.2172 42.2653 24.2369 42.3397 24.26 42.2214C24.283 42.1033 24.282 41.9322 24.258 41.8412C24.234 41.7505 24.2151 41.8472 24.2163 42.0563ZM34.1827 41.7892C34.2043 42.0361 34.3546 42.2454 34.3613 42.0382C34.3649 41.9237 34.3248 41.8034 34.272 41.7711C34.2192 41.7388 34.1791 41.7469 34.1827 41.7892ZM67.5507 41.9612C67.5826 42.118 67.6407 42.503 67.6793 42.8166L67.7499 43.3868L67.7556 42.9116C67.7587 42.6503 67.7007 42.2653 67.6268 42.0563C67.5382 41.8058 67.5123 41.7733 67.5507 41.9612ZM28.368 42.1038C28.3315 42.268 28.3217 42.4224 28.3462 42.4464C28.3707 42.4706 28.4182 42.354 28.452 42.1869C28.532 41.7908 28.4544 41.7141 28.368 42.1038ZM38.5306 42.8641C38.5306 43.3607 38.5469 43.5639 38.5666 43.3156C38.5863 43.0673 38.5863 42.661 38.5666 42.4127C38.5469 42.1644 38.5306 42.3675 38.5306 42.8641ZM57.4176 42.7769C57.4227 43.0601 57.462 43.527 57.5047 43.8145C57.5592 44.1809 57.5669 44.0388 57.5311 43.3393C57.4769 42.2825 57.4016 41.9092 57.4176 42.7769ZM34.3968 42.8641C34.3968 43.1516 34.4148 43.2692 34.4369 43.1255C34.4587 42.9817 34.4587 42.7465 34.4369 42.6027C34.4148 42.459 34.3968 42.5766 34.3968 42.8641ZM71.8378 42.9116C71.8383 43.2253 71.8563 43.3422 71.8776 43.1713C71.899 43.0005 71.8985 42.7439 71.8767 42.6011C71.8548 42.4583 71.8373 42.598 71.8378 42.9116ZM24.2182 43.6245C24.2182 43.8597 24.2369 43.9559 24.2597 43.8383C24.2828 43.7207 24.2828 43.5282 24.2597 43.4106C24.2369 43.293 24.2182 43.3892 24.2182 43.6245ZM28.3364 43.3868C28.3349 43.4914 28.3707 43.6625 28.416 43.767C28.5212 44.0091 28.5212 43.7594 28.416 43.4344C28.3544 43.2433 28.3385 43.2341 28.3364 43.3868ZM61.6402 43.557C61.6104 44.1726 62.9571 45.7337 63.4988 45.7111C63.5544 45.709 63.4488 45.6277 63.264 45.5305C62.5906 45.1772 61.9604 44.3981 61.7218 43.6245C61.6724 43.4638 61.646 43.442 61.6402 43.557ZM67.4659 43.8877C67.2564 44.4644 67.3208 44.5283 67.5396 43.9607C67.632 43.7212 67.6894 43.5071 67.6673 43.485C67.645 43.4629 67.5543 43.6442 67.4659 43.8877ZM38.4154 44.0529C38.3614 45.0582 37.4796 46.724 36.4587 47.7502C35.6403 48.5726 35.4888 48.8375 36.2501 48.1147C37.4698 46.9571 38.5795 44.9284 38.4682 44.06L38.4308 43.767L38.4154 44.0529ZM24.3072 44.2422C24.3072 44.3468 24.3418 44.5392 24.384 44.6699C24.445 44.8581 24.4608 44.8678 24.4608 44.7174C24.4608 44.6129 24.4263 44.4204 24.384 44.2897C24.3231 44.1016 24.3072 44.0918 24.3072 44.2422ZM33.9399 44.4375C33.6718 44.9303 32.8822 45.5339 32.2616 45.7204C32.1 45.7688 32.0748 45.7969 32.1879 45.8024C32.7303 45.828 34.4218 44.4064 34.1588 44.146C34.1372 44.1246 34.0388 44.2558 33.9399 44.4375ZM71.4132 45.032C71.2779 45.4341 71.1355 45.8484 71.0969 45.953C71.0515 46.0758 71.0796 46.059 71.1763 45.9055C71.3417 45.6424 71.7555 44.3962 71.6967 44.338C71.6763 44.3175 71.5486 44.63 71.4132 45.032ZM28.7067 44.3955C28.7004 44.5328 29.3127 45.1946 29.5954 45.3566L29.904 45.5334L29.5774 45.2587C29.3979 45.1076 29.1291 44.8384 28.98 44.6607C28.831 44.4827 28.7081 44.3634 28.7067 44.3955ZM57.6488 44.6699C57.7707 45.0693 58.0692 45.7688 58.0747 45.6679C58.081 45.5552 57.702 44.5485 57.6276 44.4798C57.5993 44.4537 57.6089 44.5392 57.6488 44.6699ZM66.8621 44.8743C66.6545 45.0912 66.2244 45.3903 65.9064 45.5393C65.5882 45.6883 65.3928 45.8088 65.472 45.8071C65.8493 45.7988 66.7083 45.2554 67.0551 44.8054C67.3903 44.3701 67.321 44.3948 66.8621 44.8743ZM24.486 45.0235C24.4584 45.5519 26.4322 48.4714 26.6628 48.2433C26.6878 48.2183 26.5519 48.0625 26.3609 47.8964C25.8411 47.4444 24.9708 46.092 24.5839 45.1347C24.5335 45.0097 24.4894 44.9598 24.486 45.0235ZM30.0048 45.6137C30.055 45.6622 30.2256 45.7285 30.384 45.7608C30.6711 45.8197 30.6708 45.8192 30.349 45.6726C29.9806 45.5046 29.8733 45.4861 30.0048 45.6137ZM31.08 45.8791C31.2516 45.9002 31.5324 45.9002 31.704 45.8791C31.8756 45.8582 31.7352 45.8408 31.392 45.8408C31.0488 45.8408 30.9084 45.8582 31.08 45.8791ZM58.08 45.834C58.08 45.9651 58.7523 47.0225 58.9155 47.1479C59.0784 47.2731 59.0794 47.27 58.9296 47.0918C58.8425 46.9882 58.6534 46.6896 58.5096 46.4282C58.2471 45.9506 58.08 45.7197 58.08 45.834ZM64.2939 45.8791C64.4643 45.9 64.7667 45.9005 64.9659 45.8798C65.1651 45.8591 65.0256 45.842 64.656 45.8416C64.2864 45.8411 64.1235 45.8579 64.2939 45.8791ZM53.2654 46.3401C53.4317 46.4223 53.568 46.5292 53.568 46.5777C53.568 46.6261 53.6328 46.6658 53.712 46.6658C53.7912 46.6658 53.856 46.7461 53.856 46.8443C53.856 46.9424 53.9208 47.0759 54 47.141C54.1584 47.271 54.2023 47.663 54.048 47.5687C53.9952 47.5364 53.952 47.4428 53.952 47.3606C53.952 47.1779 53.3194 46.5708 53.1293 46.5708C53.0537 46.5708 52.992 46.528 52.992 46.4757C52.992 46.4201 52.6702 46.3807 52.2183 46.3807C51.727 46.3807 51.4664 46.346 51.504 46.2856C51.601 46.1305 52.9234 46.1714 53.2654 46.3401ZM70.8358 46.4044C70.5754 46.8882 69.6375 47.9465 69.109 48.3528C68.4814 48.8354 68.3914 48.9502 68.8435 48.6909C69.4131 48.3645 71.2894 46.1906 71.0016 46.1906C70.9735 46.1906 70.8989 46.2868 70.8358 46.4044ZM51.3053 46.465C51.3632 46.5575 51.0509 46.6625 50.712 46.6646C50.5932 46.6653 50.496 46.7086 50.496 46.7609C50.496 46.8131 50.442 46.8545 50.376 46.8528C50.31 46.8511 50.3772 46.7442 50.5253 46.6152C50.7927 46.3826 51.2043 46.3032 51.3053 46.465ZM44.2752 46.5769C45.4471 46.8103 47.4437 47.8184 47.2037 48.056C47.1713 48.0884 46.8584 48.061 46.5084 47.9957C44.756 47.6683 43.3587 48.3091 42.6663 49.758C42.3579 50.4033 42.1829 50.4753 42.049 50.0118C41.5735 48.3675 42.1469 46.8041 43.308 46.5784C43.5389 46.5332 43.7367 46.4919 43.7472 46.4862C43.7578 46.4805 43.9954 46.5213 44.2752 46.5769ZM53.3465 46.9151C54.0401 47.468 54.3103 48.6223 54.0103 49.7499C53.8392 50.3934 53.7401 50.3829 53.3431 49.6801C52.5005 48.1881 51.3312 47.6721 49.5199 47.9926C48.5151 48.1706 48.5218 47.9565 49.5375 47.433C51.362 46.4931 52.6049 46.3239 53.3465 46.9151ZM59.6108 47.9225C59.9508 48.2739 60.2496 48.5412 60.2746 48.5165C60.2995 48.4918 60.301 48.4609 60.2777 48.4479C60.2544 48.4348 59.9556 48.1675 59.6136 47.8538L58.992 47.2836L59.6108 47.9225ZM76.7703 47.8776C76.746 47.9691 76.7264 47.8942 76.7264 47.7113C76.7264 47.5283 76.746 47.4535 76.7703 47.545C76.7943 47.6364 76.7943 47.7861 76.7703 47.8776ZM54.4368 49.5368C54.325 50.4749 54.246 50.257 54.2532 49.0309L54.2602 47.8538L54.3811 48.422C54.4546 48.7667 54.4764 49.2046 54.4368 49.5368ZM50.832 48.1865C50.8683 48.2447 50.7192 48.2815 50.448 48.2815C50.1768 48.2815 50.0278 48.2447 50.064 48.1865C50.0967 48.1342 50.2695 48.0914 50.448 48.0914C50.6266 48.0914 50.7994 48.1342 50.832 48.1865ZM52.0486 48.4443C52.578 48.8717 53.0907 49.4467 53.1495 49.6787C53.1799 49.7989 53.2433 49.8972 53.2903 49.8972C53.3376 49.8972 53.376 50.0068 53.376 50.1406C53.376 50.2784 53.3345 50.3582 53.28 50.3249C53.2272 50.2926 53.184 50.2045 53.184 50.1292C53.184 49.9873 52.8545 49.6128 52.728 49.6112C52.6884 49.6107 52.5835 49.4396 52.4952 49.231C52.4043 49.0167 52.2684 48.8518 52.1832 48.8518C52.0999 48.8518 52.032 48.809 52.032 48.7567C52.032 48.7045 51.9814 48.6617 51.9195 48.6617C51.8578 48.6617 51.734 48.5961 51.6447 48.5163C51.5554 48.4362 51.3843 48.3519 51.2643 48.329C50.8903 48.2578 50.9266 48.1865 51.3367 48.1865C51.6211 48.1865 51.8172 48.2575 52.0486 48.4443ZM26.8186 48.355C26.8944 48.4766 27.456 48.8881 27.456 48.8221C27.456 48.7986 27.2974 48.6596 27.1037 48.5132C26.9098 48.3668 26.7814 48.2955 26.8186 48.355ZM34.848 49.0069C34.452 49.2377 33.9984 49.4643 33.84 49.5107C33.6816 49.557 33.6286 49.5988 33.7224 49.6036C33.9288 49.614 35.0904 49.0454 35.424 48.7708C35.7644 48.4904 35.6655 48.531 34.848 49.0069ZM27.552 48.8898C27.552 48.9395 28.2152 49.327 28.2999 49.327C28.3354 49.327 28.2055 49.2201 28.0114 49.0894C27.6713 48.8606 27.552 48.8088 27.552 48.8898ZM60.9099 48.9435C60.9732 49.0447 61.5526 49.3422 61.5984 49.2968C61.6157 49.28 61.4556 49.174 61.2427 49.0616C61.0301 48.9492 60.8803 48.896 60.9099 48.9435ZM50.4908 49.6931C50.4286 49.7136 50.3504 49.6898 50.317 49.6406C50.2834 49.5912 50.1708 49.5195 50.0667 49.4812C49.9097 49.4237 49.9013 49.3973 50.0172 49.3263C50.1142 49.2669 50.2255 49.3044 50.3803 49.4482C50.5183 49.5767 50.5606 49.6701 50.4908 49.6931ZM62.0828 49.5173C62.3043 49.6231 62.6283 49.7321 62.8028 49.7594C63.0056 49.791 62.9295 49.7435 62.592 49.6276C61.7237 49.3291 61.6613 49.3156 62.0828 49.5173ZM67.1326 49.4605C66.9636 49.5214 66.7959 49.6005 66.7596 49.6364C66.6706 49.7245 67.2384 49.5594 67.4571 49.4337C67.68 49.3051 67.5286 49.3177 67.1326 49.4605ZM33.072 49.7226C32.9136 49.7744 32.4168 49.85 31.968 49.8906L31.152 49.9643L31.776 49.9771C32.3352 49.9887 33.3413 49.8051 33.4819 49.6656C33.5571 49.5914 33.4116 49.6116 33.072 49.7226ZM29.904 49.8554C30.2208 49.926 30.6096 49.9818 30.768 49.979C30.9264 49.9764 30.7536 49.9174 30.384 49.8481C29.5087 49.6841 29.161 49.6893 29.904 49.8554ZM51.7023 50.3518C52.4333 50.9551 53.1999 51.4545 53.5599 51.5617C53.6875 51.5997 53.8966 51.7539 54.0245 51.9045C54.1524 52.0552 54.3288 52.1814 54.4167 52.1852C54.5043 52.189 54.7056 52.274 54.864 52.3743C55.0224 52.4743 55.2168 52.5827 55.296 52.615C55.3752 52.6471 55.668 52.7758 55.9467 52.9011C56.2253 53.0263 56.49 53.1287 56.5349 53.1287C56.5798 53.1287 56.6703 53.1928 56.736 53.2713C56.8018 53.3497 56.9583 53.4138 57.0838 53.4138C57.2093 53.4138 57.312 53.4566 57.312 53.5089C57.312 53.5611 57.3989 53.6039 57.5052 53.6039C57.6991 53.6039 57.7584 53.626 58.3517 53.9204C58.5276 54.0078 58.7357 54.0791 58.8139 54.0791C58.8922 54.0791 59.202 54.1955 59.5023 54.3379C59.8025 54.4802 60.156 54.6249 60.288 54.6593C60.516 54.7188 60.5131 54.7226 60.2352 54.7332C60.0742 54.7394 59.9014 54.7092 59.8512 54.6662C59.8011 54.6232 59.5008 54.5101 59.184 54.4153C58.4892 54.2069 58.3306 54.1511 57.8607 53.9496C57.661 53.8641 57.4126 53.794 57.3087 53.794C57.205 53.794 57.12 53.7512 57.12 53.6989C57.12 53.6467 57.0444 53.6025 56.952 53.6008C56.8596 53.5992 56.7003 53.535 56.5978 53.4582C56.4951 53.3815 56.3331 53.3188 56.2378 53.3188C56.1423 53.3188 56.064 53.276 56.064 53.2237C56.064 53.1715 55.9807 53.1287 55.879 53.1287C55.777 53.1287 55.6289 53.0645 55.5497 52.9861C55.4705 52.9077 55.3162 52.8436 55.207 52.8436C55.0976 52.8436 55.008 52.8082 55.008 52.7647C55.008 52.7214 54.7164 52.5423 54.36 52.3667C54.0036 52.1911 53.6904 52.0219 53.664 51.9908C53.6376 51.9599 53.3136 51.7584 52.944 51.5431C52.5744 51.3281 52.1619 51.0513 52.027 50.9285C51.8924 50.8056 51.6164 50.5768 51.414 50.42C51.2117 50.2632 50.9549 50.061 50.8431 49.9707L50.64 49.8065L50.8383 49.8043C50.9472 49.8032 51.336 50.0496 51.7023 50.3518ZM63.312 49.902C63.4176 49.9443 63.7632 49.9785 64.08 49.978C64.8039 49.9771 64.6699 49.9262 63.792 49.869C63.4015 49.8435 63.2004 49.8573 63.312 49.902ZM65.232 49.8972C64.7683 49.9602 64.765 49.9628 65.136 49.9719C65.3472 49.9771 65.6928 49.946 65.904 49.9027C66.3941 49.8024 65.9568 49.7989 65.232 49.8972ZM21.312 50.9902C21.41 51.1069 21.4032 51.1328 21.2758 51.1328C21.1901 51.1328 21.12 51.0686 21.12 50.9902C21.12 50.9118 21.1364 50.8477 21.1563 50.8477C21.1762 50.8477 21.2463 50.9118 21.312 50.9902ZM73.4321 52.7754C73.41 52.7901 73.3164 52.8595 73.224 52.9296C73.0803 53.0386 73.056 53.0346 73.056 52.9027C73.056 52.8079 73.1362 52.7485 73.2641 52.7485C73.3783 52.7485 73.454 52.7606 73.4321 52.7754ZM51.2986 54.1238C51.5024 54.3084 51.7011 54.4593 51.7399 54.4593C51.7788 54.4593 51.9663 54.609 52.1566 54.7919C52.3469 54.9749 52.5459 55.1246 52.5989 55.1246C52.652 55.1246 52.7945 55.223 52.916 55.3429C53.0372 55.4632 53.2013 55.5912 53.2803 55.6276C53.4497 55.7055 53.7876 55.9122 53.856 55.98C53.9038 56.027 54.3315 56.2637 54.84 56.5241C54.9852 56.5985 55.104 56.6987 55.104 56.7472C55.104 56.7957 55.1904 56.8353 55.296 56.8353C55.4016 56.8353 55.4885 56.8674 55.489 56.9066C55.4895 56.9458 55.6839 57.0623 55.921 57.1656C56.1581 57.2687 56.352 57.3864 56.352 57.427C56.352 57.4674 56.4048 57.5006 56.4694 57.5006C56.5668 57.5006 57.6991 58.0179 58.8797 58.6017C59.0292 58.6756 59.2272 58.7362 59.3199 58.7362C59.4123 58.7362 59.5188 58.7666 59.5565 58.8039C59.6626 58.9089 60.5081 59.2112 60.696 59.2114C60.7884 59.2114 60.864 59.2542 60.864 59.3064C60.864 59.3587 60.9612 59.4017 61.08 59.402C61.1988 59.4024 61.4199 59.4666 61.5711 59.5445C61.7223 59.6227 62.0139 59.6866 62.2191 59.6866C62.4243 59.6866 62.592 59.7253 62.592 59.7726C62.592 59.8201 62.808 59.8883 63.072 59.9242C63.3358 59.9601 63.576 60.0283 63.6056 60.0756C63.6351 60.1231 63.8909 60.1618 64.1736 60.1618C64.459 60.1618 64.7036 60.2079 64.7228 60.2652C64.7424 60.3234 65.1135 60.3902 65.5709 60.418C66.018 60.4451 66.4102 60.5085 66.4421 60.5591C66.5148 60.6746 70.3632 60.5988 71.2229 60.465C72.1704 60.3175 72.2528 60.4638 71.328 60.6522C70.4016 60.8409 68.0765 60.8792 66.96 60.724C66.5904 60.6727 66.086 60.634 65.839 60.6382C65.592 60.6425 65.1384 60.5824 64.831 60.5049C64.5235 60.4275 64.0776 60.3429 63.84 60.3172C63.271 60.2554 62.7127 60.1103 62.5589 59.9841C62.491 59.928 62.287 59.8731 62.1056 59.862C61.9244 59.8506 61.6908 59.7852 61.5867 59.7166C61.4825 59.6479 61.2773 59.5916 61.1307 59.5916C60.984 59.5916 60.864 59.5488 60.864 59.4965C60.864 59.4443 60.7426 59.4015 60.5943 59.4015C60.4462 59.4015 60.241 59.3388 60.1383 59.262C60.0358 59.1853 59.8359 59.1211 59.6938 59.1195C59.5517 59.1178 59.4087 59.0736 59.376 59.0213C59.3434 58.969 59.2138 58.9263 59.088 58.9263C58.9623 58.9263 58.8327 58.8835 58.8 58.8312C58.7674 58.779 58.6812 58.7362 58.6085 58.7362C58.4259 58.7362 58.1011 58.5924 57.648 58.3109C57.4368 58.1795 57.1992 58.0483 57.12 58.0191C57.0408 57.9901 56.8464 57.8967 56.688 57.8121C56.5296 57.7273 56.0967 57.5042 55.7261 57.3163C55.3553 57.1281 54.9233 56.8895 54.7661 56.7857C54.6087 56.6821 54.2691 56.4903 54.0111 56.3599C53.7531 56.2294 53.5239 56.0584 53.5018 55.98C53.4797 55.9016 53.2911 55.7557 53.0827 55.6559C52.8744 55.5558 52.704 55.442 52.704 55.4028C52.704 55.3636 52.5204 55.2422 52.296 55.1331C52.0716 55.0238 51.7839 54.8252 51.6567 54.6914C51.5295 54.5579 51.2945 54.3813 51.1344 54.2996C50.8102 54.1335 50.4895 53.7861 50.5587 53.6754C50.6191 53.5785 50.8527 53.7201 51.2986 54.1238ZM35.756 53.9907C35.6847 54.1048 35.424 54.106 35.424 53.9919C35.424 53.889 35.6323 53.8018 35.7377 53.861C35.778 53.8836 35.7862 53.942 35.756 53.9907ZM60.864 54.3873C60.864 54.427 60.7992 54.4593 60.72 54.4593C60.6408 54.4593 60.576 54.4165 60.576 54.3642C60.576 54.312 60.4726 54.2692 60.3463 54.2692C60.2199 54.2692 60.0944 54.2117 60.067 54.1416C60.0279 54.0404 60.1052 54.0451 60.4409 54.1647C60.6735 54.2473 60.864 54.3476 60.864 54.3873ZM26.016 54.2692C26.016 54.3821 25.8492 54.3821 25.584 54.2692C25.4232 54.2008 25.4427 54.1865 25.704 54.1808C25.8756 54.1772 26.016 54.2169 26.016 54.2692ZM70.368 54.6018C70.3023 54.6803 70.1458 54.7444 70.0203 54.7444C69.8948 54.7444 69.792 54.7872 69.792 54.8395C69.792 54.8917 69.7219 54.9345 69.6363 54.9345C69.5088 54.9345 69.5021 54.9086 69.6 54.7919C69.6658 54.7135 69.798 54.6494 69.894 54.6494C69.99 54.6494 70.0954 54.6066 70.128 54.5543C70.1607 54.5021 70.255 54.4593 70.3375 54.4593C70.4599 54.4593 70.4657 54.4854 70.368 54.6018ZM72.2388 54.8376C72.2715 54.8896 72.1255 54.958 71.9086 54.9922C71.6947 55.0262 71.52 55.0911 71.52 55.1367C71.52 55.1823 71.3957 55.2196 71.2438 55.2196C71.0919 55.2196 70.8123 55.2838 70.6229 55.3622C70.4333 55.4406 70.05 55.5009 69.7712 55.4962C69.2744 55.4879 69.271 55.4857 69.6 55.3978C69.7848 55.3484 70.0224 55.2698 70.128 55.2227C70.2864 55.1526 70.9798 55.0298 71.2544 55.0234C71.293 55.0224 71.4658 54.9611 71.6384 54.8867C72.0142 54.7252 72.1611 54.713 72.2388 54.8376ZM69 55.668C68.8548 55.6896 68.6172 55.6896 68.472 55.668C68.3268 55.6461 68.4456 55.6283 68.736 55.6283C69.0264 55.6283 69.1452 55.6461 69 55.668ZM80.4761 56.2413C80.442 56.3328 80.3136 56.5671 80.191 56.7622C80.0684 56.9572 79.968 57.1818 79.968 57.2611C79.968 57.3405 79.9277 57.4056 79.8785 57.4056C79.8293 57.4056 79.7631 57.4866 79.7312 57.5859C79.6995 57.685 79.5238 57.9233 79.3407 58.1153C79.1578 58.3076 79.008 58.4924 79.008 58.5261C79.008 58.6423 77.7476 59.7584 77.4178 59.9342C77.2364 60.0309 77.088 60.1431 77.088 60.1834C77.088 60.2238 76.5454 60.2569 75.8823 60.2569C75.103 60.2569 74.6976 60.2234 74.736 60.1618C74.7687 60.1096 74.9787 60.0668 75.2026 60.0668C75.4265 60.0668 75.6569 60.02 75.7145 59.963C75.7904 59.8879 75.8784 59.8905 76.0328 59.9722C76.4772 60.2077 77.952 59.6196 77.952 59.2071C77.952 59.1572 78.0039 59.1164 78.0675 59.1164C78.1978 59.1164 79.008 58.2976 79.008 58.1659C79.008 58.1189 79.062 58.0462 79.128 58.0044C79.3479 57.8651 79.5005 57.4883 79.4427 57.2276C79.3954 57.0147 79.4398 56.9313 79.7009 56.7413C79.8742 56.6148 80.0948 56.4134 80.191 56.2934C80.3976 56.0353 80.5642 56.0049 80.4761 56.2413ZM79.392 57.3087C79.392 57.36 79.284 57.4289 79.152 57.4617C79.02 57.4945 78.912 57.5593 78.912 57.6059C78.912 57.6527 78.8715 57.6907 78.822 57.6907C78.7723 57.6907 78.5957 57.8138 78.4292 57.9644C78.2626 58.1151 78.0116 58.2957 77.8712 58.3658C77.731 58.4361 77.5169 58.5665 77.3955 58.6559C77.2743 58.745 77.0475 58.8457 76.8915 58.8797C76.7357 58.9137 76.608 58.9774 76.608 59.0213C76.608 59.0653 76.4789 59.1294 76.3212 59.1636C76.1633 59.1979 76.0095 59.2656 75.9795 59.3138C75.9492 59.362 75.8192 59.4015 75.6903 59.4015C75.5614 59.4015 75.456 59.4435 75.456 59.4946C75.456 59.546 75.3372 59.6141 75.192 59.6462C75.0468 59.6783 74.7871 59.7669 74.6151 59.843C74.4427 59.9192 74.2592 59.9556 74.2071 59.9235C74.1548 59.8917 74.112 59.9043 74.112 59.9518C74.112 60.105 73.3731 60.3426 73.2562 60.2269C73.0779 60.0504 73.1379 59.9955 73.5819 59.9294C73.8183 59.8945 74.0367 59.8254 74.0674 59.7762C74.0981 59.727 74.2721 59.6866 74.4538 59.6866C74.6355 59.6866 74.784 59.6457 74.784 59.5958C74.784 59.546 74.9352 59.477 75.12 59.4428C75.3048 59.4084 75.456 59.3423 75.456 59.2958C75.456 59.2494 75.5856 59.2114 75.744 59.2114C75.9024 59.2114 76.032 59.1693 76.032 59.1183C76.032 59.0669 76.14 58.998 76.272 58.9652C76.404 58.9325 76.5125 58.8783 76.5132 58.8448C76.5137 58.811 76.6973 58.6989 76.9212 58.5951C77.1449 58.4912 77.3496 58.3843 77.376 58.3574C77.4694 58.2624 77.8102 58.0647 77.976 58.0096C78.0684 57.9787 78.144 57.921 78.144 57.8808C78.144 57.8407 78.2196 57.7829 78.312 57.752C78.5043 57.6881 78.7956 57.5078 78.9869 57.3343C79.1427 57.1929 79.392 57.1773 79.392 57.3087ZM53.9681 58.0633C53.9856 58.1113 54.1944 58.1709 54.432 58.1954C54.8657 58.2405 56.1682 58.5891 56.4603 58.7383C56.5462 58.7823 56.773 58.8474 56.9643 58.8828C57.1555 58.9184 57.312 58.9854 57.312 59.032C57.312 59.0783 57.4606 59.1164 57.6423 59.1164C57.8239 59.1164 57.9994 59.1591 58.032 59.2114C58.0647 59.2637 58.2077 59.3062 58.3498 59.306C58.6339 59.3055 59.4235 59.5414 59.8229 59.746C59.9631 59.818 60.2067 59.8767 60.3646 59.8767C60.5297 59.8767 60.6747 59.9366 60.7061 60.0176C60.7385 60.1015 60.8237 60.1347 60.9156 60.0998C61.0011 60.0673 61.3157 60.1148 61.6155 60.2051C61.915 60.2956 62.2896 60.4025 62.448 60.4429C62.6064 60.4833 62.9088 60.5608 63.12 60.6149C63.3312 60.6694 63.841 60.7898 64.2531 60.8827C64.6652 60.9756 65.024 61.0866 65.0508 61.1294C65.1221 61.2439 64.28 61.2246 64.1631 61.1089C64.0733 61.0201 63.6197 60.9129 62.6885 60.7606C62.5037 60.7304 62.2661 60.6539 62.1605 60.5905C62.0547 60.5268 61.7088 60.4208 61.392 60.3545C61.0752 60.2882 60.6799 60.1751 60.5136 60.1029C60.3471 60.0307 60.1325 59.9717 60.0363 59.9717C59.754 59.9717 58.848 59.7444 58.848 59.6733C58.848 59.6377 58.6752 59.5795 58.464 59.5441C58.2528 59.5087 58.08 59.4409 58.08 59.3932C58.08 59.3454 57.8856 59.3064 57.648 59.3064C57.4104 59.3064 57.216 59.2675 57.216 59.2197C57.216 59.172 57.0435 59.1042 56.8325 59.0688C56.6216 59.0337 56.4247 58.9657 56.3947 58.918C56.365 58.8702 56.1946 58.8312 56.016 58.8312C55.8375 58.8312 55.6671 58.7923 55.6373 58.7445C55.6073 58.6967 55.4107 58.6288 55.2 58.5936C54.9893 58.5585 54.7927 58.4905 54.7627 58.4427C54.733 58.395 54.5491 58.3536 54.3543 58.3508C54.1594 58.3477 53.8056 58.2645 53.568 58.1659L53.136 57.9865L53.5361 57.9811C53.7559 57.9782 53.9504 58.0153 53.9681 58.0633ZM72.9898 60.2654C72.8412 60.4125 72.2691 60.4237 72.2182 60.2806C72.1882 60.1963 72.3094 60.1618 72.6353 60.1618C72.9667 60.1618 73.0654 60.1906 72.9898 60.2654ZM74.5378 60.3419C74.5985 60.4391 74.3758 60.542 74.1041 60.542C74.0028 60.542 73.92 60.5848 73.92 60.637C73.92 60.6893 73.8523 60.7321 73.7695 60.7321C73.687 60.7321 73.4777 60.839 73.3047 60.9697C73.1314 61.1004 72.9653 61.2073 72.9351 61.2073C72.9048 61.2073 72.6948 61.3784 72.4683 61.5875L72.0564 61.9676L70.4203 61.9607C69.5203 61.9569 68.5464 61.9125 68.256 61.8621C67.9656 61.8118 67.4472 61.7462 67.104 61.7165C66.7608 61.6868 66.439 61.6243 66.3888 61.5775C66.3387 61.5307 66.1155 61.4924 65.8928 61.4924C65.4216 61.4924 65.1627 61.4133 65.2383 61.2924C65.3218 61.1586 65.6547 61.1892 66.9763 61.453C67.9265 61.6426 68.6182 61.711 70.0016 61.7519L71.7948 61.8051L72.0968 61.5062C72.2628 61.3418 72.4536 61.2073 72.5206 61.2073C72.5876 61.2073 72.7205 61.1218 72.816 61.0172C72.9115 60.9127 73.0642 60.8271 73.1551 60.8271C73.2461 60.8271 73.3743 60.763 73.44 60.6846C73.5058 60.6061 73.6361 60.542 73.7295 60.542C73.8231 60.542 73.9243 60.4778 73.9548 60.3994C74.0143 60.2455 74.4507 60.2025 74.5378 60.3419ZM52.512 64.1446C52.0632 64.294 51.4152 64.4905 51.072 64.5811C50.7288 64.6718 50.2784 64.808 50.0708 64.8835C49.8632 64.9593 49.453 65.0102 49.159 64.9966C48.3055 64.9574 48.4107 65.2414 49.704 66.4674C50.4368 67.1622 50.4382 67.1919 49.7578 67.6944C48.4604 68.6527 48.3833 69.1048 49.0798 71.6719C49.3613 72.7105 49.0272 73.2777 48.1339 73.2777C47.8733 73.2777 46.9776 74.2557 46.795 74.7399C46.6229 75.1963 46.7571 76.2627 47.0357 76.6517C47.0731 76.704 47.1792 77.1103 47.2716 77.5546C47.682 79.5277 47.9081 80.12 48.4517 80.6432C49.0971 81.2646 49.2276 81.2736 51.12 80.8267C52.8607 80.4156 53.3201 80.4907 53.6451 81.2387C53.9153 81.8607 53.9938 81.8766 54.7052 81.453C55.8749 80.7563 56.4509 79.8527 57.0377 77.7922C57.1419 77.4263 57.3399 76.8917 57.4776 76.6042C58.1909 75.1151 58.1844 74.7561 57.432 74.0653C56.1072 72.8488 55.0498 72.6397 53.2176 73.2318C52.8161 73.3616 52.3311 73.4687 52.1398 73.4701C51.6427 73.4735 51.0288 73.6284 50.4195 73.9042C50.1291 74.0359 49.7724 74.167 49.6272 74.1958C49.2665 74.2673 48.738 74.8466 48.5355 75.3924C48.3144 75.9888 48.2228 75.9802 47.7768 75.3228C47.0427 74.2405 48.2717 73.0719 49.8147 73.3853C50.3372 73.4915 50.3746 73.4846 51.168 73.1361C51.6168 72.9391 52.1201 72.7191 52.2864 72.6475C52.453 72.576 52.6906 72.5169 52.8144 72.5164C53.5973 72.5128 54.3627 72.0763 54.523 71.542C54.7651 70.7355 54.925 70.344 55.0563 70.2363C55.5411 69.8379 55.3956 69.1764 54.6355 68.3226C53.8234 67.4109 53.2915 67.4128 51.696 68.334C49.8715 69.3876 49.3409 69.4757 49.3455 68.7247C49.3476 68.3538 50.1032 67.7289 50.9256 67.4176C55.4307 65.713 55.8763 65.3623 54.8736 64.3114C54.3391 63.7513 53.8064 63.7138 52.512 64.1446ZM43.416 64.0788C42.8083 64.2011 42.8047 64.2244 43.3402 64.5602C43.9707 64.9555 44.736 65.6691 44.736 65.8615C44.736 66.077 44.6499 66.1426 43.7936 66.5777C42.9632 66.9997 42.9634 67.2301 43.7938 66.9595C44.5306 66.7193 45.3252 66.7483 46.1062 67.0438C47.16 67.4428 47.6184 67.2125 47.6136 66.2868C47.6062 64.7944 45.4623 63.6668 43.416 64.0788ZM29.7739 65.3911C27.5405 66.3246 26.7819 71.5135 28.3109 75.3988C29.6151 78.7132 32.0907 81.1391 35.5848 82.5272C37.04 83.1055 37.7496 82.8877 37.128 82.0539C37.0092 81.8945 36.8256 81.6457 36.72 81.5007C36.6144 81.3558 36.4407 81.1251 36.3339 80.988C34.7151 78.9082 32.6844 74.5831 32.1644 72.1068C32.1183 71.8882 32.0143 71.4101 31.9332 71.0442C31.74 70.1743 31.6047 69.1433 31.4837 67.6227C31.3234 65.6075 30.8218 64.9529 29.7739 65.3911ZM65.2853 65.4146C64.8372 65.6391 64.7095 66.0262 64.5528 67.635C64.4002 69.2046 64.3124 69.8923 64.1422 70.8541C63.8415 72.5525 63.0005 75.0718 62.1103 76.9404C61.3291 78.5801 60.5083 79.9157 59.3472 81.4373C58.0961 83.0761 58.9083 83.3008 61.536 82.0432C66.0927 79.8622 68.8227 75.1738 68.4936 70.0938C68.2947 67.0206 66.7056 64.703 65.2853 65.4146ZM21.168 67.8061C17.6837 69.0671 20.5848 76.4129 25.632 79.1095C25.8168 79.2081 26.2392 79.4333 26.5704 79.6099C27.6511 80.1854 28.3104 79.7125 27.4481 78.9802C26.7847 78.4169 25.0563 74.6111 24.6207 72.7549C24.4855 72.1799 24.3341 71.5548 24.2837 71.3659C24.2333 71.1768 24.192 70.9356 24.192 70.8299C24.192 70.4266 23.6948 68.9632 23.4128 68.537C22.916 67.7854 22.0258 67.4958 21.168 67.8061ZM73.6159 67.7586C72.6742 68.057 72.2539 68.8352 71.7648 71.1867C71.1209 74.2823 70.3584 76.2045 68.838 78.5646C67.6928 80.3427 68.4051 80.4249 70.944 78.808C72.9024 77.5608 75.84 74.0974 75.84 73.0358C75.84 73.0063 75.9315 72.7835 76.0431 72.5406C77.192 70.0441 75.6972 67.099 73.6159 67.7586ZM14.7197 68.8874C12.3368 69.8462 13.0479 72.927 16.2224 75.3995C16.5665 75.6675 16.8696 75.9092 16.896 75.9365C17.1108 76.1594 19.3464 77.4973 19.6781 77.6014C20.2853 77.7922 20.2908 77.193 19.6872 76.6198C18.072 75.0868 17.2054 73.3181 16.7664 70.6593C16.5022 69.0604 15.8002 68.4526 14.7197 68.8874ZM80.1586 68.8919C79.6891 69.1391 79.4381 69.6397 79.2521 70.6999C78.7803 73.3896 77.9852 74.9953 76.3469 76.568C75.126 77.7404 76.1866 77.925 77.8236 76.8251C78.0046 76.7037 78.1755 76.6042 78.2036 76.6042C78.3622 76.6042 80.3374 75.0065 81.0812 74.2763C82.861 72.5292 83.2335 70.6436 82.0445 69.399C81.4604 68.7874 80.7298 68.5909 80.1586 68.8919ZM43.6711 69.116C43.4815 69.2355 43.1602 69.4784 42.9569 69.6554C42.7539 69.8322 42.2393 70.1382 41.8138 70.3349C39.2703 71.5111 39.3046 71.5023 38.5035 71.1896C37.8499 70.9346 37.8202 71.0596 38.3383 71.8829C39.6619 73.9853 40.838 74.1459 42.8081 72.4929C43.4302 71.9708 43.4688 72.5026 42.888 73.5949C42.4687 74.3835 41.676 75.2624 40.464 76.2824L39.888 76.7672L39.9063 77.4222C39.9269 78.1764 40.0942 78.6355 40.4801 78.998C41.1588 79.6353 41.5356 79.5037 42.3233 78.3541C42.8256 77.6211 43.0582 77.3645 43.2202 77.3645C43.2641 77.3645 43.2881 78.252 43.2739 79.3366C43.2487 81.2591 43.2535 81.3178 43.4719 81.6652C43.8024 82.1915 44.2556 82.1176 44.4912 81.4988C44.5311 81.3943 44.5783 80.4748 44.5966 79.4554C44.6146 78.4361 44.6532 77.0889 44.6823 76.4616L44.7353 75.3211L46.0954 72.6124C46.8435 71.1226 47.5584 69.7647 47.6847 69.5948C47.8486 69.3738 47.8887 69.2419 47.826 69.131C47.7557 69.0067 47.5174 69.2693 46.6248 70.4535C45.1503 72.4104 45.0271 72.4613 45.6372 70.8596C46.0001 69.907 45.984 69.6936 45.516 69.2495C45.1224 68.8763 44.1615 68.8066 43.6711 69.116ZM52.9906 69.8291C52.9925 70.2137 52.3145 70.8971 51.5907 71.24C50.9371 71.5498 50.9208 71.5453 50.6343 70.9853C50.2327 70.2012 50.3604 69.9944 51.4241 69.706C51.732 69.6224 52.1784 69.5007 52.416 69.4356C52.9095 69.3004 52.9882 69.3541 52.9906 69.8291ZM55.0755 74.6874C55.4084 75.1196 55.4662 75.4508 55.3008 75.9797C55.2504 76.1401 55.1381 76.6778 55.051 77.1744C54.9639 77.671 54.7947 78.3767 54.6749 78.7426C54.5554 79.1085 54.4292 79.5255 54.3948 79.6693C54.3106 80.0219 54.1073 79.9984 53.8755 79.6092C53.7406 79.383 53.5601 79.2471 53.2659 79.1503C52.4381 78.8783 52.6577 78.0153 53.6863 77.4969C54.5206 77.0765 54.4224 76.0629 53.52 75.7775C52.8732 75.5732 53.0859 75.0314 54.0211 74.5004C54.6022 74.1706 54.6893 74.186 55.0755 74.6874ZM50.2995 75.1429C51.8112 75.481 51.3598 76.8508 49.752 76.8045C49.3517 76.7928 49.344 76.7988 49.344 77.1074C49.344 77.6206 50.3057 78.3149 51.0166 78.3149C51.1942 78.3149 51.3087 78.955 51.1623 79.1297C51.0435 79.2715 49.9304 79.6455 49.6275 79.6455C49.392 79.6455 49.3505 79.5631 49.1336 78.6609C48.5652 76.2981 48.5688 75.8654 49.1619 75.2786C49.5056 74.9383 49.4263 74.9478 50.2995 75.1429Z", fill: "#ECC28A" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M60.6719 19.2876C60.2295 19.3876 60.346 19.4026 61.4639 19.3891C62.17 19.3805 62.4522 19.414 62.6132 19.5257C62.7306 19.6072 62.9898 19.6737 63.1892 19.6737C63.3887 19.6737 63.5519 19.7082 63.5519 19.7505C63.5519 19.8655 64.2527 20.1489 64.5371 20.1489C64.6748 20.1489 65.109 20.3609 65.5105 20.6241C65.9091 20.8855 66.2725 21.0994 66.3181 21.0994C66.3635 21.0994 66.5912 21.2899 66.8243 21.5228C67.5395 22.238 67.6489 22.3349 67.7401 22.3349C67.7886 22.3349 67.9096 22.4846 68.0092 22.6676C68.1088 22.8505 68.2374 23.0007 68.295 23.0014C68.3526 23.0019 68.4839 23.176 68.5868 23.3884C68.7719 23.7712 68.955 24.0264 69.285 24.3622C69.4911 24.572 69.1823 24.9011 68.7788 24.9011C68.656 24.9011 68.5285 24.9438 68.4959 24.9961C68.4632 25.0484 68.3202 25.0926 68.1781 25.0945C68.036 25.0964 67.8119 25.1591 67.6799 25.2337C67.5479 25.3083 67.3247 25.371 67.1838 25.3729C67.0432 25.3748 66.9135 25.4083 66.8958 25.4475C66.86 25.5274 65.8494 26.0454 65.7339 26.043C65.6934 26.0423 65.4889 26.1485 65.2799 26.2792C65.0708 26.4098 64.8515 26.5168 64.7924 26.5168C64.7336 26.5168 64.4891 26.6878 64.2491 26.8969C64.0091 27.106 63.7542 27.2771 63.6824 27.2771C63.6107 27.2771 63.5519 27.3199 63.5519 27.3722C63.5519 27.4244 63.4931 27.4672 63.4211 27.4672C63.2552 27.4672 62.0526 28.3858 61.6477 28.8216C61.5627 28.913 61.4523 28.9879 61.4027 28.9879C61.2779 28.9879 59.9999 29.9573 59.9999 30.0519C59.9999 30.0939 59.9492 30.1284 59.8873 30.1284C59.8256 30.1284 59.6958 30.1994 59.5988 30.2862C59.5019 30.3731 59.3982 30.4199 59.3684 30.3902C59.2907 30.3132 59.6346 29.9383 59.7831 29.9383C59.8518 29.9383 59.9569 29.8321 60.0164 29.7026C60.0762 29.5729 60.2007 29.4429 60.2936 29.4137C60.488 29.3526 60.6239 29.0829 60.4602 29.0829C60.3999 29.0829 60.1098 29.2892 59.8153 29.541C59.5208 29.7931 59.1541 30.1032 59.0003 30.2301C58.8464 30.3572 58.6043 30.5786 58.4619 30.7224C58.3196 30.8662 58.1739 30.9838 58.1382 30.9838C58.1024 30.9838 57.7398 31.2527 57.3325 31.5816C56.9252 31.9102 56.366 32.346 56.09 32.5498C55.2025 33.2051 55.8414 33.0296 56.9115 32.3243C57.1974 32.1359 57.5447 31.9223 57.6836 31.8496C57.8802 31.7465 58.454 31.3637 58.9336 31.0156C58.9542 31.0006 58.9165 30.9232 58.8498 30.8436C58.7667 30.7445 58.7624 30.6986 58.8361 30.6986C58.8954 30.6986 58.9439 30.7443 58.9439 30.8001C58.9439 30.9013 59.3267 30.8286 59.4239 30.7091C59.5381 30.5684 60.1883 30.1284 60.2814 30.1284C60.3378 30.1284 60.3839 30.0892 60.3839 30.0412C60.3839 29.9932 60.5243 29.8675 60.6959 29.7622C60.8675 29.657 61.0955 29.4897 61.2023 29.3906C61.3093 29.2913 61.5253 29.1281 61.6823 29.0278C61.965 28.8472 62.1392 28.7094 62.7229 28.2052C62.8885 28.0624 63.0582 27.9448 63.0999 27.9438C63.1419 27.9431 63.2927 27.8355 63.435 27.7048C63.5775 27.5741 63.7484 27.4672 63.8149 27.4672C63.8814 27.4672 63.9359 27.4294 63.9359 27.3833C63.9359 27.337 64.0115 27.2735 64.1039 27.2419C64.1963 27.2106 64.4231 27.0932 64.6079 26.9813C64.7927 26.8696 65.0737 26.7085 65.2323 26.6237C65.391 26.5386 65.6567 26.373 65.823 26.2554C65.9893 26.1378 66.1945 26.0416 66.2787 26.0416C66.363 26.0416 66.4319 26.0021 66.4319 25.9541C66.4319 25.9059 66.5708 25.8363 66.7407 25.7994C66.9107 25.7624 67.1159 25.6999 67.1967 25.6604C67.5488 25.4884 67.845 25.3832 68.1359 25.3268C68.3075 25.2933 68.4479 25.2268 68.4479 25.1786C68.4479 25.1306 68.6211 25.0911 68.8331 25.0911C69.045 25.0911 69.2934 25.0515 69.3851 25.003C69.4768 24.9545 69.6255 24.8925 69.7155 24.8649C69.9291 24.8001 68.5952 22.7956 68.2319 22.636C68.1923 22.6184 68.1599 22.5435 68.1599 22.4696C68.1599 22.3955 68.0951 22.3349 68.0159 22.3349C67.9367 22.3349 67.8716 22.3028 67.8714 22.2636C67.8692 21.969 66.3654 20.7572 65.4239 20.2915C65.2127 20.1869 65.0255 20.0693 65.0079 20.0301C64.9902 19.9909 64.8368 19.9588 64.6671 19.9588C64.4972 19.9588 64.3079 19.9089 64.2462 19.8479C64.0664 19.6699 63.441 19.4867 63.0078 19.4851C62.7879 19.4843 62.5923 19.4375 62.5734 19.381C62.5302 19.2529 61.1293 19.184 60.6719 19.2876ZM59.3279 19.5561C59.3279 19.596 59.0391 19.7103 58.6863 19.8106C58.3335 19.9106 57.8559 20.0917 57.6253 20.2133C57.3944 20.3347 57.1467 20.4341 57.0747 20.4341C57.0027 20.4341 56.9295 20.4661 56.9118 20.5053C56.8628 20.6149 56.1764 20.9093 55.9703 20.9093C55.8695 20.9093 55.7643 20.9456 55.7367 20.9903C55.7089 21.0347 55.4795 21.1485 55.227 21.2429C54.9745 21.3372 54.746 21.447 54.7191 21.4864C54.6925 21.5261 54.4765 21.5867 54.2391 21.6211C54.002 21.6554 53.7668 21.7233 53.7167 21.7715C53.6665 21.82 53.4577 21.8597 53.2527 21.8597C52.9974 21.8597 52.8923 21.8972 52.9191 21.9785C52.9789 22.1581 53.5511 22.1776 53.8112 22.0087C53.9377 21.9267 54.1182 21.8595 54.2125 21.8592C54.3068 21.8587 54.5077 21.7946 54.6589 21.7167C54.8101 21.6385 54.9846 21.5746 55.0465 21.5746C55.1084 21.5746 55.3287 21.489 55.5359 21.3845C55.743 21.2799 55.9789 21.1942 56.0603 21.1937C56.1414 21.1934 56.3375 21.1081 56.4959 21.0043C56.6543 20.9005 56.8487 20.8145 56.9279 20.8135C57.0071 20.8123 57.4539 20.6208 57.921 20.3877C58.388 20.1546 58.9177 19.9367 59.0979 19.9032C59.2784 19.8697 59.4495 19.8044 59.4786 19.7581C59.5076 19.7117 59.6773 19.6737 59.8559 19.6737C60.0344 19.6737 60.2072 19.6309 60.2399 19.5787C60.2763 19.52 60.1129 19.4836 59.8136 19.4836C59.5465 19.4836 59.3279 19.5162 59.3279 19.5561ZM51.9359 22.2399C51.9359 22.3494 52.1665 22.3494 52.5119 22.2399C52.7159 22.1752 52.6904 22.1624 52.3439 22.1543C52.1195 22.1491 51.9359 22.1876 51.9359 22.2399ZM50.3331 22.4711C50.4558 22.563 50.6802 22.5865 51.1011 22.5511C52.0352 22.473 51.9819 22.3344 51.0191 22.338C50.2712 22.3406 50.1824 22.3577 50.3331 22.4711ZM48.5279 22.62C48.1239 22.6749 48.1923 22.6873 48.9599 22.6987C49.5793 22.7079 49.8258 22.6825 49.7279 22.62C49.5709 22.5195 49.2673 22.5195 48.5279 22.62ZM60.2103 23.3462C60.1431 23.4172 59.9197 23.4754 59.7138 23.4754C59.373 23.4754 59.17 23.5724 59.2806 23.6821C59.3046 23.7059 59.8242 23.6617 60.4355 23.5838C61.7017 23.4224 62.338 23.5127 62.7779 23.9166C62.912 24.04 63.0548 24.1407 63.0949 24.1407C63.135 24.1407 63.1679 24.221 63.1679 24.3192C63.1679 24.4173 63.2327 24.5508 63.3119 24.6159C63.5003 24.7706 63.5022 25.5644 63.315 25.8097C63.1619 26.01 63.1148 26.3704 63.2528 26.2861C63.7311 25.9933 63.8339 24.7632 63.422 24.26C63.3042 24.116 63.1328 23.8805 63.0416 23.7368C62.9154 23.5384 62.7997 23.4754 62.5609 23.4754C62.3879 23.4754 62.2052 23.4376 62.1551 23.3915C61.989 23.2392 60.3476 23.2007 60.2103 23.3462ZM58.7079 23.7539C58.6777 23.8026 58.6892 23.8646 58.7336 23.8919C58.857 23.9675 59.2369 23.8456 59.1772 23.7498C59.1078 23.6386 58.7783 23.6415 58.7079 23.7539ZM57.6973 24.0511C57.5135 24.1526 57.2953 24.2358 57.2125 24.2358C57.0531 24.2358 56.8319 24.4125 56.8319 24.5399C56.8319 24.6454 57.1921 24.6356 57.2591 24.5285C57.2891 24.4805 57.6159 24.3484 57.9853 24.2353C58.3549 24.1222 58.6326 23.9903 58.6028 23.9425C58.5133 23.7993 58.054 23.8542 57.6973 24.0511ZM56.3039 24.711C56.2712 24.7632 56.3334 24.806 56.4421 24.806C56.5508 24.806 56.6399 24.7632 56.6399 24.711C56.6399 24.6587 56.5777 24.6159 56.5016 24.6159C56.4255 24.6159 56.3365 24.6587 56.3039 24.711ZM55.3919 25.0968C55.2071 25.1933 54.9803 25.2741 54.8879 25.2767C54.7955 25.2791 54.7196 25.3347 54.7191 25.4C54.7187 25.4654 54.5351 25.6241 54.3111 25.7526C53.9816 25.9415 53.9399 25.9936 54.0923 26.0247C54.1957 26.0458 54.2965 26.0157 54.3162 25.9574C54.3359 25.8992 54.41 25.8515 54.4811 25.8515C54.5521 25.8515 54.6673 25.7978 54.7369 25.7324C54.9039 25.5756 55.8894 25.0911 56.0413 25.0911C56.1066 25.0911 56.1599 25.0484 56.1599 24.9961C56.1599 24.8502 55.7658 24.9018 55.3919 25.0968ZM53.4481 26.3117C53.3029 26.3982 53.1841 26.5199 53.1841 26.5816C53.1839 26.6434 53.0975 26.7211 52.9919 26.7544C52.8863 26.7876 52.7999 26.8475 52.7999 26.8874C52.7999 26.9274 52.5498 27.2132 52.2438 27.5226C51.7307 28.0417 51.0719 29.0929 51.0719 29.3928C51.0719 29.4629 51.0183 29.5731 50.9528 29.638C50.7311 29.8575 50.5667 30.7419 50.5441 31.8349C50.5297 32.5448 50.4839 32.9362 50.4128 32.9595C50.3528 32.9794 50.3034 33.1096 50.3029 33.2489C50.3015 33.6402 49.8109 34.3953 49.1581 35.0105C48.8327 35.3172 48.584 35.5855 48.6054 35.6066C48.6687 35.6694 48.9599 35.533 48.9599 35.4405C48.9599 35.394 49.0031 35.3557 49.0559 35.3557C49.1087 35.3557 49.2339 35.2809 49.334 35.1894C49.4343 35.0979 49.6179 34.9321 49.742 34.8211C50.0125 34.579 50.4959 33.7158 50.4959 33.4746C50.4959 33.38 50.5347 33.2622 50.582 33.2125C50.6293 33.1629 50.6891 32.5876 50.7147 31.9342C50.757 30.8581 50.841 30.3997 51.0848 29.9157C51.1304 29.825 51.1679 29.6698 51.1679 29.571C51.1679 29.4721 51.2327 29.3381 51.3119 29.273C51.3911 29.2079 51.4559 29.0957 51.4559 29.0238C51.4559 28.9518 51.4943 28.8928 51.5415 28.8928C51.5886 28.8928 51.6541 28.7859 51.6872 28.6552C51.7203 28.5245 51.7899 28.4176 51.8418 28.4176C51.8934 28.4176 51.9359 28.3582 51.9359 28.2857C51.9359 28.213 52.2167 27.8645 52.5599 27.5112C52.9031 27.1576 53.1839 26.8321 53.1839 26.7876C53.1839 26.7432 53.2163 26.7069 53.2559 26.7066C53.2955 26.7066 53.4791 26.5783 53.6639 26.4217C54.0222 26.1183 53.8871 26.0494 53.4481 26.3117ZM62.9759 26.4115C62.9759 26.4643 62.4337 27.0492 61.7713 27.7112C61.1087 28.3734 60.5869 28.9356 60.6119 28.9603C60.7021 29.0494 61.0559 28.8769 61.0559 28.7439C61.0559 28.669 61.0971 28.6077 61.1475 28.6077C61.1979 28.6077 61.3432 28.5115 61.4704 28.3939C62.2811 27.6437 62.5919 27.3329 62.5919 27.2716C62.5919 27.2334 62.7215 27.0649 62.8799 26.8969C63.1868 26.5714 63.225 26.4678 63.0719 26.3742C63.0191 26.3419 62.9759 26.3588 62.9759 26.4115ZM67.5359 31.401C67.2191 31.4623 67.0095 31.5431 67.0703 31.5806C67.2491 31.6906 69.2274 31.5412 69.1873 31.4205C69.1395 31.277 68.2311 31.266 67.5359 31.401ZM69.3827 31.3254C69.242 31.4649 69.3171 31.554 69.5759 31.555C69.7211 31.5557 70.052 31.6198 70.3112 31.6975C70.5704 31.7755 70.97 31.8391 71.1992 31.8391C71.4284 31.8391 71.6159 31.8774 71.6159 31.9242C71.6159 32.0399 72.5276 32.5044 72.7547 32.5044C72.9176 32.5044 73.4619 32.8742 74.3759 33.6053C74.5475 33.7426 74.6879 33.9151 74.6879 33.9888C74.6879 34.0624 74.726 34.1969 74.7723 34.2877C74.8189 34.3784 74.9547 34.6667 75.0745 34.928C75.194 35.1894 75.4367 35.6064 75.6138 35.8549C75.7909 36.1032 75.9359 36.3499 75.9359 36.4026C75.9359 36.5007 75.9992 36.6457 76.226 37.0665C76.3556 37.3072 76.5745 37.738 76.7202 38.0395C76.7639 38.1302 76.7999 38.2802 76.7999 38.3728C76.7999 38.4655 76.8906 38.5974 77.0012 38.666C77.132 38.7468 77.1858 38.8549 77.1543 38.974C77.1277 39.0747 77.1416 39.179 77.1853 39.2059C77.2691 39.257 77.8559 40.4082 77.8559 40.5213C77.8559 40.5574 77.9653 40.7586 78.0992 40.9687C78.2331 41.1787 78.3203 41.3866 78.2924 41.4311C78.2648 41.4753 78.3709 41.7623 78.5279 42.069C78.6848 42.3756 78.8139 42.6982 78.8147 42.7859C78.8154 42.8738 78.8754 43.0043 78.9479 43.0763C79.0206 43.148 79.0799 43.316 79.0799 43.4495C79.0799 43.5828 79.1934 43.9155 79.3319 44.1887C79.4706 44.462 79.5839 44.7649 79.5839 44.8621C79.5839 44.9593 79.6225 45.0624 79.6698 45.0914C79.7171 45.1201 79.7773 45.3045 79.8039 45.5008C79.8306 45.6973 79.9035 46.029 79.9662 46.2381C80.0288 46.4472 80.1275 46.8461 80.1853 47.1248L80.2907 47.6314L79.7934 48.0843C79.5198 48.3333 79.2959 48.5821 79.2959 48.6372C79.2959 48.6926 78.9719 49.0573 78.5759 49.4481C78.1799 49.8388 77.8559 50.1937 77.8559 50.2368C77.8559 50.2795 77.5643 50.5989 77.2079 50.946C76.8515 51.2934 76.2831 51.8622 75.9452 52.2105C75.6071 52.5586 75.2867 52.8435 75.2331 52.8435C75.1796 52.8435 75.0675 52.9072 74.984 52.9849C74.5751 53.3648 73.898 53.889 73.8162 53.889C73.7655 53.889 73.5529 53.9959 73.3439 54.1266C73.1348 54.2573 72.9087 54.3652 72.8418 54.3663C72.7748 54.3675 72.6119 54.4521 72.4799 54.5543L72.2399 54.7401L72.5439 54.7422C72.711 54.7434 72.8622 54.7123 72.8799 54.6731C72.8975 54.6339 73.2035 54.4535 73.5599 54.2723C73.9163 54.091 74.2079 53.9092 74.2079 53.8683C74.2079 53.8275 74.254 53.794 74.3104 53.794C74.6084 53.794 76.5186 52.0601 77.8079 50.6193C78.1775 50.2061 78.6527 49.6865 78.8639 49.4643C79.0751 49.2421 79.4639 48.8168 79.7279 48.5196C79.9919 48.2221 80.2825 47.9056 80.3737 47.8163C80.5422 47.6509 80.5215 46.6658 80.3495 46.6658C80.3099 46.6658 80.2487 46.4743 80.2131 46.2402C80.1779 46.0062 80.108 45.79 80.0583 45.7595C80.0087 45.7291 79.9679 45.5569 79.9679 45.377C79.9679 45.1971 79.9247 45.0501 79.8719 45.0501C79.8191 45.0501 79.7756 44.9538 79.7754 44.8362C79.7749 44.7186 79.7101 44.4998 79.6314 44.3501C79.5524 44.2004 79.4879 44.0008 79.4879 43.9065C79.4879 43.8121 79.4159 43.5923 79.3276 43.4182C79.0302 42.8308 79.0079 42.7721 79.0079 42.5801C79.0079 42.4749 78.9666 42.3889 78.9162 42.3889C78.8658 42.3889 78.7962 42.2387 78.7614 42.0553C78.7266 41.8716 78.6599 41.6981 78.6131 41.6694C78.5663 41.6406 78.5279 41.5128 78.5279 41.3852C78.5279 41.2576 78.4875 41.1533 78.4383 41.1533C78.3891 41.1533 78.3215 41.0571 78.2883 40.9395C78.206 40.6489 78.1146 40.4338 77.8194 39.8377C77.6809 39.5585 77.5679 39.2698 77.5679 39.1961C77.5679 39.1225 77.5275 39.0624 77.4783 39.0624C77.4291 39.0624 77.3583 38.9661 77.3211 38.8485C77.2839 38.7309 77.1515 38.413 77.0267 38.1419C76.9019 37.8708 76.7999 37.6035 76.7999 37.5479C76.7999 37.4923 76.7567 37.4467 76.7039 37.4467C76.6511 37.4467 76.6079 37.3663 76.6079 37.2682C76.6079 37.1701 76.5431 37.0365 76.4639 36.9714C76.3847 36.9063 76.3199 36.7942 76.3199 36.7222C76.3199 36.6502 76.2767 36.5913 76.2239 36.5913C76.1711 36.5913 76.1279 36.4843 76.1279 36.3537C76.1279 36.223 76.0854 36.1161 76.0338 36.1161C75.982 36.1161 75.9104 35.9984 75.8749 35.8547C75.8394 35.7109 75.783 35.5719 75.7494 35.5458C75.716 35.5197 75.4959 35.1134 75.2603 34.6429C75.0246 34.1724 74.7995 33.7733 74.7599 33.7559C74.7203 33.7383 74.6879 33.6421 74.6879 33.5421C74.6879 33.4418 74.6427 33.3598 74.5878 33.3598C74.5328 33.3598 74.2537 33.1888 73.9679 32.9797C73.682 32.7706 73.4029 32.5995 73.3479 32.5995C73.293 32.5995 73.2479 32.5567 73.2479 32.5044C73.2479 32.4522 73.16 32.4094 73.0527 32.4094C72.9457 32.4094 72.8329 32.3453 72.8027 32.2668C72.7722 32.1884 72.6743 32.1243 72.5848 32.1243C72.4955 32.1243 72.3812 32.0867 72.3311 32.0409C72.2809 31.995 72.0023 31.885 71.7119 31.7966C71.4215 31.708 71.0975 31.5989 70.9919 31.5543C70.8863 31.5094 70.6055 31.4497 70.3679 31.4214C70.1303 31.3932 69.8274 31.3442 69.6947 31.3126C69.5619 31.2812 69.4215 31.287 69.3827 31.3254ZM66.2399 31.7441C66.1307 31.814 66.1712 31.8365 66.4079 31.8377C66.5795 31.8384 66.7199 31.7964 66.7199 31.7441C66.7199 31.6234 66.4285 31.6234 66.2399 31.7441ZM46.5224 34.9587C46.4679 35.0459 46.7975 35.3557 46.9451 35.3557C46.9971 35.3557 47.0399 35.3985 47.0399 35.4508C47.0399 35.503 47.1263 35.5458 47.2319 35.5458C47.3384 35.5458 47.4239 35.6092 47.4239 35.6884C47.4239 35.7668 47.4887 35.8309 47.5679 35.8309C47.6471 35.8309 47.7119 35.7882 47.7119 35.7359C47.7119 35.6836 47.6773 35.6408 47.6353 35.6408C47.5931 35.6408 47.3787 35.4698 47.1589 35.2607C46.7595 34.8807 46.6141 34.8116 46.5224 34.9587ZM64.1156 35.8345C59.1515 36.2023 55.9367 41.7103 58.2296 45.919C58.305 46.0573 58.4641 46.3545 58.5831 46.5798C58.8193 47.026 60.2593 48.5666 60.4403 48.5666C60.502 48.5666 60.604 48.6284 60.6673 48.7037C61.4749 49.667 66.0176 50.3401 66.7631 49.6069C66.8132 49.5574 66.916 49.517 66.9913 49.517C67.9369 49.517 70.2786 47.5193 71.0003 46.0969C73.1651 41.8295 70.4303 36.4946 65.7599 35.8744C65.5223 35.8428 65.2631 35.8055 65.1839 35.7915C65.1047 35.7775 64.6239 35.7967 64.1156 35.8345ZM30.0959 35.8889C27.1988 36.607 25.3412 38.2866 24.5168 40.934C23.6704 43.6517 24.7069 46.6655 27.1338 48.5438C27.3524 48.7132 27.5617 48.8517 27.5989 48.8517C27.6359 48.8517 27.7844 48.9351 27.9289 49.0368C30.6954 50.9871 35.7702 49.5874 37.5587 46.3806C38.6891 44.3539 38.8067 41.3771 37.8174 39.8227C37.7675 39.7443 37.6969 39.616 37.6607 39.5376C37.0239 38.1602 35.0883 36.5699 33.4602 36.0864C32.8895 35.9169 30.5394 35.7791 30.0959 35.8889ZM48.128 36.075C48.0963 36.1569 48.1194 36.2724 48.1791 36.3316C48.26 36.4116 48.2879 36.3736 48.2879 36.1826C48.2879 35.8967 48.2161 35.8483 48.128 36.075ZM47.7119 36.2054C47.7119 36.313 47.7551 36.4012 47.8079 36.4012C47.8607 36.4012 47.9039 36.3396 47.9039 36.2643C47.9039 36.189 47.8607 36.1009 47.8079 36.0685C47.7551 36.0362 47.7119 36.0978 47.7119 36.2054ZM55.7502 36.3147C55.6568 36.3684 55.2788 36.4375 54.9102 36.4682C54.5415 36.4988 54.2399 36.5604 54.2399 36.6051C54.2399 36.7847 48.6567 36.7015 48.5175 36.52C48.4347 36.4121 48.3889 36.3967 48.387 36.4765C48.3853 36.544 48.4688 36.6896 48.5727 36.7999C48.8017 37.0432 53.9039 37.018 54.2034 36.7721C54.3003 36.6923 54.6347 36.6547 55.1833 36.6621C55.9309 36.6723 56.0454 36.65 56.3039 36.4428L56.5919 36.2121L56.2559 36.2144C56.0711 36.2159 55.8435 36.261 55.7502 36.3147ZM47.0399 36.7814C47.0399 36.8336 47.1047 36.8764 47.1839 36.8764C47.2631 36.8764 47.3279 36.8336 47.3279 36.7814C47.3279 36.7291 47.2631 36.6863 47.1839 36.6863C47.1047 36.6863 47.0399 36.7291 47.0399 36.7814ZM31.9316 39.875C35.3559 40.3699 35.193 45.555 31.7432 45.8738C28.7569 46.1499 27.1336 42.8173 29.2096 40.6731C29.6051 40.2647 30.9925 39.6873 31.3556 39.7799C31.4149 39.7952 31.6741 39.8379 31.9316 39.875ZM65.3099 39.8928C67.6338 40.2198 68.553 43.3303 66.83 45.036C64.467 47.3755 60.4707 44.6314 61.8255 41.5993C62.2979 40.5422 63.9625 39.5331 64.7999 39.7961C64.8791 39.8211 65.1085 39.8645 65.3099 39.8928ZM51.5039 46.2856C51.4662 46.346 51.7268 46.3806 52.2181 46.3806C52.67 46.3806 52.9919 46.4201 52.9919 46.4757C52.9919 46.528 53.0535 46.5707 53.1291 46.5707C53.3192 46.5707 53.9519 47.1778 53.9519 47.3605C53.9519 47.4427 53.9951 47.5364 54.0479 47.5687C54.2022 47.663 54.1583 47.271 53.9999 47.141C53.9207 47.0759 53.8559 46.9423 53.8559 46.8442C53.8559 46.7461 53.7911 46.6658 53.7119 46.6658C53.6327 46.6658 53.5679 46.6261 53.5679 46.5776C53.5679 46.2763 51.6767 46.0088 51.5039 46.2856ZM50.5251 46.6152C50.3771 46.7442 50.3099 46.8511 50.3759 46.8528C50.4419 46.8544 50.4959 46.8131 50.4959 46.7608C50.4959 46.7085 50.5931 46.6653 50.7119 46.6646C51.0507 46.6624 51.363 46.5574 51.3051 46.465C51.2041 46.3032 50.7925 46.3825 50.5251 46.6152ZM54.2531 49.0309C54.2492 49.6781 54.2744 50.18 54.3087 50.1458C54.453 50.003 54.4964 48.9644 54.381 48.4219L54.26 47.8538L54.2531 49.0309ZM50.0639 48.1865C50.0276 48.2447 50.1767 48.2815 50.4479 48.2815C50.7191 48.2815 50.8681 48.2447 50.8319 48.1865C50.7992 48.1342 50.6264 48.0914 50.4479 48.0914C50.2693 48.0914 50.0965 48.1342 50.0639 48.1865ZM50.9948 48.2371C51.0229 48.2646 51.1441 48.3062 51.2641 48.329C51.3841 48.3518 51.5552 48.4362 51.6445 48.5162C51.7338 48.5961 51.8576 48.6617 51.9193 48.6617C51.9812 48.6617 52.0319 48.7044 52.0319 48.7567C52.0319 48.809 52.0998 48.8517 52.1831 48.8517C52.2683 48.8517 52.4041 49.0166 52.4951 49.231C52.5834 49.4396 52.6883 49.6107 52.7279 49.6111C52.8543 49.6128 53.1839 49.9873 53.1839 50.1291C53.1839 50.2044 53.2271 50.2926 53.2799 50.3249C53.3343 50.3582 53.3759 50.2783 53.3759 50.1405C53.3759 50.0068 53.3375 49.8972 53.2902 49.8972C53.2431 49.8972 53.1798 49.7988 53.1493 49.6786C53.0103 49.1305 51.8636 48.1865 51.3366 48.1865C51.1206 48.1865 50.9667 48.2093 50.9948 48.2371ZM50.0171 49.3262C49.9011 49.3973 49.9095 49.4237 50.0665 49.4812C50.1707 49.5194 50.2832 49.5912 50.3168 49.6406C50.3502 49.6898 50.4284 49.7135 50.4906 49.6931C50.5604 49.6701 50.5182 49.5767 50.3802 49.4481C50.2254 49.3044 50.114 49.2668 50.0171 49.3262ZM50.8429 49.9706C50.9547 50.0609 51.2115 50.2631 51.4139 50.4199C51.6162 50.5768 51.8922 50.8056 52.0268 50.9284C52.1617 51.0513 52.5743 51.3281 52.9439 51.5431C53.3135 51.7584 53.6375 51.9599 53.6639 51.9908C53.6903 52.0219 54.0035 52.1911 54.3599 52.3667C54.7163 52.5422 55.0079 52.7214 55.0079 52.7646C55.0079 52.8081 55.0974 52.8435 55.2068 52.8435C55.316 52.8435 55.4703 52.9077 55.5495 52.9861C55.6287 53.0645 55.7768 53.1287 55.8788 53.1287C55.9806 53.1287 56.0639 53.1714 56.0639 53.2237C56.0639 53.276 56.1421 53.3187 56.2376 53.3187C56.3329 53.3187 56.4949 53.3815 56.5976 53.4582C56.7001 53.535 56.8595 53.5991 56.9519 53.6008C57.0443 53.6024 57.1199 53.6466 57.1199 53.6989C57.1199 53.7512 57.2048 53.794 57.3085 53.794C57.4124 53.794 57.6608 53.864 57.8605 53.9496C58.3304 54.1511 58.4891 54.2069 59.1839 54.4153C59.5007 54.5101 59.8009 54.6232 59.8511 54.6662C59.9012 54.7092 60.074 54.7394 60.2351 54.7332C60.513 54.7225 60.5159 54.7187 60.2879 54.6593C60.1559 54.6249 59.8023 54.4802 59.5021 54.3378C59.2019 54.1955 58.892 54.0791 58.8138 54.0791C58.7355 54.0791 58.5275 54.0078 58.3515 53.9204C57.7583 53.626 57.699 53.6039 57.5051 53.6039C57.3987 53.6039 57.3119 53.5611 57.3119 53.5088C57.3119 53.4566 57.2091 53.4138 57.0836 53.4138C56.9581 53.4138 56.8016 53.3496 56.7359 53.2712C56.6701 53.1928 56.5796 53.1287 56.5347 53.1287C56.4899 53.1287 56.2251 53.0262 55.9465 52.901C55.6679 52.7758 55.3751 52.647 55.2959 52.615C55.2167 52.5826 55.0223 52.4743 54.8639 52.3743C54.7055 52.274 54.5041 52.1889 54.4165 52.1851C54.3287 52.1813 54.1523 52.0552 54.0243 51.9045C53.8964 51.7539 53.6874 51.5997 53.5597 51.5616C53.1997 51.4545 52.4331 50.955 51.7021 50.3518C51.3359 50.0495 50.9471 49.8031 50.8381 49.8043L50.6399 49.8064L50.8429 49.9706ZM50.5585 53.6754C50.4894 53.7861 50.81 54.1335 51.1343 54.2996C51.2943 54.3813 51.5293 54.5579 51.6565 54.6914C51.7837 54.8252 52.0715 55.0238 52.2959 55.1331C52.5203 55.2422 52.7039 55.3636 52.7039 55.4028C52.7039 55.442 52.8743 55.5558 53.0826 55.6558C53.2909 55.7556 53.4795 55.9015 53.5016 55.9799C53.5237 56.0583 53.7529 56.2294 54.0109 56.3599C54.2689 56.4903 54.6085 56.6821 54.7659 56.7857C54.9231 56.8895 55.3551 57.128 55.7259 57.3162C56.0965 57.5042 56.5295 57.7273 56.6879 57.8121C56.8463 57.8967 57.0407 57.9901 57.1199 58.0191C57.1991 58.0483 57.4367 58.1795 57.6479 58.3108C58.101 58.5924 58.4257 58.7362 58.6083 58.7362C58.6811 58.7362 58.7672 58.7789 58.7999 58.8312C58.8325 58.8835 58.9621 58.9262 59.0879 58.9262C59.2136 58.9262 59.3432 58.969 59.3759 59.0213C59.4085 59.0736 59.5515 59.1178 59.6936 59.1194C59.8357 59.1211 60.0356 59.1852 60.1381 59.262C60.2408 59.3387 60.446 59.4015 60.5941 59.4015C60.7424 59.4015 60.8639 59.4442 60.8639 59.4965C60.8639 59.5488 60.9839 59.5915 61.1305 59.5915C61.2771 59.5915 61.4823 59.6479 61.5865 59.7165C61.6907 59.7852 61.9242 59.8505 62.1054 59.8619C62.2868 59.8731 62.4908 59.928 62.5587 59.9841C62.7126 60.1102 63.2708 60.2554 63.8399 60.3172C64.0775 60.3429 64.5234 60.4274 64.8308 60.5049C65.1383 60.5824 65.5919 60.6425 65.8388 60.6382C66.0858 60.6339 66.5903 60.6727 66.9599 60.724C68.0763 60.8791 70.4015 60.8409 71.3279 60.6522C72.2526 60.4638 72.1703 60.3174 71.2227 60.465C70.3631 60.5988 66.5147 60.6746 66.442 60.5591C66.41 60.5085 66.0179 60.445 65.5707 60.4179C65.1133 60.3901 64.7423 60.3234 64.7226 60.2652C64.7034 60.2079 64.4588 60.1618 64.1735 60.1618C63.8908 60.1618 63.6349 60.1231 63.6054 60.0755C63.5759 60.0283 63.3356 59.9601 63.0719 59.9242C62.8079 59.8883 62.5919 59.8201 62.5919 59.7726C62.5919 59.7253 62.4241 59.6866 62.2189 59.6866C62.0137 59.6866 61.7221 59.6227 61.5709 59.5445C61.4197 59.4666 61.1987 59.4024 61.0799 59.4019C60.9611 59.4017 60.8639 59.3587 60.8639 59.3064C60.8639 59.2541 60.7883 59.2114 60.6959 59.2114C60.5079 59.2111 59.6624 58.9089 59.5563 58.8039C59.5187 58.7666 59.4121 58.7362 59.3197 58.7362C59.2271 58.7362 59.0291 58.6756 58.8795 58.6017C57.699 58.0179 56.5667 57.5006 56.4692 57.5006C56.4047 57.5006 56.3519 57.4673 56.3519 57.427C56.3519 57.3863 56.1579 57.2687 55.9208 57.1656C55.6837 57.0622 55.4893 56.9458 55.4888 56.9066C55.4883 56.8674 55.4015 56.8353 55.2959 56.8353C55.1903 56.8353 55.1039 56.7956 55.1039 56.7472C55.1039 56.6987 54.9851 56.5984 54.8399 56.524C54.3313 56.2636 53.9036 56.027 53.8559 55.9799C53.7875 55.9122 53.4495 55.7055 53.2801 55.6276C53.2011 55.5912 53.037 55.4631 52.9158 55.3429C52.7943 55.2229 52.6518 55.1245 52.5987 55.1245C52.5457 55.1245 52.3467 54.9749 52.1564 54.7919C51.9661 54.6089 51.7787 54.4593 51.7398 54.4593C51.7009 54.4593 51.5022 54.3084 51.2984 54.1238C50.8525 53.7201 50.619 53.5784 50.5585 53.6754ZM71.6382 54.8867C71.4656 54.9611 71.2928 55.0224 71.2542 55.0233C70.9796 55.0297 70.2863 55.1526 70.1279 55.2227C70.0223 55.2697 69.7847 55.3484 69.5999 55.3978C69.2708 55.4857 69.2742 55.4878 69.771 55.4962C70.0499 55.5009 70.4331 55.4406 70.6227 55.3622C70.8121 55.2837 71.0917 55.2196 71.2436 55.2196C71.3955 55.2196 71.5199 55.1823 71.5199 55.1367C71.5199 55.091 71.6946 55.0262 71.9084 54.9922C72.1254 54.958 72.2713 54.8896 72.2387 54.8375C72.1609 54.713 72.014 54.7251 71.6382 54.8867ZM68.4719 55.668C68.6171 55.6896 68.8547 55.6896 68.9999 55.668C69.1451 55.6461 69.0263 55.6283 68.7359 55.6283C68.4455 55.6283 68.3267 55.6461 68.4719 55.668ZM80.1908 56.2933C80.0946 56.4133 79.874 56.6148 79.7007 56.7412C79.4396 56.9313 79.3952 57.0147 79.4425 57.2276C79.5003 57.4883 79.3477 57.8651 79.1279 58.0043C79.0619 58.0462 79.0079 58.1189 79.0079 58.1659C79.0079 58.2975 78.1976 59.1163 78.0673 59.1163C78.0037 59.1163 77.9519 59.1572 77.9519 59.2071C77.9519 59.6196 76.4771 60.2077 76.0326 59.9722C75.8783 59.8905 75.7902 59.8878 75.7143 59.9629C75.6567 60.0199 75.4263 60.0668 75.2024 60.0668C74.9785 60.0668 74.7685 60.1095 74.7359 60.1618C74.6975 60.2233 75.1028 60.2568 75.8821 60.2568C76.5452 60.2568 77.0879 60.2238 77.0879 60.1834C77.0879 60.143 77.2362 60.0309 77.4176 59.9342C77.7474 59.7583 79.0079 58.6423 79.0079 58.5261C79.0079 58.4924 79.1576 58.3075 79.3405 58.1153C79.5236 57.9233 79.6993 57.685 79.731 57.5859C79.7629 57.4866 79.8291 57.4056 79.8783 57.4056C79.9275 57.4056 79.9679 57.3405 79.9679 57.2611C79.9679 57.1817 80.0682 56.9572 80.1908 56.7621C80.5931 56.1227 80.5931 55.7915 80.1908 56.2933ZM78.9867 57.3343C78.7955 57.5077 78.5041 57.6881 78.3119 57.752C78.2195 57.7829 78.1439 57.8406 78.1439 57.8808C78.1439 57.9209 78.0683 57.9787 77.9759 58.0096C77.81 58.0647 77.4692 58.2624 77.3759 58.3574C77.3495 58.3843 77.1447 58.4912 76.9211 58.595C76.6971 58.6989 76.5135 58.811 76.5131 58.8447C76.5123 58.8782 76.4039 58.9324 76.2719 58.9652C76.1399 58.998 76.0319 59.0669 76.0319 59.1182C76.0319 59.1693 75.9023 59.2114 75.7439 59.2114C75.5855 59.2114 75.4559 59.2494 75.4559 59.2957C75.4559 59.3423 75.3047 59.4083 75.1199 59.4428C74.9351 59.477 74.7839 59.5459 74.7839 59.5958C74.7839 59.6457 74.6353 59.6866 74.4536 59.6866C74.2719 59.6866 74.098 59.727 74.0672 59.7762C74.0365 59.8253 73.8181 59.8945 73.5817 59.9294C73.1377 59.9955 73.0777 60.0504 73.256 60.2269C73.3729 60.3426 74.1119 60.105 74.1119 59.9518C74.1119 59.9042 74.1546 59.8916 74.2069 59.9235C74.259 59.9556 74.4426 59.9192 74.6149 59.8429C74.787 59.7669 75.0467 59.6783 75.1919 59.6462C75.3371 59.6141 75.4559 59.5459 75.4559 59.4946C75.4559 59.4435 75.5612 59.4015 75.6901 59.4015C75.819 59.4015 75.9491 59.362 75.9793 59.3138C76.0093 59.2655 76.1631 59.1978 76.3211 59.1636C76.4787 59.1294 76.6079 59.0652 76.6079 59.0213C76.6079 58.9773 76.7356 58.9137 76.8913 58.8797C77.0473 58.8457 77.2741 58.745 77.3953 58.6559C77.5167 58.5665 77.7308 58.4361 77.871 58.3657C78.0114 58.2956 78.2624 58.1151 78.429 57.9644C78.5955 57.8138 78.7722 57.6907 78.8219 57.6907C78.8713 57.6907 78.9119 57.6527 78.9119 57.6059C78.9119 57.5593 79.0199 57.4944 79.1519 57.4616C79.2839 57.4289 79.3919 57.3599 79.3919 57.3086C79.3919 57.1772 79.1425 57.1929 78.9867 57.3343ZM53.5679 58.1659C53.8055 58.2645 54.1592 58.3477 54.3541 58.3508C54.549 58.3536 54.7328 58.395 54.7626 58.4427C54.7926 58.4905 54.9891 58.5584 55.1999 58.5936C55.4106 58.6288 55.6072 58.6967 55.6372 58.7445C55.6669 58.7922 55.8373 58.8312 56.0159 58.8312C56.1944 58.8312 56.3648 58.8702 56.3946 58.9179C56.4246 58.9657 56.6214 59.0336 56.8323 59.0688C57.0433 59.1042 57.2159 59.1719 57.2159 59.2197C57.2159 59.2674 57.4103 59.3064 57.6479 59.3064C57.8855 59.3064 58.0799 59.3454 58.0799 59.3931C58.0799 59.4409 58.2527 59.5086 58.4639 59.544C58.6751 59.5794 58.8479 59.6376 58.8479 59.6733C58.8479 59.7443 59.7539 59.9717 60.0361 59.9717C60.1323 59.9717 60.3469 60.0306 60.5135 60.1029C60.6798 60.1751 61.0751 60.2882 61.3919 60.3545C61.7087 60.4208 62.0545 60.5268 62.1604 60.5904C62.266 60.6539 62.5035 60.7304 62.6883 60.7606C63.6195 60.9129 64.0732 61.02 64.1629 61.1089C64.2798 61.2246 65.122 61.2439 65.0507 61.1293C65.0238 61.0866 64.665 60.9756 64.2529 60.8827C63.8408 60.7898 63.3311 60.6693 63.1199 60.6149C62.9087 60.5607 62.6063 60.4833 62.4479 60.4429C62.2895 60.4025 61.9148 60.2956 61.6153 60.205C61.3155 60.1148 61.0009 60.0672 60.9155 60.0998C60.8235 60.1347 60.7383 60.1014 60.7059 60.0176C60.6745 59.9365 60.5295 59.8767 60.3644 59.8767C60.2065 59.8767 59.9629 59.818 59.8227 59.746C59.4234 59.5414 58.6338 59.3055 58.3496 59.3059C58.2075 59.3062 58.0645 59.2636 58.0319 59.2114C57.9992 59.1591 57.8238 59.1163 57.6421 59.1163C57.4604 59.1163 57.3119 59.0783 57.3119 59.032C57.3119 58.9854 57.1554 58.9184 56.9641 58.8828C56.7728 58.8474 56.546 58.7823 56.4601 58.7383C56.168 58.5891 54.8655 58.2405 54.4319 58.1954C54.1943 58.1709 53.9855 58.1113 53.9679 58.0633C53.9502 58.0153 53.7558 57.9782 53.5359 57.9811L53.1359 57.9865L53.5679 58.1659ZM72.218 60.2806C72.2689 60.4236 72.8411 60.4125 72.9896 60.2654C73.0652 60.1905 72.9666 60.1618 72.6351 60.1618C72.3092 60.1618 72.188 60.1963 72.218 60.2806ZM73.9547 60.3994C73.9242 60.4778 73.8229 60.542 73.7293 60.542C73.6359 60.542 73.5056 60.6061 73.4399 60.6845C73.3741 60.7629 73.2459 60.8271 73.155 60.8271C73.064 60.8271 72.9114 60.9126 72.8159 61.0172C72.7203 61.1217 72.5874 61.2073 72.5204 61.2073C72.4535 61.2073 72.2627 61.3418 72.0966 61.5062L71.7947 61.8051L70.0014 61.7519C68.618 61.711 67.9263 61.6426 66.9762 61.453C65.6545 61.1892 65.3216 61.1586 65.2381 61.2923C65.1625 61.4133 65.4215 61.4924 65.8926 61.4924C66.1153 61.4924 66.3385 61.5306 66.3887 61.5775C66.4388 61.6243 66.7607 61.6868 67.1039 61.7165C67.4471 61.7462 67.9655 61.8117 68.2559 61.8621C68.5463 61.9125 69.5202 61.9569 70.4202 61.9607L72.0563 61.9676L72.4681 61.5874C72.6947 61.3783 72.9047 61.2073 72.9349 61.2073C72.9651 61.2073 73.1312 61.1003 73.3045 60.9697C73.4775 60.839 73.6868 60.7321 73.7694 60.7321C73.8522 60.7321 73.9199 60.6893 73.9199 60.637C73.9199 60.5847 74.0027 60.542 74.1039 60.542C74.3756 60.542 74.5983 60.4391 74.5376 60.3419C74.4505 60.2024 74.0142 60.2454 73.9547 60.3994Z", fill: "#F1ECE5" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.8879 6.46284C45.8879 6.52272 45.2308 6.55788 44.1088 6.55788C42.6162 6.55788 42.321 6.58093 42.2747 6.70045C42.2305 6.81378 42.0253 6.84301 41.2696 6.84301C40.7005 6.84301 40.3199 6.88103 40.3199 6.93805C40.3199 6.99341 40.0021 7.03309 39.5588 7.03309C39.0102 7.03309 38.7575 7.07301 38.6536 7.17566C38.5676 7.26072 38.3329 7.31822 38.0708 7.31822C37.8294 7.31822 37.6319 7.35576 37.6319 7.40186C37.6319 7.44772 37.3643 7.50451 37.0374 7.52803C36.7038 7.55203 36.4264 7.61951 36.4055 7.682C36.3834 7.7471 36.1715 7.79343 35.896 7.79343C35.6363 7.79343 35.4239 7.8362 35.4239 7.88848C35.4239 7.94075 35.2928 7.98352 35.1328 7.98352C34.9628 7.98352 34.8188 8.04268 34.7867 8.12608C34.7478 8.22588 34.5906 8.26865 34.2616 8.26865C34.0033 8.26865 33.7919 8.30761 33.7919 8.35537C33.7919 8.40313 33.6191 8.47085 33.4079 8.50625C33.1967 8.54166 33.0239 8.60937 33.0239 8.65713C33.0239 8.70489 32.8772 8.74386 32.6982 8.74386C32.4971 8.74386 32.3512 8.79851 32.3171 8.88642C32.2868 8.96483 32.1524 9.02899 32.019 9.02899C31.8853 9.02899 31.7759 9.07175 31.7759 9.12403C31.7759 9.1763 31.6448 9.21907 31.4848 9.21907C31.3148 9.21907 31.1708 9.27823 31.1387 9.36163C31.1082 9.44004 30.98 9.5042 30.8536 9.5042C30.7273 9.5042 30.6239 9.54697 30.6239 9.59924C30.6239 9.65151 30.5159 9.69428 30.3839 9.69428C30.2346 9.69428 30.1439 9.74822 30.1439 9.83685C30.1439 9.92547 30.0532 9.97941 29.9039 9.97941C29.7719 9.97941 29.6639 10.0222 29.6639 10.0745C29.6639 10.1267 29.576 10.1695 29.4688 10.1695C29.3617 10.1695 29.2489 10.2336 29.2187 10.3121C29.1882 10.3905 29.1032 10.4546 29.0296 10.4546C28.9561 10.4546 28.8959 10.4974 28.8959 10.5497C28.8959 10.6019 28.7648 10.6447 28.6048 10.6447C28.4348 10.6447 28.2908 10.7039 28.2587 10.7873C28.2282 10.8657 28.1588 10.9298 28.1046 10.9298C28.0504 10.9298 27.9059 11.0368 27.7835 11.1674C27.6611 11.2981 27.4727 11.405 27.3644 11.405C27.2564 11.405 27.1679 11.4478 27.1679 11.5001C27.1679 11.5524 27.0964 11.5951 27.009 11.5951C26.9216 11.5951 26.6857 11.7662 26.4848 11.9753C26.284 12.1844 26.0812 12.3555 26.0344 12.3555C25.8512 12.3555 25.3523 12.6579 25.0136 12.974C24.8183 13.1564 24.5996 13.3059 24.5281 13.3059C24.4564 13.3059 24.3128 13.4128 24.2089 13.5435C24.1052 13.6742 23.9797 13.7811 23.9303 13.7811C23.8808 13.7811 23.7824 13.888 23.7119 14.0187C23.6413 14.1494 23.5259 14.2563 23.4556 14.2563C23.3855 14.2563 23.3279 14.2962 23.3279 14.3449C23.3279 14.3937 23.2326 14.4635 23.1164 14.5001C22.8692 14.5778 22.6559 14.7698 22.6559 14.9147C22.6559 14.9708 22.6096 15.0167 22.5529 15.0167C22.4202 15.0167 22.1759 15.2585 22.1759 15.3899C22.1759 15.446 22.1296 15.4919 22.0729 15.4919C21.9402 15.4919 21.6959 15.7338 21.6959 15.8651C21.6959 15.9212 21.6532 15.9671 21.6011 15.9671C21.4734 15.9671 20.2559 17.167 20.2559 17.2929C20.2559 17.3478 20.1911 17.3927 20.1119 17.3927C20.0224 17.3927 19.9679 17.4825 19.9679 17.6303C19.9679 17.761 19.9216 17.8679 19.8649 17.8679C19.7322 17.8679 19.4879 18.1098 19.4879 18.2412C19.4879 18.2973 19.4231 18.3431 19.3439 18.3431C19.2623 18.3431 19.1999 18.4284 19.1999 18.5396C19.1999 18.6478 19.0487 18.8773 18.8639 19.0498C18.6791 19.2223 18.5279 19.4547 18.5279 19.5661C18.5279 19.683 18.4669 19.7688 18.3839 19.7688C18.2944 19.7688 18.2399 19.8586 18.2399 20.0064C18.2399 20.1371 18.1967 20.244 18.1439 20.244C18.0911 20.244 18.0479 20.3081 18.0479 20.3866C18.0479 20.465 18.0078 20.5291 17.9588 20.5291C17.8439 20.5291 17.5679 21.0763 17.5679 21.3039C17.5679 21.4007 17.5031 21.4795 17.4239 21.4795C17.3382 21.4795 17.2799 21.5667 17.2799 21.6946C17.2799 21.8131 17.1721 21.9897 17.0399 22.088C16.8673 22.2164 16.7999 22.3561 16.7999 22.5858C16.7999 22.7614 16.7567 22.9052 16.7039 22.9052C16.6511 22.9052 16.6079 23.0504 16.6079 23.2276C16.6079 23.4267 16.5527 23.5712 16.4639 23.6049C16.3734 23.6391 16.3199 23.7846 16.3199 23.9951C16.3199 24.1797 16.2767 24.3308 16.2239 24.3308C16.1711 24.3308 16.1279 24.4332 16.1279 24.5582C16.1279 24.6834 16.0631 24.8103 15.9839 24.8405C15.9006 24.8721 15.8399 25.0142 15.8399 25.1776C15.8399 25.333 15.7967 25.4865 15.7439 25.5188C15.6911 25.5512 15.6479 25.7379 15.6479 25.9342C15.6479 26.292 15.2056 26.8948 14.9406 26.8984C14.8808 26.8993 14.6857 27.0276 14.5069 27.1835C14.3281 27.3396 14.1229 27.4672 14.0509 27.4672C13.9789 27.4672 13.9199 27.51 13.9199 27.5623C13.9199 27.6145 13.8736 27.6573 13.8169 27.6573C13.7605 27.6573 13.654 27.7108 13.5803 27.7761C13.2628 28.0581 13.154 28.1325 13.06 28.1325C13.005 28.1325 12.9599 28.1967 12.9599 28.2751C12.9599 28.3535 12.8951 28.4176 12.8159 28.4176C12.7367 28.4176 12.6719 28.4604 12.6719 28.5127C12.6719 28.565 12.6066 28.6077 12.5267 28.6077C12.4468 28.6077 12.1664 28.8216 11.9039 29.0829C11.6413 29.3443 11.3776 29.5581 11.3178 29.5581C11.1404 29.5581 9.60275 31.1118 9.60131 31.2927C9.60035 31.3872 9.52739 31.459 9.43187 31.4592C9.25691 31.4592 8.54387 32.145 8.54387 32.3132C8.54387 32.3662 8.48987 32.4101 8.42387 32.4111C8.27819 32.413 7.87187 32.8231 7.87187 32.968C7.87187 33.0253 7.65587 33.2871 7.39187 33.5499C7.12787 33.8127 6.91187 34.0852 6.91187 34.1556C6.91187 34.2261 6.80387 34.364 6.67187 34.4621C6.53987 34.5602 6.43187 34.6776 6.43187 34.723C6.43187 34.7684 6.32387 34.8898 6.19187 34.9924C6.05987 35.0953 5.95187 35.2574 5.95187 35.3524C5.95187 35.4477 5.88707 35.5501 5.80787 35.5803C5.72867 35.6102 5.66387 35.7219 5.66387 35.8279C5.66387 35.9341 5.62067 36.021 5.56787 36.021C5.51507 36.021 5.47187 36.0852 5.47187 36.1636C5.47187 36.242 5.42555 36.3062 5.36891 36.3062C5.19971 36.3062 4.99187 36.5642 4.99187 36.7745C4.99187 36.8861 4.92947 36.9715 4.84787 36.9715C4.76867 36.9715 4.70387 37.0254 4.70387 37.0914C4.70387 37.1575 4.59587 37.2917 4.46387 37.3899C4.33187 37.488 4.22387 37.6479 4.22387 37.7451C4.22387 37.8423 4.18067 37.9219 4.12787 37.9219C4.07507 37.9219 4.03187 37.9815 4.03187 38.0542C4.03187 38.1272 3.96707 38.2113 3.88787 38.2415C3.80867 38.2714 3.74387 38.3674 3.74387 38.4546C3.74387 38.5415 3.63587 38.7119 3.50387 38.8331C3.37187 38.9543 3.26387 39.117 3.26387 39.1947C3.26387 39.2727 3.22067 39.3627 3.16787 39.395C3.11507 39.4273 3.07187 39.5174 3.07187 39.5953C3.07187 39.673 2.96387 39.8358 2.83187 39.957C2.69987 40.0781 2.59187 40.2257 2.59187 40.2851C2.59187 40.3445 2.52707 40.393 2.44787 40.393C2.35835 40.393 2.30387 40.4828 2.30387 40.6306C2.30387 40.7613 2.26547 40.8682 2.21819 40.8682C2.17115 40.8682 2.10563 40.9751 2.07251 41.1058C2.03939 41.2365 1.96979 41.3434 1.91795 41.3434C1.75547 41.3434 1.80131 42.8223 1.96787 42.9591C2.04707 43.0242 2.11187 43.1578 2.11187 43.2559C2.11187 43.373 2.18027 43.4343 2.31083 43.4343C2.42003 43.4343 2.57435 43.4985 2.65355 43.5769C2.86331 43.7846 6.49667 43.7874 6.77363 43.58C6.87611 43.5032 7.16507 43.4391 7.41587 43.4374C7.66667 43.4358 7.87187 43.3916 7.87187 43.3393C7.87187 43.287 7.97675 43.2442 8.10491 43.2442C8.23331 43.2442 8.40299 43.1801 8.48219 43.1017C8.56139 43.0233 8.75627 42.9591 8.91539 42.9591C9.07451 42.9591 9.22811 42.9211 9.25715 42.8748C9.28619 42.8284 9.46139 42.7624 9.64691 42.7279C9.83219 42.6935 9.98387 42.6246 9.98387 42.5747C9.98387 42.5248 10.0883 42.4839 10.216 42.4839C10.3434 42.4839 10.4627 42.4402 10.4807 42.3867C10.4987 42.333 10.6859 42.2686 10.8966 42.2432C11.1073 42.2178 11.2259 42.2223 11.1599 42.2534C11.0939 42.2843 11.0399 42.4131 11.0399 42.5393C11.0399 42.6802 10.9842 42.769 10.8959 42.769C10.8064 42.769 10.7519 42.8589 10.7519 43.0066C10.7519 43.1373 10.7087 43.2442 10.6559 43.2442C10.6031 43.2442 10.5599 43.3512 10.5599 43.4819C10.5599 43.6296 10.5054 43.7195 10.4159 43.7195C10.3367 43.7195 10.2719 43.7622 10.2719 43.8145C10.2719 43.873 9.79091 43.9095 9.02075 43.9095C7.99739 43.9095 7.75979 43.9354 7.71467 44.0521C7.67579 44.1519 7.51859 44.1947 7.18955 44.1947C6.93131 44.1947 6.71987 44.2374 6.71987 44.2897C6.71987 44.342 6.63875 44.3848 6.53963 44.3848C6.44051 44.3848 6.30563 44.4489 6.23987 44.5273C6.17411 44.6057 5.97443 44.6699 5.79611 44.6699C5.61779 44.6699 5.47187 44.7127 5.47187 44.7649C5.47187 44.8172 5.38403 44.86 5.27675 44.86C5.16971 44.86 5.05691 44.9241 5.02667 45.0025C4.99619 45.0809 4.91123 45.1451 4.83755 45.1451C4.76411 45.1451 4.70387 45.1879 4.70387 45.2401C4.70387 45.2924 4.64099 45.3352 4.56419 45.3352C4.48739 45.3352 4.31651 45.4421 4.18451 45.5728C4.05251 45.7035 3.90251 45.8104 3.85115 45.8104C3.69107 45.8104 3.07187 46.4424 3.07187 46.6057C3.07187 46.691 3.01379 46.7608 2.94275 46.7608C2.76443 46.7608 2.30387 47.1662 2.30387 47.3232C2.30387 47.394 2.19587 47.5509 2.06387 47.672C1.93187 47.7932 1.82387 47.9698 1.82387 48.0643C1.82387 48.1589 1.71587 48.3167 1.58387 48.4148C1.45187 48.5129 1.34387 48.6693 1.34387 48.7622C1.34387 48.8551 1.31147 48.9451 1.27187 48.9627C1.20779 48.9908 0.985551 49.4073 0.824031 49.8022C0.792111 49.8806 0.682911 50.073 0.581871 50.2299C0.480591 50.3867 0.394671 50.6357 0.390831 50.7833C0.386991 50.9306 0.322191 51.1123 0.246831 51.1869C-0.0819687 51.5125 -0.111249 60.8226 0.215871 61.0592C0.308271 61.126 0.383871 61.2793 0.383871 61.3997C0.383871 61.6601 0.675711 62.3478 0.786351 62.3478C0.829071 62.3478 0.863871 62.4547 0.863871 62.5854C0.863871 62.7161 0.907071 62.823 0.959871 62.823C1.01267 62.823 1.05587 62.9218 1.05587 63.0425C1.05587 63.163 1.11923 63.3448 1.19675 63.4465C1.27427 63.5479 1.33907 63.69 1.34075 63.7625C1.34243 63.8349 1.45187 63.9932 1.58387 64.1144C1.71587 64.2355 1.82387 64.4221 1.82387 64.5292C1.82387 64.6362 1.86635 64.7238 1.91795 64.7238C1.96979 64.7238 2.03939 64.8308 2.07251 64.9614C2.10563 65.0921 2.17115 65.199 2.21819 65.199C2.26547 65.199 2.30387 65.2632 2.30387 65.3416C2.30387 65.42 2.35019 65.4842 2.40683 65.4842C2.57603 65.4842 2.78387 65.7422 2.78387 65.9525C2.78387 66.0608 2.84147 66.1495 2.91155 66.1495C2.98187 66.1495 3.09731 66.2564 3.16787 66.3871C3.24851 66.5363 3.37955 66.6247 3.52019 66.6247C3.68099 66.6247 3.74387 66.6789 3.74387 66.8179C3.74387 66.9238 3.80867 67.0355 3.88787 67.0654C3.96707 67.0956 4.03187 67.1797 4.03187 67.2527C4.03187 67.3254 4.12139 67.385 4.23083 67.385C4.44323 67.385 4.70387 67.5908 4.70387 67.7583C4.70387 67.8144 4.76867 67.8602 4.84787 67.8602C4.92707 67.8602 4.99187 67.9023 4.99187 67.9534C4.99187 68.0047 5.09987 68.0736 5.23187 68.1064C5.36387 68.1392 5.47187 68.1969 5.47187 68.2347C5.47187 68.2725 5.57987 68.3606 5.71187 68.4305C5.84387 68.5003 5.95187 68.6146 5.95187 68.6843C5.95187 68.7536 5.99507 68.8107 6.04787 68.8107C6.10067 68.8107 6.14387 68.8682 6.14387 68.9385C6.14387 69.0088 6.25187 69.1906 6.38387 69.3424C6.51563 69.4943 6.62363 69.6948 6.62387 69.7879C6.62387 69.8808 6.68867 69.9818 6.76787 70.0118C6.85667 70.0455 6.91187 70.19 6.91187 70.3891C6.91187 70.5663 6.95507 70.7115 7.00787 70.7115C7.06067 70.7115 7.10387 70.769 7.10387 70.8393C7.10387 70.9097 7.21187 71.0914 7.34387 71.2433C7.47563 71.3951 7.58363 71.5956 7.58387 71.6888C7.58387 71.7817 7.64867 71.8827 7.72787 71.9126C7.80707 71.9428 7.87187 72.043 7.87187 72.1357C7.87187 72.2281 7.93667 72.3572 8.01587 72.4223C8.09507 72.4874 8.15987 72.6026 8.15987 72.6784C8.15987 72.8393 8.38859 73.0876 8.53691 73.0876C8.59355 73.0876 8.63987 73.1517 8.63987 73.2301C8.63987 73.3085 8.68307 73.3727 8.73587 73.3727C8.78867 73.3727 8.83187 73.4404 8.83187 73.5231C8.83187 73.6058 9.04787 73.8885 9.31187 74.1511C9.57587 74.4139 9.79187 74.7097 9.79187 74.8085C9.79187 74.9076 9.85667 74.9884 9.93587 74.9884C10.0151 74.9884 10.0799 75.0343 10.0799 75.0903C10.0799 75.2217 10.3242 75.4636 10.4569 75.4636C10.5136 75.4636 10.5599 75.5119 10.5599 75.5708C10.5599 75.739 12.7703 77.8318 13.1231 77.9977C13.2973 78.0794 13.4399 78.1904 13.4399 78.2439C13.4399 78.3667 13.7351 78.5929 13.9004 78.5969C13.9691 78.5986 14.1251 78.7069 14.2475 78.8376C14.3699 78.9683 14.5189 79.0752 14.5789 79.0752C14.6389 79.0752 14.6879 79.1394 14.6879 79.2178C14.6879 79.2962 14.7635 79.3618 14.8559 79.3635C15.0635 79.367 15.3599 79.5811 15.3599 79.7272C15.3599 79.7869 15.4679 79.8356 15.5999 79.8356C15.7319 79.8356 15.8399 79.8783 15.8399 79.9306C15.8399 79.9829 15.9047 80.0257 15.9839 80.0257C16.0631 80.0257 16.1279 80.0898 16.1279 80.1682C16.1279 80.2497 16.2143 80.3108 16.33 80.3108C16.4413 80.3108 16.6172 80.4177 16.7209 80.5484C16.8534 80.715 17.0034 80.786 17.2225 80.786C17.458 80.786 17.5672 80.8447 17.6639 81.0236C17.7419 81.1676 17.8763 81.2612 18.0059 81.2612C18.1232 81.2612 18.2442 81.3254 18.2747 81.4038C18.3049 81.4822 18.4151 81.5463 18.5192 81.5463C18.6234 81.5463 18.7352 81.5891 18.7679 81.6414C18.8005 81.6937 18.8953 81.7364 18.9786 81.7364C19.0619 81.7364 19.2299 81.8433 19.3523 81.974C19.4747 82.1047 19.6446 82.2116 19.73 82.2116C19.8157 82.2116 19.9504 82.2758 20.0296 82.3542C20.1088 82.4326 20.276 82.4968 20.4011 82.4968C20.5261 82.4968 20.6552 82.5395 20.6879 82.5918C20.7205 82.6441 20.848 82.6868 20.9713 82.6868C21.0944 82.6868 21.2202 82.751 21.2507 82.8294C21.2809 82.9078 21.3937 82.972 21.5008 82.972C21.608 82.972 21.6959 83.0147 21.6959 83.067C21.6959 83.1193 21.7993 83.1621 21.9256 83.1621C22.052 83.1621 22.1802 83.2262 22.2107 83.3046C22.2428 83.388 22.3868 83.4472 22.5568 83.4472C22.7168 83.4472 22.8479 83.49 22.8479 83.5422C22.8479 83.5945 23.0161 83.6373 23.2216 83.6373C23.4652 83.6373 23.6147 83.6869 23.6507 83.7798C23.6809 83.8582 23.7937 83.9224 23.9008 83.9224C24.008 83.9224 24.0959 83.9652 24.0959 84.0174C24.0959 84.0697 24.2418 84.1125 24.4201 84.1125C24.5984 84.1125 24.7981 84.1766 24.8639 84.2551C24.9296 84.3335 25.1077 84.3976 25.2596 84.3976C25.4116 84.3976 25.5359 84.4404 25.5359 84.4927C25.5359 84.5449 25.7473 84.5877 26.0056 84.5877C26.3346 84.5877 26.4918 84.6305 26.5307 84.7303C26.5609 84.8087 26.6737 84.8728 26.7808 84.8728C26.888 84.8728 26.9759 84.9156 26.9759 84.9679C26.9759 85.0201 27.1441 85.0629 27.3496 85.0629C27.5932 85.0629 27.7427 85.1126 27.7787 85.2055C27.8164 85.3031 27.9707 85.348 28.2688 85.348C28.508 85.348 28.7039 85.3908 28.7039 85.4431C28.7039 85.4954 28.9153 85.5381 29.1736 85.5381C29.5026 85.5381 29.6598 85.5809 29.6987 85.6807C29.7306 85.7631 29.8741 85.8233 30.0392 85.8233C30.1962 85.8233 30.3512 85.866 30.3839 85.9183C30.4165 85.9706 30.6952 86.0133 31.0033 86.0133C31.4125 86.0133 31.5781 86.0518 31.6187 86.1559C31.6592 86.2604 31.8258 86.2985 32.2448 86.2985C32.5806 86.2985 32.8307 86.3422 32.8516 86.4047C32.8715 86.4636 33.1972 86.533 33.5797 86.5601C33.9604 86.5872 34.2719 86.6461 34.2719 86.6915C34.2719 86.7366 34.5275 86.7737 34.84 86.7737C35.1668 86.7737 35.4227 86.8179 35.4431 86.878C35.463 86.9374 35.8381 87.0044 36.315 87.0339C36.7753 87.0624 37.1519 87.1222 37.1519 87.1671C37.1519 87.2121 37.5371 87.2489 38.008 87.2489C38.5912 87.2489 38.8763 87.2855 38.9024 87.3637C38.9284 87.4402 39.2749 87.4908 39.9426 87.5157C40.4932 87.5364 40.9849 87.5917 41.0351 87.6386C41.0852 87.6856 41.5194 87.7241 41.9999 87.7241C42.4804 87.7241 42.916 87.7662 42.968 87.8177C43.0201 87.8693 43.6352 87.9401 44.3348 87.975C45.0344 88.0102 45.6296 88.075 45.6572 88.119C45.7225 88.224 50.5919 88.224 50.5919 88.119C50.5919 88.0748 51.1859 88.0104 51.9119 87.976C52.6441 87.9413 53.246 87.8712 53.2638 87.8187C53.2818 87.7659 53.6509 87.7241 54.0983 87.7241C54.5394 87.7241 54.9234 87.6875 54.9512 87.6428C54.9791 87.5982 55.4663 87.5381 56.0339 87.5095C56.6521 87.4782 57.0798 87.4154 57.1007 87.3532C57.1235 87.2857 57.5221 87.2489 58.2318 87.2489C58.8347 87.2489 59.3279 87.2125 59.3279 87.1679C59.3279 87.1232 59.7059 87.0581 60.1679 87.0232C60.6299 86.988 61.0223 86.9177 61.0398 86.8666C61.0576 86.8155 61.2601 86.7737 61.4903 86.7737C61.7202 86.7737 61.9314 86.7371 61.9595 86.6922C61.9873 86.6475 62.2592 86.5853 62.5636 86.5541C62.8679 86.5232 63.1319 86.4529 63.1504 86.398C63.1698 86.3405 63.4856 86.2985 63.8989 86.2985C64.4459 86.2985 64.6268 86.265 64.6691 86.1559C64.7065 86.0594 64.8592 86.0133 65.1404 86.0133C65.3694 86.0133 65.5832 85.9706 65.6159 85.9183C65.6485 85.866 65.7604 85.8233 65.8645 85.8233C65.9687 85.8233 66.0788 85.7591 66.1091 85.6807C66.1496 85.5764 66.3157 85.5381 66.7302 85.5381C67.0434 85.5381 67.2959 85.4956 67.2959 85.4431C67.2959 85.3908 67.4917 85.348 67.731 85.348C68.0291 85.348 68.1834 85.3031 68.2211 85.2055C68.2571 85.1126 68.4066 85.0629 68.6502 85.0629C68.8556 85.0629 69.0239 85.0201 69.0239 84.9679C69.0239 84.9156 69.1319 84.8728 69.2639 84.8728C69.4132 84.8728 69.5039 84.8189 69.5039 84.7303C69.5039 84.6226 69.6212 84.5877 69.9839 84.5877C70.2479 84.5877 70.4639 84.5449 70.4639 84.4927C70.4639 84.4404 70.6165 84.3976 70.803 84.3976C71.0156 84.3976 71.1625 84.3446 71.1971 84.2551C71.2312 84.1671 71.3771 84.1125 71.5782 84.1125C71.7572 84.1125 71.9039 84.0697 71.9039 84.0174C71.9039 83.9652 71.9917 83.9224 72.099 83.9224C72.206 83.9224 72.3188 83.8582 72.3491 83.7798C72.3829 83.6926 72.5286 83.6373 72.7244 83.6373C72.9006 83.6373 73.0712 83.5945 73.1039 83.5422C73.1365 83.49 73.2916 83.4472 73.4485 83.4472C73.6136 83.4472 73.7572 83.3871 73.7891 83.3046C73.8196 83.2262 73.9477 83.1621 74.0742 83.1621C74.2004 83.1621 74.3039 83.1193 74.3039 83.067C74.3039 83.0147 74.3917 82.972 74.499 82.972C74.606 82.972 74.7188 82.9078 74.7491 82.8294C74.7851 82.7365 74.9346 82.6868 75.1782 82.6868C75.3836 82.6868 75.5519 82.6488 75.5519 82.602C75.5519 82.5555 75.6599 82.4906 75.7919 82.4578C75.9239 82.425 76.0319 82.3561 76.0319 82.3048C76.0319 82.2537 76.1204 82.2116 76.2284 82.2116C76.3367 82.2116 76.5251 82.1047 76.6475 81.974C76.7936 81.8179 76.9732 81.7364 77.1709 81.7364C77.3365 81.7364 77.4719 81.6944 77.4719 81.6433C77.4719 81.592 77.5799 81.5231 77.7119 81.4903C77.8439 81.4575 77.9519 81.3926 77.9519 81.346C77.9519 81.2992 78.0167 81.2612 78.0959 81.2612C78.1751 81.2612 78.2399 81.2282 78.2399 81.1878C78.2399 81.1179 78.4636 80.9944 79.2695 80.6197C79.4663 80.5282 79.7629 80.3144 79.9288 80.1445C80.0948 79.9746 80.3226 79.8356 80.4352 79.8356C80.5532 79.8356 80.6399 79.7752 80.6399 79.693C80.6399 79.6122 80.726 79.5504 80.8384 79.5504C80.9476 79.5504 81.1794 79.4008 81.3536 79.2178C81.5279 79.0348 81.7302 78.8844 81.8032 78.8835C81.8761 78.8825 82.0376 78.7756 82.162 78.6459C82.2863 78.5162 82.4267 78.4099 82.474 78.4099C82.5212 78.4099 82.5599 78.3458 82.5599 78.2674C82.5599 78.189 82.6247 78.1248 82.7039 78.1248C82.7831 78.1248 82.8479 78.082 82.8479 78.0298C82.8479 77.9775 82.906 77.9347 82.977 77.9347C83.0478 77.9347 83.3312 77.7209 83.6065 77.4595C83.8818 77.1982 84.1477 76.9843 84.1976 76.9843C84.2473 76.9843 84.2879 76.9385 84.2879 76.8824C84.2879 76.7541 84.5308 76.5091 84.6582 76.5091C84.7945 76.5091 85.4399 75.8906 85.4399 75.7602C85.4399 75.7003 85.6559 75.4384 85.9199 75.1785C86.1839 74.9186 86.3999 74.6624 86.3999 74.6097C86.3999 74.5567 86.5727 74.3371 86.7839 74.1216C86.9951 73.9061 87.1679 73.6702 87.1679 73.5972C87.1679 73.524 87.3133 73.3247 87.4909 73.1539C87.6685 72.983 87.8442 72.7485 87.8814 72.6328C87.9184 72.5171 87.9892 72.4223 88.0384 72.4223C88.0876 72.4223 88.1279 72.3199 88.1279 72.1949C88.1279 72.0697 88.1927 71.9428 88.2719 71.9126C88.3511 71.8827 88.4159 71.771 88.4159 71.665C88.4159 71.5588 88.4591 71.4718 88.5119 71.4718C88.5647 71.4718 88.6079 71.4122 88.6079 71.3395C88.6079 71.2666 88.6727 71.1824 88.7519 71.1523C88.8311 71.1223 88.8959 71.0107 88.8959 70.9047C88.8959 70.7985 88.9391 70.7115 88.9919 70.7115C89.0447 70.7115 89.0879 70.6091 89.0879 70.4841C89.0879 70.3589 89.1527 70.232 89.2319 70.2018C89.3111 70.1719 89.3759 70.0602 89.3759 69.9543C89.3759 69.848 89.4191 69.7611 89.4719 69.7611C89.5247 69.7611 89.5679 69.6734 89.5679 69.5665C89.5679 69.4593 89.6759 69.2728 89.8079 69.1516C89.9399 69.0304 90.0479 68.8829 90.0479 68.8235C90.0479 68.6541 90.4134 68.3354 90.6076 68.3354C90.7043 68.3354 90.8413 68.2285 90.9119 68.0978C90.9824 67.9672 91.0979 67.8602 91.1682 67.8602C91.2383 67.8602 91.2959 67.8272 91.2959 67.7868C91.2959 67.7464 91.4471 67.6328 91.6319 67.5342C91.8167 67.4356 91.9679 67.2976 91.9679 67.2275C91.9679 67.1574 92.0142 67.0999 92.0708 67.0999C92.2036 67.0999 92.4479 66.858 92.4479 66.7266C92.4479 66.6705 92.4925 66.6247 92.547 66.6247C92.7184 66.6247 93.2159 66.0566 93.2159 65.861C93.2159 65.7584 93.2622 65.6743 93.3188 65.6743C93.4326 65.6743 93.6959 65.4397 93.6959 65.3383C93.6959 65.3029 93.8039 65.1898 93.9359 65.0871C94.0679 64.9842 94.1773 64.8284 94.179 64.7407C94.1828 64.5409 94.4012 64.2486 94.5464 64.2486C94.6069 64.2486 94.6559 64.1042 94.6559 63.9262C94.6559 63.7271 94.7111 63.5826 94.7999 63.5489C94.8791 63.5189 94.9439 63.3859 94.9439 63.2538C94.9439 63.1214 94.9871 63.0131 95.0399 63.0131C95.0927 63.0131 95.1359 62.9061 95.1359 62.7755C95.1359 62.6448 95.1784 62.5379 95.23 62.5379C95.2818 62.5379 95.3514 62.4309 95.3845 62.3003C95.4176 62.1696 95.4832 62.0626 95.5302 62.0626C95.5775 62.0626 95.6159 61.9284 95.6159 61.7642C95.6159 61.5898 95.6857 61.4154 95.7839 61.3444C95.9632 61.2144 96.0193 55.6775 95.8583 53.9933C95.8112 53.5012 95.8266 53.2239 95.9099 53.07C96.0774 52.7599 95.9694 51.172 95.7654 50.9489C95.6831 50.8588 95.6159 50.6922 95.6159 50.5789C95.6159 50.4653 95.5727 50.3724 95.5199 50.3724C95.4671 50.3724 95.4239 50.2855 95.4239 50.1793C95.4239 50.0733 95.3591 49.9616 95.2799 49.9317C95.2007 49.9015 95.1359 49.7746 95.1359 49.6494C95.1359 49.5244 95.0927 49.422 95.0399 49.422C94.9871 49.422 94.9439 49.335 94.9439 49.2288C94.9439 49.1229 94.8791 49.0112 94.7999 48.9812C94.7207 48.9511 94.6559 48.8313 94.6559 48.7151C94.6559 48.5868 94.5613 48.4538 94.4159 48.3765C94.2839 48.3067 94.1759 48.1653 94.1759 48.0624C94.1759 47.9598 94.0679 47.7766 93.9359 47.6554C93.8039 47.5342 93.6959 47.3852 93.6959 47.3242C93.6959 47.189 92.2909 45.8104 92.1532 45.8104C92.0992 45.8104 91.9472 45.7035 91.8152 45.5728C91.6832 45.4421 91.5124 45.3352 91.4356 45.3352C91.3588 45.3352 91.2959 45.2924 91.2959 45.2401C91.2959 45.1879 91.2311 45.1451 91.1519 45.1451C91.0727 45.1451 91.0079 45.0809 91.0079 45.0025C91.0079 44.9139 90.9172 44.86 90.7679 44.86C90.6359 44.86 90.5279 44.8172 90.5279 44.7649C90.5279 44.7127 90.3812 44.6699 90.2022 44.6699C90.0011 44.6699 89.8552 44.6152 89.8211 44.5273C89.7908 44.4489 89.6564 44.3848 89.523 44.3848C89.3893 44.3848 89.2799 44.342 89.2799 44.2897C89.2799 44.2374 89.0684 44.1947 88.8102 44.1947C88.4812 44.1947 88.324 44.1519 88.2851 44.0521C88.24 43.9354 88.0024 43.9095 86.979 43.9095C85.7855 43.9095 85.7279 43.9008 85.7279 43.7164C85.7279 43.6104 85.6631 43.4987 85.5839 43.4688C85.5047 43.4386 85.4384 43.3438 85.4368 43.2578C85.4329 43.0608 85.2136 42.769 85.0693 42.769C85.0091 42.769 84.9599 42.6621 84.9599 42.5314C84.9599 42.4007 84.9167 42.2938 84.8639 42.2938C84.8111 42.2938 84.7679 42.2261 84.7679 42.1434C84.7679 42.0605 84.8003 42.0104 84.8399 42.032C84.8795 42.0534 85.0523 42.1304 85.2239 42.2033C85.3955 42.276 85.5359 42.3689 85.5359 42.4098C85.5359 42.4504 85.6871 42.4839 85.8719 42.4839C86.0567 42.4839 86.2079 42.5184 86.2079 42.5607C86.2079 42.6771 86.9101 42.9591 87.2 42.9591C87.3407 42.9591 87.4559 43.0012 87.4559 43.0523C87.4559 43.1036 87.5639 43.1725 87.6959 43.2053C87.8279 43.2381 87.9359 43.3029 87.9359 43.3495C87.9359 43.3963 88.2553 43.4343 88.6456 43.4343C89.188 43.4343 89.3684 43.4681 89.4107 43.5769C89.4524 43.6848 89.6288 43.7195 90.1352 43.7195C90.5034 43.7195 90.8312 43.7622 90.8639 43.8145C90.9421 43.9397 92.4479 43.9397 92.4479 43.8145C92.4479 43.7622 92.6176 43.7195 92.8249 43.7195C93.0325 43.7195 93.267 43.6553 93.3462 43.5769C93.4254 43.4985 93.5797 43.4343 93.6889 43.4343C93.8195 43.4343 93.8879 43.373 93.8879 43.2559C93.8879 43.1578 93.9527 43.0242 94.0319 42.9591C94.1924 42.827 94.2462 41.3434 94.0902 41.3434C94.0432 41.3434 93.9776 41.2365 93.9445 41.1058C93.9114 40.9751 93.8418 40.8682 93.79 40.8682C93.7384 40.8682 93.6959 40.7805 93.6959 40.6736C93.6959 40.5664 93.5879 40.3799 93.4559 40.2587C93.3239 40.1375 93.2159 39.9933 93.2159 39.9384C93.2159 39.7453 92.877 39.204 92.5679 38.9034C92.3963 38.7364 92.2559 38.5316 92.2559 38.4479C92.2559 38.3645 92.1911 38.2714 92.1119 38.2415C92.0327 38.2113 91.9679 38.1272 91.9679 38.0542C91.9679 37.9815 91.9247 37.9219 91.8719 37.9219C91.8191 37.9219 91.7759 37.8423 91.7759 37.7451C91.7759 37.6479 91.6679 37.488 91.5359 37.3899C91.4039 37.2917 91.2959 37.1347 91.2959 37.0411C91.2959 36.9472 91.2311 36.8458 91.1519 36.8158C91.0727 36.7856 91.0079 36.7015 91.0079 36.6286C91.0079 36.5559 90.9678 36.4962 90.9186 36.4962C90.8694 36.4962 90.8154 36.4 90.7986 36.2824C90.7789 36.1451 90.6906 36.0576 90.5519 36.0381C90.4117 36.0184 90.3359 35.9424 90.3359 35.8214C90.3359 35.7188 90.2711 35.6102 90.1919 35.5803C90.1127 35.5501 90.0479 35.4477 90.0479 35.3524C90.0479 35.2574 89.9399 35.0953 89.8079 34.9924C89.6759 34.8898 89.5679 34.7684 89.5679 34.723C89.5679 34.6776 89.4599 34.5602 89.3279 34.4621C89.1959 34.364 89.0879 34.2209 89.0879 34.1442C89.0879 34.0674 88.8719 33.7918 88.6079 33.5319C88.3439 33.2719 88.1272 33.0091 88.1262 32.9481C88.1243 32.8124 87.7072 32.4094 87.5689 32.4094C87.5137 32.4094 87.4417 32.3251 87.4086 32.2217C87.3755 32.1186 87.243 31.952 87.1141 31.8518C86.9852 31.7512 86.8799 31.622 86.8799 31.564C86.8799 31.5063 86.8033 31.459 86.7097 31.459C86.6137 31.459 86.4606 31.3141 86.3586 31.1263C86.259 30.9434 86.1196 30.7937 86.0488 30.7937C85.978 30.7937 85.9199 30.7295 85.9199 30.6511C85.9199 30.5625 85.8292 30.5086 85.6799 30.5086C85.5138 30.5086 85.4399 30.4565 85.4399 30.3394C85.4399 30.1586 84.855 29.5581 84.6788 29.5581C84.6208 29.5581 84.3584 29.3443 84.0959 29.0829C83.8333 28.8216 83.553 28.6077 83.4731 28.6077C83.3932 28.6077 83.3279 28.565 83.3279 28.5127C83.3279 28.4604 83.2631 28.4176 83.1839 28.4176C83.1047 28.4176 83.0399 28.3535 83.0399 28.2751C83.0399 28.1967 82.9854 28.1325 82.9187 28.1325C82.852 28.1325 82.7164 28.0256 82.6172 27.8949C82.5181 27.7642 82.3566 27.6573 82.2584 27.6573C82.1603 27.6573 82.0799 27.6174 82.0799 27.5687C82.0799 27.52 81.9853 27.4503 81.8699 27.414C81.7544 27.3779 81.5226 27.2039 81.3546 27.0274C81.1866 26.8511 80.9572 26.7069 80.8446 26.7069C80.7059 26.7069 80.6399 26.6472 80.6399 26.5225C80.6399 26.421 80.6024 26.3151 80.5566 26.2868C80.5105 26.2587 80.4452 26.0639 80.4114 25.8536C80.3773 25.6433 80.307 25.4713 80.2547 25.4713C80.2026 25.4713 80.1599 25.3416 80.1599 25.1831C80.1599 25.0149 80.1001 24.8723 80.0159 24.8405C79.9367 24.8103 79.8719 24.6834 79.8719 24.5582C79.8719 24.4332 79.8287 24.3308 79.7759 24.3308C79.7231 24.3308 79.6799 24.1369 79.6799 23.9C79.6799 23.6049 79.6345 23.4521 79.5359 23.4148C79.4567 23.3847 79.3919 23.2578 79.3919 23.1326C79.3919 23.0076 79.3487 22.9052 79.2959 22.9052C79.2431 22.9052 79.1999 22.7614 79.1999 22.5858C79.1999 22.3561 79.1324 22.2164 78.9599 22.088C78.7979 21.9676 78.7194 21.8165 78.7182 21.6233C78.7172 21.4434 78.628 21.2538 78.4782 21.1132C78.3472 20.9901 78.2399 20.8069 78.2399 20.7061C78.2399 20.6056 78.1751 20.4985 78.0959 20.4685C78.0167 20.4383 77.9519 20.3329 77.9519 20.2338C77.9519 20.1349 77.9087 20.0539 77.8559 20.0539C77.8031 20.0539 77.7599 19.9898 77.7599 19.9113C77.7599 19.8329 77.6951 19.7688 77.6159 19.7688C77.5328 19.7688 77.4719 19.683 77.4719 19.5661C77.4719 19.4547 77.3207 19.2223 77.1359 19.0498C76.9511 18.8773 76.7999 18.6478 76.7999 18.5396C76.7999 18.4284 76.7375 18.3431 76.6559 18.3431C76.5767 18.3431 76.5119 18.279 76.5119 18.2006C76.5119 18.1222 76.4687 18.058 76.4159 18.058C76.3631 18.058 76.3184 18.0046 76.3168 17.9392C76.3124 17.7805 75.98 17.3927 75.8485 17.3927C75.7909 17.3927 75.7439 17.348 75.7439 17.2936C75.7439 17.163 73.5779 15.0167 73.4461 15.0167C73.3897 15.0167 73.3439 14.9708 73.3439 14.9147C73.3439 14.7833 73.0996 14.5414 72.9668 14.5414C72.9102 14.5414 72.8639 14.4773 72.8639 14.3989C72.8639 14.3103 72.7732 14.2563 72.6239 14.2563C72.4919 14.2563 72.3839 14.2105 72.3839 14.1544C72.3839 14.0418 72.147 13.7811 72.0445 13.7811C72.0088 13.7811 71.8945 13.6742 71.7908 13.5435C71.6869 13.4128 71.5386 13.3059 71.4611 13.3059C71.3836 13.3059 71.1558 13.1348 70.9549 12.9257C70.754 12.7166 70.5181 12.5456 70.4308 12.5456C70.3434 12.5456 70.2719 12.5028 70.2719 12.4505C70.2719 12.3982 70.2116 12.3555 70.1382 12.3555C70.0645 12.3555 69.9796 12.2913 69.9491 12.2129C69.9188 12.1345 69.8164 12.0703 69.7216 12.0703C69.627 12.0703 69.4684 11.9634 69.3692 11.8327C69.2701 11.7021 69.1086 11.5951 69.0104 11.5951C68.9123 11.5951 68.8319 11.5524 68.8319 11.5001C68.8319 11.4478 68.7433 11.405 68.6353 11.405C68.5271 11.405 68.3387 11.2981 68.2163 11.1674C68.0939 11.0368 67.9494 10.9298 67.8952 10.9298C67.8409 10.9298 67.7716 10.8657 67.7411 10.7873C67.7108 10.7089 67.598 10.6447 67.491 10.6447C67.3837 10.6447 67.2959 10.6019 67.2959 10.5497C67.2959 10.4974 67.1924 10.4546 67.0662 10.4546C66.9397 10.4546 66.8116 10.3905 66.7811 10.3121C66.7508 10.2336 66.638 10.1695 66.531 10.1695C66.4237 10.1695 66.3359 10.1267 66.3359 10.0745C66.3359 10.0222 66.2279 9.97941 66.0959 9.97941C65.9466 9.97941 65.8559 9.92547 65.8559 9.83685C65.8559 9.74822 65.7652 9.69428 65.6159 9.69428C65.4839 9.69428 65.3759 9.65151 65.3759 9.59924C65.3759 9.54697 65.2724 9.5042 65.1462 9.5042C65.0197 9.5042 64.8916 9.44004 64.8611 9.36163C64.8292 9.27918 64.6856 9.21907 64.5205 9.21907C64.3636 9.21907 64.2116 9.18105 64.1826 9.13472C64.1536 9.08839 63.9784 9.02233 63.7928 8.98788C63.6076 8.95343 63.4559 8.88452 63.4559 8.83462C63.4559 8.78473 63.3155 8.74243 63.1439 8.74077C62.9723 8.73911 62.7481 8.67495 62.6456 8.59821C62.5429 8.52146 62.3593 8.45873 62.2376 8.45873C62.1157 8.45873 62.0159 8.41596 62.0159 8.36369C62.0159 8.31142 61.9115 8.26865 61.7838 8.26865C61.6564 8.26865 61.5361 8.2216 61.5167 8.16434C61.4975 8.10684 61.2769 8.03698 61.0266 8.00918C60.7763 7.98114 60.5483 7.92127 60.52 7.87588C60.4916 7.8305 60.2802 7.79343 60.0503 7.79343C59.8156 7.79343 59.6154 7.74449 59.5943 7.682C59.5734 7.61951 59.296 7.55203 58.9624 7.52803C58.6355 7.50451 58.3679 7.44772 58.3679 7.40186C58.3679 7.35576 58.1704 7.31822 57.9289 7.31822C57.6668 7.31822 57.4321 7.26072 57.3462 7.17566C57.2423 7.07301 56.9896 7.03309 56.4409 7.03309C55.9976 7.03309 55.6799 6.99341 55.6799 6.93805C55.6799 6.88103 55.2992 6.84301 54.7302 6.84301C53.9744 6.84301 53.7692 6.81378 53.7251 6.70045C53.6788 6.58093 53.3836 6.55788 51.891 6.55788C50.769 6.55788 50.1119 6.52272 50.1119 6.46284C50.1119 6.40225 49.3439 6.3678 47.9999 6.3678C46.6559 6.3678 45.8879 6.40225 45.8879 6.46284ZM53.8165 9.02209C56.1097 9.26065 58.4701 9.67361 59.5679 10.0281C59.7791 10.0963 60.1031 10.1814 60.2879 10.2168C60.9522 10.3446 63.4537 11.199 64.1759 11.5448C64.3343 11.6206 64.7015 11.7938 64.9919 11.9294C70.3468 14.4329 75.4513 19.4376 77.1944 23.8931C77.36 24.3168 77.5336 24.7378 77.5799 24.8286C77.99 25.6334 77.5012 25.9225 76.312 25.578C75.4182 25.319 74.6951 25.2005 73.3429 25.0912C71.829 24.9685 71.4344 24.7331 71.0305 23.7104C70.8952 23.368 69.177 21.2876 68.4282 20.5598C66.0968 18.2935 62.1721 17.1242 59.5199 17.9062C58.4264 18.2286 57.7304 18.4631 57.3162 18.6489C52.5289 20.7969 48.5437 21.4582 44.8799 20.7123C43.7382 20.4797 42.6452 20.2026 42.2879 20.0551C42.1823 20.0116 41.8583 19.9054 41.5679 19.8194C41.2775 19.7334 40.8887 19.5939 40.7039 19.5095C40.5191 19.425 40.1735 19.2822 39.9359 19.1919C39.6983 19.1016 38.9982 18.8086 38.3802 18.5408C37.2716 18.0604 37.0832 18.0057 35.5679 17.7247C34.7084 17.5652 33.1624 17.6572 32.3519 17.9157C30.993 18.3493 30.609 18.4921 30.0102 18.7865C28.7363 19.4128 27.3846 20.5134 26.3934 21.7316C25.7975 22.4637 25.2104 23.2713 24.7631 23.9737C24.1424 24.9481 24.0563 24.9961 22.9266 24.9961C22.4466 24.9961 21.898 25.0358 21.7069 25.0845C21.5161 25.133 21.1007 25.2223 20.7839 25.2827C20.4671 25.343 19.8755 25.4815 19.4694 25.5906C18.836 25.7605 18.7081 25.77 18.5711 25.6574C17.9137 25.1173 20.1515 20.8466 22.3828 18.3835C23.4911 17.1601 26.4923 14.6094 27.3431 14.1677C27.466 14.104 27.6388 13.9888 27.7271 13.9116C28.4384 13.2909 30.9978 11.9128 32.6684 11.2511C38.0708 9.1112 46.3177 8.24203 53.8165 9.02209ZM35.6864 19.0177C37.0585 19.3306 37.696 19.5666 39.9145 20.5823C40.1932 20.7099 40.4776 20.8142 40.5464 20.8142C40.6156 20.8142 40.6981 20.8401 40.7303 20.872C40.8709 21.0115 42.7801 21.5922 43.8719 21.8276C46.2875 22.3489 49.9823 22.3675 51.9359 21.8683C52.1207 21.821 52.5959 21.7069 52.9919 21.6147C53.3879 21.5225 53.7767 21.4168 53.8559 21.3797C53.9351 21.3427 54.2375 21.2388 54.5279 21.1488C54.8183 21.0587 55.1855 20.9316 55.3439 20.8663C55.5023 20.8012 55.7831 20.6926 55.9679 20.6251C56.1527 20.5574 56.6593 20.3371 57.094 20.1356C57.5286 19.9339 57.9071 19.7688 57.9349 19.7688C57.963 19.7688 58.1692 19.6861 58.3928 19.5849C62.2357 17.8484 66.3745 19.4361 69.5876 23.8796C70.3931 24.9933 70.3777 25.0617 69.2639 25.3349C66.9992 25.8907 64.8248 26.9773 62.6879 28.621C62.2919 28.9256 61.63 29.4355 61.2169 29.7542C60.8039 30.0728 59.8717 30.7255 59.1457 31.205C57.484 32.3023 57.5303 32.2733 57.0719 32.5059C56.8607 32.613 56.5367 32.7905 56.3519 32.9003C54.5464 33.9726 53.2938 34.2613 54.7696 33.2648C54.9632 33.1341 55.5438 32.685 56.06 32.2669C56.576 31.8487 57.5044 31.1002 58.1226 30.6036C62.6034 27.0048 63.8497 25.181 62.5487 24.1269C61.1845 23.0216 55.3748 25.0484 53.0144 27.453C52.4401 28.0379 51.5519 29.336 51.5519 29.59C51.5519 29.656 51.5149 29.7508 51.4698 29.8005C51.2608 30.0305 51.0498 31.0289 50.9804 32.1179C50.8657 33.9173 50.3392 34.953 49.1699 35.6789C48.8557 35.8737 48.7631 35.9863 48.7859 36.1448C48.844 36.5497 53.9528 36.4257 55.9679 35.9704C57.2072 35.6903 57.3277 35.777 56.7527 36.535C55.9139 37.6405 55.6758 38.0464 55.2625 39.0747C51.2447 49.0711 63.807 57.5222 71.668 50.1115C74.2225 47.7032 75.4285 43.6052 74.5 40.488C74.3831 40.096 74.254 39.6419 74.2127 39.4789C73.8448 38.0231 71.9754 35.6504 70.3444 34.569C69.1355 33.7673 68.1546 33.3487 66.8334 33.0704C66.6056 33.0224 66.3892 32.9647 66.3524 32.9424C66.316 32.9198 65.7925 32.8756 65.1892 32.844C63.7153 32.7665 63.6702 32.6715 64.816 32.0589C67.3643 30.696 70.1663 30.6231 72.6191 31.8558C73.2601 32.1778 74.6996 33.097 74.8568 33.285C74.9886 33.4421 77.5252 38.4225 77.9204 39.3C78.5488 40.6947 78.9613 41.6549 79.2479 42.3889C79.3398 42.6241 79.4502 42.9021 79.4932 43.0066C79.7051 43.5203 80.3708 45.5821 80.5876 46.3949C80.9305 47.6825 80.92 47.7778 80.3759 48.2853C80.1251 48.5193 79.773 48.8815 79.5935 49.0901C77.637 51.364 75.5507 53.4078 74.5439 54.0373C74.3855 54.1363 74.2343 54.2426 74.2079 54.2734C74.1666 54.3217 72.8173 54.9784 72.2399 55.2312C71.5175 55.5475 68.5895 56.0702 67.5359 56.0712C66.3018 56.0721 61.6864 55.4852 60.8639 55.2227C60.7319 55.1804 60.3431 55.0713 59.9999 54.9803C59.1647 54.7584 58.006 54.3842 57.6335 54.2157C57.4669 54.1406 57.3061 54.0791 57.2759 54.0791C56.7484 54.0791 52.768 51.8872 51.5999 50.9536C49.8688 49.5698 48.8305 49.2859 48.6148 50.1372C48.3944 51.0061 49.1308 52.0224 51.1199 53.5946C51.4895 53.8869 51.8135 54.1494 51.8399 54.1782C51.9004 54.2442 53.3339 55.2443 54.0959 55.7523C55.1156 56.4321 57.4139 57.6327 58.6079 58.1098C58.9775 58.2574 59.3663 58.4152 59.4719 58.4601C60.0892 58.7236 61.2196 59.1163 61.36 59.1163C61.4504 59.1163 61.5476 59.1534 61.576 59.1985C61.604 59.2437 61.7903 59.3069 61.9895 59.3387C62.1889 59.3706 62.5895 59.4654 62.8799 59.5495C65.6255 60.3455 69.6623 60.4697 72.7362 59.8529C73.0619 59.7876 73.3607 59.702 73.4003 59.6628C73.4396 59.6236 73.5402 59.5915 73.624 59.5913C74.6896 59.5899 78.2317 57.6627 80.0264 56.108C80.9574 55.3016 81.1016 55.5515 80.4534 56.8472C79.4029 58.9472 77.492 60.7045 76.3679 60.6047C74.9564 60.4797 73.8044 60.8452 72.7182 61.763C71.9848 62.3825 70.1022 62.5374 67.9199 62.1574C67.6559 62.1116 67.0079 62.0028 66.4799 61.9158C65.9519 61.8288 65.4448 61.7193 65.3531 61.6725C65.2614 61.6257 65.0886 61.587 64.9691 61.5862C64.774 61.5853 63.6812 61.3303 62.9279 61.1098C62.3992 60.9552 61.4922 60.7192 61.1039 60.6351C60.8927 60.5895 60.4391 60.4645 60.0959 60.3576C59.7527 60.2507 59.2343 60.0936 58.9439 60.0088C58.6535 59.9237 58.3079 59.8215 58.1759 59.7816C58.0439 59.7417 57.6767 59.6338 57.3599 59.5419C57.0431 59.4499 56.6975 59.3416 56.5919 59.3009C56.4059 59.2297 55.7956 59.0745 55.1039 58.9232C54.9191 58.8828 54.5087 58.7785 54.1919 58.6917C52.072 58.111 50.8336 57.953 48.3359 57.9452C45.9001 57.9373 45.5807 57.9661 43.5359 58.3781C41.9178 58.7041 41.4464 58.8079 40.8479 58.9695C39.5536 59.319 38.4366 59.6158 38.2559 59.6578C38.1503 59.6823 37.9775 59.7384 37.8719 59.7823C37.7663 59.8263 37.5719 59.8847 37.4399 59.9118C37.3079 59.9392 36.9839 60.0252 36.7199 60.1031C34.126 60.8699 31.486 61.558 30.3359 61.7673C29.2472 61.9655 28.7034 62.0631 28.0799 62.1722C27.1604 62.333 24.1168 62.3387 23.836 62.18C23.7193 62.1142 23.4601 61.9089 23.26 61.7241C23.0596 61.5392 22.5316 61.2115 22.0864 60.9958L21.2766 60.6037L20.1709 60.6102C19.1137 60.6161 18.7825 60.5443 18.5279 60.254C18.5015 60.2238 18.3071 60.0767 18.0959 59.9268C17.0982 59.219 16.1276 58.0269 15.5423 56.7902C14.8919 55.4163 15.027 55.3018 16.1725 56.2567C20.6608 59.9988 26.9687 61.2488 33.0239 59.5965C33.2087 59.5462 33.5975 59.4428 33.8879 59.367C35.846 58.8554 38.6003 57.6902 40.7416 56.4675C41.2112 56.1992 41.6288 55.9799 41.6696 55.9799C41.7104 55.9799 41.7582 55.9464 41.776 55.9056C41.8074 55.8324 42.9925 55.0295 43.0693 55.0295C43.1536 55.0295 45.866 52.8397 46.3321 52.3954C48.1278 50.6837 47.5636 48.8339 45.6205 50.0619C45.4772 50.1524 44.9711 50.5276 44.4959 50.8954C43.604 51.5854 42.5308 52.2733 42.3455 52.2733C42.2874 52.2733 42.2399 52.312 42.2399 52.3593C42.2399 52.4294 40.1274 53.5022 39.4079 53.7973C38.8446 54.0285 38.4623 54.1889 38.1695 54.3167C37.9897 54.3951 37.8056 54.4593 37.7603 54.4593C37.7147 54.4593 37.3324 54.5683 36.9107 54.7016C35.7568 55.0666 34.5006 55.38 33.6959 55.5042C33.2999 55.5653 32.8247 55.6518 32.6399 55.6965C31.5102 55.9695 27.9671 56.0811 26.5919 55.8868C23.0521 55.3871 21.1676 54.2568 17.8736 50.6576C17.3713 50.1087 16.5678 49.2374 16.088 48.7215C15.6083 48.2055 15.2022 47.7041 15.1856 47.6074C15.1434 47.3629 15.8586 44.8262 16.2952 43.6719C16.7108 42.5723 16.9033 42.0904 17.187 41.4384C17.3348 41.0987 17.6377 40.3932 17.86 39.871C18.2759 38.8932 19.8443 35.7309 20.8537 33.835C21.2286 33.131 22.4653 32.2096 23.7119 31.7059C23.9495 31.6099 24.2303 31.4963 24.3359 31.4535C25.3996 31.0225 27.8951 30.8619 28.8959 31.1598C30.5204 31.6436 32.044 32.3873 32.0608 32.7048C32.0624 32.7366 31.5786 32.7929 30.9856 32.83C29.8019 32.9043 29.1152 33.0438 27.6479 33.5081C26.7572 33.7901 25.3324 34.7102 24.35 35.6375C23.782 36.1738 22.5599 37.6961 22.5599 37.8672C22.5599 37.8993 22.4591 38.0851 22.3357 38.2802C22.2126 38.4753 22.0864 38.7202 22.0554 38.8248C22.0244 38.9293 21.9124 39.2501 21.8063 39.5376C20.8638 42.0949 21.1597 45.4632 22.5311 47.7877C23.7724 49.8918 25.1725 51.0964 27.7528 52.2811C30.0748 53.347 33.8855 53.0051 36.5855 51.4882C37.7442 50.8374 39.1379 49.5102 39.9107 48.3214C40.25 47.7994 41.0519 46.0575 41.132 45.6678C41.1644 45.511 41.2487 45.1047 41.3195 44.7649C41.8974 41.9902 41.2645 39.2765 39.4727 36.846C38.7366 35.8476 38.7584 35.7627 39.7098 35.926C41.9065 36.3028 42.9745 36.3941 45.2159 36.3964C47.5093 36.3988 47.7985 36.2517 46.7519 35.6161C45.6433 34.9428 45.1009 33.7405 44.984 31.6966C44.9483 31.0755 44.86 30.5651 44.7287 30.2234C44.618 29.9359 44.5028 29.6185 44.4721 29.5178C43.9679 27.8547 41.3185 25.7591 38.3387 24.6658C37.9763 24.5328 37.5935 24.3855 37.4879 24.3382C37.3823 24.2909 36.9719 24.179 36.5759 24.0894C36.1799 23.9998 35.7306 23.8891 35.5775 23.8435C33.7739 23.3058 32.3663 24.6416 33.2072 26.0931C33.6503 26.8578 36.4588 29.4695 38.9773 31.459C39.4192 31.808 39.9551 32.2526 40.2563 32.5201C40.3544 32.6073 40.7322 32.8853 41.0958 33.1379C41.7148 33.5682 41.9219 33.835 41.6365 33.835C41.3912 33.835 39.4739 32.8378 38.1119 32.0017C36.6354 31.0955 36.5807 31.0582 35.0879 29.9457C34.5599 29.5524 34.0847 29.1986 34.0319 29.1599C33.9791 29.1212 33.7847 28.9672 33.5999 28.8178C33.2202 28.5108 31.6014 27.3722 31.5445 27.3722C31.5241 27.3722 31.233 27.2073 30.8977 27.0058C29.7186 26.297 28.0592 25.5989 27.0239 25.376C25.5752 25.0643 25.5992 25.1344 26.4944 23.8233C28.8587 20.3602 32.7205 18.3412 35.6864 19.0177ZM33.0239 35.7765C34.8772 36.2289 36.5209 37.3939 37.5162 38.96C37.9542 39.6488 38.0305 39.7925 38.3046 40.4405C38.7875 41.5834 38.8055 44.0424 38.3387 45.1118C38.2667 45.2767 38.2079 45.4518 38.2079 45.5013C38.2079 46.0853 36.5576 48.1501 35.5763 48.794C34.6108 49.4275 34.437 49.5047 32.8732 49.9949C32.1436 50.2234 29.5645 50.0407 28.9124 49.7143C28.8241 49.6701 28.516 49.5327 28.2277 49.4092C22.8817 47.1172 22.732 39.1061 27.9851 36.4371C28.4992 36.1757 28.7838 36.0678 29.8079 35.7464C30.2476 35.6083 32.4181 35.6287 33.0239 35.7765ZM66.37 35.7879C71.8355 37.1513 73.8246 43.9036 69.9256 47.8571C65.7565 52.0846 58.6763 50.0507 57.4595 44.2762C56.7244 40.7884 58.922 37.0325 62.3039 35.9968C62.5943 35.9079 62.9615 35.7948 63.1199 35.7456C63.6011 35.5957 65.7097 35.6233 66.37 35.7879ZM79.4 37.3628C80.1306 37.9397 80.4236 38.3412 80.8336 39.3266C81.238 40.2996 81.7242 41.2973 82.3019 42.3413C83.8693 45.1729 83.9411 45.4428 83.2559 45.9249C82.1807 46.6815 81.9328 46.6244 81.657 45.5576C81.3251 44.2743 80.9612 43.2155 80.2573 41.486C80.0872 41.0678 79.8414 40.4481 79.7111 40.109C79.581 39.7697 79.3936 39.342 79.2949 39.1586C78.1496 37.0285 78.1861 36.4038 79.4 37.3628ZM17.4757 37.3307C17.4124 37.6741 17.2324 38.0932 16.0691 40.6075C15.7847 41.2222 15.5519 41.7877 15.5519 41.8645C15.5519 41.941 15.4487 42.2292 15.3227 42.5051C15.1964 42.7809 14.8871 43.6696 14.6353 44.4798C13.9729 46.6109 13.9268 46.656 13.0189 46.0594C12.1993 45.5208 12.1835 45.3559 12.8344 44.1215C13.13 43.5607 13.5224 42.813 13.7063 42.4601C13.8899 42.1073 14.078 41.8186 14.1241 41.8186C14.1702 41.8186 14.2079 41.7649 14.2079 41.6996C14.2079 41.634 14.354 41.2811 14.5326 40.9155C14.7112 40.5496 15.0388 39.8161 15.2608 39.285C15.6563 38.3389 15.8209 38.1205 16.8335 37.2005C17.2304 36.8398 17.5542 36.9054 17.4757 37.3307ZM30.4844 40.1005C30.4544 40.1487 30.3073 40.215 30.1576 40.2473C28.922 40.5161 28.0787 42.88 28.766 44.1472C29.6557 45.7871 31.7584 46.2226 33.2056 45.0669C34.9319 43.6879 34.4694 40.9167 32.3896 40.1784C31.8884 40.0007 30.5802 39.9472 30.4844 40.1005ZM63.4976 40.2388C60.0769 41.8158 62.1872 46.8226 65.7208 45.5139C68.0454 44.6528 68.1848 41.414 65.9456 40.2948C65.1968 39.9206 64.2356 39.8985 63.4976 40.2388ZM43.2875 46.752C42.3474 47.0514 41.9598 47.8742 42.0935 49.2866C42.1705 50.1016 42.2579 50.1398 42.6102 49.5128C43.3057 48.2751 44.1618 47.7951 45.6803 47.7911C46.5412 47.7889 46.75 47.7649 46.5839 47.6877C46.4651 47.6324 46.3679 47.5509 46.3679 47.5067C46.3679 47.4622 46.3112 47.4261 46.2419 47.4261C46.1725 47.4261 45.9385 47.3413 45.7216 47.2375C44.8108 46.8019 43.778 46.5959 43.2875 46.752ZM51.1753 46.9055C50.5045 47.1367 49.965 47.3729 49.4605 47.6564C49.2707 47.763 49.3828 47.7792 50.2883 47.7759C51.4662 47.7718 52.0996 47.9845 52.6624 48.5728C52.8172 48.7348 53.0195 48.9373 53.1119 49.0231C53.2043 49.1088 53.2811 49.2231 53.2825 49.2768C53.284 49.3305 53.408 49.5351 53.5583 49.7316L53.8316 50.089L53.8916 49.791C54.3587 47.4791 53.1712 46.2174 51.1753 46.9055ZM11.8974 53.0426C13.065 53.4839 13.2104 53.6447 13.4795 54.7919C13.7881 56.1085 13.953 56.6179 14.2446 57.1585C14.3828 57.4144 14.4959 57.6772 14.4959 57.7425C14.4959 57.9226 15.4952 59.2644 16.2361 60.0793C17.0936 61.0222 17.0687 61.2498 16.0799 61.4988C15.8687 61.5518 15.6095 61.6338 15.5039 61.6808C15.0515 61.8825 13.0909 62.242 12.4319 62.2444C10.7008 62.2504 7.96667 60.661 7.60403 59.4381C7.38515 58.7005 7.48667 57.4866 7.87283 56.2175C7.96835 55.9039 8.11403 55.3237 8.19635 54.9283C8.65571 52.7247 9.67835 52.2037 11.8974 53.0426ZM86.9759 52.7879C87.4132 52.944 87.7141 53.7113 88.3019 56.17C89.0332 59.2273 88.9218 59.6928 87.1199 61.1122C85.9074 62.0674 83.7164 62.5421 82.2829 62.1603C82.0921 62.1095 81.5903 61.984 81.1679 61.8814C78.7408 61.2926 78.6431 61.1702 79.7288 60.0777C80.7966 59.0035 81.6388 57.6681 82.0712 56.3632C82.3105 55.6416 82.6559 54.2338 82.6559 53.9795C82.6559 53.7852 83.3836 53.2826 84.0479 53.0179C84.2591 52.9338 84.5399 52.8202 84.6719 52.7656C85.0055 52.6275 86.5691 52.6425 86.9759 52.7879ZM51.5519 59.454C51.9479 59.5371 52.4046 59.6448 52.5666 59.6935C52.7288 59.7419 52.9664 59.7835 53.0946 59.7859C53.223 59.788 53.5007 59.8531 53.7119 59.9306C53.9231 60.0078 54.3119 60.1131 54.5759 60.1644C55.0897 60.2642 55.3525 60.3343 57.2159 60.868C58.7987 61.3213 59.2535 61.4556 59.9999 61.6894C61.2596 62.0843 65.4544 63.086 66.4799 63.2369C68.3156 63.5068 69.0143 63.5833 69.6464 63.5833C70.1552 63.5833 70.3069 63.6223 70.5265 63.8093L70.792 64.0353L70.3398 64.9866C69.6049 66.5334 69.8161 67.0956 70.9237 66.5415C71.1196 66.4436 71.6255 66.2478 72.0479 66.1069C74.3382 65.3418 76.7876 65.2962 79.0079 65.9777C79.3806 66.092 79.5152 66.1431 80.1961 66.4284C80.4536 66.5363 80.696 66.6247 80.7347 66.6247C80.7736 66.6247 81.1074 66.7891 81.4768 66.9901C82.8688 67.7476 84.3822 68.186 86.6555 68.4904C88.0703 68.6797 85.5901 72.4855 81.7376 76.0363C81.1033 76.621 78.22 78.5475 77.056 79.1646C75.5872 79.943 74.4368 80.4971 73.6129 80.8226C73.1538 81.0041 72.6354 81.2139 72.4609 81.289C71.4095 81.7417 70.6506 82.0002 67.6799 82.9176C67.0156 83.1226 64.9475 83.6387 63.4559 83.9713C62.8758 84.1006 61.8018 84.2971 59.8079 84.639C58.5944 84.8469 56.2604 85.1454 55.0079 85.2525C54.4007 85.3046 53.5151 85.3889 53.0399 85.44C50.6238 85.7002 46.5952 85.6605 43.3919 85.3452C42.8903 85.2958 41.7887 85.1898 40.9439 85.1097C40.0991 85.0296 38.9111 84.8982 38.3039 84.8179C37.3331 84.6892 36.8077 84.6022 35.1839 84.3019C34.9727 84.2627 34.4759 84.1802 34.0799 84.1182C33.6839 84.0562 33.2303 83.9661 33.0719 83.9176C32.7671 83.8247 31.2853 83.4952 30.4799 83.341C30.2159 83.2906 29.7839 83.1697 29.5199 83.0725C29.2559 82.9751 28.7807 82.8313 28.4639 82.7527C27.3901 82.4868 27.0244 82.3858 26.8319 82.3024C26.7263 82.2565 26.049 82.0244 25.3266 81.7863C24.6044 81.5485 23.6442 81.1833 23.1928 80.9749C22.7413 80.7665 22.2779 80.5959 22.1629 80.5959C22.048 80.5959 21.8125 80.489 21.6392 80.3583C21.4662 80.2276 21.2893 80.1205 21.2464 80.1202C21.2032 80.1198 21.0383 80.0511 20.8799 79.9674C20.7215 79.8836 20.0303 79.5348 19.3439 79.1921C18.6575 78.8493 17.9231 78.4323 17.7119 78.2652C17.5007 78.0984 17.0903 77.8074 16.7999 77.6185C14.8566 76.3554 14.6598 76.1962 13.0096 74.5517C11.6584 73.2054 11.1052 72.5701 10.6588 71.852C10.4802 71.5645 10.2592 71.2437 10.1677 71.1392C9.86771 70.7961 9.21587 69.4049 9.21587 69.1079C9.21587 68.7539 9.42731 68.622 10.0016 68.6172C10.9424 68.6094 12.3726 68.1344 14.1599 67.236C18.2092 65.2005 21.1268 64.9999 24.8456 66.5018C26.2955 67.0873 26.54 66.6088 25.6691 64.8902C25.1281 63.8226 25.2786 63.5838 26.4932 63.5824C27.3028 63.5814 29.1503 63.364 29.6632 63.2093C29.8477 63.1537 30.1206 63.1081 30.2699 63.1081C30.711 63.1081 34.7492 62.0824 37.1999 61.3477C38.5772 60.935 40.1694 60.498 40.8829 60.3374C41.3248 60.2378 41.9389 60.072 42.248 59.9691C42.5569 59.866 42.8929 59.7816 42.9944 59.7816C43.096 59.7816 43.6266 59.6913 44.1736 59.5813C46.1516 59.1826 49.9477 59.117 51.5519 59.454Z", fill: "#0E3145" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.2559 8.84109C37.5642 9.30632 30.5332 11.4631 27.7271 13.9116C27.6388 13.9888 27.466 14.1041 27.3431 14.1677C26.4923 14.6094 23.4911 17.1601 22.3828 18.3836C20.1515 20.8466 17.9138 25.1173 18.5711 25.6574C18.7082 25.77 18.8361 25.7605 19.4694 25.5906C19.8755 25.4816 20.4671 25.3431 20.7839 25.2827C21.1007 25.2224 21.5162 25.133 21.707 25.0845C21.898 25.0358 22.4466 24.9962 22.9266 24.9962C24.0563 24.9962 24.1425 24.9482 24.7631 23.9737C25.2105 23.2714 25.7975 22.4637 26.3934 21.7317C26.8523 21.1676 27.6645 20.3595 28.1164 20.0174C29.0913 19.2794 29.3498 19.1111 30.0102 18.7866C30.609 18.4922 30.993 18.3494 32.3519 17.9157C33.1624 17.6572 34.7085 17.5653 35.5679 17.7247C37.0833 18.0058 37.2717 18.0604 38.3802 18.5409C38.9982 18.8087 39.6983 19.1016 39.9359 19.1919C40.1735 19.2822 40.5191 19.425 40.7039 19.5096C40.8887 19.5939 41.2775 19.7334 41.5679 19.8194C41.8583 19.9054 42.1823 20.0117 42.2879 20.0551C42.5133 20.1483 43.3538 20.3795 43.9679 20.5175C48.3671 21.5057 52.12 20.9804 57.3162 18.649C57.7305 18.4632 58.4265 18.2287 59.5199 17.9062C62.1722 17.1243 66.0969 18.2935 68.4282 20.5598C69.177 21.2876 70.8952 23.3681 71.0306 23.7105C71.4345 24.7331 71.829 24.9686 73.343 25.0912C74.6951 25.2005 75.4182 25.3191 76.312 25.5781C77.5012 25.9226 77.9901 25.6334 77.5799 24.8286C77.5336 24.7379 77.3601 24.3168 77.1945 23.8932C75.4514 19.4376 70.3468 14.4329 64.9919 11.9295C64.7015 11.7938 64.3343 11.6206 64.1759 11.5448C63.4538 11.1991 60.9522 10.3447 60.2879 10.2168C60.1031 10.1814 59.7791 10.0964 59.5679 10.0282C58.4702 9.67366 56.1098 9.2607 53.8166 9.02214C51.7182 8.80378 46.275 8.7009 44.2559 8.84109ZM52.3199 9.26664C53.0855 9.34196 53.9927 9.40588 54.3359 9.40849C56.459 9.42536 61.2966 10.6431 64.0319 11.8494C68.0385 13.6163 72.761 17.2785 74.6915 20.1164C74.8638 20.3695 75.0794 20.6622 75.1708 20.7668C75.3875 21.0148 75.9318 21.9774 76.4606 23.0478C77.075 24.2917 77.2 24.6005 77.2554 25.0097L77.3051 25.3763H76.9586C76.7678 25.3763 76.449 25.3174 76.2498 25.2454C75.6974 25.0458 74.2641 24.8187 73.2479 24.7702C72.1007 24.7151 72.0993 24.7144 71.6534 24.064C71.4494 23.7663 71.2559 23.5016 71.2235 23.4755C71.1911 23.4493 71.0488 23.2448 70.9072 23.0209C68.7904 19.6757 65.4352 17.5793 61.943 17.4206C59.8943 17.3274 58.979 17.5619 55.7279 19.012C50.4633 21.3608 44.8864 21.2042 39.2524 18.5492C36.7372 17.364 34.3554 16.9895 32.4479 17.4795C31.7838 17.6501 30.2822 18.1883 29.9999 18.357C29.8415 18.4515 29.4743 18.6542 29.1839 18.8072C27.7358 19.5711 26.3685 20.9789 24.7197 23.4042L23.896 24.616L23.4438 24.6169C22.5899 24.6186 20.4837 24.8954 19.8662 25.0869C19.0211 25.3492 18.7783 25.3445 18.845 25.0674C19.0151 24.3584 20.0162 22.2732 20.6358 21.337C20.8434 21.0234 21.0861 20.6385 21.1746 20.4816C21.2634 20.3248 21.6239 19.8757 21.9758 19.4837C22.3276 19.0916 22.714 18.6438 22.8345 18.4884C23.3126 17.8711 25.4651 15.9923 26.7359 15.0832C27.4751 14.5543 28.1015 14.0943 28.1279 14.0608C28.1543 14.0273 28.3919 13.8824 28.6559 13.7386C28.9199 13.5949 29.2007 13.4228 29.2799 13.3566C29.4282 13.2323 31.1908 12.2605 31.2678 12.2605C31.2916 12.2605 31.6252 12.1108 32.0094 11.9278C32.3937 11.7449 32.7606 11.5952 32.8247 11.5952C32.8888 11.5952 33.2514 11.4733 33.6306 11.3245C34.78 10.8731 35.2948 10.7222 37.1039 10.3071C37.4735 10.2223 38.0135 10.0964 38.3039 10.027C39.3822 9.76965 39.8106 9.68934 40.5599 9.6038C40.9823 9.55557 41.7167 9.4686 42.1919 9.41063C44.0745 9.18039 44.7076 9.1495 47.7599 9.13976C49.8827 9.1331 51.3873 9.17492 52.3199 9.26664ZM33.3599 19.0301C30.6069 19.5486 28.3254 21.1415 26.4945 23.8233C25.5993 25.1344 25.5753 25.0643 27.0239 25.3761C28.0593 25.599 29.7186 26.297 30.8978 27.0058C31.233 27.2073 31.5242 27.3722 31.5446 27.3722C31.6014 27.3722 33.2202 28.5108 33.5999 28.8178C33.7847 28.9673 33.9791 29.1212 34.0319 29.16C34.0847 29.1987 34.5599 29.5525 35.0879 29.9457C36.5807 31.0582 36.6354 31.0955 38.1119 32.0017C39.4739 32.8379 41.3913 33.8351 41.6366 33.8351C41.9219 33.8351 41.7148 33.5683 41.0958 33.138C40.7322 32.8854 40.3545 32.6074 40.2563 32.5202C39.9551 32.2526 39.4192 31.8081 38.9774 31.459C36.4588 29.4696 33.6503 26.8578 33.2073 26.0932C32.3663 24.6416 33.7739 23.3058 35.5775 23.8435C35.7306 23.8891 36.1799 23.9999 36.5759 24.0894C36.9719 24.179 37.3823 24.2909 37.4879 24.3382C37.5935 24.3855 37.9763 24.5328 38.3387 24.6659C41.3186 25.7591 43.9679 27.8548 44.4722 29.5178C44.5029 29.6185 44.6181 29.936 44.7287 30.2235C44.86 30.5652 44.9483 31.0755 44.9841 31.6966C45.101 33.7405 45.6434 34.9428 46.7519 35.6162C47.7986 36.2518 47.5094 36.3989 45.2159 36.3965C42.9746 36.3941 41.9066 36.3029 39.7098 35.926C38.7585 35.7628 38.7366 35.8476 39.4727 36.846C41.2646 39.2765 41.8974 41.9902 41.3195 44.765C41.2487 45.1047 41.1645 45.5111 41.1321 45.6679C41.0519 46.0575 40.2501 47.7994 39.9107 48.3215C39.1379 49.5102 37.7442 50.8375 36.5855 51.4883C33.8855 53.0051 30.0748 53.3471 27.7528 52.2812C22.3874 49.8179 19.9458 44.5858 21.8063 39.5376C21.9124 39.2501 22.0245 38.9294 22.0554 38.8248C22.0864 38.7203 22.2126 38.4753 22.3358 38.2802C22.4591 38.0852 22.5599 37.8993 22.5599 37.8673C22.5599 37.6962 23.782 36.1738 24.3501 35.6376C25.3324 34.7102 26.7573 33.7902 27.6479 33.5081C29.1153 33.0439 29.8019 32.9044 30.9856 32.83C31.5786 32.793 32.0625 32.7366 32.0608 32.7048C32.044 32.3874 30.5205 31.6437 28.8959 31.1599C27.8951 30.8619 25.3996 31.0226 24.3359 31.4536C24.2303 31.4963 23.9495 31.6099 23.7119 31.7059C22.4654 32.2096 21.2286 33.1311 20.8538 33.8351C19.8443 35.731 18.2759 38.8932 17.86 39.871C17.6378 40.3933 17.3349 41.0987 17.187 41.4385C16.9034 42.0905 16.7109 42.5723 16.2952 43.672C15.8587 44.8263 15.1434 47.363 15.1857 47.6075C15.2022 47.7042 15.6083 48.2055 16.0881 48.7216C16.5678 49.2374 17.3714 50.1087 17.8737 50.6576C21.1677 54.2569 23.0522 55.3871 26.5919 55.8868C27.9671 56.0812 31.5102 55.9695 32.6399 55.6965C32.8247 55.6518 33.2999 55.5653 33.6959 55.5043C34.5006 55.38 35.7568 55.0666 36.9107 54.7016C37.3324 54.5684 37.7147 54.4593 37.7603 54.4593C37.8057 54.4593 37.9898 54.3951 38.1695 54.3167C38.4623 54.1889 38.8446 54.0285 39.4079 53.7973C40.1274 53.5022 42.2399 52.4294 42.2399 52.3593C42.2399 52.312 42.2874 52.2733 42.3455 52.2733C42.5308 52.2733 43.6041 51.5854 44.4959 50.8954C44.9711 50.5276 45.4773 50.1524 45.6206 50.0619C47.5636 48.834 48.1278 50.6837 46.3322 52.3954C45.8661 52.8398 43.1536 55.0295 43.0694 55.0295C42.9926 55.0295 41.8074 55.8324 41.776 55.9056C41.7582 55.9465 41.7105 55.98 41.6697 55.98C41.6289 55.98 41.2113 56.1993 40.7416 56.4675C38.6003 57.6903 35.8461 58.8555 33.8879 59.367C33.5975 59.4428 33.2087 59.5462 33.0239 59.5966C26.9687 61.2489 20.6608 59.9988 16.1726 56.2568C15.0271 55.3018 14.8919 55.4164 15.5423 56.7902C16.1277 58.0269 17.0983 59.219 18.0959 59.9268C18.3071 60.0768 18.5015 60.2238 18.5279 60.254C18.7826 60.5444 19.1138 60.6161 20.171 60.6102L21.2766 60.6038L22.0864 60.9958C22.5316 61.2116 23.0596 61.5392 23.26 61.7241C23.4602 61.9089 23.7194 62.1142 23.836 62.1801C24.1168 62.3388 27.1605 62.3331 28.0799 62.1722C28.7034 62.0632 29.2473 61.9655 30.3359 61.7673C31.486 61.558 34.126 60.8699 36.7199 60.1031C36.9839 60.0252 37.3079 59.9392 37.4399 59.9119C37.5719 59.8848 37.7663 59.8263 37.8719 59.7824C37.9775 59.7384 38.1503 59.6823 38.2559 59.6579C38.4366 59.6158 39.5536 59.319 40.8479 58.9695C41.4465 58.808 41.9178 58.7041 43.5359 58.3781C45.5807 57.9661 45.9002 57.9374 48.3359 57.9452C50.8336 57.953 52.072 58.1111 54.1919 58.6918C54.5087 58.7785 54.9191 58.8828 55.1039 58.9232C55.7956 59.0745 56.4059 59.2297 56.5919 59.301C56.6975 59.3416 57.0431 59.45 57.3599 59.5419C57.6767 59.6339 58.0439 59.7417 58.1759 59.7817C58.3079 59.8216 58.6535 59.9238 58.9439 60.0088C59.2343 60.0936 59.7527 60.2507 60.0959 60.3576C60.4391 60.4645 60.8927 60.5895 61.1039 60.6351C61.4922 60.7193 62.3992 60.9552 62.9279 61.1099C63.6813 61.3304 64.774 61.5853 64.9691 61.5863C65.0886 61.587 65.2614 61.6257 65.3531 61.6725C65.4448 61.7193 65.9519 61.8289 66.4799 61.9158C67.0079 62.0028 67.6559 62.1116 67.9199 62.1575C70.1022 62.5374 71.9848 62.3825 72.7182 61.7631C73.8045 60.8452 74.9565 60.4797 76.3679 60.6047C77.4921 60.7045 79.403 58.9472 80.4534 56.8472C81.1017 55.5516 80.9574 55.3016 80.0265 56.108C78.2318 57.6627 74.6896 59.5899 73.624 59.5913C73.5402 59.5916 73.4397 59.6237 73.4003 59.6629C73.3607 59.7021 73.0619 59.7876 72.7362 59.8529C69.6623 60.4698 65.6255 60.3455 62.8799 59.5495C62.5895 59.4654 62.189 59.3706 61.9895 59.3388C61.7903 59.3069 61.6041 59.2437 61.576 59.1986C61.5477 59.1534 61.4505 59.1164 61.36 59.1164C61.2196 59.1164 60.0892 58.7236 59.4719 58.4601C59.3663 58.4152 58.9775 58.2574 58.6079 58.1099C57.4139 57.6328 55.1157 56.4321 54.0959 55.7523C53.3339 55.2443 51.9004 54.2443 51.8399 54.1782C51.8135 54.1495 51.4895 53.8869 51.1199 53.5946C49.1308 52.0224 48.3945 51.0062 48.6148 50.1372C48.8306 49.2859 49.8688 49.5698 51.5999 50.9537C52.768 51.8872 56.7484 54.0791 57.2759 54.0791C57.3062 54.0791 57.467 54.1407 57.6335 54.2157C58.006 54.3842 59.1647 54.7584 59.9999 54.9804C60.3431 55.0714 60.7319 55.1804 60.8639 55.2227C61.6864 55.4853 66.3018 56.0722 67.5359 56.0712C68.5895 56.0703 71.5175 55.5475 72.2399 55.2313C72.8174 54.9785 74.1666 54.3217 74.2079 54.2735C74.2343 54.2426 74.3855 54.1364 74.5439 54.0373C75.5507 53.4079 77.637 51.364 79.5935 49.0901C79.773 48.8815 80.1251 48.5194 80.3759 48.2853C80.92 47.7778 80.9306 47.6825 80.5876 46.3949C80.3709 45.5821 79.7051 43.5204 79.4932 43.0067C79.4502 42.9021 79.3398 42.6241 79.2479 42.3889C78.9614 41.6549 78.5488 40.6948 77.9205 39.3C77.5252 38.4226 74.9886 33.4421 74.8569 33.285C74.6997 33.0971 73.2602 32.1778 72.6191 31.8558C70.1663 30.6231 67.3643 30.6961 64.816 32.059C63.6702 32.6715 63.7154 32.7666 65.1892 32.844C65.7926 32.8756 66.316 32.9198 66.3525 32.9424C66.3892 32.9647 66.6057 33.0225 66.8334 33.0705C68.1546 33.3487 69.1355 33.7674 70.3444 34.5691C71.9754 35.6504 73.8448 38.0231 74.2127 39.4789C74.254 39.6419 74.3831 40.096 74.5 40.4881C75.4286 43.6052 74.2226 47.7032 71.668 50.1116C63.807 57.5223 51.2447 49.0711 55.2626 39.0748C55.6758 38.0464 55.9139 37.6406 56.7527 36.535C57.3278 35.777 57.2073 35.6903 55.9679 35.9705C53.9529 36.4257 48.844 36.5497 48.7859 36.1449C48.7631 35.9864 48.8558 35.8738 49.1699 35.6789C50.3392 34.953 50.8658 33.9173 50.9805 32.1179C51.0498 31.029 51.2608 30.0305 51.4698 29.8005C51.515 29.7509 51.5519 29.6561 51.5519 29.59C51.5519 28.7178 53.7767 26.5213 55.6108 25.5828C59.8413 23.418 63.0746 23.245 63.0712 25.1836C63.0695 26.1074 61.2782 28.0693 58.1226 30.6037C57.5044 31.1003 56.5761 31.8487 56.0601 32.2669C55.5438 32.6851 54.9633 33.1342 54.7696 33.2648C53.2938 34.2614 54.5464 33.9727 56.3519 32.9004C56.5367 32.7906 56.8607 32.6131 57.0719 32.5059C57.5303 32.2733 57.484 32.3023 59.1458 31.205C59.8718 30.7255 60.8039 30.0728 61.217 29.7542C61.63 29.4356 62.2919 28.9257 62.6879 28.6211C64.8249 26.9773 66.9993 25.8907 69.2639 25.335C70.3778 25.0617 70.3931 24.9933 69.5877 23.8796C66.3746 19.4362 62.2358 17.8485 58.3929 19.5849C58.1692 19.6861 57.963 19.7688 57.935 19.7688C57.9071 19.7688 57.5286 19.934 57.094 20.1357C56.6594 20.3372 56.1527 20.5574 55.9679 20.6252C55.7831 20.6926 55.5023 20.8012 55.3439 20.8663C55.1855 20.9317 54.8183 21.0588 54.5279 21.1488C54.2375 21.2389 53.9351 21.3427 53.8559 21.3798C53.7767 21.4169 53.3879 21.5226 52.9919 21.6148C52.5959 21.707 52.1207 21.821 51.9359 21.8683C49.9823 22.3675 46.2875 22.349 43.8719 21.8277C42.7802 21.5922 40.871 21.0115 40.7303 20.872C40.6982 20.8402 40.6156 20.8143 40.5465 20.8143C40.4776 20.8143 40.1932 20.71 39.9146 20.5824C37.696 19.5666 37.0586 19.3307 35.6865 19.0177C35.151 18.8956 34.0425 18.9016 33.3599 19.0301ZM36.3839 19.3407C36.7271 19.4309 37.8004 19.842 38.769 20.2542C45.5882 23.1557 50.3212 23.1654 57.0719 20.2918C59.5437 19.2397 60.2178 19.0712 61.7279 19.1287C64.81 19.2456 67.1766 20.7252 69.4943 23.9844C70.102 24.8391 70.1646 25.09 69.771 25.0929C68.1225 25.105 64.8484 26.7758 61.6799 29.2217C60.4638 30.1605 57.3278 32.3144 57.177 32.3144C57.1434 32.3144 56.955 32.414 56.758 32.5356C55.222 33.4851 54.3906 33.7151 55.4968 32.8847C55.8796 32.5972 56.2396 32.3168 56.2965 32.2617C56.3534 32.2065 56.8967 31.7632 57.5039 31.2761C60.9326 28.5265 63.0578 26.3871 63.2219 25.5203C63.5646 23.7121 61.4495 23.173 58.3199 24.2707C53.4489 25.9794 51.1494 28.3317 50.8756 31.8867C50.7179 33.9332 50.3342 34.6948 48.9839 35.6414C48.5262 35.9621 48.4641 36.2178 48.7893 36.4433C49.2155 36.7389 53.5278 36.5657 55.7279 36.1648C56.5629 36.0125 57.0333 35.9835 56.8766 36.0938C56.1695 36.5913 54.9594 38.8303 54.4797 40.5287C54.1475 41.7046 54.3239 45.5203 54.7302 45.9482C54.7773 45.9979 54.8159 46.1531 54.8159 46.293C54.8159 46.433 54.8807 46.6007 54.9599 46.6658C55.0391 46.7309 55.1039 46.8559 55.1039 46.9436C55.1039 47.0313 55.1418 47.1436 55.1882 47.1933C55.2345 47.243 55.413 47.5402 55.5849 47.8538C56.7047 49.8975 58.4315 51.4163 60.7199 52.3705C61.9732 52.893 62.355 52.9819 63.9839 53.1287C64.9434 53.2154 66.6707 53.0622 67.1519 52.8478C67.2575 52.8008 67.4975 52.7374 67.6852 52.7069C67.8731 52.6765 68.1954 52.5665 68.4016 52.4625C68.6078 52.3584 68.8247 52.2733 68.8838 52.2733C68.9954 52.2733 70.6446 51.3072 70.9799 51.0456C71.7962 50.4081 73.3439 48.7461 73.3439 48.507C73.3439 48.4697 73.4022 48.3716 73.4738 48.2889C73.9295 47.7619 74.7753 45.7242 74.7808 45.1404C74.7825 44.9548 74.83 44.7574 74.8862 44.7018C75.0254 44.564 75.0254 41.1643 74.8862 41.0265C74.83 40.9709 74.7839 40.815 74.7839 40.6803C74.7839 39.9793 73.7272 37.5593 73.1584 36.9572C73.0422 36.8344 72.8656 36.6056 72.766 36.4488C72.2397 35.6198 70.2664 34.081 68.9961 33.5086C67.8777 33.0049 66.3359 32.6233 65.1359 32.5537C64.8719 32.5385 64.6192 32.5211 64.5743 32.5152C64.5294 32.5093 64.7123 32.3581 64.9809 32.1792C66.9827 30.8455 70.7193 30.8037 72.79 32.0918C72.987 32.2141 73.1742 32.3144 73.2064 32.3144C73.3816 32.3144 74.7141 33.3323 74.8696 33.5851C75.4818 34.5795 77.8946 39.565 78.9232 41.9612C79.2407 42.7011 79.739 44.1268 80.1102 45.358C80.3507 46.1557 80.5898 46.9398 80.6416 47.1002C80.8036 47.602 80.8175 47.5811 79.1519 49.3833C79.0991 49.4406 78.7355 49.8469 78.3441 50.2862C73.7646 55.4271 71.097 56.3753 63.7919 55.4587C63.1583 55.3791 62.4023 55.2935 62.1119 55.2683C59.4693 55.0395 54.179 52.8319 51.8807 50.9988C50.9831 50.2829 50.7765 50.1365 50.2269 49.8272C48.3282 48.7587 47.7052 50.5901 49.3874 52.2952C54.0532 57.0245 62.0661 60.3942 68.6399 60.3916C70.5525 60.3909 71.2413 60.3232 72.5025 60.0124C72.8054 59.9378 73.1198 59.8767 73.2014 59.8767C74.4765 59.8767 78.4103 57.7461 80.351 56.0044C80.8571 55.5501 80.8545 55.7495 80.3409 56.7662C79.163 59.0974 77.5821 60.447 76.0293 60.447C74.5259 60.447 73.7685 60.7257 72.5075 61.7424L71.9613 62.1829L70.0847 62.1302C68.3255 62.081 66.9693 61.9201 65.5199 61.5884C63.6779 61.1671 59.9685 60.2013 59.3279 59.9763C59.1959 59.9299 58.8287 59.8185 58.5119 59.7287C58.1951 59.6389 57.6767 59.4842 57.3599 59.3849C56.5754 59.1387 53.1422 58.2503 52.6079 58.1553C50.6514 57.8072 50.0505 57.7501 48.2879 57.7444C46.57 57.7387 45.0148 57.8618 44.1599 58.0707C43.9751 58.116 43.5647 58.2021 43.2479 58.2619C42.3213 58.4375 40.4519 58.8895 39.3119 59.2138C38.7311 59.3789 38.1263 59.549 37.9679 59.5918C37.8095 59.6343 36.8159 59.9112 35.7599 60.207C28.4298 62.2594 24.5483 62.7118 23.4294 61.6447C22.5683 60.8233 20.9627 60.2856 19.7373 60.4082C18.5802 60.5237 16.6048 58.7198 15.6402 56.6667C15.2942 55.9305 15.4079 55.6423 15.8399 56.161C16.4963 56.9492 19.4344 58.7619 20.9279 59.2996C21.1127 59.3663 21.3503 59.4578 21.4559 59.503C21.7257 59.6187 23.7227 60.1172 24.5279 60.2699C25.4322 60.4415 29.4618 60.4455 30.3839 60.2756C30.7535 60.2077 31.4231 60.0868 31.8719 60.0069C32.3207 59.9268 32.9039 59.8016 33.1679 59.7282C35.7275 59.0168 36.7502 58.6426 38.7359 57.6907C39.8766 57.144 40.4152 56.8536 41.6469 56.1221C42.6064 55.552 44.1628 54.4177 45.6887 53.1762C47.4134 51.7729 48.0522 50.4863 47.3805 49.7685C46.8801 49.2339 46.1212 49.4641 44.5948 50.6134C42.0611 52.5214 38.6514 54.1834 35.9519 54.8264C35.7407 54.8768 35.3102 54.9877 34.9953 55.073C34.6802 55.1581 34.1618 55.2707 33.8433 55.3232C33.2762 55.4166 32.9255 55.4684 31.3199 55.6963C30.3357 55.8357 26.5722 55.7752 25.8239 55.6076C23.5617 55.1015 22.1387 54.4289 20.6085 53.1427C19.7311 52.4052 18.4948 51.1761 17.675 50.2263C17.4962 50.0191 16.913 49.3847 16.379 48.8164C15.845 48.248 15.3775 47.7315 15.3403 47.6683C15.2651 47.5409 15.814 45.5878 16.3965 43.9096C16.7889 42.7795 16.8631 42.5906 17.2454 41.7448C17.3699 41.4689 17.4719 41.2097 17.4719 41.1686C17.4719 41.1275 17.5799 40.8723 17.7119 40.6014C17.8439 40.3305 17.9519 40.0863 17.9519 40.0589C17.9519 39.8449 21.0988 33.6398 21.3366 33.3848C23.2307 31.3552 27.61 30.559 30.087 31.7938C30.4518 31.9756 30.807 32.1243 30.8766 32.1243C31.0646 32.1243 31.5933 32.4634 31.5196 32.5366C31.4846 32.5713 31.1932 32.5998 30.8718 32.6003C29.9183 32.6014 28.36 32.9379 27.4079 33.348C26.5974 33.6973 26.4021 33.7964 26.4011 33.8589C26.4004 33.8981 26.3517 33.9301 26.2929 33.9301C25.7387 33.9301 22.6559 36.785 22.6559 37.2982C22.6559 37.3255 22.5126 37.5733 22.3377 37.8487C21.7852 38.7181 21.2181 40.2305 21.2166 40.8388C21.2162 41.0056 21.1727 41.1686 21.1199 41.2009C21.0621 41.2363 21.0239 41.8971 21.0239 42.8641C21.0239 43.8312 21.0621 44.492 21.1199 44.5274C21.1727 44.5597 21.2162 44.7227 21.2166 44.8895C21.2178 45.3953 21.8937 47.3247 22.0996 47.4102C22.1416 47.4278 22.1759 47.5084 22.1759 47.5899C22.1759 48.3155 25.0422 51.3184 26.1359 51.7385C26.2811 51.7941 26.3999 51.8732 26.3999 51.9141C26.3999 51.9547 26.481 51.9882 26.5802 51.9882C26.6793 51.9882 26.8142 52.0523 26.8799 52.1308C26.9457 52.2092 27.071 52.2733 27.1583 52.2733C27.2457 52.2733 27.4024 52.3294 27.5066 52.3978C27.6107 52.4663 27.8903 52.5782 28.1279 52.6466C28.3655 52.7148 28.6679 52.807 28.7999 52.8514C29.3073 53.0223 31.1591 53.2309 31.6749 53.1753C33.7384 52.9524 34.3194 52.8246 35.1676 52.4071C35.3171 52.3334 35.4942 52.2733 35.5612 52.2733C35.7285 52.2733 37.3898 51.2761 37.9199 50.8574C39.0801 49.9415 39.9693 48.8026 40.8196 47.1429C41.02 46.7518 41.1839 46.3769 41.1839 46.3099C41.1839 46.2429 41.2242 46.1139 41.2734 46.0231C42.0446 44.6032 41.8634 40.5083 40.955 38.8248C40.8702 38.668 40.8009 38.4903 40.8004 38.4299C40.7997 38.2636 39.4734 36.3062 39.3616 36.3062C39.3078 36.3062 39.2639 36.242 39.2639 36.1636C39.2639 36.0852 39.2747 36.022 39.2879 36.023C39.3011 36.0239 39.6791 36.0883 40.1279 36.166C42.3551 36.5514 46.6029 36.741 47.1794 36.4811C47.589 36.2962 47.4988 35.9869 46.9096 35.5558C45.7526 34.7097 45.2159 33.6324 45.2159 32.1566C45.2159 29.3272 43.455 26.916 40.227 25.3248C39.3316 24.8833 38.831 24.6723 37.5237 24.1862C34.4474 23.0418 32.0363 23.9257 32.9085 25.8779C33.3419 26.8478 36.6854 29.9583 40.1301 32.596C40.3665 32.777 40.5743 32.9588 40.5918 32.9999C40.6096 33.041 40.6852 33.0748 40.7598 33.0748C40.8347 33.0748 40.8959 33.1109 40.8959 33.1553C40.8959 33.1995 40.9931 33.2822 41.1119 33.339C41.3123 33.4347 41.3142 33.4423 41.1359 33.4464C40.6103 33.458 37.4121 31.4804 34.8652 29.5689C32.8178 28.032 31.9727 27.4456 30.8687 26.7946C29.675 26.0906 27.0815 25.0912 26.4486 25.0912C26.0255 25.0912 25.9614 24.8474 26.2674 24.4017C28.366 21.3449 30.1943 19.9461 32.9279 19.306C33.1655 19.2504 33.4463 19.1843 33.5519 19.1594C33.9503 19.0655 35.7844 19.1829 36.3839 19.3407ZM29.8079 35.7464C28.7838 36.0679 28.4992 36.1757 27.9851 36.4371C22.732 39.1061 22.8818 47.1173 28.2278 49.4092C28.516 49.5328 28.8242 49.6701 28.9125 49.7143C29.5504 50.0336 32.259 50.2316 32.8514 50.0018C32.9728 49.9548 33.2663 49.8633 33.5039 49.7984C33.7415 49.7335 33.8848 49.6625 33.8222 49.6404C33.7595 49.6183 33.5003 49.6739 33.2462 49.7637C32.9711 49.8611 32.3769 49.945 31.779 49.9714C25.0338 50.2672 21.5776 42.3095 26.4424 37.6843C30.2303 34.0829 36.3155 35.5813 38.2158 40.5831C38.3646 40.9752 38.4887 41.2011 38.4914 41.0854C38.4938 40.9695 38.4251 40.7128 38.3387 40.5152C38.2521 40.3172 38.1347 40.0485 38.0776 39.9178C37.3466 38.2415 35.6339 36.6842 33.7439 35.9773C32.8977 35.6609 30.5238 35.5216 29.8079 35.7464ZM63.1199 35.7457C62.9615 35.7949 62.5943 35.908 62.3039 35.9968C60.0887 36.6752 57.7958 39.1501 57.5402 41.1386C57.5094 41.3777 57.5668 41.2783 57.7238 40.8207C58.7706 37.7682 61.2525 35.8795 64.3754 35.759C65.998 35.6963 66.6472 35.8628 68.5062 36.8185C70.9367 38.068 72.4396 41.8667 71.6294 44.712C69.6885 51.5268 60.1466 51.7812 57.8006 45.0807C57.639 44.6196 57.5063 44.3375 57.5054 44.4539C57.5046 44.5704 57.609 44.942 57.7374 45.2799C59.6901 50.416 66.0714 51.7653 69.9256 47.8572C73.8246 43.9036 71.8355 37.1514 66.37 35.788C65.7098 35.6233 63.6011 35.5958 63.1199 35.7457ZM78.4766 36.977C78.3693 37.1487 78.7269 38.102 79.295 39.1587C79.3936 39.3421 79.581 39.7698 79.7111 40.1091C79.8414 40.4481 80.0872 41.0678 80.2574 41.486C80.9613 43.2155 81.3251 44.2743 81.657 45.5576C81.9328 46.6245 82.1807 46.6815 83.2559 45.925C83.9411 45.4429 83.8694 45.1729 82.3019 42.3414C81.7242 41.2973 81.238 40.2996 80.8336 39.3266C80.266 37.9616 78.784 36.4844 78.4766 36.977ZM17.0896 37.0418C16.9286 37.1043 16.9144 37.1164 16.192 37.8119C15.7543 38.2332 15.5956 38.4839 15.2608 39.2851C15.0388 39.8161 14.7112 40.5496 14.5327 40.9155C14.3541 41.2812 14.2079 41.634 14.2079 41.6996C14.2079 41.765 14.1703 41.8187 14.1242 41.8187C14.0781 41.8187 13.8899 42.1073 13.7063 42.4602C13.5225 42.813 13.1301 43.5608 12.8344 44.1215C12.1835 45.3559 12.1994 45.5208 13.019 46.0594C13.9269 46.6561 13.973 46.6109 14.6354 44.4798C14.8871 43.6696 15.1965 42.781 15.3227 42.5051C15.4487 42.2292 15.5519 41.941 15.5519 41.8645C15.5519 41.7878 15.7847 41.2223 16.0691 40.6076C17.2324 38.0932 17.4124 37.6741 17.4758 37.3308C17.5447 36.9582 17.4626 36.8969 17.0896 37.0418ZM79.69 37.9896C80.0776 38.3363 80.3858 38.8961 80.7434 39.9028C80.9118 40.3776 81.3899 41.3171 82.841 44.0265C83.5082 45.2725 83.5151 45.3775 82.9538 45.7451C82.198 46.2405 82.2347 46.2842 81.4958 44.0046C81.2162 43.1421 80.9598 42.3937 80.9262 42.3414C80.8924 42.2891 80.7866 42.0325 80.6908 41.7711C80.4563 41.131 79.8186 39.627 79.4702 38.8925C78.9134 37.7188 78.9981 37.3707 79.69 37.9896ZM16.738 38.0897C16.763 38.1296 16.6022 38.5252 16.3806 38.9688C16.1591 39.4124 15.9287 39.9249 15.8687 40.1079C15.7384 40.5042 15.3131 41.5609 15.1223 41.9612C15.0477 42.118 14.9186 42.4602 14.8351 42.7216C14.7518 42.9829 14.6423 43.2823 14.5919 43.3869C14.5418 43.4914 14.4175 43.8763 14.3162 44.2422C13.8907 45.7784 13.7013 46.0112 13.1555 45.67C12.6746 45.3697 12.6724 45.2537 13.1313 44.371C13.3312 43.9866 13.907 42.8808 14.4107 41.9137C14.9145 40.9466 15.3851 39.963 15.4564 39.7277C15.5277 39.4925 15.6431 39.2325 15.713 39.1501C15.7828 39.0674 15.8399 38.9382 15.8399 38.8628C15.8399 38.5131 16.5959 37.8623 16.738 38.0897ZM31.3919 40.0069C34.2186 40.2557 35.3339 43.3669 33.2056 45.067C30.2697 47.4119 26.763 43.2771 29.4887 40.6841C29.7119 40.4717 29.9262 40.298 29.9651 40.298C30.1096 40.298 30.5529 40.1008 30.508 40.0566C30.4185 39.9677 29.8046 40.2861 29.3992 40.6311C27.2188 42.4885 28.6715 45.9608 31.5582 45.7912C35.3862 45.5664 35.2744 40.0537 31.4399 39.957L30.5759 39.9352L31.3919 40.0069ZM63.8399 39.9815C60.5802 41.0826 61.0802 45.6061 64.4822 45.791C67.7457 45.9682 68.884 41.8747 66.0292 40.2267C65.8254 40.1091 65.6058 40.015 65.5413 40.0174C65.4767 40.02 65.6682 40.1469 65.967 40.2996C68.6481 41.6702 67.6826 45.7206 64.6763 45.7144C60.8349 45.7064 60.7701 40.2968 64.6079 40.009L65.4239 39.948L64.7039 39.9404C64.3079 39.9361 63.9191 39.9546 63.8399 39.9815ZM38.5439 42.8035C38.5439 43.6268 38.572 44.2018 38.6063 44.0811C38.686 43.802 38.6846 41.9558 38.6046 41.5863C38.5713 41.4325 38.5439 41.9802 38.5439 42.8035ZM57.3719 41.8305C57.2942 42.215 57.3117 43.6979 57.3974 44.0027C57.4338 44.1322 57.4636 43.6297 57.4636 42.886C57.4636 41.4197 57.461 41.3893 57.3719 41.8305ZM38.2727 44.9895C37.697 46.7975 36.3952 48.3143 34.617 49.2491C34.2424 49.446 33.9923 49.6083 34.0614 49.6095C34.421 49.6169 35.9351 48.6087 36.5901 47.9261C37.3024 47.1838 38.2079 45.8266 38.2079 45.5013C38.2079 45.4519 38.2763 45.2687 38.3601 45.0941C38.4438 44.9194 38.4976 44.7013 38.4796 44.6091C38.4618 44.5171 38.3687 44.6882 38.2727 44.9895ZM43.3079 46.5784C42.1468 46.8041 41.5734 48.3675 42.0489 50.0118C42.1828 50.4754 42.3578 50.4034 42.6662 49.758C43.3586 48.3091 44.7558 47.6683 46.5083 47.9957C47.2079 48.1264 47.3442 48.0867 47.1033 47.8232C46.72 47.4038 44.0313 46.3327 43.7471 46.4862C43.7366 46.4919 43.5388 46.5332 43.3079 46.5784ZM51.4079 46.6582C50.6562 46.8602 49.0686 47.6096 48.8567 47.8624C48.6671 48.0886 48.814 48.1176 49.5198 47.9926C51.3311 47.6721 52.5004 48.1882 53.343 49.6801C53.74 50.3829 53.8391 50.3934 54.0102 49.7499C54.5658 47.6619 53.2941 46.1512 51.4079 46.6582ZM44.9116 46.9103C45.1403 46.9866 45.5046 47.1337 45.7216 47.2375C45.9386 47.3413 46.1726 47.4262 46.2419 47.4262C46.3113 47.4262 46.3679 47.4623 46.3679 47.5067C46.3679 47.5509 46.4651 47.6324 46.5839 47.6878C46.75 47.765 46.5412 47.789 45.6803 47.7911C44.1618 47.7952 43.3058 48.2751 42.6102 49.5128C42.2579 50.1399 42.1706 50.1016 42.0935 49.2866C41.8929 47.1665 42.9662 46.2616 44.9116 46.9103ZM53.241 46.9989C53.8562 47.4635 54.1271 48.6258 53.8917 49.791L53.8317 50.089L53.5583 49.7316C53.4081 49.5351 53.284 49.3306 53.2826 49.2769C53.2811 49.2232 53.2043 49.1089 53.1119 49.0231C53.0195 48.9373 52.8172 48.7349 52.6624 48.5728C52.0996 47.9845 51.4662 47.7719 50.2883 47.7759C49.1536 47.78 49.1577 47.788 50.0714 47.3423C51.5078 46.6413 52.6096 46.5221 53.241 46.9989ZM9.81497 52.7454C8.90849 52.8847 8.51057 53.4214 8.19641 54.9283C8.11409 55.3237 7.96841 55.9039 7.87289 56.2176C7.48673 57.4866 7.38521 58.7006 7.60409 59.4381C7.96673 60.661 10.7008 62.2504 12.4319 62.2444C13.091 62.2421 15.0515 61.8826 15.5039 61.6808C15.6095 61.6338 15.8687 61.5518 16.0799 61.4988C17.0687 61.2498 17.0937 61.0222 16.2362 60.0794C15.4953 59.2644 14.4959 57.9226 14.4959 57.7425C14.4959 57.6772 14.3829 57.4144 14.2447 57.1585C13.9531 56.6179 13.7882 56.1085 13.4795 54.7919C13.1301 53.3026 11.632 52.466 9.81497 52.7454ZM84.6719 52.7656C84.5399 52.8203 84.2591 52.9339 84.0479 53.018C83.3836 53.2827 82.6559 53.7852 82.6559 53.9796C82.6559 54.2338 82.3106 55.6416 82.0713 56.3632C81.6388 57.6682 80.7966 59.0035 79.7289 60.0777C78.6431 61.1702 78.7408 61.2926 81.1679 61.8814C81.5903 61.984 82.0922 62.1095 82.283 62.1603C84.5308 62.7591 87.7223 61.3838 88.6082 59.4343C88.9377 58.7091 88.3881 55.7588 87.4701 53.3271C87.2423 52.7233 85.5801 52.3897 84.6719 52.7656ZM86.841 53.1187C87.3856 53.4473 88.625 58.0025 88.4378 58.9866C88.1538 60.4795 85.6912 61.976 83.5377 61.9641C82.3924 61.9579 79.8981 61.3446 79.6072 60.9975C79.4925 60.8606 79.8875 60.1618 80.0798 60.1618C80.2554 60.1618 81.5747 58.2577 81.9573 57.4517C82.3259 56.6757 82.7354 55.3539 82.8918 54.4351C83.0656 53.4164 85.8158 52.4998 86.841 53.1187ZM11.4033 53.2706C12.6671 53.7077 12.8932 53.8802 13.0399 54.5196C13.4107 56.1344 13.5688 56.6598 13.8943 57.3555C14.2031 58.0163 14.8977 59.1632 15.0755 59.3065C15.2471 59.4447 16.2239 60.7953 16.2239 60.8944C16.2239 61.0764 15.9273 61.1926 14.6637 61.5057C12.5743 62.0239 11.0959 61.9453 10.7889 61.3002C10.2698 60.2084 10.0759 58.6604 10.0895 55.7148C10.1001 53.4076 10.1287 53.2114 10.4675 53.1178C10.5976 53.0819 10.7073 53.0484 10.7111 53.0432C10.7152 53.0379 11.0267 53.1403 11.4033 53.2706ZM95.872 53.0971C95.7726 53.1952 95.7993 54.4892 95.9039 54.6494C95.9678 54.747 95.9975 54.5156 95.9985 53.9128C95.9999 53.0332 95.9915 52.9788 95.872 53.0971ZM45.8879 59.3022C45.4919 59.3454 44.7206 59.4711 44.1736 59.5814C43.6266 59.6914 43.096 59.7817 42.9945 59.7817C42.893 59.7817 42.557 59.866 42.2481 59.9691C41.939 60.072 41.3248 60.2379 40.883 60.3374C40.1694 60.498 38.5773 60.935 37.1999 61.3477C34.7493 62.0824 30.711 63.1081 30.2699 63.1081C30.1206 63.1081 29.8478 63.1538 29.6632 63.2094C29.1503 63.364 27.3028 63.5815 26.4933 63.5824C25.2786 63.5838 25.1282 63.8226 25.6691 64.8902C26.5401 66.6088 26.2955 67.0873 24.8457 66.5019C21.1269 65 18.2092 65.2005 14.1599 67.2361C12.3727 68.1345 10.9425 68.6094 10.0017 68.6173C9.42737 68.622 9.21593 68.7539 9.21593 69.1079C9.21593 69.4049 9.86777 70.7961 10.1678 71.1392C10.2592 71.2438 10.4803 71.5645 10.6588 71.852C11.1052 72.5701 11.6584 73.2054 13.0096 74.5517C14.6599 76.1962 14.8567 76.3554 16.7999 77.6185C17.0903 77.8074 17.5007 78.0985 17.7119 78.2653C17.9231 78.4323 18.6575 78.8493 19.3439 79.1922C20.0303 79.5348 20.7215 79.8836 20.8799 79.9675C21.0383 80.0511 21.2032 80.1198 21.2464 80.1203C21.2894 80.1205 21.4662 80.2277 21.6393 80.3583C21.8126 80.489 22.048 80.5959 22.163 80.5959C22.2779 80.5959 22.7414 80.7665 23.1928 80.9749C23.6442 81.1833 24.6045 81.5485 25.3266 81.7863C26.049 82.0244 26.7263 82.2566 26.8319 82.3024C27.0244 82.3858 27.3902 82.4868 28.4639 82.7527C28.7807 82.8313 29.2559 82.9751 29.5199 83.0725C29.7839 83.1697 30.2159 83.2906 30.4799 83.341C31.2854 83.4952 32.7671 83.8248 33.0719 83.9177C33.2303 83.9661 33.6839 84.0562 34.0799 84.1182C34.4759 84.1802 34.9727 84.2627 35.1839 84.3019C36.8078 84.6022 37.3331 84.6892 38.3039 84.818C38.9111 84.8983 40.0991 85.0297 40.9439 85.1097C41.7887 85.1898 42.8903 85.2958 43.3919 85.3452C46.5952 85.6605 50.6238 85.7002 53.0399 85.44C53.5151 85.3889 54.4007 85.3046 55.0079 85.2525C56.2605 85.1454 58.5945 84.847 59.8079 84.639C61.8018 84.2971 62.8758 84.1006 63.4559 83.9714C64.9475 83.6387 67.0156 83.1226 67.6799 82.9176C70.6506 82.0002 71.4095 81.7417 72.461 81.289C72.6354 81.214 73.1538 81.0042 73.613 80.8226C74.4369 80.4971 75.5872 79.943 77.056 79.1646C78.22 78.5475 81.1034 76.621 81.7377 76.0363C85.5902 72.4855 88.0703 68.6798 86.6555 68.4904C84.3822 68.186 82.8688 67.7476 81.4768 66.9902C81.1074 66.7891 80.7736 66.6247 80.7347 66.6247C80.6961 66.6247 80.4537 66.5363 80.1962 66.4285C79.2489 66.0317 78.9923 65.9487 77.9999 65.7192C75.9112 65.2364 72.813 65.5964 70.9238 66.5416C69.8162 67.0956 69.605 66.5335 70.3398 64.9867L70.792 64.0353L70.5266 63.8093C70.307 63.6223 70.1553 63.5834 69.6465 63.5834C69.0143 63.5834 68.3157 63.5069 66.4799 63.2369C65.4544 63.0861 61.2597 62.0843 59.9999 61.6894C59.2535 61.4556 58.7987 61.3214 57.2159 60.868C55.3526 60.3343 55.0898 60.2642 54.5759 60.1644C54.3119 60.1131 53.9231 60.0079 53.7119 59.9306C53.5007 59.8532 53.223 59.7881 53.0946 59.7859C52.9665 59.7836 52.7289 59.742 52.5666 59.6935C51.2942 59.3126 47.7129 59.1028 45.8879 59.3022ZM51.4559 59.8149C51.7991 59.8981 52.3823 60.0278 52.7519 60.1029C53.3442 60.2234 54.1708 60.4213 55.4399 60.7463C55.6511 60.8003 56.3469 61.0108 56.986 61.2137C57.6254 61.4169 58.4894 61.6668 58.906 61.7692C59.3229 61.8716 59.9663 62.0472 60.3359 62.1594C60.7055 62.2718 61.2455 62.4196 61.5359 62.488C61.8263 62.5567 62.7551 62.7893 63.5999 63.005C65.1232 63.3942 66.2246 63.5712 68.3519 63.7689C70.5986 63.9778 70.509 63.9001 69.9359 65.1449C69.2123 66.7169 69.7101 67.5222 70.9919 66.8538C73.8794 65.3481 77.6018 65.4631 81.1245 67.1665C82.2383 67.7049 83.2079 68.095 83.9447 68.3008C85.0562 68.6113 85.5064 68.709 85.8417 68.7123C86.9358 68.7228 86.9519 69.2075 85.9086 70.7341C85.7037 71.0342 85.5359 71.3022 85.5359 71.3298C85.5359 71.432 84.5234 72.7761 83.9968 73.3727C82.7627 74.7708 80.6284 76.6222 79.3401 77.412C79.0331 77.6002 78.4353 77.9896 77.931 78.3299C77.4954 78.6241 75.2502 79.7717 74.1599 80.2576C71.7273 81.3416 67.7106 82.684 65.1839 83.2578C64.6823 83.3717 64.0326 83.5218 63.7403 83.5914C62.6481 83.8516 60.0182 84.3228 59.1839 84.4076C58.7087 84.4561 57.7583 84.558 57.0719 84.6341C53.0505 85.0803 51.7962 85.1779 49.4879 85.225C47.1009 85.2737 46.7286 85.2554 44.1599 84.9643C43.7639 84.9197 43.1159 84.8151 42.7199 84.7324C42.3239 84.65 41.6606 84.5388 41.2456 84.4858C40.8309 84.4326 40.2693 84.3057 39.9978 84.2035C39.7262 84.1013 39.2879 83.9904 39.0239 83.9571C38.7599 83.9239 38.4359 83.8433 38.3039 83.7784C38.1719 83.7133 37.9127 83.629 37.7279 83.591C37.5431 83.5529 37.2988 83.4372 37.1853 83.3339C37.0715 83.2308 36.8339 83.1108 36.6573 83.0675C36.4804 83.0243 36.0803 82.8967 35.7681 82.7841C35.4558 82.6714 34.9914 82.5548 34.7361 82.5248C34.4214 82.4878 34.2719 82.4262 34.2719 82.3336C34.2719 82.2342 34.1994 82.2117 34.0079 82.2513C33.747 82.3055 33.4353 82.2193 32.6879 81.8859C31.679 81.4361 31.4697 81.3563 31.299 81.3563C31.198 81.3563 31.0869 81.3109 31.0523 81.2553C31.0175 81.1999 30.8963 81.1144 30.7826 81.0655C30.669 81.0165 30.5111 80.9386 30.4319 80.892C30.3527 80.8457 30.0503 80.7086 29.7599 80.5876C29.4695 80.4667 29.1638 80.312 29.0805 80.2443C28.997 80.1763 28.8782 80.1207 28.8165 80.1207C28.7546 80.1207 28.6175 80.0352 28.5119 79.9306C28.2851 79.7061 27.9791 79.6824 27.9011 79.8831C27.839 80.0438 27.0777 80.0865 26.9231 79.9383C26.873 79.89 26.5511 79.7071 26.2079 79.5315C24.3364 78.5742 22.157 76.6194 21.1434 74.9884C20.8751 74.5567 20.3814 74.1038 20.308 74.2217C20.2494 74.3153 19.7272 74.0071 19.3533 73.6586C18.6734 73.0249 18.0647 72.5173 17.9846 72.5173C17.9334 72.5173 17.746 72.3249 17.5679 72.0897C17.3898 71.8544 17.1823 71.662 17.1064 71.662C17.0095 71.662 16.9967 71.6974 17.063 71.7808C17.1151 71.8461 17.1858 72.0821 17.2202 72.3052C17.3913 73.4155 18.2718 74.9523 19.48 76.2492C20.3488 77.182 20.5055 77.7447 19.8962 77.7447C18.9959 77.7447 15.1358 74.8606 13.954 73.305C12.9352 71.9642 13.0195 70.1325 14.1463 69.125C14.6714 68.6558 14.6786 68.6227 14.3032 68.4113C13.9723 68.2248 13.9019 67.8025 14.1839 67.6954C14.2763 67.6604 14.5247 67.5181 14.7359 67.3793C14.9471 67.2406 15.3359 67.0484 15.5999 66.9521C15.8639 66.8561 16.2218 66.7 16.3953 66.6057C18.2546 65.594 22.5083 65.7394 24.8406 66.8946C26.3738 67.6538 27.0345 66.5903 26.1117 64.8477C25.7044 64.0783 25.7658 63.9635 26.5854 63.9635C27.2171 63.9635 28.9024 63.7656 29.7599 63.5907C29.9975 63.5423 30.4727 63.451 30.8159 63.3876C31.738 63.2177 34.5357 62.5023 35.8079 62.1109C36.0983 62.0218 36.5735 61.8937 36.8639 61.8265C37.1543 61.7593 37.9319 61.544 38.5919 61.3477C39.8858 60.9633 40.3084 60.8497 41.5679 60.5484C42.0167 60.441 42.5135 60.3113 42.6719 60.2602C42.8303 60.2091 43.2407 60.1281 43.5839 60.0801C43.9271 60.0319 44.4887 59.9252 44.8319 59.8427C45.7662 59.6182 45.934 59.6087 48.4799 59.6372C50.2312 59.6569 50.9913 59.7023 51.4559 59.8149ZM45.905 70.7807C45.7022 71.0302 45.6218 71.3795 45.7679 71.3745C45.8555 71.3714 46.2138 70.6224 46.1555 70.5647C46.1327 70.5419 46.0199 70.6393 45.905 70.7807ZM42.861 72.6171C42.7696 72.7633 42.8946 72.8576 43.018 72.7355C43.0869 72.6673 43.0886 72.614 43.0228 72.5741C42.9693 72.5411 42.8963 72.5606 42.861 72.6171ZM53.5456 72.6813C53.7182 72.7024 53.9774 72.702 54.1216 72.6803C54.2658 72.6587 54.1247 72.6414 53.8079 72.6418C53.4911 72.6423 53.373 72.6601 53.5456 72.6813ZM51.7511 73.0831C51.6592 73.1394 51.663 73.1681 51.7686 73.2081C51.8438 73.2368 51.959 73.2273 52.0247 73.1872C52.1166 73.1308 52.1128 73.1021 52.0072 73.0622C51.9321 73.0334 51.8169 73.0429 51.7511 73.0831ZM49.6319 73.7529C49.6319 73.8052 49.6967 73.8479 49.7759 73.8479C49.8551 73.8479 49.9199 73.8052 49.9199 73.7529C49.9199 73.7006 49.8551 73.6579 49.7759 73.6579C49.6967 73.6579 49.6319 73.7006 49.6319 73.7529ZM54.4893 74.488C54.3863 74.59 54.4288 74.7033 54.5702 74.7033C54.6462 74.7033 54.7324 74.6651 54.7617 74.6183C54.8229 74.5204 54.5759 74.4025 54.4893 74.488ZM49.1238 77.614C49.049 77.6881 49.1522 77.9348 49.2582 77.9348C49.3679 77.9348 49.3703 77.677 49.2614 77.6102C49.2158 77.5824 49.1541 77.5841 49.1238 77.614ZM42.8159 77.9823C42.8159 78.0607 42.8546 78.1248 42.9016 78.1248C42.9489 78.1248 43.0122 78.0607 43.0427 77.9823C43.0763 77.8956 43.0427 77.8397 42.9568 77.8397C42.8793 77.8397 42.8159 77.9039 42.8159 77.9823Z", fill: "#743739" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var ConnectorNames;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
})(ConnectorNames || (ConnectorNames = {}));

var connectors = [
    {
        title: "DarumaWallet",
        icon: Icon,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "Metamask",
        icon: Icon$2,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "TrustWallet (on Mobile)",
        icon: Icon$1,
        connectorId: ConnectorNames.Injected,
    } /* ,
    {
      title: "MathWallet",
      icon: MathWallet,
      connectorId: ConnectorNames.Injected,
    },
    {
      title: "TokenPocket",
      icon: TokenPocket,
      connectorId: ConnectorNames.Injected,
    },
    {
      title: "WalletConnect",
      icon: WalletConnect,
      connectorId: ConnectorNames.WalletConnect,
    },
    {
      title: "Binance Chain Wallet",
      icon: BinanceChain,
      connectorId: ConnectorNames.BSC,
    },
    {
      title: "SafePal Wallet",
      icon: SafePalWallet,
      connectorId: ConnectorNames.Injected,
    }, */
];
var connectorLocalStorageKey = "connectorId";
var deviceUIDKey = v4();
var tokenUIDKey = v4();
var darumaAddressKey = v4();
var triggerUnlockKey = v4();
var BASE_DARUMA_URL_SIGNIN = process.env.REACT_APP_BASE_DARUMA_URL_SIGNIN;
var BASE_BSC_SCAN = process.env.REACT_APP_BASE_BSC_URL;
var BASE_DARUMA_URL = process.env.REACT_APP_BASE_DARUMA_WALLET;
var NFT_CONTRACT_ADDRESS = process.env.REACT_APP_NFT_CONTRACT;

var PriceLink = styled.a(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var CakePrice = function (_a) {
    var cakePriceUsd = _a.cakePriceUsd;
    return cakePriceUsd ? (React.createElement(PriceLink, { href: BASE_BSC_SCAN + "/token/" + NFT_CONTRACT_ADDRESS, target: "_blank" },
        React.createElement(Icon$J, { width: "24px", mr: "8px" }))) : (React.createElement(Skeleton, { width: 80, height: 24 }));
};
var CakePrice$1 = React.memo(CakePrice);
var templateObject_1$8;

var Icons$2 = IconModule;
var MoonIcon = Icons$2.MoonIcon, SunIcon = Icons$2.SunIcon;
var ThemeSwitcher = function (_a) {
    var isDark = _a.isDark, toggleTheme = _a.toggleTheme;
    return (React.createElement(Button, { variant: "text", onClick: function () { return toggleTheme(!isDark); } },
        React.createElement(Flex, { alignItems: "center" },
            React.createElement(SunIcon, { color: isDark ? "textDisabled" : "text", width: "24px" }),
            React.createElement(Text, { color: "textDisabled", mx: "4px" }, "/"),
            React.createElement(MoonIcon, { color: isDark ? "text" : "textDisabled", width: "24px" }))));
};
var ThemeSwitcher$1 = React.memo(ThemeSwitcher, function (prev, next) { return prev.isDark === next.isDark; });

var Icons$1 = IconModule;
var SocialLinks = function () { return (React.createElement(Flex, null, socials.map(function (social, index) {
    var Icon = Icons$1[social.icon];
    var iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
    var mr = index < socials.length - 1 ? "24px" : 0;
    if (social.items) {
        return (React.createElement(Dropdown, { key: social.label, position: "top", target: React.createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React.createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
    }
    return (React.createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
        React.createElement(Icon, __assign({}, iconProps))));
}))); };
var SocialLinks$1 = React.memo(SocialLinks, function () { return true; });

var Icons = IconModule;
var LanguageIcon = Icons.LanguageIcon;
var LangSelector = function (_a) {
    var currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang;
    return (React.createElement(Dropdown, { position: "top-right", target: React.createElement(Button, { variant: "text", startIcon: React.createElement(LanguageIcon, { color: "textSubtle", width: "24px" }) },
            React.createElement(Text, { color: "textSubtle" }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React.createElement(MenuButton, { key: lang.code, fullWidth: true, onClick: function () { return setLang(lang); }, 
        // Safari fix
        style: { minHeight: "32px", height: "auto" } }, lang.language)); })));
};
var LangSelector$1 = React.memo(LangSelector, function (prev, next) { return prev.currentLang === next.currentLang; });

var Container = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var SettingsEntry = styled.div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, toggleTheme = _a.toggleTheme, isDark = _a.isDark, cakePriceUsd = _a.cakePriceUsd, currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang;
    if (!isPushed) {
        return (React.createElement(Container, null,
            React.createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React.createElement(Icon$12, null))));
    }
    return (React.createElement(Container, null,
        React.createElement(SocialEntry, null,
            React.createElement(CakePrice$1, { cakePriceUsd: cakePriceUsd }),
            React.createElement(SocialLinks$1, null)),
        React.createElement(SettingsEntry, null,
            React.createElement(ThemeSwitcher$1, { isDark: isDark, toggleTheme: toggleTheme }),
            React.createElement(LangSelector$1, { currentLang: currentLang, langs: langs, setLang: setLang }))));
};
var templateObject_1$7, templateObject_2$2, templateObject_3$1;

var StyledPanel = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n  ", ";\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n  ", ";\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
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
    return (React.createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React.createElement(PanelBody, __assign({}, props)),
        React.createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$6;

var popupWindow = function (url, windowName, width, height) {
    var y = window.top.outerHeight / 2 + window.top.screenY - (height / 2);
    var x = window.top.outerWidth / 2 + window.top.screenX - (width / 2);
    return window.open(url, windowName, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + width + ", height=" + height + ", top=" + y + ", left=" + x);
};
var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    var deviceUID = window.localStorage.getItem(deviceUIDKey);
    var tokenUID = window.localStorage.getItem(tokenUIDKey);
    var handleWalletConnect = function () {
        if (title === 'DarumaWallet') {
            window.localStorage.setItem(triggerUnlockKey, '1');
            popupWindow(BASE_DARUMA_URL_SIGNIN + "/" + deviceUID + "/" + tokenUID, "Daruma Wallet", 600, 600);
        }
        else {
            login(walletConfig.connectorId);
            window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            window.localStorage.removeItem(triggerUnlockKey);
        }
        onDismiss();
    };
    return (React.createElement(Button, { width: "100%", variant: "tertiary", onClick: handleWalletConnect, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React.createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React.createElement(Icon, { width: "32px" })));
};

var HelpLink = styled(Link)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React.createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React.createElement(HelpLink, { href: "https://darumawallet.com/how-to-connect-daruma-wallet/", external: true },
            React.createElement(Icon$_, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$5;

var StyleButton = styled(Text).attrs({ role: "button" })(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
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
    var _b = useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React.createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React.createElement(Icon$10, { width: "20px", color: "primary", ml: "4px" }),
        React.createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$4, templateObject_2$1;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    var darumaAddress = window.localStorage.getItem(darumaAddressKey);
    var handleLogout = function () {
        if (darumaAddress) {
            window.localStorage.clear();
            window.location.reload();
        }
        else {
            logout();
            window.localStorage.removeItem(connectorLocalStorageKey);
            onDismiss();
        }
    };
    return (React.createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React.createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, darumaAddress || (account)),
        React.createElement(Flex, { mb: "48px" },
            React.createElement(LinkExternal, { small: true, href: BASE_BSC_SCAN + "/address/" + (darumaAddress || account), mr: "16px" }, "View on BscScan"),
            darumaAddress && (React.createElement(LinkExternal, { small: true, href: BASE_DARUMA_URL + "/user/personal/details/BNB/", mr: "16px" }, "View on DarumaWallet")),
            React.createElement(CopyToClipboard, { toCopy: darumaAddress || account }, "Copy Address")),
        React.createElement(Flex, { justifyContent: "center" },
            React.createElement(Button, { scale: "sm", variant: "secondary", onClick: handleLogout }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React.createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React.createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    var _c = useState(''), darumaAddress = _c[0], setDarumaAddress = _c[1];
    useEffect(function () {
        var updateAddress = function () {
            var addr = window.localStorage.getItem(darumaAddressKey);
            if (addr) {
                if (!darumaAddress) {
                    setDarumaAddress(addr);
                }
            }
            else {
                setDarumaAddress('');
            }
        };
        var interval = setInterval(updateAddress, 100);
        return function () { return clearInterval(interval); };
    }, [darumaAddress]);
    return (React.createElement("div", null, account ? (React.createElement(Button, { scale: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React.createElement(React.Fragment, null, darumaAddress ? (React.createElement(Button, { scale: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } },
        darumaAddress.substring(0, 4),
        "...",
        darumaAddress.substring(darumaAddress.length - 4))) : (React.createElement(Button, { scale: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))))));
};

var Wrapper = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled.nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"])), function (_a) {
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
var MobileOnlyOverlay = styled(Overlay)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links, children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = useRef(window.pageYOffset);
    useEffect(function () {
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
        var throttledHandleScroll = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React.createElement(Wrapper, null,
        React.createElement(StyledNav, { showMenu: showMenu },
            React.createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React.createElement(Flex, null,
                React.createElement(UserBlock, { account: account, login: login, logout: logout }))),
        React.createElement(BodyWrapper, null,
            React.createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links }),
            React.createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React.createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$3, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React.createElement(Button, __assign({ as: "a", scale: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React.createElement(Button, { as: Link$1, scale: "sm", to: action.url }, action.text));
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
var StyledToast = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = useRef();
    var ref = useRef(null);
    var removeHandler = useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
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
    useEffect(function () {
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
    return (React.createElement(CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React.createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React.createElement(React.Fragment, null,
                React.createElement(Text, { as: "p", mb: "8px" }, description),
                React.createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$2;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React.createElement(StyledToastContainer, null,
        React.createElement(TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React.createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$1;

var ResetCSS = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Space Grotesk', cursive;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* Number */\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n    height: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Space Grotesk', cursive;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* Number */\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n    height: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"])), function (_a) {
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

export { Icon$1n as AddIcon, Alert, Icon$1m as ArrowBackIcon, Icon$1l as ArrowDownIcon, Icon$1k as ArrowDropDownIcon, Icon$1j as ArrowDropUpIcon, Icon$1i as ArrowForwardIcon, Icon$1h as ArrowUpIcon, Icon$1g as AutoRenewIcon, BackgroundImage, BalanceInput, GridLayout$1 as BaseLayout, Icon$1f as BinanceIcon, Icon$1p as BlockIcon, Box, Breadcrumbs, Icon$1e as BunnyPlaceholderIcon, Button, ButtonMenu$1 as ButtonMenu, ButtonMenuItem, Icon$1b as CalculateIcon, Card, CardBody, CardFooter, CardHeader, CardRibbon, Icon$1c as CardViewIcon, Icon$1d as Cards, GridLayout as CardsLayout, Icon$19 as ChartIcon, Checkbox, Icon$1r as CheckmarkCircleIcon, Icon$18 as CheckmarkIcon, Icon$17 as ChevronDownIcon, Icon$16 as ChevronLeftIcon, Icon$15 as ChevronRightIcon, Icon$14 as ChevronUpIcon, Icon$1a as CircleOutlineIcon, Icon$13 as CloseIcon, Icon$12 as CogIcon, Icon$11 as CommunityIcon, ConnectorNames, Icon$10 as CopyIcon, Icon$$ as CrownIcon, Dropdown, Icon$1q as ErrorIcon, ExpandableButton, ExpandableLabel, FallingBunnies, Flex, Heading, Icon$_ as HelpIcon, Icon$Z as HistoryIcon, IconButton, Image, Icon$1o as InfoIcon, Input$1 as Input, Icon$Y as LaurelLeftIcon, Icon$X as LaurelRightIcon, Link, LinkExternal, Icon$W as ListViewIcon, Icon$V as LogoIcon, Icon$U as LogoRoundIcon, Icon$T as MedalBronzeIcon, Icon$S as MedalGoldIcon, Icon$R as MedalPurpleIcon, Icon$Q as MedalSilverIcon, Icon$P as MedalTealIcon, Menu, Icon$O as MetamaskIcon, Icon$N as MinusIcon, Modal, ModalBackButton, ModalBody, ModalCloseButton, ModalContainer, ModalHeader, ModalProvider, ModalTitle, Icon$M as NoProfileAvatarIcon, NotificationDot, Icon$L as OpenNewIcon, Icon$J as PancakeRoundIcon, PancakeToggle, Icon$K as PancakesIcon, Icon$H as PlayCircleOutlineIcon, Icon$I as PocketWatchIcon, Icon$G as PrizeIcon, Progress, Icon$D as ProgressBunny, Radio, Icon$n as RefreshIcon, Icon$F as RemoveIcon, ResetCSS, Icon$t as SearchIcon, Skeleton, Slider, Spinner, Step, Stepper, Svg, Icon$s as SwapVertIcon, Icon$r as SyncAltIcon, Tab, ButtonMenu as TabMenu, Tag, Icon$A as TeamPlayerIcon, Icon$z as TestnetIcon, Text, Icon$y as Ticket, Icon$x as TicketRound, Icon$w as TimerIcon, ToastContainer, Toggle, Icon$v as TrophyGoldIcon, Icon$u as TuneIcon, Icon$E as VerifiedIcon, Icon$q as VolumeOffIcon, Icon$p as VolumeUpIcon, Icon$C as WaitIcon, Icon$o as WarningIcon, Icon$B as Won, variants$2 as alertVariants, byTextAscending, byTextDescending, connectorLocalStorageKey, darkTheme as dark, darkColors, darumaAddressKey, deviceUIDKey, lightTheme as light, lightColors, makeRender, links as menuConfig, status as menuStatus, types as toastTypes, tokenUIDKey, triggerUnlockKey, useKonamiCheatCode, useMatchBreakpoints, useModal, useParticleBurst, useTable, useTooltip, useWalletModal };
