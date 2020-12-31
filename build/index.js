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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ga-logo.svg":
/*!*************************!*\
  !*** ./src/ga-logo.svg ***!
  \*************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgGaLogo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#69AA04",
  d: "M0-1.612h27.09v27.255H0z"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#FFF",
  stroke: "#FFF",
  strokeMiterlimit: 10
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M12.2 3.145c.779.715 1.283 1.673 1.494 2.891h-.406c-.195-1.104-.65-1.965-1.364-2.599-.78-.714-1.803-1.056-3.07-1.056-1.542 0-2.761.568-3.67 1.721-.845 1.04-1.25 2.372-1.25 3.979s.438 2.923 1.315 3.93c.942 1.088 2.241 1.641 3.898 1.641a7.79 7.79 0 002.258-.341c.747-.227 1.332-.52 1.786-.845V8.569H8.627v-.39h4.954v4.482c-.487.39-1.12.731-1.916.991a8.502 8.502 0 01-2.518.39c-1.819 0-3.216-.601-4.223-1.771-.926-1.088-1.38-2.485-1.38-4.19 0-1.689.438-3.103 1.348-4.223.974-1.25 2.29-1.868 3.962-1.868 1.365.001 2.485.375 3.346 1.155zM16.432 9.373l5.185 12.59h-.494l-1.693-4.144h-6.56l-1.693 4.144h-.494l5.184-12.59h.565zm2.821 8.023l-3.068-7.564h-.053l-3.086 7.564h6.207z"
}));

function SvgGaLogo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 25.16,
    height: 23.954
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,ZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0KCmltcG9ydCAqIGFzIFJlYWN0IGZyb20gInJlYWN0IjsKCnZhciBfcmVmID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoInBhdGgiLCB7CiAgZmlsbDogIiM2OUFBMDQiLAogIGQ6ICJNMC0xLjYxMmgyNy4wOXYyNy4yNTVIMHoiCn0pOwoKdmFyIF9yZWYyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoImciLCB7CiAgZmlsbDogIiNGRkYiLAogIHN0cm9rZTogIiNGRkYiLAogIHN0cm9rZU1pdGVybGltaXQ6IDEwCn0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KCJwYXRoIiwgewogIGQ6ICJNMTIuMiAzLjE0NWMuNzc5LjcxNSAxLjI4MyAxLjY3MyAxLjQ5NCAyLjg5MWgtLjQwNmMtLjE5NS0xLjEwNC0uNjUtMS45NjUtMS4zNjQtMi41OTktLjc4LS43MTQtMS44MDMtMS4wNTYtMy4wNy0xLjA1Ni0xLjU0MiAwLTIuNzYxLjU2OC0zLjY3IDEuNzIxLS44NDUgMS4wNC0xLjI1IDIuMzcyLTEuMjUgMy45NzlzLjQzOCAyLjkyMyAxLjMxNSAzLjkzYy45NDIgMS4wODggMi4yNDEgMS42NDEgMy44OTggMS42NDFhNy43OSA3Ljc5IDAgMDAyLjI1OC0uMzQxYy43NDctLjIyNyAxLjMzMi0uNTIgMS43ODYtLjg0NVY4LjU2OUg4LjYyN3YtLjM5aDQuOTU0djQuNDgyYy0uNDg3LjM5LTEuMTIuNzMxLTEuOTE2Ljk5MWE4LjUwMiA4LjUwMiAwIDAxLTIuNTE4LjM5Yy0xLjgxOSAwLTMuMjE2LS42MDEtNC4yMjMtMS43NzEtLjkyNi0xLjA4OC0xLjM4LTIuNDg1LTEuMzgtNC4xOSAwLTEuNjg5LjQzOC0zLjEwMyAxLjM0OC00LjIyMy45NzQtMS4yNSAyLjI5LTEuODY4IDMuOTYyLTEuODY4IDEuMzY1LjAwMSAyLjQ4NS4zNzUgMy4zNDYgMS4xNTV6TTE2LjQzMiA5LjM3M2w1LjE4NSAxMi41OWgtLjQ5NGwtMS42OTMtNC4xNDRoLTYuNTZsLTEuNjkzIDQuMTQ0aC0uNDk0bDUuMTg0LTEyLjU5aC41NjV6bTIuODIxIDguMDIzbC0zLjA2OC03LjU2NGgtLjA1M2wtMy4wODYgNy41NjRoNi4yMDd6Igp9KSk7CgpmdW5jdGlvbiBTdmdHYUxvZ28ocHJvcHMpIHsKICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoInN2ZyIsIF9leHRlbmRzKHsKICAgIHhtbG5zOiAiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLAogICAgd2lkdGg6IDI1LjE2LAogICAgaGVpZ2h0OiAyMy45NTQKICB9LCBwcm9wcyksIF9yZWYsIF9yZWYyKTsKfQoKZXhwb3J0IGRlZmF1bHQgImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0TkNqd2hMUzBnUjJWdVpYSmhkRzl5T2lCQlpHOWlaU0JKYkd4MWMzUnlZWFJ2Y2lBeE5pNHdMakFzSUZOV1J5QkZlSEJ2Y25RZ1VHeDFaeTFKYmlBdUlGTldSeUJXWlhKemFXOXVPaUEyTGpBd0lFSjFhV3hrSURBcElDQXRMVDROQ2p3aFJFOURWRmxRUlNCemRtY2dVRlZDVEVsRElDSXRMeTlYTTBNdkwwUlVSQ0JUVmtjZ01TNHhMeTlGVGlJZ0ltaDBkSEE2THk5M2QzY3Vkek11YjNKbkwwZHlZWEJvYVdOekwxTldSeTh4TGpFdlJGUkVMM04yWnpFeExtUjBaQ0krRFFvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa05oY0dGZk1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpRFFvSklIZHBaSFJvUFNJeU5TNHhObkI0SWlCb1pXbG5hSFE5SWpJekxqazFOSEI0SWlCMmFXVjNRbTk0UFNJd0lEQWdNalV1TVRZZ01qTXVPVFUwSWlCbGJtRmliR1V0WW1GamEyZHliM1Z1WkQwaWJtVjNJREFnTUNBeU5TNHhOaUF5TXk0NU5UUWlJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpUGcwS1BISmxZM1FnZVQwaUxURXVOakV5SWlCbWFXeHNQU0lqTmpsQlFUQTBJaUIzYVdSMGFEMGlNamN1TURraUlHaGxhV2RvZEQwaU1qY3VNalUxSWk4K0RRbzhaejROQ2drOGNHRjBhQ0JtYVd4c1BTSWpSa1pHUmtaR0lpQnpkSEp2YTJVOUlpTkdSa1pHUmtZaUlITjBjbTlyWlMxdGFYUmxjbXhwYldsMFBTSXhNQ0lnWkQwaVRURXlMaklzTXk0eE5EVmpNQzQzTnprc01DNDNNVFVzTVM0eU9ETXNNUzQyTnpNc01TNDBPVFFzTWk0NE9URm9MVEF1TkRBMkRRb0pDV010TUM0eE9UVXRNUzR4TURRdE1DNDJOUzB4TGprMk5TMHhMak0yTkMweUxqVTVPV010TUM0M09DMHdMamN4TkMweExqZ3dNeTB4TGpBMU5pMHpMakEzTFRFdU1EVTJZeTB4TGpVME1pd3dMVEl1TnpZeExEQXVOVFk0TFRNdU5qY3NNUzQzTWpFTkNna0pZeTB3TGpnME5Td3hMakEwTFRFdU1qVXNNaTR6TnpJdE1TNHlOU3d6TGprM09YTXdMalF6T0N3eUxqa3lNeXd4TGpNeE5Td3pMamt6WXpBdU9UUXlMREV1TURnNExESXVNalF4TERFdU5qUXhMRE11T0RrNExERXVOalF4WXpBdU56UTNMREFzTVM0MU1TMHdMakV4TkN3eUxqSTFPQzB3TGpNME1RMEtDUWxqTUM0M05EY3RNQzR5TWpjc01TNHpNekl0TUM0MU1pd3hMamM0Tmkwd0xqZzBOVlk0TGpVMk9VZzRMall5TjNZdE1DNHpPV2cwTGprMU5IWTBMalE0TW1NdE1DNDBPRGNzTUM0ek9TMHhMakV5TERBdU56TXhMVEV1T1RFMkxEQXVPVGt4RFFvSkNXTXRNQzQ0TkRVc01DNHlOVGt0TVM0Mk56TXNNQzR6T1MweUxqVXhPQ3d3TGpNNVl5MHhMamd4T1N3d0xUTXVNakUyTFRBdU5qQXhMVFF1TWpJekxURXVOemN4WXkwd0xqa3lOaTB4TGpBNE9DMHhMak00TFRJdU5EZzFMVEV1TXpndE5DNHhPUTBLQ1Fsak1DMHhMalk0T1N3d0xqUXpPQzB6TGpFd015d3hMak0wT0MwMExqSXlNMk13TGprM05DMHhMakkxTERJdU1qa3RNUzQ0Tmpnc015NDVOakl0TVM0NE5qaERNVEF1TWpFNUxERXVPVGt4TERFeExqTXpPU3d5TGpNMk5Td3hNaTR5TERNdU1UUTFlaUl2UGcwS0NUeHdZWFJvSUdacGJHdzlJaU5HUmtaR1JrWWlJSE4wY205clpUMGlJMFpHUmtaR1JpSWdjM1J5YjJ0bExXMXBkR1Z5YkdsdGFYUTlJakV3SWlCa1BTSk5NVFl1TkRNeUxEa3VNemN6YkRVdU1UZzFMREV5TGpVNWFDMHdMalE1Tkd3dE1TNDJPVE10TkM0eE5EUm9MVFl1TlRZTkNna0piQzB4TGpZNU15dzBMakUwTkdndE1DNDBPVFJzTlM0eE9EUXRNVEl1TlRsSU1UWXVORE15ZWlCTk1Ua3VNalV6TERFM0xqTTVObXd0TXk0d05qZ3ROeTQxTmpSb0xUQXVNRFV6YkMwekxqQTROaXczTGpVMk5FZ3hPUzR5TlRONklpOCtEUW84TDJjK0RRbzhMM04yWno0TkNnPT0iOwpleHBvcnQgeyBTdmdHYUxvZ28gYXMgUmVhY3RDb21wb25lbnQgfTs=");


/***/ }),

