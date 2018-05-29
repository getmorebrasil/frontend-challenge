import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PageHeader from '../pageHeader'
import StoresGrid from '../StoresGrid/storesGrid'
import { Grid } from 'semantic-ui-react';


class App extends React.Component<any, any> {
    render() {
        return (
            <Grid>
                {/* <PageHeader /> */}
                <StoresGrid />
            </Grid>
                
        )
    }
}
export default App
