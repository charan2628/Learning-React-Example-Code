const {render} = ReactDOM;

const IngredientsList = ({ list }) => React.createElement('ul', null,
 list.map((ingredient, i) => React.createElement('li', {key: i}, ingredient)
 )
 )

 const Ingredients = React.createFactory(IngredientsList)

 var items = [
    "1 lb Salmon",
    "1 cup Pinne Nuts",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup Olive Oil"
]

render(
    Ingredients({list: items}), 
    document.getElementById('react-container')
)