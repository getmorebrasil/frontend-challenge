import React from 'react'

export default props => (
    <img 
        className='card-img-top px-4 py-2' 
        src={ props.store.image_blob } >
    </img>
)