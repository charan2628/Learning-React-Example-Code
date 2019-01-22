var data = [{
    name: "Baked Salmon",
    ingredients: [{ name: "Salmon", amount: 1, measurement: "1 lb" }, { name: "Pine Nuts", amount: 1, measurement: "cup" }, { name: "Butter Lettuce", amount: 2, measurement: "cups" }, { name: "Yellow Squash", amount: 1, measurement: "med" }, { name: "Olive Oil", amount: 0.5, measurement: "cup" }, { name: "Garlic", amount: 3, measurement: "cloves" }],
    steps: ["Preheat the oven to 350 degreees", "Spread the olive oil around a glass baking dish", "Add the salmon, garlic, and pine nuts to the dish", "Bake for 15 minutes", "Add the yellow squash and put back in the oven for 30 mins", "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."]
}, {
    name: "Fish Tacos",
    ingredients: [{ name: "Whitefish", amount: 1, measurement: "1 lb" }, { name: "Cheese", amount: 1, measurement: "cup" }, { name: "Iceberg Lettuce", amount: 2, measurement: "cups" }, { name: "Tomatoes", amount: 2, measurement: "large" }, { name: "Tortillas", amount: 3, measurement: "med" }],
    steps: ["Cook the fish on the grill untill hot.", "Place the fish on the 3 tortillas.", "Top them with lettuce, tomatoes, and cheese."]
}];

const Summary = createReactClass({
    displayName: "summary",
    propTypes: {
        ingredients: PropTypes.array,
        steps: PropTypes.array,
        title: PropTypes.string
    },
    getDefaultProps() {
        return {
            ingredients: 0,
            steps: 0,
            title: "[recipe]"
        }
    },
    render() {
        const {ingredients, steps, title} = this.props
        return (
            <div className="summary">
                <h1>{title}</h1>
                <p>
                    <span>{ingredients.length} Ingredients | </span>
                    <span>{steps.length} Steps</span>
                </p>
            </div>
        )
    }
})

ReactDOM.render(<Summary {...data[0]} title="Baked Salmon"/>, document.getElementById('summary'));