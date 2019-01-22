const Star = ({ selected=true, onClick=f=>f}) => 
    <div className={(selected)? "star selected": "star"} onClick={onClick}>
    </div>

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

ReactDOM.render(<Star />, document.getElementById('star-container'))