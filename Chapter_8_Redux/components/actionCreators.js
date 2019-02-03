import C from './constants';
import {v4} from 'uuid';

export const addColor = (title, color) => 
({
    type: C.ADD_COLOR,
    color,
    id: v4(),
    title,
    timestamp: new Date().toString()
})

export const removeColor = id => ({
    type: C.REMOVE_COLOR,
    id
})

export const rateColor = (id, rating) => ({
    type: C.RATE_COLOR,
    id,
    rating
})