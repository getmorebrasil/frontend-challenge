const INITIAL_STATE = { amount: 0, storesList: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'STORES_UPDATED' :
            return { ...state, amount: action.payload.length, storesList: action.payload }
        default :
            return state
    }
}