/***/ "./src/hero/index.js":
/*!***************************!*\
  !*** ./src/hero/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ga_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ga-logo.svg */ "./src/ga-logo.svg");

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    IconButton = _wp$components.IconButton;
/** Import the logo */


registerBlockType('ga/hero', {
  title: 'GA Hero',
  icon: {
    src: _ga_logo_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: 'gourmet-artist',
  attributes: {
    tituloHero: {
      type: 'string',
      source: 'html',
      selector: '.hero-block h1'
    },
    textoHero: {
      type: 'string',
      source: 'html',
      selector: '.hero-block p'
    },
    imagenHero: {
      type: 'string',
      selector: '.hero-block'
    },
    alinearContenido: {
      type: 'string',
      default: 'center'
    }
  },
  supports: {
    align: ['wide', 'full']
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        tituloHero = _props$attributes.tituloHero,
        textoHero = _props$attributes.textoHero,
        imagenHero = _props$attributes.imagenHero,
        alinearContenido = _props$attributes.alinearContenido,
        setAttributes = props.setAttributes;

    var onChangeTitulo = function onChangeTitulo(nuevoTitulo) {
      setAttributes({
        tituloHero: nuevoTitulo
      });
    };

    var onChangeTexto = function onChangeTexto(nuevoTexto) {
      setAttributes({
        textoHero: nuevoTexto
      });
    };

    var onSeleccionarImagen = function onSeleccionarImagen(nuevaImagen) {
      setAttributes({
        imagenHero: nuevaImagen.sizes.full.url
      });
    };

    var onChangeAlinearContenido = function onChangeAlinearContenido(nuevaAlineacion) {
      setAttributes({
        alinearContenido: nuevaAlineacion
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "hero-block",
      style: {
        backgroundImage: "url(".concat(imagenHero, ")")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
      onChange: onChangeAlinearContenido
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSeleccionarImagen,
      type: "image",
      value: imagenHero,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          onClick: open,
          icon: "format-image",
          label: "cambiar imagen"
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      style: {
        textAlign: alinearContenido
      },
      placeholder: "Agrega un titulo",
      value: tituloHero,
      onChange: onChangeTitulo
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      style: {
        textAlign: alinearContenido
      },
      placeholder: "Agrega un texto",
      value: textoHero,
      onChange: onChangeTexto
    })));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        tituloHero = _props$attributes2.tituloHero,
        textoHero = _props$attributes2.textoHero,
        imagenHero = _props$attributes2.imagenHero,
        alinearContenido = _props$attributes2.alinearContenido;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "hero-block",
      style: {
        backgroundImage: "url(".concat(imagenHero, ")"),
        textAlign: alinearContenido
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: tituloHero
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: textoHero
    })));
  }
});

