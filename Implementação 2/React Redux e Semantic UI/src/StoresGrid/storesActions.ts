import axios from 'axios'

const STORES_LIST_URL = 'http://challenge.getmore.com.br/stores'

export const getStoresList = () => {
    return (dispatch, getState) => {
        const request = axios.get(STORES_LIST_URL).then(resp => dispatch({ type: 'STORES_UPDATED', payload: resp.data }))
    }
}