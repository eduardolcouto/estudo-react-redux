import {combineReducers} from 'redux'

import counterReducer from './counterReducer'
import anotherReducer from './anotherReducer'
import getIpReducer from './getIpReducer'


export default combineReducers({
    counterReducer,
    anotherReducer,
    getIpReducer
})