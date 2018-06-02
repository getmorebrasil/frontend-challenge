import * as React from 'react'
import { Grid } from 'semantic-ui-react'

const modalHeaderStyle = { marginLeft: '0.3em', marginRight: '0.3em' }

export default class ModalHeader extends React.Component<any, any> {
    render() {
        return (
            <Grid doubling columns={2} style={modalHeaderStyle}>
                <Grid.Column textAlign={'left'}>{this.props.store.name}</Grid.Column>
                <Grid.Column textAlign={'right'}>{`Rating: ${this.props.store.rating}`}</Grid.Column>
            </Grid>
        )
    }
}