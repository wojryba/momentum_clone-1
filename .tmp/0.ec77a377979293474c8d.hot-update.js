webpackHotUpdate(0,{

/***/ 639:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(9), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(6), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_2q3lhun33s = function () {
  var path = 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\containers\\App.js',
      hash = '2432719c556b53eb140da027756362faf6675d01',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\containers\\App.js',
    statementMap: {
      '0': {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 12
        }
      },
      '1': {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 24,
          column: 6
        }
      },
      '2': {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 73
        }
      },
      '3': {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 31,
          column: 7
        }
      },
      '4': {
        start: {
          line: 35,
          column: 29
        },
        end: {
          line: 35,
          column: 39
        }
      },
      '5': {
        start: {
          line: 36,
          column: 29
        },
        end: {
          line: 39,
          column: 6
        }
      },
      '6': {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 69,
          column: 6
        }
      },
      '7': {
        start: {
          line: 73,
          column: 0
        },
        end: {
          line: 77,
          column: 2
        }
      },
      '8': {
        start: {
          line: 80,
          column: 2
        },
        end: {
          line: 83,
          column: 4
        }
      },
      '9': {
        start: {
          line: 87,
          column: 2
        },
        end: {
          line: 89,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        },
        loc: {
          start: {
            line: 19,
            column: 16
          },
          end: {
            line: 26,
            column: 3
          }
        },
        line: 19
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 28,
            column: 3
          }
        },
        loc: {
          start: {
            line: 28,
            column: 27
          },
          end: {
            line: 32,
            column: 3
          }
        },
        line: 28
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 34,
            column: 2
          },
          end: {
            line: 34,
            column: 3
          }
        },
        loc: {
          start: {
            line: 34,
            column: 11
          },
          end: {
            line: 70,
            column: 3
          }
        },
        line: 34
      },
      '3': {
        name: 'mapStateToProps',
        decl: {
          start: {
            line: 79,
            column: 9
          },
          end: {
            line: 79,
            column: 24
          }
        },
        loc: {
          start: {
            line: 79,
            column: 32
          },
          end: {
            line: 84,
            column: 1
          }
        },
        line: 79
      },
      '4': {
        name: 'mapDispatchToProps',
        decl: {
          start: {
            line: 86,
            column: 9
          },
          end: {
            line: 86,
            column: 27
          }
        },
        loc: {
          start: {
            line: 86,
            column: 38
          },
          end: {
            line: 90,
            column: 1
          }
        },
        line: 86
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 47,
            column: 9
          },
          end: {
            line: 57,
            column: 9
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 47,
            column: 9
          },
          end: {
            line: 47,
            column: 38
          }
        }, {
          start: {
            line: 48,
            column: 10
          },
          end: {
            line: 56,
            column: 16
          }
        }],
        line: 47
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(74);

var _reactRedux = __webpack_require__(84);

var _Header = __webpack_require__(631);

var _Header2 = _interopRequireDefault(_Header);

var _MainSection = __webpack_require__(635);

var _MainSection2 = _interopRequireDefault(_MainSection);

var _MainFocus = __webpack_require__(641);

var _MainFocus2 = _interopRequireDefault(_MainFocus);

var _classnames = __webpack_require__(90);

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__(625);

var TodoActions = _interopRequireWildcard(_index);

var _mainFocus_actions = __webpack_require__(626);

var MainFocusActions = _interopRequireWildcard(_mainFocus_actions);

var _Quotes = __webpack_require__(642);

var _Quotes2 = _interopRequireDefault(_Quotes);

var _Clock = __webpack_require__(629);

var _Clock2 = _interopRequireDefault(_Clock);

var _Weather = __webpack_require__(638);

var _Weather2 = _interopRequireDefault(_Weather);

var _Search = __webpack_require__(636);

var _Search2 = _interopRequireDefault(_Search);

var _Links = __webpack_require__(640);

var _Links2 = _interopRequireDefault(_Links);

var _Settings = __webpack_require__(643);

var _Settings2 = _interopRequireDefault(_Settings);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint linebreak-style: 0 */


