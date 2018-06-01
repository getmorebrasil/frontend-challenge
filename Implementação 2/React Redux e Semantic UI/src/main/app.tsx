import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PageHeader from '../pageHeader'
import StoresGrid from '../StoresGrid/storesGrid'
import { Grid } from 'semantic-ui-react';


class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <PageHeader />
                <StoresGrid />
            </div>
        )
    }
}
export default App