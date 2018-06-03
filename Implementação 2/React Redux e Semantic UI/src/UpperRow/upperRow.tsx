import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { orderByID, orderByName, orderByTakeback } from './upperRowActions'
import { Container, Dropdown, Grid, Statistic } from 'semantic-ui-react'

const gridStyle = { marginTop: '5em', marginLeft: '2.5em', marginRight: '2.5em' }
const numberOfColumnsInARow = 2

class UpperRow extends React.Component<any, any> {
    constructor(props) {
        super(props)
        this.handleClickID = this.handleClickID.bind(this)
        this.handleClickName = this.handleClickName.bind(this)
        this.handleClickTakeback = this.handleClickTakeback.bind(this)
    }

    handleClickID() {
        this.props.orderByID()
    }
    handleClickName() {
        this.props.orderByName()
    }
    handleClickTakeback() {
        this.props.orderByTakeback()
    }

    render() {
        return (
            <Container>
                <Grid doubling columns={numberOfColumnsInARow} style={gridStyle} >
                    <Grid.Column>
                        <Statistic label='Lojas encontradas' value={this.props.amount} size='small' horizontal />
                    </Grid.Column>
                    <Grid.Column textAlign='right'>
                        <Dropdown placeholder='Ordenar por:' selection >
                            <Dropdown.Menu>
                                <Dropdown.Header>Ordenar por:</Dropdown.Header>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={ this.handleClickID }>ID</Dropdown.Item>
                                <Dropdown.Item onClick={ this.handleClickName }>Nome</Dropdown.Item>
                                <Dropdown.Item onClick={ this.handleClickTakeback }>Takeback</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}
const mapStateToProps = (state: any) => ({ amount: state.upperRow.amount })
const mapDispatchToProps = dispatch => bindActionCreators({ orderByID, orderByName, orderByTakeback }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(UpperRow)