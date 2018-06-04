import { sortByID, sortByName, sortByTakeback } from '../sortBy'

export const sortStoresByID = () => {
    return (dispatch, getState) => {
        const storesList = [...getState().storesGrid.storesList]
        const storesSorted = sortByID(storesList)
        dispatch({ type: 'STORES_GRID_UPDATED', payload: storesSorted })
    }
}

export const sortStoresByName = () => {
    return (dispatch, getState) => {
        const storesList = [...getState().storesGrid.storesList]
        const storesSorted = sortByName(storesList)
        dispatch({ type: 'STORES_GRID_UPDATED', payload: storesSorted })
    }
}

export const sortStoresByTakeback = () => {
    return (dispatch, getState) => {
        const storesList = [...getState().storesGrid.storesList]
        const storesSorted = sortByTakeback(storesList)
        dispatch({ type: 'STORES_GRID_UPDATED', payload: storesSorted })
    }
}