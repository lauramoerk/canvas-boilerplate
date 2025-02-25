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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/gameimages/platform.png":
/*!*************************************!*\
  !*** ./src/gameimages/platform.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameimages_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameimages/platform.png */ "./src/gameimages/platform.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//import { reset } from 'browser-sync';

console.log(_gameimages_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;
console.log(c);
var gravity = 1.5;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 30;
    this.height = 30;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = "#f72585";
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      if (this.position.y > canvas.height) {
        console.log('you lose');
      }

      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.position = {
        x: 100,
        y: 100
      };
      this.velocity = {
        x: 0,
        y: 0
      };
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }, {
    key: "resetPlatform",
    value: function resetPlatform() {
      this.position = {
        x: x,
        y: y
      };
      this.image = image;
      this.width = image.width;
      this.height = image.height;
    }
  }]);

  return Platform;
}();

var image = new Image();
image.src = _gameimages_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"];
var player = new Player();
var platforms = [new Platform({
  x: -1,
  y: 470,
  image: image
}), new Platform({
  x: image.width - 2,
  y: 470,
  image: image
}), new Platform({
  x: image.width * 2 + 100,
  y: 470,
  image: image
}), new Platform({
  x: image.width * 3 + 200,
  y: 470,
  image: image
}), new Platform({
  x: image.width * 4 + 400,
  y: 470,
  image: image
}), new Platform({
  x: image.width * 5 + 600,
  y: 470,
  image: image
}), new Platform({
  x: image.width * 6 + 800,
  y: 470,
  image: image
}), new Platform({
  x: image.width * 7 + 1000,
  y: 470,
  image: image
}), new Platform({
  x: image.width * 8 + 1200,
  y: 470,
  image: image
}), new Platform({
  x: image.width * 9 + 1400,
  y: 470,
  image: image
}), new Platform({
  x: image.width * 10 + 1600,
  y: 470,
  image: image
})];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffsett = 0;

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = '#8eecf5';
  c.fillRect(0, 0, canvas.width, canvas.height);
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < 450) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;
  }

  if (keys.right.pressed) {
    scrollOffsett += 5;
    platforms.forEach(function (platform) {
      platform.position.x -= 5;
    });
  } else if (keys.left.pressed) {
    scrollOffsett -= 5;
    platforms.forEach(function (platform) {
      platform.position.x += 5;
    });
  } // win condition


  if (scrollOffsett > 6000) {
    console.log('you win');
  } //lose condition


  if (player.position.y > canvas.height) {
    player.reset();
  } //platform collision detection


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });
}

animate();
window.addEventListener("keydown", function (_ref2) {
  var keyCode = _ref2.keyCode;
  console.log(keyCode);

  switch (keyCode) {
    case 37:
      console.log("left");
      keys.left.pressed = true;
      break;

    case 40:
      console.log("down");
      break;

    case 39:
      console.log("right");
      keys.right.pressed = true;
      break;

    case 38:
      console.log("up");
      player.velocity.y -= 5;
      break;
  }
});
window.addEventListener("keyup", function (_ref3) {
  var keyCode = _ref3.keyCode;
  console.log(keyCode);

  switch (keyCode) {
    case 37:
      console.log("left");
      keys.left.pressed = false;
      break;

    case 40:
      console.log("down");
      break;

    case 39:
      console.log("right");
      keys.right.pressed = false;
      break;

    case 38:
      console.log("up");
      player.velocity.y -= 20;
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map