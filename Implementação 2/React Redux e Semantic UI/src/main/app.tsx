import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PageHeader from '../pageHeader'
import StoresGrid from '../StoresGrid/storesGrid'
import StoreModal from '../StoreModal/storeModal'
import UpperRow from '../UpperRow/upperRow'


class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <PageHeader />
                <UpperRow />
                <StoresGrid />
                <StoreModal />
            </div>
        )
    }
}
export default App