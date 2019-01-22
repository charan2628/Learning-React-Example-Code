const {Component, createElement} = React
const {render} = ReactDOM


class Summary extends Component {
    render() {
        const { ingredients, steps, title } = this.props
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
}

Summary.propTypes = {
    ingredients: PropTypes.array,
    steps: PropTypes.array,
    title: (props, propName) =>
        (typeof props[propName] !== 'string') ?
            new Error("A title must be a string") :
            (props[propName].length > 20) ?
                new Error('title is over 20 characters'):
                null
}

Summary.defaultProps = {
    title: "[reciepe]",
    ingredients: 0,
    steps: 0
}

render(<Summary title="Baked Salmon" ingredients="Peanut butter, salt" steps="on the oven"/>, 
    document.getElementById("summary"))