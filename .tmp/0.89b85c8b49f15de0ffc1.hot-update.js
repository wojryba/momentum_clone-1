webpackHotUpdate(0,{

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(220)();
// imports


// module
exports.push([module.i, "html {\n  background: url(\"https://source.unsplash.com/category/nature/daily\") no-repeat center center fixed;\n  background-size: cover;\n  height: 100%; }\n\nbody {\n  background-color: transparent; }\n\n.newTodoTextInput {\n  font-size: 1.2em; }\n\n.todoLi label {\n  font-size: 0.7em; }\n\n.footer {\n  font-size: 0.7em; }\n\n.openTodoLink {\n  color: #5F021F;\n  background-color: #FFFFFF;\n  border-radius: 5px;\n  text-align: center;\n  font-size: 1.2em;\n  position: fixed;\n  padding: 5px;\n  right: 2%;\n  bottom: 2%;\n  width: 50px; }\n\n.openTodoLink:hover {\n  color: #DA7777;\n  border: 1px solid #DA7777; }\n\n.todosOpenPressed {\n  color: #DA7777; }\n\n.todoContainer {\n  position: fixed;\n  right: 5%;\n  bottom: 5%;\n  background-color: #FFFFFF;\n  width: 350px; }\n\n.mainFocusWrapper {\n  position: relative;\n  margin: 0 auto;\n  background: transparent;\n  width: 100%;\n  z-index: -1; }\n\n.viewFocus {\n  position: relative;\n  display: inline-block;\n  height: 30px;\n  width: 100%;\n  font-weight: bold; }\n\n.mainFocusInput {\n  background: transparent;\n  width: 100%;\n  color: #fff;\n  font-size: 1.5em;\n  border-top: none;\n  border-right: none;\n  border-left: none;\n  text-align: center;\n  font-weight: bold; }\n\n.mainFocusSet {\n  text-decoration: line-through; }\n\n.mainFocusSetText {\n  color: white;\n  font-size: 1.5em;\n  text-align: center; }\n\n.destroyMainFocusBtn {\n  display: none;\n  height: 20px;\n  font-size: 1.5em;\n  color: #cc9a9a;\n  -webkit-transition: color 0.2s ease-out;\n  transition: color 0.2s ease-out;\n  margin-left: 5px; }\n\n.toggleFocus {\n  display: inline-block;\n  margin-top: 5px; }\n\n#toggleFocus {\n  width: 15px;\n  height: 15px; }\n\n.destroyMainFocusBtn:hover {\n  color: #af5b5e; }\n\n.viewFocus:hover .destroyMainFocusBtn {\n  display: inline-block; }\n\n.mainFocusTitle {\n  color: white;\n  text-align: center;\n  font-size: 2em; }\n\n.todoapp {\n  background: transparent;\n  box-shadow: none; }\n\n.Quotes {\n  position: fixed;\n  bottom: 20%;\n  text-align: center;\n  font-size: 1.2em;\n  background-color: transparent;\n  color: #eceff1;\n  z-index: -1; }\n\n.Slide {\n  -webkit-animation: slide 0.5s forwards;\n  animation: slide 0.5s forwards; }\n\n@-webkit-keyframes slide {\n  0% {\n    -webkit-transform: translateY(0%);\n    transform: translateY(0%); }\n  100% {\n    -webkit-transform: translateY(-25px);\n    transform: translateY(-25px); } }\n\n@keyframes slide {\n  0% {\n    -webkit-transform: translateY(0%);\n    transform: translateY(0%); }\n  100% {\n    -webkit-transform: translateY(-25px);\n    transform: translateY(-25px); } }\n\n.Author {\n  visibility: hidden;\n  font-size: 0.9em; }\n\n.AnimationTwo {\n  -webkit-animation: slide2 0.5s ease-in forwards;\n  animation: slide2 0.5s ease-in forwards;\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s; }\n\n@-webkit-keyframes slide2 {\n  0% {\n    -webkit-transform: translateY(-25px);\n    transform: translateY(-25px);\n    opacity: 0;\n    visibility: visible; }\n  100% {\n    -webkit-transform: translateY(10px);\n    transform: translateY(10px);\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes slide2 {\n  0% {\n    -webkit-transform: translateY(-25px);\n    transform: translateY(-25px);\n    opacity: 0;\n    visibility: visible; }\n  100% {\n    -webkit-transform: translateY(10px);\n    transform: translateY(10px);\n    opacity: 1;\n    visibility: visible; } }\n\n.Links {\n  text-shadow: -2px -1px 9px rgba(188, 188, 188, 0.69);\n  position: fixed;\n  top: 2%;\n  left: 2%;\n  color: #e0e0e0;\n  font-size: 1.2em; }\n\n.LinksClicked {\n  font-size: 1.4em;\n  color: #f5f5f5; }\n\n#LinksUnclicked {\n  font-size: 1.4em; }\n\n.linksBackground {\n  box-sizing: border-box;\n  background-color: rgba(0, 0, 0, 0.8);\n  padding-left: 5px;\n  border-radius: 5px;\n  width: 170px; }\n\n.linksBackground ul {\n  list-style-type: none;\n  margin: 2px;\n  padding: 2px; }\n\n.linksBackground li {\n  padding: 1px;\n  margin: 1px; }\n\n.linksBackground i {\n  position: fixed;\n  left: 11.5%; }\n\n.linksBackground a {\n  text-decoration: none;\n  color: #e0e0e0;\n  opacity: 0.7; }\n\n.linksBackground a:hover {\n  text-shadow: -2px -1px 9px rgba(188, 188, 188, 0.69);\n  opacity: 1;\n  color: #f5f5f5; }\n\n.linksBackground i {\n  color: #e0e0e0;\n  opacity: 0.7; }\n\n.linksBackground i:hover {\n  text-shadow: -2px -1px 9px rgba(188, 188, 188, 0.69);\n  opacity: 1;\n  color: #f5f5f5; }\n\n.linksForm input {\n  box-sizing: border-box;\n  background: none;\n  background-color: #424242;\n  border: none;\n  width: 100%;\n  margin-left: -2.5%;\n  padding: 3px;\n  color: #e0e0e0; }\n\n#hiddenSubmit {\n  visibility: hidden;\n  margin: 0;\n  padding: 0;\n  height: 1px;\n  width: 1px; }\n\n.clockStyle {\n  position: relative;\n  margin-top: 200px;\n  background-color: transparent;\n  color: white;\n  font-size: 85px;\n  text-align: center; }\n\n.weatherStyle {\n  position: fixed;\n  top: 2%;\n  right: 2%;\n  background-color: transparent;\n  color: white;\n  font-size: 18px;\n  text-align: center; }\n\n.weatherStyle img {\n  width: 30px;\n  height: 30px; }\n\n.searchStyle {\n  position: fixed;\n  top: 1.5%;\n  left: 8%;\n  width: 205px;\n  color: white; }\n\n.searchStyle input:focus {\n  border-bottom: 3px solid white; }\n\n.searchStyle input {\n  height: 60px;\n  padding: 20px 2px 5px 4px;\n  z-index: 2;\n  background: 0 0;\n  border: none;\n  box-sizing: border-box;\n  line-height: 20px;\n  outline: 0;\n  color: white;\n  font-size: 17px;\n  width: 180px; }\n\n.searchStyle i {\n  font-size: 17px; }\n\n.searchStyle i:hover {\n  cursor: pointer; }\n\n.settings {\n  position: fixed;\n  bottom: 2%;\n  left: 2%;\n  color: #e0e0e0; }\n\n.settingsPage {\n  height: 450px;\n  width: 650px;\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0.8);\n  margin-bottom: 2%;\n  z-index: 10; }\n\n.settingsLeft {\n  float: left;\n  width: 25%;\n  height: 95.5%;\n  border-right: 1px solid #616161;\n  padding-left: 5%;\n  padding-top: 3%; }\n\n.settingsRight {\n  position: relative;\n  float: right;\n  width: 69%;\n  height: 99%; }\n\n.about {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  text-align: center;\n  color: #f5f5f5;\n  text-decoration: none; }\n\n.about a {\n  color: #f5f5f5; }\n", ""]);

// exports


/***/ }

})
//# sourceMappingURL=0.89b85c8b49f15de0ffc1.hot-update.js.map