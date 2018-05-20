import React from 'react'
import StoreCard from './storeCardComponents/storeCard'


export default class StoresGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {storesList: props.storesList}
    }

    generateStoreCards() {
        var rows = []
        for (var i=0; i<this.props.storesList.length; i++) {
            rows.push(<StoreCard key={i} store={ this.props.storesList[i] } />);
        }
        return rows
    }

    render() {
        return (
            <div className="py-0">
                <div className="container">
                    <div className="row" id="storesGrid">
                        { this.generateStoreCards() }
                    </div>
                </div>
            </div>
        )
    }
}

