const INITIAL_STATE = {
    isOpen: false, store: {
                    id: 0,
                    name: 'Nome da loja',
                    takeback: 4.017,
                    rating: 4.8,
                    url: 'http://www.google.com.br',
                    image_blob: '',
                    category: ['Teste1', 'Teste2', 'Teste3', 'Teste4', 'Teste5', 'Teste6']
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'STORE_DETAILS_UPDATED':
            return { isOpen: true, store: action.payload }
        case 'MODAL_CLOSED':
            return { ...state, isOpen: false }
        default:
            return state
    }
}