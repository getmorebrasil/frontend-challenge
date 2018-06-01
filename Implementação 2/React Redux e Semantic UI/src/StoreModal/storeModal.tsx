import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import { closeModal } from '../StoreModal/storeModalActions'

const modalStyle = { marginTop: '6em' }


class StoreModal extends React.Component<any, any> {
    constructor(props) {
        super(props)
        this.handleCloseModal = this.handleCloseModal.bind(this)
    }

    handleCloseModal() {
        this.props.closeModal()
    }

    render() {
        return (
            <Modal 
              open={this.props.isOpen} 
              style={modalStyle} 
              size={'tiny'}
              closeOnDimmerClick >
                <Modal.Header>{this.props.store.name}</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
                    <Modal.Description>
                        <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button red onClick={this.handleCloseModal}>
                        Fechar <Icon name='close' />
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}
const mapStateToProps = (state: any) => ({ isOpen: state.storeModal.isOpen, store: state.storeModal.store })
const mapDispatchToProps = (dispatch: any) => bindActionCreators({closeModal}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(StoreModal)