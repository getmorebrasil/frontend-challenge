import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getStoreDetails } from '../StoreCard/storeCardActions'
import { Card, Icon, Image } from 'semantic-ui-react'


class StoreCard extends React.Component<any, any> {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.parseTakeback = this.parseTakeback.bind(this)
    }

    handleClick() {
        const { id } = this.props.loja 
        this.props.getStoreDetails(id)
    }

    parseTakeback() {
        return this.props.loja.takeback ? this.props.loja.takeback.toFixed(2) + '% de takeback' : ''
    }

    render() {
        return (
            <Card raised={true} onClick={this.handleClick}>
                <Image src={this.props.loja.image_blob} size='huge' />
                <Card.Content textAlign='center'>
                    <Card.Header>{this.props.loja.name}</Card.Header>
                    <Card.Description>{this.parseTakeback()}</Card.Description>
                </Card.Content>
            </Card>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ getStoreDetails }, dispatch)
export default connect(null, mapDispatchToProps)(StoreCard)
