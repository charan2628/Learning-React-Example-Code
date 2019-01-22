const { Component } = React

class Star extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {selected, onClick} = this.props
        return (
            <div className={(selected)? "star selected": "star"} onClick={onClick}>
            </div>
        )
    }
}

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

class StarRating extends Component {
    constructor(props) {
        super(props)
        this.state = {
            starsSelected: 0
        }
    }
    change(starsSelected) {
        this.setState({starsSelected})
    }
    render() {
        const {totalStars} = this.props
        const {starsSelected} = this.state
        return (
            <div className="starRating">
                { 
                    [...Array(totalStars)].map((n, i) => 
                        <Star key={i} 
                            selected={i<starsSelected} 
                            onClick={() => this.change(i+1)}
                        />
                    )
                }
                <p>{starsSelected} of {totalStars} stars</p>
            </div>
        )
    }
}

ReactDOM.render(<StarRating totalStars={5} />, document.getElementById('star-container'))