import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PageHeader from '../pageHeader'


class App extends React.Component<any, any> {
    render() {
	    return (
            <PageHeader />
        )
    }
}
export default App
