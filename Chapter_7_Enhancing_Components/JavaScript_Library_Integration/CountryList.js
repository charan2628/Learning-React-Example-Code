import React from 'react'
import ReactDOM from 'react-dom'
import fetch from 'isomorphic-fetch';
const { Component } = React;
const { render } = ReactDOM;

window.React = React

class CountryList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countryNames: [],
            loading: false
        }
    }

    componentWillMount() {
        console.log('In ComponentWillMount method')
    }

    componentDidMount() {
        console.log('In ComponentDidMount method')
        this.setState({loading: true})
        fetch('https://restcountries.eu/rest/v1/all')
        .then(response => response.json())
        .then(json => json.map(country => country.name))
        .then(countryNames => this.setState({countryNames, loading: false}))
    }

    componentWillReceiveProps() {
        console.log('In componentWillReceiveProps method')
    }

    shouldComponentUpdate() {
        console.log('In shouldComponentUpdate Method')
        return true
    }

    componentWillUpdate() {
        console.log('In ComponentWillUpdate method')
    }

    componentDidUpdate() {
        console.log('In ComponentDidUpdate Method')
    }

    render() {
        console.log('In render Method')
        const {countryNames, loading} = this.state
        return (loading)? 
                <div>loading country names....</div> :
                (!countryNames.length) ? 
                    <div>No Country Names</div> :
                    <ul>
                        {countryNames.map(
                            (x, i) => <li key={i}>{x}</li>
                        )}
                    </ul>
    }
}

render(<CountryList />, document.getElementById('react-container'))