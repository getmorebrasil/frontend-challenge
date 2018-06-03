export const orderByID = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'STORE_LIST_ORDER_BY_ID' })
    }
}

export const orderByName = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'STORE_LIST_ORDER_BY_NAME' })
    }
}

export const orderByTakeback = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'STORE_LIST_ORDER_BY_TAKEBACK' })
    }
}