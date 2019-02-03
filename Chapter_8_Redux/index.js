import React from 'react';
import ReactDOM from 'react-dom';
import storeFactory from './store';
import state from './components/data';
import App from './App'

const store = storeFactory(state);

window.React = React;

const render = () => 
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('react-container')
    )

store.subscribe(render)
render();

