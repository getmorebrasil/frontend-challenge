import React from 'react'
import CardClickable from './cardClickable'


export default class StoreCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { store: props.store }
        this.handleStoreClick = this.handleStoreClick.bind(this)
    }

    handleStoreClick() {
        // Todo:
        //     - Get store details
        //     - Show store details
    }

    render() {
        return (
            <div className='col-md-3 px-4 py-2'>
                <div className='card box-shadow'>
                    <CardClickable store={ this.state.store } handleStoreClick={this.handleStoreClick} />
                </div>
            </div >
        )
    }
}
