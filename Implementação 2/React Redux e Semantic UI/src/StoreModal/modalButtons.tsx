import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Container } from 'semantic-ui-react'
import { closeModal } from '../StoreModal/storeModalActions'


class ModalButtons extends React.Component<any, any> {
    constructor(props) {
        super(props)
        this.handleCloseModal = this.handleCloseModal.bind(this)
    }

    handleCloseModal() {
        this.props.closeModal()
    }
    
    render() {
        return (
            <Container fluid textAlign='center' >
                <Button.Group>
                    <Button icon='close' labelPosition='left' content='Fechar a loja' onClick={this.handleCloseModal} />
                    <Button.Or text='ou' />
                    <Button primary icon='shop' labelPosition='right' content='Visitar a loja'
                        href={this.props.url} target='_blank' />
                </Button.Group>
            </Container>
        )
    }
}
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ closeModal }, dispatch)
export default connect(null, mapDispatchToProps)(ModalButtons)