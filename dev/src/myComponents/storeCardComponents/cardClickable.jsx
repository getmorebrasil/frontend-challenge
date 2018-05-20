import React from 'react'
import CardBody from './cardBody'
import CardImage from './cardImage'

export default props => (
    <a  href='javascript:void(0);' 
        id={ props.store.id } 
        onClick={ props.handleStoreClick }  >

        <CardImage store={props.store} />
        <CardBody store={props.store} />
    </a>
)