import { combineReducers } from 'redux'
import actions from './actions'

const user = (state = null) => state

// add switch statements in here
const cars = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CAR' :
            return [...state, action.value]
        case 'REMOVE_CAR' :
            let stateCopy = [...state]
            stateCopy.splice(action.value, 1)
            return stateCopy
        default : return state;
    }
}

export default combineReducers({ user, cars })