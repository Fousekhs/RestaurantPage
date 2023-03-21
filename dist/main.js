/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ContactPage)\n/* harmony export */ });\n\n\nclass ContactPage {\n    constructor() {\n\n        this.Print = this.Print.bind(this);\n\n        this.container = document.createElement(\"div\");\n        this.container.classList.add(\"contact-container\");\n\n        const h2 = document.createElement(\"h2\");\n        h2.innerText = \"Contact us\";\n        this.container.appendChild(h2);\n        // <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26219757.706080467!2d-2.939011211800376!3d36.65877319313543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131421b81c473c9f%3A0x2e93598afeccf840!2zzpzOtc-Dz4zOs861zrnOv8-CIM6YzqzOu86xz4PPg86x!5e0!3m2!1sel!2sgr!4v1678584859965!5m2!1sel!2sgr\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\n    \n        const email = document.createElement(\"div\");\n        email.innerHTML = \"Email us at: <a>notAnEmail@email.com</a>\";\n        this.container.appendChild(email);\n\n        const phone = document.createElement(\"div\");\n        phone.innerHTML = \"Or call us at: <a>6942069420</a>\";\n        this.container.appendChild(phone);\n\n        this.container.appendChild(document.createElement(\"br\"));\n\n        const map = document.createElement(\"iframe\");\n        map.src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26219757.706080467!2d-2.939011211800376!3d36.65877319313543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131421b81c473c9f%3A0x2e93598afeccf840!2zzpzOtc-Dz4zOs861zrnOv8-CIM6YzqzOu86xz4PPg86x!5e0!3m2!1sel!2sgr!4v1678584859965!5m2!1sel!2sgr\";\n        this.container.appendChild(map);\n    \n    }\n    Print() {\n        const content = document.querySelector(\"#content\");\n        content.dataset.state = \"Contact\";\n        content.appendChild(this.container);\n    }\n}\n\n//# sourceURL=webpack://restaurant_page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n\nclass HomePage {\n    \n    head = document.createElement(\"h2\");\n    sections = [\n        document.createElement(\"section\"),\n        document.createElement(\"section\"),\n        document.createElement(\"section\")\n    ]\n    images = [\n        document.createElement(\"img\"),\n        document.createElement(\"img\")\n    ]\n    constructor() {\n        this.head.innerText = \"About us\";\n        for (let i = 0; i < 3; i++) this.sections[i].innerText = sectionText[i];\n        for (let i = 0; i < 2; i++) {\n            this.images[i].src = imageSrc[i];\n            this.images[i].alt = \"Mediterrenean Couzine\";\n        }\n        this.Print = this.Print.bind(this);\n    }\n    Print() {\n        let content = document.getElementById(\"content\");\n\n        content.dataset.state = \"home\";\n        content.appendChild(this.head);\n        content.appendChild(this.sections[0]);\n        content.appendChild(document.createElement(\"br\"));\n        content.appendChild(this.images[0]);\n        content.appendChild(document.createElement(\"br\"));\n        content.appendChild(this.sections[1]);\n        content.appendChild(document.createElement(\"br\"));\n        content.appendChild(this.images[1]);\n        content.appendChild(document.createElement(\"br\"));\n        content.appendChild(this.sections[2]);\n    }\n}\n\nlet sectionText = {\n    0: \"Welcome to our Mediterranean restaurant, where we offer a taste of the Mediterranean right in your own backyard. Our menu features a wide variety of fresh and flavorful dishes inspired by the cuisines of Greece, Italy, Turkey, and other Mediterranean countries. From our delicious hummus and baba ghanoush appetizers to our savory kebabs and seafood dishes, we have something for everyone.\",\n    1: \"We use only the freshest, high-quality ingredients in all of our dishes, and our chefs prepare each dish with care and attention to detail. Whether you're dining in with friends and family or grabbing a quick bite on-the-go, our friendly and attentive staff will ensure that your dining experience is a memorable one. \\\n    In addition to our delicious food, we also offer a great selection of wines, beers, and cocktails to complement your meal. And if you're looking to host a private event or party, we have plenty of space to accommodate groups of all sizes.\",\n    2: \"Come visit us and experience the warmth and hospitality of the Mediterranean right here in our restaurant. We can't wait to serve you!\",\n}\n\nlet imageSrc = {\n    0: \"../pics/pic1.jpg\",\n    1: \"../pics/pic2.jpg\",\n}\n\n//# sourceURL=webpack://restaurant_page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _start_up__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start_up */ \"./src/start_up.js\");\n\n\n(0,_start_up__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuPage)\n/* harmony export */ });\n\n\nclass MenuPage {\n    dishObjects = new Array();\n    constructor() {\n        dishes.forEach(dish => {\n            this.dishObjects.push(new Dish(dish));\n        })\n        this.Print = this.Print.bind(this);\n    }\n    Print() {\n        const content = document.querySelector(\"#content\");\n\n        content.dataset.state = \"menu\"\n        this.dishObjects.forEach(dish => {\n            content.appendChild(dish.DishElement);\n        })\n    }\n}\n\nclass Dish {\n    constructor(dish) {\n\n        this.div = document.createElement(\"div\");\n        this.div.classList.add(\"dish\");\n        \n        const header = document.createElement(\"h3\");\n        header.innerText = dish.name;\n        this.div.appendChild(header);\n\n        const img = document.createElement(\"img\");\n        img.src = dish.imgPath;\n        this.div.appendChild(img);\n\n        const priceDiv = document.createElement(\"div\");\n        priceDiv.classList.add(\"price\");\n        const span = document.createElement(\"span\");\n        span.innerText = \"Price: \";\n        priceDiv.appendChild(span);\n        priceDiv.innerHTML += `\\$${dish.price}`;\n        this.div.appendChild(priceDiv);\n\n        const ingr = document.createElement(\"div\");\n        ingr.classList.add(\"ingredients\");\n        ingr.innerText =  `Ingredients: ${dish.ingredients}`;\n        this.div.appendChild(ingr);\n    }\n\n    get DishElement() {\n        return this.div;\n    }\n}\n\nlet dishes = [\n    {name: \"hummus\", ingredients: \"chickpeas, tahini, lemon juice, and garlic served with pita bread or vegetables\", price: 8, imgPath: \"../pics/hummus.jpg\"},\n    {name: \"Falafel\", ingredients: \"ground chickpeas, herbs, and spices served with pita bread, hummus, and tzatziki sauce\", price: 10, imgPath: \"../pics/falafel.jpeg\"},\n    {name: \"Tabbouleh\", ingredients: \"parsley, tomatoes, onions, mint, and bulgur wheat dressed with lemon juice and olive oil\", price: 10, imgPath: \"../pics/tabbouleh.jpg\"},\n    {name: \"Shawarma\", ingredients: \"Grilled meat (chicken or lamb) served with vegetables and pita bread\", price: 13, imgPath: \"../pics/shawarma.jpg\"},\n    {name: \"Fattoush\", ingredients: \"lettuce, tomatoes, cucumbers, radishes, onions, and crispy pita chips dressed with lemon juice and sumac\", price: 10, imgPath: \"../pics/fattoush.jpg\"},\n    {name: \"Baba Ganoush\", ingredients: \"roasted eggplant, tahini, garlic, and lemon juice served with pita bread\", price: 8, imgPath: \"../pics/baba_ganoush.jpg\"},\n    {name: \"Moussaka\", ingredients: \"eggplant, ground beef or lamb, tomatoes, onions, and spices topped with a creamy béchamel sauce\", price: 15, imgPath: \"../pics/moussaka.jpg\"},\n    {name: \"Kebab\", ingredients: \"Grilled meat (chicken, beef, or lamb) marinated in spices and served on a skewer with vegetables and rice or bulgur\", price: 15, imgPath: \"../pics/kebab.jpg\"},\n    {name: \"Spanakopita\", ingredients: \"phyllo dough and filled with spinach, feta cheese, and herbs\", price: 10, imgPath: \"../pics/spanakopita.jpg\"},\n    {name: \"Baklava\", ingredients: \"phyllo dough, chopped nuts, and honey syrup\", price: 8, imgPath: \"../pics/baklava.jpeg\"}\n]\n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?");

/***/ }),

