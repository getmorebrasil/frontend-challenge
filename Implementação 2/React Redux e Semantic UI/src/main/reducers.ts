import { combineReducers } from 'redux'
import storesGridReducer from '../StoresGrid/storesGridReducer'

const rootReducer = combineReducers ({
    storesGrid: storesGridReducer
})

export default rootReducer