import axios from 'axios'

const STORES_LIST_URL = 'http://challenge.getmore.com.br/stores'

export const getStoreDetails = (id) => {
    return (dispatch, getState) => {
        const request = axios.get(`${STORES_LIST_URL}/${id}`)
            .then(resp => dispatch({ type: 'STORE_DETAILS_UPDATED', payload: resp.data }))
    }
}