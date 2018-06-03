import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Container, Dropdown, Grid, Statistic } from 'semantic-ui-react'

const gridStyle = { marginTop: '5em', marginLeft: '2.5em', marginRight: '2.5em' }
const numberOfColumnsInARow = 2

class UpperRow extends React.Component<any, any> {
    render() {
        return (
            <Container>
                <Grid doubling columns={numberOfColumnsInARow} style={gridStyle} verticalAlign='middle' >
                    <Grid.Column>
                        <Statistic label='Lojas encontradas' value={this.props.amount} size='small' horizontal />
                    </Grid.Column>
                    <Grid.Column textAlign='right'>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}
const mapStateToProps = (state: any) => ({ amount: state.upperRow.amount })
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(UpperRow)