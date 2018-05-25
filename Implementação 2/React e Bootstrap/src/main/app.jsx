import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import React from 'react'
import Header from '../myComponents/header'
import UpperRow from '../myComponents/upperRow'
import StoresGrid from '../myComponents/storesGrid'

const URL = 'http://challenge.getmore.com.br/stores'


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { storesList: [] }
        this.getStoresList = this.getStoresList.bind(this)
    }

    componentDidMount() {
        this.getStoresList()
    }

    getStoresList() {
        axios.get(URL).then(resp => this.setState({ storesList: resp.data }))
    }

    render() {
        return (
            <div>
                <Header />
                <UpperRow storesAmount={this.state.storesList.length} />
                <StoresGrid storesList={this.state.storesList} />
            </div>
        )
    }
}