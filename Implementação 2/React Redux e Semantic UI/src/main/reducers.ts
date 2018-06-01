import { combineReducers } from 'redux'
import storesGridReducer from '../StoresGrid/storesGridReducer'
import storeModalReducer from '../StoreModal/storeModalReducer'

const rootReducer = combineReducers ({
    storesGrid: storesGridReducer,
    storeModal: storeModalReducer
})

export default rootReducer