import {PropTypes} from 'proptype';
import {addColor} from '../components/actionCreators';

const AddColorForm = ({store}) => {
    let _title, _color

    const submit = e => {
        e.preventDefault()
        store.dispatch(addColor(_title.value, _color.value))
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }

    return (
        <form className="add-color" onSubmit={submit}>
            <input ref={input => _title = input} type="text" placeholder="color title" required/>
            <input ref={input => _color = input} type="color" required/>
            <button>ADD</button>
        </form>
    )
}

AddColorForm.propTypes = {
    store: PropTypes.object
}

export default AddColorForm