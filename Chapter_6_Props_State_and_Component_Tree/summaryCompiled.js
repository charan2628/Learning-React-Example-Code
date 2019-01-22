"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React = React,
    Component = _React.Component,
    PropTypes = _React.PropTypes,
    createElement = _React.createElement;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;

var Summary = function (_Component) {
    _inherits(Summary, _Component);

    function Summary() {
        _classCallCheck(this, Summary);

        return _possibleConstructorReturn(this, (Summary.__proto__ || Object.getPrototypeOf(Summary)).apply(this, arguments));
    }

    _createClass(Summary, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                ingredients = _props.ingredients,
                steps = _props.steps,
                title = _props.title;

            return React.createElement(
                "div",
                { className: "summary" },
                React.createElement(
                    "h1",
                    null,
                    title
                ),
                React.createElement(
                    "p",
                    null,
                    React.createElement(
                        "span",
                        null,
                        ingredients,
                        " Ingredients | "
                    ),
                    React.createElement(
                        "span",
                        null,
                        steps,
                        " Steps"
                    )
                )
            );
        }
    }]);

    return Summary;
}(Component);

Summary.propTypes = {
    ingredients: PropTypes.number,
    steps: PropTypes.number,
    title: function title(props, propName) {
        return typeof props[propName] !== 'string' ? new Error("A title must be a string") : props[propName].length > 20 ? new Error('title is over 20 characters') : null;
    }
};

Summary.defaultProps = {
    title: "[reciepe]",
    ingredients: 0,
    steps: 0
};

var SummaryElemnet = createElement(Summary, null, null);

render(SummaryElemnet, document.getElementById("summary"));