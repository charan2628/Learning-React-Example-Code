import {PropTypes} from 'proptype';
import Color from './Color';
import {rateColor, removeColor} from '../components/actionCreators';

const ColorList = ({store}) => {
    const {colors, sort} = store.getState()
    return (
        <div className="color-list">
            {(colors.length === 0)? 
                <p>no Colors listed. (Add a color)</p> :
                colors.map(color => 
                    <Color key={color.id} 
                    {...color}
                    onRemove={() => store.dispatch(removeColor(color.id))}
                    onRate={(rating) => store.dispatch(rateColor(color.id, rating))} />
                )
            }
        </div>
    )
}

ColorList.propTypes = {
    store: PropTypes.object
}

export default ColorList