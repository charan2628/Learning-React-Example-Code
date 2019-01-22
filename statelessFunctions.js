'use strict'

var items = [
    "1 lb Salmon",
    "1 cup Pinne Nuts",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup Olive Oil"
]


const IngredientList = props => React.createElement("ul", {className: "ingredients"},
        props.items.map((ingredient, i) => React.createElement("li", {key: i}, ingredient))
        )

const list = React.createElement(IngredientList, {items}, null)

ReactDOM.render(list, document.getElementById('react-container'))