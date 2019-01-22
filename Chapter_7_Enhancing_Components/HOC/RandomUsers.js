import React from 'react'
import ReactDOM from 'react-dom'
import PeopleList from './PeopleList'
import DataComponent from './DataComponent'

window.React = React

const {render} = ReactDOM

const RandomUsers = DataComponent(
    PeopleList,
    "https://randomuser.me/api/?results="
)

render(
    <RandomUsers count={10} />,
    document.getElementById('react-container')
)