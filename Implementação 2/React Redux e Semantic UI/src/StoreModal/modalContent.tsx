import * as React from 'react'
import { Container, Grid, Image, List } from 'semantic-ui-react'

const contentStyle = { marginLeft: '3em' }

export default class ModalContent extends React.Component<any, any> {
    render() {
        return (
            <Grid doubling columns={2} >
                <Grid.Column>
                    <Image wrapped fluid size='medium' src={this.props.store.image_blob} />
                </Grid.Column>
                <Grid.Column>
                    <List bulleted items={this.props.store.category} size={'large'} style={contentStyle} />
                </Grid.Column>
            </Grid>
        )
    }
}