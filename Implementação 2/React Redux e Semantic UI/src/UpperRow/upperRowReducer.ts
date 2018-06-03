const INITIAL_STATE = { amount: 0 }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'STORES_GRID_UPDATED' :
            return { amount: action.payload.length }
        default :
            return state
    }
}