var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    ++cov_2q3lhun33s.f[0];
    ++cov_2q3lhun33s.s[0];

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    ++cov_2q3lhun33s.s[1];


    _this.state = {
      todosOpen: false
    };
    ++cov_2q3lhun33s.s[2];
    _this.handleOpenOrCloseTodos = _this.handleOpenOrCloseTodos.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'handleOpenOrCloseTodos',
    value: function handleOpenOrCloseTodos() {
      ++cov_2q3lhun33s.f[1];
      ++cov_2q3lhun33s.s[3];

      this.setState({
        todosOpen: !this.state.todosOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      ++cov_2q3lhun33s.f[2];

      var _ref = (++cov_2q3lhun33s.s[4], this.props),
          todos = _ref.todos,
          actions = _ref.actions;

      var todosOpenPressed = (++cov_2q3lhun33s.s[5], (0, _classnames2.default)({
        openTodoLink: true,
        todosOpenPressed: this.state.todosOpen
      }));
      ++cov_2q3lhun33s.s[6];
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Links2.default, null),
        _react2.default.createElement(_Search2.default, null),
        _react2.default.createElement(_Weather2.default, null),
        _react2.default.createElement(_Settings2.default, null),
        _react2.default.createElement(
          'div',
          { className: todosOpenPressed, onClick: this.handleOpenOrCloseTodos },
          'todos'
        ),
        (++cov_2q3lhun33s.b[0][0], this.state.todosOpen === true) && (++cov_2q3lhun33s.b[0][1], _react2.default.createElement(
          'div',
          { className: 'todoContainer' },
          _react2.default.createElement(_Header2.default, {
            addTodo: actions.addTodo
          }),
          _react2.default.createElement(_MainSection2.default, {
            todos: todos,
            actions: actions
          })
        )),
        _react2.default.createElement(
          'div',
          { className: 'mainFocusWrapper' },
          _react2.default.createElement(_MainFocus2.default, {
            mainFocus: this.props.mainFocus,
            addMainFocus: actions.addMainFocus,
            completeMainFocus: actions.completeMainFocus,
            deleteMainFocus: actions.deleteMainFocus
          }),
          _react2.default.createElement(_Clock2.default, null),
          _react2.default.createElement(_Quotes2.default, null)
        )
      );
    }
  }]);

  return App;
}(_react.Component);

++cov_2q3lhun33s.s[7];


App.propTypes = {
  todos: _react.PropTypes.array.isRequired,
  actions: _react.PropTypes.object.isRequired,
  mainFocus: _react.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  ++cov_2q3lhun33s.f[3];
  ++cov_2q3lhun33s.s[8];

  return {
    todos: state.todos,
    mainFocus: state.mainFocus
  };
}

