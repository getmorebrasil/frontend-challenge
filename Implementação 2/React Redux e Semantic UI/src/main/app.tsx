import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PageHeader from '../pageHeader'
import StoresGrid from '../StoresGrid/storesGrid'
import { Grid } from 'semantic-ui-react';


class App extends React.Component<any, any> {
    render() {
        return (
            < Grid divided='vertically'>
                <Grid.Column>
                    <PageHeader />
                </Grid.Column>
                <Grid.Column style={{marginTop: '10em'}}>
                    <StoresGrid />
                </Grid.Column>
            </Grid >
        )
    }
}
export default App