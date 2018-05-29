import '../semantic/dist/semantic.min.css';

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import * as promise from 'redux-promise'
import thunk from 'redux-thunk'

import App from './main/app'
import reducers from './main/reducers'

const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__
    && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
export const store = applyMiddleware(thunk, promise)(createStore)(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
    	<App/>
    </Provider>
, document.getElementById('root'))
