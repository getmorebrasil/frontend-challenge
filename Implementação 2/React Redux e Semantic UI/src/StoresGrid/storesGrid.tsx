import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Container } from 'semantic-ui-react';
import StoreCard from '../StoreCard/storeCard'
import { getStoresList } from './storesGridActions'

const gridStyle = { marginTop: '6em', marginLeft: '2.5em', marginRight: '2.5em' }
const numberOfColumnsInARow = 5
let StoreCardAny = StoreCard as any

class StoresGrid extends React.Component<any, any> {
    componentWillMount() {
        this.props.getStoresList()
    }

    generateStoreCards() {
        var rows = []
        for (var i = 0; i < this.props.storesList.length; i++) {
            rows.push(<Grid.Column key={i}><StoreCardAny loja={this.props.storesList[i]} /></Grid.Column>);
        }
        return rows
    }

    render() {
        return (
            <Container>
                <Grid
                    doubling
                    columns={numberOfColumnsInARow}
                    style={gridStyle}>
                    {this.generateStoreCards()}
                </Grid>
            </Container>
        )
    }
}

const mapStateToProps = state => ({ storesList: state.storesGrid.storesList })
const mapDispatchToProps = dispatch => bindActionCreators({ getStoresList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(StoresGrid)