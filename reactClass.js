'use strict'

var items = [
    "1 lb Salmon",
    "1 cup Pinne Nuts",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup Olive Oil"
]

class IngredientsList extends React.Component {
    renderListItem(ingredient, i) {
        return React.createElement("li", {key: i}, ingredient)
    }
    render() {
        return React.createElement("ul", {className: "ingredients"}, 
        this.props.items.map((ingredient, i) => this.renderListItem(ingredient, i)))
    }
}

const list = React.createElement(IngredientsList, {items}, null)

ReactDOM.render(list, document.getElementById('react-container'))