/***/ }),

/***/ "./src/imagenTexto/index.js":
/*!**********************************!*\
  !*** ./src/imagenTexto/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ga_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ga-logo.svg */ "./src/ga-logo.svg");

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    URLInputButton = _wp$editor.URLInputButton,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    IconButton = _wp$components.IconButton;
/** Import the logo */


registerBlockType('ga/imagentexto', {
  title: 'GA imagen con texto',
  icon: {
    src: _ga_logo_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: 'gourmet-artist',
  attributes: {
    appTitulo: {
      type: 'string',
      source: 'html',
      selector: '.imagen-texto-block .contenido h1'
    },
    appTexto: {
      type: 'string',
      source: 'html',
      selector: '.imagen-texto-block .contenido p'
    },
    appImagen: {
      type: 'string',
      source: 'html',
      selector: '.imagen-texto-block img',
      default: _ga_logo_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
    },
    urlApp: {
      type: 'string',
      source: 'attribute',
      attribute: 'href'
    }
  },
  supports: {
    align: ['wide', 'full']
  },
  styles: [{
    name: 'default',
    label: 'Azul (default)',
    isDefault: true
  }, {
    name: 'verde',
    label: 'verde'
  }, {
    name: 'red',
    label: 'red'
  }],
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        appTitulo = _props$attributes.appTitulo,
        appTexto = _props$attributes.appTexto,
        appImagen = _props$attributes.appImagen,
        urlApp = _props$attributes.urlApp,
        setAttributes = props.setAttributes;

    var onChangeTitulo = function onChangeTitulo(nuevoTitulo) {
      setAttributes({
        appTitulo: nuevoTitulo
      });
    };

    var onChangeTexto = function onChangeTexto(nuevoTexto) {
      setAttributes({
        appTexto: nuevoTexto
      });
    };

    var onSeleccionarImagen = function onSeleccionarImagen(imagen) {
      setAttributes({
        appImagen: imagen.sizes.medium.url
      });
    };

    var onChangeURL = function onChangeURL(nuevaURL) {
      setAttributes({
        urlApp: nuevaURL
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "imagen-texto-block"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "contenedor"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "contenido"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "agregar titulo",
      value: appTitulo,
      onChange: onChangeTitulo
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "agregar texto",
      value: appTexto,
      onChange: onChangeTexto
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: urlApp,
      className: "boton"
    }, "Descargar"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInputButton, {
      url: urlApp,
      onChange: onChangeURL
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "imagen"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: appImagen
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSeleccionarImagen,
      type: "image",
      value: appImagen,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          onClick: open
        }, "subir imagen");
      }
    }))));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        appTitulo = _props$attributes2.appTitulo,
        appTexto = _props$attributes2.appTexto,
        appImagen = _props$attributes2.appImagen,
        urlApp = _props$attributes2.urlApp;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "imagen-texto-block"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "contenedor"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "contenido"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: appTitulo
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: appTexto
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: urlApp,
      className: "boton"
    }, "Descargar")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "imagen"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: appImagen
    }))));
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testimonial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testimonial */ "./src/testimonial/index.js");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero */ "./src/hero/index.js");
/* harmony import */ var _imagenTexto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imagenTexto */ "./src/imagenTexto/index.js");




