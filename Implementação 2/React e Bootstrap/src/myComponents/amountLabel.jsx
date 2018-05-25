import React from 'react'


export default props => {
    const getAmountLabel = (storesAmount) => {
        if(storesAmount === 0) {
            return 'Nenhuma loja foi encontrada.'
        } else if(storesAmount === 1) {
            return '1 loja encontrada.'
        } else {
            return `${storesAmount} lojas encontradas.`
        }
    }

    return (
        <p className="mx-2 py-0" >
            { getAmountLabel(props.storesAmount) }
        </p>
    )
}