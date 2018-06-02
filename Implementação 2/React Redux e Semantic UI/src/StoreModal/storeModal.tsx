import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Header, Modal } from 'semantic-ui-react'
import { closeModal } from '../StoreModal/storeModalActions'
import ModalButtons from './modalButtons'
import ModalContent from './modalContent'
import ModalHeader from './modalHeader'

const modalStyle = {
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto'
}
let ModalButtonsAny = ModalButtons as any


class StoreModal extends React.Component<any, any> {
    render() {
        return (
            <Modal open={this.props.isOpen} style={modalStyle} size={'tiny'} >
                <Modal.Header >
                    <ModalHeader store={this.props.store} />
                </Modal.Header>
                <Modal.Content image>
                    <ModalContent store={this.props.store} />
                </Modal.Content>
                <Modal.Actions >
                    <ModalButtonsAny url={this.props.store.url} />
                </Modal.Actions>
            </Modal>
        )
    }
}
const mapStateToProps = (state: any) => ({ isOpen: state.storeModal.isOpen, store: state.storeModal.store })
const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(StoreModal)