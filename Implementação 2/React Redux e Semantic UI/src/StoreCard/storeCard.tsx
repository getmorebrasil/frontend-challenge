import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Card, Icon, Image } from 'semantic-ui-react'


class StoreCard extends React.Component<any, any> {
    constructor(props) {
        super(props)
        this.parseTakeback = this.parseTakeback.bind(this)
    }

    parseTakeback() {
        return this.props.store.takeback ? this.props.store.takeback.toFixed(2) + '% de takeback' : ''
    }

    render() {
        return (
            <Card raised={true} >
                <Image src={this.props.store.image_blob} size='huge' />
                <Card.Content textAlign='center'>
                    <Card.Header>{this.props.store.name}</Card.Header>
                    <Card.Description>{this.parseTakeback()}</Card.Description>
                </Card.Content>
            </Card>
        )
    }
}

export default StoreCard