function mapDispatchToProps(dispatch) {
  ++cov_2q3lhun33s.f[4];
  ++cov_2q3lhun33s.s[9];

  return {
    actions: (0, _redux.bindActionCreators)(Object.assign({}, TodoActions, MainFocusActions), dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(11); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "App.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ },

/***/ 641:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(9), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(6), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_1x4o47dd3p = function () {
  var path = 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\containers\\MainFocus.js',
      hash = 'ec4fc84d6b104d010c5c4db9f49bcb6aaa7f49fb',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\containers\\MainFocus.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 17
        }
      },
      '1': {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 13,
          column: 7
        }
      },
      '2': {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 53
        }
      },
      '3': {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 53
        }
      },
      '4': {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 51
        }
      },
      '5': {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 69
        }
      },
      '6': {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 51
        }
      },
      '7': {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 26,
          column: 7
        }
      },
      '8': {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 32,
          column: 7
        }
      },
      '9': {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 33
        }
      },
      '10': {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 40,
          column: 7
        }
      },
      '11': {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 44,
          column: 66
        }
      },
      '12': {
        start: {
          line: 48,
          column: 17
        },
        end: {
          line: 48,
          column: 51
        }
      },
      '13': {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 55,
          column: 5
        }
      },
      '14': {
        start: {
          line: 50,
          column: 6
        },
        end: {
          line: 50,
          column: 36
        }
      },
      '15': {
        start: {
          line: 51,
          column: 6
        },
        end: {
          line: 54,
          column: 9
        }
      },
      '16': {
        start: {
          line: 59,
          column: 27
        },
        end: {
          line: 62,
          column: 6
        }
      },
      '17': {
        start: {
          line: 63,
          column: 25
        },
        end: {
          line: 66,
          column: 6
        }
      },
      '18': {
        start: {
          line: 68,
          column: 18
        },
        end: {
          line: 68,
          column: 22
        }
      },
      '19': {
        start: {
          line: 69,
          column: 4
        },
        end: {
          line: 103,
          column: 5
        }
      },
      '20': {
        start: {
          line: 70,
          column: 6
        },
        end: {
          line: 82,
          column: 8
        }
      },
      '21': {
        start: {
          line: 84,
          column: 6
        },
        end: {
          line: 102,
          column: 8
        }
      },
      '22': {
        start: {
          line: 104,
          column: 4
        },
        end: {
          line: 108,
          column: 6
        }
      },
      '23': {
        start: {
          line: 112,
          column: 0
        },
        end: {
          line: 117,
          column: 2
        }
      },
      '24': {
        start: {
          line: 119,
          column: 24
        },
        end: {
          line: 123,
          column: 1
        }
      },
      '25': {
        start: {
          line: 120,
          column: 2
        },
        end: {
          line: 122,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 7,
            column: 3
          }
        },
        loc: {
          start: {
            line: 7,
            column: 21
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 7
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        },
        loc: {
          start: {
            line: 22,
            column: 16
          },
          end: {
            line: 27,
            column: 3
          }
        },
        line: 22
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        },
        loc: {
          start: {
            line: 29,
            column: 18
          },
          end: {
            line: 33,
            column: 3
          }
        },
        line: 29
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 35,
            column: 2
          },
          end: {
            line: 35,
            column: 3
          }
        },
        loc: {
          start: {
            line: 35,
            column: 16
          },
          end: {
            line: 41,
            column: 3
          }
        },
        line: 35
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 43,
            column: 3
          }
        },
        loc: {
          start: {
            line: 43,
            column: 25
          },
          end: {
            line: 45,
            column: 3
          }
        },
        line: 43
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 47,
            column: 2
          },
          end: {
            line: 47,
            column: 3
          }
        },
        loc: {
          start: {
            line: 47,
            column: 18
          },
          end: {
            line: 56,
            column: 3
          }
        },
        line: 47
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 58,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        },
        loc: {
          start: {
            line: 58,
            column: 11
          },
          end: {
            line: 109,
            column: 3
          }
        },
        line: 58
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 119,
            column: 24
          },
          end: {
            line: 119,
            column: 25
          }
        },
        loc: {
          start: {
            line: 119,
            column: 33
          },
          end: {
            line: 123,
            column: 1
          }
        },
        line: 119
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 11,
            column: 12
          },
          end: {
            line: 11,
            column: 43
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 11,
            column: 12
          },
          end: {
            line: 11,
            column: 37
          }
        }, {
          start: {
            line: 11,
            column: 41
          },
          end: {
            line: 11,
            column: 43
          }
        }],
        line: 11
      },
      '1': {
        loc: {
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 55,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 55,
            column: 5
          }
        }, {
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 55,
            column: 5
          }
        }],
        line: 49
      },
      '2': {
        loc: {
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 103,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 103,
            column: 5
          }
        }, {
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 103,
            column: 5
          }
        }],
        line: 69
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0,
      '19': 0,
      '20': 0,
      '21': 0,
      '22': 0,
      '23': 0,
      '24': 0,
      '25': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(84);

var _classnames = __webpack_require__(90);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint linebreak-style: 0 */