/***/ "./src/start_up.js":
/*!*************************!*\
  !*** ./src/start_up.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Initialise)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nlet buttons = new Array();\n\nfunction Initialise() {\n    const header = document.querySelector(\"header\");\n    const h1 = document.createElement(\"h1\");\n    h1.innerText = \"[Restaurant]\";\n    header.appendChild(h1);\n\n    const div = document.createElement(\"div\");\n    div.classList.add(\"buttons\");\n    div.appendChild(new Button(\"Home\", new _home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().Print).Element);\n    div.appendChild(new Button(\"Menu\", new _menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().Print).Element);\n    div.appendChild(new Button(\"Contact\", new _contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().Print).Element);\n    header.appendChild(div);\n    buttons.push(document.querySelector(\"#Home\"));\n    buttons.push(document.querySelector(\"#Menu\"));\n    buttons.push(document.querySelector(\"#Contact\"));\n\n    const footer = document.querySelector(\"footer\");\n    footer.innerText = \"SINCE 2003\";\n\n    new _home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().Print();\n    buttons[0].dataset.state = \"selected\";\n}\n\nfunction Clear() {\n\n    buttons.forEach(btn => {\n        btn.dataset.state = \"not-selected\";\n    })\n\n    let content = document.getElementById(\"content\");\n    while (content.firstChild != null) content.removeChild(content.firstChild);\n}\n\nclass Button {\n    constructor(name, func) {\n        this.div = document.createElement(\"div\");\n        this.div.innerText = name;\n        this.div.id = name;\n        this.div.classList.add(\"btn\");\n        \n        this.div.addEventListener(\"click\", () => {\n            Clear();\n            this.div.dataset.state = \"selected\";\n            func();\n        });\n\n    }\n    get Element() {\n        return this.div;\n    }\n}\n\n//# sourceURL=webpack://restaurant_page/./src/start_up.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;