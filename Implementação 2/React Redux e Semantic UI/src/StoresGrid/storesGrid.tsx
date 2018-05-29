import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid } from 'semantic-ui-react';
import StoreCard from '../StoreCard/storeCard'
import { getStoresList } from './storesGridActions'

const headerStyle = { marginTop: '1em', marginLeft: '2.5em' }


class StoresGrid extends React.Component<any, any> {
    componentDidMount() {
        this.props.getStoresList()
    }

    generateStoreCards() {
        var rows = []
        for (var i=0; i<this.props.storesList.length; i++) {
            rows.push(<StoreCard key={i} store={this.props.storesList[i]} />);
        }
        return rows
    }

    render() {
        return (
            <Grid >
                { this.generateStoreCards() }
            </Grid>
        )
    }
}

const mapStateToProps = state => ({ storesList: state.storesGrid.storesList })
const mapDispatchToProps = dispatch => bindActionCreators({ getStoresList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(StoresGrid)