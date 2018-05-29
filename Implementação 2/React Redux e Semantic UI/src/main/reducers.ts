import { combineReducers } from 'redux'
import storesReducer from '../StoresGrid/storesReducer'

const rootReducer = combineReducers ({
    stores: storesReducer
})

export default rootReducer