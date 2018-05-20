import React from 'react'

export default props => (
    <p className='card-text text-dark'>
        {props.store.takeback.toFixed(2) + '% de Takeback'}
    </p>
)