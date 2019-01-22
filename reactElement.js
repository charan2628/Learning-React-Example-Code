'use strict'

var items = [
    "1 lb Salmon",
    "1 cup Pinne Nuts",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup Olive Oil"
]

var ingredientsList = React.createElement("ul", {className: "ingredients"}, 
    items.map((ingredient, i) => React.createElement("li", {key: i}, ingredient)))

var element = React.createElement("h1", null, "<i>Hii</i>")

ReactDOM.render(ingredientsList, document.getElementById("react-container"))