/***/ }),

/***/ "./src/testimonial/index.js":
/*!**********************************!*\
  !*** ./src/testimonial/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ga_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ga-logo.svg */ "./src/ga-logo.svg");

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload;
var Button = wp.components.Button;
/** Import the logo */


registerBlockType('ga/testimonial', {
  title: 'GA Testimonial',
  icon: {
    src: _ga_logo_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: 'gourmet-artist',
  attributes: {
    textoTestimonial: {
      type: 'string',
      source: 'html',
      selector: '.testimonial-block blockquote'
    },
    nombreTestimonial: {
      type: 'string',
      source: 'html',
      selector: '.testimonial-info p'
    },
    imagenTestimonial: {
      type: 'string',
      source: 'attribute',
      attribute: 'src',
      selector: '.testimonial-info img',
      default: _ga_logo_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
    }
  },
  edit: function edit(props) {
    console.log(props);
    var _props$attributes = props.attributes,
        textoTestimonial = _props$attributes.textoTestimonial,
        nombreTestimonial = _props$attributes.nombreTestimonial,
        imagenTestimonial = _props$attributes.imagenTestimonial,
        setAttributes = props.setAttributes;

    var onChangeNombreTestimonial = function onChangeNombreTestimonial(nuevoTestimonial) {
      setAttributes({
        nombreTestimonial: nuevoTestimonial
      });
    };

    var onChangeTextoTestimonial = function onChangeTextoTestimonial(nuevoTexto) {
      setAttributes({
        textoTestimonial: nuevoTexto
      });
    };

    var onSeleccionarImagen = function onSeleccionarImagen(imagen) {
      setAttributes({
        imagenTestimonial: imagen.sizes.medium.url
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "testimonial-block"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("blockquote", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "agrega un texto en testimonial",
      onChange: onChangeTextoTestimonial,
      value: textoTestimonial
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "testimonial-info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: imagenTestimonial
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSeleccionarImagen,
      type: "image",
      value: imagenTestimonial,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          onClick: open
        }, "subir imagen");
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "Agregar nombre de testimonial",
      onChange: onChangeNombreTestimonial,
      value: nombreTestimonial
    }))));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        textoTestimonial = _props$attributes2.textoTestimonial,
        nombreTestimonial = _props$attributes2.nombreTestimonial,
        imagenTestimonial = _props$attributes2.imagenTestimonial;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "testimonial-block"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("blockquote", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: textoTestimonial
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "testimonial-info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: imagenTestimonial
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: nombreTestimonial
    }))));
  }
});

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map