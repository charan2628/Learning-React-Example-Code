import React from 'react'
import fetch from 'isomorphic-fetch'
const {Component} = React

const DataComponet = (ComposedeComponet, url) => 
    class DataComponet extends Component {
        constructor(props) {
            super(props)
            this.state = {
                data: [],
                loading: false,
                loaded: false
            }
        }

        componentWillMount() {
            this.setState({loading: true})
            url = url + this.props.count
            fetch(url)
                .then(response => response.json())
                .then(data => this.setState({
                    loaded: true,
                    loading: false,
                    data
                }))
        }

        render() {
            return (
                <div className="data-component">
                    {(this.state.loading)?
                        <div>Loading...</div> :
                        <ComposedeComponet {...this.state} />}
                </div>
            )
        }
    }

export default DataComponet