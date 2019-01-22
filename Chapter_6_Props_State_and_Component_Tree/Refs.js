const {Component} = React

class AddColorForm extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }
    submit(e) {
        e.preventDefault()
        const {_title, _color} = this.refs
        if(this.props.onNewColor) {
            this.props.onNewColor(_title.value, _color.value)
        }
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }
    render() {
        return (
            <form onSubmit={this.submit}>
                <input ref="_title" 
                    type="text" 
                    placeholder="color title...." required/>
                <input ref="_color" 
                    type="color" required/>
                <button>ADD</button>
            </form>
        )
    }
}

AddColorForm.propTypes = {
    onNewColor: PropTypes.func
}

AddColorForm.defaultProps = {
    onNewColor: f => f
}

const logColor = (title, color) => 
            console.log(`New Color ${title} | ${color}`)

ReactDOM.render(<AddColorForm onNewColor={logColor}/>, document.getElementById('addColor'))