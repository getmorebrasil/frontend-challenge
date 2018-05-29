import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getStoresList } from './storesActions'
// import { Button } from 'semantic-ui-react';


class StoresGrid extends React.Component<any, any> {
    componentDidMount() {
        this.props.getStoresList()
    }
    render() {
        return (
            <div></div>
        )
    }
}

const mapStateToProps = state => ({ storesList: state.stores.storesList })
const mapDispatchToProps = dispatch => bindActionCreators({getStoresList}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(StoresGrid)