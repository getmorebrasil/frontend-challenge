import * as React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


class StoreCard extends React.Component<any, any> {
    constructor(props) {
        super(props)
        this.parseTakeback = this.parseTakeback.bind(this)
    }

    parseTakeback() {
        return this.props.loja.takeback ? this.props.loja.takeback.toFixed(2) + '% de takeback' : ''
    }

    render() {
        return (
            <Card raised={true} >
                <Image src={this.props.loja.image_blob} size='huge' />
                <Card.Content textAlign='center'>
                    <Card.Header>{this.props.loja.name}</Card.Header>
                    <Card.Description>{this.parseTakeback()}</Card.Description>
                </Card.Content>
            </Card>
        )
    }
}
export default (StoreCard)
