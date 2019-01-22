const Star = ({ selected=true, onClick=f=>f}) => 
    <div className={(selected)? "star selected": "star"} onClick={onClick}>
    </div>

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

const StarRating = createReactClass({
    displayName: "StarRating",
    propTypes: {
        totalStars: PropTypes.number
    },
    getDefaultProps() {
        return {
            totalStars: 0
        }
    },
    getInitialState() {
        return {
            starsSelected: 0
        }
    },
    change(starsSelected) {
        this.setState({starsSelected})
    },
    render() {
        const {totalStars} = this.props
        const {starsSelected} = this.state
        return (
            <div className="star-rating">
                {[...Array(totalStars)].map((n, i) => 
                    <Star key={i} 
                        selected={i < starsSelected}
                        onClick={() => this.change(i+1)}
                    />
                    )}
                <p>{starsSelected} of {totalStars} stars</p>
            </div>
        )
    }
})

ReactDOM.render(<StarRating totalStars={5} />, document.getElementById('star-container'))