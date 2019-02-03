import {createStore, combineReducers, applyMiddleware} from 'redux';
import { colors, sort } from './components/reducers'
import state from './components/data';

const logger = store => next => action => {
    let result;
    console.groupCollapsed("LOGGER: dispatching", action.type);
    console.log('LOGGER: prev state: ', store.getState());
    console.log('LOGGER: action', action);
    result = next(action);
    console.log('LOGGER: result: ', result);
    console.log('LOGGER: next state', store.getState());
    console.groupEnd();
}

const saver = store => next => action => {
    console.log('SAVER: starting.....')
    // action.middleware = 'PASSED SAVER MIDDLEWARE';
    let result = next(action);
    console.log('SAVER: result ', result);
    localStorage['redux-store'] = JSON.stringify(store.getState())
    return result;
}

const storeFactory = (intialState=state) => 
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({colors, sort}),
        intialState
    )

export default storeFactory