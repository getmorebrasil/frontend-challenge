import React from 'react'
import DropdownButton from '../myComponents/dropdownButton'
import AmountLabel from './amountLabel'

export default props => (
    <div className="py-4">
        <div className="container">
            <div className="row" id="upperRow">
                <div className="col-md-6">
                    <AmountLabel storesAmount={ props.storesAmount }/>
                </div>
                <div className="col-md-6 text-right">
                    <DropdownButton />
                </div>
            </div>
        </div>
    </div>
)