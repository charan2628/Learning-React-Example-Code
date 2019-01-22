"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var data = [{
    name: "Baked Salmon",
    ingredients: [{ name: "Salmon", amount: 1, measurement: "1 lb" }, { name: "Pine Nuts", amount: 1, measurement: "cup" }, { name: "Butter Lettuce", amount: 2, measurement: "cups" }, { name: "Yellow Squash", amount: 1, measurement: "med" }, { name: "Olive Oil", amount: 0.5, measurement: "cup" }, { name: "Garlic", amount: 3, measurement: "cloves" }],
    steps: ["Preheat the oven to 350 degreees", "Spread the olive oil around a glass baking dish", "Add the salmon, garlic, and pine nuts to the dish", "Bake for 15 minutes", "Add the yellow squash and put back in the oven for 30 mins", "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."]
}, {
    name: "Fish Tacos",
    ingredients: [{ name: "Whitefish", amount: 1, measurement: "1 lb" }, { name: "Cheese", amount: 1, measurement: "cup" }, { name: "Iceberg Lettuce", amount: 2, measurement: "cups" }, { name: "Tomatoes", amount: 2, measurement: "large" }, { name: "Tortillas", amount: 3, measurement: "med" }],
    steps: ["Cook the fish on the grill untill hot.", "Place the fish on the 3 tortillas.", "Top them with lettuce, tomatoes, and cheese."]
}];

var Recipe = function Recipe(_ref) {
    var name = _ref.name,
        ingredients = _ref.ingredients,
        steps = _ref.steps;
    return React.createElement(
        "section",
        { id: name.toLowerCase().replace(/ /g, "-") },
        React.createElement(
            "h1",
            null,
            name
        ),
        React.createElement(
            "ul",
            { className: "ingredients" },
            ingredients.map(function (ingredient, i) {
                return React.createElement(
                    "li",
                    { key: i },
                    ingredient.name
                );
            })
        ),
        React.createElement(
            "section",
            { className: "instructions" },
            React.createElement(
                "h2",
                null,
                "Cooking Instructions"
            ),
            steps.map(function (step, i) {
                return React.createElement(
                    "p",
                    { key: i },
                    step
                );
            })
        )
    );
};

var Menu = function Menu(_ref2) {
    var title = _ref2.title,
        recipes = _ref2.recipes;
    return React.createElement(
        "article",
        null,
        React.createElement(
            "header",
            null,
            React.createElement(
                "h1",
                null,
                title
            )
        ),
        React.createElement(
            "div",
            { className: "recipes" },
            recipes.map(function (recipe, i) {
                return React.createElement(Recipe, _extends({ key: i }, recipe));
            })
        )
    );
};

ReactDOM.render(React.createElement(Menu, { recipes: data,
    title: "Delicious Recipes" }), document.getElementById('react-container'));