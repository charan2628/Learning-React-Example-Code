import React from 'react'
import ReactDOM from 'react-dom'
const {render, unmountComponentAtNode} = ReactDOM
import getClockTime from './tickingClock'
const {Component} = React
const target = document.getElementById('react-container')

class Clock extends Component {
    constructor() {
        super()
        this.state = getClockTime()
    }

    componentDidMount() {
        console.log("Starting Clock")
        this.ticking = setInterval(() =>
            this.setState(getClockTime()), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.ticking)
        console.log("Stopping Clock")
    }

    render() {
        const { hours, minutes, seconds, ampm} = this.state
        return (
            <div className="clock">
                <span>{hours}</span>
                <span>:</span>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
                <span>{ampm}</span>
                <button onClick={this.props.onClose}>X</button>
            </div>
        )
    }
}

ReactDOM.render(<Clock onClose={() => unmountComponentAtNode(target)} />, target)