var MainFocus = function (_Component) {
  _inherits(MainFocus, _Component);

  function MainFocus(props) {
    _classCallCheck(this, MainFocus);

    ++cov_1x4o47dd3p.f[0];
    ++cov_1x4o47dd3p.s[0];

    var _this = _possibleConstructorReturn(this, (MainFocus.__proto__ || Object.getPrototypeOf(MainFocus)).call(this, props));

    ++cov_1x4o47dd3p.s[1];


    _this.state = {
      text: (++cov_1x4o47dd3p.b[0][0], _this.props.mainFocus.text) || (++cov_1x4o47dd3p.b[0][1], ''),
      editing: false
    };

    ++cov_1x4o47dd3p.s[2];
    _this.handleChange = _this.handleChange.bind(_this);
    ++cov_1x4o47dd3p.s[3];
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    ++cov_1x4o47dd3p.s[4];
    _this.handleFocus = _this.handleFocus.bind(_this);
    ++cov_1x4o47dd3p.s[5];
    _this.handleCheckboxChange = _this.handleCheckboxChange.bind(_this);
    ++cov_1x4o47dd3p.s[6];
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(MainFocus, [{
    key: 'handleFocus',
    value: function handleFocus() {
      ++cov_1x4o47dd3p.f[1];
      ++cov_1x4o47dd3p.s[7];

      this.setState({
        text: '',
        editing: true
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      ++cov_1x4o47dd3p.f[2];
      ++cov_1x4o47dd3p.s[8];

      this.setState({
        text: e.target.value
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      ++cov_1x4o47dd3p.f[3];
      ++cov_1x4o47dd3p.s[9];

      this.props.deleteMainFocus();
      ++cov_1x4o47dd3p.s[10];
      this.setState({
        text: '',
        editing: false
      });
    }
  }, {
    key: 'handleCheckboxChange',
    value: function handleCheckboxChange() {
      ++cov_1x4o47dd3p.f[4];
      ++cov_1x4o47dd3p.s[11];

      this.props.completeMainFocus(!this.props.mainFocus.completed);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      ++cov_1x4o47dd3p.f[5];

      var text = (++cov_1x4o47dd3p.s[12], e.target.value.trim().slice(0, 40));
      ++cov_1x4o47dd3p.s[13];
      if (e.which === 13) {
        ++cov_1x4o47dd3p.b[1][0];
        ++cov_1x4o47dd3p.s[14];

        this.props.addMainFocus(text);
        ++cov_1x4o47dd3p.s[15];
        this.setState({
          text: text,
          editing: false
        });
      } else {
        ++cov_1x4o47dd3p.b[1][1];
      }
    }
  }, {
    key: 'render',
    value: function render() {
      ++cov_1x4o47dd3p.f[6];

      var mainFocusInput = (++cov_1x4o47dd3p.s[16], (0, _classnames2.default)({
        mainFocusInput: true,
        mainFocusEditing: this.state.editing
      }));
      var mainFocusSet = (++cov_1x4o47dd3p.s[17], (0, _classnames2.default)({
        mainFocusSet: this.props.mainFocus.completed,
        mainFocusSetText: true
      }));

      var element = (++cov_1x4o47dd3p.s[18], null);
      ++cov_1x4o47dd3p.s[19];
      if (this.props.mainFocus.text === '') {
        ++cov_1x4o47dd3p.b[2][0];
        ++cov_1x4o47dd3p.s[20];

        element = _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h2',
            { className: 'mainFocusTitle' },
            'What is your main focus for today?'
          ),
          _react2.default.createElement('input', {
            type: 'text',
            className: mainFocusInput,
            value: this.state.text,
            onChange: this.handleChange,
            onKeyDown: this.handleSubmit,
            onFocus: this.handleFocus
          })
        );
      } else {
        ++cov_1x4o47dd3p.b[2][1];
        ++cov_1x4o47dd3p.s[21];

        element = _react2.default.createElement(
          'div',
          { className: 'viewFocus' },
          _react2.default.createElement(
            'div',
            { className: 'toggleFocus' },
            _react2.default.createElement('input', {
              id: 'toggleFocus',
              type: 'checkbox',
              checked: this.props.mainFocus.completed,
              onChange: this.handleCheckboxChange
            }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'toggleFocus', className: mainFocusSet },
              this.props.mainFocus.text
            )
          ),
          _react2.default.createElement(
            'button',
            {
              className: 'destroyMainFocusBtn',
              onClick: this.handleClick
            },
            'x'
          )
        );
      }
      ++cov_1x4o47dd3p.s[22];
      return _react2.default.createElement(
        'div',
        null,
        element
      );
    }
  }]);

  return MainFocus;
}(_react.Component);

++cov_1x4o47dd3p.s[23];


MainFocus.propTypes = {
  mainFocus: _react.PropTypes.object.isRequired,
  addMainFocus: _react.PropTypes.func.isRequired,
  completeMainFocus: _react.PropTypes.func.isRequired,
  deleteMainFocus: _react.PropTypes.func.isRequired
};

++cov_1x4o47dd3p.s[24];
var mapStateToProps = function mapStateToProps(state) {
  ++cov_1x4o47dd3p.f[7];
  ++cov_1x4o47dd3p.s[25];

  return {
    mainFocus: state.mainFocus
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MainFocus);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(11); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "MainFocus.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }

})
//# sourceMappingURL=0.ec77a377979293474c8d.hot-update.js.map