import {PropTypes} from 'proptype'

const Star = ({ selected=true, onClick=f=>f}) => 
    <div className={(selected)? "star selected": "star"} onClick={onClick}>
    </div>

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

export default Star