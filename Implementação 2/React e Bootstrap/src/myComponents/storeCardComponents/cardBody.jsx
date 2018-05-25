import React from 'react'
import CardTitle from './cardTitle'
import CardText from './cardText'

export default props => (
    <div className='card-body text-center' >
        <CardTitle store={props.store} />
        <CardText store={props.store} />
    </div>
)