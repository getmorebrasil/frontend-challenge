import { combineReducers } from 'redux'
import storesGridReducer from '../StoresGrid/storesGridReducer'
import storeModalReducer from '../StoreModal/storeModalReducer'
import upperRowReducer from '../UpperRow/upperRowReducer'

const rootReducer = combineReducers ({
    storesGrid: storesGridReducer,
    storeModal: storeModalReducer,
    upperRow: upperRowReducer
})

export default rootReducer