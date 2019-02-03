import {PropTypes} from 'proptype';

const Star = ({selected=true, onClick = f => f}) => 
    <div className={(selected)? "selected star": "star"} onClick={onClick}>
    </div>

Star.prototype = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

export default Star;