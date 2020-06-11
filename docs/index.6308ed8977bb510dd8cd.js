/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Component", function() { return /* reexport */ Component; });
__webpack_require__.d(__webpack_exports__, "EMPTY_OBJ", function() { return /* reexport */ EMPTY_OBJ; });
__webpack_require__.d(__webpack_exports__, "Fragment", function() { return /* reexport */ Fragment; });
__webpack_require__.d(__webpack_exports__, "_CI", function() { return /* reexport */ createClassComponentInstance; });
__webpack_require__.d(__webpack_exports__, "_HI", function() { return /* reexport */ normalizeRoot; });
__webpack_require__.d(__webpack_exports__, "_M", function() { return /* reexport */ mount; });
__webpack_require__.d(__webpack_exports__, "_MCCC", function() { return /* reexport */ mountClassComponentCallbacks; });
__webpack_require__.d(__webpack_exports__, "_ME", function() { return /* reexport */ mountElement; });
__webpack_require__.d(__webpack_exports__, "_MFCC", function() { return /* reexport */ mountFunctionalComponentCallbacks; });
__webpack_require__.d(__webpack_exports__, "_MP", function() { return /* reexport */ mountProps; });
__webpack_require__.d(__webpack_exports__, "_MR", function() { return /* reexport */ mountRef; });
__webpack_require__.d(__webpack_exports__, "__render", function() { return /* reexport */ __render; });
__webpack_require__.d(__webpack_exports__, "createComponentVNode", function() { return /* reexport */ createComponentVNode; });
__webpack_require__.d(__webpack_exports__, "createFragment", function() { return /* reexport */ createFragment; });
__webpack_require__.d(__webpack_exports__, "createPortal", function() { return /* reexport */ createPortal; });
__webpack_require__.d(__webpack_exports__, "createRef", function() { return /* reexport */ createRef; });
__webpack_require__.d(__webpack_exports__, "createRenderer", function() { return /* reexport */ createRenderer; });
__webpack_require__.d(__webpack_exports__, "createTextVNode", function() { return /* reexport */ createTextVNode; });
__webpack_require__.d(__webpack_exports__, "createVNode", function() { return /* reexport */ createVNode; });
__webpack_require__.d(__webpack_exports__, "directClone", function() { return /* reexport */ directClone; });
__webpack_require__.d(__webpack_exports__, "findDOMfromVNode", function() { return /* reexport */ findDOMfromVNode; });
__webpack_require__.d(__webpack_exports__, "forwardRef", function() { return /* reexport */ forwardRef; });
__webpack_require__.d(__webpack_exports__, "getFlagsForElementVnode", function() { return /* reexport */ getFlagsForElementVnode; });
__webpack_require__.d(__webpack_exports__, "linkEvent", function() { return /* reexport */ linkEvent; });
__webpack_require__.d(__webpack_exports__, "normalizeProps", function() { return /* reexport */ normalizeProps; });
__webpack_require__.d(__webpack_exports__, "options", function() { return /* reexport */ options; });
__webpack_require__.d(__webpack_exports__, "render", function() { return /* reexport */ render; });
__webpack_require__.d(__webpack_exports__, "rerender", function() { return /* reexport */ rerender; });
__webpack_require__.d(__webpack_exports__, "version", function() { return /* reexport */ version; });

// CONCATENATED MODULE: ./node_modules/inferno/dist/index.esm.js
var isArray = Array.isArray;
function isStringOrNumber(o) {
    var type = typeof o;
    return type === 'string' || type === 'number';
}
function isNullOrUndef(o) {
    return o === void 0 || o === null;
}
function isInvalid(o) {
    return o === null || o === false || o === true || o === void 0;
}
function isFunction(o) {
    return typeof o === 'function';
}
function isString(o) {
    return typeof o === 'string';
}
function isNumber(o) {
    return typeof o === 'number';
}
function isNull(o) {
    return o === null;
}
function isUndefined(o) {
    return o === void 0;
}
function combineFrom(first, second) {
    var out = {};
    if (first) {
        for (var key in first) {
            out[key] = first[key];
        }
    }
    if (second) {
        for (var key$1 in second) {
            out[key$1] = second[key$1];
        }
    }
    return out;
}

/**
 * Links given data to event as first parameter
 * @param {*} data data to be linked, it will be available in function as first parameter
 * @param {Function} event Function to be called when event occurs
 * @returns {{data: *, event: Function}}
 */
function linkEvent(data, event) {
    if (isFunction(event)) {
        return { data: data, event: event };
    }
    return null; // Return null when event is invalid, to avoid creating unnecessary event handlers
}
// object.event should always be function, otherwise its badly created object.
function isLinkEventObject(o) {
    return !isNull(o) && typeof o === 'object';
}

// We need EMPTY_OBJ defined in one place.
// Its used for comparison so we cant inline it into shared
var EMPTY_OBJ = {};
var Fragment = '$F';
function normalizeEventName(name) {
    return name.substr(2).toLowerCase();
}
function appendChild(parentDOM, dom) {
    parentDOM.appendChild(dom);
}
function insertOrAppend(parentDOM, newNode, nextNode) {
    if (isNull(nextNode)) {
        appendChild(parentDOM, newNode);
    }
    else {
        parentDOM.insertBefore(newNode, nextNode);
    }
}
function documentCreateElement(tag, isSVG) {
    if (isSVG) {
        return document.createElementNS('http://www.w3.org/2000/svg', tag);
    }
    return document.createElement(tag);
}
function replaceChild(parentDOM, newDom, lastDom) {
    parentDOM.replaceChild(newDom, lastDom);
}
function removeChild(parentDOM, childNode) {
    parentDOM.removeChild(childNode);
}
function callAll(arrayFn) {
    for (var i = 0; i < arrayFn.length; i++) {
        arrayFn[i]();
    }
}
function findChildVNode(vNode, startEdge, flags) {
    var children = vNode.children;
    if (flags & 4 /* ComponentClass */) {
        return children.$LI;
    }
    if (flags & 8192 /* Fragment */) {
        return vNode.childFlags === 2 /* HasVNodeChildren */ ? children : children[startEdge ? 0 : children.length - 1];
    }
    return children;
}
function findDOMfromVNode(vNode, startEdge) {
    var flags;
    while (vNode) {
        flags = vNode.flags;
        if (flags & 2033 /* DOMRef */) {
            return vNode.dom;
        }
        vNode = findChildVNode(vNode, startEdge, flags);
    }
    return null;
}
function removeVNodeDOM(vNode, parentDOM) {
    do {
        var flags = vNode.flags;
        if (flags & 2033 /* DOMRef */) {
            removeChild(parentDOM, vNode.dom);
            return;
        }
        var children = vNode.children;
        if (flags & 4 /* ComponentClass */) {
            vNode = children.$LI;
        }
        if (flags & 8 /* ComponentFunction */) {
            vNode = children;
        }
        if (flags & 8192 /* Fragment */) {
            if (vNode.childFlags === 2 /* HasVNodeChildren */) {
                vNode = children;
            }
            else {
                for (var i = 0, len = children.length; i < len; ++i) {
                    removeVNodeDOM(children[i], parentDOM);
                }
                return;
            }
        }
    } while (vNode);
}
function moveVNodeDOM(vNode, parentDOM, nextNode) {
    do {
        var flags = vNode.flags;
        if (flags & 2033 /* DOMRef */) {
            insertOrAppend(parentDOM, vNode.dom, nextNode);
            return;
        }
        var children = vNode.children;
        if (flags & 4 /* ComponentClass */) {
            vNode = children.$LI;
        }
        if (flags & 8 /* ComponentFunction */) {
            vNode = children;
        }
        if (flags & 8192 /* Fragment */) {
            if (vNode.childFlags === 2 /* HasVNodeChildren */) {
                vNode = children;
            }
            else {
                for (var i = 0, len = children.length; i < len; ++i) {
                    moveVNodeDOM(children[i], parentDOM, nextNode);
                }
                return;
            }
        }
    } while (vNode);
}
function createDerivedState(instance, nextProps, state) {
    if (instance.constructor.getDerivedStateFromProps) {
        return combineFrom(state, instance.constructor.getDerivedStateFromProps(nextProps, state));
    }
    return state;
}
var renderCheck = {
    v: false
};
var options = {
    componentComparator: null,
    createVNode: null,
    renderComplete: null
};
function setTextContent(dom, children) {
    dom.textContent = children;
}
// Calling this function assumes, nextValue is linkEvent
function isLastValueSameLinkEvent(lastValue, nextValue) {
    return (isLinkEventObject(lastValue) &&
        lastValue.event === nextValue.event &&
        lastValue.data === nextValue.data);
}
function mergeUnsetProperties(to, from) {
    for (var propName in from) {
        if (isUndefined(to[propName])) {
            to[propName] = from[propName];
        }
    }
    return to;
}
function safeCall1(method, arg1) {
    return !!isFunction(method) && (method(arg1), true);
}

var keyPrefix = '$';
function V(childFlags, children, className, flags, key, props, ref, type) {
    this.childFlags = childFlags;
    this.children = children;
    this.className = className;
    this.dom = null;
    this.flags = flags;
    this.key = key === void 0 ? null : key;
    this.props = props === void 0 ? null : props;
    this.ref = ref === void 0 ? null : ref;
    this.type = type;
}
function createVNode(flags, type, className, children, childFlags, props, key, ref) {
    var childFlag = childFlags === void 0 ? 1 /* HasInvalidChildren */ : childFlags;
    var vNode = new V(childFlag, children, className, flags, key, props, ref, type);
    if (options.createVNode) {
        options.createVNode(vNode);
    }
    if (childFlag === 0 /* UnknownChildren */) {
        normalizeChildren(vNode, vNode.children);
    }
    return vNode;
}
function mergeDefaultHooks(flags, type, ref) {
    if (flags & 4 /* ComponentClass */) {
        return ref;
    }
    var defaultHooks = (flags & 32768 /* ForwardRef */ ? type.render : type).defaultHooks;
    if (isNullOrUndef(defaultHooks)) {
        return ref;
    }
    if (isNullOrUndef(ref)) {
        return defaultHooks;
    }
    return mergeUnsetProperties(ref, defaultHooks);
}
function mergeDefaultProps(flags, type, props) {
    // set default props
    var defaultProps = (flags & 32768 /* ForwardRef */ ? type.render : type).defaultProps;
    if (isNullOrUndef(defaultProps)) {
        return props;
    }
    if (isNullOrUndef(props)) {
        return combineFrom(defaultProps, null);
    }
    return mergeUnsetProperties(props, defaultProps);
}
function resolveComponentFlags(flags, type) {
    if (flags & 12 /* ComponentKnown */) {
        return flags;
    }
    if (type.prototype && type.prototype.render) {
        return 4 /* ComponentClass */;
    }
    if (type.render) {
        return 32776 /* ForwardRefComponent */;
    }
    return 8 /* ComponentFunction */;
}
function createComponentVNode(flags, type, props, key, ref) {
    flags = resolveComponentFlags(flags, type);
    var vNode = new V(1 /* HasInvalidChildren */, null, null, flags, key, mergeDefaultProps(flags, type, props), mergeDefaultHooks(flags, type, ref), type);
    if (options.createVNode) {
        options.createVNode(vNode);
    }
    return vNode;
}
function createTextVNode(text, key) {
    return new V(1 /* HasInvalidChildren */, isNullOrUndef(text) || text === true || text === false ? '' : text, null, 16 /* Text */, key, null, null, null);
}
function createFragment(children, childFlags, key) {
    var fragment = createVNode(8192 /* Fragment */, 8192 /* Fragment */, null, children, childFlags, null, key, null);
    switch (fragment.childFlags) {
        case 1 /* HasInvalidChildren */:
            fragment.children = createVoidVNode();
            fragment.childFlags = 2 /* HasVNodeChildren */;
            break;
        case 16 /* HasTextChildren */:
            fragment.children = [createTextVNode(children)];
            fragment.childFlags = 4 /* HasNonKeyedChildren */;
            break;
    }
    return fragment;
}
function normalizeProps(vNode) {
    var props = vNode.props;
    if (props) {
        var flags = vNode.flags;
        if (flags & 481 /* Element */) {
            if (props.children !== void 0 && isNullOrUndef(vNode.children)) {
                normalizeChildren(vNode, props.children);
            }
            if (props.className !== void 0) {
                vNode.className = props.className || null;
                props.className = undefined;
            }
        }
        if (props.key !== void 0) {
            vNode.key = props.key;
            props.key = undefined;
        }
        if (props.ref !== void 0) {
            if (flags & 8 /* ComponentFunction */) {
                vNode.ref = combineFrom(vNode.ref, props.ref);
            }
            else {
                vNode.ref = props.ref;
            }
            props.ref = undefined;
        }
    }
    return vNode;
}
/*
 * Fragment is different than normal vNode,
 * because when it needs to be cloned we need to clone its children too
 * But not normalize, because otherwise those possibly get KEY and re-mount
 */
function cloneFragment(vNodeToClone) {
    var clonedChildren;
    var oldChildren = vNodeToClone.children;
    var childFlags = vNodeToClone.childFlags;
    if (childFlags === 2 /* HasVNodeChildren */) {
        clonedChildren = directClone(oldChildren);
    }
    else if (childFlags & 12 /* MultipleChildren */) {
        clonedChildren = [];
        for (var i = 0, len = oldChildren.length; i < len; ++i) {
            clonedChildren.push(directClone(oldChildren[i]));
        }
    }
    return createFragment(clonedChildren, childFlags, vNodeToClone.key);
}
function directClone(vNodeToClone) {
    var flags = vNodeToClone.flags & -16385 /* ClearInUse */;
    var props = vNodeToClone.props;
    if (flags & 14 /* Component */) {
        if (!isNull(props)) {
            var propsToClone = props;
            props = {};
            for (var key in propsToClone) {
                props[key] = propsToClone[key];
            }
        }
    }
    if ((flags & 8192 /* Fragment */) === 0) {
        return new V(vNodeToClone.childFlags, vNodeToClone.children, vNodeToClone.className, flags, vNodeToClone.key, props, vNodeToClone.ref, vNodeToClone.type);
    }
    return cloneFragment(vNodeToClone);
}
function createVoidVNode() {
    return createTextVNode('', null);
}
function createPortal(children, container) {
    var normalizedRoot = normalizeRoot(children);
    return createVNode(1024 /* Portal */, 1024 /* Portal */, null, normalizedRoot, 0 /* UnknownChildren */, null, normalizedRoot.key, container);
}
function _normalizeVNodes(nodes, result, index, currentKey) {
    for (var len = nodes.length; index < len; index++) {
        var n = nodes[index];
        if (!isInvalid(n)) {
            var newKey = currentKey + keyPrefix + index;
            if (isArray(n)) {
                _normalizeVNodes(n, result, 0, newKey);
            }
            else {
                if (isStringOrNumber(n)) {
                    n = createTextVNode(n, newKey);
                }
                else {
                    var oldKey = n.key;
                    var isPrefixedKey = isString(oldKey) && oldKey[0] === keyPrefix;
                    if (n.flags & 81920 /* InUseOrNormalized */ || isPrefixedKey) {
                        n = directClone(n);
                    }
                    n.flags |= 65536 /* Normalized */;
                    if (!isPrefixedKey) {
                        if (isNull(oldKey)) {
                            n.key = newKey;
                        }
                        else {
                            n.key = currentKey + oldKey;
                        }
                    }
                    else if (oldKey.substring(0, currentKey.length) !== currentKey) {
                        n.key = currentKey + oldKey;
                    }
                }
                result.push(n);
            }
        }
    }
}
function getFlagsForElementVnode(type) {
    switch (type) {
        case 'svg':
            return 32 /* SvgElement */;
        case 'input':
            return 64 /* InputElement */;
        case 'select':
            return 256 /* SelectElement */;
        case 'textarea':
            return 128 /* TextareaElement */;
        case Fragment:
            return 8192 /* Fragment */;
        default:
            return 1 /* HtmlElement */;
    }
}
function normalizeChildren(vNode, children) {
    var newChildren;
    var newChildFlags = 1 /* HasInvalidChildren */;
    // Don't change children to match strict equal (===) true in patching
    if (isInvalid(children)) {
        newChildren = children;
    }
    else if (isStringOrNumber(children)) {
        newChildFlags = 16 /* HasTextChildren */;
        newChildren = children;
    }
    else if (isArray(children)) {
        var len = children.length;
        for (var i = 0; i < len; ++i) {
            var n = children[i];
            if (isInvalid(n) || isArray(n)) {
                newChildren = newChildren || children.slice(0, i);
                _normalizeVNodes(children, newChildren, i, '');
                break;
            }
            else if (isStringOrNumber(n)) {
                newChildren = newChildren || children.slice(0, i);
                newChildren.push(createTextVNode(n, keyPrefix + i));
            }
            else {
                var key = n.key;
                var needsCloning = (n.flags & 81920 /* InUseOrNormalized */) > 0;
                var isNullKey = isNull(key);
                var isPrefixed = isString(key) && key[0] === keyPrefix;
                if (needsCloning || isNullKey || isPrefixed) {
                    newChildren = newChildren || children.slice(0, i);
                    if (needsCloning || isPrefixed) {
                        n = directClone(n);
                    }
                    if (isNullKey || isPrefixed) {
                        n.key = keyPrefix + i;
                    }
                    newChildren.push(n);
                }
                else if (newChildren) {
                    newChildren.push(n);
                }
                n.flags |= 65536 /* Normalized */;
            }
        }
        newChildren = newChildren || children;
        if (newChildren.length === 0) {
            newChildFlags = 1 /* HasInvalidChildren */;
        }
        else {
            newChildFlags = 8 /* HasKeyedChildren */;
        }
    }
    else {
        newChildren = children;
        newChildren.flags |= 65536 /* Normalized */;
        if (children.flags & 81920 /* InUseOrNormalized */) {
            newChildren = directClone(children);
        }
        newChildFlags = 2 /* HasVNodeChildren */;
    }
    vNode.children = newChildren;
    vNode.childFlags = newChildFlags;
    return vNode;
}
function normalizeRoot(input) {
    if (isInvalid(input) || isStringOrNumber(input)) {
        return createTextVNode(input, null);
    }
    if (isArray(input)) {
        return createFragment(input, 0 /* UnknownChildren */, null);
    }
    return input.flags & 16384 /* InUse */ ? directClone(input) : input;
}

var xlinkNS = 'http://www.w3.org/1999/xlink';
var xmlNS = 'http://www.w3.org/XML/1998/namespace';
var namespaces = {
    'xlink:actuate': xlinkNS,
    'xlink:arcrole': xlinkNS,
    'xlink:href': xlinkNS,
    'xlink:role': xlinkNS,
    'xlink:show': xlinkNS,
    'xlink:title': xlinkNS,
    'xlink:type': xlinkNS,
    'xml:base': xmlNS,
    'xml:lang': xmlNS,
    'xml:space': xmlNS
};

function getDelegatedEventObject(v) {
    return {
        onClick: v,
        onDblClick: v,
        onFocusIn: v,
        onFocusOut: v,
        onKeyDown: v,
        onKeyPress: v,
        onKeyUp: v,
        onMouseDown: v,
        onMouseMove: v,
        onMouseUp: v,
        onTouchEnd: v,
        onTouchMove: v,
        onTouchStart: v
    };
}
var attachedEventCounts = getDelegatedEventObject(0);
var attachedEvents = getDelegatedEventObject(null);
var syntheticEvents = getDelegatedEventObject(true);
function updateOrAddSyntheticEvent(name, dom) {
    var eventsObject = dom.$EV;
    if (!eventsObject) {
        eventsObject = dom.$EV = getDelegatedEventObject(null);
    }
    if (!eventsObject[name]) {
        if (++attachedEventCounts[name] === 1) {
            attachedEvents[name] = attachEventToDocument(name);
        }
    }
    return eventsObject;
}
function unmountSyntheticEvent(name, dom) {
    var eventsObject = dom.$EV;
    if (eventsObject && eventsObject[name]) {
        if (--attachedEventCounts[name] === 0) {
            document.removeEventListener(normalizeEventName(name), attachedEvents[name]);
            attachedEvents[name] = null;
        }
        eventsObject[name] = null;
    }
}
function handleSyntheticEvent(name, lastEvent, nextEvent, dom) {
    if (isFunction(nextEvent)) {
        updateOrAddSyntheticEvent(name, dom)[name] = nextEvent;
    }
    else if (isLinkEventObject(nextEvent)) {
        if (isLastValueSameLinkEvent(lastEvent, nextEvent)) {
            return;
        }
        updateOrAddSyntheticEvent(name, dom)[name] = nextEvent;
    }
    else {
        unmountSyntheticEvent(name, dom);
    }
}
// When browsers fully support event.composedPath we could loop it through instead of using parentNode property
function getTargetNode(event) {
    return isFunction(event.composedPath) ? event.composedPath()[0] : event.target;
}
function dispatchEvents(event, isClick, name, eventData) {
    var dom = getTargetNode(event);
    do {
        // Html Nodes can be nested fe: span inside button in that scenario browser does not handle disabled attribute on parent,
        // because the event listener is on document.body
        // Don't process clicks on disabled elements
        if (isClick && dom.disabled) {
            return;
        }
        var eventsObject = dom.$EV;
        if (eventsObject) {
            var currentEvent = eventsObject[name];
            if (currentEvent) {
                // linkEvent object
                eventData.dom = dom;
                currentEvent.event ? currentEvent.event(currentEvent.data, event) : currentEvent(event);
                if (event.cancelBubble) {
                    return;
                }
            }
        }
        dom = dom.parentNode;
    } while (!isNull(dom));
}
function stopPropagation() {
    this.cancelBubble = true;
    if (!this.immediatePropagationStopped) {
        this.stopImmediatePropagation();
    }
}
function isDefaultPrevented() {
    return this.defaultPrevented;
}
function isPropagationStopped() {
    return this.cancelBubble;
}
function extendEventProperties(event) {
    // Event data needs to be object to save reference to currentTarget getter
    var eventData = {
        dom: document
    };
    event.isDefaultPrevented = isDefaultPrevented;
    event.isPropagationStopped = isPropagationStopped;
    event.stopPropagation = stopPropagation;
    Object.defineProperty(event, 'currentTarget', {
        configurable: true,
        get: function get() {
            return eventData.dom;
        }
    });
    return eventData;
}
function rootClickEvent(name) {
    return function (event) {
        if (event.button !== 0) {
            // Firefox incorrectly triggers click event for mid/right mouse buttons.
            // This bug has been active for 17 years.
            // https://bugzilla.mozilla.org/show_bug.cgi?id=184051
            event.stopPropagation();
            return;
        }
        dispatchEvents(event, true, name, extendEventProperties(event));
    };
}
function rootEvent(name) {
    return function (event) {
        dispatchEvents(event, false, name, extendEventProperties(event));
    };
}
function attachEventToDocument(name) {
    var attachedEvent = name === 'onClick' || name === 'onDblClick' ? rootClickEvent(name) : rootEvent(name);
    document.addEventListener(normalizeEventName(name), attachedEvent);
    return attachedEvent;
}

function isSameInnerHTML(dom, innerHTML) {
    var tempdom = document.createElement('i');
    tempdom.innerHTML = innerHTML;
    return tempdom.innerHTML === dom.innerHTML;
}

function triggerEventListener(props, methodName, e) {
    if (props[methodName]) {
        var listener = props[methodName];
        if (listener.event) {
            listener.event(listener.data, e);
        }
        else {
            listener(e);
        }
    }
    else {
        var nativeListenerName = methodName.toLowerCase();
        if (props[nativeListenerName]) {
            props[nativeListenerName](e);
        }
    }
}
function createWrappedFunction(methodName, applyValue) {
    var fnMethod = function (e) {
        var vNode = this.$V;
        // If vNode is gone by the time event fires, no-op
        if (!vNode) {
            return;
        }
        var props = vNode.props || EMPTY_OBJ;
        var dom = vNode.dom;
        if (isString(methodName)) {
            triggerEventListener(props, methodName, e);
        }
        else {
            for (var i = 0; i < methodName.length; ++i) {
                triggerEventListener(props, methodName[i], e);
            }
        }
        if (isFunction(applyValue)) {
            var newVNode = this.$V;
            var newProps = newVNode.props || EMPTY_OBJ;
            applyValue(newProps, dom, false, newVNode);
        }
    };
    Object.defineProperty(fnMethod, 'wrapped', {
        configurable: false,
        enumerable: false,
        value: true,
        writable: false
    });
    return fnMethod;
}

function attachEvent(dom, eventName, handler) {
    var previousKey = "$" + eventName;
    var previousArgs = dom[previousKey];
    if (previousArgs) {
        if (previousArgs[1].wrapped) {
            return;
        }
        dom.removeEventListener(previousArgs[0], previousArgs[1]);
        dom[previousKey] = null;
    }
    if (isFunction(handler)) {
        dom.addEventListener(eventName, handler);
        dom[previousKey] = [eventName, handler];
    }
}

function isCheckedType(type) {
    return type === 'checkbox' || type === 'radio';
}
var onTextInputChange = createWrappedFunction('onInput', applyValueInput);
var wrappedOnChange = createWrappedFunction(['onClick', 'onChange'], applyValueInput);
/* tslint:disable-next-line:no-empty */
function emptywrapper(event) {
    event.stopPropagation();
}
emptywrapper.wrapped = true;
function inputEvents(dom, nextPropsOrEmpty) {
    if (isCheckedType(nextPropsOrEmpty.type)) {
        attachEvent(dom, 'change', wrappedOnChange);
        attachEvent(dom, 'click', emptywrapper);
    }
    else {
        attachEvent(dom, 'input', onTextInputChange);
    }
}
function applyValueInput(nextPropsOrEmpty, dom) {
    var type = nextPropsOrEmpty.type;
    var value = nextPropsOrEmpty.value;
    var checked = nextPropsOrEmpty.checked;
    var multiple = nextPropsOrEmpty.multiple;
    var defaultValue = nextPropsOrEmpty.defaultValue;
    var hasValue = !isNullOrUndef(value);
    if (type && type !== dom.type) {
        dom.setAttribute('type', type);
    }
    if (!isNullOrUndef(multiple) && multiple !== dom.multiple) {
        dom.multiple = multiple;
    }
    if (!isNullOrUndef(defaultValue) && !hasValue) {
        dom.defaultValue = defaultValue + '';
    }
    if (isCheckedType(type)) {
        if (hasValue) {
            dom.value = value;
        }
        if (!isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
    else {
        if (hasValue && dom.value !== value) {
            dom.defaultValue = value;
            dom.value = value;
        }
        else if (!isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
}

function updateChildOptions(vNode, value) {
    if (vNode.type === 'option') {
        updateChildOption(vNode, value);
    }
    else {
        var children = vNode.children;
        var flags = vNode.flags;
        if (flags & 4 /* ComponentClass */) {
            updateChildOptions(children.$LI, value);
        }
        else if (flags & 8 /* ComponentFunction */) {
            updateChildOptions(children, value);
        }
        else if (vNode.childFlags === 2 /* HasVNodeChildren */) {
            updateChildOptions(children, value);
        }
        else if (vNode.childFlags & 12 /* MultipleChildren */) {
            for (var i = 0, len = children.length; i < len; ++i) {
                updateChildOptions(children[i], value);
            }
        }
    }
}
function updateChildOption(vNode, value) {
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    // we do this as multiple may have changed
    dom.value = props.value;
    if (props.value === value || (isArray(value) && value.indexOf(props.value) !== -1)) {
        dom.selected = true;
    }
    else if (!isNullOrUndef(value) || !isNullOrUndef(props.selected)) {
        dom.selected = props.selected || false;
    }
}
var onSelectChange = createWrappedFunction('onChange', applyValueSelect);
function selectEvents(dom) {
    attachEvent(dom, 'change', onSelectChange);
}
function applyValueSelect(nextPropsOrEmpty, dom, mounting, vNode) {
    var multiplePropInBoolean = Boolean(nextPropsOrEmpty.multiple);
    if (!isNullOrUndef(nextPropsOrEmpty.multiple) && multiplePropInBoolean !== dom.multiple) {
        dom.multiple = multiplePropInBoolean;
    }
    var index = nextPropsOrEmpty.selectedIndex;
    if (index === -1) {
        dom.selectedIndex = -1;
    }
    var childFlags = vNode.childFlags;
    if (childFlags !== 1 /* HasInvalidChildren */) {
        var value = nextPropsOrEmpty.value;
        if (isNumber(index) && index > -1 && dom.options[index]) {
            value = dom.options[index].value;
        }
        if (mounting && isNullOrUndef(value)) {
            value = nextPropsOrEmpty.defaultValue;
        }
        updateChildOptions(vNode, value);
    }
}

var onTextareaInputChange = createWrappedFunction('onInput', applyValueTextArea);
var wrappedOnChange$1 = createWrappedFunction('onChange');
function textAreaEvents(dom, nextPropsOrEmpty) {
    attachEvent(dom, 'input', onTextareaInputChange);
    if (nextPropsOrEmpty.onChange) {
        attachEvent(dom, 'change', wrappedOnChange$1);
    }
}
function applyValueTextArea(nextPropsOrEmpty, dom, mounting) {
    var value = nextPropsOrEmpty.value;
    var domValue = dom.value;
    if (isNullOrUndef(value)) {
        if (mounting) {
            var defaultValue = nextPropsOrEmpty.defaultValue;
            if (!isNullOrUndef(defaultValue) && defaultValue !== domValue) {
                dom.defaultValue = defaultValue;
                dom.value = defaultValue;
            }
        }
    }
    else if (domValue !== value) {
        /* There is value so keep it controlled */
        dom.defaultValue = value;
        dom.value = value;
    }
}

/**
 * There is currently no support for switching same input between controlled and nonControlled
 * If that ever becomes a real issue, then re design controlled elements
 * Currently user must choose either controlled or non-controlled and stick with that
 */
function processElement(flags, vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    if (flags & 64 /* InputElement */) {
        applyValueInput(nextPropsOrEmpty, dom);
    }
    else if (flags & 256 /* SelectElement */) {
        applyValueSelect(nextPropsOrEmpty, dom, mounting, vNode);
    }
    else if (flags & 128 /* TextareaElement */) {
        applyValueTextArea(nextPropsOrEmpty, dom, mounting);
    }
    if (isControlled) {
        dom.$V = vNode;
    }
}
function addFormElementEventHandlers(flags, dom, nextPropsOrEmpty) {
    if (flags & 64 /* InputElement */) {
        inputEvents(dom, nextPropsOrEmpty);
    }
    else if (flags & 256 /* SelectElement */) {
        selectEvents(dom);
    }
    else if (flags & 128 /* TextareaElement */) {
        textAreaEvents(dom, nextPropsOrEmpty);
    }
}
function isControlledFormElement(nextPropsOrEmpty) {
    return nextPropsOrEmpty.type && isCheckedType(nextPropsOrEmpty.type) ? !isNullOrUndef(nextPropsOrEmpty.checked) : !isNullOrUndef(nextPropsOrEmpty.value);
}

function createRef() {
    return {
        current: null
    };
}
function forwardRef(render) {
    return {
        render: render
    };
}
function unmountRef(ref) {
    if (ref) {
        if (!safeCall1(ref, null) && ref.current) {
            ref.current = null;
        }
    }
}
function mountRef(ref, value, lifecycle) {
    if (ref && (isFunction(ref) || ref.current !== void 0)) {
        lifecycle.push(function () {
            if (!safeCall1(ref, value) && ref.current !== void 0) {
                ref.current = value;
            }
        });
    }
}

function remove(vNode, parentDOM) {
    unmount(vNode);
    removeVNodeDOM(vNode, parentDOM);
}
function unmount(vNode) {
    var flags = vNode.flags;
    var children = vNode.children;
    var ref;
    if (flags & 481 /* Element */) {
        ref = vNode.ref;
        var props = vNode.props;
        unmountRef(ref);
        var childFlags = vNode.childFlags;
        if (!isNull(props)) {
            var keys = Object.keys(props);
            for (var i = 0, len = keys.length; i < len; i++) {
                var key = keys[i];
                if (syntheticEvents[key]) {
                    unmountSyntheticEvent(key, vNode.dom);
                }
            }
        }
        if (childFlags & 12 /* MultipleChildren */) {
            unmountAllChildren(children);
        }
        else if (childFlags === 2 /* HasVNodeChildren */) {
            unmount(children);
        }
    }
    else if (children) {
        if (flags & 4 /* ComponentClass */) {
            if (isFunction(children.componentWillUnmount)) {
                children.componentWillUnmount();
            }
            unmountRef(vNode.ref);
            children.$UN = true;
            unmount(children.$LI);
        }
        else if (flags & 8 /* ComponentFunction */) {
            ref = vNode.ref;
            if (!isNullOrUndef(ref) && isFunction(ref.onComponentWillUnmount)) {
                ref.onComponentWillUnmount(findDOMfromVNode(vNode, true), vNode.props || EMPTY_OBJ);
            }
            unmount(children);
        }
        else if (flags & 1024 /* Portal */) {
            remove(children, vNode.ref);
        }
        else if (flags & 8192 /* Fragment */) {
            if (vNode.childFlags & 12 /* MultipleChildren */) {
                unmountAllChildren(children);
            }
        }
    }
}
function unmountAllChildren(children) {
    for (var i = 0, len = children.length; i < len; ++i) {
        unmount(children[i]);
    }
}
function clearDOM(dom) {
    // Optimization for clearing dom
    dom.textContent = '';
}
function removeAllChildren(dom, vNode, children) {
    unmountAllChildren(children);
    if (vNode.flags & 8192 /* Fragment */) {
        removeVNodeDOM(vNode, dom);
    }
    else {
        clearDOM(dom);
    }
}

function wrapLinkEvent(nextValue) {
    // This variable makes sure there is no "this" context in callback
    var ev = nextValue.event;
    return function (e) {
        ev(nextValue.data, e);
    };
}
function patchEvent(name, lastValue, nextValue, dom) {
    if (isLinkEventObject(nextValue)) {
        if (isLastValueSameLinkEvent(lastValue, nextValue)) {
            return;
        }
        nextValue = wrapLinkEvent(nextValue);
    }
    attachEvent(dom, normalizeEventName(name), nextValue);
}
// We are assuming here that we come from patchProp routine
// -nextAttrValue cannot be null or undefined
function patchStyle(lastAttrValue, nextAttrValue, dom) {
    if (isNullOrUndef(nextAttrValue)) {
        dom.removeAttribute('style');
        return;
    }
    var domStyle = dom.style;
    var style;
    var value;
    if (isString(nextAttrValue)) {
        domStyle.cssText = nextAttrValue;
        return;
    }
    if (!isNullOrUndef(lastAttrValue) && !isString(lastAttrValue)) {
        for (style in nextAttrValue) {
            // do not add a hasOwnProperty check here, it affects performance
            value = nextAttrValue[style];
            if (value !== lastAttrValue[style]) {
                domStyle.setProperty(style, value);
            }
        }
        for (style in lastAttrValue) {
            if (isNullOrUndef(nextAttrValue[style])) {
                domStyle.removeProperty(style);
            }
        }
    }
    else {
        for (style in nextAttrValue) {
            value = nextAttrValue[style];
            domStyle.setProperty(style, value);
        }
    }
}
function patchDangerInnerHTML(lastValue, nextValue, lastVNode, dom) {
    var lastHtml = (lastValue && lastValue.__html) || '';
    var nextHtml = (nextValue && nextValue.__html) || '';
    if (lastHtml !== nextHtml) {
        if (!isNullOrUndef(nextHtml) && !isSameInnerHTML(dom, nextHtml)) {
            if (!isNull(lastVNode)) {
                if (lastVNode.childFlags & 12 /* MultipleChildren */) {
                    unmountAllChildren(lastVNode.children);
                }
                else if (lastVNode.childFlags === 2 /* HasVNodeChildren */) {
                    unmount(lastVNode.children);
                }
                lastVNode.children = null;
                lastVNode.childFlags = 1 /* HasInvalidChildren */;
            }
            dom.innerHTML = nextHtml;
        }
    }
}
function patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue, lastVNode) {
    switch (prop) {
        case 'children':
        case 'childrenType':
        case 'className':
        case 'defaultValue':
        case 'key':
        case 'multiple':
        case 'ref':
        case 'selectedIndex':
            break;
        case 'autoFocus':
            dom.autofocus = !!nextValue;
            break;
        case 'allowfullscreen':
        case 'autoplay':
        case 'capture':
        case 'checked':
        case 'controls':
        case 'default':
        case 'disabled':
        case 'hidden':
        case 'indeterminate':
        case 'loop':
        case 'muted':
        case 'novalidate':
        case 'open':
        case 'readOnly':
        case 'required':
        case 'reversed':
        case 'scoped':
        case 'seamless':
        case 'selected':
            dom[prop] = !!nextValue;
            break;
        case 'defaultChecked':
        case 'value':
        case 'volume':
            if (hasControlledValue && prop === 'value') {
                break;
            }
            var value = isNullOrUndef(nextValue) ? '' : nextValue;
            if (dom[prop] !== value) {
                dom[prop] = value;
            }
            break;
        case 'style':
            patchStyle(lastValue, nextValue, dom);
            break;
        case 'dangerouslySetInnerHTML':
            patchDangerInnerHTML(lastValue, nextValue, lastVNode, dom);
            break;
        default:
            if (syntheticEvents[prop]) {
                handleSyntheticEvent(prop, lastValue, nextValue, dom);
            }
            else if (prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110) {
                patchEvent(prop, lastValue, nextValue, dom);
            }
            else if (isNullOrUndef(nextValue)) {
                dom.removeAttribute(prop);
            }
            else if (isSVG && namespaces[prop]) {
                // We optimize for isSVG being false
                // If we end up in this path we can read property again
                dom.setAttributeNS(namespaces[prop], prop, nextValue);
            }
            else {
                dom.setAttribute(prop, nextValue);
            }
            break;
    }
}
function mountProps(vNode, flags, props, dom, isSVG) {
    var hasControlledValue = false;
    var isFormElement = (flags & 448 /* FormElement */) > 0;
    if (isFormElement) {
        hasControlledValue = isControlledFormElement(props);
        if (hasControlledValue) {
            addFormElementEventHandlers(flags, dom, props);
        }
    }
    for (var prop in props) {
        // do not add a hasOwnProperty check here, it affects performance
        patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue, null);
    }
    if (isFormElement) {
        processElement(flags, vNode, dom, props, true, hasControlledValue);
    }
}

function renderNewInput(instance, props, context) {
    var nextInput = normalizeRoot(instance.render(props, instance.state, context));
    var childContext = context;
    if (isFunction(instance.getChildContext)) {
        childContext = combineFrom(context, instance.getChildContext());
    }
    instance.$CX = childContext;
    return nextInput;
}
function createClassComponentInstance(vNode, Component, props, context, isSVG, lifecycle) {
    var instance = new Component(props, context);
    var usesNewAPI = (instance.$N = Boolean(Component.getDerivedStateFromProps || instance.getSnapshotBeforeUpdate));
    instance.$SVG = isSVG;
    instance.$L = lifecycle;
    vNode.children = instance;
    instance.$BS = false;
    instance.context = context;
    if (instance.props === EMPTY_OBJ) {
        instance.props = props;
    }
    if (!usesNewAPI) {
        if (isFunction(instance.componentWillMount)) {
            instance.$BR = true;
            instance.componentWillMount();
            var pending = instance.$PS;
            if (!isNull(pending)) {
                var state = instance.state;
                if (isNull(state)) {
                    instance.state = pending;
                }
                else {
                    for (var key in pending) {
                        state[key] = pending[key];
                    }
                }
                instance.$PS = null;
            }
            instance.$BR = false;
        }
    }
    else {
        instance.state = createDerivedState(instance, props, instance.state);
    }
    instance.$LI = renderNewInput(instance, props, context);
    return instance;
}

function mount(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    var flags = (vNode.flags |= 16384 /* InUse */);
    if (flags & 481 /* Element */) {
        mountElement(vNode, parentDOM, context, isSVG, nextNode, lifecycle);
    }
    else if (flags & 4 /* ComponentClass */) {
        mountClassComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle);
    }
    else if (flags & 8 /* ComponentFunction */) {
        mountFunctionalComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle);
        mountFunctionalComponentCallbacks(vNode, lifecycle);
    }
    else if (flags & 512 /* Void */ || flags & 16 /* Text */) {
        mountText(vNode, parentDOM, nextNode);
    }
    else if (flags & 8192 /* Fragment */) {
        mountFragment(vNode, context, parentDOM, isSVG, nextNode, lifecycle);
    }
    else if (flags & 1024 /* Portal */) {
        mountPortal(vNode, context, parentDOM, nextNode, lifecycle);
    }
}
function mountPortal(vNode, context, parentDOM, nextNode, lifecycle) {
    mount(vNode.children, vNode.ref, context, false, null, lifecycle);
    var placeHolderVNode = createVoidVNode();
    mountText(placeHolderVNode, parentDOM, nextNode);
    vNode.dom = placeHolderVNode.dom;
}
function mountFragment(vNode, context, parentDOM, isSVG, nextNode, lifecycle) {
    var children = vNode.children;
    var childFlags = vNode.childFlags;
    // When fragment is optimized for multiple children, check if there is no children and change flag to invalid
    // This is the only normalization always done, to keep optimization flags API same for fragments and regular elements
    if (childFlags & 12 /* MultipleChildren */ && children.length === 0) {
        childFlags = vNode.childFlags = 2 /* HasVNodeChildren */;
        children = vNode.children = createVoidVNode();
    }
    if (childFlags === 2 /* HasVNodeChildren */) {
        mount(children, parentDOM, nextNode, isSVG, nextNode, lifecycle);
    }
    else {
        mountArrayChildren(children, parentDOM, context, isSVG, nextNode, lifecycle);
    }
}
function mountText(vNode, parentDOM, nextNode) {
    var dom = (vNode.dom = document.createTextNode(vNode.children));
    if (!isNull(parentDOM)) {
        insertOrAppend(parentDOM, dom, nextNode);
    }
}
function mountElement(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    var flags = vNode.flags;
    var props = vNode.props;
    var className = vNode.className;
    var children = vNode.children;
    var childFlags = vNode.childFlags;
    var dom = (vNode.dom = documentCreateElement(vNode.type, (isSVG = isSVG || (flags & 32 /* SvgElement */) > 0)));
    if (!isNullOrUndef(className) && className !== '') {
        if (isSVG) {
            dom.setAttribute('class', className);
        }
        else {
            dom.className = className;
        }
    }
    if (childFlags === 16 /* HasTextChildren */) {
        setTextContent(dom, children);
    }
    else if (childFlags !== 1 /* HasInvalidChildren */) {
        var childrenIsSVG = isSVG && vNode.type !== 'foreignObject';
        if (childFlags === 2 /* HasVNodeChildren */) {
            if (children.flags & 16384 /* InUse */) {
                vNode.children = children = directClone(children);
            }
            mount(children, dom, context, childrenIsSVG, null, lifecycle);
        }
        else if (childFlags === 8 /* HasKeyedChildren */ || childFlags === 4 /* HasNonKeyedChildren */) {
            mountArrayChildren(children, dom, context, childrenIsSVG, null, lifecycle);
        }
    }
    if (!isNull(parentDOM)) {
        insertOrAppend(parentDOM, dom, nextNode);
    }
    if (!isNull(props)) {
        mountProps(vNode, flags, props, dom, isSVG);
    }
    mountRef(vNode.ref, dom, lifecycle);
}
function mountArrayChildren(children, dom, context, isSVG, nextNode, lifecycle) {
    for (var i = 0; i < children.length; ++i) {
        var child = children[i];
        if (child.flags & 16384 /* InUse */) {
            children[i] = child = directClone(child);
        }
        mount(child, dom, context, isSVG, nextNode, lifecycle);
    }
}
function mountClassComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    var instance = createClassComponentInstance(vNode, vNode.type, vNode.props || EMPTY_OBJ, context, isSVG, lifecycle);
    mount(instance.$LI, parentDOM, instance.$CX, isSVG, nextNode, lifecycle);
    mountClassComponentCallbacks(vNode.ref, instance, lifecycle);
}
function renderFunctionalComponent(vNode, context) {
    return vNode.flags & 32768 /* ForwardRef */ ? vNode.type.render(vNode.props || EMPTY_OBJ, vNode.ref, context) : vNode.type(vNode.props || EMPTY_OBJ, context);
}
function mountFunctionalComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    mount((vNode.children = normalizeRoot(renderFunctionalComponent(vNode, context))), parentDOM, context, isSVG, nextNode, lifecycle);
}
function createClassMountCallback(instance) {
    return function () {
        instance.componentDidMount();
    };
}
function mountClassComponentCallbacks(ref, instance, lifecycle) {
    mountRef(ref, instance, lifecycle);
    if (isFunction(instance.componentDidMount)) {
        lifecycle.push(createClassMountCallback(instance));
    }
}
function createOnMountCallback(ref, vNode) {
    return function () {
        ref.onComponentDidMount(findDOMfromVNode(vNode, true), vNode.props || EMPTY_OBJ);
    };
}
function mountFunctionalComponentCallbacks(vNode, lifecycle) {
    var ref = vNode.ref;
    if (!isNullOrUndef(ref)) {
        safeCall1(ref.onComponentWillMount, vNode.props || EMPTY_OBJ);
        if (isFunction(ref.onComponentDidMount)) {
            lifecycle.push(createOnMountCallback(ref, vNode));
        }
    }
}

function replaceWithNewNode(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle) {
    unmount(lastVNode);
    if ((nextVNode.flags & lastVNode.flags & 2033 /* DOMRef */) !== 0) {
        mount(nextVNode, null, context, isSVG, null, lifecycle);
        // Single DOM operation, when we have dom references available
        replaceChild(parentDOM, nextVNode.dom, lastVNode.dom);
    }
    else {
        mount(nextVNode, parentDOM, context, isSVG, findDOMfromVNode(lastVNode, true), lifecycle);
        removeVNodeDOM(lastVNode, parentDOM);
    }
}
function patch(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    var nextFlags = (nextVNode.flags |= 16384 /* InUse */);
    if (lastVNode.flags !== nextFlags || lastVNode.type !== nextVNode.type || lastVNode.key !== nextVNode.key || nextFlags & 2048 /* ReCreate */) {
        if (lastVNode.flags & 16384 /* InUse */) {
            replaceWithNewNode(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle);
        }
        else {
            // Last vNode is not in use, it has crashed at application level. Just mount nextVNode and ignore last one
            mount(nextVNode, parentDOM, context, isSVG, nextNode, lifecycle);
        }
    }
    else if (nextFlags & 481 /* Element */) {
        patchElement(lastVNode, nextVNode, context, isSVG, nextFlags, lifecycle);
    }
    else if (nextFlags & 4 /* ComponentClass */) {
        patchClassComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle);
    }
    else if (nextFlags & 8 /* ComponentFunction */) {
        patchFunctionalComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle);
    }
    else if (nextFlags & 16 /* Text */) {
        patchText(lastVNode, nextVNode);
    }
    else if (nextFlags & 512 /* Void */) {
        nextVNode.dom = lastVNode.dom;
    }
    else if (nextFlags & 8192 /* Fragment */) {
        patchFragment(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle);
    }
    else {
        patchPortal(lastVNode, nextVNode, context, lifecycle);
    }
}
function patchSingleTextChild(lastChildren, nextChildren, parentDOM) {
    if (lastChildren !== nextChildren) {
        if (lastChildren !== '') {
            parentDOM.firstChild.nodeValue = nextChildren;
        }
        else {
            setTextContent(parentDOM, nextChildren);
        }
    }
}
function patchContentEditableChildren(dom, nextChildren) {
    if (dom.textContent !== nextChildren) {
        dom.textContent = nextChildren;
    }
}
function patchFragment(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle) {
    var lastChildren = lastVNode.children;
    var nextChildren = nextVNode.children;
    var lastChildFlags = lastVNode.childFlags;
    var nextChildFlags = nextVNode.childFlags;
    var nextNode = null;
    // When fragment is optimized for multiple children, check if there is no children and change flag to invalid
    // This is the only normalization always done, to keep optimization flags API same for fragments and regular elements
    if (nextChildFlags & 12 /* MultipleChildren */ && nextChildren.length === 0) {
        nextChildFlags = nextVNode.childFlags = 2 /* HasVNodeChildren */;
        nextChildren = nextVNode.children = createVoidVNode();
    }
    var nextIsSingle = (nextChildFlags & 2 /* HasVNodeChildren */) !== 0;
    if (lastChildFlags & 12 /* MultipleChildren */) {
        var lastLen = lastChildren.length;
        // We need to know Fragment's edge node when
        if (
        // It uses keyed algorithm
        (lastChildFlags & 8 /* HasKeyedChildren */ && nextChildFlags & 8 /* HasKeyedChildren */) ||
            // It transforms from many to single
            nextIsSingle ||
            // It will append more nodes
            (!nextIsSingle && nextChildren.length > lastLen)) {
            // When fragment has multiple children there is always at least one vNode
            nextNode = findDOMfromVNode(lastChildren[lastLen - 1], false).nextSibling;
        }
    }
    patchChildren(lastChildFlags, nextChildFlags, lastChildren, nextChildren, parentDOM, context, isSVG, nextNode, lastVNode, lifecycle);
}
function patchPortal(lastVNode, nextVNode, context, lifecycle) {
    var lastContainer = lastVNode.ref;
    var nextContainer = nextVNode.ref;
    var nextChildren = nextVNode.children;
    patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastVNode.children, nextChildren, lastContainer, context, false, null, lastVNode, lifecycle);
    nextVNode.dom = lastVNode.dom;
    if (lastContainer !== nextContainer && !isInvalid(nextChildren)) {
        var node = nextChildren.dom;
        removeChild(lastContainer, node);
        appendChild(nextContainer, node);
    }
}
function patchElement(lastVNode, nextVNode, context, isSVG, nextFlags, lifecycle) {
    var dom = (nextVNode.dom = lastVNode.dom);
    var lastProps = lastVNode.props;
    var nextProps = nextVNode.props;
    var isFormElement = false;
    var hasControlledValue = false;
    var nextPropsOrEmpty;
    isSVG = isSVG || (nextFlags & 32 /* SvgElement */) > 0;
    // inlined patchProps  -- starts --
    if (lastProps !== nextProps) {
        var lastPropsOrEmpty = lastProps || EMPTY_OBJ;
        nextPropsOrEmpty = nextProps || EMPTY_OBJ;
        if (nextPropsOrEmpty !== EMPTY_OBJ) {
            isFormElement = (nextFlags & 448 /* FormElement */) > 0;
            if (isFormElement) {
                hasControlledValue = isControlledFormElement(nextPropsOrEmpty);
            }
            for (var prop in nextPropsOrEmpty) {
                var lastValue = lastPropsOrEmpty[prop];
                var nextValue = nextPropsOrEmpty[prop];
                if (lastValue !== nextValue) {
                    patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue, lastVNode);
                }
            }
        }
        if (lastPropsOrEmpty !== EMPTY_OBJ) {
            for (var prop$1 in lastPropsOrEmpty) {
                if (isNullOrUndef(nextPropsOrEmpty[prop$1]) && !isNullOrUndef(lastPropsOrEmpty[prop$1])) {
                    patchProp(prop$1, lastPropsOrEmpty[prop$1], null, dom, isSVG, hasControlledValue, lastVNode);
                }
            }
        }
    }
    var nextChildren = nextVNode.children;
    var nextClassName = nextVNode.className;
    // inlined patchProps  -- ends --
    if (lastVNode.className !== nextClassName) {
        if (isNullOrUndef(nextClassName)) {
            dom.removeAttribute('class');
        }
        else if (isSVG) {
            dom.setAttribute('class', nextClassName);
        }
        else {
            dom.className = nextClassName;
        }
    }
    if (nextFlags & 4096 /* ContentEditable */) {
        patchContentEditableChildren(dom, nextChildren);
    }
    else {
        patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastVNode.children, nextChildren, dom, context, isSVG && nextVNode.type !== 'foreignObject', null, lastVNode, lifecycle);
    }
    if (isFormElement) {
        processElement(nextFlags, nextVNode, dom, nextPropsOrEmpty, false, hasControlledValue);
    }
    var nextRef = nextVNode.ref;
    var lastRef = lastVNode.ref;
    if (lastRef !== nextRef) {
        unmountRef(lastRef);
        mountRef(nextRef, dom, lifecycle);
    }
}
function replaceOneVNodeWithMultipleVNodes(lastChildren, nextChildren, parentDOM, context, isSVG, lifecycle) {
    unmount(lastChildren);
    mountArrayChildren(nextChildren, parentDOM, context, isSVG, findDOMfromVNode(lastChildren, true), lifecycle);
    removeVNodeDOM(lastChildren, parentDOM);
}
function patchChildren(lastChildFlags, nextChildFlags, lastChildren, nextChildren, parentDOM, context, isSVG, nextNode, parentVNode, lifecycle) {
    switch (lastChildFlags) {
        case 2 /* HasVNodeChildren */:
            switch (nextChildFlags) {
                case 2 /* HasVNodeChildren */:
                    patch(lastChildren, nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                    break;
                case 1 /* HasInvalidChildren */:
                    remove(lastChildren, parentDOM);
                    break;
                case 16 /* HasTextChildren */:
                    unmount(lastChildren);
                    setTextContent(parentDOM, nextChildren);
                    break;
                default:
                    replaceOneVNodeWithMultipleVNodes(lastChildren, nextChildren, parentDOM, context, isSVG, lifecycle);
                    break;
            }
            break;
        case 1 /* HasInvalidChildren */:
            switch (nextChildFlags) {
                case 2 /* HasVNodeChildren */:
                    mount(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                    break;
                case 1 /* HasInvalidChildren */:
                    break;
                case 16 /* HasTextChildren */:
                    setTextContent(parentDOM, nextChildren);
                    break;
                default:
                    mountArrayChildren(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                    break;
            }
            break;
        case 16 /* HasTextChildren */:
            switch (nextChildFlags) {
                case 16 /* HasTextChildren */:
                    patchSingleTextChild(lastChildren, nextChildren, parentDOM);
                    break;
                case 2 /* HasVNodeChildren */:
                    clearDOM(parentDOM);
                    mount(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                    break;
                case 1 /* HasInvalidChildren */:
                    clearDOM(parentDOM);
                    break;
                default:
                    clearDOM(parentDOM);
                    mountArrayChildren(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                    break;
            }
            break;
        default:
            switch (nextChildFlags) {
                case 16 /* HasTextChildren */:
                    unmountAllChildren(lastChildren);
                    setTextContent(parentDOM, nextChildren);
                    break;
                case 2 /* HasVNodeChildren */:
                    removeAllChildren(parentDOM, parentVNode, lastChildren);
                    mount(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                    break;
                case 1 /* HasInvalidChildren */:
                    removeAllChildren(parentDOM, parentVNode, lastChildren);
                    break;
                default:
                    var lastLength = lastChildren.length | 0;
                    var nextLength = nextChildren.length | 0;
                    // Fast path's for both algorithms
                    if (lastLength === 0) {
                        if (nextLength > 0) {
                            mountArrayChildren(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                        }
                    }
                    else if (nextLength === 0) {
                        removeAllChildren(parentDOM, parentVNode, lastChildren);
                    }
                    else if (nextChildFlags === 8 /* HasKeyedChildren */ && lastChildFlags === 8 /* HasKeyedChildren */) {
                        patchKeyedChildren(lastChildren, nextChildren, parentDOM, context, isSVG, lastLength, nextLength, nextNode, parentVNode, lifecycle);
                    }
                    else {
                        patchNonKeyedChildren(lastChildren, nextChildren, parentDOM, context, isSVG, lastLength, nextLength, nextNode, lifecycle);
                    }
                    break;
            }
            break;
    }
}
function createDidUpdate(instance, lastProps, lastState, snapshot, lifecycle) {
    lifecycle.push(function () {
        instance.componentDidUpdate(lastProps, lastState, snapshot);
    });
}
function updateClassComponent(instance, nextState, nextProps, parentDOM, context, isSVG, force, nextNode, lifecycle) {
    var lastState = instance.state;
    var lastProps = instance.props;
    var usesNewAPI = Boolean(instance.$N);
    var hasSCU = isFunction(instance.shouldComponentUpdate);
    if (usesNewAPI) {
        nextState = createDerivedState(instance, nextProps, nextState !== lastState ? combineFrom(lastState, nextState) : nextState);
    }
    if (force || !hasSCU || (hasSCU && instance.shouldComponentUpdate(nextProps, nextState, context))) {
        if (!usesNewAPI && isFunction(instance.componentWillUpdate)) {
            instance.componentWillUpdate(nextProps, nextState, context);
        }
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = context;
        var snapshot = null;
        var nextInput = renderNewInput(instance, nextProps, context);
        if (usesNewAPI && isFunction(instance.getSnapshotBeforeUpdate)) {
            snapshot = instance.getSnapshotBeforeUpdate(lastProps, lastState);
        }
        patch(instance.$LI, nextInput, parentDOM, instance.$CX, isSVG, nextNode, lifecycle);
        // Dont update Last input, until patch has been succesfully executed
        instance.$LI = nextInput;
        if (isFunction(instance.componentDidUpdate)) {
            createDidUpdate(instance, lastProps, lastState, snapshot, lifecycle);
        }
    }
    else {
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = context;
    }
}
function patchClassComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    var instance = (nextVNode.children = lastVNode.children);
    // If Component has crashed, ignore it to stay functional
    if (isNull(instance)) {
        return;
    }
    instance.$L = lifecycle;
    var nextProps = nextVNode.props || EMPTY_OBJ;
    var nextRef = nextVNode.ref;
    var lastRef = lastVNode.ref;
    var nextState = instance.state;
    if (!instance.$N) {
        if (isFunction(instance.componentWillReceiveProps)) {
            instance.$BR = true;
            instance.componentWillReceiveProps(nextProps, context);
            // If instance component was removed during its own update do nothing.
            if (instance.$UN) {
                return;
            }
            instance.$BR = false;
        }
        if (!isNull(instance.$PS)) {
            nextState = combineFrom(nextState, instance.$PS);
            instance.$PS = null;
        }
    }
    updateClassComponent(instance, nextState, nextProps, parentDOM, context, isSVG, false, nextNode, lifecycle);
    if (lastRef !== nextRef) {
        unmountRef(lastRef);
        mountRef(nextRef, instance, lifecycle);
    }
}
function patchFunctionalComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    var shouldUpdate = true;
    var nextProps = nextVNode.props || EMPTY_OBJ;
    var nextRef = nextVNode.ref;
    var lastProps = lastVNode.props;
    var nextHooksDefined = !isNullOrUndef(nextRef);
    var lastInput = lastVNode.children;
    if (nextHooksDefined && isFunction(nextRef.onComponentShouldUpdate)) {
        shouldUpdate = nextRef.onComponentShouldUpdate(lastProps, nextProps);
    }
    if (shouldUpdate !== false) {
        if (nextHooksDefined && isFunction(nextRef.onComponentWillUpdate)) {
            nextRef.onComponentWillUpdate(lastProps, nextProps);
        }
        var type = nextVNode.type;
        var nextInput = normalizeRoot(nextVNode.flags & 32768 /* ForwardRef */ ? type.render(nextProps, nextRef, context) : type(nextProps, context));
        patch(lastInput, nextInput, parentDOM, context, isSVG, nextNode, lifecycle);
        nextVNode.children = nextInput;
        if (nextHooksDefined && isFunction(nextRef.onComponentDidUpdate)) {
            nextRef.onComponentDidUpdate(lastProps, nextProps);
        }
    }
    else {
        nextVNode.children = lastInput;
    }
}
function patchText(lastVNode, nextVNode) {
    var nextText = nextVNode.children;
    var dom = (nextVNode.dom = lastVNode.dom);
    if (nextText !== lastVNode.children) {
        dom.nodeValue = nextText;
    }
}
function patchNonKeyedChildren(lastChildren, nextChildren, dom, context, isSVG, lastChildrenLength, nextChildrenLength, nextNode, lifecycle) {
    var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
    var i = 0;
    var nextChild;
    var lastChild;
    for (; i < commonLength; ++i) {
        nextChild = nextChildren[i];
        lastChild = lastChildren[i];
        if (nextChild.flags & 16384 /* InUse */) {
            nextChild = nextChildren[i] = directClone(nextChild);
        }
        patch(lastChild, nextChild, dom, context, isSVG, nextNode, lifecycle);
        lastChildren[i] = nextChild;
    }
    if (lastChildrenLength < nextChildrenLength) {
        for (i = commonLength; i < nextChildrenLength; ++i) {
            nextChild = nextChildren[i];
            if (nextChild.flags & 16384 /* InUse */) {
                nextChild = nextChildren[i] = directClone(nextChild);
            }
            mount(nextChild, dom, context, isSVG, nextNode, lifecycle);
        }
    }
    else if (lastChildrenLength > nextChildrenLength) {
        for (i = commonLength; i < lastChildrenLength; ++i) {
            remove(lastChildren[i], dom);
        }
    }
}
function patchKeyedChildren(a, b, dom, context, isSVG, aLength, bLength, outerEdge, parentVNode, lifecycle) {
    var aEnd = aLength - 1;
    var bEnd = bLength - 1;
    var j = 0;
    var aNode = a[j];
    var bNode = b[j];
    var nextPos;
    var nextNode;
    // Step 1
    // tslint:disable-next-line
    outer: {
        // Sync nodes with the same key at the beginning.
        while (aNode.key === bNode.key) {
            if (bNode.flags & 16384 /* InUse */) {
                b[j] = bNode = directClone(bNode);
            }
            patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle);
            a[j] = bNode;
            ++j;
            if (j > aEnd || j > bEnd) {
                break outer;
            }
            aNode = a[j];
            bNode = b[j];
        }
        aNode = a[aEnd];
        bNode = b[bEnd];
        // Sync nodes with the same key at the end.
        while (aNode.key === bNode.key) {
            if (bNode.flags & 16384 /* InUse */) {
                b[bEnd] = bNode = directClone(bNode);
            }
            patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle);
            a[aEnd] = bNode;
            aEnd--;
            bEnd--;
            if (j > aEnd || j > bEnd) {
                break outer;
            }
            aNode = a[aEnd];
            bNode = b[bEnd];
        }
    }
    if (j > aEnd) {
        if (j <= bEnd) {
            nextPos = bEnd + 1;
            nextNode = nextPos < bLength ? findDOMfromVNode(b[nextPos], true) : outerEdge;
            while (j <= bEnd) {
                bNode = b[j];
                if (bNode.flags & 16384 /* InUse */) {
                    b[j] = bNode = directClone(bNode);
                }
                ++j;
                mount(bNode, dom, context, isSVG, nextNode, lifecycle);
            }
        }
    }
    else if (j > bEnd) {
        while (j <= aEnd) {
            remove(a[j++], dom);
        }
    }
    else {
        patchKeyedChildrenComplex(a, b, context, aLength, bLength, aEnd, bEnd, j, dom, isSVG, outerEdge, parentVNode, lifecycle);
    }
}
function patchKeyedChildrenComplex(a, b, context, aLength, bLength, aEnd, bEnd, j, dom, isSVG, outerEdge, parentVNode, lifecycle) {
    var aNode;
    var bNode;
    var nextPos;
    var i = 0;
    var aStart = j;
    var bStart = j;
    var aLeft = aEnd - j + 1;
    var bLeft = bEnd - j + 1;
    var sources = new Int32Array(bLeft + 1);
    // Keep track if its possible to remove whole DOM using textContent = '';
    var canRemoveWholeContent = aLeft === aLength;
    var moved = false;
    var pos = 0;
    var patched = 0;
    // When sizes are small, just loop them through
    if (bLength < 4 || (aLeft | bLeft) < 32) {
        for (i = aStart; i <= aEnd; ++i) {
            aNode = a[i];
            if (patched < bLeft) {
                for (j = bStart; j <= bEnd; j++) {
                    bNode = b[j];
                    if (aNode.key === bNode.key) {
                        sources[j - bStart] = i + 1;
                        if (canRemoveWholeContent) {
                            canRemoveWholeContent = false;
                            while (aStart < i) {
                                remove(a[aStart++], dom);
                            }
                        }
                        if (pos > j) {
                            moved = true;
                        }
                        else {
                            pos = j;
                        }
                        if (bNode.flags & 16384 /* InUse */) {
                            b[j] = bNode = directClone(bNode);
                        }
                        patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle);
                        ++patched;
                        break;
                    }
                }
                if (!canRemoveWholeContent && j > bEnd) {
                    remove(aNode, dom);
                }
            }
            else if (!canRemoveWholeContent) {
                remove(aNode, dom);
            }
        }
    }
    else {
        var keyIndex = {};
        // Map keys by their index
        for (i = bStart; i <= bEnd; ++i) {
            keyIndex[b[i].key] = i;
        }
        // Try to patch same keys
        for (i = aStart; i <= aEnd; ++i) {
            aNode = a[i];
            if (patched < bLeft) {
                j = keyIndex[aNode.key];
                if (j !== void 0) {
                    if (canRemoveWholeContent) {
                        canRemoveWholeContent = false;
                        while (i > aStart) {
                            remove(a[aStart++], dom);
                        }
                    }
                    sources[j - bStart] = i + 1;
                    if (pos > j) {
                        moved = true;
                    }
                    else {
                        pos = j;
                    }
                    bNode = b[j];
                    if (bNode.flags & 16384 /* InUse */) {
                        b[j] = bNode = directClone(bNode);
                    }
                    patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle);
                    ++patched;
                }
                else if (!canRemoveWholeContent) {
                    remove(aNode, dom);
                }
            }
            else if (!canRemoveWholeContent) {
                remove(aNode, dom);
            }
        }
    }
    // fast-path: if nothing patched remove all old and add all new
    if (canRemoveWholeContent) {
        removeAllChildren(dom, parentVNode, a);
        mountArrayChildren(b, dom, context, isSVG, outerEdge, lifecycle);
    }
    else if (moved) {
        var seq = lis_algorithm(sources);
        j = seq.length - 1;
        for (i = bLeft - 1; i >= 0; i--) {
            if (sources[i] === 0) {
                pos = i + bStart;
                bNode = b[pos];
                if (bNode.flags & 16384 /* InUse */) {
                    b[pos] = bNode = directClone(bNode);
                }
                nextPos = pos + 1;
                mount(bNode, dom, context, isSVG, nextPos < bLength ? findDOMfromVNode(b[nextPos], true) : outerEdge, lifecycle);
            }
            else if (j < 0 || i !== seq[j]) {
                pos = i + bStart;
                bNode = b[pos];
                nextPos = pos + 1;
                moveVNodeDOM(bNode, dom, nextPos < bLength ? findDOMfromVNode(b[nextPos], true) : outerEdge);
            }
            else {
                j--;
            }
        }
    }
    else if (patched !== bLeft) {
        // when patched count doesn't match b length we need to insert those new ones
        // loop backwards so we can use insertBefore
        for (i = bLeft - 1; i >= 0; i--) {
            if (sources[i] === 0) {
                pos = i + bStart;
                bNode = b[pos];
                if (bNode.flags & 16384 /* InUse */) {
                    b[pos] = bNode = directClone(bNode);
                }
                nextPos = pos + 1;
                mount(bNode, dom, context, isSVG, nextPos < bLength ? findDOMfromVNode(b[nextPos], true) : outerEdge, lifecycle);
            }
        }
    }
}
var result;
var p;
var maxLen = 0;
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function lis_algorithm(arr) {
    var arrI = 0;
    var i = 0;
    var j = 0;
    var k = 0;
    var u = 0;
    var v = 0;
    var c = 0;
    var len = arr.length;
    if (len > maxLen) {
        maxLen = len;
        result = new Int32Array(len);
        p = new Int32Array(len);
    }
    for (; i < len; ++i) {
        arrI = arr[i];
        if (arrI !== 0) {
            j = result[k];
            if (arr[j] < arrI) {
                p[i] = j;
                result[++k] = i;
                continue;
            }
            u = 0;
            v = k;
            while (u < v) {
                c = (u + v) >> 1;
                if (arr[result[c]] < arrI) {
                    u = c + 1;
                }
                else {
                    v = c;
                }
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) {
                    p[i] = result[u - 1];
                }
                result[u] = i;
            }
        }
    }
    u = k + 1;
    var seq = new Int32Array(u);
    v = result[u - 1];
    while (u-- > 0) {
        seq[u] = v;
        v = p[v];
        result[u] = 0;
    }
    return seq;
}

var hasDocumentAvailable = typeof document !== 'undefined';
if (hasDocumentAvailable) {
    /*
     * Defining $EV and $V properties on Node.prototype
     * fixes v8 "wrong map" de-optimization
     */
    if (window.Node) {
        Node.prototype.$EV = null;
        Node.prototype.$V = null;
    }
}
function __render(input, parentDOM, callback, context) {
    var lifecycle = [];
    var rootInput = parentDOM.$V;
    renderCheck.v = true;
    if (isNullOrUndef(rootInput)) {
        if (!isNullOrUndef(input)) {
            if (input.flags & 16384 /* InUse */) {
                input = directClone(input);
            }
            mount(input, parentDOM, context, false, null, lifecycle);
            parentDOM.$V = input;
            rootInput = input;
        }
    }
    else {
        if (isNullOrUndef(input)) {
            remove(rootInput, parentDOM);
            parentDOM.$V = null;
        }
        else {
            if (input.flags & 16384 /* InUse */) {
                input = directClone(input);
            }
            patch(rootInput, input, parentDOM, context, false, null, lifecycle);
            rootInput = parentDOM.$V = input;
        }
    }
    callAll(lifecycle);
    renderCheck.v = false;
    if (isFunction(callback)) {
        callback();
    }
    if (isFunction(options.renderComplete)) {
        options.renderComplete(rootInput, parentDOM);
    }
}
function render(input, parentDOM, callback, context) {
    if ( callback === void 0 ) callback = null;
    if ( context === void 0 ) context = EMPTY_OBJ;

    __render(input, parentDOM, callback, context);
}
function createRenderer(parentDOM) {
    return function renderer(lastInput, nextInput, callback, context) {
        if (!parentDOM) {
            parentDOM = lastInput;
        }
        render(nextInput, parentDOM, callback, context);
    };
}

var QUEUE = [];
var nextTick = typeof Promise !== 'undefined'
    ? Promise.resolve().then.bind(Promise.resolve())
    : function (a) {
        window.setTimeout(a, 0);
    };
var microTaskPending = false;
function queueStateChanges(component, newState, callback, force) {
    var pending = component.$PS;
    if (isFunction(newState)) {
        newState = newState(pending ? combineFrom(component.state, pending) : component.state, component.props, component.context);
    }
    if (isNullOrUndef(pending)) {
        component.$PS = newState;
    }
    else {
        for (var stateKey in newState) {
            pending[stateKey] = newState[stateKey];
        }
    }
    if (!component.$BR) {
        if (!renderCheck.v) {
            if (QUEUE.length === 0) {
                applyState(component, force);
                if (isFunction(callback)) {
                    callback.call(component);
                }
                return;
            }
        }
        if (QUEUE.indexOf(component) === -1) {
            QUEUE.push(component);
        }
        if (!microTaskPending) {
            microTaskPending = true;
            nextTick(rerender);
        }
        if (isFunction(callback)) {
            var QU = component.$QU;
            if (!QU) {
                QU = component.$QU = [];
            }
            QU.push(callback);
        }
    }
    else if (isFunction(callback)) {
        component.$L.push(callback.bind(component));
    }
}
function callSetStateCallbacks(component) {
    var queue = component.$QU;
    for (var i = 0; i < queue.length; ++i) {
        queue[i].call(component);
    }
    component.$QU = null;
}
function rerender() {
    var component;
    microTaskPending = false;
    while ((component = QUEUE.shift())) {
        if (!component.$UN) {
            applyState(component, false);
            if (component.$QU) {
                callSetStateCallbacks(component);
            }
        }
    }
}
function applyState(component, force) {
    if (force || !component.$BR) {
        var pendingState = component.$PS;
        component.$PS = null;
        var lifecycle = [];
        renderCheck.v = true;
        updateClassComponent(component, combineFrom(component.state, pendingState), component.props, findDOMfromVNode(component.$LI, true).parentNode, component.context, component.$SVG, force, null, lifecycle);
        callAll(lifecycle);
        renderCheck.v = false;
    }
    else {
        component.state = component.$PS;
        component.$PS = null;
    }
}
var Component = function Component(props, context) {
    // Public
    this.state = null;
    // Internal properties
    this.$BR = false; // BLOCK RENDER
    this.$BS = true; // BLOCK STATE
    this.$PS = null; // PENDING STATE (PARTIAL or FULL)
    this.$LI = null; // LAST INPUT
    this.$UN = false; // UNMOUNTED
    this.$CX = null; // CHILDCONTEXT
    this.$QU = null; // QUEUE
    this.$N = false; // Uses new lifecycle API Flag
    this.$L = null; // Current lifecycle of this component
    this.$SVG = false; // Flag to keep track if component is inside SVG tree
    this.props = props || EMPTY_OBJ;
    this.context = context || EMPTY_OBJ; // context should not be mutable
};
Component.prototype.forceUpdate = function forceUpdate (callback) {
    if (this.$UN) {
        return;
    }
    // Do not allow double render during force update
    queueStateChanges(this, {}, callback, true);
};
Component.prototype.setState = function setState (newState, callback) {
    if (this.$UN) {
        return;
    }
    if (!this.$BS) {
        queueStateChanges(this, newState, callback, false);
    }
};
Component.prototype.render = function render (_nextProps, _nextState, _nextContext) {
    return null;
};

var version = "7.4.2";



// CONCATENATED MODULE: ./node_modules/inferno/index.esm.js


if (false) {}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


var isArray = Array.isArray;
function isStringOrNumber(o) {
    var type = typeof o;
    return type === 'string' || type === 'number';
}
function isString(o) {
    return typeof o === 'string';
}
function isUndefined(o) {
    return o === void 0;
}

var classIdSplit = /([.#]?[a-zA-Z0-9_:-]+)/;
var notClassId = /^\.|#/;
function parseTag(tag, props) {
    if (!tag) {
        return 'div';
    }
    if (tag === inferno__WEBPACK_IMPORTED_MODULE_0__["Fragment"]) {
        return tag;
    }
    var noId = props && isUndefined(props.id);
    var tagParts = tag.split(classIdSplit);
    var tagName = null;
    if (notClassId.test(tagParts[1])) {
        tagName = 'div';
    }
    var classes;
    for (var i = 0, len = tagParts.length; i < len; ++i) {
        var part = tagParts[i];
        if (!part) {
            continue;
        }
        var type = part.charAt(0);
        if (!tagName) {
            tagName = part;
        }
        else if (type === '.') {
            if (classes === void 0) {
                classes = [];
            }
            classes.push(part.substring(1, part.length));
        }
        else if (type === '#' && noId) {
            props.id = part.substring(1, part.length);
        }
    }
    if (classes) {
        if (props.className) {
            classes.push(props.className);
        }
        props.className = classes.join(' ');
    }
    return tagName || 'div';
}
function isChildren(x) {
    return isStringOrNumber(x) || (x && isArray(x));
}
/**
 * Creates virtual node
 * @param {string|VNode|Function} _tag Name for virtual node
 * @param {object=} _props Additional properties for virtual node
 * @param {string|number|VNode|Array<string|number|VNode>|null=} _children Optional children for virtual node
 * @returns {VNode} returns new virtual node
 */
function h(_tag, _props, _children) {
    // If a child array or text node are passed as the second argument, shift them
    if (!_children && isChildren(_props)) {
        _children = _props;
        _props = {};
    }
    var isElement = isString(_tag);
    _props = _props || {};
    var tag = isElement ? parseTag(_tag, _props) : _tag;
    var newProps = {};
    var key = null;
    var ref = null;
    var children = null;
    var className = null;
    for (var prop in _props) {
        if (isElement && (prop === 'className' || prop === 'class')) {
            className = _props[prop];
        }
        else if (prop === 'key') {
            key = _props[prop];
        }
        else if (prop === 'ref') {
            ref = _props[prop];
        }
        else if (prop === 'hooks') {
            ref = _props[prop];
        }
        else if (prop === 'children') {
            children = _props[prop];
        }
        else if (!isElement && prop.substr(0, 11) === 'onComponent') {
            if (!ref) {
                ref = {};
            }
            ref[prop] = _props[prop];
        }
        else {
            newProps[prop] = _props[prop];
        }
    }
    if (isElement) {
        var flags = Object(inferno__WEBPACK_IMPORTED_MODULE_0__["getFlagsForElementVnode"])(tag);
        if (flags & 8192 /* Fragment */) {
            return Object(inferno__WEBPACK_IMPORTED_MODULE_0__["createFragment"])(_children || children, 0 /* UnknownChildren */, key);
        }
        if (newProps.contenteditable !== void 0) {
            flags |= 4096 /* ContentEditable */;
        }
        return Object(inferno__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(flags, tag, className, _children || children, 0 /* UnknownChildren */, newProps, key, ref);
    }
    if (children || _children) {
        newProps.children = children || _children;
    }
    return Object(inferno__WEBPACK_IMPORTED_MODULE_0__["createComponentVNode"])(2 /* ComponentUnknown */, tag, newProps, key, ref);
}




/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const fm = __webpack_require__(10);
const moonad_client = __webpack_require__(32)({url:window.location.origin});
const ethsig = __webpack_require__(13);

function memoize(fn) {
  var memo = {};
  return function(arg) {
    if (!memo[arg]) {
      memo[arg] = fn(arg);
    }
    return memo[arg];
  };
};

function gen_pkey() {
  var pkey = "";
  var nums = crypto.getRandomValues(new Uint8Array(32));
  for (var i = 0; i < nums.length; ++i) {
    pkey += ("00" + nums[i].toString(16)).slice(-2);
  }
  localStorage.setItem("pkey", pkey);
  return pkey;
};

function get_pkey() {
  return localStorage.getItem("pkey") || gen_pkey();
};

function get_addr() {
  return pkey_to_addr(get_pkey());
};

function format_date(date) {
  var date = new Date(date);
  return date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()
    + ", "+date.getHours()+"h "+date.getMinutes()+"min";
}

const pkey_to_addr = memoize(ethsig.addressFromKey);

// Login
// =====

// Asks the user a name, registers a new (name,addr) pair.
async function register(taken = false) {
  var name = prompt((taken ? "Name taken. " : "") + "Choose a name:");
  try {
    console.log("Registering", name);
    await lib.moonad.api.register({name, addr: lib.addr});
    return name;
  } catch (e) {
    console.log("register error:", e);
    register(true);
  }
};

// Logs in with the private key. If not registered, registers.
async function login() {
  console.log("Logging in...");
  try {
    return await lib.moonad.api.get_name({addr: lib.addr})
  } catch (e) {
    console.log("login error:", e);
    return await register();
  }
};

// Routing
// =======

function get_route() {
  var route = window.location.pathname;
  return route === "/" ? "/p" : route;
}

function set_route(route) {
  window.history.pushState({}, route, window.location.origin+route);
}

function get_paths() {
  return get_route().split("/").slice(1);
};

function get_watched_poid() {
  var paths = get_paths(); 
  if (paths[0] === "p") {
    return paths[1] || "0x0000000000000000";
  } else {
    return null;
  };
};

var last_watched_poid = null;
function refresh_watched_poid() {
  var watched_poid = get_watched_poid();
  if (watched_poid !== null && last_watched_poid !== watched_poid) {
    //console.log("watch:", watched_poid);
    lib.moonad.do_watch(watched_poid);
    last_watched_poid = watched_poid;
  };
};

// Formality
// =========

function remove_colors(msg) {
  return msg.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,"");
};

async function load_defs_of(name, defs = {}) {
  //console.log("loading", name);
  if (!defs[name]) {
    var poid = await lib.moonad.api.get_orig({name});
    //console.log("- poid: ", poid);
    var post = await lib.moonad.api.get_post({poid});
    //console.log("- post: ", post);
    var auth = lib.moonad.lib.get_post_auth(post);
    //console.log("- auth: ", auth);
    var anam = await lib.moonad.api.get_name({addr: auth.toLowerCase()});
    //console.log("- anam: ", anam);
    var code = lib.moonad.lib.get_post_code(post, anam);
    //console.log("- code: ", code);
    var new_defs = fm.lang.parse(code).defs;
    for (var def in new_defs) {
      //console.log("- defn: " + def);
      defs[def] = new_defs[def];
    };
    var deps = await lib.moonad.api.get_deps({name});
    //console.log("- deps:", deps);
    var deps_loads = [];
    for (var dep of deps) {
      deps_loads.push(load_defs_of(dep, defs));
    };
    await Promise.all(deps_loads);
  };
  return defs;
};

// Startup
// =======

// Gets the private key stored on browser
var lib = {};
lib.pkey = get_pkey();
lib.addr = get_addr();

// Starts the moonad object. It gets data from server, allows making posts, etc.
lib.moonad = moonad_client.direct();

// Logs in.
lib.name = "user";
login().then((login_name) => {
  console.log("logged as", login_name);
  lib.name = login_name;
});

// Periodically sends watched poid to server.
setInterval(refresh_watched_poid, 50);

lib.gen_pkey = gen_pkey;
lib.get_pkey = get_pkey;
lib.get_addr = get_addr;
lib.pkey_to_addr = pkey_to_addr;
lib.format_date = format_date;
lib.register = register;
lib.login = login;
lib.get_route = get_route;
lib.set_route = set_route;
lib.get_paths = get_paths;
lib.get_watched_poid = get_watched_poid;
lib.refresh_watched_poid = refresh_watched_poid;
lib.remove_colors = remove_colors;
lib.load_defs_of = load_defs_of;

module.exports = lib;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var codes = {};

function createErrorType(code, message, Base) {
  if (!Base) {
    Base = Error;
  }

  function getMessage(arg1, arg2, arg3) {
    if (typeof message === 'string') {
      return message;
    } else {
      return message(arg1, arg2, arg3);
    }
  }

  var NodeError =
  /*#__PURE__*/
  function (_Base) {
    _inheritsLoose(NodeError, _Base);

    function NodeError(arg1, arg2, arg3) {
      return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
    }

    return NodeError;
  }(Base);

  NodeError.prototype.name = Base.name;
  NodeError.prototype.code = code;
  codes[code] = NodeError;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js


function oneOf(expected, thing) {
  if (Array.isArray(expected)) {
    var len = expected.length;
    expected = expected.map(function (i) {
      return String(i);
    });

    if (len > 2) {
      return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
    } else if (len === 2) {
      return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
    } else {
      return "of ".concat(thing, " ").concat(expected[0]);
    }
  } else {
    return "of ".concat(thing, " ").concat(String(expected));
  }
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith


function startsWith(str, search, pos) {
  return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith


function endsWith(str, search, this_len) {
  if (this_len === undefined || this_len > str.length) {
    this_len = str.length;
  }

  return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


function includes(str, search, start) {
  if (typeof start !== 'number') {
    start = 0;
  }

  if (start + search.length > str.length) {
    return false;
  } else {
    return str.indexOf(search, start) !== -1;
  }
}

createErrorType('ERR_INVALID_OPT_VALUE', function (name, value) {
  return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function (name, expected, actual) {
  // determiner: 'must be' or 'must not be'
  var determiner;

  if (typeof expected === 'string' && startsWith(expected, 'not ')) {
    determiner = 'must not be';
    expected = expected.replace(/^not /, '');
  } else {
    determiner = 'must be';
  }

  var msg;

  if (endsWith(name, ' argument')) {
    // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  } else {
    var type = includes(name, '.') ? 'property' : 'argument';
    msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  }

  msg += ". Received type ".concat(typeof actual);
  return msg;
}, TypeError);
createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function (name) {
  return 'The ' + name + ' method is not implemented';
});
createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
createErrorType('ERR_STREAM_DESTROYED', function (name) {
  return 'Cannot call ' + name + ' after a stream was destroyed';
});
createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
createErrorType('ERR_UNKNOWN_ENCODING', function (arg) {
  return 'Unknown encoding: ' + arg;
}, TypeError);
createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');
module.exports.codes = codes;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

/*<replacement>*/

var objectKeys = Object.keys || function (obj) {
  var keys = [];

  for (var key in obj) {
    keys.push(key);
  }

  return keys;
};
/*</replacement>*/


module.exports = Duplex;

var Readable = __webpack_require__(18);

var Writable = __webpack_require__(23);

__webpack_require__(9)(Duplex, Readable);

{
  // Allow the keys array to be GC'ed.
  var keys = objectKeys(Writable.prototype);

  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);
  Readable.call(this, options);
  Writable.call(this, options);
  this.allowHalfOpen = true;

  if (options) {
    if (options.readable === false) this.readable = false;
    if (options.writable === false) this.writable = false;

    if (options.allowHalfOpen === false) {
      this.allowHalfOpen = false;
      this.once('end', onend);
    }
  }
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
});
Object.defineProperty(Duplex.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});
Object.defineProperty(Duplex.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
}); // the no-half-open enforcer

function onend() {
  // If the writable side ended, then we're ok.
  if (this._writableState.ended) return; // no more data can be written.
  // But allow more writes to happen in this tick.

  process.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }

    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// This is the same as FormalityCore.js, but with holes and unification

// Term
// ====

const Var = (indx)                     => ({ctor:"Var",indx});
const Ref = (name)                     => ({ctor:"Ref",name});
const Typ = ()                         => ({ctor:"Typ"});
const All = (eras,self,name,bind,body) => ({ctor:"All",eras,self,name,bind,body});
const Lam = (eras,name,body)           => ({ctor:"Lam",eras,name,body});
const App = (eras,func,argm)           => ({ctor:"App",eras,func,argm});
const Let = (name,expr,body)           => ({ctor:"Let",name,expr,body});
const Ann = (done,expr,type)           => ({ctor:"Ann",done,expr,type});
const Loc = (from,upto,expr)           => ({ctor:"Loc",from,upto,expr});
const Wat = (name)                     => ({ctor:"Wat",name});
const Hol = (name,vals)                => ({ctor:"Hol",name,vals});
const Cse = (name,func,info)           => ({ctor:"Cse",name,func,info});
const Nat = (natx)                     => ({ctor:"Nat",natx});
const Chr = (chrx)                     => ({ctor:"Chr",chrx});
const Str = (strx)                     => ({ctor:"Str",strx});

// List
// ====

const Nil = ()          => ({ctor:"Nil",size:0});
const Ext = (head,tail) => ({ctor:"Ext",head,tail,size:tail.size+1});

// Finds first value satisfying `cond` in a list
function find(list, cond, indx = 0) {
  switch (list.ctor) {
    case "Nil":
      return null;
    case "Ext":
      if (cond(list.head, indx)) {
        return {value:list.head, index:indx};
      } else {
        return find(list.tail, cond, indx + 1);
      };
  };
};

// Gets the nth element of a list
function at(list, n) {
  switch (list.ctor) {
    case "Nil": return null;
    case "Ext": return n === 0 ? list.head : at(list.tail, n - 1);
  };
};

// Folds a list
function fold(list, nil, cons) {
  switch (list.ctor) {
    case "Nil": return nil;
    case "Ext": return cons(list.head, fold(list.tail, nil, cons));
  }
};

// Syntax
// ======

function stringify(term, depth = 0) {
  switch (term.ctor) {
    case "Var":
      return term.indx.split("#")[0];
    case "Ref":
      return term.name;
    case "Typ":
      return "*";
    case "All":
      var bind = term.eras ? "∀" : "Π";
      var self = term.self;
      var name = term.name;
      var type = stringify(term.bind, depth);
      var body = stringify(term.body(Var(self+"#"), Var(name+"#")), depth + 2);
      return bind + self + "(" + name + ":" + type + ") " + body;
    case "Lam":
      var bind = term.eras ? "Λ" : "λ";
      var name = term.name;
      var body = stringify(term.body(Var(name+"#")), depth + 1);
      return bind + name + " " + body;
    case "App":
      var open = term.eras ? "<" : "(";
      var func = stringify(term.func, depth);
      var argm = stringify(term.argm, depth);
      var clos = term.eras ? ">" : ")";
      return open + func + " " + argm + clos;
    case "Let":
      var name = term.name;
      var expr = stringify(term.expr, depth);
      var body = stringify(term.body(Var(name+"#")), depth + 1);
      return "$" + name + "=" + expr + ";" + body;
    case "Ann":
      var type = stringify(term.type, depth);
      var expr = stringify(term.expr, depth);
      return ":" + type + " " + expr;
    case "Loc":
      return stringify(term.expr, depth);
    case "Wat":
      return "?"+term.name;
    case "Hol":
      return "_"+term.name;
    case "Cse":
      return "<TODO:stringify.case>";
    case "Nat":
      return ""+term.natx;
    case "Chr":
      return "'"+term.chrx+"'";
    case "Str":
      return '"'+term.strx+'"';
  };
};

function parse(code, indx, mode = "defs") {
  function is_name(chr) {
    var val = chr.charCodeAt(0);
    return (val >= 46 && val < 47)   // .
        || (val >= 48 && val < 58)   // 0-9
        || (val >= 65 && val < 91)   // A-Z
        || (val >= 95 && val < 96)   // _
        || (val >= 97 && val < 123); // a-z
  };
  function parse_name() {
    if (indx < code.length && is_name(code[indx])) {
      return code[indx++] + parse_name();
    } else {
      return "";
    }
  };
  function parse_nuls() {
    while (code[indx] === " " || code[indx] === "\n") {
      ++indx;
    };
  };
  function parse_char(chr) {
    if (indx >= code.length) {
      throw "Unexpected eof.";
    } else if (code[indx] !== chr) {
      throw 'Expected "'+chr+'", found '+JSON.stringify(code[indx])+' at '+indx+': `'+code.slice(indx)+"`.";
    }
    ++indx;
  };
  function parse_term() {
    parse_nuls();
    var chr = code[indx++];
    switch (chr) {
      case "*":
        return ctx => Typ();
      case "∀":
      case "Π":
        var eras = chr === "∀";
        var self = parse_name();
        var skip = parse_char("(");
        var name = parse_name();
        var skip = parse_char(":");
        var bind = parse_term();
        var skip = parse_char(")");
        var body = parse_term();
        return ctx => All(eras, self, name, bind(ctx), (s,x) => body(Ext([name,x],Ext([self,s],ctx))));
      case "λ":
      case "Λ":
        var eras = chr === "Λ";
        var name = parse_name();
        var body = parse_term();
        return ctx => Lam(eras, name, (x) => body(Ext([name,x],ctx)));
      case "(":
      case "<":
        var eras = chr === "<";
        var func = parse_term();
        var argm = parse_term();
        var skip = parse_char(eras ? ">" : ")");
        return ctx => App(eras, func(ctx), argm(ctx));
      case "$":
      case "@":
        var name = parse_name();
        var skip = parse_char("=");
        var expr = parse_term();
        var skip = parse_char(";");
        var body = parse_term();
        return ctx => Let(name, expr(ctx), x => body(Ext([name,x],ctx)));
      case ":":
        var type = parse_term();
        var expr = parse_term();
        return ctx => Ann(false, expr(ctx), type(ctx));
      case "?":
        var name = parse_name();
        return ctx => Wat(name);
      case "_":
        var name = parse_name();
        return ctx => Hol(name, fold(ctx, Nil(), (h,t) => Ext(h[1],t)));
      case "'":
        var chrx = code[indx++];
        var skip = parse_char("'");
        return ctx => Chr(chrx);
      case '"':
        var strx = "";
        while (code[indx] !== '"') {
          strx += code[indx++];
        }
        var skip = parse_char('"');
        return ctx => Str(strx);
      default:
        if (is_name(chr)) {
          var name = chr + parse_name();
          return ctx => {
            var got = find(ctx, (x) => x[0] === name);
            if (got) {
              return got.value[1];
            } else if (/^[0-9]*$/.test(name)) {
              return Nat(BigInt(name));
            } else {
              return Ref(name);
            }
          };
        } else {
          throw "Unexpected symbol: '" + chr + "'.";
        }
    };
  };
  function parse_defs() {
    parse_nuls();
    var name = parse_name();
    if (name.length > 0) {
      var skip = parse_char(":");
      var type = parse_term()(Nil());
      var term = parse_term()(Nil());
      defs[name] = {type, term};
      parse_defs();
    }
  };
  var indx = 0;
  if (mode === "defs") {
    var defs = {};
    parse_defs();
    return {defs};
  } else {
    return parse_term()(Nil());
  };
};

// Derivers
// ========

function build_cse(term, type) {
  var tnam = term.name.split("#")[0];
  var func = term.func;
  var info = term.info;
  var indx = 0;
  var [ctx, args] = info;
  while (type.ctor === "All") {
    let csev = args[indx];
    if (csev) {
      var bind = type.bind;
      var argm = (function go(bind, ctx) {
        if (bind.ctor === "All") {
          var eras = bind.eras;
          var name = tnam+"."+bind.name;
          var body = x => go(bind.body(bind, bind.bind), Ext([name, x], ctx));
          return Lam(eras, name, body);
        } else {
          return csev(ctx);
        };
      })(type.bind, ctx);
    } else {
      throw "Misformatted case. TODO: improve this error."
    }
    func = App(type.eras, func, argm);
    type = type.body(type, type.bind);
    indx = indx + 1;
  };
  return func;
};

function build_nat(term) {
  if (term.natx === 0n) {
    return Ref("Nat.zero");
  } else {
    return App(false, Ref("Nat.succ"), Nat(term.natx - 1n));
  };
};

function build_chr(term) {
  var done = Ref("Char.new");
  var ccod = term.chrx.charCodeAt(0);
  for (var i = 0; i < 16; ++i) {
    done = App(false, done, Ref(((ccod>>>(16-i-1))&1) ? "Bit.1" : "Bit.0"));
  };
  return done;
};

function build_str(term) {
  if (term.strx.length === 0) {
    return Ref("String.nil");
  } else {
    var chr = build_chr(Chr(term.strx[0]));
    return App(false, App(false, Ref("String.cons"), chr), Str(term.strx.slice(1)));
  }
};

// Evaluation
// ==========

function unloc(term) {
  switch (term.ctor) {
    case "Var": return term;
    case "Ref": return term;
    case "Typ": return term;
    case "All": return All(term.eras, term.self, term.name, unloc(term.bind), (s, x) => unloc(term.body(s, x)));
    case "Lam": return Lam(term.eras, term.name, x => unloc(term.body(x)));
    case "App": return App(term.eras, unloc(term.func), unloc(term.argm));
    case "Let": return Let(term.name, unloc(term.expr), x => unloc(term.body(x)));
    case "Ann": return Ann(term.done, unloc(term.expr), unloc(term.type));
    case "Loc": return unloc(term.expr);
    case "Wat": return term;
    case "Hol": return term;
    case "Nat": return term;
    case "Chr": return term;
    case "Str": return term;
  };
};

function reduce(term, defs = {}, hols = {}, erased = false) {
  switch (term.ctor) {
    case "Var":
      return Var(term.indx);
    case "Ref":
      if (defs[term.name]) {
        // If reference wasn't synthetized, synthetize it
        if (defs[term.name].core === undefined) {
          var got = typesynth(term.name, defs).term;
        // If reference is being synthetized, return its version with holes
        } else if (defs[term.name].core === null) {
          var got = defs[term.name].term;
        // If reference was synthetized, return its filled core version
        } else {
          var got = defs[term.name].core.term;
        }
        // Avoids reducing axioms
        if (got.ctor === "Loc" && got.expr.ctor === "Ref" && got.expr.name === term.name) {
          return got;
        } else {
          return reduce(got, defs, hols, erased);
        };
      } else {
        return Ref(term.name);
      }
    case "Typ":
      return Typ();
    case "All":
      var eras = term.eras;
      var self = term.self;
      var name = term.name;
      var bind = term.bind;
      var body = term.body;
      return All(eras, self, name, bind, body);
    case "Lam":
      if (erased && term.eras) {
        return reduce(term.body(Lam(false, "", x => x)), defs, hols, erased);
      } else {
        var eras = term.eras;
        var name = term.name;
        var body = term.body;
        return Lam(eras, name, body);
      }
    case "App":
      if (erased && term.eras) {
        return reduce(term.func, defs, hols, erased);
      } else {
        var eras = term.eras;
        var func = reduce(term.func, defs, hols, erased);
        switch (func.ctor) {
          case "Lam":
            return reduce(func.body(term.argm), defs, hols, erased);
          default:
            return App(eras, func, term.argm);
        };
      };
    case "Let":
      var name = term.name;
      var expr = term.expr;
      var body = term.body;
      return reduce(body(expr), defs, hols, erased);
    case "Ann":
      return reduce(term.expr, defs, hols, erased);
    case "Loc":
      return reduce(term.expr, defs, hols, erased);
    case "Wat":
      return Wat(term.name);
    case "Hol":
      if (hols[term.name]) {
        return reduce(hols[term.name](term.vals), defs, hols, erased);
      } else {
        return Hol(term.name, term.vals);
      }
    case "Cse":
      if (hols[term.name]) {
        var typ = hols[term.name];
        return reduce(build_cse(term, hols[term.name]), defs, hols, erased);
      } else {
        //console.log("couldn't find", term.name, stringify(term.func));
        return term;
      };
    case "Nat":
      return reduce(build_nat(term), defs, hols, erased);
    case "Chr":
      return reduce(build_chr(term), defs, hols, erased);
    case "Str":
      return reduce(build_str(term), defs, hols, erased);
  };
};

function normalize(term, defs, hols = {}, erased = false, seen = {}) {
  var norm = reduce(term, defs, hols, erased);
  var term_hash = hash(term);
  var norm_hash = hash(norm);
  if (seen[term_hash] || seen[norm_hash]) {
    return term;
  } else {
    var seen = {...seen, [term_hash]: true, [norm_hash]: true};
    switch (norm.ctor) {
      case "Var":
        return Var(norm.indx);
      case "Ref":
        return Ref(norm.name);
      case "Typ":
        return Typ();
      case "All":
        var eras = norm.eras;
        var self = norm.self;
        var name = norm.name;
        var bind = normalize(norm.bind, defs, hols, erased, seen);
        var body = (s,x) => normalize(norm.body(s,x), defs, hols, erased, seen);
        return All(eras, self, name, bind, body);
      case "Lam":
        var eras = norm.eras;
        var name = norm.name;
        var body = x => normalize(norm.body(x), defs, hols, erased, seen);
        return Lam(eras, name, body);
      case "App":
        var eras = norm.eras;
        var func = normalize(norm.func, defs, hols, erased, seen);
        var argm = normalize(norm.argm, defs, hols, erased, seen);
        return App(eras, func, argm);
      case "Let":
        return normalize(norm.body(norm.expr), defs, hols, erased, seen);
      case "Ann":
        return normalize(norm.expr, defs, hols, erased, seen);
      case "Loc":
        return normalize(norm.expr, defs, hols, erased, seen);
      case "Wat":
        return Wat(norm.name);
      case "Hol":
        return Hol(norm.name, norm.vals);
      case "Cse":
        return Cse(term.name, term.func, term.info);
      case "Nat":
        return Nat(term.natx);
      case "Chr":
        return Chr(term.chrx);
      case "Str":
        return Str(term.strx);
    };
  }
};

// Prepares a term to be stored on .fmc source
// - Fills holes
// - Applies static function calls (necessary for inference)
// - Removes done Anns
// - Removes Nat/Str if we're compiling to core
function canonicalize(term, hols = {}, to_core = false) {
  switch (term.ctor) {
    case "Var":
      return Var(term.indx);
    case "Ref":
      return Ref(term.name);
    case "Typ":
      return Typ();
    case "All":
      var eras = term.eras;
      var self = term.self;
      var name = term.name;
      var bind = canonicalize(term.bind, hols, to_core);
      var body = (s,x) => canonicalize(term.body(s,x), hols, to_core);
      return All(eras, self, name, bind, body);
    case "Lam":
      var eras = term.eras;
      var name = term.name;
      var body = x => canonicalize(term.body(x), hols, to_core);
      return Lam(eras, name, body);
    case "App":
      var eras = term.eras;
      var func = canonicalize(term.func, hols, to_core);
      var argm = canonicalize(term.argm, hols, to_core);
      switch (func.ctor) {
        case "Lam":
          return canonicalize(func.body(term.argm), hols, to_core);
        default:
          return App(eras, func, argm);
      };
    case "Let":
      var name = term.name;
      var expr = canonicalize(term.expr, hols, to_core);
      var body = x => canonicalize(term.body(x), hols, to_core);
      return Let(name, expr, body);
    case "Ann":
      if (term.done === true) {
        return canonicalize(term.expr, hols, to_core);
      } else {
        var expr = canonicalize(term.expr, hols, to_core);
        var type = canonicalize(term.type, hols, to_core);
        return Ann(false, expr, type);
      }
    case "Loc":
      return canonicalize(term.expr, hols, to_core);
    case "Wat":
      throw () => "Incomplete program.";
    case "Hol":
      if (hols[term.name]) {
        return canonicalize(hols[term.name](term.vals), hols, to_core);
      } else {
        throw () => "Unfilled hole: " + term.name + ".";
      }
    case "Cse":
      if (hols[term.name]) {
        return canonicalize(build_cse(term, hols[term.name]), hols, to_core);
      } else {
        throw () => "Incomplete case.";
      }
    case "Nat":
      if (to_core) {
        var done = Ref("Nat.zero");
        for (var i = 0n; i < term.natx; i += 1n) {
          done = App(false, Ref("Nat.succ"), done);
        }
        return done;
      } else {
        return term;
      };
  case "Chr":
    if (to_core) {
      var done = Ref("Char.new");
      var ccod = term.chrx.charCodeAt(0);
      for (var i = 0; i < 16; ++i) {
        done = App(false, done, Ref(((ccod>>>(16-i-1))&1) ? "Bit.1" : "Bit.0"));
      };
      return done;
    } else {
      return term;
    };
  case "Str":
    if (to_core) {
      var done = Ref("String.nil");
      for (var i = 0; i < term.strx.length; ++i) {
        var chr = canonicalize(Chr(term.strx[term.strx.length-i-1]), hols, to_core);
        done = App(false, App(false, Ref("String.cons"), chr), done);
      }
      return done;
    } else {
      return term;
    }
  };
};

// Equality
// ========

// Computes the hash of a term. JS strings are hashed, so we just return one.
function hash(term, dep = 0) {
  switch (term.ctor) {
    case "Var":
      var indx = Number(term.indx.split("#")[1]);
      //console.log("ue", indx);
      if (indx < 0) {
        return "^"+(dep+indx);
      } else {
        return "#"+indx;
      }
    case "Ref":
      return "$" + term.name;
    case "Typ":
      return "Type";
    case "All":
      var bind = hash(term.bind, dep);
      var body = hash(term.body(Var("#"+(-dep-1)), Var("#"+(-dep-2))), dep+2);
      return "Π" + term.self + bind + body;
    case "Lam":
      var body = hash(term.body(Var("#"+(-dep-1))), dep+1);
      return "λ" + body;
    case "App":
      var func = hash(term.func, dep);
      var argm = hash(term.argm, dep);
      return "@" + func + argm;
    case "Let":
      var expr = hash(term.expr, dep);
      var body = hash(term.body(Var("#"+(-dep-1))), dep+1);
      return "$" + expr + body;
    case "Ann":
      var expr = hash(term.expr, dep);
      return expr;
    case "Loc":
      var expr = hash(term.expr, dep);
      return expr;
    case "Wat":
      return "?" + term.name;
    case "Hol":
      return "_" + term.name;
    case "Cse":
      return "-"+Math.random();
    case "Nat":
      return "{"+term.natx+"}";
    case "Chr":
      return "'"+term.chrx+"'";
    case "Str":
      return '"'+term.strx+'"';
  }
};

//var COUNT = 0;
// Are two terms equal?
function equal(a, b, defs, hols, dep = 0, rec = {}) {
  //console.log("eq", stringify(a), stringify(b));
  let a1 = reduce(a, defs, hols, true);
  let b1 = reduce(b, defs, hols, true);
  var ah = hash(a1);
  var bh = hash(b1);
  var id = ah + "==" + bh;
  if (ah === bh || rec[id]) {
    return true;
  } else {
    rec[id] = true;
    switch (a1.ctor + b1.ctor) {
      case "AllAll":
        var a1_body = a1.body(Var(a1.self+"#"+(dep)), Var(a1.name+"#"+(dep+1)));
        var b1_body = b1.body(Var(a1.self+"#"+(dep)), Var(a1.name+"#"+(dep+1)));
        return a1.eras === b1.eras
            && a1.self === b1.self
            && equal(a1.bind, b1.bind, defs, hols, dep+0, rec)
            && equal(a1_body, b1_body, defs, hols, dep+2, rec);
      case "LamLam":
        if (a1.eras !== b1.eras) return [false,a1,b1];
        var a1_body = a1.body(Var(a1.name+"#"+(dep)));
        var b1_body = b1.body(Var(a1.name+"#"+(dep)));
        return a1.eras === b1.eras
            && equal(a1_body, b1_body, defs, hols, dep+1, rec);
      case "AppApp":
        return a1.eras === b1.eras
            && equal(a1.func, b1.func, defs, hols, dep, rec)
            && equal(a1.argm, b1.argm, defs, hols, dep, rec);
      case "LetLet":
        var a1_body = a1.body(Var(a1.name+"#"+(dep)));
        var b1_body = b1.body(Var(a1.name+"#"+(dep)));
        vis.push([a1.expr, b1.expr, dep]);
        vis.push([a1_body, b1_body, dep+1]);
        return equal(a1.expr, b1.expr, defs, hols, dep+0, rec)
            && equal(a1_body, b1_body, defs, hols, dep+1, rec);
      case "AnnAnn":
        return equal(a1.expr, b1.expr, defs, hols, dep, rec);
      case "LocLoc":
        return equal(a1.expr, b1.expr, defs, hols, dep, rec);
      default:
        if (a1.ctor === "Hol") {
          throw [a1.name, b];
        } else if (b1.ctor === "Hol") {
          throw [b1.name, a]
        } else {
          return false;
        }
    }
  };
};

// Diagonalization
// ===============

function wide(next, then) {
  return {ctor: "call", deep: false, next, then};
};

function deep(next, then) {
  return {ctor: "call", deep: true, next, then};
};

function fail(msge) {
  return {ctor: "fail", msge};
};

function done(retr) {
  return {ctor: "done", retr};
};

function exec(fn) {
  var wides = [[fn(), {ctor:"Nil"}]];
  var deeps = [];
  var index = 0;
  var error = null;
  while (index < wides.length || deeps.length > 0) {
    if (deeps.length > 0) {
      var got = deeps.pop();
    } else {
      var got = wides[index];
      wides[index++] = null;
    };
    if (got) {
      var [func, cont] = got;
      switch (func.ctor) {
        case "done":
          switch (cont.ctor) {
            case "Nil":
              return func.retr;
            case "Ext":
              deeps.push([cont.head(func.retr), cont.tail]);
              break;
          }
          break;
        case "fail":
          error = func.msge;
          break;
        case "call":
          if (func.deep) {
            for (let i = func.next.length - 1; i >= 0; --i) {
              var next = func.next[i][0](...func.next[i][1]);
              deeps.push([next, {ctor:"Ext",head:func.then,tail:cont}]);
            }
          } else {
            for (let i = 0; i < func.next.length; ++i) {
              var next = func.next[i][0](...func.next[i][1]);
              wides.push([next, {ctor:"Ext",head:func.then,tail:cont}]);
            }
          };
      };
    };
  };
  throw error || "Search failed.";
};

// Type-Checking
// =============

function Err(loc, ctx, msg) {
  return {
    loc: loc,
    ctx: ctx,
    msg: msg,
  };
};

function typeinfer(term, defs, show = stringify, hols = {}, ctx = Nil(), locs = null) {
  switch (term.ctor) {
    case "Var":
      return "{" + done([hols, Var(term.indx)]) + "}";
    case "Ref":
      var got = defs[term.name];
      if (got) {
        if (got.core === undefined) {
          var typ = typesynth(term.name, defs, show).type;
        } else if (defs[term.name].core === null) {
          var typ = defs[term.name].type;
        } else {
          var typ = defs[term.name].core.type;
        }
        return done([hols, typ]);
      } else {
        return fail(() => Err(locs, ctx, "Undefined reference '" + term.name + "'."));
      }
    case "Typ":
      return done([hols, Typ()]);
    case "All":
      var self_var = Ann(true, Var(term.self+"#"+ctx.size), term);
      var name_var = Ann(true, Var(term.name+"#"+(ctx.size+1)), term.bind);
      var body_ctx = Ext({name:term.self,type:self_var.type}, ctx);
      var body_ctx = Ext({name:term.name,type:name_var.type}, body_ctx);
      return (
        deep([[typecheck, [term.bind, Typ(), defs, show, hols, ctx, locs]]], ([hols,_]) =>
        deep([[typecheck, [term.body(self_var,name_var), Typ(), defs, show, hols, body_ctx, locs]]], ([hols,_]) =>
        done([hols, Typ()]))));
    case "App":
      return deep([[typeinfer, [term.func, defs, show, hols, ctx, locs]]], ([hols, func_typ]) => {
        var func_typ = reduce(func_typ, defs, hols, false);
        switch (func_typ.ctor) {
          case "All":
            var self_var = Ann(true, term.func, func_typ);
            var name_var = Ann(true, term.argm, func_typ.bind);
            return deep([[typecheck, [term.argm, func_typ.bind, defs, show, hols, ctx, locs]]], ([hols, _]) => {
              var term_typ = func_typ.body(self_var, name_var);
              if (func_typ.ctor === "All" && term.eras !== func_typ.eras) {
                return fail(() => Err(locs, ctx, "Mismatched erasure."));
              };
              return done([hols, term_typ]);
            });
          case "Hol":
            var nam0 = new_name();
            var nam1 = new_name();
            var hols = {...hols, [func_typ.name]: (vals) => {
              var all_bind = Hol(nam0, vals);
              var all_body = (s,x) => Hol(nam1, Ext(x, Ext(s, vals)));
              var all_term = All(term.eras, "", "x", all_bind, all_body);
              return all_term;
            }};
            return deep([[typeinfer, [term, defs, show, hols, ctx, locs]]], done);
          default:
            return fail(() => Err(locs, ctx, "Non-function application."));
        };
      });
    case "Let":
      return deep([[typeinfer, [term.expr, defs, show, hols, ctx, locs]]], ([hols, expr_typ]) => {
        var expr_var = Ann(true, Var(term.name+"#"+(ctx.size+1)), expr_typ);
        var body_ctx = Ext({name:term.name,type:expr_var.type}, ctx);
        return deep([[typeinfer, [term.body(expr_var), defs, show, hols, body_ctx, locs]]], ([hols, body_typ]) => {
          return done([hols, body_typ]);
        })
      });
    case "Ann":
      if (!term.done) {
        return deep([[typecheck, [term.expr, term.type, defs, show, hols, ctx, locs]]], ([hols, _]) => {
          return done([hols, term.type]);
        });
      } else {
        return done([hols, term.type]);
      }
    case "Loc":
      var locs = {from: term.from, upto: term.upto};
      return deep([[typeinfer, [term.expr, defs, show, hols, ctx, locs]]], done);
    case "Hol":
      var nam0 = new_name();
      var hols = {...hols, [term.name]: (vals) => Ann(false, Hol(term.name, vals), Hol(nam0, vals))};
      return done([hols, Hol(nam0, term.vals)]);
    case "Cse":
      return deep([[typeinfer, [term.func, defs, show, hols, ctx, locs]]], ([hols, func_typ]) => {
        var func_typ = reduce(func_typ, defs, hols, false);
        var hols = {...hols, [term.name]: func_typ};
        var term_val = build_cse(term, func_typ);
        return deep([[typeinfer, [term_val, defs, show, hols, ctx, locs]]], done);
      });
    case "Nat":
      return done([hols, Ref("Nat")]);
    case "Chr":
      return done([hols, Ref("Char")]);
    case "Str":
      return done([hols, Ref("String")]);
  };
  return fail(() => Err(locs, ctx, "Can't infer type."));
};

function typecheck(term, type, defs, show = stringify, hols = {}, ctx = Nil(), locs = null) {
  var typv = reduce(type, defs, hols, false);
  switch (term.ctor) {
    case "Lam":
      if (typv.ctor === "All") {
        var self_var = Ann(true, term, type);
        var name_var = Ann(true, Var(term.name+"#"+(ctx.size+1)), typv.bind);
        var body_typ = typv.body(self_var, name_var);
        if (term.eras !== typv.eras) {
          return fail(() => Err(locs, ctx, "Type mismatch."));
        };
        var body_ctx = Ext({name:term.name,type:name_var.type}, ctx);
        return (
          deep([[typecheck, [term.body(name_var), body_typ, defs, show, hols, body_ctx, locs]]], ([hols, _]) =>
          done([hols, type])));
      } else if (typv.ctor === "Hol") {
        var nam0 = new_name();
        var nam1 = new_name();
        var hols = {...hols, [typv.name]: (vals) => {
          var all_bind = Hol(nam0, vals);
          var all_body = (s,x) => Hol(nam1, Ext(x, Ext(s, vals)));
          var all_term = All(term.eras, "", "x", all_bind, all_body);
          return all_term;
        }};
        return deep([[typecheck, [term, type, defs, show, hols, ctx, locs]]], done);
      } else {
        return fail(() => Err(locs, ctx, "Lambda has a non-function type."));
      }
    case "Let":
      return deep([[typeinfer, [term.expr, defs, show, hols, ctx, locs]]], ([hols, expr_typ]) => {
        var expr_var = Ann(true, Var(term.name+"#"+(ctx.size+1)), expr_typ);
        var body_ctx = Ext({name:term.name,type:expr_var.type}, ctx);
        return deep([[typecheck, [term.body(expr_var), type, defs, show, hols, body_ctx, locs]]], ([hols, _]) => {
          return done([hols, type]);
        });
      });
    case "Loc":
      var locs = {from: term.from, upto: term.upto};
      return deep([[typecheck, [term.expr, type, defs, show, hols, ctx, locs]]], ([hols, _]) => {
        return done([hols, type]);
      });
    case "Hol":
      // Registers this hole as unfilled
      if (!hols[term.name]) {
        hols[term.name] = null;
      };

      // If we try to type-check a hole and it is of type `(x : A) -> B`, we
      // first try keeping it as it is. If that doesn't work, then we specialize
      // it as `(x) ?` and try again.
      if (typv.ctor === "All") {
        var path0 = [() => done([hols,type]), []]
        var nam1 = new_name();
        var path1_hols = {...hols, [term.name]: (vals) => {
          return Lam(typv.eras, typv.name||("x"+ctx.size), x => Hol(nam1, Ext(x, vals)));
        }};
        var path1 = [typecheck, [path1_hols[term.name](term.vals), type, defs, show, path1_hols, ctx, locs]];
        return deep([path0, path1], ([hols, _]) => done([hols,type]));

      // If the hole is avariable or an application, then it could possibly be
      // generated by the variables in the scope of the hole. For example, if a
      // hole `?x : A` has the following variables in scope:
      // - f : A -> A
      // - g : A -> A -> A
      // - h : A -> B
      // - i : A -> A -> B
      // - x : A
      // - y : A
      // Then `x`, `y`, `f(x)`, `f(f(x))`, `g(x)(y)`, and other combinations
      // could be used to fill the hole. As such, we specialize the hole to 4
      // alternatives: `{(f _), (g _ _), x, y}`, and start a wide search to see
      // if any of those work. We don't include `h(_)` since the type returned
      // by `h` is `B`, so it wouldn't be right. TODO: usage information to
      // shrink search space on linear variables?
      } else if (typv.ctor === "App" || typv.ctor === "Var") {
        var new_hols = [];
        //console.log("----------------", show(typv));
        fold(term.vals, i => null, (val, cont) => i => {
          // Get the return type of the context variable
          var cmp0 = reduce(val.type, defs, hols, false);
          var cmp1 = typv;
          while (cmp0.ctor === "All") { cmp0 = reduce(cmp0.body(Ref("^"), Ref("^")), {}); }
          while (cmp0.ctor === "App") { cmp0 = reduce(cmp0.func, {}); }
          while (cmp1.ctor === "App") { cmp1 = reduce(cmp1.func, {}); }
          //console.log("cmp0", show(cmp0));
          //console.log("cmp1", show(cmp1));
          // Checks if it is compatible with the hole's type
          try {
            var is_compatible = equal(cmp0, cmp1, defs, {});
          } catch (e) {
            var is_compatible = true;
          }
          //console.log("- ", show(val.expr), ":", show(val.type), "|", is_compatible);
          //is_compatible = true;
          // If so, specialize the hole as this var applied to other holes
          if (is_compatible) {
            var nam0 = new_name();
            new_hols.push({...hols, [term.name]: (vals) => {
              var hole = at(vals, i);
              var type = reduce(val.type, defs, hols, false);
              var arit = 0; 
              while (type.ctor === "All") {
                hole = App(type.eras, hole, Hol(nam0 + (arit++), vals));
                type = reduce(type.body(Ref("^"),Ref("^")), defs, hols, false);
              };
              return hole;
            }});
          };
          cont(i + 1);
        })(0);
        var wides = new_hols.map((hols,i) => {
          return [typecheck, [hols[term.name](term.vals), type, defs, show, hols, ctx, locs]];
        });
        return wide(wides, ([hols,_]) => done([hols, type]));

      // Otherwise, we don't have any useful information, so we just keep it
      } else {
        return done([hols, type]);
      };
    case "Wat":
      var ctx = fold(ctx, Nil(), ({name,type}, ctx) => {
        var type = normalize(type, {}, hols, true);
        return Ext({name,type}, ctx);
      });
      var err = Err(locs, ctx,
        "\x1b[1mHole \x1b[4m"+term.name+"\x1b[0m\x1b[1m:\x1b[0m\n" +
        "With type: "+show(normalize(type,{},hols,true),ctx));
      var msg = __webpack_require__(11).stringify_err(err, null).replace(/\n*$/g,"");
      HOLE_LOGS[term.name] = msg;
      return done([hols, type]);
    default:
      return deep([[typeinfer, [term, defs, show, hols, ctx, locs]]], ([hols, infr]) => {
        try {
          var eq = equal(type, infr, defs, hols, ctx.size);
          if (!eq) {
            return fail(() => {
              var type0_str = show(normalize(type, {}, hols, true), ctx);
              var infr0_str = show(normalize(infr, {}, hols, true), ctx);
              var err_ctx = fold(ctx, Nil(), ({name,type}, ctx) => {
                var type = normalize(type, {}, hols, true);
                return Ext({name,type}, ctx);
              });
              return Err(locs, err_ctx,
                "Found type... \x1b[2m"+infr0_str+"\x1b[0m\n" +
                "Instead of... \x1b[2m"+type0_str+"\x1b[0m")
            });
          } else {
            return done([hols, type]);
          }
        // Equal filled a hole, so we try again
        } catch (e) {
          var hols = {...hols, [e[0]]: x => e[1]};
          return deep([[typecheck, [term, type, defs, show, hols, ctx, locs]]], done);
        };
      });
  };
};

function typesynth(name, defs, show = stringify) {
  if (!defs[name].core) {
    defs[name].core = null;
    var term = defs[name].term;
    var type = defs[name].type;
    var [hols,_] = exec(() => 
      deep([[typecheck, [type, Typ(), defs, show, {}, Nil(), null]]], ([hols,_]) =>
      deep([[typecheck, [term, type, defs, show, {}, Nil(), null]]], ([hols,type]) => {
        for (var hol in hols) {
          if (hols[hol] === null) {
            return fail(() => Err(null, ctx, "Unsolved hole: '" + hol + "'."));
          }
        }
        return done([hols,type])
      })));
    var core_term = parse(stringify(canonicalize(term, hols)), 0, "term");
    var core_type = parse(stringify(canonicalize(type, hols)), 0, "term");
    defs[name].core = {term: core_term, type: core_type};
  }
  return defs[name].core;
};

// Names
// =====

function nth_name(n) {
  var str = "";
  ++n;
  while (n > 0) {
    --n;
    str += String.fromCharCode(97 + n % 26);
    n = Math.floor(n / 26);
  }
  return str;
};

var name_count = 0;
function new_name() {
  return nth_name(name_count++).toUpperCase();
};

var HOLE_LOGS = {};

function clear_hole_logs() {
  for (var key in HOLE_LOGS) {
    delete HOLE_LOGS[key];
  }
};

module.exports = {
  Var,
  Ref,
  Typ,
  All,
  Lam,
  App,
  Let,
  Ann,
  Loc,
  Wat,
  Hol,
  Cse,
  Nat,
  Chr,
  Str,
  Ext,
  Nil,
  find,
  fold,
  stringify,
  parse,
  build_cse,
  build_nat,
  unloc,
  reduce,
  normalize,
  canonicalize,
  hash,
  equal,
  Err,
  new_name,
  typeinfer,
  typecheck,
  typesynth,
  HOLE_LOGS,
  clear_hole_logs,
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(48)
var ieee754 = __webpack_require__(49)
var isArray = __webpack_require__(50)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  comp: __webpack_require__(12),
  lang: __webpack_require__(11),
  core: __webpack_require__(29),
  synt: __webpack_require__(7),
  comp: __webpack_require__(12),
  tojs: __webpack_require__(30),
  optx: __webpack_require__(31),
  inet: __webpack_require__(15),
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var {
  Var, Ref, Typ, All,
  Lam, App, Let, Ann,
  Loc, Ext, Nil, Wat,
  Hol, Cse, Nat, Chr,
  Str,
  unloc,
  reduce,
  normalize,
  Err,
  typeinfer,
  typecheck,
  equal,
  find,
  fold,
  new_name,
  stringify: synt_stringify,
} = __webpack_require__(7);

// Parsing
// =======

function Tag(ctor, text) {
  return {ctor, text};
};

function get_var(ctx, name, not_found) {
  var got = find(ctx, (bnd, i) => bnd[0] === name);
  if (!got) {
    if (not_found) {
      return not_found();
    } else {
      throw "Unbound: " + name + ".";
    }
  } else {
    return got.value[1];
  }
};

// Is this a space character?
function is_space(chr) {
  return chr === " " || chr === "\t" || chr === "\n";
};

// Is this a name-valid character?
function is_name(chr) {
  var val = chr.charCodeAt(0);
  return (val >= 46 && val < 47)   // .
      || (val >= 48 && val < 58)   // 0-9
      || (val >= 65 && val < 91)   // A-Z
      || (val >= 95 && val < 96)   // _
      || (val >= 97 && val < 123); // a-z
};

// Returns the first valid parser
function choose(fns, err) {
  for (var i = 0; i < fns.length; ++i) {
    var parsed = fns[i]();
    if (parsed !== null) {
      return parsed;
    }
  };
  return null;
};

// Chains two parsers
function chain(a, fn) {
  return a ? fn(a[0], a[1]) : null;
};

// Drop characters while a condition is met.
function drop_while(cond, code, [indx,tags]) {
  var drops = "";
  while (indx < code.length && cond(code[indx])) {
    if (tags) {
      drops += code[indx];
    }
    indx++;
  };
  if (tags && drops.length > 0) {
    tags = tags&&Ext(Tag("nul",drops),tags);
  }
  return [indx, tags];
};

// Drop spaces
function drop_spaces(code, [indx,tags]) {
  return drop_while(is_space, code, [indx,tags]);
};

// Drops spaces and comments
function next(code, [indx,tags]) {
  while (true) {
    var [indx,tags] = drop_spaces(code, [indx,tags]);
    if (code[indx] === "/") {
      var [indx,tags] = drop_while(c => c !== "\n", code, [indx,tags]);
    } else if (code[indx] === "#") {
      var [indx,tags] = drop_while(c => c !== "#", code, [indx+1, tags&&Ext(Tag("nul","#"),tags)]);
      indx += 1;
      tags = tags&&Ext(Tag("nul","#"),tags);
    } else {
      break;
    }
  };
  return [indx, tags];
};

function hole(name, xs) {
  return Hol(name, fold(xs, Nil(), (h,t) => Ext(h[1],t)));
};

function parse_error(code, indx, expected, err) {
  if (err) {
    var expec = expected.replace(/\n/g, "<newline>");
    var found = (code[indx] || "<end-of-file>").replace(/\n/g, "<newline>");
    throw ( "Parse error: expected "+expec+", found '"+found+"'.\n"
          + highlight_code(code, indx, indx+1));
  } else {
    return null;
  }
};

// Drops spaces and parses an exact string
function parse_txt(code, [indx,tags], str, err = false) {
  var txt = "";
  while (str.length > 0 && indx < code.length) {
    if (str[0] === code[indx]) {
      txt += code[indx++];
      str = str.slice(1);
    } else {
      break;
    }
  }
  if (str.length === 0) {
    return [[indx,tags&&Ext(Tag("txt",txt),tags)], txt];
  } else {
    return parse_error(code, indx, "'"+str+"'", err);
  }
};

// Parses one of two strings
function parse_one(code, [indx,tags], ch0, ch1, err) {
  return choose([
    () => chain(parse_txt(code, [indx,tags], ch0, false), ([indx,tags],_) => [[indx,tags], false]),
    () => chain(parse_txt(code, [indx,tags], ch1, err  ), ([indx,tags],_) => [[indx,tags], true]),
  ]);
};

function parse_mny(parser) {
  return function(code, [indx,tags], err = false) {
    var parses = [];
    var parsed = parser(code, [indx,tags], false);
    while (parsed) {
      var [[indx,tags], parse] = parsed;
      parses.push(parse);
      var parsed = parser(code, next(code, [indx,tags]), false);
    };
    return [[indx,tags], parses];
  };
};

// Parses an optional value
function parse_may(parser) {
  return function(code, [indx,tags], err) {
    var parsed = parser(code, [indx,tags], err);
    if (parsed) {
      return parsed;
    } else {
      return [[indx,tags], null];
    }
  }
};

// Parses an optional string
function parse_opt(code, [indx,tags], str, err) {
  return choose([
    () => chain(parse_txt(code, [indx,tags], str, false), ([indx,tags],_) => [[indx,tags], true]),
    () => [[indx,tags], false],
  ]);
};

// Parses comma separated arguments `(x,y,z)` or `<x,y,z>`
function parse_app_list(parser) {
  return (code, [indx,tags], err) => {
    var parse_next = (code, [indx,tags], err) =>
      chain(parse_txt(code,next(code,[indx,tags]),",",err), ([indx,tags], skip) =>
      chain(parser(code,[indx,tags],err), ([indx,tags], res) => 
      [[indx,tags], res]));
    return (
      chain(parse_one(code, [indx,tags], "(", "<", false), ([indx,tags], eras) =>
      chain(parser(code, [indx,tags], false), ([indx,tags], init) =>
      chain(parse_mny(parse_next)(code, [indx,tags], err), ([indx,tags], parses) =>
      chain(parse_txt(code, next(code,[indx,tags]), eras ? ">" : ")", err), ([indx,tags], skip) =>
      [[indx,tags], [eras, [init].concat(parses)]])))));
  };
};

// parse binder `x: A`
function parse_bnd(code, [indx,tags], err) {
  return choose([
    () => (
      chain(parse_nam(code, next(code, [indx,tags]), true, false), ([indx,tags], name) =>
      chain(parse_txt(code, next(code, [indx,tags]), ":", false), ([indx,tags], skip) =>
      chain(parse_trm(code, next(code, [indx,tags]), err), ([indx,tags], type) => 
      [[indx,tags], [name, type]]
      )))),
    () => (
      chain(parse_nam(code, next(code, [indx,tags]), true, false), ([indx,tags], name) =>
      chain(parse_txt(code, next(code, [indx,tags]), ":", false), ([indx,tags], skip) =>
      [[indx,tags], [name, null]]
      ))),
    ]);
};

// Parses a valid name, non-empty
function parse_nam(code, [indx,tags], allow_empty = false, err = false, tag = "nam") {
  var nam = "";
  while (indx < code.length) {
    if (is_name(code[indx])) {
      nam += code[indx++];
    } else {
      break;
    }
  }
  tags = tags&&Ext(Tag(tag,nam),tags);
  if (nam.length > 0 || allow_empty) {
    return [[indx,tags], nam];
  } else {
    parse_error(code, indx, "a name", err);
  }
};

// Parses a parenthesis, `(<term>)`
function parse_par(code, [indx,tags], err = false) {
  return (
    chain(parse_txt(code, next(code, [indx,tags]), "(", false), ([indx,tags], skip) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], term) =>
    chain(parse_txt(code, next(code, [indx,tags]), ")", err), ([indx,tags], skip) =>
    [[indx,tags], term]))));
};

// Parses a dependent function type, `(<name> : <term>) -> <term>`
function parse_all(code, [indx,tags], err = false) {
  var from = next(code, [indx,tags])[0];
  return (
    chain(parse_nam(code, next(code, [indx,tags]), true, false), ([indx,tags], self) =>
    chain(parse_app_list(parse_bnd)(code, [indx,tags], err), ([indx,tags], [eras,binds]) =>
    chain(parse_txt(code, next(code, [indx,tags]), "->", err), ([indx,tags], skip) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], body) =>
    [[indx,tags], xs => {
      var fold = (ctx,i) => {
        let slf = i == 0 ? self : "";
        let nam = binds[i][0];
        let bnd = binds[i][1](ctx);
        return ((i < binds.length - 1)
          ? All(eras,slf,nam,bnd,(s,x) => fold(Ext([nam,x],Ext([slf,s],ctx)),i+1))
          : All(eras,slf,nam,bnd,(s,x) => body(Ext([nam,x],Ext([slf,s],ctx)))));
      };
      return Loc(from, indx, fold(xs,0))
    }])))))
};

// Parses a lambda, `(<name>) <term>`
function parse_lam(code, [indx,tags], err = false) {
  var from = next(code, [indx,tags])[0];
  var pnam = (c,i,e) => parse_nam(c,next(c,i),true,e)
  var nam0 = new_name();
  return (
    chain(parse_app_list(pnam)(code, next(code, [indx,tags]), false), ([indx,tags], [eras, binds]) =>
    chain(parse_trm(code, next(code,[indx,tags]), err), ([indx,tags], body) =>
    [[indx,tags], (xs) => {
       var fold = (ctx,i) =>
         (i < binds.length - 1)
         ? Lam(eras, binds[i], (x) => fold(Ext([binds[i],x],ctx),i+1))
         : Lam(eras, binds[i], (x) => body(Ext([binds[i],x],ctx)))
      return Loc(from, indx, fold(xs,0));
    }])));
};

// Parses a named lambda, `<name>(<term>) => <term>`
function parse_fun(code, [indx,tags], err = false) {
  var from = next(code, [indx,tags])[0];
  var pnam = (c,i,e) => parse_nam(c,next(c,i),true,e)
  return (
    chain(parse_nam(code, next(code, [indx,tags]), true, false), ([indx,tags], self) =>
    chain(parse_app_list(pnam)(code, next(code, [indx,tags]), false), ([indx,tags], [eras, binds]) =>
    chain(parse_txt(code, next(code, [indx,tags]), "=>", false), ([indx,tags], skip) =>
    chain(parse_trm(code, next(code,[indx,tags]), err), ([indx,tags], body) =>
    [[indx,tags], (xs) => {
       var fold = (ctx,i) =>
         (i < binds.length - 1)
         ? Lam(eras, binds[i], (x) => fold(Ext([binds[i],x],ctx),i+1))
         : Lam(eras, binds[i], (x) => body(Ext([binds[i],x],ctx)))
      return Loc(from, indx, fold(xs,0))
    }])))));
};

// Parses an arrow comment, `<name> => <term>`
function parse_acm(code, [indx,tags], err = false) {
  var from = next(code, [indx,tags])[0];
  return (
    chain(parse_nam(code, next(code, [indx,tags]), true, false), ([indx,tags], self) =>
    chain(parse_txt(code, next(code, [indx,tags]), "=>", false), ([indx,tags], skip) =>
    chain(parse_trm(code, next(code,[indx,tags]), err), ([indx,tags], term) =>
    [[indx,tags], (xs) => Loc(from, indx, term(xs))]))));
};

// Parses a local definition, `let x = val; body`
function parse_let(code, [indx,tags], err = false) {
  var from = next(code, [indx,tags])[0];
  return (
    chain(parse_one(code, next(code, [indx,tags]), "def ", "let ", false), ([indx,tags], dups) =>
    chain(parse_nam(code, next(code, [indx,tags]), false, err), ([indx,tags], name) =>
    chain(parse_opt(code, next(code, [indx,tags]), "=", err), ([indx,tags], skip) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], expr) =>
    chain(parse_opt(code, [indx,tags], ";", err), ([indx,tags], skip) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], body) =>
    [[indx,tags], xs => {
      if (dups) {
        var tbody = (x) => body(Ext([name,x],xs));
        return Loc(from, indx, Let(name, expr(xs), tbody));
      } else {
        return body(Ext([name,expr(xs)],xs));
      };
    }])))))));
};

// Parses a monadic application of 4 args, `use a b c = x; y` ~> `x((a) (b) (c) (d) y)`
function parse_us4(code, [indx,tags], err = false) {
  var from = next(code, [indx,tags])[0];
  return (
    chain(parse_txt(code, next(code, [indx,tags]), "use "), ([indx,tags], skip) =>
    chain(parse_nam(code, next(code, [indx,tags]), false), ([indx,tags], nam0) =>
    chain(parse_nam(code, next(code, [indx,tags]), false), ([indx,tags], nam1) =>
    chain(parse_nam(code, next(code, [indx,tags]), false), ([indx,tags], nam2) =>
    chain(parse_nam(code, next(code, [indx,tags]), false), ([indx,tags], nam3) =>
    chain(parse_txt(code, next(code, [indx,tags]), "="), ([indx,tags], skip) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], func) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], body) =>
    [[indx,tags], xs => {
      return Loc(from, indx,
        App(false, func(xs),
        Lam(false, nam0, (x) =>
        Lam(false, nam1, (y) =>
        Lam(false, nam2, (z) =>
        Lam(false, nam3, (w) =>
        body(Ext([nam3,w], Ext([nam2,z], Ext([nam1,y], Ext([nam0,x], xs)))))))))));
    }])))))))));
};

// Parses a monadic application of 3 args, `use a b c = x; y` ~> `x((a) (b) (c) y)`
function parse_us3(code, [indx,tags], err = false) {
  var from = next(code, [indx,tags])[0];
  return (
    chain(parse_txt(code, next(code, [indx,tags]), "use "), ([indx,tags], skip) =>
    chain(parse_nam(code, next(code, [indx,tags]), false), ([indx,tags], nam0) =>
    chain(parse_nam(code, next(code, [indx,tags]), false), ([indx,tags], nam1) =>
    chain(parse_nam(code, next(code, [indx,tags]), false), ([indx,tags], nam2) =>
    chain(parse_txt(code, next(code, [indx,tags]), "="), ([indx,tags], skip) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], func) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], body) =>
    [[indx,tags], xs => {
      return Loc(from, indx,
        App(false, func(xs),
        Lam(false, nam0, (x) =>
        Lam(false, nam1, (y) =>
        Lam(false, nam2, (z) =>
        body(Ext([nam2,z], Ext([nam1,y], Ext([nam0,x], xs)))))))));
    }]))))))));
};

// Parses a monadic application of 2 args, `use a b = x; y` ~> `x((a) (b) y)`
function parse_us2(code, [indx,tags], err = false) {
  var from = next(code, [indx,tags])[0];
  return (
    chain(parse_txt(code, next(code, [indx,tags]), "use "), ([indx,tags], skip) =>
    chain(parse_nam(code, next(code, [indx,tags]), false), ([indx,tags], nam0) =>
    chain(parse_nam(code, next(code, [indx,tags]), false), ([indx,tags], nam1) =>
    chain(parse_txt(code, next(code, [indx,tags]), "="), ([indx,tags], skip) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], func) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], body) =>
    [[indx,tags], xs => {
      return Loc(from, indx,
        App(false, func(xs),
        Lam(false, nam0, (x) =>
        Lam(false, nam1, (y) =>
        body(Ext([nam1,y], Ext([nam0,x], xs)))))));
    }])))))));
};

// Parses a monadic application of 1 arg, `use a = x; y` ~> `x((a) y)`
function parse_us1(code, [indx,tags], err = false) {
  var from = next(code, [indx,tags])[0];
  return (
    chain(parse_txt(code, next(code, [indx,tags]), "use "), ([indx,tags], skip) =>
    chain(parse_nam(code, next(code, [indx,tags]), false), ([indx,tags], name) =>
    chain(parse_txt(code, next(code, [indx,tags]), "="), ([indx,tags], skip) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], func) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], body) =>
    [[indx,tags], xs => {
      return Loc(from, indx,
        App(false, func(xs),
        Lam(false, name, (x) =>
        body(Ext([name,x],xs)))));
    }]))))));
};

// Parses a monadic application of 0 args, `use x; y` ~> `x(y)`
function parse_us0(code, [indx,tags], err = false) {
  var from = next(code, [indx,tags])[0];
  return (
    chain(parse_txt(code, next(code, [indx,tags]), "use "), ([indx,tags], skip) =>
    chain(parse_txt(code, next(code, [indx,tags]), "="), ([indx,tags], skip) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], func) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], argm) =>
    [[indx,tags], xs => {
      return Loc(from, indx, App(false, func(xs), argm(xs)));
    }])))));
};

// Parses a projection, `get a = x; y` ~> `x<() _>((a) y)`
function parse_gt1(code, [indx,tags], err = false) {
  var from = next(code, [indx,tags])[0];
  return (
    chain(parse_txt(code, next(code, [indx,tags]), "get "), ([indx,tags], skip) =>
    chain(parse_nam(code, next(code, [indx,tags]), false), ([indx,tags], name) =>
    chain(parse_txt(code, next(code, [indx,tags]), "="), ([indx,tags], skip) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], func) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], body) => {
      var nam0 = new_name();
      return [[indx,tags], xs => {
        return Loc(from, indx,
          App(false, App(true, func(xs), hole(nam0, xs)),
          Lam(false, name, (x) =>
          body(Ext([name,x],xs)))));
      }]
    }))))));
};

// Parses a projection of 2 elements, `get = x; y` ~> `x<() _>(y)`
function parse_gt2(code, [indx,tags], err = false) {
  var from = next(code, [indx,tags])[0];
  return (
    chain(parse_txt(code, next(code, [indx,tags]), "get "), ([indx,tags], skip) =>
    chain(parse_nam(code, next(code, [indx,tags]), false), ([indx,tags], nam0) =>
    chain(parse_nam(code, next(code, [indx,tags]), false), ([indx,tags], nam1) =>
    chain(parse_txt(code, next(code, [indx,tags]), "="), ([indx,tags], skip) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], func) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], body) => {
      var hol0 = new_name();
      return [[indx,tags], xs => {
        return Loc(from, indx,
          App(false, App(true, func(xs), hole(hol0, xs)),
          Lam(false, nam0, (x) =>
          Lam(false, nam1, (y) =>
          body(Ext([nam1,y], Ext([nam0,x], xs)))))));
      }];
    })))))));
};

// Parses a projection of 3 elements, `get = x; y` ~> `x<() _>(y)`
function parse_gt3(code, [indx,tags], err = false) {
  var from = next(code, [indx,tags])[0];
  return (
    chain(parse_txt(code, next(code, [indx,tags]), "get "), ([indx,tags], skip) =>
    chain(parse_nam(code, next(code, [indx,tags]), false), ([indx,tags], nam0) =>
    chain(parse_nam(code, next(code, [indx,tags]), false), ([indx,tags], nam1) =>
    chain(parse_nam(code, next(code, [indx,tags]), false), ([indx,tags], nam2) =>
    chain(parse_txt(code, next(code, [indx,tags]), "="), ([indx,tags], skip) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], func) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], body) => {
      var hol0 = new_name();
      return [[indx,tags], xs => {
        return Loc(from, indx,
          App(false, App(true, func(xs), hole(hol0, xs)),
          Lam(false, nam0, (x) =>
          Lam(false, nam1, (y) =>
          Lam(false, nam2, (z) =>
          body(Ext([nam2,z], Ext([nam1,y], Ext([nam0,x], xs)))))))));
      }];
    }))))))));
};

// Parses a projection of 4 elements, `get = x; y` ~> `x<() _>(y)`
function parse_gt4(code, [indx,tags], err = false) {
  var from = next(code, [indx,tags])[0];
  return (
    chain(parse_txt(code, next(code, [indx,tags]), "get "), ([indx,tags], skip) =>
    chain(parse_nam(code, next(code, [indx,tags]), false), ([indx,tags], nam0) =>
    chain(parse_nam(code, next(code, [indx,tags]), false), ([indx,tags], nam1) =>
    chain(parse_nam(code, next(code, [indx,tags]), false), ([indx,tags], nam2) =>
    chain(parse_nam(code, next(code, [indx,tags]), false), ([indx,tags], nam3) =>
    chain(parse_txt(code, next(code, [indx,tags]), "="), ([indx,tags], skip) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], func) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], body) => {
      var hol0 = new_name();
      return [[indx,tags], xs => {
        return Loc(from, indx,
          App(false, App(true, func(xs), hole(hol0, xs)),
          Lam(false, nam0, (x) =>
          Lam(false, nam1, (y) =>
          Lam(false, nam2, (z) =>
          Lam(false, nam3, (w) =>
          body(Ext([nam3,w], Ext([nam2,z], Ext([nam1,y], Ext([nam0,x], xs)))))))))));
      }];
    })))))))));
};

// TODO: generic parser for N uses/gets instead of hard-coding N

// Parses the type of types, `Type`
function parse_typ(code, [indx,tags], err = false) {
  var from = next(code, [indx,tags])[0];
  return (
    chain(parse_txt(code, next(code, [indx,tags]), "Type", false), ([indx,tags], skip) =>
    [[indx,tags], xs => Loc(from, indx, Typ())]));
};

// Parses an assumption, `?a`
function parse_wat(code, [indx,tags], err) {
  var from = next(code, [indx,tags])[0];
  return (
    chain(parse_txt(code, [indx,tags], "?", false), ([indx,tags], skip) =>
    chain(parse_nam(code, next(code, [indx,tags]), false, err), ([indx,tags], name) =>
    [[indx,tags], xs => Wat(name)])));
};

// Parses a hole that Formality will try to auto-complete, `_`
function parse_hol(code, [indx,tags], err) {
  var from = next(code, [indx,tags])[0];
  return (
    chain(parse_txt(code, [indx,tags], "_", false), ([indx,tags], skip) => {
      var nam0 = new_name();
      return [[indx,tags], xs => hole(nam0, xs)];
    }));
};

// Parses an case expression, `case x as t : m;` ~> `x<(t) m>`
function parse_cse(code, [indx,tags], err) {
  var from = next(code, [indx,tags])[0];
  function parse_bar(code, [indx, tags], err) {
    return (
      chain(parse_txt(code, next(code, [indx,tags]), "|", false), ([indx,tags], skip) =>
      chain(parse_trm(code, next(code, [indx,tags]), err), ([indx,tags], term) =>
      chain(parse_txt(code, next(code, [indx,tags]), ";", err), ([indx,tags], skip) =>
      [[indx,tags], term]))));
  };
  function parse_mot(code, [indx, tags], err) {
    return (
      chain(parse_txt(code, next(code, [indx,tags]), ":", false), ([indx,tags], skip) =>
      chain(parse_trm(code, next(code, [indx,tags]), err), ([indx,tags], moti) => 
      chain(parse_txt(code, next(code, [indx,tags]), ";", err), ([indx,tags], skip) =>
      [[indx,tags], moti]))));
  };
  function parse_wth(code, [indx, tags], err) {
    return (
      chain(parse_txt(code, next(code, [indx,tags]), "with ", false), ([indx,tags], skip) =>
      chain(parse_nam(code, next(code, [indx,tags]), false, err), ([indx,tags], name) =>
      chain(parse_txt(code, next(code, [indx,tags]), ":", err), ([indx,tags], skip) =>
      chain(parse_trm(code, next(code, [indx,tags]), err), ([indx,tags], type) => 
      chain(parse_txt(code, next(code, [indx,tags]), "=", err), ([indx,tags], skip) =>
      chain(parse_trm(code, next(code, [indx,tags]), err), ([indx,tags], term) => 
      chain(parse_txt(code, next(code, [indx,tags]), ";", err), ([indx,tags], skip) =>
      [[indx,tags], [name,type,term]]))))))));
  };
  function parse_val(code, [indx, tags], err) {
    return choose([
      () => (
        chain(parse_nam(code, next(code, [indx,tags]), false, false), ([indx,tags], name) =>
        chain(parse_txt(code, next(code, [indx,tags]), ":", false), ([indx,tags], skip) =>
        [[indx,tags], [name, parsed_var(from, [indx,tags], name)]]))),
      () => (
        chain(parse_trm(code, next(code, [indx,tags]), false), ([indx,tags], func) =>
        chain(parse_txt(code, next(code, [indx,tags]), "as ", false), ([indx,tags], skip) =>
        chain(parse_nam(code, next(code, [indx,tags]), true, false), ([indx,tags], name) =>
        chain(parse_txt(code, next(code, [indx,tags]), ":", false), ([indx,tags], skip) =>
        [[indx,tags], [name, func]]))))),
      () => (
        chain(parse_trm(code, next(code, [indx,tags]), err), ([indx,tags], func) =>
        chain(parse_txt(code, next(code, [indx,tags]), ":", err), ([indx,tags], skip) =>
        [[indx,tags], ["self", func]]))),
    ]);
  };
  return (
    chain(parse_txt(code, next(code, [indx,tags]), "case ", false), ([indx,tags], skip) =>
    chain(parse_val(code, next(code, [indx,tags]), err), ([indx,tags], cval) =>
    chain(parse_mny(parse_wth)(code, [indx,tags], err), ([indx,tags], wths) =>
    chain(parse_mny(parse_bar)(code, [indx,tags], err), ([indx,tags], bars) =>
    chain(parse_may(parse_mot)(code, [indx,tags], err), ([indx,tags], moti) => {
      var uniq_name = new_name();
      var hole_name = new_name();
      return [[indx,tags], xs => {
        var [name, func] = cval;
        var func_term = func(xs);
        if (!moti) {
          moti = xs => hole(hole_name, xs);
        }
        var func_moti = xs => (function go(i, xs) {
          if (i === wths.length) {
            return moti(xs);
          } else {
            var [wnam, wtyp, wter] = wths[i];
            return All(false, "", wnam, wtyp(xs), (s,x) => go(i+1, Ext([wnam,x],Ext(["",s],xs))));
          };
        })(0, xs);
        var func_bars = bars.map(bar => xs => (function go(i, xs) {
          if (i === wths.length) {
            return bar(xs);
          } else {
            var [wnam, wtyp, wter] = wths[i];
            return Lam(false, wnam, (x) => go(i+1, Ext([wnam,x],xs)));
          };
        })(0, xs));
        var term = Cse(name+"#"+uniq_name, func_term, [xs, [func_moti].concat(func_bars)]);
        for (var [wnam, wtyp, wter] of wths) {
          term = App(false, term, wter(xs));
        };
        return term;
      }];
    }))))));
};

function parse_ite(code, [indx,tags], err = false) {
  var from = next(code, [indx,tags])[0];
  return (
    chain(parse_txt(code, next(code, [indx,tags]), "if ", false), ([indx,tags], skip) =>
    chain(parse_trm(code, next(code, [indx,tags]), err), ([indx,tags], cond) =>
    chain(parse_opt(code, next(code, [indx,tags]), "then", err), ([indx,tags], skip) =>
    chain(parse_trm(code, next(code, [indx,tags]), err), ([indx,tags], ctru) =>
    chain(parse_opt(code, next(code, [indx,tags]), "else", err), ([indx,tags], skip) =>
    chain(parse_trm(code, next(code, [indx,tags]), err), ([indx,tags], cfal) => {
      var nam0 = new_name();
      return [[indx,tags], xs => {
        var term = cond(xs);
        var term = App(true, term, Lam(false, "", x => hole(nam0, Ext(["",x],xs))));
        var term = App(false, term, ctru(xs));
        var term = App(false, term, cfal(xs));
        return term;
      }];
    })))))));
};

// Parses the do-notation
function parse_don(code, [indx,tags], err = false) {
  var from = next(code, [indx,tags])[0];
  function parse_stt(mnam) {
    return function parse_stt(code, [indx,tags], err) {
      return choose([
        () => // var x = expr; body
          chain(parse_txt(code, next(code, [indx,tags]), "var ", false), ([indx,tags], skip) =>
          chain(parse_nam(code, next(code, [indx,tags]), false, err), ([indx,tags], name) =>
          chain(parse_txt(code, next(code, [indx,tags]), "=", err), ([indx,tags], skip) =>
          chain(parse_trm(code, next(code, [indx,tags]), err), ([indx,tags], expr) =>
          chain(parse_txt(code, next(code, [indx,tags]), ";", err), ([indx,tags], skip) =>
          chain(parse_stt(code, next(code, [indx,tags]), err), ([indx,tags], body) => {
            var nam0 = new_name();
            var nam1 = new_name();
            return [[indx,tags], xs => {
              var term = App(false, App(true, Ref("Monad.bind"), Ref(mnam)), Ref(mnam+".monad"));
              var term = App(true, term, hole(nam0, xs));
              var term = App(true, term, hole(nam1, xs));
              var term = App(false, term, expr(xs));
              var term = App(false, term, Lam(false, name, (x) => body(Ext([name,x],xs))));
              return term;
            }];
          })))))),
        () => // return expr;
          chain(parse_txt(code, next(code, [indx,tags]), "return ", false), ([indx,tags], skip) =>
          chain(parse_trm(code, next(code, [indx,tags]), err), ([indx,tags], expr) =>
          chain(parse_txt(code, next(code, [indx,tags]), ";", err), ([indx,tags], skip) => {
            var nam0 = new_name();
            return [[indx,tags], xs => {
              var term = App(false, App(true, Ref("Monad.pure"), Ref(mnam)), Ref(mnam+".monad"));
              var term = App(true, term, hole(nam0, xs));
              var term = App(false, term, expr(xs));
              return term;
            }];
          }))),
        () => // expr; body
          chain(parse_trm(code, next(code, [indx,tags]), false), ([indx,tags], expr) =>
          chain(parse_txt(code, next(code, [indx,tags]), ";", false), ([indx,tags], skip) =>
          chain(parse_stt(code, next(code, [indx,tags]), false), ([indx,tags], body) => {
            var nam0 = new_name();
            var nam1 = new_name();
            return [[indx,tags], xs => {
              var term = App(false, App(true, Ref("Monad.bind"), Ref(mnam)), Ref(mnam+".monad"));
              var term = App(true, term, hole(nam0, xs));
              var term = App(true, term, hole(nam1, xs));
              var term = App(false, term, expr(xs));
              var term = App(false, term, Lam(false, "", (x) => body(Ext(["",x],xs))));
              return term;
            }];
          }))),
        () => // expr;
          chain(parse_trm(code, next(code, [indx,tags]), err), ([indx,tags], expr) =>
          chain(parse_txt(code, next(code, [indx,tags]), ";", err), ([indx,tags], skip) => {
            return [[indx,tags], xs => {
              return expr(xs);
            }];
          })),
      ]);
    };
  };
  return (
    chain(parse_txt(code, next(code, [indx,tags]), "do "), ([indx,tags], skip) =>
    chain(parse_nam(code, next(code, [indx,tags]), false, err), ([indx,tags], mnam) =>
    chain(parse_txt(code, next(code, [indx,tags]), "{", err), ([indx,tags], skip) =>
    chain(parse_stt(mnam)(code, next(code, [indx,tags]), err), ([indx,tags], term) =>
    chain(parse_txt(code, next(code, [indx,tags]), "}", err), ([indx,tags], skip) =>
    [[indx,tags], xs => Loc(from, indx, term(xs))]))))));
};

function parsed_var(from, [indx,tags], name) {
  return xs => {
    if (tags && tags.head) tags.head.ctor = "var";
    return Loc(from, indx, get_var(xs, name, () => {
      if (/^[0-9]*$/.test(name)) {
        if (tags && tags.head) tags.head.ctor = "nat";
        return Nat(BigInt(name));
      } else {
        if (tags && tags.head) tags.head.ctor = "ref";
        return Ref(name);
      };
    }));
  };
};

// Parses variables, `<name>`
function parse_var(code, [indx,tags], err = false) {
  var from = next(code, [indx,tags])[0];
  return (
    chain(parse_nam(code, next(code, [indx,tags]), false, false), ([indx,tags], name) => {
      if (name.length === 0) {
        return parse_error(code, indx, "a variable", err);
      } else {
        var tag_to_mutate = tags && tags.head;
        return [[indx,tags], parsed_var(from, [indx,tags], name)]
      };
    }));
};

// Parses a single-line hole application, `<term>()`
function parse_ia1(code, [indx,tags], from, func, err) {
  return (
    chain(parse_txt(code, [indx,tags], "()"), ([indx,tags], eras) => {
      var nam0 = new_name();
      return [[indx,tags], xs => Loc(from, indx, App(false, func(xs), hole(nam0, xs)))]
    }));
};

// Parses 1 implicit arguments, `f<>`
function parse_ie1(code, [indx,tags], from, func, err) {
  return (
    chain(parse_txt(code, [indx,tags], "<>"), ([indx,tags], eras) => {
      var nam0 = new_name();
      return [[indx,tags], xs => {
        var term = func(xs);
        var term = App(true, term, hole(nam0, xs));
        return Loc(from, indx, term);
      }];
    }));
};

// Parses 2 implicit arguments, `f<,>`
function parse_ie2(code, [indx,tags], from, func, err) {
  return (
    chain(parse_txt(code, [indx,tags], "<,>"), ([indx,tags], eras) => {
      var nam0 = new_name();
      var nam1 = new_name();
      return [[indx,tags], xs => {
        var term = func(xs);
        var term = App(true, term, hole(nam0, xs));
        var term = App(true, term, hole(nam1, xs));
        return Loc(from, indx, term);
      }];
    }));
};

// Parses 3 implicit arguments, `f<,,>`
function parse_ie3(code, [indx,tags], from, func, err) {
  return (
    chain(parse_txt(code, [indx,tags], "<,,>"), ([indx,tags], eras) => {
      var nam0 = new_name();
      var nam1 = new_name();
      var nam2 = new_name();
      return [[indx,tags], xs => {
        var term = func(xs);
        var term = App(true, term, hole(nam0, xs));
        var term = App(true, term, hole(nam1, xs));
        var term = App(true, term, hole(nam2, xs));
        return Loc(from, indx, term);
      }];
    }));
};

// Parses 4 implicit arguments, `f<,,,>`
function parse_ie4(code, [indx,tags], from, func, err) {
  return (
    chain(parse_txt(code, [indx,tags], "<,,,>"), ([indx,tags], eras) => {
      var nam0 = new_name();
      var nam1 = new_name();
      var nam2 = new_name();
      var nam3 = new_name();
      return [[indx,tags], xs => {
        var term = func(xs);
        var term = App(true, term, hole(nam0, xs));
        var term = App(true, term, hole(nam1, xs));
        var term = App(true, term, hole(nam2, xs));
        var term = App(true, term, hole(nam3, xs));
        return Loc(from, indx, term);
      }];
    }));
};

// Parses 5 implicit arguments, `f<,,,,>`
function parse_ie5(code, [indx,tags], from, func, err) {
  return (
    chain(parse_txt(code, [indx,tags], "<,,,,>"), ([indx,tags], eras) => {
      var nam0 = new_name();
      var nam1 = new_name();
      var nam2 = new_name();
      var nam3 = new_name();
      var nam4 = new_name();
      return [[indx,tags], xs => {
        var term = func(xs);
        var term = App(true, term, hole(nam0, xs));
        var term = App(true, term, hole(nam1, xs));
        var term = App(true, term, hole(nam2, xs));
        var term = App(true, term, hole(nam3, xs));
        var term = App(true, term, hole(nam4, xs));
        return Loc(from, indx, term);
      }];
    }));
};

// Parses 6 implicit arguments, `f<,,,,,>`
function parse_ie6(code, [indx,tags], from, func, err) {
  return (
    chain(parse_txt(code, [indx,tags], "<,,,,,>"), ([indx,tags], eras) => {
      var nam0 = new_name();
      var nam1 = new_name();
      var nam2 = new_name();
      var nam3 = new_name();
      var nam4 = new_name();
      var nam5 = new_name();
      return [[indx,tags], xs => {
        var term = func(xs);
        var term = App(true, term, hole(nam0, xs));
        var term = App(true, term, hole(nam1, xs));
        var term = App(true, term, hole(nam2, xs));
        var term = App(true, term, hole(nam3, xs));
        var term = App(true, term, hole(nam4, xs));
        var term = App(true, term, hole(nam5, xs));
        return Loc(from, indx, term);
      }];
    }));
};

// Parses a application `f(x,y,z) ~> f(x)(y)(z)`
function parse_app(code, [indx,tags], from, func, err) {
  return (
    chain(parse_app_list(parse_trm)(code,[indx,tags],err), ([indx,tags], [eras,args]) =>
      [[indx,tags], (xs) => {
        var x = func(xs);
        for (var i = 0; i < args.length; i++) {
          x = App(eras,x,args[i](xs));
        };
        return Loc(from,indx,x);
    }]));
};

// Parses a multi-line application, `<term> | <term>;`
function parse_pip(code, [indx,tags], from, func, err) {
  return (
    chain(parse_txt(code, next(code, [indx,tags]), "|", false), ([indx,tags], skip) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], argm) =>
    chain(parse_txt(code, next(code, [indx,tags]), ";", err), ([indx,tags], skip) =>
    [[indx,tags], xs => Loc(from, indx, App(false, func(xs), argm(xs)))]))));
};

// Parses a non-dependent function type, `<term> -> <term>`
function parse_arr(code, [indx,tags], from, bind, err) {
  return (
    chain(parse_txt(code, next(code, [indx,tags]), "->", false), ([indx,tags], skip) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], body) =>
    [[indx,tags], xs => {
      var tbind = bind(xs);
      var tbody = (s,x) => body(Ext(["",x],Ext(["",s],xs)));
      return Loc(from, indx, All(false, "", "", tbind, tbody));
    }])));
};

// Parses an annotation, `<term> :: <term>`
function parse_ann(code, [indx,tags], from, expr, err) {
  return (
    chain(parse_txt(code, next(code, [indx,tags]), "::", false), ([indx,tags], skip) =>
    chain(parse_trm(code, [indx,tags], err), ([indx,tags], type) =>
    [[indx,tags], xs => Loc(from, indx, Ann(false, expr(xs), type(xs)))])));
};

// Parses a char literal, 'f'
function parse_chr(code, [indx,tags], err) {
  var from = next(code, [indx,tags])[0];
  return (
    chain(parse_txt(code, next(code, [indx,tags]), "'"), ([indx,tags], skip) =>
    chain([[indx+1,tags&&Ext(Tag("chr",code[indx]),tags)], code[indx]], ([indx,tags], chrx) =>
    chain(parse_txt(code, next(code, [indx,tags]), "'"), ([indx,tags], skip) =>
    [[indx,tags], xs => Loc(from, indx, Ann(true, Chr(chrx), Ref("Char")))]
    ))));
};

// Parses a string literal, "foo"
function parse_str(code, [indx,tags], err) {
  var from = next(code, [indx,tags])[0];
  return (
    chain(parse_txt(code, next(code, [indx,tags]), "\""), ([indx,tags], skip) =>
    chain((function go([indx,tags], slit) {
      var strx = "";
      while (code[indx] !== '"') {
        if (indx >= code.length) {
          parse_error(code, indx, "unterminated string literal", true);
        } else {
          strx += code[indx++];
        }
      }
      return [[indx+1,tags], Str(strx)];
    })([indx,tags]), ([indx,tags], slit) =>
    [[indx,tags], xs => Loc(from, indx, Ann(true, slit, Ref("String")))])));
};

// Parses a list literal, `[a, b, c]` as a `List(A)`
function parse_lst(code, [indx,tags], err) {
  var from = next(code, [indx,tags])[0];
  function parse_els(code, [indx,tags], nam0) {
    return chain(parse_opt(code, next(code, [indx,tags]), "]", false), ([indx,tags], done) => {
      if (done) {
        return [[indx,tags], xs => App(true, Ref("List.nil"), hole(nam0, xs))];
      } else {
        return (
          chain(parse_trm(code, next(code, [indx,tags]), err), ([indx,tags], elem) =>
          chain(parse_opt(code, next(code, [indx,tags]), ",", false), ([indx,tags], skip) =>
          chain(parse_els(code, next(code, [indx,tags]), nam0), ([indx,tags], tail) =>
          [[indx,tags], xs => {
            var term = Ref("List.cons");
            var term = App(true, term, hole(nam0, xs));
            var term = App(false, term, elem(xs));
            var term = App(false, term, tail(xs));
            return term;
          }]))));
      }
    });
  };
  return (
    chain(parse_txt(code, next(code, [indx,tags]), "[", false), ([indx,tags], skip) => {
      var nam0 = new_name();
      return chain(parse_els(code, next(code, [indx,tags]), nam0), ([indx,tags], list) =>
      [[indx,tags], xs => Loc(from, indx, list(xs))])
    }));
};

// Parses a map literal, `{a: 1, b: 2, c: 3}` as a `List(Pair(A, B))`
function parse_map(code, [indx,tags], err) {
  var from = next(code, [indx,tags])[0];
  function parse_els(code, [indx,tags], nam0, nam1) {
    return chain(parse_opt(code, next(code, [indx,tags]), "}", false), ([indx,tags], done) => {
      if (done) {
        return [[indx,tags], xs => {
          var Pair = Ref("Pair");
          var Pair = App(false, Pair, hole(nam0, xs));
          var Pair = App(false, Pair, hole(nam1, xs));
          return App(true, Ref("List.nil"), Pair);
        }];
      } else {
        return (
          chain(parse_trm(code, next(code, [indx,tags]), err), ([indx,tags], val0) =>
          chain(parse_opt(code, next(code, [indx,tags]), ":", false), ([indx,tags], skip) =>
          chain(parse_trm(code, next(code, [indx,tags]), err), ([indx,tags], val1) =>
          chain(parse_opt(code, next(code, [indx,tags]), ",", false), ([indx,tags], skip) =>
          chain(parse_els(code, next(code, [indx,tags]), nam0), ([indx,tags], tail) =>
          [[indx,tags], xs => {
            var pair = Ref("Pair.new");
            var pair = App(true, pair, hole(nam0, xs));
            var pair = App(true, pair, hole(nam1, xs));
            var pair = App(false, pair, val0(xs));
            var pair = App(false, pair, val1(xs));
            var Pair = Ref("Pair");
            var Pair = App(false, Pair, hole(nam0, xs));
            var Pair = App(false, Pair, hole(nam1, xs));
            var term = Ref("List.cons");
            var term = App(true, term, Pair);
            var term = App(false, term, pair);
            var term = App(false, term, tail(xs));
            return term;
          }]))))));
      }
    });
  };
  return (
    chain(parse_txt(code, next(code, [indx,tags]), "{", false), ([indx,tags], skip) => {
      var nam0 = new_name();
      var nam1 = new_name();
      return chain(parse_els(code, next(code, [indx,tags]), nam0, nam1), ([indx,tags], list) =>
      [[indx,tags], xs => Loc(from, indx, list(xs))])
    }));
};

// Parses a term
function parse_trm(code, [indx = 0, tags = []], err) {
  var [indx,tags] = next(code, [indx,tags]);
  var from = indx;

  // Parses the base term, trying each variant once
  var base_parse = choose([
    () => parse_all(code, [indx,tags], err),
    () => parse_lam(code, [indx,tags], err),
    () => parse_fun(code, [indx,tags], err),
    () => parse_acm(code, [indx,tags], err),
    () => parse_let(code, [indx,tags], err),
    () => parse_us0(code, [indx,tags], err),
    () => parse_us1(code, [indx,tags], err),
    () => parse_us2(code, [indx,tags], err),
    () => parse_us3(code, [indx,tags], err),
    () => parse_us4(code, [indx,tags], err),
    () => parse_gt1(code, [indx,tags], err),
    () => parse_gt2(code, [indx,tags], err),
    () => parse_gt3(code, [indx,tags], err),
    () => parse_gt4(code, [indx,tags], err),
    () => parse_par(code, [indx,tags], err),
    () => parse_typ(code, [indx,tags], err),
    () => parse_chr(code, [indx,tags], err),
    () => parse_str(code, [indx,tags], err),
    () => parse_lst(code, [indx,tags], err),
    () => parse_map(code, [indx,tags], err),
    () => parse_wat(code, [indx,tags], err),
    () => parse_hol(code, [indx,tags], err),
    () => parse_cse(code, [indx,tags], err),
    () => parse_ite(code, [indx,tags], err),
    () => parse_don(code, [indx,tags], err),
    () => parse_var(code, [indx,tags], err),
  ], err);

  if (!base_parse && err) {
    parse_error(code, indx, "a term", err);
  } else if (!base_parse) {
    return null;
  } else {
    // Parses postfix extensions, trying each variant repeatedly
    var post_parse = base_parse;
    while (true) {
      var [[indx,tags], term] = post_parse;
      post_parse = choose([
        () => parse_ia1(code, [indx,tags], from, term, err),
        () => parse_ie1(code, [indx,tags], from, term, err),
        () => parse_ie2(code, [indx,tags], from, term, err),
        () => parse_ie3(code, [indx,tags], from, term, err),
        () => parse_ie4(code, [indx,tags], from, term, err),
        () => parse_ie5(code, [indx,tags], from, term, err),
        () => parse_ie6(code, [indx,tags], from, term, err),
        () => parse_app(code, [indx,tags], from, term, err),
        () => parse_pip(code, [indx,tags], from, term, err),
        () => parse_arr(code, [indx,tags], from, term, err),
        () => parse_ann(code, [indx,tags], from, term, err),
      ], err);
      if (!post_parse) {
        return base_parse;
      } else {
        base_parse = post_parse;
      }
    }
  }

  return null;
};

// Parses a sequence of `<x: term, y: term...> (a: term, b: term...) ...`.
// Returns a list of erasure/bind/term: `[{eras:bool, name:text, term:term}]`.
function parse_bds(code, [indx,tags], err) {
  var parser = parse_mny(parse_app_list(parse_bnd));
  return chain(parser(code, next(code, [indx,tags]), err), ([indx,tags], bnds) => {
    // [(bool,[(string,term)])] -> [(bool,string,term)]
    var flat_bnds = [];
    for (var i = 0; i < bnds.length; ++i) {
      for (var j = 0; j < bnds[i][1].length; ++j) {
        flat_bnds.push({
          eras: bnds[i][0],
          name: bnds[i][1][j][0],
          term: bnds[i][1][j][1]
        });
      }
    }
    return [[indx,tags], flat_bnds];
  });
};

// Parses a sequence of `<term, term...> (term, term...) ...`.
// Returns a list of erasure/term: `[(bool, term)]`.
function parse_ars(code, [indx,tags], err) {
  var parser = parse_mny(parse_app_list(parse_trm));
  return chain(parser(code, next(code, [indx,tags]), err), ([indx,tags], args) => {
    // [(bool,[term])] -> [(bool, term)]
    var flat_args = [];
    for (var i = 0; i < args.length; ++i) {
      for (var j = 0; j < args[i][1].length; ++j) {
        flat_args.push({
          eras: args[i][0], 
          term: args[i][1][j]
        });
      }
    }
    return [[indx,tags], flat_args];
  });
};

function parse_ctr(code, [indx,tags], err) {
  return (
    chain(parse_txt(code, next(code, [indx,tags]), "|", false), ([indx,tags], skip) =>
    chain(parse_nam(code, next(code, [indx,tags]), false, err), ([indx,tags], name) =>
    chain(parse_bds(code, next(code, [indx,tags]), err), ([indx,tags], fils) =>
    chain(parse_opt(code, next(code, [indx,tags]), "~", err), ([indx,tags], skip) =>
    chain(parse_ars(code, next(code, [indx,tags]), err), ([indx,tags], inds) =>
    chain(parse_txt(code, next(code, [indx,tags]), ";", err), ([indx,tags], skip) =>
    [[indx,tags], {name, fils, inds}]
    )))))));
};

function parse_adt(code, [indx,tags], err) {
  return (
    chain(parse_txt(code, next(code, [indx,tags]), "T ", false), ([indx,tags], skip) =>
    chain(parse_nam(code, next(code, [indx,tags]), false, err), ([indx,tags], name) =>
    chain(parse_bds(code, next(code, [indx,tags]), err), ([indx,tags], pars) =>
    chain(parse_opt(code, next(code, [indx,tags]), "~", err), ([indx,tags], hasi) => 
    chain(parse_bds(code, next(code, [indx,tags]), err), ([indx,tags], inds) =>
    chain(parse_mny(parse_ctr)(code, next(code, [indx,tags]), err), ([indx,tags], ctrs) => {
    return [[indx,tags], {name, pars, inds, ctrs}];
    })))))));
};

// Parses a defs
function parse(code, indx = 0, tags_list = Nil()) {
  //var LOG = x => console.log(require("util").inspect(x, {showHidden: false, depth: null}));
  var defs = {};
  function parse_defs(code, [indx,tags]) {
    var [indx,tags] = next(code, [indx,tags]);
    if (indx === code.length) {
      return [indx,tags];
    } else {
      // Parses datatype definitions
      var parsed_adt = parse_adt(code, [indx,tags], true);
      if (parsed_adt) {
        var [[indx,tags], adt] = parsed_adt;
        defs[adt.name] = {
          type: adt_type_type(adt),
          term: adt_type_term(adt),
        };
        for (var c = 0; c < adt.ctrs.length; ++c) {
          defs[adt.name+"."+adt.ctrs[c].name] = {
            type: adt_ctor_type(adt, c),
            term: adt_ctor_term(adt, c),
          };
        }
        return parse_defs(code, [indx,tags]);
      // Parses function definitions
      } else {
        return (
          chain(parse_nam(code, next(code, [indx,tags]), false, true, "def"), ([indx,tags], name) =>
          chain(parse_bds(code, next(code, [indx,tags]), false), ([indx,tags], bnds) =>
          chain(parse_txt(code, next(code, [indx,tags]), ":", true), ([indx,tags], skip) =>
          chain(parse_trm(code, next(code, [indx,tags]), true), ([indx,tags], type) =>
          chain(parse_trm(code, next(code, [indx,tags]), true), ([indx,tags], term) => {
            defs[name] = {
              type: def_type(bnds, type),
              term: def_term(bnds, term),
            };
            return parse_defs(code, [indx,tags]);
          }))))));
      };
    };
  };
  var [indx,tags_list] = parse_defs(code, [indx,tags_list]);
  var tags = [];
  if (tags_list) {
    for (var def in defs) {
      // This is an innofensive hack to improve tags. Since the parser doesn't
      // track bound names and, instead, returns a `Ctx -> Term` which then add
      // the names, we don't have the information of what names are variables and
      // what names are references. To distinguish without complicating the
      // parser, I just mutate the tag of a name inside `parse_var`, but, for the
      // mutation to happen, we must make one recursive pass before returning the
      // term, so we just call `synt_stringify` here. This mutates to tag of
      // variables and references from `["nam",name]` to `["var",name]` or
      // `["ref",name]`, allowing hyperlinking on moonad.org. Since tags aren't
      // essential, this can be just ignored in pure implementations.
      synt_stringify(defs[def].term);
      synt_stringify(defs[def].type);
    }
    while (tags_list.ctor === "Ext") {
      tags.push(tags_list.head);
      tags_list = tags_list.tail;
    }
    tags.reverse();
  }
  return {defs, indx, tags};
};

// Stringification
// ===============

// Stringifies a character literal
function stringify_chr(chr) {
  var val = 0;
  for (var i = 0; i < 16; ++i) {
    if (chr.ctor === "App" && chr.argm.ctor === "Ref") {
      if (chr.argm.name === "Bit.0") {
        val = val;
        chr = chr.func;
      } else if (chr.argm.name === "Bit.1") {
        val = val | (1 << i);
        chr = chr.func;
      } else {
        return null;
      }
    } else {
      return null;
    }
  };
  if (chr.ctor === "Ref" && chr.name === "Char.new") {
    return String.fromCharCode(val);
  } else {
    return null;
  };
};

// Stringifies a string literal
function stringify_str(term) {
  if (term.ctor === "Ref" && term.name === "String.nil") {
    return "";
  } else if (term.ctor === "App"
    && term.func.ctor === "App"
    && term.func.func.ctor === "Ref"
    && term.func.func.name === "String.cons") {
    var chr = stringify_chr(term.func.argm);
    if (chr !== null) {
      return chr + stringify_str(term.argm);
    } else {
      return null;
    }
  }
};

// Stringifies a nat literal
function stringify_nat(term) {
  if (term.ctor === "Ref" && term.name === "Nat.zero") {
    return "0";
  } else if (term.ctor === "App"
    && term.func.ctor === "Ref"
    && term.func.name === "Nat.succ") {
    var pred = stringify_nat(term.argm);
    if (pred) {
      return String(1 + Number(pred));
    }
  } else {
    return null;
  }
};

function match(pattern, term, ret = {}) {
  if (typeof pattern === "string" && pattern[0] === "$") {
    ret[pattern.slice(1)] = term;
    return ret;
  } else if (typeof pattern === "object" && typeof term === "object") {
    for (var key in pattern) {
      if (!match(pattern[key], term[key], ret)) {
        return null;
      }
    }
    return ret;
  } else if (typeof pattern === "string" && typeof term === "string") {
    return pattern === term ? ret : null;
  } else if (typeof pattern === "boolean" && typeof term === "boolean") {
    return pattern === term ? ret : null;
  } else if (typeof pattern === "number" && typeof term === "number") {
    return pattern === term ? ret : null;
  } else {
    return null;
  }
};

function matching(term, patterns) {
  for (var [pattern, then] of patterns) {
    var got = match(pattern, term);
    if (got) {
      return then(got);
    };
  };
  return null;
};

// List.cons<T>(a)(List.cons<T>(b)(List.nil<T>))
function stringify_lst(term, type = null, vals = Nil()) {
  var cons = App(false, App(false, App(true, Ref("List.cons"), "$type"), "$head"), "$tail");
  var nil  = App(true, Ref("List.nil"), "$type");
  return matching(term, [
    [cons, ({type, head, tail}) => {
      return stringify_lst(tail, type, Ext(head, vals));
    }],
    [nil, ({type}) => {
      return "["
        + stringify_trm(type) + ";"
        + (vals.ctor === "Nil" ? "" : " ")
        + fold(vals, b=>"", (h,t) => b => (b ? "" : ", ")
        + stringify_trm(h)+t(0))(1)
        + "]";
    }]
  ]);
};

// Stringifies a term
function stringify_trm(term) {
  var lit;
  if (lit = stringify_chr(term)) {
    return "'"+lit+"'";
  } else if (lit = stringify_str(term)) {
    return "\""+lit+"\"";
  } else if (lit = stringify_lst(term)) {
    return lit;
  } else {
    switch (term.ctor) {
      case "Var":
        return term.indx.split("#")[0];
      case "Ref":
        return term.name;
      case "Typ":
        return "Type";
      case "All":
        var self = term.self;
        var lpar = term.name === "" ? "" : (term.eras ? "<" : "(");
        var name = term.name;
        var colo = term.name === "" ? "" : ": ";
        var bind = stringify_trm(term.bind);
        var rpar = term.name === "" ? "" : (term.eras ? ">" : ")");
        var body = stringify_trm(term.body(Var(self+"#"), Var(name+"#")));
        if (term.bind.ctor === "All" && name === "") {
          return self+lpar+name+colo+"("+bind+")"+rpar+" -> "+body;
        } else {
          return self+lpar+name+colo+bind+rpar+" -> "+body;
        }
      case "Lam":
        var name = term.name;
        var lpar = term.eras ? "<" : "(";
        var body = stringify_trm(term.body(Var(name+"#")));
        var rpar = term.eras ? ">" : ")";
        return lpar+name+rpar+" "+body;
      case "App":
        var func = stringify_trm(term.func);
        var lpar = term.eras ? "<" : "(";
        var argm = stringify_trm(term.argm);
        var rpar = term.eras ? ">" : ")";
        if (func[0] === "(") {
          return "("+func+")"+lpar+argm+rpar;
        } else {
          return func+lpar+argm+rpar;
        }
      case "Let":
        var name = term.name;
        var expr = stringify_trm(term.expr);
        var body = stringify_trm(term.body(Var(name+"#")));
        return "let "+name+" = "+expr+"; "+body;
      case "Ann":
        if (term.done) {
          return stringify_trm(term.expr);
        } else {
          var expr = stringify_trm(term.expr);
          var type = stringify_trm(term.type);
          if (expr[0] === "(") {
            return "("+expr+") :: "+type;
          } else {
            return expr+" :: "+type;
          }
        }
      case "Loc":
        var expr = stringify_trm(term.expr);
        return expr;
      case "Hol":
        return "_"+term.name; // +"{"+fold(term.vals,"",(h,t)=>stringify(h)+";"+t)+"}";
      case "Wat":
        return "?"+term.name;
      case "Nat":
        return ""+term.natx;
      case "Chr":
        return "'"+term.chrx+"'";
      case "Str":
        return '"'+term.strx+'"';
    }
  }
};

// Stringifies a term
function stringify(term) {
  return stringify_trm(unloc(term));
};

// Stringifies a context
function stringify_ctx(ctx, text = "") {
  switch (ctx.ctor) {
    case "Ext":
      var name = ctx.head.name;
      var type = stringify(ctx.head.type, ctx.tail);
      if (name.length > 0) {
        var text = "- " + name + " : " + type + "\n" + text;
      }
      return stringify_ctx(ctx.tail, text);
    case "Nil":
      return text;
  };
};

// Stringifies all terms of a defs
function stringify_defs(defs) {
  var text = "";
  for (var name in defs) {
    var type = stringify(defs[name].type, Nil());
    var term = stringify(defs[name].term, Nil());
    text += name + " : " + type + "\n  " + term + "\n\n";
  }
  return text;
};

// Errors
// ======

function highlight_code(code, from, to) {
  var lines = [""];
  var from_line = 0;
  var to_line = Infinity;
  var err_line = null;
  lines.push("\x1b[2m     1| \x1b[0m");
  for (var i = 0; i < code.length + 1; ++i) {
    if (code[i] === "\n") {
      var line_num_str = ("      "+(lines.length)).slice(-6);
      lines.push("\x1b[2m" + line_num_str + "| \x1b[0m");
    } else {
      var chr = code[i] || "<eof>";
      if (from <= i && i < to) {
        if (err_line === null) {
          err_line = lines.length - 1;
        }
        var chr = "\x1b[4m\x1b[31m" + chr + "\x1b[0m";
      } else {
        var chr = "\x1b[2m" + chr + "\x1b[0m";
      }
      lines[lines.length - 1] += chr;
    };
    if (i === from) {
      from_line = lines.length - 1;
    };
    if (i === to) {
      to_line = lines.length - 1;
    };
  };
  from_line = Math.max(from_line - 4, 1);
  to_line = Math.min(to_line + 3, lines.length - 1);
  err_line = err_line || (lines.length - 2);
  var err = "On line " + err_line + ":\n";
  var err = err + lines.slice(from_line, to_line).join("\n");
  return err;
};

function stringify_err(err, code) {
  if (code) {
    code = code[code.length-1] !== "\n" ? code+"\n" : code;
  }
  var index = 0;
  if (!err.ctx) {
    if (__dirname.indexOf("vic/dev") !== -1) {
      return err;
    } else {
      return "Undecidable.";
    }
  } else {
    var str = "";
    str += err.msg+"\n";
    if (err.ctx.ctor !== "Nil") {
      str += "With context:\n";
      str += stringify_ctx(err.ctx)
        .replace(/\n*$/g,"")
        .split("\n")
        .map(line => "\x1b[2m"+line+"\x1b[0m")
        .join("\n");
    };
    str += "\n";
    if (err.loc && code) {
      str += highlight_code(code, err.loc.from, err.loc.upto);
    };
  };
  return str;
};

// Generics
// ========

// Datatype and constructor derivers. The example goes from:
//   T Vector <A: Type>                       ~ (len: Nat)
//   | nil                                    ~ (Nat.zero);
//   | ext<len: Nat>(x: A, xs: Vector(A,len)) ~ (Nat.succ(len));
// To:
//   Vector (A: Type, len: Nat) : Type 
//     (A, len)
//     self(P: Nat -> Vector(A, len) -> Type) ->
//     (nil: P(Nat.zero)(Vector.nil<A>)) ->
//     (ext: <len: Nat> -> (x: A, xs: Vector(A,len)) -> P(Nat.succ(len))(Vector.ext<A>(len)(x)(xs))) ->
//     P(len)(self)

function adt_type_type({name, pars, inds, ctrs}) {
  return (function args(p, i, ctx) {
    //console.log("args", p, i, pars.length);
    // {args(0)} = <A> {args(1)}
    // {args(1)} = (len) {args(2)}
    // {args(2)} = self(P : {motive(0)}) -> {ctors(0)}
    if (p < pars.length) {
      return All(false, "", pars[p].name, pars[p].term(ctx), (s,x) => args(p + 1, i, Ext([pars[p].name,x], ctx)));
    } else if (i < inds.length) {
      return All(false, "", inds[i].name, inds[i].term(ctx), (s,x) => args(p, i + 1, Ext([inds[i].name,x], ctx)));
    } else {
      return Typ();
    }
  })(0, 0, Nil());
}

function adt_type_term({name, pars, inds, ctrs}) {
  return (function args(p, i, ctx) {
    //console.log("args", p, i, pars.length);
    // {args(0)} = <A> {args(1)}
    // {args(1)} = (len) {args(2)}
    // {args(2)} = self(P : {motive(0)}) -> {ctors(0)}
    if (p < pars.length) {
      return Lam(false, pars[p].name, x => args(p + 1, i, Ext([pars[p].name,x], ctx)));
    } else if (i < inds.length) {
      return Lam(false, inds[i].name, x => args(p, i + 1, Ext([inds[i].name,x], ctx)));
    } else {
      return All(true, "self_"+name, "P",
        // {motive(0)} = (len: Nat) -> {motive(1)}
        // {motive(1)} = Vector(A, len) -> Type
        (function motive(i, ctx) {
          //console.log("motive", i);
          if (i < inds.length) {
            return All(false, "", inds[i].name,
              inds[i].term(ctx),
              (s,x) => motive(i + 1, Ext([inds[i].name,x], Ext(["",s], ctx))));
          } else {
            var slf = Ref(name);
            for (var P = 0; P < pars.length; ++P) {
              slf = App(false, slf, get_var(ctx, pars[P].name));
            }
            for (var I = 0; I < inds.length; ++I) {
              slf = App(false, slf, get_var(ctx, inds[I].name));
            }
            return All(false, "", "self", slf, (s,x) => Typ());
          }
        })(0, ctx),
        // {ctors(0)} = (nil: {fields(0,0)}) -> {ctors(1)}
        // {ctors(1)} = (ext: {fields(1,0)}) -> {ctors(2)}
        // {ctors(2)} = P(len)(self)
        (s,x) => (function ctors(i, ctx) {
          //console.log("ctors", i);
          if (i < ctrs.length) {
            // {fields(0,0)} = P(Nat.zero)(Vector.nil<A>)
            // {fields(1,0)} = <len: Nat> ->
            // {fields(1,1)} = (x: A) ->
            // {fields(1,2)} = (xs: Vector(A, len)) ->
            // {fields(1,3)} = P(Nat.succ(len))(Vector.ext<A>(len)(x)(xs))
            return All(false, "", ctrs[i].name, (function fields(j, ctx) {
              //console.log("fields", i, j);
              if (j < ctrs[i].fils.length) {
                var t_eras = ctrs[i].fils[j].eras;
                var t_name = ctrs[i].fils[j].name;
                var t_bind = ctrs[i].fils[j].term(ctx);
                var t_body = (s,x) => fields(j + 1, Ext([t_name,x], Ext(["",s], ctx)));
                return All(t_eras, "", t_name, t_bind, t_body);
              } else {
                var ret = get_var(ctx, "P");
                for (var I = 0; I < inds.length; ++I) {
                  if (I < ctrs[i].inds.length) {
                    ret = App(ctrs[i].inds[I].eras, ret, ctrs[i].inds[I].term(ctx));
                  } else {
                    throw "Insufficient indices for constructor '" + ctrs[i].name + "'.";
                  }
                }
                var slf = Ref(name+"."+ctrs[i].name);
                for (var P = 0; P < pars.length; ++P) {
                  slf = App(true, slf, get_var(ctx, pars[P].name));
                }
                //for (var I = 0; I < inds.length; ++I) {
                  //slf = App(false, slf, get_var(ctx, inds[I].name));
                //}
                for (var F = 0; F < ctrs[i].fils.length; ++F) {
                  slf = App(ctrs[i].fils[F].eras, slf, get_var(ctx, ctrs[i].fils[F].name));
                }
                ret = App(false, ret, slf);
                return ret;
              }
            })(0, ctx),
            (s,x) => ctors(i + 1, Ext([ctrs[i].name, s], Ext(["", x], ctx))));
          } else {
            var ret = get_var(ctx, "P");
            for (var I = 0; I < inds.length; ++I) {
              ret = App(false, ret, get_var(ctx, inds[I].name));
            }
            ret = App(false, ret, get_var(ctx, "self_"+name));
            return ret;
          }
        })(0, Ext(["P",x], Ext(["self_"+name,s], ctx))));
    }
  })(0, 0, Nil());
};

function adt_ctor_type({name, pars, inds, ctrs}, c) {
  return (function arg(p, i, f, ctx) {
    if (p < pars.length) {
      var t_eras = true;
      var t_self = "";
      var t_name = pars[p].name;
      var t_bind = pars[p].term(ctx);
      var t_body = (s,x) => arg(p + 1, i, f, Ext([t_name,x],Ext(["",s],ctx)));
      return All(t_eras, t_self, t_name, t_bind, t_body);
    } else if (f < ctrs[c].fils.length) {
      var t_eras = ctrs[c].fils[f].eras;
      var t_self = "";
      var t_name = ctrs[c].fils[f].name;
      var t_bind = ctrs[c].fils[f].term(ctx);
      var t_body = (s,x) => arg(p, i, f + 1, Ext([t_name,x],Ext(["",s],ctx)));
      return All(t_eras, t_self, t_name, t_bind, t_body);
    } else {
      var type = Ref(name);
      for (var P = 0; P < pars.length; ++P) {
        type = App(false, type, get_var(ctx, pars[P].name));
      }
      for (var I = 0; I < inds.length; ++I) {
        type = App(false, type, ctrs[c].inds[I].term(ctx));
      }
      return type;
    }
  })(0, inds.length, 0, Nil())
};

function adt_ctor_term({name, pars, inds, ctrs}, c) {
  return (function arg(p, i, f, ctx) {
    if (p < pars.length) {
      var t_eras = true;
      var t_name = pars[p].name;
      var t_body = x => arg(p + 1, i, f, Ext([t_name,x],ctx));
      return Lam(t_eras, t_name, t_body);
    } else if (f < ctrs[c].fils.length) {
      var t_eras = ctrs[c].fils[f].eras;
      var t_name = ctrs[c].fils[f].name;
      var t_body = x => arg(p, i, f + 1, Ext([t_name,x], ctx));
      return Lam(t_eras, t_name, t_body);
    } else {
      return Lam(true, "P", x => (function opt(k, ctx) {
        if (k < ctrs.length) {
          var t_eras = false;
          var t_name = ctrs[k].name;
          var t_body = x => opt(k + 1, Ext([t_name,x], ctx));
          return Lam(t_eras, t_name, t_body);
        } else {
          var ret = get_var(ctx, ctrs[c].name);
          for (var F = 0; F < ctrs[c].fils.length; ++F) {
            var t_eras = ctrs[c].fils[F].eras;
            var t_func = ret;
            var t_argm = get_var(ctx, ctrs[c].fils[F].name);
            ret = App(t_eras, t_func, t_argm);
          }
          return ret;
        }
      })(0, Ext(["P",x],ctx)));
    }
  })(0, inds.length, 0, Nil());
};

function def_type(bnds, type) {
  return (function go(i, ctx) {
    if (i < bnds.length) {
      let t_eras = bnds[i].eras;
      let t_self = "";
      let t_name = bnds[i].name;
      let t_type = bnds[i].term(ctx);
      let t_body = (s,x) => go(i+1, Ext([t_name,x],Ext(["",s],ctx)));
      return All(t_eras, t_self, t_name, t_type, t_body);
    } else {
      return type(ctx);
    };
  })(0, Nil());
};

function def_term(bnds, term) {
  return (function go(i, ctx) {
    if (i < bnds.length) {
      let t_eras = bnds[i].eras;
      let t_name = bnds[i].name;
      let t_body = x => go(i+1, Ext([t_name,x],ctx));
      return Lam(t_eras, t_name, t_body);
    } else {
      return term(ctx);
    };
  })(0, Nil());
};

module.exports = {
  is_space,
  is_name,
  choose,
  chain,
  drop_while,
  drop_spaces,
  next,
  parse_app_list,
  parse_error,
  parse_txt,
  parse_one,
  parse_opt,
  parse_nam,
  parse_par,
  parse_all,
  parse_lam,
  parse_let,
  parse_us2,
  parse_us1,
  parse_us0,
  parse_typ,
  parse_var,
  parse_app,
  parse_pip,
  parse_arr,
  parse_ann,
  parse_chr,
  parse_str,
  parse_trm,
  parse,
  unloc,
  stringify_chr,
  stringify_str,
  stringify_nat,
  stringify,
  stringify_ctx,
  stringify_defs,
  highlight_code,
  stringify_err,
};

/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var fmc = __webpack_require__(7);
var fml = __webpack_require__(11);

const Var = (name)           => ({ctor:"Var",name});
const Ref = (name)           => ({ctor:"Ref",name});
const Nul = ()               => ({ctor:"Nul"});
const Lam = (name,body)      => ({ctor:"Lam",name,body});
const App = (func,argm)      => ({ctor:"App",func,argm});
const Let = (name,expr,body) => ({ctor:"Let",name,expr,body});
const Eli = (prim,expr)      => ({ctor:"Eli",prim,expr});
const Ins = (prim,expr)      => ({ctor:"Ins",prim,expr});
const Chr = (chrx)           => ({ctor:"Chr",chrx});
const Str = (strx)           => ({ctor:"Str",strx});
const Nat = (natx)           => ({ctor:"Nat",natx});

var is_prim = {
  Unit   : 1,
  Bool   : 1,
  Nat    : 1,
  Bits   : 1,
  U16    : 1,
  U32    : 1,
  U64    : 1,
  F64    : 1,
  String : 1
};

function as_adt(term, defs) {
  var term = fmc.reduce(term, defs);
  if (term.ctor === "All" && term.self !== "") {
    var term = term.body(fmc.Var("self"), fmc.Var("P"));
    var ctrs = [];
    while (term.ctor === "All") {
      var ctr = (function go(term, flds) {
        if (term.ctor === "All") {
          return go(term.body(fmc.Var(""), fmc.Var(term.name)), flds.concat(term.name));
        } else if (term.ctor === "App" && term.func.ctor === "Var" && term.func.indx === "P") {
          var argm = term.argm;
          while (argm.ctor === "App") {
            argm = argm.func;
          };
          if (argm.ctor === "Ref") {
            return {name: argm.name, flds: flds};
          }
        }
        return null;
      })(term.bind, []);
      if (ctr) {
        ctrs.push(ctr);
        term = term.body(fmc.Var(term.self), fmc.Var(term.name));
      } else {
        return null;
      }
    }
    return ctrs;
  }
  return null;
};

function dependency_sort(defs, main) {
  var seen = {};
  var refs = [];
  function go(term) {
    switch (term.ctor) {
      case "Ref":
        if (!seen[term.name]) {
          seen[term.name] = true;
          go(defs[term.name].term);
          refs.push(term.name);
        }
        break;
      case "Lam":
        go(term.body(fmc.Var(term.name)));
        break;
      case "App":
        go(term.func);
        go(term.argm);
        break;
      case "Let":
        go(term.expr);
        go(term.body(fmc.Var(term.name)));
        break;
      case "Ann":
        go(term.expr);
        break;
      case "Loc":
        go(term.expr);
        break;
      case "Nat":
        break;
      case "Chr":
        break;
      case "Str":
        break;
      default:
        break;
    };
  };
  go(defs[main].term);
  return refs;
};

function prim_of(type, defs) {
  for (var prim in is_prim) {
    if (fmc.equal(type, fmc.Ref(prim), defs)) {
      return prim;
    }
  };
  return null;
};

// Note:
// The name of bound variables get a '$depth$' appended to it. This helps making
// them unique, but also solves some issues where JavaScript shadowing behavior
// differs from Formality. For example:
// `foo = x => y => { var x = x * x; return x; }`
// Here, calling `foo(2)(2)` would return `NaN`, not `4`, because the outer
// value of `x` isn't accessible inside the function's body due to the
// declaration of `x` using a `var` statement.

function infer(term, defs, ctx = fmc.Nil()) {
  switch (term.ctor) {
    case "Var":
      return {
        comp: Var(term.indx.replace("#","$")),
        type: fmc.Var(term.indx),
      };
    case "Ref":
      var got_def = defs[term.name];
      return {
        comp: Ref(term.name),
        type: got_def.type,
      };
    case "Typ":
      return {
        comp: Nul(),
        type: fmc.Typ(),
      };
    case "App":
      var func_cmp = infer(term.func, defs, ctx);
      var func_typ = fmc.reduce(func_cmp.type, defs);
      switch (func_typ.ctor) {
        case "All":
          var self_var = fmc.Ann(true, term.func, func_typ);
          var name_var = fmc.Ann(true, term.argm, func_typ.bind);
          var argm_cmp = check(term.argm, func_typ.bind, defs, ctx);
          var term_typ = func_typ.body(self_var, name_var);
          var comp = func_cmp.comp;

          var func_typ_adt = as_adt(func_typ, defs);
          var func_typ_prim = prim_of(func_typ, defs);
          if (func_typ_prim) {
            comp = Eli(func_typ_prim, comp);
          } else if (func_typ_adt) {
            comp = Eli(func_typ_adt, comp);
          };
          if (!term.eras) {
            comp = App(comp, argm_cmp.comp);
          }
          return {comp, type: term_typ};
        default:
          throw "Non-function application.";
      };
    case "Let":
      var expr_cmp = infer(term.expr, defs, ctx);
      var expr_var = fmc.Ann(true, term.dups ? fmc.Var(term.name+"#"+(ctx.size+1)) : term.expr, expr_cmp.type);
      var body_ctx = fmc.Ext({name:term.name,type:expr_var.type}, ctx);
      var body_cmp = infer(term.body(expr_var), defs, body_ctx);
      return {
        comp: term.dups ? Let(term.name+"$"+(ctx.size+1), expr_cmp.comp, body_cmp.comp) : body_cmp.comp,
        type: body_cmp.type,
      };
    case "All":
      return {
        comp: Nul(),
        type: fmc.Typ(),
      };
    case "Ann":
      return check(term.expr, term.type, defs, ctx);
    case "Loc":
      return infer(term.expr, defs, ctx);
    case "Nat":
      return {
        comp: Nat(term.natx),
        type: fmc.Ref("Nat"),
      };
    case "Chr":
      return {
        comp: Chr(term.chrx),
        type: fmc.Ref("Char"),
      };
    case "Str":
      return {
        comp: Str(term.strx),
        type: fmc.Ref("String"),
      };
  }
};

function check(term, type, defs, ctx = fmc.Nil()) {
  var typv = fmc.reduce(type, defs);

  if (typv.ctor === "Typ") {
    var comp = Nul();
    var type = fmc.Typ();
    return {comp, type};
  };

  var comp = null;
  switch (term.ctor) {
    case "Lam":
      if (typv.ctor === "All") {
        var self_var = fmc.Ann(true, term, type);
        var name_var = fmc.Ann(true, fmc.Var(term.name+"#"+(ctx.size+1)), typv.bind);
        var body_typ = typv.body(self_var, name_var);
        var body_ctx = fmc.Ext({name:term.name,type:name_var.type}, ctx);
        var body_cmp = check(term.body(name_var), body_typ, defs, body_ctx);
        if (term.eras) {
          comp = body_cmp.comp;
        } else {
          comp = Lam(term.name+"$"+(ctx.size+1), body_cmp.comp);
        }

        var type_adt = as_adt(type, defs);
        var type_prim = prim_of(type, defs);
        if (type_prim) {
          comp = Ins(type_prim, comp);
        } else if (type_adt) {
          comp = Ins(type_adt, comp);
        }
      } else {
        throw "Lambda has non-function type.";
      }
      return {comp, type};
    case "Let":
      var expr_cmp = infer(term.expr, defs, ctx);
      var expr_var = fmc.Ann(true, term.dups ? fmc.Var(term.name+"#"+(ctx.size+1)) : term.expr, expr_cmp.type);
      var body_ctx = fmc.Ext({name:term.name,type:expr_var.type}, ctx);
      var body_cmp = check(term.body(expr_var), type, defs, body_ctx);
      return {
        comp: term.dups ? Let(term.name+"$"+(ctx.size+1), expr_cmp.comp, body_cmp.comp) : body_cmp.comp,
        type: body_cmp.type,
      };
    case "Loc":
      return check(term.expr, type, defs);
    default:
      var term_cmp = infer(term, defs, ctx);
      var comp = term_cmp.comp;
      return {comp, type};
  };
};

function core_to_comp(defs, main) {
  var comp_nams = dependency_sort(defs, main).concat([main]);
  var comp_defs = {};
  for (var name of comp_nams) {
    //TODO: caution, using fml.unloc on fmc term; consider adding fmc.unloc
    comp_defs[name] = check(fml.unloc(defs[name].term), fml.unloc(defs[name].type), defs).comp;
  };
  return {
    defs: comp_defs,
    nams: comp_nams,
  };
};

module.exports = {
  Var, Ref, Nul, Lam,
  App, Let, Eli, Ins,
  Chr, Str, Nat,
  is_prim,
  dependency_sort,
  check,
  infer,
  core_to_comp,
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var ma=this;function oa(q){var w=0;return function(){return w<q.length?{done:!1,value:q[w++]}:{done:!0}}}var pa="function"==typeof Object.defineProperties?Object.defineProperty:function(q,w,h){q!=Array.prototype&&q!=Object.prototype&&(q[w]=h.value)};function qa(q){q=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,q];for(var w=0;w<q.length;++w){var h=q[w];if(h&&h.Math==Math)return h}throw Error("Cannot find global object");}var ra=qa(this);
function sa(){sa=function(){};ra.Symbol||(ra.Symbol=ta)}function ua(q,w){this.P=q;pa(this,"description",{configurable:!0,writable:!0,value:w})}ua.prototype.toString=function(){return this.P};var ta=function(){function q(h){if(this instanceof q)throw new TypeError("Symbol is not a constructor");return new ua("jscomp_symbol_"+(h||"")+"_"+w++,h)}var w=0;return q}();
function Ea(q,w){if(w){var h=ra;q=q.split(".");for(var l=0;l<q.length-1;l++){var m=q[l];m in h||(h[m]={});h=h[m]}q=q[q.length-1];l=h[q];w=w(l);w!=l&&null!=w&&pa(h,q,{configurable:!0,writable:!0,value:w})}}Ea("Math.imul",function(q){return q?q:function(w,h){w=Number(w);h=Number(h);var l=w&65535,m=h&65535;return l*m+((w>>>16&65535)*m+l*(h>>>16&65535)<<16>>>0)|0}});
Ea("Array.prototype.fill",function(q){return q?q:function(w,h,l){var m=this.length||0;0>h&&(h=Math.max(0,m+h));if(null==l||l>m)l=m;l=Number(l);0>l&&(l=Math.max(0,m+l));for(h=Number(h||0);h<l;h++)this[h]=w;return this}});function Fa(q){var w=null;return function(){return w=w||q()}}
var Ga=Fa(function(){return function(q,w){w&&(q.fd=w,q.prototype=Object.create(w.prototype,{constructor:{value:q,enumerable:!1,writable:!0,configurable:!0}}))}}),Ha=Fa(function(){function q(a,b,g){var f=a.a,k=b.a,t=g.a,y=0,A=f[0]|0,C=A&8191,B=A>>>13,D=f[1]|0;A=D&8191;var K=D>>>13,E=f[2]|0;D=E&8191;var T=E>>>13,F=f[3]|0;E=F&8191;var X=F>>>13,G=f[4]|0;F=G&8191;var Y=G>>>13,H=f[5]|0;G=H&8191;var Z=H>>>13,I=f[6]|0;H=I&8191;var aa=I>>>13,J=f[7]|0;I=J&8191;var ba=J>>>13,U=f[8]|0;J=U&8191;U>>>=13;var V=
f[9]|0;f=V&8191;V>>>=13;var L=k[0]|0,ca=L&8191,da=L>>>13,M=k[1]|0;L=M&8191;var ea=M>>>13,N=k[2]|0;M=N&8191;var fa=N>>>13,O=k[3]|0;N=O&8191;var ha=O>>>13,P=k[4]|0;O=P&8191;var ia=P>>>13,Q=k[5]|0;P=Q&8191;var ja=Q>>>13,R=k[6]|0;Q=R&8191;var ka=R>>>13,S=k[7]|0;R=S&8191;var la=S>>>13,W=k[8]|0;S=W&8191;W>>>=13;var na=k[9]|0;k=na&8191;na>>>=13;g.b=a.b^b.b;g.length=19;var p=c(C,ca);a=c(C,da);a=a+c(B,ca)|0;b=c(B,da);var va=(y+p|0)+((a&8191)<<13)|0;y=(b+(a>>>13)|0)+(va>>>26)|0;va&=67108863;p=c(A,ca);a=c(A,
da);a=a+c(K,ca)|0;b=c(K,da);p=p+c(C,L)|0;a=a+c(C,ea)|0;a=a+c(B,L)|0;b=b+c(B,ea)|0;var wa=(y+p|0)+((a&8191)<<13)|0;y=(b+(a>>>13)|0)+(wa>>>26)|0;wa&=67108863;p=c(D,ca);a=c(D,da);a=a+c(T,ca)|0;b=c(T,da);p=p+c(A,L)|0;a=a+c(A,ea)|0;a=a+c(K,L)|0;b=b+c(K,ea)|0;p=p+c(C,M)|0;a=a+c(C,fa)|0;a=a+c(B,M)|0;b=b+c(B,fa)|0;var xa=(y+p|0)+((a&8191)<<13)|0;y=(b+(a>>>13)|0)+(xa>>>26)|0;xa&=67108863;p=c(E,ca);a=c(E,da);a=a+c(X,ca)|0;b=c(X,da);p=p+c(D,L)|0;a=a+c(D,ea)|0;a=a+c(T,L)|0;b=b+c(T,ea)|0;p=p+c(A,M)|0;a=a+c(A,
fa)|0;a=a+c(K,M)|0;b=b+c(K,fa)|0;p=p+c(C,N)|0;a=a+c(C,ha)|0;a=a+c(B,N)|0;b=b+c(B,ha)|0;var ya=(y+p|0)+((a&8191)<<13)|0;y=(b+(a>>>13)|0)+(ya>>>26)|0;ya&=67108863;p=c(F,ca);a=c(F,da);a=a+c(Y,ca)|0;b=c(Y,da);p=p+c(E,L)|0;a=a+c(E,ea)|0;a=a+c(X,L)|0;b=b+c(X,ea)|0;p=p+c(D,M)|0;a=a+c(D,fa)|0;a=a+c(T,M)|0;b=b+c(T,fa)|0;p=p+c(A,N)|0;a=a+c(A,ha)|0;a=a+c(K,N)|0;b=b+c(K,ha)|0;p=p+c(C,O)|0;a=a+c(C,ia)|0;a=a+c(B,O)|0;b=b+c(B,ia)|0;var za=(y+p|0)+((a&8191)<<13)|0;y=(b+(a>>>13)|0)+(za>>>26)|0;za&=67108863;p=c(G,
ca);a=c(G,da);a=a+c(Z,ca)|0;b=c(Z,da);p=p+c(F,L)|0;a=a+c(F,ea)|0;a=a+c(Y,L)|0;b=b+c(Y,ea)|0;p=p+c(E,M)|0;a=a+c(E,fa)|0;a=a+c(X,M)|0;b=b+c(X,fa)|0;p=p+c(D,N)|0;a=a+c(D,ha)|0;a=a+c(T,N)|0;b=b+c(T,ha)|0;p=p+c(A,O)|0;a=a+c(A,ia)|0;a=a+c(K,O)|0;b=b+c(K,ia)|0;p=p+c(C,P)|0;a=a+c(C,ja)|0;a=a+c(B,P)|0;b=b+c(B,ja)|0;var Aa=(y+p|0)+((a&8191)<<13)|0;y=(b+(a>>>13)|0)+(Aa>>>26)|0;Aa&=67108863;p=c(H,ca);a=c(H,da);a=a+c(aa,ca)|0;b=c(aa,da);p=p+c(G,L)|0;a=a+c(G,ea)|0;a=a+c(Z,L)|0;b=b+c(Z,ea)|0;p=p+c(F,M)|0;a=a+c(F,
fa)|0;a=a+c(Y,M)|0;b=b+c(Y,fa)|0;p=p+c(E,N)|0;a=a+c(E,ha)|0;a=a+c(X,N)|0;b=b+c(X,ha)|0;p=p+c(D,O)|0;a=a+c(D,ia)|0;a=a+c(T,O)|0;b=b+c(T,ia)|0;p=p+c(A,P)|0;a=a+c(A,ja)|0;a=a+c(K,P)|0;b=b+c(K,ja)|0;p=p+c(C,Q)|0;a=a+c(C,ka)|0;a=a+c(B,Q)|0;b=b+c(B,ka)|0;var Ba=(y+p|0)+((a&8191)<<13)|0;y=(b+(a>>>13)|0)+(Ba>>>26)|0;Ba&=67108863;p=c(I,ca);a=c(I,da);a=a+c(ba,ca)|0;b=c(ba,da);p=p+c(H,L)|0;a=a+c(H,ea)|0;a=a+c(aa,L)|0;b=b+c(aa,ea)|0;p=p+c(G,M)|0;a=a+c(G,fa)|0;a=a+c(Z,M)|0;b=b+c(Z,fa)|0;p=p+c(F,N)|0;a=a+c(F,ha)|
0;a=a+c(Y,N)|0;b=b+c(Y,ha)|0;p=p+c(E,O)|0;a=a+c(E,ia)|0;a=a+c(X,O)|0;b=b+c(X,ia)|0;p=p+c(D,P)|0;a=a+c(D,ja)|0;a=a+c(T,P)|0;b=b+c(T,ja)|0;p=p+c(A,Q)|0;a=a+c(A,ka)|0;a=a+c(K,Q)|0;b=b+c(K,ka)|0;p=p+c(C,R)|0;a=a+c(C,la)|0;a=a+c(B,R)|0;b=b+c(B,la)|0;var Ca=(y+p|0)+((a&8191)<<13)|0;y=(b+(a>>>13)|0)+(Ca>>>26)|0;Ca&=67108863;p=c(J,ca);a=c(J,da);a=a+c(U,ca)|0;b=c(U,da);p=p+c(I,L)|0;a=a+c(I,ea)|0;a=a+c(ba,L)|0;b=b+c(ba,ea)|0;p=p+c(H,M)|0;a=a+c(H,fa)|0;a=a+c(aa,M)|0;b=b+c(aa,fa)|0;p=p+c(G,N)|0;a=a+c(G,ha)|0;
a=a+c(Z,N)|0;b=b+c(Z,ha)|0;p=p+c(F,O)|0;a=a+c(F,ia)|0;a=a+c(Y,O)|0;b=b+c(Y,ia)|0;p=p+c(E,P)|0;a=a+c(E,ja)|0;a=a+c(X,P)|0;b=b+c(X,ja)|0;p=p+c(D,Q)|0;a=a+c(D,ka)|0;a=a+c(T,Q)|0;b=b+c(T,ka)|0;p=p+c(A,R)|0;a=a+c(A,la)|0;a=a+c(K,R)|0;b=b+c(K,la)|0;p=p+c(C,S)|0;a=a+c(C,W)|0;a=a+c(B,S)|0;b=b+c(B,W)|0;var Da=(y+p|0)+((a&8191)<<13)|0;y=(b+(a>>>13)|0)+(Da>>>26)|0;Da&=67108863;p=c(f,ca);a=c(f,da);a=a+c(V,ca)|0;b=c(V,da);p=p+c(J,L)|0;a=a+c(J,ea)|0;a=a+c(U,L)|0;b=b+c(U,ea)|0;p=p+c(I,M)|0;a=a+c(I,fa)|0;a=a+c(ba,
M)|0;b=b+c(ba,fa)|0;p=p+c(H,N)|0;a=a+c(H,ha)|0;a=a+c(aa,N)|0;b=b+c(aa,ha)|0;p=p+c(G,O)|0;a=a+c(G,ia)|0;a=a+c(Z,O)|0;b=b+c(Z,ia)|0;p=p+c(F,P)|0;a=a+c(F,ja)|0;a=a+c(Y,P)|0;b=b+c(Y,ja)|0;p=p+c(E,Q)|0;a=a+c(E,ka)|0;a=a+c(X,Q)|0;b=b+c(X,ka)|0;p=p+c(D,R)|0;a=a+c(D,la)|0;a=a+c(T,R)|0;b=b+c(T,la)|0;p=p+c(A,S)|0;a=a+c(A,W)|0;a=a+c(K,S)|0;b=b+c(K,W)|0;p=p+c(C,k)|0;a=a+c(C,na)|0;a=a+c(B,k)|0;b=b+c(B,na)|0;C=(y+p|0)+((a&8191)<<13)|0;y=(b+(a>>>13)|0)+(C>>>26)|0;C&=67108863;p=c(f,L);a=c(f,ea);a=a+c(V,L)|0;b=c(V,
ea);p=p+c(J,M)|0;a=a+c(J,fa)|0;a=a+c(U,M)|0;b=b+c(U,fa)|0;p=p+c(I,N)|0;a=a+c(I,ha)|0;a=a+c(ba,N)|0;b=b+c(ba,ha)|0;p=p+c(H,O)|0;a=a+c(H,ia)|0;a=a+c(aa,O)|0;b=b+c(aa,ia)|0;p=p+c(G,P)|0;a=a+c(G,ja)|0;a=a+c(Z,P)|0;b=b+c(Z,ja)|0;p=p+c(F,Q)|0;a=a+c(F,ka)|0;a=a+c(Y,Q)|0;b=b+c(Y,ka)|0;p=p+c(E,R)|0;a=a+c(E,la)|0;a=a+c(X,R)|0;b=b+c(X,la)|0;p=p+c(D,S)|0;a=a+c(D,W)|0;a=a+c(T,S)|0;b=b+c(T,W)|0;p=p+c(A,k)|0;a=a+c(A,na)|0;a=a+c(K,k)|0;b=b+c(K,na)|0;A=(y+p|0)+((a&8191)<<13)|0;y=(b+(a>>>13)|0)+(A>>>26)|0;A&=67108863;
p=c(f,M);a=c(f,fa);a=a+c(V,M)|0;b=c(V,fa);p=p+c(J,N)|0;a=a+c(J,ha)|0;a=a+c(U,N)|0;b=b+c(U,ha)|0;p=p+c(I,O)|0;a=a+c(I,ia)|0;a=a+c(ba,O)|0;b=b+c(ba,ia)|0;p=p+c(H,P)|0;a=a+c(H,ja)|0;a=a+c(aa,P)|0;b=b+c(aa,ja)|0;p=p+c(G,Q)|0;a=a+c(G,ka)|0;a=a+c(Z,Q)|0;b=b+c(Z,ka)|0;p=p+c(F,R)|0;a=a+c(F,la)|0;a=a+c(Y,R)|0;b=b+c(Y,la)|0;p=p+c(E,S)|0;a=a+c(E,W)|0;a=a+c(X,S)|0;b=b+c(X,W)|0;p=p+c(D,k)|0;a=a+c(D,na)|0;a=a+c(T,k)|0;b=b+c(T,na)|0;D=(y+p|0)+((a&8191)<<13)|0;y=(b+(a>>>13)|0)+(D>>>26)|0;D&=67108863;p=c(f,N);a=c(f,
ha);a=a+c(V,N)|0;b=c(V,ha);p=p+c(J,O)|0;a=a+c(J,ia)|0;a=a+c(U,O)|0;b=b+c(U,ia)|0;p=p+c(I,P)|0;a=a+c(I,ja)|0;a=a+c(ba,P)|0;b=b+c(ba,ja)|0;p=p+c(H,Q)|0;a=a+c(H,ka)|0;a=a+c(aa,Q)|0;b=b+c(aa,ka)|0;p=p+c(G,R)|0;a=a+c(G,la)|0;a=a+c(Z,R)|0;b=b+c(Z,la)|0;p=p+c(F,S)|0;a=a+c(F,W)|0;a=a+c(Y,S)|0;b=b+c(Y,W)|0;p=p+c(E,k)|0;a=a+c(E,na)|0;a=a+c(X,k)|0;b=b+c(X,na)|0;E=(y+p|0)+((a&8191)<<13)|0;y=(b+(a>>>13)|0)+(E>>>26)|0;E&=67108863;p=c(f,O);a=c(f,ia);a=a+c(V,O)|0;b=c(V,ia);p=p+c(J,P)|0;a=a+c(J,ja)|0;a=a+c(U,P)|0;
b=b+c(U,ja)|0;p=p+c(I,Q)|0;a=a+c(I,ka)|0;a=a+c(ba,Q)|0;b=b+c(ba,ka)|0;p=p+c(H,R)|0;a=a+c(H,la)|0;a=a+c(aa,R)|0;b=b+c(aa,la)|0;p=p+c(G,S)|0;a=a+c(G,W)|0;a=a+c(Z,S)|0;b=b+c(Z,W)|0;p=p+c(F,k)|0;a=a+c(F,na)|0;a=a+c(Y,k)|0;b=b+c(Y,na)|0;F=(y+p|0)+((a&8191)<<13)|0;y=(b+(a>>>13)|0)+(F>>>26)|0;F&=67108863;p=c(f,P);a=c(f,ja);a=a+c(V,P)|0;b=c(V,ja);p=p+c(J,Q)|0;a=a+c(J,ka)|0;a=a+c(U,Q)|0;b=b+c(U,ka)|0;p=p+c(I,R)|0;a=a+c(I,la)|0;a=a+c(ba,R)|0;b=b+c(ba,la)|0;p=p+c(H,S)|0;a=a+c(H,W)|0;a=a+c(aa,S)|0;b=b+c(aa,W)|
0;p=p+c(G,k)|0;a=a+c(G,na)|0;a=a+c(Z,k)|0;b=b+c(Z,na)|0;G=(y+p|0)+((a&8191)<<13)|0;y=(b+(a>>>13)|0)+(G>>>26)|0;G&=67108863;p=c(f,Q);a=c(f,ka);a=a+c(V,Q)|0;b=c(V,ka);p=p+c(J,R)|0;a=a+c(J,la)|0;a=a+c(U,R)|0;b=b+c(U,la)|0;p=p+c(I,S)|0;a=a+c(I,W)|0;a=a+c(ba,S)|0;b=b+c(ba,W)|0;p=p+c(H,k)|0;a=a+c(H,na)|0;a=a+c(aa,k)|0;b=b+c(aa,na)|0;H=(y+p|0)+((a&8191)<<13)|0;y=(b+(a>>>13)|0)+(H>>>26)|0;H&=67108863;p=c(f,R);a=c(f,la);a=a+c(V,R)|0;b=c(V,la);p=p+c(J,S)|0;a=a+c(J,W)|0;a=a+c(U,S)|0;b=b+c(U,W)|0;p=p+c(I,k)|
0;a=a+c(I,na)|0;a=a+c(ba,k)|0;b=b+c(ba,na)|0;I=(y+p|0)+((a&8191)<<13)|0;y=(b+(a>>>13)|0)+(I>>>26)|0;I&=67108863;p=c(f,S);a=c(f,W);a=a+c(V,S)|0;b=c(V,W);p=p+c(J,k)|0;a=a+c(J,na)|0;a=a+c(U,k)|0;b=b+c(U,na)|0;J=(y+p|0)+((a&8191)<<13)|0;y=(b+(a>>>13)|0)+(J>>>26)|0;J&=67108863;p=c(f,k);a=c(f,na);a=a+c(V,k)|0;b=c(V,na);B=(y+p|0)+((a&8191)<<13)|0;y=(b+(a>>>13)|0)+(B>>>26)|0;t[0]=va;t[1]=wa;t[2]=xa;t[3]=ya;t[4]=za;t[5]=Aa;t[6]=Ba;t[7]=Ca;t[8]=Da;t[9]=C;t[10]=A;t[11]=D;t[12]=E;t[13]=F;t[14]=G;t[15]=H;t[16]=
I;t[17]=J;t[18]=B&67108863;0!==y&&(t[19]=y,g.length++);return g}function w(a,b){if(!a)throw Error(b||"Assertion failed");}function h(a,b,g){if(h.vc(a))return a;this.b=0;this.a=null;this.length=0;this.red=null;if(null!==a){if("le"===b||"be"===b)g=b,b=10;this.pa(a||0,b||10,g||"be")}}function l(a,b,g){var f=0;for(g=Math.min(a.length,g);b<g;b++){var k=a.charCodeAt(b)-48;f<<=4;f=49<=k&&54>=k?f|k-49+10:17<=k&&22>=k?f|k-17+10:f|k&15}return f}function m(a,b,g){g.b=b.b^a.b;var f=a.length+b.length|0;g.length=
f;f=f-1|0;var k=a.a[0]|0,t=b.a[0]|0;k*=t;var y=k/67108864|0;g.a[0]=k&67108863;for(var A=1;A<f;A++){var C=y>>>26,B=y&67108863;y=Math.min(A,b.length-1);for(var D=Math.max(0,A-a.length+1);D<=y;D++)k=a.a[A-D|0]|0,t=b.a[D]|0,k=k*t+B,C+=k/67108864|0,B=k&67108863;g.a[A]=B|0;y=C|0}0!==y?g.a[A]=y|0:g.length--;return g.L()}function x(a,b){this.name=a;this.p=new h(b,16);this.n=this.p.U();this.k=(new h(1)).ua(this.n).i(this.p);this.Ab=this.cc()}function d(){x.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}
function u(a){"string"===typeof a?(a=h.P(a),this.G=a.p,this.ja=a):(w(a.Cd(1),"modulus must be greater than 1"),this.G=a,this.ja=null)}var e={}; true?e=h:undefined;h.Gb=h;h.Eb=26;h.vc=function(a){return a instanceof h?!0:null!==a&&"object"===typeof a&&a.constructor.Eb===h.Eb&&Array.isArray(a.a)};h.prototype.pa=function(a,b,g){if("number"===typeof a)this.Yb(a,g);else if("object"===typeof a)this.Ia(a,g);else{"hex"===b&&(b=16);w(b===(b|0)&&2<=b&&36>=b);a=a.toString().replace(/\s+/g,"");
var f=0;"-"===a[0]&&f++;16===b?this.bc(a,f):this.td(a,b,f);"-"===a[0]&&(this.b=1);this.L();"le"===g&&this.Ia(this.H(),g)}};h.prototype.Yb=function(a,b){0>a&&(this.b=1,a=-a);67108864>a?(this.a=[a&67108863],this.length=1):4503599627370496>a?(this.a=[a&67108863,a/67108864&67108863],this.length=2):(w(9007199254740992>a),this.a=[a&67108863,a/67108864&67108863,1],this.length=3);"le"===b&&this.Ia(this.H(),b)};h.prototype.Ia=function(a,b){w("number"===typeof a.length);if(0>=a.length)this.a=[0],this.length=
1;else{this.length=Math.ceil(a.length/3);this.a=Array(this.length);for(var g=0;g<this.length;g++)this.a[g]=0;var f=0;if("be"===b)for(g=a.length-1,b=0;0<=g;g-=3){var k=a[g]|a[g-1]<<8|a[g-2]<<16;this.a[b]|=k<<f&67108863;this.a[b+1]=k>>>26-f&67108863;f+=24;26<=f&&(f-=26,b++)}else if("le"===b)for(b=g=0;g<a.length;g+=3)k=a[g]|a[g+1]<<8|a[g+2]<<16,this.a[b]|=k<<f&67108863,this.a[b+1]=k>>>26-f&67108863,f+=24,26<=f&&(f-=26,b++);this.L()}};h.prototype.bc=function(a,b){this.length=Math.ceil((a.length-b)/6);
this.a=Array(this.length);for(var g=0;g<this.length;g++)this.a[g]=0;var f,k=0;g=a.length-6;for(f=0;g>=b;g-=6){var t=l(a,g,g+6);this.a[f]|=t<<k&67108863;this.a[f+1]|=t>>>26-k&4194303;k+=24;26<=k&&(k-=26,f++)}g+6!==b&&(t=l(a,b,g+6),this.a[f]|=t<<k&67108863,this.a[f+1]|=t>>>26-k&4194303);this.L()};h.prototype.qc=function(a){a.a=Array(this.length);for(var b=0;b<this.length;b++)a.a[b]=this.a[b];a.length=this.length;a.b=this.b;a.red=this.red};h.prototype.clone=function(){var a=new h(null);this.qc(a);return a};
h.prototype.Rb=function(a){for(;this.length<a;)this.a[this.length++]=0};h.prototype.L=function(){for(;1<this.length&&0===this.a[this.length-1];)this.length--;return this.qa()};h.prototype.qa=function(){1===this.length&&0===this.a[0]&&(this.b=0);return this};var n=" 0 00 000 0000 00000 000000 0000000 00000000 000000000 0000000000 00000000000 000000000000 0000000000000 00000000000000 000000000000000 0000000000000000 00000000000000000 000000000000000000 0000000000000000000 00000000000000000000 000000000000000000000 0000000000000000000000 00000000000000000000000 000000000000000000000000 0000000000000000000000000".split(" "),
v=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],r=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1E7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64E6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243E5,28629151,33554432,39135393,45435424,52521875,60466176];h.prototype.toString=function(a,b){a=a||10;b=b|0||1;if(16===a||"hex"===a){var g="";for(var f=a=0,k=0;k<this.length;k++){var t=
this.a[k],y=((t<<a|f)&16777215).toString(16);f=t>>>24-a&16777215;g=0!==f||k!==this.length-1?n[6-y.length]+y+g:y+g;a+=2;26<=a&&(a-=26,k--)}for(0!==f&&(g=f.toString(16)+g);0!==g.length%b;)g="0"+g;0!==this.b&&(g="-"+g);return g}if(a===(a|0)&&2<=a&&36>=a){f=v[a];k=r[a];g="";t=this.clone();for(t.b=0;!t.w();)y=t.Da(k).toString(a),t=t.Dd(k),g=t.w()?y+g:n[f-y.length]+y+g;for(this.w()&&(g="0"+g);0!==g.length%b;)g="0"+g;0!==this.b&&(g="-"+g);return g}w(!1,"Base should be between 2 and 36")};h.prototype.H=function(a,
b){return this.hd(a,b)};h.prototype.hd=function(a,b){var g=Array,f=this.byteLength();b=b||Math.max(1,f);w(f<=b,"byte array longer than desired length");w(0<b,"Requested array length <= 0");this.L();var k="le"===a;g=new g(b);a=this.clone();if(k){for(k=0;!a.w();k++)f=a.T(255),a.j(8),g[k]=f;for(;k<b;k++)g[k]=0}else{for(k=0;k<b-f;k++)g[k]=0;for(k=0;!a.w();k++)f=a.T(255),a.j(8),g[b-k-1]=f}return g};h.prototype.fb=Math.clz32?function(a){return 32-Math.clz32(a)}:function(a){var b=0;4096<=a&&(b+=13,a>>>=
13);64<=a&&(b+=7,a>>>=7);8<=a&&(b+=4,a>>>=4);2<=a&&(b+=2,a>>>=2);return b+a};h.prototype.U=function(){return 26*(this.length-1)+this.fb(this.a[this.length-1])};h.prototype.byteLength=function(){return Math.ceil(this.U()/8)};h.prototype.l=function(){return this.clone().Pa()};h.prototype.Pa=function(){this.w()||(this.b^=1);return this};h.prototype.B=function(a){if(0!==this.b&&0===a.b)return this.b=0,this.i(a),this.b^=1,this.qa();if(0===this.b&&0!==a.b){a.b=0;var b=this.i(a);a.b=1;return b.qa()}if(this.length>
a.length)var g=this;else g=a,a=this;for(var f=b=0;f<a.length;f++)b=(g.a[f]|0)+(a.a[f]|0)+b,this.a[f]=b&67108863,b>>>=26;for(;0!==b&&f<g.length;f++)b=(g.a[f]|0)+b,this.a[f]=b&67108863,b>>>=26;this.length=g.length;if(0!==b)this.a[this.length]=b,this.length++;else if(g!==this)for(;f<g.length;f++)this.a[f]=g.a[f];return this};h.prototype.add=function(a){if(0!==a.b&&0===this.b){a.b=0;var b=this.sub(a);a.b^=1;return b}return 0===a.b&&0!==this.b?(this.b=0,b=a.sub(this),this.b=1,b):this.length>a.length?this.clone().B(a):
a.clone().B(this)};h.prototype.i=function(a){if(0!==a.b){a.b=0;var b=this.B(a);a.b=1;return b.qa()}if(0!==this.b)return this.b=0,this.B(a),this.b=1,this.qa();b=this.cmp(a);if(0===b)return this.b=0,this.length=1,this.a[0]=0,this;if(0<b)var g=this;else g=a,a=this;for(var f=0,k=0;k<a.length;k++)b=(g.a[k]|0)-(a.a[k]|0)+f,f=b>>26,this.a[k]=b&67108863;for(;0!==f&&k<g.length;k++)b=(g.a[k]|0)+f,f=b>>26,this.a[k]=b&67108863;if(0===f&&k<g.length&&g!==this)for(;k<g.length;k++)this.a[k]=g.a[k];this.length=Math.max(this.length,
k);g!==this&&(this.b=1);return this.L()};h.prototype.sub=function(a){return this.clone().i(a)};var c=Math.imul;Math.imul||(q=m);h.prototype.Oc=function(a,b){var g=this.length+a.length;if(10===this.length&&10===a.length)a=q(this,a,b);else if(63>g)a=m(this,a,b);else throw"removed";return a};h.prototype.o=function(a){var b=new h(null);b.a=Array(this.length+a.length);return this.Oc(a,b)};h.prototype.ua=function(a){w("number"===typeof a&&0<=a);var b=a%26;a=(a-b)/26;var g=67108863>>>26-b<<26-b,f;if(0!==
b){var k=0;for(f=0;f<this.length;f++){var t=this.a[f]&g;this.a[f]=(this.a[f]|0)-t<<b|k;k=t>>>26-b}k&&(this.a[f]=k,this.length++)}if(0!==a){for(f=this.length-1;0<=f;f--)this.a[f+a]=this.a[f];for(f=0;f<a;f++)this.a[f]=0;this.length+=a}return this.L()};h.prototype.j=function(a){w("number"===typeof a&&0<=a);var b=a%26,g=Math.min((a-b)/26,this.length),f=67108863^67108863>>>b<<b;var k=Math.max(0,-g);if(0!==g)if(this.length>g)for(this.length-=g,a=0;a<this.length;a++)this.a[a]=this.a[a+g];else this.a[0]=
0,this.length=1;g=0;for(a=this.length-1;0<=a&&(0!==g||a>=k);a--){var t=this.a[a]|0;this.a[a]=g<<26-b|t>>>b;g=t&f}0===this.length&&(this.a[0]=0,this.length=1);return this.L()};h.prototype.ld=function(a){return this.clone().ua(a)};h.prototype.ab=function(a){return this.clone().j(a)};h.prototype.Na=function(a){w("number"===typeof a);w(67108864>a);if(0>a)return this.Ca(-a);if(0!==this.b){if(1===this.length&&(this.a[0]|0)<a)return this.a[0]=a-(this.a[0]|0),this.b=0,this;this.b=0;this.Ca(a);this.b=1;return this}return this.Wb(a)};
h.prototype.Wb=function(a){this.a[0]+=a;for(a=0;a<this.length&&67108864<=this.a[a];a++)this.a[a]-=67108864,a===this.length-1?this.a[a+1]=1:this.a[a+1]++;this.length=Math.max(this.length,a+1);return this};h.prototype.Ca=function(a){w("number"===typeof a);w(67108864>a);if(0>a)return this.Na(-a);if(0!==this.b)return this.b=0,this.Na(a),this.b=1,this;this.a[0]-=a;if(1===this.length&&0>this.a[0])this.a[0]=-this.a[0],this.b=1;else for(a=0;a<this.length&&0>this.a[a];a++)this.a[a]+=67108864,--this.a[a+1];
return this.L()};h.prototype.Ja=function(a,b,g){var f;this.Rb(a.length+g);var k=0;for(f=0;f<a.length;f++){var t=(this.a[f+g]|0)+k;k=(a.a[f]|0)*b;t-=k&67108863;k=(t>>26)-(k/67108864|0);this.a[f+g]=t&67108863}for(;f<this.length-g;f++)t=(this.a[f+g]|0)+k,k=t>>26,this.a[f+g]=t&67108863;if(0===k)return this.L();w(-1===k);for(f=k=0;f<this.length;f++)t=-(this.a[f]|0)+k,k=t>>26,this.a[f]=t&67108863;this.b=1;return this.L()};h.prototype.ic=function(a,b){var g=this.clone(),f=a,k=f.a[f.length-1]|0;a=26-this.fb(k);
0!==a&&(f=f.ld(a),g.ua(a),k=f.a[f.length-1]|0);var t=g.length-f.length;if("mod"!==b){var y=new h(null);y.length=t+1;y.a=Array(y.length);for(var A=0;A<y.length;A++)y.a[A]=0}A=g.clone().Ja(f,1,t);0===A.b&&(g=A,y&&(y.a[t]=1));for(--t;0<=t;t--){A=67108864*(g.a[f.length+t]|0)+(g.a[f.length+t-1]|0);A=Math.min(A/k|0,67108863);for(g.Ja(f,A,t);0!==g.b;)A--,g.b=0,g.Ja(f,1,t),g.w()||(g.b^=1);y&&(y.a[t]=A)}y&&y.L();g.L();"div"!==b&&0!==a&&g.j(a);return{u:y||null,J:g}};h.prototype.ga=function(a,b,g){w(!a.w());
if(this.w())return{u:new h(0),J:new h(0)};var f;if(0!==this.b&&0===a.b){var k=this.l().ga(a,b);"mod"!==b&&(f=k.u.l());if("div"!==b){var t=k.J.l();g&&0!==t.b&&t.B(a)}return{u:f,J:t}}return 0===this.b&&0!==a.b?(k=this.ga(a.l(),b),"mod"!==b&&(f=k.u.l()),{u:f,J:k.J}):0!==(this.b&a.b)?(k=this.l().ga(a.l(),b),"div"!==b&&(t=k.J.l(),g&&0!==t.b&&t.i(a)),{u:k.u,J:t}):a.length>this.length||0>this.cmp(a)?{u:new h(0),J:this}:1===a.length?"div"===b?{u:this.sc(a.a[0]),J:null}:"mod"===b?{u:null,J:new h(this.Da(a.a[0]))}:
{u:this.sc(a.a[0]),J:new h(this.Da(a.a[0]))}:this.ic(a,b)};h.prototype.u=function(a){return this.ga(a,"div",!1).u};h.prototype.S=function(a){return this.ga(a,"mod",!0).J};h.prototype.mb=function(a){var b=this.ga(a);if(b.J.w())return b.u;var g=0!==b.u.b?b.J.i(a):b.J,f=a.ab(1);a=a.T(1);g=g.cmp(f);return 0>g||1===a&&0===g?b.u:0!==b.u.b?b.u.Ca(1):b.u.Na(1)};h.prototype.Da=function(a){w(67108863>=a);for(var b=67108864%a,g=0,f=this.length-1;0<=f;f--)g=(b*g+(this.a[f]|0))%a;return g};h.prototype.tc=function(a){w(0===
a.b);w(!a.w());var b=this,g=a.clone();b=0!==b.b?b.S(a):b.clone();a=new h(1);for(var f=new h(0),k=new h(0),t=new h(1),y=0;b.Ra()&&g.Ra();)b.j(1),g.j(1),++y;for(var A=g.clone(),C=b.clone();!b.w();){for(var B=0,D=1;0===(b.a[0]&D)&&26>B;++B,D<<=1);if(0<B)for(b.j(B);0<B--;){if(a.Y()||f.Y())a.B(A),f.i(C);a.j(1);f.j(1)}B=0;for(D=1;0===(g.a[0]&D)&&26>B;++B,D<<=1);if(0<B)for(g.j(B);0<B--;){if(k.Y()||t.Y())k.B(A),t.i(C);k.j(1);t.j(1)}0<=b.cmp(g)?(b.i(g),a.i(k),f.i(t)):(g.i(b),k.i(a),t.i(f))}return{I:k,M:t,
Bd:g.ua(y)}};h.prototype.Zb=function(a){w(0===a.b);w(!a.w());var b=this,g=a.clone();b=0!==b.b?b.S(a):b.clone();for(var f=new h(1),k=new h(0),t=g.clone();0<b.m(1)&&0<g.m(1);){for(var y=0,A=1;0===(b.a[0]&A)&&26>y;++y,A<<=1);if(0<y)for(b.j(y);0<y--;)f.Y()&&f.B(t),f.j(1);y=0;for(A=1;0===(g.a[0]&A)&&26>y;++y,A<<=1);if(0<y)for(g.j(y);0<y--;)k.Y()&&k.B(t),k.j(1);0<=b.cmp(g)?(b.i(g),f.i(k)):(g.i(b),k.i(f))}b=0===b.m(1)?f:k;0>b.m(0)&&b.B(a);return b};h.prototype.Ba=function(a){return this.tc(a).I.S(a)};h.prototype.Ra=
function(){return 0===(this.a[0]&1)};h.prototype.Y=function(){return 1===(this.a[0]&1)};h.prototype.T=function(a){return this.a[0]&a};h.prototype.w=function(){return 1===this.length&&0===this.a[0]};h.prototype.m=function(a){var b=0>a;if(0!==this.b&&!b)return-1;if(0===this.b&&b)return 1;this.L();1<this.length?a=1:(b&&(a=-a),w(67108863>=a,"Number is too big"),b=this.a[0]|0,a=b===a?0:b<a?-1:1);return 0!==this.b?-a|0:a};h.prototype.cmp=function(a){if(0!==this.b&&0===a.b)return-1;if(0===this.b&&0!==a.b)return 1;
a=this.Db(a);return 0!==this.b?-a|0:a};h.prototype.Db=function(a){if(this.length>a.length)return 1;if(this.length<a.length)return-1;for(var b=0,g=this.length-1;0<=g;g--){var f=this.a[g]|0,k=a.a[g]|0;if(f!==k){f<k?b=-1:f>k&&(b=1);break}}return b};h.red=function(a){return new u(a)};h.prototype.A=function(a){w(!this.red,"Already a number in reduction context");w(0===this.b,"red works only with positives");return a.pc(this).ea(a)};h.prototype.ta=function(){w(this.red,"fromRed works only with numbers in reduction context");
return this.red.oc(this)};h.prototype.ea=function(a){this.red=a;return this};h.prototype.$=function(a){w(this.red,"redAdd works only with red numbers");return this.red.add(this,a)};h.prototype.s=function(a){w(this.red,"redIAdd works only with red numbers");return this.red.B(this,a)};h.prototype.aa=function(a){w(this.red,"redSub works only with red numbers");return this.red.sub(this,a)};h.prototype.h=function(a){w(this.red,"redISub works only with red numbers");return this.red.i(this,a)};h.prototype.c=
function(a){w(this.red,"redMul works only with red numbers");this.red.fa(this,a);return this.red.o(this,a)};h.prototype.f=function(){w(this.red,"redSqr works only with red numbers");this.red.za(this);return this.red.yb(this)};h.prototype.Uc=function(){w(this.red,"redSqrt works only with red numbers");this.red.za(this);return this.red.sqrt(this)};h.prototype.Za=function(){w(this.red,"redInvm works only with red numbers");this.red.za(this);return this.red.Ba(this)};h.prototype.la=function(){w(this.red,
"redNeg works only with red numbers");this.red.za(this);return this.red.l(this)};var z={Fd:null,Kd:null,Jd:null,Ld:null};x.prototype.cc=function(){var a=new h(null);a.a=Array(Math.ceil(this.n/13));return a};x.prototype.Kc=function(a){do{this.split(a,this.Ab);a=this.Ic(a);a=a.B(this.Ab);var b=a.U()}while(b>this.n);b=b<this.n?-1:a.Db(this.p);0===b?(a.a[0]=0,a.length=1):0<b?a.i(this.p):a.L();return a};(function(a,b){function g(){}a.fd=b;g.prototype=b.prototype;a.prototype=new g;a.prototype.constructor=
a})(d,x);d.prototype.split=function(a,b){for(var g=Math.min(a.length,9),f=0;f<g;f++)b.a[f]=a.a[f];b.length=g;if(9>=a.length)a.a[0]=0,a.length=1;else{g=a.a[9];b.a[b.length++]=g&4194303;for(f=10;f<a.length;f++)b=a.a[f]|0,a.a[f-10]=(b&4194303)<<4|g>>>22,g=b;g>>>=22;a.a[f-10]=g;a.length=0===g&&10<a.length?a.length-10:a.length-9}};d.prototype.Ic=function(a){a.a[a.length]=0;a.a[a.length+1]=0;a.length+=2;for(var b=0,g=0;g<a.length;g++){var f=a.a[g]|0;b+=977*f;a.a[g]=b&67108863;b=64*f+(b/67108864|0)}0===
a.a[a.length-1]&&(a.length--,0===a.a[a.length-1]&&a.length--);return a};h.P=function(a){if(z[a])return z[a];var b=new d;return z[a]=b};u.prototype.za=function(a){w(0===a.b,"red works only with positives");w(a.red,"red works only with red numbers")};u.prototype.fa=function(a,b){w(0===(a.b|b.b),"red works only with positives");w(a.red&&a.red===b.red,"red works only with red numbers")};u.prototype.Oa=function(a){return this.ja?this.ja.Kc(a).ea(this):a.S(this.G).ea(this)};u.prototype.l=function(a){return a.w()?
a.clone():this.G.sub(a).ea(this)};u.prototype.add=function(a,b){this.fa(a,b);a=a.add(b);0<=a.cmp(this.G)&&a.i(this.G);return a.ea(this)};u.prototype.B=function(a,b){this.fa(a,b);a=a.B(b);0<=a.cmp(this.G)&&a.i(this.G);return a};u.prototype.sub=function(a,b){this.fa(a,b);a=a.sub(b);0>a.m(0)&&a.B(this.G);return a.ea(this)};u.prototype.i=function(a,b){this.fa(a,b);a=a.i(b);0>a.m(0)&&a.B(this.G);return a};u.prototype.o=function(a,b){this.fa(a,b);return this.Oa(a.o(b))};u.prototype.yb=function(a){return this.o(a,
a)};u.prototype.sqrt=function(a){if(a.w())return a.clone();var b=this.G.T(3);w(1===b%2);if(3===b)return b=this.G.add(new h(1)).j(2),this.pow(a,b);for(var g=this.G.bd(1),f=0;!g.w()&&0===g.T(1);)f++,g.j(1);w(!g.w());b=(new h(1)).A(this);var k=b.la(),t=this.G.bd(1).j(1),y=this.G.U();for(y=(new h(2*y*y)).A(this);0!==this.pow(y,t).cmp(k);)y.s(k);t=this.pow(y,g);k=this.pow(a,g.wd(1).j(1));a=this.pow(a,g);for(g=f;0!==a.cmp(b);){y=a;for(f=0;0!==y.cmp(b);f++)y=y.f();w(f<g);t=this.pow(t,(new h(1)).ua(g-f-1));
k=k.c(t);t=t.f();a=a.c(t);g=f}return k};u.prototype.Ba=function(a){a=a.Zb(this.G);return 0!==a.b?(a.b=0,this.Oa(a).la()):this.Oa(a)};u.prototype.pow=function(a,b){if(b.w())return(new h(1)).A(this);if(0===b.m(1))return a.clone();var g=Array(16);g[0]=(new h(1)).A(this);g[1]=a;for(var f=2;f<g.length;f++)g[f]=this.o(g[f-1],a);a=g[0];var k=0,t=0,y=b.U()%26;0===y&&(y=26);for(f=b.length-1;0<=f;f--){var A=b.a[f];for(--y;0<=y;y--){var C=A>>y&1;a!==g[0]&&(a=this.yb(a));if(0===C&&0===k)t=0;else if(k<<=1,k|=
C,t++,4===t||0===f&&0===y)a=this.o(a,g[k]),k=t=0}y=26}return a};u.prototype.pc=function(a){var b=a.S(this.G);return b===a?b.clone():b};u.prototype.oc=function(a){a=a.clone();a.red=null;return a};return e}),Ia=Fa(function(){function q(){}function w(l){return l.length>>>1}var h={};h.Ib=q;h.pd=50;q.P=!0;h.Gd=q.P?2147483647:1073741823;q.from=function(l,m){var x=null,d=w(l,m)|0;if((q.P?2147483647:1073741823)<d)throw new RangeError("Invalid typed array length");q.P?(x=new Uint8Array(d),x.__proto__=q.prototype):
(null===x&&(x=new q(d)),x.length=d);l=x.write(l,m);l!==d&&(x=x.slice(0,l));return x};q.P&&(q.prototype.__proto__=Uint8Array.prototype,q.__proto__=Uint8Array,sa(),sa(),sa(),"undefined"!==typeof Symbol&&Symbol.species&&q[Symbol.species]===q&&(sa(),Object.defineProperty(q,Symbol.species,{value:null,configurable:!0})));q.isBuffer=function(l){return!(null==l||!l.$b)};q.byteLength=w;q.prototype.$b=!0;q.prototype.write=function(l){var m=this.length;var x=Number(0)||0;var d=this.length-x;m?(m=Number(m),m>
d&&(m=d)):m=d;d=l.length;if(0!==d%2)throw new TypeError("Invalid hex string");m>d/2&&(m=d/2);for(d=0;d<m;++d){var u=parseInt(l.substr(2*d,2),16);if(isNaN(u))break;this[x+d]=u}return d};return h}),Ja=Fa(function(){function q(w,h){if(!w)throw Error(h||"Assertion failed");}q.P=function(){};return q}),La=Fa(function(){var q={};Ha();var w=Ja(),h=Ka();q.assert=w;q.H=h.H;q.Fb=h.Fb;q.Bb=h.Bb;q.encode=h.encode;q.Fc=function(l,m,x){x=Array(Math.max(l.U(),x)+1);x.fill(0);m=1<<m+1;l=l.clone();for(var d=0;d<x.length;d++){var u,
e=l.T(m-1);l.Y()?(e>(m>>1)-1?u=(m>>1)-e:u=e,l.Ca(u)):u=0;x[d]=u;l.j(1)}return x};q.Ec=function(l,m){var x=[[],[]];l=l.clone();m=m.clone();for(var d=0,u=0;0<l.m(-d)||0<m.m(-u);){var e=l.T(3)+d&3,n=m.T(3)+u&3;3===e&&(e=-1);3===n&&(n=-1);if(0===(e&1))var v=0;else{var r=l.T(7)+d&7;v=3!==r&&5!==r||2!==n?e:-e}x[0].push(v);0===(n&1)?e=0:(r=m.T(7)+u&7,e=3!==r&&5!==r||2!==e?n:-n);x[1].push(e);2*d===v+1&&(d=1-d);2*u===e+1&&(u=1-u);l.j(1);m.j(1)}return x};q.Nd=function(){};q.Ed=function(){};return q}),Ma=Fa(function(){var q=
{},w=Ja(),h=Ga();q.Jc=h;q.H=function(l,m){if(Array.isArray(l))return l.slice();if(!l)return[];var x=[];if("string"===typeof l)if(!m)for(var d=m=0;d<l.length;d++){var u=l.charCodeAt(d);128>u?x[m++]=u:(2048>u?x[m++]=u>>6|192:(x[m++]=u>>12|224,x[m++]=u>>6&63|128),x[m++]=u&63|128)}else{if("hex"===m)for(l=l.replace(/[^a-z0-9]+/ig,""),0!==l.length%2&&(l="0"+l),d=0;d<l.length;d+=2)x.push(parseInt(l[d]+l[d+1],16))}else for(d=0;d<l.length;d++)x[d]=l[d]|0;return x};q.Lc=function(l,m,x){m-=0;w(0===m%4);m=Array(m/
4);for(var d=0,u=0;d<m.length;d++,u+=4)m[d]=("big"===x?l[u]<<24|l[u+1]<<16|l[u+2]<<8|l[u+3]:l[u+3]<<24|l[u+2]<<16|l[u+1]<<8|l[u])>>>0;return m};q.ad=function(l){for(var m=Array(4*l.length),x=0,d=0;x<l.length;x++,d+=4){var u=l[x];m[d]=u>>>24;m[d+1]=u>>>16&255;m[d+2]=u>>>8&255;m[d+3]=u&255}return m};q.Vc=function(l,m){return l>>>m|l<<32-m};q.cd=function(l,m){return l+m>>>0};q.dd=function(l,m,x,d){return l+m+x+d>>>0};q.ed=function(l,m,x,d,u){return l+m+x+d+u>>>0};return q}),Na=Fa(function(){function q(h,
l){return l.length===2*h+2?l:q(h,"0x0"+l.slice(2))}var w={};return w={length:function(h){return(h.length-2)/2},flatten:function(h){return"0x"+h.reduce(function(l,m){return l+m.slice(2)},"")},slice:function(h,l,m){return"0x"+m.slice(2*h+2,2*l+2)},tb:q,xc:function(h){h=h.toString(16);return 0===h.length%2?"0x"+h:"0x0"+h},jd:function(h){return parseInt(h.slice(2),16)},pb:function(h){return"0x0"===h?"0x":0===h.length%2?h:"0x0"+h.slice(2)},Qd:function(h){return"0"===h[2]?"0x"+h.slice(3):h}}}),Oa=Fa(function(){function q(){this.pending=
null;this.Ya=0;this.X=this.constructor.X;this.va=this.constructor.va;this.Ma=this.constructor.Ma;this.ia=this.constructor.ia/8;this.nb="big";this.Ha=this.X/8;this.Lb=this.X/32}var w={},h=Ma(),l=Ja();w.Hb=q;q.prototype.update=function(m,x){m=h.H(m,x);this.pending?this.pending=this.pending.concat(m):this.pending=m;this.Ya+=m.length;if(this.pending.length>=this.Ha)for(m=this.pending,x=m.length%this.Ha,this.pending=m.slice(m.length-x,m.length),0===this.pending.length&&(this.pending=null),m=h.Lc(m,m.length-
x,this.nb),x=0;x<m.length;x+=this.Lb)this.ra(m,x);return this};q.prototype.digest=function(m){this.update(this.ac());l(null===this.pending);return this.Mb(m)};q.prototype.ac=function(){var m=this.Ya,x=this.Ha,d=x-(m+this.ia)%x;x=Array(d+this.ia);x[0]=128;for(var u=1;u<d;u++)x[u]=0;m<<=3;if("big"===this.nb){for(d=8;d<this.ia;d++)x[u++]=0;x[u++]=0;x[u++]=0;x[u++]=0;x[u++]=0;x[u++]=m>>>24&255;x[u++]=m>>>16&255;x[u++]=m>>>8&255;x[u++]=m&255}else for(x[u++]=m&255,x[u++]=m>>>8&255,x[u++]=m>>>16&255,x[u++]=
m>>>24&255,x[u++]=0,x[u++]=0,x[u++]=0,x[u++]=0,d=8;d<this.ia;d++)x[u++]=0;return x};return w}),Pa=Fa(function(){function q(d){var u;for(u=0;48>u;u+=2){var e=d[0]^d[10]^d[20]^d[30]^d[40];var n=d[1]^d[11]^d[21]^d[31]^d[41];var v=d[2]^d[12]^d[22]^d[32]^d[42];var r=d[3]^d[13]^d[23]^d[33]^d[43];var c=d[4]^d[14]^d[24]^d[34]^d[44];var z=d[5]^d[15]^d[25]^d[35]^d[45];var a=d[6]^d[16]^d[26]^d[36]^d[46];var b=d[7]^d[17]^d[27]^d[37]^d[47];var g=d[8]^d[18]^d[28]^d[38]^d[48];var f=d[9]^d[19]^d[29]^d[39]^d[49];
var k=g^(v<<1|r>>>31);var t=f^(r<<1|v>>>31);d[0]^=k;d[1]^=t;d[10]^=k;d[11]^=t;d[20]^=k;d[21]^=t;d[30]^=k;d[31]^=t;d[40]^=k;d[41]^=t;k=e^(c<<1|z>>>31);t=n^(z<<1|c>>>31);d[2]^=k;d[3]^=t;d[12]^=k;d[13]^=t;d[22]^=k;d[23]^=t;d[32]^=k;d[33]^=t;d[42]^=k;d[43]^=t;k=v^(a<<1|b>>>31);t=r^(b<<1|a>>>31);d[4]^=k;d[5]^=t;d[14]^=k;d[15]^=t;d[24]^=k;d[25]^=t;d[34]^=k;d[35]^=t;d[44]^=k;d[45]^=t;k=c^(g<<1|f>>>31);t=z^(f<<1|g>>>31);d[6]^=k;d[7]^=t;d[16]^=k;d[17]^=t;d[26]^=k;d[27]^=t;d[36]^=k;d[37]^=t;d[46]^=k;d[47]^=
t;k=a^(e<<1|n>>>31);t=b^(n<<1|e>>>31);d[8]^=k;d[9]^=t;d[18]^=k;d[19]^=t;d[28]^=k;d[29]^=t;d[38]^=k;d[39]^=t;d[48]^=k;d[49]^=t;k=d[0];t=d[1];var y=d[11]<<4|d[10]>>>28;var A=d[10]<<4|d[11]>>>28;var C=d[20]<<3|d[21]>>>29;var B=d[21]<<3|d[20]>>>29;var D=d[31]<<9|d[30]>>>23;var K=d[30]<<9|d[31]>>>23;var E=d[40]<<18|d[41]>>>14;var T=d[41]<<18|d[40]>>>14;var F=d[2]<<1|d[3]>>>31;var X=d[3]<<1|d[2]>>>31;e=d[13]<<12|d[12]>>>20;n=d[12]<<12|d[13]>>>20;var G=d[22]<<10|d[23]>>>22;var Y=d[23]<<10|d[22]>>>22;var H=
d[33]<<13|d[32]>>>19;var Z=d[32]<<13|d[33]>>>19;var I=d[42]<<2|d[43]>>>30;var aa=d[43]<<2|d[42]>>>30;var J=d[5]<<30|d[4]>>>2;var ba=d[4]<<30|d[5]>>>2;var U=d[14]<<6|d[15]>>>26;var V=d[15]<<6|d[14]>>>26;v=d[25]<<11|d[24]>>>21;r=d[24]<<11|d[25]>>>21;var L=d[34]<<15|d[35]>>>17;var ca=d[35]<<15|d[34]>>>17;var da=d[45]<<29|d[44]>>>3;var M=d[44]<<29|d[45]>>>3;g=d[6]<<28|d[7]>>>4;f=d[7]<<28|d[6]>>>4;var ea=d[17]<<23|d[16]>>>9;var N=d[16]<<23|d[17]>>>9;var fa=d[26]<<25|d[27]>>>7;var O=d[27]<<25|d[26]>>>7;
c=d[36]<<21|d[37]>>>11;z=d[37]<<21|d[36]>>>11;var ha=d[47]<<24|d[46]>>>8;var P=d[46]<<24|d[47]>>>8;var ia=d[8]<<27|d[9]>>>5;var Q=d[9]<<27|d[8]>>>5;var ja=d[18]<<20|d[19]>>>12;var R=d[19]<<20|d[18]>>>12;var ka=d[29]<<7|d[28]>>>25;var S=d[28]<<7|d[29]>>>25;var la=d[38]<<8|d[39]>>>24;var W=d[39]<<8|d[38]>>>24;a=d[48]<<14|d[49]>>>18;b=d[49]<<14|d[48]>>>18;d[0]=k^~e&v;d[1]=t^~n&r;d[10]=g^~ja&C;d[11]=f^~R&B;d[20]=F^~U&fa;d[21]=X^~V&O;d[30]=ia^~y&G;d[31]=Q^~A&Y;d[40]=J^~ea&ka;d[41]=ba^~N&S;d[2]=e^~v&c;
d[3]=n^~r&z;d[12]=ja^~C&H;d[13]=R^~B&Z;d[22]=U^~fa&la;d[23]=V^~O&W;d[32]=y^~G&L;d[33]=A^~Y&ca;d[42]=ea^~ka&D;d[43]=N^~S&K;d[4]=v^~c&a;d[5]=r^~z&b;d[14]=C^~H&da;d[15]=B^~Z&M;d[24]=fa^~la&E;d[25]=O^~W&T;d[34]=G^~L&ha;d[35]=Y^~ca&P;d[44]=ka^~D&I;d[45]=S^~K&aa;d[6]=c^~a&k;d[7]=z^~b&t;d[16]=H^~da&g;d[17]=Z^~M&f;d[26]=la^~E&F;d[27]=W^~T&X;d[36]=L^~ha&ia;d[37]=ca^~P&Q;d[46]=D^~I&J;d[47]=K^~aa&ba;d[8]=a^~k&e;d[9]=b^~t&n;d[18]=da^~g&ja;d[19]=M^~f&R;d[28]=E^~F&U;d[29]=T^~X&V;d[38]=ha^~ia&y;d[39]=P^~Q&A;d[48]=
I^~J&ea;d[49]=aa^~ba&N;d[0]^=x[u];d[1]^=x[u+1]}}var w={},h="0123456789abcdef".split(""),l=[1,256,65536,16777216],m=[0,8,16,24],x=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648];return w={rb:function(d){return function(u,
e){var n,v;if("0x"!==u.slice(0,2)||(void 0===e?0:e))var r=u;else for(r=[],e=2,v=u.length;e<v;e+=2)r.push(parseInt(u.slice(e,e+2),16));v=[0,0,0,0,0,0,0,0,0,0];var c=!0;var z=n=0;u=1600-(d<<1)>>5;e=d>>5;v=v.concat(v,v,v,v);var a=void 0;for(var b=r,g=b.length,f=[],k=u<<2,t=0;t<g;){if(c)for(c=!1,f[0]=n,r=1;r<u+1;++r)f[r]=0;if("string"!==typeof b)for(r=z;t<g&&r<k;++t)f[r>>2]|=b[t]<<m[r++&3];else for(r=z;t<g&&r<k;++t)z=b.charCodeAt(t),128>z?f[r>>2]|=z<<m[r++&3]:(2048>z?f[r>>2]|=(192|z>>6)<<m[r++&3]:(55296>
z||57344<=z?f[r>>2]|=(224|z>>12)<<m[r++&3]:(z=65536+((z&1023)<<10|b.charCodeAt(++t)&1023),f[r>>2]|=(240|z>>18)<<m[r++&3],f[r>>2]|=(128|z>>12&63)<<m[r++&3]),f[r>>2]|=(128|z>>6&63)<<m[r++&3]),f[r>>2]|=(128|z&63)<<m[r++&3]);a=r;if(r>=k){z=r-k;n=f[u];for(r=0;r<u;++r)v[r]^=f[r];q(v);c=!0}else z=r}r=a;f[r>>2]|=l[r&3];if(a===k)for(f[0]=f[u],r=1;r<u+1;++r)f[r]=0;f[u-1]|=2147483648;for(r=0;r<u;++r)v[r]^=f[r];q(v);c="";for(n=0;n<e;){for(r=0;r<u&&n<e;++r,++n)z=v[r],c+=h[z>>4&15]+h[z&15]+h[z>>12&15]+h[z>>8&15]+
h[z>>20&15]+h[z>>16&15]+h[z>>28&15]+h[z>>24&15];0===n%u&&q(v)}return"0x"+c}}(256)}}),Sa=Fa(function(){var q={};q.md=La();q.yd=Qa();q.sa=Ra();return q}),Ta=Fa(function(){function q(u,e){this.type=u;this.p=new h(e.p,16);this.red=e.ja?h.red(e.ja):h.Hd(this.p);this.od=(new h(0)).A(this.red);this.Ea=(new h(1)).A(this.red);this.kd=(new h(2)).A(this.red);this.n=e.n&&new h(e.n,16);this.v=e.v&&this.Qc(e.v,e.Cc);this.dc=Array(4);this.ec=Array(4);this.fc=Array(4);this.hc=Array(4);this.Ga=this.n?this.n.U():0;
u=this.n&&this.p.u(this.n);!u||0<u.m(100)||this.n.A(this.red)}function w(u,e){this.curve=u;this.type=e;this.D=null}var h=Ha(),l=La(),m=l.Fc,x=l.Ec,d=l.assert;q.prototype.Sb=function(u,e){d(u.D);u=u.ib();var n=m(e,1,this.Ga),v=(1<<u.step+1)-(0===u.step%2?2:1);v/=3;for(var r=[],c=0;c<n.length;c+=u.step){for(var z=0,a=c+u.step-1;e>=c;e--)z=(z<<1)+n[a];r.push(z)}e=this.O(null,null,null);for(n=this.O(null,null,null);0<v;v--){for(c=0;c<r.length;c++)z=r[c],z===v?n=n.ca(u.C[c]):z===-v&&(n=n.ca(u.C[c].l()));
e=e.add(n)}return e.Cb()};q.prototype.lb=function(u,e,n,v){for(var r=this.dc,c=this.ec,z=this.fc,a=0,b=0;b<n;b++){var g=u[b],f=g.jb(1);r[b]=f.da;c[b]=f.C}for(b=n-1;1<=b;b-=2){var k=b-1,t=b;if(1!==r[k]||1!==r[t])z[k]=m(e[k],r[k],this.Ga),z[t]=m(e[t],r[t],this.Ga),a=Math.max(z[k].length,a),a=Math.max(z[t].length,a);else{var y=[u[k],null,null,u[t]];0===u[k].y.cmp(u[t].y)?(y[1]=u[k].add(u[t]),y[2]=u[k].xa().ca(u[t].l())):0===u[k].y.cmp(u[t].y.la())?(y[1]=u[k].xa().ca(u[t]),y[2]=u[k].add(u[t].l())):(y[1]=
u[k].xa().ca(u[t]),y[2]=u[k].xa().ca(u[t].l()));var A=[-3,-1,-5,-7,0,7,5,1,3],C=x(e[k],e[t]);a=Math.max(C[0].length,a);z[k]=Array(a);z[t]=Array(a);for(f=0;f<a;f++)z[k][f]=A[3*((C[0][f]|0)+1)+((C[1][f]|0)+1)],z[t][f]=0,c[k]=y}}u=this.O(null,null,null);e=this.hc;for(b=a;0<=b;b--){for(a=0;0<=b;){r=!0;for(f=0;f<n;f++)e[f]=z[f][b]|0,0!==e[f]&&(r=!1);if(!r)break;a++;b--}0<=b&&a++;u=u.rc(a);if(0>b)break;for(f=0;f<n;f++)a=e[f],0!==a&&(0<a?g=c[f][a-1>>1]:0>a&&(g=c[f][-a-1>>1].l()),u="affine"===g.type?u.ca(g):
u.add(g))}for(b=0;b<n;b++)c[b]=null;return v?u:u.Cb()};q.ya=w;w.prototype.cb=function(){return this.curve.cb(this)};w.prototype.Nb=function(u){var e=this.curve.p.byteLength(),n=this.qb().H("be",e);return u?[this.La().Ra()?2:3].concat(n):[4].concat(n,this.La().H("be",e))};w.prototype.encode=function(u,e){return l.encode(this.Nb(e),u)};w.prototype.Rc=function(u){if(!this.D){var e={F:null,K:null,beta:null};e.K=this.jb(8);e.F=this.ib(4,u);e.beta=this.hb();this.D=e}};w.prototype.Vb=function(u){if(!this.D)return!1;
var e=this.D.F;return e?e.C.length>=Math.ceil((u.U()+1)/e.step):!1};w.prototype.ib=function(u,e){if(this.D&&this.D.F)return this.D.F;for(var n=[this],v=this,r=0;r<e;r+=u){for(var c=0;c<u;c++)v=v.ba();n.push(v)}return{step:u,C:n}};w.prototype.jb=function(u){if(this.D&&this.D.K)return this.D.K;for(var e=[this],n=(1<<u)-1,v=1===n?null:this.ba(),r=1;r<n;r++)e[r]=e[r-1].add(v);return{da:u,C:e}};return q}),Qa=Fa(function(){function q(m){this.curve=new (Ua())(m);this.v=this.curve.v;this.n=this.curve.n;this.hash=
m.hash;l(this.v.cb(),"Invalid curve");l(this.v.o(this.n).R(),"Invalid curve, G*N != O")}var w={},h=Va(),l=La().assert;w.Jb=q;(function(m,x){Object.defineProperty(w,m,{configurable:!0,enumerable:!0,get:function(){var d=new q(x);Object.defineProperty(w,m,{configurable:!0,enumerable:!0,value:d});return d}})})("secp256k1",{type:"short",ja:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",I:"0",M:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
g:"1",hash:h.$a,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",Va:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",Aa:[{I:"3086d221a7d46bcde86c90e49284eb15",M:"-e4437ed6010e88286f547fa90abfe4c3"},{I:"114ca50f7a8e2f3f657c1108d9d44cfd8",M:"3086d221a7d46bcde86c90e49284eb15"}],Cc:!1,v:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",{}]});return w}),Va=Fa(function(){var q={};
q.md=Ma();q.xd=Oa();q.Yc={$a:Wa()};q.Hc=Xa();q.$a=q.Yc.$a;return q}),Ka=Fa(function(){function q(l){return 1===l.length?"0"+l:l}function w(l){for(var m="",x=0;x<l.length;x++)m+=q(l[x].toString(16));return m}var h={H:function(l,m){if(Array.isArray(l))return l.slice();if(!l)return[];var x=[];if("string"!==typeof l){for(m=0;m<l.length;m++)x[m]=l[m]|0;return x}if("hex"===m)for(l=l.replace(/[^a-z0-9]+/ig,""),0!==l.length%2&&(l="0"+l),m=0;m<l.length;m+=2)x.push(parseInt(l[m]+l[m+1],16));else for(m=0;m<
l.length;m++){var d=l.charCodeAt(m),u=d>>8;d&=255;u?x.push(u,d):x.push(d)}return x}};h.Fb=q;h.Bb=w;h.encode=function(l,m){return"hex"===m?w(l):l};return h}),Ya=Fa(function(){var q={},w=Ma().Vc;q.Ad=function(){};q.nc=function(h,l,m){return h&l^~h&m};q.Mc=function(h,l,m){return h&l^h&m^l&m};q.Md=function(){};q.Wc=function(h){return w(h,2)^w(h,13)^w(h,22)};q.Xc=function(h){return w(h,6)^w(h,11)^w(h,25)};q.Ac=function(h){return w(h,7)^w(h,18)^h>>>3};q.Bc=function(h){return w(h,17)^w(h,19)^h>>>10};return q}),
Wa=Fa(function(){function q(){if(!(this instanceof q))return new q;a.call(this);this.g=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];this.k=b;this.Kb=Array(64)}var w=Ma(),h=Oa(),l=Ya(),m=Ja(),x=w.cd,d=w.dd,u=w.ed,e=l.nc,n=l.Mc,v=l.Wc,r=l.Xc,c=l.Ac,z=l.Bc,a=h.Hb,b=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,
264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];w.Jc(q,
a);q.X=512;q.va=256;q.Ma=192;q.ia=64;q.prototype.ra=function(g,f){for(var k=this.Kb,t=0;16>t;t++)k[t]=g[f+t];for(;t<k.length;t++)k[t]=d(z(k[t-2]),k[t-7],c(k[t-15]),k[t-16]);g=this.g[0];f=this.g[1];var y=this.g[2],A=this.g[3],C=this.g[4],B=this.g[5],D=this.g[6],K=this.g[7];m(this.k.length===k.length);for(t=0;t<k.length;t++){var E=u(K,r(C),e(C,B,D),this.k[t],k[t]),T=x(v(g),n(g,f,y));K=D;D=B;B=C;C=x(A,E);A=y;y=f;f=g;g=x(E,T)}this.g[0]=x(this.g[0],g);this.g[1]=x(this.g[1],f);this.g[2]=x(this.g[2],y);
this.g[3]=x(this.g[3],A);this.g[4]=x(this.g[4],C);this.g[5]=x(this.g[5],B);this.g[6]=x(this.g[6],D);this.g[7]=x(this.g[7],K)};q.prototype.Mb=function(g){return"hex"===g?w.Pd(this.g,"big"):w.ad(this.g)};return q}),Ua=Fa(function(){function q(e){d.call(this,"short",e);this.I=(new m(e.I,16)).A(this.red);this.M=(new m(e.M,16)).A(this.red);this.gd=this.kd.Za();this.eb=0===this.I.ta().m(0);this.zb=0===this.I.ta().sub(this.p).m(-3);this.ha=this.Ub(e);this.Pb=Array(4);this.Qb=Array(4)}function w(e,n,v,r){d.ya.call(this,
e,"affine");null===n&&null===v?(this.y=this.x=null,this.V=!0):(this.x=new m(n,16),this.y=new m(v,16),r&&(this.x.wc(this.curve.red),this.y.wc(this.curve.red)),this.x.red||(this.x=this.x.A(this.curve.red)),this.y.red||(this.y=this.y.A(this.curve.red)),this.V=!1)}function h(e,n,v,r){d.ya.call(this,e,"jacobian");null===n&&null===v&&null===r?(this.y=this.x=this.curve.Ea,this.z=new m(0)):(this.x=new m(n,16),this.y=new m(v,16),this.z=new m(r,16));this.x.red||(this.x=this.x.A(this.curve.red));this.y.red||
(this.y=this.y.A(this.curve.red));this.z.red||(this.z=this.z.A(this.curve.red));this.nd=this.z===this.curve.Ea}var l={};l=La();var m=Ha(),x=Ga(),d=Ta(),u=l.assert;x(q,d);l=q;q.prototype.Ub=function(e){if(this.eb&&this.v&&this.n&&1===this.p.Da(3)){if(e.beta)var n=(new m(e.beta,16)).A(this.red);else n=this.Tb(this.p),n=0>n[0].cmp(n[1])?n[0]:n[1],n=n.A(this.red);if(e.Va)var v=new m(e.Va,16);else v=this.Tb(this.n),0===this.v.o(v[0]).x.cmp(this.v.x.c(n))?v=v[0]:(v=v[1],u(0===this.v.o(v).x.cmp(this.v.x.c(n))));
var r;e.Aa?r=e.Aa.map(function(c){return{I:new m(c.I,16),M:new m(c.M,16)}}):r=this.rd(v);return{beta:n,Va:v,Aa:r}}};q.prototype.Ob=function(e){var n=this.ha.Aa,v=n[0],r=n[1],c=r.M.o(e).mb(this.n),z=v.M.l().o(e).mb(this.n);n=c.o(v.I);var a=z.o(r.I);v=c.o(v.M);r=z.o(r.M);e=e.sub(n).sub(a);n=v.add(r).l();return{Sa:e,Ta:n}};q.prototype.wb=function(e,n){e=new m(e,16);e.red||(e=e.A(this.red));var v=e.f().c(e).s(e.c(this.I)).s(this.M),r=v.Uc();if(0!==r.f().aa(v).cmp(this.od))throw Error("invalid point");
v=r.ta().Y();if(n&&!v||!n&&v)r=r.la();return this.W(e,r)};q.prototype.cb=function(e){if(e.V)return!0;var n=e.x;e=e.y;var v=this.I.c(n);n=n.f().c(n).s(v).s(this.M);return 0===e.f().h(n).m(0)};q.prototype.gb=function(e,n){for(var v=this.Pb,r=this.Qb,c=0;c<e.length;c++){var z=this.Ob(n[c]),a=e[c],b=a.hb();z.Sa.b&&(z.Sa.Pa(),a=a.l(!0));z.Ta.b&&(z.Ta.Pa(),b=b.l(!0));v[2*c]=a;v[2*c+1]=b;r[2*c]=z.Sa;r[2*c+1]=z.Ta}e=this.lb(v,r,2*c,void 0);for(n=0;n<2*c;n++)v[n]=null,r[n]=null;return e};x(w,d.ya);q.prototype.W=
function(e,n,v){return new w(this,e,n,v)};q.prototype.Qc=function(e,n){return w.P(this,e,n)};w.prototype.hb=function(){if(this.curve.ha){var e=this.D;if(e&&e.beta)return e.beta;var n=this.curve.W(this.x.c(this.curve.ha.beta),this.y);if(e){var v=this.curve,r=function(c){return v.W(c.x.c(v.ha.beta),c.y)};e.beta=n;n.D={beta:null,K:e.K&&{da:e.K.da,C:e.K.C.map(r)},F:e.F&&{step:e.F.step,C:e.F.C.map(r)}}}return n}};w.prototype.toJSON=function(){};w.P=function(e,n,v){function r(z){return e.W(z[0],z[1],v)}
"string"===typeof n&&(n=JSON.parse(n));var c=e.W(n[0],n[1],v);if(!n[2])return c;n=n[2];c.D={beta:null,F:n.F&&{step:n.F.step,C:[c].concat(n.F.C.map(r))},K:n.K&&{da:n.K.da,C:[c].concat(n.K.C.map(r))}};return c};w.prototype.R=function(){return this.V};w.prototype.add=function(e){if(this.V)return e;if(e.V)return this;if(this.ob(e))return this.ba();if(this.l().ob(e)||0===this.x.cmp(e.x))return this.curve.W(null,null);var n=this.y.aa(e.y);0!==n.m(0)&&(n=n.c(this.x.aa(e.x).Za()));e=n.f().h(this.x).h(e.x);
n=n.c(this.x.aa(e)).h(this.y);return this.curve.W(e,n)};w.prototype.qb=function(){return this.x.ta()};w.prototype.La=function(){return this.y.ta()};w.prototype.o=function(e){e=new m(e,16);return this.R()?this:this.Vb(e)?this.curve.Sb(this,e):this.curve.ha?this.curve.gb([this],[e]):this.curve.vd(this,e)};w.prototype.Nc=function(e,n,v){n=[this,n];e=[e,v];return this.curve.ha?this.curve.gb(n,e):this.curve.lb(n,e,2)};w.prototype.ob=function(e){return this===e||this.V===e.V&&(this.V||0===this.x.cmp(e.x)&&
0===this.y.cmp(e.y))};w.prototype.l=function(e){if(this.V)return this;var n=this.curve.W(this.x,this.y.la());if(e&&this.D){e=this.D;var v=function(r){return r.l()};n.D={K:e.K&&{da:e.K.da,C:e.K.C.map(v)},F:e.F&&{step:e.F.step,C:e.F.C.map(v)}}}return n};w.prototype.xa=function(){return this.V?this.curve.O(null,null,null):this.curve.O(this.x,this.y,this.curve.Ea)};x(h,d.ya);q.prototype.O=function(e,n,v){return new h(this,e,n,v)};h.prototype.Cb=function(){if(this.R())return this.curve.W(null,null);var e=
this.z.Za(),n=e.f(),v=this.x.c(n);e=this.y.c(n).c(e);return this.curve.W(v,e)};h.prototype.l=function(){return this.curve.O(this.x,this.y.la(),this.z)};h.prototype.add=function(e){if(this.R())return e;if(e.R())return this;var n=e.z.f(),v=this.z.f(),r=this.x.c(n),c=e.x.c(v);n=this.y.c(n.c(e.z));v=e.y.c(v.c(this.z));c=r.aa(c);v=n.aa(v);if(0===c.m(0))return 0!==v.m(0)?this.curve.O(null,null,null):this.ba();var z=c.f(),a=z.c(c);z=r.c(z);r=v.f().s(a).h(z).h(z);n=v.c(z.h(r)).h(n.c(a));e=this.z.c(e.z).c(c);
return this.curve.O(r,n,e)};h.prototype.ca=function(e){if(this.R())return e.xa();if(e.R())return this;var n=this.z.f(),v=this.x,r=e.x.c(n),c=this.y;e=e.y.c(n).c(this.z);r=v.aa(r);e=c.aa(e);if(0===r.m(0))return 0!==e.m(0)?this.curve.O(null,null,null):this.ba();var z=r.f();n=z.c(r);z=v.c(z);v=e.f().s(n).h(z).h(z);c=e.c(z.h(v)).h(c.c(n));r=this.z.c(r);return this.curve.O(v,c,r)};h.prototype.rc=function(e){if(0===e||this.R())return this;if(!e)return this.ba();if(this.curve.eb||this.curve.zb){for(var n=
this,v=0;v<e;v++)n=n.ba();return n}n=this.curve.I;var r=this.curve.gd,c=this.x;v=this.y;var z=this.z,a=z.f().f(),b=v.$(v);for(v=0;v<e;v++){var g=c.f(),f=b.f(),k=f.f();g=g.$(g).s(g).s(n.c(a));f=c.c(f);c=g.f().h(f.$(f));f=f.h(c);g=g.c(f);g=g.s(g).h(k);z=b.c(z);v+1<e&&(a=a.c(k));b=g}return this.curve.O(c,b.c(r),z)};h.prototype.ba=function(){return this.R()?this:this.curve.eb?this.jc():this.curve.zb?this.ud():this.qd()};h.prototype.jc=function(){if(this.nd){var e=this.x.f();var n=this.y.f();var v=n.f();
n=this.x.$(n).f().h(e).h(v);n=n.s(n);e=e.$(e).s(e);var r=e.f().h(n).h(n),c=v.s(v);c=c.s(c);c=c.s(c);v=r;n=e.c(n.h(r)).h(c);e=this.y.$(this.y)}else e=this.x.f(),n=this.y.f(),v=n.f(),n=this.x.$(n).f().h(e).h(v),n=n.s(n),e=e.$(e).s(e),r=e.f(),c=v.s(v),c=c.s(c),c=c.s(c),v=r.h(n).h(n),n=e.c(n.h(v)).h(c),e=this.y.c(this.z),e=e.s(e);return this.curve.O(v,n,e)};h.prototype.R=function(){return 0===this.z.m(0)};return l}),Xa=Fa(function(){function q(l,m,x){if(!(this instanceof q))return new q(l,m,x);this.Fa=
l;this.X=l.X/8;this.va=l.va/8;this.Xa=this.Qa=null;this.pa(w.H(m,x))}var w=Ma(),h=Ja();q.prototype.pa=function(l){l.length>this.X&&(l=(new this.Fa).update(l).digest());h(l.length<=this.X);for(var m=l.length;m<this.X;m++)l.push(0);for(m=0;m<l.length;m++)l[m]^=54;this.Qa=(new this.Fa).update(l);for(m=0;m<l.length;m++)l[m]^=106;this.Xa=(new this.Fa).update(l)};q.prototype.update=function(l,m){this.Qa.update(l,m);return this};q.prototype.digest=function(l){this.Xa.update(this.Qa.digest());return this.Xa.digest(l)};
return q}),Ra=Fa(function(){function q(e){if(!(this instanceof q))return new q(e);"string"===typeof e&&(x(m.hasOwnProperty(e),"Unknown curve "+e),e=m[e]);e instanceof m.Jb&&(e={curve:e});this.curve=e.curve.curve;this.n=this.curve.n;this.Pc=this.n.ab(1);this.v=this.curve.v;this.v=e.curve.v;this.v.Rc(e.curve.n.U()+1);this.hash=e.hash||e.curve.hash}var w=Ha(),h=Za(),l=La(),m=Qa(),x=l.assert,d=$a(),u=ab();q.prototype.Ua=function(e,n){return d.yc(this,e,n)};q.prototype.kb=function(e,n){var v=8*e.byteLength()-
this.n.U();0<v&&(e=e.ab(v));return!n&&0<=e.cmp(this.n)?e.sub(this.n):e};q.prototype.sign=function(e,n,v,r){"object"===typeof v&&(r=v,v=null);r||(r={});n=this.Ua(n,v);e=this.kb(new w(e,16));var c=this.n.byteLength();v=n.Z.H("be",c);c=e.H("be",c);c=new h({hash:this.hash,uc:v,nonce:c,ub:r.ub,vb:r.vb||"utf8"});for(var z=this.n.sub(new w(1)),a=0;;a++){var b=r.k?r.k(a):new w(c.Dc(this.n.byteLength()));b=this.kb(b,!0);if(!(0>=b.m(1)||0<=b.cmp(z))){var g=this.v.o(b);if(!g.R()){var f=g.qb();v=f.S(this.n);
if(0!==v.m(0)&&(b=b.Ba(this.n).o(v.o(n.Z).B(e)),b=b.S(this.n),0!==b.m(0)))return e=(g.La().Y()?1:0)|(0!==f.cmp(v)?2:0),r.mc&&0<b.cmp(this.Pc)&&(b=this.n.sub(b),e^=1),new u({r:v,ma:b,wa:e})}}}};q.prototype.Tc=function(e,n,v){x((3&v)===v,"The recovery param is more than two bits");n=new u(n,void 0);var r=this.n,c=new w(e);e=n.r;var z=n.ma,a=v&1;v>>=1;if(0<=e.cmp(this.curve.p.S(this.curve.n))&&v)throw Error("Unable to find sencond key candinate");e=v?this.curve.wb(e.add(this.curve.n),a):this.curve.wb(e,
a);n=n.r.Ba(r);c=r.sub(c).o(n).S(r);r=z.o(n).S(r);return this.v.Nc(c,e,r)};return q}),Za=Fa(function(){function q(m){if(!(this instanceof q))return new q(m);this.hash=m.hash;this.sb=this.hash.va;this.Wa=m.Wa||this.hash.Ma;this.N=this.na=this.xb=this.Ka=null;var x=h.H(m.uc,m.zd||"hex"),d=h.H(m.nonce,m.Id||"hex");m=h.H(m.ub,m.vb||"hex");l(x.length>=this.Wa/8,"Not enough entropy. Minimum is: "+this.Wa+" bits");this.pa(x,d,m)}var w=Va(),h=Ka(),l=Ja();q.prototype.pa=function(m,x,d){m=m.concat(x).concat(d);
this.na=Array(this.sb/8);this.N=Array(this.sb/8);for(x=0;x<this.N.length;x++)this.na[x]=0,this.N[x]=1;this.ra(m);this.Ka=1;this.xb=281474976710656};q.prototype.oa=function(){return new w.Hc(this.hash,this.na)};q.prototype.ra=function(m){var x=this.oa().update(this.N).update([0]);m&&(x=x.update(m));this.na=x.digest();this.N=this.oa().update(this.N).digest();m&&(this.na=this.oa().update(this.N).update([1]).update(m).digest(),this.N=this.oa().update(this.N).digest())};q.prototype.Dc=function(m){if(this.Ka>
this.xb)throw Error("Reseed is required");if("string"!==typeof u){var x=d;var d=u;var u=null}d&&(d=h.H(d,x||"hex"),this.ra(d));for(x=[];x.length<m;)this.N=this.oa().update(this.N).digest(),x=x.concat(this.N);m=x.slice(0,m);this.ra(d);this.Ka++;return h.encode(m,u)};return q}),$a=Fa(function(){function q(h,l){this.sa=h;this.ka=this.Z=null;l.Z&&this.Xb(l.Z,l.Sc);l.ka&&this.sd(l.ka,l.Od)}var w=Ha();La();q.yc=function(h,l,m){return l instanceof q?l:new q(h,{Z:l,Sc:m})};q.prototype.Gc=function(){var h=
!1,l="hex";"string"===typeof h&&(l=h,h=null);this.ka||(this.ka=this.sa.v.o(this.Z));return l?this.ka.encode(l,h):this.ka};q.prototype.Xb=function(h,l){this.Z=new w(h,l||16);this.Z=this.Z.S(this.sa.curve.n)};q.prototype.sign=function(h,l,m){return this.sa.sign(h,this,l,m)};return q}),ab=Fa(function(){function q(l){if(l instanceof q)return l;h(l.r&&l.ma,"Signature without r or s");this.r=new w(l.r,16);this.ma=new w(l.ma,16);void 0===l.wa?this.wa=null:this.wa=l.wa}var w=Ha(),h=La().assert;return q}),
bb=Fa(function(){var q={};(function(w){function h(e){for(var n=d(e.slice(2)),v="0x",r=0;40>r;r++)v+=7<parseInt(n[r+2],16)?e[r+2].toUpperCase():e[r+2];return v}var l=Na(),m=Ha(),x=new (Sa().sa)("secp256k1"),d=Pa().rb,u={zc:function(e){e="0x"+("0x"===e.slice(0,2)?new m(e.slice(2),16):new m(e,10)).toString("hex");return"0x0"===e?"0x":e}};q={kc:h,lc:function(e){e=w.from(e.slice(2),"hex");e="0x"+x.Ua(e).Gc().slice(2);e=d(e);return h("0x"+e.slice(-40))},Zc:function(e,n,v){v=void 0===v?27:v;e=x.Ua(w.from(n.slice(2),
"hex")).sign(w.from(e.slice(2),"hex"),{mc:!0});v=[u.zc(l.xc(v+e.wa)),l.tb(32,l.pb("0x"+e.r.toString(16))),l.tb(32,l.pb("0x"+e.ma.toString(16)))];n=(e="undefined"!=typeof Symbol&&Symbol.iterator&&v[Symbol.iterator])?e.call(v):{next:oa(v)};v=n.next().value;e=n.next().value;n=n.next().value;return l.flatten([e,n,v])},$c:function(e,n){n=[l.slice(64,l.length(n),n),l.slice(0,32,n),l.slice(32,64,n)];n={bb:l.jd(n[0]),r:n[1].slice(2),ma:n[2].slice(2)};e="0x"+x.Tc(w.from(e.slice(2),"hex"),n,2>n.bb?n.bb:1-n.bb%
2).encode("hex",!1).slice(2);e=d(e);return h("0x"+e.slice(-40))}}}).call(ma,Ia().Ib);return q})();module.exports.addressChecksum=bb.kc;module.exports.addressFromKey=bb.lc;module.exports.signMessage=bb.Zc;module.exports.signerAddress=bb.$c;module.exports.keccak=Pa().rb;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).


var ERR_STREAM_PREMATURE_CLOSE = __webpack_require__(5).codes.ERR_STREAM_PREMATURE_CLOSE;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    callback.apply(this, args);
  };
}

function noop() {}

function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function eos(stream, opts, callback) {
  if (typeof opts === 'function') return eos(stream, null, opts);
  if (!opts) opts = {};
  callback = once(callback || noop);
  var readable = opts.readable || opts.readable !== false && stream.readable;
  var writable = opts.writable || opts.writable !== false && stream.writable;

  var onlegacyfinish = function onlegacyfinish() {
    if (!stream.writable) onfinish();
  };

  var writableEnded = stream._writableState && stream._writableState.finished;

  var onfinish = function onfinish() {
    writable = false;
    writableEnded = true;
    if (!readable) callback.call(stream);
  };

  var readableEnded = stream._readableState && stream._readableState.endEmitted;

  var onend = function onend() {
    readable = false;
    readableEnded = true;
    if (!writable) callback.call(stream);
  };

  var onerror = function onerror(err) {
    callback.call(stream, err);
  };

  var onclose = function onclose() {
    var err;

    if (readable && !readableEnded) {
      if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }

    if (writable && !writableEnded) {
      if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }
  };

  var onrequest = function onrequest() {
    stream.req.on('finish', onfinish);
  };

  if (isRequest(stream)) {
    stream.on('complete', onfinish);
    stream.on('abort', onclose);
    if (stream.req) onrequest();else stream.on('request', onrequest);
  } else if (writable && !stream._writableState) {
    // legacy streams
    stream.on('end', onlegacyfinish);
    stream.on('close', onlegacyfinish);
  }

  stream.on('end', onend);
  stream.on('finish', onfinish);
  if (opts.error !== false) stream.on('error', onerror);
  stream.on('close', onclose);
  return function () {
    stream.removeListener('complete', onfinish);
    stream.removeListener('abort', onclose);
    stream.removeListener('request', onrequest);
    if (stream.req) stream.req.removeListener('finish', onfinish);
    stream.removeListener('end', onlegacyfinish);
    stream.removeListener('close', onlegacyfinish);
    stream.removeListener('finish', onfinish);
    stream.removeListener('end', onend);
    stream.removeListener('error', onerror);
    stream.removeListener('close', onclose);
  };
}

module.exports = eos;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// PtrNum types
const PTR = 0;
const NUM = 1;

// Node types
const NOD = 0;
const OP1 = 1;
const OP2 = 2;
const ITE = 3;

// Base types
const Pointer = (addr, port) => ({typ: PTR, val: (addr << 2) + (port & 3)});
const addr_of = (ptrn) => ptrn.val >>> 2;
const slot_of = (ptrn) => ptrn.val & 3;
const Numeric = (numb) => ({typ: NUM, val: numb});
const numb_of = (ptrn) => ptrn.val;
const type_of = (ptrn) => ptrn.typ;
const ptrn_eq = (a, b) => a.typ === b.typ && a.val === b.val;
const ptrn_st = a => a.typ + ":" + a.val;

class Net {
  // A net stores nodes (this.nodes), reclaimable memory addrs (this.freed) and active pairs (this.redex)
  constructor() {
    this.nodes = []; // nodes
    this.freed = []; // integers
    this.redex = []; // array of (integer, integer) tuples representing addrs
    this.find_redex = true;
  }

  // Allocates a new node, return its addr
  alloc_node(type, kind) {

    // If there is reclaimable memory, use it
    if (this.freed.length > 0) {
      var addr = this.freed.pop();

    // Otherwise, extend the array of nodes
    } else {
      var addr = this.nodes.length / 4;
    }

    // Fill the memory with an empty node without pointers
    this.nodes[addr * 4 + 0] = addr * 4 + 0;
    this.nodes[addr * 4 + 1] = addr * 4 + 1;
    this.nodes[addr * 4 + 2] = addr * 4 + 2;
    this.nodes[addr * 4 + 3] = (kind << 6) + ((type & 0x7) << 3);
    return addr;
  }

  // Deallocates a node, allowing its space to be reclaimed
  free_node(addr) {
    this.nodes[addr * 4 + 0] = addr * 4 + 0;
    this.nodes[addr * 4 + 1] = addr * 4 + 1;
    this.nodes[addr * 4 + 2] = addr * 4 + 2;
    this.nodes[addr * 4 + 3] = 0;
    this.freed.push(addr);
  }

  is_free(addr) {
    return this.nodes[addr * 4 + 0] === addr * 4 + 0
        && this.nodes[addr * 4 + 1] === addr * 4 + 1
        && this.nodes[addr * 4 + 2] === addr * 4 + 2
        && this.nodes[addr * 4 + 3] === 0;
  }

  // Returns if given slot holds a number
  is_numeric(addr, slot) {
    return (this.nodes[addr * 4 + 3] >>> slot) & 1; 
  }

  set_port(addr, slot, ptrn) {
    if (type_of(ptrn) === NUM) {
      this.nodes[addr * 4 + slot] = numb_of(ptrn);
      this.nodes[addr * 4 + 3] = this.nodes[addr * 4 + 3] | (1 << slot);
    } else {
      this.nodes[addr * 4 + slot] = (addr_of(ptrn) << 2) + (slot_of(ptrn) & 3);
      this.nodes[addr * 4 + 3] = this.nodes[addr * 4 + 3] & ~(1 << slot);
    }
  }

  get_port(addr, slot) {
    var val = this.nodes[addr * 4 + slot];
    return !this.is_numeric(addr, slot) ? Pointer(val >>> 2, val & 3) : Numeric(val);
  }

  type_of(addr) {
    return (this.nodes[addr * 4 + 3] >>> 3) & 0x7;
  }

  set_type(addr, type) {
    this.nodes[addr * 4 + 3] = (this.nodes[addr * 4 + 3] & ~0b111000) | (type << 3);
  }

  kind_of(addr) {
    return this.nodes[addr * 4 + 3] >>> 6;
  }

  // Given a pointer to a port, returns a pointer to the opposing port
  enter_port(ptrn) {
    if (type_of(ptrn) === NUM) { 
      throw "Can't enter a numeric pointer.";
    } else {
      return this.get_port(addr_of(ptrn), slot_of(ptrn));
    }
  }

  // Connects two ports
  link_ports(a_ptrn, b_ptrn) {
    var a_numb = type_of(a_ptrn) === NUM;
    var b_numb = type_of(b_ptrn) === NUM;

    // Point ports to each-other
    if (!a_numb) this.set_port(addr_of(a_ptrn), slot_of(a_ptrn), b_ptrn);
    if (!b_numb) this.set_port(addr_of(b_ptrn), slot_of(b_ptrn), a_ptrn);

    // If both are main ports, add this to the list of active pairs
    if (this.find_redex && !(a_numb && b_numb) && (a_numb || slot_of(a_ptrn) === 0) && (b_numb || slot_of(b_ptrn) === 0)) {
      this.redex.push(a_numb ? addr_of(b_ptrn) : addr_of(a_ptrn));
    }
  }

  // Disconnects a port, causing both sides to point to themselves
  unlink_port(a_ptrn) {
    if (type_of(a_ptrn) === PTR) {
      var b_ptrn = this.enter_port(a_ptrn);
      if (type_of(b_ptrn) === PTR && ptrn_eq(this.enter_port(b_ptrn), a_ptrn)) {
        this.set_port(addr_of(a_ptrn), slot_of(a_ptrn), a_ptrn);
        this.set_port(addr_of(b_ptrn), slot_of(b_ptrn), b_ptrn);
      }
    }
  }

  // Rewrites an active pair
  rewrite(a_addr) {
    var a_ptrn = Pointer(a_addr, 0);
    var b_ptrn = this.get_port(a_addr, 0);
    if (type_of(b_ptrn) === NUM) {
      var a_type = this.type_of(a_addr);
      var a_kind = this.kind_of(a_addr);

      // UnaryOperation
      if (a_type === OP1) {
        var dst = this.enter_port(Pointer(a_addr, 2));
        var fst = numb_of(b_ptrn);
        var snd = numb_of(this.enter_port(Pointer(a_addr, 1)));
        switch (a_kind) {
          case  0: var res = Numeric(fst + snd); break;
          case  1: var res = Numeric(fst - snd); break;
          case  2: var res = Numeric(fst * snd); break;
          case  3: var res = Numeric(fst / snd); break;
          case  4: var res = Numeric(fst % snd); break;
          case  5: var res = Numeric(fst ** snd); break;
          case  6: var res = Numeric(fst & snd); break;
          case  7: var res = Numeric(fst | snd); break;
          case  8: var res = Numeric(fst ^ snd); break;
          case  9: var res = Numeric(~snd); break;
          case 10: var res = Numeric(fst >>> snd); break;
          case 11: var res = Numeric(fst << snd); break;
          case 12: var res = Numeric(fst > snd ? 1 : 0); break;
          case 13: var res = Numeric(fst < snd ? 1 : 0); break;
          case 14: var res = Numeric(fst === snd ? 1 : 0); break;
          default: throw "[ERROR]\nInvalid interaction.";
        }
        this.link_ports(dst, res);
        this.unlink_port(Pointer(a_addr, 0));
        this.unlink_port(Pointer(a_addr, 2));
        this.free_node(a_addr);
      
      // BinaryOperation
      } else if (a_type === OP2) {
        this.set_type(a_addr, OP1);
        this.link_ports(Pointer(a_addr, 0), this.enter_port(Pointer(a_addr, 1)));
        this.unlink_port(Pointer(a_addr, 1));
        this.link_ports(Pointer(a_addr, 1), b_ptrn);
    
      // NumberDuplication
      } else if (a_type === NOD) {
        this.link_ports(b_ptrn, this.enter_port(Pointer(a_addr, 1)));
        this.link_ports(b_ptrn, this.enter_port(Pointer(a_addr, 2)));
        this.free_node(a_addr);

      // IfThenElse
      } else if (a_type === ITE) {
        var cond_val = numb_of(b_ptrn) === 0;
        var pair_ptr = this.enter_port(Pointer(a_addr, 1));
        this.set_type(a_addr, NOD);
        this.link_ports(Pointer(a_addr, 0), pair_ptr);
        this.unlink_port(Pointer(a_addr, 1));
        var dest_ptr = this.enter_port(Pointer(a_addr, 2));
        this.link_ports(Pointer(a_addr, cond_val ? 2 : 1), dest_ptr);
        if (!cond_val) this.unlink_port(Pointer(a_addr, 2));
        this.link_ports(Pointer(a_addr, cond_val ? 1 : 2), Pointer(a_addr, cond_val ? 1 : 2));

      } else {
        throw "[ERROR]\nInvalid interaction.";
      }

    } else {
      var b_addr = addr_of(b_ptrn);
      var a_type = this.type_of(a_addr);
      var b_type = this.type_of(b_addr);
      var a_kind = this.kind_of(a_addr);
      var b_kind = this.kind_of(b_addr);

      // NodeAnnihilation, UnaryAnnihilation, BinaryAnnihilation
      if ( a_type === NOD && b_type === NOD && a_kind === b_kind
        || a_type === OP1 && b_type === OP1
        || a_type === OP2 && b_type === OP2
        || a_type === ITE && b_type === ITE) {
        var a_aux1_dest = this.enter_port(Pointer(a_addr, 1));
        var b_aux1_dest = this.enter_port(Pointer(b_addr, 1));
        this.link_ports(a_aux1_dest, b_aux1_dest);
        var a_aux2_dest = this.enter_port(Pointer(a_addr, 2));
        var b_aux2_dest = this.enter_port(Pointer(b_addr, 2));
        this.link_ports(a_aux2_dest, b_aux2_dest);
        for (var i = 0; i < 3; i++) {
          this.unlink_port(Pointer(a_addr, i));
          this.unlink_port(Pointer(b_addr, i));
        }
        this.free_node(a_addr);
        if (a_addr !== b_addr) {
          this.free_node(b_addr);
        }

      // NodeDuplication, BinaryDuplication
      } else if
        (  a_type === NOD && b_type === NOD && a_kind !== b_kind
        || a_type === NOD && b_type === OP2
        || a_type === NOD && b_type === ITE) {
        var p_addr = this.alloc_node(b_type, b_kind);
        var q_addr = this.alloc_node(b_type, b_kind);
        var r_addr = this.alloc_node(a_type, a_kind);
        var s_addr = this.alloc_node(a_type, a_kind);
        this.link_ports(Pointer(r_addr, 1), Pointer(p_addr, 1));
        this.link_ports(Pointer(s_addr, 1), Pointer(p_addr, 2));
        this.link_ports(Pointer(r_addr, 2), Pointer(q_addr, 1));
        this.link_ports(Pointer(s_addr, 2), Pointer(q_addr, 2));
        this.link_ports(Pointer(p_addr, 0), this.enter_port(Pointer(a_addr, 1)));
        this.link_ports(Pointer(q_addr, 0), this.enter_port(Pointer(a_addr, 2)));
        this.link_ports(Pointer(r_addr, 0), this.enter_port(Pointer(b_addr, 1)));
        this.link_ports(Pointer(s_addr, 0), this.enter_port(Pointer(b_addr, 2)));
        for (var i = 0; i < 3; i++) {
          this.unlink_port(Pointer(a_addr, i));
          this.unlink_port(Pointer(b_addr, i));
        }
        this.free_node(a_addr);
        if (a_addr !== b_addr) {
          this.free_node(b_addr);
        }

      // UnaryDuplication
      } else if
        (  a_type === NOD && b_type === OP1
        || a_type === ITE && b_type === OP1) {
        var p_addr = this.alloc_node(b_type, b_kind);
        var q_addr = this.alloc_node(b_type, b_kind);
        var s_addr = this.alloc_node(a_type, a_kind);
        this.link_ports(Pointer(p_addr, 1), this.enter_port(Pointer(b_addr, 1)));
        this.link_ports(Pointer(q_addr, 1), this.enter_port(Pointer(b_addr, 1)));
        this.link_ports(Pointer(s_addr, 1), Pointer(p_addr, 2));
        this.link_ports(Pointer(s_addr, 2), Pointer(q_addr, 2));
        this.link_ports(Pointer(p_addr, 0), this.enter_port(Pointer(a_addr, 1)));
        this.link_ports(Pointer(q_addr, 0), this.enter_port(Pointer(a_addr, 2)));
        this.link_ports(Pointer(s_addr, 0), this.enter_port(Pointer(b_addr, 2)));
        for (var i = 0; i < 3; i++) {
          this.unlink_port(Pointer(a_addr, i));
          this.unlink_port(Pointer(b_addr, i));
        }
        this.free_node(a_addr);
        if (a_addr !== b_addr) {
          this.free_node(b_addr);
        }
      
      // Permutations
      } else if (a_type === OP1 && b_type === NOD) {
        return this.rewrite(b_addr);
      } else if (a_type === OP2 && b_type === NOD) {
        return this.rewrite(b_addr);
      } else if (a_type === ITE && b_type === NOD) {
        return this.rewrite(b_addr);

      // InvalidInteraction
      } else {
        throw "[ERROR]\nInvalid interaction.";
      }
    }
  }

  // Rewrites active pairs until none is left, reducing the graph to normal form.
  // This could be performed in parallel and doesn't need GC.
  reduce_strict(stats = {mlen: 0, rwts:0, step:0}) {
    var rwts = 0;
    var mlen = 0;
    while (this.redex.length > 0) {
      for (var i = 0, l = this.redex.length; i < l; ++i) {
        this.rewrite(this.redex.pop());
        stats.mlen = Math.max(stats.mlen, this.nodes.length / 4);
        ++stats.rwts;
      }
      ++stats.step;
    }
    return stats;
  }

  // Rewrites active pairs until none is left, reducing the graph to normal form.
  // This avoids unecessary computations, but is sequential and would need GC.
  reduce_lazy(stats = {mlen: 0, rwts:0, step:0}) {
    this.find_redex = false;
    var warp = [];
    var back = [];
    var prev = Pointer(0, 1);
    var next = this.enter_port(prev);
    var rwts = 0;
    while (true) {
      ++stats.step;
      if (type_of(next) === PTR && (addr_of(next) === 0 || this.is_free(addr_of(next)))) {
        if (warp.length === 0) {
          break;
        } else {
          prev = warp.pop();
          next = this.enter_port(prev);
        }
      } else {
        if (slot_of(prev) === 0 && (type_of(next) === NUM || slot_of(next) === 0)) {
          try {
            this.rewrite(addr_of(prev));
          } catch (e) {
            return;
          }
          stats.rwts += 1;
          stats.mlen = Math.max(stats.mlen, this.nodes.length / 4);
          do { prev = back.pop(); } while (type_of(prev) !== PTR);
          next = this.enter_port(prev);
          ++rwts;
        } else if (type_of(next) === NUM) {
          [prev,next] = [next,prev];
        } else if (slot_of(next) === 0) {
          if (this.type_of(addr_of(next)) !== OP1) {
            warp.push(Pointer(addr_of(next), 1));
          }
          prev = Pointer(addr_of(next), 2);
          next = this.enter_port(prev);
        } else {
          back.push(prev);
          prev = Pointer(addr_of(next), 0);
          next = this.enter_port(prev);
        }
      }
    }
    this.find_redex = true;
    return stats;
  }

  // Returns a string that is preserved on reduction, good for debugging
  denote(ptrn = this.enter_port(Pointer(0, 1)), exit = []) {
    function path_to_string(path) {
      var str = "<";
      while (path) {
        str += path.head === 1 ? "a" : "b";
        path = path.tail; 
      }
      str += ">";
      return str;
    }
    while (true) {
      if (type_of(ptrn) === PTR) {
        var ai = addr_of(ptrn);
        var as = slot_of(ptrn)
        var ak = this.kind_of(ai);
        switch (this.type_of(ai)) {
          case NOD:
            if (slot_of(ptrn) === 0) {
              if (exit[ak]) {
                var new_exit = exit.slice(0);
                new_exit[ak] = new_exit[ak].tail;
                ptrn = this.enter_port(Pointer(ai, Number(exit[ak].head)));
                exit = new_exit;
                continue; // tail-call: denote(ptrn, exit)
              } else {
                var lft = this.denote(this.enter_port(Pointer(ai, 1)), exit);
                var rgt = this.denote(this.enter_port(Pointer(ai, 2)), exit);
                return "(" + ak + " " + lft + " " + rgt + ")";
              }
            } else {
              if (ai === 0) {
                while (exit[exit.length - 1] === null) exit.pop();
                return exit.map(path_to_string).join(":");
              } else {
                var new_exit = exit.slice(0);
                new_exit[ak] = {head: as, tail: new_exit[ak] || null};
                ptrn = this.enter_port(Pointer(ai, 0));
                exit = new_exit;
                continue; // tail-call: denote(ptrn, exit)
              }
            }
            break;
          default:
            return "<TODO>";
        }
      } else {
        return "#" + numb_of(ptrn);
      }
    }
  }

  to_string() {
    const pointer = (ptrn) => {
      if (type_of(ptrn) === NUM) {
        return "#" + numb_of(ptrn);
      } else {
        return addr_of(ptrn) + "abc"[slot_of(ptrn)];
      }
    };
    var text = '';
    for (var i = 0; i < this.nodes.length / 4; i++) {
      if (this.is_free(i)) {
        text += i + ": ~\n";
      } else {
        var type = this.type_of(i);
        var kind = this.kind_of(i);
        text += i + ': ';
        text += "[" + type + ":" + kind + "| ";
        text += pointer(this.get_port(i, 0)) + " ";
        text += pointer(this.get_port(i, 1)) + " ";
        text += pointer(this.get_port(i, 2)) + "]";
        text += " ... " + this.is_numeric(i,0) + " " + this.is_numeric(i,1) + " " + this.is_numeric(i,2);
        text += "\n";
      }
    }
    return text;
  }
}

module.exports = {Pointer, addr_of, slot_of, Numeric, numb_of, type_of, ptrn_eq, ptrn_st, Net, NUM, PTR, NOD, OP1, OP2, ITE};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(8)
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.prototype = Object.create(Buffer.prototype)

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


module.exports = Readable;
/*<replacement>*/

var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;
/*<replacement>*/

var EE = __webpack_require__(19).EventEmitter;

var EElistenerCount = function EElistenerCount(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/


var Stream = __webpack_require__(20);
/*</replacement>*/


var Buffer = __webpack_require__(8).Buffer;

var OurUint8Array = global.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*<replacement>*/


var debugUtil = __webpack_require__(57);

var debug;

if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function debug() {};
}
/*</replacement>*/


var BufferList = __webpack_require__(58);

var destroyImpl = __webpack_require__(21);

var _require = __webpack_require__(22),
    getHighWaterMark = _require.getHighWaterMark;

var _require$codes = __webpack_require__(5).codes,
    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
    ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT; // Lazy loaded to improve the startup performance.


var StringDecoder;
var createReadableStreamAsyncIterator;
var from;

__webpack_require__(9)(Readable, Stream);

var errorOrDestroy = destroyImpl.errorOrDestroy;
var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn); // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.

  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream, isDuplex) {
  Duplex = Duplex || __webpack_require__(6);
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.

  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"

  this.highWaterMark = getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex); // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()

  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false; // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.

  this.sync = true; // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.

  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;
  this.paused = true; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'end' (and potentially 'finish')

  this.autoDestroy = !!options.autoDestroy; // has it been destroyed

  this.destroyed = false; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // the number of writers that are awaiting a drain event in .pipe()s

  this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled

  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;

  if (options.encoding) {
    if (!StringDecoder) StringDecoder = __webpack_require__(24).StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || __webpack_require__(6);
  if (!(this instanceof Readable)) return new Readable(options); // Checking for a Stream.Duplex instance is faster here instead of inside
  // the ReadableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex;
  this._readableState = new ReadableState(options, this, isDuplex); // legacy

  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined) {
      return false;
    }

    return this._readableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
  }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;

Readable.prototype._destroy = function (err, cb) {
  cb(err);
}; // Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.


Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;

      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }

      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
}; // Unshift should *always* be something directly out of read()


Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  debug('readableAddChunk', chunk);
  var state = stream._readableState;

  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);

    if (er) {
      errorOrDestroy(stream, er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
      } else if (state.destroyed) {
        return false;
      } else {
        state.reading = false;

        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
      maybeReadMore(stream, state);
    }
  } // We can push more data if we are below the highWaterMark.
  // Also, if we have no data yet, we can stand some more bytes.
  // This is to work around cases where hwm=0, such as the repl.


  return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    state.awaitDrain = 0;
    stream.emit('data', chunk);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
    if (state.needReadable) emitReadable(stream);
  }

  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;

  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer', 'Uint8Array'], chunk);
  }

  return er;
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
}; // backwards compatibility.


Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = __webpack_require__(24).StringDecoder;
  var decoder = new StringDecoder(enc);
  this._readableState.decoder = decoder; // If setEncoding(null), decoder.encoding equals utf8

  this._readableState.encoding = this._readableState.decoder.encoding; // Iterate over current buffer to convert already stored Buffers:

  var p = this._readableState.buffer.head;
  var content = '';

  while (p !== null) {
    content += decoder.write(p.data);
    p = p.next;
  }

  this._readableState.buffer.clear();

  if (content !== '') this._readableState.buffer.push(content);
  this._readableState.length = content.length;
  return this;
}; // Don't raise the hwm > 1GB


var MAX_HWM = 0x40000000;

function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }

  return n;
} // This function is designed to be inlinable, so please take care when making
// changes to the function body.


function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;

  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  } // If we're asking for more than the current hwm, then raise the hwm.


  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n; // Don't have enough

  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }

  return state.length;
} // you can override either this method, or the async _read(n) below.


Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;
  if (n !== 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.

  if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.

  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  } // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.
  // if we need a readable event, then we need to do some reading.


  var doRead = state.needReadable;
  debug('need readable', doRead); // if we currently have less than the highWaterMark, then also read some

  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  } // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.


  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true; // if the length is currently zero, then we *need* a readable event.

    if (state.length === 0) state.needReadable = true; // call internal read method

    this._read(state.highWaterMark);

    state.sync = false; // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.

    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = state.length <= state.highWaterMark;
    n = 0;
  } else {
    state.length -= n;
    state.awaitDrain = 0;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.

    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);
  return ret;
};

function onEofChunk(stream, state) {
  debug('onEofChunk');
  if (state.ended) return;

  if (state.decoder) {
    var chunk = state.decoder.end();

    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }

  state.ended = true;

  if (state.sync) {
    // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    emitReadable(stream);
  } else {
    // emit 'readable' now to make sure it gets picked up.
    state.needReadable = false;

    if (!state.emittedReadable) {
      state.emittedReadable = true;
      emitReadable_(stream);
    }
  }
} // Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.


function emitReadable(stream) {
  var state = stream._readableState;
  debug('emitReadable', state.needReadable, state.emittedReadable);
  state.needReadable = false;

  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    process.nextTick(emitReadable_, stream);
  }
}

function emitReadable_(stream) {
  var state = stream._readableState;
  debug('emitReadable_', state.destroyed, state.length, state.ended);

  if (!state.destroyed && (state.length || state.ended)) {
    stream.emit('readable');
    state.emittedReadable = false;
  } // The stream needs another readable event if
  // 1. It is not flowing, as the flow mechanism will take
  //    care of it.
  // 2. It is not ended.
  // 3. It is below the highWaterMark, so we can schedule
  //    another readable later.


  state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
  flow(stream);
} // at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.


function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  // Attempt to read more data if we should.
  //
  // The conditions for reading more data are (one of):
  // - Not enough data buffered (state.length < state.highWaterMark). The loop
  //   is responsible for filling the buffer with enough data if such data
  //   is available. If highWaterMark is 0 and we are not in the flowing mode
  //   we should _not_ attempt to buffer any extra data. We'll get more data
  //   when the stream consumer calls read() instead.
  // - No data in the buffer, and the stream is in flowing mode. In this mode
  //   the loop below is responsible for ensuring read() is called. Failing to
  //   call read here would abort the flow and there's no other mechanism for
  //   continuing the flow if the stream consumer has just subscribed to the
  //   'data' event.
  //
  // In addition to the above conditions to keep reading data, the following
  // conditions prevent the data from being read:
  // - The stream has ended (state.ended).
  // - There is already a pending 'read' operation (state.reading). This is a
  //   case where the the stream has called the implementation defined _read()
  //   method, but they are processing the call asynchronously and have _not_
  //   called push() with new data. In this case we skip performing more
  //   read()s. The execution ends in this method again after the _read() ends
  //   up calling push() with more data.
  while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
    var len = state.length;
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length) // didn't get any data, stop spinning.
      break;
  }

  state.readingMore = false;
} // abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.


Readable.prototype._read = function (n) {
  errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED('_read()'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;

    case 1:
      state.pipes = [state.pipes, dest];
      break;

    default:
      state.pipes.push(dest);
      break;
  }

  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) process.nextTick(endFn);else src.once('end', endFn);
  dest.on('unpipe', onunpipe);

  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');

    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  } // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.


  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);
  var cleanedUp = false;

  function cleanup() {
    debug('cleanup'); // cleanup event handlers once the pipe is broken

    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);
    cleanedUp = true; // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.

    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  src.on('data', ondata);

  function ondata(chunk) {
    debug('ondata');
    var ret = dest.write(chunk);
    debug('dest.write', ret);

    if (ret === false) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', state.awaitDrain);
        state.awaitDrain++;
      }

      src.pause();
    }
  } // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.


  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er);
  } // Make sure our error handler is attached before userland ones.


  prependListener(dest, 'error', onerror); // Both close and finish should trigger unpipe, but only once.

  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }

  dest.once('close', onclose);

  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }

  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  } // tell the dest that it's being piped to


  dest.emit('pipe', src); // start the flow if it hasn't been started already.

  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function pipeOnDrainFunctionResult() {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;

    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = {
    hasUnpiped: false
  }; // if we're not piping anywhere, then do nothing.

  if (state.pipesCount === 0) return this; // just one destination.  most common case.

  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;
    if (!dest) dest = state.pipes; // got a match.

    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  } // slow case. multiple pipe destinations.


  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, {
        hasUnpiped: false
      });
    }

    return this;
  } // try to find the right one.


  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;
  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];
  dest.emit('unpipe', this, unpipeInfo);
  return this;
}; // set up data events if they are asked for
// Ensure readable listeners eventually get something


Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);
  var state = this._readableState;

  if (ev === 'data') {
    // update readableListening so that resume() may be a no-op
    // a few lines down. This is needed to support once('readable').
    state.readableListening = this.listenerCount('readable') > 0; // Try start flowing on next tick if stream isn't explicitly paused

    if (state.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.flowing = false;
      state.emittedReadable = false;
      debug('on readable', state.length, state.reading);

      if (state.length) {
        emitReadable(this);
      } else if (!state.reading) {
        process.nextTick(nReadingNextTick, this);
      }
    }
  }

  return res;
};

Readable.prototype.addListener = Readable.prototype.on;

Readable.prototype.removeListener = function (ev, fn) {
  var res = Stream.prototype.removeListener.call(this, ev, fn);

  if (ev === 'readable') {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

Readable.prototype.removeAllListeners = function (ev) {
  var res = Stream.prototype.removeAllListeners.apply(this, arguments);

  if (ev === 'readable' || ev === undefined) {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

function updateReadableListening(self) {
  var state = self._readableState;
  state.readableListening = self.listenerCount('readable') > 0;

  if (state.resumeScheduled && !state.paused) {
    // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state.flowing = true; // crude way to check if we should resume
  } else if (self.listenerCount('data') > 0) {
    self.resume();
  }
}

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
} // pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.


Readable.prototype.resume = function () {
  var state = this._readableState;

  if (!state.flowing) {
    debug('resume'); // we flow only if there is no one listening
    // for readable, but we still have to call
    // resume()

    state.flowing = !state.readableListening;
    resume(this, state);
  }

  state.paused = false;
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    process.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  debug('resume', state.reading);

  if (!state.reading) {
    stream.read(0);
  }

  state.resumeScheduled = false;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);

  if (this._readableState.flowing !== false) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }

  this._readableState.paused = true;
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);

  while (state.flowing && stream.read() !== null) {
    ;
  }
} // wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.


Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;
  stream.on('end', function () {
    debug('wrapped end');

    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });
  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode

    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);

    if (!ret) {
      paused = true;
      stream.pause();
    }
  }); // proxy all the other methods.
  // important when wrapping filters and duplexes.

  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function methodWrap(method) {
        return function methodWrapReturnFunction() {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  } // proxy certain important events.


  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  } // when we try to consume some more bytes, simply unpause the
  // underlying stream.


  this._read = function (n) {
    debug('wrapped _read', n);

    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

if (typeof Symbol === 'function') {
  Readable.prototype[Symbol.asyncIterator] = function () {
    if (createReadableStreamAsyncIterator === undefined) {
      createReadableStreamAsyncIterator = __webpack_require__(61);
    }

    return createReadableStreamAsyncIterator(this);
  };
}

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.highWaterMark;
  }
});
Object.defineProperty(Readable.prototype, 'readableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState && this._readableState.buffer;
  }
});
Object.defineProperty(Readable.prototype, 'readableFlowing', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.flowing;
  },
  set: function set(state) {
    if (this._readableState) {
      this._readableState.flowing = state;
    }
  }
}); // exposed for testing purposes only.

Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, 'readableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.length;
  }
}); // Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.

function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;
  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.first();else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = state.buffer.consume(n, state.decoder);
  }
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;
  debug('endReadable', state.endEmitted);

  if (!state.endEmitted) {
    state.ended = true;
    process.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  debug('endReadableNT', state.endEmitted, state.length); // Check that we didn't get one last unshift.

  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');

    if (state.autoDestroy) {
      // In case of duplex streams we need a way to detect
      // if the writable side is ready for autoDestroy as well
      var wState = stream._writableState;

      if (!wState || wState.autoDestroy && wState.finished) {
        stream.destroy();
      }
    }
  }
}

if (typeof Symbol === 'function') {
  Readable.from = function (iterable, opts) {
    if (from === undefined) {
      from = __webpack_require__(62);
    }

    return from(Readable, iterable, opts);
  };
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }

  return -1;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4), __webpack_require__(3)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19).EventEmitter;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) { // undocumented cb() API, needed for core, not for public API

function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err) {
      if (!this._writableState) {
        process.nextTick(emitErrorNT, this, err);
      } else if (!this._writableState.errorEmitted) {
        this._writableState.errorEmitted = true;
        process.nextTick(emitErrorNT, this, err);
      }
    }

    return this;
  } // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks


  if (this._readableState) {
    this._readableState.destroyed = true;
  } // if this is a duplex stream mark the writable part as destroyed as well


  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      if (!_this._writableState) {
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else if (!_this._writableState.errorEmitted) {
        _this._writableState.errorEmitted = true;
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else {
        process.nextTick(emitCloseNT, _this);
      }
    } else if (cb) {
      process.nextTick(emitCloseNT, _this);
      cb(err);
    } else {
      process.nextTick(emitCloseNT, _this);
    }
  });

  return this;
}

function emitErrorAndCloseNT(self, err) {
  emitErrorNT(self, err);
  emitCloseNT(self);
}

function emitCloseNT(self) {
  if (self._writableState && !self._writableState.emitClose) return;
  if (self._readableState && !self._readableState.emitClose) return;
  self.emit('close');
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finalCalled = false;
    this._writableState.prefinished = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

function errorOrDestroy(stream, err) {
  // We have tests that rely on errors being emitted
  // in the same tick, so changing this is semver major.
  // For now when you opt-in to autoDestroy we allow
  // the error to be emitted nextTick. In a future
  // semver major update we should change the default to this.
  var rState = stream._readableState;
  var wState = stream._writableState;
  if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);else stream.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy,
  errorOrDestroy: errorOrDestroy
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ERR_INVALID_OPT_VALUE = __webpack_require__(5).codes.ERR_INVALID_OPT_VALUE;

function highWaterMarkFrom(options, isDuplex, duplexKey) {
  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}

function getHighWaterMark(state, options, duplexKey, isDuplex) {
  var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);

  if (hwm != null) {
    if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
      var name = isDuplex ? duplexKey : 'highWaterMark';
      throw new ERR_INVALID_OPT_VALUE(name, hwm);
    }

    return Math.floor(hwm);
  } // Default value


  return state.objectMode ? 16 : 16 * 1024;
}

module.exports = {
  getHighWaterMark: getHighWaterMark
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.


module.exports = Writable;
/* <replacement> */

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
} // It seems a linked list but it is not
// there will be only 2 of these for each stream


function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/


var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;
/*<replacement>*/

var internalUtil = {
  deprecate: __webpack_require__(60)
};
/*</replacement>*/

/*<replacement>*/

var Stream = __webpack_require__(20);
/*</replacement>*/


var Buffer = __webpack_require__(8).Buffer;

var OurUint8Array = global.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

var destroyImpl = __webpack_require__(21);

var _require = __webpack_require__(22),
    getHighWaterMark = _require.getHighWaterMark;

var _require$codes = __webpack_require__(5).codes,
    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
    ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED,
    ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES,
    ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END,
    ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;

var errorOrDestroy = destroyImpl.errorOrDestroy;

__webpack_require__(9)(Writable, Stream);

function nop() {}

function WritableState(options, stream, isDuplex) {
  Duplex = Duplex || __webpack_require__(6);
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream,
  // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.

  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag to indicate whether or not this stream
  // contains buffers or objects.

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()

  this.highWaterMark = getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex); // if _final has been called

  this.finalCalled = false; // drain event flag.

  this.needDrain = false; // at the start of calling end()

  this.ending = false; // when end() has been called, and returned

  this.ended = false; // when 'finish' is emitted

  this.finished = false; // has it been destroyed

  this.destroyed = false; // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.

  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.

  this.length = 0; // a flag to see when we're in the middle of a write.

  this.writing = false; // when true all writes will be buffered until .uncork() call

  this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.

  this.sync = true; // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.

  this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)

  this.onwrite = function (er) {
    onwrite(stream, er);
  }; // the callback that the user supplies to write(chunk,encoding,cb)


  this.writecb = null; // the amount that is being written when _write is called.

  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted

  this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams

  this.prefinished = false; // True if the error was already emitted and should not be thrown again

  this.errorEmitted = false; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'finish' (and potentially 'end')

  this.autoDestroy = !!options.autoDestroy; // count buffered requests

  this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two

  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];

  while (current) {
    out.push(current);
    current = current.next;
  }

  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function writableStateBufferGetter() {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})(); // Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.


var realHasInstance;

if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function value(object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;
      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function realHasInstance(object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || __webpack_require__(6); // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.
  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  // Checking for a Stream.Duplex instance is faster here instead of inside
  // the WritableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex;
  if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
  this._writableState = new WritableState(options, this, isDuplex); // legacy.

  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;
    if (typeof options.writev === 'function') this._writev = options.writev;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
} // Otherwise people can pipe Writable streams, which is just wrong.


Writable.prototype.pipe = function () {
  errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
};

function writeAfterEnd(stream, cb) {
  var er = new ERR_STREAM_WRITE_AFTER_END(); // TODO: defer error events consistently everywhere, not just the cb

  errorOrDestroy(stream, er);
  process.nextTick(cb, er);
} // Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.


function validChunk(stream, state, chunk, cb) {
  var er;

  if (chunk === null) {
    er = new ERR_STREAM_NULL_VALUES();
  } else if (typeof chunk !== 'string' && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer'], chunk);
  }

  if (er) {
    errorOrDestroy(stream, er);
    process.nextTick(cb, er);
    return false;
  }

  return true;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
  if (typeof cb !== 'function') cb = nop;
  if (state.ending) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }
  return ret;
};

Writable.prototype.cork = function () {
  this._writableState.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;
    if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

Object.defineProperty(Writable.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }

  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
}); // if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.

function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);

    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }

  var len = state.objectMode ? 1 : chunk.length;
  state.length += len;
  var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.

  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };

    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }

    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED('write'));else if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    process.nextTick(cb, er); // this can emit finish, and it will always happen
    // after error

    process.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er); // this can emit finish, but finish must
    // always follow error

    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;
  if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK();
  onwriteStateUpdate(state);
  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state) || stream.destroyed;

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      process.nextTick(afterWrite, stream, state, finished, cb);
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
} // Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.


function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
} // if there's something in the buffer waiting, then process it


function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;
    var count = 0;
    var allBuffers = true;

    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }

    buffer.allBuffers = allBuffers;
    doWrite(stream, state, true, state.length, buffer, '', holder.finish); // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite

    state.pendingcb++;
    state.lastBufferedRequest = null;

    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }

    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;
      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--; // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.

      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_write()'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks

  if (state.corked) {
    state.corked = 1;
    this.uncork();
  } // ignore unnecessary end() calls.


  if (!state.ending) endWritable(this, state, cb);
  return this;
};

Object.defineProperty(Writable.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
});

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;

    if (err) {
      errorOrDestroy(stream, err);
    }

    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}

function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function' && !state.destroyed) {
      state.pendingcb++;
      state.finalCalled = true;
      process.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);

  if (need) {
    prefinish(stream, state);

    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');

      if (state.autoDestroy) {
        // In case of duplex streams we need a way to detect
        // if the readable side is ready for autoDestroy as well
        var rState = stream._readableState;

        if (!rState || rState.autoDestroy && rState.endEmitted) {
          stream.destroy();
        }
      }
    }
  }

  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);

  if (cb) {
    if (state.finished) process.nextTick(cb);else stream.once('finish', cb);
  }

  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;

  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  } // reuse the free corkReq.


  state.corkedRequestsFree.next = corkReq;
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._writableState === undefined) {
      return false;
    }

    return this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._writableState.destroyed = value;
  }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;

Writable.prototype._destroy = function (err, cb) {
  cb(err);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4), __webpack_require__(3)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var Buffer = __webpack_require__(17).Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.


module.exports = Transform;

var _require$codes = __webpack_require__(5).codes,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
    ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING,
    ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;

var Duplex = __webpack_require__(6);

__webpack_require__(9)(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;
  var cb = ts.writecb;

  if (cb === null) {
    return this.emit('error', new ERR_MULTIPLE_CALLBACK());
  }

  ts.writechunk = null;
  ts.writecb = null;
  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);
  cb(er);
  var rs = this._readableState;
  rs.reading = false;

  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);
  Duplex.call(this, options);
  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }; // start out asking for a readable event once data is transformed.

  this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.

  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;
    if (typeof options.flush === 'function') this._flush = options.flush;
  } // When the writable side finishes, then flush out anything remaining.


  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function' && !this._readableState.destroyed) {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
}; // This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.


Transform.prototype._transform = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;

  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
}; // Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.


Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && !ts.transforming) {
    ts.transforming = true;

    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);
  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data); // TODO(BridgeAR): Write a test for these two error cases
  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided

  if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
  if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
  return stream.push(null);
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27);
const logo = __webpack_require__(28).default;

const {Component, render} = __webpack_require__(0);
const h = __webpack_require__(1).h;

const front = __webpack_require__(2);
const Moonad = __webpack_require__(68);

window.onload = () => render(h(Moonad), document.getElementById("main"));


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "162ab1e6029db4beb906bb26c116458e.ttf");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "24ab2ffd0bab1405a3aebba574edc861.png");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// Term
// ====

const Var = (indx)                     => ({ctor:"Var",indx});
const Ref = (name)                     => ({ctor:"Ref",name});
const Typ = ()                         => ({ctor:"Typ"});
const All = (eras,self,name,bind,body) => ({ctor:"All",eras,self,name,bind,body});
const Lam = (eras,name,body)           => ({ctor:"Lam",eras,name,body});
const App = (eras,func,argm)           => ({ctor:"App",eras,func,argm});
const Let = (name,expr,body)           => ({ctor:"Let",name,expr,body});
const Ann = (done,expr,type)           => ({ctor:"Ann",done,expr,type});
const Loc = (from,upto,expr)           => ({ctor:"Loc",from,upto,expr});

// List
// ====

const Nil = ()          => ({ctor:"Nil",size: 0});
const Ext = (head,tail) => ({ctor:"Ext",head,tail,size:tail.size+1});

// Finds first value satisfying `cond` in a list
function find(list, cond, indx = 0) {
  switch (list.ctor) {
    case "Nil":
      return null;
    case "Ext":
      if (cond(list.head, indx)) {
        return {value:list.head, index:indx};
      } else {
        return find(list.tail, cond, indx + 1);
      };
  };
};

// Syntax
// ======

function stringify(term, depth = 0) {
  switch (term.ctor) {
    case "Var":
      return term.indx.split("#")[0];
    case "Ref":
      return term.name;
    case "Typ":
      return "*";
    case "All":
      var bind = term.eras ? "∀" : "Π";
      var self = term.self || ("x"+(depth+0));
      var name = term.name || ("x"+(depth+1));
      var type = stringify(term.bind, depth);
      var body = stringify(term.body(Var(self+"#"), Var(name+"#")), depth+2);
      return bind + self + "(" + name + ":" + type + ") " + body;
    case "Lam":
      var bind = term.eras ? "Λ" : "λ";
      var name = term.name || ("x"+(depth+0));
      var body = stringify(term.body(Var(name+"#")), depth);
      return bind + name + " " + body;
    case "App":
      var open = term.eras ? "<" : "(";
      var func = stringify(term.func, depth);
      var argm = stringify(term.argm, depth);
      var clos = term.eras ? ">" : ")";
      return open + func + " " + argm + clos;
    case "Let":
      var name = term.name || ("x"+(depth+0));
      var expr = stringify(term.expr, depth);
      var body = stringify(term.body(Var(name+"#")), depth+1);
      return "$" + name + "=" + expr + ";" + body;
    case "Ann":
      var type = stringify(term.type, depth);
      var expr = stringify(term.expr, depth);
      return ":" + type + " " + expr;
    case "Loc":
      return stringify(term.expr, depth);
  };
};

function parse(code, indx, mode = "defs") {
  function is_name(chr) {
    var val = chr.charCodeAt(0);
    return (val >= 46 && val < 47)   // .
        || (val >= 48 && val < 58)   // 0-9
        || (val >= 65 && val < 91)   // A-Z
        || (val >= 95 && val < 96)   // _
        || (val >= 97 && val < 123); // a-z
  };
  function parse_name() {
    if (indx < code.length && is_name(code[indx])) {
      return code[indx++] + parse_name();
    } else {
      return "";
    }
  };
  function parse_nuls() {
    while (code[indx] === " " || code[indx] === "\n") {
      ++indx;
    };
  };
  function parse_char(chr) {
    if (indx >= code.length) {
      throw "Unexpected eof.";
    } else if (code[indx] !== chr) {
      throw 'Expected "'+chr+'", found '+JSON.stringify(code[indx])+' at '+indx+'.';
    }
    ++indx;
  };
  function parse_term() {
    parse_nuls();
    var chr = code[indx++];
    switch (chr) {
      case "*":
        return ctx => Typ();
      case "∀":
      case "Π":
        var eras = chr === "∀";
        var self = parse_name();
        var skip = parse_char("(");
        var name = parse_name();
        var skip = parse_char(":");
        var bind = parse_term();
        var skip = parse_char(")");
        var body = parse_term();
        return ctx => All(eras, self, name, bind(ctx), (s,x) => body(Ext([name,x],Ext([self,s],ctx))));
      case "λ":
      case "Λ":
        var eras = chr === "Λ";
        var name = parse_name();
        var body = parse_term();
        return ctx => Lam(eras, name, (x) => body(Ext([name,x],ctx)));
      case "(":
      case "<":
        var eras = chr === "<";
        var func = parse_term();
        var argm = parse_term();
        var skip = parse_char(eras ? ">" : ")");
        return ctx => App(eras, func(ctx), argm(ctx));
      case "$":
        var name = parse_name();
        var skip = parse_char("=");
        var expr = parse_term();
        var skip = parse_char(";");
        var body = parse_term();
        return ctx => Let(name, expr(ctx), x => body(Ext([name,x],ctx)));
      case ":":
        var type = parse_term();
        var expr = parse_term();
        return ctx => Ann(false, expr(ctx), type(ctx));
      default:
        if (is_name(chr)) {
          var name = chr + parse_name();
          return ctx => {
            var got = find(ctx, (x) => x[0] === name);
            return got ? got.value[1] : Ref(name);
          };
        } else {
          throw "Unexpected symbol: '" + chr + "'.";
        }
    };
  };
  function parse_defs() {
    parse_nuls();
    var name = parse_name();
    if (name.length > 0) {
      var skip = parse_char(":");
      var type = parse_term()(Nil());
      var term = parse_term()(Nil());
      defs[name] = {type, term};
      parse_defs();
    }
  };
  var indx = 0;
  if (mode === "defs") {
    var defs = {};
    parse_defs();
    return {defs};
  } else {
    return parse_term()(Nil());
  }
};

// Evaluation
// ==========

function reduce(term, defs, erased = false) {
  switch (term.ctor) {
    case "Var":
      return Var(term.indx);
    case "Ref":
      if (defs[term.name]) {
        var got = defs[term.name].term;
        if (got.ctor === "Loc" && got.expr.ctor === "Ref" && got.expr.name === term.name) {
          return got;
        } else {
          return reduce(got, defs, erased);
        };
      } else {
        return Ref(term.name);
      }
    case "Typ":
      return Typ();
    case "All":
      var eras = term.eras;
      var self = term.self;
      var name = term.name;
      var bind = term.bind;
      var body = term.body;
      return All(eras, self, name, bind, body);
    case "Lam":
      if (erased && term.eras) {
        return reduce(term.body(Lam(false, "", x => x)), defs, erased);
      } else {
        var eras = term.eras;
        var name = term.name;
        var body = term.body;
        return Lam(eras, name, body);
      }
    case "App":
      if (erased && term.eras) {
        return reduce(term.func, defs, erased);
      } else {
        var eras = term.eras;
        var func = reduce(term.func, defs, erased);
        switch (func.ctor) {
          case "Lam":
            return reduce(func.body(term.argm), defs, erased);
          default:
            return App(eras, func, term.argm);
        };
      };
    case "Let":
      var name = term.name;
      var expr = term.expr;
      var body = term.body;
      return reduce(body(expr), defs, erased);
    case "Ann":
      return reduce(term.expr, defs, erased);
    case "Loc":
      return reduce(term.expr, defs, erased);
  };
}

function normalize(term, defs, erased = false, seen = {}) {
  var norm = reduce(term, defs, erased);
  var term_hash = hash(term);
  var norm_hash = hash(norm);
  if (seen[term_hash] || seen[norm_hash]) {
    return term;
  } else {
    var seen = {...seen, [term_hash]: true, [norm_hash]: true};
    var norm = reduce(term, defs, erased);
    switch (norm.ctor) {
      case "Var":
        return Var(norm.indx);
      case "Ref":
        return Ref(norm.name);
      case "Typ":
        return Typ();
      case "All":
        var eras = norm.eras;
        var self = norm.self;
        var name = norm.name;
        var bind = normalize(norm.bind, defs, erased, seen);
        var body = (s,x) => normalize(norm.body(s,x), defs, erased, seen);
        return All(eras, self, name, bind, body);
      case "Lam":
        var eras = norm.eras;
        var name = norm.name;
        var body = x => normalize(norm.body(x), defs, erased, seen);
        return Lam(eras, name, body);
      case "App":
        var eras = norm.eras;
        var func = normalize(norm.func, defs, erased, seen);
        var argm = normalize(norm.argm, defs, erased, seen);
        return App(eras, func, argm);
      case "Let":
        return normalize(norm.body(norm.expr), defs, erased, seen);
      case "Ann":
        return normalize(norm.expr, defs, erased, seen);
      case "Loc":
        return normalize(norm.expr, defs, erased, seen);
    };
  };
};

// Equality
// ========

// Computes the hash of a term. JS strings are hashed, so we just return one.
function hash(term, dep = 0) {
  switch (term.ctor) {
    case "Var":
      var indx = Number(term.indx.split("#")[1]);
      if (indx < 0) {
        return "^"+(dep+indx);
      } else {
        return "#"+indx;
      }
    case "Ref":
      return "$" + term.name;
    case "Typ":
      return "Type";
    case "All":
      var bind = hash(term.bind, dep);
      var body = hash(term.body(Var("#"+(-dep-1)), Var("#"+(-dep-2))), dep+2);
      return "Π" + term.self + bind + body;
    case "Lam":
      var body = hash(term.body(Var("#"+(-dep-1))), dep+1);
      return "λ" + body;
    case "App":
      var func = hash(term.func, dep);
      var argm = hash(term.argm, dep);
      return "@" + func + argm;
    case "Let":
      var expr = hash(term.expr, dep);
      var body = hash(term.body(Var("#"+(-dep-1))), dep+1);
      return "$" + expr + body;
    case "Ann":
      var expr = hash(term.expr, dep);
      return expr;
    case "Loc":
      var expr = hash(term.expr, dep);
      return expr;
  }
};

// Are two terms equal?
function equal(a, b, defs, dep = 0, seen = {}) {
  let a1 = reduce(a, defs, true);
  let b1 = reduce(b, defs, true);
  var ah = hash(a1);
  var bh = hash(b1);
  var id = ah + "==" + bh;
  if (ah === bh || seen[id]) {
    return true;
  } else {
    seen[id] = true;
    switch (a1.ctor + b1.ctor) {
      case "AllAll":
        var a1_body = a1.body(Var("#"+(dep)), Var("#"+(dep+1)));
        var b1_body = b1.body(Var("#"+(dep)), Var("#"+(dep+1)));
        return a1.eras === b1.eras
            && a1.self === b1.self
            && equal(a1.bind, b1.bind, defs, dep+0, seen)
            && equal(a1_body, b1_body, defs, dep+2, seen);
      case "LamLam":
        if (a1.eras !== b1.eras) return [false,a1,b1];
        var a1_body = a1.body(Var("#"+(dep)));
        var b1_body = b1.body(Var("#"+(dep)));
        return a1.eras === b1.eras
            && equal(a1_body, b1_body, defs, dep+1, seen);
      case "AppApp":
        return a1.eras === b1.eras
            && equal(a1.func, b1.func, defs, dep, seen)
            && equal(a1.argm, b1.argm, defs, dep, seen);
      case "LetLet":
        var a1_body = a1.body(Var("#"+(dep)));
        var b1_body = b1.body(Var("#"+(dep)));
        vis.push([a1.expr, b1.expr, dep]);
        vis.push([a1_body, b1_body, dep+1]);
        return equal(a1.expr, b1.expr, defs, dep+0, seen)
            && equal(a1_body, b1_body, defs, dep+1, seen);
      case "AnnAnn":
        return equal(a1.expr, b1.expr, defs, dep, seen);
      case "LocLoc":
        return equal(a1.expr, b1.expr, defs, dep, seen);
      default:
        return false;
    }
  };
}


// Type-Checking
// =============

function Err(loc, ctx, msg) {
  return {
    loc: loc,
    ctx: ctx,
    msg: msg,
  };
};

function typeinfer(term, defs, show = stringify, ctx = Nil(), locs = null) {
  switch (term.ctor) {
    case "Var":
      return Var(term.indx);
    case "Ref":
      var got = defs[term.name];
      if (got) {
        return got.type;
      } else {
        throw () => Err(locs, ctx, "Undefined reference '" + term.name + "'.");
      }
    case "Typ":
      return Typ();
    case "App":
      var func_typ = reduce(typeinfer(term.func, defs, show, ctx), defs);
      switch (func_typ.ctor) {
        case "All":
          var self_var = Ann(true, term.func, func_typ);
          var name_var = Ann(true, term.argm, func_typ.bind);
          typecheck(term.argm, func_typ.bind, defs, show, ctx);
          var term_typ = func_typ.body(self_var, name_var);
          if (func_typ.ctor === "All" && term.eras !== func_typ.eras) {
            throw () => Err(locs, ctx, "Mismatched erasure.");
          };
          return term_typ;
        default:
          throw () => Err(locs, ctx, "Non-function application.");
      };
    case "Let":
      var expr_typ = typeinfer(term.expr, defs, show, ctx);
      var expr_var = Ann(true, Var(term.name+"#"+(ctx.size+1)), expr_typ);
      var body_ctx = Ext({name:term.name,type:expr_var.type}, ctx);
      var body_typ = typeinfer(term.body(expr_var), defs, show, body_ctx);
      return body_typ;
    case "All":
      var self_var = Ann(true, Var(term.self+"#"+ctx.size), term);
      var name_var = Ann(true, Var(term.name+"#"+(ctx.size+1)), term.bind);
      var body_ctx = Ext({name:term.self,type:self_var.type}, ctx);
      var body_ctx = Ext({name:term.name,type:name_var.type}, body_ctx);
      typecheck(term.bind, Typ(), defs, show, ctx);
      typecheck(term.body(self_var,name_var), Typ(), defs, show, body_ctx);
      return Typ();
    case "Ann":
      if (!term.done) {
        typecheck(term.expr, term.type, defs, show, ctx);
      }
      return term.type;
    case "Loc":
      var locs = {from: term.from, upto: term.upto};
      return typeinfer(term.expr, defs, show, ctx, locs);
  }
  throw () => Err(locs, ctx, "Can't infer type.");
};

function typecheck(term, type, defs, show = stringify, ctx = Nil(), locs = null) {
  var typv = reduce(type, defs);
  switch (term.ctor) {
    case "Lam":
      if (typv.ctor === "All") {
        var self_var = Ann(true, term, type);
        var name_var = Ann(true, Var(term.name+"#"+(ctx.size+1)), typv.bind);
        var body_typ = typv.body(self_var, name_var);
        if (term.eras !== typv.eras) {
          throw () => Err(locs, ctx, "Type mismatch.");
        };
        var body_ctx = Ext({name:term.name,type:name_var.type}, ctx);
        typecheck(term.body(name_var), body_typ, defs, show, body_ctx);
      } else {
        throw () => Err(locs, ctx, "Lambda has a non-function type.");
      }
      break;
    case "Let":
      var expr_typ = typeinfer(term.expr, defs, show, ctx);
      var expr_var = Ann(true, Var(term.name+"#"+(ctx.size+1)), expr_typ);
      var body_ctx = Ext({name:term.name,type:expr_var.type}, ctx);
      typecheck(term.body(expr_var), type, defs, show, body_ctx);
      break;
    case "Loc":
      var locs = {from: term.from, upto: term.upto};
      typecheck(term.expr, type, defs, show, ctx, locs);
      break;
    default:
      var infr = typeinfer(term, defs, show, ctx);
      var eq = equal(type, infr, defs, ctx.size);
      if (!eq) {
        var type0_str = show(normalize(type, {}, true), ctx);
        var infr0_str = show(normalize(infr, {}, true), ctx);
        throw () => Err(locs, ctx,
          "Found type... \x1b[2m"+infr0_str+"\x1b[0m\n" +
          "Instead of... \x1b[2m"+type0_str+"\x1b[0m");
      }
      break;
  };
  return {term,type};
};

function typesynth(name, defs, show = stringify) {
  var term = defs[name].term;
  var type = defs[name].type;
  defs[name].core = {term, type};
  return typecheck(term, type, defs, show);
};

module.exports = {
  Var,
  Ref,
  Typ,
  All,
  Lam,
  App,
  Let,
  Ann,
  Loc,
  Ext,
  Nil,
  find,
  stringify,
  parse,
  reduce,
  normalize,
  Err,
  typeinfer,
  typecheck,
  typesynth,
  equal,
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

const fmc = __webpack_require__(7);
const fml = __webpack_require__(11);
const cmp = __webpack_require__(12);

var prim_types = {
  Unit: {
    inst: [[0, "1"]],
    elim: {ctag: x => 'unit', ctor: [[]]},
    cnam: ['unit'],
  },
  Bool: {
    inst: [[0, "true"], [0, "false"]],
    elim: {ctag: x => x+"?'true':'false'", ctor: [[], []]},
    cnam: ['true', 'false'],
  },
  Nat: {
    inst: [[0, "0n"], [1, p => "1n+"+p]],
    elim: {ctag: x => x+"===0n?'zero':'succ'", ctor: [[], [x => "("+x+"-1n)"]]},
    cnam: ['zero', 'succ'],
  },
  Bits: {
    inst: [[0, "''"], [1, p=>p+"+'0'"], [1, p=>p+"+'1'"]],
    elim: {
      ctag: x => x+".length===0?'be':"+x+"["+x+".length-1]==='0'?'b0':'b1'",
      ctor: [[], [x => x+".slice(0,-1)"], [x => x+".slice(0,-1)"]],
    },
    cnam: ['be', 'b0', 'b1'],
  },
  U16: {
    inst: [[1, x => "Lam_to_U16("+x+")"]],
    elim: {
      ctag: x => "'u16'",
      ctor: [[x => "U16_to_Lam("+x+")"]],
    },
    cnam: ['u16'],
  },
  U32: {
    inst: [[1, x => "Lam_to_U32("+x+")"]],
    elim: {
      ctag: x => "'u32'",
      ctor: [[x => "U32_to_Lam("+x+")"]],
    },
    cnam: ['u32'],
  },
  U64: {
    inst: [[1, x => "Lam_to_U64("+x+")"]],
    elim: {
      ctag: x => "'u64'",
      ctor: [[x => "U64_to_Lam("+x+")"]],
    },
    cnam: ['u64'],
  },
  F64: {
    inst: [[1, x => "Lam_to_F64("+x+")"]],
    elim: {
      ctag: x => "'f64'",
      ctor: [[x => "F64_to_Lam("+x+")"]],
    },
    cnam: ['f64'],
  },
  String: {
    inst: [[0,"''"], [2, h => t => "(String.fromCharCode("+h+")+"+t+")"]],
    elim: {
      ctag: x => x+".length===0?'nil':'cons'",
      ctor: [[], [x => x+".charCodeAt(0)", x => x+".slice(1)"]],
    },
    cnam: ['nil', 'cons'],
  },
};

function adt_type(adt) {
  var inst = [];
  var elim = {
    ctag: x => x+"._",
    ctor: [],
  };
  var cnam = [];
  for (let i = 0; i < adt.length; ++i) {
    inst.push([adt[i].flds.length, (function go(j, ctx) {
      if (j < adt[i].flds.length) {
        return x => go(j + 1, ctx.concat([x]));
      } else {
        var res = "({_:'"+adt[i].name+"'";
        for (var k = 0; k < j; ++k) {
          res += ",'"+adt[i].flds[k]+"':"+ctx[k];
        };
        res += "})";
        return res;
      };
    })(0, [])]);
    elim.ctor.push(adt[i].flds.map((n,j) => (x => x+"."+adt[i].flds[j])));
    cnam.push(adt[i].name);
  };
  return {inst, elim, cnam};
};

var prim_funcs = {
  "Bool.not"    : [1, a=>`!${a}`],
  "Bool.and"    : [2, a=>b=>`${a}&&${b}`],
  "Bool.if"     : [3, a=>b=>c=>`${a}?${b}:${c}`],
  "Bool.or"     : [2, a=>b=>`${a}||${b}`],
  "Debug.log"   : [2, a=>b=>`(console.log(${a}),${b}())`],
  "Nat.add"     : [2, a=>b=>`${a}+${b}`],
  "Nat.sub"     : [2, a=>b=>`${a}-${b}<=0n?0n:${a}-${b}`],
  "Nat.mul"     : [2, a=>b=>`${a}*${b}`],
  "Nat.div"     : [2, a=>b=>`${a}/${b}`],
  "Nat.div_mod" : [2, a=>b=>`({_:'Pair.new','fst':${a}/${b},'snd':${a}%${b}})`], // TODO change to proper pair
  "Nat.pow"     : [2, a=>b=>`${a}**${b}`],
  "Nat.ltn"     : [2, a=>b=>`${a}<${b}`],
  "Nat.lte"     : [2, a=>b=>`${a}<=${b}`],
  "Nat.eql"     : [2, a=>b=>`${a}===${b}`],
  "Nat.gte"     : [2, a=>b=>`${a}>=${b}`],
  "Nat.gtn"     : [2, a=>b=>`${a}>${b}`],
  "U16.add"     : [2, a=>b=>`${a}+${b}`],
  "U16.sub"     : [2, a=>b=>`Math.max(${a}-${b},0)`],
  "U16.mul"     : [2, a=>b=>`${a}*${b}`],
  "U16.div"     : [2, a=>b=>`(${a}/${b})>>>0`],
  "U16.mod"     : [2, a=>b=>`${a}%${b}`],
  "U16.pow"     : [2, a=>b=>`(${a}**${b})&0xFFFF`],
  "U16.ltn"     : [2, a=>b=>`${a}<${b}`],
  "U16.lte"     : [2, a=>b=>`${a}<=${b}`],
  "U16.eql"     : [2, a=>b=>`${a}===${b}`],
  "U16.gte"     : [2, a=>b=>`${a}>=${b}`],
  "U16.gtn"     : [2, a=>b=>`${a}>${b}`],
  "U16.shr"     : [2, a=>b=>`${a}>>>${b}`],
  "U16.shl"     : [2, a=>b=>`${a}<<${b}`],
  "U16.and"     : [2, a=>b=>`${a}&${b}`],
  "U16.or"      : [2, a=>b=>`${a}|${b}`],
  "U16.xor"     : [2, a=>b=>`${a}^${b}`],
  "U32.add"     : [2, a=>b=>`${a}+${b}`],
  "U32.sub"     : [2, a=>b=>`Math.max(${a}-${b},0)`],
  "U32.mul"     : [2, a=>b=>`${a}*${b}`],
  "U32.div"     : [2, a=>b=>`(${a}/${b})>>>0`],
  "U32.mod"     : [2, a=>b=>`${a}%${b}`],
  "U32.pow"     : [2, a=>b=>`(${a}**${b})>>>0`],
  "U32.ltn"     : [2, a=>b=>`${a}<${b}`],
  "U32.lte"     : [2, a=>b=>`${a}<=${b}`],
  "U32.eql"     : [2, a=>b=>`${a}===${b}`],
  "U32.gte"     : [2, a=>b=>`${a}>=${b}`],
  "U32.gtn"     : [2, a=>b=>`${a}>${b}`],
  "U32.shr"     : [2, a=>b=>`${a}>>>${b}`],
  "U32.shl"     : [2, a=>b=>`${a}<<${b}`],
  "U32.and"     : [2, a=>b=>`${a}&${b}`],
  "U32.or"      : [2, a=>b=>`${a}|${b}`],
  "U32.xor"     : [2, a=>b=>`${a}^${b}`],
  "U64.add"     : [2, a=>b=>`(${a}+${b})&0xFFFFFFFFFFFFFFFFn`],
  "U64.sub"     : [2, a=>b=>`${a}-${b}<=0n?0n:a-b`],
  "U64.mul"     : [2, a=>b=>`(${a}*${b})&0xFFFFFFFFFFFFFFFFn`],
  "U64.div"     : [2, a=>b=>`${a}/${b}`],
  "U64.mod"     : [2, a=>b=>`${a}%${b}`],
  "U64.pow"     : [2, a=>b=>`(${a}**${b})&0xFFFFFFFFFFFFFFFFn`],
  "U64.ltn"     : [2, a=>b=>`(${a}<${b})`],
  "U64.lte"     : [2, a=>b=>`(${a}<=${b})`],
  "U64.eql"     : [2, a=>b=>`(${a}===${b})`],
  "U64.gte"     : [2, a=>b=>`(${a}>=${b})`],
  "U64.gtn"     : [2, a=>b=>`(${a}>${b})`],
  "U64.shr"     : [2, a=>b=>`(${a}>>${b})&0xFFFFFFFFFFFFFFFFn`],
  "U64.shl"     : [2, a=>b=>`(${a}<<${b})&0xFFFFFFFFFFFFFFFFn`],
  "U64.and"     : [2, a=>b=>`${a}&${b}`],
  "U64.or"      : [2, a=>b=>`${a}|${b}`],
  "U64.xor"     : [2, a=>b=>`${a}^${b}`],
  "F64.add"     : [2, a=>b=>`${a}+${b}`],
  "F64.sub"     : [2, a=>b=>`${a}-${b}`],
  "F64.mul"     : [2, a=>b=>`${a}*${b}`],
  "F64.div"     : [2, a=>b=>`${a}/${b}`],
  "F64.mod"     : [2, a=>b=>`${a}%${b}`],
  "F64.pow"     : [2, a=>b=>`${a}**${b}`],
  "F64.log"     : [1, a=>`Math.log(${a})`],
  "F64.cos"     : [1, a=>`Math.cos(${a})`],
  "F64.sin"     : [1, a=>`Math.sin(${a})`],
  "F64.tan"     : [1, a=>`Math.tan(${a})`],
  "F64.acos"    : [1, a=>`Math.acos(${a})`],
  "F64.asin"    : [1, a=>`Math.asin(${a})`],
  "F64.atan"    : [1, a=>`Math.atan(${a})`],
  "String.eql"  : [2, a=>b=>`${a}===${b}`],
};

var count = 0;
function fresh() {
  return "$"+(count++);
};

// Simple substitution, assumes `name` is globally unique.
function subst(term, name, val) {
  switch (term.ctor) {
    case "Var": return term.name === name ? val : term;
    case "Ref": return cmp.Ref(term.name);
    case "Lam": return cmp.Lam(term.name, term.name === name ? term.body : subst(term.body, name, val));
    case "App": return cmp.App(subst(term.func, name, val), subst(term.argm, name, val));
    case "Let": return cmp.Let(term.name, subst(term.expr, name, val), term.name === name ? term.body : subst(term.body, name, val));
    case "Eli": return cmp.Eli(term.prim, subst(term.expr, name, val));
    case "Ins": return cmp.Ins(term.prim, subst(term.expr, name, val));
    default: return term;
  }
};
  
// Inlines a list of arguments in lambdas, as much as possible. Example:
// apply_inline((x) (y) f, [a, b, c, d, e]) = f[x<-a,y<-b](c)(d)(e)
function apply_inline(term, args) {
  if (term.ctor === "Lam" && args.length > 0) {
    return apply_inline(subst(term.body, term.name, args[0]), args.slice(1));
  } else if (args.length > 0) {
    return apply_inline(cmp.App(term, args[0]), args.slice(1));
  } else {
    return term;
  }
};

// Builds a lambda by filling a template with args.
function build_from_template(arity, template, args) {
  var res = "";
  for (var i = args.length; i < arity; ++i) {
    res += ("a"+i)+"=>";
  };
  var bod = template;
  for (var i = 0; i < Math.min(args.length, arity); ++i) {
    bod = bod(js_code(args[i]));
  };
  for (var i = args.length; i < arity; ++i) {
    bod = bod("a"+i);
  };
  bod = "("+bod+")";
  for (var i = arity; i < args.length; ++i) {
    bod = bod+"("+js_code(args[i])+")";
  };
  return res + bod;
};

function application(func, allow_empty = false) {
  var args = [];
  while (func && func.ctor === "App") {
    args.push(func.argm);
    func = func.func;
  };
  args.reverse();

  // Primitive function application
  if (func && (allow_empty || args.length > 0) && func.ctor === "Ref" && prim_funcs[func.name]) {
    var [arity, template] = prim_funcs[func.name];
    return build_from_template(arity, template, args);

  // Primitive type elimination
  } else if (func && (allow_empty || args.length > 0) && func.ctor === "Eli") {
    if (typeof func.prim === "string" && prim_types[func.prim]) {
      var type_info = prim_types[func.prim];
    } else if (typeof func.prim === "object") {
      var type_info = adt_type(func.prim);
    } else {
      return null;
    };
    var {ctag, ctor} = type_info.elim;
    var cnam = type_info.cnam;
    var res = "(()=>";
    for (var i = args.length; i < ctor.length; ++i) {
      res += ("c"+i)+"=>";
    };
    res += "{";
    res += "var self="+js_code(func.expr)+";";
    res += "switch("+ctag("self")+"){";
    for (var i = 0; i < ctor.length; ++i) {
      res += "case '"+cnam[i]+"':";
      var fargs = [];
      for (var j = 0; j < ctor[i].length; ++j) {
        var nam = fresh();
        res += "var "+nam+"="+ctor[i][j]("self")+";"
        fargs.push(cmp.Var(nam));
      };
      var ret = apply_inline(args[i] || cmp.Var("c"+i), fargs);
      res += "return "+js_code(ret)+";";
    };
    res += "}})()";
    for (var i = ctor.length; i < args.length; ++i) {
      res += "("+js_code(args[i])+")";
    };
    return res;
  }
  return null;
};

function instantiation(term) {
  if (term.ctor === "Ins") {
    if (typeof term.prim === "string" && prim_types[term.prim]) {
      var templates = prim_types[term.prim].inst;
    } else if (typeof term.prim === "object") {
      var templates = adt_type(term.prim).inst;
    } else {
      return null;
    }
    term = term.expr;
    var vars = [];
    while (term.ctor === "Lam") {
      vars.push(term.name);
      term = term.body;
    }
    if (templates.length === vars.length) {
      var func = term;
      var args = [];
      while (func.ctor === "App") { 
        args.push(func.argm);
        func = func.func;
      };
      args.reverse();
      if (func.ctor === "Var" || func.ctor === "Ref") {
        for (var i = 0; i < vars.length; ++i) {
          if (func.name === vars[i]) {
            var [ctor_arity, ctor_template] = templates[i];
            if (ctor_arity === args.length) {
              var res = ctor_template;
              for (var arg of args) {
                res = res(js_code(arg));
              };
              return res;
            };
          }
        };
      };
    };
  };
  return null;
};

function instantiator(inst) {
  var ctors = inst;
  var res = "x=>x";
  for (var i = 0; i < ctors.length; ++i) {
    res += "(";
    var [ctor_arity, ctor_template] = ctors[i];
    for (var j = 0; j < ctor_arity; ++j) {
      res += "x"+j+"=>";
    };
    var bod = ctor_template;
    for (var j = 0; j < ctor_arity; ++j) {
      bod = bod("x"+j);
    };
    res += bod+")";
  };
  return res;
};

function flatten_lets(term) {
  var res = "(()=>{";
  while (term.ctor === "Let") {
    res += "var "+js_name(term.name)+"="+js_code(term.expr)+";";
    term = term.body;
  };
  res += "return "+js_code(term)+"})()";
  return res;
};

// Checks if a function is recursive and tail-safe.
function recursion(term, name) {
  // Used by tail-call detection. If this application is the elimination of a
  // native type, then its arguments are all in tail position.
  function get_branches(term) {
    var done = false;
    var func = term;
    var args = [];
    while (func.ctor === "App") {
      args.push(func.argm);
      func = func.func;
    };
    args.reverse();
    if (func.ctor === "Eli") {
      //console.log("- Possibly branch safe.", name, func.prim);
      if (typeof func.prim === "string" && prim_types[func.prim]) {
        var type_info = prim_types[func.prim];
      } else if (typeof func.prim === "object") {
        var type_info = adt_type(func.prim);
      } else {
        return null;
      }
      if (args.length === type_info.inst.length) {
        //console.log("- Correct case count.");
        var branches = [];
        for (var i = 0; i < args.length; ++i) {
          var fields = type_info.inst[i][0];
          var branch = args[i];
          //console.log("...", i, fields, type_info.inst[i], branch);
          var arity = 0;
          while (arity < fields && branch.ctor === "Lam") {
            arity += 1;
            branch = branch.body;
          }
          if (arity === fields) {
            //console.log("- Correct field count on branch "+i+".");
            branches.push(branch);
          }
        }
        if (args.length === branches.length) {
          return {func, branches};
        }
      }
    }
    return null;
  };
  var args = [];
  while (term.ctor === "Lam") {
    args.push(term.name);
    term = term.body;
  };
  var is_recursive = false;
  var is_tail_safe = true;
  function check(term, tail) {
    switch (term.ctor) {
      case "Lam":
        check(term.body, tail);
        break;
      case "App":
        var got = tail && get_branches(term);
        if (got) {
          check(got.func, tail);
          for (var branch of got.branches) {
            check(branch, tail);
          };
        } else {
          check(term.func, tail);
          check(term.argm, false);
        };
        break;
      case "Let":
        check(term.expr, tail);
        check(term.body, tail);
        break;
      case "Eli":
        check(term.expr, tail);
        break;
      case "Ins":
        check(term.expr, tail);
        break;
      case "Ref":
        if (term.name === name) {
          is_recursive = true;
          is_tail_safe = is_tail_safe && tail;
        };
        break;
    };
  };
  check(term, true);
  if (is_recursive) {
    return {tail: is_tail_safe, args};
  }
  return null;
};

function js_code(term, name = null) {
  var rec = recursion(term, name);
  var app = application(term);
  var ins = instantiation(term);
  if (rec && rec.tail) {
    var vars = [];
    var code = "";
    while (term.ctor === "Lam") {
      vars.push(term.name);
      code = code + js_name(term.name)+"=>";
      term = term.body;
    }
    code += "{";
    code += "var "+js_name(name)+"=";
    code += vars.map(v => js_name(v)+"=>").join("");
    code += "({ctr:'TCO',arg:["+vars.map(js_name).join(",")+"]});";
    code += "while(true){";
    code += "var R="+js_code(term)+";";
    code += "if(R.ctr==='TCO')["+vars.map(js_name).join(",")+"]=R.arg;";
    code += "else return R;";
    code += "}}";
    return code;
  } else if (app) {
    return app;
  } else if (ins) {
    return ins;
  } else if (typeof term === "string") {
    return term;
  } else {
    switch (term.ctor) {
      case "Var":
        return js_name(term.name);
      case "Ref":
        return js_name(term.name);
      case "Nul":
        return "null";
      case "Lam":
        return "("+js_name(term.name)+"=>"+js_code(term.body)+")";
      case "App":
        return js_code(term.func)+"("+js_code(term.argm)+")";
      case "Let":
        return flatten_lets(term);
      case "Eli":
        if (typeof term.prim === "string") {
          return "elim_"+term.prim.toLowerCase()+"("+js_code(term.expr)+")";
        } else {
          throw "Internal compiler error. Please report on https://github.com/moonad/formality.";
        }
      case "Ins":
        if (typeof term.prim === "string") {
          return "inst_"+term.prim.toLowerCase()+"("+js_code(term.expr)+")";
        } else {
          throw "Internal compiler error. Please report on https://github.com/moonad/formality.";
        }
      case "Nat":
        return term.natx+"n";
      case "Chr":
        return term.chrx.charCodeAt(0);
      case "Str":
        return "`"+term.strx+"`";
    };
  };
};

function js_name(str) {
  return str.replace(/\./g,"$");
};

function compile(main, defs, only_expression = false) {
  //console.log("compiling ", main);
  var {defs: cmps, nams} = cmp.core_to_comp(defs, main);

  var used_prim_types = {}; 
  for (var prim in prim_types) {
    if (defs[prim]) used_prim_types[prim] = prim_types[prim];
  };
  var used_prim_funcs = {};
  for (var prim in prim_funcs) {
    if (defs[prim]) used_prim_funcs[prim] = prim_funcs[prim];
  };

  // Builds header and initial dependencies
  var isio = fmc.equal(defs[main].type, fmc.App(false, fmc.Ref("IO"), fmc.Ref("Unit")), defs);
  var code = "";
  if (!only_expression) {
    code += "module.exports = ";
  };
  code += "(function (){\n";
  if (used_prim_types["U16"]) {
    code += "  var Lam_to_U16 = x=>(function R(x,k){return x(0)(p=>R(p,k*2))(p=>k+R(p,k*2))})(x,1);\n";
    code += "  var U16_to_Lam = x=>((function R(i){return we=>w0=>w1=>i===16?we:((x>>>i)&1?w1:w0)(R(i+1))})(0));\n";
  };
  if (used_prim_types["U32"]) {
    code += "  var Lam_to_U32 = x=>(function R(x,k){return x(0)(p=>R(p,k*2))(p=>k+R(p,k*2))})(x,1);\n";
    code += "  var U32_to_Lam = x=>((function R(i){return we=>w0=>w1=>i===32?we:((x>>>i)&1?w1:w0)(R(i+1))})(0));\n";
  };
  if (used_prim_types["U64"]) {
    code += "  var Lam_to_U32 = x=>(function R(x,k){return x(0n)(p=>R(p,k*2n))(p=>k+R(p,k*2n))})(x,1n);\n";
    code += "  var U32_to_Lam = x=>((function R(i){return we=>w0=>w1=>i===64n?we:((x>>i)&1n?w1:w0)(R(i+1n))})(0n));\n";
  };
  if (used_prim_types["F64"]) {
    code += "  var F64 = new Float64Array(1);\n";
    code += "  var U32 = new Uint32Array(F64.buffer);\n";
    code += "  var F64_get = (x,i)=>((F64[0]=x),(i<32?(U32[0]>>>i)&1:(U32[1]>>>(i-32)&1)));\n";
    code += "  var F64_set = (x,i)=>((F64[0]=x),(i<32?(U32[0]=U32[0]|(1<<i)):(U32[1]=U32[1]|(1<<(i-32)))),F64[0]);\n";
    code += "  var Lam_to_F64 = x=>(function R(x,i){return x(0)(p=>R(p,i+1))(p=>F64_set(R(p,i+1),i))})(x,0);";
    code += "  var F64_to_Lam = x=>((function R(i){return we=>w0=>w1=>i===64?we:(F64_get(x,i)?w1:w0)(R(i+1))})(0));";
  };
  for (var prim in used_prim_types) {
    code += "  var inst_"+prim.toLowerCase()+" = "+instantiator(used_prim_types[prim].inst)+";\n";
    code += "  var elim_"+prim.toLowerCase()+" = "+js_code(cmp.Lam("x", application(cmp.Eli(prim, cmp.Var("x")), true)))+";\n";
  };
  if (isio) {
    code += "  var rdl = require('readline').createInterface({input:process.stdin,output:process.stdout});\n";
    code += "  var run = (p) => {\n";
    code += "    switch (p._) {\n";
    code += "      case 'IO.end': return Promise.resolve(p.val);\n";
    code += "      case 'IO.log': return new Promise((res,_) => (console.log(p.str), run(p.nxt(1)).then(res)));\n";
    code += "      case 'IO.get': return new Promise((res,_) => rdl.question('', (line) => run(p.nxt(line)).then(res)));\n";
    code += "    }\n";
    code += "  };\n";
    //code += "    var case_end = (val) => Promise.resolve(val);\n";
    //code += "    var case_log = (str) => (nxt) => new Promise((res,_) => (console.log(str), run(nxt(1)).then(res)));\n";
    //code += "    var case_inp = (nxt) => new Promise((res,_) => rdl.question('', (line) => run(nxt(line)).then(res)));\n";
    //code += "    return p(case_end)(case_log)(case_inp);\n";
    //code += "  };\n";
  }

  // Builds each top-level definition
  var exps = [];
  compile_def: for (var name of nams) {
    // Don't compile primitive types
    if (used_prim_types[name]) {
      continue;
    };

    // Generate JS expression
    var expr = null;
    if (used_prim_funcs[name]) {
      expr = application(cmp.Ref(name), true);
    } else {
      try {
        var comp = cmps[name];
        var type = defs[name].type;
        if (fmc.equal(type, fmc.Typ(), defs)) {
          continue;
        } else {
          expr = js_code(comp, name);
        }
      } catch (e) {
        console.log(e);
        expr = "'ERROR'";
      };
    };

    // Adds to code and register export
    code += "  var "+js_name(name)+" = "+expr+";\n";
    exps.push(name);
  };

  // Builds export list
  code += "  return {\n";
  if (isio) {
    code += "    '$main$': ()=>run("+js_name(main)+"),\n"
  };
  for (var name of exps) {
    code += "    '"+name+"': "+js_name(name)+",\n";
  };
  code += "  };\n";
  code += "})();";

  // Builds last line to call exported main
  if (!only_expression) {
    if (isio) {
      code += "\nmodule.exports['$main$']().then(() => process.exit());";
    } else {
      code += "\nconsole.log(module.exports['"+main+"']);";
    };
  };

  return code;
};

module.exports = {compile};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

const {Var, App, Lam, Ref, Ext, Nil, find} = __webpack_require__(7);
const {Net, Pointer, addr_of, slot_of, numb_of, ptrn_eq, ptrn_st, NOD} = __webpack_require__(15);

function erase(term, dep = 0) {
  const id = {ctor: "Lam", body: {ctor: "Var", indx: 0}};
  switch (term.ctor) {
    case "Var":
      return {
        ctor: "Var",
        indx: dep - term.indx - 1,
      };
    case "Ref":
      return {ctor: "Ref", name: term.name};
    case "Typ":
      return id;
    case "All":
      return id;
    case "Lam":
      if (term.eras) {
        return erase(term.body(id), dep);
      } else {
        return {
          ctor: "Lam",
          name: term.name,
          body: erase(term.body({ctor: "Var", indx: dep}), dep + 1),
        };
      }
    case "App":
      if (term.eras) {
        return erase(term.func, dep);
      } else {
        return {
          ctor: "App",
          func: erase(term.func, dep),
          argm: erase(term.argm, dep),
        };
      }
    case "Let":
      if (term.dups) {
        return {
          ctor: "Let",
          name: term.name,
          expr: erase(term.expr, dep),
          body: erase(term.body({ctor: "Var", indx: dep}), dep + 1),
        };
      } else {
        return erase(term.body(term.expr), dep);
      }
    case "Ann":
      return erase(term.expr, dep);
    case "Loc":
      return erase(term.expr, dep);
    case "Hol":
      throw "Can't compile hole.";
  };
};

function compile(fm_term, defs = {}) {
  var term = erase(fm_term);
  const ref_ptrs = {};
  const build_net = (term, net, var_ptrs, level) => {
    const get_var = (ptrn) => {
      if (ptrn_eq(net.enter_port(ptrn), ptrn)) {
        return ptrn;
      } else {
        var dups_ptrn = net.enter_port(ptrn);
        var dup_addr = net.alloc_node(NOD, Math.floor(Math.random()*(2**24)) + 1);
        net.link_ports(Pointer(dup_addr, 0), ptrn);
        net.link_ports(Pointer(dup_addr, 1), dups_ptrn);
        return Pointer(dup_addr, 2);
      }
    };
    switch (term.ctor) {
      case "Let":
        var expr_ptr = build_net(term.expr, net, var_ptrs, level);
        level_of[ptrn_st(expr_ptr)] = level;
        var_ptrs.push(expr_ptr);
        var body_ptr = build_net(term.body, net, var_ptrs, level);
        var_ptrs.pop();
        return body_ptr;
      case "Lam":
        var lam_addr = net.alloc_node(NOD, 0);
        net.link_ports(Pointer(lam_addr, 1), Pointer(lam_addr, 1));
        level_of[ptrn_st(Pointer(lam_addr, 1))] = level;
        var_ptrs.push(Pointer(lam_addr, 1));
        var body_ptr = build_net(term.body, net, var_ptrs, level);
        var_ptrs.pop();
        net.link_ports(Pointer(lam_addr, 2), body_ptr);
        return Pointer(lam_addr, 0);
      case "App":
        var app_addr = net.alloc_node(NOD, 0);
        var func_ptr = build_net(term.func, net, var_ptrs, level);
        net.link_ports(Pointer(app_addr, 0), func_ptr);
        var argm_ptr = build_net(term.argm, net, var_ptrs, level);
        net.link_ports(Pointer(app_addr, 1), argm_ptr)
        return Pointer(app_addr, 2);
      case "Var":
        return get_var(var_ptrs[var_ptrs.length - term.indx - 1]);
      case "Ref":
        var ref_ptrn = ref_ptrs[term.name];
        // First time seeing this ref
        if (!ref_ptrn) {
          // Create a dup node for it and recurse
          var dup_addr = net.alloc_node(NOD, 0xFFFD);
          var ref_ptrn = Pointer(dup_addr, 1);
          ref_ptrs[term.name] = ref_ptrn;
          var dref = erase(defs[term.name].term);
          var dref_ptr = build_net(dref, net, var_ptrs, level);
          net.link_ports(Pointer(dup_addr, 0), dref_ptr);
          return Pointer(dup_addr, 2);
        // Already created the dup node for this ref
        } else {
          // First use: just connect to the port 1 of the dup node
          if (ptrn_eq(net.enter_port(ref_ptrn), ref_ptrn)) {
            return ref_ptrn;
          // Other uses: extend with another dup node and connect
          } else {
            var dups_ptrn = net.enter_port(ref_ptrn);
            var dup_addr = net.alloc_node(NOD, 0xFFFD);
            net.link_ports(Pointer(dup_addr, 0), ref_ptrn);
            net.link_ports(Pointer(dup_addr, 1), dups_ptrn);
            return Pointer(dup_addr, 2);
          }
        }
      default:
        throw "Internal error.";
        //return build_net(Lam("", null, Var(0), false), net, var_ptrs, level);
    }
  };
  var level_of = {};
  var net = new Net();
  var root_addr = net.alloc_node(NOD, 0);
  var term_ptr = build_net(term, net, [], 0);
  net.link_ports(Pointer(root_addr, 0), Pointer(root_addr, 2));
  net.link_ports(Pointer(root_addr, 1), term_ptr);
  // Removes invalid redexes. They can be created by the
  // compiler when duplicating variables more than once.
  net.redex = net.redex.filter((a_addr) => {
    var b_ptrn = net.enter_port(Pointer(a_addr, 0));
    var b_addr = addr_of(b_ptrn);
    var a_p0 = Pointer(a_addr, 0);
    var b_p0 = Pointer(b_addr, 0);
    var a_ok = ptrn_eq(net.enter_port(a_p0), b_p0);
    var b_ok = ptrn_eq(net.enter_port(b_p0), a_p0);
    return a_ok && b_ok;
  });
  // Optimization: if a ref is only used once, remove the unecessary dup node
  for (var name in ref_ptrs) {
    var ref_ptrn = ref_ptrs[name];
    if (ptrn_eq(net.enter_port(ref_ptrn), ref_ptrn)) {
      var dup_addr = addr_of(ref_ptrn);
      var ref_ptrn = net.enter_port(Pointer(dup_addr, 0));
      var loc_ptrn = net.enter_port(Pointer(dup_addr, 2));
      net.link_ports(ref_ptrn, loc_ptrn);
      net.free_node(dup_addr);
    }
  }
  return net;
};

function decompile(net) {
  const build_term = (net, ptrn, var_ptrs, dup_exit) => {
    var addr = addr_of(ptrn);
    var kind = net.kind_of(addr);
    if (kind === 0) {
      switch (slot_of(ptrn)) {
        case 0:
          var_ptrs.push(Pointer(addr, 1));
          var body = build_term(net, net.enter_port(Pointer(addr, 2)), var_ptrs, dup_exit);
          var_ptrs.pop();
          var vlen = var_ptrs.length;
          return ctx => {
            var t_name = "x" + vlen;
            var t_body = x => body(Ext([t_name,x], ctx));
            return Lam(false, t_name, t_body);
          };
        case 1:
          for (var index = 0; index < var_ptrs.length; ++index) {
            if (ptrn_eq(var_ptrs[var_ptrs.length - index - 1], ptrn)) {
              return ctx => find(ctx, (x,i) => i === index).value[1];
            }
          }
        case 2:
          var argm = build_term(net, net.enter_port(Pointer(addr, 1)), var_ptrs, dup_exit);
          var func = build_term(net, net.enter_port(Pointer(addr, 0)), var_ptrs, dup_exit);
          return ctx => App(false, func(ctx), argm(ctx));
      }
    } else {
      switch (slot_of(ptrn)) {
        case 0:
          var exit = dup_exit.pop();
          var term = build_term(net, net.enter_port(Pointer(addr, exit)), var_ptrs, dup_exit);
          dup_exit.push(exit);
          return term;
        default:
          dup_exit.push(slot_of(ptrn));
          var term = build_term(net, net.enter_port(Pointer(addr, 0)), var_ptrs, dup_exit);
          dup_exit.pop();
          return term;
      }
    }
  };
  return build_term(net, net.enter_port(Pointer(0, 1)), [], [])(Nil());
};

function normalize(term, defs = {}, lazy = true) {
  var net = compile(term, defs);
  var stats = lazy ? net.reduce_lazy() : net.reduce();
  var term = decompile(net);
  return {term, stats};
};

module.exports = {erase, compile, decompile, normalize};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var req = __webpack_require__(33);
var sig = __webpack_require__(13);
var Peer = __webpack_require__(47);
var lib = __webpack_require__(66);
var WebSocket = __webpack_require__(67)

module.exports = ({url = "http://moonad.org"}) => {

  async function request(method, query) {
    return await req(url+"/"+method, {method:"POST", query});
  };

  async function query(method, query) {
    var response = await req(url+"/"+method, {method:"POST", query});
    if (response.slice(0,2) === "0x") {
      return response;
    } else {
      throw response;
    }
  };

  async function post(post, pkey) {
    return await query("post", lib.sign_post(post, pkey));
  };

  async function register({name, addr}) {
    return await query("register", {name, addr});
  };

  async function get({key}) {
    return await query("get", {key});
  };

  async function get_orig({name}) {
    return await get({key: name+".orig"});
  };

  async function get_deps({name}) {
    return lib.hex_to_string(await get({key: name+".deps"}))
      .split(";")
      .filter(s => s !== "");
  };

  async function get_addr({name}) {
    return lib.hex_to_string(await get({key: name+".addr"}));
  };

  async function get_name({addr}) {
    return lib.hex_to_string(await get({key: addr+".name"}));
  };

  async function get_cite({poid}) {
    return lib.split_hex_in_chunks(64, await get({key: poid+".cite"}));
  };

  async function get_refs({poid}) {
    return lib.split_hex_in_chunks(64, await get({key: poid+".refs"}));
  };

  async function get_post({poid}) {
    return lib.hex_to_post(await get({key: poid+".post"}));
  };

  function direct() {
    var self = {};
    self.post = {}; // Map Poid Post
    self.cite = {}; // Map Poid [Poid]
    self.name = {}; // Map Addr String
    self.orig = {};
    self.deps = {};
    self.ws = new WebSocket(url.replace("http","ws")+"/");

    self.api = {};
    self.api.request = request;
    self.api.query = query;
    self.api.post = post;
    self.api.register = register;
    self.api.get = get;
    self.api.get_addr = get_addr;
    self.api.get_cite = get_cite;
    self.api.get_refs = get_refs;
    self.api.get_orig = async function ({name}) {
      if (!self.orig[name]) {
        self.orig[name] = await get_orig({name});
      }
      return self.orig[name];
    };
    self.api.get_deps = async function ({name}) {
      if (!self.deps[name]) {
        self.deps[name] = await get_deps({name});
      }
      return self.deps[name];
    };
    self.api.get_name = async function ({addr}) {
      if (!self.name[addr]) {
        self.name[addr] = await get_name({addr});
      };
      return self.name[addr];
    };
    self.api.get_post = async function ({poid}) {
      if (!self.post[poid]) {
        self.post[poid] = await get_post({poid});
      };
      return self.post[poid];
    };
    self.lib = lib;

    self.do_watch = (poid) => {
      self.ws.send(lib.bytes_concat([
        [lib.DO_WATCH],
        lib.hex_to_bytes(poid),
      ]));
    };

    self.do_post = (post, pkey) => {
      //console.log("posting", lib.bytes_concat([
        //[lib.POST],
        //lib.post_to_bytes(lib.sign_post(post, pkey)),
      //]));
      self.ws.send(lib.bytes_concat([
        [lib.DO_POST],
        lib.post_to_bytes(lib.sign_post(post, pkey)),
      ]));
    };

    self.ws.binaryType = "arraybuffer";

    self.ws.onopen = async function() {
      console.log("ws: connected");
    };

    self.ws.onmessage = async (msg) => {
      var data = new Uint8Array(msg.data);
      console.log("ws: got", data);
      var indx = 0;
      while (indx < data.length) {
        switch (data[indx]) {
          case lib.POST:
            var poid = lib.bytes_to_hex(data.slice(indx+1, indx+9));
            var plen = lib.bytes_to_uint32(data.slice(indx+9, indx+13));
            var post = lib.bytes_to_post(data.slice(indx+13, indx+13+plen));
            indx += 13+plen;
            self.post[poid] = post;
            //console.log("Got post "+poid+":", JSON.stringify(post));
            break;
          case lib.CITE:
            var poid = lib.bytes_to_hex(data.slice(indx+1, indx+9));
            var from = lib.bytes_to_uint32(data.slice(indx+9, indx+13));
            var upto = lib.bytes_to_uint32(data.slice(indx+13, indx+17));
            self.cite[poid] = self.cite[poid] || [];
            for (var i = from; i < upto; ++i) {
              self.cite[poid][i] = lib.bytes_to_hex(data.slice(indx+17+(i-from)*8, indx+17+(i-from)*8+8));
              //console.log("Got cite "+i+":", self.cite[poid][i]);
            };
            indx += 17+i*8+8;
            break;
          case lib.NAME:
            var addr = lib.bytes_to_hex(data.slice(indx+1, indx+21));
            var nlen = lib.bytes_to_uint32(data.slice(indx+21, indx+25));
            var name = lib.bytes_to_string(data.slice(indx+25, indx+25+nlen));
            self.name[addr] = name;
            indx += 25 + nlen;
            //console.log("Got name: "+addr+" "+name);
            break;
          case lib.ROOM:
            // TODO
            break;
          default:
            process.exit();
        };
      };
    };

    return self;
  };

  return {
    request,
    query,
    post,
    register,
    get,
    get_name,
    get_addr,
    get_refs,
    get_cite,
    get_post,
    direct,
  };
};
//(async () => {
  //var moonad = module.exports({url: "http://localhost"}).direct();
  ////setInterval(() => {
    ////console.log(moonad.cite);
  ////}, 1000);

  //var pkey = "0x000000000000000000000000000000000000000000000000000000000000000000000001";
  //var addr = sig.addressFromKey(pkey);
  ////moonad.api.register({addr, name: "Foo"});

  //setTimeout(() => {
    //moonad.do_post({cite:"0x0000000000000000", head: "abc", body: "def"}, pkey);
  //}, 2500);

//})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var request = __webpack_require__(34)

module.exports = function (url, options) {
  return new Promise(function (resolve, reject) {
    request(url, options, function (err, data) {
      if (err) reject(err);
      else resolve(data);
    });
  });
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var queryString = __webpack_require__(35)
var setQuery = __webpack_require__(38)
var assign = __webpack_require__(16)
var ensureHeader = __webpack_require__(39)

// this is replaced in the browser
var request = __webpack_require__(40)

var mimeTypeJson = 'application/json'
var noop = function () {}

module.exports = xhrRequest
function xhrRequest (url, opt, cb) {
  if (!url || typeof url !== 'string') {
    throw new TypeError('must specify a URL')
  }
  if (typeof opt === 'function') {
    cb = opt
    opt = {}
  }
  if (cb && typeof cb !== 'function') {
    throw new TypeError('expected cb to be undefined or a function')
  }

  cb = cb || noop
  opt = opt || {}

  var defaultResponse = opt.json ? 'json' : 'text'
  opt = assign({ responseType: defaultResponse }, opt)

  var headers = opt.headers || {}
  var method = (opt.method || 'GET').toUpperCase()
  var query = opt.query
  if (query) {
    if (typeof query !== 'string') {
      query = queryString.stringify(query)
    }
    url = setQuery(url, query)
  }

  // allow json response
  if (opt.responseType === 'json') {
    ensureHeader(headers, 'Accept', mimeTypeJson)
  }

  // if body content is json
  if (opt.json && method !== 'GET' && method !== 'HEAD') {
    ensureHeader(headers, 'Content-Type', mimeTypeJson)
    opt.body = JSON.stringify(opt.body)
  }

  opt.method = method
  opt.url = url
  opt.headers = headers
  delete opt.query
  delete opt.json

  return request(opt, cb)
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(36);
var objectAssign = __webpack_require__(16);
var decodeComponent = __webpack_require__(37);

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

function extract(str) {
	var queryStart = str.indexOf('?');
	if (queryStart === -1) {
		return '';
	}
	return str.slice(queryStart + 1);
}

function parse(str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^[?#&]/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeComponent(val);

		formatter(decodeComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	if (opts.sort === false) {
		opts.sort = function () {};
	}

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort(opts.sort).map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

exports.parseUrl = function (str, opts) {
	return {
		url: str.split('?')[0] || '',
		query: parse(extract(str), opts)
	};
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = urlSetQuery
function urlSetQuery (url, query) {
  if (query) {
    // remove optional leading symbols
    query = query.trim().replace(/^(\?|#|&)/, '')

    // don't append empty query
    query = query ? ('?' + query) : query

    var parts = url.split(/[\?\#]/)
    var start = parts[0]
    if (query && /\:\/\/[^\/]*$/.test(start)) {
      // e.g. http://foo.com -> http://foo.com/
      start = start + '/'
    }
    var match = url.match(/(\#.*)$/)
    url = start + query
    if (match) { // add hash back in
      url = url + match[0]
    }
  }
  return url
}


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = ensureHeader
function ensureHeader (headers, key, value) {
  var lower = key.toLowerCase()
  if (!headers[key] && !headers[lower]) {
    headers[key] = value
  }
}


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var xhr = __webpack_require__(41)
var normalize = __webpack_require__(46)
var noop = function () {}

module.exports = xhrRequest
function xhrRequest (opt, cb) {
  delete opt.uri

  // for better JSON.parse error handling than xhr module
  var useJson = false
  if (opt.responseType === 'json') {
    opt.responseType = 'text'
    useJson = true
  }

  var req = xhr(opt, function xhrRequestResult (err, resp, body) {
    if (useJson && !err) {
      try {
        var text = resp.rawRequest.responseText
        body = JSON.parse(text)
      } catch (e) {
        err = e
      }
    }

    resp = normalize(opt, resp)
    if (err) cb(err, null, resp)
    else cb(err, body, resp)
    cb = noop
  })

  // Patch abort() so that it also calls the callback, but with an error
  var onabort = req.onabort
  req.onabort = function () {
    var ret = onabort.apply(req, Array.prototype.slice.call(arguments))
    cb(new Error('XHR Aborted'))
    cb = noop
    return ret
  }

  return req
}


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var window = __webpack_require__(42)
var isFunction = __webpack_require__(43)
var parseHeaders = __webpack_require__(44)
var xtend = __webpack_require__(45)

module.exports = createXHR
// Allow use of default import syntax in TypeScript
module.exports.default = createXHR;
createXHR.XMLHttpRequest = window.XMLHttpRequest || noop
createXHR.XDomainRequest = "withCredentials" in (new createXHR.XMLHttpRequest()) ? createXHR.XMLHttpRequest : window.XDomainRequest

forEachArray(["get", "put", "post", "patch", "head", "delete"], function(method) {
    createXHR[method === "delete" ? "del" : method] = function(uri, options, callback) {
        options = initParams(uri, options, callback)
        options.method = method.toUpperCase()
        return _createXHR(options)
    }
})

function forEachArray(array, iterator) {
    for (var i = 0; i < array.length; i++) {
        iterator(array[i])
    }
}

function isEmpty(obj){
    for(var i in obj){
        if(obj.hasOwnProperty(i)) return false
    }
    return true
}

function initParams(uri, options, callback) {
    var params = uri

    if (isFunction(options)) {
        callback = options
        if (typeof uri === "string") {
            params = {uri:uri}
        }
    } else {
        params = xtend(options, {uri: uri})
    }

    params.callback = callback
    return params
}

function createXHR(uri, options, callback) {
    options = initParams(uri, options, callback)
    return _createXHR(options)
}

function _createXHR(options) {
    if(typeof options.callback === "undefined"){
        throw new Error("callback argument missing")
    }

    var called = false
    var callback = function cbOnce(err, response, body){
        if(!called){
            called = true
            options.callback(err, response, body)
        }
    }

    function readystatechange() {
        if (xhr.readyState === 4) {
            setTimeout(loadFunc, 0)
        }
    }

    function getBody() {
        // Chrome with requestType=blob throws errors arround when even testing access to responseText
        var body = undefined

        if (xhr.response) {
            body = xhr.response
        } else {
            body = xhr.responseText || getXml(xhr)
        }

        if (isJson) {
            try {
                body = JSON.parse(body)
            } catch (e) {}
        }

        return body
    }

    function errorFunc(evt) {
        clearTimeout(timeoutTimer)
        if(!(evt instanceof Error)){
            evt = new Error("" + (evt || "Unknown XMLHttpRequest Error") )
        }
        evt.statusCode = 0
        return callback(evt, failureResponse)
    }

    // will load the data & process the response in a special response object
    function loadFunc() {
        if (aborted) return
        var status
        clearTimeout(timeoutTimer)
        if(options.useXDR && xhr.status===undefined) {
            //IE8 CORS GET successful response doesn't have a status field, but body is fine
            status = 200
        } else {
            status = (xhr.status === 1223 ? 204 : xhr.status)
        }
        var response = failureResponse
        var err = null

        if (status !== 0){
            response = {
                body: getBody(),
                statusCode: status,
                method: method,
                headers: {},
                url: uri,
                rawRequest: xhr
            }
            if(xhr.getAllResponseHeaders){ //remember xhr can in fact be XDR for CORS in IE
                response.headers = parseHeaders(xhr.getAllResponseHeaders())
            }
        } else {
            err = new Error("Internal XMLHttpRequest Error")
        }
        return callback(err, response, response.body)
    }

    var xhr = options.xhr || null

    if (!xhr) {
        if (options.cors || options.useXDR) {
            xhr = new createXHR.XDomainRequest()
        }else{
            xhr = new createXHR.XMLHttpRequest()
        }
    }

    var key
    var aborted
    var uri = xhr.url = options.uri || options.url
    var method = xhr.method = options.method || "GET"
    var body = options.body || options.data
    var headers = xhr.headers = options.headers || {}
    var sync = !!options.sync
    var isJson = false
    var timeoutTimer
    var failureResponse = {
        body: undefined,
        headers: {},
        statusCode: 0,
        method: method,
        url: uri,
        rawRequest: xhr
    }

    if ("json" in options && options.json !== false) {
        isJson = true
        headers["accept"] || headers["Accept"] || (headers["Accept"] = "application/json") //Don't override existing accept header declared by user
        if (method !== "GET" && method !== "HEAD") {
            headers["content-type"] || headers["Content-Type"] || (headers["Content-Type"] = "application/json") //Don't override existing accept header declared by user
            body = JSON.stringify(options.json === true ? body : options.json)
        }
    }

    xhr.onreadystatechange = readystatechange
    xhr.onload = loadFunc
    xhr.onerror = errorFunc
    // IE9 must have onprogress be set to a unique function.
    xhr.onprogress = function () {
        // IE must die
    }
    xhr.onabort = function(){
        aborted = true;
    }
    xhr.ontimeout = errorFunc
    xhr.open(method, uri, !sync, options.username, options.password)
    //has to be after open
    if(!sync) {
        xhr.withCredentials = !!options.withCredentials
    }
    // Cannot set timeout with sync request
    // not setting timeout on the xhr object, because of old webkits etc. not handling that correctly
    // both npm's request and jquery 1.x use this kind of timeout, so this is being consistent
    if (!sync && options.timeout > 0 ) {
        timeoutTimer = setTimeout(function(){
            if (aborted) return
            aborted = true//IE9 may still call readystatechange
            xhr.abort("timeout")
            var e = new Error("XMLHttpRequest timeout")
            e.code = "ETIMEDOUT"
            errorFunc(e)
        }, options.timeout )
    }

    if (xhr.setRequestHeader) {
        for(key in headers){
            if(headers.hasOwnProperty(key)){
                xhr.setRequestHeader(key, headers[key])
            }
        }
    } else if (options.headers && !isEmpty(options.headers)) {
        throw new Error("Headers cannot be set on an XDomainRequest object")
    }

    if ("responseType" in options) {
        xhr.responseType = options.responseType
    }

    if ("beforeSend" in options &&
        typeof options.beforeSend === "function"
    ) {
        options.beforeSend(xhr)
    }

    // Microsoft Edge browser sends "undefined" when send is called with undefined value.
    // XMLHttpRequest spec says to pass null as body to indicate no body
    // See https://github.com/naugtur/xhr/issues/100.
    xhr.send(body || null)

    return xhr


}

function getXml(xhr) {
    // xhr.responseXML will throw Exception "InvalidStateError" or "DOMException"
    // See https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseXML.
    try {
        if (xhr.responseType === "document") {
            return xhr.responseXML
        }
        var firefoxBugTakenEffect = xhr.responseXML && xhr.responseXML.documentElement.nodeName === "parsererror"
        if (xhr.responseType === "" && !firefoxBugTakenEffect) {
            return xhr.responseXML
        }
    } catch (e) {}

    return null
}

function noop() {}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  if (!fn) {
    return false
  }
  var string = toString.call(fn)
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

var trim = function(string) {
  return string.replace(/^\s+|\s+$/g, '');
}
  , isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  var headersArr = trim(headers).split('\n')

  for (var i = 0; i < headersArr.length; i++) {
    var row = headersArr[i]
    var index = row.indexOf(':')
    , key = trim(row.slice(0, index)).toLowerCase()
    , value = trim(row.slice(index + 1))

    if (typeof(result[key]) === 'undefined') {
      result[key] = value
    } else if (isArray(result[key])) {
      result[key].push(value)
    } else {
      result[key] = [ result[key], value ]
    }
  }

  return result
}


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = getResponse
function getResponse (opt, resp) {
  if (!resp) return null
  return {
    statusCode: resp.statusCode,
    headers: resp.headers,
    method: opt.method,
    url: opt.url,
    // the XHR object in browser, http response in Node
    rawRequest: resp.rawRequest ? resp.rawRequest : resp
  }
}


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/*! simple-peer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var debug = __webpack_require__(51)('simple-peer')
var getBrowserRTC = __webpack_require__(54)
var randombytes = __webpack_require__(55)
var stream = __webpack_require__(56)
var queueMicrotask = __webpack_require__(65) // TODO: remove when Node 10 is not supported

var MAX_BUFFERED_AMOUNT = 64 * 1024
var ICECOMPLETE_TIMEOUT = 5 * 1000
var CHANNEL_CLOSING_TIMEOUT = 5 * 1000

// HACK: Filter trickle lines when trickle is disabled #354
function filterTrickle (sdp) {
  return sdp.replace(/a=ice-options:trickle\s\n/g, '')
}

function makeError (err, code) {
  if (typeof err === 'string') err = new Error(err)
  if (err.error instanceof Error) err = err.error
  err.code = code
  return err
}

function warn (message) {
  console.warn(message)
}

/**
 * WebRTC peer connection. Same API as node core `net.Socket`, plus a few extra methods.
 * Duplex stream.
 * @param {Object} opts
 */
class Peer extends stream.Duplex {
  constructor (opts) {
    opts = Object.assign({
      allowHalfOpen: false
    }, opts)

    super(opts)

    this._id = randombytes(4).toString('hex').slice(0, 7)
    this._debug('new peer %o', opts)

    this.channelName = opts.initiator
      ? opts.channelName || randombytes(20).toString('hex')
      : null

    this.initiator = opts.initiator || false
    this.channelConfig = opts.channelConfig || Peer.channelConfig
    this.negotiated = this.channelConfig.negotiated
    this.config = Object.assign({}, Peer.config, opts.config)
    this.offerOptions = opts.offerOptions || {}
    this.answerOptions = opts.answerOptions || {}
    this.sdpTransform = opts.sdpTransform || (sdp => sdp)
    this.streams = opts.streams || (opts.stream ? [opts.stream] : []) // support old "stream" option
    this.trickle = opts.trickle !== undefined ? opts.trickle : true
    this.allowHalfTrickle = opts.allowHalfTrickle !== undefined ? opts.allowHalfTrickle : false
    this.iceCompleteTimeout = opts.iceCompleteTimeout || ICECOMPLETE_TIMEOUT

    this.destroyed = false
    this._connected = false

    this.remoteAddress = undefined
    this.remoteFamily = undefined
    this.remotePort = undefined
    this.localAddress = undefined
    this.localFamily = undefined
    this.localPort = undefined

    this._wrtc = (opts.wrtc && typeof opts.wrtc === 'object')
      ? opts.wrtc
      : getBrowserRTC()

    if (!this._wrtc) {
      if (typeof window === 'undefined') {
        throw makeError('No WebRTC support: Specify `opts.wrtc` option in this environment', 'ERR_WEBRTC_SUPPORT')
      } else {
        throw makeError('No WebRTC support: Not a supported browser', 'ERR_WEBRTC_SUPPORT')
      }
    }

    this._pcReady = false
    this._channelReady = false
    this._iceComplete = false // ice candidate trickle done (got null candidate)
    this._iceCompleteTimer = null // send an offer/answer anyway after some timeout
    this._channel = null
    this._pendingCandidates = []

    this._isNegotiating = this.negotiated ? false : !this.initiator // is this peer waiting for negotiation to complete?
    this._batchedNegotiation = false // batch synchronous negotiations
    this._queuedNegotiation = false // is there a queued negotiation request?
    this._sendersAwaitingStable = []
    this._senderMap = new Map()
    this._firstStable = true
    this._closingInterval = null

    this._remoteTracks = []
    this._remoteStreams = []

    this._chunk = null
    this._cb = null
    this._interval = null

    try {
      this._pc = new (this._wrtc.RTCPeerConnection)(this.config)
    } catch (err) {
      queueMicrotask(() => this.destroy(makeError(err, 'ERR_PC_CONSTRUCTOR')))
      return
    }

    // We prefer feature detection whenever possible, but sometimes that's not
    // possible for certain implementations.
    this._isReactNativeWebrtc = typeof this._pc._peerConnectionId === 'number'

    this._pc.oniceconnectionstatechange = () => {
      this._onIceStateChange()
    }
    this._pc.onicegatheringstatechange = () => {
      this._onIceStateChange()
    }
    this._pc.onconnectionstatechange = () => {
      this._onConnectionStateChange()
    }
    this._pc.onsignalingstatechange = () => {
      this._onSignalingStateChange()
    }
    this._pc.onicecandidate = event => {
      this._onIceCandidate(event)
    }

    // Other spec events, unused by this implementation:
    // - onconnectionstatechange
    // - onicecandidateerror
    // - onfingerprintfailure
    // - onnegotiationneeded

    if (this.initiator || this.negotiated) {
      this._setupData({
        channel: this._pc.createDataChannel(this.channelName, this.channelConfig)
      })
    } else {
      this._pc.ondatachannel = event => {
        this._setupData(event)
      }
    }

    if (this.streams) {
      this.streams.forEach(stream => {
        this.addStream(stream)
      })
    }
    this._pc.ontrack = event => {
      this._onTrack(event)
    }

    if (this.initiator) {
      this._needsNegotiation()
    }

    this._onFinishBound = () => {
      this._onFinish()
    }
    this.once('finish', this._onFinishBound)
  }

  get bufferSize () {
    return (this._channel && this._channel.bufferedAmount) || 0
  }

  // HACK: it's possible channel.readyState is "closing" before peer.destroy() fires
  // https://bugs.chromium.org/p/chromium/issues/detail?id=882743
  get connected () {
    return (this._connected && this._channel.readyState === 'open')
  }

  address () {
    return { port: this.localPort, family: this.localFamily, address: this.localAddress }
  }

  signal (data) {
    if (this.destroyed) throw makeError('cannot signal after peer is destroyed', 'ERR_SIGNALING')
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data)
      } catch (err) {
        data = {}
      }
    }
    this._debug('signal()')

    if (data.renegotiate && this.initiator) {
      this._debug('got request to renegotiate')
      this._needsNegotiation()
    }
    if (data.transceiverRequest && this.initiator) {
      this._debug('got request for transceiver')
      this.addTransceiver(data.transceiverRequest.kind, data.transceiverRequest.init)
    }
    if (data.candidate) {
      if (this._pc.remoteDescription && this._pc.remoteDescription.type) {
        this._addIceCandidate(data.candidate)
      } else {
        this._pendingCandidates.push(data.candidate)
      }
    }
    if (data.sdp) {
      this._pc.setRemoteDescription(new (this._wrtc.RTCSessionDescription)(data))
        .then(() => {
          if (this.destroyed) return

          this._pendingCandidates.forEach(candidate => {
            this._addIceCandidate(candidate)
          })
          this._pendingCandidates = []

          if (this._pc.remoteDescription.type === 'offer') this._createAnswer()
        })
        .catch(err => {
          this.destroy(makeError(err, 'ERR_SET_REMOTE_DESCRIPTION'))
        })
    }
    if (!data.sdp && !data.candidate && !data.renegotiate && !data.transceiverRequest) {
      this.destroy(makeError('signal() called with invalid signal data', 'ERR_SIGNALING'))
    }
  }

  _addIceCandidate (candidate) {
    var iceCandidateObj = new this._wrtc.RTCIceCandidate(candidate)
    this._pc.addIceCandidate(iceCandidateObj)
      .catch(err => {
        if (!iceCandidateObj.address || iceCandidateObj.address.endsWith('.local')) {
          warn('Ignoring unsupported ICE candidate.')
        } else {
          this.destroy(makeError(err, 'ERR_ADD_ICE_CANDIDATE'))
        }
      })
  }

  /**
   * Send text/binary data to the remote peer.
   * @param {ArrayBufferView|ArrayBuffer|Buffer|string|Blob} chunk
   */
  send (chunk) {
    this._channel.send(chunk)
  }

  /**
   * Add a Transceiver to the connection.
   * @param {String} kind
   * @param {Object} init
   */
  addTransceiver (kind, init) {
    this._debug('addTransceiver()')

    if (this.initiator) {
      try {
        this._pc.addTransceiver(kind, init)
        this._needsNegotiation()
      } catch (err) {
        this.destroy(makeError(err, 'ERR_ADD_TRANSCEIVER'))
      }
    } else {
      this.emit('signal', { // request initiator to renegotiate
        transceiverRequest: { kind, init }
      })
    }
  }

  /**
   * Add a MediaStream to the connection.
   * @param {MediaStream} stream
   */
  addStream (stream) {
    this._debug('addStream()')

    stream.getTracks().forEach(track => {
      this.addTrack(track, stream)
    })
  }

  /**
   * Add a MediaStreamTrack to the connection.
   * @param {MediaStreamTrack} track
   * @param {MediaStream} stream
   */
  addTrack (track, stream) {
    this._debug('addTrack()')

    var submap = this._senderMap.get(track) || new Map() // nested Maps map [track, stream] to sender
    var sender = submap.get(stream)
    if (!sender) {
      sender = this._pc.addTrack(track, stream)
      submap.set(stream, sender)
      this._senderMap.set(track, submap)
      this._needsNegotiation()
    } else if (sender.removed) {
      throw makeError('Track has been removed. You should enable/disable tracks that you want to re-add.', 'ERR_SENDER_REMOVED')
    } else {
      throw makeError('Track has already been added to that stream.', 'ERR_SENDER_ALREADY_ADDED')
    }
  }

  /**
   * Replace a MediaStreamTrack by another in the connection.
   * @param {MediaStreamTrack} oldTrack
   * @param {MediaStreamTrack} newTrack
   * @param {MediaStream} stream
   */
  replaceTrack (oldTrack, newTrack, stream) {
    this._debug('replaceTrack()')

    var submap = this._senderMap.get(oldTrack)
    var sender = submap ? submap.get(stream) : null
    if (!sender) {
      throw makeError('Cannot replace track that was never added.', 'ERR_TRACK_NOT_ADDED')
    }
    if (newTrack) this._senderMap.set(newTrack, submap)

    if (sender.replaceTrack != null) {
      sender.replaceTrack(newTrack)
    } else {
      this.destroy(makeError('replaceTrack is not supported in this browser', 'ERR_UNSUPPORTED_REPLACETRACK'))
    }
  }

  /**
   * Remove a MediaStreamTrack from the connection.
   * @param {MediaStreamTrack} track
   * @param {MediaStream} stream
   */
  removeTrack (track, stream) {
    this._debug('removeSender()')

    var submap = this._senderMap.get(track)
    var sender = submap ? submap.get(stream) : null
    if (!sender) {
      throw makeError('Cannot remove track that was never added.', 'ERR_TRACK_NOT_ADDED')
    }
    try {
      sender.removed = true
      this._pc.removeTrack(sender)
    } catch (err) {
      if (err.name === 'NS_ERROR_UNEXPECTED') {
        this._sendersAwaitingStable.push(sender) // HACK: Firefox must wait until (signalingState === stable) https://bugzilla.mozilla.org/show_bug.cgi?id=1133874
      } else {
        this.destroy(makeError(err, 'ERR_REMOVE_TRACK'))
      }
    }
    this._needsNegotiation()
  }

  /**
   * Remove a MediaStream from the connection.
   * @param {MediaStream} stream
   */
  removeStream (stream) {
    this._debug('removeSenders()')

    stream.getTracks().forEach(track => {
      this.removeTrack(track, stream)
    })
  }

  _needsNegotiation () {
    this._debug('_needsNegotiation')
    if (this._batchedNegotiation) return // batch synchronous renegotiations
    this._batchedNegotiation = true
    queueMicrotask(() => {
      this._batchedNegotiation = false
      this._debug('starting batched negotiation')
      this.negotiate()
    })
  }

  negotiate () {
    if (this.initiator) {
      if (this._isNegotiating) {
        this._queuedNegotiation = true
        this._debug('already negotiating, queueing')
      } else {
        this._debug('start negotiation')
        setTimeout(() => { // HACK: Chrome crashes if we immediately call createOffer
          this._createOffer()
        }, 0)
      }
    } else {
      if (this._isNegotiating) {
        this._queuedNegotiation = true
        this._debug('already negotiating, queueing')
      } else {
        this._debug('requesting negotiation from initiator')
        this.emit('signal', { // request initiator to renegotiate
          renegotiate: true
        })
      }
    }
    this._isNegotiating = true
  }

  // TODO: Delete this method once readable-stream is updated to contain a default
  // implementation of destroy() that automatically calls _destroy()
  // See: https://github.com/nodejs/readable-stream/issues/283
  destroy (err) {
    this._destroy(err, () => {})
  }

  _destroy (err, cb) {
    if (this.destroyed) return

    this._debug('destroy (error: %s)', err && (err.message || err))

    this.readable = this.writable = false

    if (!this._readableState.ended) this.push(null)
    if (!this._writableState.finished) this.end()

    this.destroyed = true
    this._connected = false
    this._pcReady = false
    this._channelReady = false
    this._remoteTracks = null
    this._remoteStreams = null
    this._senderMap = null

    clearInterval(this._closingInterval)
    this._closingInterval = null

    clearInterval(this._interval)
    this._interval = null
    this._chunk = null
    this._cb = null

    if (this._onFinishBound) this.removeListener('finish', this._onFinishBound)
    this._onFinishBound = null

    if (this._channel) {
      try {
        this._channel.close()
      } catch (err) {}

      this._channel.onmessage = null
      this._channel.onopen = null
      this._channel.onclose = null
      this._channel.onerror = null
    }
    if (this._pc) {
      try {
        this._pc.close()
      } catch (err) {}

      this._pc.oniceconnectionstatechange = null
      this._pc.onicegatheringstatechange = null
      this._pc.onsignalingstatechange = null
      this._pc.onicecandidate = null
      this._pc.ontrack = null
      this._pc.ondatachannel = null
    }
    this._pc = null
    this._channel = null

    if (err) this.emit('error', err)
    this.emit('close')
    cb()
  }

  _setupData (event) {
    if (!event.channel) {
      // In some situations `pc.createDataChannel()` returns `undefined` (in wrtc),
      // which is invalid behavior. Handle it gracefully.
      // See: https://github.com/feross/simple-peer/issues/163
      return this.destroy(makeError('Data channel event is missing `channel` property', 'ERR_DATA_CHANNEL'))
    }

    this._channel = event.channel
    this._channel.binaryType = 'arraybuffer'

    if (typeof this._channel.bufferedAmountLowThreshold === 'number') {
      this._channel.bufferedAmountLowThreshold = MAX_BUFFERED_AMOUNT
    }

    this.channelName = this._channel.label

    this._channel.onmessage = event => {
      this._onChannelMessage(event)
    }
    this._channel.onbufferedamountlow = () => {
      this._onChannelBufferedAmountLow()
    }
    this._channel.onopen = () => {
      this._onChannelOpen()
    }
    this._channel.onclose = () => {
      this._onChannelClose()
    }
    this._channel.onerror = err => {
      this.destroy(makeError(err, 'ERR_DATA_CHANNEL'))
    }

    // HACK: Chrome will sometimes get stuck in readyState "closing", let's check for this condition
    // https://bugs.chromium.org/p/chromium/issues/detail?id=882743
    var isClosing = false
    this._closingInterval = setInterval(() => { // No "onclosing" event
      if (this._channel && this._channel.readyState === 'closing') {
        if (isClosing) this._onChannelClose() // closing timed out: equivalent to onclose firing
        isClosing = true
      } else {
        isClosing = false
      }
    }, CHANNEL_CLOSING_TIMEOUT)
  }

  _read () {}

  _write (chunk, encoding, cb) {
    if (this.destroyed) return cb(makeError('cannot write after peer is destroyed', 'ERR_DATA_CHANNEL'))

    if (this._connected) {
      try {
        this.send(chunk)
      } catch (err) {
        return this.destroy(makeError(err, 'ERR_DATA_CHANNEL'))
      }
      if (this._channel.bufferedAmount > MAX_BUFFERED_AMOUNT) {
        this._debug('start backpressure: bufferedAmount %d', this._channel.bufferedAmount)
        this._cb = cb
      } else {
        cb(null)
      }
    } else {
      this._debug('write before connect')
      this._chunk = chunk
      this._cb = cb
    }
  }

  // When stream finishes writing, close socket. Half open connections are not
  // supported.
  _onFinish () {
    if (this.destroyed) return

    // Wait a bit before destroying so the socket flushes.
    // TODO: is there a more reliable way to accomplish this?
    const destroySoon = () => {
      setTimeout(() => this.destroy(), 1000)
    }

    if (this._connected) {
      destroySoon()
    } else {
      this.once('connect', destroySoon)
    }
  }

  _startIceCompleteTimeout () {
    if (this.destroyed) return
    if (this._iceCompleteTimer) return
    this._debug('started iceComplete timeout')
    this._iceCompleteTimer = setTimeout(() => {
      if (!this._iceComplete) {
        this._iceComplete = true
        this._debug('iceComplete timeout completed')
        this.emit('iceTimeout')
        this.emit('_iceComplete')
      }
    }, this.iceCompleteTimeout)
  }

  _createOffer () {
    if (this.destroyed) return

    this._pc.createOffer(this.offerOptions)
      .then(offer => {
        if (this.destroyed) return
        if (!this.trickle && !this.allowHalfTrickle) offer.sdp = filterTrickle(offer.sdp)
        offer.sdp = this.sdpTransform(offer.sdp)

        const sendOffer = () => {
          if (this.destroyed) return
          var signal = this._pc.localDescription || offer
          this._debug('signal')
          this.emit('signal', {
            type: signal.type,
            sdp: signal.sdp
          })
        }

        const onSuccess = () => {
          this._debug('createOffer success')
          if (this.destroyed) return
          if (this.trickle || this._iceComplete) sendOffer()
          else this.once('_iceComplete', sendOffer) // wait for candidates
        }

        const onError = err => {
          this.destroy(makeError(err, 'ERR_SET_LOCAL_DESCRIPTION'))
        }

        this._pc.setLocalDescription(offer)
          .then(onSuccess)
          .catch(onError)
      })
      .catch(err => {
        this.destroy(makeError(err, 'ERR_CREATE_OFFER'))
      })
  }

  _requestMissingTransceivers () {
    if (this._pc.getTransceivers) {
      this._pc.getTransceivers().forEach(transceiver => {
        if (!transceiver.mid && transceiver.sender.track && !transceiver.requested) {
          transceiver.requested = true // HACK: Safari returns negotiated transceivers with a null mid
          this.addTransceiver(transceiver.sender.track.kind)
        }
      })
    }
  }

  _createAnswer () {
    if (this.destroyed) return

    this._pc.createAnswer(this.answerOptions)
      .then(answer => {
        if (this.destroyed) return
        if (!this.trickle && !this.allowHalfTrickle) answer.sdp = filterTrickle(answer.sdp)
        answer.sdp = this.sdpTransform(answer.sdp)

        const sendAnswer = () => {
          if (this.destroyed) return
          var signal = this._pc.localDescription || answer
          this._debug('signal')
          this.emit('signal', {
            type: signal.type,
            sdp: signal.sdp
          })
          if (!this.initiator) this._requestMissingTransceivers()
        }

        const onSuccess = () => {
          if (this.destroyed) return
          if (this.trickle || this._iceComplete) sendAnswer()
          else this.once('_iceComplete', sendAnswer)
        }

        const onError = err => {
          this.destroy(makeError(err, 'ERR_SET_LOCAL_DESCRIPTION'))
        }

        this._pc.setLocalDescription(answer)
          .then(onSuccess)
          .catch(onError)
      })
      .catch(err => {
        this.destroy(makeError(err, 'ERR_CREATE_ANSWER'))
      })
  }

  _onConnectionStateChange () {
    if (this.destroyed) return
    if (this._pc.connectionState === 'failed') {
      this.destroy(makeError('Connection failed.', 'ERR_CONNECTION_FAILURE'))
    }
  }

  _onIceStateChange () {
    if (this.destroyed) return
    var iceConnectionState = this._pc.iceConnectionState
    var iceGatheringState = this._pc.iceGatheringState

    this._debug(
      'iceStateChange (connection: %s) (gathering: %s)',
      iceConnectionState,
      iceGatheringState
    )
    this.emit('iceStateChange', iceConnectionState, iceGatheringState)

    if (iceConnectionState === 'connected' || iceConnectionState === 'completed') {
      this._pcReady = true
      this._maybeReady()
    }
    if (iceConnectionState === 'failed') {
      this.destroy(makeError('Ice connection failed.', 'ERR_ICE_CONNECTION_FAILURE'))
    }
    if (iceConnectionState === 'closed') {
      this.destroy(makeError('Ice connection closed.', 'ERR_ICE_CONNECTION_CLOSED'))
    }
  }

  getStats (cb) {
    // statreports can come with a value array instead of properties
    const flattenValues = report => {
      if (Object.prototype.toString.call(report.values) === '[object Array]') {
        report.values.forEach(value => {
          Object.assign(report, value)
        })
      }
      return report
    }

    // Promise-based getStats() (standard)
    if (this._pc.getStats.length === 0 || this._isReactNativeWebrtc) {
      this._pc.getStats()
        .then(res => {
          var reports = []
          res.forEach(report => {
            reports.push(flattenValues(report))
          })
          cb(null, reports)
        }, err => cb(err))

    // Single-parameter callback-based getStats() (non-standard)
    } else if (this._pc.getStats.length > 0) {
      this._pc.getStats(res => {
        // If we destroy connection in `connect` callback this code might happen to run when actual connection is already closed
        if (this.destroyed) return

        var reports = []
        res.result().forEach(result => {
          var report = {}
          result.names().forEach(name => {
            report[name] = result.stat(name)
          })
          report.id = result.id
          report.type = result.type
          report.timestamp = result.timestamp
          reports.push(flattenValues(report))
        })
        cb(null, reports)
      }, err => cb(err))

    // Unknown browser, skip getStats() since it's anyone's guess which style of
    // getStats() they implement.
    } else {
      cb(null, [])
    }
  }

  _maybeReady () {
    this._debug('maybeReady pc %s channel %s', this._pcReady, this._channelReady)
    if (this._connected || this._connecting || !this._pcReady || !this._channelReady) return

    this._connecting = true

    // HACK: We can't rely on order here, for details see https://github.com/js-platform/node-webrtc/issues/339
    const findCandidatePair = () => {
      if (this.destroyed) return

      this.getStats((err, items) => {
        if (this.destroyed) return

        // Treat getStats error as non-fatal. It's not essential.
        if (err) items = []

        var remoteCandidates = {}
        var localCandidates = {}
        var candidatePairs = {}
        var foundSelectedCandidatePair = false

        items.forEach(item => {
          // TODO: Once all browsers support the hyphenated stats report types, remove
          // the non-hypenated ones
          if (item.type === 'remotecandidate' || item.type === 'remote-candidate') {
            remoteCandidates[item.id] = item
          }
          if (item.type === 'localcandidate' || item.type === 'local-candidate') {
            localCandidates[item.id] = item
          }
          if (item.type === 'candidatepair' || item.type === 'candidate-pair') {
            candidatePairs[item.id] = item
          }
        })

        const setSelectedCandidatePair = selectedCandidatePair => {
          foundSelectedCandidatePair = true

          var local = localCandidates[selectedCandidatePair.localCandidateId]

          if (local && (local.ip || local.address)) {
            // Spec
            this.localAddress = local.ip || local.address
            this.localPort = Number(local.port)
          } else if (local && local.ipAddress) {
            // Firefox
            this.localAddress = local.ipAddress
            this.localPort = Number(local.portNumber)
          } else if (typeof selectedCandidatePair.googLocalAddress === 'string') {
            // TODO: remove this once Chrome 58 is released
            local = selectedCandidatePair.googLocalAddress.split(':')
            this.localAddress = local[0]
            this.localPort = Number(local[1])
          }
          if (this.localAddress) {
            this.localFamily = this.localAddress.includes(':') ? 'IPv6' : 'IPv4'
          }

          var remote = remoteCandidates[selectedCandidatePair.remoteCandidateId]

          if (remote && (remote.ip || remote.address)) {
            // Spec
            this.remoteAddress = remote.ip || remote.address
            this.remotePort = Number(remote.port)
          } else if (remote && remote.ipAddress) {
            // Firefox
            this.remoteAddress = remote.ipAddress
            this.remotePort = Number(remote.portNumber)
          } else if (typeof selectedCandidatePair.googRemoteAddress === 'string') {
            // TODO: remove this once Chrome 58 is released
            remote = selectedCandidatePair.googRemoteAddress.split(':')
            this.remoteAddress = remote[0]
            this.remotePort = Number(remote[1])
          }
          if (this.remoteAddress) {
            this.remoteFamily = this.remoteAddress.includes(':') ? 'IPv6' : 'IPv4'
          }

          this._debug(
            'connect local: %s:%s remote: %s:%s',
            this.localAddress, this.localPort, this.remoteAddress, this.remotePort
          )
        }

        items.forEach(item => {
          // Spec-compliant
          if (item.type === 'transport' && item.selectedCandidatePairId) {
            setSelectedCandidatePair(candidatePairs[item.selectedCandidatePairId])
          }

          // Old implementations
          if (
            (item.type === 'googCandidatePair' && item.googActiveConnection === 'true') ||
            ((item.type === 'candidatepair' || item.type === 'candidate-pair') && item.selected)
          ) {
            setSelectedCandidatePair(item)
          }
        })

        // Ignore candidate pair selection in browsers like Safari 11 that do not have any local or remote candidates
        // But wait until at least 1 candidate pair is available
        if (!foundSelectedCandidatePair && (!Object.keys(candidatePairs).length || Object.keys(localCandidates).length)) {
          setTimeout(findCandidatePair, 100)
          return
        } else {
          this._connecting = false
          this._connected = true
        }

        if (this._chunk) {
          try {
            this.send(this._chunk)
          } catch (err) {
            return this.destroy(makeError(err, 'ERR_DATA_CHANNEL'))
          }
          this._chunk = null
          this._debug('sent chunk from "write before connect"')

          var cb = this._cb
          this._cb = null
          cb(null)
        }

        // If `bufferedAmountLowThreshold` and 'onbufferedamountlow' are unsupported,
        // fallback to using setInterval to implement backpressure.
        if (typeof this._channel.bufferedAmountLowThreshold !== 'number') {
          this._interval = setInterval(() => this._onInterval(), 150)
          if (this._interval.unref) this._interval.unref()
        }

        this._debug('connect')
        this.emit('connect')
      })
    }
    findCandidatePair()
  }

  _onInterval () {
    if (!this._cb || !this._channel || this._channel.bufferedAmount > MAX_BUFFERED_AMOUNT) {
      return
    }
    this._onChannelBufferedAmountLow()
  }

  _onSignalingStateChange () {
    if (this.destroyed) return

    if (this._pc.signalingState === 'stable' && !this._firstStable) {
      this._isNegotiating = false

      // HACK: Firefox doesn't yet support removing tracks when signalingState !== 'stable'
      this._debug('flushing sender queue', this._sendersAwaitingStable)
      this._sendersAwaitingStable.forEach(sender => {
        this._pc.removeTrack(sender)
        this._queuedNegotiation = true
      })
      this._sendersAwaitingStable = []

      if (this._queuedNegotiation) {
        this._debug('flushing negotiation queue')
        this._queuedNegotiation = false
        this._needsNegotiation() // negotiate again
      }

      this._debug('negotiate')
      this.emit('negotiate')
    }
    this._firstStable = false

    this._debug('signalingStateChange %s', this._pc.signalingState)
    this.emit('signalingStateChange', this._pc.signalingState)
  }

  _onIceCandidate (event) {
    if (this.destroyed) return
    if (event.candidate && this.trickle) {
      this.emit('signal', {
        candidate: {
          candidate: event.candidate.candidate,
          sdpMLineIndex: event.candidate.sdpMLineIndex,
          sdpMid: event.candidate.sdpMid
        }
      })
    } else if (!event.candidate && !this._iceComplete) {
      this._iceComplete = true
      this.emit('_iceComplete')
    }
    // as soon as we've received one valid candidate start timeout
    if (event.candidate) {
      this._startIceCompleteTimeout()
    }
  }

  _onChannelMessage (event) {
    if (this.destroyed) return
    var data = event.data
    if (data instanceof ArrayBuffer) data = Buffer.from(data)
    this.push(data)
  }

  _onChannelBufferedAmountLow () {
    if (this.destroyed || !this._cb) return
    this._debug('ending backpressure: bufferedAmount %d', this._channel.bufferedAmount)
    var cb = this._cb
    this._cb = null
    cb(null)
  }

  _onChannelOpen () {
    if (this._connected || this.destroyed) return
    this._debug('on channel open')
    this._channelReady = true
    this._maybeReady()
  }

  _onChannelClose () {
    if (this.destroyed) return
    this._debug('on channel close')
    this.destroy()
  }

  _onTrack (event) {
    if (this.destroyed) return

    event.streams.forEach(eventStream => {
      this._debug('on track')
      this.emit('track', event.track, eventStream)

      this._remoteTracks.push({
        track: event.track,
        stream: eventStream
      })

      if (this._remoteStreams.some(remoteStream => {
        return remoteStream.id === eventStream.id
      })) return // Only fire one 'stream' event, even though there may be multiple tracks per stream

      this._remoteStreams.push(eventStream)
      queueMicrotask(() => {
        this.emit('stream', eventStream) // ensure all tracks have been added
      })
    })
  }

  _debug () {
    var args = [].slice.call(arguments)
    args[0] = '[' + this._id + '] ' + args[0]
    debug.apply(null, args)
  }
}

Peer.WEBRTC_SUPPORT = !!getBrowserRTC()

/**
 * Expose peer and data channel config for overriding all Peer
 * instances. Otherwise, just set opts.config or opts.channelConfig
 * when constructing a Peer.
 */
Peer.config = {
  iceServers: [
    {
      urls: 'stun:stun.l.google.com:19302'
    },
    {
      urls: 'stun:global.stun.twilio.com:3478?transport=udp'
    }
  ],
  sdpSemantics: 'unified-plan'
}

Peer.channelConfig = {}

module.exports = Peer

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8).Buffer))

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 49 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 50 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */
function log(...args) {
	// This hackery is required for IE8/9, where
	// the `console.log` function doesn't have 'apply'
	return typeof console === 'object' &&
		console.log &&
		console.log(...args);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(52)(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(53);

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* Active `debug` instances.
	*/
	createDebug.instances = [];

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return match;
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.enabled = createDebug.enabled(namespace);
		debug.useColors = createDebug.useColors();
		debug.color = selectColor(namespace);
		debug.destroy = destroy;
		debug.extend = extend;
		// Debug.formatArgs = formatArgs;
		// debug.rawLog = rawLog;

		// env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		createDebug.instances.push(debug);

		return debug;
	}

	function destroy() {
		const index = createDebug.instances.indexOf(this);
		if (index !== -1) {
			createDebug.instances.splice(index, 1);
			return true;
		}
		return false;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}

		for (i = 0; i < createDebug.instances.length; i++) {
			const instance = createDebug.instances[i];
			instance.enabled = createDebug.enabled(instance.namespace);
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),
/* 54 */
/***/ (function(module, exports) {

// originally pulled out of simple-peer

module.exports = function getBrowserRTC () {
  if (typeof window === 'undefined') return null
  var wrtc = {
    RTCPeerConnection: window.RTCPeerConnection || window.mozRTCPeerConnection ||
      window.webkitRTCPeerConnection,
    RTCSessionDescription: window.RTCSessionDescription ||
      window.mozRTCSessionDescription || window.webkitRTCSessionDescription,
    RTCIceCandidate: window.RTCIceCandidate || window.mozRTCIceCandidate ||
      window.webkitRTCIceCandidate
  }
  if (!wrtc.RTCPeerConnection) return null
  return wrtc
}


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

// limit of Crypto.getRandomValues()
// https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
var MAX_BYTES = 65536

// Node supports requesting up to this number of bytes
// https://github.com/nodejs/node/blob/master/lib/internal/crypto/random.js#L48
var MAX_UINT32 = 4294967295

function oldBrowser () {
  throw new Error('Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11')
}

var Buffer = __webpack_require__(17).Buffer
var crypto = global.crypto || global.msCrypto

if (crypto && crypto.getRandomValues) {
  module.exports = randomBytes
} else {
  module.exports = oldBrowser
}

function randomBytes (size, cb) {
  // phantomjs needs to throw
  if (size > MAX_UINT32) throw new RangeError('requested too many random bytes')

  var bytes = Buffer.allocUnsafe(size)

  if (size > 0) {  // getRandomValues fails on IE if size == 0
    if (size > MAX_BYTES) { // this is the max bytes crypto.getRandomValues
      // can do at once see https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
      for (var generated = 0; generated < size; generated += MAX_BYTES) {
        // buffer.slice automatically checks if the end is past the end of
        // the buffer so we don't have to here
        crypto.getRandomValues(bytes.slice(generated, generated + MAX_BYTES))
      }
    } else {
      crypto.getRandomValues(bytes)
    }
  }

  if (typeof cb === 'function') {
    return process.nextTick(function () {
      cb(null, bytes)
    })
  }

  return bytes
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4), __webpack_require__(3)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18);
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = __webpack_require__(23);
exports.Duplex = __webpack_require__(6);
exports.Transform = __webpack_require__(25);
exports.PassThrough = __webpack_require__(63);
exports.finished = __webpack_require__(14);
exports.pipeline = __webpack_require__(64);


/***/ }),
/* 57 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(8),
    Buffer = _require.Buffer;

var _require2 = __webpack_require__(59),
    inspect = _require2.inspect;

var custom = inspect && inspect.custom || 'inspect';

function copyBuffer(src, target, offset) {
  Buffer.prototype.copy.call(src, target, offset);
}

module.exports =
/*#__PURE__*/
function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  _createClass(BufferList, [{
    key: "push",
    value: function push(v) {
      var entry = {
        data: v,
        next: null
      };
      if (this.length > 0) this.tail.next = entry;else this.head = entry;
      this.tail = entry;
      ++this.length;
    }
  }, {
    key: "unshift",
    value: function unshift(v) {
      var entry = {
        data: v,
        next: this.head
      };
      if (this.length === 0) this.tail = entry;
      this.head = entry;
      ++this.length;
    }
  }, {
    key: "shift",
    value: function shift() {
      if (this.length === 0) return;
      var ret = this.head.data;
      if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
      --this.length;
      return ret;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.head = this.tail = null;
      this.length = 0;
    }
  }, {
    key: "join",
    value: function join(s) {
      if (this.length === 0) return '';
      var p = this.head;
      var ret = '' + p.data;

      while (p = p.next) {
        ret += s + p.data;
      }

      return ret;
    }
  }, {
    key: "concat",
    value: function concat(n) {
      if (this.length === 0) return Buffer.alloc(0);
      var ret = Buffer.allocUnsafe(n >>> 0);
      var p = this.head;
      var i = 0;

      while (p) {
        copyBuffer(p.data, ret, i);
        i += p.data.length;
        p = p.next;
      }

      return ret;
    } // Consumes a specified amount of bytes or characters from the buffered data.

  }, {
    key: "consume",
    value: function consume(n, hasStrings) {
      var ret;

      if (n < this.head.data.length) {
        // `slice` is the same for buffers and strings.
        ret = this.head.data.slice(0, n);
        this.head.data = this.head.data.slice(n);
      } else if (n === this.head.data.length) {
        // First chunk is a perfect match.
        ret = this.shift();
      } else {
        // Result spans more than one buffer.
        ret = hasStrings ? this._getString(n) : this._getBuffer(n);
      }

      return ret;
    }
  }, {
    key: "first",
    value: function first() {
      return this.head.data;
    } // Consumes a specified amount of characters from the buffered data.

  }, {
    key: "_getString",
    value: function _getString(n) {
      var p = this.head;
      var c = 1;
      var ret = p.data;
      n -= ret.length;

      while (p = p.next) {
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length) ret += str;else ret += str.slice(0, n);
        n -= nb;

        if (n === 0) {
          if (nb === str.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = str.slice(nb);
          }

          break;
        }

        ++c;
      }

      this.length -= c;
      return ret;
    } // Consumes a specified amount of bytes from the buffered data.

  }, {
    key: "_getBuffer",
    value: function _getBuffer(n) {
      var ret = Buffer.allocUnsafe(n);
      var p = this.head;
      var c = 1;
      p.data.copy(ret);
      n -= p.data.length;

      while (p = p.next) {
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;

        if (n === 0) {
          if (nb === buf.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = buf.slice(nb);
          }

          break;
        }

        ++c;
      }

      this.length -= c;
      return ret;
    } // Make sure the linked list only shows the minimal necessary information.

  }, {
    key: custom,
    value: function value(_, options) {
      return inspect(this, _objectSpread({}, options, {
        // Only inspect one level.
        depth: 0,
        // It should not recurse.
        customInspect: false
      }));
    }
  }]);

  return BufferList;
}();

/***/ }),
/* 59 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _Object$setPrototypeO;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var finished = __webpack_require__(14);

var kLastResolve = Symbol('lastResolve');
var kLastReject = Symbol('lastReject');
var kError = Symbol('error');
var kEnded = Symbol('ended');
var kLastPromise = Symbol('lastPromise');
var kHandlePromise = Symbol('handlePromise');
var kStream = Symbol('stream');

function createIterResult(value, done) {
  return {
    value: value,
    done: done
  };
}

function readAndResolve(iter) {
  var resolve = iter[kLastResolve];

  if (resolve !== null) {
    var data = iter[kStream].read(); // we defer if data is null
    // we can be expecting either 'end' or
    // 'error'

    if (data !== null) {
      iter[kLastPromise] = null;
      iter[kLastResolve] = null;
      iter[kLastReject] = null;
      resolve(createIterResult(data, false));
    }
  }
}

function onReadable(iter) {
  // we wait for the next tick, because it might
  // emit an error with process.nextTick
  process.nextTick(readAndResolve, iter);
}

function wrapForNext(lastPromise, iter) {
  return function (resolve, reject) {
    lastPromise.then(function () {
      if (iter[kEnded]) {
        resolve(createIterResult(undefined, true));
        return;
      }

      iter[kHandlePromise](resolve, reject);
    }, reject);
  };
}

var AsyncIteratorPrototype = Object.getPrototypeOf(function () {});
var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
  get stream() {
    return this[kStream];
  },

  next: function next() {
    var _this = this;

    // if we have detected an error in the meanwhile
    // reject straight away
    var error = this[kError];

    if (error !== null) {
      return Promise.reject(error);
    }

    if (this[kEnded]) {
      return Promise.resolve(createIterResult(undefined, true));
    }

    if (this[kStream].destroyed) {
      // We need to defer via nextTick because if .destroy(err) is
      // called, the error will be emitted via nextTick, and
      // we cannot guarantee that there is no error lingering around
      // waiting to be emitted.
      return new Promise(function (resolve, reject) {
        process.nextTick(function () {
          if (_this[kError]) {
            reject(_this[kError]);
          } else {
            resolve(createIterResult(undefined, true));
          }
        });
      });
    } // if we have multiple next() calls
    // we will wait for the previous Promise to finish
    // this logic is optimized to support for await loops,
    // where next() is only called once at a time


    var lastPromise = this[kLastPromise];
    var promise;

    if (lastPromise) {
      promise = new Promise(wrapForNext(lastPromise, this));
    } else {
      // fast path needed to support multiple this.push()
      // without triggering the next() queue
      var data = this[kStream].read();

      if (data !== null) {
        return Promise.resolve(createIterResult(data, false));
      }

      promise = new Promise(this[kHandlePromise]);
    }

    this[kLastPromise] = promise;
    return promise;
  }
}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function () {
  return this;
}), _defineProperty(_Object$setPrototypeO, "return", function _return() {
  var _this2 = this;

  // destroy(err, cb) is a private API
  // we can guarantee we have that here, because we control the
  // Readable class this is attached to
  return new Promise(function (resolve, reject) {
    _this2[kStream].destroy(null, function (err) {
      if (err) {
        reject(err);
        return;
      }

      resolve(createIterResult(undefined, true));
    });
  });
}), _Object$setPrototypeO), AsyncIteratorPrototype);

var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
  var _Object$create;

  var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
    value: stream,
    writable: true
  }), _defineProperty(_Object$create, kLastResolve, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kLastReject, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kError, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kEnded, {
    value: stream._readableState.endEmitted,
    writable: true
  }), _defineProperty(_Object$create, kHandlePromise, {
    value: function value(resolve, reject) {
      var data = iterator[kStream].read();

      if (data) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        resolve(createIterResult(data, false));
      } else {
        iterator[kLastResolve] = resolve;
        iterator[kLastReject] = reject;
      }
    },
    writable: true
  }), _Object$create));
  iterator[kLastPromise] = null;
  finished(stream, function (err) {
    if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
      var reject = iterator[kLastReject]; // reject if we are waiting for data in the Promise
      // returned by next() and store the error

      if (reject !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        reject(err);
      }

      iterator[kError] = err;
      return;
    }

    var resolve = iterator[kLastResolve];

    if (resolve !== null) {
      iterator[kLastPromise] = null;
      iterator[kLastResolve] = null;
      iterator[kLastReject] = null;
      resolve(createIterResult(undefined, true));
    }

    iterator[kEnded] = true;
  });
  stream.on('readable', onReadable.bind(null, iterator));
  return iterator;
};

module.exports = createReadableStreamAsyncIterator;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = function () {
  throw new Error('Readable.from is not available in the browser')
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.


module.exports = PassThrough;

var Transform = __webpack_require__(25);

__webpack_require__(9)(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);
  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).


var eos;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;
    callback.apply(void 0, arguments);
  };
}

var _require$codes = __webpack_require__(5).codes,
    ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;

function noop(err) {
  // Rethrow the error if it exists to avoid swallowing it
  if (err) throw err;
}

function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function destroyer(stream, reading, writing, callback) {
  callback = once(callback);
  var closed = false;
  stream.on('close', function () {
    closed = true;
  });
  if (eos === undefined) eos = __webpack_require__(14);
  eos(stream, {
    readable: reading,
    writable: writing
  }, function (err) {
    if (err) return callback(err);
    closed = true;
    callback();
  });
  var destroyed = false;
  return function (err) {
    if (closed) return;
    if (destroyed) return;
    destroyed = true; // request.destroy just do .end - .abort is what we want

    if (isRequest(stream)) return stream.abort();
    if (typeof stream.destroy === 'function') return stream.destroy();
    callback(err || new ERR_STREAM_DESTROYED('pipe'));
  };
}

function call(fn) {
  fn();
}

function pipe(from, to) {
  return from.pipe(to);
}

function popCallback(streams) {
  if (!streams.length) return noop;
  if (typeof streams[streams.length - 1] !== 'function') return noop;
  return streams.pop();
}

function pipeline() {
  for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
    streams[_key] = arguments[_key];
  }

  var callback = popCallback(streams);
  if (Array.isArray(streams[0])) streams = streams[0];

  if (streams.length < 2) {
    throw new ERR_MISSING_ARGS('streams');
  }

  var error;
  var destroys = streams.map(function (stream, i) {
    var reading = i < streams.length - 1;
    var writing = i > 0;
    return destroyer(stream, reading, writing, function (err) {
      if (!error) error = err;
      if (err) destroys.forEach(call);
      if (reading) return;
      destroys.forEach(call);
      callback(error);
    });
  });
  return streams.reduce(pipe);
}

module.exports = pipeline;

/***/ }),
/* 65 */
/***/ (function(module, exports) {

let promise

module.exports = typeof queueMicrotask === 'function'
  ? queueMicrotask
  // reuse resolved promise, and allocate it lazily
  : cb => (promise || (promise = Promise.resolve()))
    .then(cb)
    .catch(err => setTimeout(() => { throw err }, 0))


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var sig = __webpack_require__(13);
var fm = __webpack_require__(10);

// Validation
// ==========

function hex(bits, hex) {
  if (typeof hex !== "string" || !/^0x[a-fA-F0-9]*$/.test(hex)) {
    return null;
  };
  while ((hex.length - 2) * 4 < bits) {
    hex = "0x0" + hex.slice(2);
  };
  if ((hex.length - 2) * 4 > bits) {
    hex = hex.slice(0, Math.floor(bits / 4) + 2);
  }
  return hex;
};

function nam(name) {
  if (typeof name !== "string" || !/^[a-zA-Z0-9.]*$/.test(name)) {
    return null;
  } else {
    return name;
  }
};

function num(val) {
  try {
    var num = parseInt(val, 10);
    if (isNaN(num)) {
      return null;
    } else {
      return num;
    }
  } catch (e) {
    return null;
  }
};

const hex_char = "0123456789abcdef".split("");

function hex_to_uint48(hex) {
  return parseInt(hex.slice(-48), 16);
};

function uint48_to_hex(num) {
  var hex = "0x";
  for (var i = 0; i < 12; ++i) {
    hex += hex_char[(num / (2**((12-i-1)*4))) & 0xF];
  };
  return hex;
};

function uint32_to_bytes(num) {
  return new Uint8Array(new Uint32Array([num]).buffer);
};

function bytes_to_uint32(buf) {
  return (new Uint32Array(buf.buffer))[0];
};

function bytes_to_hex(buf) {
  var hex = "0x";
  for (var i = 0; i < buf.length; ++i) {
    hex += hex_char[buf[i]>>>4] + hex_char[buf[i]&0xF];
  };
  return hex;
};

function hex_to_bytes(hex) {
  var arr = [];
  for (var i = 0; i < (hex.length-2)/2; ++i) {
    arr.push((parseInt(hex[2+i*2+0],16)<<4)|parseInt(hex[2+i*2+1],16));
  };
  return new Uint8Array(arr);
};

var utf8_encoder = new TextEncoder("utf-8");
function string_to_bytes(str) {
  return utf8_encoder.encode(str);
};

var utf8_decoder = new TextDecoder("utf-8");
function bytes_to_string(buf) {
  return utf8_decoder.decode(buf);
};

function string_to_hex(str) {
  return bytes_to_hex(string_to_bytes(str));
};

function hex_to_string(hex) {
  return bytes_to_string(hex_to_bytes(hex));
};

function get_hex_from_bytes(idx, lim, buf) {
  var bytes = "0x";
  for (var i = idx/8; i < lim/8; ++i) { 
    bytes += hex_char[buf[i]>>>4] + hex_char[buf[i]&0xF];
  };
  return bytes;
};

function bytes_to_post(buf) {
  return {
    date: hex_to_uint48(get_hex_from_bytes(0, 64, buf)),
    cite: get_hex_from_bytes(64, 128, buf),
    sign: get_hex_from_bytes(128, 648, buf),
    head: hex_to_string(get_hex_from_bytes(648, 1024, buf)).replace(/\0/g,""),
    body: hex_to_string(get_hex_from_bytes(1024, buf.length*8, buf)),
  };
};

function put_hex_on_array(hex, arr) {
  for (var i = 0; i < (hex.length-2)/2; ++i) {
    var b0 = parseInt(hex[2+i*2+0],16);
    var b1 = parseInt(hex[2+i*2+1],16);
    arr.push((b0<<4)|b1);
  };
};

function post_to_bytes(post) {
  var arr = [];
  put_hex_on_array(hex(64, uint48_to_hex(post.date)), arr);
  put_hex_on_array(post.cite, arr);
  put_hex_on_array(post.sign, arr);
  put_hex_on_array(hex(376, string_to_hex(post.head)), arr);
  put_hex_on_array(string_to_hex(post.body), arr);
  return new Uint8Array(arr);
};

function hex_to_post(hex) {
  return bytes_to_post(hex_to_bytes(hex));
};

function post_to_hex(post) {
  return bytes_to_hex(post_to_bytes(post));
};

function get_post_blocks(post, author) {
  var blocks = [{ctor:"text", text:""}];
  var inside_code = false;
  for (var i = 0; i < post.body.length; ++i) {
    if (!inside_code                            
      && author
      && (i === 0 || post.body[i-1] === "\n")
      && ( post.body.slice(i, i+author.length+1) === author+"."
        || post.body[i] === "T" && post.body.slice(i+2, i+2+author.length) === author)) {
      inside_code = true;
      blocks.push({ctor:"code", code:""});
    } else if (inside_code
      && post.body[i] === "\n"
      && post.body[i+1] === "\n") {
      inside_code = false;
      blocks.push({ctor:"text", text:""});
    }
    if (inside_code) {
      blocks[blocks.length - 1].code += post.body[i];
    } else {
      blocks[blocks.length - 1].text += post.body[i];
    };
  };
  return blocks;
};

// Returns the code portions of a post
function get_post_code(post, author) {
  var blocks = get_post_blocks(post, author);
  var code = "";
  for (var block of blocks) {
    if (block.ctor === "code") {
      code += code.length > 0 ? "\n\n" : "";
      code += block.code;
    }
  };
  return code;
};

function get_post_msge(post) {
  return post.cite + "\n" + post.head + "\n" + post.body;
};

function get_post_auth(post) {
  if (!post.auth) {
    post.auth = sig.signerAddress(sig.keccak(get_post_msge(post)), post.sign)
  };
  return post.auth;
};

function sign_post(post, pkey) {
  return {
    ...post,
    sign: post.sign || sig.signMessage(sig.keccak(get_post_msge(post)), pkey),
  };
};

function get_term_refs(term, refs = {}) {
  function go(term) {
    switch (term.ctor) {
      case "Var": break;
      case "Ref": refs[term.name] = 1; break;
      case "Typ": break;
      case "All": go(term.bind); go(term.body(fm.synt.Var(""),fm.synt.Var(""))); break;
      case "Lam": go(term.body(fm.synt.Var(""))); break;
      case "App": go(term.func); go(term.argm); break;
      case "Let": go(term.expr); go(term.body(fm.synt.Var(""))); break;
      case "Ann": go(term.expr); go(term.type); break;
      case "Loc": go(term.expr); break;
      case "Hol": break;
    };
  };
  go(term);
  return refs;
};

function split_hex_in_chunks(len, hex) {
  var chunks = [];
  for (var i = 2; i < hex.length; i += len / 4) {
    chunks.push("0x" + hex.slice(i, i + len / 4)); 
  };
  return chunks;
};

function hex_to_hex64s(hex) {
  return split_hex_in_chunks(64, hex);
};

function bytes_concat(bytes) {
  var size = 0;
  for (var arr of bytes) {
    size += arr.length;
  }
  var done = new Uint8Array(size);
  var indx = 0;
  for (var arr of bytes) {
    for (var x of arr) {
      done[indx++] = x
    };
  }
  return done;
};

// Net message codes
const DO_POST = 66;
const DO_WATCH = 67;
const POST = 97;
const CITE = 98;
const NAME = 99;
const ROOM = 100;

module.exports = {
  hex,
  nam,
  num,
  hex_to_uint48,
  uint48_to_hex,
  uint32_to_bytes,
  bytes_to_uint32,
  bytes_to_hex,
  hex_to_bytes,
  string_to_bytes,
  bytes_to_string,
  string_to_hex,
  hex_to_string,
  bytes_to_post,
  post_to_bytes,
  hex_to_post,
  post_to_hex,
  get_term_refs,
  get_post_code,
  get_post_blocks,
  get_post_msge,
  get_post_auth,
  split_hex_in_chunks,
  hex_to_hex64s,
  bytes_concat,
  sign_post,
  DO_POST,
  DO_WATCH,
  POST,
  CITE,
  NAME,
  ROOM,
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// https://github.com/maxogden/websocket-stream/blob/48dc3ddf943e5ada668c31ccd94e9186f02fafbd/ws-fallback.js

var ws = null

if (typeof WebSocket !== 'undefined') {
  ws = WebSocket
} else if (typeof MozWebSocket !== 'undefined') {
  ws = MozWebSocket
} else if (typeof global !== 'undefined') {
  ws = global.WebSocket || global.MozWebSocket
} else if (typeof window !== 'undefined') {
  ws = window.WebSocket || window.MozWebSocket
} else if (typeof self !== 'undefined') {
  ws = self.WebSocket || self.MozWebSocket
}

module.exports = ws

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

const {Component, render} = __webpack_require__(0);
const h = __webpack_require__(1).h;
const front = __webpack_require__(2);

const TopBar = __webpack_require__(69);
const Write = __webpack_require__(71);
const Posts = __webpack_require__(72);
const Term = __webpack_require__(75);

class Moonad extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setInterval(() => this.forceUpdate(), 250);
  }
  render() {
    var route = front.get_route();

    var head = h(TopBar, {
      name: front.name,
      route: route,
      posts: this.posts,
      on_click_link: (name) => {
        if (name === "posts") {
          front.set_route("/p");
        } else if (name === "user") {
          var msge = "Logged with Ethereum.\n"
            + "- Address: "+front.addr+"\n"
            + "- PrivKey: "+front.pkey+"\n"
            + "Copy on the console.";
          alert(msge);
          console.log(msge);
        }
      },
    });

    let paths = front.get_paths();
    switch (paths[0]) {
      case "w":
        var body = h(Write, {moonad: this.moonad});
        break;
      case "p":
        var body = h(Posts, {
          moonad: front.moonad,
          poid: paths[1] || "0x0000000000000000",
        });
        break;
      case "t":
        var body = h(Term, {
          name: paths[1]
        });
    }

    return h("div", {
      style: {
        "font-family": "IBMPlexMono-Light",
        "font-size": "12px",
        "background": "white",
        "width": "100%",
        "height": "100%",
      }}, [
        head,
        body,
      ]);
  }
};

module.exports = Moonad;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

const {Component, render} = __webpack_require__(0);
const h = __webpack_require__(1).h;
const front = __webpack_require__(2);
const User_info = __webpack_require__(70);

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.display_user_info = false;
  }

  render() {
    const head_lft = h("div", {
      onClick: () => this.props.on_click_link("posts"),
      style: {
        "cursor": "pointer",
        "margin-left": "20px"
      },
    }, ["Moonad"]);
    const head_rgt = h("div", {
      style: {
        "display": "flex", 
        "flex-direction": "column",
        "align-items": "flex-end",
        "margin-right": "20px"
      },
      onMouseLeave: () => this.display_user_info = false
    }, [
      //h("span", {
        //style: {
          //"cursor": "pointer",
          //"text-decoration": "underline",
          //"color": "rgb(101,102,105)",
        //},
        //onClick: () => this.props.on_click_link("check"),
      //}, "check"),
      //h("span", {}, " "),
      //h("span", {
        //style: {
          //"cursor": "pointer",
          //"text-decoration": "underline",
          //"color": "rgb(101,102,105)",
        //},
        //onClick: () => this.props.on_click_link("write"),
      //}, "write"),
      //h("span", {}, " "),
      h("div", {
        style: {
          "cursor": "pointer",
          "text-decoration": "underline",
          "color": "rgb(101,102,105)",
        },
        onClick: () => this.display_user_info = !this.display_user_info,
      }, front.name),
      // this.display_user_info ? h(User_info) : h("span"),
      h(User_info)
    ]);

    const head = h("div", {
      style: {
        "background": "white",
        "padding": "1px 6px",
        "border-bottom": "2px solid rgb(240, 240, 240)",
        "height": "26px",
        "font-size": "16px",
        "display": "flex",
        "flex-flow": "row nowrap",
        "justify-content": "space-between",
      },
    }, [head_lft, head_rgt]);

    return head;
  }
};

module.exports = TopBar;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

const {Component, render} = __webpack_require__(0);
const h = __webpack_require__(1).h;
const front = __webpack_require__(2);

class User_info extends Component {
  
  constructor(props) {
    super(props);
    this.show_pkey = false;
  }

  render() {
    var eth_address = front.get_addr();
    eth_address = eth_address ? eth_address : "-";

    var eth_pkey = front.get_pkey();
    eth_pkey = eth_pkey ? eth_pkey : "-";

    const eth_address_div =
      h("div", {
        style: { "font-family": "IBMPlexMono-Medium", }},
        "Ethereum Address"
      )
    const eth_address_info =
      h("div", {
        style: { "font-family": "IBMPlexMono-Light",}},
        eth_address
      )
    const address_section = 
      h("div", {
        style: { "margin-top": "15px" }},
        [ eth_address_div, eth_address_info]
      )
      
    const eth_pkey_div =
      h("div", {
        style: { "font-family": "IBM Plex Mono", "font-weight": "500" }},
        "Private key"
      )
    const eth_pkey_info =
      h("div", {
        style: { "font-family": "IBMPlexMono-Light", }},
        eth_pkey
      )
    const pkey_button = 
    h("span", {
      style: {
        "id": "user_pkey",
        "cursor": "pointer",
        "text-decoration": "underline",
        "color": "rgb(101,102,105)",
        "margin-left": "10px",
      },
      onClick: () => this.show_pkey = !this.show_pkey
    }, this.show_pkey ? "Hide" : "Show")

    const pkey_section = 
      h("div", {
        style: { "margin-top": "15px", }},
        [ eth_pkey_div,
          this.show_pkey ? eth_pkey_info : "* * * * * * * * *",
          pkey_button ]
      )

    return h("div", {
      style: {
        "descr": "user-info-container",
        "width": "300px",
        "height": "300px",
        "margin-top": "0px",
        "background": "white",
        "z-index": "10",
        "font-size": "10px",
        "word-wrap": "break-word",
        "padding": "0px 10px 20px 10px",
        "border": "solid 1px #D6D6D6"
      }}, [
        address_section,
        pkey_section
      ]);
  }

};

module.exports = User_info;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// The page where you write a new post

const {Component, render} = __webpack_require__(0);
const h = __webpack_require__(1).h;
const front = __webpack_require__(2);

class Write extends Component {
  constructor(props) {
    super(props);
    this.cite = new URLSearchParams(window.location.search).get("cite") || "0x0000000000000000";
    this.head = "Title...";
    this.body = "Contents...";
    this.cleared = {};
  }

  async post({cite, head, body}) {
    // Checks if citation is correct
    if (!front.moonad.lib.hex(64, cite)) {
      return alert("Incorrect cited post.");
    }

    try {
      await front.moonad.api.post({cite, head, body}, front.pkey);
      window.history.back();
    } catch (e) {
      console.log(e);
      alert(front.remove_colors(e));
    }
  }

  click(key, elem) {
    if (!this.cleared[key]) {
      this.cleared[key] = true;
      elem.innerText = "";
      this.forceUpdate();
    }
  }

  refresh(key, elem) {
    this[key] = elem.innerText;
    this.forceUpdate();
  }

  render() {

    const head = h("pre", {
      contentEditable: true,
      style: {
        "font-family": "IBMPlexMono-Light",
        "font-size": "12px",
        "color": "rgb(101,102,105)",
        "outline": "none",
        "width": "100%",
        "height": "20px",
        "padding": "2px 4px",
        "border-bottom": "1px solid rgb(240,240,240)",
        "background": "white",
      },
      onClick: (e) => this.click("head", e.target),
      onInput: (e) => this.refresh("head", e.target),
    }, [this.head]);

    const body = h("pre", {
      contentEditable: true,
      style: {
        "font-family": "IBMPlexMono-Light",
        "font-size": "12px",
        "color": "rgb(101,102,105)",
        "outline": "none",
        "width": "100%",
        "height": "360px",
        "padding": "2px 4px",
        "overflow-y": "scroll",
        "border-bottom": "1px solid rgb(240,240,240)",
        "background": "white",
      },
      onClick: (e) => this.click("body", e.target),
      onInput: (e) => this.refresh("body", e.target),
    }, [this.body]);

    const send = h("pre", {
      style: {
        "font-family": "IBMPlexMono-Light",
        "font-size": "12px",
        "color": "rgb(101,102,105)",
        "outline": "none",
        "width": "100%",
        "height": "20px",
        "padding": "2px 4px",
        "background": "rgb(241,242,246)",
        "border-bottom": "1px solid rgb(240,240,240)",
        "text-decoration": "underline",
        "cursor": "pointer",
      },
      onClick: () => {
        var cite = this.cite;
        var head = this.head.replace(/\n/g,"");
        var body = this.body.replace(/\n{3,}/g, "\n\n");
        this.post({cite, head, body});
      },
    }, ["Submit reply to " + this.cite + "."]);

    const repl = h("pre", { 
      style: {
        "height": "calc(100% - 20px - 20px - 360px)",
        "color": "rgb(101,102,105)",
        "background": "rgb(221,222,224)",
        "border-top": "1px solid rgb(201,202,204)",
        "padding": "4px 4px",
      },
    }, ["*type-checker console and REPL here*"]);

    return h("div", {
      style: {
        "height": "calc(100% - 20px)",
      },
    }, [
      head,
      body,
      send,
      repl,
    ]);
  }
};

module.exports = Write;



/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// A page of posts, including one on top and the replies below

const {Component, render} = __webpack_require__(0);
const h = __webpack_require__(1).h;
const front = __webpack_require__(2);

const Post = __webpack_require__(73);

class Posts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var poid = this.props.poid;
    var post = front.moonad.post[poid];
    var body = [];

    // Main post
    body.push(Post({
      top: true,
      poid,
      expand: true,
      moonad: front.moonad,
      on_click_post: this.props.on_click_post
    }));

    // Reply separator
    body.push(h("div", {
      style: {
        "margin-top": "8px",
        "margin-bottom": "8px",
        "border-bottom": "1px solid rgb(240, 240, 240)",
        "font-size": "16px",
        "display": "flex",
        "flex-flow": "row nowrap",
        "justify-content": "space-between",
        "align-items": "flex-end",
      },
    }, [
      h("span", {
        style: {"font-size": "16px"},
      }, "Replies:"),
      h("span", {
        style: {
          "font-size": "12px",
          "text-decoration": "underline",
          "cursor": "pointer",
          "padding-bottom": "1px",
        },
        onClick: () => front.set_route("/w?cite="+poid),
      }, "write reply"),
    ]));

    // Post replies
    if (front.moonad.cite[poid]) {
      for (let i = front.moonad.cite[poid].length - 1; i >= 0; --i) {
        body.push(Post({
          poid: front.moonad.cite[poid][i],
          expand: poid !== "0x0000000000000000",
          moonad: front.moonad,
        }));
      };
    };

    return h("div", {
      style: {
        "min-height": "calc(100% - 30px)",
        "display": "flex",
        "flex-flow": "row nowrap",
        "justify-content": "center",
      },
    }, h("div", {
      style: {
        "background": "white",
        "padding": "2px 6px",
        "width": "586px",
      }
    }, body));
  }
};

module.exports = Posts;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// A single post, expanded or not

const {Component, render} = __webpack_require__(0);
const h = __webpack_require__(1).h;
const front = __webpack_require__(2);

const Code = __webpack_require__(74);

const Post = ({poid, expand, top}) => {
  const post = front.moonad.post[poid];
  if (poid === "0x0000000000000000") {
    return h("div", {}, "Welcome to Moonad.");
  } else if (poid === null || !post) {
    return h("div", {}, "[loading...]");
  } else {
    const title_back = h("span", {
        style: {
          "font-family": "IBMPlexMono-Light",
          "user-select": "none",
          "font-size": expand ? "16px" : "14px",
          "text-decoration": "underline",
          "color": "rgb(41, 42, 44)",
          "cursor": "pointer",
        },
        onClick: () => front.set_route("/p/"+post.cite),
      }, "↩");
    const title_head = h("span", {
        style: {
          "font-family": "IBMPlexMono-Light",
          "user-select": "none",
          "font-size": expand ? "16px" : "14px",
          "text-decoration": "underline",
          "color": "rgb(41, 42, 44)",
          "cursor": "pointer",
        },
        onClick: () => front.set_route("/p/"+poid),
      }, post.head);
    const title = h("div", {}, top ? [title_back," ",title_head] : title_head);

    var auth_addr = front.moonad.lib.get_post_auth(post).toLowerCase();
    var auth_name = front.moonad.name[auth_addr];
    var blocks = front.moonad.lib.get_post_blocks(post, front.moonad.name[auth_addr]);
    var post_body = [];
    for (var block of blocks) {
      switch (block.ctor) {
        case "code":
          post_body.push(Code({code: block.code}));
          break;
        case "text":
          post_body.push(block.text.replace(/^\n/,""));
          break;
      }
    };

    const body = !expand ? null : h("pre", {
        style: {
          "font-family": "IBMPlexMono-Light",
          "font-size": "12px",
          "padding": "2px 0px",
          "color": "rgb(101,102,105)",
        }
      }, post_body);

    const author = h("div", {
        style: {
          "font-family": "IBMPlexMono-Light",
          "font-size": "8px",
          //"font-style": "italic",
          "color": "rgb(161, 162, 168)",
          "padding-bottom": "8px",
        },
      }, ""
        + ((front.moonad.cite[poid] ? front.moonad.cite[poid].length : 0) + " replies")
        + " | at " + front.format_date(post.date)
        + " | by " + (front.moonad.name[post.auth.toLowerCase()] || post.auth || "someone")
        );

    return h("div", {
      style: {
        //"border-bottom": "1px solid rgb(240, 240, 240)",
        //"padding-bottom": "16px",
      }}, [title, body, author]);
  }
};

module.exports = Post;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// Code highlighting and hyperlinking

const fm = __webpack_require__(10);
const {Component, render} = __webpack_require__(0);
const h = __webpack_require__(1).h;
const front = __webpack_require__(2);

const Code = ({code}) => {
  var tags = fm.lang.parse(code).tags;
  var elems = [];
  var def_col = "rgb(20,120,32)";
  var txt_col = "rgb(102,172,182)";
  var nam_col = "rgb(160,162,166)";
  var nul_col = "rgb(112,146,188)";
  var str_col = "rgb(204,69,49)";
  var ref_col = "rgb(157, 147, 171)";
  var typ_col = "rgb(172,111,52)";
  for (let tag of tags) {
    let color = null;
    let click = null;
    let decor = null;
    let cursr = null;
    switch (tag.ctor) {
      case "def":
        color = def_col;
        click = () => front.set_route("/t/"+tag.text);
        decor = "underline";
        cursr = "pointer";
        break;
      case "nam":
        color = nam_col;
        break;
      case "var":
        color = nam_col;
        break;
      case "txt":
        if (tag.text === "Type") {
          color = typ_col;
        } else {
          color = txt_col;
        }
        break;
      case "nul": // ok 
        color = nul_col;
        break;
      case "str":
        color = str_col;
        break;
      case "ref":
        color = ref_col;
        click = () => {console.log("TODO")};
        decor = "underline";
        cursr = "pointer";
        break;
    }
    elems.push(h("span", {
      onClick: click,
      style: {
        "color": color,
        "text-decoration": decor,
        "cursor": cursr,
      }
    }, tag.text));
  };
  return h("div", {
    style: {
      "background": "rgb(247,248,250)",
      "padding": "4px",
    }
  }, elems);
};

module.exports = Code;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// A page of posts, including one on top and the replies below

const {Component, render} = __webpack_require__(0);
const h = __webpack_require__(1).h;
const fm = __webpack_require__(10);
const front = __webpack_require__(2);

class Term extends Component {
  constructor(props) {
    super(props);
    this.poid = null;
    this.defs = null;
    this.argm = [];
    this.memo = {};
  }
  async componentDidMount() {
    this.poid = await front.moonad.api.get_orig({name: this.props.name});
    this.defs = await front.load_defs_of(this.props.name);
  }
  render() {
    const name = this.props.name;
    const defs = this.defs;

    var head = h("div", {
      style: {
        "font-family": "IBMPlexMono-Light",
        "user-select": "none",
        "font-size": "16px",
        "color": "rgb(41, 42, 44)",
        "text-decoration": "underline",
        "cursor": "pointer",
      },
      onClick: () => {
        if (this.poid) {
          front.set_route("/p/"+this.poid);
        };
      },
    }, this.props.name);

    var body = null;
    if (defs && defs[name]) {

      // Arguments
      var type = fm.synt.reduce(this.defs[name].type);
      var argm_divs = [];
      var argm_type = [];
      var argm_eras = [];
      while (type.ctor === "All") {
        let argm_i = argm_divs.length;
        argm_eras.push(type.eras);
        argm_type.push(type.bind);
        argm_divs.push(h("div", {}, [
          h("div", {}, [
            h("span", {}, [type.name+" : "+fm.lang.stringify(type.bind)+" = "]),
            h("input", {onInput: (e) => this.argm[argm_i] = e.target.value}),
          ]),
        ]));
        var var0 = fm.synt.Var(type.self);
        var var1 = fm.synt.Var(type.name);
        type = fm.synt.reduce(type.body(var0, var1));
      };

      // Parses input arguments
      var argm_term = [];
      for (let i = 0; i < this.argm.length; ++i) {
        if (this.argm[i]) {
          try {
            var parsed = fm.lang.parse_trm(this.argm[i], [0,[]], true);
            var term = parsed[1](fm.synt.Nil());
            argm_term.push(term);
          } catch (e) {
            console.log(e);
            break;
          }
        }
      }

      // Prints result
      if (argm_term.length === argm_type.length) {
        var term = fm.synt.Ref(name);
        for (let i = 0; i < argm_term.length; ++i) {
          term = fm.synt.App(argm_eras[i], term, argm_term[i]);
        };
        defs["_main_"] = {term, type: fm.synt.Hol("_main_", fm.synt.Nil())};
        try {
          // Synthetizes
          fm.synt.typesynth("_main_", defs, fm.lang.stringify);
          // Shows JS evaluation
          var core_defs = {};
          for (var def in defs) {
            core_defs[def] = defs[def].core;
          };
          var js_code = fm.tojs.compile("_main_", core_defs, true);
          var js_eval = eval(js_code);
          argm_divs.push(h("pre", {}, "\nEval:\n" + js_eval._main_));
          argm_divs.push(h("pre", {}, "\nNorm:"));
          argm_divs.push(h("pre", {
            style: {
              "text-decoration": "underline",
              "cursor": "pointer",
            },
            onClick: () => {
              // Shows normal form
              var norm = fm.lang.stringify(fm.synt.normalize(term, defs));
              var text = "";
              for (var i = 0; i < norm.length; ++i) {
                text += norm[i];
                if (i % 80 === 79) {
                  text += "\n";
                }
              }
              console.log(text);
            }
          }, "(click to print on console)"));
        } catch (e) {
          var emsg = typeof e === "function"
            ? front.remove_colors(e().msg)
            : e.toString();
          argm_divs.push(h("pre", {}, "\nError:\n" + emsg));
        }
      };

      body = h("div", {
        style: {
          "font-family": "IBMPlexMono-Light",
          "user-select": "none",
          "font-size": "16px",
          "color": "rgb(41, 42, 44)",
        },
      }, argm_divs);
    } else {
      body = h("div", {}, "...loading...");
    };

    return h("div", {
      style: {
        "min-height": "calc(100% - 30px)",
        "padding": "4px", //"display": "flex",
        //"flex-flow": "row nowrap",
        //"justify-content": "center",
      },
    }, [head, body]);
  }
};

module.exports = Term;


/***/ })
/******/ ]);
//# sourceMappingURL=index.6308ed8977bb510dd8cd.js.map